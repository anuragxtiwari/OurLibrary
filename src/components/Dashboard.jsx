import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { getDocs, collection, query, where, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

function Dashboard() {
  const { user } = useAuth(); // Using the custom AuthContext hook for user details
  const [userData, setUserData] = useState(null);
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [borrowedBooks, setBorrowedBooks] = useState([]);
  const [dueBooks, setDueBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetchUserDetails();
      fetchData();
    }
  }, [user]);

  const fetchUserDetails = async () => {
    try {
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        setUserData(userDoc.data());
      }
    } catch (error) {
      console.error("Error fetching user details: ", error);
    }
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const q = query(collection(db, "books"));
      const querySnapshot = await getDocs(q);
      setBooks(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      const borrowedQ = query(collection(db, "borrowedBooks"), where("userId", "==", user.uid));
      const borrowedSnapshot = await getDocs(borrowedQ);
      setBorrowedBooks(borrowedSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

      fetchUserBooks();
    } catch (err) {
      console.error("Failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserBooks = async () => {
    try {
      setLoading(true);
      // Fetching issued books
      const issuedQuery = query(collection(db, "transactions"), where("userId", "==", user.uid));
      const issuedBooksSnapshot = await getDocs(issuedQuery);
      const issuedBooksData = issuedBooksSnapshot.docs.map((doc) => doc.data());

      // Fetching overdue books
      const dueQuery = query(
        collection(db, "transactions"),
        where("userId", "==", user.uid),
        where("dueDate", "<", new Date()),
        where("returned", "==", false)
      );
      const dueBooksSnapshot = await getDocs(dueQuery);
      const dueBooksData = dueBooksSnapshot.docs.map((doc) => doc.data());

      setIssuedBooks(issuedBooksData);
      setDueBooks(dueBooksData);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const handlePasswordReset = async () => {
    try {
      await sendPasswordResetEmail(auth, user.email);
      alert("Password reset email sent!");
    } catch (error) {
      alert(`Error resetting password: ${error.message}`);
    }
  };

  const borrowBook = async (bookId) => {
    try {
      await addDoc(collection(db, "transactions"), {
        bookId: bookId,
        userId: user.uid,
        issueDate: new Date().toISOString(),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
        returned: false,
      });
      alert("Book borrowed successfully!");
    } catch (error) {
      console.error("Error borrowing book:", error);
    }
  };

  const returnBook = async (transactionId) => {
    try {
      const transactionRef = doc(db, "transactions", transactionId);
      await updateDoc(transactionRef, { returned: true });
      alert("Book returned successfully!");
    } catch (error) {
      console.error("Error returning book:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="text-lg font-semibold mb-4">Loading...</div>
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        <h1>User Dashboard!</h1>
        
        <div className="dash-navbar">
          <div>
            <h3>Welcome back, {userData ? userData.name : "User"}!</h3>
            <p>Email: {user.email}</p>
          </div>
          <div className="buttons">
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handlePasswordReset}>Reset Password</button>
          </div>
        </div>
      
        <div className="searchbar">
          <h3>Search your favourite book here:</h3>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="available-section">
          <h3>Available Books</h3>
          <div className="books-list">
          <ul>
            {books.length > 0 ? (
              books
                .filter((book) =>
                  book.title.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((book, index) => (
                  <li key={index}>
                    <h4>{book.title}</h4>
                    <p>Author: {book.author}</p>
                    <p>Published on: {book.publishedDate}</p>
                    <button onClick={() => borrowBook(book.id)}>Borrow</button>
                  </li>
                ))
            ) : (
              <p>No books available.</p>
            )}
          </ul>
          </div>
        </div>

        <div className="issued-section">
          <h3>Issued Books</h3>
          <div className="books-list">
            <ul>
              {issuedBooks.length > 0 ? (
                issuedBooks.map((book, index) => (
                  <li key={index}>
                    <h4>{book.title}</h4>
                    <p>Author: {book.author}</p>
                    <p>Issued on: {book.issueDate}</p>
                    <p>Due date: {book.dueDate}</p>
                    <button onClick={() => returnBook(book.id)}>Return</button>
                  </li>
                ))
              ) : (
                <p>No books issued.</p>
              )}
            </ul>
          </div>
        </div>

        <div className="due-section">
          <h3>Due Books</h3>
          <div className="books-list">
            <ul>
              {dueBooks.length > 0 ? (
                dueBooks.map((book, index) => (
                  <li key={index} >
                    <h4>{book.title}</h4>
                    <p>Author: {book.author}</p>
                    <p>Due on: {book.dueDate}</p>
                  </li>
                ))
              ) : (
                <p>No overdue books.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;