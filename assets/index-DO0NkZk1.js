function vw(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Oy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var id={exports:{}},Ca={},sd={exports:{}},Re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function Ew(){if(Xm)return Re;Xm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function k(O){return O===null||typeof O!="object"?null:(O=T&&O[T]||O["@@iterator"],typeof O=="function"?O:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},$=Object.assign,q={};function F(O,H,fe){this.props=O,this.context=H,this.refs=q,this.updater=fe||U}F.prototype.isReactComponent={},F.prototype.setState=function(O,H){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,H,"setState")},F.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function le(){}le.prototype=F.prototype;function ce(O,H,fe){this.props=O,this.context=H,this.refs=q,this.updater=fe||U}var de=ce.prototype=new le;de.constructor=ce,$(de,F.prototype),de.isPureReactComponent=!0;var ve=Array.isArray,Le=Object.prototype.hasOwnProperty,te={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function I(O,H,fe){var Se,Ae={},xe=null,be=null;if(H!=null)for(Se in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(xe=""+H.key),H)Le.call(H,Se)&&!A.hasOwnProperty(Se)&&(Ae[Se]=H[Se]);var Ue=arguments.length-2;if(Ue===1)Ae.children=fe;else if(1<Ue){for(var $e=Array(Ue),_t=0;_t<Ue;_t++)$e[_t]=arguments[_t+2];Ae.children=$e}if(O&&O.defaultProps)for(Se in Ue=O.defaultProps,Ue)Ae[Se]===void 0&&(Ae[Se]=Ue[Se]);return{$$typeof:r,type:O,key:xe,ref:be,props:Ae,_owner:te.current}}function C(O,H){return{$$typeof:r,type:O.type,key:H,ref:O.ref,props:O.props,_owner:O._owner}}function N(O){return typeof O=="object"&&O!==null&&O.$$typeof===r}function D(O){var H={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(fe){return H[fe]})}var V=/\/+/g;function R(O,H){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):H.toString(36)}function tt(O,H,fe,Se,Ae){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var be=!1;if(O===null)be=!0;else switch(xe){case"string":case"number":be=!0;break;case"object":switch(O.$$typeof){case r:case e:be=!0}}if(be)return be=O,Ae=Ae(be),O=Se===""?"."+R(be,0):Se,ve(Ae)?(fe="",O!=null&&(fe=O.replace(V,"$&/")+"/"),tt(Ae,H,fe,"",function(_t){return _t})):Ae!=null&&(N(Ae)&&(Ae=C(Ae,fe+(!Ae.key||be&&be.key===Ae.key?"":(""+Ae.key).replace(V,"$&/")+"/")+O)),H.push(Ae)),1;if(be=0,Se=Se===""?".":Se+":",ve(O))for(var Ue=0;Ue<O.length;Ue++){xe=O[Ue];var $e=Se+R(xe,Ue);be+=tt(xe,H,fe,$e,Ae)}else if($e=k(O),typeof $e=="function")for(O=$e.call(O),Ue=0;!(xe=O.next()).done;)xe=xe.value,$e=Se+R(xe,Ue++),be+=tt(xe,H,fe,$e,Ae);else if(xe==="object")throw H=String(O),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function xt(O,H,fe){if(O==null)return O;var Se=[],Ae=0;return tt(O,Se,"","",function(xe){return H.call(fe,xe,Ae++)}),Se}function Dt(O){if(O._status===-1){var H=O._result;H=H(),H.then(function(fe){(O._status===0||O._status===-1)&&(O._status=1,O._result=fe)},function(fe){(O._status===0||O._status===-1)&&(O._status=2,O._result=fe)}),O._status===-1&&(O._status=0,O._result=H)}if(O._status===1)return O._result.default;throw O._result}var Be={current:null},ee={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:ee,ReactCurrentOwner:te};function re(){throw Error("act(...) is not supported in production builds of React.")}return Re.Children={map:xt,forEach:function(O,H,fe){xt(O,function(){H.apply(this,arguments)},fe)},count:function(O){var H=0;return xt(O,function(){H++}),H},toArray:function(O){return xt(O,function(H){return H})||[]},only:function(O){if(!N(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Re.Component=F,Re.Fragment=t,Re.Profiler=o,Re.PureComponent=ce,Re.StrictMode=s,Re.Suspense=g,Re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Re.act=re,Re.cloneElement=function(O,H,fe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=$({},O.props),Ae=O.key,xe=O.ref,be=O._owner;if(H!=null){if(H.ref!==void 0&&(xe=H.ref,be=te.current),H.key!==void 0&&(Ae=""+H.key),O.type&&O.type.defaultProps)var Ue=O.type.defaultProps;for($e in H)Le.call(H,$e)&&!A.hasOwnProperty($e)&&(Se[$e]=H[$e]===void 0&&Ue!==void 0?Ue[$e]:H[$e])}var $e=arguments.length-2;if($e===1)Se.children=fe;else if(1<$e){Ue=Array($e);for(var _t=0;_t<$e;_t++)Ue[_t]=arguments[_t+2];Se.children=Ue}return{$$typeof:r,type:O.type,key:Ae,ref:xe,props:Se,_owner:be}},Re.createContext=function(O){return O={$$typeof:h,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Re.createElement=I,Re.createFactory=function(O){var H=I.bind(null,O);return H.type=O,H},Re.createRef=function(){return{current:null}},Re.forwardRef=function(O){return{$$typeof:f,render:O}},Re.isValidElement=N,Re.lazy=function(O){return{$$typeof:E,_payload:{_status:-1,_result:O},_init:Dt}},Re.memo=function(O,H){return{$$typeof:_,type:O,compare:H===void 0?null:H}},Re.startTransition=function(O){var H=ee.transition;ee.transition={};try{O()}finally{ee.transition=H}},Re.unstable_act=re,Re.useCallback=function(O,H){return Be.current.useCallback(O,H)},Re.useContext=function(O){return Be.current.useContext(O)},Re.useDebugValue=function(){},Re.useDeferredValue=function(O){return Be.current.useDeferredValue(O)},Re.useEffect=function(O,H){return Be.current.useEffect(O,H)},Re.useId=function(){return Be.current.useId()},Re.useImperativeHandle=function(O,H,fe){return Be.current.useImperativeHandle(O,H,fe)},Re.useInsertionEffect=function(O,H){return Be.current.useInsertionEffect(O,H)},Re.useLayoutEffect=function(O,H){return Be.current.useLayoutEffect(O,H)},Re.useMemo=function(O,H){return Be.current.useMemo(O,H)},Re.useReducer=function(O,H,fe){return Be.current.useReducer(O,H,fe)},Re.useRef=function(O){return Be.current.useRef(O)},Re.useState=function(O){return Be.current.useState(O)},Re.useSyncExternalStore=function(O,H,fe){return Be.current.useSyncExternalStore(O,H,fe)},Re.useTransition=function(){return Be.current.useTransition()},Re.version="18.3.1",Re}var Jm;function Kd(){return Jm||(Jm=1,sd.exports=Ew()),sd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function ww(){if(Zm)return Ca;Zm=1;var r=Kd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,_){var E,T={},k=null,U=null;_!==void 0&&(k=""+_),g.key!==void 0&&(k=""+g.key),g.ref!==void 0&&(U=g.ref);for(E in g)s.call(g,E)&&!l.hasOwnProperty(E)&&(T[E]=g[E]);if(f&&f.defaultProps)for(E in g=f.defaultProps,g)T[E]===void 0&&(T[E]=g[E]);return{$$typeof:e,type:f,key:k,ref:U,props:T,_owner:o.current}}return Ca.Fragment=t,Ca.jsx=h,Ca.jsxs=h,Ca}var eg;function Tw(){return eg||(eg=1,id.exports=ww()),id.exports}var B=Tw(),Z=Kd();const Gd=Oy(Z),Iw=vw({__proto__:null,default:Gd},[Z]);var Cu={},od={exports:{}},Zt={},ad={exports:{}},ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function Sw(){return tg||(tg=1,function(r){function e(ee,me){var re=ee.length;ee.push(me);e:for(;0<re;){var O=re-1>>>1,H=ee[O];if(0<o(H,me))ee[O]=me,ee[re]=H,re=O;else break e}}function t(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var me=ee[0],re=ee.pop();if(re!==me){ee[0]=re;e:for(var O=0,H=ee.length,fe=H>>>1;O<fe;){var Se=2*(O+1)-1,Ae=ee[Se],xe=Se+1,be=ee[xe];if(0>o(Ae,re))xe<H&&0>o(be,Ae)?(ee[O]=be,ee[xe]=re,O=xe):(ee[O]=Ae,ee[Se]=re,O=Se);else if(xe<H&&0>o(be,re))ee[O]=be,ee[xe]=re,O=xe;else break e}}return me}function o(ee,me){var re=ee.sortIndex-me.sortIndex;return re!==0?re:ee.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();r.unstable_now=function(){return h.now()-f}}var g=[],_=[],E=1,T=null,k=3,U=!1,$=!1,q=!1,F=typeof setTimeout=="function"?setTimeout:null,le=typeof clearTimeout=="function"?clearTimeout:null,ce=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function de(ee){for(var me=t(_);me!==null;){if(me.callback===null)s(_);else if(me.startTime<=ee)s(_),me.sortIndex=me.expirationTime,e(g,me);else break;me=t(_)}}function ve(ee){if(q=!1,de(ee),!$)if(t(g)!==null)$=!0,Dt(Le);else{var me=t(_);me!==null&&Be(ve,me.startTime-ee)}}function Le(ee,me){$=!1,q&&(q=!1,le(I),I=-1),U=!0;var re=k;try{for(de(me),T=t(g);T!==null&&(!(T.expirationTime>me)||ee&&!D());){var O=T.callback;if(typeof O=="function"){T.callback=null,k=T.priorityLevel;var H=O(T.expirationTime<=me);me=r.unstable_now(),typeof H=="function"?T.callback=H:T===t(g)&&s(g),de(me)}else s(g);T=t(g)}if(T!==null)var fe=!0;else{var Se=t(_);Se!==null&&Be(ve,Se.startTime-me),fe=!1}return fe}finally{T=null,k=re,U=!1}}var te=!1,A=null,I=-1,C=5,N=-1;function D(){return!(r.unstable_now()-N<C)}function V(){if(A!==null){var ee=r.unstable_now();N=ee;var me=!0;try{me=A(!0,ee)}finally{me?R():(te=!1,A=null)}}else te=!1}var R;if(typeof ce=="function")R=function(){ce(V)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,xt=tt.port2;tt.port1.onmessage=V,R=function(){xt.postMessage(null)}}else R=function(){F(V,0)};function Dt(ee){A=ee,te||(te=!0,R())}function Be(ee,me){I=F(function(){ee(r.unstable_now())},me)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(ee){ee.callback=null},r.unstable_continueExecution=function(){$||U||($=!0,Dt(Le))},r.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<ee?Math.floor(1e3/ee):5},r.unstable_getCurrentPriorityLevel=function(){return k},r.unstable_getFirstCallbackNode=function(){return t(g)},r.unstable_next=function(ee){switch(k){case 1:case 2:case 3:var me=3;break;default:me=k}var re=k;k=me;try{return ee()}finally{k=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(ee,me){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var re=k;k=ee;try{return me()}finally{k=re}},r.unstable_scheduleCallback=function(ee,me,re){var O=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,ee){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=re+H,ee={id:E++,callback:me,priorityLevel:ee,startTime:re,expirationTime:H,sortIndex:-1},re>O?(ee.sortIndex=re,e(_,ee),t(g)===null&&ee===t(_)&&(q?(le(I),I=-1):q=!0,Be(ve,re-O))):(ee.sortIndex=H,e(g,ee),$||U||($=!0,Dt(Le))),ee},r.unstable_shouldYield=D,r.unstable_wrapCallback=function(ee){var me=k;return function(){var re=k;k=me;try{return ee.apply(this,arguments)}finally{k=re}}}}(ld)),ld}var ng;function Aw(){return ng||(ng=1,ad.exports=Sw()),ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rg;function Rw(){if(rg)return Zt;rg=1;var r=Kd(),e=Aw();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){h(n,i),h(n+"Capture",i)}function h(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function k(n){return g.call(T,n)?!0:g.call(E,n)?!1:_.test(n)?T[n]=!0:(E[n]=!0,!1)}function U(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function $(n,i,a,c){if(i===null||typeof i>"u"||U(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function q(n,i,a,c,d,m,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=v}var F={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){F[n]=new q(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];F[i]=new q(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){F[n]=new q(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){F[n]=new q(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){F[n]=new q(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){F[n]=new q(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){F[n]=new q(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){F[n]=new q(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){F[n]=new q(n,5,!1,n.toLowerCase(),null,!1,!1)});var le=/[\-:]([a-z])/g;function ce(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(le,ce);F[i]=new q(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(le,ce);F[i]=new q(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(le,ce);F[i]=new q(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){F[n]=new q(n,1,!1,n.toLowerCase(),null,!1,!1)}),F.xlinkHref=new q("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){F[n]=new q(n,1,!1,n.toLowerCase(),null,!0,!0)});function de(n,i,a,c){var d=F.hasOwnProperty(i)?F[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&($(i,a,d,c)&&(a=null),c||d===null?k(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var ve=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Le=Symbol.for("react.element"),te=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),D=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),tt=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),Dt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),ee=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,O;function H(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var fe=!1;function Se(n,i){if(!n||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(j){var c=j}Reflect.construct(n,[],i)}else{try{i.call()}catch(j){c=j}n.call(i.prototype)}else{try{throw Error()}catch(j){c=j}n()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),m=c.stack.split(`
`),v=d.length-1,S=m.length-1;1<=v&&0<=S&&d[v]!==m[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==m[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==m[S]){var P=`
`+d[v].replace(" at new "," at ");return n.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",n.displayName)),P}while(1<=v&&0<=S);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?H(n):""}function Ae(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case A:return"Fragment";case te:return"Portal";case C:return"Profiler";case I:return"StrictMode";case R:return"Suspense";case tt:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case xt:return i=n.displayName||null,i!==null?i:xe(n.type)||"Memo";case Dt:i=n._payload,n=n._init;try{return xe(n(i))}catch{}}return null}function be(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(i);case 8:return i===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function $e(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function _t(n){var i=$e(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,m.call(this,v)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ir(n){n._valueTracker||(n._valueTracker=_t(n))}function fs(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=$e(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Lr(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ci(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function ps(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ue(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Vo(n,i){i=i.checked,i!=null&&de(n,"checked",i,!1)}function Oo(n,i){Vo(n,i);var a=Ue(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?ms(n,i.type,a):i.hasOwnProperty("defaultValue")&&ms(n,i.type,Ue(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function dl(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function ms(n,i,a){(i!=="number"||Lr(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var sr=Array.isArray;function or(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ue(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Lo(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gs(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(sr(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ue(a)}}function ys(n,i){var a=Ue(i.value),c=Ue(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mo(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ct(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ct(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ar,bo=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ar=ar||document.createElement("div"),ar.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ar.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Mr(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Pi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ki=["Webkit","ms","Moz","O"];Object.keys(Pi).forEach(function(n){ki.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Pi[i]=Pi[n]})});function Uo(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Pi.hasOwnProperty(n)&&Pi[n]?(""+i).trim():i+"px"}function Fo(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=Uo(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var jo=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bo(n,i){if(i){if(jo[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function zo(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ni=null;function _s(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var vs=null,dn=null,jn=null;function Es(n){if(n=da(n)){if(typeof vs!="function")throw Error(t(280));var i=n.stateNode;i&&(i=zl(i),vs(n.stateNode,n.type,i))}}function Bn(n){dn?jn?jn.push(n):jn=[n]:dn=n}function $o(){if(dn){var n=dn,i=jn;if(jn=dn=null,Es(n),i)for(n=0;n<i.length;n++)Es(i[n])}}function xi(n,i){return n(i)}function qo(){}var lr=!1;function Wo(n,i,a){if(lr)return n(i,a);lr=!0;try{return xi(n,i,a)}finally{lr=!1,(dn!==null||jn!==null)&&(qo(),$o())}}function nt(n,i){var a=n.stateNode;if(a===null)return null;var c=zl(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ws=!1;if(f)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){ws=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{ws=!1}function Di(n,i,a,c,d,m,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{i.apply(a,j)}catch(Q){this.onError(Q)}}var Vi=!1,Ts=null,In=!1,Ho=null,Dc={onError:function(n){Vi=!0,Ts=n}};function Is(n,i,a,c,d,m,v,S,P){Vi=!1,Ts=null,Di.apply(Dc,arguments)}function fl(n,i,a,c,d,m,v,S,P){if(Is.apply(this,arguments),Vi){if(Vi){var j=Ts;Vi=!1,Ts=null}else throw Error(t(198));In||(In=!0,Ho=j)}}function Sn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Oi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function An(n){if(Sn(n)!==n)throw Error(t(188))}function pl(n){var i=n.alternate;if(!i){if(i=Sn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return An(d),n;if(m===c)return An(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=m;break}if(S===c){v=!0,c=d,a=m;break}S=S.sibling}if(!v){for(S=m.child;S;){if(S===a){v=!0,a=m,c=d;break}if(S===c){v=!0,c=m,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ko(n){return n=pl(n),n!==null?Ss(n):null}function Ss(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ss(n);if(i!==null)return i;n=n.sibling}return null}var As=e.unstable_scheduleCallback,Go=e.unstable_cancelCallback,ml=e.unstable_shouldYield,Vc=e.unstable_requestPaint,qe=e.unstable_now,gl=e.unstable_getCurrentPriorityLevel,Li=e.unstable_ImmediatePriority,br=e.unstable_UserBlockingPriority,fn=e.unstable_NormalPriority,Qo=e.unstable_LowPriority,yl=e.unstable_IdlePriority,Mi=null,rn=null;function _l(n){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Mi,n,void 0,(n.current.flags&128)===128)}catch{}}var Bt=Math.clz32?Math.clz32:El,Yo=Math.log,vl=Math.LN2;function El(n){return n>>>=0,n===0?32:31-(Yo(n)/vl|0)|0}var Rs=64,Cs=4194304;function Ur(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Ur(S):(m&=v,m!==0&&(c=Ur(m)))}else v=a&~d,v!==0?c=Ur(v):m!==0&&(c=Ur(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&d)&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Bt(i),d=1<<a,c|=n[a],i&=~d;return c}function Oc(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ur(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var v=31-Bt(m),S=1<<v,P=d[v];P===-1?(!(S&a)||S&c)&&(d[v]=Oc(S,i)):P<=i&&(n.expiredLanes|=S),m&=~S}}function sn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ui(){var n=Rs;return Rs<<=1,!(Rs&4194240)&&(Rs=64),n}function Fr(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function jr(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Bt(i),n[i]=a}function ze(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Bt(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Br(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Bt(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var ke=0;function zr(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var wl,Ps,Tl,Il,Sl,Xo=!1,zn=[],St=null,Rn=null,Cn=null,$r=new Map,pn=new Map,$n=[],Lc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Al(n,i){switch(n){case"focusin":case"focusout":St=null;break;case"dragenter":case"dragleave":Rn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":$r.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":pn.delete(i.pointerId)}}function Ht(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=da(i),i!==null&&Ps(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Mc(n,i,a,c,d){switch(i){case"focusin":return St=Ht(St,n,i,a,c,d),!0;case"dragenter":return Rn=Ht(Rn,n,i,a,c,d),!0;case"mouseover":return Cn=Ht(Cn,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return $r.set(m,Ht($r.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,pn.set(m,Ht(pn.get(m)||null,n,i,a,c,d)),!0}return!1}function Rl(n){var i=$i(n.target);if(i!==null){var a=Sn(i);if(a!==null){if(i=a.tag,i===13){if(i=Oi(a),i!==null){n.blockedOn=i,Sl(n.priority,function(){Tl(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=ks(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ni=c,a.target.dispatchEvent(c),Ni=null}else return i=da(a),i!==null&&Ps(i),n.blockedOn=a,!1;i.shift()}return!0}function Fi(n,i,a){cr(n)&&a.delete(i)}function Cl(){Xo=!1,St!==null&&cr(St)&&(St=null),Rn!==null&&cr(Rn)&&(Rn=null),Cn!==null&&cr(Cn)&&(Cn=null),$r.forEach(Fi),pn.forEach(Fi)}function Pn(n,i){n.blockedOn===i&&(n.blockedOn=null,Xo||(Xo=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Cl)))}function kn(n){function i(d){return Pn(d,n)}if(0<zn.length){Pn(zn[0],n);for(var a=1;a<zn.length;a++){var c=zn[a];c.blockedOn===n&&(c.blockedOn=null)}}for(St!==null&&Pn(St,n),Rn!==null&&Pn(Rn,n),Cn!==null&&Pn(Cn,n),$r.forEach(i),pn.forEach(i),a=0;a<$n.length;a++)c=$n[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<$n.length&&(a=$n[0],a.blockedOn===null);)Rl(a),a.blockedOn===null&&$n.shift()}var hr=ve.ReactCurrentBatchConfig,qr=!0;function Qe(n,i,a,c){var d=ke,m=hr.transition;hr.transition=null;try{ke=1,Jo(n,i,a,c)}finally{ke=d,hr.transition=m}}function bc(n,i,a,c){var d=ke,m=hr.transition;hr.transition=null;try{ke=4,Jo(n,i,a,c)}finally{ke=d,hr.transition=m}}function Jo(n,i,a,c){if(qr){var d=ks(n,i,a,c);if(d===null)Gc(n,i,c,ji,a),Al(n,c);else if(Mc(d,n,i,a,c))c.stopPropagation();else if(Al(n,c),i&4&&-1<Lc.indexOf(n)){for(;d!==null;){var m=da(d);if(m!==null&&wl(m),m=ks(n,i,a,c),m===null&&Gc(n,i,c,ji,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Gc(n,i,c,null,a)}}var ji=null;function ks(n,i,a,c){if(ji=null,n=_s(c),n=$i(n),n!==null)if(i=Sn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Oi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ji=n,null}function Zo(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gl()){case Li:return 1;case br:return 4;case fn:case Qo:return 16;case yl:return 536870912;default:return 16}default:return 16}}var on=null,Ns=null,Kt=null;function ea(){if(Kt)return Kt;var n,i=Ns,a=i.length,c,d="value"in on?on.value:on.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var v=a-n;for(c=1;c<=v&&i[a-c]===d[m-c];c++);return Kt=d.slice(n,1<c?1-c:void 0)}function xs(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function qn(){return!0}function ta(){return!1}function At(n){function i(a,c,d,m,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=v,this.currentTarget=null;for(var S in n)n.hasOwnProperty(S)&&(a=n[S],this[S]=a?a(m):m[S]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?qn:ta,this.isPropagationStopped=ta,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qn)},persist:function(){},isPersistent:qn}),i}var Nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ds=At(Nn),Wn=re({},Nn,{view:0,detail:0}),Uc=At(Wn),Vs,dr,Wr,Bi=re({},Wn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hn,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wr&&(Wr&&n.type==="mousemove"?(Vs=n.screenX-Wr.screenX,dr=n.screenY-Wr.screenY):dr=Vs=0,Wr=n),Vs)},movementY:function(n){return"movementY"in n?n.movementY:dr}}),Os=At(Bi),na=re({},Bi,{dataTransfer:0}),Pl=At(na),Ls=re({},Wn,{relatedTarget:0}),Ms=At(Ls),kl=re({},Nn,{animationName:0,elapsedTime:0,pseudoElement:0}),fr=At(kl),Nl=re({},Nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),xl=At(Nl),Dl=re({},Nn,{data:0}),ra=At(Dl),bs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ol(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vl[n])?!!i[n]:!1}function Hn(){return Ol}var u=re({},Wn,{key:function(n){if(n.key){var i=bs[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=xs(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zt[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hn,charCode:function(n){return n.type==="keypress"?xs(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?xs(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),p=At(u),y=re({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=At(y),L=re({},Wn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hn}),z=At(L),J=re({},Nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=At(J),dt=re({},Bi,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),De=At(dt),vt=[9,13,27,32],st=f&&"CompositionEvent"in window,mn=null;f&&"documentMode"in document&&(mn=document.documentMode);var an=f&&"TextEvent"in window&&!mn,zi=f&&(!st||mn&&8<mn&&11>=mn),Us=" ",Wf=!1;function Hf(n,i){switch(n){case"keyup":return vt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Fs=!1;function yE(n,i){switch(n){case"compositionend":return Kf(i);case"keypress":return i.which!==32?null:(Wf=!0,Us);case"textInput":return n=i.data,n===Us&&Wf?null:n;default:return null}}function _E(n,i){if(Fs)return n==="compositionend"||!st&&Hf(n,i)?(n=ea(),Kt=Ns=on=null,Fs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zi&&i.locale!=="ko"?null:i.data;default:return null}}var vE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!vE[n.type]:i==="textarea"}function Qf(n,i,a,c){Bn(c),i=Fl(i,"onChange"),0<i.length&&(a=new Ds("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ia=null,sa=null;function EE(n){fp(n,0)}function Ll(n){var i=qs(n);if(fs(i))return n}function wE(n,i){if(n==="change")return i}var Yf=!1;if(f){var Fc;if(f){var jc="oninput"in document;if(!jc){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),jc=typeof Xf.oninput=="function"}Fc=jc}else Fc=!1;Yf=Fc&&(!document.documentMode||9<document.documentMode)}function Jf(){ia&&(ia.detachEvent("onpropertychange",Zf),sa=ia=null)}function Zf(n){if(n.propertyName==="value"&&Ll(sa)){var i=[];Qf(i,sa,n,_s(n)),Wo(EE,i)}}function TE(n,i,a){n==="focusin"?(Jf(),ia=i,sa=a,ia.attachEvent("onpropertychange",Zf)):n==="focusout"&&Jf()}function IE(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ll(sa)}function SE(n,i){if(n==="click")return Ll(i)}function AE(n,i){if(n==="input"||n==="change")return Ll(i)}function RE(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xn=typeof Object.is=="function"?Object.is:RE;function oa(n,i){if(xn(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!g.call(i,d)||!xn(n[d],i[d]))return!1}return!0}function ep(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function tp(n,i){var a=ep(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ep(a)}}function np(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?np(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function rp(){for(var n=window,i=Lr();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Lr(n.document)}return i}function Bc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function CE(n){var i=rp(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&np(a.ownerDocument.documentElement,a)){if(c!==null&&Bc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=tp(a,m);var v=tp(a,c);d&&v&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==v.node||n.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var PE=f&&"documentMode"in document&&11>=document.documentMode,js=null,zc=null,aa=null,$c=!1;function ip(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;$c||js==null||js!==Lr(c)||(c=js,"selectionStart"in c&&Bc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),aa&&oa(aa,c)||(aa=c,c=Fl(zc,"onSelect"),0<c.length&&(i=new Ds("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=js)))}function Ml(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Bs={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionend:Ml("Transition","TransitionEnd")},qc={},sp={};f&&(sp=document.createElement("div").style,"AnimationEvent"in window||(delete Bs.animationend.animation,delete Bs.animationiteration.animation,delete Bs.animationstart.animation),"TransitionEvent"in window||delete Bs.transitionend.transition);function bl(n){if(qc[n])return qc[n];if(!Bs[n])return n;var i=Bs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in sp)return qc[n]=i[a];return n}var op=bl("animationend"),ap=bl("animationiteration"),lp=bl("animationstart"),up=bl("transitionend"),cp=new Map,hp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,i){cp.set(n,i),l(i,[n])}for(var Wc=0;Wc<hp.length;Wc++){var Hc=hp[Wc],kE=Hc.toLowerCase(),NE=Hc[0].toUpperCase()+Hc.slice(1);Hr(kE,"on"+NE)}Hr(op,"onAnimationEnd"),Hr(ap,"onAnimationIteration"),Hr(lp,"onAnimationStart"),Hr("dblclick","onDoubleClick"),Hr("focusin","onFocus"),Hr("focusout","onBlur"),Hr(up,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xE=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function dp(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,fl(c,i,void 0,n),n.currentTarget=null}function fp(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==m&&d.isPropagationStopped())break e;dp(d,S,j),m=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==m&&d.isPropagationStopped())break e;dp(d,S,j),m=P}}}if(In)throw n=Ho,In=!1,Ho=null,n}function He(n,i){var a=i[eh];a===void 0&&(a=i[eh]=new Set);var c=n+"__bubble";a.has(c)||(pp(i,n,2,!1),a.add(c))}function Kc(n,i,a){var c=0;i&&(c|=4),pp(a,n,c,i)}var Ul="_reactListening"+Math.random().toString(36).slice(2);function ua(n){if(!n[Ul]){n[Ul]=!0,s.forEach(function(a){a!=="selectionchange"&&(xE.has(a)||Kc(a,!1,n),Kc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ul]||(i[Ul]=!0,Kc("selectionchange",!1,i))}}function pp(n,i,a,c){switch(Zo(i)){case 1:var d=Qe;break;case 4:d=bc;break;default:d=Jo}a=d.bind(null,i,a,n),d=void 0,!ws||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Gc(n,i,a,c,d){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=$i(S),v===null)return;if(P=v.tag,P===5||P===6){c=m=v;continue e}S=S.parentNode}}c=c.return}Wo(function(){var j=m,Q=_s(a),Y=[];e:{var G=cp.get(n);if(G!==void 0){var ne=Ds,ae=n;switch(n){case"keypress":if(xs(a)===0)break e;case"keydown":case"keyup":ne=p;break;case"focusin":ae="focus",ne=Ms;break;case"focusout":ae="blur",ne=Ms;break;case"beforeblur":case"afterblur":ne=Ms;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ne=Os;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ne=Pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ne=z;break;case op:case ap:case lp:ne=fr;break;case up:ne=je;break;case"scroll":ne=Uc;break;case"wheel":ne=De;break;case"copy":case"cut":case"paste":ne=xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ne=w}var ue=(i&4)!==0,rt=!ue&&n==="scroll",M=ue?G!==null?G+"Capture":null:G;ue=[];for(var x=j,b;x!==null;){b=x;var X=b.stateNode;if(b.tag===5&&X!==null&&(b=X,M!==null&&(X=nt(x,M),X!=null&&ue.push(ca(x,X,b)))),rt)break;x=x.return}0<ue.length&&(G=new ne(G,ae,null,a,Q),Y.push({event:G,listeners:ue}))}}if(!(i&7)){e:{if(G=n==="mouseover"||n==="pointerover",ne=n==="mouseout"||n==="pointerout",G&&a!==Ni&&(ae=a.relatedTarget||a.fromElement)&&($i(ae)||ae[pr]))break e;if((ne||G)&&(G=Q.window===Q?Q:(G=Q.ownerDocument)?G.defaultView||G.parentWindow:window,ne?(ae=a.relatedTarget||a.toElement,ne=j,ae=ae?$i(ae):null,ae!==null&&(rt=Sn(ae),ae!==rt||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ne=null,ae=j),ne!==ae)){if(ue=Os,X="onMouseLeave",M="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(ue=w,X="onPointerLeave",M="onPointerEnter",x="pointer"),rt=ne==null?G:qs(ne),b=ae==null?G:qs(ae),G=new ue(X,x+"leave",ne,a,Q),G.target=rt,G.relatedTarget=b,X=null,$i(Q)===j&&(ue=new ue(M,x+"enter",ae,a,Q),ue.target=b,ue.relatedTarget=rt,X=ue),rt=X,ne&&ae)t:{for(ue=ne,M=ae,x=0,b=ue;b;b=zs(b))x++;for(b=0,X=M;X;X=zs(X))b++;for(;0<x-b;)ue=zs(ue),x--;for(;0<b-x;)M=zs(M),b--;for(;x--;){if(ue===M||M!==null&&ue===M.alternate)break t;ue=zs(ue),M=zs(M)}ue=null}else ue=null;ne!==null&&mp(Y,G,ne,ue,!1),ae!==null&&rt!==null&&mp(Y,rt,ae,ue,!0)}}e:{if(G=j?qs(j):window,ne=G.nodeName&&G.nodeName.toLowerCase(),ne==="select"||ne==="input"&&G.type==="file")var he=wE;else if(Gf(G))if(Yf)he=AE;else{he=IE;var ge=TE}else(ne=G.nodeName)&&ne.toLowerCase()==="input"&&(G.type==="checkbox"||G.type==="radio")&&(he=SE);if(he&&(he=he(n,j))){Qf(Y,he,a,Q);break e}ge&&ge(n,G,j),n==="focusout"&&(ge=G._wrapperState)&&ge.controlled&&G.type==="number"&&ms(G,"number",G.value)}switch(ge=j?qs(j):window,n){case"focusin":(Gf(ge)||ge.contentEditable==="true")&&(js=ge,zc=j,aa=null);break;case"focusout":aa=zc=js=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,ip(Y,a,Q);break;case"selectionchange":if(PE)break;case"keydown":case"keyup":ip(Y,a,Q)}var ye;if(st)e:{switch(n){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Fs?Hf(n,a)&&(Ee="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(zi&&a.locale!=="ko"&&(Fs||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Fs&&(ye=ea()):(on=Q,Ns="value"in on?on.value:on.textContent,Fs=!0)),ge=Fl(j,Ee),0<ge.length&&(Ee=new ra(Ee,n,null,a,Q),Y.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=Kf(a),ye!==null&&(Ee.data=ye)))),(ye=an?yE(n,a):_E(n,a))&&(j=Fl(j,"onBeforeInput"),0<j.length&&(Q=new ra("onBeforeInput","beforeinput",null,a,Q),Y.push({event:Q,listeners:j}),Q.data=ye))}fp(Y,i)})}function ca(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Fl(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=nt(n,a),m!=null&&c.unshift(ca(n,m,d)),m=nt(n,i),m!=null&&c.push(ca(n,m,d))),n=n.return}return c}function zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mp(n,i,a,c,d){for(var m=i._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&j!==null&&(S=j,d?(P=nt(a,m),P!=null&&v.unshift(ca(a,P,S))):d||(P=nt(a,m),P!=null&&v.push(ca(a,P,S)))),a=a.return}v.length!==0&&n.push({event:i,listeners:v})}var DE=/\r\n?/g,VE=/\u0000|\uFFFD/g;function gp(n){return(typeof n=="string"?n:""+n).replace(DE,`
`).replace(VE,"")}function jl(n,i,a){if(i=gp(i),gp(n)!==i&&a)throw Error(t(425))}function Bl(){}var Qc=null,Yc=null;function Xc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Jc=typeof setTimeout=="function"?setTimeout:void 0,OE=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,LE=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(n){return yp.resolve(null).then(n).catch(ME)}:Jc;function ME(n){setTimeout(function(){throw n})}function Zc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),kn(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);kn(i)}function Kr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _p(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Kn="__reactFiber$"+$s,ha="__reactProps$"+$s,pr="__reactContainer$"+$s,eh="__reactEvents$"+$s,bE="__reactListeners$"+$s,UE="__reactHandles$"+$s;function $i(n){var i=n[Kn];if(i)return i;for(var a=n.parentNode;a;){if(i=a[pr]||a[Kn]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_p(n);n!==null;){if(a=n[Kn])return a;n=_p(n)}return i}n=a,a=n.parentNode}return null}function da(n){return n=n[Kn]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function zl(n){return n[ha]||null}var th=[],Ws=-1;function Gr(n){return{current:n}}function Ke(n){0>Ws||(n.current=th[Ws],th[Ws]=null,Ws--)}function We(n,i){Ws++,th[Ws]=n.current,n.current=i}var Qr={},Vt=Gr(Qr),Gt=Gr(!1),qi=Qr;function Hs(n,i){var a=n.type.contextTypes;if(!a)return Qr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Qt(n){return n=n.childContextTypes,n!=null}function $l(){Ke(Gt),Ke(Vt)}function vp(n,i,a){if(Vt.current!==Qr)throw Error(t(168));We(Vt,i),We(Gt,a)}function Ep(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,be(n)||"Unknown",d));return re({},a,c)}function ql(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qr,qi=Vt.current,We(Vt,n),We(Gt,Gt.current),!0}function wp(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ep(n,i,qi),c.__reactInternalMemoizedMergedChildContext=n,Ke(Gt),Ke(Vt),We(Vt,n)):Ke(Gt),We(Gt,a)}var mr=null,Wl=!1,nh=!1;function Tp(n){mr===null?mr=[n]:mr.push(n)}function FE(n){Wl=!0,Tp(n)}function Yr(){if(!nh&&mr!==null){nh=!0;var n=0,i=ke;try{var a=mr;for(ke=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}mr=null,Wl=!1}catch(d){throw mr!==null&&(mr=mr.slice(n+1)),As(Li,Yr),d}finally{ke=i,nh=!1}}return null}var Ks=[],Gs=0,Hl=null,Kl=0,gn=[],yn=0,Wi=null,gr=1,yr="";function Hi(n,i){Ks[Gs++]=Kl,Ks[Gs++]=Hl,Hl=n,Kl=i}function Ip(n,i,a){gn[yn++]=gr,gn[yn++]=yr,gn[yn++]=Wi,Wi=n;var c=gr;n=yr;var d=32-Bt(c)-1;c&=~(1<<d),a+=1;var m=32-Bt(i)+d;if(30<m){var v=d-d%5;m=(c&(1<<v)-1).toString(32),c>>=v,d-=v,gr=1<<32-Bt(i)+d|a<<d|c,yr=m+n}else gr=1<<m|a<<d|c,yr=n}function rh(n){n.return!==null&&(Hi(n,1),Ip(n,1,0))}function ih(n){for(;n===Hl;)Hl=Ks[--Gs],Ks[Gs]=null,Kl=Ks[--Gs],Ks[Gs]=null;for(;n===Wi;)Wi=gn[--yn],gn[yn]=null,yr=gn[--yn],gn[yn]=null,gr=gn[--yn],gn[yn]=null}var ln=null,un=null,Ye=!1,Dn=null;function Sp(n,i){var a=wn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Ap(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ln=n,un=Kr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ln=n,un=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Wi!==null?{id:gr,overflow:yr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=wn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ln=n,un=null,!0):!1;default:return!1}}function sh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function oh(n){if(Ye){var i=un;if(i){var a=i;if(!Ap(n,i)){if(sh(n))throw Error(t(418));i=Kr(a.nextSibling);var c=ln;i&&Ap(n,i)?Sp(c,a):(n.flags=n.flags&-4097|2,Ye=!1,ln=n)}}else{if(sh(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ye=!1,ln=n}}}function Rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ln=n}function Gl(n){if(n!==ln)return!1;if(!Ye)return Rp(n),Ye=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Xc(n.type,n.memoizedProps)),i&&(i=un)){if(sh(n))throw Cp(),Error(t(418));for(;i;)Sp(n,i),i=Kr(i.nextSibling)}if(Rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){un=Kr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}un=null}}else un=ln?Kr(n.stateNode.nextSibling):null;return!0}function Cp(){for(var n=un;n;)n=Kr(n.nextSibling)}function Qs(){un=ln=null,Ye=!1}function ah(n){Dn===null?Dn=[n]:Dn.push(n)}var jE=ve.ReactCurrentBatchConfig;function fa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(v){var S=d.refs;v===null?delete S[m]:S[m]=v},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ql(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Pp(n){var i=n._init;return i(n._payload)}function kp(n){function i(M,x){if(n){var b=M.deletions;b===null?(M.deletions=[x],M.flags|=16):b.push(x)}}function a(M,x){if(!n)return null;for(;x!==null;)i(M,x),x=x.sibling;return null}function c(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function d(M,x){return M=ii(M,x),M.index=0,M.sibling=null,M}function m(M,x,b){return M.index=b,n?(b=M.alternate,b!==null?(b=b.index,b<x?(M.flags|=2,x):b):(M.flags|=2,x)):(M.flags|=1048576,x)}function v(M){return n&&M.alternate===null&&(M.flags|=2),M}function S(M,x,b,X){return x===null||x.tag!==6?(x=Jh(b,M.mode,X),x.return=M,x):(x=d(x,b),x.return=M,x)}function P(M,x,b,X){var he=b.type;return he===A?Q(M,x,b.props.children,X,b.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Pp(he)===x.type)?(X=d(x,b.props),X.ref=fa(M,x,b),X.return=M,X):(X=vu(b.type,b.key,b.props,null,M.mode,X),X.ref=fa(M,x,b),X.return=M,X)}function j(M,x,b,X){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Zh(b,M.mode,X),x.return=M,x):(x=d(x,b.children||[]),x.return=M,x)}function Q(M,x,b,X,he){return x===null||x.tag!==7?(x=es(b,M.mode,X,he),x.return=M,x):(x=d(x,b),x.return=M,x)}function Y(M,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Jh(""+x,M.mode,b),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Le:return b=vu(x.type,x.key,x.props,null,M.mode,b),b.ref=fa(M,null,x),b.return=M,b;case te:return x=Zh(x,M.mode,b),x.return=M,x;case Dt:var X=x._init;return Y(M,X(x._payload),b)}if(sr(x)||me(x))return x=es(x,M.mode,b,null),x.return=M,x;Ql(M,x)}return null}function G(M,x,b,X){var he=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return he!==null?null:S(M,x,""+b,X);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Le:return b.key===he?P(M,x,b,X):null;case te:return b.key===he?j(M,x,b,X):null;case Dt:return he=b._init,G(M,x,he(b._payload),X)}if(sr(b)||me(b))return he!==null?null:Q(M,x,b,X,null);Ql(M,b)}return null}function ne(M,x,b,X,he){if(typeof X=="string"&&X!==""||typeof X=="number")return M=M.get(b)||null,S(x,M,""+X,he);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Le:return M=M.get(X.key===null?b:X.key)||null,P(x,M,X,he);case te:return M=M.get(X.key===null?b:X.key)||null,j(x,M,X,he);case Dt:var ge=X._init;return ne(M,x,b,ge(X._payload),he)}if(sr(X)||me(X))return M=M.get(b)||null,Q(x,M,X,he,null);Ql(x,X)}return null}function ae(M,x,b,X){for(var he=null,ge=null,ye=x,Ee=x=0,Tt=null;ye!==null&&Ee<b.length;Ee++){ye.index>Ee?(Tt=ye,ye=null):Tt=ye.sibling;var Me=G(M,ye,b[Ee],X);if(Me===null){ye===null&&(ye=Tt);break}n&&ye&&Me.alternate===null&&i(M,ye),x=m(Me,x,Ee),ge===null?he=Me:ge.sibling=Me,ge=Me,ye=Tt}if(Ee===b.length)return a(M,ye),Ye&&Hi(M,Ee),he;if(ye===null){for(;Ee<b.length;Ee++)ye=Y(M,b[Ee],X),ye!==null&&(x=m(ye,x,Ee),ge===null?he=ye:ge.sibling=ye,ge=ye);return Ye&&Hi(M,Ee),he}for(ye=c(M,ye);Ee<b.length;Ee++)Tt=ne(ye,M,Ee,b[Ee],X),Tt!==null&&(n&&Tt.alternate!==null&&ye.delete(Tt.key===null?Ee:Tt.key),x=m(Tt,x,Ee),ge===null?he=Tt:ge.sibling=Tt,ge=Tt);return n&&ye.forEach(function(si){return i(M,si)}),Ye&&Hi(M,Ee),he}function ue(M,x,b,X){var he=me(b);if(typeof he!="function")throw Error(t(150));if(b=he.call(b),b==null)throw Error(t(151));for(var ge=he=null,ye=x,Ee=x=0,Tt=null,Me=b.next();ye!==null&&!Me.done;Ee++,Me=b.next()){ye.index>Ee?(Tt=ye,ye=null):Tt=ye.sibling;var si=G(M,ye,Me.value,X);if(si===null){ye===null&&(ye=Tt);break}n&&ye&&si.alternate===null&&i(M,ye),x=m(si,x,Ee),ge===null?he=si:ge.sibling=si,ge=si,ye=Tt}if(Me.done)return a(M,ye),Ye&&Hi(M,Ee),he;if(ye===null){for(;!Me.done;Ee++,Me=b.next())Me=Y(M,Me.value,X),Me!==null&&(x=m(Me,x,Ee),ge===null?he=Me:ge.sibling=Me,ge=Me);return Ye&&Hi(M,Ee),he}for(ye=c(M,ye);!Me.done;Ee++,Me=b.next())Me=ne(ye,M,Ee,Me.value,X),Me!==null&&(n&&Me.alternate!==null&&ye.delete(Me.key===null?Ee:Me.key),x=m(Me,x,Ee),ge===null?he=Me:ge.sibling=Me,ge=Me);return n&&ye.forEach(function(_w){return i(M,_w)}),Ye&&Hi(M,Ee),he}function rt(M,x,b,X){if(typeof b=="object"&&b!==null&&b.type===A&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Le:e:{for(var he=b.key,ge=x;ge!==null;){if(ge.key===he){if(he=b.type,he===A){if(ge.tag===7){a(M,ge.sibling),x=d(ge,b.props.children),x.return=M,M=x;break e}}else if(ge.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Dt&&Pp(he)===ge.type){a(M,ge.sibling),x=d(ge,b.props),x.ref=fa(M,ge,b),x.return=M,M=x;break e}a(M,ge);break}else i(M,ge);ge=ge.sibling}b.type===A?(x=es(b.props.children,M.mode,X,b.key),x.return=M,M=x):(X=vu(b.type,b.key,b.props,null,M.mode,X),X.ref=fa(M,x,b),X.return=M,M=X)}return v(M);case te:e:{for(ge=b.key;x!==null;){if(x.key===ge)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){a(M,x.sibling),x=d(x,b.children||[]),x.return=M,M=x;break e}else{a(M,x);break}else i(M,x);x=x.sibling}x=Zh(b,M.mode,X),x.return=M,M=x}return v(M);case Dt:return ge=b._init,rt(M,x,ge(b._payload),X)}if(sr(b))return ae(M,x,b,X);if(me(b))return ue(M,x,b,X);Ql(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(a(M,x.sibling),x=d(x,b),x.return=M,M=x):(a(M,x),x=Jh(b,M.mode,X),x.return=M,M=x),v(M)):a(M,x)}return rt}var Ys=kp(!0),Np=kp(!1),Yl=Gr(null),Xl=null,Xs=null,lh=null;function uh(){lh=Xs=Xl=null}function ch(n){var i=Yl.current;Ke(Yl),n._currentValue=i}function hh(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Js(n,i){Xl=n,lh=Xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Yt=!0),n.firstContext=null)}function _n(n){var i=n._currentValue;if(lh!==n)if(n={context:n,memoizedValue:i,next:null},Xs===null){if(Xl===null)throw Error(t(308));Xs=n,Xl.dependencies={lanes:0,firstContext:n}}else Xs=Xs.next=n;return i}var Ki=null;function dh(n){Ki===null?Ki=[n]:Ki.push(n)}function xp(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,dh(i)):(a.next=d.next,d.next=a),i.interleaved=a,_r(n,c)}function _r(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Xr=!1;function fh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Jr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Oe&2){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,_r(n,a)}return d=c.interleaved,d===null?(i.next=i,dh(c)):(i.next=d.next,d.next=i),c.interleaved=i,_r(n,a)}function Jl(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Br(n,a)}}function Vp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=v:m=m.next=v,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Zl(n,i,a,c){var d=n.updateQueue;Xr=!1;var m=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?m=j:v.next=j,v=P;var Q=n.alternate;Q!==null&&(Q=Q.updateQueue,S=Q.lastBaseUpdate,S!==v&&(S===null?Q.firstBaseUpdate=j:S.next=j,Q.lastBaseUpdate=P))}if(m!==null){var Y=d.baseState;v=0,Q=j=P=null,S=m;do{var G=S.lane,ne=S.eventTime;if((c&G)===G){Q!==null&&(Q=Q.next={eventTime:ne,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ae=n,ue=S;switch(G=i,ne=a,ue.tag){case 1:if(ae=ue.payload,typeof ae=="function"){Y=ae.call(ne,Y,G);break e}Y=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ue.payload,G=typeof ae=="function"?ae.call(ne,Y,G):ae,G==null)break e;Y=re({},Y,G);break e;case 2:Xr=!0}}S.callback!==null&&S.lane!==0&&(n.flags|=64,G=d.effects,G===null?d.effects=[S]:G.push(S))}else ne={eventTime:ne,lane:G,tag:S.tag,payload:S.payload,callback:S.callback,next:null},Q===null?(j=Q=ne,P=Y):Q=Q.next=ne,v|=G;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;G=S,S=G.next,G.next=null,d.lastBaseUpdate=G,d.shared.pending=null}}while(!0);if(Q===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=Q,i=d.shared.interleaved,i!==null){d=i;do v|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Yi|=v,n.lanes=v,n.memoizedState=Y}}function Op(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var pa={},Gn=Gr(pa),ma=Gr(pa),ga=Gr(pa);function Gi(n){if(n===pa)throw Error(t(174));return n}function ph(n,i){switch(We(ga,i),We(ma,n),We(Gn,pa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ht(i,n)}Ke(Gn),We(Gn,i)}function Zs(){Ke(Gn),Ke(ma),Ke(ga)}function Lp(n){Gi(ga.current);var i=Gi(Gn.current),a=ht(i,n.type);i!==a&&(We(ma,n),We(Gn,a))}function mh(n){ma.current===n&&(Ke(Gn),Ke(ma))}var Xe=Gr(0);function eu(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var gh=[];function yh(){for(var n=0;n<gh.length;n++)gh[n]._workInProgressVersionPrimary=null;gh.length=0}var tu=ve.ReactCurrentDispatcher,_h=ve.ReactCurrentBatchConfig,Qi=0,Je=null,ft=null,Et=null,nu=!1,ya=!1,_a=0,BE=0;function Ot(){throw Error(t(321))}function vh(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xn(n[a],i[a]))return!1;return!0}function Eh(n,i,a,c,d,m){if(Qi=m,Je=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,tu.current=n===null||n.memoizedState===null?WE:HE,n=a(c,d),ya){m=0;do{if(ya=!1,_a=0,25<=m)throw Error(t(301));m+=1,Et=ft=null,i.updateQueue=null,tu.current=KE,n=a(c,d)}while(ya)}if(tu.current=su,i=ft!==null&&ft.next!==null,Qi=0,Et=ft=Je=null,nu=!1,i)throw Error(t(300));return n}function wh(){var n=_a!==0;return _a=0,n}function Qn(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Et===null?Je.memoizedState=Et=n:Et=Et.next=n,Et}function vn(){if(ft===null){var n=Je.alternate;n=n!==null?n.memoizedState:null}else n=ft.next;var i=Et===null?Je.memoizedState:Et.next;if(i!==null)Et=i,ft=n;else{if(n===null)throw Error(t(310));ft=n,n={memoizedState:ft.memoizedState,baseState:ft.baseState,baseQueue:ft.baseQueue,queue:ft.queue,next:null},Et===null?Je.memoizedState=Et=n:Et=Et.next=n}return Et}function va(n,i){return typeof i=="function"?i(n):i}function Th(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=ft,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var v=d.next;d.next=m.next,m.next=v}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var S=v=null,P=null,j=m;do{var Q=j.lane;if((Qi&Q)===Q)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:n(c,j.action);else{var Y={lane:Q,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,Je.lanes|=Q,Yi|=Q}j=j.next}while(j!==null&&j!==m);P===null?v=c:P.next=S,xn(c,i.memoizedState)||(Yt=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=P,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Je.lanes|=m,Yi|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Ih(n){var i=vn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do m=n(m,v.action),v=v.next;while(v!==d);xn(m,i.memoizedState)||(Yt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Mp(){}function bp(n,i){var a=Je,c=vn(),d=i(),m=!xn(c.memoizedState,d);if(m&&(c.memoizedState=d,Yt=!0),c=c.queue,Sh(jp.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||Et!==null&&Et.memoizedState.tag&1){if(a.flags|=2048,Ea(9,Fp.bind(null,a,c,d,i),void 0,null),wt===null)throw Error(t(349));Qi&30||Up(a,i,d)}return d}function Up(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Fp(n,i,a,c){i.value=a,i.getSnapshot=c,Bp(i)&&zp(n)}function jp(n,i,a){return a(function(){Bp(i)&&zp(n)})}function Bp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xn(n,a)}catch{return!0}}function zp(n){var i=_r(n,1);i!==null&&Mn(i,n,1,-1)}function $p(n){var i=Qn();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:va,lastRenderedState:n},i.queue=n,n=n.dispatch=qE.bind(null,Je,n),[i.memoizedState,n]}function Ea(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Je.updateQueue,i===null?(i={lastEffect:null,stores:null},Je.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function qp(){return vn().memoizedState}function ru(n,i,a,c){var d=Qn();Je.flags|=n,d.memoizedState=Ea(1|i,a,void 0,c===void 0?null:c)}function iu(n,i,a,c){var d=vn();c=c===void 0?null:c;var m=void 0;if(ft!==null){var v=ft.memoizedState;if(m=v.destroy,c!==null&&vh(c,v.deps)){d.memoizedState=Ea(i,a,m,c);return}}Je.flags|=n,d.memoizedState=Ea(1|i,a,m,c)}function Wp(n,i){return ru(8390656,8,n,i)}function Sh(n,i){return iu(2048,8,n,i)}function Hp(n,i){return iu(4,2,n,i)}function Kp(n,i){return iu(4,4,n,i)}function Gp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Qp(n,i,a){return a=a!=null?a.concat([n]):null,iu(4,4,Gp.bind(null,i,n),a)}function Ah(){}function Yp(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Xp(n,i){var a=vn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&vh(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Jp(n,i,a){return Qi&21?(xn(a,i)||(a=Ui(),Je.lanes|=a,Yi|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Yt=!0),n.memoizedState=a)}function zE(n,i){var a=ke;ke=a!==0&&4>a?a:4,n(!0);var c=_h.transition;_h.transition={};try{n(!1),i()}finally{ke=a,_h.transition=c}}function Zp(){return vn().memoizedState}function $E(n,i,a){var c=ni(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},em(n))tm(i,a);else if(a=xp(n,i,a,c),a!==null){var d=qt();Mn(a,n,c,d),nm(a,i,c)}}function qE(n,i,a){var c=ni(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(em(n))tm(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var v=i.lastRenderedState,S=m(v,a);if(d.hasEagerState=!0,d.eagerState=S,xn(S,v)){var P=i.interleaved;P===null?(d.next=d,dh(i)):(d.next=P.next,P.next=d),i.interleaved=d;return}}catch{}finally{}a=xp(n,i,d,c),a!==null&&(d=qt(),Mn(a,n,c,d),nm(a,i,c))}}function em(n){var i=n.alternate;return n===Je||i!==null&&i===Je}function tm(n,i){ya=nu=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function nm(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Br(n,a)}}var su={readContext:_n,useCallback:Ot,useContext:Ot,useEffect:Ot,useImperativeHandle:Ot,useInsertionEffect:Ot,useLayoutEffect:Ot,useMemo:Ot,useReducer:Ot,useRef:Ot,useState:Ot,useDebugValue:Ot,useDeferredValue:Ot,useTransition:Ot,useMutableSource:Ot,useSyncExternalStore:Ot,useId:Ot,unstable_isNewReconciler:!1},WE={readContext:_n,useCallback:function(n,i){return Qn().memoizedState=[n,i===void 0?null:i],n},useContext:_n,useEffect:Wp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ru(4194308,4,Gp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ru(4194308,4,n,i)},useInsertionEffect:function(n,i){return ru(4,2,n,i)},useMemo:function(n,i){var a=Qn();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Qn();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=$E.bind(null,Je,n),[c.memoizedState,n]},useRef:function(n){var i=Qn();return n={current:n},i.memoizedState=n},useState:$p,useDebugValue:Ah,useDeferredValue:function(n){return Qn().memoizedState=n},useTransition:function(){var n=$p(!1),i=n[0];return n=zE.bind(null,n[1]),Qn().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Je,d=Qn();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),wt===null)throw Error(t(349));Qi&30||Up(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Wp(jp.bind(null,c,m,n),[n]),c.flags|=2048,Ea(9,Fp.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Qn(),i=wt.identifierPrefix;if(Ye){var a=yr,c=gr;a=(c&~(1<<32-Bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=_a++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=BE++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},HE={readContext:_n,useCallback:Yp,useContext:_n,useEffect:Sh,useImperativeHandle:Qp,useInsertionEffect:Hp,useLayoutEffect:Kp,useMemo:Xp,useReducer:Th,useRef:qp,useState:function(){return Th(va)},useDebugValue:Ah,useDeferredValue:function(n){var i=vn();return Jp(i,ft.memoizedState,n)},useTransition:function(){var n=Th(va)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Mp,useSyncExternalStore:bp,useId:Zp,unstable_isNewReconciler:!1},KE={readContext:_n,useCallback:Yp,useContext:_n,useEffect:Sh,useImperativeHandle:Qp,useInsertionEffect:Hp,useLayoutEffect:Kp,useMemo:Xp,useReducer:Ih,useRef:qp,useState:function(){return Ih(va)},useDebugValue:Ah,useDeferredValue:function(n){var i=vn();return ft===null?i.memoizedState=n:Jp(i,ft.memoizedState,n)},useTransition:function(){var n=Ih(va)[0],i=vn().memoizedState;return[n,i]},useMutableSource:Mp,useSyncExternalStore:bp,useId:Zp,unstable_isNewReconciler:!1};function Vn(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Rh(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var ou={isMounted:function(n){return(n=n._reactInternals)?Sn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ni(n),m=vr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Jr(n,m,d),i!==null&&(Mn(i,n,d,c),Jl(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=qt(),d=ni(n),m=vr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Jr(n,m,d),i!==null&&(Mn(i,n,d,c),Jl(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=qt(),c=ni(n),d=vr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Jr(n,d,c),i!==null&&(Mn(i,n,c,a),Jl(i,n,c))}};function rm(n,i,a,c,d,m,v){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,v):i.prototype&&i.prototype.isPureReactComponent?!oa(a,c)||!oa(d,m):!0}function im(n,i,a){var c=!1,d=Qr,m=i.contextType;return typeof m=="object"&&m!==null?m=_n(m):(d=Qt(i)?qi:Vt.current,c=i.contextTypes,m=(c=c!=null)?Hs(n,d):Qr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ou,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function sm(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&ou.enqueueReplaceState(i,i.state,null)}function Ch(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},fh(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=_n(m):(m=Qt(i)?qi:Vt.current,d.context=Hs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Rh(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&ou.enqueueReplaceState(d,d.state,null),Zl(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function eo(n,i){try{var a="",c=i;do a+=Ae(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function Ph(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function kh(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function om(n,i,a){a=vr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){fu||(fu=!0,qh=c),kh(n,i)},a}function am(n,i,a){a=vr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){kh(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){kh(n,i),typeof c!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),a}function lm(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new GE;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=lw.bind(null,n,i,a),i.then(n,n))}function um(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function cm(n,i,a,c,d){return n.mode&1?(n.flags|=65536,n.lanes=d,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=vr(-1,1),i.tag=2,Jr(a,i,1))),a.lanes|=1),n)}var QE=ve.ReactCurrentOwner,Yt=!1;function $t(n,i,a,c){i.child=n===null?Np(i,null,a,c):Ys(i,n.child,a,c)}function hm(n,i,a,c,d){a=a.render;var m=i.ref;return Js(i,d),c=Eh(n,i,a,c,m,d),a=wh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Er(n,i,d)):(Ye&&a&&rh(i),i.flags|=1,$t(n,i,c,d),i.child)}function dm(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Xh(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,fm(n,i,m,c,d)):(n=vu(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&d)){var v=m.memoizedProps;if(a=a.compare,a=a!==null?a:oa,a(v,c)&&n.ref===i.ref)return Er(n,i,d)}return i.flags|=1,n=ii(m,c),n.ref=i.ref,n.return=i,i.child=n}function fm(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(oa(m,c)&&n.ref===i.ref)if(Yt=!1,i.pendingProps=c=m,(n.lanes&d)!==0)n.flags&131072&&(Yt=!0);else return i.lanes=n.lanes,Er(n,i,d)}return Nh(n,i,a,c,d)}function pm(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(no,cn),cn|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,We(no,cn),cn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,We(no,cn),cn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,We(no,cn),cn|=c;return $t(n,i,d,a),i.child}function mm(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Nh(n,i,a,c,d){var m=Qt(a)?qi:Vt.current;return m=Hs(i,m),Js(i,d),a=Eh(n,i,a,c,m,d),c=wh(),n!==null&&!Yt?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Er(n,i,d)):(Ye&&c&&rh(i),i.flags|=1,$t(n,i,a,d),i.child)}function gm(n,i,a,c,d){if(Qt(a)){var m=!0;ql(i)}else m=!1;if(Js(i,d),i.stateNode===null)lu(n,i),im(i,a,c),Ch(i,a,c,d),c=!0;else if(n===null){var v=i.stateNode,S=i.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=_n(j):(j=Qt(a)?qi:Vt.current,j=Hs(i,j));var Q=a.getDerivedStateFromProps,Y=typeof Q=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==j)&&sm(i,v,c,j),Xr=!1;var G=i.memoizedState;v.state=G,Zl(i,c,v,d),P=i.memoizedState,S!==c||G!==P||Gt.current||Xr?(typeof Q=="function"&&(Rh(i,a,Q,c),P=i.memoizedState),(S=Xr||rm(i,a,S,c,G,P,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=P),v.props=c,v.state=P,v.context=j,c=S):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Dp(n,i),S=i.memoizedProps,j=i.type===i.elementType?S:Vn(i.type,S),v.props=j,Y=i.pendingProps,G=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=_n(P):(P=Qt(a)?qi:Vt.current,P=Hs(i,P));var ne=a.getDerivedStateFromProps;(Q=typeof ne=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||G!==P)&&sm(i,v,c,P),Xr=!1,G=i.memoizedState,v.state=G,Zl(i,c,v,d);var ae=i.memoizedState;S!==Y||G!==ae||Gt.current||Xr?(typeof ne=="function"&&(Rh(i,a,ne,c),ae=i.memoizedState),(j=Xr||rm(i,a,j,c,G,ae,P)||!1)?(Q||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,P)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===n.memoizedProps&&G===n.memoizedState||(i.flags|=1024),c=!1)}return xh(n,i,a,c,m,d)}function xh(n,i,a,c,d,m){mm(n,i);var v=(i.flags&128)!==0;if(!c&&!v)return d&&wp(i,a,!1),Er(n,i,m);c=i.stateNode,QE.current=i;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&v?(i.child=Ys(i,n.child,null,m),i.child=Ys(i,null,S,m)):$t(n,i,S,m),i.memoizedState=c.state,d&&wp(i,a,!0),i.child}function ym(n){var i=n.stateNode;i.pendingContext?vp(n,i.pendingContext,i.pendingContext!==i.context):i.context&&vp(n,i.context,!1),ph(n,i.containerInfo)}function _m(n,i,a,c,d){return Qs(),ah(d),i.flags|=256,$t(n,i,a,c),i.child}var Dh={dehydrated:null,treeContext:null,retryLane:0};function Vh(n){return{baseLanes:n,cachePool:null,transitions:null}}function vm(n,i,a){var c=i.pendingProps,d=Xe.current,m=!1,v=(i.flags&128)!==0,S;if((S=v)||(S=n!==null&&n.memoizedState===null?!1:(d&2)!==0),S?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),We(Xe,d&1),n===null)return oh(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(v=c.children,n=c.fallback,m?(c=i.mode,m=i.child,v={mode:"hidden",children:v},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=v):m=Eu(v,c,0,null),n=es(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Vh(a),i.memoizedState=Dh,n):Oh(i,v));if(d=n.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return YE(n,i,v,c,S,d,a);if(m){m=c.fallback,v=i.mode,d=n.child,S=d.sibling;var P={mode:"hidden",children:c.children};return!(v&1)&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=P,i.deletions=null):(c=ii(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?m=ii(S,m):(m=es(m,v,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,v=n.child.memoizedState,v=v===null?Vh(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},m.memoizedState=v,m.childLanes=n.childLanes&~a,i.memoizedState=Dh,c}return m=n.child,n=m.sibling,c=ii(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Oh(n,i){return i=Eu({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function au(n,i,a,c){return c!==null&&ah(c),Ys(i,n.child,null,a),n=Oh(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function YE(n,i,a,c,d,m,v){if(a)return i.flags&256?(i.flags&=-257,c=Ph(Error(t(422))),au(n,i,v,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=Eu({mode:"visible",children:c.children},d,0,null),m=es(m,d,v,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&Ys(i,n.child,null,v),i.child.memoizedState=Vh(v),i.memoizedState=Dh,m);if(!(i.mode&1))return au(n,i,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,m=Error(t(419)),c=Ph(m,c,void 0),au(n,i,v,c)}if(S=(v&n.childLanes)!==0,Yt||S){if(c=wt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=d&(c.suspendedLanes|v)?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,_r(n,d),Mn(c,n,d,-1))}return Yh(),c=Ph(Error(t(421))),au(n,i,v,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=uw.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,un=Kr(d.nextSibling),ln=i,Ye=!0,Dn=null,n!==null&&(gn[yn++]=gr,gn[yn++]=yr,gn[yn++]=Wi,gr=n.id,yr=n.overflow,Wi=i),i=Oh(i,c.children),i.flags|=4096,i)}function Em(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),hh(n.return,i,a)}function Lh(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function wm(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if($t(n,i,c.children,a),c=Xe.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Em(n,a,i);else if(n.tag===19)Em(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(We(Xe,c),!(i.mode&1))i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&eu(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),Lh(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&eu(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}Lh(i,!0,a,null,m);break;case"together":Lh(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function lu(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Er(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Yi|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ii(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ii(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function XE(n,i,a){switch(i.tag){case 3:ym(i),Qs();break;case 5:Lp(i);break;case 1:Qt(i.type)&&ql(i);break;case 4:ph(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;We(Yl,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Xe,Xe.current&1),i.flags|=128,null):a&i.child.childLanes?vm(n,i,a):(We(Xe,Xe.current&1),n=Er(n,i,a),n!==null?n.sibling:null);We(Xe,Xe.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return wm(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Xe,Xe.current),c)break;return null;case 22:case 23:return i.lanes=0,pm(n,i,a)}return Er(n,i,a)}var Tm,Mh,Im,Sm;Tm=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mh=function(){},Im=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,Gi(Gn.current);var m=null;switch(a){case"input":d=Ci(n,d),c=Ci(n,c),m=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),m=[];break;case"textarea":d=Lo(n,d),c=Lo(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Bl)}Bo(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?m||(m=[]):(m=m||[]).push(j,null));for(j in c){var P=c[j];if(S=d!=null?d[j]:void 0,c.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(m||(m=[]),m.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(m=m||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(m=m||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&He("scroll",n),m||S===P||(m=[])):(m=m||[]).push(j,P))}a&&(m=m||[]).push("style",a);var j=m;(i.updateQueue=j)&&(i.flags|=4)}},Sm=function(n,i,a,c){a!==c&&(i.flags|=4)};function wa(n,i){if(!Ye)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Lt(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function JE(n,i,a){var c=i.pendingProps;switch(ih(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lt(i),null;case 1:return Qt(i.type)&&$l(),Lt(i),null;case 3:return c=i.stateNode,Zs(),Ke(Gt),Ke(Vt),yh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Gl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,Dn!==null&&(Kh(Dn),Dn=null))),Mh(n,i),Lt(i),null;case 5:mh(i);var d=Gi(ga.current);if(a=i.type,n!==null&&i.stateNode!=null)Im(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Lt(i),null}if(n=Gi(Gn.current),Gl(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Kn]=i,c[ha]=m,n=(i.mode&1)!==0,a){case"dialog":He("cancel",c),He("close",c);break;case"iframe":case"object":case"embed":He("load",c);break;case"video":case"audio":for(d=0;d<la.length;d++)He(la[d],c);break;case"source":He("error",c);break;case"img":case"image":case"link":He("error",c),He("load",c);break;case"details":He("toggle",c);break;case"input":ps(c,m),He("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},He("invalid",c);break;case"textarea":gs(c,m),He("invalid",c)}Bo(a,m),d=null;for(var v in m)if(m.hasOwnProperty(v)){var S=m[v];v==="children"?typeof S=="string"?c.textContent!==S&&(m.suppressHydrationWarning!==!0&&jl(c.textContent,S,n),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(m.suppressHydrationWarning!==!0&&jl(c.textContent,S,n),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&He("scroll",c)}switch(a){case"input":ir(c),dl(c,m,!0);break;case"textarea":ir(c),Mo(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Bl)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ct(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=v.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=v.createElement(a,{is:c.is}):(n=v.createElement(a),a==="select"&&(v=n,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):n=v.createElementNS(n,a),n[Kn]=i,n[ha]=c,Tm(n,i,!1,!1),i.stateNode=n;e:{switch(v=zo(a,c),a){case"dialog":He("cancel",n),He("close",n),d=c;break;case"iframe":case"object":case"embed":He("load",n),d=c;break;case"video":case"audio":for(d=0;d<la.length;d++)He(la[d],n);d=c;break;case"source":He("error",n),d=c;break;case"img":case"image":case"link":He("error",n),He("load",n),d=c;break;case"details":He("toggle",n),d=c;break;case"input":ps(n,c),d=Ci(n,c),He("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),He("invalid",n);break;case"textarea":gs(n,c),d=Lo(n,c),He("invalid",n);break;default:d=c}Bo(a,d),S=d;for(m in S)if(S.hasOwnProperty(m)){var P=S[m];m==="style"?Fo(n,P):m==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&bo(n,P)):m==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&Mr(n,P):typeof P=="number"&&Mr(n,""+P):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?P!=null&&m==="onScroll"&&He("scroll",n):P!=null&&de(n,m,P,v))}switch(a){case"input":ir(n),dl(n,c,!1);break;case"textarea":ir(n),Mo(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ue(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?or(n,!!c.multiple,m,!1):c.defaultValue!=null&&or(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Bl)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Lt(i),null;case 6:if(n&&i.stateNode!=null)Sm(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Gi(ga.current),Gi(Gn.current),Gl(i)){if(c=i.stateNode,a=i.memoizedProps,c[Kn]=i,(m=c.nodeValue!==a)&&(n=ln,n!==null))switch(n.tag){case 3:jl(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&jl(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Kn]=i,i.stateNode=c}return Lt(i),null;case 13:if(Ke(Xe),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ye&&un!==null&&i.mode&1&&!(i.flags&128))Cp(),Qs(),i.flags|=98560,m=!1;else if(m=Gl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Kn]=i}else Qs(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;Lt(i),m=!1}else Dn!==null&&(Kh(Dn),Dn=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Xe.current&1?pt===0&&(pt=3):Yh())),i.updateQueue!==null&&(i.flags|=4),Lt(i),null);case 4:return Zs(),Mh(n,i),n===null&&ua(i.stateNode.containerInfo),Lt(i),null;case 10:return ch(i.type._context),Lt(i),null;case 17:return Qt(i.type)&&$l(),Lt(i),null;case 19:if(Ke(Xe),m=i.memoizedState,m===null)return Lt(i),null;if(c=(i.flags&128)!==0,v=m.rendering,v===null)if(c)wa(m,!1);else{if(pt!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(v=eu(n),v!==null){for(i.flags|=128,wa(m,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,v=m.alternate,v===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=v.childLanes,m.lanes=v.lanes,m.child=v.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=v.memoizedProps,m.memoizedState=v.memoizedState,m.updateQueue=v.updateQueue,m.type=v.type,n=v.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return We(Xe,Xe.current&1|2),i.child}n=n.sibling}m.tail!==null&&qe()>ro&&(i.flags|=128,c=!0,wa(m,!1),i.lanes=4194304)}else{if(!c)if(n=eu(v),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),wa(m,!0),m.tail===null&&m.tailMode==="hidden"&&!v.alternate&&!Ye)return Lt(i),null}else 2*qe()-m.renderingStartTime>ro&&a!==1073741824&&(i.flags|=128,c=!0,wa(m,!1),i.lanes=4194304);m.isBackwards?(v.sibling=i.child,i.child=v):(a=m.last,a!==null?a.sibling=v:i.child=v,m.last=v)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=qe(),i.sibling=null,a=Xe.current,We(Xe,c?a&1|2:a&1),i):(Lt(i),null);case 22:case 23:return Qh(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?cn&1073741824&&(Lt(i),i.subtreeFlags&6&&(i.flags|=8192)):Lt(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function ZE(n,i){switch(ih(i),i.tag){case 1:return Qt(i.type)&&$l(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Zs(),Ke(Gt),Ke(Vt),yh(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return mh(i),null;case 13:if(Ke(Xe),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Qs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ke(Xe),null;case 4:return Zs(),null;case 10:return ch(i.type._context),null;case 22:case 23:return Qh(),null;case 24:return null;default:return null}}var uu=!1,Mt=!1,ew=typeof WeakSet=="function"?WeakSet:Set,se=null;function to(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){et(n,i,c)}else a.current=null}function bh(n,i,a){try{a()}catch(c){et(n,i,c)}}var Am=!1;function tw(n,i){if(Qc=qr,n=rp(),Bc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,Q=0,Y=n,G=null;t:for(;;){for(var ne;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==m||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(ne=Y.firstChild)!==null;)G=Y,Y=ne;for(;;){if(Y===n)break t;if(G===a&&++j===d&&(S=v),G===m&&++Q===c&&(P=v),(ne=Y.nextSibling)!==null)break;Y=G,G=Y.parentNode}Y=ne}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yc={focusedElem:n,selectionRange:a},qr=!1,se=i;se!==null;)if(i=se,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,se=n;else for(;se!==null;){i=se;try{var ae=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var ue=ae.memoizedProps,rt=ae.memoizedState,M=i.stateNode,x=M.getSnapshotBeforeUpdate(i.elementType===i.type?ue:Vn(i.type,ue),rt);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(X){et(i,i.return,X)}if(n=i.sibling,n!==null){n.return=i.return,se=n;break}se=i.return}return ae=Am,Am=!1,ae}function Ta(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&bh(i,a,m)}d=d.next}while(d!==c)}}function cu(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Uh(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Rm(n){var i=n.alternate;i!==null&&(n.alternate=null,Rm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Kn],delete i[ha],delete i[eh],delete i[bE],delete i[UE])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Cm(n){return n.tag===5||n.tag===3||n.tag===4}function Pm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Cm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Fh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Bl));else if(c!==4&&(n=n.child,n!==null))for(Fh(n,i,a),n=n.sibling;n!==null;)Fh(n,i,a),n=n.sibling}function jh(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(jh(n,i,a),n=n.sibling;n!==null;)jh(n,i,a),n=n.sibling}var Rt=null,On=!1;function Zr(n,i,a){for(a=a.child;a!==null;)km(n,i,a),a=a.sibling}function km(n,i,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Mi,a)}catch{}switch(a.tag){case 5:Mt||to(a,i);case 6:var c=Rt,d=On;Rt=null,Zr(n,i,a),Rt=c,On=d,Rt!==null&&(On?(n=Rt,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Rt.removeChild(a.stateNode));break;case 18:Rt!==null&&(On?(n=Rt,a=a.stateNode,n.nodeType===8?Zc(n.parentNode,a):n.nodeType===1&&Zc(n,a),kn(n)):Zc(Rt,a.stateNode));break;case 4:c=Rt,d=On,Rt=a.stateNode.containerInfo,On=!0,Zr(n,i,a),Rt=c,On=d;break;case 0:case 11:case 14:case 15:if(!Mt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,v=m.destroy;m=m.tag,v!==void 0&&(m&2||m&4)&&bh(a,i,v),d=d.next}while(d!==c)}Zr(n,i,a);break;case 1:if(!Mt&&(to(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){et(a,i,S)}Zr(n,i,a);break;case 21:Zr(n,i,a);break;case 22:a.mode&1?(Mt=(c=Mt)||a.memoizedState!==null,Zr(n,i,a),Mt=c):Zr(n,i,a);break;default:Zr(n,i,a)}}function Nm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new ew),i.forEach(function(c){var d=cw.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ln(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,v=i,S=v;e:for(;S!==null;){switch(S.tag){case 5:Rt=S.stateNode,On=!1;break e;case 3:Rt=S.stateNode.containerInfo,On=!0;break e;case 4:Rt=S.stateNode.containerInfo,On=!0;break e}S=S.return}if(Rt===null)throw Error(t(160));km(m,v,d),Rt=null,On=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){et(d,i,j)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)xm(i,n),i=i.sibling}function xm(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ln(i,n),Yn(n),c&4){try{Ta(3,n,n.return),cu(3,n)}catch(ue){et(n,n.return,ue)}try{Ta(5,n,n.return)}catch(ue){et(n,n.return,ue)}}break;case 1:Ln(i,n),Yn(n),c&512&&a!==null&&to(a,a.return);break;case 5:if(Ln(i,n),Yn(n),c&512&&a!==null&&to(a,a.return),n.flags&32){var d=n.stateNode;try{Mr(d,"")}catch(ue){et(n,n.return,ue)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,v=a!==null?a.memoizedProps:m,S=n.type,P=n.updateQueue;if(n.updateQueue=null,P!==null)try{S==="input"&&m.type==="radio"&&m.name!=null&&Vo(d,m),zo(S,v);var j=zo(S,m);for(v=0;v<P.length;v+=2){var Q=P[v],Y=P[v+1];Q==="style"?Fo(d,Y):Q==="dangerouslySetInnerHTML"?bo(d,Y):Q==="children"?Mr(d,Y):de(d,Q,Y,j)}switch(S){case"input":Oo(d,m);break;case"textarea":ys(d,m);break;case"select":var G=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var ne=m.value;ne!=null?or(d,!!m.multiple,ne,!1):G!==!!m.multiple&&(m.defaultValue!=null?or(d,!!m.multiple,m.defaultValue,!0):or(d,!!m.multiple,m.multiple?[]:"",!1))}d[ha]=m}catch(ue){et(n,n.return,ue)}}break;case 6:if(Ln(i,n),Yn(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(ue){et(n,n.return,ue)}}break;case 3:if(Ln(i,n),Yn(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{kn(i.containerInfo)}catch(ue){et(n,n.return,ue)}break;case 4:Ln(i,n),Yn(n);break;case 13:Ln(i,n),Yn(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||($h=qe())),c&4&&Nm(n);break;case 22:if(Q=a!==null&&a.memoizedState!==null,n.mode&1?(Mt=(j=Mt)||Q,Ln(i,n),Mt=j):Ln(i,n),Yn(n),c&8192){if(j=n.memoizedState!==null,(n.stateNode.isHidden=j)&&!Q&&n.mode&1)for(se=n,Q=n.child;Q!==null;){for(Y=se=Q;se!==null;){switch(G=se,ne=G.child,G.tag){case 0:case 11:case 14:case 15:Ta(4,G,G.return);break;case 1:to(G,G.return);var ae=G.stateNode;if(typeof ae.componentWillUnmount=="function"){c=G,a=G.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(ue){et(c,a,ue)}}break;case 5:to(G,G.return);break;case 22:if(G.memoizedState!==null){Om(Y);continue}}ne!==null?(ne.return=G,se=ne):Om(Y)}Q=Q.sibling}e:for(Q=null,Y=n;;){if(Y.tag===5){if(Q===null){Q=Y;try{d=Y.stateNode,j?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=Uo("display",v))}catch(ue){et(n,n.return,ue)}}}else if(Y.tag===6){if(Q===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(ue){et(n,n.return,ue)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===n)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===n)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===n)break e;Q===Y&&(Q=null),Y=Y.return}Q===Y&&(Q=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Ln(i,n),Yn(n),c&4&&Nm(n);break;case 21:break;default:Ln(i,n),Yn(n)}}function Yn(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Cm(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Mr(d,""),c.flags&=-33);var m=Pm(n);jh(n,m,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=Pm(n);Fh(n,S,v);break;default:throw Error(t(161))}}catch(P){et(n,n.return,P)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function nw(n,i,a){se=n,Dm(n)}function Dm(n,i,a){for(var c=(n.mode&1)!==0;se!==null;){var d=se,m=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||uu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||Mt;S=uu;var j=Mt;if(uu=v,(Mt=P)&&!j)for(se=d;se!==null;)v=se,P=v.child,v.tag===22&&v.memoizedState!==null?Lm(d):P!==null?(P.return=v,se=P):Lm(d);for(;m!==null;)se=m,Dm(m),m=m.sibling;se=d,uu=S,Mt=j}Vm(n)}else d.subtreeFlags&8772&&m!==null?(m.return=d,se=m):Vm(n)}}function Vm(n){for(;se!==null;){var i=se;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:Mt||cu(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mt)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Vn(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Op(i,m,c);break;case 3:var v=i.updateQueue;if(v!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Op(i,v,a)}break;case 5:var S=i.stateNode;if(a===null&&i.flags&4){a=S;var P=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var j=i.alternate;if(j!==null){var Q=j.memoizedState;if(Q!==null){var Y=Q.dehydrated;Y!==null&&kn(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mt||i.flags&512&&Uh(i)}catch(G){et(i,i.return,G)}}if(i===n){se=null;break}if(a=i.sibling,a!==null){a.return=i.return,se=a;break}se=i.return}}function Om(n){for(;se!==null;){var i=se;if(i===n){se=null;break}var a=i.sibling;if(a!==null){a.return=i.return,se=a;break}se=i.return}}function Lm(n){for(;se!==null;){var i=se;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{cu(4,i)}catch(P){et(i,a,P)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(P){et(i,d,P)}}var m=i.return;try{Uh(i)}catch(P){et(i,m,P)}break;case 5:var v=i.return;try{Uh(i)}catch(P){et(i,v,P)}}}catch(P){et(i,i.return,P)}if(i===n){se=null;break}var S=i.sibling;if(S!==null){S.return=i.return,se=S;break}se=i.return}}var rw=Math.ceil,hu=ve.ReactCurrentDispatcher,Bh=ve.ReactCurrentOwner,En=ve.ReactCurrentBatchConfig,Oe=0,wt=null,ot=null,Ct=0,cn=0,no=Gr(0),pt=0,Ia=null,Yi=0,du=0,zh=0,Sa=null,Xt=null,$h=0,ro=1/0,wr=null,fu=!1,qh=null,ei=null,pu=!1,ti=null,mu=0,Aa=0,Wh=null,gu=-1,yu=0;function qt(){return Oe&6?qe():gu!==-1?gu:gu=qe()}function ni(n){return n.mode&1?Oe&2&&Ct!==0?Ct&-Ct:jE.transition!==null?(yu===0&&(yu=Ui()),yu):(n=ke,n!==0||(n=window.event,n=n===void 0?16:Zo(n.type)),n):1}function Mn(n,i,a,c){if(50<Aa)throw Aa=0,Wh=null,Error(t(185));jr(n,a,c),(!(Oe&2)||n!==wt)&&(n===wt&&(!(Oe&2)&&(du|=a),pt===4&&ri(n,Ct)),Jt(n,c),a===1&&Oe===0&&!(i.mode&1)&&(ro=qe()+500,Wl&&Yr()))}function Jt(n,i){var a=n.callbackNode;ur(n,i);var c=bi(n,n===wt?Ct:0);if(c===0)a!==null&&Go(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Go(a),i===1)n.tag===0?FE(bm.bind(null,n)):Tp(bm.bind(null,n)),LE(function(){!(Oe&6)&&Yr()}),a=null;else{switch(zr(c)){case 1:a=Li;break;case 4:a=br;break;case 16:a=fn;break;case 536870912:a=yl;break;default:a=fn}a=Wm(a,Mm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Mm(n,i){if(gu=-1,yu=0,Oe&6)throw Error(t(327));var a=n.callbackNode;if(io()&&n.callbackNode!==a)return null;var c=bi(n,n===wt?Ct:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=_u(n,c);else{i=c;var d=Oe;Oe|=2;var m=Fm();(wt!==n||Ct!==i)&&(wr=null,ro=qe()+500,Ji(n,i));do try{ow();break}catch(S){Um(n,S)}while(!0);uh(),hu.current=m,Oe=d,ot!==null?i=0:(wt=null,Ct=0,i=pt)}if(i!==0){if(i===2&&(d=sn(n),d!==0&&(c=d,i=Hh(n,d))),i===1)throw a=Ia,Ji(n,0),ri(n,c),Jt(n,qe()),a;if(i===6)ri(n,c);else{if(d=n.current.alternate,!(c&30)&&!iw(d)&&(i=_u(n,c),i===2&&(m=sn(n),m!==0&&(c=m,i=Hh(n,m))),i===1))throw a=Ia,Ji(n,0),ri(n,c),Jt(n,qe()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Zi(n,Xt,wr);break;case 3:if(ri(n,c),(c&130023424)===c&&(i=$h+500-qe(),10<i)){if(bi(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){qt(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Jc(Zi.bind(null,n,Xt,wr),i);break}Zi(n,Xt,wr);break;case 4:if(ri(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var v=31-Bt(c);m=1<<v,v=i[v],v>d&&(d=v),c&=~m}if(c=d,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*rw(c/1960))-c,10<c){n.timeoutHandle=Jc(Zi.bind(null,n,Xt,wr),c);break}Zi(n,Xt,wr);break;case 5:Zi(n,Xt,wr);break;default:throw Error(t(329))}}}return Jt(n,qe()),n.callbackNode===a?Mm.bind(null,n):null}function Hh(n,i){var a=Sa;return n.current.memoizedState.isDehydrated&&(Ji(n,i).flags|=256),n=_u(n,i),n!==2&&(i=Xt,Xt=a,i!==null&&Kh(i)),n}function Kh(n){Xt===null?Xt=n:Xt.push.apply(Xt,n)}function iw(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!xn(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ri(n,i){for(i&=~zh,i&=~du,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Bt(i),c=1<<a;n[a]=-1,i&=~c}}function bm(n){if(Oe&6)throw Error(t(327));io();var i=bi(n,0);if(!(i&1))return Jt(n,qe()),null;var a=_u(n,i);if(n.tag!==0&&a===2){var c=sn(n);c!==0&&(i=c,a=Hh(n,c))}if(a===1)throw a=Ia,Ji(n,0),ri(n,i),Jt(n,qe()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Zi(n,Xt,wr),Jt(n,qe()),null}function Gh(n,i){var a=Oe;Oe|=1;try{return n(i)}finally{Oe=a,Oe===0&&(ro=qe()+500,Wl&&Yr())}}function Xi(n){ti!==null&&ti.tag===0&&!(Oe&6)&&io();var i=Oe;Oe|=1;var a=En.transition,c=ke;try{if(En.transition=null,ke=1,n)return n()}finally{ke=c,En.transition=a,Oe=i,!(Oe&6)&&Yr()}}function Qh(){cn=no.current,Ke(no)}function Ji(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,OE(a)),ot!==null)for(a=ot.return;a!==null;){var c=a;switch(ih(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&$l();break;case 3:Zs(),Ke(Gt),Ke(Vt),yh();break;case 5:mh(c);break;case 4:Zs();break;case 13:Ke(Xe);break;case 19:Ke(Xe);break;case 10:ch(c.type._context);break;case 22:case 23:Qh()}a=a.return}if(wt=n,ot=n=ii(n.current,null),Ct=cn=i,pt=0,Ia=null,zh=du=Yi=0,Xt=Sa=null,Ki!==null){for(i=0;i<Ki.length;i++)if(a=Ki[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var v=m.next;m.next=d,c.next=v}a.pending=c}Ki=null}return n}function Um(n,i){do{var a=ot;try{if(uh(),tu.current=su,nu){for(var c=Je.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}nu=!1}if(Qi=0,Et=ft=Je=null,ya=!1,_a=0,Bh.current=null,a===null||a.return===null){pt=1,Ia=i,ot=null;break}e:{var m=n,v=a.return,S=a,P=i;if(i=Ct,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,Q=S,Y=Q.tag;if(!(Q.mode&1)&&(Y===0||Y===11||Y===15)){var G=Q.alternate;G?(Q.updateQueue=G.updateQueue,Q.memoizedState=G.memoizedState,Q.lanes=G.lanes):(Q.updateQueue=null,Q.memoizedState=null)}var ne=um(v);if(ne!==null){ne.flags&=-257,cm(ne,v,S,m,i),ne.mode&1&&lm(m,j,i),i=ne,P=j;var ae=i.updateQueue;if(ae===null){var ue=new Set;ue.add(P),i.updateQueue=ue}else ae.add(P);break e}else{if(!(i&1)){lm(m,j,i),Yh();break e}P=Error(t(426))}}else if(Ye&&S.mode&1){var rt=um(v);if(rt!==null){!(rt.flags&65536)&&(rt.flags|=256),cm(rt,v,S,m,i),ah(eo(P,S));break e}}m=P=eo(P,S),pt!==4&&(pt=2),Sa===null?Sa=[m]:Sa.push(m),m=v;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var M=om(m,P,i);Vp(m,M);break e;case 1:S=P;var x=m.type,b=m.stateNode;if(!(m.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ei===null||!ei.has(b)))){m.flags|=65536,i&=-i,m.lanes|=i;var X=am(m,S,i);Vp(m,X);break e}}m=m.return}while(m!==null)}Bm(a)}catch(he){i=he,ot===a&&a!==null&&(ot=a=a.return);continue}break}while(!0)}function Fm(){var n=hu.current;return hu.current=su,n===null?su:n}function Yh(){(pt===0||pt===3||pt===2)&&(pt=4),wt===null||!(Yi&268435455)&&!(du&268435455)||ri(wt,Ct)}function _u(n,i){var a=Oe;Oe|=2;var c=Fm();(wt!==n||Ct!==i)&&(wr=null,Ji(n,i));do try{sw();break}catch(d){Um(n,d)}while(!0);if(uh(),Oe=a,hu.current=c,ot!==null)throw Error(t(261));return wt=null,Ct=0,pt}function sw(){for(;ot!==null;)jm(ot)}function ow(){for(;ot!==null&&!ml();)jm(ot)}function jm(n){var i=qm(n.alternate,n,cn);n.memoizedProps=n.pendingProps,i===null?Bm(n):ot=i,Bh.current=null}function Bm(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=ZE(a,i),a!==null){a.flags&=32767,ot=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pt=6,ot=null;return}}else if(a=JE(a,i,cn),a!==null){ot=a;return}if(i=i.sibling,i!==null){ot=i;return}ot=i=n}while(i!==null);pt===0&&(pt=5)}function Zi(n,i,a){var c=ke,d=En.transition;try{En.transition=null,ke=1,aw(n,i,a,c)}finally{En.transition=d,ke=c}return null}function aw(n,i,a,c){do io();while(ti!==null);if(Oe&6)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ze(n,m),n===wt&&(ot=wt=null,Ct=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||pu||(pu=!0,Wm(fn,function(){return io(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=En.transition,En.transition=null;var v=ke;ke=1;var S=Oe;Oe|=4,Bh.current=null,tw(n,a),xm(a,n),CE(Yc),qr=!!Qc,Yc=Qc=null,n.current=a,nw(a),Vc(),Oe=S,ke=v,En.transition=m}else n.current=a;if(pu&&(pu=!1,ti=n,mu=d),m=n.pendingLanes,m===0&&(ei=null),_l(a.stateNode),Jt(n,qe()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(fu)throw fu=!1,n=qh,qh=null,n;return mu&1&&n.tag!==0&&io(),m=n.pendingLanes,m&1?n===Wh?Aa++:(Aa=0,Wh=n):Aa=0,Yr(),null}function io(){if(ti!==null){var n=zr(mu),i=En.transition,a=ke;try{if(En.transition=null,ke=16>n?16:n,ti===null)var c=!1;else{if(n=ti,ti=null,mu=0,Oe&6)throw Error(t(331));var d=Oe;for(Oe|=4,se=n.current;se!==null;){var m=se,v=m.child;if(se.flags&16){var S=m.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(se=j;se!==null;){var Q=se;switch(Q.tag){case 0:case 11:case 15:Ta(8,Q,m)}var Y=Q.child;if(Y!==null)Y.return=Q,se=Y;else for(;se!==null;){Q=se;var G=Q.sibling,ne=Q.return;if(Rm(Q),Q===j){se=null;break}if(G!==null){G.return=ne,se=G;break}se=ne}}}var ae=m.alternate;if(ae!==null){var ue=ae.child;if(ue!==null){ae.child=null;do{var rt=ue.sibling;ue.sibling=null,ue=rt}while(ue!==null)}}se=m}}if(m.subtreeFlags&2064&&v!==null)v.return=m,se=v;else e:for(;se!==null;){if(m=se,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Ta(9,m,m.return)}var M=m.sibling;if(M!==null){M.return=m.return,se=M;break e}se=m.return}}var x=n.current;for(se=x;se!==null;){v=se;var b=v.child;if(v.subtreeFlags&2064&&b!==null)b.return=v,se=b;else e:for(v=x;se!==null;){if(S=se,S.flags&2048)try{switch(S.tag){case 0:case 11:case 15:cu(9,S)}}catch(he){et(S,S.return,he)}if(S===v){se=null;break e}var X=S.sibling;if(X!==null){X.return=S.return,se=X;break e}se=S.return}}if(Oe=d,Yr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Mi,n)}catch{}c=!0}return c}finally{ke=a,En.transition=i}}return!1}function zm(n,i,a){i=eo(a,i),i=om(n,i,1),n=Jr(n,i,1),i=qt(),n!==null&&(jr(n,1,i),Jt(n,i))}function et(n,i,a){if(n.tag===3)zm(n,n,a);else for(;i!==null;){if(i.tag===3){zm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ei===null||!ei.has(c))){n=eo(a,n),n=am(i,n,1),i=Jr(i,n,1),n=qt(),i!==null&&(jr(i,1,n),Jt(i,n));break}}i=i.return}}function lw(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=qt(),n.pingedLanes|=n.suspendedLanes&a,wt===n&&(Ct&a)===a&&(pt===4||pt===3&&(Ct&130023424)===Ct&&500>qe()-$h?Ji(n,0):zh|=a),Jt(n,i)}function $m(n,i){i===0&&(n.mode&1?(i=Cs,Cs<<=1,!(Cs&130023424)&&(Cs=4194304)):i=1);var a=qt();n=_r(n,i),n!==null&&(jr(n,i,a),Jt(n,a))}function uw(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),$m(n,a)}function cw(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),$m(n,a)}var qm;qm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gt.current)Yt=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Yt=!1,XE(n,i,a);Yt=!!(n.flags&131072)}else Yt=!1,Ye&&i.flags&1048576&&Ip(i,Kl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;lu(n,i),n=i.pendingProps;var d=Hs(i,Vt.current);Js(i,a),d=Eh(null,i,c,n,d,a);var m=wh();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Qt(c)?(m=!0,ql(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,fh(i),d.updater=ou,i.stateNode=d,d._reactInternals=i,Ch(i,c,n,a),i=xh(null,i,c,!0,m,a)):(i.tag=0,Ye&&m&&rh(i),$t(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(lu(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=dw(c),n=Vn(c,n),d){case 0:i=Nh(null,i,c,n,a);break e;case 1:i=gm(null,i,c,n,a);break e;case 11:i=hm(null,i,c,n,a);break e;case 14:i=dm(null,i,c,Vn(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),Nh(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),gm(n,i,c,d,a);case 3:e:{if(ym(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Dp(n,i),Zl(i,c,null,a);var v=i.memoizedState;if(c=v.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=eo(Error(t(423)),i),i=_m(n,i,c,a,d);break e}else if(c!==d){d=eo(Error(t(424)),i),i=_m(n,i,c,a,d);break e}else for(un=Kr(i.stateNode.containerInfo.firstChild),ln=i,Ye=!0,Dn=null,a=Np(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Qs(),c===d){i=Er(n,i,a);break e}$t(n,i,c,a)}i=i.child}return i;case 5:return Lp(i),n===null&&oh(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,v=d.children,Xc(c,d)?v=null:m!==null&&Xc(c,m)&&(i.flags|=32),mm(n,i),$t(n,i,v,a),i.child;case 6:return n===null&&oh(i),null;case 13:return vm(n,i,a);case 4:return ph(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ys(i,null,c,a):$t(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),hm(n,i,c,d,a);case 7:return $t(n,i,i.pendingProps,a),i.child;case 8:return $t(n,i,i.pendingProps.children,a),i.child;case 12:return $t(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,v=d.value,We(Yl,c._currentValue),c._currentValue=v,m!==null)if(xn(m.value,v)){if(m.children===d.children&&!Gt.current){i=Er(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var S=m.dependencies;if(S!==null){v=m.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(m.tag===1){P=vr(-1,a&-a),P.tag=2;var j=m.updateQueue;if(j!==null){j=j.shared;var Q=j.pending;Q===null?P.next=P:(P.next=Q.next,Q.next=P),j.pending=P}}m.lanes|=a,P=m.alternate,P!==null&&(P.lanes|=a),hh(m.return,a,i),S.lanes|=a;break}P=P.next}}else if(m.tag===10)v=m.type===i.type?null:m.child;else if(m.tag===18){if(v=m.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),hh(v,a,i),v=m.sibling}else v=m.child;if(v!==null)v.return=m;else for(v=m;v!==null;){if(v===i){v=null;break}if(m=v.sibling,m!==null){m.return=v.return,v=m;break}v=v.return}m=v}$t(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Js(i,a),d=_n(d),c=c(d),i.flags|=1,$t(n,i,c,a),i.child;case 14:return c=i.type,d=Vn(c,i.pendingProps),d=Vn(c.type,d),dm(n,i,c,d,a);case 15:return fm(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Vn(c,d),lu(n,i),i.tag=1,Qt(c)?(n=!0,ql(i)):n=!1,Js(i,a),im(i,c,d),Ch(i,c,d,a),xh(null,i,c,!0,n,a);case 19:return wm(n,i,a);case 22:return pm(n,i,a)}throw Error(t(156,i.tag))};function Wm(n,i){return As(n,i)}function hw(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(n,i,a,c){return new hw(n,i,a,c)}function Xh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function dw(n){if(typeof n=="function")return Xh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===V)return 11;if(n===xt)return 14}return 2}function ii(n,i){var a=n.alternate;return a===null?(a=wn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function vu(n,i,a,c,d,m){var v=2;if(c=n,typeof n=="function")Xh(n)&&(v=1);else if(typeof n=="string")v=5;else e:switch(n){case A:return es(a.children,d,m,i);case I:v=8,d|=8;break;case C:return n=wn(12,a,i,d|2),n.elementType=C,n.lanes=m,n;case R:return n=wn(13,a,i,d),n.elementType=R,n.lanes=m,n;case tt:return n=wn(19,a,i,d),n.elementType=tt,n.lanes=m,n;case Be:return Eu(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:v=10;break e;case D:v=9;break e;case V:v=11;break e;case xt:v=14;break e;case Dt:v=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=wn(v,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function es(n,i,a,c){return n=wn(7,n,c,i),n.lanes=a,n}function Eu(n,i,a,c){return n=wn(22,n,c,i),n.elementType=Be,n.lanes=a,n.stateNode={isHidden:!1},n}function Jh(n,i,a){return n=wn(6,n,null,i),n.lanes=a,n}function Zh(n,i,a){return i=wn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function fw(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fr(0),this.expirationTimes=Fr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ed(n,i,a,c,d,m,v,S,P){return n=new fw(n,i,a,S,P),i===1?(i=1,m===!0&&(i|=8)):i=0,m=wn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},fh(m),n}function pw(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:te,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Hm(n){if(!n)return Qr;n=n._reactInternals;e:{if(Sn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Qt(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Qt(a))return Ep(n,a,i)}return i}function Km(n,i,a,c,d,m,v,S,P){return n=ed(a,c,!0,n,d,m,v,S,P),n.context=Hm(null),a=n.current,c=qt(),d=ni(a),m=vr(c,d),m.callback=i??null,Jr(a,m,d),n.current.lanes=d,jr(n,d,c),Jt(n,c),n}function wu(n,i,a,c){var d=i.current,m=qt(),v=ni(d);return a=Hm(a),i.context===null?i.context=a:i.pendingContext=a,i=vr(m,v),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Jr(d,i,v),n!==null&&(Mn(n,d,v,m),Jl(n,d,v)),v}function Tu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Gm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function td(n,i){Gm(n,i),(n=n.alternate)&&Gm(n,i)}var Qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function nd(n){this._internalRoot=n}Iu.prototype.render=nd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wu(n,i,null,null)},Iu.prototype.unmount=nd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Xi(function(){wu(null,n,null,null)}),i[pr]=null}};function Iu(n){this._internalRoot=n}Iu.prototype.unstable_scheduleHydration=function(n){if(n){var i=Il();n={blockedOn:null,target:n,priority:i};for(var a=0;a<$n.length&&i!==0&&i<$n[a].priority;a++);$n.splice(a,0,n),a===0&&Rl(n)}};function rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ym(){}function mw(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var j=Tu(v);m.call(j)}}var v=Km(i,c,n,0,null,!1,!1,"",Ym);return n._reactRootContainer=v,n[pr]=v.current,ua(n.nodeType===8?n.parentNode:n),Xi(),v}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=Tu(P);S.call(j)}}var P=ed(n,0,!1,null,null,!1,!1,"",Ym);return n._reactRootContainer=P,n[pr]=P.current,ua(n.nodeType===8?n.parentNode:n),Xi(function(){wu(i,P,a,c)}),P}function Au(n,i,a,c,d){var m=a._reactRootContainer;if(m){var v=m;if(typeof d=="function"){var S=d;d=function(){var P=Tu(v);S.call(P)}}wu(i,v,n,d)}else v=mw(a,i,n,d,c);return Tu(v)}wl=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ur(i.pendingLanes);a!==0&&(Br(i,a|1),Jt(i,qe()),!(Oe&6)&&(ro=qe()+500,Yr()))}break;case 13:Xi(function(){var c=_r(n,1);if(c!==null){var d=qt();Mn(c,n,1,d)}}),td(n,1)}},Ps=function(n){if(n.tag===13){var i=_r(n,134217728);if(i!==null){var a=qt();Mn(i,n,134217728,a)}td(n,134217728)}},Tl=function(n){if(n.tag===13){var i=ni(n),a=_r(n,i);if(a!==null){var c=qt();Mn(a,n,i,c)}td(n,i)}},Il=function(){return ke},Sl=function(n,i){var a=ke;try{return ke=n,i()}finally{ke=a}},vs=function(n,i,a){switch(i){case"input":if(Oo(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=zl(c);if(!d)throw Error(t(90));fs(c),Oo(c,d)}}}break;case"textarea":ys(n,a);break;case"select":i=a.value,i!=null&&or(n,!!a.multiple,i,!1)}},xi=Gh,qo=Xi;var gw={usingClientEntryPoint:!1,Events:[da,qs,zl,Bn,$o,Gh]},Ra={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yw={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ko(n),n===null?null:n.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ru=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ru.isDisabled&&Ru.supportsFiber)try{Mi=Ru.inject(yw),rn=Ru}catch{}}return Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw,Zt.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rd(i))throw Error(t(200));return pw(n,i,null,a)},Zt.createRoot=function(n,i){if(!rd(n))throw Error(t(299));var a=!1,c="",d=Qm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=ed(n,1,!1,null,null,a,!1,c,d),n[pr]=i.current,ua(n.nodeType===8?n.parentNode:n),new nd(i)},Zt.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ko(i),n=n===null?null:n.stateNode,n},Zt.flushSync=function(n){return Xi(n)},Zt.hydrate=function(n,i,a){if(!Su(i))throw Error(t(200));return Au(null,n,i,!0,a)},Zt.hydrateRoot=function(n,i,a){if(!rd(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",v=Qm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),i=Km(i,null,n,1,a??null,d,!1,m,v),n[pr]=i.current,ua(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new Iu(i)},Zt.render=function(n,i,a){if(!Su(i))throw Error(t(200));return Au(null,n,i,!1,a)},Zt.unmountComponentAtNode=function(n){if(!Su(n))throw Error(t(40));return n._reactRootContainer?(Xi(function(){Au(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},Zt.unstable_batchedUpdates=Gh,Zt.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Su(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Au(n,i,a,!1,c)},Zt.version="18.3.1-next-f1338f8080-20240426",Zt}var ig;function Ly(){if(ig)return od.exports;ig=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),od.exports=Rw(),od.exports}var sg;function Cw(){if(sg)return Cu;sg=1;var r=Ly();return Cu.createRoot=r.createRoot,Cu.hydrateRoot=r.hydrateRoot,Cu}var Pw=Cw();const kw=Oy(Pw);Ly();/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Ba.apply(this,arguments)}var hi;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(hi||(hi={}));const og="popstate";function Nw(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:h,hash:f}=s.location;return wd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:by(o)}return Dw(e,t,null,r)}function ut(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function My(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function xw(){return Math.random().toString(36).substr(2,8)}function ag(r,e){return{usr:r.state,key:r.key,idx:e}}function wd(r,e,t,s){return t===void 0&&(t=null),Ba({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?So(e):e,{state:t,key:e&&e.key||s||xw()})}function by(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function So(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function Dw(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,h=o.history,f=hi.Pop,g=null,_=E();_==null&&(_=0,h.replaceState(Ba({},h.state,{idx:_}),""));function E(){return(h.state||{idx:null}).idx}function T(){f=hi.Pop;let F=E(),le=F==null?null:F-_;_=F,g&&g({action:f,location:q.location,delta:le})}function k(F,le){f=hi.Push;let ce=wd(q.location,F,le);_=E()+1;let de=ag(ce,_),ve=q.createHref(ce);try{h.pushState(de,"",ve)}catch(Le){if(Le instanceof DOMException&&Le.name==="DataCloneError")throw Le;o.location.assign(ve)}l&&g&&g({action:f,location:q.location,delta:1})}function U(F,le){f=hi.Replace;let ce=wd(q.location,F,le);_=E();let de=ag(ce,_),ve=q.createHref(ce);h.replaceState(de,"",ve),l&&g&&g({action:f,location:q.location,delta:0})}function $(F){let le=o.location.origin!=="null"?o.location.origin:o.location.href,ce=typeof F=="string"?F:by(F);return ce=ce.replace(/ $/,"%20"),ut(le,"No window.location.(origin|href) available to create URL for href: "+ce),new URL(ce,le)}let q={get action(){return f},get location(){return r(o,h)},listen(F){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(og,T),g=F,()=>{o.removeEventListener(og,T),g=null}},createHref(F){return e(o,F)},createURL:$,encodeLocation(F){let le=$(F);return{pathname:le.pathname,search:le.search,hash:le.hash}},push:k,replace:U,go(F){return h.go(F)}};return q}var lg;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(lg||(lg={}));function Vw(r,e,t){return t===void 0&&(t="/"),Ow(r,e,t)}function Ow(r,e,t,s){let o=typeof e=="string"?So(e):e,l=jy(o.pathname||"/",t);if(l==null)return null;let h=Uy(r);Lw(h);let f=null;for(let g=0;f==null&&g<h.length;++g){let _=Kw(l);f=qw(h[g],_)}return f}function Uy(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,h,f)=>{let g={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};g.relativePath.startsWith("/")&&(ut(g.relativePath.startsWith(s),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(s.length));let _=rs([s,g.relativePath]),E=t.concat(g);l.children&&l.children.length>0&&(ut(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),Uy(l.children,e,E,_)),!(l.path==null&&!l.index)&&e.push({path:_,score:zw(_,l.index),routesMeta:E})};return r.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let g of Fy(l.path))o(l,h,g)}),e}function Fy(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let h=Fy(s.join("/")),f=[];return f.push(...h.map(g=>g===""?l:[l,g].join("/"))),o&&f.push(...h),f.map(g=>r.startsWith("/")&&g===""?"/":g)}function Lw(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:$w(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Mw=/^:[\w-]+$/,bw=3,Uw=2,Fw=1,jw=10,Bw=-2,ug=r=>r==="*";function zw(r,e){let t=r.split("/"),s=t.length;return t.some(ug)&&(s+=Bw),e&&(s+=Uw),t.filter(o=>!ug(o)).reduce((o,l)=>o+(Mw.test(l)?bw:l===""?Fw:jw),s)}function $w(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function qw(r,e,t){let{routesMeta:s}=r,o={},l="/",h=[];for(let f=0;f<s.length;++f){let g=s[f],_=f===s.length-1,E=l==="/"?e:e.slice(l.length)||"/",T=Ww({path:g.relativePath,caseSensitive:g.caseSensitive,end:_},E),k=g.route;if(!T)return null;Object.assign(o,T.params),h.push({params:o,pathname:rs([l,T.pathname]),pathnameBase:Xw(rs([l,T.pathnameBase])),route:k}),T.pathnameBase!=="/"&&(l=rs([l,T.pathnameBase]))}return h}function Ww(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Hw(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:s.reduce((_,E,T)=>{let{paramName:k,isOptional:U}=E;if(k==="*"){let q=f[T]||"";h=l.slice(0,l.length-q.length).replace(/(.)\/+$/,"$1")}const $=f[T];return U&&!$?_[k]=void 0:_[k]=($||"").replace(/%2F/g,"/"),_},{}),pathname:l,pathnameBase:h,pattern:r}}function Hw(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),My(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(h,f,g)=>(s.push({paramName:f,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Kw(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return My(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function jy(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function Gw(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?So(r):r;return{pathname:t?t.startsWith("/")?t:Qw(t,e):e,search:Jw(s),hash:Zw(o)}}function Qw(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function ud(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Yw(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function By(r,e){let t=Yw(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function zy(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=So(r):(o=Ba({},r),ut(!o.pathname||!o.pathname.includes("?"),ud("?","pathname","search",o)),ut(!o.pathname||!o.pathname.includes("#"),ud("#","pathname","hash",o)),ut(!o.search||!o.search.includes("#"),ud("#","search","hash",o)));let l=r===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else{let T=e.length-1;if(!s&&h.startsWith("..")){let k=h.split("/");for(;k[0]==="..";)k.shift(),T-=1;o.pathname=k.join("/")}f=T>=0?e[T]:"/"}let g=Gw(o,f),_=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!g.pathname.endsWith("/")&&(_||E)&&(g.pathname+="/"),g}const rs=r=>r.join("/").replace(/\/\/+/g,"/"),Xw=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Jw=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Zw=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function eT(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const $y=["post","put","patch","delete"];new Set($y);const tT=["get",...$y];new Set(tT);/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function za(){return za=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},za.apply(this,arguments)}const Qd=Z.createContext(null),nT=Z.createContext(null),Ja=Z.createContext(null),cc=Z.createContext(null),cs=Z.createContext({outlet:null,matches:[],isDataRoute:!1}),qy=Z.createContext(null);function Za(){return Z.useContext(cc)!=null}function Yd(){return Za()||ut(!1),Z.useContext(cc).location}function Wy(r){Z.useContext(Ja).static||Z.useLayoutEffect(r)}function hc(){let{isDataRoute:r}=Z.useContext(cs);return r?mT():rT()}function rT(){Za()||ut(!1);let r=Z.useContext(Qd),{basename:e,future:t,navigator:s}=Z.useContext(Ja),{matches:o}=Z.useContext(cs),{pathname:l}=Yd(),h=JSON.stringify(By(o,t.v7_relativeSplatPath)),f=Z.useRef(!1);return Wy(()=>{f.current=!0}),Z.useCallback(function(_,E){if(E===void 0&&(E={}),!f.current)return;if(typeof _=="number"){s.go(_);return}let T=zy(_,JSON.parse(h),l,E.relative==="path");r==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:rs([e,T.pathname])),(E.replace?s.replace:s.push)(T,E.state,E)},[e,s,h,l,r])}function iT(r,e){return sT(r,e)}function sT(r,e,t,s){Za()||ut(!1);let{navigator:o}=Z.useContext(Ja),{matches:l}=Z.useContext(cs),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let g=h?h.pathnameBase:"/";h&&h.route;let _=Yd(),E;if(e){var T;let F=typeof e=="string"?So(e):e;g==="/"||(T=F.pathname)!=null&&T.startsWith(g)||ut(!1),E=F}else E=_;let k=E.pathname||"/",U=k;if(g!=="/"){let F=g.replace(/^\//,"").split("/");U="/"+k.replace(/^\//,"").split("/").slice(F.length).join("/")}let $=Vw(r,{pathname:U}),q=cT($&&$.map(F=>Object.assign({},F,{params:Object.assign({},f,F.params),pathname:rs([g,o.encodeLocation?o.encodeLocation(F.pathname).pathname:F.pathname]),pathnameBase:F.pathnameBase==="/"?g:rs([g,o.encodeLocation?o.encodeLocation(F.pathnameBase).pathname:F.pathnameBase])})),l,t,s);return e&&q?Z.createElement(cc.Provider,{value:{location:za({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:hi.Pop}},q):q}function oT(){let r=pT(),e=eT(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Z.createElement(Z.Fragment,null,Z.createElement("h2",null,"Unexpected Application Error!"),Z.createElement("h3",{style:{fontStyle:"italic"}},e),t?Z.createElement("pre",{style:o},t):null,null)}const aT=Z.createElement(oT,null);class lT extends Z.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Z.createElement(cs.Provider,{value:this.props.routeContext},Z.createElement(qy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function uT(r){let{routeContext:e,match:t,children:s}=r,o=Z.useContext(Qd);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Z.createElement(cs.Provider,{value:e},s)}function cT(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let h=r,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=h.findIndex(T=>T.route.id&&(f==null?void 0:f[T.route.id])!==void 0);E>=0||ut(!1),h=h.slice(0,Math.min(h.length,E+1))}let g=!1,_=-1;if(t&&s&&s.v7_partialHydration)for(let E=0;E<h.length;E++){let T=h[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(_=E),T.route.id){let{loaderData:k,errors:U}=t,$=T.route.loader&&k[T.route.id]===void 0&&(!U||U[T.route.id]===void 0);if(T.route.lazy||$){g=!0,_>=0?h=h.slice(0,_+1):h=[h[0]];break}}}return h.reduceRight((E,T,k)=>{let U,$=!1,q=null,F=null;t&&(U=f&&T.route.id?f[T.route.id]:void 0,q=T.route.errorElement||aT,g&&(_<0&&k===0?($=!0,F=null):_===k&&($=!0,F=T.route.hydrateFallbackElement||null)));let le=e.concat(h.slice(0,k+1)),ce=()=>{let de;return U?de=q:$?de=F:T.route.Component?de=Z.createElement(T.route.Component,null):T.route.element?de=T.route.element:de=E,Z.createElement(uT,{match:T,routeContext:{outlet:E,matches:le,isDataRoute:t!=null},children:de})};return t&&(T.route.ErrorBoundary||T.route.errorElement||k===0)?Z.createElement(lT,{location:t.location,revalidation:t.revalidation,component:q,error:U,children:ce(),routeContext:{outlet:null,matches:le,isDataRoute:!0}}):ce()},null)}var Hy=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(Hy||{}),qu=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(qu||{});function hT(r){let e=Z.useContext(Qd);return e||ut(!1),e}function dT(r){let e=Z.useContext(nT);return e||ut(!1),e}function fT(r){let e=Z.useContext(cs);return e||ut(!1),e}function Ky(r){let e=fT(),t=e.matches[e.matches.length-1];return t.route.id||ut(!1),t.route.id}function pT(){var r;let e=Z.useContext(qy),t=dT(qu.UseRouteError),s=Ky(qu.UseRouteError);return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function mT(){let{router:r}=hT(Hy.UseNavigateStable),e=Ky(qu.UseNavigateStable),t=Z.useRef(!1);return Wy(()=>{t.current=!0}),Z.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,za({fromRouteId:e},l)))},[r,e])}const cg={};function gT(r,e){cg[e]||(cg[e]=!0,console.warn(e))}const hg=(r,e,t)=>gT(r,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+r+"` future flag to opt-in early. ")+("For more information, see "+t+"."));function yT(r,e){(r==null?void 0:r.v7_startTransition)===void 0&&hg("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),(r==null?void 0:r.v7_relativeSplatPath)===void 0&&hg("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Gy(r){let{to:e,replace:t,state:s,relative:o}=r;Za()||ut(!1);let{future:l,static:h}=Z.useContext(Ja),{matches:f}=Z.useContext(cs),{pathname:g}=Yd(),_=hc(),E=zy(e,By(f,l.v7_relativeSplatPath),g,o==="path"),T=JSON.stringify(E);return Z.useEffect(()=>_(JSON.parse(T),{replace:t,state:s,relative:o}),[_,T,o,t,s]),null}function ka(r){ut(!1)}function _T(r){let{basename:e="/",children:t=null,location:s,navigationType:o=hi.Pop,navigator:l,static:h=!1,future:f}=r;Za()&&ut(!1);let g=e.replace(/^\/*/,"/"),_=Z.useMemo(()=>({basename:g,navigator:l,static:h,future:za({v7_relativeSplatPath:!1},f)}),[g,f,l,h]);typeof s=="string"&&(s=So(s));let{pathname:E="/",search:T="",hash:k="",state:U=null,key:$="default"}=s,q=Z.useMemo(()=>{let F=jy(E,g);return F==null?null:{location:{pathname:F,search:T,hash:k,state:U,key:$},navigationType:o}},[g,E,T,k,U,$,o]);return q==null?null:Z.createElement(Ja.Provider,{value:_},Z.createElement(cc.Provider,{children:t,value:q}))}function vT(r){let{children:e,location:t}=r;return iT(Td(e),t)}new Promise(()=>{});function Td(r,e){e===void 0&&(e=[]);let t=[];return Z.Children.forEach(r,(s,o)=>{if(!Z.isValidElement(s))return;let l=[...e,o];if(s.type===Z.Fragment){t.push.apply(t,Td(s.props.children,l));return}s.type!==ka&&ut(!1),!s.props.index||!s.props.children||ut(!1);let h={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(h.children=Td(s.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ET="6";try{window.__reactRouterVersion=ET}catch{}const wT="startTransition",dg=Iw[wT];function TT(r){let{basename:e,children:t,future:s,window:o}=r,l=Z.useRef();l.current==null&&(l.current=Nw({window:o,v5Compat:!0}));let h=l.current,[f,g]=Z.useState({action:h.action,location:h.location}),{v7_startTransition:_}=s||{},E=Z.useCallback(T=>{_&&dg?dg(()=>g(T)):g(T)},[g,_]);return Z.useLayoutEffect(()=>h.listen(E),[h,E]),Z.useEffect(()=>yT(s),[s]),Z.createElement(_T,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:s})}var fg;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(fg||(fg={}));var pg;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(pg||(pg={}));var mg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=function(r){const e=[];let t=0;for(let s=0;s<r.length;s++){let o=r.charCodeAt(s);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(r.charCodeAt(++s)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},IT=function(r){const e=[];let t=0,s=0;for(;t<r.length;){const o=r[t++];if(o<128)e[s++]=String.fromCharCode(o);else if(o>191&&o<224){const l=r[t++];e[s++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=r[t++],h=r[t++],f=r[t++],g=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[s++]=String.fromCharCode(55296+(g>>10)),e[s++]=String.fromCharCode(56320+(g&1023))}else{const l=r[t++],h=r[t++];e[s++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},Yy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<r.length;o+=3){const l=r[o],h=o+1<r.length,f=h?r[o+1]:0,g=o+2<r.length,_=g?r[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let k=(f&15)<<2|_>>6,U=_&63;g||(U=64,h||(k=64)),s.push(t[E],t[T],t[k],t[U])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Qy(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):IT(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<r.length;){const l=t[r.charAt(o++)],f=o<r.length?t[r.charAt(o)]:0;++o;const _=o<r.length?t[r.charAt(o)]:64;++o;const T=o<r.length?t[r.charAt(o)]:64;if(++o,l==null||f==null||_==null||T==null)throw new ST;const k=l<<2|f>>4;if(s.push(k),_!==64){const U=f<<4&240|_>>2;if(s.push(U),T!==64){const $=_<<6&192|T;s.push($)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class ST extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AT=function(r){const e=Qy(r);return Yy.encodeByteArray(e,!0)},Wu=function(r){return AT(r).replace(/\./g,"")},Xy=function(r){try{return Yy.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=()=>RT().__FIREBASE_DEFAULTS__,PT=()=>{if(typeof process>"u"||typeof mg>"u")return;const r=mg.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},kT=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&Xy(r[1]);return e&&JSON.parse(e)},dc=()=>{try{return CT()||PT()||kT()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Jy=r=>{var e,t;return(t=(e=dc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},NT=r=>{const e=Jy(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Zy=()=>{var r;return(r=dc())===null||r===void 0?void 0:r.config},e_=r=>{var e;return(e=dc())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",o=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[Wu(JSON.stringify(t)),Wu(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jt())}function OT(){var r;const e=(r=dc())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function LT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MT(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function bT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function UT(){const r=jt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function FT(){return!OT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jT(){try{return typeof indexedDB=="object"}catch{return!1}}function BT(){return new Promise((r,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(s),r(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT="FirebaseError";class Dr extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=zT,Object.setPrototypeOf(this,Dr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,el.prototype.create)}}class el{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?$T(l,s):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new Dr(o,f,s)}}function $T(r,e){return r.replace(qT,(t,s)=>{const o=e[s];return o!=null?String(o):`<${s}?>`})}const qT=/\{\$([^}]+)}/g;function WT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Hu(r,e){if(r===e)return!0;const t=Object.keys(r),s=Object.keys(e);for(const o of t){if(!s.includes(o))return!1;const l=r[o],h=e[o];if(gg(l)&&gg(h)){if(!Hu(l,h))return!1}else if(l!==h)return!1}for(const o of s)if(!t.includes(o))return!1;return!0}function gg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tl(r){const e=[];for(const[t,s]of Object.entries(r))Array.isArray(s)?s.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Na(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[o,l]=s.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function xa(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function HT(r,e){const t=new KT(r,e);return t.subscribe.bind(t)}class KT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let o;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");GT(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:s},o.next===void 0&&(o.next=cd),o.error===void 0&&(o.error=cd),o.complete===void 0&&(o.complete=cd);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GT(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function cd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(r){return r&&r._delegate?r._delegate:r}class os{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new xT;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XT(e))try{this.getOrInitializeService({instanceIdentifier:ts})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});s.resolve(l)}catch{}}}}clearInstance(e=ts){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ts){return this.instances.has(e)}getOptions(e=ts){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);s===f&&h.resolve(o)}return o}onInit(e,t){var s;const o=this.normalizeInstanceIdentifier(t),l=(s=this.onInitCallbacks.get(o))!==null&&s!==void 0?s:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const o of s)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:YT(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ts){return this.component?this.component.multipleInstances?e:ts:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function YT(r){return r===ts?void 0:r}function XT(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new QT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ce;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Ce||(Ce={}));const ZT={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},eI=Ce.INFO,tI={[Ce.DEBUG]:"log",[Ce.VERBOSE]:"log",[Ce.INFO]:"info",[Ce.WARN]:"warn",[Ce.ERROR]:"error"},nI=(r,e,...t)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),o=tI[e];if(o)console[o](`[${s}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=eI,this._logHandler=nI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ZT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ce.DEBUG,...e),this._logHandler(this,Ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ce.VERBOSE,...e),this._logHandler(this,Ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ce.INFO,...e),this._logHandler(this,Ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ce.WARN,...e),this._logHandler(this,Ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ce.ERROR,...e),this._logHandler(this,Ce.ERROR,...e)}}const rI=(r,e)=>e.some(t=>r instanceof t);let yg,_g;function iI(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sI(){return _g||(_g=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const t_=new WeakMap,Id=new WeakMap,n_=new WeakMap,hd=new WeakMap,Jd=new WeakMap;function oI(r){const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("success",l),r.removeEventListener("error",h)},l=()=>{t(mi(r.result)),o()},h=()=>{s(r.error),o()};r.addEventListener("success",l),r.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&t_.set(t,r)}).catch(()=>{}),Jd.set(e,r),e}function aI(r){if(Id.has(r))return;const e=new Promise((t,s)=>{const o=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",h),r.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),o()};r.addEventListener("complete",l),r.addEventListener("error",h),r.addEventListener("abort",h)});Id.set(r,e)}let Sd={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return Id.get(r);if(e==="objectStoreNames")return r.objectStoreNames||n_.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mi(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function lI(r){Sd=r(Sd)}function uI(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=r.call(dd(this),e,...t);return n_.set(s,e.sort?e.sort():[e]),mi(s)}:sI().includes(r)?function(...e){return r.apply(dd(this),e),mi(t_.get(this))}:function(...e){return mi(r.apply(dd(this),e))}}function cI(r){return typeof r=="function"?uI(r):(r instanceof IDBTransaction&&aI(r),rI(r,iI())?new Proxy(r,Sd):r)}function mi(r){if(r instanceof IDBRequest)return oI(r);if(hd.has(r))return hd.get(r);const e=cI(r);return e!==r&&(hd.set(r,e),Jd.set(e,r)),e}const dd=r=>Jd.get(r);function hI(r,e,{blocked:t,upgrade:s,blocking:o,terminated:l}={}){const h=indexedDB.open(r,e),f=mi(h);return s&&h.addEventListener("upgradeneeded",g=>{s(mi(h.result),g.oldVersion,g.newVersion,mi(h.transaction),g)}),t&&h.addEventListener("blocked",g=>t(g.oldVersion,g.newVersion,g)),f.then(g=>{l&&g.addEventListener("close",()=>l()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),f}const dI=["get","getKey","getAll","getAllKeys","count"],fI=["put","add","delete","clear"],fd=new Map;function vg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(fd.get(e))return fd.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,o=fI.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(o||dI.includes(t)))return;const l=async function(h,...f){const g=this.transaction(h,o?"readwrite":"readonly");let _=g.store;return s&&(_=_.index(f.shift())),(await Promise.all([_[t](...f),o&&g.done]))[0]};return fd.set(e,l),l}lI(r=>({...r,get:(e,t,s)=>vg(e,t)||r.get(e,t,s),has:(e,t)=>!!vg(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mI(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function mI(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ad="@firebase/app",Eg="0.10.17";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new Xd("@firebase/app"),gI="@firebase/app-compat",yI="@firebase/analytics-compat",_I="@firebase/analytics",vI="@firebase/app-check-compat",EI="@firebase/app-check",wI="@firebase/auth",TI="@firebase/auth-compat",II="@firebase/database",SI="@firebase/data-connect",AI="@firebase/database-compat",RI="@firebase/functions",CI="@firebase/functions-compat",PI="@firebase/installations",kI="@firebase/installations-compat",NI="@firebase/messaging",xI="@firebase/messaging-compat",DI="@firebase/performance",VI="@firebase/performance-compat",OI="@firebase/remote-config",LI="@firebase/remote-config-compat",MI="@firebase/storage",bI="@firebase/storage-compat",UI="@firebase/firestore",FI="@firebase/vertexai",jI="@firebase/firestore-compat",BI="firebase",zI="11.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="[DEFAULT]",$I={[Ad]:"fire-core",[gI]:"fire-core-compat",[_I]:"fire-analytics",[yI]:"fire-analytics-compat",[EI]:"fire-app-check",[vI]:"fire-app-check-compat",[wI]:"fire-auth",[TI]:"fire-auth-compat",[II]:"fire-rtdb",[SI]:"fire-data-connect",[AI]:"fire-rtdb-compat",[RI]:"fire-fn",[CI]:"fire-fn-compat",[PI]:"fire-iid",[kI]:"fire-iid-compat",[NI]:"fire-fcm",[xI]:"fire-fcm-compat",[DI]:"fire-perf",[VI]:"fire-perf-compat",[OI]:"fire-rc",[LI]:"fire-rc-compat",[MI]:"fire-gcs",[bI]:"fire-gcs-compat",[UI]:"fire-fst",[jI]:"fire-fst-compat",[FI]:"fire-vertex","fire-js":"fire-js",[BI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=new Map,qI=new Map,Cd=new Map;function wg(r,e){try{r.container.addComponent(e)}catch(t){Cr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function go(r){const e=r.name;if(Cd.has(e))return Cr.debug(`There were multiple attempts to register component ${e}.`),!1;Cd.set(e,r);for(const t of Ku.values())wg(t,r);for(const t of qI.values())wg(t,r);return!0}function Zd(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Jn(r){return r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gi=new el("app","Firebase",WI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new os("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=zI;function r_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Rd,automaticDataCollectionEnabled:!1},e),o=s.name;if(typeof o!="string"||!o)throw gi.create("bad-app-name",{appName:String(o)});if(t||(t=Zy()),!t)throw gi.create("no-options");const l=Ku.get(o);if(l){if(Hu(t,l.options)&&Hu(s,l.config))return l;throw gi.create("duplicate-app",{appName:o})}const h=new JT(o);for(const g of Cd.values())h.addComponent(g);const f=new HI(t,s,h);return Ku.set(o,f),f}function i_(r=Rd){const e=Ku.get(r);if(!e&&r===Rd&&Zy())return r_();if(!e)throw gi.create("no-app",{appName:r});return e}function yi(r,e,t){var s;let o=(s=$I[r])!==null&&s!==void 0?s:r;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cr.warn(f.join(" "));return}go(new os(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="firebase-heartbeat-database",GI=1,$a="firebase-heartbeat-store";let pd=null;function s_(){return pd||(pd=hI(KI,GI,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore($a)}catch(t){console.warn(t)}}}}).catch(r=>{throw gi.create("idb-open",{originalErrorMessage:r.message})})),pd}async function QI(r){try{const t=(await s_()).transaction($a),s=await t.objectStore($a).get(o_(r));return await t.done,s}catch(e){if(e instanceof Dr)Cr.warn(e.message);else{const t=gi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cr.warn(t.message)}}}async function Tg(r,e){try{const s=(await s_()).transaction($a,"readwrite");await s.objectStore($a).put(e,o_(r)),await s.done}catch(t){if(t instanceof Dr)Cr.warn(t.message);else{const s=gi.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Cr.warn(s.message)}}}function o_(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=1024,XI=30*24*60*60*1e3;class JI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new eS(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Ig();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l)?void 0:(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(h=>{const f=new Date(h.date).valueOf();return Date.now()-f<=XI}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ig(),{heartbeatsToSend:s,unsentEntries:o}=ZI(this._heartbeatsCache.heartbeats),l=Wu(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Cr.warn(t),""}}}function Ig(){return new Date().toISOString().substring(0,10)}function ZI(r,e=YI){const t=[];let s=r.slice();for(const o of r){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),Sg(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),Sg(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class eS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jT()?BT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await QI(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return Tg(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function Sg(r){return Wu(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(r){go(new os("platform-logger",e=>new pI(e),"PRIVATE")),go(new os("heartbeat",e=>new JI(e),"PRIVATE")),yi(Ad,Eg,r),yi(Ad,Eg,"esm2017"),yi("fire-js","")}tS("");function ef(r,e){var t={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&e.indexOf(s)<0&&(t[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,s=Object.getOwnPropertySymbols(r);o<s.length;o++)e.indexOf(s[o])<0&&Object.prototype.propertyIsEnumerable.call(r,s[o])&&(t[s[o]]=r[s[o]]);return t}function a_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nS=a_,l_=new el("auth","Firebase",a_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu=new Xd("@firebase/auth");function rS(r,...e){Gu.logLevel<=Ce.WARN&&Gu.warn(`Auth (${Ao}): ${r}`,...e)}function Ou(r,...e){Gu.logLevel<=Ce.ERROR&&Gu.error(`Auth (${Ao}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(r,...e){throw tf(r,...e)}function Zn(r,...e){return tf(r,...e)}function u_(r,e,t){const s=Object.assign(Object.assign({},nS()),{[e]:t});return new el("auth","Firebase",s).create(e,{appName:r.name})}function Ar(r){return u_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tf(r,...e){if(typeof r!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(t,...s)}return l_.create(r,...e)}function _e(r,e,...t){if(!r)throw tf(e,...t)}function Tr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Ou(e),new Error(e)}function Pr(r,e){r||Tr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pd(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function iS(){return Ag()==="http:"||Ag()==="https:"}function Ag(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(iS()||MT()||"connection"in navigator)?navigator.onLine:!0}function oS(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pr(t>e,"Short delay should be less than long delay!"),this.isMobile=VT()||bT()}get(){return sS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(r,e){Pr(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=new nl(3e4,6e4);function Vr(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Or(r,e,t,s,o={}){return h_(r,o,async()=>{let l={},h={};s&&(e==="GET"?h=s:l={body:JSON.stringify(s)});const f=tl(Object.assign({key:r.config.apiKey},h)).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const _=Object.assign({method:e,headers:g},l);return LT()||(_.referrerPolicy="no-referrer"),c_.fetch()(d_(r,r.config.apiHost,t,f),_)})}async function h_(r,e,t){r._canInitEmulator=!1;const s=Object.assign(Object.assign({},aS),e);try{const o=new cS(r),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Pu(r,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[g,_]=f.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pu(r,"credential-already-in-use",h);if(g==="EMAIL_EXISTS")throw Pu(r,"email-already-in-use",h);if(g==="USER_DISABLED")throw Pu(r,"user-disabled",h);const E=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw u_(r,E,_);Un(r,E)}}catch(o){if(o instanceof Dr)throw o;Un(r,"network-request-failed",{message:String(o)})}}async function rl(r,e,t,s,o={}){const l=await Or(r,e,t,s,o);return"mfaPendingCredential"in l&&Un(r,"multi-factor-auth-required",{_serverResponse:l}),l}function d_(r,e,t,s){const o=`${e}${t}?${s}`;return r.config.emulator?nf(r.config,o):`${r.config.apiScheme}://${o}`}function uS(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cS{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Zn(this.auth,"network-request-failed")),lS.get())})}}function Pu(r,e,t){const s={appName:r.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const o=Zn(r,e,s);return o.customData._tokenResponse=t,o}function Rg(r){return r!==void 0&&r.enterprise!==void 0}class hS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return uS(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function dS(r,e){return Or(r,"GET","/v2/recaptchaConfig",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(r,e){return Or(r,"POST","/v1/accounts:delete",e)}async function f_(r,e){return Or(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pS(r,e=!1){const t=yt(r),s=await t.getIdToken(e),o=rf(s);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l==null?void 0:l.sign_in_provider;return{claims:o,token:s,authTime:Ma(md(o.auth_time)),issuedAtTime:Ma(md(o.iat)),expirationTime:Ma(md(o.exp)),signInProvider:h||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function md(r){return Number(r)*1e3}function rf(r){const[e,t,s]=r.split(".");if(e===void 0||t===void 0||s===void 0)return Ou("JWT malformed, contained fewer than 3 sections"),null;try{const o=Xy(t);return o?JSON.parse(o):(Ou("Failed to decode base64 JWT payload"),null)}catch(o){return Ou("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Cg(r){const e=rf(r);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(r,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof Dr&&mS(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function mS({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ma(this.lastLoginAt),this.creationTime=Ma(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qu(r){var e;const t=r.auth,s=await r.getIdToken(),o=await qa(r,f_(t,{idToken:s}));_e(o==null?void 0:o.users.length,t,"internal-error");const l=o.users[0];r._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?p_(l.providerUserInfo):[],f=_S(r.providerData,h),g=r.isAnonymous,_=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),E=g?_:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new kd(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(r,T)}async function yS(r){const e=yt(r);await Qu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _S(r,e){return[...r.filter(s=>!e.some(o=>o.providerId===s.providerId)),...e]}function p_(r){return r.map(e=>{var{providerId:t}=e,s=ef(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vS(r,e){const t=await h_(r,{},async()=>{const s=tl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=r.config,h=d_(r,o,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",c_.fetch()(h,{method:"POST",headers:f,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ES(r,e){return Or(r,"POST","/v2/accounts:revokeToken",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Cg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=Cg(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:o,expiresIn:l}=await vS(e,t);this.updateTokensAndExpiration(s,o,Number(l))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:o,expirationTime:l}=t,h=new co;return s&&(_e(typeof s=="string","internal-error",{appName:e}),h.refreshToken=s),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new co,this.toJSON())}_performRefresh(){return Tr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(r,e){_e(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:t,auth:s,stsTokenManager:o}=e,l=ef(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new kd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await qa(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return pS(this,e)}reload(){return yS(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await Qu(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jn(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await qa(this,fS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,o,l,h,f,g,_,E;const T=(s=t.displayName)!==null&&s!==void 0?s:void 0,k=(o=t.email)!==null&&o!==void 0?o:void 0,U=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,$=(h=t.photoURL)!==null&&h!==void 0?h:void 0,q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,F=(g=t._redirectEventId)!==null&&g!==void 0?g:void 0,le=(_=t.createdAt)!==null&&_!==void 0?_:void 0,ce=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:de,emailVerified:ve,isAnonymous:Le,providerData:te,stsTokenManager:A}=t;_e(de&&A,e,"internal-error");const I=co.fromJSON(this.name,A);_e(typeof de=="string",e,"internal-error"),oi(T,e.name),oi(k,e.name),_e(typeof ve=="boolean",e,"internal-error"),_e(typeof Le=="boolean",e,"internal-error"),oi(U,e.name),oi($,e.name),oi(q,e.name),oi(F,e.name),oi(le,e.name),oi(ce,e.name);const C=new Ir({uid:de,auth:e,email:k,emailVerified:ve,displayName:T,isAnonymous:Le,photoURL:$,phoneNumber:U,tenantId:q,stsTokenManager:I,createdAt:le,lastLoginAt:ce});return te&&Array.isArray(te)&&(C.providerData=te.map(N=>Object.assign({},N))),F&&(C._redirectEventId=F),C}static async _fromIdTokenResponse(e,t,s=!1){const o=new co;o.updateFromServerResponse(t);const l=new Ir({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:s});return await Qu(l),l}static async _fromGetAccountInfoResponse(e,t,s){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?p_(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!(l!=null&&l.length),f=new co;f.updateFromIdToken(s);const g=new Ir({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new kd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(l!=null&&l.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;function Sr(r){Pr(r instanceof Function,"Expected a class definition");let e=Pg.get(r);return e?(Pr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Pg.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}m_.type="NONE";const kg=m_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(r,e,t){return`firebase:${r}:${e}:${t}`}class ho{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:o,name:l}=this.auth;this.fullUserKey=Lu(this.userKey,o.apiKey,l),this.fullPersistenceKey=Lu("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new ho(Sr(kg),e,s);const o=(await Promise.all(t.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let l=o[0]||Sr(kg);const h=Lu(s,e.config.apiKey,e.name);let f=null;for(const _ of t)try{const E=await _._get(h);if(E){const T=Ir._fromJSON(e,E);_!==l&&(f=T),l=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!l._shouldAllowMigration||!g.length?new ho(l,e,s):(l=g[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async _=>{if(_!==l)try{await _._remove(h)}catch{}})),new ho(l,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(v_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(g_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(w_(e))return"Blackberry";if(T_(e))return"Webos";if(y_(e))return"Safari";if((e.includes("chrome/")||__(e))&&!e.includes("edge/"))return"Chrome";if(E_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function g_(r=jt()){return/firefox\//i.test(r)}function y_(r=jt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function __(r=jt()){return/crios\//i.test(r)}function v_(r=jt()){return/iemobile/i.test(r)}function E_(r=jt()){return/android/i.test(r)}function w_(r=jt()){return/blackberry/i.test(r)}function T_(r=jt()){return/webos/i.test(r)}function sf(r=jt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function wS(r=jt()){var e;return sf(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function TS(){return UT()&&document.documentMode===10}function I_(r=jt()){return sf(r)||E_(r)||T_(r)||w_(r)||/windows phone/i.test(r)||v_(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(r,e=[]){let t;switch(r){case"Browser":t=Ng(jt());break;case"Worker":t=`${Ng(jt())}-${r}`;break;default:t=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ao}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=l=>new Promise((h,f)=>{try{const g=e(l);h(g)}catch(g){f(g)}});s.onAbort=t,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SS(r,e={}){return Or(r,"GET","/v2/passwordPolicy",Vr(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=6;class RS{constructor(e){var t,s,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:AS,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,o,l,h,f;const g={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,g),this.validatePasswordCharacterOptions(e,g),g.isValid&&(g.isValid=(t=g.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),g.isValid&&(g.isValid=(s=g.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),g.isValid&&(g.isValid=(o=g.containsLowercaseLetter)!==null&&o!==void 0?o:!0),g.isValid&&(g.isValid=(l=g.containsUppercaseLetter)!==null&&l!==void 0?l:!0),g.isValid&&(g.isValid=(h=g.containsNumericCharacter)!==null&&h!==void 0?h:!0),g.isValid&&(g.isValid=(f=g.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),g}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let o=0;o<e.length;o++)s=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e,t,s,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xg(this),this.idTokenSubscription=new xg(this),this.beforeStateQueue=new IS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Sr(t)),this._initializationPromise=this.queue(async()=>{var s,o;if(!this._deleted&&(this.persistenceManager=await ho.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((o=this.currentUser)===null||o===void 0?void 0:o.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await f_(this,{idToken:e}),s=await Ir._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Jn(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let o=s,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o==null?void 0:o._redirectEventId,g=await this.tryRedirectSignIn(e);(!h||h===f)&&(g!=null&&g.user)&&(o=g.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Qu(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jn(this.app))return Promise.reject(Ar(this));const t=e?yt(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jn(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jn(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SS(this),t=new RS(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new el("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await ES(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Sr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await ho.create(this,[Sr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const g=e.addObserver(t,s,o);return()=>{h=!0,g()}}else{const g=e.addObserver(t);return()=>{h=!0,g()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=S_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&rS(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Si(r){return yt(r)}class xg{constructor(e){this.auth=e,this.observer=null,this.addObserver=HT(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PS(r){fc=r}function A_(r){return fc.loadJS(r)}function kS(){return fc.recaptchaEnterpriseScript}function NS(){return fc.gapiScript}function xS(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class DS{constructor(){this.enterprise=new VS}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class VS{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const OS="recaptcha-enterprise",R_="NO_RECAPTCHA";class LS{constructor(e){this.type=OS,this.auth=Si(e)}async verify(e="verify",t=!1){async function s(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{dS(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const _=new hS(g);return l.tenantId==null?l._agentRecaptchaConfig=_:l._tenantRecaptchaConfigs[l.tenantId]=_,h(_.siteKey)}}).catch(g=>{f(g)})})}function o(l,h,f){const g=window.grecaptcha;Rg(g)?g.enterprise.ready(()=>{g.enterprise.execute(l,{action:e}).then(_=>{h(_)}).catch(()=>{h(R_)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new DS().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{s(this.auth).then(f=>{if(!t&&Rg(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let g=kS();g.length!==0&&(g+=f),A_(g).then(()=>{o(f,l,h)}).catch(_=>{h(_)})}}).catch(f=>{h(f)})})}}async function Dg(r,e,t,s=!1,o=!1){const l=new LS(r);let h;if(o)h=R_;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const g=f.phoneEnrollmentInfo.phoneNumber,_=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:_,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const g=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return s?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Yu(r,e,t,s,o){var l;if(!((l=r._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await Dg(r,e,t,t==="getOobCode");return s(r,h)}else return s(r,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Dg(r,e,t,t==="getOobCode");return s(r,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MS(r,e){const t=Zd(r,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(Hu(l,e??{}))return o;Un(o,"already-initialized")}return t.initialize({options:e})}function bS(r,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Sr);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function US(r,e,t){const s=Si(r);_e(s._canInitEmulator,s,"emulator-config-failed"),_e(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const o=!1,l=C_(e),{host:h,port:f}=FS(e),g=f===null?"":`:${f}`;s.config.emulator={url:`${l}//${h}${g}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})}),jS()}function C_(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function FS(r){const e=C_(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const l=o[1];return{host:l,port:Vg(s.substr(l.length+1))}}else{const[l,h]=s.split(":");return{host:l,port:Vg(h)}}}function Vg(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function jS(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tr("not implemented")}_getIdTokenResponse(e){return Tr("not implemented")}_linkToIdToken(e,t){return Tr("not implemented")}_getReauthenticationResolver(e){return Tr("not implemented")}}async function BS(r,e){return Or(r,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(r,e){return rl(r,"POST","/v1/accounts:signInWithPassword",Vr(r,e))}async function P_(r,e){return Or(r,"POST","/v1/accounts:sendOobCode",Vr(r,e))}async function $S(r,e){return P_(r,e)}async function qS(r,e){return P_(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WS(r,e){return rl(r,"POST","/v1/accounts:signInWithEmailLink",Vr(r,e))}async function HS(r,e){return rl(r,"POST","/v1/accounts:signInWithEmailLink",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa extends of{constructor(e,t,s,o=null){super("password",s),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new Wa(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new Wa(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yu(e,t,"signInWithPassword",zS);case"emailLink":return WS(e,{email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Yu(e,s,"signUpPassword",BS);case"emailLink":return HS(e,{idToken:t,email:this._email,oobCode:this._password});default:Un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(r,e){return rl(r,"POST","/v1/accounts:signInWithIdp",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="http://localhost";class as extends of{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new as(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Un("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:o}=t,l=ef(t,["providerId","signInMethod"]);if(!s||!o)return null;const h=new as(s,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return fo(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,fo(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,fo(e,t)}buildRequest(){const e={requestUri:KS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=tl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QS(r){const e=Na(xa(r)).link,t=e?Na(xa(e)).deep_link_id:null,s=Na(xa(r)).deep_link_id;return(s?Na(xa(s)).link:null)||s||t||e||r}class af{constructor(e){var t,s,o,l,h,f;const g=Na(xa(e)),_=(t=g.apiKey)!==null&&t!==void 0?t:null,E=(s=g.oobCode)!==null&&s!==void 0?s:null,T=GS((o=g.mode)!==null&&o!==void 0?o:null);_e(_&&E&&T,"argument-error"),this.apiKey=_,this.operation=T,this.code=E,this.continueUrl=(l=g.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=g.languageCode)!==null&&h!==void 0?h:null,this.tenantId=(f=g.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=QS(e);try{return new af(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,t){return Wa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=af.parseLink(t);return _e(s,"argument-error"),Wa._fromEmailAndCode(e,s.code,s.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends k_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends il{constructor(){super("facebook.com")}static credential(e){return as._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ai.credential(e.oauthAccessToken)}catch{return null}}}ai.FACEBOOK_SIGN_IN_METHOD="facebook.com";ai.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li extends il{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return as._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return li.credential(t,s)}catch{return null}}}li.GOOGLE_SIGN_IN_METHOD="google.com";li.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends il{constructor(){super("github.com")}static credential(e){return as._fromParams({providerId:ui.PROVIDER_ID,signInMethod:ui.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ui.credentialFromTaggedObject(e)}static credentialFromError(e){return ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ui.credential(e.oauthAccessToken)}catch{return null}}}ui.GITHUB_SIGN_IN_METHOD="github.com";ui.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci extends il{constructor(){super("twitter.com")}static credential(e,t){return as._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ci.credential(t,s)}catch{return null}}}ci.TWITTER_SIGN_IN_METHOD="twitter.com";ci.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(r,e){return rl(r,"POST","/v1/accounts:signUp",Vr(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,o=!1){const l=await Ir._fromIdTokenResponse(e,s,o),h=Og(s);return new ls({user:l,providerId:h,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const o=Og(s);return new ls({user:e,providerId:o,_tokenResponse:s,operationType:t})}}function Og(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends Dr{constructor(e,t,s,o){var l;super(t.code,t.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,Xu.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,o){return new Xu(e,t,s,o)}}function N_(r,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Xu._fromErrorAndOperation(r,l,e,s):l})}async function XS(r,e,t=!1){const s=await qa(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ls._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(r,e,t=!1){const{auth:s}=r;if(Jn(s.app))return Promise.reject(Ar(s));const o="reauthenticate";try{const l=await qa(r,N_(s,o,e,r),t);_e(l.idToken,s,"internal-error");const h=rf(l.idToken);_e(h,s,"internal-error");const{sub:f}=h;return _e(r.uid===f,s,"user-mismatch"),ls._forOperation(r,o,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Un(s,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x_(r,e,t=!1){if(Jn(r.app))return Promise.reject(Ar(r));const s="signIn",o=await N_(r,s,e),l=await ls._fromIdTokenResponse(r,s,o);return t||await r._updateCurrentUser(l.user),l}async function ZS(r,e){return x_(Si(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D_(r){const e=Si(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function V_(r,e,t){const s=Si(r);await Yu(s,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",qS)}async function e0(r,e,t){if(Jn(r.app))return Promise.reject(Ar(r));const s=Si(r),h=await Yu(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YS).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&D_(r),g}),f=await ls._fromIdTokenResponse(s,"signIn",h);return await s._updateCurrentUser(f.user),f}function t0(r,e,t){return Jn(r.app)?Promise.reject(Ar(r)):ZS(yt(r),Ro.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&D_(r),s})}async function n0(r,e){const t=yt(r),o={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()},{email:l}=await $S(t.auth,o);l!==r.email&&await r.reload()}function r0(r,e,t,s){return yt(r).onIdTokenChanged(e,t,s)}function i0(r,e,t){return yt(r).beforeAuthStateChanged(e,t)}function s0(r,e,t,s){return yt(r).onAuthStateChanged(e,t,s)}function O_(r){return yt(r).signOut()}const Ju="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ju,"1"),this.storage.removeItem(Ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=1e3,a0=10;class M_ extends L_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=I_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),o=this.localCache[t];s!==o&&e(t,o,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,g)=>{this.notifyListeners(h,g)});return}const s=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(s);!t&&this.localCache[s]===h||this.notifyListeners(s,h)},l=this.storage.getItem(s);TS()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,a0):o()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},o0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}M_.type="LOCAL";const l0=M_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_ extends L_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}b_.type="SESSION";const U_=b_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u0(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const s=new pc(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!(h!=null&&h.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const f=Array.from(h).map(async _=>_(t.origin,l)),g=await u0(f);t.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:g})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(r="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,g)=>{const _=lf("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},s);h={messageChannel:o,onMessage(T){const k=T;if(k.data.eventId===_)switch(k.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(k.data.response);break;default:clearTimeout(E),clearTimeout(l),g(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:_,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(){return window}function h0(r){er().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F_(){return typeof er().WorkerGlobalScope<"u"&&typeof er().importScripts=="function"}async function d0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function f0(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function p0(){return F_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j_="firebaseLocalStorageDb",m0=1,Zu="firebaseLocalStorage",B_="fbase_key";class sl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function mc(r,e){return r.transaction([Zu],e?"readwrite":"readonly").objectStore(Zu)}function g0(){const r=indexedDB.deleteDatabase(j_);return new sl(r).toPromise()}function Nd(){const r=indexedDB.open(j_,m0);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(Zu,{keyPath:B_})}catch(o){t(o)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(Zu)?e(s):(s.close(),await g0(),e(await Nd()))})})}async function Lg(r,e,t){const s=mc(r,!0).put({[B_]:e,value:t});return new sl(s).toPromise()}async function y0(r,e){const t=mc(r,!1).get(e),s=await new sl(t).toPromise();return s===void 0?null:s.value}function Mg(r,e){const t=mc(r,!0).delete(e);return new sl(t).toPromise()}const _0=800,v0=3;class z_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>v0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return F_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pc._getInstance(p0()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await d0(),!this.activeServiceWorker)return;this.sender=new c0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||f0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nd();return await Lg(e,Ju,"1"),await Mg(e,Ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Lg(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>y0(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=mc(o,!1).getAll();return new sl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const o of Array.from(s))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}z_.type="LOCAL";const E0=z_;new nl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(r,e){return e?Sr(e):(_e(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends of{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return fo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return fo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function T0(r){return x_(r.auth,new uf(r),r.bypassAuthState)}function I0(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),JS(t,new uf(r),r.bypassAuthState)}async function S0(r){const{auth:e,user:t}=r;return _e(t,e,"internal-error"),XS(t,new uf(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(e,t,s,o,l=!1){this.auth=e,this.resolver=s,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const g={auth:this.auth,requestUri:t,sessionId:s,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(g))}catch(_){this.reject(_)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return T0;case"linkViaPopup":case"linkViaRedirect":return S0;case"reauthViaPopup":case"reauthViaRedirect":return I0;default:Un(this.auth,"internal-error")}}resolve(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=new nl(2e3,1e4);class uo extends $_{constructor(e,t,s,o,l){super(e,t,o,l),this.provider=s,this.authWindow=null,this.pollId=null,uo.currentPopupAction&&uo.currentPopupAction.cancel(),uo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){Pr(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Zn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,uo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,A0.get())};e()}}uo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="pendingRedirect",Mu=new Map;class C0 extends $_{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const s=await P0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function P0(r,e){const t=x0(e),s=N0(r);if(!await s._isAvailable())return!1;const o=await s._get(t)==="true";return await s._remove(t),o}function k0(r,e){Mu.set(r._key(),e)}function N0(r){return Sr(r._redirectPersistence)}function x0(r){return Lu(R0,r.config.apiKey,r.name)}async function D0(r,e,t=!1){if(Jn(r.app))return Promise.reject(Ar(r));const s=Si(r),o=w0(s,e),h=await new C0(s,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await s._persistUserIfCurrent(h.user),await s._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0=10*60*1e3;class O0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!L0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!q_(e)){const o=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Zn(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=V0&&this.cachedEventUids.clear(),this.cachedEventUids.has(bg(e))}saveEventToCache(e){this.cachedEventUids.add(bg(e)),this.lastProcessedEventTime=Date.now()}}function bg(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function q_({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function L0(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q_(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M0(r,e={}){return Or(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,U0=/^https?/;async function F0(r){if(r.config.emulator)return;const{authorizedDomains:e}=await M0(r);for(const t of e)try{if(j0(t))return}catch{}Un(r,"unauthorized-domain")}function j0(r){const e=Pd(),{protocol:t,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const h=new URL(r);return h.hostname===""&&s===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===s}if(!U0.test(t))return!1;if(b0.test(r))return s===r;const o=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=new nl(3e4,6e4);function Ug(){const r=er().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function z0(r){return new Promise((e,t)=>{var s,o,l;function h(){Ug(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ug(),t(Zn(r,"network-request-failed"))},timeout:B0.get()})}if(!((o=(s=er().gapi)===null||s===void 0?void 0:s.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=er().gapi)===null||l===void 0)&&l.load)h();else{const f=xS("iframefcb");return er()[f]=()=>{gapi.load?h():t(Zn(r,"network-request-failed"))},A_(`${NS()}?onload=${f}`).catch(g=>t(g))}}).catch(e=>{throw bu=null,e})}let bu=null;function $0(r){return bu=bu||z0(r),bu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new nl(5e3,15e3),W0="__/auth/iframe",H0="emulator/auth/iframe",K0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},G0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Q0(r){const e=r.config;_e(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?nf(e,H0):`https://${r.config.authDomain}/${W0}`,s={apiKey:e.apiKey,appName:r.name,v:Ao},o=G0.get(r.config.apiHost);o&&(s.eid=o);const l=r._getFrameworks();return l.length&&(s.fw=l.join(",")),`${t}?${tl(s).slice(1)}`}async function Y0(r){const e=await $0(r),t=er().gapi;return _e(t,r,"internal-error"),e.open({where:document.body,url:Q0(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:K0,dontclear:!0},s=>new Promise(async(o,l)=>{await s.restyle({setHideOnLeave:!1});const h=Zn(r,"network-request-failed"),f=er().setTimeout(()=>{l(h)},q0.get());function g(){er().clearTimeout(f),o(s)}s.ping(g).then(g,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},J0=500,Z0=600,eA="_blank",tA="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nA(r,e,t,s=J0,o=Z0){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-s)/2,0).toString();let f="";const g=Object.assign(Object.assign({},X0),{width:s.toString(),height:o.toString(),top:l,left:h}),_=jt().toLowerCase();t&&(f=__(_)?eA:t),g_(_)&&(e=e||tA,g.scrollbars="yes");const E=Object.entries(g).reduce((k,[U,$])=>`${k}${U}=${$},`,"");if(wS(_)&&f!=="_self")return rA(e||"",f),new Fg(null);const T=window.open(e||"",f,E);_e(T,r,"popup-blocked");try{T.focus()}catch{}return new Fg(T)}function rA(r,e){const t=document.createElement("a");t.href=r,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA="__/auth/handler",sA="emulator/auth/handler",oA=encodeURIComponent("fac");async function jg(r,e,t,s,o,l){_e(r.config.authDomain,r,"auth-domain-config-required"),_e(r.config.apiKey,r,"invalid-api-key");const h={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:s,v:Ao,eventId:o};if(e instanceof k_){e.setDefaultLanguage(r.languageCode),h.providerId=e.providerId||"",WT(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof il){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}r.tenantId&&(h.tid=r.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const g=await r._getAppCheckToken(),_=g?`#${oA}=${encodeURIComponent(g)}`:"";return`${aA(r)}?${tl(f).slice(1)}${_}`}function aA({config:r}){return r.emulator?nf(r,sA):`https://${r.authDomain}/${iA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd="webStorageSupport";class lA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U_,this._completeRedirectFn=D0,this._overrideRedirectResult=k0}async _openPopup(e,t,s,o){var l;Pr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await jg(e,t,s,Pd(),o);return nA(e,h,lf())}async _openRedirect(e,t,s,o){await this._originValidation(e);const l=await jg(e,t,s,Pd(),o);return h0(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(Pr(l,"If manager is not set, promise should be"),l)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Y0(e),s=new O0(e);return t.register("authEvent",o=>(_e(o==null?void 0:o.authEvent,e,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(gd,{type:gd},o=>{var l;const h=(l=o==null?void 0:o[0])===null||l===void 0?void 0:l[gd];h!==void 0&&t(!!h),Un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=F0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return I_()||y_()||sf()}}const uA=lA;var Bg="@firebase/auth",zg="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dA(r){go(new os("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=s.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:h,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:S_(r)},_=new CS(s,o,l,g);return bS(_,t),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),go(new os("auth-internal",e=>{const t=Si(e.getProvider("auth").getImmediate());return(s=>new cA(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(Bg,zg,hA(r)),yi(Bg,zg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=5*60,pA=e_("authIdTokenMaxAge")||fA;let $g=null;const mA=r=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>pA)return;const o=t==null?void 0:t.token;$g!==o&&($g=o,await fetch(r,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function gA(r=i_()){const e=Zd(r,"auth");if(e.isInitialized())return e.getImmediate();const t=MS(r,{popupRedirectResolver:uA,persistence:[E0,l0,U_]}),s=e_("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(s,location.origin);if(location.origin===l.origin){const h=mA(l.toString());i0(t,h,()=>h(t.currentUser)),r0(t,f=>h(f))}}const o=Jy("auth");return o&&US(t,`http://${o}`),t}function yA(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}PS({loadJS(r){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=o=>{const l=Zn("internal-error");l.customData=o,t(l)},s.type="text/javascript",s.charset="UTF-8",yA().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dA("Browser");var _A="firebase",vA="11.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yi(_A,vA,"app");var qg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var is,W_;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,I){function C(){}C.prototype=I.prototype,A.D=I.prototype,A.prototype=new C,A.prototype.constructor=A,A.C=function(N,D,V){for(var R=Array(arguments.length-2),tt=2;tt<arguments.length;tt++)R[tt-2]=arguments[tt];return I.prototype[D].apply(N,R)}}function t(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,t),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(A,I,C){C||(C=0);var N=Array(16);if(typeof I=="string")for(var D=0;16>D;++D)N[D]=I.charCodeAt(C++)|I.charCodeAt(C++)<<8|I.charCodeAt(C++)<<16|I.charCodeAt(C++)<<24;else for(D=0;16>D;++D)N[D]=I[C++]|I[C++]<<8|I[C++]<<16|I[C++]<<24;I=A.g[0],C=A.g[1],D=A.g[2];var V=A.g[3],R=I+(V^C&(D^V))+N[0]+3614090360&4294967295;I=C+(R<<7&4294967295|R>>>25),R=V+(D^I&(C^D))+N[1]+3905402710&4294967295,V=I+(R<<12&4294967295|R>>>20),R=D+(C^V&(I^C))+N[2]+606105819&4294967295,D=V+(R<<17&4294967295|R>>>15),R=C+(I^D&(V^I))+N[3]+3250441966&4294967295,C=D+(R<<22&4294967295|R>>>10),R=I+(V^C&(D^V))+N[4]+4118548399&4294967295,I=C+(R<<7&4294967295|R>>>25),R=V+(D^I&(C^D))+N[5]+1200080426&4294967295,V=I+(R<<12&4294967295|R>>>20),R=D+(C^V&(I^C))+N[6]+2821735955&4294967295,D=V+(R<<17&4294967295|R>>>15),R=C+(I^D&(V^I))+N[7]+4249261313&4294967295,C=D+(R<<22&4294967295|R>>>10),R=I+(V^C&(D^V))+N[8]+1770035416&4294967295,I=C+(R<<7&4294967295|R>>>25),R=V+(D^I&(C^D))+N[9]+2336552879&4294967295,V=I+(R<<12&4294967295|R>>>20),R=D+(C^V&(I^C))+N[10]+4294925233&4294967295,D=V+(R<<17&4294967295|R>>>15),R=C+(I^D&(V^I))+N[11]+2304563134&4294967295,C=D+(R<<22&4294967295|R>>>10),R=I+(V^C&(D^V))+N[12]+1804603682&4294967295,I=C+(R<<7&4294967295|R>>>25),R=V+(D^I&(C^D))+N[13]+4254626195&4294967295,V=I+(R<<12&4294967295|R>>>20),R=D+(C^V&(I^C))+N[14]+2792965006&4294967295,D=V+(R<<17&4294967295|R>>>15),R=C+(I^D&(V^I))+N[15]+1236535329&4294967295,C=D+(R<<22&4294967295|R>>>10),R=I+(D^V&(C^D))+N[1]+4129170786&4294967295,I=C+(R<<5&4294967295|R>>>27),R=V+(C^D&(I^C))+N[6]+3225465664&4294967295,V=I+(R<<9&4294967295|R>>>23),R=D+(I^C&(V^I))+N[11]+643717713&4294967295,D=V+(R<<14&4294967295|R>>>18),R=C+(V^I&(D^V))+N[0]+3921069994&4294967295,C=D+(R<<20&4294967295|R>>>12),R=I+(D^V&(C^D))+N[5]+3593408605&4294967295,I=C+(R<<5&4294967295|R>>>27),R=V+(C^D&(I^C))+N[10]+38016083&4294967295,V=I+(R<<9&4294967295|R>>>23),R=D+(I^C&(V^I))+N[15]+3634488961&4294967295,D=V+(R<<14&4294967295|R>>>18),R=C+(V^I&(D^V))+N[4]+3889429448&4294967295,C=D+(R<<20&4294967295|R>>>12),R=I+(D^V&(C^D))+N[9]+568446438&4294967295,I=C+(R<<5&4294967295|R>>>27),R=V+(C^D&(I^C))+N[14]+3275163606&4294967295,V=I+(R<<9&4294967295|R>>>23),R=D+(I^C&(V^I))+N[3]+4107603335&4294967295,D=V+(R<<14&4294967295|R>>>18),R=C+(V^I&(D^V))+N[8]+1163531501&4294967295,C=D+(R<<20&4294967295|R>>>12),R=I+(D^V&(C^D))+N[13]+2850285829&4294967295,I=C+(R<<5&4294967295|R>>>27),R=V+(C^D&(I^C))+N[2]+4243563512&4294967295,V=I+(R<<9&4294967295|R>>>23),R=D+(I^C&(V^I))+N[7]+1735328473&4294967295,D=V+(R<<14&4294967295|R>>>18),R=C+(V^I&(D^V))+N[12]+2368359562&4294967295,C=D+(R<<20&4294967295|R>>>12),R=I+(C^D^V)+N[5]+4294588738&4294967295,I=C+(R<<4&4294967295|R>>>28),R=V+(I^C^D)+N[8]+2272392833&4294967295,V=I+(R<<11&4294967295|R>>>21),R=D+(V^I^C)+N[11]+1839030562&4294967295,D=V+(R<<16&4294967295|R>>>16),R=C+(D^V^I)+N[14]+4259657740&4294967295,C=D+(R<<23&4294967295|R>>>9),R=I+(C^D^V)+N[1]+2763975236&4294967295,I=C+(R<<4&4294967295|R>>>28),R=V+(I^C^D)+N[4]+1272893353&4294967295,V=I+(R<<11&4294967295|R>>>21),R=D+(V^I^C)+N[7]+4139469664&4294967295,D=V+(R<<16&4294967295|R>>>16),R=C+(D^V^I)+N[10]+3200236656&4294967295,C=D+(R<<23&4294967295|R>>>9),R=I+(C^D^V)+N[13]+681279174&4294967295,I=C+(R<<4&4294967295|R>>>28),R=V+(I^C^D)+N[0]+3936430074&4294967295,V=I+(R<<11&4294967295|R>>>21),R=D+(V^I^C)+N[3]+3572445317&4294967295,D=V+(R<<16&4294967295|R>>>16),R=C+(D^V^I)+N[6]+76029189&4294967295,C=D+(R<<23&4294967295|R>>>9),R=I+(C^D^V)+N[9]+3654602809&4294967295,I=C+(R<<4&4294967295|R>>>28),R=V+(I^C^D)+N[12]+3873151461&4294967295,V=I+(R<<11&4294967295|R>>>21),R=D+(V^I^C)+N[15]+530742520&4294967295,D=V+(R<<16&4294967295|R>>>16),R=C+(D^V^I)+N[2]+3299628645&4294967295,C=D+(R<<23&4294967295|R>>>9),R=I+(D^(C|~V))+N[0]+4096336452&4294967295,I=C+(R<<6&4294967295|R>>>26),R=V+(C^(I|~D))+N[7]+1126891415&4294967295,V=I+(R<<10&4294967295|R>>>22),R=D+(I^(V|~C))+N[14]+2878612391&4294967295,D=V+(R<<15&4294967295|R>>>17),R=C+(V^(D|~I))+N[5]+4237533241&4294967295,C=D+(R<<21&4294967295|R>>>11),R=I+(D^(C|~V))+N[12]+1700485571&4294967295,I=C+(R<<6&4294967295|R>>>26),R=V+(C^(I|~D))+N[3]+2399980690&4294967295,V=I+(R<<10&4294967295|R>>>22),R=D+(I^(V|~C))+N[10]+4293915773&4294967295,D=V+(R<<15&4294967295|R>>>17),R=C+(V^(D|~I))+N[1]+2240044497&4294967295,C=D+(R<<21&4294967295|R>>>11),R=I+(D^(C|~V))+N[8]+1873313359&4294967295,I=C+(R<<6&4294967295|R>>>26),R=V+(C^(I|~D))+N[15]+4264355552&4294967295,V=I+(R<<10&4294967295|R>>>22),R=D+(I^(V|~C))+N[6]+2734768916&4294967295,D=V+(R<<15&4294967295|R>>>17),R=C+(V^(D|~I))+N[13]+1309151649&4294967295,C=D+(R<<21&4294967295|R>>>11),R=I+(D^(C|~V))+N[4]+4149444226&4294967295,I=C+(R<<6&4294967295|R>>>26),R=V+(C^(I|~D))+N[11]+3174756917&4294967295,V=I+(R<<10&4294967295|R>>>22),R=D+(I^(V|~C))+N[2]+718787259&4294967295,D=V+(R<<15&4294967295|R>>>17),R=C+(V^(D|~I))+N[9]+3951481745&4294967295,A.g[0]=A.g[0]+I&4294967295,A.g[1]=A.g[1]+(D+(R<<21&4294967295|R>>>11))&4294967295,A.g[2]=A.g[2]+D&4294967295,A.g[3]=A.g[3]+V&4294967295}s.prototype.u=function(A,I){I===void 0&&(I=A.length);for(var C=I-this.blockSize,N=this.B,D=this.h,V=0;V<I;){if(D==0)for(;V<=C;)o(this,A,V),V+=this.blockSize;if(typeof A=="string"){for(;V<I;)if(N[D++]=A.charCodeAt(V++),D==this.blockSize){o(this,N),D=0;break}}else for(;V<I;)if(N[D++]=A[V++],D==this.blockSize){o(this,N),D=0;break}}this.h=D,this.o+=I},s.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var I=1;I<A.length-8;++I)A[I]=0;var C=8*this.o;for(I=A.length-8;I<A.length;++I)A[I]=C&255,C/=256;for(this.u(A),A=Array(16),I=C=0;4>I;++I)for(var N=0;32>N;N+=8)A[C++]=this.g[I]>>>N&255;return A};function l(A,I){var C=f;return Object.prototype.hasOwnProperty.call(C,A)?C[A]:C[A]=I(A)}function h(A,I){this.h=I;for(var C=[],N=!0,D=A.length-1;0<=D;D--){var V=A[D]|0;N&&V==I||(C[D]=V,N=!1)}this.g=C}var f={};function g(A){return-128<=A&&128>A?l(A,function(I){return new h([I|0],0>I?-1:0)}):new h([A|0],0>A?-1:0)}function _(A){if(isNaN(A)||!isFinite(A))return T;if(0>A)return F(_(-A));for(var I=[],C=1,N=0;A>=C;N++)I[N]=A/C|0,C*=4294967296;return new h(I,0)}function E(A,I){if(A.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(A.charAt(0)=="-")return F(E(A.substring(1),I));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=_(Math.pow(I,8)),N=T,D=0;D<A.length;D+=8){var V=Math.min(8,A.length-D),R=parseInt(A.substring(D,D+V),I);8>V?(V=_(Math.pow(I,V)),N=N.j(V).add(_(R))):(N=N.j(C),N=N.add(_(R)))}return N}var T=g(0),k=g(1),U=g(16777216);r=h.prototype,r.m=function(){if(q(this))return-F(this).m();for(var A=0,I=1,C=0;C<this.g.length;C++){var N=this.i(C);A+=(0<=N?N:4294967296+N)*I,I*=4294967296}return A},r.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if($(this))return"0";if(q(this))return"-"+F(this).toString(A);for(var I=_(Math.pow(A,6)),C=this,N="";;){var D=ve(C,I).g;C=le(C,D.j(I));var V=((0<C.g.length?C.g[0]:C.h)>>>0).toString(A);if(C=D,$(C))return V+N;for(;6>V.length;)V="0"+V;N=V+N}},r.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function $(A){if(A.h!=0)return!1;for(var I=0;I<A.g.length;I++)if(A.g[I]!=0)return!1;return!0}function q(A){return A.h==-1}r.l=function(A){return A=le(this,A),q(A)?-1:$(A)?0:1};function F(A){for(var I=A.g.length,C=[],N=0;N<I;N++)C[N]=~A.g[N];return new h(C,~A.h).add(k)}r.abs=function(){return q(this)?F(this):this},r.add=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],N=0,D=0;D<=I;D++){var V=N+(this.i(D)&65535)+(A.i(D)&65535),R=(V>>>16)+(this.i(D)>>>16)+(A.i(D)>>>16);N=R>>>16,V&=65535,R&=65535,C[D]=R<<16|V}return new h(C,C[C.length-1]&-2147483648?-1:0)};function le(A,I){return A.add(F(I))}r.j=function(A){if($(this)||$(A))return T;if(q(this))return q(A)?F(this).j(F(A)):F(F(this).j(A));if(q(A))return F(this.j(F(A)));if(0>this.l(U)&&0>A.l(U))return _(this.m()*A.m());for(var I=this.g.length+A.g.length,C=[],N=0;N<2*I;N++)C[N]=0;for(N=0;N<this.g.length;N++)for(var D=0;D<A.g.length;D++){var V=this.i(N)>>>16,R=this.i(N)&65535,tt=A.i(D)>>>16,xt=A.i(D)&65535;C[2*N+2*D]+=R*xt,ce(C,2*N+2*D),C[2*N+2*D+1]+=V*xt,ce(C,2*N+2*D+1),C[2*N+2*D+1]+=R*tt,ce(C,2*N+2*D+1),C[2*N+2*D+2]+=V*tt,ce(C,2*N+2*D+2)}for(N=0;N<I;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=I;N<2*I;N++)C[N]=0;return new h(C,0)};function ce(A,I){for(;(A[I]&65535)!=A[I];)A[I+1]+=A[I]>>>16,A[I]&=65535,I++}function de(A,I){this.g=A,this.h=I}function ve(A,I){if($(I))throw Error("division by zero");if($(A))return new de(T,T);if(q(A))return I=ve(F(A),I),new de(F(I.g),F(I.h));if(q(I))return I=ve(A,F(I)),new de(F(I.g),I.h);if(30<A.g.length){if(q(A)||q(I))throw Error("slowDivide_ only works with positive integers.");for(var C=k,N=I;0>=N.l(A);)C=Le(C),N=Le(N);var D=te(C,1),V=te(N,1);for(N=te(N,2),C=te(C,2);!$(N);){var R=V.add(N);0>=R.l(A)&&(D=D.add(C),V=R),N=te(N,1),C=te(C,1)}return I=le(A,D.j(I)),new de(D,I)}for(D=T;0<=A.l(I);){for(C=Math.max(1,Math.floor(A.m()/I.m())),N=Math.ceil(Math.log(C)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),V=_(C),R=V.j(I);q(R)||0<R.l(A);)C-=N,V=_(C),R=V.j(I);$(V)&&(V=k),D=D.add(V),A=le(A,R)}return new de(D,A)}r.A=function(A){return ve(this,A).h},r.and=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)&A.i(N);return new h(C,this.h&A.h)},r.or=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)|A.i(N);return new h(C,this.h|A.h)},r.xor=function(A){for(var I=Math.max(this.g.length,A.g.length),C=[],N=0;N<I;N++)C[N]=this.i(N)^A.i(N);return new h(C,this.h^A.h)};function Le(A){for(var I=A.g.length+1,C=[],N=0;N<I;N++)C[N]=A.i(N)<<1|A.i(N-1)>>>31;return new h(C,A.h)}function te(A,I){var C=I>>5;I%=32;for(var N=A.g.length-C,D=[],V=0;V<N;V++)D[V]=0<I?A.i(V+C)>>>I|A.i(V+C+1)<<32-I:A.i(V+C);return new h(D,A.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,W_=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,is=h}).apply(typeof qg<"u"?qg:typeof self<"u"?self:typeof window<"u"?window:{});var ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var H_,Da,K_,Uu,xd,G_,Q_,Y_;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,y){return u==Array.prototype||u==Object.prototype||(u[p]=y.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof ku=="object"&&ku];for(var p=0;p<u.length;++p){var y=u[p];if(y&&y.Math==Math)return y}throw Error("Cannot find global object")}var s=t(this);function o(u,p){if(p)e:{var y=s;u=u.split(".");for(var w=0;w<u.length-1;w++){var L=u[w];if(!(L in y))break e;y=y[L]}u=u[u.length-1],w=y[u],p=p(w),p!=w&&p!=null&&e(y,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var y=0,w=!1,L={next:function(){if(!w&&y<u.length){var z=y++;return{value:p(z,u[z]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,y){return y})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function g(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function _(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,y){return u.call.apply(u.bind,arguments)}function T(u,p,y){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),u.apply(p,L)}}return function(){return u.apply(p,arguments)}}function k(u,p,y){return k=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,k.apply(null,arguments)}function U(u,p){var y=Array.prototype.slice.call(arguments,1);return function(){var w=y.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function $(u,p){function y(){}y.prototype=p.prototype,u.aa=p.prototype,u.prototype=new y,u.prototype.constructor=u,u.Qb=function(w,L,z){for(var J=Array(arguments.length-2),je=2;je<arguments.length;je++)J[je-2]=arguments[je];return p.prototype[L].apply(w,J)}}function q(u){const p=u.length;if(0<p){const y=Array(p);for(let w=0;w<p;w++)y[w]=u[w];return y}return[]}function F(u,p){for(let y=1;y<arguments.length;y++){const w=arguments[y];if(g(w)){const L=u.length||0,z=w.length||0;u.length=L+z;for(let J=0;J<z;J++)u[L+J]=w[J]}else u.push(w)}}class le{constructor(p,y){this.i=p,this.j=y,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function ce(u){return/^[\s\xa0]*$/.test(u)}function de(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ve(u){return ve[" "](u),u}ve[" "]=function(){};var Le=de().indexOf("Gecko")!=-1&&!(de().toLowerCase().indexOf("webkit")!=-1&&de().indexOf("Edge")==-1)&&!(de().indexOf("Trident")!=-1||de().indexOf("MSIE")!=-1)&&de().indexOf("Edge")==-1;function te(u,p,y){for(const w in u)p.call(y,u[w],w,u)}function A(u,p){for(const y in u)p.call(void 0,u[y],y,u)}function I(u){const p={};for(const y in u)p[y]=u[y];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(u,p){let y,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(y in w)u[y]=w[y];for(let z=0;z<C.length;z++)y=C[z],Object.prototype.hasOwnProperty.call(w,y)&&(u[y]=w[y])}}function D(u){var p=1;u=u.split(":");const y=[];for(;0<p&&u.length;)y.push(u.shift()),p--;return u.length&&y.push(u.join(":")),y}function V(u){f.setTimeout(()=>{throw u},0)}function R(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class tt{constructor(){this.h=this.g=null}add(p,y){const w=xt.get();w.set(p,y),this.h?this.h.next=w:this.g=w,this.h=w}}var xt=new le(()=>new Dt,u=>u.reset());class Dt{constructor(){this.next=this.g=this.h=null}set(p,y){this.h=p,this.g=y,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,ee=!1,me=new tt,re=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(O)}};var O=()=>{for(var u;u=R();){try{u.h.call(u.g)}catch(y){V(y)}var p=xt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}ee=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Se=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const y=()=>{};f.addEventListener("test",y,p),f.removeEventListener("test",y,p)}catch{}return u}();function Ae(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var y=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Le){e:{try{ve(p.nodeName);var L=!0;break e}catch{}L=!1}L||(p=null)}}else y=="mouseover"?p=u.fromElement:y=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:xe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ae.aa.h.call(this)}}$(Ae,fe);var xe={2:"touch",3:"pen",4:"mouse"};Ae.prototype.h=function(){Ae.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,p,y,w,L){this.listener=u,this.proxy=null,this.src=p,this.type=y,this.capture=!!w,this.ha=L,this.key=++Ue,this.da=this.fa=!1}function _t(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function ir(u){this.src=u,this.g={},this.h=0}ir.prototype.add=function(u,p,y,w,L){var z=u.toString();u=this.g[z],u||(u=this.g[z]=[],this.h++);var J=Lr(u,p,w,L);return-1<J?(p=u[J],y||(p.fa=!1)):(p=new $e(p,this.src,z,!!w,L),p.fa=y,u.push(p)),p};function fs(u,p){var y=p.type;if(y in u.g){var w=u.g[y],L=Array.prototype.indexOf.call(w,p,void 0),z;(z=0<=L)&&Array.prototype.splice.call(w,L,1),z&&(_t(p),u.g[y].length==0&&(delete u.g[y],u.h--))}}function Lr(u,p,y,w){for(var L=0;L<u.length;++L){var z=u[L];if(!z.da&&z.listener==p&&z.capture==!!y&&z.ha==w)return L}return-1}var Ci="closure_lm_"+(1e6*Math.random()|0),ps={};function Vo(u,p,y,w,L){if(Array.isArray(p)){for(var z=0;z<p.length;z++)Vo(u,p[z],y,w,L);return null}return y=Mo(y),u&&u[be]?u.K(p,y,_(w)?!!w.capture:!1,L):Oo(u,p,y,!1,w,L)}function Oo(u,p,y,w,L,z){if(!p)throw Error("Invalid event type");var J=_(L)?!!L.capture:!!L,je=gs(u);if(je||(u[Ci]=je=new ir(u)),y=je.add(p,y,w,J,z),y.proxy)return y;if(w=dl(),y.proxy=w,w.src=u,w.listener=y,u.addEventListener)Se||(L=J),L===void 0&&(L=!1),u.addEventListener(p.toString(),w,L);else if(u.attachEvent)u.attachEvent(or(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return y}function dl(){function u(y){return p.call(u.src,u.listener,y)}const p=Lo;return u}function ms(u,p,y,w,L){if(Array.isArray(p))for(var z=0;z<p.length;z++)ms(u,p[z],y,w,L);else w=_(w)?!!w.capture:!!w,y=Mo(y),u&&u[be]?(u=u.i,p=String(p).toString(),p in u.g&&(z=u.g[p],y=Lr(z,y,w,L),-1<y&&(_t(z[y]),Array.prototype.splice.call(z,y,1),z.length==0&&(delete u.g[p],u.h--)))):u&&(u=gs(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Lr(p,y,w,L)),(y=-1<u?p[u]:null)&&sr(y))}function sr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[be])fs(p.i,u);else{var y=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(y,w,u.capture):p.detachEvent?p.detachEvent(or(y),w):p.addListener&&p.removeListener&&p.removeListener(w),(y=gs(p))?(fs(y,u),y.h==0&&(y.src=null,p[Ci]=null)):_t(u)}}}function or(u){return u in ps?ps[u]:ps[u]="on"+u}function Lo(u,p){if(u.da)u=!0;else{p=new Ae(p,this);var y=u.listener,w=u.ha||u.src;u.fa&&sr(u),u=y.call(w,p)}return u}function gs(u){return u=u[Ci],u instanceof ir?u:null}var ys="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mo(u){return typeof u=="function"?u:(u[ys]||(u[ys]=function(p){return u.handleEvent(p)}),u[ys])}function ct(){H.call(this),this.i=new ir(this),this.M=this,this.F=null}$(ct,H),ct.prototype[be]=!0,ct.prototype.removeEventListener=function(u,p,y,w){ms(this,u,p,y,w)};function ht(u,p){var y,w=u.F;if(w)for(y=[];w;w=w.F)y.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var L=p;p=new fe(w,u),N(p,L)}if(L=!0,y)for(var z=y.length-1;0<=z;z--){var J=p.g=y[z];L=ar(J,w,!0,p)&&L}if(J=p.g=u,L=ar(J,w,!0,p)&&L,L=ar(J,w,!1,p)&&L,y)for(z=0;z<y.length;z++)J=p.g=y[z],L=ar(J,w,!1,p)&&L}ct.prototype.N=function(){if(ct.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var y=u.g[p],w=0;w<y.length;w++)_t(y[w]);delete u.g[p],u.h--}}this.F=null},ct.prototype.K=function(u,p,y,w){return this.i.add(String(u),p,!1,y,w)},ct.prototype.L=function(u,p,y,w){return this.i.add(String(u),p,!0,y,w)};function ar(u,p,y,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var L=!0,z=0;z<p.length;++z){var J=p[z];if(J&&!J.da&&J.capture==y){var je=J.listener,dt=J.ha||J.src;J.fa&&fs(u.i,J),L=je.call(dt,w)!==!1&&L}}return L&&!w.defaultPrevented}function bo(u,p,y){if(typeof u=="function")y&&(u=k(u,y));else if(u&&typeof u.handleEvent=="function")u=k(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function Mr(u){u.g=bo(()=>{u.g=null,u.i&&(u.i=!1,Mr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Pi extends H{constructor(p,y){super(),this.m=p,this.l=y,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:Mr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ki(u){H.call(this),this.h=u,this.g={}}$(ki,H);var Uo=[];function Fo(u){te(u.g,function(p,y){this.g.hasOwnProperty(y)&&sr(p)},u),u.g={}}ki.prototype.N=function(){ki.aa.N.call(this),Fo(this)},ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jo=f.JSON.stringify,Bo=f.JSON.parse,zo=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ni(){}Ni.prototype.h=null;function _s(u){return u.h||(u.h=u.i())}function vs(){}var dn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jn(){fe.call(this,"d")}$(jn,fe);function Es(){fe.call(this,"c")}$(Es,fe);var Bn={},$o=null;function xi(){return $o=$o||new ct}Bn.La="serverreachability";function qo(u){fe.call(this,Bn.La,u)}$(qo,fe);function lr(u){const p=xi();ht(p,new qo(p))}Bn.STAT_EVENT="statevent";function Wo(u,p){fe.call(this,Bn.STAT_EVENT,u),this.stat=p}$(Wo,fe);function nt(u){const p=xi();ht(p,new Wo(p,u))}Bn.Ma="timingevent";function ws(u,p){fe.call(this,Bn.Ma,u),this.size=p}$(ws,fe);function Tn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Di(){this.g=!0}Di.prototype.xa=function(){this.g=!1};function Vi(u,p,y,w,L,z){u.info(function(){if(u.g)if(z)for(var J="",je=z.split("&"),dt=0;dt<je.length;dt++){var De=je[dt].split("=");if(1<De.length){var vt=De[0];De=De[1];var st=vt.split("_");J=2<=st.length&&st[1]=="type"?J+(vt+"="+De+"&"):J+(vt+"=redacted&")}}else J=null;else J=z;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+p+`
`+y+`
`+J})}function Ts(u,p,y,w,L,z,J){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+p+`
`+y+`
`+z+" "+J})}function In(u,p,y,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+Dc(u,y)+(w?" "+w:"")})}function Ho(u,p){u.info(function(){return"TIMEOUT: "+p})}Di.prototype.info=function(){};function Dc(u,p){if(!u.g)return p;if(!p)return null;try{var y=JSON.parse(p);if(y){for(u=0;u<y.length;u++)if(Array.isArray(y[u])){var w=y[u];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var z=L[0];if(z!="noop"&&z!="stop"&&z!="close")for(var J=1;J<L.length;J++)L[J]=""}}}}return jo(y)}catch{return p}}var Is={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Sn;function Oi(){}$(Oi,Ni),Oi.prototype.g=function(){return new XMLHttpRequest},Oi.prototype.i=function(){return{}},Sn=new Oi;function An(u,p,y,w){this.j=u,this.i=p,this.l=y,this.R=w||1,this.U=new ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new pl}function pl(){this.i=null,this.g="",this.h=!1}var Ko={},Ss={};function As(u,p,y){u.L=1,u.v=Br(sn(p)),u.m=y,u.P=!0,Go(u,null)}function Go(u,p){u.F=Date.now(),qe(u),u.A=sn(u.v);var y=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),$r(y.i,"t",w),u.C=0,y=u.j.J,u.h=new pl,u.g=Dl(u.j,y?p:null,!u.m),0<u.O&&(u.M=new Pi(k(u.Y,u,u.g),u.O)),p=u.U,y=u.g,w=u.ca;var L="readystatechange";Array.isArray(L)||(L&&(Uo[0]=L.toString()),L=Uo);for(var z=0;z<L.length;z++){var J=Vo(y,L[z],w||p.handleEvent,!1,p.h||p);if(!J)break;p.g[J.key]=J}p=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),lr(),Vi(u.i,u.u,u.A,u.l,u.R,u.m)}An.prototype.ca=function(u){u=u.target;const p=this.M;p&&Kt(u)==3?p.j():this.Y(u)},An.prototype.Y=function(u){try{if(u==this.g)e:{const st=Kt(this.g);var p=this.g.Ba();const mn=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||ea(this.g)))){this.J||st!=4||p==7||(p==8||0>=mn?lr(3):lr(2)),Li(this);var y=this.g.Z();this.X=y;t:if(ml(this)){var w=ea(this.g);u="";var L=w.length,z=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fn(this),br(this);var J="";break t}this.h.i=new f.TextDecoder}for(p=0;p<L;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(z&&p==L-1)});w.length=0,this.h.g+=u,this.C=0,J=this.h.g}else J=this.g.oa();if(this.o=y==200,Ts(this.i,this.u,this.A,this.l,this.R,st,y),this.o){if(this.T&&!this.K){t:{if(this.g){var je,dt=this.g;if((je=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ce(je)){var De=je;break t}}De=null}if(y=De)In(this.i,this.l,y,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Qo(this,y);else{this.o=!1,this.s=3,nt(12),fn(this),br(this);break e}}if(this.P){y=!0;let an;for(;!this.J&&this.C<J.length;)if(an=Vc(this,J),an==Ss){st==4&&(this.s=4,nt(14),y=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if(an==Ko){this.s=4,nt(15),In(this.i,this.l,J,"[Invalid Chunk]"),y=!1;break}else In(this.i,this.l,an,null),Qo(this,an);if(ml(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||J.length!=0||this.h.h||(this.s=1,nt(16),y=!1),this.o=this.o&&y,!y)In(this.i,this.l,J,"[Invalid Chunked Response]"),fn(this),br(this);else if(0<J.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+J.length),na(vt),vt.M=!0,nt(11))}}else In(this.i,this.l,J,null),Qo(this,J);st==4&&fn(this),this.o&&!this.J&&(st==4?Ms(this.j,this):(this.o=!1,qe(this)))}else xs(this.g),y==400&&0<J.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),fn(this),br(this)}}}catch{}finally{}};function ml(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Vc(u,p){var y=u.C,w=p.indexOf(`
`,y);return w==-1?Ss:(y=Number(p.substring(y,w)),isNaN(y)?Ko:(w+=1,w+y>p.length?Ss:(p=p.slice(w,w+y),u.C=w+y,p)))}An.prototype.cancel=function(){this.J=!0,fn(this)};function qe(u){u.S=Date.now()+u.I,gl(u,u.I)}function gl(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Tn(k(u.ba,u),p)}function Li(u){u.B&&(f.clearTimeout(u.B),u.B=null)}An.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(Ho(this.i,this.A),this.L!=2&&(lr(),nt(17)),fn(this),this.s=2,br(this)):gl(this,this.S-u)};function br(u){u.j.G==0||u.J||Ms(u.j,u)}function fn(u){Li(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,Fo(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function Qo(u,p){try{var y=u.j;if(y.G!=0&&(y.g==u||Bt(y.h,u))){if(!u.K&&Bt(y.h,u)&&y.G==3){try{var w=y.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!y.u){if(y.g)if(y.g.F+3e3<u.F)Ls(y),Nn(y);else break e;Os(y),nt(18)}}else y.za=L[1],0<y.za-y.T&&37500>L[2]&&y.F&&y.v==0&&!y.C&&(y.C=Tn(k(y.Za,y),6e3));if(1>=_l(y.h)&&y.ca){try{y.ca()}catch{}y.ca=void 0}}else fr(y,11)}else if((u.K||y.g==u)&&Ls(y),!ce(p))for(L=y.Da.g.parse(p),p=0;p<L.length;p++){let De=L[p];if(y.T=De[0],De=De[1],y.G==2)if(De[0]=="c"){y.K=De[1],y.ia=De[2];const vt=De[3];vt!=null&&(y.la=vt,y.j.info("VER="+y.la));const st=De[4];st!=null&&(y.Aa=st,y.j.info("SVER="+y.Aa));const mn=De[5];mn!=null&&typeof mn=="number"&&0<mn&&(w=1.5*mn,y.L=w,y.j.info("backChannelRequestTimeoutMs_="+w)),w=y;const an=u.g;if(an){const zi=an.g?an.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(zi){var z=w.h;z.g||zi.indexOf("spdy")==-1&&zi.indexOf("quic")==-1&&zi.indexOf("h2")==-1||(z.j=z.l,z.g=new Set,z.h&&(Yo(z,z.h),z.h=null))}if(w.D){const Us=an.g?an.g.getResponseHeader("X-HTTP-Session-Id"):null;Us&&(w.ya=Us,ze(w.I,w.D,Us))}}y.G=3,y.l&&y.l.ua(),y.ba&&(y.R=Date.now()-u.F,y.j.info("Handshake RTT: "+y.R+"ms")),w=y;var J=u;if(w.qa=xl(w,w.J?w.ia:null,w.W),J.K){vl(w.h,J);var je=J,dt=w.L;dt&&(je.I=dt),je.B&&(Li(je),qe(je)),w.g=J}else Bi(w);0<y.i.length&&Wn(y)}else De[0]!="stop"&&De[0]!="close"||fr(y,7);else y.G==3&&(De[0]=="stop"||De[0]=="close"?De[0]=="stop"?fr(y,7):At(y):De[0]!="noop"&&y.l&&y.l.ta(De),y.v=0)}}lr(4)}catch{}}var yl=class{constructor(u,p){this.g=u,this.map=p}};function Mi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function rn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function _l(u){return u.h?1:u.g?u.g.size:0}function Bt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function Yo(u,p){u.g?u.g.add(p):u.h=p}function vl(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Mi.prototype.cancel=function(){if(this.i=El(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function El(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const y of u.g.values())p=p.concat(y.D);return p}return q(u.i)}function Rs(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(g(u)){for(var p=[],y=u.length,w=0;w<y;w++)p.push(u[w]);return p}p=[],y=0;for(w in u)p[y++]=u[w];return p}function Cs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(g(u)||typeof u=="string"){var p=[];u=u.length;for(var y=0;y<u;y++)p.push(y);return p}p=[],y=0;for(const w in u)p[y++]=w;return p}}}function Ur(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(g(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var y=Cs(u),w=Rs(u),L=w.length,z=0;z<L;z++)p.call(void 0,w[z],y&&y[z],u)}var bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Oc(u,p){if(u){u=u.split("&");for(var y=0;y<u.length;y++){var w=u[y].indexOf("="),L=null;if(0<=w){var z=u[y].substring(0,w);L=u[y].substring(w+1)}else z=u[y];p(z,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function ur(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ur){this.h=u.h,Ui(this,u.j),this.o=u.o,this.g=u.g,Fr(this,u.s),this.l=u.l;var p=u.i,y=new zn;y.i=p.i,p.g&&(y.g=new Map(p.g),y.h=p.h),jr(this,y),this.m=u.m}else u&&(p=String(u).match(bi))?(this.h=!1,Ui(this,p[1]||"",!0),this.o=ke(p[2]||""),this.g=ke(p[3]||"",!0),Fr(this,p[4]),this.l=ke(p[5]||"",!0),jr(this,p[6]||"",!0),this.m=ke(p[7]||"")):(this.h=!1,this.i=new zn(null,this.h))}ur.prototype.toString=function(){var u=[],p=this.j;p&&u.push(zr(p,Ps,!0),":");var y=this.g;return(y||p=="file")&&(u.push("//"),(p=this.o)&&u.push(zr(p,Ps,!0),"@"),u.push(encodeURIComponent(String(y)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),y=this.s,y!=null&&u.push(":",String(y))),(y=this.l)&&(this.g&&y.charAt(0)!="/"&&u.push("/"),u.push(zr(y,y.charAt(0)=="/"?Il:Tl,!0))),(y=this.i.toString())&&u.push("?",y),(y=this.m)&&u.push("#",zr(y,Xo)),u.join("")};function sn(u){return new ur(u)}function Ui(u,p,y){u.j=y?ke(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Fr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function jr(u,p,y){p instanceof zn?(u.i=p,$n(u.i,u.h)):(y||(p=zr(p,Sl)),u.i=new zn(p,u.h))}function ze(u,p,y){u.i.set(p,y)}function Br(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function ke(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function zr(u,p,y){return typeof u=="string"?(u=encodeURI(u).replace(p,wl),y&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function wl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ps=/[#\/\?@]/g,Tl=/[#\?:]/g,Il=/[#\?]/g,Sl=/[#\?@]/g,Xo=/#/g;function zn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function St(u){u.g||(u.g=new Map,u.h=0,u.i&&Oc(u.i,function(p,y){u.add(decodeURIComponent(p.replace(/\+/g," ")),y)}))}r=zn.prototype,r.add=function(u,p){St(this),this.i=null,u=pn(this,u);var y=this.g.get(u);return y||this.g.set(u,y=[]),y.push(p),this.h+=1,this};function Rn(u,p){St(u),p=pn(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function Cn(u,p){return St(u),p=pn(u,p),u.g.has(p)}r.forEach=function(u,p){St(this),this.g.forEach(function(y,w){y.forEach(function(L){u.call(p,L,w,this)},this)},this)},r.na=function(){St(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),y=[];for(let w=0;w<p.length;w++){const L=u[w];for(let z=0;z<L.length;z++)y.push(p[w])}return y},r.V=function(u){St(this);let p=[];if(typeof u=="string")Cn(this,u)&&(p=p.concat(this.g.get(pn(this,u))));else{u=Array.from(this.g.values());for(let y=0;y<u.length;y++)p=p.concat(u[y])}return p},r.set=function(u,p){return St(this),this.i=null,u=pn(this,u),Cn(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},r.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function $r(u,p,y){Rn(u,p),0<y.length&&(u.i=null,u.g.set(pn(u,p),q(y)),u.h+=y.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var y=0;y<p.length;y++){var w=p[y];const z=encodeURIComponent(String(w)),J=this.V(w);for(w=0;w<J.length;w++){var L=z;J[w]!==""&&(L+="="+encodeURIComponent(String(J[w]))),u.push(L)}}return this.i=u.join("&")};function pn(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function $n(u,p){p&&!u.j&&(St(u),u.i=null,u.g.forEach(function(y,w){var L=w.toLowerCase();w!=L&&(Rn(this,w),$r(this,L,y))},u)),u.j=p}function Lc(u,p){const y=new Di;if(f.Image){const w=new Image;w.onload=U(Ht,y,"TestLoadImage: loaded",!0,p,w),w.onerror=U(Ht,y,"TestLoadImage: error",!1,p,w),w.onabort=U(Ht,y,"TestLoadImage: abort",!1,p,w),w.ontimeout=U(Ht,y,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Al(u,p){const y=new Di,w=new AbortController,L=setTimeout(()=>{w.abort(),Ht(y,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(z=>{clearTimeout(L),z.ok?Ht(y,"TestPingServer: ok",!0,p):Ht(y,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(L),Ht(y,"TestPingServer: error",!1,p)})}function Ht(u,p,y,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(y)}catch{}}function Mc(){this.g=new zo}function Rl(u,p,y){const w=y||"";try{Ur(u,function(L,z){let J=L;_(L)&&(J=jo(L)),p.push(w+z+"="+encodeURIComponent(J))})}catch(L){throw p.push(w+"type="+encodeURIComponent("_badmap")),L}}function cr(u){this.l=u.Ub||null,this.j=u.eb||!1}$(cr,Ni),cr.prototype.g=function(){return new Fi(this.l,this.j)},cr.prototype.i=function(u){return function(){return u}}({});function Fi(u,p){ct.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}$(Fi,ct),r=Fi.prototype,r.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,kn(this)},r.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=0},r.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,kn(this)),this.g&&(this.readyState=3,kn(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}r.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Pn(this):kn(this),this.readyState==3&&Cl(this)}},r.Ra=function(u){this.g&&(this.response=this.responseText=u,Pn(this))},r.Qa=function(u){this.g&&(this.response=u,Pn(this))},r.ga=function(){this.g&&Pn(this)};function Pn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,kn(u)}r.setRequestHeader=function(u,p){this.u.append(u,p)},r.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var y=p.next();!y.done;)y=y.value,u.push(y[0]+": "+y[1]),y=p.next();return u.join(`\r
`)};function kn(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Fi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function hr(u){let p="";return te(u,function(y,w){p+=w,p+=":",p+=y,p+=`\r
`}),p}function qr(u,p,y){e:{for(w in y){var w=!1;break e}w=!0}w||(y=hr(y),typeof u=="string"?y!=null&&encodeURIComponent(String(y)):ze(u,p,y))}function Qe(u){ct.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}$(Qe,ct);var bc=/^https?$/i,Jo=["POST","PUT"];r=Qe.prototype,r.Ha=function(u){this.J=u},r.ea=function(u,p,y,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Sn.g(),this.v=this.o?_s(this.o):_s(Sn),this.g.onreadystatechange=k(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(z){ji(this,z);return}if(u=y||"",y=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)y.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const z of w.keys())y.set(z,w.get(z));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(y.keys()).find(z=>z.toLowerCase()=="content-type"),L=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Jo,p,void 0))||w||L||y.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[z,J]of y)this.g.setRequestHeader(z,J);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ns(this),this.u=!0,this.g.send(u),this.u=!1}catch(z){ji(this,z)}};function ji(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,ks(u),on(u)}function ks(u){u.A||(u.A=!0,ht(u,"complete"),ht(u,"error"))}r.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,ht(this,"complete"),ht(this,"abort"),on(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),on(this,!0)),Qe.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Zo(this):this.bb())},r.bb=function(){Zo(this)};function Zo(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Kt(u)!=4||u.Z()!=2)){if(u.u&&Kt(u)==4)bo(u.Ea,0,u);else if(ht(u,"readystatechange"),Kt(u)==4){u.h=!1;try{const J=u.Z();e:switch(J){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var y;if(!(y=p)){var w;if(w=J===0){var L=String(u.D).match(bi)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),w=!bc.test(L?L.toLowerCase():"")}y=w}if(y)ht(u,"complete"),ht(u,"success");else{u.m=6;try{var z=2<Kt(u)?u.g.statusText:""}catch{z=""}u.l=z+" ["+u.Z()+"]",ks(u)}}finally{on(u)}}}}function on(u,p){if(u.g){Ns(u);const y=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||ht(u,"ready");try{y.onreadystatechange=w}catch{}}}function Ns(u){u.I&&(f.clearTimeout(u.I),u.I=null)}r.isActive=function(){return!!this.g};function Kt(u){return u.g?u.g.readyState:0}r.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),Bo(p)}};function ea(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function xs(u){const p={};u=(u.g&&2<=Kt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(ce(u[w]))continue;var y=D(u[w]);const L=y[0];if(y=y[1],typeof y!="string")continue;y=y.trim();const z=p[L]||[];p[L]=z,z.push(y)}A(p,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function qn(u,p,y){return y&&y.internalChannelParams&&y.internalChannelParams[u]||p}function ta(u){this.Aa=0,this.i=[],this.j=new Di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qn("baseRetryDelayMs",5e3,u),this.cb=qn("retryDelaySeedMs",1e4,u),this.Wa=qn("forwardChannelMaxRetries",2,u),this.wa=qn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Mi(u&&u.concurrentRequestLimit),this.Da=new Mc,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=ta.prototype,r.la=8,r.G=1,r.connect=function(u,p,y,w){nt(0),this.W=u,this.H=p||{},y&&w!==void 0&&(this.H.OSID=y,this.H.OAID=w),this.F=this.X,this.I=xl(this,null,this.W),Wn(this)};function At(u){if(Ds(u),u.G==3){var p=u.U++,y=sn(u.I);if(ze(y,"SID",u.K),ze(y,"RID",p),ze(y,"TYPE","terminate"),dr(u,y),p=new An(u,u.j,p),p.L=2,p.v=Br(sn(y)),y=!1,f.navigator&&f.navigator.sendBeacon)try{y=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!y&&f.Image&&(new Image().src=p.v,y=!0),y||(p.g=Dl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),qe(p)}Nl(u)}function Nn(u){u.g&&(na(u),u.g.cancel(),u.g=null)}function Ds(u){Nn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ls(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Wn(u){if(!rn(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||re(),ee||(Be(),ee=!0),me.add(p,u),u.B=0}}function Uc(u,p){return _l(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Tn(k(u.Ga,u,p),kl(u,u.B)),u.B++,!0)}r.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const L=new An(this,this.j,u);let z=this.o;if(this.S&&(z?(z=I(z),N(z,this.S)):z=this.S),this.m!==null||this.O||(L.H=z,z=null),this.P)e:{for(var p=0,y=0;y<this.i.length;y++){t:{var w=this.i[y];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=y;break e}if(p===4096||y===this.i.length-1){p=y+1;break e}}p=1e3}else p=1e3;p=Wr(this,L,p),y=sn(this.I),ze(y,"RID",u),ze(y,"CVER",22),this.D&&ze(y,"X-HTTP-Session-Id",this.D),dr(this,y),z&&(this.O?p="headers="+encodeURIComponent(String(hr(z)))+"&"+p:this.m&&qr(y,this.m,z)),Yo(this.h,L),this.Ua&&ze(y,"TYPE","init"),this.P?(ze(y,"$req",p),ze(y,"SID","null"),L.T=!0,As(L,y,null)):As(L,y,p),this.G=2}}else this.G==3&&(u?Vs(this,u):this.i.length==0||rn(this.h)||Vs(this))};function Vs(u,p){var y;p?y=p.l:y=u.U++;const w=sn(u.I);ze(w,"SID",u.K),ze(w,"RID",y),ze(w,"AID",u.T),dr(u,w),u.m&&u.o&&qr(w,u.m,u.o),y=new An(u,u.j,y,u.B+1),u.m===null&&(y.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Wr(u,y,1e3),y.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Yo(u.h,y),As(y,w,p)}function dr(u,p){u.H&&te(u.H,function(y,w){ze(p,w,y)}),u.l&&Ur({},function(y,w){ze(p,w,y)})}function Wr(u,p,y){y=Math.min(u.i.length,y);var w=u.l?k(u.l.Na,u.l,u):null;e:{var L=u.i;let z=-1;for(;;){const J=["count="+y];z==-1?0<y?(z=L[0].g,J.push("ofs="+z)):z=0:J.push("ofs="+z);let je=!0;for(let dt=0;dt<y;dt++){let De=L[dt].g;const vt=L[dt].map;if(De-=z,0>De)z=Math.max(0,L[dt].g-100),je=!1;else try{Rl(vt,J,"req"+De+"_")}catch{w&&w(vt)}}if(je){w=J.join("&");break e}}}return u=u.i.splice(0,y),p.D=u,w}function Bi(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||re(),ee||(Be(),ee=!0),me.add(p,u),u.v=0}}function Os(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Tn(k(u.Fa,u),kl(u,u.v)),u.v++,!0)}r.Fa=function(){if(this.u=null,Pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Tn(k(this.ab,this),u)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Nn(this),Pl(this))};function na(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Pl(u){u.g=new An(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=sn(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),dr(u,p),u.m&&u.o&&qr(p,u.m,u.o),u.L&&(u.g.I=u.L);var y=u.g;u=u.ia,y.L=1,y.v=Br(sn(p)),y.m=null,y.P=!0,Go(y,u)}r.Za=function(){this.C!=null&&(this.C=null,Nn(this),Os(this),nt(19))};function Ls(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Ms(u,p){var y=null;if(u.g==p){Ls(u),na(u),u.g=null;var w=2}else if(Bt(u.h,p))y=p.D,vl(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){y=p.m?p.m.length:0,p=Date.now()-p.F;var L=u.B;w=xi(),ht(w,new ws(w,y)),Wn(u)}else Bi(u);else if(L=p.s,L==3||L==0&&0<p.X||!(w==1&&Uc(u,p)||w==2&&Os(u)))switch(y&&0<y.length&&(p=u.h,p.i=p.i.concat(y)),L){case 1:fr(u,5);break;case 4:fr(u,10);break;case 3:fr(u,6);break;default:fr(u,2)}}}function kl(u,p){let y=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(y*=2),y*p}function fr(u,p){if(u.j.info("Error code "+p),p==2){var y=k(u.fb,u),w=u.Xa;const L=!w;w=new ur(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ui(w,"https"),Br(w),L?Lc(w.toString(),y):Al(w.toString(),y)}else nt(2);u.G=0,u.l&&u.l.sa(p),Nl(u),Ds(u)}r.fb=function(u){u?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function Nl(u){if(u.G=0,u.ka=[],u.l){const p=El(u.h);(p.length!=0||u.i.length!=0)&&(F(u.ka,p),F(u.ka,u.i),u.h.i.length=0,q(u.i),u.i.length=0),u.l.ra()}}function xl(u,p,y){var w=y instanceof ur?sn(y):new ur(y);if(w.g!="")p&&(w.g=p+"."+w.g),Fr(w,w.s);else{var L=f.location;w=L.protocol,p=p?p+"."+L.hostname:L.hostname,L=+L.port;var z=new ur(null);w&&Ui(z,w),p&&(z.g=p),L&&Fr(z,L),y&&(z.l=y),w=z}return y=u.D,p=u.ya,y&&p&&ze(w,y,p),ze(w,"VER",u.la),dr(u,w),w}function Dl(u,p,y){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Qe(new cr({eb:y})):new Qe(u.pa),p.Ha(u.J),p}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function ra(){}r=ra.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function bs(){}bs.prototype.g=function(u,p){return new zt(u,p)};function zt(u,p){ct.call(this),this.g=new ta(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!ce(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!ce(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Hn(this)}$(zt,ct),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){At(this.g)},zt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var y={};y.__data__=u,u=y}else this.u&&(y={},y.__data__=jo(u),u=y);p.i.push(new yl(p.Ya++,u)),p.G==3&&Wn(p)},zt.prototype.N=function(){this.g.l=null,delete this.j,At(this.g),delete this.g,zt.aa.N.call(this)};function Vl(u){jn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const y in p){u=y;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}$(Vl,jn);function Ol(){Es.call(this),this.status=1}$(Ol,Es);function Hn(u){this.g=u}$(Hn,ra),Hn.prototype.ua=function(){ht(this.g,"a")},Hn.prototype.ta=function(u){ht(this.g,new Vl(u))},Hn.prototype.sa=function(u){ht(this.g,new Ol)},Hn.prototype.ra=function(){ht(this.g,"b")},bs.prototype.createWebChannel=bs.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Y_=function(){return new bs},Q_=function(){return xi()},G_=Bn,xd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Is.NO_ERROR=0,Is.TIMEOUT=8,Is.HTTP_ERROR=6,Uu=Is,fl.COMPLETE="complete",K_=fl,vs.EventType=dn,dn.OPEN="a",dn.CLOSE="b",dn.ERROR="c",dn.MESSAGE="d",ct.prototype.listen=ct.prototype.K,Da=vs,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,H_=Qe}).apply(typeof ku<"u"?ku:typeof self<"u"?self:typeof window<"u"?window:{});const Wg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ut.UNAUTHENTICATED=new Ut(null),Ut.GOOGLE_CREDENTIALS=new Ut("google-credentials-uid"),Ut.FIRST_PARTY=new Ut("first-party-uid"),Ut.MOCK_USER=new Ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Co="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=new Xd("@firebase/firestore");function so(){return us.logLevel}function ie(r,...e){if(us.logLevel<=Ce.DEBUG){const t=e.map(cf);us.debug(`Firestore (${Co}): ${r}`,...t)}}function kr(r,...e){if(us.logLevel<=Ce.ERROR){const t=e.map(cf);us.error(`Firestore (${Co}): ${r}`,...t)}}function yo(r,...e){if(us.logLevel<=Ce.WARN){const t=e.map(cf);us.warn(`Firestore (${Co}): ${r}`,...t)}}function cf(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(r="Unexpected state"){const e=`FIRESTORE (${Co}) INTERNAL ASSERTION FAILED: `+r;throw kr(e),new Error(e)}function Fe(r,e){r||we()}function Ie(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Dr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class EA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ut.UNAUTHENTICATED))}shutdown(){}}class wA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class TA{constructor(e){this.t=e,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0);let s=this.i;const o=g=>this.i!==s?(s=this.i,t(g)):Promise.resolve();let l=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Rr,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const g=l;e.enqueueRetryable(async()=>{await g.promise,await o(this.currentUser)})},f=g=>{ie("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(g=>f(g)),setTimeout(()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?f(g):(ie("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Rr)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(ie("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Fe(typeof s.accessToken=="string"),new X_(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Ut(e)}}class IA{constructor(e,t,s){this.l=e,this.h=t,this.P=s,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class SA{constructor(e,t,s){this.l=e,this.h=t,this.P=s}getToken(){return Promise.resolve(new IA(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class AA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){Fe(this.o===void 0);const s=l=>{l.error!=null&&ie("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.R;return this.R=l.token,ie("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>s(l))};const o=l=>{ie("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?o(l):ie("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string"),this.R=t.token,new AA(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<r;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const o=CA(40);for(let l=0;l<o.length;++l)s.length<20&&o[l]<t&&(s+=e.charAt(o[l]%e.length))}return s}}function Ne(r,e){return r<e?-1:r>e?1:0}function _o(r,e,t){return r.length===e.length&&r.every((s,o)=>t(s,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new mt(t,s)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new oe(K.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe(K.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ne(this.nanoseconds,e.nanoseconds):Ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{static fromTimestamp(e){return new Te(e)}static min(){return new Te(new mt(0,0))}static max(){return new Te(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,t,s){t===void 0?t=0:t>e.length&&we(),s===void 0?s=e.length-t:s>e.length-t&&we(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Ha.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ha?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let o=0;o<s;o++){const l=e.get(o),h=t.get(o);if(l<h)return-1;if(l>h)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ge extends Ha{construct(e,t,s){return new Ge(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe(K.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(o=>o.length>0))}return new Ge(t)}static emptyPath(){return new Ge([])}}const PA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends Ha{construct(e,t,s){return new kt(e,t,s)}static isValidIdentifier(e){return PA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const t=[];let s="",o=0;const l=()=>{if(s.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new oe(K.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const g=e[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new oe(K.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=g,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(s+=f,o++):(l(),o++)}if(l(),h)throw new oe(K.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(t)}static emptyPath(){return new kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Ge.fromString(e))}static fromName(e){return new pe(Ge.fromString(e).popFirst(5))}static empty(){return new pe(Ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Ge(e.slice()))}}function kA(r,e){const t=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,o=Te.fromTimestamp(s===1e9?new mt(t+1,0):new mt(t,s));return new vi(o,pe.empty(),e)}function NA(r){return new vi(r.readTime,r.key,-1)}class vi{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new vi(Te.min(),pe.empty(),-1)}static max(){return new vi(Te.max(),pe.empty(),-1)}}function xA(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(r.documentKey,e.documentKey),t!==0?t:Ne(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(r){if(r.code!==K.FAILED_PRECONDITION||r.message!==DA)throw r;ie("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&we(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((s,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(s,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(s,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,s)=>{t(e)})}static reject(e){return new W((t,s)=>{s(e)})}static waitFor(e){return new W((t,s)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},g=>s(g))}),h=!0,l===o&&t()})}static or(e){let t=W.resolve(!1);for(const s of e)t=t.next(o=>o?W.resolve(o):s());return t}static forEach(e,t){const s=[];return e.forEach((o,l)=>{s.push(t.call(this,o,l))}),this.waitFor(s)}static mapArray(e,t){return new W((s,o)=>{const l=e.length,h=new Array(l);let f=0;for(let g=0;g<l;g++){const _=g;t(e[_]).next(E=>{h[_]=E,++f,f===l&&s(h)},E=>o(E))}})}static doWhile(e,t){return new W((s,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):s()};l()})}}function OA(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ko(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ie(s),this.se=s=>t.writeSequenceNumber(s))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}gc.oe=-1;function yc(r){return r==null}function ec(r){return r===0&&1/r==-1/0}function LA(r){return typeof r=="number"&&Number.isInteger(r)&&!ec(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MA(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Hg(e)),e=bA(r.get(t),e);return Hg(e)}function bA(r,e){let t=e;const s=r.length;for(let o=0;o<s;o++){const l=r.charAt(o);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function Hg(r){return r+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Ai(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Z_(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,t){this.comparator=e,this.root=t||Pt.EMPTY}insert(e,t){return new Ze(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pt.BLACK,null,null))}remove(e){return new Ze(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const o=this.comparator(e,s.key);if(o===0)return t+s.left.size;o<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Nu(this.root,e,this.comparator,!0)}}class Nu{constructor(e,t,s,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?s(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pt{constructor(e,t,s,o,l){this.key=e,this.value=t,this.color=s??Pt.RED,this.left=o??Pt.EMPTY,this.right=l??Pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,o,l){return new Pt(e??this.key,t??this.value,s??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let o=this;const l=s(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,s),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,s)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Pt.EMPTY;s=o.right.min(),o=o.copy(s.key,s.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw we();const e=this.left.check();if(e!==this.right.check())throw we();return e+(this.isRed()?0:1)}}Pt.EMPTY=null,Pt.RED=!0,Pt.BLACK=!1;Pt.EMPTY=new class{constructor(){this.size=0}get key(){throw we()}get value(){throw we()}get color(){throw we()}get left(){throw we()}get right(){throw we()}copy(e,t,s,o,l){return this}insert(e,t,s){return new Pt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.comparator=e,this.data=new Ze(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const o=s.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Gg(this.data.getIterator())}getIteratorFrom(e){return new Gg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof gt)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new gt(this.comparator);return t.data=e,t}}class Gg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new hn([])}unionWith(e){let t=new gt(kt.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new hn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return _o(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new ev("Invalid base64 string: "+l):l}}(e);return new Nt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Nt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const s=new Uint8Array(t.length);for(let o=0;o<t.length;o++)s[o]=t.charCodeAt(o);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Nt.EMPTY_BYTE_STRING=new Nt("");const UA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ei(r){if(Fe(!!r),typeof r=="string"){let e=0;const t=UA.exec(r);if(Fe(!!t),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:it(r.seconds),nanos:it(r.nanos)}}function it(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function wi(r){return typeof r=="string"?Nt.fromBase64String(r):Nt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hf(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function _c(r){const e=r.mapValue.fields.__previous_value__;return hf(e)?_c(e):e}function Ka(r){const e=Ei(r.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(e,t,s,o,l,h,f,g,_){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=g,this.useFetchStreams=_}}class Ga{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ga("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ga&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ti(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hf(r)?4:BA(r)?9007199254740991:jA(r)?10:11:we()}function rr(r,e){if(r===e)return!0;const t=Ti(r);if(t!==Ti(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Ka(r).isEqual(Ka(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ei(o.timestampValue),f=Ei(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(o,l){return wi(o.bytesValue).isEqual(wi(l.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(o,l){return it(o.geoPointValue.latitude)===it(l.geoPointValue.latitude)&&it(o.geoPointValue.longitude)===it(l.geoPointValue.longitude)}(r,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return it(o.integerValue)===it(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=it(o.doubleValue),f=it(l.doubleValue);return h===f?ec(h)===ec(f):isNaN(h)&&isNaN(f)}return!1}(r,e);case 9:return _o(r.arrayValue.values||[],e.arrayValue.values||[],rr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(Kg(h)!==Kg(f))return!1;for(const g in h)if(h.hasOwnProperty(g)&&(f[g]===void 0||!rr(h[g],f[g])))return!1;return!0}(r,e);default:return we()}}function Qa(r,e){return(r.values||[]).find(t=>rr(t,e))!==void 0}function vo(r,e){if(r===e)return 0;const t=Ti(r),s=Ti(e);if(t!==s)return Ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ne(r.booleanValue,e.booleanValue);case 2:return function(l,h){const f=it(l.integerValue||l.doubleValue),g=it(h.integerValue||h.doubleValue);return f<g?-1:f>g?1:f===g?0:isNaN(f)?isNaN(g)?0:-1:1}(r,e);case 3:return Qg(r.timestampValue,e.timestampValue);case 4:return Qg(Ka(r),Ka(e));case 5:return Ne(r.stringValue,e.stringValue);case 6:return function(l,h){const f=wi(l),g=wi(h);return f.compareTo(g)}(r.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),g=h.split("/");for(let _=0;_<f.length&&_<g.length;_++){const E=Ne(f[_],g[_]);if(E!==0)return E}return Ne(f.length,g.length)}(r.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ne(it(l.latitude),it(h.latitude));return f!==0?f:Ne(it(l.longitude),it(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Yg(r.arrayValue,e.arrayValue);case 10:return function(l,h){var f,g,_,E;const T=l.fields||{},k=h.fields||{},U=(f=T.value)===null||f===void 0?void 0:f.arrayValue,$=(g=k.value)===null||g===void 0?void 0:g.arrayValue,q=Ne(((_=U==null?void 0:U.values)===null||_===void 0?void 0:_.length)||0,((E=$==null?void 0:$.values)===null||E===void 0?void 0:E.length)||0);return q!==0?q:Yg(U,$)}(r.mapValue,e.mapValue);case 11:return function(l,h){if(l===xu.mapValue&&h===xu.mapValue)return 0;if(l===xu.mapValue)return 1;if(h===xu.mapValue)return-1;const f=l.fields||{},g=Object.keys(f),_=h.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let T=0;T<g.length&&T<E.length;++T){const k=Ne(g[T],E[T]);if(k!==0)return k;const U=vo(f[g[T]],_[E[T]]);if(U!==0)return U}return Ne(g.length,E.length)}(r.mapValue,e.mapValue);default:throw we()}}function Qg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Ne(r,e);const t=Ei(r),s=Ei(e),o=Ne(t.seconds,s.seconds);return o!==0?o:Ne(t.nanos,s.nanos)}function Yg(r,e){const t=r.values||[],s=e.values||[];for(let o=0;o<t.length&&o<s.length;++o){const l=vo(t[o],s[o]);if(l)return l}return Ne(t.length,s.length)}function Eo(r){return Dd(r)}function Dd(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const s=Ei(t);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return wi(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return pe.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let s="[",o=!0;for(const l of t.values||[])o?o=!1:s+=",",s+=Dd(l);return s+"]"}(r.arrayValue):"mapValue"in r?function(t){const s=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of s)l?l=!1:o+=",",o+=`${h}:${Dd(t.fields[h])}`;return o+"}"}(r.mapValue):we()}function Fu(r){switch(Ti(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=_c(r);return e?16+Fu(e):16;case 5:return 2*r.stringValue.length;case 6:return wi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((o,l)=>o+Fu(l),0)}(r.arrayValue);case 10:case 11:return function(s){let o=0;return Ai(s.fields,(l,h)=>{o+=l.length+Fu(h)}),o}(r.mapValue);default:throw we()}}function Xg(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Vd(r){return!!r&&"integerValue"in r}function df(r){return!!r&&"arrayValue"in r}function Jg(r){return!!r&&"nullValue"in r}function Zg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function ju(r){return!!r&&"mapValue"in r}function jA(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function ba(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Ai(r.mapValue.fields,(t,s)=>e.mapValue.fields[t]=ba(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ba(r.arrayValue.values[t]);return e}return Object.assign({},r)}function BA(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!ju(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ba(t)}setAll(e){let t=kt.emptyPath(),s={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const g=this.getFieldsMap(t);this.applyChanges(g,s,o),s={},o=[],t=f.popLast()}h?s[f.lastSegment()]=ba(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,s,o)}delete(e){const t=this.field(e.popLast());ju(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let o=t.mapValue.fields[e.get(s)];ju(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,s){Ai(t,(o,l)=>e[o]=l);for(const o of s)delete e[o]}clone(){return new tn(ba(this.value))}}function tv(r){const e=[];return Ai(r.fields,(t,s)=>{const o=new kt([t]);if(ju(s)){const l=tv(s.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new hn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,s,o,l,h,f){this.key=e,this.documentType=t,this.version=s,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new Ft(e,0,Te.min(),Te.min(),Te.min(),tn.empty(),0)}static newFoundDocument(e,t,s,o){return new Ft(e,1,t,Te.min(),s,o,0)}static newNoDocument(e,t){return new Ft(e,2,t,Te.min(),Te.min(),tn.empty(),0)}static newUnknownDocument(e,t){return new Ft(e,3,t,Te.min(),Te.min(),tn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,t){this.position=e,this.inclusive=t}}function ey(r,e,t){let s=0;for(let o=0;o<r.position.length;o++){const l=e[o],h=r.position[o];if(l.field.isKeyField()?s=pe.comparator(pe.fromName(h.referenceValue),t.key):s=vo(h,t.data.field(l.field)),l.dir==="desc"&&(s*=-1),s!==0)break}return s}function ty(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rr(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t="asc"){this.field=e,this.dir=t}}function zA(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{}class lt extends nv{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new qA(e,t,s):t==="array-contains"?new KA(e,s):t==="in"?new GA(e,s):t==="not-in"?new QA(e,s):t==="array-contains-any"?new YA(e,s):new lt(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new WA(e,s):new HA(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(vo(t,this.value)):t!==null&&Ti(this.value)===Ti(t)&&this.matchesComparison(vo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return we()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Fn extends nv{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Fn(e,t)}matches(e){return rv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function rv(r){return r.op==="and"}function iv(r){return $A(r)&&rv(r)}function $A(r){for(const e of r.filters)if(e instanceof Fn)return!1;return!0}function Od(r){if(r instanceof lt)return r.field.canonicalString()+r.op.toString()+Eo(r.value);if(iv(r))return r.filters.map(e=>Od(e)).join(",");{const e=r.filters.map(t=>Od(t)).join(",");return`${r.op}(${e})`}}function sv(r,e){return r instanceof lt?function(s,o){return o instanceof lt&&s.op===o.op&&s.field.isEqual(o.field)&&rr(s.value,o.value)}(r,e):r instanceof Fn?function(s,o){return o instanceof Fn&&s.op===o.op&&s.filters.length===o.filters.length?s.filters.reduce((l,h,f)=>l&&sv(h,o.filters[f]),!0):!1}(r,e):void we()}function ov(r){return r instanceof lt?function(t){return`${t.field.canonicalString()} ${t.op} ${Eo(t.value)}`}(r):r instanceof Fn?function(t){return t.op.toString()+" {"+t.getFilters().map(ov).join(" ,")+"}"}(r):"Filter"}class qA extends lt{constructor(e,t,s){super(e,t,s),this.key=pe.fromName(s.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class WA extends lt{constructor(e,t){super(e,"in",t),this.keys=av("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class HA extends lt{constructor(e,t){super(e,"not-in",t),this.keys=av("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function av(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>pe.fromName(s.referenceValue))}class KA extends lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return df(t)&&Qa(t.arrayValue,this.value)}}class GA extends lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qa(this.value.arrayValue,t)}}class QA extends lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qa(this.value.arrayValue,t)}}class YA extends lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!df(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Qa(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,t=null,s=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.ue=null}}function ny(r,e=null,t=[],s=[],o=null,l=null,h=null){return new XA(r,e,t,s,o,l,h)}function ff(r){const e=Ie(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Od(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(l){return l.field.canonicalString()+l.dir}(s)).join(","),yc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Eo(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Eo(s)).join(",")),e.ue=t}return e.ue}function pf(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!zA(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!sv(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ty(r.startAt,e.startAt)&&ty(r.endAt,e.endAt)}function Ld(r){return pe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t=null,s=[],o=[],l=null,h="F",f=null,g=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=g,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function JA(r,e,t,s,o,l,h,f){return new ol(r,e,t,s,o,l,h,f)}function mf(r){return new ol(r)}function ry(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function lv(r){return r.collectionGroup!==null}function Ua(r){const e=Ie(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new gt(kt.comparator);return h.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(f=f.add(_.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new nc(l,s))}),t.has(kt.keyField().canonicalString())||e.ce.push(new nc(kt.keyField(),s))}return e.ce}function tr(r){const e=Ie(r);return e.le||(e.le=ZA(e,Ua(r))),e.le}function ZA(r,e){if(r.limitType==="F")return ny(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new nc(o.field,l)});const t=r.endAt?new tc(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new tc(r.startAt.position,r.startAt.inclusive):null;return ny(r.path,r.collectionGroup,e,r.filters,r.limit,t,s)}}function Md(r,e){const t=r.filters.concat([e]);return new ol(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function bd(r,e,t){return new ol(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function vc(r,e){return pf(tr(r),tr(e))&&r.limitType===e.limitType}function uv(r){return`${ff(tr(r))}|lt:${r.limitType}`}function oo(r){return`Query(target=${function(t){let s=t.path.canonicalString();return t.collectionGroup!==null&&(s+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(s+=`, filters: [${t.filters.map(o=>ov(o)).join(", ")}]`),yc(t.limit)||(s+=", limit: "+t.limit),t.orderBy.length>0&&(s+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(s+=", startAt: ",s+=t.startAt.inclusive?"b:":"a:",s+=t.startAt.position.map(o=>Eo(o)).join(",")),t.endAt&&(s+=", endAt: ",s+=t.endAt.inclusive?"a:":"b:",s+=t.endAt.position.map(o=>Eo(o)).join(",")),`Target(${s})`}(tr(r))}; limitType=${r.limitType})`}function Ec(r,e){return e.isFoundDocument()&&function(s,o){const l=o.key.path;return s.collectionGroup!==null?o.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(l):pe.isDocumentKey(s.path)?s.path.isEqual(l):s.path.isImmediateParentOf(l)}(r,e)&&function(s,o){for(const l of Ua(s))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(r,e)&&function(s,o){for(const l of s.filters)if(!l.matches(o))return!1;return!0}(r,e)&&function(s,o){return!(s.startAt&&!function(h,f,g){const _=ey(h,f,g);return h.inclusive?_<=0:_<0}(s.startAt,Ua(s),o)||s.endAt&&!function(h,f,g){const _=ey(h,f,g);return h.inclusive?_>=0:_>0}(s.endAt,Ua(s),o))}(r,e)}function eR(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function cv(r){return(e,t)=>{let s=!1;for(const o of Ua(r)){const l=tR(o,e,t);if(l!==0)return l;s=s||o.field.isKeyField()}return 0}}function tR(r,e,t){const s=r.field.isKeyField()?pe.comparator(e.key,t.key):function(l,h,f){const g=h.data.field(l),_=f.data.field(l);return g!==null&&_!==null?vo(g,_):we()}(r.field,e,t);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return we()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[o,l]of s)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),o=this.inner[s];if(o===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return s.length===1?delete this.inner[t]:s.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Ai(this.inner,(t,s)=>{for(const[o,l]of s)e(o,l)})}isEmpty(){return Z_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nR=new Ze(pe.comparator);function Nr(){return nR}const hv=new Ze(pe.comparator);function Va(...r){let e=hv;for(const t of r)e=e.insert(t.key,t);return e}function dv(r){let e=hv;return r.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function ns(){return Fa()}function fv(){return Fa()}function Fa(){return new hs(r=>r.toString(),(r,e)=>r.isEqual(e))}const rR=new Ze(pe.comparator),iR=new gt(pe.comparator);function Pe(...r){let e=iR;for(const t of r)e=e.add(t);return e}const sR=new gt(Ne);function oR(){return sR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(e)?"-0":e}}function pv(r){return{integerValue:""+r}}function aR(r,e){return LA(e)?pv(e):gf(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(){this._=void 0}}function lR(r,e,t){return r instanceof rc?function(o,l){const h={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&hf(l)&&(l=_c(l)),l&&(h.fields.__previous_value__=l),{mapValue:h}}(t,e):r instanceof Ya?gv(r,e):r instanceof Xa?yv(r,e):function(o,l){const h=mv(o,l),f=iy(h)+iy(o.Pe);return Vd(h)&&Vd(o.Pe)?pv(f):gf(o.serializer,f)}(r,e)}function uR(r,e,t){return r instanceof Ya?gv(r,e):r instanceof Xa?yv(r,e):t}function mv(r,e){return r instanceof ic?function(s){return Vd(s)||function(l){return!!l&&"doubleValue"in l}(s)}(e)?e:{integerValue:0}:null}class rc extends wc{}class Ya extends wc{constructor(e){super(),this.elements=e}}function gv(r,e){const t=_v(e);for(const s of r.elements)t.some(o=>rr(o,s))||t.push(s);return{arrayValue:{values:t}}}class Xa extends wc{constructor(e){super(),this.elements=e}}function yv(r,e){let t=_v(e);for(const s of r.elements)t=t.filter(o=>!rr(o,s));return{arrayValue:{values:t}}}class ic extends wc{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function iy(r){return it(r.integerValue||r.doubleValue)}function _v(r){return df(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function cR(r,e){return r.field.isEqual(e.field)&&function(s,o){return s instanceof Ya&&o instanceof Ya||s instanceof Xa&&o instanceof Xa?_o(s.elements,o.elements,rr):s instanceof ic&&o instanceof ic?rr(s.Pe,o.Pe):s instanceof rc&&o instanceof rc}(r.transform,e.transform)}class hR{constructor(e,t){this.version=e,this.transformResults=t}}class bn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new bn}static exists(e){return new bn(void 0,e)}static updateTime(e){return new bn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bu(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Tc{}function vv(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new yf(r.key,bn.none()):new al(r.key,r.data,bn.none());{const t=r.data,s=tn.empty();let o=new gt(kt.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?s.delete(l):s.set(l,h),o=o.add(l)}return new Ri(r.key,s,new hn(o.toArray()),bn.none())}}function dR(r,e,t){r instanceof al?function(o,l,h){const f=o.value.clone(),g=oy(o.fieldTransforms,l,h.transformResults);f.setAll(g),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(r,e,t):r instanceof Ri?function(o,l,h){if(!Bu(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=oy(o.fieldTransforms,l,h.transformResults),g=l.data;g.setAll(Ev(o)),g.setAll(f),l.convertToFoundDocument(h.version,g).setHasCommittedMutations()}(r,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function ja(r,e,t,s){return r instanceof al?function(l,h,f,g){if(!Bu(l.precondition,h))return f;const _=l.value.clone(),E=ay(l.fieldTransforms,g,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,t,s):r instanceof Ri?function(l,h,f,g){if(!Bu(l.precondition,h))return f;const _=ay(l.fieldTransforms,g,h),E=h.data;return E.setAll(Ev(l)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(r,e,t,s):function(l,h,f){return Bu(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(r,e,t)}function fR(r,e){let t=null;for(const s of r.fieldTransforms){const o=e.data.field(s.field),l=mv(s.transform,o||null);l!=null&&(t===null&&(t=tn.empty()),t.set(s.field,l))}return t||null}function sy(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,o){return s===void 0&&o===void 0||!(!s||!o)&&_o(s,o,(l,h)=>cR(l,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class al extends Tc{constructor(e,t,s,o=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ri extends Tc{constructor(e,t,s,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function Ev(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=r.data.field(t);e.set(t,s)}}),e}function oy(r,e,t){const s=new Map;Fe(r.length===t.length);for(let o=0;o<t.length;o++){const l=r[o],h=l.transform,f=e.data.field(l.field);s.set(l.field,uR(h,f,t[o]))}return s}function ay(r,e,t){const s=new Map;for(const o of r){const l=o.transform,h=t.data.field(o.field);s.set(o.field,lR(l,h,e))}return s}class yf extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pR extends Tc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,t,s,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=o}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&dR(l,e,s[o])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=ja(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=fv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const g=vv(h,f);g!==null&&s.set(o.key,g),h.isValidDocument()||h.convertToNoDocument(Te.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Pe())}isEqual(e){return this.batchId===e.batchId&&_o(this.mutations,e.mutations,(t,s)=>sy(t,s))&&_o(this.baseMutations,e.baseMutations,(t,s)=>sy(t,s))}}class _f{constructor(e,t,s,o){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=o}static from(e,t,s){Fe(e.mutations.length===s.length);let o=function(){return rR}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,s[h].version);return new _f(e,t,s,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var at,Ve;function _R(r){switch(r){default:return we();case K.CANCELLED:case K.UNKNOWN:case K.DEADLINE_EXCEEDED:case K.RESOURCE_EXHAUSTED:case K.INTERNAL:case K.UNAVAILABLE:case K.UNAUTHENTICATED:return!1;case K.INVALID_ARGUMENT:case K.NOT_FOUND:case K.ALREADY_EXISTS:case K.PERMISSION_DENIED:case K.FAILED_PRECONDITION:case K.ABORTED:case K.OUT_OF_RANGE:case K.UNIMPLEMENTED:case K.DATA_LOSS:return!0}}function wv(r){if(r===void 0)return kr("GRPC error has no .code"),K.UNKNOWN;switch(r){case at.OK:return K.OK;case at.CANCELLED:return K.CANCELLED;case at.UNKNOWN:return K.UNKNOWN;case at.DEADLINE_EXCEEDED:return K.DEADLINE_EXCEEDED;case at.RESOURCE_EXHAUSTED:return K.RESOURCE_EXHAUSTED;case at.INTERNAL:return K.INTERNAL;case at.UNAVAILABLE:return K.UNAVAILABLE;case at.UNAUTHENTICATED:return K.UNAUTHENTICATED;case at.INVALID_ARGUMENT:return K.INVALID_ARGUMENT;case at.NOT_FOUND:return K.NOT_FOUND;case at.ALREADY_EXISTS:return K.ALREADY_EXISTS;case at.PERMISSION_DENIED:return K.PERMISSION_DENIED;case at.FAILED_PRECONDITION:return K.FAILED_PRECONDITION;case at.ABORTED:return K.ABORTED;case at.OUT_OF_RANGE:return K.OUT_OF_RANGE;case at.UNIMPLEMENTED:return K.UNIMPLEMENTED;case at.DATA_LOSS:return K.DATA_LOSS;default:return we()}}(Ve=at||(at={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=new is([4294967295,4294967295],0);function ly(r){const e=vR().encode(r),t=new W_;return t.update(e),new Uint8Array(t.digest())}function uy(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new is([t,s],0),new is([o,l],0)]}class vf{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Oa(`Invalid padding: ${t}`);if(s<0)throw new Oa(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Oa(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Oa(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=is.fromNumber(this.Te)}Ee(e,t,s){let o=e.add(t.multiply(is.fromNumber(s)));return o.compare(ER)===1&&(o=new is([o.getBits(0),o.getBits(1)],0)),o.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=ly(e),[s,o]=uy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);if(!this.de(h))return!1}return!0}static create(e,t,s){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new vf(l,o,t);return s.forEach(f=>h.insert(f)),h}insert(e){if(this.Te===0)return;const t=ly(e),[s,o]=uy(t);for(let l=0;l<this.hashCount;l++){const h=this.Ee(s,o,l);this.Ae(h)}}Ae(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,t,s,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const o=new Map;return o.set(e,ll.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ic(Te.min(),o,new Ze(Ne),Nr(),Pe())}}class ll{constructor(e,t,s,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new ll(s,t,Pe(),Pe(),Pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,t,s,o){this.Re=e,this.removedTargetIds=t,this.key=s,this.Ve=o}}class Tv{constructor(e,t){this.targetId=e,this.me=t}}class Iv{constructor(e,t,s=Nt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=o}}class cy{constructor(){this.fe=0,this.ge=hy(),this.pe=Nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Pe(),t=Pe(),s=Pe();return this.ge.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:s=s.add(o);break;default:we()}}),new ll(this.pe,this.ye,e,t,s)}Ce(){this.we=!1,this.ge=hy()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Nr(),this.qe=Du(),this.Qe=Du(),this.Ke=new Ze(Ne)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const s=this.ze(t);switch(e.state){case 0:this.je(t)&&s.De(e.resumeToken);break;case 1:s.Oe(),s.Se||s.Ce(),s.De(e.resumeToken);break;case 2:s.Oe(),s.Se||this.removeTarget(t);break;case 3:this.je(t)&&(s.Ne(),s.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),s.De(e.resumeToken));break;default:we()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((s,o)=>{this.je(o)&&t(o)})}Je(e){const t=e.targetId,s=e.me.count,o=this.Ye(t);if(o){const l=o.target;if(Ld(l))if(s===0){const h=new pe(l.path);this.We(t,h,Ft.newNoDocument(h,Te.min()))}else Fe(s===1);else{const h=this.Ze(t);if(h!==s){const f=this.Xe(e),g=f?this.et(f,e,h):1;if(g!==0){this.He(t);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,_)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:s="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=wi(s).toUint8Array()}catch(g){if(g instanceof ev)return yo("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{f=new vf(h,o,l)}catch(g){return yo(g instanceof Oa?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return f.Te===0?null:f}et(e,t,s){return t.me.count===s-this.rt(e,t.targetId)?0:2}rt(e,t){const s=this.Le.getRemoteKeysForTarget(t);let o=0;return s.forEach(l=>{const h=this.Le.nt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.We(t,l,null),o++)}),o}it(e){const t=new Map;this.Be.forEach((l,h)=>{const f=this.Ye(h);if(f){if(l.current&&Ld(f.target)){const g=new pe(f.target.path);this.st(g).has(h)||this.ot(h,g)||this.We(h,g,Ft.newNoDocument(g,e))}l.be&&(t.set(h,l.ve()),l.Ce())}});let s=Pe();this.Qe.forEach((l,h)=>{let f=!0;h.forEachWhile(g=>{const _=this.Ye(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(s=s.add(l))}),this.ke.forEach((l,h)=>h.setReadTime(e));const o=new Ic(e,t,this.Ke,this.ke,s);return this.ke=Nr(),this.qe=Du(),this.Qe=Du(),this.Ke=new Ze(Ne),o}Ue(e,t){if(!this.je(e))return;const s=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,s),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,s){if(!this.je(e))return;const o=this.ze(e);this.ot(e,t)?o.Fe(t,1):o.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),s&&(this.ke=this.ke.insert(t,s))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new cy,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new gt(Ne),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new gt(Ne),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||ie("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new cy),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Du(){return new Ze(pe.comparator)}function hy(){return new Ze(pe.comparator)}const TR={asc:"ASCENDING",desc:"DESCENDING"},IR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SR={and:"AND",or:"OR"};class AR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ud(r,e){return r.useProto3Json||yc(e)?e:{value:e}}function sc(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sv(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function RR(r,e){return sc(r,e.toTimestamp())}function nr(r){return Fe(!!r),Te.fromTimestamp(function(t){const s=Ei(t);return new mt(s.seconds,s.nanos)}(r))}function Ef(r,e){return Fd(r,e).canonicalString()}function Fd(r,e){const t=function(o){return new Ge(["projects",o.projectId,"databases",o.database])}(r).child("documents");return e===void 0?t:t.child(e)}function Av(r){const e=Ge.fromString(r);return Fe(Nv(e)),e}function jd(r,e){return Ef(r.databaseId,e.path)}function yd(r,e){const t=Av(e);if(t.get(1)!==r.databaseId.projectId)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new oe(K.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new pe(Cv(t))}function Rv(r,e){return Ef(r.databaseId,e)}function CR(r){const e=Av(r);return e.length===4?Ge.emptyPath():Cv(e)}function Bd(r){return new Ge(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Cv(r){return Fe(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function dy(r,e,t){return{name:jd(r,e),fields:t.value.mapValue.fields}}function PR(r,e){let t;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:we()}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(_,E){return _.useProto3Json?(Fe(E===void 0||typeof E=="string"),Nt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Nt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(_){const E=_.code===void 0?K.UNKNOWN:wv(_.code);return new oe(E,_.message||"")}(h);t=new Iv(s,o,l,f||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const o=yd(r,s.document.name),l=nr(s.document.updateTime),h=s.document.createTime?nr(s.document.createTime):Te.min(),f=new tn({mapValue:{fields:s.document.fields}}),g=Ft.newFoundDocument(o,l,h,f),_=s.targetIds||[],E=s.removedTargetIds||[];t=new zu(_,E,g.key,g)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const o=yd(r,s.document),l=s.readTime?nr(s.readTime):Te.min(),h=Ft.newNoDocument(o,l),f=s.removedTargetIds||[];t=new zu([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const o=yd(r,s.document),l=s.removedTargetIds||[];t=new zu([],l,o,null)}else{if(!("filter"in e))return we();{e.filter;const s=e.filter;s.targetId;const{count:o=0,unchangedNames:l}=s,h=new yR(o,l),f=s.targetId;t=new Tv(f,h)}}return t}function kR(r,e){let t;if(e instanceof al)t={update:dy(r,e.key,e.value)};else if(e instanceof yf)t={delete:jd(r,e.key)};else if(e instanceof Ri)t={update:dy(r,e.key,e.data),updateMask:UR(e.fieldMask)};else{if(!(e instanceof pR))return we();t={verify:jd(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(l,h){const f=h.transform;if(f instanceof rc)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Ya)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Xa)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof ic)return{fieldPath:h.field.canonicalString(),increment:f.Pe};throw we()}(0,s))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:RR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:we()}(r,e.precondition)),t}function NR(r,e){return r&&r.length>0?(Fe(e!==void 0),r.map(t=>function(o,l){let h=o.updateTime?nr(o.updateTime):nr(l);return h.isEqual(Te.min())&&(h=nr(l)),new hR(h,o.transformResults||[])}(t,e))):[]}function xR(r,e){return{documents:[Rv(r,e.path)]}}function DR(r,e){const t={structuredQuery:{}},s=e.path;let o;e.collectionGroup!==null?(o=s,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=s.popLast(),t.structuredQuery.from=[{collectionId:s.lastSegment()}]),t.parent=Rv(r,o);const l=function(_){if(_.length!==0)return kv(Fn.create(_,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(_){if(_.length!==0)return _.map(E=>function(k){return{field:ao(k.field),direction:LR(k.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=Ud(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ct:t,parent:o}}function VR(r){let e=CR(r.parent);const t=r.structuredQuery,s=t.from?t.from.length:0;let o=null;if(s>0){Fe(s===1);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const k=Pv(T);return k instanceof Fn&&iv(k)?k.getFilters():[k]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(k=>function($){return new nc(lo($.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}($.direction))}(k))}(t.orderBy));let f=null;t.limit&&(f=function(T){let k;return k=typeof T=="object"?T.value:T,yc(k)?null:k}(t.limit));let g=null;t.startAt&&(g=function(T){const k=!!T.before,U=T.values||[];return new tc(U,k)}(t.startAt));let _=null;return t.endAt&&(_=function(T){const k=!T.before,U=T.values||[];return new tc(U,k)}(t.endAt)),JA(e,o,h,l,f,"F",g,_)}function OR(r,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return we()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Pv(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const s=lo(t.unaryFilter.field);return lt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const o=lo(t.unaryFilter.field);return lt.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=lo(t.unaryFilter.field);return lt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=lo(t.unaryFilter.field);return lt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return we()}}(r):r.fieldFilter!==void 0?function(t){return lt.create(lo(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return we()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return Fn.create(t.compositeFilter.filters.map(s=>Pv(s)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return we()}}(t.compositeFilter.op))}(r):we()}function LR(r){return TR[r]}function MR(r){return IR[r]}function bR(r){return SR[r]}function ao(r){return{fieldPath:r.canonicalString()}}function lo(r){return kt.fromServerFormat(r.fieldPath)}function kv(r){return r instanceof lt?function(t){if(t.op==="=="){if(Zg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NAN"}};if(Jg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Zg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NAN"}};if(Jg(t.value))return{unaryFilter:{field:ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ao(t.field),op:MR(t.op),value:t.value}}}(r):r instanceof Fn?function(t){const s=t.getFilters().map(o=>kv(o));return s.length===1?s[0]:{compositeFilter:{op:bR(t.op),filters:s}}}(r):we()}function UR(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nv(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t,s,o,l=Te.min(),h=Te.min(),f=Nt.EMPTY_BYTE_STRING,g=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=g}withSequenceNumber(e){return new di(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new di(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e){this.ht=e}}function jR(r){const e=VR({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(){this.ln=new zR}addToCollectionParentIndex(e,t){return this.ln.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(vi.min())}updateCollectionGroup(e,t,s){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class zR{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t]||new gt(Ge.comparator),l=!o.has(s);return this.index[t]=o.add(s),l}has(e){const t=e.lastSegment(),s=e.popLast(),o=this.index[t];return o&&o.has(s)}getEntries(e){return(this.index[e]||new gt(Ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class en{static withCacheSize(e){return new en(e,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.DEFAULT_COLLECTION_PERCENTILE=10,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,en.DEFAULT=new en(41943040,en.DEFAULT_COLLECTION_PERCENTILE,en.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),en.DISABLED=new en(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new wo(0)}static Qn(){return new wo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function py([r,e],[t,s]){const o=Ne(r,t);return o===0?Ne(e,s):o}class $R{constructor(e){this.Gn=e,this.buffer=new gt(py),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();py(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class qR{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){ie("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ko(t)?ie("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Po(t)}await this.Yn(3e5)})}}class WR{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return W.resolve(gc.oe);const s=new $R(t);return this.Zn.forEachTarget(e,o=>s.Hn(o.sequenceNumber)).next(()=>this.Zn.er(e,o=>s.Hn(o))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Zn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ie("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(fy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ie("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),fy):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let s,o,l,h,f,g,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ie("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(s=T,f=Date.now(),this.removeTargets(e,s,t))).next(T=>(l=T,g=Date.now(),this.removeOrphanedDocuments(e,s))).next(T=>(_=Date.now(),so()<=Ce.DEBUG&&ie("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(g-f)+`ms
	Removed ${T} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function HR(r,e){return new WR(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.changes=new hs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ft.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?W.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,t,s,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=o}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(s=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(s!==null&&ja(s.mutation,o,hn.empty(),mt.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,Pe()).next(()=>s))}getLocalViewOfDocuments(e,t,s=Pe()){const o=ns();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,s).next(l=>{let h=Va();return l.forEach((f,g)=>{h=h.insert(f,g.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const s=ns();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,Pe()))}populateOverlays(e,t,s){const o=[];return s.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,s,o){let l=Nr();const h=Fa(),f=function(){return Fa()}();return t.forEach((g,_)=>{const E=s.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Ri)?l=l.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),ja(E.mutation,_,E.mutation.getFieldMask(),mt.now())):h.set(_.key,hn.empty())}),this.recalculateAndSaveOverlays(e,l).next(g=>(g.forEach((_,E)=>h.set(_,E)),t.forEach((_,E)=>{var T;return f.set(_,new GR(E,(T=h.get(_))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const s=Fa();let o=new Ze((h,f)=>h-f),l=Pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(g=>{const _=t.get(g);if(_===null)return;let E=s.get(g)||hn.empty();E=f.applyToLocalView(_,E),s.set(g,E);const T=(o.get(f.batchId)||Pe()).add(g);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const g=f.getNext(),_=g.key,E=g.value,T=fv();E.forEach(k=>{if(!l.has(k)){const U=vv(t.get(k),s.get(k));U!==null&&T.set(k,U),l=l.add(k)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,T))}return W.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s,o):this.getDocumentsMatchingCollectionQuery(e,t,s,o)}getNextDocuments(e,t,s,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,o-l.size):W.resolve(ns());let f=-1,g=l;return h.next(_=>W.forEach(_,(E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next(k=>{g=g.insert(E,k)}))).next(()=>this.populateOverlays(e,_,l)).next(()=>this.computeViews(e,g,_,Pe())).next(E=>({batchId:f,changes:dv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(s=>{let o=Va();return s.isFoundDocument()&&(o=o.insert(s.key,s)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,s,o){const l=t.collectionGroup;let h=Va();return this.indexManager.getCollectionParents(e,l).next(f=>W.forEach(f,g=>{const _=function(T,k){return new ol(k,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,g.child(l));return this.getDocumentsMatchingCollectionQuery(e,_,s,o).next(E=>{E.forEach((T,k)=>{h=h.insert(T,k)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,s,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,l,o))).next(h=>{l.forEach((g,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ft.newInvalidDocument(E)))});let f=Va();return h.forEach((g,_)=>{const E=l.get(g);E!==void 0&&ja(E.mutation,_,hn.empty(),mt.now()),Ec(t,_)&&(f=f.insert(g,_))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return W.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(o){return{id:o.id,version:o.version,createTime:nr(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(o){return{name:o.name,query:jR(o.bundledQuery),readTime:nr(o.readTime)}}(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.overlays=new Ze(pe.comparator),this.Er=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const s=ns();return W.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&s.set(o,l)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((o,l)=>{this.Tt(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,s){const o=this.Er.get(s);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.Er.delete(s)),W.resolve()}getOverlaysForCollection(e,t,s){const o=ns(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const g=f.getNext().value,_=g.getKey();if(!t.isPrefixOf(_.path))break;_.path.length===l&&g.largestBatchId>s&&o.set(g.getKey(),g)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,s,o){let l=new Ze((_,E)=>_-E);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===t&&_.largestBatchId>s){let E=l.get(_.largestBatchId);E===null&&(E=ns(),l=l.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const f=ns(),g=l.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach((_,E)=>f.set(_,E)),!(f.size()>=o)););return W.resolve(f)}Tt(e,t,s){const o=this.overlays.get(s.key);if(o!==null){const h=this.Er.get(o.largestBatchId).delete(s.key);this.Er.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new gR(t,s));let l=this.Er.get(t);l===void 0&&(l=Pe(),this.Er.set(t,l)),this.Er.set(t,l.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this.sessionToken=Nt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(){this.dr=new gt(It.Ar),this.Rr=new gt(It.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const s=new It(e,t);this.dr=this.dr.add(s),this.Rr=this.Rr.add(s)}mr(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.gr(new It(e,t))}pr(e,t){e.forEach(s=>this.removeReference(s,t))}yr(e){const t=new pe(new Ge([])),s=new It(t,e),o=new It(t,e+1),l=[];return this.Rr.forEachInRange([s,o],h=>{this.gr(h),l.push(h.key)}),l}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new pe(new Ge([])),s=new It(t,e),o=new It(t,e+1);let l=Pe();return this.Rr.forEachInRange([s,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new It(e,0),s=this.dr.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class It{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return pe.comparator(e.key,t.key)||Ne(e.br,t.br)}static Vr(e,t){return Ne(e.br,t.br)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new gt(It.Ar)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,o){const l=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new mR(l,t,s,o);this.mutationQueue.push(h);for(const f of o)this.vr=this.vr.add(new It(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,o=this.Fr(s),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new It(t,0),o=new It(t,Number.POSITIVE_INFINITY),l=[];return this.vr.forEachInRange([s,o],h=>{const f=this.Cr(h.br);l.push(f)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new gt(Ne);return t.forEach(o=>{const l=new It(o,0),h=new It(o,Number.POSITIVE_INFINITY);this.vr.forEachInRange([l,h],f=>{s=s.add(f.br)})}),W.resolve(this.Mr(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,o=s.length+1;let l=s;pe.isDocumentKey(l)||(l=l.child(""));const h=new It(new pe(l),0);let f=new gt(Ne);return this.vr.forEachWhile(g=>{const _=g.key.path;return!!s.isPrefixOf(_)&&(_.length===o&&(f=f.add(g.br)),!0)},h),W.resolve(this.Mr(f))}Mr(e){const t=[];return e.forEach(s=>{const o=this.Cr(s);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.vr;return W.forEach(t.mutations,o=>{const l=new It(o.key,t.batchId);return s=s.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.vr=s})}Ln(e){}containsKey(e,t){const s=new It(t,0),o=this.vr.firstAfterOrEqual(s);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e){this.Nr=e,this.docs=function(){return new Ze(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,o=this.docs.get(s),l=o?o.size:0,h=this.Nr(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return W.resolve(s?s.document.mutableCopy():Ft.newInvalidDocument(t))}getEntries(e,t){let s=Nr();return t.forEach(o=>{const l=this.docs.get(o);s=s.insert(o,l?l.document.mutableCopy():Ft.newInvalidDocument(o))}),W.resolve(s)}getDocumentsMatchingQuery(e,t,s,o){let l=Nr();const h=t.path,f=new pe(h.child("")),g=this.docs.getIteratorFrom(f);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||xA(NA(E),s)<=0||(o.has(E.key)||Ec(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,s,o){we()}Lr(e,t){return W.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new tC(this)}getSize(e){return W.resolve(this.size)}}class tC extends KR{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((s,o)=>{o.isValidDocument()?t.push(this.hr.addEntry(e,o)):this.hr.removeEntry(s)}),W.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e){this.persistence=e,this.Br=new hs(t=>ff(t),pf),this.lastRemoteSnapshotVersion=Te.min(),this.highestTargetId=0,this.kr=0,this.qr=new wf,this.targetCount=0,this.Qr=wo.qn()}forEachTarget(e,t){return this.Br.forEach((s,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.kr&&(this.kr=t),W.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new wo(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.Un(t),W.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,s){let o=0;const l=[];return this.Br.forEach((h,f)=>{f.sequenceNumber<=t&&s.get(f.targetId)===null&&(this.Br.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),W.waitFor(l).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const s=this.Br.get(t)||null;return W.resolve(s)}addMatchingKeys(e,t,s){return this.qr.mr(t,s),W.resolve()}removeMatchingKeys(e,t,s){this.qr.pr(t,s);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const s=this.qr.Sr(t);return W.resolve(s)}containsKey(e,t){return W.resolve(this.qr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(e,t){this.Kr={},this.overlays={},this.$r=new gc(0),this.Ur=!1,this.Ur=!0,this.Wr=new JR,this.referenceDelegate=e(this),this.Gr=new nC(this),this.indexManager=new BR,this.remoteDocumentCache=function(o){return new eC(o)}(s=>this.referenceDelegate.zr(s)),this.serializer=new FR(t),this.jr=new YR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new XR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Kr[e.toKey()];return s||(s=new ZR(t,this.referenceDelegate),this.Kr[e.toKey()]=s),s}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,s){ie("MemoryPersistence","Starting transaction:",e);const o=new rC(this.$r.next());return this.referenceDelegate.Hr(),s(o).next(l=>this.referenceDelegate.Jr(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Yr(e,t){return W.or(Object.values(this.Kr).map(s=>()=>s.containsKey(e,t)))}}class rC extends VA{constructor(e){super(),this.currentSequenceNumber=e}}class Tf{constructor(e){this.persistence=e,this.Zr=new wf,this.Xr=null}static ei(e){return new Tf(e)}get ti(){if(this.Xr)return this.Xr;throw we()}addReference(e,t,s){return this.Zr.addReference(s,t),this.ti.delete(s.toString()),W.resolve()}removeReference(e,t,s){return this.Zr.removeReference(s,t),this.ti.add(s.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),W.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(o=>this.ti.add(o.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.ti.add(l.toString()))}).next(()=>s.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.ti,s=>{const o=pe.fromPath(s);return this.ni(e,o).next(l=>{l||t.removeEntry(o,Te.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(s=>{s?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return W.or([()=>W.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class oc{constructor(e,t){this.persistence=e,this.ri=new hs(s=>MA(s.path),(s,o)=>s.isEqual(o)),this.garbageCollector=HR(this,t)}static ei(e,t){return new oc(e,t)}Hr(){}Jr(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(o=>s+o))}nr(e){let t=0;return this.er(e,s=>{t++}).next(()=>t)}er(e,t){return W.forEach(this.ri,(s,o)=>this.ir(e,s,o).next(l=>l?W.resolve():t(o)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.Lr(e,h=>this.ir(e,h,t).next(f=>{f||(s++,l.removeEntry(h,Te.min()))})).next(()=>l.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),W.resolve()}removeReference(e,t,s){return this.ri.set(s,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),W.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Fu(e.data.value)),t}ir(e,t,s){return W.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.ri.get(t);return W.resolve(o!==void 0&&o>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,t,s,o){this.targetId=e,this.fromCache=t,this.Wi=s,this.Gi=o}static zi(e,t){let s=Pe(),o=Pe();for(const l of t.docChanges)switch(l.type){case 0:s=s.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new If(e,t.fromCache,s,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return FT()?8:OA(jt())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,s,o){const l={result:null};return this.Xi(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.es(e,t,o,s).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new iC;return this.ts(e,t,h).next(f=>{if(l.result=f,this.Hi)return this.ns(e,t,h,f.size)})}).next(()=>l.result)}ns(e,t,s,o){return s.documentReadCount<this.Ji?(so()<=Ce.DEBUG&&ie("QueryEngine","SDK will not create cache indexes for query:",oo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),W.resolve()):(so()<=Ce.DEBUG&&ie("QueryEngine","Query:",oo(t),"scans",s.documentReadCount,"local documents and returns",o,"documents as results."),s.documentReadCount>this.Yi*o?(so()<=Ce.DEBUG&&ie("QueryEngine","The SDK decides to create cache indexes for query:",oo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tr(t))):W.resolve())}Xi(e,t){if(ry(t))return W.resolve(null);let s=tr(t);return this.indexManager.getIndexType(e,s).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=bd(t,null,"F"),s=tr(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(l=>{const h=Pe(...l);return this.Zi.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,s).next(g=>{const _=this.rs(t,f);return this.ss(t,_,h,g.readTime)?this.Xi(e,bd(t,null,"F")):this.os(e,_,t,g)}))})))}es(e,t,s,o){return ry(t)||o.isEqual(Te.min())?W.resolve(null):this.Zi.getDocuments(e,s).next(l=>{const h=this.rs(t,l);return this.ss(t,h,s,o)?W.resolve(null):(so()<=Ce.DEBUG&&ie("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),oo(t)),this.os(e,h,t,kA(o,-1)).next(f=>f))})}rs(e,t){let s=new gt(cv(e));return t.forEach((o,l)=>{Ec(e,l)&&(s=s.add(l))}),s}ss(e,t,s,o){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ts(e,t,s){return so()<=Ce.DEBUG&&ie("QueryEngine","Using full collection scan to execute query:",oo(t)),this.Zi.getDocumentsMatchingQuery(e,t,vi.min(),s)}os(e,t,s,o){return this.Zi.getDocumentsMatchingQuery(e,s,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(e,t,s,o){this.persistence=e,this._s=t,this.serializer=o,this.us=new Ze(Ne),this.cs=new hs(l=>ff(l),pf),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(s)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QR(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function aC(r,e,t,s){return new oC(r,e,t,s)}async function Dv(r,e){const t=Ie(r);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let o;return t.mutationQueue.getAllMutationBatches(s).next(l=>(o=l,t.Ps(e),t.mutationQueue.getAllMutationBatches(s))).next(l=>{const h=[],f=[];let g=Pe();for(const _ of o){h.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of l){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return t.localDocuments.getDocuments(s,g).next(_=>({Ts:_,removedBatchIds:h,addedBatchIds:f}))})})}function lC(r,e){const t=Ie(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const o=e.batch.keys(),l=t.hs.newChangeBuffer({trackRemovals:!0});return function(f,g,_,E){const T=_.batch,k=T.keys();let U=W.resolve();return k.forEach($=>{U=U.next(()=>E.getEntry(g,$)).next(q=>{const F=_.docVersions.get($);Fe(F!==null),q.version.compareTo(F)<0&&(T.applyToRemoteDocument(q,_),q.isValidDocument()&&(q.setReadTime(_.commitVersion),E.addEntry(q)))})}),U.next(()=>f.mutationQueue.removeMutationBatch(g,T))}(t,s,e,l).next(()=>l.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(f){let g=Pe();for(let _=0;_<f.mutationResults.length;++_)f.mutationResults[_].transformResults.length>0&&(g=g.add(f.batch.mutations[_].key));return g}(e))).next(()=>t.localDocuments.getDocuments(s,o))})}function Vv(r){const e=Ie(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function uC(r,e){const t=Ie(r),s=e.snapshotVersion;let o=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.hs.newChangeBuffer({trackRemovals:!0});o=t.us;const f=[];e.targetChanges.forEach((E,T)=>{const k=o.get(T);if(!k)return;f.push(t.Gr.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.Gr.addMatchingKeys(l,E.addedDocuments,T)));let U=k.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?U=U.withResumeToken(Nt.EMPTY_BYTE_STRING,Te.min()).withLastLimboFreeSnapshotVersion(Te.min()):E.resumeToken.approximateByteSize()>0&&(U=U.withResumeToken(E.resumeToken,s)),o=o.insert(T,U),function(q,F,le){return q.resumeToken.approximateByteSize()===0||F.snapshotVersion.toMicroseconds()-q.snapshotVersion.toMicroseconds()>=3e8?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0}(k,U,E)&&f.push(t.Gr.updateTargetData(l,U))});let g=Nr(),_=Pe();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(cC(l,h,e.documentUpdates).next(E=>{g=E.Is,_=E.Es})),!s.isEqual(Te.min())){const E=t.Gr.getLastRemoteSnapshotVersion(l).next(T=>t.Gr.setTargetsMetadata(l,l.currentSequenceNumber,s));f.push(E)}return W.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,g,_)).next(()=>g)}).then(l=>(t.us=o,l))}function cC(r,e,t){let s=Pe(),o=Pe();return t.forEach(l=>s=s.add(l)),e.getEntries(r,s).next(l=>{let h=Nr();return t.forEach((f,g)=>{const _=l.get(f);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(f)),g.isNoDocument()&&g.version.isEqual(Te.min())?(e.removeEntry(f,g.readTime),h=h.insert(f,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(g),h=h.insert(f,g)):ie("LocalStore","Ignoring outdated watch update for ",f,". Current version:",_.version," Watch version:",g.version)}),{Is:h,Es:o}})}function hC(r,e){const t=Ie(r);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function dC(r,e){const t=Ie(r);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let o;return t.Gr.getTargetData(s,e).next(l=>l?(o=l,W.resolve(o)):t.Gr.allocateTargetId(s).next(h=>(o=new di(e,h,"TargetPurposeListen",s.currentSequenceNumber),t.Gr.addTargetData(s,o).next(()=>o))))}).then(s=>{const o=t.us.get(s.targetId);return(o===null||s.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.us=t.us.insert(s.targetId,s),t.cs.set(e,s.targetId)),s})}async function zd(r,e,t){const s=Ie(r),o=s.us.get(e),l=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",l,h=>s.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!ko(h))throw h;ie("LocalStore",`Failed to update sequence numbers for target ${e}: ${h}`)}s.us=s.us.remove(e),s.cs.delete(o.target)}function my(r,e,t){const s=Ie(r);let o=Te.min(),l=Pe();return s.persistence.runTransaction("Execute query","readwrite",h=>function(g,_,E){const T=Ie(g),k=T.cs.get(E);return k!==void 0?W.resolve(T.us.get(k)):T.Gr.getTargetData(_,E)}(s,h,tr(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,s.Gr.getMatchingKeysForTargetId(h,f.targetId).next(g=>{l=g})}).next(()=>s._s.getDocumentsMatchingQuery(h,e,t?o:Te.min(),t?l:Pe())).next(f=>(fC(s,eR(e),f),{documents:f,ds:l})))}function fC(r,e,t){let s=r.ls.get(e)||Te.min();t.forEach((o,l)=>{l.readTime.compareTo(s)>0&&(s=l.readTime)}),r.ls.set(e,s)}class gy{constructor(){this.activeTargetIds=oR()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pC{constructor(){this._o=new gy,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,s){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new gy,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){ie("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){ie("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu=null;function _d(){return Vu===null?Vu=function(){return 268435456+Math.round(2147483648*Math.random())}():Vu++,"0x"+Vu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class _C extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const s=t.ssl?"https":"http",o=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Fo=s+"://"+t.host,this.Mo=`projects/${o}/databases/${l}`,this.xo=this.databaseId.database==="(default)"?`project_id=${o}`:`project_id=${o}&database_id=${l}`}Oo(t,s,o,l,h){const f=_d(),g=this.No(t,s.toUriEncodedString());ie("RestConnection",`Sending RPC '${t}' ${f}:`,g,o);const _={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(_,l,h),this.Bo(t,g,_,o).then(E=>(ie("RestConnection",`Received RPC '${t}' ${f}: `,E),E),E=>{throw yo("RestConnection",`RPC '${t}' ${f} failed with error: `,E,"url: ",g,"request:",o),E})}ko(t,s,o,l,h,f){return this.Oo(t,s,o,l,h)}Lo(t,s,o){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Co}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((l,h)=>t[h]=l),o&&o.headers.forEach((l,h)=>t[h]=l)}No(t,s){const o=gC[t];return`${this.Fo}/v1/${s}:${o}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,s,o){const l=_d();return new Promise((h,f)=>{const g=new H_;g.setWithCredentials(!0),g.listenOnce(K_.COMPLETE,()=>{try{switch(g.getLastErrorCode()){case Uu.NO_ERROR:const E=g.getResponseJson();ie(bt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(E)),h(E);break;case Uu.TIMEOUT:ie(bt,`RPC '${e}' ${l} timed out`),f(new oe(K.DEADLINE_EXCEEDED,"Request time out"));break;case Uu.HTTP_ERROR:const T=g.getStatus();if(ie(bt,`RPC '${e}' ${l} failed with status:`,T,"response text:",g.getResponseText()),T>0){let k=g.getResponseJson();Array.isArray(k)&&(k=k[0]);const U=k==null?void 0:k.error;if(U&&U.status&&U.message){const $=function(F){const le=F.toLowerCase().replace(/_/g,"-");return Object.values(K).indexOf(le)>=0?le:K.UNKNOWN}(U.status);f(new oe($,U.message))}else f(new oe(K.UNKNOWN,"Server responded with status "+g.getStatus()))}else f(new oe(K.UNAVAILABLE,"Connection failed."));break;default:we()}}finally{ie(bt,`RPC '${e}' ${l} completed.`)}});const _=JSON.stringify(o);ie(bt,`RPC '${e}' ${l} sending request:`,o),g.send(t,"POST",_,s,15)})}qo(e,t,s){const o=_d(),l=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Y_(),f=Q_(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Lo(g.initMessageHeaders,t,s),g.encodeInitMessageHeaders=!0;const E=l.join("");ie(bt,`Creating RPC '${e}' stream ${o}: ${E}`,g);const T=h.createWebChannel(E,g);let k=!1,U=!1;const $=new yC({Eo:F=>{U?ie(bt,`Not sending because RPC '${e}' stream ${o} is closed:`,F):(k||(ie(bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),k=!0),ie(bt,`RPC '${e}' stream ${o} sending:`,F),T.send(F))},Ao:()=>T.close()}),q=(F,le,ce)=>{F.listen(le,de=>{try{ce(de)}catch(ve){setTimeout(()=>{throw ve},0)}})};return q(T,Da.EventType.OPEN,()=>{U||(ie(bt,`RPC '${e}' stream ${o} transport opened.`),$.So())}),q(T,Da.EventType.CLOSE,()=>{U||(U=!0,ie(bt,`RPC '${e}' stream ${o} transport closed`),$.Do())}),q(T,Da.EventType.ERROR,F=>{U||(U=!0,yo(bt,`RPC '${e}' stream ${o} transport errored:`,F),$.Do(new oe(K.UNAVAILABLE,"The operation could not be completed")))}),q(T,Da.EventType.MESSAGE,F=>{var le;if(!U){const ce=F.data[0];Fe(!!ce);const de=ce,ve=(de==null?void 0:de.error)||((le=de[0])===null||le===void 0?void 0:le.error);if(ve){ie(bt,`RPC '${e}' stream ${o} received error:`,ve);const Le=ve.status;let te=function(C){const N=at[C];if(N!==void 0)return wv(N)}(Le),A=ve.message;te===void 0&&(te=K.INTERNAL,A="Unknown error status: "+Le+" with message "+ve.message),U=!0,$.Do(new oe(te,A)),T.close()}else ie(bt,`RPC '${e}' stream ${o} received:`,ce),$.vo(ce)}}),q(f,G_.STAT_EVENT,F=>{F.stat===xd.PROXY?ie(bt,`RPC '${e}' stream ${o} detected buffering proxy`):F.stat===xd.NOPROXY&&ie(bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{$.bo()},0),$}}function vd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(r){return new AR(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ov{constructor(e,t,s=1e3,o=1.5,l=6e4){this.li=e,this.timerId=t,this.Qo=s,this.Ko=o,this.$o=l,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),s=Math.max(0,Date.now()-this.Go),o=Math.max(0,t-s);o>0&&ie("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,o,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t,s,o,l,h,f,g){this.li=e,this.Yo=s,this.Zo=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=g,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Ov(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===K.RESOURCE_EXHAUSTED?(kr(t.toString()),kr("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===K.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,o])=>{this.Xo===t&&this.I_(s,o)},s=>{e(()=>{const o=new oe(K.UNKNOWN,"Fetching auth token failed: "+s.message);return this.E_(o)})})}I_(e,t){const s=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{s(()=>this.listener.Ro())}),this.stream.mo(()=>{s(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(o=>{s(()=>this.E_(o))}),this.stream.onMessage(o=>{s(()=>++this.n_==1?this.A_(o):this.onNext(o))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return ie("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(ie("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vC extends Lv{constructor(e,t,s,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=PR(this.serializer,e),s=function(l){if(!("targetChange"in l))return Te.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?Te.min():h.readTime?nr(h.readTime):Te.min()}(e);return this.listener.R_(t,s)}V_(e){const t={};t.database=Bd(this.serializer),t.addTarget=function(l,h){let f;const g=h.target;if(f=Ld(g)?{documents:xR(l,g)}:{query:DR(l,g).ct},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=Sv(l,h.resumeToken);const _=Ud(l,h.expectedCount);_!==null&&(f.expectedCount=_)}else if(h.snapshotVersion.compareTo(Te.min())>0){f.readTime=sc(l,h.snapshotVersion.toTimestamp());const _=Ud(l,h.expectedCount);_!==null&&(f.expectedCount=_)}return f}(this.serializer,e);const s=OR(this.serializer,e);s&&(t.labels=s),this.c_(t)}m_(e){const t={};t.database=Bd(this.serializer),t.removeTarget=e,this.c_(t)}}class EC extends Lv{constructor(e,t,s,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,o,h),this.serializer=l}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=NR(e.writeResults,e.commitTime),s=nr(e.commitTime);return this.listener.y_(s,t)}w_(){const e={};e.database=Bd(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>kR(this.serializer,s))};this.c_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wC extends class{}{constructor(e,t,s,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=o,this.S_=!1}b_(){if(this.S_)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,s,o){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Oo(e,Fd(t,s),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new oe(K.UNKNOWN,l.toString())})}ko(e,t,s,o,l){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.ko(e,Fd(t,s),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===K.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new oe(K.UNKNOWN,h.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class TC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(kr(t),this.C_=!1):ie("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e,t,s,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=l,this.Q_.uo(h=>{s.enqueueAndForget(async()=>{ds(this)&&(ie("RemoteStore","Restarting streams for network reachability change."),await async function(g){const _=Ie(g);_.k_.add(4),await ul(_),_.K_.set("Unknown"),_.k_.delete(4),await Ac(_)}(this))})}),this.K_=new TC(s,o)}}async function Ac(r){if(ds(r))for(const e of r.q_)await e(!0)}async function ul(r){for(const e of r.q_)await e(!1)}function Mv(r,e){const t=Ie(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),Cf(t)?Rf(t):No(t).s_()&&Af(t,e))}function Sf(r,e){const t=Ie(r),s=No(t);t.B_.delete(e),s.s_()&&bv(t,e),t.B_.size===0&&(s.s_()?s.a_():ds(t)&&t.K_.set("Unknown"))}function Af(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Te.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}No(r).V_(e)}function bv(r,e){r.U_.xe(e),No(r).m_(e)}function Rf(r){r.U_=new wR({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),No(r).start(),r.K_.F_()}function Cf(r){return ds(r)&&!No(r).i_()&&r.B_.size>0}function ds(r){return Ie(r).k_.size===0}function Uv(r){r.U_=void 0}async function SC(r){r.K_.set("Online")}async function AC(r){r.B_.forEach((e,t)=>{Af(r,e)})}async function RC(r,e){Uv(r),Cf(r)?(r.K_.O_(e),Rf(r)):r.K_.set("Unknown")}async function CC(r,e,t){if(r.K_.set("Online"),e instanceof Iv&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.B_.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.B_.delete(f),o.U_.removeTarget(f))}(r,e)}catch(s){ie("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ac(r,s)}else if(e instanceof zu?r.U_.$e(e):e instanceof Tv?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(Te.min()))try{const s=await Vv(r.localStore);t.compareTo(s)>=0&&await function(l,h){const f=l.U_.it(h);return f.targetChanges.forEach((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=l.B_.get(_);E&&l.B_.set(_,E.withResumeToken(g.resumeToken,h))}}),f.targetMismatches.forEach((g,_)=>{const E=l.B_.get(g);if(!E)return;l.B_.set(g,E.withResumeToken(Nt.EMPTY_BYTE_STRING,E.snapshotVersion)),bv(l,g);const T=new di(E.target,g,_,E.sequenceNumber);Af(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(r,t)}catch(s){ie("RemoteStore","Failed to raise snapshot:",s),await ac(r,s)}}async function ac(r,e,t){if(!ko(e))throw e;r.k_.add(1),await ul(r),r.K_.set("Offline"),t||(t=()=>Vv(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ie("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await Ac(r)})}function Fv(r,e){return e().catch(t=>ac(r,t,e))}async function Rc(r){const e=Ie(r),t=Ii(e);let s=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;PC(e);)try{const o=await hC(e.localStore,s);if(o===null){e.L_.length===0&&t.a_();break}s=o.batchId,kC(e,o)}catch(o){await ac(e,o)}jv(e)&&Bv(e)}function PC(r){return ds(r)&&r.L_.length<10}function kC(r,e){r.L_.push(e);const t=Ii(r);t.s_()&&t.f_&&t.g_(e.mutations)}function jv(r){return ds(r)&&!Ii(r).i_()&&r.L_.length>0}function Bv(r){Ii(r).start()}async function NC(r){Ii(r).w_()}async function xC(r){const e=Ii(r);for(const t of r.L_)e.g_(t.mutations)}async function DC(r,e,t){const s=r.L_.shift(),o=_f.from(s,e,t);await Fv(r,()=>r.remoteSyncer.applySuccessfulWrite(o)),await Rc(r)}async function VC(r,e){e&&Ii(r).f_&&await async function(s,o){if(function(h){return _R(h)&&h!==K.ABORTED}(o.code)){const l=s.L_.shift();Ii(s).__(),await Fv(s,()=>s.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Rc(s)}}(r,e),jv(r)&&Bv(r)}async function _y(r,e){const t=Ie(r);t.asyncQueue.verifyOperationInProgress(),ie("RemoteStore","RemoteStore received new credentials");const s=ds(t);t.k_.add(3),await ul(t),s&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await Ac(t)}async function OC(r,e){const t=Ie(r);e?(t.k_.delete(2),await Ac(t)):e||(t.k_.add(2),await ul(t),t.K_.set("Unknown"))}function No(r){return r.W_||(r.W_=function(t,s,o){const l=Ie(t);return l.b_(),new vC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:SC.bind(null,r),mo:AC.bind(null,r),po:RC.bind(null,r),R_:CC.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),Cf(r)?Rf(r):r.K_.set("Unknown")):(await r.W_.stop(),Uv(r))})),r.W_}function Ii(r){return r.G_||(r.G_=function(t,s,o){const l=Ie(t);return l.b_(),new EC(s,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:NC.bind(null,r),po:VC.bind(null,r),p_:xC.bind(null,r),y_:DC.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await Rc(r)):(await r.G_.stop(),r.L_.length>0&&(ie("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,s,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=o,this.removalCallback=l,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,s,o,l){const h=Date.now()+s,f=new Pf(e,t,h,o,l);return f.start(s),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe(K.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kf(r,e){if(kr("AsyncQueue",`${e}: ${r}`),ko(r))return new oe(K.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{static emptySet(e){return new po(e.comparator)}constructor(e){this.comparator=e?(t,s)=>e(t,s)||pe.comparator(t.key,s.key):(t,s)=>pe.comparator(t.key,s.key),this.keyedMap=Va(),this.sortedSet=new Ze(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof po)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=s.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new po;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vy{constructor(){this.z_=new Ze(pe.comparator)}track(e){const t=e.doc.key,s=this.z_.get(t);s?e.type!==0&&s.type===3?this.z_=this.z_.insert(t,e):e.type===3&&s.type!==1?this.z_=this.z_.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.z_=this.z_.remove(t):e.type===1&&s.type===2?this.z_=this.z_.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):we():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,s)=>{e.push(s)}),e}}class To{constructor(e,t,s,o,l,h,f,g,_){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(e,t,s,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new To(e,t,po.emptySet(t),h,s,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==s[o].type||!t[o].doc.isEqual(s[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class MC{constructor(){this.queries=Ey(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,s){const o=Ie(t),l=o.queries;o.queries=Ey(),l.forEach((h,f)=>{for(const g of f.J_)g.onError(s)})})(this,new oe(K.ABORTED,"Firestore shutting down"))}}function Ey(){return new hs(r=>uv(r),vc)}async function zv(r,e){const t=Ie(r);let s=3;const o=e.query;let l=t.queries.get(o);l?!l.Y_()&&e.Z_()&&(s=2):(l=new LC,s=e.Z_()?0:1);try{switch(s){case 0:l.H_=await t.onListen(o,!0);break;case 1:l.H_=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=kf(h,`Initialization of query '${oo(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.J_.push(e),e.ea(t.onlineState),l.H_&&e.ta(l.H_)&&Nf(t)}async function $v(r,e){const t=Ie(r),s=e.query;let o=3;const l=t.queries.get(s);if(l){const h=l.J_.indexOf(e);h>=0&&(l.J_.splice(h,1),l.J_.length===0?o=e.Z_()?0:1:!l.Y_()&&e.Z_()&&(o=2))}switch(o){case 0:return t.queries.delete(s),t.onUnlisten(s,!0);case 1:return t.queries.delete(s),t.onUnlisten(s,!1);case 2:return t.onLastRemoteStoreUnlisten(s);default:return}}function bC(r,e){const t=Ie(r);let s=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.J_)f.ta(o)&&(s=!0);h.H_=o}}s&&Nf(t)}function UC(r,e,t){const s=Ie(r),o=s.queries.get(e);if(o)for(const l of o.J_)l.onError(t);s.queries.delete(e)}function Nf(r){r.X_.forEach(e=>{e.next()})}var $d,wy;(wy=$d||($d={})).na="default",wy.Cache="cache";class qv{constructor(e,t,s){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=s||{}}ta(e){if(!this.options.includeMetadataChanges){const s=[];for(const o of e.docChanges)o.type!==3&&s.push(o);e=new To(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const s=t!=="Offline";return(!this.options.ua||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==$d.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.key=e}}class Hv{constructor(e){this.key=e}}class FC{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Pe(),this.mutatedKeys=Pe(),this.Va=cv(e),this.ma=new po(this.Va)}get fa(){return this.da}ga(e,t){const s=t?t.pa:new vy,o=t?t.ma:this.ma;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const k=o.get(E),U=Ec(this.query,T)?T:null,$=!!k&&this.mutatedKeys.has(k.key),q=!!U&&(U.hasLocalMutations||this.mutatedKeys.has(U.key)&&U.hasCommittedMutations);let F=!1;k&&U?k.data.isEqual(U.data)?$!==q&&(s.track({type:3,doc:U}),F=!0):this.ya(k,U)||(s.track({type:2,doc:U}),F=!0,(g&&this.Va(U,g)>0||_&&this.Va(U,_)<0)&&(f=!0)):!k&&U?(s.track({type:0,doc:U}),F=!0):k&&!U&&(s.track({type:1,doc:k}),F=!0,(g||_)&&(f=!0)),F&&(U?(h=h.add(U),l=q?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),s.track({type:1,doc:E})}return{ma:h,pa:s,ss:f,mutatedKeys:l}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s,o){const l=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const h=e.pa.j_();h.sort((E,T)=>function(U,$){const q=F=>{switch(F){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return we()}};return q(U)-q($)}(E.type,T.type)||this.Va(E.doc,T.doc)),this.wa(s),o=o!=null&&o;const f=t&&!o?this.Sa():[],g=this.Ra.size===0&&this.current&&!o?1:0,_=g!==this.Aa;return this.Aa=g,h.length!==0||_?{snapshot:new To(this.query,e.ma,l,h,e.mutatedKeys,g===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),ba:f}:{ba:f}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new vy,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Pe(),this.ma.forEach(s=>{this.Da(s.key)&&(this.Ra=this.Ra.add(s.key))});const t=[];return e.forEach(s=>{this.Ra.has(s)||t.push(new Hv(s))}),this.Ra.forEach(s=>{e.has(s)||t.push(new Wv(s))}),t}va(e){this.da=e.ds,this.Ra=Pe();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return To.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class jC{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class BC{constructor(e){this.key=e,this.Fa=!1}}class zC{constructor(e,t,s,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.Ma={},this.xa=new hs(f=>uv(f),vc),this.Oa=new Map,this.Na=new Set,this.La=new Ze(pe.comparator),this.Ba=new Map,this.ka=new wf,this.qa={},this.Qa=new Map,this.Ka=wo.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function $C(r,e,t=!0){const s=Jv(r);let o;const l=s.xa.get(e);return l?(s.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.Ca()):o=await Kv(s,e,t,!0),o}async function qC(r,e){const t=Jv(r);await Kv(t,e,!0,!1)}async function Kv(r,e,t,s){const o=await dC(r.localStore,tr(e)),l=o.targetId,h=r.sharedClientState.addLocalQueryTarget(l,t);let f;return s&&(f=await WC(r,e,l,h==="current",o.resumeToken)),r.isPrimaryClient&&t&&Mv(r.remoteStore,o),f}async function WC(r,e,t,s,o){r.Ua=(T,k,U)=>async function(q,F,le,ce){let de=F.view.ga(le);de.ss&&(de=await my(q.localStore,F.query,!1).then(({documents:A})=>F.view.ga(A,de)));const ve=ce&&ce.targetChanges.get(F.targetId),Le=ce&&ce.targetMismatches.get(F.targetId)!=null,te=F.view.applyChanges(de,q.isPrimaryClient,ve,Le);return Iy(q,F.targetId,te.ba),te.snapshot}(r,T,k,U);const l=await my(r.localStore,e,!0),h=new FC(e,l.ds),f=h.ga(l.documents),g=ll.createSynthesizedTargetChangeForCurrentChange(t,s&&r.onlineState!=="Offline",o),_=h.applyChanges(f,r.isPrimaryClient,g);Iy(r,t,_.ba);const E=new jC(e,t,h);return r.xa.set(e,E),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),_.snapshot}async function HC(r,e,t){const s=Ie(r),o=s.xa.get(e),l=s.Oa.get(o.targetId);if(l.length>1)return s.Oa.set(o.targetId,l.filter(h=>!vc(h,e))),void s.xa.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(o.targetId),s.sharedClientState.isActiveQueryTarget(o.targetId)||await zd(s.localStore,o.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(o.targetId),t&&Sf(s.remoteStore,o.targetId),qd(s,o.targetId)}).catch(Po)):(qd(s,o.targetId),await zd(s.localStore,o.targetId,!0))}async function KC(r,e){const t=Ie(r),s=t.xa.get(e),o=t.Oa.get(s.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(s.targetId),Sf(t.remoteStore,s.targetId))}async function GC(r,e,t){const s=tP(r);try{const o=await function(h,f){const g=Ie(h),_=mt.now(),E=f.reduce((U,$)=>U.add($.key),Pe());let T,k;return g.persistence.runTransaction("Locally write mutations","readwrite",U=>{let $=Nr(),q=Pe();return g.hs.getEntries(U,E).next(F=>{$=F,$.forEach((le,ce)=>{ce.isValidDocument()||(q=q.add(le))})}).next(()=>g.localDocuments.getOverlayedDocuments(U,$)).next(F=>{T=F;const le=[];for(const ce of f){const de=fR(ce,T.get(ce.key).overlayedDocument);de!=null&&le.push(new Ri(ce.key,de,tv(de.value.mapValue),bn.exists(!0)))}return g.mutationQueue.addMutationBatch(U,_,le,f)}).next(F=>{k=F;const le=F.applyToLocalDocumentSet(T,q);return g.documentOverlayCache.saveOverlays(U,F.batchId,le)})}).then(()=>({batchId:k.batchId,changes:dv(T)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(o.batchId),function(h,f,g){let _=h.qa[h.currentUser.toKey()];_||(_=new Ze(Ne)),_=_.insert(f,g),h.qa[h.currentUser.toKey()]=_}(s,o.batchId,t),await cl(s,o.changes),await Rc(s.remoteStore)}catch(o){const l=kf(o,"Failed to persist write");t.reject(l)}}async function Gv(r,e){const t=Ie(r);try{const s=await uC(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Ba.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1),o.addedDocuments.size>0?h.Fa=!0:o.modifiedDocuments.size>0?Fe(h.Fa):o.removedDocuments.size>0&&(Fe(h.Fa),h.Fa=!1))}),await cl(t,s,e)}catch(s){await Po(s)}}function Ty(r,e,t){const s=Ie(r);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const o=[];s.xa.forEach((l,h)=>{const f=h.view.ea(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const g=Ie(h);g.onlineState=f;let _=!1;g.queries.forEach((E,T)=>{for(const k of T.J_)k.ea(f)&&(_=!0)}),_&&Nf(g)}(s.eventManager,e),o.length&&s.Ma.R_(o),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function QC(r,e,t){const s=Ie(r);s.sharedClientState.updateQueryState(e,"rejected",t);const o=s.Ba.get(e),l=o&&o.key;if(l){let h=new Ze(pe.comparator);h=h.insert(l,Ft.newNoDocument(l,Te.min()));const f=Pe().add(l),g=new Ic(Te.min(),new Map,new Ze(Ne),h,f);await Gv(s,g),s.La=s.La.remove(l),s.Ba.delete(e),xf(s)}else await zd(s.localStore,e,!1).then(()=>qd(s,e,t)).catch(Po)}async function YC(r,e){const t=Ie(r),s=e.batch.batchId;try{const o=await lC(t.localStore,e);Yv(t,s,null),Qv(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await cl(t,o)}catch(o){await Po(o)}}async function XC(r,e,t){const s=Ie(r);try{const o=await function(h,f){const g=Ie(h);return g.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return g.mutationQueue.lookupMutationBatch(_,f).next(T=>(Fe(T!==null),E=T.keys(),g.mutationQueue.removeMutationBatch(_,T))).next(()=>g.mutationQueue.performConsistencyCheck(_)).next(()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,f)).next(()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>g.localDocuments.getDocuments(_,E))})}(s.localStore,e);Yv(s,e,t),Qv(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await cl(s,o)}catch(o){await Po(o)}}function Qv(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Yv(r,e,t){const s=Ie(r);let o=s.qa[s.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),s.qa[s.currentUser.toKey()]=o}}function qd(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Oa.get(e))r.xa.delete(s),t&&r.Ma.Wa(s,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(s=>{r.ka.containsKey(s)||Xv(r,s)})}function Xv(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(Sf(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),xf(r))}function Iy(r,e,t){for(const s of t)s instanceof Wv?(r.ka.addReference(s.key,e),JC(r,s)):s instanceof Hv?(ie("SyncEngine","Document no longer in limbo: "+s.key),r.ka.removeReference(s.key,e),r.ka.containsKey(s.key)||Xv(r,s.key)):we()}function JC(r,e){const t=e.key,s=t.path.canonicalString();r.La.get(t)||r.Na.has(s)||(ie("SyncEngine","New document in limbo: "+t),r.Na.add(s),xf(r))}function xf(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new pe(Ge.fromString(e)),s=r.Ka.next();r.Ba.set(s,new BC(t)),r.La=r.La.insert(t,s),Mv(r.remoteStore,new di(tr(mf(t.path)),s,"TargetPurposeLimboResolution",gc.oe))}}async function cl(r,e,t){const s=Ie(r),o=[],l=[],h=[];s.xa.isEmpty()||(s.xa.forEach((f,g)=>{h.push(s.Ua(g,e,t).then(_=>{var E;if((_||t)&&s.isPrimaryClient){const T=_?!_.fromCache:(E=t==null?void 0:t.targetChanges.get(g.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(g.targetId,T?"current":"not-current")}if(_){o.push(_);const T=If.zi(g.targetId,_);l.push(T)}}))}),await Promise.all(h),s.Ma.R_(o),await async function(g,_){const E=Ie(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>W.forEach(_,k=>W.forEach(k.Wi,U=>E.persistence.referenceDelegate.addReference(T,k.targetId,U)).next(()=>W.forEach(k.Gi,U=>E.persistence.referenceDelegate.removeReference(T,k.targetId,U)))))}catch(T){if(!ko(T))throw T;ie("LocalStore","Failed to update sequence numbers: "+T)}for(const T of _){const k=T.targetId;if(!T.fromCache){const U=E.us.get(k),$=U.snapshotVersion,q=U.withLastLimboFreeSnapshotVersion($);E.us=E.us.insert(k,q)}}}(s.localStore,l))}async function ZC(r,e){const t=Ie(r);if(!t.currentUser.isEqual(e)){ie("SyncEngine","User change. New user:",e.toKey());const s=await Dv(t.localStore,e);t.currentUser=e,function(l,h){l.Qa.forEach(f=>{f.forEach(g=>{g.reject(new oe(K.CANCELLED,h))})}),l.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await cl(t,s.Ts)}}function eP(r,e){const t=Ie(r),s=t.Ba.get(e);if(s&&s.Fa)return Pe().add(s.key);{let o=Pe();const l=t.Oa.get(e);if(!l)return o;for(const h of l){const f=t.xa.get(h);o=o.unionWith(f.view.fa)}return o}}function Jv(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QC.bind(null,e),e.Ma.R_=bC.bind(null,e.eventManager),e.Ma.Wa=UC.bind(null,e.eventManager),e}function tP(r){const e=Ie(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=XC.bind(null,e),e}class lc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return aC(this.persistence,new sC,e.initialUser,this.serializer)}ja(e){return new xv(Tf.ei,this.serializer)}za(e){return new pC}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}lc.provider={build:()=>new lc};class nP extends lc{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){Fe(this.persistence.referenceDelegate instanceof oc);const s=this.persistence.referenceDelegate.garbageCollector;return new qR(s,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?en.withCacheSize(this.cacheSizeBytes):en.DEFAULT;return new xv(s=>oc.ei(s,t),this.serializer)}}class Wd{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ty(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZC.bind(null,this.syncEngine),await OC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new MC}()}createDatastore(e){const t=Sc(e.databaseInfo.databaseId),s=function(l){return new _C(l)}(e.databaseInfo);return function(l,h,f,g){return new wC(l,h,f,g)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return function(s,o,l,h,f){return new IC(s,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>Ty(this.syncEngine,t,0),function(){return yy.p()?new yy:new mC}())}createSyncEngine(e,t){return function(o,l,h,f,g,_,E){const T=new zC(o,l,h,f,g,_);return E&&(T.$a=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Ie(o);ie("RemoteStore","RemoteStore shutting down."),l.k_.add(5),await ul(l),l.Q_.shutdown(),l.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Wd.provider={build:()=>new Wd};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):kr("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,t,s,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=o,this.user=Ut.UNAUTHENTICATED,this.clientId=J_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(s,async h=>{ie("FirestoreClient","Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ie("FirestoreClient","Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=kf(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ed(r,e){r.asyncQueue.verifyOperationInProgress(),ie("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let s=t.initialUser;r.setCredentialChangeListener(async o=>{s.isEqual(o)||(await Dv(e.localStore,o),s=o)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Sy(r,e){r.asyncQueue.verifyOperationInProgress();const t=await iP(r);ie("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(s=>_y(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,o)=>_y(e.remoteStore,o)),r._onlineComponents=e}async function iP(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ie("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ed(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===K.FAILED_PRECONDITION||o.code===K.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;yo("Error using user provided cache. Falling back to memory cache: "+t),await Ed(r,new lc)}}else ie("FirestoreClient","Using default OfflineComponentProvider"),await Ed(r,new nP(void 0));return r._offlineComponents}async function eE(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ie("FirestoreClient","Using user provided OnlineComponentProvider"),await Sy(r,r._uninitializedComponentsProvider._online)):(ie("FirestoreClient","Using default OnlineComponentProvider"),await Sy(r,new Wd))),r._onlineComponents}function sP(r){return eE(r).then(e=>e.syncEngine)}async function tE(r){const e=await eE(r),t=e.eventManager;return t.onListen=$C.bind(null,e.syncEngine),t.onUnlisten=HC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=KC.bind(null,e.syncEngine),t}function oP(r,e,t={}){const s=new Rr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,g,_){const E=new Zv({next:k=>{E.eu(),h.enqueueAndForget(()=>$v(l,T));const U=k.docs.has(f);!U&&k.fromCache?_.reject(new oe(K.UNAVAILABLE,"Failed to get document because the client is offline.")):U&&k.fromCache&&g&&g.source==="server"?_.reject(new oe(K.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(k)},error:k=>_.reject(k)}),T=new qv(mf(f.path),E,{includeMetadataChanges:!0,ua:!0});return zv(l,T)}(await tE(r),r.asyncQueue,e,t,s)),s.promise}function aP(r,e,t={}){const s=new Rr;return r.asyncQueue.enqueueAndForget(async()=>function(l,h,f,g,_){const E=new Zv({next:k=>{E.eu(),h.enqueueAndForget(()=>$v(l,T)),k.fromCache&&g.source==="server"?_.reject(new oe(K.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):_.resolve(k)},error:k=>_.reject(k)}),T=new qv(f,E,{includeMetadataChanges:!0,ua:!0});return zv(l,T)}(await tE(r),r.asyncQueue,e,t,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nE(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(r,e,t){if(!t)throw new oe(K.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function lP(r,e,t,s){if(e===!0&&s===!0)throw new oe(K.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ry(r){if(!pe.isDocumentKey(r))throw new oe(K.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Cy(r){if(pe.isDocumentKey(r))throw new oe(K.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Cc(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":we()}function xr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new oe(K.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Cc(r);throw new oe(K.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new oe(K.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new oe(K.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nE((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new oe(K.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,o){return s.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pc{constructor(e,t,s,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Py({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe(K.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe(K.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Py(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new EA;switch(s.type){case"firstParty":return new SA(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe(K.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const s=Ay.get(t);s&&(ie("ComponentProvider","Removing Datastore"),Ay.delete(t),s.terminate())}(this),Promise.resolve()}}function uP(r,e,t,s={}){var o;const l=(r=xr(r,Pc))._getSettings(),h=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==h&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:h,ssl:!1})),s.mockUserToken){let f,g;if(typeof s.mockUserToken=="string")f=s.mockUserToken,g=Ut.MOCK_USER;else{f=DT(s.mockUserToken,(o=r._app)===null||o===void 0?void 0:o.options.projectId);const _=s.mockUserToken.sub||s.mockUserToken.user_id;if(!_)throw new oe(K.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ut(_)}r._authCredentials=new wA(new X_(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new xo(this.firestore,e,this._query)}}class nn{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _i(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class _i extends xo{constructor(e,t,s){super(e,t,mf(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new pe(e))}withConverter(e){return new _i(this.firestore,e,this._path)}}function Xn(r,e,...t){if(r=yt(r),rE("collection","path",e),r instanceof Pc){const s=Ge.fromString(e,...t);return Cy(s),new _i(r,null,s)}{if(!(r instanceof nn||r instanceof _i))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Cy(s),new _i(r.firestore,null,s)}}function mo(r,e,...t){if(r=yt(r),arguments.length===1&&(e=J_.newId()),rE("doc","path",e),r instanceof Pc){const s=Ge.fromString(e,...t);return Ry(s),new nn(r,null,new pe(s))}{if(!(r instanceof nn||r instanceof _i))throw new oe(K.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(Ge.fromString(e,...t));return Ry(s),new nn(r.firestore,r instanceof _i?r.converter:null,new pe(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Ov(this,"async_queue_retry"),this.fu=()=>{const s=vd();s&&ie("AsyncQueue","Visibility state changed to "+s.visibilityState),this.r_.Jo()},this.gu=e;const t=vd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=vd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new Rr;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!ko(e))throw e;ie("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(s=>{this.Au=s,this.Ru=!1;const o=function(h){let f=h.message||"";return h.stack&&(f=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),f}(s);throw kr("INTERNAL UNHANDLED ERROR: ",o),s}).then(s=>(this.Ru=!1,s))));return this.gu=t,t}enqueueAfterDelay(e,t,s){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const o=Pf.createAndSchedule(this,e,t,s,l=>this.Su(l));return this.du.push(o),o}pu(){this.Au&&we()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}class Do extends Pc{constructor(e,t,s,o){super(e,t,s,o),this.type="firestore",this._queue=new ky,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ky(e),this._firestoreClient=void 0,await e}}}function cP(r,e){const t=typeof r=="object"?r:i_(),s=typeof r=="string"?r:"(default)",o=Zd(t,"firestore").getImmediate({identifier:s});if(!o._initialized){const l=NT("firestore");l&&uP(o,...l)}return o}function Df(r){if(r._terminated)throw new oe(K.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||hP(r),r._firestoreClient}function hP(r){var e,t,s;const o=r._freezeSettings(),l=function(f,g,_,E){return new FA(f,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,nE(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,o);r._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=o.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),r._firestoreClient=new rP(r._authCredentials,r._appCheckCredentials,r._queue,l,r._componentsProvider&&function(f){const g=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(g),_online:g}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(Nt.fromBase64String(e))}catch(t){throw new oe(K.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Io(Nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new oe(K.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new oe(K.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new oe(K.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ne(this._lat,e._lat)||Ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,o){if(s.length!==o.length)return!1;for(let l=0;l<s.length;++l)if(s[l]!==o[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dP=/^__.*__$/;class fP{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ri(e,this.data,this.fieldMask,t,this.fieldTransforms):new al(e,this.data,t,this.fieldTransforms)}}class iE{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ri(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function sE(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw we()}}class Mf{constructor(e,t,s,o,l,h){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=o,l===void 0&&this.Fu(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Mf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Lu(e),o}Bu(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.xu({path:s,Nu:!1});return o.Fu(),o}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return uc(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(sE(this.Mu)&&dP.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class pP{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||Sc(e)}$u(e,t,s,o=!1){return new Mf({Mu:e,methodName:t,Ku:s,path:kt.emptyPath(),Nu:!1,Qu:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bf(r){const e=r._freezeSettings(),t=Sc(r._databaseId);return new pP(r._databaseId,!!e.ignoreUndefinedProperties,t)}function mP(r,e,t,s,o,l={}){const h=r.$u(l.merge||l.mergeFields?2:0,e,t,o);Uf("Data must be an object, but it was:",h,s);const f=oE(s,h);let g,_;if(l.merge)g=new hn(h.fieldMask),_=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const k=Hd(e,T,t);if(!h.contains(k))throw new oe(K.INVALID_ARGUMENT,`Field '${k}' is specified in your field mask but missing from your input data.`);lE(E,k)||E.push(k)}g=new hn(E),_=h.fieldTransforms.filter(T=>g.covers(T.field))}else g=null,_=h.fieldTransforms;return new fP(new tn(f),g,_)}class Nc extends Vf{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nc}}function gP(r,e,t,s){const o=r.$u(1,e,t);Uf("Data must be an object, but it was:",o,s);const l=[],h=tn.empty();Ai(s,(g,_)=>{const E=Ff(e,g,t);_=yt(_);const T=o.Bu(E);if(_ instanceof Nc)l.push(E);else{const k=hl(_,T);k!=null&&(l.push(E),h.set(E,k))}});const f=new hn(l);return new iE(h,f,o.fieldTransforms)}function yP(r,e,t,s,o,l){const h=r.$u(1,e,t),f=[Hd(e,s,t)],g=[o];if(l.length%2!=0)throw new oe(K.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let k=0;k<l.length;k+=2)f.push(Hd(e,l[k])),g.push(l[k+1]);const _=[],E=tn.empty();for(let k=f.length-1;k>=0;--k)if(!lE(_,f[k])){const U=f[k];let $=g[k];$=yt($);const q=h.Bu(U);if($ instanceof Nc)_.push(U);else{const F=hl($,q);F!=null&&(_.push(U),E.set(U,F))}}const T=new hn(_);return new iE(E,T,h.fieldTransforms)}function _P(r,e,t,s=!1){return hl(t,r.$u(s?4:3,e))}function hl(r,e){if(aE(r=yt(r)))return Uf("Unsupported field value:",e,r),oE(r,e);if(r instanceof Vf)return function(s,o){if(!sE(o.Mu))throw o.qu(`${s._methodName}() can only be used with update() and set()`);if(!o.path)throw o.qu(`${s._methodName}() is not currently supported inside arrays`);const l=s._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(s,o){const l=[];let h=0;for(const f of s){let g=hl(f,o.ku(h));g==null&&(g={nullValue:"NULL_VALUE"}),l.push(g),h++}return{arrayValue:{values:l}}}(r,e)}return function(s,o){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aR(o.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const l=mt.fromDate(s);return{timestampValue:sc(o.serializer,l)}}if(s instanceof mt){const l=new mt(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:sc(o.serializer,l)}}if(s instanceof Of)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Io)return{bytesValue:Sv(o.serializer,s._byteString)};if(s instanceof nn){const l=o.databaseId,h=s.firestore._databaseId;if(!h.isEqual(l))throw o.qu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Ef(s.firestore._databaseId||o.databaseId,s._key.path)}}if(s instanceof Lf)return function(h,f){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:h.toArray().map(g=>{if(typeof g!="number")throw f.qu("VectorValues must only contain numeric values.");return gf(f.serializer,g)})}}}}}}(s,o);throw o.qu(`Unsupported field value: ${Cc(s)}`)}(r,e)}function oE(r,e){const t={};return Z_(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ai(r,(s,o)=>{const l=hl(o,e.Ou(s));l!=null&&(t[s]=l)}),{mapValue:{fields:t}}}function aE(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof mt||r instanceof Of||r instanceof Io||r instanceof nn||r instanceof Vf||r instanceof Lf)}function Uf(r,e,t){if(!aE(t)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(t)){const s=Cc(t);throw s==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+s)}}function Hd(r,e,t){if((e=yt(e))instanceof kc)return e._internalPath;if(typeof e=="string")return Ff(r,e);throw uc("Field path arguments must be of type string or ",r,!1,void 0,t)}const vP=new RegExp("[~\\*/\\[\\]]");function Ff(r,e,t){if(e.search(vP)>=0)throw uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new kc(...e.split("."))._internalPath}catch{throw uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function uc(r,e,t,s,o){const l=s&&!s.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let g="";return(l||h)&&(g+=" (found",l&&(g+=` in field ${s}`),h&&(g+=` in document ${o}`),g+=")"),new oe(K.INVALID_ARGUMENT,f+r+g)}function lE(r,e){return r.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t,s,o,l){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(jf("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class EP extends uE{data(){return super.data()}}function jf(r,e){return typeof e=="string"?Ff(r,e):e instanceof kc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wP(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new oe(K.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bf{}class TP extends Bf{}function fi(r,e,...t){let s=[];e instanceof Bf&&s.push(e),s=s.concat(t),function(l){const h=l.filter(g=>g instanceof zf).length,f=l.filter(g=>g instanceof xc).length;if(h>1||h>0&&f>0)throw new oe(K.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const o of s)r=o._apply(r);return r}class xc extends TP{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new xc(e,t,s)}_apply(e){const t=this._parse(e);return cE(e._query,t),new xo(e.firestore,e.converter,Md(e._query,t))}_parse(e){const t=bf(e.firestore);return function(l,h,f,g,_,E,T){let k;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new oe(K.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){xy(T,E);const U=[];for(const $ of T)U.push(Ny(g,l,$));k={arrayValue:{values:U}}}else k=Ny(g,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||xy(T,E),k=_P(f,h,T,E==="in"||E==="not-in");return lt.create(_,E,k)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Pa(r,e,t){const s=e,o=jf("where",r);return xc._create(o,s,t)}class zf extends Bf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new zf(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:Fn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const f=l.getFlattenedFilters();for(const g of f)cE(h,g),h=Md(h,g)}(e._query,t),new xo(e.firestore,e.converter,Md(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ny(r,e,t){if(typeof(t=yt(t))=="string"){if(t==="")throw new oe(K.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lv(e)&&t.indexOf("/")!==-1)throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(Ge.fromString(t));if(!pe.isDocumentKey(s))throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Xg(r,new pe(s))}if(t instanceof nn)return Xg(r,t._key);throw new oe(K.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cc(t)}.`)}function xy(r,e){if(!Array.isArray(r)||r.length===0)throw new oe(K.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cE(r,e){const t=function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(r.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new oe(K.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class IP{convertValue(e,t="none"){switch(Ti(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw we()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return Ai(e,(o,l)=>{s[o]=this.convertValue(l,t)}),s}convertVectorValue(e){var t,s,o;const l=(o=(s=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||s===void 0?void 0:s.values)===null||o===void 0?void 0:o.map(h=>it(h.doubleValue));return new Lf(l)}convertGeoPoint(e){return new Of(it(e.latitude),it(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=_c(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Ka(e));default:return null}}convertTimestamp(e){const t=Ei(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=Ge.fromString(e);Fe(Nv(s));const o=new Ga(s.get(1),s.get(3)),l=new pe(s.popFirst(5));return o.isEqual(t)||kr(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(r,e,t){let s;return s=r?r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hE extends uE{constructor(e,t,s,o,l,h){super(e,t,s,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $u(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(jf("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class $u extends hE{data(e={}){return super.data(e)}}class AP{constructor(e,t,s,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new La(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new $u(this._firestore,this._userDataWriter,s.key,s,new La(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new oe(K.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const g=new $u(o._firestore,o._userDataWriter,f.doc.key,f.doc,new La(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:g,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const g=new $u(o._firestore,o._userDataWriter,f.doc.key,f.doc,new La(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return f.type!==0&&(_=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:RP(f.type),doc:g,oldIndex:_,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function RP(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return we()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(r){r=xr(r,nn);const e=xr(r.firestore,Do);return oP(Df(e),r._key).then(t=>PP(e,r,t))}class fE extends IP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,t)}}function pi(r){r=xr(r,xo);const e=xr(r.firestore,Do),t=Df(e),s=new fE(e);return wP(r._query),aP(t,r._query).then(o=>new AP(e,s,r,o))}function CP(r,e,t,...s){r=xr(r,nn);const o=xr(r.firestore,Do),l=bf(o);let h;return h=typeof(e=yt(e))=="string"||e instanceof kc?yP(l,"updateDoc",r._key,e,t,s):gP(l,"updateDoc",r._key,e),$f(o,[h.toMutation(r._key,bn.exists(!0))])}function Dy(r){return $f(xr(r.firestore,Do),[new yf(r._key,bn.none())])}function pE(r,e){const t=xr(r.firestore,Do),s=mo(r),o=SP(r.converter,e);return $f(t,[mP(bf(r.firestore),"addDoc",s._key,o,r.converter!==null,{}).toMutation(s._key,bn.exists(!1))]).then(()=>s)}function $f(r,e){return function(s,o){const l=new Rr;return s.asyncQueue.enqueueAndForget(async()=>GC(await sP(s),o,l)),l.promise}(Df(r),e)}function PP(r,e,t){const s=t.docs.get(e._key),o=new fE(r);return new hE(r,o,e._key,s,new La(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Co=o})(Ao),go(new os("firestore",(s,{instanceIdentifier:o,options:l})=>{const h=s.getProvider("app").getImmediate(),f=new Do(new TA(s.getProvider("auth-internal")),new RA(s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new oe(K.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(_.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),yi(Wg,"4.7.5",e),yi(Wg,"4.7.5","esm2017")})();const kP={apiKey:"AIzaSyA4MF3c3bPwRjQflwPKOkkFzmyT29ttu2w",authDomain:"onlineourlibrary.firebaseapp.com",projectId:"onlineourlibrary",storageBucket:"onlineourlibrary.firebasestorage.app",messagingSenderId:"15500608339",appId:"1:15500608339:web:30e431c5fafacfe42857a6",measurementId:"G-8W3R98G0H8"},mE=r_(kP),Wt=cP(mE),ss=gA(mE);function NP(){const[r,e]=Z.useState(!0),[t,s]=Z.useState(""),[o,l]=Z.useState(""),[h,f]=Z.useState(""),[g,_]=Z.useState(!1),E=hc(),T=async U=>{U.preventDefault(),_(!0);try{if(r){if(!(await t0(ss,t,o)).user.emailVerified){alert("Please verify your email before logging in.");return}E(t==="at4587776@gmail.com"?"/AdminDashboard":"/dashboard"),alert("Logged in successfully!")}else{const q=(await e0(ss,t,o)).user;await n0(q),alert("Account created successfully! Please verify your email."),E("/")}}catch($){alert($.message)}finally{_(!1)}},k=async()=>{if(!t){alert("Please enter your email address.");return}try{await V_(ss,t),alert("Password reset email sent!")}catch(U){alert(U.message)}};return B.jsx("div",{className:"login-page",children:B.jsxs("div",{className:"login-container",children:[B.jsx("h2",{className:"LoginStatus",children:r?"Login":"Sign Up"}),B.jsxs("form",{onSubmit:T,className:"login-form",children:[!r&&B.jsxs("div",{className:"inputitem",children:[B.jsx("label",{for:"name",children:"Your name pleasee.."}),B.jsx("input",{id:"name",type:"text",placeholder:"ex: John Doe",value:h,onChange:U=>f(U.target.value),required:!0})]}),B.jsxs("div",{className:"inputitem",children:[B.jsx("label",{for:"email",children:"What's Your Email??"}),B.jsx("input",{id:"email",type:"email",placeholder:"ex: sample@email.com",value:t,onChange:U=>s(U.target.value),required:!0})]}),B.jsxs("div",{className:"inputitem",children:[B.jsx("label",{for:"password",children:"And Password??"}),B.jsx("input",{id:"password",type:"password",placeholder:"ex: password123",value:o,onChange:U=>l(U.target.value),required:!0})]}),B.jsx("button",{type:"submit",disabled:g,children:g?"Processing...":r?"Login":"Sign Up"}),B.jsx("button",{onClick:()=>k(),children:"Forgot your password?"})]}),B.jsxs("p",{className:"login-form-footer",children:[r?"Are you a new user here? ":"Do you already have an account? ",B.jsx("button",{onClick:()=>e(!r),children:r?"Sign Up":"Login"})]})]})})}const gE=Gd.createContext();function qf(){return Z.useContext(gE)}function xP({children:r}){const[e,t]=Z.useState(null),[s,o]=Z.useState(!0);Z.useEffect(()=>s0(ss,f=>{t(f),o(!1)}),[]);const l={user:e};return B.jsx(gE.Provider,{value:l,children:!s&&r})}function DP(){const{user:r}=qf(),[e,t]=Z.useState(null),[s,o]=Z.useState([]),[l,h]=Z.useState([]),[f,g]=Z.useState(""),[_,E]=Z.useState([]),[T,k]=Z.useState([]),[U,$]=Z.useState(!0),q=hc();Z.useEffect(()=>{r&&(F(),le())},[r]);const F=async()=>{try{const A=await dE(mo(Wt,"users",r.uid));A.exists()&&t(A.data())}catch(A){console.error("Error fetching user details: ",A)}},le=async()=>{try{$(!0);const A=fi(Xn(Wt,"books")),I=await pi(A);h(I.docs.map(D=>({id:D.id,...D.data()})));const C=fi(Xn(Wt,"borrowedBooks"),Pa("userId","==",r.uid)),N=await pi(C);E(N.docs.map(D=>({id:D.id,...D.data()}))),ce()}catch(A){console.error("Failed to fetch data",A)}finally{$(!1)}},ce=async()=>{try{$(!0);const A=fi(Xn(Wt,"transactions"),Pa("userId","==",r.uid)),C=(await pi(A)).docs.map(R=>R.data()),N=fi(Xn(Wt,"transactions"),Pa("userId","==",r.uid),Pa("dueDate","<",new Date),Pa("returned","==",!1)),V=(await pi(N)).docs.map(R=>R.data());o(C),k(V)}catch(A){console.error("Error fetching books:",A)}finally{$(!1)}},de=async()=>{try{await O_(ss),alert("Logged out successfully!"),q("/login")}catch(A){console.error("Logout error:",A.message)}},ve=async()=>{try{await V_(ss,r.email),alert("Password reset email sent!")}catch(A){alert(`Error resetting password: ${A.message}`)}},Le=async A=>{try{await pE(Xn(Wt,"transactions"),{bookId:A,userId:r.uid,issueDate:new Date().toISOString(),dueDate:new Date(Date.now()+7*24*60*60*1e3).toISOString(),returned:!1}),alert("Book borrowed successfully!")}catch(I){console.error("Error borrowing book:",I)}},te=async A=>{try{const I=mo(Wt,"transactions",A);await CP(I,{returned:!0}),alert("Book returned successfully!")}catch(I){console.error("Error returning book:",I)}};return U?B.jsx("div",{className:"flex justify-center items-center h-screen",children:B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-lg font-semibold mb-4",children:"Loading..."}),B.jsx("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"})]})}):B.jsx("div",{className:"dashboard-page",children:B.jsxs("div",{className:"dashboard-container",children:[B.jsx("h1",{children:"User Dashboard!"}),B.jsxs("div",{className:"dash-navbar",children:[B.jsxs("div",{children:[B.jsxs("h3",{children:["Welcome back, ",e?e.name:"User","!"]}),B.jsxs("p",{children:["Email: ",r.email]})]}),B.jsxs("div",{className:"buttons",children:[B.jsx("button",{onClick:de,children:"Logout"}),B.jsx("button",{onClick:ve,children:"Reset Password"})]})]}),B.jsxs("div",{className:"searchbar",children:[B.jsx("h3",{children:"Search your favourite book here:"}),B.jsx("input",{type:"text",placeholder:"Search books...",value:f,onChange:A=>g(A.target.value)})]}),B.jsxs("div",{className:"available-section",children:[B.jsx("h3",{children:"Available Books"}),B.jsx("div",{className:"books-list",children:B.jsx("ul",{children:l.length>0?l.filter(A=>A.title.toLowerCase().includes(f.toLowerCase())).map((A,I)=>B.jsxs("li",{children:[B.jsx("h4",{children:A.title}),B.jsxs("p",{children:["Author: ",A.author]}),B.jsxs("p",{children:["Published on: ",A.publishedDate]}),B.jsx("button",{onClick:()=>Le(A.id),children:"Borrow"})]},I)):B.jsx("p",{children:"No books available."})})})]}),B.jsxs("div",{className:"issued-section",children:[B.jsx("h3",{children:"Issued Books"}),B.jsx("div",{className:"books-list",children:B.jsx("ul",{children:s.length>0?s.map((A,I)=>B.jsxs("li",{children:[B.jsx("h4",{children:A.title}),B.jsxs("p",{children:["Author: ",A.author]}),B.jsxs("p",{children:["Issued on: ",A.issueDate]}),B.jsxs("p",{children:["Due date: ",A.dueDate]}),B.jsx("button",{onClick:()=>te(A.id),children:"Return"})]},I)):B.jsx("p",{children:"No books issued."})})})]}),B.jsxs("div",{className:"due-section",children:[B.jsx("h3",{children:"Due Books"}),B.jsx("div",{className:"books-list",children:B.jsx("ul",{children:T.length>0?T.map((A,I)=>B.jsxs("li",{children:[B.jsx("h4",{children:A.title}),B.jsxs("p",{children:["Author: ",A.author]}),B.jsxs("p",{children:["Due on: ",A.dueDate]})]},I)):B.jsx("p",{children:"No overdue books."})})})]})]})})}function VP(){const{user:r}=qf(),[e,t]=Z.useState([]),[s,o]=Z.useState([]),[l,h]=Z.useState([]),[f,g]=Z.useState({title:"",author:"",publishedDate:"",publisher:""}),[_,E]=Z.useState(!0),[T,k]=Z.useState(!1),[U,$]=Z.useState(!1),q=hc();Z.useEffect(()=>{(async()=>{try{E(!0);const A=fi(Xn(Wt,"books")),I=await pi(A);t(I.docs.map(R=>({id:R.id,...R.data()})));const C=fi(Xn(Wt,"users")),N=await pi(C);o(N.docs.map(R=>({id:R.id,...R.data()})));const D=fi(Xn(Wt,"transactions")),V=await pi(D);h(V.docs.map(R=>({id:R.id,...R.data()})))}catch(A){console.error("Error fetching data:",A)}finally{E(!1)}})()},[]),Z.useEffect(()=>{(async()=>{if(r){const A=await dE(mo(Wt,"users",r.uid));A.exists()&&A.data().role!=="admin"&&q("/")}else q("/login")})()},[r,q]);const F=async()=>{try{await pE(Xn(Wt,"books"),f),alert("Book added successfully!"),g({title:"",author:"",publishedDate:"",publisher:""});const te=await pi(fi(Xn(Wt,"books")));t(te.docs.map(A=>({id:A.id,...A.data()})))}catch(te){console.error("Error adding book:",te)}},le=async()=>{try{await O_(ss),alert("Logged out successfully!"),q("/login")}catch(te){console.error("Logout error:",te.message)}},ce=()=>{k(!T),$(!1)},de=()=>{$(!U),k(!1)},ve=async te=>{try{await Dy(mo(Wt,"users",te)),o(s.filter(A=>A.id!==te)),alert("User deleted successfully!")}catch(A){console.error("Error deleting user:",A)}},Le=async te=>{try{await Dy(mo(Wt,"books",te)),t(e.filter(A=>A.id!==te)),alert("Book deleted successfully!")}catch(A){console.error("Error deleting book:",A)}};return _?B.jsx("div",{className:"flex justify-center items-center h-screen",children:B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-lg font-semibold mb-4",children:"Loading..."}),B.jsx("div",{className:"spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"})]})}):B.jsx("div",{className:"admin-dashboard-page",children:B.jsxs("div",{className:"admin-dashboard-container",children:[B.jsx("h1",{children:"Admin Dashboard"}),B.jsxs("div",{className:"dash-navbar",children:[B.jsxs("div",{children:[B.jsxs("h3",{children:["Welcome back, ",(r==null?void 0:r.displayName)||"Admin","!"]}),B.jsxs("p",{children:["Email: ",r==null?void 0:r.email]})]}),B.jsx("button",{onClick:le,children:"Logout"})]}),B.jsxs("div",{className:"stats-container",children:[B.jsxs("div",{className:"stat-card",children:[B.jsx("h3",{children:"Total Users"}),B.jsx("p",{children:s.length})]}),B.jsxs("div",{className:"stat-card",children:[B.jsx("h3",{children:"Total Books"}),B.jsx("p",{children:e.length})]}),B.jsxs("div",{className:"stat-card",children:[B.jsx("h3",{children:"Issued Books"}),B.jsx("p",{children:l.length})]})]}),B.jsxs("div",{className:"admin-actions",children:[B.jsx("button",{onClick:ce,children:T?"Hide Users":"Manage Users"}),B.jsx("button",{onClick:de,children:U?"Hide Books":"Manage Books"})]}),T&&B.jsxs("div",{className:"manage-users-section",children:[B.jsx("h2",{children:"Manage Users"}),B.jsx("div",{children:B.jsxs("table",{children:[B.jsx("thead",{children:B.jsxs("tr",{children:[B.jsx("th",{children:"Name"}),B.jsx("th",{children:"Email"}),B.jsx("th",{children:"Actions"})]})}),B.jsx("tbody",{children:s.map(te=>B.jsxs("tr",{children:[B.jsx("td",{children:te.name||"N/A"}),B.jsx("td",{children:te.email}),B.jsx("td",{children:B.jsx("button",{onClick:()=>ve(te.id),children:"Delete"})})]},te.id))})]})})]}),U&&B.jsxs("div",{className:"manage-books-section",children:[B.jsx("h2",{children:"Manage Books"}),B.jsx("div",{children:B.jsxs("table",{children:[B.jsx("thead",{children:B.jsxs("tr",{children:[B.jsx("th",{children:"Title"}),B.jsx("th",{children:"Author"}),B.jsx("th",{children:"Actions"})]})}),B.jsx("tbody",{children:e.map(te=>B.jsxs("tr",{children:[B.jsx("td",{children:te.title}),B.jsx("td",{children:te.author}),B.jsx("td",{children:B.jsx("button",{onClick:()=>Le(te.id),children:"Delete"})})]},te.id))})]})}),B.jsxs("div",{className:"add-book-form",children:[B.jsx("input",{type:"text",placeholder:"Title",value:f.title,onChange:te=>g({...f,title:te.target.value})}),B.jsx("input",{type:"text",placeholder:"Author",value:f.author,onChange:te=>g({...f,author:te.target.value})}),B.jsx("input",{type:"date",value:f.publishedDate,onChange:te=>g({...f,publishedDate:te.target.value})}),B.jsx("input",{type:"text",placeholder:"Publisher",value:f.publisher,onChange:te=>g({...f,publisher:te.target.value})}),B.jsx("button",{onClick:F,children:"Add Book"})]})]})]})})}function Vy({children:r}){const{user:e}=qf();return e?r:B.jsx(Gy,{to:"/"})}function OP(){return B.jsx("div",{className:"font-sans bg-gray-100 min-h-screen",children:B.jsx(TT,{children:B.jsxs(vT,{children:[B.jsx(ka,{path:"/",element:B.jsx(NP,{})}),B.jsx(ka,{path:"/dashboard",element:B.jsx(Vy,{children:B.jsx(DP,{})})}),B.jsx(ka,{path:"/admindashboard",element:B.jsx(Vy,{children:B.jsx(VP,{})})}),B.jsx(ka,{path:"*",element:B.jsx(Gy,{to:"/"})})]})})})}kw.createRoot(document.getElementById("root")).render(B.jsx(Gd.StrictMode,{children:B.jsx(xP,{children:B.jsx(OP,{})})}));
