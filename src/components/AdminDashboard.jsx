import React, { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { getDocs, collection, query, addDoc, deleteDoc, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const { user } = useAuth();
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", publishedDate: "", publisher: "" });
  const [loading, setLoading] = useState(true);
  const [showManageUsers, setShowManageUsers] = useState(false);
  const [showManageBooks, setShowManageBooks] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const booksQuery = query(collection(db, "books"));
        const booksSnapshot = await getDocs(booksQuery);
        setBooks(booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        const usersQuery = query(collection(db, "users"));
        const usersSnapshot = await getDocs(usersQuery);
        setUsers(usersSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));

        const issuedBooksQuery = query(collection(db, "transactions"));
        const issuedBooksSnapshot = await getDocs(issuedBooksQuery);
        setIssuedBooks(issuedBooksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const checkAdmin = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists() && userDoc.data().role !== "admin") {
          navigate("/"); // Redirect to home page if not admin
        }
      } else {
        navigate("/login"); // Redirect to login if not authenticated
      }
    };

    checkAdmin();
  }, [user, navigate]);

  const handleAddBook = async () => {
    try {
      await addDoc(collection(db, "books"), newBook);
      alert("Book added successfully!");
      setNewBook({ title: "", author: "", publishedDate: "", publisher: "" });
      // Refresh books list
      const booksSnapshot = await getDocs(query(collection(db, "books")));
      setBooks(booksSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    } catch (error) {
      console.error("Error adding book:", error);
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

  const toggleManageUsers = () => {
    setShowManageUsers(!showManageUsers);
    setShowManageBooks(false); // Hide Manage Books when Manage Users is shown
  };

  const toggleManageBooks = () => {
    setShowManageBooks(!showManageBooks);
    setShowManageUsers(false); // Hide Manage Users when Manage Books is shown
  };

  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers(users.filter((user) => user.id !== userId));
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const deleteBook = async (bookId) => {
    try {
      await deleteDoc(doc(db, "books", bookId));
      setBooks(books.filter((book) => book.id !== bookId));
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error);
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
    <div className="admin-dashboard-page">
      <div className="admin-dashboard-container">
        <h1>Admin Dashboard</h1>

        <div className="dash-navbar">
          <div>
            <h3>Welcome back, {user?.displayName || "Admin"}!</h3>
            <p>Email: {user?.email}</p>
          </div>
          <button onClick={handleLogout}>Logout</button>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h3>Total Users</h3>
            <p>{users.length}</p>
          </div>
          <div className="stat-card">
            <h3>Total Books</h3>
            <p>{books.length}</p>
          </div>
          <div className="stat-card">
            <h3>Issued Books</h3>
            <p>{issuedBooks.length}</p>
          </div>
        </div>

        <div className="admin-actions">
          <button onClick={toggleManageUsers}>
            {showManageUsers ? "Hide Users" : "Manage Users"}
          </button>
          <button onClick={toggleManageBooks}>
            {showManageBooks ? "Hide Books" : "Manage Books"}
          </button>
        </div>

        {/* Manage Users Section */}
        {showManageUsers && (
          <div className="manage-users-section">
            <h2>Manage Users</h2>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name || "N/A"}</td>
                      <td>{user.email}</td>
                      <td>
                        <button onClick={() => deleteUser(user.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Manage Books Section */}
        {showManageBooks && (
          <div className="manage-books-section">
            <h2>Manage Books</h2>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book.id}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>
                        <button onClick={() => deleteBook(book.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="add-book-form">
              <input
                type="text"
                placeholder="Title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
              />
              <input
                type="text"
                placeholder="Author"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
              />
              <input
                type="date"
                value={newBook.publishedDate}
                onChange={(e) => setNewBook({ ...newBook, publishedDate: e.target.value })}
              />
              <input
                type="text"
                placeholder="Publisher"
                value={newBook.publisher}
                onChange={(e) => setNewBook({ ...newBook, publisher: e.target.value })}
              />
              <button onClick={handleAddBook}>Add Book</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;