(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))u(_);new MutationObserver(_=>{for(const f of _)if(f.type==="childList")for(const x of f.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&u(x)}).observe(document,{childList:!0,subtree:!0});function c(_){const f={};return _.integrity&&(f.integrity=_.integrity),_.referrerPolicy&&(f.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?f.credentials="include":_.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(_){if(_.ep)return;_.ep=!0;const f=c(_);fetch(_.href,f)}})();function Nm(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var ld={exports:{}},xi={};var Ih;function hg(){if(Ih)return xi;Ih=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(u,_,f){var x=null;if(f!==void 0&&(x=""+f),_.key!==void 0&&(x=""+_.key),"key"in _){f={};for(var R in _)R!=="key"&&(f[R]=_[R])}else f=_;return _=f.ref,{$$typeof:a,type:u,key:x,ref:_!==void 0?_:null,props:f}}return xi.Fragment=r,xi.jsx=c,xi.jsxs=c,xi}var qh;function mg(){return qh||(qh=1,ld.exports=hg()),ld.exports}var o=mg(),od={exports:{}},_t={};var Qh;function gg(){if(Qh)return _t;Qh=1;var a=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),x=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),k=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),T=Symbol.iterator;function ne(S){return S===null||typeof S!="object"?null:(S=T&&S[T]||S["@@iterator"],typeof S=="function"?S:null)}var $={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},le=Object.assign,U={};function q(S,I,ce){this.props=S,this.context=I,this.refs=U,this.updater=ce||$}q.prototype.isReactComponent={},q.prototype.setState=function(S,I){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,I,"setState")},q.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function me(){}me.prototype=q.prototype;function pe(S,I,ce){this.props=S,this.context=I,this.refs=U,this.updater=ce||$}var be=pe.prototype=new me;be.constructor=pe,le(be,q.prototype),be.isPureReactComponent=!0;var et=Array.isArray;function Je(){}var K={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function ae(S,I,ce){var xe=ce.ref;return{$$typeof:a,type:S,key:I,ref:xe!==void 0?xe:null,props:ce}}function Fe(S,I){return ae(S.type,I,S.props)}function Re(S){return typeof S=="object"&&S!==null&&S.$$typeof===a}function qe(S){var I={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ce){return I[ce]})}var tt=/\/+/g;function ze(S,I){return typeof S=="object"&&S!==null&&S.key!=null?qe(""+S.key):I.toString(36)}function Xe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(Je,Je):(S.status="pending",S.then(function(I){S.status==="pending"&&(S.status="fulfilled",S.value=I)},function(I){S.status==="pending"&&(S.status="rejected",S.reason=I)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function v(S,I,ce,xe,Oe){var at=typeof S;(at==="undefined"||at==="boolean")&&(S=null);var dt=!1;if(S===null)dt=!0;else switch(at){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(S.$$typeof){case a:case r:dt=!0;break;case M:return dt=S._init,v(dt(S._payload),I,ce,xe,Oe)}}if(dt)return Oe=Oe(S),dt=xe===""?"."+ze(S,0):xe,et(Oe)?(ce="",dt!=null&&(ce=dt.replace(tt,"$&/")+"/"),v(Oe,I,ce,"",function(kn){return kn})):Oe!=null&&(Re(Oe)&&(Oe=Fe(Oe,ce+(Oe.key==null||S&&S.key===Oe.key?"":(""+Oe.key).replace(tt,"$&/")+"/")+dt)),I.push(Oe)),1;dt=0;var qt=xe===""?".":xe+":";if(et(S))for(var Et=0;Et<S.length;Et++)xe=S[Et],at=qt+ze(xe,Et),dt+=v(xe,I,ce,at,Oe);else if(Et=ne(S),typeof Et=="function")for(S=Et.call(S),Et=0;!(xe=S.next()).done;)xe=xe.value,at=qt+ze(xe,Et++),dt+=v(xe,I,ce,at,Oe);else if(at==="object"){if(typeof S.then=="function")return v(Xe(S),I,ce,xe,Oe);throw I=String(S),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return dt}function F(S,I,ce){if(S==null)return S;var xe=[],Oe=0;return v(S,xe,"","",function(at){return I.call(ce,at,Oe++)}),xe}function Y(S){if(S._status===-1){var I=S._result;I=I(),I.then(function(ce){(S._status===0||S._status===-1)&&(S._status=1,S._result=ce)},function(ce){(S._status===0||S._status===-1)&&(S._status=2,S._result=ce)}),S._status===-1&&(S._status=0,S._result=I)}if(S._status===1)return S._result.default;throw S._result}var ye=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},ve={map:F,forEach:function(S,I,ce){F(S,function(){I.apply(this,arguments)},ce)},count:function(S){var I=0;return F(S,function(){I++}),I},toArray:function(S){return F(S,function(I){return I})||[]},only:function(S){if(!Re(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return _t.Activity=A,_t.Children=ve,_t.Component=q,_t.Fragment=c,_t.Profiler=_,_t.PureComponent=pe,_t.StrictMode=u,_t.Suspense=b,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,_t.__COMPILER_RUNTIME={__proto__:null,c:function(S){return K.H.useMemoCache(S)}},_t.cache=function(S){return function(){return S.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(S,I,ce){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var xe=le({},S.props),Oe=S.key;if(I!=null)for(at in I.key!==void 0&&(Oe=""+I.key),I)!Ee.call(I,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&I.ref===void 0||(xe[at]=I[at]);var at=arguments.length-2;if(at===1)xe.children=ce;else if(1<at){for(var dt=Array(at),qt=0;qt<at;qt++)dt[qt]=arguments[qt+2];xe.children=dt}return ae(S.type,Oe,xe)},_t.createContext=function(S){return S={$$typeof:x,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},_t.createElement=function(S,I,ce){var xe,Oe={},at=null;if(I!=null)for(xe in I.key!==void 0&&(at=""+I.key),I)Ee.call(I,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(Oe[xe]=I[xe]);var dt=arguments.length-2;if(dt===1)Oe.children=ce;else if(1<dt){for(var qt=Array(dt),Et=0;Et<dt;Et++)qt[Et]=arguments[Et+2];Oe.children=qt}if(S&&S.defaultProps)for(xe in dt=S.defaultProps,dt)Oe[xe]===void 0&&(Oe[xe]=dt[xe]);return ae(S,at,Oe)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(S){return{$$typeof:R,render:S}},_t.isValidElement=Re,_t.lazy=function(S){return{$$typeof:M,_payload:{_status:-1,_result:S},_init:Y}},_t.memo=function(S,I){return{$$typeof:k,type:S,compare:I===void 0?null:I}},_t.startTransition=function(S){var I=K.T,ce={};K.T=ce;try{var xe=S(),Oe=K.S;Oe!==null&&Oe(ce,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(Je,ye)}catch(at){ye(at)}finally{I!==null&&ce.types!==null&&(I.types=ce.types),K.T=I}},_t.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},_t.use=function(S){return K.H.use(S)},_t.useActionState=function(S,I,ce){return K.H.useActionState(S,I,ce)},_t.useCallback=function(S,I){return K.H.useCallback(S,I)},_t.useContext=function(S){return K.H.useContext(S)},_t.useDebugValue=function(){},_t.useDeferredValue=function(S,I){return K.H.useDeferredValue(S,I)},_t.useEffect=function(S,I){return K.H.useEffect(S,I)},_t.useEffectEvent=function(S){return K.H.useEffectEvent(S)},_t.useId=function(){return K.H.useId()},_t.useImperativeHandle=function(S,I,ce){return K.H.useImperativeHandle(S,I,ce)},_t.useInsertionEffect=function(S,I){return K.H.useInsertionEffect(S,I)},_t.useLayoutEffect=function(S,I){return K.H.useLayoutEffect(S,I)},_t.useMemo=function(S,I){return K.H.useMemo(S,I)},_t.useOptimistic=function(S,I){return K.H.useOptimistic(S,I)},_t.useReducer=function(S,I,ce){return K.H.useReducer(S,I,ce)},_t.useRef=function(S){return K.H.useRef(S)},_t.useState=function(S){return K.H.useState(S)},_t.useSyncExternalStore=function(S,I,ce){return K.H.useSyncExternalStore(S,I,ce)},_t.useTransition=function(){return K.H.useTransition()},_t.version="19.2.4",_t}var Wh;function Nd(){return Wh||(Wh=1,od.exports=gg()),od.exports}var m=Nd();const Tm=Nm(m);var ad={exports:{}},bi={},sd={exports:{}},id={};var Gh;function yg(){return Gh||(Gh=1,(function(a){function r(v,F){var Y=v.length;v.push(F);e:for(;0<Y;){var ye=Y-1>>>1,ve=v[ye];if(0<_(ve,F))v[ye]=F,v[Y]=ve,Y=ye;else break e}}function c(v){return v.length===0?null:v[0]}function u(v){if(v.length===0)return null;var F=v[0],Y=v.pop();if(Y!==F){v[0]=Y;e:for(var ye=0,ve=v.length,S=ve>>>1;ye<S;){var I=2*(ye+1)-1,ce=v[I],xe=I+1,Oe=v[xe];if(0>_(ce,Y))xe<ve&&0>_(Oe,ce)?(v[ye]=Oe,v[xe]=Y,ye=xe):(v[ye]=ce,v[I]=Y,ye=I);else if(xe<ve&&0>_(Oe,Y))v[ye]=Oe,v[xe]=Y,ye=xe;else break e}}return F}function _(v,F){var Y=v.sortIndex-F.sortIndex;return Y!==0?Y:v.id-F.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var x=Date,R=x.now();a.unstable_now=function(){return x.now()-R}}var b=[],k=[],M=1,A=null,T=3,ne=!1,$=!1,le=!1,U=!1,q=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;function be(v){for(var F=c(k);F!==null;){if(F.callback===null)u(k);else if(F.startTime<=v)u(k),F.sortIndex=F.expirationTime,r(b,F);else break;F=c(k)}}function et(v){if(le=!1,be(v),!$)if(c(b)!==null)$=!0,Je||(Je=!0,qe());else{var F=c(k);F!==null&&Xe(et,F.startTime-v)}}var Je=!1,K=-1,Ee=5,ae=-1;function Fe(){return U?!0:!(a.unstable_now()-ae<Ee)}function Re(){if(U=!1,Je){var v=a.unstable_now();ae=v;var F=!0;try{e:{$=!1,le&&(le=!1,me(K),K=-1),ne=!0;var Y=T;try{t:{for(be(v),A=c(b);A!==null&&!(A.expirationTime>v&&Fe());){var ye=A.callback;if(typeof ye=="function"){A.callback=null,T=A.priorityLevel;var ve=ye(A.expirationTime<=v);if(v=a.unstable_now(),typeof ve=="function"){A.callback=ve,be(v),F=!0;break t}A===c(b)&&u(b),be(v)}else u(b);A=c(b)}if(A!==null)F=!0;else{var S=c(k);S!==null&&Xe(et,S.startTime-v),F=!1}}break e}finally{A=null,T=Y,ne=!1}F=void 0}}finally{F?qe():Je=!1}}}var qe;if(typeof pe=="function")qe=function(){pe(Re)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,ze=tt.port2;tt.port1.onmessage=Re,qe=function(){ze.postMessage(null)}}else qe=function(){q(Re,0)};function Xe(v,F){K=q(function(){v(a.unstable_now())},F)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(v){v.callback=null},a.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ee=0<v?Math.floor(1e3/v):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(v){switch(T){case 1:case 2:case 3:var F=3;break;default:F=T}var Y=T;T=F;try{return v()}finally{T=Y}},a.unstable_requestPaint=function(){U=!0},a.unstable_runWithPriority=function(v,F){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var Y=T;T=v;try{return F()}finally{T=Y}},a.unstable_scheduleCallback=function(v,F,Y){var ye=a.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ye+Y:ye):Y=ye,v){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Y+ve,v={id:M++,callback:F,priorityLevel:v,startTime:Y,expirationTime:ve,sortIndex:-1},Y>ye?(v.sortIndex=Y,r(k,v),c(b)===null&&v===c(k)&&(le?(me(K),K=-1):le=!0,Xe(et,Y-ye))):(v.sortIndex=ve,r(b,v),$||ne||($=!0,Je||(Je=!0,qe()))),v},a.unstable_shouldYield=Fe,a.unstable_wrapCallback=function(v){var F=T;return function(){var Y=T;T=F;try{return v.apply(this,arguments)}finally{T=Y}}}})(id)),id}var Vh;function pg(){return Vh||(Vh=1,sd.exports=yg()),sd.exports}var rd={exports:{}},Qn={};var Zh;function xg(){if(Zh)return Qn;Zh=1;var a=Nd();function r(b){var k="https://react.dev/errors/"+b;if(1<arguments.length){k+="?args[]="+encodeURIComponent(arguments[1]);for(var M=2;M<arguments.length;M++)k+="&args[]="+encodeURIComponent(arguments[M])}return"Minified React error #"+b+"; visit "+k+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},_=Symbol.for("react.portal");function f(b,k,M){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:A==null?null:""+A,children:b,containerInfo:k,implementation:M}}var x=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(b,k){if(b==="font")return"";if(typeof k=="string")return k==="use-credentials"?k:""}return Qn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Qn.createPortal=function(b,k){var M=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!k||k.nodeType!==1&&k.nodeType!==9&&k.nodeType!==11)throw Error(r(299));return f(b,k,null,M)},Qn.flushSync=function(b){var k=x.T,M=u.p;try{if(x.T=null,u.p=2,b)return b()}finally{x.T=k,u.p=M,u.d.f()}},Qn.preconnect=function(b,k){typeof b=="string"&&(k?(k=k.crossOrigin,k=typeof k=="string"?k==="use-credentials"?k:"":void 0):k=null,u.d.C(b,k))},Qn.prefetchDNS=function(b){typeof b=="string"&&u.d.D(b)},Qn.preinit=function(b,k){if(typeof b=="string"&&k&&typeof k.as=="string"){var M=k.as,A=R(M,k.crossOrigin),T=typeof k.integrity=="string"?k.integrity:void 0,ne=typeof k.fetchPriority=="string"?k.fetchPriority:void 0;M==="style"?u.d.S(b,typeof k.precedence=="string"?k.precedence:void 0,{crossOrigin:A,integrity:T,fetchPriority:ne}):M==="script"&&u.d.X(b,{crossOrigin:A,integrity:T,fetchPriority:ne,nonce:typeof k.nonce=="string"?k.nonce:void 0})}},Qn.preinitModule=function(b,k){if(typeof b=="string")if(typeof k=="object"&&k!==null){if(k.as==null||k.as==="script"){var M=R(k.as,k.crossOrigin);u.d.M(b,{crossOrigin:M,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0})}}else k==null&&u.d.M(b)},Qn.preload=function(b,k){if(typeof b=="string"&&typeof k=="object"&&k!==null&&typeof k.as=="string"){var M=k.as,A=R(M,k.crossOrigin);u.d.L(b,M,{crossOrigin:A,integrity:typeof k.integrity=="string"?k.integrity:void 0,nonce:typeof k.nonce=="string"?k.nonce:void 0,type:typeof k.type=="string"?k.type:void 0,fetchPriority:typeof k.fetchPriority=="string"?k.fetchPriority:void 0,referrerPolicy:typeof k.referrerPolicy=="string"?k.referrerPolicy:void 0,imageSrcSet:typeof k.imageSrcSet=="string"?k.imageSrcSet:void 0,imageSizes:typeof k.imageSizes=="string"?k.imageSizes:void 0,media:typeof k.media=="string"?k.media:void 0})}},Qn.preloadModule=function(b,k){if(typeof b=="string")if(k){var M=R(k.as,k.crossOrigin);u.d.m(b,{as:typeof k.as=="string"&&k.as!=="script"?k.as:void 0,crossOrigin:M,integrity:typeof k.integrity=="string"?k.integrity:void 0})}else u.d.m(b)},Qn.requestFormReset=function(b){u.d.r(b)},Qn.unstable_batchedUpdates=function(b,k){return b(k)},Qn.useFormState=function(b,k,M){return x.H.useFormState(b,k,M)},Qn.useFormStatus=function(){return x.H.useHostTransitionStatus()},Qn.version="19.2.4",Qn}var Kh;function Rm(){if(Kh)return rd.exports;Kh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),rd.exports=xg(),rd.exports}var Fh;function bg(){if(Fh)return bi;Fh=1;var a=pg(),r=Nd(),c=Rm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function x(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function b(e){if(f(e)!==e)throw Error(u(188))}function k(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,l=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(l=s.return,l!==null){n=l;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return b(s),e;if(i===l)return b(s),t;i=i.sibling}throw Error(u(188))}if(n.return!==l.return)n=s,l=i;else{for(var d=!1,h=s.child;h;){if(h===n){d=!0,n=s,l=i;break}if(h===l){d=!0,l=s,n=i;break}h=h.sibling}if(!d){for(h=i.child;h;){if(h===n){d=!0,n=i,l=s;break}if(h===l){d=!0,l=i,n=s;break}h=h.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==l)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function M(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=M(e),t!==null)return t;e=e.sibling}return null}var A=Object.assign,T=Symbol.for("react.element"),ne=Symbol.for("react.transitional.element"),$=Symbol.for("react.portal"),le=Symbol.for("react.fragment"),U=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),me=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),et=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),Re=Symbol.iterator;function qe(e){return e===null||typeof e!="object"?null:(e=Re&&e[Re]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Symbol.for("react.client.reference");function ze(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===tt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case le:return"Fragment";case q:return"Profiler";case U:return"StrictMode";case et:return"Suspense";case Je:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $:return"Portal";case pe:return e.displayName||"Context";case me:return(e._context.displayName||"Context")+".Consumer";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return t=e.displayName||null,t!==null?t:ze(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return ze(e(t))}catch{}}return null}var Xe=Array.isArray,v=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ye=[],ve=-1;function S(e){return{current:e}}function I(e){0>ve||(e.current=ye[ve],ye[ve]=null,ve--)}function ce(e,t){ve++,ye[ve]=e.current,e.current=t}var xe=S(null),Oe=S(null),at=S(null),dt=S(null);function qt(e,t){switch(ce(at,t),ce(Oe,e),ce(xe,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_h(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_h(t),e=fh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}I(xe),ce(xe,e)}function Et(){I(xe),I(Oe),I(at)}function kn(e){e.memoizedState!==null&&ce(dt,e);var t=xe.current,n=fh(t,e.type);t!==n&&(ce(Oe,e),ce(xe,n))}function rn(e){Oe.current===e&&(I(xe),I(Oe)),dt.current===e&&(I(dt),mi._currentValue=Y)}var _n,Mn;function tn(e){if(_n===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_n=t&&t[1]||"",Mn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_n+e+Mn}var zn=!1;function Dn(e,t){if(!e||zn)return"";zn=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(X){var H=X}Reflect.construct(e,[],te)}else{try{te.call()}catch(X){H=X}e.call(te.prototype)}}else{try{throw Error()}catch(X){H=X}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(X){if(X&&H&&typeof X.stack=="string")return[X.stack,H.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),d=i[0],h=i[1];if(d&&h){var w=d.split(`
`),B=h.split(`
`);for(s=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;if(l===w.length||s===B.length)for(l=w.length-1,s=B.length-1;1<=l&&0<=s&&w[l]!==B[s];)s--;for(;1<=l&&0<=s;l--,s--)if(w[l]!==B[s]){if(l!==1||s!==1)do if(l--,s--,0>s||w[l]!==B[s]){var W=`
`+w[l].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=l&&0<=s);break}}}finally{zn=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?tn(n):""}function yl(e,t){switch(e.tag){case 26:case 27:case 5:return tn(e.type);case 16:return tn("Lazy");case 13:return e.child!==t&&t!==null?tn("Suspense Fallback"):tn("Suspense");case 19:return tn("SuspenseList");case 0:case 15:return Dn(e.type,!1);case 11:return Dn(e.type.render,!1);case 1:return Dn(e.type,!0);case 31:return tn("Activity");default:return""}}function Z(e){try{var t="",n=null;do t+=yl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var De=Object.prototype.hasOwnProperty,st=a.unstable_scheduleCallback,Ie=a.unstable_cancelCallback,ct=a.unstable_shouldYield,vt=a.unstable_requestPaint,nt=a.unstable_now,Qe=a.unstable_getCurrentPriorityLevel,mt=a.unstable_ImmediatePriority,At=a.unstable_UserBlockingPriority,Ae=a.unstable_NormalPriority,D=a.unstable_LowPriority,L=a.unstable_IdlePriority,P=a.log,oe=a.unstable_setDisableYieldValue,ke=null,_e=null;function ie(e){if(typeof P=="function"&&oe(e),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(ke,e)}catch{}}var Be=Math.clz32?Math.clz32:Ct,it=Math.log,yt=Math.LN2;function Ct(e){return e>>>=0,e===0?32:31-(it(e)/yt|0)|0}var Te=256,Q=262144,de=4194304;function ue(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function fe(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var s=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~i,l!==0?s=ue(l):(d&=h,d!==0?s=ue(d):n||(n=h&~e,n!==0&&(s=ue(n))))):(h=l&~i,h!==0?s=ue(h):d!==0?s=ue(d):n||(n=l&~e,n!==0&&(s=ue(n)))),s===0?0:t!==0&&t!==s&&(t&i)===0&&(i=s&-s,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:s}function ut(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Se(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $e(){var e=de;return de<<=1,(de&62914560)===0&&(de=4194304),e}function pt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function En(e,t,n,l,s,i){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,w=e.expirationTimes,B=e.hiddenUpdates;for(n=d&~n;0<n;){var W=31-Be(n),te=1<<W;h[W]=0,w[W]=-1;var H=B[W];if(H!==null)for(B[W]=null,W=0;W<H.length;W++){var X=H[W];X!==null&&(X.lane&=-536870913)}n&=~te}l!==0&&Kt(e,l,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Kt(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Be(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function Hn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Be(n),s=1<<l;s&t|e[l]&t&&(e[l]|=t),n&=~s}}function il(e,t){var n=t&-t;return n=(n&42)!==0?1:Un(n),(n&(e.suspendedLanes|t))!==0?0:n}function Un(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ul(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oa(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Lh(e.type))}function nn(e,t){var n=F.p;try{return F.p=e,t()}finally{F.p=n}}var Nn=Math.random().toString(36).slice(2),cn="__reactFiber$"+Nn,Yn="__reactProps$"+Nn,Ve="__reactContainer$"+Nn,Xn="__reactEvents$"+Nn,js="__reactListeners$"+Nn,Cs="__reactHandles$"+Nn,Yl="__reactResources$"+Nn,aa="__reactMarker$"+Nn;function Da(e){delete e[cn],delete e[Yn],delete e[Xn],delete e[js],delete e[Cs]}function So(e){var t=e[cn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ve]||n[cn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=bh(e);e!==null;){if(n=e[cn])return n;e=bh(e)}return t}e=n,n=e.parentNode}return null}function ko(e){if(e=e[cn]||e[Ve]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function sa(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Xl(e){var t=e[Yl];return t||(t=e[Yl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function pn(e){e[aa]=!0}var Ms=new Set,jo={};function pl(e,t){Tn(e,t),Tn(e+"Capture",t)}function Tn(e,t){for(jo[e]=t,e=0;e<t.length;e++)Ms.add(t[e])}var Aa=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Es={},Co={};function ia(e){return De.call(Co,e)?!0:De.call(Es,e)?!1:Aa.test(e)?Co[e]=!0:(Es[e]=!0,!1)}function Il(e,t,n){if(ia(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function In(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function rl(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Ft(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ni(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cc(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Oa(e){if(!e._valueTracker){var t=Ni(e)?"checked":"value";e._valueTracker=cc(e,t,""+e[t])}}function uc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ni(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Mo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ti=/[\n"\\]/g;function Wn(e){return e.replace(Ti,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ql(e,t,n,l,s,i,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ft(t)):e.value!==""+Ft(t)&&(e.value=""+Ft(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ql(e,d,Ft(t)):n!=null?Ql(e,d,Ft(n)):l!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Ft(h):e.removeAttribute("name")}function on(e,t,n,l,s,i,d,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Oa(e);return}n=n!=null?""+Ft(n):"",t=t!=null?""+Ft(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Oa(e)}function Ql(e,t,n){t==="number"&&Mo(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function An(e,t,n,l){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ft(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function jn(e,t,n){if(t!=null&&(t=""+Ft(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ft(n):""}function Ri(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(u(92));if(Xe(l)){if(1<l.length)throw Error(u(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Ft(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Oa(e)}function Eo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var dc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xt(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||dc.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zi(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&n[s]!==l&&xt(e,s,l)}else for(var i in t)t.hasOwnProperty(i)&&xt(e,i,t[i])}function Pn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ai=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ra(e){return Ai.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zl(){}var Ns=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gt=null,Wl=null;function Ts(e){var t=ko(e);if(t&&(e=t.stateNode)){var n=e[Yn]||null;e:switch(e=t.stateNode,t.type){case"input":if(ql(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Wn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var s=l[Yn]||null;if(!s)throw Error(u(90));ql(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&uc(l)}break e;case"textarea":jn(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}}}var Gn=!1;function Gl(e,t,n){if(Gn)return e(t,n);Gn=!0;try{var l=e(t);return l}finally{if(Gn=!1,(Gt!==null||Wl!==null)&&(Cr(),Gt&&(t=Gt,e=Wl,Wl=Gt=null,Ts(t),e)))for(t=0;t<e.length;t++)Ts(e[t])}}function Lt(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Yn]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var cl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=!1;if(cl)try{var No={};Object.defineProperty(No,"passive",{get:function(){Al=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Al=!1}var Vn=null,La=null,To=null;function Rs(){if(To)return To;var e,t=La,n=t.length,l,s="value"in Vn?Vn.value:Vn.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(l=1;l<=d&&t[n-l]===s[i-l];l++);return To=s.slice(e,1<l?1-l:void 0)}function Vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function ua(){return!1}function xn(e){function t(n,l,s,i,d){this._reactName=n,this._targetInst=s,this.type=l,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ca:ua,this.isPropagationStopped=ua,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ba=xn(xl),bl=A({},xl,{view:0,detail:0}),Ol=xn(bl),$a,Zl,qn,Kl=A({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?($a=e.screenX-qn.screenX,Zl=e.screenY-qn.screenY):Zl=$a=0,qn=e),$a)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Ro=xn(Kl),Ha=A({},Kl,{dataTransfer:0}),Oi=xn(Ha),Ua=A({},bl,{relatedTarget:0}),Ya=xn(Ua),zs=A({},xl,{animationName:0,elapsedTime:0,pseudoElement:0}),_c=xn(zs),Li=A({},xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bi=xn(Li),da=A({},xl,{data:0}),Ze=xn(da),Ds={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$i={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function As(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fc[e])?!!t[e]:!1}function Fl(){return As}var Xa=A({},bl,{key:function(e){if(e.key){var t=Ds[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$i[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Hi=xn(Xa),Ui=A({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_a=xn(Ui),Os=A({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),Yi=xn(Os),Ia=A({},xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),vl=xn(Ia),hc=A({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ls=xn(hc),Bs=A({},xl,{newState:0,oldState:0}),qa=xn(Bs),mc=[9,13,27,32],$s=cl&&"CompositionEvent"in window,ul=null;cl&&"documentMode"in document&&(ul=document.documentMode);var Hs=cl&&"TextEvent"in window&&!ul,Qa=cl&&(!$s||ul&&8<ul&&11>=ul),Xi=" ",zo=!1;function oo(e,t){switch(e){case"keyup":return mc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ii(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ao=!1;function qi(e,t){switch(e){case"compositionend":return Ii(t);case"keypress":return t.which!==32?null:(zo=!0,Xi);case"textInput":return e=t.data,e===Xi&&zo?null:e;default:return null}}function g(e,t){if(ao)return e==="compositionend"||!$s&&oo(e,t)?(e=Rs(),To=La=Vn=null,ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Qa&&t.locale!=="ko"?null:t.data;default:return null}}var p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function j(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p[e.type]:t==="textarea"}function C(e,t,n,l){Gt?Wl?Wl.push(l):Wl=[l]:Gt=l,t=Dr(t,"onChange"),0<t.length&&(n=new Ba("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var E=null,G=null;function he(e){sh(e,0)}function ge(e){var t=sa(e);if(uc(t))return e}function je(e,t){if(e==="change")return t}var He=!1;if(cl){var Ye;if(cl){var ot="oninput"in document;if(!ot){var gt=document.createElement("div");gt.setAttribute("oninput","return;"),ot=typeof gt.oninput=="function"}Ye=ot}else Ye=!1;He=Ye&&(!document.documentMode||9<document.documentMode)}function We(){E&&(E.detachEvent("onpropertychange",we),G=E=null)}function we(e){if(e.propertyName==="value"&&ge(G)){var t=[];C(t,G,e,Dl(e)),Gl(he,t)}}function an(e,t,n){e==="focusin"?(We(),E=t,G=n,E.attachEvent("onpropertychange",we)):e==="focusout"&&We()}function Ot(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ge(G)}function fn(e,t){if(e==="click")return ge(t)}function Rt(e,t){if(e==="input"||e==="change")return ge(t)}function sn(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Le=typeof Object.is=="function"?Object.is:sn;function rt(e,t){if(Le(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var s=n[l];if(!De.call(t,s)||!Le(e[s],t[s]))return!1}return!0}function Vt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jt(e,t){var n=Vt(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vt(n)}}function el(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?el(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Mo(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mo(e.document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var fa=cl&&"documentMode"in document&&11>=document.documentMode,tl=null,wl=null,Zt=null,Sl=!1;function Jl(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||tl==null||tl!==Mo(l)||(l=tl,"selectionStart"in l&&hn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zt&&rt(Zt,l)||(Zt=l,l=Dr(wl,"onSelect"),0<l.length&&(t=new Ba("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=tl)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Do={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionrun:so("Transition","TransitionRun"),transitionstart:so("Transition","TransitionStart"),transitioncancel:so("Transition","TransitionCancel"),transitionend:so("Transition","TransitionEnd")},Us={},Qi={};cl&&(Qi=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function ha(e){if(Us[e])return Us[e];if(!Do[e])return e;var t=Do[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qi)return Us[e]=t[n];return e}var Od=ha("animationend"),Ld=ha("animationiteration"),Bd=ha("animationstart"),Vm=ha("transitionrun"),Zm=ha("transitionstart"),Km=ha("transitioncancel"),$d=ha("transitionend"),Hd=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function Ll(e,t){Hd.set(e,t),pl(t,[e])}var Wi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kl=[],Wa=0,yc=0;function Gi(){for(var e=Wa,t=yc=Wa=0;t<e;){var n=kl[t];kl[t++]=null;var l=kl[t];kl[t++]=null;var s=kl[t];kl[t++]=null;var i=kl[t];if(kl[t++]=null,l!==null&&s!==null){var d=l.pending;d===null?s.next=s:(s.next=d.next,d.next=s),l.pending=s}i!==0&&Ud(n,s,i)}}function Vi(e,t,n,l){kl[Wa++]=e,kl[Wa++]=t,kl[Wa++]=n,kl[Wa++]=l,yc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function pc(e,t,n,l){return Vi(e,t,n,l),Zi(e)}function ma(e,t){return Vi(e,null,null,t),Zi(e)}function Ud(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var s=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&t!==null&&(s=31-Be(n),e=i.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=n|536870912),i):null}function Zi(e){if(50<ri)throw ri=0,Mu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ga={};function Fm(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dl(e,t,n,l){return new Fm(e,t,n,l)}function xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function io(e,t){var n=e.alternate;return n===null?(n=dl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Yd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Ki(e,t,n,l,s,i){var d=0;if(l=e,typeof e=="function")xc(e)&&(d=1);else if(typeof e=="string")d=ng(e,n,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=dl(31,n,t,s),e.elementType=ae,e.lanes=i,e;case le:return ga(n.children,s,i,t);case U:d=8,s|=24;break;case q:return e=dl(12,n,t,s|2),e.elementType=q,e.lanes=i,e;case et:return e=dl(13,n,t,s),e.elementType=et,e.lanes=i,e;case Je:return e=dl(19,n,t,s),e.elementType=Je,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pe:d=10;break e;case me:d=9;break e;case be:d=11;break e;case K:d=14;break e;case Ee:d=16,l=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=dl(d,n,t,s),t.elementType=e,t.type=l,t.lanes=i,t}function ga(e,t,n,l){return e=dl(7,e,l,t),e.lanes=n,e}function bc(e,t,n){return e=dl(6,e,null,t),e.lanes=n,e}function Xd(e){var t=dl(18,null,null,0);return t.stateNode=e,t}function vc(e,t,n){return t=dl(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Id=new WeakMap;function jl(e,t){if(typeof e=="object"&&e!==null){var n=Id.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Z(t)},Id.set(e,t),t)}return{value:e,source:t,stack:Z(t)}}var Va=[],Za=0,Fi=null,Ys=0,Cl=[],Ml=0,Ao=null,Pl=1,eo="";function ro(e,t){Va[Za++]=Ys,Va[Za++]=Fi,Fi=e,Ys=t}function qd(e,t,n){Cl[Ml++]=Pl,Cl[Ml++]=eo,Cl[Ml++]=Ao,Ao=e;var l=Pl;e=eo;var s=32-Be(l)-1;l&=~(1<<s),n+=1;var i=32-Be(t)+s;if(30<i){var d=s-s%5;i=(l&(1<<d)-1).toString(32),l>>=d,s-=d,Pl=1<<32-Be(t)+s|n<<s|l,eo=i+e}else Pl=1<<i|n<<s|l,eo=e}function wc(e){e.return!==null&&(ro(e,1),qd(e,1,0))}function Sc(e){for(;e===Fi;)Fi=Va[--Za],Va[Za]=null,Ys=Va[--Za],Va[Za]=null;for(;e===Ao;)Ao=Cl[--Ml],Cl[Ml]=null,eo=Cl[--Ml],Cl[Ml]=null,Pl=Cl[--Ml],Cl[Ml]=null}function Qd(e,t){Cl[Ml++]=Pl,Cl[Ml++]=eo,Cl[Ml++]=Ao,Pl=t.id,eo=t.overflow,Ao=e}var On=null,Pt=null,Mt=!1,Oo=null,El=!1,kc=Error(u(519));function Lo(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xs(jl(t,e)),kc}function Wd(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[cn]=e,t[Yn]=l,n){case"dialog":St("cancel",t),St("close",t);break;case"iframe":case"object":case"embed":St("load",t);break;case"video":case"audio":for(n=0;n<ui.length;n++)St(ui[n],t);break;case"source":St("error",t);break;case"img":case"image":case"link":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"input":St("invalid",t),on(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":St("invalid",t);break;case"textarea":St("invalid",t),Ri(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||uh(t.textContent,n)?(l.popover!=null&&(St("beforetoggle",t),St("toggle",t)),l.onScroll!=null&&St("scroll",t),l.onScrollEnd!=null&&St("scrollend",t),l.onClick!=null&&(t.onclick=zl),t=!0):t=!1,t||Lo(e,!0)}function Gd(e){for(On=e.return;On;)switch(On.tag){case 5:case 31:case 13:El=!1;return;case 27:case 3:El=!0;return;default:On=On.return}}function Ka(e){if(e!==On)return!1;if(!Mt)return Gd(e),Mt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Xu(e.type,e.memoizedProps)),n=!n),n&&Pt&&Lo(e),Gd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Pt=xh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Pt=xh(e)}else t===27?(t=Pt,Ko(e.type)?(e=Gu,Gu=null,Pt=e):Pt=t):Pt=On?Tl(e.stateNode.nextSibling):null;return!0}function ya(){Pt=On=null,Mt=!1}function jc(){var e=Oo;return e!==null&&(al===null?al=e:al.push.apply(al,e),Oo=null),e}function Xs(e){Oo===null?Oo=[e]:Oo.push(e)}var Cc=S(null),pa=null,co=null;function Bo(e,t,n){ce(Cc,t._currentValue),t._currentValue=n}function uo(e){e._currentValue=Cc.current,I(Cc)}function Mc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ec(e,t,n,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var d=s.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=s;for(var w=0;w<t.length;w++)if(h.context===t[w]){i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),Mc(i.return,n,e),l||(d=null);break e}i=h.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(u(341));d.lanes|=n,i=d.alternate,i!==null&&(i.lanes|=n),Mc(d,n,e),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===e){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function Fa(e,t,n,l){e=null;for(var s=t,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var h=s.type;Le(s.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(s===dt.current){if(d=s.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(mi):e=[mi])}s=s.return}e!==null&&Ec(t,e,n,l),t.flags|=262144}function Ji(e){for(e=e.firstContext;e!==null;){if(!Le(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xa(e){pa=e,co=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Vd(pa,e)}function Pi(e,t){return pa===null&&xa(e),Vd(e,t)}function Vd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},co===null){if(e===null)throw Error(u(308));co=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else co=co.next=t;return n}var Jm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Pm=a.unstable_scheduleCallback,e0=a.unstable_NormalPriority,bn={$$typeof:pe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nc(){return{controller:new Jm,data:new Map,refCount:0}}function Is(e){e.refCount--,e.refCount===0&&Pm(e0,function(){e.controller.abort()})}var qs=null,Tc=0,Ja=0,Pa=null;function t0(e,t){if(qs===null){var n=qs=[];Tc=0,Ja=Du(),Pa={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Tc++,t.then(Zd,Zd),t}function Zd(){if(--Tc===0&&qs!==null){Pa!==null&&(Pa.status="fulfilled");var e=qs;qs=null,Ja=0,Pa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function n0(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),l}var Kd=v.S;v.S=function(e,t){Af=nt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&t0(e,t),Kd!==null&&Kd(e,t)};var ba=S(null);function Rc(){var e=ba.current;return e!==null?e:Qt.pooledCache}function er(e,t){t===null?ce(ba,ba.current):ce(ba,t.pool)}function Fd(){var e=Rc();return e===null?null:{parent:bn._currentValue,pool:e}}var es=Error(u(460)),zc=Error(u(474)),tr=Error(u(542)),nr={then:function(){}};function Jd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Pd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zl,zl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,t_(e),e;default:if(typeof t.status=="string")t.then(zl,zl);else{if(e=Qt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,t_(e),e}throw wa=t,es}}function va(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(wa=n,es):n}}var wa=null;function e_(){if(wa===null)throw Error(u(459));var e=wa;return wa=null,e}function t_(e){if(e===es||e===tr)throw Error(u(483))}var ts=null,Qs=0;function lr(e){var t=Qs;return Qs+=1,ts===null&&(ts=[]),Pd(ts,e,t)}function Ws(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function or(e,t){throw t.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function n_(e){function t(z,N){if(e){var O=z.deletions;O===null?(z.deletions=[N],z.flags|=16):O.push(N)}}function n(z,N){if(!e)return null;for(;N!==null;)t(z,N),N=N.sibling;return null}function l(z){for(var N=new Map;z!==null;)z.key!==null?N.set(z.key,z):N.set(z.index,z),z=z.sibling;return N}function s(z,N){return z=io(z,N),z.index=0,z.sibling=null,z}function i(z,N,O){return z.index=O,e?(O=z.alternate,O!==null?(O=O.index,O<N?(z.flags|=67108866,N):O):(z.flags|=67108866,N)):(z.flags|=1048576,N)}function d(z){return e&&z.alternate===null&&(z.flags|=67108866),z}function h(z,N,O,ee){return N===null||N.tag!==6?(N=bc(O,z.mode,ee),N.return=z,N):(N=s(N,O),N.return=z,N)}function w(z,N,O,ee){var Ge=O.type;return Ge===le?W(z,N,O.props.children,ee,O.key):N!==null&&(N.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===Ee&&va(Ge)===N.type)?(N=s(N,O.props),Ws(N,O),N.return=z,N):(N=Ki(O.type,O.key,O.props,null,z.mode,ee),Ws(N,O),N.return=z,N)}function B(z,N,O,ee){return N===null||N.tag!==4||N.stateNode.containerInfo!==O.containerInfo||N.stateNode.implementation!==O.implementation?(N=vc(O,z.mode,ee),N.return=z,N):(N=s(N,O.children||[]),N.return=z,N)}function W(z,N,O,ee,Ge){return N===null||N.tag!==7?(N=ga(O,z.mode,ee,Ge),N.return=z,N):(N=s(N,O),N.return=z,N)}function te(z,N,O){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=bc(""+N,z.mode,O),N.return=z,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case ne:return O=Ki(N.type,N.key,N.props,null,z.mode,O),Ws(O,N),O.return=z,O;case $:return N=vc(N,z.mode,O),N.return=z,N;case Ee:return N=va(N),te(z,N,O)}if(Xe(N)||qe(N))return N=ga(N,z.mode,O,null),N.return=z,N;if(typeof N.then=="function")return te(z,lr(N),O);if(N.$$typeof===pe)return te(z,Pi(z,N),O);or(z,N)}return null}function H(z,N,O,ee){var Ge=N!==null?N.key:null;if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return Ge!==null?null:h(z,N,""+O,ee);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case ne:return O.key===Ge?w(z,N,O,ee):null;case $:return O.key===Ge?B(z,N,O,ee):null;case Ee:return O=va(O),H(z,N,O,ee)}if(Xe(O)||qe(O))return Ge!==null?null:W(z,N,O,ee,null);if(typeof O.then=="function")return H(z,N,lr(O),ee);if(O.$$typeof===pe)return H(z,N,Pi(z,O),ee);or(z,O)}return null}function X(z,N,O,ee,Ge){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return z=z.get(O)||null,h(N,z,""+ee,Ge);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case ne:return z=z.get(ee.key===null?O:ee.key)||null,w(N,z,ee,Ge);case $:return z=z.get(ee.key===null?O:ee.key)||null,B(N,z,ee,Ge);case Ee:return ee=va(ee),X(z,N,O,ee,Ge)}if(Xe(ee)||qe(ee))return z=z.get(O)||null,W(N,z,ee,Ge,null);if(typeof ee.then=="function")return X(z,N,O,lr(ee),Ge);if(ee.$$typeof===pe)return X(z,N,O,Pi(N,ee),Ge);or(N,ee)}return null}function Ne(z,N,O,ee){for(var Ge=null,Nt=null,Ue=N,ht=N=0,jt=null;Ue!==null&&ht<O.length;ht++){Ue.index>ht?(jt=Ue,Ue=null):jt=Ue.sibling;var Tt=H(z,Ue,O[ht],ee);if(Tt===null){Ue===null&&(Ue=jt);break}e&&Ue&&Tt.alternate===null&&t(z,Ue),N=i(Tt,N,ht),Nt===null?Ge=Tt:Nt.sibling=Tt,Nt=Tt,Ue=jt}if(ht===O.length)return n(z,Ue),Mt&&ro(z,ht),Ge;if(Ue===null){for(;ht<O.length;ht++)Ue=te(z,O[ht],ee),Ue!==null&&(N=i(Ue,N,ht),Nt===null?Ge=Ue:Nt.sibling=Ue,Nt=Ue);return Mt&&ro(z,ht),Ge}for(Ue=l(Ue);ht<O.length;ht++)jt=X(Ue,z,ht,O[ht],ee),jt!==null&&(e&&jt.alternate!==null&&Ue.delete(jt.key===null?ht:jt.key),N=i(jt,N,ht),Nt===null?Ge=jt:Nt.sibling=jt,Nt=jt);return e&&Ue.forEach(function(ta){return t(z,ta)}),Mt&&ro(z,ht),Ge}function Pe(z,N,O,ee){if(O==null)throw Error(u(151));for(var Ge=null,Nt=null,Ue=N,ht=N=0,jt=null,Tt=O.next();Ue!==null&&!Tt.done;ht++,Tt=O.next()){Ue.index>ht?(jt=Ue,Ue=null):jt=Ue.sibling;var ta=H(z,Ue,Tt.value,ee);if(ta===null){Ue===null&&(Ue=jt);break}e&&Ue&&ta.alternate===null&&t(z,Ue),N=i(ta,N,ht),Nt===null?Ge=ta:Nt.sibling=ta,Nt=ta,Ue=jt}if(Tt.done)return n(z,Ue),Mt&&ro(z,ht),Ge;if(Ue===null){for(;!Tt.done;ht++,Tt=O.next())Tt=te(z,Tt.value,ee),Tt!==null&&(N=i(Tt,N,ht),Nt===null?Ge=Tt:Nt.sibling=Tt,Nt=Tt);return Mt&&ro(z,ht),Ge}for(Ue=l(Ue);!Tt.done;ht++,Tt=O.next())Tt=X(Ue,z,ht,Tt.value,ee),Tt!==null&&(e&&Tt.alternate!==null&&Ue.delete(Tt.key===null?ht:Tt.key),N=i(Tt,N,ht),Nt===null?Ge=Tt:Nt.sibling=Tt,Nt=Tt);return e&&Ue.forEach(function(fg){return t(z,fg)}),Mt&&ro(z,ht),Ge}function Xt(z,N,O,ee){if(typeof O=="object"&&O!==null&&O.type===le&&O.key===null&&(O=O.props.children),typeof O=="object"&&O!==null){switch(O.$$typeof){case ne:e:{for(var Ge=O.key;N!==null;){if(N.key===Ge){if(Ge=O.type,Ge===le){if(N.tag===7){n(z,N.sibling),ee=s(N,O.props.children),ee.return=z,z=ee;break e}}else if(N.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===Ee&&va(Ge)===N.type){n(z,N.sibling),ee=s(N,O.props),Ws(ee,O),ee.return=z,z=ee;break e}n(z,N);break}else t(z,N);N=N.sibling}O.type===le?(ee=ga(O.props.children,z.mode,ee,O.key),ee.return=z,z=ee):(ee=Ki(O.type,O.key,O.props,null,z.mode,ee),Ws(ee,O),ee.return=z,z=ee)}return d(z);case $:e:{for(Ge=O.key;N!==null;){if(N.key===Ge)if(N.tag===4&&N.stateNode.containerInfo===O.containerInfo&&N.stateNode.implementation===O.implementation){n(z,N.sibling),ee=s(N,O.children||[]),ee.return=z,z=ee;break e}else{n(z,N);break}else t(z,N);N=N.sibling}ee=vc(O,z.mode,ee),ee.return=z,z=ee}return d(z);case Ee:return O=va(O),Xt(z,N,O,ee)}if(Xe(O))return Ne(z,N,O,ee);if(qe(O)){if(Ge=qe(O),typeof Ge!="function")throw Error(u(150));return O=Ge.call(O),Pe(z,N,O,ee)}if(typeof O.then=="function")return Xt(z,N,lr(O),ee);if(O.$$typeof===pe)return Xt(z,N,Pi(z,O),ee);or(z,O)}return typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint"?(O=""+O,N!==null&&N.tag===6?(n(z,N.sibling),ee=s(N,O),ee.return=z,z=ee):(n(z,N),ee=bc(O,z.mode,ee),ee.return=z,z=ee),d(z)):n(z,N)}return function(z,N,O,ee){try{Qs=0;var Ge=Xt(z,N,O,ee);return ts=null,Ge}catch(Ue){if(Ue===es||Ue===tr)throw Ue;var Nt=dl(29,Ue,null,z.mode);return Nt.lanes=ee,Nt.return=z,Nt}}}var Sa=n_(!0),l_=n_(!1),$o=!1;function Dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ho(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Uo(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=Zi(e),Ud(e,null,n),t}return Vi(e,l,t,n),Zi(e)}function Gs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Hn(e,n)}}function Oc(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?s=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Lc=!1;function Vs(){if(Lc){var e=Pa;if(e!==null)throw e}}function Zs(e,t,n,l){Lc=!1;var s=e.updateQueue;$o=!1;var i=s.firstBaseUpdate,d=s.lastBaseUpdate,h=s.shared.pending;if(h!==null){s.shared.pending=null;var w=h,B=w.next;w.next=null,d===null?i=B:d.next=B,d=w;var W=e.alternate;W!==null&&(W=W.updateQueue,h=W.lastBaseUpdate,h!==d&&(h===null?W.firstBaseUpdate=B:h.next=B,W.lastBaseUpdate=w))}if(i!==null){var te=s.baseState;d=0,W=B=w=null,h=i;do{var H=h.lane&-536870913,X=H!==h.lane;if(X?(kt&H)===H:(l&H)===H){H!==0&&H===Ja&&(Lc=!0),W!==null&&(W=W.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var Ne=e,Pe=h;H=t;var Xt=n;switch(Pe.tag){case 1:if(Ne=Pe.payload,typeof Ne=="function"){te=Ne.call(Xt,te,H);break e}te=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Pe.payload,H=typeof Ne=="function"?Ne.call(Xt,te,H):Ne,H==null)break e;te=A({},te,H);break e;case 2:$o=!0}}H=h.callback,H!==null&&(e.flags|=64,X&&(e.flags|=8192),X=s.callbacks,X===null?s.callbacks=[H]:X.push(H))}else X={lane:H,tag:h.tag,payload:h.payload,callback:h.callback,next:null},W===null?(B=W=X,w=te):W=W.next=X,d|=H;if(h=h.next,h===null){if(h=s.shared.pending,h===null)break;X=h,h=X.next,X.next=null,s.lastBaseUpdate=X,s.shared.pending=null}}while(!0);W===null&&(w=te),s.baseState=w,s.firstBaseUpdate=B,s.lastBaseUpdate=W,i===null&&(s.shared.lanes=0),Qo|=d,e.lanes=d,e.memoizedState=te}}function o_(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function a_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)o_(n[e],t)}var ns=S(null),ar=S(0);function s_(e,t){e=bo,ce(ar,e),ce(ns,t),bo=e|t.baseLanes}function Bc(){ce(ar,bo),ce(ns,ns.current)}function $c(){bo=ar.current,I(ns),I(ar)}var _l=S(null),Nl=null;function Yo(e){var t=e.alternate;ce(mn,mn.current&1),ce(_l,e),Nl===null&&(t===null||ns.current!==null||t.memoizedState!==null)&&(Nl=e)}function Hc(e){ce(mn,mn.current),ce(_l,e),Nl===null&&(Nl=e)}function i_(e){e.tag===22?(ce(mn,mn.current),ce(_l,e),Nl===null&&(Nl=e)):Xo()}function Xo(){ce(mn,mn.current),ce(_l,_l.current)}function fl(e){I(_l),Nl===e&&(Nl=null),I(mn)}var mn=S(0);function sr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Qu(n)||Wu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=0,ft=null,Ut=null,vn=null,ir=!1,ls=!1,ka=!1,rr=0,Ks=0,os=null,l0=0;function un(){throw Error(u(321))}function Uc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Le(e[n],t[n]))return!1;return!0}function Yc(e,t,n,l,s,i){return _o=i,ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,v.H=e===null||e.memoizedState===null?q_:nu,ka=!1,i=n(l,s),ka=!1,ls&&(i=c_(t,n,l,s)),r_(e),i}function r_(e){v.H=Ps;var t=Ut!==null&&Ut.next!==null;if(_o=0,vn=Ut=ft=null,ir=!1,Ks=0,os=null,t)throw Error(u(300));e===null||wn||(e=e.dependencies,e!==null&&Ji(e)&&(wn=!0))}function c_(e,t,n,l){ft=e;var s=0;do{if(ls&&(os=null),Ks=0,ls=!1,25<=s)throw Error(u(301));if(s+=1,vn=Ut=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}v.H=Q_,i=t(n,l)}while(ls);return i}function o0(){var e=v.H,t=e.useState()[0];return t=typeof t.then=="function"?Fs(t):t,e=e.useState()[0],(Ut!==null?Ut.memoizedState:null)!==e&&(ft.flags|=1024),t}function Xc(){var e=rr!==0;return rr=0,e}function Ic(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function qc(e){if(ir){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ir=!1}_o=0,vn=Ut=ft=null,ls=!1,Ks=rr=0,os=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?ft.memoizedState=vn=e:vn=vn.next=e,vn}function gn(){if(Ut===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=Ut.next;var t=vn===null?ft.memoizedState:vn.next;if(t!==null)vn=t,Ut=e;else{if(e===null)throw ft.alternate===null?Error(u(467)):Error(u(310));Ut=e,e={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},vn===null?ft.memoizedState=vn=e:vn=vn.next=e}return vn}function cr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fs(e){var t=Ks;return Ks+=1,os===null&&(os=[]),e=Pd(os,e,t),t=ft,(vn===null?t.memoizedState:vn.next)===null&&(t=t.alternate,v.H=t===null||t.memoizedState===null?q_:nu),e}function ur(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fs(e);if(e.$$typeof===pe)return Ln(e)}throw Error(u(438,String(e)))}function Qc(e){var t=null,n=ft.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=cr(),ft.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=Fe;return t.index++,n}function fo(e,t){return typeof t=="function"?t(e):t}function dr(e){var t=gn();return Wc(t,Ut,e)}function Wc(e,t,n){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=n;var s=e.baseQueue,i=l.pending;if(i!==null){if(s!==null){var d=s.next;s.next=i.next,i.next=d}t.baseQueue=s=i,l.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{t=s.next;var h=d=null,w=null,B=t,W=!1;do{var te=B.lane&-536870913;if(te!==B.lane?(kt&te)===te:(_o&te)===te){var H=B.revertLane;if(H===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),te===Ja&&(W=!0);else if((_o&H)===H){B=B.next,H===Ja&&(W=!0);continue}else te={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(h=w=te,d=i):w=w.next=te,ft.lanes|=H,Qo|=H;te=B.action,ka&&n(i,te),i=B.hasEagerState?B.eagerState:n(i,te)}else H={lane:te,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},w===null?(h=w=H,d=i):w=w.next=H,ft.lanes|=te,Qo|=te;B=B.next}while(B!==null&&B!==t);if(w===null?d=i:w.next=h,!Le(i,e.memoizedState)&&(wn=!0,W&&(n=Pa,n!==null)))throw n;e.memoizedState=i,e.baseState=d,e.baseQueue=w,l.lastRenderedState=i}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Gc(e){var t=gn(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var l=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do i=e(i,d.action),d=d.next;while(d!==s);Le(i,t.memoizedState)||(wn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function u_(e,t,n){var l=ft,s=gn(),i=Mt;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!Le((Ut||s).memoizedState,n);if(d&&(s.memoizedState=n,wn=!0),s=s.queue,Kc(f_.bind(null,l,s,e),[e]),s.getSnapshot!==t||d||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,as(9,{destroy:void 0},__.bind(null,l,s,n,t),null),Qt===null)throw Error(u(349));i||(_o&127)!==0||d_(l,t,n)}return n}function d_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ft.updateQueue,t===null?(t=cr(),ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function __(e,t,n,l){t.value=n,t.getSnapshot=l,h_(t)&&m_(e)}function f_(e,t,n){return n(function(){h_(t)&&m_(e)})}function h_(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Le(e,n)}catch{return!0}}function m_(e){var t=ma(e,2);t!==null&&sl(t,e,2)}function Vc(e){var t=Kn();if(typeof e=="function"){var n=e;if(e=n(),ka){ie(!0);try{n()}finally{ie(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:e},t}function g_(e,t,n,l){return e.baseState=n,Wc(e,Ut,typeof l=="function"?l:fo)}function a0(e,t,n,l,s){if(hr(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};v.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,y_(t,i)):(i.next=n.next,t.pending=n.next=i)}}function y_(e,t){var n=t.action,l=t.payload,s=e.state;if(t.isTransition){var i=v.T,d={};v.T=d;try{var h=n(s,l),w=v.S;w!==null&&w(d,h),p_(e,t,h)}catch(B){Zc(e,t,B)}finally{i!==null&&d.types!==null&&(i.types=d.types),v.T=i}}else try{i=n(s,l),p_(e,t,i)}catch(B){Zc(e,t,B)}}function p_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){x_(e,t,l)},function(l){return Zc(e,t,l)}):x_(e,t,n)}function x_(e,t,n){t.status="fulfilled",t.value=n,b_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,y_(e,n)))}function Zc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,b_(t),t=t.next;while(t!==l)}e.action=null}function b_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function v_(e,t){return t}function w_(e,t){if(Mt){var n=Qt.formState;if(n!==null){e:{var l=ft;if(Mt){if(Pt){t:{for(var s=Pt,i=El;s.nodeType!==8;){if(!i){s=null;break t}if(s=Tl(s.nextSibling),s===null){s=null;break t}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Pt=Tl(s.nextSibling),l=s.data==="F!";break e}}Lo(l)}l=!1}l&&(t=n[0])}}return n=Kn(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v_,lastRenderedState:t},n.queue=l,n=Y_.bind(null,ft,l),l.dispatch=n,l=Vc(!1),i=tu.bind(null,ft,!1,l.queue),l=Kn(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,n=a0.bind(null,ft,s,i,n),s.dispatch=n,l.memoizedState=e,[t,n,!1]}function S_(e){var t=gn();return k_(t,Ut,e)}function k_(e,t,n){if(t=Wc(e,t,v_)[0],e=dr(fo)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Fs(t)}catch(d){throw d===es?tr:d}else l=t;t=gn();var s=t.queue,i=s.dispatch;return n!==t.memoizedState&&(ft.flags|=2048,as(9,{destroy:void 0},s0.bind(null,s,n),null)),[l,i,e]}function s0(e,t){e.action=t}function j_(e){var t=gn(),n=Ut;if(n!==null)return k_(t,n,e);gn(),t=t.memoizedState,n=gn();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function as(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ft.updateQueue,t===null&&(t=cr(),ft.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function C_(){return gn().memoizedState}function _r(e,t,n,l){var s=Kn();ft.flags|=e,s.memoizedState=as(1|t,{destroy:void 0},n,l===void 0?null:l)}function fr(e,t,n,l){var s=gn();l=l===void 0?null:l;var i=s.memoizedState.inst;Ut!==null&&l!==null&&Uc(l,Ut.memoizedState.deps)?s.memoizedState=as(t,i,n,l):(ft.flags|=e,s.memoizedState=as(1|t,i,n,l))}function M_(e,t){_r(8390656,8,e,t)}function Kc(e,t){fr(2048,8,e,t)}function i0(e){ft.flags|=4;var t=ft.updateQueue;if(t===null)t=cr(),ft.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function E_(e){var t=gn().memoizedState;return i0({ref:t,nextImpl:e}),function(){if((zt&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function N_(e,t){return fr(4,2,e,t)}function T_(e,t){return fr(4,4,e,t)}function R_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function z_(e,t,n){n=n!=null?n.concat([e]):null,fr(4,4,R_.bind(null,t,e),n)}function Fc(){}function D_(e,t){var n=gn();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Uc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function A_(e,t){var n=gn();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Uc(t,l[1]))return l[0];if(l=e(),ka){ie(!0);try{e()}finally{ie(!1)}}return n.memoizedState=[l,t],l}function Jc(e,t,n){return n===void 0||(_o&1073741824)!==0&&(kt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Lf(),ft.lanes|=e,Qo|=e,n)}function O_(e,t,n,l){return Le(n,t)?n:ns.current!==null?(e=Jc(e,n,l),Le(e,t)||(wn=!0),e):(_o&42)===0||(_o&1073741824)!==0&&(kt&261930)===0?(wn=!0,e.memoizedState=n):(e=Lf(),ft.lanes|=e,Qo|=e,t)}function L_(e,t,n,l,s){var i=F.p;F.p=i!==0&&8>i?i:8;var d=v.T,h={};v.T=h,tu(e,!1,t,n);try{var w=s(),B=v.S;if(B!==null&&B(h,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var W=n0(w,l);Js(e,t,W,gl(e))}else Js(e,t,l,gl(e))}catch(te){Js(e,t,{then:function(){},status:"rejected",reason:te},gl())}finally{F.p=i,d!==null&&h.types!==null&&(d.types=h.types),v.T=d}}function r0(){}function Pc(e,t,n,l){if(e.tag!==5)throw Error(u(476));var s=B_(e).queue;L_(e,s,t,Y,n===null?r0:function(){return $_(e),n(l)})}function B_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:Y},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function $_(e){var t=B_(e);t.next===null&&(t=e.alternate.memoizedState),Js(e,t.next.queue,{},gl())}function eu(){return Ln(mi)}function H_(){return gn().memoizedState}function U_(){return gn().memoizedState}function c0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gl();e=Ho(n);var l=Uo(t,e,n);l!==null&&(sl(l,t,n),Gs(l,t,n)),t={cache:Nc()},e.payload=t;return}t=t.return}}function u0(e,t,n){var l=gl();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},hr(e)?X_(t,n):(n=pc(e,t,n,l),n!==null&&(sl(n,e,l),I_(n,t,l)))}function Y_(e,t,n){var l=gl();Js(e,t,n,l)}function Js(e,t,n,l){var s={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(hr(e))X_(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,h=i(d,n);if(s.hasEagerState=!0,s.eagerState=h,Le(h,d))return Vi(e,t,s,0),Qt===null&&Gi(),!1}catch{}if(n=pc(e,t,s,l),n!==null)return sl(n,e,l),I_(n,t,l),!0}return!1}function tu(e,t,n,l){if(l={lane:2,revertLane:Du(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},hr(e)){if(t)throw Error(u(479))}else t=pc(e,n,l,2),t!==null&&sl(t,e,2)}function hr(e){var t=e.alternate;return e===ft||t!==null&&t===ft}function X_(e,t){ls=ir=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function I_(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Hn(e,n)}}var Ps={readContext:Ln,use:ur,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un};Ps.useEffectEvent=un;var q_={readContext:Ln,use:ur,useCallback:function(e,t){return Kn().memoizedState=[e,t===void 0?null:t],e},useContext:Ln,useEffect:M_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,_r(4194308,4,R_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){_r(4,2,e,t)},useMemo:function(e,t){var n=Kn();t=t===void 0?null:t;var l=e();if(ka){ie(!0);try{e()}finally{ie(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Kn();if(n!==void 0){var s=n(t);if(ka){ie(!0);try{n(t)}finally{ie(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=u0.bind(null,ft,e),[l.memoizedState,e]},useRef:function(e){var t=Kn();return e={current:e},t.memoizedState=e},useState:function(e){e=Vc(e);var t=e.queue,n=Y_.bind(null,ft,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Fc,useDeferredValue:function(e,t){var n=Kn();return Jc(n,e,t)},useTransition:function(){var e=Vc(!1);return e=L_.bind(null,ft,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ft,s=Kn();if(Mt){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Qt===null)throw Error(u(349));(kt&127)!==0||d_(l,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,M_(f_.bind(null,l,i,e),[e]),l.flags|=2048,as(9,{destroy:void 0},__.bind(null,l,i,n,t),null),n},useId:function(){var e=Kn(),t=Qt.identifierPrefix;if(Mt){var n=eo,l=Pl;n=(l&~(1<<32-Be(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=rr++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=l0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eu,useFormState:w_,useActionState:w_,useOptimistic:function(e){var t=Kn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=tu.bind(null,ft,!0,n),n.dispatch=t,[e,t]},useMemoCache:Qc,useCacheRefresh:function(){return Kn().memoizedState=c0.bind(null,ft)},useEffectEvent:function(e){var t=Kn(),n={impl:e};return t.memoizedState=n,function(){if((zt&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},nu={readContext:Ln,use:ur,useCallback:D_,useContext:Ln,useEffect:Kc,useImperativeHandle:z_,useInsertionEffect:N_,useLayoutEffect:T_,useMemo:A_,useReducer:dr,useRef:C_,useState:function(){return dr(fo)},useDebugValue:Fc,useDeferredValue:function(e,t){var n=gn();return O_(n,Ut.memoizedState,e,t)},useTransition:function(){var e=dr(fo)[0],t=gn().memoizedState;return[typeof e=="boolean"?e:Fs(e),t]},useSyncExternalStore:u_,useId:H_,useHostTransitionStatus:eu,useFormState:S_,useActionState:S_,useOptimistic:function(e,t){var n=gn();return g_(n,Ut,e,t)},useMemoCache:Qc,useCacheRefresh:U_};nu.useEffectEvent=E_;var Q_={readContext:Ln,use:ur,useCallback:D_,useContext:Ln,useEffect:Kc,useImperativeHandle:z_,useInsertionEffect:N_,useLayoutEffect:T_,useMemo:A_,useReducer:Gc,useRef:C_,useState:function(){return Gc(fo)},useDebugValue:Fc,useDeferredValue:function(e,t){var n=gn();return Ut===null?Jc(n,e,t):O_(n,Ut.memoizedState,e,t)},useTransition:function(){var e=Gc(fo)[0],t=gn().memoizedState;return[typeof e=="boolean"?e:Fs(e),t]},useSyncExternalStore:u_,useId:H_,useHostTransitionStatus:eu,useFormState:j_,useActionState:j_,useOptimistic:function(e,t){var n=gn();return Ut!==null?g_(n,Ut,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Qc,useCacheRefresh:U_};Q_.useEffectEvent=E_;function lu(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ou={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=gl(),s=Ho(l);s.payload=t,n!=null&&(s.callback=n),t=Uo(e,s,l),t!==null&&(sl(t,e,l),Gs(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=gl(),s=Ho(l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Uo(e,s,l),t!==null&&(sl(t,e,l),Gs(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gl(),l=Ho(n);l.tag=2,t!=null&&(l.callback=t),t=Uo(e,l,n),t!==null&&(sl(t,e,n),Gs(t,e,n))}};function W_(e,t,n,l,s,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,d):t.prototype&&t.prototype.isPureReactComponent?!rt(n,l)||!rt(s,i):!0}function G_(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&ou.enqueueReplaceState(t,t.state,null)}function ja(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=A({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function V_(e){Wi(e)}function Z_(e){console.error(e)}function K_(e){Wi(e)}function mr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function F_(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function au(e,t,n){return n=Ho(n),n.tag=3,n.payload={element:null},n.callback=function(){mr(e,t)},n}function J_(e){return e=Ho(e),e.tag=3,e}function P_(e,t,n,l){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var i=l.value;e.payload=function(){return s(i)},e.callback=function(){F_(t,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){F_(t,n,l),typeof s!="function"&&(Wo===null?Wo=new Set([this]):Wo.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function d0(e,t,n,l,s){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Fa(t,n,s,!0),n=_l.current,n!==null){switch(n.tag){case 31:case 13:return Nl===null?Mr():n.alternate===null&&dn===0&&(dn=3),n.flags&=-257,n.flags|=65536,n.lanes=s,l===nr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Tu(e,l,s)),!1;case 22:return n.flags|=65536,l===nr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Tu(e,l,s)),!1}throw Error(u(435,n.tag))}return Tu(e,l,s),Mr(),!1}if(Mt)return t=_l.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==kc&&(e=Error(u(422),{cause:l}),Xs(jl(e,n)))):(l!==kc&&(t=Error(u(423),{cause:l}),Xs(jl(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=jl(l,n),s=au(e.stateNode,l,s),Oc(e,s),dn!==4&&(dn=2)),!1;var i=Error(u(520),{cause:l});if(i=jl(i,n),ii===null?ii=[i]:ii.push(i),dn!==4&&(dn=2),t===null)return!0;l=jl(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=au(n.stateNode,l,e),Oc(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Wo===null||!Wo.has(i))))return n.flags|=65536,s&=-s,n.lanes|=s,s=J_(s),P_(s,e,n,l),Oc(n,s),!1}n=n.return}while(n!==null);return!1}var su=Error(u(461)),wn=!1;function Bn(e,t,n,l){t.child=e===null?l_(t,null,n,l):Sa(t,e.child,n,l)}function ef(e,t,n,l,s){n=n.render;var i=t.ref;if("ref"in l){var d={};for(var h in l)h!=="ref"&&(d[h]=l[h])}else d=l;return xa(t),l=Yc(e,t,n,d,i,s),h=Xc(),e!==null&&!wn?(Ic(e,t,s),ho(e,t,s)):(Mt&&h&&wc(t),t.flags|=1,Bn(e,t,l,s),t.child)}function tf(e,t,n,l,s){if(e===null){var i=n.type;return typeof i=="function"&&!xc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,nf(e,t,i,l,s)):(e=Ki(n.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!hu(e,s)){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:rt,n(d,l)&&e.ref===t.ref)return ho(e,t,s)}return t.flags|=1,e=io(i,l),e.ref=t.ref,e.return=t,t.child=e}function nf(e,t,n,l,s){if(e!==null){var i=e.memoizedProps;if(rt(i,l)&&e.ref===t.ref)if(wn=!1,t.pendingProps=l=i,hu(e,s))(e.flags&131072)!==0&&(wn=!0);else return t.lanes=e.lanes,ho(e,t,s)}return iu(e,t,n,l,s)}function lf(e,t,n,l){var s=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~i}else l=0,t.child=null;return of(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&er(t,i!==null?i.cachePool:null),i!==null?s_(t,i):Bc(),i_(t);else return l=t.lanes=536870912,of(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(er(t,i.cachePool),s_(t,i),Xo(),t.memoizedState=null):(e!==null&&er(t,null),Bc(),Xo());return Bn(e,t,s,n),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function of(e,t,n,l,s){var i=Rc();return i=i===null?null:{parent:bn._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&er(t,null),Bc(),i_(t),e!==null&&Fa(e,t,l,!0),t.childLanes=s,null}function gr(e,t){return t=pr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function af(e,t,n){return Sa(t,e.child,null,n),e=gr(t,t.pendingProps),e.flags|=2,fl(t),t.memoizedState=null,e}function _0(e,t,n){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Mt){if(l.mode==="hidden")return e=gr(t,l),t.lanes=536870912,ei(null,e);if(Hc(t),(e=Pt)?(e=ph(e,El),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ao!==null?{id:Pl,overflow:eo}:null,retryLane:536870912,hydrationErrors:null},n=Xd(e),n.return=t,t.child=n,On=t,Pt=null)):e=null,e===null)throw Lo(t);return t.lanes=536870912,null}return gr(t,l)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if(Hc(t),s)if(t.flags&256)t.flags&=-257,t=af(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(wn||Fa(e,t,n,!1),s=(n&e.childLanes)!==0,wn||s){if(l=Qt,l!==null&&(d=il(l,n),d!==0&&d!==i.retryLane))throw i.retryLane=d,ma(e,d),sl(l,e,d),su;Mr(),t=af(e,t,n)}else e=i.treeContext,Pt=Tl(d.nextSibling),On=t,Mt=!0,Oo=null,El=!1,e!==null&&Qd(t,e),t=gr(t,l),t.flags|=4096;return t}return e=io(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function yr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function iu(e,t,n,l,s){return xa(t),n=Yc(e,t,n,l,void 0,s),l=Xc(),e!==null&&!wn?(Ic(e,t,s),ho(e,t,s)):(Mt&&l&&wc(t),t.flags|=1,Bn(e,t,n,s),t.child)}function sf(e,t,n,l,s,i){return xa(t),t.updateQueue=null,n=c_(t,l,n,s),r_(e),l=Xc(),e!==null&&!wn?(Ic(e,t,i),ho(e,t,i)):(Mt&&l&&wc(t),t.flags|=1,Bn(e,t,n,i),t.child)}function rf(e,t,n,l,s){if(xa(t),t.stateNode===null){var i=Ga,d=n.contextType;typeof d=="object"&&d!==null&&(i=Ln(d)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ou,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Dc(t),d=n.contextType,i.context=typeof d=="object"&&d!==null?Ln(d):Ga,i.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(lu(t,n,d,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&ou.enqueueReplaceState(i,i.state,null),Zs(t,l,i,s),Vs(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,w=ja(n,h);i.props=w;var B=i.context,W=n.contextType;d=Ga,typeof W=="object"&&W!==null&&(d=Ln(W));var te=n.getDerivedStateFromProps;W=typeof te=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,W||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||B!==d)&&G_(t,i,l,d),$o=!1;var H=t.memoizedState;i.state=H,Zs(t,l,i,s),Vs(),B=t.memoizedState,h||H!==B||$o?(typeof te=="function"&&(lu(t,n,te,l),B=t.memoizedState),(w=$o||W_(t,n,w,l,H,B,d))?(W||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=B),i.props=l,i.state=B,i.context=d,l=w):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Ac(e,t),d=t.memoizedProps,W=ja(n,d),i.props=W,te=t.pendingProps,H=i.context,B=n.contextType,w=Ga,typeof B=="object"&&B!==null&&(w=Ln(B)),h=n.getDerivedStateFromProps,(B=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==te||H!==w)&&G_(t,i,l,w),$o=!1,H=t.memoizedState,i.state=H,Zs(t,l,i,s),Vs();var X=t.memoizedState;d!==te||H!==X||$o||e!==null&&e.dependencies!==null&&Ji(e.dependencies)?(typeof h=="function"&&(lu(t,n,h,l),X=t.memoizedState),(W=$o||W_(t,n,W,l,H,X,w)||e!==null&&e.dependencies!==null&&Ji(e.dependencies))?(B||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,X,w),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,X,w)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=X),i.props=l,i.state=X,i.context=w,l=W):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&H===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,yr(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=Sa(t,e.child,null,s),t.child=Sa(t,null,n,s)):Bn(e,t,n,s),t.memoizedState=i.state,e=t.child):e=ho(e,t,s),e}function cf(e,t,n,l){return ya(),t.flags|=256,Bn(e,t,n,l),t.child}var ru={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cu(e){return{baseLanes:e,cachePool:Fd()}}function uu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ml),e}function uf(e,t,n){var l=t.pendingProps,s=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),d&&(s=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Mt){if(s?Yo(t):Xo(),(e=Pt)?(e=ph(e,El),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ao!==null?{id:Pl,overflow:eo}:null,retryLane:536870912,hydrationErrors:null},n=Xd(e),n.return=t,t.child=n,On=t,Pt=null)):e=null,e===null)throw Lo(t);return Wu(e)?t.lanes=32:t.lanes=536870912,null}var h=l.children;return l=l.fallback,s?(Xo(),s=t.mode,h=pr({mode:"hidden",children:h},s),l=ga(l,s,n,null),h.return=t,l.return=t,h.sibling=l,t.child=h,l=t.child,l.memoizedState=cu(n),l.childLanes=uu(e,d,n),t.memoizedState=ru,ei(null,l)):(Yo(t),du(t,h))}var w=e.memoizedState;if(w!==null&&(h=w.dehydrated,h!==null)){if(i)t.flags&256?(Yo(t),t.flags&=-257,t=_u(e,t,n)):t.memoizedState!==null?(Xo(),t.child=e.child,t.flags|=128,t=null):(Xo(),h=l.fallback,s=t.mode,l=pr({mode:"visible",children:l.children},s),h=ga(h,s,n,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,Sa(t,e.child,null,n),l=t.child,l.memoizedState=cu(n),l.childLanes=uu(e,d,n),t.memoizedState=ru,t=ei(null,l));else if(Yo(t),Wu(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var B=d.dgst;d=B,l=Error(u(419)),l.stack="",l.digest=d,Xs({value:l,source:null,stack:null}),t=_u(e,t,n)}else if(wn||Fa(e,t,n,!1),d=(n&e.childLanes)!==0,wn||d){if(d=Qt,d!==null&&(l=il(d,n),l!==0&&l!==w.retryLane))throw w.retryLane=l,ma(e,l),sl(d,e,l),su;Qu(h)||Mr(),t=_u(e,t,n)}else Qu(h)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Pt=Tl(h.nextSibling),On=t,Mt=!0,Oo=null,El=!1,e!==null&&Qd(t,e),t=du(t,l.children),t.flags|=4096);return t}return s?(Xo(),h=l.fallback,s=t.mode,w=e.child,B=w.sibling,l=io(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,B!==null?h=io(B,h):(h=ga(h,s,n,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,ei(null,l),l=t.child,h=e.child.memoizedState,h===null?h=cu(n):(s=h.cachePool,s!==null?(w=bn._currentValue,s=s.parent!==w?{parent:w,pool:w}:s):s=Fd(),h={baseLanes:h.baseLanes|n,cachePool:s}),l.memoizedState=h,l.childLanes=uu(e,d,n),t.memoizedState=ru,ei(e.child,l)):(Yo(t),n=e.child,e=n.sibling,n=io(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function du(e,t){return t=pr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function pr(e,t){return e=dl(22,e,null,t),e.lanes=0,e}function _u(e,t,n){return Sa(t,e.child,null,n),e=du(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function df(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Mc(e.return,t,n)}function fu(e,t,n,l,s,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:s,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=n,d.tailMode=s,d.treeForkCount=i)}function _f(e,t,n){var l=t.pendingProps,s=l.revealOrder,i=l.tail;l=l.children;var d=mn.current,h=(d&2)!==0;if(h?(d=d&1|2,t.flags|=128):d&=1,ce(mn,d),Bn(e,t,l,n),l=Mt?Ys:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&df(e,n,t);else if(e.tag===19)df(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&sr(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),fu(t,!1,s,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&sr(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}fu(t,!0,n,null,i,l);break;case"together":fu(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function ho(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Qo|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Fa(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=io(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=io(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function hu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Ji(e)))}function f0(e,t,n){switch(t.tag){case 3:qt(t,t.stateNode.containerInfo),Bo(t,bn,e.memoizedState.cache),ya();break;case 27:case 5:kn(t);break;case 4:qt(t,t.stateNode.containerInfo);break;case 10:Bo(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Hc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Yo(t),t.flags|=128,null):(n&t.child.childLanes)!==0?uf(e,t,n):(Yo(t),e=ho(e,t,n),e!==null?e.sibling:null);Yo(t);break;case 19:var s=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Fa(e,t,n,!1),l=(n&t.childLanes)!==0),s){if(l)return _f(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ce(mn,mn.current),l)break;return null;case 22:return t.lanes=0,lf(e,t,n,t.pendingProps);case 24:Bo(t,bn,e.memoizedState.cache)}return ho(e,t,n)}function ff(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)wn=!0;else{if(!hu(e,n)&&(t.flags&128)===0)return wn=!1,f0(e,t,n);wn=(e.flags&131072)!==0}else wn=!1,Mt&&(t.flags&1048576)!==0&&qd(t,Ys,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e=="function")xc(e)?(l=ja(e,l),t.tag=1,t=rf(null,t,e,l,n)):(t.tag=0,t=iu(null,t,e,l,n));else{if(e!=null){var s=e.$$typeof;if(s===be){t.tag=11,t=ef(null,t,e,l,n);break e}else if(s===K){t.tag=14,t=tf(null,t,e,l,n);break e}}throw t=ze(e)||e,Error(u(306,t,""))}}return t;case 0:return iu(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,s=ja(l,t.pendingProps),rf(e,t,l,s,n);case 3:e:{if(qt(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;s=i.element,Ac(e,t),Zs(t,l,null,n);var d=t.memoizedState;if(l=d.cache,Bo(t,bn,l),l!==i.cache&&Ec(t,[bn],n,!0),Vs(),l=d.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=cf(e,t,l,n);break e}else if(l!==s){s=jl(Error(u(424)),t),Xs(s),t=cf(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Pt=Tl(e.firstChild),On=t,Mt=!0,Oo=null,El=!0,n=l_(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ya(),l===s){t=ho(e,t,n);break e}Bn(e,t,l,n)}t=t.child}return t;case 26:return yr(e,t),e===null?(n=kh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Mt||(n=t.type,e=t.pendingProps,l=Ar(at.current).createElement(n),l[cn]=t,l[Yn]=e,$n(l,n,e),pn(l),t.stateNode=l):t.memoizedState=kh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return kn(t),e===null&&Mt&&(l=t.stateNode=vh(t.type,t.pendingProps,at.current),On=t,El=!0,s=Pt,Ko(t.type)?(Gu=s,Pt=Tl(l.firstChild)):Pt=s),Bn(e,t,t.pendingProps.children,n),yr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Mt&&((s=l=Pt)&&(l=I0(l,t.type,t.pendingProps,El),l!==null?(t.stateNode=l,On=t,Pt=Tl(l.firstChild),El=!1,s=!0):s=!1),s||Lo(t)),kn(t),s=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,l=i.children,Xu(s,i)?l=null:d!==null&&Xu(s,d)&&(t.flags|=32),t.memoizedState!==null&&(s=Yc(e,t,o0,null,null,n),mi._currentValue=s),yr(e,t),Bn(e,t,l,n),t.child;case 6:return e===null&&Mt&&((e=n=Pt)&&(n=q0(n,t.pendingProps,El),n!==null?(t.stateNode=n,On=t,Pt=null,e=!0):e=!1),e||Lo(t)),null;case 13:return uf(e,t,n);case 4:return qt(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=Sa(t,null,l,n):Bn(e,t,l,n),t.child;case 11:return ef(e,t,t.type,t.pendingProps,n);case 7:return Bn(e,t,t.pendingProps,n),t.child;case 8:return Bn(e,t,t.pendingProps.children,n),t.child;case 12:return Bn(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Bo(t,t.type,l.value),Bn(e,t,l.children,n),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,xa(t),s=Ln(s),l=l(s),t.flags|=1,Bn(e,t,l,n),t.child;case 14:return tf(e,t,t.type,t.pendingProps,n);case 15:return nf(e,t,t.type,t.pendingProps,n);case 19:return _f(e,t,n);case 31:return _0(e,t,n);case 22:return lf(e,t,n,t.pendingProps);case 24:return xa(t),l=Ln(bn),e===null?(s=Rc(),s===null&&(s=Qt,i=Nc(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=n),s=i),t.memoizedState={parent:l,cache:s},Dc(t),Bo(t,bn,s)):((e.lanes&n)!==0&&(Ac(e,t),Zs(t,null,null,n),Vs()),s=e.memoizedState,i=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Bo(t,bn,l)):(l=i.cache,Bo(t,bn,l),l!==s.cache&&Ec(t,[bn],n,!0))),Bn(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function mo(e){e.flags|=4}function mu(e,t,n,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if(Uf())e.flags|=8192;else throw wa=nr,zc}else e.flags&=-16777217}function hf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Nh(t))if(Uf())e.flags|=8192;else throw wa=nr,zc}function xr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?$e():536870912,e.lanes|=t,cs|=t)}function ti(e,t){if(!Mt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function en(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function h0(e,t,n){var l=t.pendingProps;switch(Sc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(t),null;case 1:return en(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),uo(bn),Et(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ka(t)?mo(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jc())),en(t),null;case 26:var s=t.type,i=t.memoizedState;return e===null?(mo(t),i!==null?(en(t),hf(t,i)):(en(t),mu(t,s,null,l,n))):i?i!==e.memoizedState?(mo(t),en(t),hf(t,i)):(en(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&mo(t),en(t),mu(t,s,e,l,n)),null;case 27:if(rn(t),n=at.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&mo(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return en(t),null}e=xe.current,Ka(t)?Wd(t):(e=vh(s,l,n),t.stateNode=e,mo(t))}return en(t),null;case 5:if(rn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&mo(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return en(t),null}if(i=xe.current,Ka(t))Wd(t);else{var d=Ar(at.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?d.createElement(s,{is:l.is}):d.createElement(s)}}i[cn]=t,i[Yn]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch($n(i,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&mo(t)}}return en(t),mu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&mo(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=at.current,Ka(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,s=On,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[cn]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||uh(e.nodeValue,n)),e||Lo(t,!0)}else e=Ar(e).createTextNode(l),e[cn]=t,t.stateNode=e}return en(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ka(t),n!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[cn]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;en(t),e=!1}else n=jc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fl(t),t):(fl(t),null);if((t.flags&128)!==0)throw Error(u(558))}return en(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Ka(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[cn]=t}else ya(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;en(t),s=!1}else s=jc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(fl(t),t):(fl(t),null)}return fl(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==s&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),xr(t,t.updateQueue),en(t),null);case 4:return Et(),e===null&&Bu(t.stateNode.containerInfo),en(t),null;case 10:return uo(t.type),en(t),null;case 19:if(I(mn),l=t.memoizedState,l===null)return en(t),null;if(s=(t.flags&128)!==0,i=l.rendering,i===null)if(s)ti(l,!1);else{if(dn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=sr(e),i!==null){for(t.flags|=128,ti(l,!1),e=i.updateQueue,t.updateQueue=e,xr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Yd(n,e),n=n.sibling;return ce(mn,mn.current&1|2),Mt&&ro(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&nt()>kr&&(t.flags|=128,s=!0,ti(l,!1),t.lanes=4194304)}else{if(!s)if(e=sr(i),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,xr(t,e),ti(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Mt)return en(t),null}else 2*nt()-l.renderingStartTime>kr&&n!==536870912&&(t.flags|=128,s=!0,ti(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=nt(),e.sibling=null,n=mn.current,ce(mn,s?n&1|2:n&1),Mt&&ro(t,l.treeForkCount),e):(en(t),null);case 22:case 23:return fl(t),$c(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(en(t),t.subtreeFlags&6&&(t.flags|=8192)):en(t),n=t.updateQueue,n!==null&&xr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&I(ba),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),uo(bn),en(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function m0(e,t){switch(Sc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return uo(bn),Et(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return rn(t),null;case 31:if(t.memoizedState!==null){if(fl(t),t.alternate===null)throw Error(u(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));ya()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return I(mn),null;case 4:return Et(),null;case 10:return uo(t.type),null;case 22:case 23:return fl(t),$c(),e!==null&&I(ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return uo(bn),null;case 25:return null;default:return null}}function mf(e,t){switch(Sc(t),t.tag){case 3:uo(bn),Et();break;case 26:case 27:case 5:rn(t);break;case 4:Et();break;case 31:t.memoizedState!==null&&fl(t);break;case 13:fl(t);break;case 19:I(mn);break;case 10:uo(t.type);break;case 22:case 23:fl(t),$c(),e!==null&&I(ba);break;case 24:uo(bn)}}function ni(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var s=l.next;n=s;do{if((n.tag&e)===e){l=void 0;var i=n.create,d=n.inst;l=i(),d.destroy=l}n=n.next}while(n!==s)}}catch(h){$t(t,t.return,h)}}function Io(e,t,n){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var i=s.next;l=i;do{if((l.tag&e)===e){var d=l.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,s=t;var w=n,B=h;try{B()}catch(W){$t(s,w,W)}}}l=l.next}while(l!==i)}}catch(W){$t(t,t.return,W)}}function gf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{a_(t,n)}catch(l){$t(e,e.return,l)}}}function yf(e,t,n){n.props=ja(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){$t(e,t,l)}}function li(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(s){$t(e,t,s)}}function to(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(s){$t(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){$t(e,t,s)}else n.current=null}function pf(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(s){$t(e,e.return,s)}}function gu(e,t,n){try{var l=e.stateNode;B0(l,e.type,n,t),l[Yn]=t}catch(s){$t(e,e.return,s)}}function xf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ko(e.type)||e.tag===4}function yu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||xf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ko(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zl));else if(l!==4&&(l===27&&Ko(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(pu(e,t,n),e=e.sibling;e!==null;)pu(e,t,n),e=e.sibling}function br(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Ko(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(br(e,t,n),e=e.sibling;e!==null;)br(e,t,n),e=e.sibling}function bf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);$n(t,l,n),t[cn]=e,t[Yn]=n}catch(i){$t(e,e.return,i)}}var go=!1,Sn=!1,xu=!1,vf=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function g0(e,t){if(e=e.containerInfo,Uu=Yr,e=Zn(e),hn(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var s=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var d=0,h=-1,w=-1,B=0,W=0,te=e,H=null;t:for(;;){for(var X;te!==n||s!==0&&te.nodeType!==3||(h=d+s),te!==i||l!==0&&te.nodeType!==3||(w=d+l),te.nodeType===3&&(d+=te.nodeValue.length),(X=te.firstChild)!==null;)H=te,te=X;for(;;){if(te===e)break t;if(H===n&&++B===s&&(h=d),H===i&&++W===l&&(w=d),(X=te.nextSibling)!==null)break;te=H,H=te.parentNode}te=X}n=h===-1||w===-1?null:{start:h,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yu={focusedElem:e,selectionRange:n},Yr=!1,Rn=t;Rn!==null;)if(t=Rn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Rn=e;else for(;Rn!==null;){switch(t=Rn,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,s=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var Ne=ja(n.type,s);e=l.getSnapshotBeforeUpdate(Ne,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(Pe){$t(n,n.return,Pe)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Rn=e;break}Rn=t.return}}function wf(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:po(e,n),l&4&&ni(5,n);break;case 1:if(po(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){$t(n,n.return,d)}else{var s=ja(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){$t(n,n.return,d)}}l&64&&gf(n),l&512&&li(n,n.return);break;case 3:if(po(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{a_(e,t)}catch(d){$t(n,n.return,d)}}break;case 27:t===null&&l&4&&bf(n);case 26:case 5:po(e,n),t===null&&l&4&&pf(n),l&512&&li(n,n.return);break;case 12:po(e,n);break;case 31:po(e,n),l&4&&jf(e,n);break;case 13:po(e,n),l&4&&Cf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=j0.bind(null,n),Q0(e,n))));break;case 22:if(l=n.memoizedState!==null||go,!l){t=t!==null&&t.memoizedState!==null||Sn,s=go;var i=Sn;go=l,(Sn=t)&&!i?xo(e,n,(n.subtreeFlags&8772)!==0):po(e,n),go=s,Sn=i}break;case 30:break;default:po(e,n)}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Da(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ln=null,nl=!1;function yo(e,t,n){for(n=n.child;n!==null;)kf(e,t,n),n=n.sibling}function kf(e,t,n){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(ke,n)}catch{}switch(n.tag){case 26:Sn||to(n,t),yo(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Sn||to(n,t);var l=ln,s=nl;Ko(n.type)&&(ln=n.stateNode,nl=!1),yo(e,t,n),_i(n.stateNode),ln=l,nl=s;break;case 5:Sn||to(n,t);case 6:if(l=ln,s=nl,ln=null,yo(e,t,n),ln=l,nl=s,ln!==null)if(nl)try{(ln.nodeType===9?ln.body:ln.nodeName==="HTML"?ln.ownerDocument.body:ln).removeChild(n.stateNode)}catch(i){$t(n,t,i)}else try{ln.removeChild(n.stateNode)}catch(i){$t(n,t,i)}break;case 18:ln!==null&&(nl?(e=ln,gh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),ys(e)):gh(ln,n.stateNode));break;case 4:l=ln,s=nl,ln=n.stateNode.containerInfo,nl=!0,yo(e,t,n),ln=l,nl=s;break;case 0:case 11:case 14:case 15:Io(2,n,t),Sn||Io(4,n,t),yo(e,t,n);break;case 1:Sn||(to(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&yf(n,t,l)),yo(e,t,n);break;case 21:yo(e,t,n);break;case 22:Sn=(l=Sn)||n.memoizedState!==null,yo(e,t,n),Sn=l;break;default:yo(e,t,n)}}function jf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ys(e)}catch(n){$t(t,t.return,n)}}}function Cf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ys(e)}catch(n){$t(t,t.return,n)}}function y0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vf),t;default:throw Error(u(435,e.tag))}}function vr(e,t){var n=y0(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var s=C0.bind(null,e,l);l.then(s,s)}})}function ll(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var s=n[l],i=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Ko(h.type)){ln=h.stateNode,nl=!1;break e}break;case 5:ln=h.stateNode,nl=!1;break e;case 3:case 4:ln=h.stateNode.containerInfo,nl=!0;break e}h=h.return}if(ln===null)throw Error(u(160));kf(i,d,s),ln=null,nl=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}var Bl=null;function Mf(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ll(t,e),ol(e),l&4&&(Io(3,e,e.return),ni(3,e),Io(5,e,e.return));break;case 1:ll(t,e),ol(e),l&512&&(Sn||n===null||to(n,n.return)),l&64&&go&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var s=Bl;if(ll(t,e),ol(e),l&512&&(Sn||n===null||to(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":i=s.getElementsByTagName("title")[0],(!i||i[aa]||i[cn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(l),s.head.insertBefore(i,s.querySelector("head > title"))),$n(i,l,n),i[cn]=e,pn(i),l=i;break e;case"link":var d=Mh("link","href",s).get(l+(n.href||""));if(d){for(var h=0;h<d.length;h++)if(i=d[h],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(h,1);break t}}i=s.createElement(l),$n(i,l,n),s.head.appendChild(i);break;case"meta":if(d=Mh("meta","content",s).get(l+(n.content||""))){for(h=0;h<d.length;h++)if(i=d[h],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(h,1);break t}}i=s.createElement(l),$n(i,l,n),s.head.appendChild(i);break;default:throw Error(u(468,l))}i[cn]=e,pn(i),l=i}e.stateNode=l}else Eh(s,e.type,e.stateNode);else e.stateNode=Ch(s,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?Eh(s,e.type,e.stateNode):Ch(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&gu(e,e.memoizedProps,n.memoizedProps)}break;case 27:ll(t,e),ol(e),l&512&&(Sn||n===null||to(n,n.return)),n!==null&&l&4&&gu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ll(t,e),ol(e),l&512&&(Sn||n===null||to(n,n.return)),e.flags&32){s=e.stateNode;try{Eo(s,"")}catch(Ne){$t(e,e.return,Ne)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,gu(e,s,n!==null?n.memoizedProps:s)),l&1024&&(xu=!0);break;case 6:if(ll(t,e),ol(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(Ne){$t(e,e.return,Ne)}}break;case 3:if(Br=null,s=Bl,Bl=Or(t.containerInfo),ll(t,e),Bl=s,ol(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{ys(t.containerInfo)}catch(Ne){$t(e,e.return,Ne)}xu&&(xu=!1,Ef(e));break;case 4:l=Bl,Bl=Or(e.stateNode.containerInfo),ll(t,e),ol(e),Bl=l;break;case 12:ll(t,e),ol(e);break;case 31:ll(t,e),ol(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vr(e,l)));break;case 13:ll(t,e),ol(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Sr=nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vr(e,l)));break;case 22:s=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,B=go,W=Sn;if(go=B||s,Sn=W||w,ll(t,e),Sn=W,go=B,ol(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||w||go||Sn||Ca(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(i=w.stateNode,s)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=w.stateNode;var te=w.memoizedProps.style,H=te!=null&&te.hasOwnProperty("display")?te.display:null;h.style.display=H==null||typeof H=="boolean"?"":(""+H).trim()}}catch(Ne){$t(w,w.return,Ne)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=s?"":w.memoizedProps}catch(Ne){$t(w,w.return,Ne)}}}else if(t.tag===18){if(n===null){w=t;try{var X=w.stateNode;s?yh(X,!0):yh(w.stateNode,!1)}catch(Ne){$t(w,w.return,Ne)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,vr(e,n))));break;case 19:ll(t,e),ol(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,vr(e,l)));break;case 30:break;case 21:break;default:ll(t,e),ol(e)}}function ol(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(xf(l)){n=l;break}l=l.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var s=n.stateNode,i=yu(e);br(e,i,s);break;case 5:var d=n.stateNode;n.flags&32&&(Eo(d,""),n.flags&=-33);var h=yu(e);br(e,h,d);break;case 3:case 4:var w=n.stateNode.containerInfo,B=yu(e);pu(e,B,w);break;default:throw Error(u(161))}}catch(W){$t(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function po(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)wf(e,t.alternate,t),t=t.sibling}function Ca(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Io(4,t,t.return),Ca(t);break;case 1:to(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&yf(t,t.return,n),Ca(t);break;case 27:_i(t.stateNode);case 26:case 5:to(t,t.return),Ca(t);break;case 22:t.memoizedState===null&&Ca(t);break;case 30:Ca(t);break;default:Ca(t)}e=e.sibling}}function xo(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:xo(s,i,n),ni(4,i);break;case 1:if(xo(s,i,n),l=i,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(B){$t(l,l.return,B)}if(l=i,s=l.updateQueue,s!==null){var h=l.stateNode;try{var w=s.shared.hiddenCallbacks;if(w!==null)for(s.shared.hiddenCallbacks=null,s=0;s<w.length;s++)o_(w[s],h)}catch(B){$t(l,l.return,B)}}n&&d&64&&gf(i),li(i,i.return);break;case 27:bf(i);case 26:case 5:xo(s,i,n),n&&l===null&&d&4&&pf(i),li(i,i.return);break;case 12:xo(s,i,n);break;case 31:xo(s,i,n),n&&d&4&&jf(s,i);break;case 13:xo(s,i,n),n&&d&4&&Cf(s,i);break;case 22:i.memoizedState===null&&xo(s,i,n),li(i,i.return);break;case 30:break;default:xo(s,i,n)}t=t.sibling}}function bu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Is(n))}function vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e))}function $l(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nf(e,t,n,l),t=t.sibling}function Nf(e,t,n,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:$l(e,t,n,l),s&2048&&ni(9,t);break;case 1:$l(e,t,n,l);break;case 3:$l(e,t,n,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Is(e)));break;case 12:if(s&2048){$l(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,h=i.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){$t(t,t.return,w)}}else $l(e,t,n,l);break;case 31:$l(e,t,n,l);break;case 13:$l(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?$l(e,t,n,l):oi(e,t):i._visibility&2?$l(e,t,n,l):(i._visibility|=2,ss(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&bu(d,t);break;case 24:$l(e,t,n,l),s&2048&&vu(t.alternate,t);break;default:$l(e,t,n,l)}}function ss(e,t,n,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,h=n,w=l,B=d.flags;switch(d.tag){case 0:case 11:case 15:ss(i,d,h,w,s),ni(8,d);break;case 23:break;case 22:var W=d.stateNode;d.memoizedState!==null?W._visibility&2?ss(i,d,h,w,s):oi(i,d):(W._visibility|=2,ss(i,d,h,w,s)),s&&B&2048&&bu(d.alternate,d);break;case 24:ss(i,d,h,w,s),s&&B&2048&&vu(d.alternate,d);break;default:ss(i,d,h,w,s)}t=t.sibling}}function oi(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,s=l.flags;switch(l.tag){case 22:oi(n,l),s&2048&&bu(l.alternate,l);break;case 24:oi(n,l),s&2048&&vu(l.alternate,l);break;default:oi(n,l)}t=t.sibling}}var ai=8192;function is(e,t,n){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)Tf(e,t,n),e=e.sibling}function Tf(e,t,n){switch(e.tag){case 26:is(e,t,n),e.flags&ai&&e.memoizedState!==null&&lg(n,Bl,e.memoizedState,e.memoizedProps);break;case 5:is(e,t,n);break;case 3:case 4:var l=Bl;Bl=Or(e.stateNode.containerInfo),is(e,t,n),Bl=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ai,ai=16777216,is(e,t,n),ai=l):is(e,t,n));break;default:is(e,t,n)}}function Rf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Rn=l,Df(l,e)}Rf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zf(e),e=e.sibling}function zf(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&Io(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,wr(e)):si(e);break;default:si(e)}}function wr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Rn=l,Df(l,e)}Rf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Io(8,t,t.return),wr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,wr(t));break;default:wr(t)}e=e.sibling}}function Df(e,t){for(;Rn!==null;){var n=Rn;switch(n.tag){case 0:case 11:case 15:Io(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Is(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Rn=l;else e:for(n=e;Rn!==null;){l=Rn;var s=l.sibling,i=l.return;if(Sf(l),l===n){Rn=null;break e}if(s!==null){s.return=i,Rn=s;break e}Rn=i}}}var p0={getCacheForType:function(e){var t=Ln(bn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ln(bn).controller.signal}},x0=typeof WeakMap=="function"?WeakMap:Map,zt=0,Qt=null,wt=null,kt=0,Bt=0,hl=null,qo=!1,rs=!1,wu=!1,bo=0,dn=0,Qo=0,Ma=0,Su=0,ml=0,cs=0,ii=null,al=null,ku=!1,Sr=0,Af=0,kr=1/0,jr=null,Wo=null,Cn=0,Go=null,us=null,vo=0,ju=0,Cu=null,Of=null,ri=0,Mu=null;function gl(){return(zt&2)!==0&&kt!==0?kt&-kt:v.T!==null?Du():oa()}function Lf(){if(ml===0)if((kt&536870912)===0||Mt){var e=Q;Q<<=1,(Q&3932160)===0&&(Q=262144),ml=e}else ml=536870912;return e=_l.current,e!==null&&(e.flags|=32),ml}function sl(e,t,n){(e===Qt&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)&&(ds(e,0),Vo(e,kt,ml,!1)),lt(e,n),((zt&2)===0||e!==Qt)&&(e===Qt&&((zt&2)===0&&(Ma|=n),dn===4&&Vo(e,kt,ml,!1)),no(e))}function Bf(e,t,n){if((zt&6)!==0)throw Error(u(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||ut(e,t),s=l?w0(e,t):Nu(e,t,!0),i=l;do{if(s===0){rs&&!l&&Vo(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!b0(n)){s=Nu(e,t,!1),i=!1;continue}if(s===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;s=ii;var w=h.current.memoizedState.isDehydrated;if(w&&(ds(h,d).flags|=256),d=Nu(h,d,!1),d!==2){if(wu&&!w){h.errorRecoveryDisabledLanes|=i,Ma|=i,s=4;break e}i=al,al=s,i!==null&&(al===null?al=i:al.push.apply(al,i))}s=d}if(i=!1,s!==2)continue}}if(s===1){ds(e,0),Vo(e,t,0,!0);break}e:{switch(l=e,i=s,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Vo(l,t,ml,!qo);break e;case 2:al=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(s=Sr+300-nt(),10<s)){if(Vo(l,t,ml,!qo),fe(l,0,!0)!==0)break e;vo=t,l.timeoutHandle=hh($f.bind(null,l,n,al,jr,ku,t,ml,Ma,cs,qo,i,"Throttled",-0,0),s);break e}$f(l,n,al,jr,ku,t,ml,Ma,cs,qo,i,null,-0,0)}}break}while(!0);no(e)}function $f(e,t,n,l,s,i,d,h,w,B,W,te,H,X){if(e.timeoutHandle=-1,te=t.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zl},Tf(t,i,te);var Ne=(i&62914560)===i?Sr-nt():(i&4194048)===i?Af-nt():0;if(Ne=og(te,Ne),Ne!==null){vo=i,e.cancelPendingCommit=Ne(Wf.bind(null,e,t,i,n,l,s,d,h,w,W,te,null,H,X)),Vo(e,i,d,!B);return}}Wf(e,t,i,n,l,s,d,h,w)}function b0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var s=n[l],i=s.getSnapshot;s=s.value;try{if(!Le(i(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Vo(e,t,n,l){t&=~Su,t&=~Ma,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var i=31-Be(s),d=1<<i;l[i]=-1,s&=~d}n!==0&&Kt(e,n,t)}function Cr(){return(zt&6)===0?(ci(0),!1):!0}function Eu(){if(wt!==null){if(Bt===0)var e=wt.return;else e=wt,co=pa=null,qc(e),ts=null,Qs=0,e=wt;for(;e!==null;)mf(e.alternate,e),e=e.return;wt=null}}function ds(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,U0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),vo=0,Eu(),Qt=e,wt=n=io(e.current,null),kt=t,Bt=0,hl=null,qo=!1,rs=ut(e,t),wu=!1,cs=ml=Su=Ma=Qo=dn=0,al=ii=null,ku=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-Be(l),i=1<<s;t|=e[s],l&=~i}return bo=t,Gi(),n}function Hf(e,t){ft=null,v.H=Ps,t===es||t===tr?(t=e_(),Bt=3):t===zc?(t=e_(),Bt=4):Bt=t===su?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,hl=t,wt===null&&(dn=1,mr(e,jl(t,e.current)))}function Uf(){var e=_l.current;return e===null?!0:(kt&4194048)===kt?Nl===null:(kt&62914560)===kt||(kt&536870912)!==0?e===Nl:!1}function Yf(){var e=v.H;return v.H=Ps,e===null?Ps:e}function Xf(){var e=v.A;return v.A=p0,e}function Mr(){dn=4,qo||(kt&4194048)!==kt&&_l.current!==null||(rs=!0),(Qo&134217727)===0&&(Ma&134217727)===0||Qt===null||Vo(Qt,kt,ml,!1)}function Nu(e,t,n){var l=zt;zt|=2;var s=Yf(),i=Xf();(Qt!==e||kt!==t)&&(jr=null,ds(e,t)),t=!1;var d=dn;e:do try{if(Bt!==0&&wt!==null){var h=wt,w=hl;switch(Bt){case 8:Eu(),d=6;break e;case 3:case 2:case 9:case 6:_l.current===null&&(t=!0);var B=Bt;if(Bt=0,hl=null,_s(e,h,w,B),n&&rs){d=0;break e}break;default:B=Bt,Bt=0,hl=null,_s(e,h,w,B)}}v0(),d=dn;break}catch(W){Hf(e,W)}while(!0);return t&&e.shellSuspendCounter++,co=pa=null,zt=l,v.H=s,v.A=i,wt===null&&(Qt=null,kt=0,Gi()),d}function v0(){for(;wt!==null;)If(wt)}function w0(e,t){var n=zt;zt|=2;var l=Yf(),s=Xf();Qt!==e||kt!==t?(jr=null,kr=nt()+500,ds(e,t)):rs=ut(e,t);e:do try{if(Bt!==0&&wt!==null){t=wt;var i=hl;t:switch(Bt){case 1:Bt=0,hl=null,_s(e,t,i,1);break;case 2:case 9:if(Jd(i)){Bt=0,hl=null,qf(t);break}t=function(){Bt!==2&&Bt!==9||Qt!==e||(Bt=7),no(e)},i.then(t,t);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Jd(i)?(Bt=0,hl=null,qf(t)):(Bt=0,hl=null,_s(e,t,i,7));break;case 5:var d=null;switch(wt.tag){case 26:d=wt.memoizedState;case 5:case 27:var h=wt;if(d?Nh(d):h.stateNode.complete){Bt=0,hl=null;var w=h.sibling;if(w!==null)wt=w;else{var B=h.return;B!==null?(wt=B,Er(B)):wt=null}break t}}Bt=0,hl=null,_s(e,t,i,5);break;case 6:Bt=0,hl=null,_s(e,t,i,6);break;case 8:Eu(),dn=6;break e;default:throw Error(u(462))}}S0();break}catch(W){Hf(e,W)}while(!0);return co=pa=null,v.H=l,v.A=s,zt=n,wt!==null?0:(Qt=null,kt=0,Gi(),dn)}function S0(){for(;wt!==null&&!ct();)If(wt)}function If(e){var t=ff(e.alternate,e,bo);e.memoizedProps=e.pendingProps,t===null?Er(e):wt=t}function qf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=sf(n,t,t.pendingProps,t.type,void 0,kt);break;case 11:t=sf(n,t,t.pendingProps,t.type.render,t.ref,kt);break;case 5:qc(t);default:mf(n,t),t=wt=Yd(t,bo),t=ff(n,t,bo)}e.memoizedProps=e.pendingProps,t===null?Er(e):wt=t}function _s(e,t,n,l){co=pa=null,qc(t),ts=null,Qs=0;var s=t.return;try{if(d0(e,s,t,n,kt)){dn=1,mr(e,jl(n,e.current)),wt=null;return}}catch(i){if(s!==null)throw wt=s,i;dn=1,mr(e,jl(n,e.current)),wt=null;return}t.flags&32768?(Mt||l===1?e=!0:rs||(kt&536870912)!==0?e=!1:(qo=e=!0,(l===2||l===9||l===3||l===6)&&(l=_l.current,l!==null&&l.tag===13&&(l.flags|=16384))),Qf(t,e)):Er(t)}function Er(e){var t=e;do{if((t.flags&32768)!==0){Qf(t,qo);return}e=t.return;var n=h0(t.alternate,t,bo);if(n!==null){wt=n;return}if(t=t.sibling,t!==null){wt=t;return}wt=t=e}while(t!==null);dn===0&&(dn=5)}function Qf(e,t){do{var n=m0(e.alternate,e);if(n!==null){n.flags&=32767,wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){wt=e;return}wt=e=n}while(e!==null);dn=6,wt=null}function Wf(e,t,n,l,s,i,d,h,w){e.cancelPendingCommit=null;do Nr();while(Cn!==0);if((zt&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=yc,En(e,n,i,d,h,w),e===Qt&&(wt=Qt=null,kt=0),us=t,Go=e,vo=n,ju=i,Cu=s,Of=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,M0(Ae,function(){return Ff(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=v.T,v.T=null,s=F.p,F.p=2,d=zt,zt|=4;try{g0(e,t,n)}finally{zt=d,F.p=s,v.T=l}}Cn=1,Gf(),Vf(),Zf()}}function Gf(){if(Cn===1){Cn=0;var e=Go,t=us,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=v.T,v.T=null;var l=F.p;F.p=2;var s=zt;zt|=4;try{Mf(t,e);var i=Yu,d=Zn(e.containerInfo),h=i.focusedElem,w=i.selectionRange;if(d!==h&&h&&h.ownerDocument&&el(h.ownerDocument.documentElement,h)){if(w!==null&&hn(h)){var B=w.start,W=w.end;if(W===void 0&&(W=B),"selectionStart"in h)h.selectionStart=B,h.selectionEnd=Math.min(W,h.value.length);else{var te=h.ownerDocument||document,H=te&&te.defaultView||window;if(H.getSelection){var X=H.getSelection(),Ne=h.textContent.length,Pe=Math.min(w.start,Ne),Xt=w.end===void 0?Pe:Math.min(w.end,Ne);!X.extend&&Pe>Xt&&(d=Xt,Xt=Pe,Pe=d);var z=Jt(h,Pe),N=Jt(h,Xt);if(z&&N&&(X.rangeCount!==1||X.anchorNode!==z.node||X.anchorOffset!==z.offset||X.focusNode!==N.node||X.focusOffset!==N.offset)){var O=te.createRange();O.setStart(z.node,z.offset),X.removeAllRanges(),Pe>Xt?(X.addRange(O),X.extend(N.node,N.offset)):(O.setEnd(N.node,N.offset),X.addRange(O))}}}}for(te=[],X=h;X=X.parentNode;)X.nodeType===1&&te.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<te.length;h++){var ee=te[h];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}Yr=!!Uu,Yu=Uu=null}finally{zt=s,F.p=l,v.T=n}}e.current=t,Cn=2}}function Vf(){if(Cn===2){Cn=0;var e=Go,t=us,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=v.T,v.T=null;var l=F.p;F.p=2;var s=zt;zt|=4;try{wf(e,t.alternate,t)}finally{zt=s,F.p=l,v.T=n}}Cn=3}}function Zf(){if(Cn===4||Cn===3){Cn=0,vt();var e=Go,t=us,n=vo,l=Of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Cn=5:(Cn=0,us=Go=null,Kf(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Wo=null),Ul(n),t=t.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(ke,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=v.T,s=F.p,F.p=2,v.T=null;try{for(var i=e.onRecoverableError,d=0;d<l.length;d++){var h=l[d];i(h.value,{componentStack:h.stack})}}finally{v.T=t,F.p=s}}(vo&3)!==0&&Nr(),no(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Mu?ri++:(ri=0,Mu=e):ri=0,ci(0)}}function Kf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Is(t)))}function Nr(){return Gf(),Vf(),Zf(),Ff()}function Ff(){if(Cn!==5)return!1;var e=Go,t=ju;ju=0;var n=Ul(vo),l=v.T,s=F.p;try{F.p=32>n?32:n,v.T=null,n=Cu,Cu=null;var i=Go,d=vo;if(Cn=0,us=Go=null,vo=0,(zt&6)!==0)throw Error(u(331));var h=zt;if(zt|=4,zf(i.current),Nf(i,i.current,d,n),zt=h,ci(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(ke,i)}catch{}return!0}finally{F.p=s,v.T=l,Kf(e,t)}}function Jf(e,t,n){t=jl(n,t),t=au(e.stateNode,t,2),e=Uo(e,t,2),e!==null&&(lt(e,2),no(e))}function $t(e,t,n){if(e.tag===3)Jf(e,e,n);else for(;t!==null;){if(t.tag===3){Jf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wo===null||!Wo.has(l))){e=jl(n,e),n=J_(2),l=Uo(t,n,2),l!==null&&(P_(n,l,t,e),lt(l,2),no(l));break}}t=t.return}}function Tu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new x0;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(n)||(wu=!0,s.add(n),e=k0.bind(null,e,t,n),t.then(e,e))}function k0(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qt===e&&(kt&n)===n&&(dn===4||dn===3&&(kt&62914560)===kt&&300>nt()-Sr?(zt&2)===0&&ds(e,0):Su|=n,cs===kt&&(cs=0)),no(e)}function Pf(e,t){t===0&&(t=$e()),e=ma(e,t),e!==null&&(lt(e,t),no(e))}function j0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Pf(e,n)}function C0(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Pf(e,n)}function M0(e,t){return st(e,t)}var Tr=null,fs=null,Ru=!1,Rr=!1,zu=!1,Zo=0;function no(e){e!==fs&&e.next===null&&(fs===null?Tr=fs=e:fs=fs.next=e),Rr=!0,Ru||(Ru=!0,N0())}function ci(e,t){if(!zu&&Rr){zu=!0;do for(var n=!1,l=Tr;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var i=0;else{var d=l.suspendedLanes,h=l.pingedLanes;i=(1<<31-Be(42|e)+1)-1,i&=s&~(d&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,lh(l,i))}else i=kt,i=fe(l,l===Qt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||ut(l,i)||(n=!0,lh(l,i));l=l.next}while(n);zu=!1}}function E0(){eh()}function eh(){Rr=Ru=!1;var e=0;Zo!==0&&H0()&&(e=Zo);for(var t=nt(),n=null,l=Tr;l!==null;){var s=l.next,i=th(l,t);i===0?(l.next=null,n===null?Tr=s:n.next=s,s===null&&(fs=n)):(n=l,(e!==0||(i&3)!==0)&&(Rr=!0)),l=s}Cn!==0&&Cn!==5||ci(e),Zo!==0&&(Zo=0)}function th(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-Be(i),h=1<<d,w=s[d];w===-1?((h&n)===0||(h&l)!==0)&&(s[d]=Se(h,t)):w<=t&&(e.expiredLanes|=h),i&=~h}if(t=Qt,n=kt,n=fe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Bt===2||Bt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Ie(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ut(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Ie(l),Ul(n)){case 2:case 8:n=At;break;case 32:n=Ae;break;case 268435456:n=L;break;default:n=Ae}return l=nh.bind(null,e),n=st(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Ie(l),e.callbackPriority=2,e.callbackNode=null,2}function nh(e,t){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Nr()&&e.callbackNode!==n)return null;var l=kt;return l=fe(e,e===Qt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bf(e,l,t),th(e,nt()),e.callbackNode!=null&&e.callbackNode===n?nh.bind(null,e):null)}function lh(e,t){if(Nr())return null;Bf(e,t,!0)}function N0(){Y0(function(){(zt&6)!==0?st(mt,E0):eh()})}function Du(){if(Zo===0){var e=Ja;e===0&&(e=Te,Te<<=1,(Te&261888)===0&&(Te=256)),Zo=e}return Zo}function oh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ra(""+e)}function ah(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function T0(e,t,n,l,s){if(t==="submit"&&n&&n.stateNode===s){var i=oh((s[Yn]||null).action),d=l.submitter;d&&(t=(t=d[Yn]||null)?oh(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var h=new Ba("action","action",null,l,s);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Zo!==0){var w=d?ah(s,d):new FormData(s);Pc(n,{pending:!0,data:w,method:s.method,action:i},null,w)}}else typeof i=="function"&&(h.preventDefault(),w=d?ah(s,d):new FormData(s),Pc(n,{pending:!0,data:w,method:s.method,action:i},i,w))},currentTarget:s}]})}}for(var Au=0;Au<gc.length;Au++){var Ou=gc[Au],R0=Ou.toLowerCase(),z0=Ou[0].toUpperCase()+Ou.slice(1);Ll(R0,"on"+z0)}Ll(Od,"onAnimationEnd"),Ll(Ld,"onAnimationIteration"),Ll(Bd,"onAnimationStart"),Ll("dblclick","onDoubleClick"),Ll("focusin","onFocus"),Ll("focusout","onBlur"),Ll(Vm,"onTransitionRun"),Ll(Zm,"onTransitionStart"),Ll(Km,"onTransitionCancel"),Ll($d,"onTransitionEnd"),Tn("onMouseEnter",["mouseout","mouseover"]),Tn("onMouseLeave",["mouseout","mouseover"]),Tn("onPointerEnter",["pointerout","pointerover"]),Tn("onPointerLeave",["pointerout","pointerover"]),pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pl("onBeforeInput",["compositionend","keypress","textInput","paste"]),pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ui));function sh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],s=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var d=l.length-1;0<=d;d--){var h=l[d],w=h.instance,B=h.currentTarget;if(h=h.listener,w!==i&&s.isPropagationStopped())break e;i=h,s.currentTarget=B;try{i(s)}catch(W){Wi(W)}s.currentTarget=null,i=w}else for(d=0;d<l.length;d++){if(h=l[d],w=h.instance,B=h.currentTarget,h=h.listener,w!==i&&s.isPropagationStopped())break e;i=h,s.currentTarget=B;try{i(s)}catch(W){Wi(W)}s.currentTarget=null,i=w}}}}function St(e,t){var n=t[Xn];n===void 0&&(n=t[Xn]=new Set);var l=e+"__bubble";n.has(l)||(ih(t,e,2,!1),n.add(l))}function Lu(e,t,n){var l=0;t&&(l|=4),ih(n,e,l,t)}var zr="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[zr]){e[zr]=!0,Ms.forEach(function(n){n!=="selectionchange"&&(D0.has(n)||Lu(n,!1,e),Lu(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zr]||(t[zr]=!0,Lu("selectionchange",!1,t))}}function ih(e,t,n,l){switch(Lh(t)){case 2:var s=ig;break;case 8:s=rg;break;default:s=Ju}n=s.bind(null,t,n,e),s=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function $u(e,t,n,l,s){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var h=l.stateNode.containerInfo;if(h===s)break;if(d===4)for(d=l.return;d!==null;){var w=d.tag;if((w===3||w===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;h!==null;){if(d=So(h),d===null)return;if(w=d.tag,w===5||w===6||w===26||w===27){l=i=d;continue e}h=h.parentNode}}l=l.return}Gl(function(){var B=i,W=Dl(n),te=[];e:{var H=Hd.get(e);if(H!==void 0){var X=Ba,Ne=e;switch(e){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":X=Hi;break;case"focusin":Ne="focus",X=Ya;break;case"focusout":Ne="blur",X=Ya;break;case"beforeblur":case"afterblur":X=Ya;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Ro;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Oi;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Yi;break;case Od:case Ld:case Bd:X=_c;break;case $d:X=vl;break;case"scroll":case"scrollend":X=Ol;break;case"wheel":X=Ls;break;case"copy":case"cut":case"paste":X=Bi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=_a;break;case"toggle":case"beforetoggle":X=qa}var Pe=(t&4)!==0,Xt=!Pe&&(e==="scroll"||e==="scrollend"),z=Pe?H!==null?H+"Capture":null:H;Pe=[];for(var N=B,O;N!==null;){var ee=N;if(O=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||O===null||z===null||(ee=Lt(N,z),ee!=null&&Pe.push(di(N,ee,O))),Xt)break;N=N.return}0<Pe.length&&(H=new X(H,Ne,null,n,W),te.push({event:H,listeners:Pe}))}}if((t&7)===0){e:{if(H=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",H&&n!==Ns&&(Ne=n.relatedTarget||n.fromElement)&&(So(Ne)||Ne[Ve]))break e;if((X||H)&&(H=W.window===W?W:(H=W.ownerDocument)?H.defaultView||H.parentWindow:window,X?(Ne=n.relatedTarget||n.toElement,X=B,Ne=Ne?So(Ne):null,Ne!==null&&(Xt=f(Ne),Pe=Ne.tag,Ne!==Xt||Pe!==5&&Pe!==27&&Pe!==6)&&(Ne=null)):(X=null,Ne=B),X!==Ne)){if(Pe=Ro,ee="onMouseLeave",z="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(Pe=_a,ee="onPointerLeave",z="onPointerEnter",N="pointer"),Xt=X==null?H:sa(X),O=Ne==null?H:sa(Ne),H=new Pe(ee,N+"leave",X,n,W),H.target=Xt,H.relatedTarget=O,ee=null,So(W)===B&&(Pe=new Pe(z,N+"enter",Ne,n,W),Pe.target=O,Pe.relatedTarget=Xt,ee=Pe),Xt=ee,X&&Ne)t:{for(Pe=A0,z=X,N=Ne,O=0,ee=z;ee;ee=Pe(ee))O++;ee=0;for(var Ge=N;Ge;Ge=Pe(Ge))ee++;for(;0<O-ee;)z=Pe(z),O--;for(;0<ee-O;)N=Pe(N),ee--;for(;O--;){if(z===N||N!==null&&z===N.alternate){Pe=z;break t}z=Pe(z),N=Pe(N)}Pe=null}else Pe=null;X!==null&&rh(te,H,X,Pe,!1),Ne!==null&&Xt!==null&&rh(te,Xt,Ne,Pe,!0)}}e:{if(H=B?sa(B):window,X=H.nodeName&&H.nodeName.toLowerCase(),X==="select"||X==="input"&&H.type==="file")var Nt=je;else if(j(H))if(He)Nt=Rt;else{Nt=Ot;var Ue=an}else X=H.nodeName,!X||X.toLowerCase()!=="input"||H.type!=="checkbox"&&H.type!=="radio"?B&&Pn(B.elementType)&&(Nt=je):Nt=fn;if(Nt&&(Nt=Nt(e,B))){C(te,Nt,n,W);break e}Ue&&Ue(e,H,B),e==="focusout"&&B&&H.type==="number"&&B.memoizedProps.value!=null&&Ql(H,"number",H.value)}switch(Ue=B?sa(B):window,e){case"focusin":(j(Ue)||Ue.contentEditable==="true")&&(tl=Ue,wl=B,Zt=null);break;case"focusout":Zt=wl=tl=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Jl(te,n,W);break;case"selectionchange":if(fa)break;case"keydown":case"keyup":Jl(te,n,W)}var ht;if($s)e:{switch(e){case"compositionstart":var jt="onCompositionStart";break e;case"compositionend":jt="onCompositionEnd";break e;case"compositionupdate":jt="onCompositionUpdate";break e}jt=void 0}else ao?oo(e,n)&&(jt="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(jt="onCompositionStart");jt&&(Qa&&n.locale!=="ko"&&(ao||jt!=="onCompositionStart"?jt==="onCompositionEnd"&&ao&&(ht=Rs()):(Vn=W,La="value"in Vn?Vn.value:Vn.textContent,ao=!0)),Ue=Dr(B,jt),0<Ue.length&&(jt=new Ze(jt,e,null,n,W),te.push({event:jt,listeners:Ue}),ht?jt.data=ht:(ht=Ii(n),ht!==null&&(jt.data=ht)))),(ht=Hs?qi(e,n):g(e,n))&&(jt=Dr(B,"onBeforeInput"),0<jt.length&&(Ue=new Ze("onBeforeInput","beforeinput",null,n,W),te.push({event:Ue,listeners:jt}),Ue.data=ht)),T0(te,e,B,n,W)}sh(te,t)})}function di(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Dr(e,t){for(var n=t+"Capture",l=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=Lt(e,n),s!=null&&l.unshift(di(e,s,i)),s=Lt(e,t),s!=null&&l.push(di(e,s,i))),e.tag===3)return l;e=e.return}return[]}function A0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rh(e,t,n,l,s){for(var i=t._reactName,d=[];n!==null&&n!==l;){var h=n,w=h.alternate,B=h.stateNode;if(h=h.tag,w!==null&&w===l)break;h!==5&&h!==26&&h!==27||B===null||(w=B,s?(B=Lt(n,i),B!=null&&d.unshift(di(n,B,w))):s||(B=Lt(n,i),B!=null&&d.push(di(n,B,w)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var O0=/\r\n?/g,L0=/\u0000|\uFFFD/g;function ch(e){return(typeof e=="string"?e:""+e).replace(O0,`
`).replace(L0,"")}function uh(e,t){return t=ch(t),ch(e)===t}function Yt(e,t,n,l,s,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Eo(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Eo(e,""+l);break;case"className":In(e,"class",l);break;case"tabIndex":In(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":In(e,n,l);break;case"style":zi(e,l,i);break;case"data":if(t!=="object"){In(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ra(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Yt(e,t,"name",s.name,s,null),Yt(e,t,"formEncType",s.formEncType,s,null),Yt(e,t,"formMethod",s.formMethod,s,null),Yt(e,t,"formTarget",s.formTarget,s,null)):(Yt(e,t,"encType",s.encType,s,null),Yt(e,t,"method",s.method,s,null),Yt(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=ra(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=zl);break;case"onScroll":l!=null&&St("scroll",e);break;case"onScrollEnd":l!=null&&St("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=ra(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":St("beforetoggle",e),St("toggle",e),Il(e,"popover",l);break;case"xlinkActuate":rl(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":rl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":rl(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":rl(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":rl(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":rl(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":rl(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":rl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":rl(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Il(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Di.get(n)||n,Il(e,n,l))}}function Hu(e,t,n,l,s,i){switch(n){case"style":zi(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Eo(e,l):(typeof l=="number"||typeof l=="bigint")&&Eo(e,""+l);break;case"onScroll":l!=null&&St("scroll",e);break;case"onScrollEnd":l!=null&&St("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!jo.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),i=e[Yn]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,s),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,s);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):Il(e,n,l)}}}function $n(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",e),St("load",e);var l=!1,s=!1,i;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Yt(e,t,i,d,n,null)}}s&&Yt(e,t,"srcSet",n.srcSet,n,null),l&&Yt(e,t,"src",n.src,n,null);return;case"input":St("invalid",e);var h=i=d=s=null,w=null,B=null;for(l in n)if(n.hasOwnProperty(l)){var W=n[l];if(W!=null)switch(l){case"name":s=W;break;case"type":d=W;break;case"checked":w=W;break;case"defaultChecked":B=W;break;case"value":i=W;break;case"defaultValue":h=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(u(137,t));break;default:Yt(e,t,l,W,n,null)}}on(e,i,h,w,B,d,s,!1);return;case"select":St("invalid",e),l=d=i=null;for(s in n)if(n.hasOwnProperty(s)&&(h=n[s],h!=null))switch(s){case"value":i=h;break;case"defaultValue":d=h;break;case"multiple":l=h;default:Yt(e,t,s,h,n,null)}t=i,n=d,e.multiple=!!l,t!=null?An(e,!!l,t,!1):n!=null&&An(e,!!l,n,!0);return;case"textarea":St("invalid",e),i=s=l=null;for(d in n)if(n.hasOwnProperty(d)&&(h=n[d],h!=null))switch(d){case"value":l=h;break;case"defaultValue":s=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:Yt(e,t,d,h,n,null)}Ri(e,l,s,i);return;case"option":for(w in n)n.hasOwnProperty(w)&&(l=n[w],l!=null)&&(w==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Yt(e,t,w,l,n,null));return;case"dialog":St("beforetoggle",e),St("toggle",e),St("cancel",e),St("close",e);break;case"iframe":case"object":St("load",e);break;case"video":case"audio":for(l=0;l<ui.length;l++)St(ui[l],e);break;case"image":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"embed":case"source":case"link":St("error",e),St("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in n)if(n.hasOwnProperty(B)&&(l=n[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Yt(e,t,B,l,n,null)}return;default:if(Pn(t)){for(W in n)n.hasOwnProperty(W)&&(l=n[W],l!==void 0&&Hu(e,t,W,l,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!=null&&Yt(e,t,h,l,n,null))}function B0(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,d=null,h=null,w=null,B=null,W=null;for(X in n){var te=n[X];if(n.hasOwnProperty(X)&&te!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":w=te;default:l.hasOwnProperty(X)||Yt(e,t,X,null,l,te)}}for(var H in l){var X=l[H];if(te=n[H],l.hasOwnProperty(H)&&(X!=null||te!=null))switch(H){case"type":i=X;break;case"name":s=X;break;case"checked":B=X;break;case"defaultChecked":W=X;break;case"value":d=X;break;case"defaultValue":h=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(u(137,t));break;default:X!==te&&Yt(e,t,H,X,l,te)}}ql(e,d,h,w,B,W,i,s);return;case"select":X=d=h=H=null;for(i in n)if(w=n[i],n.hasOwnProperty(i)&&w!=null)switch(i){case"value":break;case"multiple":X=w;default:l.hasOwnProperty(i)||Yt(e,t,i,null,l,w)}for(s in l)if(i=l[s],w=n[s],l.hasOwnProperty(s)&&(i!=null||w!=null))switch(s){case"value":H=i;break;case"defaultValue":h=i;break;case"multiple":d=i;default:i!==w&&Yt(e,t,s,i,l,w)}t=h,n=d,l=X,H!=null?An(e,!!n,H,!1):!!l!=!!n&&(t!=null?An(e,!!n,t,!0):An(e,!!n,n?[]:"",!1));return;case"textarea":X=H=null;for(h in n)if(s=n[h],n.hasOwnProperty(h)&&s!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Yt(e,t,h,null,l,s)}for(d in l)if(s=l[d],i=n[d],l.hasOwnProperty(d)&&(s!=null||i!=null))switch(d){case"value":H=s;break;case"defaultValue":X=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:s!==i&&Yt(e,t,d,s,l,i)}jn(e,H,X);return;case"option":for(var Ne in n)H=n[Ne],n.hasOwnProperty(Ne)&&H!=null&&!l.hasOwnProperty(Ne)&&(Ne==="selected"?e.selected=!1:Yt(e,t,Ne,null,l,H));for(w in l)H=l[w],X=n[w],l.hasOwnProperty(w)&&H!==X&&(H!=null||X!=null)&&(w==="selected"?e.selected=H&&typeof H!="function"&&typeof H!="symbol":Yt(e,t,w,H,l,X));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Pe in n)H=n[Pe],n.hasOwnProperty(Pe)&&H!=null&&!l.hasOwnProperty(Pe)&&Yt(e,t,Pe,null,l,H);for(B in l)if(H=l[B],X=n[B],l.hasOwnProperty(B)&&H!==X&&(H!=null||X!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(u(137,t));break;default:Yt(e,t,B,H,l,X)}return;default:if(Pn(t)){for(var Xt in n)H=n[Xt],n.hasOwnProperty(Xt)&&H!==void 0&&!l.hasOwnProperty(Xt)&&Hu(e,t,Xt,void 0,l,H);for(W in l)H=l[W],X=n[W],!l.hasOwnProperty(W)||H===X||H===void 0&&X===void 0||Hu(e,t,W,H,l,X);return}}for(var z in n)H=n[z],n.hasOwnProperty(z)&&H!=null&&!l.hasOwnProperty(z)&&Yt(e,t,z,null,l,H);for(te in l)H=l[te],X=n[te],!l.hasOwnProperty(te)||H===X||H==null&&X==null||Yt(e,t,te,H,l,X)}function dh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var s=n[l],i=s.transferSize,d=s.initiatorType,h=s.duration;if(i&&h&&dh(d)){for(d=0,h=s.responseEnd,l+=1;l<n.length;l++){var w=n[l],B=w.startTime;if(B>h)break;var W=w.transferSize,te=w.initiatorType;W&&dh(te)&&(w=w.responseEnd,d+=W*(w<h?1:(h-B)/(w-B)))}if(--l,t+=8*(i+d)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uu=null,Yu=null;function Ar(e){return e.nodeType===9?e:e.ownerDocument}function _h(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Iu=null;function H0(){var e=window.event;return e&&e.type==="popstate"?e===Iu?!1:(Iu=e,!0):(Iu=null,!1)}var hh=typeof setTimeout=="function"?setTimeout:void 0,U0=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Y0=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(e){return mh.resolve(null).then(e).catch(X0)}:hh;function X0(e){setTimeout(function(){throw e})}function Ko(e){return e==="head"}function gh(e,t){var n=t,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(s),ys(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")_i(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,_i(n);for(var i=n.firstChild;i;){var d=i.nextSibling,h=i.nodeName;i[aa]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=d}}else n==="body"&&_i(e.ownerDocument.body);n=s}while(n);ys(t)}function yh(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qu(n),Da(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function I0(e,t,n,l){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[aa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tl(e.nextSibling),e===null)break}return null}function q0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Tl(e.nextSibling),e===null))return null;return e}function ph(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tl(e.nextSibling),e===null))return null;return e}function Qu(e){return e.data==="$?"||e.data==="$~"}function Wu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Q0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Gu=null;function xh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Tl(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function bh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function vh(e,t,n){switch(t=Ar(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function _i(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Da(e)}var Rl=new Map,wh=new Set;function Or(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var wo=F.d;F.d={f:W0,r:G0,D:V0,C:Z0,L:K0,m:F0,X:P0,S:J0,M:eg};function W0(){var e=wo.f(),t=Cr();return e||t}function G0(e){var t=ko(e);t!==null&&t.tag===5&&t.type==="form"?$_(t):wo.r(e)}var hs=typeof document>"u"?null:document;function Sh(e,t,n){var l=hs;if(l&&typeof t=="string"&&t){var s=Wn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),wh.has(s)||(wh.add(s),e={rel:e,crossOrigin:n,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),$n(t,"link",e),pn(t),l.head.appendChild(t)))}}function V0(e){wo.D(e),Sh("dns-prefetch",e,null)}function Z0(e,t){wo.C(e,t),Sh("preconnect",e,t)}function K0(e,t,n){wo.L(e,t,n);var l=hs;if(l&&e&&t){var s='link[rel="preload"][as="'+Wn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Wn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Wn(n.imageSizes)+'"]')):s+='[href="'+Wn(e)+'"]';var i=s;switch(t){case"style":i=ms(e);break;case"script":i=gs(e)}Rl.has(i)||(e=A({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Rl.set(i,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(fi(i))||t==="script"&&l.querySelector(hi(i))||(t=l.createElement("link"),$n(t,"link",e),pn(t),l.head.appendChild(t)))}}function F0(e,t){wo.m(e,t);var n=hs;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Wn(l)+'"][href="'+Wn(e)+'"]',i=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=gs(e)}if(!Rl.has(i)&&(e=A({rel:"modulepreload",href:e},t),Rl.set(i,e),n.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(hi(i)))return}l=n.createElement("link"),$n(l,"link",e),pn(l),n.head.appendChild(l)}}}function J0(e,t,n){wo.S(e,t,n);var l=hs;if(l&&e){var s=Xl(l).hoistableStyles,i=ms(e);t=t||"default";var d=s.get(i);if(!d){var h={loading:0,preload:null};if(d=l.querySelector(fi(i)))h.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Rl.get(i))&&Vu(e,n);var w=d=l.createElement("link");pn(w),$n(w,"link",e),w._p=new Promise(function(B,W){w.onload=B,w.onerror=W}),w.addEventListener("load",function(){h.loading|=1}),w.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Lr(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:h},s.set(i,d)}}}function P0(e,t){wo.X(e,t);var n=hs;if(n&&e){var l=Xl(n).hoistableScripts,s=gs(e),i=l.get(s);i||(i=n.querySelector(hi(s)),i||(e=A({src:e,async:!0},t),(t=Rl.get(s))&&Zu(e,t),i=n.createElement("script"),pn(i),$n(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function eg(e,t){wo.M(e,t);var n=hs;if(n&&e){var l=Xl(n).hoistableScripts,s=gs(e),i=l.get(s);i||(i=n.querySelector(hi(s)),i||(e=A({src:e,async:!0,type:"module"},t),(t=Rl.get(s))&&Zu(e,t),i=n.createElement("script"),pn(i),$n(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function kh(e,t,n,l){var s=(s=at.current)?Or(s):null;if(!s)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=ms(n.href),n=Xl(s).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ms(n.href);var i=Xl(s).hoistableStyles,d=i.get(e);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=s.querySelector(fi(e)))&&!i._p&&(d.instance=i,d.state.loading=5),Rl.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Rl.set(e,n),i||tg(s,e,n,d.state))),t&&l===null)throw Error(u(528,""));return d}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=gs(n),n=Xl(s).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function ms(e){return'href="'+Wn(e)+'"'}function fi(e){return'link[rel="stylesheet"]['+e+"]"}function jh(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function tg(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),$n(t,"link",n),pn(t),e.head.appendChild(t))}function gs(e){return'[src="'+Wn(e)+'"]'}function hi(e){return"script[async]"+e}function Ch(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Wn(n.href)+'"]');if(l)return t.instance=l,pn(l),l;var s=A({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),pn(l),$n(l,"style",s),Lr(l,n.precedence,e),t.instance=l;case"stylesheet":s=ms(n.href);var i=e.querySelector(fi(s));if(i)return t.state.loading|=4,t.instance=i,pn(i),i;l=jh(n),(s=Rl.get(s))&&Vu(l,s),i=(e.ownerDocument||e).createElement("link"),pn(i);var d=i;return d._p=new Promise(function(h,w){d.onload=h,d.onerror=w}),$n(i,"link",l),t.state.loading|=4,Lr(i,n.precedence,e),t.instance=i;case"script":return i=gs(n.src),(s=e.querySelector(hi(i)))?(t.instance=s,pn(s),s):(l=n,(s=Rl.get(i))&&(l=A({},n),Zu(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),pn(s),$n(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Lr(l,n.precedence,e));return t.instance}function Lr(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,i=s,d=0;d<l.length;d++){var h=l[d];if(h.dataset.precedence===t)i=h;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Vu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Br=null;function Mh(e,t,n){if(Br===null){var l=new Map,s=Br=new Map;s.set(n,l)}else s=Br,l=s.get(n),l||(l=new Map,s.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var i=n[s];if(!(i[aa]||i[cn]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var h=l.get(d);h?h.push(i):l.set(d,[i])}}return l}function Eh(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function ng(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Nh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lg(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=ms(l.href),i=t.querySelector(fi(s));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=$r.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,pn(i);return}i=t.ownerDocument||t,l=jh(l),(s=Rl.get(s))&&Vu(l,s),i=i.createElement("link"),pn(i);var d=i;d._p=new Promise(function(h,w){d.onload=h,d.onerror=w}),$n(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=$r.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Ku=0;function og(e,t){return e.stylesheets&&e.count===0&&Ur(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Ur(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Ku===0&&(Ku=62500*$0());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ur(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Ku?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function $r(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ur(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Hr=null;function Ur(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Hr=new Map,t.forEach(ag,e),Hr=null,$r.call(e))}function ag(e,t){if(!(t.state.loading&4)){var n=Hr.get(e);if(n)var l=n.get(null);else{n=new Map,Hr.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var d=s[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}s=t.instance,d=s.getAttribute("data-precedence"),i=n.get(d)||l,i===l&&n.set(null,s),n.set(d,s),this.count++,l=$r.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var mi={$$typeof:pe,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function sg(e,t,n,l,s,i,d,h,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=pt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pt(0),this.hiddenUpdates=pt(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Th(e,t,n,l,s,i,d,h,w,B,W,te){return e=new sg(e,t,n,d,w,B,W,te,h),t=1,i===!0&&(t|=24),i=dl(3,null,null,t),e.current=i,i.stateNode=e,t=Nc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},Dc(i),e}function Rh(e){return e?(e=Ga,e):Ga}function zh(e,t,n,l,s,i){s=Rh(s),l.context===null?l.context=s:l.pendingContext=s,l=Ho(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=Uo(e,l,t),n!==null&&(sl(n,e,t),Gs(n,e,t))}function Dh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fu(e,t){Dh(e,t),(e=e.alternate)&&Dh(e,t)}function Ah(e){if(e.tag===13||e.tag===31){var t=ma(e,67108864);t!==null&&sl(t,e,67108864),Fu(e,67108864)}}function Oh(e){if(e.tag===13||e.tag===31){var t=gl();t=Un(t);var n=ma(e,t);n!==null&&sl(n,e,t),Fu(e,t)}}var Yr=!0;function ig(e,t,n,l){var s=v.T;v.T=null;var i=F.p;try{F.p=2,Ju(e,t,n,l)}finally{F.p=i,v.T=s}}function rg(e,t,n,l){var s=v.T;v.T=null;var i=F.p;try{F.p=8,Ju(e,t,n,l)}finally{F.p=i,v.T=s}}function Ju(e,t,n,l){if(Yr){var s=Pu(l);if(s===null)$u(e,t,l,Xr,n),Bh(e,l);else if(ug(s,e,t,n,l))l.stopPropagation();else if(Bh(e,l),t&4&&-1<cg.indexOf(e)){for(;s!==null;){var i=ko(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=ue(i.pendingLanes);if(d!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var w=1<<31-Be(d);h.entanglements[1]|=w,d&=~w}no(i),(zt&6)===0&&(kr=nt()+500,ci(0))}}break;case 31:case 13:h=ma(i,2),h!==null&&sl(h,i,2),Cr(),Fu(i,2)}if(i=Pu(l),i===null&&$u(e,t,l,Xr,n),i===s)break;s=i}s!==null&&l.stopPropagation()}else $u(e,t,l,null,n)}}function Pu(e){return e=Dl(e),ed(e)}var Xr=null;function ed(e){if(Xr=null,e=So(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=x(t),e!==null)return e;e=null}else if(n===31){if(e=R(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Xr=e,null}function Lh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qe()){case mt:return 2;case At:return 8;case Ae:case D:return 32;case L:return 268435456;default:return 32}default:return 32}}var td=!1,Fo=null,Jo=null,Po=null,gi=new Map,yi=new Map,ea=[],cg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bh(e,t){switch(e){case"focusin":case"focusout":Fo=null;break;case"dragenter":case"dragleave":Jo=null;break;case"mouseover":case"mouseout":Po=null;break;case"pointerover":case"pointerout":gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function pi(e,t,n,l,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[s]},t!==null&&(t=ko(t),t!==null&&Ah(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function ug(e,t,n,l,s){switch(t){case"focusin":return Fo=pi(Fo,e,t,n,l,s),!0;case"dragenter":return Jo=pi(Jo,e,t,n,l,s),!0;case"mouseover":return Po=pi(Po,e,t,n,l,s),!0;case"pointerover":var i=s.pointerId;return gi.set(i,pi(gi.get(i)||null,e,t,n,l,s)),!0;case"gotpointercapture":return i=s.pointerId,yi.set(i,pi(yi.get(i)||null,e,t,n,l,s)),!0}return!1}function $h(e){var t=So(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=x(n),t!==null){e.blockedOn=t,nn(e.priority,function(){Oh(n)});return}}else if(t===31){if(t=R(n),t!==null){e.blockedOn=t,nn(e.priority,function(){Oh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ir(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pu(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Ns=l,n.target.dispatchEvent(l),Ns=null}else return t=ko(n),t!==null&&Ah(t),e.blockedOn=n,!1;t.shift()}return!0}function Hh(e,t,n){Ir(e)&&n.delete(t)}function dg(){td=!1,Fo!==null&&Ir(Fo)&&(Fo=null),Jo!==null&&Ir(Jo)&&(Jo=null),Po!==null&&Ir(Po)&&(Po=null),gi.forEach(Hh),yi.forEach(Hh)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,td||(td=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,dg)))}var Qr=null;function Uh(e){Qr!==e&&(Qr=e,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Qr===e&&(Qr=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(ed(l||n)===null)continue;break}var i=ko(n);i!==null&&(e.splice(t,3),t-=3,Pc(i,{pending:!0,data:s,method:n.method,action:l},l,s))}}))}function ys(e){function t(w){return qr(w,e)}Fo!==null&&qr(Fo,e),Jo!==null&&qr(Jo,e),Po!==null&&qr(Po,e),gi.forEach(t),yi.forEach(t);for(var n=0;n<ea.length;n++){var l=ea[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ea.length&&(n=ea[0],n.blockedOn===null);)$h(n),n.blockedOn===null&&ea.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var s=n[l],i=n[l+1],d=s[Yn]||null;if(typeof i=="function")d||Uh(n);else if(d){var h=null;if(i&&i.hasAttribute("formAction")){if(s=i,d=i[Yn]||null)h=d.formAction;else if(ed(s)!==null)continue}else h=d.action;typeof h=="function"?n[l+1]=h:(n.splice(l,3),l-=3),Uh(n)}}}function Yh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function nd(e){this._internalRoot=e}Wr.prototype.render=nd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,l=gl();zh(n,l,e,t,null,null)},Wr.prototype.unmount=nd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zh(e.current,2,null,e,null,null),Cr(),t[Ve]=null}};function Wr(e){this._internalRoot=e}Wr.prototype.unstable_scheduleHydration=function(e){if(e){var t=oa();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ea.length&&t!==0&&t<ea[n].priority;n++);ea.splice(n,0,e),n===0&&$h(e)}};var Xh=r.version;if(Xh!=="19.2.4")throw Error(u(527,Xh,"19.2.4"));F.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=k(t),e=e!==null?M(e):null,e=e===null?null:e.stateNode,e};var _g={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gr.isDisabled&&Gr.supportsFiber)try{ke=Gr.inject(_g),_e=Gr}catch{}}return bi.createRoot=function(e,t){if(!_(e))throw Error(u(299));var n=!1,l="",s=V_,i=Z_,d=K_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Th(e,1,!1,null,null,n,l,null,s,i,d,Yh),e[Ve]=t.current,Bu(e),new nd(t)},bi.hydrateRoot=function(e,t,n){if(!_(e))throw Error(u(299));var l=!1,s="",i=V_,d=Z_,h=K_,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Th(e,1,!0,t,n??null,l,s,w,i,d,h,Yh),t.context=Rh(null),n=t.current,l=gl(),l=Un(l),s=Ho(l),s.callback=null,Uo(n,s,l),n=l,t.current.lanes=n,lt(t,n),no(t),e[Ve]=t.current,Bu(e),new Wr(t)},bi.version="19.2.4",bi}var Jh;function vg(){if(Jh)return ad.exports;Jh=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(r){console.error(r)}}return a(),ad.exports=bg(),ad.exports}var wg=vg();const Sg=Nm(wg);var Td=Rm(),kg=`.styles-module__popup___IhzrD svg[fill=none] {
  fill: none !important;
}
.styles-module__popup___IhzrD svg[fill=none] :not([fill]) {
  fill: none !important;
}

@keyframes styles-module__popupEnter___AuQDN {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
}
@keyframes styles-module__popupExit___JJKQX {
  from {
    opacity: 1;
    transform: translateX(-50%) scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: translateX(-50%) scale(0.95) translateY(4px);
  }
}
@keyframes styles-module__shake___jdbWe {
  0%, 100% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(0);
  }
  20% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-3px);
  }
  40% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(3px);
  }
  60% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(-2px);
  }
  80% {
    transform: translateX(-50%) scale(1) translateY(0) translateX(2px);
  }
}
.styles-module__popup___IhzrD {
  position: fixed;
  transform: translateX(-50%);
  width: 280px;
  padding: 0.75rem 1rem 14px;
  background: #1a1a1a;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  z-index: 100001;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  will-change: transform, opacity;
  opacity: 0;
}
.styles-module__popup___IhzrD.styles-module__enter___L7U7N {
  animation: styles-module__popupEnter___AuQDN 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w {
  opacity: 1;
  transform: translateX(-50%) scale(1) translateY(0);
}
.styles-module__popup___IhzrD.styles-module__exit___5eGjE {
  animation: styles-module__popupExit___JJKQX 0.15s ease-in forwards;
}
.styles-module__popup___IhzrD.styles-module__entered___COX-w.styles-module__shake___jdbWe {
  animation: styles-module__shake___jdbWe 0.25s ease-out;
}

.styles-module__header___wWsSi {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5625rem;
}

.styles-module__element___fTV2z {
  font-size: 0.75rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
}

.styles-module__headerToggle___WpW0b {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex: 1;
  min-width: 0;
  text-align: left;
}
.styles-module__headerToggle___WpW0b .styles-module__element___fTV2z {
  flex: 1;
}

.styles-module__chevron___ZZJlR {
  color: rgba(255, 255, 255, 0.5);
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.styles-module__chevron___ZZJlR.styles-module__expanded___2Hxgv {
  transform: rotate(90deg);
}

.styles-module__stylesWrapper___pnHgy {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.styles-module__stylesWrapper___pnHgy.styles-module__expanded___2Hxgv {
  grid-template-rows: 1fr;
}

.styles-module__stylesInner___YYZe2 {
  overflow: hidden;
}

.styles-module__stylesBlock___VfQKn {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.375rem;
  padding: 0.5rem 0.625rem;
  margin-bottom: 0.5rem;
  font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace;
  font-size: 0.6875rem;
  line-height: 1.5;
}

.styles-module__styleLine___1YQiD {
  color: rgba(255, 255, 255, 0.85);
  word-break: break-word;
}

.styles-module__styleProperty___84L1i {
  color: #c792ea;
}

.styles-module__styleValue___q51-h {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__timestamp___Dtpsv {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.35);
  font-variant-numeric: tabular-nums;
  margin-left: 0.5rem;
  flex-shrink: 0;
}

.styles-module__quote___mcMmQ {
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0.25rem;
  line-height: 1.45;
}

.styles-module__textarea___jrSae {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5rem 0.625rem;
  font-size: 0.8125rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
}
.styles-module__textarea___jrSae:focus {
  border-color: var(--agentation-color-blue);
}
.styles-module__textarea___jrSae.styles-module__green___99l3h:focus {
  border-color: var(--agentation-color-green);
}
.styles-module__textarea___jrSae::placeholder {
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__textarea___jrSae::-webkit-scrollbar {
  width: 6px;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-track {
  background: transparent;
}
.styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.styles-module__actions___D6x3f {
  display: flex;
  justify-content: flex-end;
  gap: 0.375rem;
  margin-top: 0.5rem;
}

.styles-module__cancel___hRjnL,
.styles-module__submit___K-mIR {
  padding: 0.4rem 0.875rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease, opacity 0.15s ease;
}

.styles-module__cancel___hRjnL {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__cancel___hRjnL:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}

.styles-module__submit___K-mIR {
  color: white;
}
.styles-module__submit___K-mIR:hover:not(:disabled) {
  filter: brightness(0.9);
}
.styles-module__submit___K-mIR:disabled {
  cursor: not-allowed;
}

.styles-module__deleteWrapper___oSjdo {
  margin-right: auto;
}

.styles-module__deleteButton___4VuAE {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease;
}
.styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__deleteButton___4VuAE:active {
  transform: scale(0.92);
}

.styles-module__light___6AaSQ.styles-module__popup___IhzrD {
  background: #fff;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
.styles-module__light___6AaSQ .styles-module__element___fTV2z {
  color: rgba(0, 0, 0, 0.6);
}
.styles-module__light___6AaSQ .styles-module__timestamp___Dtpsv {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__chevron___ZZJlR {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__stylesBlock___VfQKn {
  background: rgba(0, 0, 0, 0.03);
}
.styles-module__light___6AaSQ .styles-module__styleLine___1YQiD {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__styleProperty___84L1i {
  color: #7c3aed;
}
.styles-module__light___6AaSQ .styles-module__styleValue___q51-h {
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__quote___mcMmQ {
  color: rgba(0, 0, 0, 0.55);
  background: rgba(0, 0, 0, 0.04);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae {
  background: rgba(0, 0, 0, 0.03);
  color: #1a1a1a;
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::placeholder {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__textarea___jrSae::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___6AaSQ .styles-module__cancel___hRjnL:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.75);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE {
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___6AaSQ .styles-module__deleteButton___4VuAE:hover {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}`,jg={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(a)),a.textContent=kg}var Wt=jg,Cg=`.icon-transitions-module__iconState___uqK9J {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: center;
}

.icon-transitions-module__iconStateFast___HxlMm {
  transition: opacity 0.15s ease, transform 0.15s ease;
  transform-origin: center;
}

.icon-transitions-module__iconFade___nPwXg {
  transition: opacity 0.2s ease;
}

.icon-transitions-module__iconFadeFast___Ofb2t {
  transition: opacity 0.15s ease;
}

.icon-transitions-module__visible___PlHsU {
  opacity: 1 !important;
}

.icon-transitions-module__visibleScaled___8Qog- {
  opacity: 1 !important;
  transform: scale(1);
}

.icon-transitions-module__hidden___ETykt {
  opacity: 0 !important;
}

.icon-transitions-module__hiddenScaled___JXn-m {
  opacity: 0 !important;
  transform: scale(0.8);
}

.icon-transitions-module__sending___uaLN- {
  opacity: 0.5 !important;
  transform: scale(0.8);
}`,Mg={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-components-icon-transitions");a||(a=document.createElement("style"),a.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(a)),a.textContent=Cg}var It=Mg,Eg=({size:a=16})=>o.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",children:o.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Ng=({size:a=24,style:r={}})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",style:r,children:[o.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[o.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_list_sparkle",children:o.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Tg=({size:a=20,...r})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[o.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),o.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Rg=({size:a=24,copied:r=!1,tint:c})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",style:c?{color:c,transition:"color 0.3s ease"}:void 0,children:[o.jsxs("g",{className:`${It.iconState} ${r?It.hiddenScaled:It.visibleScaled}`,children:[o.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),o.jsxs("g",{className:`${It.iconState} ${r?It.visibleScaled:It.hiddenScaled}`,children:[o.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),zg=({size:a=24,state:r="idle"})=>{const c=r==="idle",u=r==="sent",_=r==="failed",f=r==="sending";return o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[o.jsx("g",{className:`${It.iconStateFast} ${c?It.visibleScaled:f?It.sending:It.hiddenScaled}`,children:o.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),o.jsxs("g",{className:`${It.iconStateFast} ${u?It.visibleScaled:It.hiddenScaled}`,children:[o.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsxs("g",{className:`${It.iconStateFast} ${_?It.visibleScaled:It.hiddenScaled}`,children:[o.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Dg=({size:a=24,isOpen:r=!0})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[o.jsxs("g",{className:`${It.iconFade} ${r?It.visible:It.hidden}`,children:[o.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsxs("g",{className:`${It.iconFade} ${r?It.hidden:It.visible}`,children:[o.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),o.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),Ag=({size:a=24,isPaused:r=!1})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[o.jsxs("g",{className:`${It.iconFadeFast} ${r?It.hidden:It.visible}`,children:[o.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),o.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),o.jsx("path",{className:`${It.iconFadeFast} ${r?It.visible:It.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Og=({size:a=16})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Lg=({size:a=16})=>o.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:o.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),zm=({size:a=16})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[o.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[o.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),o.jsx("defs",{children:o.jsx("clipPath",{id:"clip0_2_53",children:o.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Bg=({size:a=24})=>o.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:o.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),$g=({size:a=16})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",children:[o.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Hg=({size:a=16})=>o.jsx("svg",{width:a,height:a,viewBox:"0 0 20 20",fill:"none",children:o.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),Ug=({size:a=16})=>o.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Yg=({size:a=24})=>o.jsx("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Xg=({size:a=16})=>o.jsx("svg",{width:a,height:a,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Ig=({size:a=24})=>o.jsxs("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",children:[o.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),o.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Dm=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],cd=Dm.flatMap(a=>[`:not([${a}])`,`:not([${a}] *)`]).join(""),Sd="feedback-freeze-styles",ud="__agentation_freeze";function qg(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:r=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const a=window;return a[ud]||(a[ud]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),a[ud]}var bt=qg();typeof window<"u"&&!bt.installed&&(bt.origSetTimeout=window.setTimeout.bind(window),bt.origSetInterval=window.setInterval.bind(window),bt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(a,r,...c)=>typeof a=="string"?bt.origSetTimeout(a,r):bt.origSetTimeout((...u)=>{bt.frozen?bt.frozenTimeoutQueue.push(()=>a(...u)):a(...u)},r,...c),window.setInterval=(a,r,...c)=>typeof a=="string"?bt.origSetInterval(a,r):bt.origSetInterval((...u)=>{bt.frozen||a(...u)},r,...c),window.requestAnimationFrame=a=>bt.origRAF(r=>{bt.frozen?bt.frozenRAFQueue.push(a):a(r)}),bt.installed=!0);var Ke=bt.origSetTimeout,Qg=bt.origSetInterval,ws=bt.origRAF;function Wg(a){return a?Dm.some(r=>!!a.closest?.(`[${r}]`)):!1}function Gg(){if(typeof document>"u"||bt.frozen)return;bt.frozen=!0,bt.frozenTimeoutQueue=[],bt.frozenRAFQueue=[];let a=document.getElementById(Sd);a||(a=document.createElement("style"),a.id=Sd),a.textContent=`
    *${cd},
    *${cd}::before,
    *${cd}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(a),bt.pausedAnimations=[];try{document.getAnimations().forEach(r=>{if(r.playState!=="running")return;const c=r.effect?.target;Wg(c)||(r.pause(),bt.pausedAnimations.push(r))})}catch{}document.querySelectorAll("video").forEach(r=>{r.paused||(r.dataset.wasPaused="false",r.pause())})}function Ph(){if(typeof document>"u"||!bt.frozen)return;bt.frozen=!1;const a=bt.frozenTimeoutQueue;bt.frozenTimeoutQueue=[];for(const c of a)bt.origSetTimeout(()=>{if(bt.frozen){bt.frozenTimeoutQueue.push(c);return}try{c()}catch(u){console.warn("[agentation] Error replaying queued timeout:",u)}},0);const r=bt.frozenRAFQueue;bt.frozenRAFQueue=[];for(const c of r)bt.origRAF(u=>{if(bt.frozen){bt.frozenRAFQueue.push(c);return}c(u)});for(const c of bt.pausedAnimations)try{c.play()}catch(u){console.warn("[agentation] Error resuming animation:",u)}bt.pausedAnimations=[],document.getElementById(Sd)?.remove(),document.querySelectorAll("video").forEach(c=>{c.dataset.wasPaused==="false"&&(c.play().catch(()=>{}),delete c.dataset.wasPaused)})}function dd(a){if(!a)return;const r=c=>c.stopImmediatePropagation();document.addEventListener("focusin",r,!0),document.addEventListener("focusout",r,!0);try{a.focus()}finally{document.removeEventListener("focusin",r,!0),document.removeEventListener("focusout",r,!0)}}var sc=m.forwardRef(function({element:r,timestamp:c,selectedText:u,placeholder:_="What should change?",initialValue:f="",submitLabel:x="Add",onSubmit:R,onCancel:b,onDelete:k,style:M,accentColor:A="#3c82f7",isExiting:T=!1,lightMode:ne=!1,computedStyles:$},le){const[U,q]=m.useState(f),[me,pe]=m.useState(!1),[be,et]=m.useState("initial"),[Je,K]=m.useState(!1),[Ee,ae]=m.useState(!1),Fe=m.useRef(null),Re=m.useRef(null),qe=m.useRef(null),tt=m.useRef(null);m.useEffect(()=>{T&&be!=="exit"&&et("exit")},[T,be]),m.useEffect(()=>{Ke(()=>{et("enter")},0);const ye=Ke(()=>{et("entered")},200),ve=Ke(()=>{const S=Fe.current;S&&(dd(S),S.selectionStart=S.selectionEnd=S.value.length,S.scrollTop=S.scrollHeight)},50);return()=>{clearTimeout(ye),clearTimeout(ve),qe.current&&clearTimeout(qe.current),tt.current&&clearTimeout(tt.current)}},[]);const ze=m.useCallback(()=>{tt.current&&clearTimeout(tt.current),pe(!0),tt.current=Ke(()=>{pe(!1),dd(Fe.current)},250)},[]);m.useImperativeHandle(le,()=>({shake:ze}),[ze]);const Xe=m.useCallback(()=>{et("exit"),qe.current=Ke(()=>{b()},150)},[b]),v=m.useCallback(()=>{U.trim()&&R(U.trim())},[U,R]),F=m.useCallback(ye=>{ye.stopPropagation(),!ye.nativeEvent.isComposing&&(ye.key==="Enter"&&!ye.shiftKey&&(ye.preventDefault(),v()),ye.key==="Escape"&&Xe())},[v,Xe]),Y=[Wt.popup,ne?Wt.light:"",be==="enter"?Wt.enter:"",be==="entered"?Wt.entered:"",be==="exit"?Wt.exit:"",me?Wt.shake:""].filter(Boolean).join(" ");return o.jsxs("div",{ref:Re,className:Y,"data-annotation-popup":!0,style:M,onClick:ye=>ye.stopPropagation(),children:[o.jsxs("div",{className:Wt.header,children:[$&&Object.keys($).length>0?o.jsxs("button",{className:Wt.headerToggle,onClick:()=>{const ye=Ee;ae(!Ee),ye&&Ke(()=>dd(Fe.current),0)},type:"button",children:[o.jsx("svg",{className:`${Wt.chevron} ${Ee?Wt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),o.jsx("span",{className:Wt.element,children:r})]}):o.jsx("span",{className:Wt.element,children:r}),c&&o.jsx("span",{className:Wt.timestamp,children:c})]}),$&&Object.keys($).length>0&&o.jsx("div",{className:`${Wt.stylesWrapper} ${Ee?Wt.expanded:""}`,children:o.jsx("div",{className:Wt.stylesInner,children:o.jsx("div",{className:Wt.stylesBlock,children:Object.entries($).map(([ye,ve])=>o.jsxs("div",{className:Wt.styleLine,children:[o.jsx("span",{className:Wt.styleProperty,children:ye.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",o.jsx("span",{className:Wt.styleValue,children:ve}),";"]},ye))})})}),u&&o.jsxs("div",{className:Wt.quote,children:["“",u.slice(0,80),u.length>80?"...":"","”"]}),o.jsx("textarea",{ref:Fe,className:Wt.textarea,style:{borderColor:Je?A:void 0},placeholder:_,value:U,onChange:ye=>q(ye.target.value),onFocus:()=>K(!0),onBlur:()=>K(!1),rows:2,onKeyDown:F}),o.jsxs("div",{className:Wt.actions,children:[k&&o.jsx("div",{className:Wt.deleteWrapper,children:o.jsx("button",{className:Wt.deleteButton,onClick:k,type:"button",children:o.jsx(Yg,{size:22})})}),o.jsx("button",{className:Wt.cancel,onClick:Xe,children:"Cancel"}),o.jsx("button",{className:Wt.submit,style:{backgroundColor:A,opacity:U.trim()?1:.4},onClick:v,disabled:!U.trim(),children:x})]})]})}),Vg=({content:a,children:r,...c})=>{const[u,_]=m.useState(!1),[f,x]=m.useState(!1),[R,b]=m.useState({top:0,right:0}),k=m.useRef(null),M=m.useRef(null),A=m.useRef(null),T=()=>{if(k.current){const le=k.current.getBoundingClientRect();b({top:le.top+le.height/2,right:window.innerWidth-le.left+8})}},ne=()=>{x(!0),A.current&&(clearTimeout(A.current),A.current=null),T(),M.current=Ke(()=>{_(!0)},500)},$=()=>{M.current&&(clearTimeout(M.current),M.current=null),_(!1),A.current=Ke(()=>{x(!1)},150)};return m.useEffect(()=>()=>{M.current&&clearTimeout(M.current),A.current&&clearTimeout(A.current)},[]),o.jsxs(o.Fragment,{children:[o.jsx("span",{ref:k,onMouseEnter:ne,onMouseLeave:$,...c,children:r}),f&&Td.createPortal(o.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:R.top,right:R.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:u?1:0,transition:"opacity 0.15s ease"},children:a}),document.body)]})},Zg=`.styles-module__tooltip___mcXL2 {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: help;
}

.styles-module__tooltipIcon___Nq2nD {
  transform: translateY(0.5px);
  color: #fff;
  opacity: 0.2;
  transition: opacity 0.15s ease;
  will-change: transform;
}
.styles-module__tooltip___mcXL2:hover .styles-module__tooltipIcon___Nq2nD {
  opacity: 0.5;
}
[data-agentation-theme=light] .styles-module__tooltipIcon___Nq2nD {
  color: #000;
}`,Kg={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-help-tooltip-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(a)),a.textContent=Zg}var em=Kg,Ra=({content:a})=>o.jsx(Vg,{className:em.tooltip,content:a,children:o.jsx(Tg,{className:em.tooltipIcon})}),Ce={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},Am=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Ce.navigation},{type:"header",label:"Header",...Ce.header},{type:"hero",label:"Hero",...Ce.hero},{type:"section",label:"Section",...Ce.section},{type:"sidebar",label:"Sidebar",...Ce.sidebar},{type:"footer",label:"Footer",...Ce.footer},{type:"modal",label:"Modal",...Ce.modal},{type:"banner",label:"Banner",...Ce.banner},{type:"drawer",label:"Drawer",...Ce.drawer},{type:"popover",label:"Popover",...Ce.popover},{type:"divider",label:"Divider",...Ce.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Ce.card},{type:"text",label:"Text",...Ce.text},{type:"image",label:"Image",...Ce.image},{type:"video",label:"Video",...Ce.video},{type:"table",label:"Table",...Ce.table},{type:"grid",label:"Grid",...Ce.grid},{type:"list",label:"List",...Ce.list},{type:"chart",label:"Chart",...Ce.chart},{type:"codeBlock",label:"Code Block",...Ce.codeBlock},{type:"map",label:"Map",...Ce.map},{type:"timeline",label:"Timeline",...Ce.timeline},{type:"calendar",label:"Calendar",...Ce.calendar},{type:"accordion",label:"Accordion",...Ce.accordion},{type:"carousel",label:"Carousel",...Ce.carousel},{type:"logo",label:"Logo",...Ce.logo},{type:"faq",label:"FAQ",...Ce.faq},{type:"gallery",label:"Gallery",...Ce.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Ce.button},{type:"input",label:"Input",...Ce.input},{type:"search",label:"Search",...Ce.search},{type:"form",label:"Form",...Ce.form},{type:"tabs",label:"Tabs",...Ce.tabs},{type:"dropdown",label:"Dropdown",...Ce.dropdown},{type:"toggle",label:"Toggle",...Ce.toggle},{type:"stepper",label:"Stepper",...Ce.stepper},{type:"rating",label:"Rating",...Ce.rating},{type:"fileUpload",label:"File Upload",...Ce.fileUpload},{type:"checkbox",label:"Checkbox",...Ce.checkbox},{type:"radio",label:"Radio",...Ce.radio},{type:"slider",label:"Slider",...Ce.slider},{type:"datePicker",label:"Date Picker",...Ce.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Ce.avatar},{type:"badge",label:"Badge",...Ce.badge},{type:"tag",label:"Tag",...Ce.tag},{type:"breadcrumb",label:"Breadcrumb",...Ce.breadcrumb},{type:"pagination",label:"Pagination",...Ce.pagination},{type:"progress",label:"Progress",...Ce.progress},{type:"alert",label:"Alert",...Ce.alert},{type:"toast",label:"Toast",...Ce.toast},{type:"notification",label:"Notification",...Ce.notification},{type:"tooltip",label:"Tooltip",...Ce.tooltip},{type:"stat",label:"Stat",...Ce.stat},{type:"skeleton",label:"Skeleton",...Ce.skeleton},{type:"chip",label:"Chip",...Ce.chip},{type:"icon",label:"Icon",...Ce.icon},{type:"spinner",label:"Spinner",...Ce.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Ce.pricing},{type:"testimonial",label:"Testimonial",...Ce.testimonial},{type:"cta",label:"CTA",...Ce.cta},{type:"productCard",label:"Product Card",...Ce.productCard},{type:"profile",label:"Profile",...Ce.profile},{type:"feature",label:"Feature",...Ce.feature},{type:"team",label:"Team",...Ce.team},{type:"login",label:"Login",...Ce.login},{type:"contact",label:"Contact",...Ce.contact}]}],Hl={};for(const a of Am)for(const r of a.items)Hl[r.type]=r;function se({w:a,h:r=3,strong:c}){return o.jsx("div",{style:{width:typeof a=="number"?`${a}px`:a,height:r,borderRadius:2,background:c?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Ht({w:a,h:r,radius:c=3,style:u}){return o.jsx("div",{style:{width:typeof a=="number"?`${a}px`:a,height:typeof r=="number"?`${r}px`:r,borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...u}})}function Jn({size:a}){return o.jsx("div",{style:{width:a,height:a,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Fg({width:a,height:r}){const c=Math.max(8,r*.2);return o.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${c}px`,gap:a*.02},children:[o.jsx(Ht,{w:Math.max(20,r*.5),h:Math.max(12,r*.4),radius:2}),o.jsxs("div",{style:{flex:1,display:"flex",gap:a*.03,marginLeft:a*.04},children:[o.jsx(se,{w:a*.06}),o.jsx(se,{w:a*.07}),o.jsx(se,{w:a*.05}),o.jsx(se,{w:a*.06})]}),o.jsx(Ht,{w:a*.1,h:Math.min(28,r*.5),radius:4})]})}function Jg({width:a,height:r,text:c}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:r*.05},children:[c?o.jsx("span",{style:{fontSize:Math.min(20,r*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:c}):o.jsx(se,{w:a*.5,h:Math.max(6,r*.04),strong:!0}),o.jsx(se,{w:a*.6}),o.jsx(se,{w:a*.4}),o.jsx(Ht,{w:Math.min(140,a*.2),h:Math.min(36,r*.12),radius:6,style:{marginTop:r*.06}})]})}function Pg({width:a,height:r}){const c=Math.max(3,Math.floor(r/36));return o.jsxs("div",{style:{padding:a*.08,display:"flex",flexDirection:"column",gap:r*.03},children:[o.jsx(se,{w:a*.6,h:4,strong:!0}),Array.from({length:c},(u,_)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx(Ht,{w:10,h:10,radius:2}),o.jsx(se,{w:a*(.4+_*17%30/100)})]},_))]})}function ey({width:a,height:r}){const c=Math.max(2,Math.min(4,Math.floor(a/160)));return o.jsx("div",{style:{display:"flex",padding:`${r*.12}px ${a*.03}px`,gap:a*.05},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx(se,{w:"60%",h:3,strong:!0}),o.jsx(se,{w:"80%",h:2}),o.jsx(se,{w:"70%",h:2}),o.jsx(se,{w:"60%",h:2})]},_))})}function ty({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsx(se,{w:a*.3,h:4,strong:!0}),o.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),o.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[o.jsx(se,{w:"90%"}),o.jsx(se,{w:"70%"}),o.jsx(se,{w:"80%"})]}),o.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[o.jsx(Ht,{w:70,h:26,radius:4}),o.jsx(Ht,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function ny({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),o.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[o.jsx(se,{w:"70%",h:4,strong:!0}),o.jsx(se,{w:"95%",h:2}),o.jsx(se,{w:"85%",h:2}),o.jsx(se,{w:"50%",h:2})]})]})}function ly({width:a,height:r,text:c}){if(c)return o.jsx("div",{style:{padding:4,fontSize:Math.min(14,r*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:c});const u=Math.max(2,Math.floor(r/18));return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[o.jsx(se,{w:a*.6,h:5,strong:!0}),Array.from({length:u},(_,f)=>o.jsx(se,{w:`${70+f*13%25}%`,h:2},f))]})}function oy({width:a,height:r}){return o.jsx("div",{style:{height:"100%",position:"relative"},children:o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,preserveAspectRatio:"none",fill:"none",children:[o.jsx("line",{x1:"0",y1:"0",x2:a,y2:r,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("line",{x1:a,y1:"0",x2:"0",y2:r,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("circle",{cx:a*.3,cy:r*.3,r:Math.min(a,r)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function ay({width:a,height:r}){const c=Math.max(2,Math.min(5,Math.floor(a/100))),u=Math.max(2,Math.min(6,Math.floor(r/32)));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:c},(_,f)=>o.jsx("div",{style:{flex:1,padding:"0 8px"},children:o.jsx(se,{w:"70%",h:3,strong:!0})},f))}),Array.from({length:u},(_,f)=>o.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:c},(x,R)=>o.jsx("div",{style:{flex:1,padding:"0 8px"},children:o.jsx(se,{w:`${50+(f*7+R*13)%40}%`,h:2})},R))},f))]})}function sy({width:a,height:r}){const c=Math.max(2,Math.floor(r/28));return o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[o.jsx(Jn,{size:8}),o.jsx(se,{w:`${55+_*17%35}%`,h:2})]},_))})}function iy({width:a,height:r,text:c}){return o.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,r/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:c?o.jsx("span",{style:{fontSize:Math.min(13,r*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:c}):o.jsx(se,{w:Math.max(20,a*.5),h:3,strong:!0})})}function ry({width:a,height:r}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[o.jsx(se,{w:Math.min(80,a*.3),h:2}),o.jsx("div",{style:{height:Math.min(36,r*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:o.jsx(se,{w:"40%",h:2})})]})}function cy({width:a,height:r}){const c=Math.max(2,Math.min(5,Math.floor(r/56)));return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:r*.04,padding:8},children:[Array.from({length:c},(u,_)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[o.jsx(se,{w:60+_*17%30,h:2}),o.jsx(Ht,{w:"100%",h:28,radius:4})]},_)),o.jsx(Ht,{w:Math.min(120,a*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function uy({width:a,height:r}){const c=Math.max(2,Math.min(4,Math.floor(a/120)));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(u,_)=>o.jsx("div",{style:{padding:"8px 12px",borderBottom:_===0?"2px solid var(--agd-bar-strong)":"none"},children:o.jsx(se,{w:60,h:3,strong:_===0})},_))}),o.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[o.jsx(se,{w:"80%",h:2}),o.jsx(se,{w:"65%",h:2}),o.jsx(se,{w:"75%",h:2})]})]})}function dy({width:a,height:r}){const c=Math.min(a,r)/2;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",children:[o.jsx("circle",{cx:a/2,cy:r/2,r:c-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),o.jsx("circle",{cx:a/2,cy:r*.38,r:c*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),o.jsx("path",{d:`M${a/2-c*.55} ${r*.78} C${a/2-c*.55} ${r*.55} ${a/2+c*.55} ${r*.55} ${a/2+c*.55} ${r*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function _y({width:a,height:r}){return o.jsx("div",{style:{height:"100%",borderRadius:r/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(se,{w:Math.max(16,a*.5),h:2,strong:!0})})}function fy({width:a,height:r}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:r*.08},children:[o.jsx(se,{w:a*.5,h:Math.max(5,r*.06),strong:!0}),o.jsx(se,{w:a*.35})]})}function hy({width:a,height:r}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:r*.04,padding:a*.04},children:[o.jsx(se,{w:a*.3,h:4,strong:!0}),o.jsx(se,{w:a*.7}),o.jsx(se,{w:a*.5}),o.jsxs("div",{style:{flex:1,display:"flex",gap:a*.03,marginTop:r*.06},children:[o.jsx(Ht,{w:"33%",h:"100%",radius:4}),o.jsx(Ht,{w:"33%",h:"100%",radius:4}),o.jsx(Ht,{w:"33%",h:"100%",radius:4})]})]})}function my({width:a,height:r}){const c=Math.max(2,Math.min(4,Math.floor(a/140))),u=Math.max(1,Math.min(3,Math.floor(r/120)));return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${u}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:c*u},(_,f)=>o.jsx(Ht,{w:"100%",h:"100%",radius:4},f))})}function gy({width:a,height:r}){const c=Math.max(2,Math.floor((r-32)/28));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:o.jsx(se,{w:a*.5,h:3,strong:!0})}),o.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:c},(u,_)=>o.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:_===0?"var(--agd-fill)":"transparent"},children:o.jsx(se,{w:`${50+_*17%35}%`,h:2,strong:_===0})},_))})]})}function yy({width:a,height:r}){const c=Math.min(a,r)/2;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:a-2,height:r-2,rx:c,stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("circle",{cx:a-c,cy:r/2,r:c*.7,fill:"var(--agd-bar)"})]})}function py({width:a,height:r}){const c=Math.min(r/2,20);return o.jsxs("div",{style:{height:"100%",borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${c*.6}px`,gap:6},children:[o.jsx(Jn,{size:Math.min(14,r*.4)}),o.jsx(se,{w:"50%",h:2})]})}function xy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o.jsx(Jn,{size:Math.min(20,r*.5)}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:"60%",h:3,strong:!0}),o.jsx(se,{w:"80%",h:2})]}),o.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function by({width:a,height:r}){return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",children:[o.jsx("rect",{x:"0",y:"0",width:a,height:r,rx:r/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),o.jsx("rect",{x:"1",y:"1",width:a*.65,height:r-2,rx:(r-2)/2,fill:"var(--agd-bar)"})]})}function vy({width:a,height:r}){const c=Math.max(3,Math.min(7,Math.floor(a/50))),u=a/(c*2);return o.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(_,f)=>{const x=30+(f*37+17)%55;return o.jsx(Ht,{w:u,h:`${x}%`,radius:2},f)})})}function wy({width:a,height:r}){const c=Math.min(a,r)*.12;return o.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsx(Ht,{w:"100%",h:"100%",radius:4}),o.jsx("div",{style:{position:"absolute",width:c*2,height:c*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("div",{style:{width:0,height:0,borderLeft:`${c*.6}px solid var(--agd-bar-strong)`,borderTop:`${c*.4}px solid transparent`,borderBottom:`${c*.4}px solid transparent`,marginLeft:c*.15}})})]})}function Sy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx(se,{w:"60%",h:2})}),o.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function ky({width:a,height:r}){const c=Math.max(2,Math.min(4,Math.floor(a/80)));return o.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[_>0&&o.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),o.jsx(se,{w:40+_*13%20,h:2,strong:_===c-1})]},_))})}function jy({width:a,height:r}){const c=Math.max(3,Math.min(5,Math.floor(a/40))),u=Math.min(28,r*.8);return o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:c},(_,f)=>o.jsx(Ht,{w:u,h:u,radius:4,style:f===1?{background:"var(--agd-bar)"}:void 0},f))})}function Cy({width:a}){return o.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:o.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function My({width:a,height:r}){const c=Math.max(2,Math.min(4,Math.floor(r/40)));return o.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:_===0?2:1},children:[o.jsx(se,{w:`${40+_*17%25}%`,h:3,strong:!0}),o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:_===0?"▼":"▶"})]},_))})}function Ey({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[o.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[o.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),o.jsx(Ht,{w:"100%",h:"100%",radius:4}),o.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),o.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[o.jsx(Jn,{size:5}),o.jsx(Jn,{size:5}),o.jsx(Jn,{size:5})]})]})}function Ny({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:r*.04},children:[o.jsx(se,{w:a*.4,h:3,strong:!0}),o.jsx(se,{w:a*.3,h:6,strong:!0}),o.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(c,u)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o.jsx(Jn,{size:5}),o.jsx(se,{w:`${50+u*17%35}%`,h:2})]},u))}),o.jsx(Ht,{w:a*.7,h:Math.min(32,r*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Ty({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[o.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx(se,{w:"90%",h:2}),o.jsx(se,{w:"75%",h:2}),o.jsx(se,{w:"60%",h:2})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx(Jn,{size:20}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[o.jsx(se,{w:60,h:3,strong:!0}),o.jsx(se,{w:40,h:2})]})]})]})}function Ry({width:a,height:r}){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:r*.08},children:[o.jsx(se,{w:a*.5,h:Math.max(4,r*.05),strong:!0}),o.jsx(se,{w:a*.35}),o.jsx(Ht,{w:Math.min(140,a*.25),h:Math.min(32,r*.15),radius:6,style:{marginTop:r*.04,background:"var(--agd-bar)"}})]})}function zy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:o.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:"40%",h:3,strong:!0}),o.jsx(se,{w:"70%",h:2})]})]})}function Dy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[o.jsx(se,{w:a*.4,h:3,strong:!0}),o.jsx(Ht,{w:60,h:Math.min(24,r*.6),radius:4})]})}function Ay({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:r*.06},children:[o.jsx(se,{w:a*.5,h:2}),o.jsx(se,{w:a*.4,h:Math.max(8,r*.18),strong:!0}),o.jsx(se,{w:a*.3,h:2})]})}function Oy({width:a,height:r}){const c=Math.max(3,Math.min(5,Math.floor(a/100))),u=Math.min(12,r*.35);return o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:c},(_,f)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[o.jsx("div",{style:{width:u,height:u,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:f===0?"var(--agd-bar)":"transparent",flexShrink:0}}),f<c-1&&o.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},f))})}function Ly({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[o.jsx(se,{w:Math.max(16,a*.5),h:2,strong:!0}),o.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function By({width:a,height:r}){const u=Math.min(r*.7,a/7.5);return o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:u*.2},children:Array.from({length:5},(_,f)=>o.jsx("svg",{width:u,height:u,viewBox:"0 0 16 16",fill:"none",children:o.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:f<3?"var(--agd-bar)":"none"})},f))})}function $y({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",style:{position:"absolute",inset:0},children:[o.jsx("line",{x1:0,y1:r*.3,x2:a,y2:r*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),o.jsx("line",{x1:0,y1:r*.6,x2:a,y2:r*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),o.jsx("line",{x1:a*.4,y1:0,x2:a*.6,y2:r,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),o.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:o.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[o.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),o.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Hy({width:a,height:r}){const c=Math.max(3,Math.min(5,Math.floor(r/60)));return o.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[o.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[o.jsx(Jn,{size:8}),_<c-1&&o.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},_))}),o.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:`${35+_*13%25}%`,h:3,strong:!0}),o.jsx(se,{w:`${50+_*17%30}%`,h:2})]},_))})]})}function Uy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:r*.06},children:[o.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[o.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),o.jsx(se,{w:a*.4,h:2}),o.jsx(se,{w:a*.25,h:2})]})}function Yy({width:a,height:r}){const c=Math.max(3,Math.min(8,Math.floor(r/20)));return o.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[o.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[o.jsx(Jn,{size:6}),o.jsx(Jn,{size:6}),o.jsx(Jn,{size:6})]}),Array.from({length:c},(u,_)=>o.jsx("div",{style:{display:"flex",gap:6,paddingLeft:_>0&&_<c-1?12:0},children:o.jsx(se,{w:`${25+_*23%50}%`,h:2,strong:_===0})},_))]})}function Xy({width:a,height:r}){const _=Math.min((a-16)/7,(r-40)/6);return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),o.jsx(se,{w:a*.3,h:3,strong:!0}),o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(f,x)=>o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:_*.6},children:o.jsx(se,{w:_*.5,h:2})},`h${x}`)),Array.from({length:35},(f,x)=>o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:_},children:o.jsx("div",{style:{width:_*.6,height:_*.6,borderRadius:"50%",background:x===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:x===12?1:.3}})})},x))]})]})}function Iy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[o.jsx(Jn,{size:Math.min(32,r*.55)}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:"50%",h:3,strong:!0}),o.jsx(se,{w:"75%",h:2})]}),o.jsx(se,{w:30,h:2})]})}function qy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[o.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),o.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[o.jsx(se,{w:"65%",h:4,strong:!0}),o.jsx(se,{w:"40%",h:3}),o.jsx("div",{style:{flex:1}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[o.jsx(se,{w:"30%",h:5,strong:!0}),o.jsx(Ht,{w:Math.min(70,a*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function Qy({width:a,height:r}){const c=Math.min(48,r*.3);return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:r*.06},children:[o.jsx(Jn,{size:c}),o.jsx(se,{w:a*.45,h:4,strong:!0}),o.jsx(se,{w:a*.3,h:2}),o.jsxs("div",{style:{display:"flex",gap:a*.08,marginTop:r*.04},children:[o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o.jsx(se,{w:20,h:3,strong:!0}),o.jsx(se,{w:28,h:2})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o.jsx(se,{w:20,h:3,strong:!0}),o.jsx(se,{w:28,h:2})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o.jsx(se,{w:20,h:3,strong:!0}),o.jsx(se,{w:28,h:2})]})]})]})}function Wy({width:a,height:r}){const c=Math.max(a*.6,80),u=Math.max(3,Math.floor(r/40));return o.jsxs("div",{style:{height:"100%",display:"flex"},children:[o.jsx("div",{style:{width:a-c,background:"var(--agd-fill)",opacity:.3}}),o.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:a*.04},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:r*.06},children:[o.jsx(se,{w:c*.4,h:4,strong:!0}),o.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:u},(_,f)=>o.jsx("div",{style:{padding:"6px 0"},children:o.jsx(se,{w:`${50+f*17%35}%`,h:2,strong:f===0})},f))]})]})}function Gy({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[o.jsx(se,{w:"70%",h:3,strong:!0}),o.jsx(se,{w:"90%",h:2}),o.jsx(se,{w:"60%",h:2})]}),o.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Vy({width:a,height:r}){const c=Math.min(r*.7,a*.3);return o.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:a*.08},children:[o.jsx(Ht,{w:c,h:c,radius:c*.25}),o.jsx(se,{w:a*.45,h:Math.max(4,r*.2),strong:!0})]})}function Zy({width:a,height:r}){const c=Math.max(2,Math.min(5,Math.floor(r/56)));return o.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:_===0?2:1},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[o.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),o.jsx(se,{w:a*(.3+_*13%25/100),h:3,strong:!0})]}),o.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:_===0?"▼":"▶"})]},_))})}function Ky({width:a,height:r}){const c=Math.max(2,Math.min(4,Math.floor(a/120))),u=Math.max(1,Math.min(3,Math.floor(r/120)));return o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${u}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:c*u},(_,f)=>o.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:o.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[o.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),o.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},f))})}function Fy({width:a,height:r}){const c=Math.min(a,r);return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",children:[o.jsx("rect",{x:"1",y:(r-c+2)/2,width:c-2,height:c-2,rx:c*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o.jsx("path",{d:`M${c*.25} ${r/2}l${c*.2} ${c*.2} ${c*.3}-${c*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Jy({width:a,height:r}){const c=Math.min(a,r)/2-1;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",children:[o.jsx("circle",{cx:a/2,cy:r/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),o.jsx("circle",{cx:a/2,cy:r/2,r:c*.45,fill:"var(--agd-bar)"})]})}function Py({width:a,height:r}){const c=Math.max(2,r*.12),u=Math.min(r*.35,10),_=a*.55;return o.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[o.jsx("div",{style:{width:"100%",height:c,borderRadius:c/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:o.jsx("div",{style:{width:_,height:"100%",borderRadius:c/2,background:"var(--agd-bar)"}})}),o.jsx("div",{style:{position:"absolute",left:_-u,width:u*2,height:u*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function ep({width:a,height:r}){const c=Math.min(36,r*.15),u=7,_=4,f=Math.min((a-16)/u,(r-c-40)/(_+1));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[o.jsxs("div",{style:{height:c,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[o.jsx(se,{w:"40%",h:2}),o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),o.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),o.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[o.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),o.jsx(se,{w:a*.25,h:2,strong:!0}),o.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${u}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:u*_},(x,R)=>o.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:f},children:o.jsx("div",{style:{width:f*.5,height:f*.5,borderRadius:"50%",background:R===10?"var(--agd-bar)":"transparent"},children:o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:R===10?1:.25}})})})},R))})]})]})}function tp({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:r*.08,padding:4},children:[o.jsx("div",{style:{width:"100%",height:r*.2,borderRadius:4,background:"var(--agd-fill)"}}),o.jsx("div",{style:{width:"70%",height:Math.max(6,r*.1),borderRadius:3,background:"var(--agd-fill)"}}),o.jsx("div",{style:{width:"90%",height:Math.max(4,r*.06),borderRadius:3,background:"var(--agd-fill)"}}),o.jsx("div",{style:{width:"50%",height:Math.max(4,r*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function np({width:a,height:r}){return o.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:o.jsxs("div",{style:{height:"100%",flex:1,borderRadius:r/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${r*.3}px`,gap:4},children:[o.jsx(se,{w:"60%",h:2,strong:!0}),o.jsx("div",{style:{width:Math.max(6,r*.3),height:Math.max(6,r*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function lp({width:a,height:r}){const c=Math.min(a,r);return o.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",children:o.jsx("path",{d:`M${a/2} ${(r-c)/2+c*.1}l${c*.12} ${c*.25} ${c*.28} ${c*.04}-${c*.2} ${c*.2} ${c*.05} ${c*.28}-${c*.25}-${c*.12}-${c*.25} ${c*.12} ${c*.05}-${c*.28}-${c*.2}-${c*.2} ${c*.28}-${c*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function op({width:a,height:r}){const c=Math.min(a,r)/2-2;return o.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${a} ${r}`,fill:"none",children:[o.jsx("circle",{cx:a/2,cy:r/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),o.jsx("path",{d:`M${a/2} ${r/2-c}a${c} ${c} 0 0 1 ${c} ${c}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function ap({width:a,height:r}){const c=Math.min(36,r*.25,a*.12),u=Math.max(1,Math.min(3,Math.floor(r/80)));return o.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:u},(_,f)=>o.jsxs("div",{style:{display:"flex",gap:a*.04,alignItems:"flex-start"},children:[o.jsx(Ht,{w:c,h:c,radius:c*.25}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[o.jsx(se,{w:`${40+f*13%20}%`,h:3,strong:!0}),o.jsx(se,{w:`${60+f*17%25}%`,h:2})]})]},f))})}function sp({width:a,height:r}){const c=Math.max(2,Math.min(4,Math.floor(a/120))),u=Math.min(36,r*.25);return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:r*.06,padding:r*.06},children:[o.jsx(se,{w:a*.3,h:4,strong:!0}),o.jsx("div",{style:{display:"flex",gap:a*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:c},(_,f)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[o.jsx(Jn,{size:u}),o.jsx(se,{w:a*.12,h:3,strong:!0}),o.jsx(se,{w:a*.08,h:2})]},f))})]})}function ip({width:a,height:r}){const c=Math.max(2,Math.min(3,Math.floor(r/80)));return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:a*.06,gap:r*.04},children:[o.jsx(se,{w:a*.5,h:Math.max(5,r*.04),strong:!0}),o.jsx(se,{w:a*.35,h:2}),o.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:r*.03,marginTop:r*.04},children:Array.from({length:c},(u,_)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:Math.min(60,a*.2),h:2}),o.jsx(Ht,{w:"100%",h:Math.min(32,r*.1),radius:4})]},_))}),o.jsx(Ht,{w:"100%",h:Math.min(36,r*.12),radius:6,style:{marginTop:r*.03,background:"var(--agd-bar)"}}),o.jsx(se,{w:a*.4,h:2})]})}function rp({width:a,height:r}){return o.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:a*.04,gap:r*.03},children:[o.jsx(se,{w:a*.4,h:4,strong:!0}),o.jsx(se,{w:a*.6,h:2}),o.jsxs("div",{style:{display:"flex",gap:6,marginTop:r*.03},children:[o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:50,h:2}),o.jsx(Ht,{w:"100%",h:Math.min(28,r*.1),radius:4})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:40,h:2}),o.jsx(Ht,{w:"100%",h:Math.min(28,r*.1),radius:4})]})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[o.jsx(se,{w:50,h:2}),o.jsx(Ht,{w:"100%",h:Math.min(28,r*.1),radius:4})]}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[o.jsx(se,{w:60,h:2}),o.jsx(Ht,{w:"100%",h:"100%",radius:4})]}),o.jsx(Ht,{w:Math.min(120,a*.3),h:Math.min(30,r*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var cp={navigation:Fg,hero:Jg,sidebar:Pg,footer:ey,modal:ty,card:ny,text:ly,image:oy,table:ay,list:sy,button:iy,input:ry,form:cy,tabs:uy,avatar:dy,badge:_y,header:fy,section:hy,grid:my,dropdown:gy,toggle:yy,search:py,toast:xy,progress:by,chart:vy,video:wy,tooltip:Sy,breadcrumb:ky,pagination:jy,divider:Cy,accordion:My,carousel:Ey,pricing:Ny,testimonial:Ty,cta:Ry,alert:zy,banner:Dy,stat:Ay,stepper:Oy,tag:Ly,rating:By,map:$y,timeline:Hy,fileUpload:Uy,codeBlock:Yy,calendar:Xy,notification:Iy,productCard:qy,profile:Qy,drawer:Wy,popover:Gy,logo:Vy,faq:Zy,gallery:Ky,checkbox:Fy,radio:Jy,slider:Py,datePicker:ep,skeleton:tp,chip:np,icon:lp,spinner:op,feature:ap,team:sp,login:ip,contact:rp};function up({type:a,width:r,height:c,text:u}){const _=cp[a];return _?o.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:o.jsx(_,{width:r,height:c,text:u})}):o.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:a})})}var dp=`svg[fill=none] {
  fill: none !important;
}

.styles-module__overlayExiting___iEmYr {
  opacity: 0 !important;
  transition: opacity 0.25s ease !important;
  pointer-events: none !important;
}

.styles-module__overlay___aWh-q {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: auto;
  cursor: default;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
  --agd-stroke: rgba(59, 130, 246, 0.35);
  --agd-fill: rgba(59, 130, 246, 0.06);
  --agd-bar: rgba(59, 130, 246, 0.18);
  --agd-bar-strong: rgba(59, 130, 246, 0.28);
  --agd-text-3: rgba(255, 255, 255, 0.6);
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q.styles-module__light___ORIft {
  --agd-surface: #fff;
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) {
  --agd-surface: #141414;
}
.styles-module__overlay___aWh-q.styles-module__wireframe___itvQU {
  --agd-stroke: rgba(249, 115, 22, 0.35);
  --agd-fill: rgba(249, 115, 22, 0.06);
  --agd-bar: rgba(249, 115, 22, 0.18);
  --agd-bar-strong: rgba(249, 115, 22, 0.28);
}
.styles-module__overlay___aWh-q.styles-module__placing___45yD8 {
  cursor: crosshair;
}
.styles-module__overlay___aWh-q.styles-module__passthrough___xaFeE {
  pointer-events: none;
}

.styles-module__blankCanvas___t2Eue {
  position: fixed;
  inset: 0;
  z-index: 99994;
  background: #fff;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__visible___OKKqX {
  opacity: var(--canvas-opacity, 1);
  pointer-events: auto;
}
.styles-module__blankCanvas___t2Eue::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 24px 24px;
  background-position: 12px 12px;
  pointer-events: none;
  transition: opacity 0.2s ease;
}
.styles-module__blankCanvas___t2Eue.styles-module__gridActive___OZ-cf::after {
  opacity: 1;
  background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
}

.styles-module__paletteHeader___-Q5gQ {
  padding: 0 1rem 0.375rem;
}

.styles-module__paletteHeaderTitle___oHqZC {
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  letter-spacing: -0.0094em;
}
.styles-module__light___ORIft .styles-module__paletteHeaderTitle___oHqZC {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__paletteHeaderDesc___6i74T {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.45);
  margin-top: 2px;
  line-height: 14px;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T {
  color: rgba(0, 0, 0, 0.45);
}
.styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__paletteHeaderDesc___6i74T a:hover {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__paletteHeaderDesc___6i74T a:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__wireframePurposeWrap___To-tS {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__wireframePurposeWrap___To-tS.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__wireframePurposeInner___Lrahs {
  overflow: hidden;
}

.styles-module__wireframePurposeInput___7EtBN {
  display: block;
  width: calc(100% - 2rem);
  margin: 0.25rem 1rem 0.375rem;
  padding: 0.375rem 0.5rem;
  font-size: 0.8125rem;
  font-family: inherit;
  color: rgba(255, 255, 255, 0.85);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0.375rem;
  resize: none;
  outline: none;
  transition: border-color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.05);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN {
  color: rgba(0, 0, 0, 0.7);
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
.styles-module__light___ORIft .styles-module__wireframePurposeInput___7EtBN:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__canvasToggle___-QqSy {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
  margin: 0.25rem 1rem 0.25rem;
  padding: 0.375rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  border: 1px dashed rgba(255, 255, 255, 0.1);
  background: transparent;
  transition: background 0.15s ease, border-color 0.15s ease;
}
.styles-module__canvasToggle___-QqSy:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.15);
}
.styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy {
  border-color: rgba(0, 0, 0, 0.08);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy:hover {
  background: rgba(0, 0, 0, 0.02);
  border-color: rgba(0, 0, 0, 0.12);
}
.styles-module__light___ORIft .styles-module__canvasToggle___-QqSy.styles-module__active___hosp7 {
  background: #f97316;
  border-color: transparent;
  border-style: solid;
  box-shadow: none;
}

.styles-module__canvasToggleIcon___7pJ82 {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.35);
}
.styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}
.styles-module__light___ORIft .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(0, 0, 0, 0.25);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleIcon___7pJ82 {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__canvasToggleLabel___OanpY {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: -0.0094em;
}
.styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}
.styles-module__light___ORIft .styles-module__canvasToggleLabel___OanpY {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__canvasToggleLabel___OanpY {
  color: #fff;
}

.styles-module__canvasPurposeWrap___hj6zk {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.2s ease, opacity 0.15s ease;
  opacity: 1;
}
.styles-module__canvasPurposeWrap___hj6zk.styles-module__collapsed___Ms9vS {
  grid-template-rows: 0fr;
  opacity: 0;
}

.styles-module__canvasPurposeInner___VWiyu {
  overflow: hidden;
}

.styles-module__canvasPurposeToggle___byDH2 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  margin: 0.375rem 1rem 0.375rem 1.1875rem;
}
.styles-module__canvasPurposeToggle___byDH2 input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.styles-module__canvasPurposeCheck___xqd7l {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background 0.25s ease, border-color 0.25s ease;
}
.styles-module__canvasPurposeCheck___xqd7l svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
.styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
.styles-module__light___ORIft .styles-module__canvasPurposeCheck___xqd7l.styles-module__checked___-1JGH svg {
  color: #fff;
}

.styles-module__canvasPurposeLabel___Zu-tD {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
.styles-module__light___ORIft .styles-module__canvasPurposeLabel___Zu-tD {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__canvasPurposeHelp___jijwR {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: help;
}
.styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(255, 255, 255, 0.2);
  transform: translateY(2px);
  transition: color 0.15s ease;
}
.styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR svg {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__light___ORIft .styles-module__canvasPurposeHelp___jijwR:hover svg {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__placement___zcxv8 {
  position: absolute;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.08);
  cursor: grab;
  transition: box-shadow 0.15s, border-color 0.15s, opacity 0.15s ease, transform 0.15s ease;
  user-select: none;
  pointer-events: auto;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  animation: styles-module__placementEnter___TdRhf 0.25s cubic-bezier(0.34, 1.2, 0.64, 1);
}
.styles-module__placement___zcxv8:active {
  cursor: grabbing;
}
.styles-module__placement___zcxv8:hover {
  border-color: rgba(59, 130, 246, 0.5);
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.12);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #3c82f7;
  border-style: solid;
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8 {
  border-color: rgba(249, 115, 22, 0.4);
  background: rgba(249, 115, 22, 0.08);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8:hover {
  border-color: rgba(249, 115, 22, 0.5);
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 2px 8px rgba(249, 115, 22, 0.12);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6 {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__wireframe___itvQU .styles-module__placement___zcxv8.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.15), 0 2px 8px rgba(249, 115, 22, 0.15);
}
.styles-module__placement___zcxv8.styles-module__dragging___le6KZ {
  opacity: 0.85;
  z-index: 50;
}
.styles-module__placement___zcxv8.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__placementContent___f64A4 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.styles-module__placementLabel___0KvWl {
  position: absolute;
  top: -18px;
  left: 0;
  font-size: 10px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.7);
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 8px rgba(255, 255, 255, 0.5);
}
.styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__placementLabel___0KvWl {
  color: rgba(249, 115, 22, 0.7);
}
.styles-module__wireframe___itvQU .styles-module__selected___6yrp6 .styles-module__placementLabel___0KvWl {
  color: #f97316;
}

.styles-module__placementAnnotation___78pTr {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(0, 0, 0, 0.5);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__placementAnnotation___78pTr.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__sectionAnnotation___aUIs0 {
  position: absolute;
  bottom: -18px;
  left: 0;
  right: 0;
  font-weight: 450;
  color: rgba(59, 130, 246, 0.6);
  font-size: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-shadow: 0 0 4px rgba(255, 255, 255, 0.9), 0 0 8px rgba(255, 255, 255, 0.6);
  opacity: 0;
  transform: translateY(-2px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.styles-module__sectionAnnotation___aUIs0.styles-module__annotationVisible___mrUyA {
  opacity: 1;
  transform: translateY(0);
}

.styles-module__handle___Ikbxm {
  position: absolute;
  width: 8px;
  height: 8px;
  background: #fff;
  border: 1.5px solid #3c82f7;
  border-radius: 2px;
  z-index: 12;
  box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.12);
  opacity: 0;
  transform: scale(0.3);
  pointer-events: none;
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.styles-module__placement___zcxv8:hover .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:hover .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:hover .styles-module__handle___Ikbxm, .styles-module__placement___zcxv8:active .styles-module__handle___Ikbxm, .styles-module__sectionOutline___s0hy-:active .styles-module__handle___Ikbxm, .styles-module__ghostOutline___po-kO:active .styles-module__handle___Ikbxm, .styles-module__selected___6yrp6 .styles-module__handle___Ikbxm {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__sectionOutline___s0hy- .styles-module__handle___Ikbxm {
  border-color: inherit;
}
.styles-module__wireframe___itvQU .styles-module__handle___Ikbxm {
  border-color: #f97316;
}

.styles-module__handleNw___4TMIj {
  top: -4px;
  left: -4px;
  cursor: nw-resize;
}

.styles-module__handleNe___mnsTh {
  top: -4px;
  right: -4px;
  cursor: ne-resize;
}

.styles-module__handleSe___oSFnk {
  bottom: -4px;
  right: -4px;
  cursor: se-resize;
}

.styles-module__handleSw___pi--Z {
  bottom: -4px;
  left: -4px;
  cursor: sw-resize;
}

.styles-module__handleN___aBA-Q, .styles-module__handleE___0hM5u, .styles-module__handleS___JjDRv, .styles-module__handleW___ERWGQ {
  opacity: 0 !important;
  pointer-events: none !important;
}

.styles-module__edgeHandle___XxXdT {
  position: absolute;
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__edgeHandle___XxXdT::after {
  content: "";
  position: absolute;
  border-radius: 4px;
  background: #3c82f7;
}
.styles-module__wireframe___itvQU .styles-module__edgeHandle___XxXdT::after {
  background: #f97316;
}
.styles-module__edgeHandle___XxXdT::after {
  opacity: 0;
  transition: opacity 0.1s ease, transform 0.1s ease;
  transform: scale(0.8);
}
.styles-module__edgeHandle___XxXdT:hover::after {
  opacity: 0.85;
  transform: scale(1);
}
.styles-module__edgeHandle___XxXdT svg {
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.1s ease;
  filter: drop-shadow(0 0 2px var(--agd-surface));
}
.styles-module__edgeHandle___XxXdT:hover svg {
  opacity: 1;
}

.styles-module__edgeN___-JJDj, .styles-module__edgeS___66lMX {
  left: 12px;
  right: 12px;
  height: 12px;
  cursor: n-resize;
}
.styles-module__edgeN___-JJDj::after, .styles-module__edgeS___66lMX::after {
  width: 24px;
  height: 4px;
}

.styles-module__edgeN___-JJDj {
  top: -6px;
}

.styles-module__edgeS___66lMX {
  bottom: -6px;
  cursor: s-resize;
}

.styles-module__edgeE___1bGDa, .styles-module__edgeW___lHQNo {
  top: 12px;
  bottom: 12px;
  width: 12px;
  cursor: e-resize;
}
.styles-module__edgeE___1bGDa::after, .styles-module__edgeW___lHQNo::after {
  width: 4px;
  height: 24px;
}

.styles-module__edgeE___1bGDa {
  right: -6px;
}

.styles-module__edgeW___lHQNo {
  left: -6px;
  cursor: w-resize;
}

.styles-module__deleteButton___LkGCb {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  z-index: 15;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.8);
  will-change: opacity, transform;
  transition: opacity 0.2s ease-out, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease, color 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}
.styles-module__placement___zcxv8:hover .styles-module__deleteButton___LkGCb, .styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-:hover .styles-module__deleteButton___LkGCb, .styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO:hover .styles-module__deleteButton___LkGCb, .styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 .styles-module__deleteButton___LkGCb {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}
.styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
  box-shadow: 0 1px 4px rgba(239, 68, 68, 0.3);
  transform: scale(1.1);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb {
  background: rgba(40, 40, 40, 0.9);
  border-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
}
.styles-module__overlay___aWh-q:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover, .styles-module__rearrangeOverlay___-3R3t:not(.styles-module__light___ORIft) .styles-module__deleteButton___LkGCb:hover {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

.styles-module__drawBox___BrVAa {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 2px solid #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.15);
}

.styles-module__selectBox___Iu8kB {
  position: fixed;
  pointer-events: none;
  z-index: 99996;
  border: 1px dashed #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  border-radius: 2px;
}

.styles-module__sizeIndicator___7zJ4y {
  position: fixed;
  pointer-events: none;
  z-index: 100001;
  font-size: 10px;
  color: #fff;
  background: #3c82f7;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.styles-module__guideLine___DUQY2 {
  pointer-events: none;
  z-index: 100001;
  background: #f0f;
  opacity: 0.5;
}

.styles-module__dragPreview___onPbU {
  position: fixed;
  z-index: 100002;
  pointer-events: none;
  border: 1.5px dashed #3c82f7;
  border-radius: 6px;
  background: rgba(59, 130, 246, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 600;
  color: #3c82f7;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 4px 16px rgba(59, 130, 246, 0.15);
  transition: width 0.08s ease, height 0.08s ease, opacity 0.08s ease;
}

.styles-module__dragPreviewWireframe___jsg0G {
  border-color: #f97316;
  background: rgba(249, 115, 22, 0.1);
  color: #f97316;
  box-shadow: 0 4px 16px rgba(249, 115, 22, 0.15);
}

.styles-module__palette___C7iSH {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  width: 256px;
  overflow: hidden;
  background: #1c1c1c;
  border: none;
  border-radius: 1rem;
  padding: 13px 0 16px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  z-index: 100001;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  cursor: default;
  opacity: 0;
  filter: blur(5px);
}
.styles-module__palette___C7iSH .styles-module__paletteItem___6TlnA,
.styles-module__palette___C7iSH .styles-module__paletteItemLabel___6ncO4,
.styles-module__palette___C7iSH .styles-module__paletteSectionTitle___PqnjX,
.styles-module__palette___C7iSH .styles-module__paletteFooter___QYnAG {
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__palette___C7iSH.styles-module__enter___6LYk5 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__palette___C7iSH.styles-module__exit___iSGRw {
  opacity: 0;
  transform: translateY(6px);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
.styles-module__palette___C7iSH.styles-module__light___ORIft {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}

.styles-module__paletteSection___V8DEA {
  padding: 0 1rem;
}
.styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteSection___V8DEA + .styles-module__paletteSection___V8DEA {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteSectionTitle___PqnjX {
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  padding: 0 0 3px 3px;
}
.styles-module__light___ORIft .styles-module__paletteSectionTitle___PqnjX {
  color: rgba(0, 0, 0, 0.4);
}

.styles-module__paletteItem___6TlnA {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.25rem 0.25rem;
  margin-bottom: 1px;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.15s ease, border-color 0.15s ease;
  border: 1px solid transparent;
  user-select: none;
  min-height: 24px;
}
.styles-module__paletteItem___6TlnA:hover {
  background: rgba(255, 255, 255, 0.1);
}
.styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__active___hosp7 {
  background: #3c82f7;
  border-color: transparent;
}
.styles-module__light___ORIft .styles-module__paletteItem___6TlnA.styles-module__wireframe___itvQU.styles-module__active___hosp7 {
  background: #f97316;
}

.styles-module__paletteItemIcon___0NPQK {
  width: 20px;
  height: 16px;
  border-radius: 2px;
  border: 1px dashed rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.45);
}
.styles-module__paletteItemIcon___0NPQK svg {
  display: block;
  width: 20px;
  height: 16px;
}
.styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
.styles-module__light___ORIft .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(0, 0, 0, 0.12);
  background: rgba(0, 0, 0, 0.02);
  color: rgba(0, 0, 0, 0.4);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemIcon___0NPQK {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__paletteItemLabel___6ncO4 {
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  letter-spacing: -0.0094em;
  line-height: 1;
  min-width: 0;
}
.styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}
.styles-module__light___ORIft .styles-module__paletteItemLabel___6ncO4 {
  color: rgba(0, 0, 0, 0.7);
}
.styles-module__light___ORIft .styles-module__active___hosp7 .styles-module__paletteItemLabel___6ncO4 {
  color: #fff;
  font-weight: 600;
}

.styles-module__placeScroll___7sClM {
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-top: 0.25rem;
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px);
}
.styles-module__placeScroll___7sClM.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM.styles-module__fadeTop___KT9tF.styles-module__fadeBottom___x3ShT {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
  mask-image: linear-gradient(to bottom, transparent 0, black 32px, black calc(100% - 32px), transparent 100%);
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar {
  width: 3px;
}
.styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 2px;
}
.styles-module__light___ORIft .styles-module__placeScroll___7sClM::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.1);
}

.styles-module__paletteFooterWrap___71-fI {
  display: grid;
  grid-template-rows: 1fr;
  transition: grid-template-rows 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__paletteFooterWrap___71-fI.styles-module__footerHidden___fJUik {
  grid-template-rows: 0fr;
}

.styles-module__paletteFooterInnerContent___VC26h {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__footerHidden___fJUik .styles-module__paletteFooterInnerContent___VC26h {
  opacity: 0;
  transform: translateY(4px);
}

.styles-module__paletteFooterInner___dfylY {
  overflow: hidden;
}

.styles-module__paletteFooter___QYnAG {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  padding: 0 1rem;
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__light___ORIft .styles-module__paletteFooter___QYnAG {
  border-top-color: rgba(0, 0, 0, 0.07);
}

.styles-module__paletteFooterCount___D3Fia {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterCount___D3Fia {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__paletteFooterClear___ybBoa {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  font-family: inherit;
  transition: color 0.15s ease;
}
.styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa {
  color: rgba(0, 0, 0, 0.5);
}
.styles-module__light___ORIft .styles-module__paletteFooterClear___ybBoa:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__paletteFooterActions___fLzv8 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.styles-module__rollingWrap___S75jM {
  display: inline-block;
  overflow: hidden;
  height: 1.15em;
  position: relative;
  vertical-align: bottom;
}

.styles-module__rollingNum___1RKDx {
  position: absolute;
  left: 0;
  top: 0;
}

.styles-module__exitUp___AFDRW {
  animation: styles-module__numExitUp___FRQqx 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterUp___CPlXb {
  animation: styles-module__numEnterUp___2Yd-w 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__exitDown___-1yAy {
  animation: styles-module__numExitDown___xm5by 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

.styles-module__enterDown___DDuFR {
  animation: styles-module__numEnterDown___hpxBk 0.25s cubic-bezier(0.32, 0.72, 0, 1) forwards;
}

@keyframes styles-module__numExitUp___FRQqx {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterUp___2Yd-w {
  from {
    transform: translateY(110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes styles-module__numExitDown___xm5by {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(110%);
    opacity: 0;
  }
}
@keyframes styles-module__numEnterDown___hpxBk {
  from {
    transform: translateY(-110%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.styles-module__rearrangeOverlay___-3R3t {
  position: fixed;
  inset: 0;
  z-index: 99995;
  pointer-events: none;
  cursor: default;
  user-select: none;
  animation: styles-module__overlayFadeIn___aECVy 0.15s ease;
}

.styles-module__hoverHighlight___8eT-v {
  position: fixed;
  pointer-events: none;
  z-index: 99994;
  border: 2px dashed rgba(59, 130, 246, 0.5);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.06);
  animation: styles-module__highlightFadeIn___Lg7KY 0.12s ease;
}

.styles-module__sectionOutline___s0hy- {
  position: fixed;
  border: 2px solid;
  border-radius: 4px;
  cursor: grab;
}
.styles-module__sectionOutline___s0hy-:active {
  cursor: grabbing;
}
.styles-module__sectionOutline___s0hy- {
  transition: box-shadow 0.15s, border-color 0.3s, background-color 0.3s, border-style 0s;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}
.styles-module__sectionOutline___s0hy-:hover {
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1), 0 4px 12px rgba(0, 0, 0, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6 {
  border-style: solid;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__selected___6yrp6:hover {
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) {
  border: 1.5px dashed rgba(150, 150, 150, 0.35);
  background-color: transparent !important;
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover {
  border-color: rgba(150, 150, 150, 0.6);
  box-shadow: none;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionLabel___F80HQ {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionLabel___F80HQ {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__movedBadge___s8z-q,
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6) .styles-module__sectionDimensions___RcJSL {
  opacity: 0;
  transition: opacity 0.15s ease;
}
.styles-module__sectionOutline___s0hy-.styles-module__settled___b5U5o:not(.styles-module__selected___6yrp6):hover .styles-module__sectionDimensions___RcJSL {
  opacity: 1;
}
.styles-module__sectionOutline___s0hy-.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__sectionLabel___F80HQ {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 10px;
  font-weight: 600;
  color: #fff;
  padding: 2px 8px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  max-width: calc(100% - 8px);
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__movedBadge___s8z-q {
  position: absolute;
  bottom: 22px;
  right: 4px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: #22c55e;
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.styles-module__movedBadge___s8z-q.styles-module__badgeVisible___npbdS {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.2s cubic-bezier(0.34, 1.2, 0.64, 1), transform 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
}

.styles-module__resizedBadge___u51V8 {
  background: #3c82f7;
  bottom: 40px;
}

.styles-module__sectionDimensions___RcJSL {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.5);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
.styles-module__light___ORIft .styles-module__sectionDimensions___RcJSL {
  color: rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.7);
}

.styles-module__wireframeNotice___4GJyB {
  position: fixed;
  bottom: 16px;
  left: 24px;
  z-index: 99995;
  font-size: 9.5px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.4);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: auto;
  animation: styles-module__overlayFadeIn___aECVy 0.3s ease;
  line-height: 1.5;
  max-width: 280px;
}

.styles-module__wireframeOpacityRow___CJXzi {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.styles-module__wireframeOpacityLabel___afkfT {
  font-size: 9px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.32);
  letter-spacing: 0.02em;
  white-space: nowrap;
  user-select: none;
}

.styles-module__wireframeOpacitySlider___YcoEs {
  -webkit-appearance: none;
  appearance: none;
  width: 56px;
  height: 4px;
  background: rgba(0, 0, 0, 0.08);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs:hover {
  background: rgba(0, 0, 0, 0.13);
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  cursor: pointer;
  transition: background 0.15s ease;
}
.styles-module__wireframeOpacitySlider___YcoEs::-webkit-slider-thumb:hover {
  background: rgb(224.4209205021, 95.3548117155, 5.7790794979);
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-thumb {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f97316;
  border: none;
  cursor: pointer;
}
.styles-module__wireframeOpacitySlider___YcoEs::-moz-range-track {
  background: rgba(0, 0, 0, 0.08);
  height: 4px;
  border-radius: 2px;
}

.styles-module__wireframeNoticeTitleRow___PJqyG {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 2px;
}

.styles-module__wireframeNoticeTitle___okr08 {
  font-weight: 600;
  color: rgba(0, 0, 0, 0.55);
}

.styles-module__wireframeNoticeDivider___PNKQ6 {
  width: 1px;
  height: 8px;
  background: rgba(0, 0, 0, 0.12);
  margin: 0 8px;
  flex-shrink: 0;
}

.styles-module__wireframeStartOver___YFk-I {
  font-size: 9.5px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.35);
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;
  text-decoration: none;
  transition: color 0.12s ease;
  white-space: nowrap;
}
.styles-module__wireframeStartOver___YFk-I:hover {
  color: rgba(0, 0, 0, 0.6);
}

.styles-module__ghostOutline___po-kO {
  position: fixed;
  border: 1.5px dashed rgba(59, 130, 246, 0.4);
  border-radius: 4px;
  background: rgba(59, 130, 246, 0.04);
  cursor: grab;
  opacity: 0.5;
  user-select: none;
  pointer-events: auto;
  animation: styles-module__ghostEnter___EC3Mb 0.25s ease;
  transition: box-shadow 0.15s, border-color 0.3s, opacity 0.25s;
}
.styles-module__ghostOutline___po-kO:active {
  cursor: grabbing;
}
.styles-module__ghostOutline___po-kO:hover {
  opacity: 0.7;
  box-shadow: 0 0 0 1px rgba(59, 130, 246, 0.1), 0 4px 12px rgba(0, 0, 0, 0.08);
}
.styles-module__ghostOutline___po-kO.styles-module__selected___6yrp6 {
  opacity: 1;
  border-style: solid;
  border-width: 2px;
  border-color: #3c82f7;
  background: rgba(59, 130, 246, 0.08);
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15), 0 2px 8px rgba(59, 130, 246, 0.15);
}
.styles-module__ghostOutline___po-kO.styles-module__exiting___YrM8F {
  opacity: 0;
  transform: scale(0.97);
  pointer-events: none;
  animation: none;
  transition: opacity 0.2s ease, transform 0.2s cubic-bezier(0.32, 0.72, 0, 1);
}

.styles-module__ghostBadge___tsQUK {
  position: absolute;
  bottom: calc(100% + 4px);
  left: -1px;
  font-size: 9px;
  font-weight: 600;
  color: rgba(59, 130, 246, 0.9);
  background: rgba(59, 130, 246, 0.08);
  border: 1px solid rgba(59, 130, 246, 0.2);
  padding: 1px 5px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  letter-spacing: 0.02em;
  line-height: 1.2;
  animation: styles-module__badgeSlideIn___typJ7 0.2s ease both;
}

@keyframes styles-module__badgeSlideIn___typJ7 {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__ghostBadgeExtra___6CVoD {
  display: inline;
  animation: styles-module__badgeExtraIn___i4W8F 0.2s ease both;
}

@keyframes styles-module__badgeExtraIn___i4W8F {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.styles-module__originalOutline___Y6DD1 {
  position: fixed;
  border: 1.5px dashed rgba(150, 150, 150, 0.3);
  border-radius: 4px;
  background: transparent;
  pointer-events: none;
  user-select: none;
  animation: styles-module__sectionEnter___-8BXT 0.2s ease;
}

.styles-module__originalLabel___HqI9g {
  position: absolute;
  top: 4px;
  left: 4px;
  font-size: 9px;
  font-weight: 500;
  color: rgba(150, 150, 150, 0.5);
  padding: 1px 6px;
  border-radius: 3px;
  white-space: nowrap;
  pointer-events: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background: rgba(150, 150, 150, 0.08);
}

.styles-module__connectorSvg___Lovld {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__connectorLine___XeWh- {
  transition: opacity 0.2s ease;
  animation: styles-module__connectorDraw___8sK5I 0.3s ease both;
}

.styles-module__connectorDot___yvf7C {
  transform-box: fill-box;
  transform-origin: center;
  animation: styles-module__connectorDotIn___NwTUq 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
}

@keyframes styles-module__connectorDraw___8sK5I {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__connectorDotIn___NwTUq {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
.styles-module__connectorExiting___2lLOs {
  animation: styles-module__connectorOut___5QoPl 0.2s ease forwards;
}
.styles-module__connectorExiting___2lLOs .styles-module__connectorDot___yvf7C {
  animation: styles-module__connectorDotOut___FEq7e 0.2s ease forwards;
}

@keyframes styles-module__connectorOut___5QoPl {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__connectorDotOut___FEq7e {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes styles-module__placementEnter___TdRhf {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__sectionEnter___-8BXT {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__highlightFadeIn___Lg7KY {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__overlayFadeIn___aECVy {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__ghostEnter___EC3Mb {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
  to {
    opacity: 0.6;
    transform: scale(1);
  }
}`,_p={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-design-mode-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(a)),a.textContent=dp}var J=_p,ps=24,Vr=5;function tm(a,r,c,u,_){let f=1/0,x=1/0;const R=a.x,b=a.x+a.width,k=a.x+a.width/2,M=a.y,A=a.y+a.height,T=a.y+a.height/2,ne=!u,$=ne?[R,b,k]:[...u.left?[R]:[],...u.right?[b]:[]],le=ne?[M,A,T]:[...u.top?[M]:[],...u.bottom?[A]:[]],U=[];for(const Re of r)c.has(Re.id)||U.push(Re);_&&U.push(..._);for(const Re of U){const qe=Re.x,tt=Re.x+Re.width,ze=Re.x+Re.width/2,Xe=Re.y,v=Re.y+Re.height,F=Re.y+Re.height/2;for(const Y of $)for(const ye of[qe,tt,ze]){const ve=ye-Y;Math.abs(ve)<Vr&&Math.abs(ve)<Math.abs(f)&&(f=ve)}for(const Y of le)for(const ye of[Xe,v,F]){const ve=ye-Y;Math.abs(ve)<Vr&&Math.abs(ve)<Math.abs(x)&&(x=ve)}}const q=Math.abs(f)<Vr?f:0,me=Math.abs(x)<Vr?x:0,pe=[],be=new Set,et=R+q,Je=b+q,K=k+q,Ee=M+me,ae=A+me,Fe=T+me;for(const Re of U){const qe=Re.x,tt=Re.x+Re.width,ze=Re.x+Re.width/2,Xe=Re.y,v=Re.y+Re.height,F=Re.y+Re.height/2;for(const Y of[qe,ze,tt])for(const ye of[et,K,Je])if(Math.abs(ye-Y)<.5){const ve=`x:${Math.round(Y)}`;be.has(ve)||(be.add(ve),pe.push({axis:"x",pos:Y}))}for(const Y of[Xe,F,v])for(const ye of[Ee,Fe,ae])if(Math.abs(ye-Y)<.5){const ve=`y:${Math.round(Y)}`;be.has(ve)||(be.add(ve),pe.push({axis:"y",pos:Y}))}}return{dx:q,dy:me,guides:pe}}function nm(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function fp({placements:a,onChange:r,activeComponent:c,onActiveComponentChange:u,isDarkMode:_,exiting:f,onInteractionChange:x,className:R,passthrough:b,extraSnapRects:k,onSelectionChange:M,deselectSignal:A,onDragMove:T,onDragEnd:ne,clearSignal:$,wireframe:le}){const[U,q]=m.useState(new Set),[me,pe]=m.useState(null),[be,et]=m.useState(null),[Je,K]=m.useState(null),[Ee,ae]=m.useState([]),[Fe,Re]=m.useState(null),[qe,tt]=m.useState(!1),ze=m.useRef(!1),[Xe,v]=m.useState(new Set),F=m.useRef(new Map),Y=m.useRef(null),ye=m.useRef(null),ve=m.useRef(a);ve.current=a;const S=m.useRef(M);S.current=M;const I=m.useRef(T);I.current=T;const ce=m.useRef(ne);ce.current=ne;const xe=m.useRef(A);m.useEffect(()=>{A!==xe.current&&(xe.current=A,q(new Set))},[A]);const Oe=m.useRef($);m.useEffect(()=>{if($!==void 0&&$!==Oe.current){Oe.current=$;const Z=new Set(ve.current.map(De=>De.id));Z.size>0&&(v(Z),q(new Set),ye.current=null,Ke(()=>{r([]),v(new Set)},180))}},[$,r]),m.useEffect(()=>{const Z=De=>{const st=De.target;if(!(st.tagName==="INPUT"||st.tagName==="TEXTAREA"||st.isContentEditable)){if((De.key==="Backspace"||De.key==="Delete")&&U.size>0){De.preventDefault();const ct=new Set(U);v(ct),q(new Set),Ke(()=>{r(ve.current.filter(vt=>!ct.has(vt.id))),v(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(De.key)&&U.size>0){De.preventDefault();const ct=De.shiftKey?20:1,vt=De.key==="ArrowLeft"?-ct:De.key==="ArrowRight"?ct:0,nt=De.key==="ArrowUp"?-ct:De.key==="ArrowDown"?ct:0;r(a.map(Qe=>U.has(Qe.id)?{...Qe,x:Math.max(0,Qe.x+vt),y:Math.max(0,Qe.y+nt)}:Qe));return}if(De.key==="Escape"){c?u(null):U.size>0&&q(new Set);return}}};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[U,c,a,r,u]);const at=m.useCallback(Z=>{if(Z.button!==0||b||Z.target.closest(`.${J.placement}`))return;Z.preventDefault(),Z.stopPropagation();const st=window.scrollY,Ie=Z.clientX,ct=Z.clientY;if(c){ye.current="place",x?.(!0);let vt=!1,nt=Ie,Qe=ct;const mt=Ae=>{nt=Ae.clientX,Qe=Ae.clientY;const D=Math.abs(nt-Ie),L=Math.abs(Qe-ct);if((D>5||L>5)&&(vt=!0),vt){const P=Math.min(Ie,nt),oe=Math.min(ct,Qe),ke=Math.abs(nt-Ie),_e=Math.abs(Qe-ct);pe({x:P,y:oe,w:ke,h:_e}),K({x:Ae.clientX+12,y:Ae.clientY+12,text:`${Math.round(ke)} × ${Math.round(_e)}`})}},At=Ae=>{window.removeEventListener("mousemove",mt),window.removeEventListener("mouseup",At),pe(null),K(null),ye.current=null,x?.(!1);const D=Ce[c];let L,P,oe,ke;vt?(L=Math.min(Ie,nt),P=Math.min(ct,Qe)+st,oe=Math.max(ps,Math.abs(nt-Ie)),ke=Math.max(ps,Math.abs(Qe-ct))):(oe=D.width,ke=D.height,L=Ie-oe/2,P=ct+st-ke/2),L=Math.max(0,L),P=Math.max(0,P);const _e={id:nm(),type:c,x:L,y:P,width:oe,height:ke,scrollY:st,timestamp:Date.now()},ie=[...a,_e];r(ie),q(new Set([_e.id])),u(null)};window.addEventListener("mousemove",mt),window.addEventListener("mouseup",At)}else{Z.shiftKey||q(new Set),ye.current="select";let vt=!1;const nt=mt=>{const At=Math.abs(mt.clientX-Ie),Ae=Math.abs(mt.clientY-ct);if((At>4||Ae>4)&&(vt=!0),vt){const D=Math.min(Ie,mt.clientX),L=Math.min(ct,mt.clientY);et({x:D,y:L,w:Math.abs(mt.clientX-Ie),h:Math.abs(mt.clientY-ct)})}},Qe=mt=>{if(window.removeEventListener("mousemove",nt),window.removeEventListener("mouseup",Qe),ye.current=null,vt){const At=Math.min(Ie,mt.clientX),Ae=Math.min(ct,mt.clientY)+st,D=Math.abs(mt.clientX-Ie),L=Math.abs(mt.clientY-ct),P=new Set(Z.shiftKey?U:new Set);for(const oe of a)oe.y-st,oe.x+oe.width>At&&oe.x<At+D&&oe.y+oe.height>Ae&&oe.y<Ae+L&&P.add(oe.id);q(P)}et(null)};window.addEventListener("mousemove",nt),window.addEventListener("mouseup",Qe)}},[c,b,a,r,U]),dt=m.useCallback((Z,De)=>{if(Z.button!==0)return;const st=Z.target;if(st.closest(`.${J.handle}`)||st.closest(`.${J.deleteButton}`))return;Z.preventDefault(),Z.stopPropagation();let Ie;Z.shiftKey?(Ie=new Set(U),Ie.has(De)?Ie.delete(De):Ie.add(De)):U.has(De)?Ie=new Set(U):Ie=new Set([De]),q(Ie),(Ie.size!==U.size||[...Ie].some(_e=>!U.has(_e)))&&S.current?.(Ie,Z.shiftKey);const vt=Z.clientX,nt=Z.clientY,Qe=new Map;for(const _e of a)Ie.has(_e.id)&&Qe.set(_e.id,{x:_e.x,y:_e.y});ye.current="move",x?.(!0);let mt=!1,At=!1,Ae=a,D=0,L=0;const P=new Map;for(const _e of a)Qe.has(_e.id)&&P.set(_e.id,{w:_e.width,h:_e.height});const oe=_e=>{const ie=_e.clientX-vt,Be=_e.clientY-nt;if((Math.abs(ie)>2||Math.abs(Be)>2)&&(mt=!0),!mt)return;if(_e.altKey&&!At){At=!0;const $e=[];for(const pt of a)Qe.has(pt.id)&&$e.push({...pt,id:nm(),timestamp:Date.now()});Ae=[...a,...$e]}let it=1/0,yt=1/0,Ct=-1/0,Te=-1/0;for(const[$e,pt]of Qe){const lt=P.get($e);lt&&(it=Math.min(it,pt.x+ie),yt=Math.min(yt,pt.y+Be),Ct=Math.max(Ct,pt.x+ie+lt.w),Te=Math.max(Te,pt.y+Be+lt.h))}const Q={x:it,y:yt,width:Ct-it,height:Te-yt},{dx:de,dy:ue,guides:fe}=tm(Q,Ae,new Set(Qe.keys()),void 0,k);ae(fe);const ut=ie+de,Se=Be+ue;D=ut,L=Se,r(Ae.map($e=>{const pt=Qe.get($e.id);return pt?{...$e,x:Math.max(0,pt.x+ut),y:Math.max(0,pt.y+Se)}:$e})),I.current?.(ut,Se)},ke=()=>{window.removeEventListener("mousemove",oe),window.removeEventListener("mouseup",ke),ye.current=null,x?.(!1),ae([]),ce.current?.(D,L,mt)};window.addEventListener("mousemove",oe),window.addEventListener("mouseup",ke)},[U,a,r,x]),qt=m.useCallback((Z,De,st)=>{Z.preventDefault(),Z.stopPropagation();const Ie=a.find(P=>P.id===De);if(!Ie)return;q(new Set([De])),ye.current="resize",x?.(!0);const ct=Z.clientX,vt=Z.clientY,nt=Ie.width,Qe=Ie.height,mt=Ie.x,At=Ie.y,Ae={left:st.includes("w"),right:st.includes("e"),top:st.includes("n"),bottom:st.includes("s")},D=P=>{const oe=P.clientX-ct,ke=P.clientY-vt;let _e=nt,ie=Qe,Be=mt,it=At;st.includes("e")&&(_e=Math.max(ps,nt+oe)),st.includes("w")&&(_e=Math.max(ps,nt-oe),Be=mt+nt-_e),st.includes("s")&&(ie=Math.max(ps,Qe+ke)),st.includes("n")&&(ie=Math.max(ps,Qe-ke),it=At+Qe-ie);const yt={x:Be,y:it,width:_e,height:ie},{dx:Ct,dy:Te,guides:Q}=tm(yt,ve.current,new Set([De]),Ae,k);ae(Q),Ct!==0&&(Ae.right?_e+=Ct:Ae.left&&(Be+=Ct,_e-=Ct)),Te!==0&&(Ae.bottom?ie+=Te:Ae.top&&(it+=Te,ie-=Te)),r(ve.current.map(de=>de.id===De?{...de,x:Be,y:it,width:_e,height:ie}:de)),K({x:P.clientX+12,y:P.clientY+12,text:`${Math.round(_e)} × ${Math.round(ie)}`})},L=()=>{window.removeEventListener("mousemove",D),window.removeEventListener("mouseup",L),K(null),ye.current=null,x?.(!1),ae([])};window.addEventListener("mousemove",D),window.addEventListener("mouseup",L)},[a,r,x]),Et=m.useCallback(Z=>{ye.current=null,v(De=>{const st=new Set(De);return st.add(Z),st}),q(De=>{const st=new Set(De);return st.delete(Z),st}),Ke(()=>{r(ve.current.filter(De=>De.id!==Z)),v(De=>{const st=new Set(De);return st.delete(Z),st})},180)},[r]),kn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},rn=m.useCallback(Z=>{const De=a.find(st=>st.id===Z);De&&(ze.current=!!De.text,Re(Z),tt(!1))},[a]),_n=m.useCallback(()=>{Fe&&(tt(!0),Ke(()=>{Re(null),tt(!1)},150))},[Fe]);m.useEffect(()=>{f&&Fe&&_n()},[f]);const Mn=m.useCallback(Z=>{Fe&&(r(a.map(De=>De.id===Fe?{...De,text:Z.trim()||void 0}:De)),_n())},[Fe,a,r,_n]),tn=typeof window<"u"?window.scrollY:0,zn=["nw","ne","se","sw"],Dn=le?"#f97316":"#3c82f7",yl=[{dir:"n",cls:J.edgeN,arrow:o.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:o.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Dn})})},{dir:"e",cls:J.edgeE,arrow:o.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:o.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Dn})})},{dir:"s",cls:J.edgeS,arrow:o.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:o.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Dn})})},{dir:"w",cls:J.edgeW,arrow:o.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:o.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Dn})})}];return o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:Y,className:`${J.overlay} ${_?"":J.light} ${c?J.placing:""} ${b?J.passthrough:""} ${f?J.overlayExiting:""} ${le?J.wireframe:""}${R?` ${R}`:""}`,"data-feedback-toolbar":!0,onMouseDown:at,children:a.map(Z=>{const De=U.has(Z.id),st=Hl[Z.type]?.label||Z.type,Ie=Z.y-tn;return o.jsxs("div",{"data-design-placement":Z.id,className:`${J.placement} ${De?J.selected:""} ${Xe.has(Z.id)?J.exiting:""}`,style:{left:Z.x,top:Ie,width:Z.width,height:Z.height,position:"fixed"},onMouseDown:ct=>dt(ct,Z.id),onDoubleClick:()=>rn(Z.id),children:[o.jsx("span",{className:J.placementLabel,children:st}),o.jsx("span",{className:`${J.placementAnnotation} ${Z.text?J.annotationVisible:""}`,children:(Z.text&&F.current.set(Z.id,Z.text),Z.text||F.current.get(Z.id)||"")}),o.jsx("div",{className:J.placementContent,children:o.jsx(up,{type:Z.type,width:Z.width,height:Z.height,text:Z.text})}),o.jsx("div",{className:J.deleteButton,onMouseDown:ct=>ct.stopPropagation(),onClick:()=>Et(Z.id),children:"✕"}),zn.map(ct=>o.jsx("div",{className:`${J.handle} ${J[`handle${ct.charAt(0).toUpperCase()}${ct.slice(1)}`]}`,onMouseDown:vt=>qt(vt,Z.id,ct)},ct)),yl.map(({dir:ct,cls:vt,arrow:nt})=>o.jsx("div",{className:`${J.edgeHandle} ${vt}`,onMouseDown:Qe=>qt(Qe,Z.id,ct),children:nt},ct))]},Z.id)})}),Fe&&(()=>{const Z=a.find(At=>At.id===Fe);if(!Z)return null;const De=Z.y-tn,st=Z.x+Z.width/2,Ie=De-8,ct=De+Z.height+8,vt=Ie>200,nt=ct<window.innerHeight-100,Qe=Math.max(160,Math.min(window.innerWidth-160,st));let mt;return vt?mt={left:Qe,bottom:window.innerHeight-Ie}:nt?mt={left:Qe,top:ct}:mt={left:Qe,top:Math.max(80,window.innerHeight/2-80)},o.jsx(sc,{element:Hl[Z.type]?.label||Z.type,placeholder:kn[Z.type]||"Label or content text",initialValue:Z.text??"",submitLabel:ze.current?"Save":"Set",onSubmit:Mn,onCancel:_n,onDelete:ze.current?()=>{Mn("")}:void 0,isExiting:qe,lightMode:!_,style:mt})})(),me&&o.jsx("div",{className:J.drawBox,style:{left:me.x,top:me.y,width:me.w,height:me.h},"data-feedback-toolbar":!0}),be&&o.jsx("div",{className:J.selectBox,style:{left:be.x,top:be.y,width:be.w,height:be.h},"data-feedback-toolbar":!0}),Je&&o.jsx("div",{className:J.sizeIndicator,style:{left:Je.x,top:Je.y},"data-feedback-toolbar":!0,children:Je.text}),Ee.map((Z,De)=>o.jsx("div",{className:J.guideLine,style:Z.axis==="x"?{position:"fixed",left:Z.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Z.pos-tn,right:0,height:1},"data-feedback-toolbar":!0},`${Z.axis}-${Z.pos}-${De}`))]})}function hp(a){if(!a)return"";const r=a.scrollTop>2,c=a.scrollTop+a.clientHeight<a.scrollHeight-2;return`${r?J.fadeTop:""} ${c?J.fadeBottom:""}`}var y="currentColor",V="0.5";function mp({type:a}){switch(a){case"navigation":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:y,opacity:".4"}),o.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"})]});case"header":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:y,opacity:".35"}),o.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:y,opacity:".15"})]});case"hero":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".35"}),o.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:y,strokeWidth:V})]});case"section":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:y,opacity:".3"}),o.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".15"})]});case"sidebar":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:y,opacity:".3"}),o.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:y,opacity:".15"})]});case"footer":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:y,opacity:".2"})]});case"modal":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:y,opacity:".3"}),o.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"divider":return o.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:o.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:y,strokeWidth:"0.5",opacity:".3"})});case"card":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:y,opacity:".04"}),o.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".12"})]});case"text":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:y,opacity:".3"}),o.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"image":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"video":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:y,strokeWidth:V,fill:y,opacity:".15"})]});case"table":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:y,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:y,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),o.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"grid":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V})]});case"list":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".2"})]});case"chart":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:y,opacity:".2"}),o.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:y,opacity:".3"}),o.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:y,opacity:".2"})]});case"accordion":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:V})]});case"carousel":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:y,strokeWidth:V}),o.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:y,strokeWidth:V,opacity:".35"}),o.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:y,strokeWidth:V,opacity:".35"}),o.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:y,opacity:".35"}),o.jsx("circle",{cx:"10",cy:"14",r:".6",fill:y,opacity:".15"}),o.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:y,opacity:".15"})]});case"button":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"})]});case"input":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"search":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:V,opacity:".3"}),o.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:y,strokeWidth:V,opacity:".3"}),o.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"form":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"tabs":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:V})]});case"dropdown":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:y,strokeWidth:V,opacity:".3"}),o.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:y,strokeWidth:V,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"13",cy:"8",r:"2",fill:y,opacity:".3"})]});case"avatar":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:y,strokeWidth:V}),o.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:y,strokeWidth:V})]});case"badge":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"})]});case"breadcrumb":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".3"}),o.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:y,strokeWidth:V,opacity:".2"}),o.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("path",{d:"M14 7l1 1-1 1",stroke:y,strokeWidth:V,opacity:".2"}),o.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:y,opacity:".15"})]});case"pagination":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:y,opacity:".15",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:V})]});case"progress":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:y,opacity:".2"})]});case"toast":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:y,strokeWidth:V,opacity:".3"}),o.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"tooltip":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:y,strokeWidth:V})]});case"pricing":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),o.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),o.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:y,opacity:".2"})]});case"testimonial":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:y,opacity:".2",fontFamily:"serif",children:"“"}),o.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".12"}),o.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:y,strokeWidth:V,opacity:".25"}),o.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:y,opacity:".15"})]});case"cta":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".3"}),o.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:y,strokeWidth:V})]});case"alert":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:V,opacity:".3"}),o.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:y,strokeWidth:"0.6",opacity:".5"}),o.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:y,opacity:".5"}),o.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".2"})]});case"banner":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"stat":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:y,opacity:".3"}),o.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"stepper":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"4",cy:"8",r:"2",fill:y,opacity:".2",stroke:y,strokeWidth:V}),o.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),o.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:y,strokeWidth:V}),o.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),o.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:y,strokeWidth:V})]});case"tag":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"}),o.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"})]});case"rating":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:y,opacity:".25"}),o.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:y,opacity:".25"}),o.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:y,strokeWidth:V,opacity:".25"})]});case"map":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:y,strokeWidth:".3",opacity:".15"}),o.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:y,strokeWidth:".3",opacity:".15"}),o.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:y,opacity:".15",stroke:y,strokeWidth:V})]});case"timeline":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:y,strokeWidth:".4",opacity:".25"}),o.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:y,opacity:".2",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:y,opacity:".15"})]});case"fileUpload":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:V,strokeDasharray:"2 1"}),o.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:y,strokeWidth:V,opacity:".3"}),o.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"})]});case"codeBlock":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"4",cy:"4",r:".6",fill:y,opacity:".3"}),o.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:y,opacity:".3"}),o.jsx("circle",{cx:"7",cy:"4",r:".6",fill:y,opacity:".3"}),o.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"calendar":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),o.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:y,strokeWidth:".4",opacity:".25"}),o.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),o.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),o.jsx("circle",{cx:"7",cy:"9",r:".6",fill:y,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"9",r:".6",fill:y,opacity:".2"}),o.jsx("circle",{cx:"13",cy:"9",r:".6",fill:y,opacity:".3"}),o.jsx("circle",{cx:"7",cy:"12",r:".6",fill:y,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"12",r:".6",fill:y,opacity:".2"})]});case"notification":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:y,strokeWidth:V,opacity:".25"}),o.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:y,opacity:".12"}),o.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:y,opacity:".25"})]});case"productCard":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:y,opacity:".04"}),o.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"profile":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"drawer":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:V,opacity:".15"})]});case"popover":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:y,strokeWidth:V})]});case"logo":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:y,strokeWidth:V}),o.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:y,strokeWidth:V,opacity:".3"}),o.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:y,opacity:".12"})]});case"faq":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),o.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:y,opacity:".12"}),o.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),o.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"gallery":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V})]});case"checkbox":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:y,strokeWidth:V,opacity:".35"})]});case"radio":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:y,strokeWidth:V}),o.jsx("circle",{cx:"10",cy:"8",r:"2",fill:y,opacity:".3"})]});case"slider":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:y,strokeWidth:V})]});case"datePicker":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:y,opacity:".12"}),o.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:y,strokeWidth:V,strokeDasharray:"2 1",opacity:".3"}),o.jsx("circle",{cx:"6",cy:"10",r:".6",fill:y,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"10",r:".6",fill:y,opacity:".3"}),o.jsx("circle",{cx:"14",cy:"10",r:".6",fill:y,opacity:".2"}),o.jsx("circle",{cx:"6",cy:"13",r:".6",fill:y,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"13",r:".6",fill:y,opacity:".2"})]});case"skeleton":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:y,opacity:".08"}),o.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:y,opacity:".08"}),o.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:y,opacity:".08"})]});case"chip":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:y,opacity:".08",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),o.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"}),o.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"}),o.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:y,strokeWidth:V,opacity:".25"})]});case"icon":return o.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:o.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:y,strokeWidth:V,opacity:".3"})});case"spinner":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:y,strokeWidth:V,opacity:".12"}),o.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:y,strokeWidth:V,opacity:".35",strokeLinecap:"round"})]});case"feature":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:y,strokeWidth:V,opacity:".25"}),o.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"}),o.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"team":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:y,strokeWidth:V,opacity:".5"}),o.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),o.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:y,opacity:".1"})]});case"login":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),o.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:y,opacity:".2"})]});case"contact":return o.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[o.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),o.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:y,strokeWidth:V}),o.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:y,opacity:".2"})]});default:return null}}function gp({activeType:a,onSelect:r,onDragStart:c,scrollRef:u,fadeClass:_,blankCanvas:f}){return o.jsx("div",{ref:u,className:`${J.placeScroll} ${_||""}`,children:Am.map(x=>o.jsxs("div",{className:J.paletteSection,children:[o.jsx("div",{className:J.paletteSectionTitle,children:x.section}),x.items.map(R=>o.jsxs("div",{className:`${J.paletteItem} ${a===R.type?J.active:""} ${f?J.wireframe:""}`,onClick:()=>r(R.type),onMouseDown:b=>{b.button===0&&c(R.type,b)},children:[o.jsx("div",{className:J.paletteItemIcon,children:o.jsx(mp,{type:R.type})}),o.jsx("span",{className:J.paletteItemLabel,children:R.label})]},R.type))]},x.section))})}function yp({value:a,suffix:r}){const[c,u]=m.useState(null),[_,f]=m.useState(r),[x,R]=m.useState("up"),b=m.useRef(a),k=m.useRef(r),M=m.useRef(),A=c!==null&&_!==r;return m.useEffect(()=>{if(a!==b.current){if(a===0){b.current=a,k.current=r,u(null);return}R(a>b.current?"up":"down"),u(b.current),f(k.current),b.current=a,k.current=r,clearTimeout(M.current),M.current=Ke(()=>u(null),250)}else k.current=r},[a,r]),c===null?o.jsxs(o.Fragment,{children:[a,r?` ${r}`:""]}):A?o.jsxs("span",{className:J.rollingWrap,children:[o.jsxs("span",{style:{visibility:"hidden"},children:[a," ",r]}),o.jsxs("span",{className:`${J.rollingNum} ${x==="up"?J.exitUp:J.exitDown}`,children:[c," ",_]},`o${c}-${a}`),o.jsxs("span",{className:`${J.rollingNum} ${x==="up"?J.enterUp:J.enterDown}`,children:[a," ",r]},`n${a}`)]}):o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:J.rollingWrap,children:[o.jsx("span",{style:{visibility:"hidden"},children:a}),o.jsx("span",{className:`${J.rollingNum} ${x==="up"?J.exitUp:J.exitDown}`,children:c},`o${c}-${a}`),o.jsx("span",{className:`${J.rollingNum} ${x==="up"?J.enterUp:J.enterDown}`,children:a},`n${a}`)]}),r?` ${r}`:""]})}function pp({activeType:a,onSelect:r,isDarkMode:c,sectionCount:u,onDetectSections:_,visible:f,onExited:x,placementCount:R,onClearPlacements:b,onDragStart:k,blankCanvas:M,onBlankCanvasChange:A,wireframePurpose:T,onWireframePurposeChange:ne,Tooltip:$}){const[le,U]=m.useState(!1),[q,me]=m.useState("exit"),[pe,be]=m.useState(!1),[et,Je]=m.useState(!0),K=m.useRef(0),Ee=m.useRef(""),ae=m.useRef(0),Fe=m.useRef(),Re=m.useRef(null),[qe,tt]=m.useState("");m.useEffect(()=>(f?(U(!0),clearTimeout(Fe.current),cancelAnimationFrame(ae.current),ae.current=ws(()=>{ae.current=ws(()=>{me("enter")})})):(cancelAnimationFrame(ae.current),me("exit"),clearTimeout(Fe.current),Fe.current=Ke(()=>{U(!1),x?.()},200)),()=>cancelAnimationFrame(ae.current)),[f]);const ze=R>0||u>0,Xe=R+u;return Xe>0&&(K.current=Xe,Ee.current=M?Xe===1?"Component":"Components":Xe===1?"Change":"Changes"),m.useEffect(()=>{if(ze)pe?Je(!1):(Je(!0),be(!0),ws(()=>{ws(()=>{Je(!1)})}));else{Je(!0);const v=Ke(()=>be(!1),300);return()=>clearTimeout(v)}},[ze]),m.useEffect(()=>{if(!le)return;const v=Re.current;if(!v)return;const F=()=>tt(hp(v));F(),v.addEventListener("scroll",F,{passive:!0});const Y=new ResizeObserver(F);return Y.observe(v),()=>{v.removeEventListener("scroll",F),Y.disconnect()}},[le]),le?o.jsxs("div",{className:`${J.palette} ${J[q]} ${c?"":J.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:v=>v.stopPropagation(),onMouseDown:v=>v.stopPropagation(),onTransitionEnd:v=>{v.target===v.currentTarget&&(f||(clearTimeout(Fe.current),U(!1),me("exit"),x?.()))},children:[o.jsxs("div",{className:J.paletteHeader,children:[o.jsx("div",{className:J.paletteHeaderTitle,children:"Layout Mode"}),o.jsxs("div",{className:J.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",o.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),o.jsxs("div",{className:`${J.canvasToggle} ${M?J.active:""}`,onClick:()=>A(!M),children:[o.jsx("span",{className:J.canvasToggleIcon,children:o.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[o.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),o.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),o.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),o.jsx("span",{className:J.canvasToggleLabel,children:"Wireframe New Page"})]}),o.jsx("div",{className:`${J.wireframePurposeWrap} ${M?"":J.collapsed}`,children:o.jsx("div",{className:J.wireframePurposeInner,children:o.jsx("textarea",{className:J.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:T,onChange:v=>ne(v.target.value),rows:2})})}),o.jsx(gp,{activeType:a,onSelect:r,onDragStart:k,scrollRef:Re,fadeClass:qe,blankCanvas:M}),pe&&o.jsx("div",{className:`${J.paletteFooterWrap} ${et?J.footerHidden:""}`,children:o.jsx("div",{className:J.paletteFooterInner,children:o.jsx("div",{className:J.paletteFooterInnerContent,children:o.jsxs("div",{className:J.paletteFooter,children:[o.jsx("span",{className:J.paletteFooterCount,children:o.jsx(yp,{value:K.current,suffix:Ee.current})}),o.jsx("button",{className:J.paletteFooterClear,onClick:b,children:"Clear"})]})})})})]}):null}function ks(a){if(a.parentElement)return a.parentElement;const r=a.getRootNode();return r instanceof ShadowRoot?r.host:null}function Fn(a,r){let c=a;for(;c;){if(c.matches(r))return c;c=ks(c)}return null}function xp(a,r=4){const c=[];let u=a,_=0;for(;u&&_<r;){const f=u.tagName.toLowerCase();if(f==="html"||f==="body")break;let x=f;if(u.id)x=`#${u.id}`;else if(u.className&&typeof u.className=="string"){const b=u.className.split(/\s+/).find(k=>k.length>2&&!k.match(/^[a-z]{1,2}$/)&&!k.match(/[A-Z0-9]{5,}/));b&&(x=`.${b.split("_")[0]}`)}const R=ks(u);!u.parentElement&&R&&(x=`⟨shadow⟩ ${x}`),c.unshift(x),u=R,_++}return c.join(" > ")}function Ss(a){const r=xp(a);if(a.dataset.element)return{name:a.dataset.element,path:r};const c=a.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(c)){const u=Fn(a,"svg");if(u){const _=ks(u);if(_ instanceof HTMLElement)return{name:`graphic in ${Ss(_).name}`,path:r}}return{name:"graphic element",path:r}}if(c==="svg"){const u=ks(a);if(u?.tagName.toLowerCase()==="button"){const _=u.textContent?.trim();return{name:_?`icon in "${_}" button`:"button icon",path:r}}return{name:"icon",path:r}}if(c==="button"){const u=a.textContent?.trim(),_=a.getAttribute("aria-label");return _?{name:`button [${_}]`,path:r}:{name:u?`button "${u.slice(0,25)}"`:"button",path:r}}if(c==="a"){const u=a.textContent?.trim(),_=a.getAttribute("href");return u?{name:`link "${u.slice(0,25)}"`,path:r}:_?{name:`link to ${_.slice(0,30)}`,path:r}:{name:"link",path:r}}if(c==="input"){const u=a.getAttribute("type")||"text",_=a.getAttribute("placeholder"),f=a.getAttribute("name");return _?{name:`input "${_}"`,path:r}:f?{name:`input [${f}]`,path:r}:{name:`${u} input`,path:r}}if(["h1","h2","h3","h4","h5","h6"].includes(c)){const u=a.textContent?.trim();return{name:u?`${c} "${u.slice(0,35)}"`:c,path:r}}if(c==="p"){const u=a.textContent?.trim();return u?{name:`paragraph: "${u.slice(0,40)}${u.length>40?"...":""}"`,path:r}:{name:"paragraph",path:r}}if(c==="span"||c==="label"){const u=a.textContent?.trim();return u&&u.length<40?{name:`"${u}"`,path:r}:{name:c,path:r}}if(c==="li"){const u=a.textContent?.trim();return u&&u.length<40?{name:`list item: "${u.slice(0,35)}"`,path:r}:{name:"list item",path:r}}if(c==="blockquote")return{name:"blockquote",path:r};if(c==="code"){const u=a.textContent?.trim();return u&&u.length<30?{name:`code: \`${u}\``,path:r}:{name:"code",path:r}}if(c==="pre")return{name:"code block",path:r};if(c==="img"){const u=a.getAttribute("alt");return{name:u?`image "${u.slice(0,30)}"`:"image",path:r}}if(c==="video")return{name:"video",path:r};if(["div","section","article","nav","header","footer","aside","main"].includes(c)){const u=a.className,_=a.getAttribute("role"),f=a.getAttribute("aria-label");if(f)return{name:`${c} [${f}]`,path:r};if(_)return{name:`${_}`,path:r};if(typeof u=="string"&&u){const x=u.split(/[\s_-]+/).map(R=>R.replace(/[A-Z0-9]{5,}.*$/,"")).filter(R=>R.length>2&&!/^[a-z]{1,2}$/.test(R)).slice(0,2);if(x.length>0)return{name:x.join(" "),path:r}}return{name:c==="div"?"container":c,path:r}}return{name:c,path:r}}function vi(a){const r=[],c=a.textContent?.trim();c&&c.length<100&&r.push(c);const u=a.previousElementSibling;if(u){const f=u.textContent?.trim();f&&f.length<50&&r.unshift(`[before: "${f.slice(0,40)}"]`)}const _=a.nextElementSibling;if(_){const f=_.textContent?.trim();f&&f.length<50&&r.push(`[after: "${f.slice(0,40)}"]`)}return r.join(" ")}function Zr(a){const r=ks(a);if(!r)return"";const _=(a.getRootNode()instanceof ShadowRoot&&a.parentElement?Array.from(a.parentElement.children):Array.from(r.children)).filter(M=>M!==a&&M instanceof HTMLElement);if(_.length===0)return"";const f=_.slice(0,4).map(M=>{const A=M.tagName.toLowerCase(),T=M.className;let ne="";if(typeof T=="string"&&T){const $=T.split(/\s+/).map(le=>le.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(le=>le.length>2&&!/^[a-z]{1,2}$/.test(le));$&&(ne=`.${$}`)}if(A==="button"||A==="a"){const $=M.textContent?.trim().slice(0,15);if($)return`${A}${ne} "${$}"`}return`${A}${ne}`});let R=r.tagName.toLowerCase();if(typeof r.className=="string"&&r.className){const M=r.className.split(/\s+/).map(A=>A.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(A=>A.length>2&&!/^[a-z]{1,2}$/.test(A));M&&(R=`.${M}`)}const b=r.children.length,k=b>f.length+1?` (${b} total in ${R})`:"";return f.join(", ")+k}function wi(a){const r=a.className;return typeof r!="string"||!r?"":r.split(/\s+/).filter(u=>u.length>0).map(u=>{const _=u.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return _?_[1]:u}).filter((u,_,f)=>f.indexOf(u)===_).join(", ")}var Om=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),bp=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),vp=new Set(["input","textarea","select"]),wp=new Set(["img","video","canvas","svg"]),Sp=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Kr(a){if(typeof window>"u")return{};const r=window.getComputedStyle(a),c={},u=a.tagName.toLowerCase();let _;bp.has(u)?_=["color","fontSize","fontWeight","fontFamily","lineHeight"]:u==="button"||u==="a"&&a.getAttribute("role")==="button"?_=["backgroundColor","color","padding","borderRadius","fontSize"]:vp.has(u)?_=["backgroundColor","color","padding","borderRadius","fontSize"]:wp.has(u)?_=["width","height","objectFit","borderRadius"]:Sp.has(u)?_=["display","padding","margin","gap","backgroundColor"]:_=["color","fontSize","margin","padding","backgroundColor"];for(const f of _){const x=f.replace(/([A-Z])/g,"-$1").toLowerCase(),R=r.getPropertyValue(x);R&&!Om.has(R)&&(c[f]=R)}return c}var kp=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Fr(a){if(typeof window>"u")return"";const r=window.getComputedStyle(a),c=[];for(const u of kp){const _=u.replace(/([A-Z])/g,"-$1").toLowerCase(),f=r.getPropertyValue(_);f&&!Om.has(f)&&c.push(`${_}: ${f}`)}return c.join("; ")}function jp(a){if(!a)return;const r={},c=a.split(";").map(u=>u.trim()).filter(Boolean);for(const u of c){const _=u.indexOf(":");if(_>0){const f=u.slice(0,_).trim(),x=u.slice(_+1).trim();f&&x&&(r[f]=x)}}return Object.keys(r).length>0?r:void 0}function Jr(a){const r=[],c=a.getAttribute("role"),u=a.getAttribute("aria-label"),_=a.getAttribute("aria-describedby"),f=a.getAttribute("tabindex"),x=a.getAttribute("aria-hidden");return c&&r.push(`role="${c}"`),u&&r.push(`aria-label="${u}"`),_&&r.push(`aria-describedby="${_}"`),f&&r.push(`tabindex=${f}`),x==="true"&&r.push("aria-hidden"),a.matches("a, button, input, select, textarea, [tabindex]")&&r.push("focusable"),r.join(", ")}function Pr(a){const r=[];let c=a;for(;c&&c.tagName.toLowerCase()!=="html";){const u=c.tagName.toLowerCase();let _=u;if(c.id)_=`${u}#${c.id}`;else if(c.className&&typeof c.className=="string"){const x=c.className.split(/\s+/).map(R=>R.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(R=>R.length>2);x&&(_=`${u}.${x}`)}const f=ks(c);!c.parentElement&&f&&(_=`⟨shadow⟩ ${_}`),r.unshift(_),c=f}return r.join(" > ")}var Cp=new Set(["nav","header","main","section","article","footer","aside"]),kd={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},lm={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},Mp=new Set(["script","style","noscript","link","meta"]),Ep=40;function Lm(a){let r=a;for(;r&&r!==document.body&&r!==document.documentElement;){const c=window.getComputedStyle(r).position;if(c==="fixed"||c==="sticky")return!0;r=r.parentElement}return!1}function za(a){const r=a.tagName.toLowerCase();if(["nav","header","footer","main"].includes(r)&&document.querySelectorAll(r).length===1)return r;if(a.id)return`#${CSS.escape(a.id)}`;if(a.className&&typeof a.className=="string"){const _=a.className.split(/\s+/).filter(f=>f.length>0).find(f=>f.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(f)&&!/^[a-z]{1,2}$/.test(f));if(_){const f=`${r}.${CSS.escape(_)}`;if(document.querySelectorAll(f).length===1)return f}}const c=a.parentElement;if(c){const _=Array.from(c.children).indexOf(a)+1;return`${c===document.body?"body":za(c)} > ${r}:nth-child(${_})`}return r}function ic(a){const r=a.tagName.toLowerCase(),c=a.getAttribute("aria-label");if(c)return c;const u=a.getAttribute("role");if(u&&kd[u])return kd[u];if(lm[r])return lm[r];const _=a.querySelector("h1, h2, h3, h4, h5, h6");if(_){const x=_.textContent?.trim();if(x&&x.length<=50)return x;if(x)return x.slice(0,47)+"..."}const{name:f}=Ss(a);return f.charAt(0).toUpperCase()+f.slice(1)}function Bm(a){const r=a.className;return typeof r!="string"||!r?null:r.split(/\s+/).map(u=>u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(u=>u.length>2&&!/^[a-z]{1,2}$/.test(u))||null}function $m(a){const r=a.textContent?.trim();if(!r)return null;const c=r.replace(/\s+/g," ");return c.length<=30?c:c.slice(0,30)+"…"}function Np(){const a=document.querySelector("main")||document.body,r=Array.from(a.children);let c=r;a!==document.body&&r.length<3&&(c=Array.from(document.body.children));const u=[];return c.forEach((_,f)=>{if(!(_ instanceof HTMLElement))return;const x=_.tagName.toLowerCase();if(Mp.has(x)||_.hasAttribute("data-feedback-toolbar")||_.closest("[data-feedback-toolbar]"))return;const R=window.getComputedStyle(_);if(R.display==="none"||R.visibility==="hidden")return;const b=_.getBoundingClientRect();if(b.height<Ep)return;const k=Cp.has(x),M=_.getAttribute("role")&&kd[_.getAttribute("role")],A=x==="div"&&b.height>=60;if(!k&&!M&&!A)return;const T=window.scrollY,ne=Lm(_),$={x:b.x,y:ne?b.y:b.y+T,width:b.width,height:b.height};u.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:ic(_),tagName:x,selector:za(_),role:_.getAttribute("role"),className:Bm(_),textSnippet:$m(_),originalRect:$,currentRect:{...$},originalIndex:f,isFixed:ne})}),u}function Tp(a){const r=window.scrollY,c=a.getBoundingClientRect(),u=Lm(a),_={x:c.x,y:u?c.y:c.y+r,width:c.width,height:c.height},f=a.parentElement;let x=0;return f&&(x=Array.from(f.children).indexOf(a)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:ic(a),tagName:a.tagName.toLowerCase(),selector:za(a),role:a.getAttribute("role"),className:Bm(a),textSnippet:$m(a),originalRect:_,currentRect:{..._},originalIndex:x,isFixed:u}}var om={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},am=["nw","n","ne","e","se","s","sw","w"],ec=24,sm=16,tc=5;function im(a,r,c,u){let _=1/0,f=1/0;const x=a.x,R=a.x+a.width,b=a.x+a.width/2,k=a.y,M=a.y+a.height,A=a.y+a.height/2,T=[];for(const K of r)c.has(K.id)||T.push(K.currentRect);u&&T.push(...u);for(const K of T){const Ee=K.x,ae=K.x+K.width,Fe=K.x+K.width/2,Re=K.y,qe=K.y+K.height,tt=K.y+K.height/2;for(const ze of[x,R,b])for(const Xe of[Ee,ae,Fe]){const v=Xe-ze;Math.abs(v)<tc&&Math.abs(v)<Math.abs(_)&&(_=v)}for(const ze of[k,M,A])for(const Xe of[Re,qe,tt]){const v=Xe-ze;Math.abs(v)<tc&&Math.abs(v)<Math.abs(f)&&(f=v)}}const ne=Math.abs(_)<tc?_:0,$=Math.abs(f)<tc?f:0,le=[],U=new Set,q=x+ne,me=R+ne,pe=b+ne,be=k+$,et=M+$,Je=A+$;for(const K of T){const Ee=K.x,ae=K.x+K.width,Fe=K.x+K.width/2,Re=K.y,qe=K.y+K.height,tt=K.y+K.height/2;for(const ze of[Ee,Fe,ae])for(const Xe of[q,pe,me])if(Math.abs(Xe-ze)<.5){const v=`x:${Math.round(ze)}`;U.has(v)||(U.add(v),le.push({axis:"x",pos:ze}))}for(const ze of[Re,tt,qe])for(const Xe of[be,Je,et])if(Math.abs(Xe-ze)<.5){const v=`y:${Math.round(ze)}`;U.has(v)||(U.add(v),le.push({axis:"y",pos:ze}))}}return{dx:ne,dy:$,guides:le}}var Rp=new Set(["script","style","noscript","link","meta","br","hr"]);function rm(a){let r=a;for(;r&&r!==document.body&&r!==document.documentElement;){if(r.closest("[data-feedback-toolbar]"))return null;if(Rp.has(r.tagName.toLowerCase())){r=r.parentElement;continue}const c=r.getBoundingClientRect();if(c.width>=sm&&c.height>=sm)return r;r=r.parentElement}return null}function zp({rearrangeState:a,onChange:r,isDarkMode:c,exiting:u,className:_,blankCanvas:f,extraSnapRects:x,onSelectionChange:R,deselectSignal:b,onDragMove:k,onDragEnd:M,clearSignal:A}){const{sections:T}=a,ne=m.useRef(a);ne.current=a;const[$,le]=m.useState(new Set),[U,q]=m.useState(!1),me=m.useRef(A);m.useEffect(()=>{A!==void 0&&A!==me.current&&(me.current=A,T.length>0&&q(!0))},[A,T.length]);const pe=m.useRef(b);m.useEffect(()=>{b!==pe.current&&(pe.current=b,le(new Set))},[b]);const[be,et]=m.useState(null),[Je,K]=m.useState(!1),Ee=m.useRef(!1),ae=m.useCallback(D=>{const L=T.find(P=>P.id===D);L&&(Ee.current=!!L.note,et(D),K(!1))},[T]),Fe=m.useCallback(()=>{be&&(K(!0),Ke(()=>{et(null),K(!1)},150))},[be]),Re=m.useCallback(D=>{be&&(r({...a,sections:T.map(L=>L.id===be?{...L,note:D.trim()||void 0}:L)}),Fe())},[be,T,a,r,Fe]);m.useEffect(()=>{u&&be&&Fe()},[u]);const[qe,tt]=m.useState(new Set),ze=m.useRef(new Map),[Xe,v]=m.useState(null),[F,Y]=m.useState(null),[ye,ve]=m.useState([]),[S,I]=m.useState(0),ce=m.useRef(null),xe=m.useRef(new Set),Oe=m.useRef(new Map),[at,dt]=m.useState(new Map),[qt,Et]=m.useState(new Map),kn=m.useRef(new Set),rn=m.useRef(new Map),_n=m.useRef(R);_n.current=R;const Mn=m.useRef(k);Mn.current=k;const tn=m.useRef(M);tn.current=M,m.useEffect(()=>{f&&le(new Set)},[f]);const[zn,Dn]=m.useState(()=>!a.sections.some(D=>{const L=D.originalRect,P=D.currentRect;return Math.abs(L.x-P.x)>1||Math.abs(L.y-P.y)>1||Math.abs(L.width-P.width)>1||Math.abs(L.height-P.height)>1}));m.useEffect(()=>{if(!zn){const D=Ke(()=>Dn(!0),380);return()=>clearTimeout(D)}},[]);const yl=m.useRef(new Set);m.useEffect(()=>{yl.current=new Set(T.map(D=>D.selector))},[T]),m.useEffect(()=>{const D=()=>I(window.scrollY);return D(),window.addEventListener("scroll",D,{passive:!0}),window.addEventListener("resize",D,{passive:!0}),()=>{window.removeEventListener("scroll",D),window.removeEventListener("resize",D)}},[]),m.useEffect(()=>{const D=L=>{if(ce.current){v(null);return}const P=document.elementFromPoint(L.clientX,L.clientY);if(!P){v(null);return}if(P.closest("[data-feedback-toolbar]")){v(null);return}if(P.closest("[data-design-placement]")){v(null);return}if(P.closest("[data-annotation-popup]")){v(null);return}const oe=rm(P);if(!oe){v(null);return}for(const _e of yl.current)try{const ie=document.querySelector(_e);if(ie&&(ie===oe||oe.contains(ie))){v(null);return}}catch{}const ke=oe.getBoundingClientRect();v({x:ke.x,y:ke.y,w:ke.width,h:ke.height})};return document.addEventListener("mousemove",D,{passive:!0}),()=>document.removeEventListener("mousemove",D)},[T]),m.useEffect(()=>{const D=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=D}},[]),m.useEffect(()=>{const D=L=>{if(ce.current||L.button!==0)return;const P=L.target;if(!P||P.closest("[data-feedback-toolbar]")||P.closest("[data-design-placement]")||P.closest("[data-annotation-popup]"))return;const oe=rm(P);let ke=!1;if(oe)for(const ie of yl.current)try{const Be=document.querySelector(ie);if(Be&&(Be===oe||oe.contains(Be))){ke=!0;break}}catch{}const _e=!!(L.shiftKey||L.metaKey||L.ctrlKey);if(oe&&!ke){L.preventDefault(),L.stopPropagation();const ie=Tp(oe),Be=[...T,ie],it=[...a.originalOrder,ie.id];r({...a,sections:Be,originalOrder:it});const yt=new Set([ie.id]);le(yt),_n.current?.(yt,_e),v(null);const Ct=L.clientX,Te=L.clientY,Q={x:ie.currentRect.x,y:ie.currentRect.y};ie.originalRect;let de=!1,ue=0,fe=0;ce.current="move";const ut=$e=>{const pt=$e.clientX-Ct,lt=$e.clientY-Te;if(!de&&(Math.abs(pt)>2||Math.abs(lt)>2)&&(de=!0),!de)return;const En={x:Q.x+pt,y:Q.y+lt,width:ie.currentRect.width,height:ie.currentRect.height},Kt=im(En,Be,new Set([ie.id]),x);ve(Kt.guides);const Hn=pt+Kt.dx,il=lt+Kt.dy;ue=Hn,fe=il;const Un=document.querySelector(`[data-rearrange-section="${ie.id}"]`);Un&&(Un.style.transform=`translate(${Hn}px, ${il}px)`),dt(new Map([[ie.id,{x:Q.x+Hn,y:Q.y+il,width:ie.currentRect.width,height:ie.currentRect.height}]])),Mn.current?.(Hn,il)},Se=()=>{window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",Se),ce.current=null,ve([]),dt(new Map);const $e=document.querySelector(`[data-rearrange-section="${ie.id}"]`);$e&&($e.style.transform=""),de&&r({...a,sections:Be.map(pt=>pt.id===ie.id?{...pt,currentRect:{...pt.currentRect,x:Math.max(0,Q.x+ue),y:Math.max(0,Q.y+fe)}}:pt),originalOrder:it}),tn.current?.(ue,fe,de)};window.addEventListener("mousemove",ut),window.addEventListener("mouseup",Se)}else if(ke&&oe){L.preventDefault();for(const ie of T)try{const Be=document.querySelector(ie.selector);if(Be&&Be===oe){const it=new Set([ie.id]);le(it),_n.current?.(it,_e);return}}catch{}_e||(le(new Set),_n.current?.(new Set,!1))}else _e||(le(new Set),_n.current?.(new Set,!1))};return document.addEventListener("mousedown",D,!0),()=>document.removeEventListener("mousedown",D,!0)},[T,a,r]),m.useEffect(()=>{const D=L=>{const P=L.target;if(!(P.tagName==="INPUT"||P.tagName==="TEXTAREA"||P.isContentEditable)){if((L.key==="Backspace"||L.key==="Delete")&&$.size>0){L.preventDefault();const oe=new Set($);tt(ke=>{const _e=new Set(ke);for(const ie of oe)_e.add(ie);return _e}),le(new Set),Ke(()=>{const ke=ne.current;r({...ke,sections:ke.sections.filter(_e=>!oe.has(_e.id)),originalOrder:ke.originalOrder.filter(_e=>!oe.has(_e))}),tt(_e=>{const ie=new Set(_e);for(const Be of oe)ie.delete(Be);return ie})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(L.key)&&$.size>0){L.preventDefault();const oe=L.shiftKey?20:1,ke=L.key==="ArrowLeft"?-oe:L.key==="ArrowRight"?oe:0,_e=L.key==="ArrowUp"?-oe:L.key==="ArrowDown"?oe:0;r({...a,sections:T.map(ie=>$.has(ie.id)?{...ie,currentRect:{...ie.currentRect,x:Math.max(0,ie.currentRect.x+ke),y:Math.max(0,ie.currentRect.y+_e)}}:ie)});return}L.key==="Escape"&&$.size>0&&le(new Set)}};return document.addEventListener("keydown",D),()=>document.removeEventListener("keydown",D)},[$,T,a,r]);const Z=m.useCallback((D,L)=>{if(D.button!==0)return;const P=D.target;if(P.closest(`.${J.handle}`)||P.closest(`.${J.deleteButton}`))return;D.preventDefault(),D.stopPropagation();let oe;D.shiftKey||D.metaKey||D.ctrlKey?(oe=new Set($),oe.has(L)?oe.delete(L):oe.add(L)):$.has(L)?oe=new Set($):oe=new Set([L]),le(oe),(oe.size!==$.size||[...oe].some(ue=>!$.has(ue)))&&_n.current?.(oe,!!(D.shiftKey||D.metaKey||D.ctrlKey));const _e=D.clientX,ie=D.clientY,Be=new Map;for(const ue of T)oe.has(ue.id)&&Be.set(ue.id,{x:ue.currentRect.x,y:ue.currentRect.y});ce.current="move";let it=!1,yt=0,Ct=0;const Te=new Map;for(const ue of T)if(oe.has(ue.id)){const fe=document.querySelector(`[data-rearrange-section="${ue.id}"]`);Te.set(ue.id,{outlineEl:fe,curW:ue.currentRect.width,curH:ue.currentRect.height})}const Q=ue=>{const fe=ue.clientX-_e,ut=ue.clientY-ie;if(fe===0&&ut===0)return;it=!0;let Se=1/0,$e=1/0,pt=-1/0,lt=-1/0;for(const[Un,{curW:Ul,curH:oa}]of Te){const nn=Be.get(Un);if(!nn)continue;const Nn=nn.x+fe,cn=nn.y+ut;Se=Math.min(Se,Nn),$e=Math.min($e,cn),pt=Math.max(pt,Nn+Ul),lt=Math.max(lt,cn+oa)}const En=im({x:Se,y:$e,width:pt-Se,height:lt-$e},T,oe,x),Kt=fe+En.dx,Hn=ut+En.dy;yt=Kt,Ct=Hn,ve(En.guides);for(const[,{outlineEl:Un}]of Te)Un&&(Un.style.transform=`translate(${Kt}px, ${Hn}px)`);const il=new Map;for(const[Un,{curW:Ul,curH:oa}]of Te){const nn=Be.get(Un);if(nn){const Nn={x:Math.max(0,nn.x+Kt),y:Math.max(0,nn.y+Hn),width:Ul,height:oa};il.set(Un,Nn)}}dt(il),Mn.current?.(Kt,Hn)},de=ue=>{window.removeEventListener("mousemove",Q),window.removeEventListener("mouseup",de),ce.current=null,ve([]),dt(new Map);for(const[,{outlineEl:fe}]of Te)fe&&(fe.style.transform="");if(it){const fe=ue.clientX-_e,ut=ue.clientY-ie;if(Math.abs(fe)<5&&Math.abs(ut)<5)r({...a,sections:T.map(Se=>{const $e=Be.get(Se.id);return $e?{...Se,currentRect:{...Se.currentRect,x:$e.x,y:$e.y}}:Se})});else{r({...a,sections:T.map(Se=>{const $e=Be.get(Se.id);return $e?{...Se,currentRect:{...Se.currentRect,x:Math.max(0,$e.x+yt),y:Math.max(0,$e.y+Ct)}}:Se})}),tn.current?.(yt,Ct,!0);return}}tn.current?.(0,0,!1)};window.addEventListener("mousemove",Q),window.addEventListener("mouseup",de)},[$,T,a,r]),De=m.useCallback((D,L,P)=>{D.preventDefault(),D.stopPropagation();const oe=T.find(Q=>Q.id===L);if(!oe)return;le(new Set([L])),ce.current="resize";const ke=D.clientX,_e=D.clientY,ie={...oe.currentRect};oe.originalRect;const Be=ie.width/ie.height;let it={...ie};const yt=document.querySelector(`[data-rearrange-section="${L}"]`),Ct=Q=>{const de=Q.clientX-ke,ue=Q.clientY-_e;let fe=ie.x,ut=ie.y,Se=ie.width,$e=ie.height;if(P.includes("e")&&(Se=Math.max(ec,ie.width+de)),P.includes("w")&&(Se=Math.max(ec,ie.width-de),fe=ie.x+ie.width-Se),P.includes("s")&&($e=Math.max(ec,ie.height+ue)),P.includes("n")&&($e=Math.max(ec,ie.height-ue),ut=ie.y+ie.height-$e),Q.shiftKey)if(P.length===2){const lt=Math.abs(Se-ie.width),En=Math.abs($e-ie.height);lt>En?$e=Se/Be:Se=$e*Be,P.includes("w")&&(fe=ie.x+ie.width-Se),P.includes("n")&&(ut=ie.y+ie.height-$e)}else P==="e"||P==="w"?$e=Se/Be:Se=$e*Be,P==="w"&&(fe=ie.x+ie.width-Se),P==="n"&&(ut=ie.y+ie.height-$e);it={x:fe,y:ut,width:Se,height:$e},yt&&(yt.style.left=`${fe}px`,yt.style.top=`${ut-S}px`,yt.style.width=`${Se}px`,yt.style.height=`${$e}px`),Y({x:Q.clientX+12,y:Q.clientY+12,text:`${Math.round(Se)} × ${Math.round($e)}`}),dt(new Map([[L,it]]))},Te=()=>{window.removeEventListener("mousemove",Ct),window.removeEventListener("mouseup",Te),Y(null),ce.current=null,dt(new Map),r({...a,sections:T.map(Q=>Q.id===L?{...Q,currentRect:it}:Q)})};window.addEventListener("mousemove",Ct),window.addEventListener("mouseup",Te)},[T,a,r,S]),st=m.useCallback(D=>{tt(L=>{const P=new Set(L);return P.add(D),P}),le(L=>{const P=new Set(L);return P.delete(D),P}),Ke(()=>{const L=ne.current;r({...L,sections:L.sections.filter(P=>P.id!==D),originalOrder:L.originalOrder.filter(P=>P!==D)}),tt(P=>{const oe=new Set(P);return oe.delete(D),oe})},180)},[r]),Ie=D=>{const L=D.originalRect,P=D.currentRect;return Math.abs(L.x-P.x)>1||Math.abs(L.y-P.y)>1||Math.abs(L.width-P.width)>1||Math.abs(L.height-P.height)>1},ct=D=>{const L=D.originalRect,P=D.currentRect;return Math.abs(L.x-P.x)>1||Math.abs(L.y-P.y)>1},vt=D=>{const L=D.originalRect,P=D.currentRect;return Math.abs(L.width-P.width)>1||Math.abs(L.height-P.height)>1};for(const D of T)Oe.current.has(D.id)||(ct(D)?Oe.current.set(D.id,"move"):vt(D)&&Oe.current.set(D.id,"resize"));for(const D of Oe.current.keys())T.some(L=>L.id===D)||Oe.current.delete(D);const nt=T.filter(D=>{try{if(qe.has(D.id)||$.has(D.id))return!0;const L=document.querySelector(D.selector);if(!L)return!1;const P=L.getBoundingClientRect(),oe=D.originalRect;return Math.abs(P.width-oe.width)+Math.abs(P.height-oe.height)<200}catch{return!1}}),Qe=nt.filter(D=>Ie(D)),mt=nt.filter(D=>!Ie(D)),At=new Set(Qe.map(D=>D.id));for(const D of xe.current)At.has(D)||xe.current.delete(D);const Ae=[...At].sort().join(",");for(const D of Qe)rn.current.set(D.id,{currentRect:D.currentRect,originalRect:D.originalRect,isFixed:D.isFixed});return m.useEffect(()=>{const D=kn.current;kn.current=At;const L=new Map;for(const P of D)if(!At.has(P)){if(!T.some(ke=>ke.id===P))continue;const oe=rn.current.get(P);oe&&(L.set(P,{orig:oe.originalRect,target:oe.currentRect,isFixed:oe.isFixed}),rn.current.delete(P))}if(L.size>0){Et(oe=>{const ke=new Map(oe);for(const[_e,ie]of L)ke.set(_e,ie);return ke});const P=Ke(()=>{Et(oe=>{const ke=new Map(oe);for(const _e of L.keys())ke.delete(_e);return ke})},250);return()=>clearTimeout(P)}},[Ae,T]),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:`${J.rearrangeOverlay} ${c?"":J.light} ${u?J.overlayExiting:""}${_?` ${_}`:""}`,"data-feedback-toolbar":!0,children:[Xe&&o.jsx("div",{className:J.hoverHighlight,style:{left:Xe.x,top:Xe.y,width:Xe.w,height:Xe.h}}),mt.map(D=>{const L=D.currentRect,P=D.isFixed?L.y:L.y-S,oe=om,ke=$.has(D.id);return o.jsxs("div",{"data-rearrange-section":D.id,className:`${J.sectionOutline} ${ke?J.selected:""} ${U||u||qe.has(D.id)?J.exiting:""}`,style:{left:L.x,top:P,width:L.width,height:L.height,borderColor:oe.border,backgroundColor:oe.bg,...zn?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:_e=>Z(_e,D.id),onDoubleClick:()=>ae(D.id),children:[o.jsx("span",{className:J.sectionLabel,style:{backgroundColor:oe.pill},children:D.label}),o.jsx("span",{className:`${J.sectionAnnotation} ${D.note?J.annotationVisible:""}`,children:(D.note&&ze.current.set(D.id,D.note),D.note||ze.current.get(D.id)||"")}),o.jsxs("span",{className:J.sectionDimensions,children:[Math.round(L.width)," × ",Math.round(L.height)]}),o.jsx("div",{className:J.deleteButton,onMouseDown:_e=>_e.stopPropagation(),onClick:()=>st(D.id),children:"✕"}),am.map(_e=>o.jsx("div",{className:`${J.handle} ${J[`handle${_e.charAt(0).toUpperCase()}${_e.slice(1)}`]}`,onMouseDown:ie=>De(ie,D.id,_e)},_e))]},D.id)}),Qe.map(D=>{const L=D.currentRect,P=D.isFixed?L.y:L.y-S,oe=$.has(D.id),ke=ct(D),_e=vt(D);if(f&&!oe)return null;const Be=!xe.current.has(D.id);return Be&&xe.current.add(D.id),o.jsxs("div",{"data-rearrange-section":D.id,className:`${J.ghostOutline} ${oe?J.selected:""} ${U||u||qe.has(D.id)?J.exiting:""}`,style:{left:L.x,top:P,width:L.width,height:L.height,...zn?{}:{opacity:0,animation:"none",transition:"none"},...Be?{}:{animation:"none"}},onMouseDown:it=>Z(it,D.id),onDoubleClick:()=>ae(D.id),children:[o.jsx("span",{className:J.sectionLabel,style:{backgroundColor:om.pill},children:D.label}),o.jsx("span",{className:`${J.sectionAnnotation} ${D.note?J.annotationVisible:""}`,children:(D.note&&ze.current.set(D.id,D.note),D.note||ze.current.get(D.id)||"")}),o.jsxs("span",{className:J.sectionDimensions,children:[Math.round(L.width)," × ",Math.round(L.height)]}),o.jsx("div",{className:J.deleteButton,onMouseDown:it=>it.stopPropagation(),onClick:()=>st(D.id),children:"✕"}),am.map(it=>o.jsx("div",{className:`${J.handle} ${J[`handle${it.charAt(0).toUpperCase()}${it.slice(1)}`]}`,onMouseDown:yt=>De(yt,D.id,it)},it)),o.jsx("span",{className:J.ghostBadge,children:(()=>{const it=Oe.current.get(D.id);if(ke&&_e){const[yt,Ct]=it==="resize"?["Resize","Move"]:["Move","Resize"];return o.jsxs(o.Fragment,{children:["Suggested ",yt," ",o.jsxs("span",{className:J.ghostBadgeExtra,children:["& ",Ct]})]})}return`Suggested ${_e?"Resize":"Move"}`})()})]},D.id)})]}),!f&&(()=>{const D=[];for(const L of Qe){const P=at.get(L.id);D.push({id:L.id,orig:L.originalRect,target:P||L.currentRect,isFixed:L.isFixed,isSelected:$.has(L.id),isExiting:qe.has(L.id)})}for(const[L,P]of at)if(!D.some(oe=>oe.id===L)){const oe=T.find(ke=>ke.id===L);oe&&D.push({id:L,orig:oe.originalRect,target:P,isFixed:oe.isFixed,isSelected:$.has(L)})}for(const[L,P]of qt)D.some(oe=>oe.id===L)||D.push({id:L,orig:P.orig,target:P.target,isFixed:P.isFixed,isSelected:!1,isExiting:!0});return D.length===0?null:o.jsxs("svg",{className:`${J.connectorSvg} ${U||u?J.connectorExiting:""}`,children:[D.map(({id:L,orig:P,target:oe,isFixed:ke,isSelected:_e,isExiting:ie})=>{const Be=P.x+P.width/2,it=(ke?P.y:P.y-S)+P.height/2,yt=oe.x+oe.width/2,Ct=(ke?oe.y:oe.y-S)+oe.height/2,Te=yt-Be,Q=Ct-it,de=Math.sqrt(Te*Te+Q*Q);if(de<2)return null;const ue=Math.min(1,de/40),fe=Math.min(de*.3,60),ut=de>0?-Q/de:0,Se=de>0?Te/de:0,$e=(Be+yt)/2+ut*fe,pt=(it+Ct)/2+Se*fe,lt=at.has(L),En=lt||_e?1:.4,Kt=lt||_e?1:.5;return o.jsxs("g",{className:ie?J.connectorExiting:"",children:[o.jsx("path",{className:J.connectorLine,d:`M ${Be} ${it} Q ${$e} ${pt} ${yt} ${Ct}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:En*ue}),o.jsx("circle",{className:J.connectorDot,cx:Be,cy:it,r:4*ue,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Kt*ue,filter:"url(#connDotShadow)"}),o.jsx("circle",{className:J.connectorDot,cx:yt,cy:Ct,r:4*ue,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Kt*ue,filter:"url(#connDotShadow)"})]},`conn-${L}`)}),o.jsx("defs",{children:o.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:o.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),be&&(()=>{const D=T.find(Ct=>Ct.id===be);if(!D)return null;const L=D.currentRect,P=D.isFixed?L.y:L.y-S,oe=L.x+L.width/2,ke=P-8,_e=P+L.height+8,ie=ke>200,Be=_e<window.innerHeight-100,it=Math.max(160,Math.min(window.innerWidth-160,oe));let yt;return ie?yt={left:it,bottom:window.innerHeight-ke}:Be?yt={left:it,top:_e}:yt={left:it,top:Math.max(80,window.innerHeight/2-80)},o.jsx(sc,{element:D.label,placeholder:"Add a note about this section",initialValue:D.note??"",submitLabel:Ee.current?"Save":"Set",onSubmit:Re,onCancel:Fe,onDelete:Ee.current?()=>{Re("")}:void 0,isExiting:Je,lightMode:!c,style:yt})})(),F&&o.jsx("div",{className:J.sizeIndicator,style:{left:F.x,top:F.y},"data-feedback-toolbar":!0,children:F.text}),ye.map((D,L)=>o.jsx("div",{className:J.guideLine,style:D.axis==="x"?{position:"fixed",left:D.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:D.pos-S,width:"100vw",height:1}},`${D.axis}-${D.pos}-${L}`))]})}var jd=new Set(["script","style","noscript","link","meta","br","hr"]);function Dp(){const a=document.querySelector("main")||document.body,r=[],c=Array.from(a.children),u=a!==document.body&&c.length<3?Array.from(document.body.children):c;for(const _ of u){if(!(_ instanceof HTMLElement)||jd.has(_.tagName.toLowerCase())||_.hasAttribute("data-feedback-toolbar"))continue;const f=window.getComputedStyle(_);if(f.display==="none"||f.visibility==="hidden")continue;const x=_.getBoundingClientRect();if(!(x.height<10||x.width<10)){r.push({label:ic(_),selector:za(_),top:x.top,bottom:x.bottom,left:x.left,right:x.right,area:x.width*x.height});for(const R of Array.from(_.children)){if(!(R instanceof HTMLElement)||jd.has(R.tagName.toLowerCase())||R.hasAttribute("data-feedback-toolbar"))continue;const b=window.getComputedStyle(R);if(b.display==="none"||b.visibility==="hidden")continue;const k=R.getBoundingClientRect();k.height<10||k.width<10||r.push({label:ic(R),selector:za(R),top:k.top,bottom:k.bottom,left:k.left,right:k.right,area:k.width*k.height})}}}return r}function Ap(a){const r=window.scrollY;return a.map(({label:c,selector:u,rect:_})=>{const f=_.y-r;return{label:c,selector:u,top:f,bottom:f+_.height,left:_.x,right:_.x+_.width,area:_.width*_.height}})}function Op(a){const r=window.scrollY,c=a.y-r,u=a.x;return{top:c,bottom:c+a.height,left:u,right:u+a.width,area:a.width*a.height}}function Cd(a,r){const c=r?Ap(r):Dp(),u=Op(a);let _=null,f=null,x=null,R=null,b=null;for(const $ of c){if(Math.abs($.left-u.left)<2&&Math.abs($.top-u.top)<2&&Math.abs($.right-$.left-a.width)<2&&Math.abs($.bottom-$.top-a.height)<2)continue;$.left<=u.left+2&&$.right>=u.right-2&&$.top<=u.top+2&&$.bottom>=u.bottom-2&&$.area>u.area*1.5&&(!b||$.area<b._area)&&(b={label:$.label,selector:$.selector,_area:$.area});const le=u.right>$.left+5&&u.left<$.right-5,U=u.bottom>$.top+5&&u.top<$.bottom-5;if(le&&$.bottom<=u.top+5){const q=Math.round(u.top-$.bottom);(!_||q<_._dist)&&(_={label:$.label,selector:$.selector,gap:Math.max(0,q),_dist:q})}if(le&&$.top>=u.bottom-5){const q=Math.round($.top-u.bottom);(!f||q<f._dist)&&(f={label:$.label,selector:$.selector,gap:Math.max(0,q),_dist:q})}if(U&&$.right<=u.left+5){const q=Math.round(u.left-$.right);(!x||q<x._dist)&&(x={label:$.label,selector:$.selector,gap:Math.max(0,q),_dist:q})}if(U&&$.left>=u.right-5){const q=Math.round($.left-u.right);(!R||q<R._dist)&&(R={label:$.label,selector:$.selector,gap:Math.max(0,q),_dist:q})}}const k=window.innerWidth,M=window.innerHeight,A=Bp(a,k),T=$=>$?{label:$.label,selector:$.selector,gap:$.gap}:null,ne=Lp(u,a,k,M,b?{label:b.label,selector:b.selector,_area:b._area}:null,c);return{above:T(_),below:T(f),left:T(x),right:T(R),alignment:A,containedIn:b?{label:b.label,selector:b.selector}:null,outOfBounds:ne}}function Lp(a,r,c,u,_,f){const x={};let R=!1;const b=[];if(a.left<-2&&b.push("left"),a.right>c+2&&b.push("right"),a.top<-2&&b.push("top"),a.bottom>u+2&&b.push("bottom"),b.length>0&&(x.viewport=b,R=!0),_){const k=f.find(M=>M.label===_.label&&M.selector===_.selector&&Math.abs(M.area-_._area)<10);if(k){const M=[];a.left<k.left-2&&M.push("left"),a.right>k.right+2&&M.push("right"),a.top<k.top-2&&M.push("top"),a.bottom>k.bottom+2&&M.push("bottom"),M.length>0&&(x.container={label:_.label,edges:M},R=!0)}}return R?x:null}function Bp(a,r){if(a.width/r>.85)return"full-width";const u=a.x+a.width/2,_=r/2,f=u-_,x=r*.08;return Math.abs(f)<x?"center":f<0?"left":"right"}function Hm(a){switch(a){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function Um(a,r={}){const c=[];a.above&&c.push(`Below \`${a.above.label}\`${a.above.gap>0?` (${a.above.gap}px gap)`:""}`),a.below&&c.push(`Above \`${a.below.label}\`${a.below.gap>0?` (${a.below.gap}px gap)`:""}`),r.includeLeftRight&&(a.left&&c.push(`Right of \`${a.left.label}\`${a.left.gap>0?` (${a.left.gap}px gap)`:""}`),a.right&&c.push(`Left of \`${a.right.label}\`${a.right.gap>0?` (${a.right.gap}px gap)`:""}`));const u=Hm(a.alignment);return a.containedIn?c.push(`${u.charAt(0).toUpperCase()+u.slice(1)} in \`${a.containedIn.label}\``):c.push(`${u.charAt(0).toUpperCase()+u.slice(1)} in page`),r.includePixelRef&&r.pixelRef&&c.push(`Pixel ref: \`${r.pixelRef}\``),a.outOfBounds&&(a.outOfBounds.viewport&&c.push(`**Outside viewport** (${a.outOfBounds.viewport.join(", ")} edge${a.outOfBounds.viewport.length>1?"s":""})`),a.outOfBounds.container&&c.push(`**Outside \`${a.outOfBounds.container.label}\`** (${a.outOfBounds.container.edges.join(", ")} edge${a.outOfBounds.container.edges.length>1?"s":""})`)),c}function $p(a,r,c){const u=[];a.above&&u.push(`below \`${a.above.label}\``),a.below&&u.push(`above \`${a.below.label}\``),a.left&&u.push(`right of \`${a.left.label}\``),a.right&&u.push(`left of \`${a.right.label}\``),a.containedIn&&u.push(`inside \`${a.containedIn.label}\``),u.push(Hm(a.alignment)),a.outOfBounds?.viewport&&u.push(`**outside viewport** (${a.outOfBounds.viewport.join(", ")})`),a.outOfBounds?.container&&u.push(`**outside \`${a.outOfBounds.container.label}\`** (${a.outOfBounds.container.edges.join(", ")})`);const _=c?`, ${Math.round(c.width)}×${Math.round(c.height)}px`:"";return`at (${Math.round(r.x)}, ${Math.round(r.y)})${_}: ${u.join(", ")}`}var cm=15;function um(a){if(a.length<2)return[];const r=[],c=new Set;for(let u=0;u<a.length;u++){if(c.has(u))continue;const _=[u];for(let f=u+1;f<a.length;f++)c.has(f)||Math.abs(a[u].rect.y-a[f].rect.y)<cm&&_.push(f);if(_.length>=2){const f=_.map(b=>a[b]);f.sort((b,k)=>b.rect.x-k.rect.x);const x=[];for(let b=0;b<f.length-1;b++)x.push(Math.round(f[b+1].rect.x-(f[b].rect.x+f[b].rect.width)));const R=Math.round(f.reduce((b,k)=>b+k.rect.y,0)/f.length);r.push({labels:f.map(b=>b.label),type:"row",sharedEdge:R,gaps:x,avgGap:x.length?Math.round(x.reduce((b,k)=>b+k,0)/x.length):0}),_.forEach(b=>c.add(b))}}for(let u=0;u<a.length;u++){if(c.has(u))continue;const _=[u];for(let f=u+1;f<a.length;f++)c.has(f)||Math.abs(a[u].rect.x-a[f].rect.x)<cm&&_.push(f);if(_.length>=2){const f=_.map(b=>a[b]);f.sort((b,k)=>b.rect.y-k.rect.y);const x=[];for(let b=0;b<f.length-1;b++)x.push(Math.round(f[b+1].rect.y-(f[b].rect.y+f[b].rect.height)));const R=Math.round(f.reduce((b,k)=>b+k.rect.x,0)/f.length);r.push({labels:f.map(b=>b.label),type:"column",sharedEdge:R,gaps:x,avgGap:x.length?Math.round(x.reduce((b,k)=>b+k,0)/x.length):0}),_.forEach(b=>c.add(b))}}return r}function Hp(a){if(a.length<2)return[];const r=um(a.map(x=>({label:x.label,rect:x.originalRect}))),c=um(a.map(x=>({label:x.label,rect:x.currentRect}))),u=[],_=new Set;for(const x of r){const R=new Set(x.labels);let b=null,k=0;for(const M of c){const A=M.labels.filter(T=>R.has(T)).length;A>=2&&A>k&&(b=M,k=A)}if(b){const M=b.labels.filter(T=>R.has(T)),A=M.join(", ");if(b.type!==x.type){const T=x.type==="row"?"y":"x",ne=b.type==="row"?"y":"x";u.push(`**${A}**: ${x.type} (${T}≈${x.sharedEdge}, ${x.avgGap}px gaps) → ${b.type} (${ne}≈${b.sharedEdge}, ${b.avgGap}px gaps)`)}else if(Math.abs(x.sharedEdge-b.sharedEdge)>20||Math.abs(x.avgGap-b.avgGap)>5){const T=x.type==="row"?"y":"x",ne=Math.abs(x.sharedEdge-b.sharedEdge)>20?` ${T}: ${x.sharedEdge} → ${b.sharedEdge}`:"",$=Math.abs(x.avgGap-b.avgGap)>5?` gaps: ${x.avgGap}px → ${b.avgGap}px`:"";u.push(`**${A}**: ${x.type} shifted —${ne}${$}`)}M.forEach(T=>_.add(T))}else{const M=x.labels.join(", "),A=x.type==="row"?"y":"x";u.push(`**${M}**: ${x.type} (${A}≈${x.sharedEdge}) dissolved`),x.labels.forEach(T=>_.add(T))}}for(const x of c){if(x.labels.every(k=>_.has(k))||x.labels.filter(k=>!_.has(k)).length<2)continue;if(!r.some(k=>k.labels.filter(A=>x.labels.includes(A)).length>=2)){const k=x.type==="row"?"y":"x";u.push(`**${x.labels.join(", ")}**: new ${x.type} (${k}≈${x.sharedEdge}, ${x.avgGap}px gaps)`),x.labels.forEach(M=>_.add(M))}}const f=a.filter(x=>!_.has(x.label));if(f.length>=2){const x={};for(const R of f){const b=Math.round(R.currentRect.x/5)*5;(x[b]??(x[b]=[])).push(R.label)}for(const[R,b]of Object.entries(x))b.length>=2&&u.push(`**${b.join(", ")}**: shared left edge at x≈${R}`)}return u}function Ym(a){if(typeof document>"u")return{viewport:a,contentArea:null};const r=[],c=new Set,u=R=>{c.has(R)||R instanceof HTMLElement&&(R.hasAttribute("data-feedback-toolbar")||jd.has(R.tagName.toLowerCase())||(c.add(R),r.push(R)))},_=document.querySelector("main");_&&u(_);const f=document.querySelector("[role='main']");f&&u(f);for(const R of Array.from(document.body.children))if(u(R),R.children){for(const b of Array.from(R.children))if(u(b),b.children)for(const k of Array.from(b.children))u(k)}let x=null;for(const R of r){const b=R.getBoundingClientRect();if(b.height<50)continue;const k=getComputedStyle(R);if(k.maxWidth&&k.maxWidth!=="none"&&k.maxWidth!=="0px"){(!x||b.width<x.rect.width)&&(x={el:R,rect:b});continue}!x&&b.width<a.width-20&&b.width>100&&(x={el:R,rect:b})}if(x){const{el:R,rect:b}=x;return{viewport:a,contentArea:{width:Math.round(b.width),left:Math.round(b.left),right:Math.round(b.right),centerX:Math.round(b.left+b.width/2),selector:za(R)}}}return{viewport:a,contentArea:null}}function Up(a){if(typeof document>"u")return null;const r=document.querySelector(a);if(!r?.parentElement)return null;const c=getComputedStyle(r.parentElement),u={parentDisplay:c.display,parentSelector:za(r.parentElement)};return c.display.includes("flex")&&(u.flexDirection=c.flexDirection),c.display.includes("grid")&&c.gridTemplateColumns!=="none"&&(u.gridCols=c.gridTemplateColumns),c.gap&&c.gap!=="normal"&&c.gap!=="0px"&&(u.gap=c.gap),u}function Xm(a,r){const c=r.contentArea,u=c?c.width:r.viewport.width,_=c?c.left:0,f=c?c.centerX:Math.round(r.viewport.width/2),x=Math.round(a.x-_),R=Math.round(_+u-(a.x+a.width)),b=(a.width/u*100).toFixed(1),k=a.x+a.width/2,M=Math.abs(k-f)<20,A=a.width/u>.95,T=[];return A?T.push("`width: 100%` of container"):T.push(`left \`${x}px\` in container, right \`${R}px\`, width \`${b}%\` (\`${Math.round(a.width)}px\`)`),M&&!A&&T.push("centered — `margin-inline: auto`"),T.join(" — ")}function Im(a){const{viewport:r,contentArea:c}=a;let u=`### Reference Frame
`;if(u+=`- Viewport: \`${r.width}×${r.height}px\`
`,c){const _=c;u+=`- Content area: \`${_.width}px\` wide, left edge at \`x=${_.left}\`, right at \`x=${_.right}\` (\`${_.selector}\`)
`,u+=`- Pixel → CSS translation:
`,u+=`  - **Horizontal position in container**: \`element.x - ${_.left}\` → use as \`margin-left\` or \`left\`
`,u+=`  - **Width as % of container**: \`element.width / ${_.width} × 100\` → use as \`width: X%\`
`,u+="  - **Vertical gap between elements**: `nextElement.y - (prevElement.y + prevElement.height)` → use as `margin-top` or `gap`\n",u+=`  - **Centered**: if \`|element.centerX - ${_.centerX}| < 20px\` → use \`margin-inline: auto\`
`}else u+=`- No distinct content container — elements positioned relative to full viewport
`,u+=`- Pixel → CSS translation:
`,u+=`  - **Width as % of viewport**: \`element.width / ${r.width} × 100\` → use as \`width: X%\`
`,u+=`  - **Centered**: if \`|(element.x + element.width/2) - ${Math.round(r.width/2)}| < 20px\` → use \`margin-inline: auto\`
`;return u+=`
`,u}function Yp(a){const r=Up(a);if(!r)return null;let c=`\`${r.parentDisplay}\``;return r.flexDirection&&(c+=`, flex-direction: \`${r.flexDirection}\``),r.gridCols&&(c+=`, grid-template-columns: \`${r.gridCols}\``),r.gap&&(c+=`, gap: \`${r.gap}\``),`Parent: ${c} (\`${r.parentSelector}\`)`}function dm(a,r,c,u="standard"){if(a.length===0)return"";const _=[...a].sort((U,q)=>Math.abs(U.y-q.y)<20?U.x-q.x:U.y-q.y);let f="";if(c?.blankCanvas?(f+=`## Wireframe: New Page

`,c.wireframePurpose&&(f+=`> **Purpose:** ${c.wireframePurpose}
>
`),f+=`> ${a.length} component${a.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):f+=`## Design Layout

> ${a.length} component${a.length!==1?"s":""} placed

`,u==="compact")return f+=`### Components
`,_.forEach((U,q)=>{const me=Hl[U.type]?.label||U.type;f+=`${q+1}. **${me}** — \`${Math.round(U.width)}×${Math.round(U.height)}px\` at \`(${Math.round(U.x)}, ${Math.round(U.y)})\`
`}),f;const x=Ym(r);f+=Im(x),f+=`### Components
`,_.forEach((U,q)=>{const me=Hl[U.type]?.label||U.type,pe={x:U.x,y:U.y,width:U.width,height:U.height};f+=`${q+1}. **${me}** — \`${Math.round(U.width)}×${Math.round(U.height)}px\` at \`(${Math.round(U.x)}, ${Math.round(U.y)})\`
`;const be=Cd(pe),Je=Um(be,{includeLeftRight:u==="detailed"||u==="forensic"});for(const Ee of Je)f+=`   - ${Ee}
`;const K=Xm(pe,x);K&&(f+=`   - CSS: ${K}
`)}),f+=`
### Layout Analysis
`;const R=[];for(const U of _){const q=R.find(me=>Math.abs(me.y-U.y)<30);q?q.items.push(U):R.push({y:U.y,items:[U]})}if(R.sort((U,q)=>U.y-q.y),R.forEach((U,q)=>{U.items.sort((pe,be)=>pe.x-be.x);const me=U.items.map(pe=>Hl[pe.type]?.label||pe.type);if(U.items.length===1){const be=U.items[0].width>r.width*.8;f+=`- Row ${q+1} (y≈${Math.round(U.y)}): ${me[0]}${be?" — full width":""}
`}else f+=`- Row ${q+1} (y≈${Math.round(U.y)}): ${me.join(" | ")} — ${U.items.length} items side by side
`}),u==="detailed"||u==="forensic"){f+=`
### Spacing & Gaps
`;for(let U=0;U<_.length-1;U++){const q=_[U],me=_[U+1],pe=Hl[q.type]?.label||q.type,be=Hl[me.type]?.label||me.type,et=Math.round(me.y-(q.y+q.height)),Je=Math.round(me.x-(q.x+q.width));Math.abs(q.y-me.y)<30?f+=`- ${pe} → ${be}: \`${Je}px\` horizontal gap
`:f+=`- ${pe} → ${be}: \`${et}px\` vertical gap
`}if(u==="forensic"&&_.length>2){f+=`
### All Pairwise Gaps
`;for(let U=0;U<_.length;U++)for(let q=U+1;q<_.length;q++){const me=_[U],pe=_[q],be=Hl[me.type]?.label||me.type,et=Hl[pe.type]?.label||pe.type,Je=Math.round(pe.y-(me.y+me.height)),K=Math.round(pe.x-(me.x+me.width));f+=`- ${be} ↔ ${et}: h=\`${K}px\` v=\`${Je}px\`
`}}u==="forensic"&&(f+=`
### Z-Order (placement order)
`,a.forEach((U,q)=>{const me=Hl[U.type]?.label||U.type;f+=`${q}. ${me} at \`(${Math.round(U.x)}, ${Math.round(U.y)})\`
`}))}f+=`
### Suggested Implementation
`;const b=_.some(U=>U.type==="navigation"),k=_.some(U=>U.type==="hero"),M=_.some(U=>U.type==="sidebar"),A=_.some(U=>U.type==="footer"),T=_.filter(U=>U.type==="card"),ne=_.filter(U=>U.type==="form"),$=_.filter(U=>U.type==="table"),le=_.filter(U=>U.type==="modal");if(b&&(f+=`- Top navigation bar with logo + nav links + CTA
`),k&&(f+=`- Hero section with heading, subtext, and call-to-action
`),M&&(f+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),T.length>1?f+=`- ${T.length}-column card grid — use CSS Grid or Flexbox
`:T.length===1&&(f+=`- Card component with image + content area
`),ne.length>0&&(f+=`- ${ne.length} form${ne.length>1?"s":""} — add proper labels, validation, and submit handling
`),$.length>0&&(f+=`- Data table — consider sortable columns and pagination
`),le.length>0&&(f+=`- Modal dialog — add overlay backdrop and focus trapping
`),A&&(f+=`- Multi-column footer with links
`),u==="detailed"||u==="forensic"){if(f+=`
### CSS Suggestions
`,M){const U=_.find(q=>q.type==="sidebar");f+=`- \`display: grid; grid-template-columns: ${Math.round(U.width)}px 1fr;\`
`}if(T.length>1){const U=Math.round(T[0].width);f+=`- \`display: grid; grid-template-columns: repeat(${T.length}, ${U}px); gap: 16px;\`
`}b&&(f+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return f}function _m(a,r="standard",c){const{sections:u}=a,_=[];for(const M of u){const A=M.originalRect,T=M.currentRect,ne=Math.abs(A.x-T.x)>1||Math.abs(A.y-T.y)>1,$=Math.abs(A.width-T.width)>1||Math.abs(A.height-T.height)>1;if(!ne&&!$){r==="forensic"&&_.push({section:M,posMoved:!1,sizeChanged:!1});continue}_.push({section:M,posMoved:ne,sizeChanged:$})}if(_.length===0||r!=="forensic"&&_.every(M=>!M.posMoved&&!M.sizeChanged))return"";let f=`## Suggested Layout Changes

`;const x=c?c.width:typeof window<"u"?window.innerWidth:0,R=c?c.height:typeof window<"u"?window.innerHeight:0,b=Ym({width:x,height:R});r!=="compact"&&(f+=Im(b)),r==="forensic"&&(f+=`> Detected at: \`${new Date(a.detectedAt).toISOString()}\`
`,f+=`> Total sections: ${u.length}

`);const k=M=>u.map(A=>({label:A.label,selector:A.selector,rect:M==="original"?A.originalRect:A.currentRect}));f+=`**Changes:**
`;for(const{section:M,posMoved:A,sizeChanged:T}of _){const ne=M.originalRect,$=M.currentRect;if(!A&&!T){f+=`- ${M.label} — unchanged at (${Math.round($.x)}, ${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)}px
`;continue}if(r==="compact"){A&&T?f+=`- Suggested: move **${M.label}** to (${Math.round($.x)}, ${Math.round($.y)}) ${Math.round($.width)}×${Math.round($.height)}px
`:A?f+=`- Suggested: move **${M.label}** to (${Math.round($.x)}, ${Math.round($.y)})
`:f+=`- Suggested: resize **${M.label}** to ${Math.round($.width)}×${Math.round($.height)}px
`;continue}if(A&&T?f+=`- Suggested: move and resize **${M.label}**
`:A?f+=`- Suggested: move **${M.label}**
`:f+=`- Suggested: resize **${M.label}** from ${Math.round(ne.width)}×${Math.round(ne.height)}px to ${Math.round($.width)}×${Math.round($.height)}px
`,A){const U=Cd(ne,k("original")),q=Cd($,k("current")),me=T?{width:ne.width,height:ne.height}:void 0;f+=`  - Currently ${$p(U,{x:ne.x,y:ne.y},me)}
`;const pe=T?{width:$.width,height:$.height}:void 0,be=`at (${Math.round($.x)}, ${Math.round($.y)})`,et=pe?`, ${Math.round(pe.width)}×${Math.round(pe.height)}px`:"",K=Um(q,{includeLeftRight:r==="detailed"||r==="forensic"});if(K.length>0){f+=`  - Suggested position ${be}${et}: ${K[0]}
`;for(let ae=1;ae<K.length;ae++)f+=`    ${K[ae]}
`}else f+=`  - Suggested position ${be}${et}
`;const Ee=Xm($,b);Ee&&(f+=`  - CSS: ${Ee}
`)}const le=Yp(M.selector);if(le&&(f+=`  - ${le}
`),f+=`  - Selector: \`${M.selector}\`
`,r==="detailed"||r==="forensic"){const U=M.className?`${M.tagName}.${M.className.split(" ")[0]}`:M.tagName;U!==M.selector&&(f+=`  - Element: \`${U}\`
`),M.role&&(f+=`  - Role: \`${M.role}\`
`),r==="forensic"&&M.textSnippet&&(f+=`  - Text: "${M.textSnippet}"
`)}r==="forensic"&&(f+=`  - Original rect: \`{ x: ${Math.round(ne.x)}, y: ${Math.round(ne.y)}, w: ${Math.round(ne.width)}, h: ${Math.round(ne.height)} }\`
`,f+=`  - Current rect: \`{ x: ${Math.round($.x)}, y: ${Math.round($.y)}, w: ${Math.round($.width)}, h: ${Math.round($.height)} }\`
`)}if(r!=="compact"){const M=_.filter(T=>T.posMoved).map(T=>({label:T.section.label,originalRect:T.section.originalRect,currentRect:T.section.currentRect})),A=Hp(M);if(A.length>0){f+=`
### Layout Summary
`;for(const T of A)f+=`- ${T}
`}}if(r!=="compact"&&u.length>1){f+=`
### All Sections (current positions)
`;const M=[...u].sort((A,T)=>Math.abs(A.currentRect.y-T.currentRect.y)<20?A.currentRect.x-T.currentRect.x:A.currentRect.y-T.currentRect.y);for(const A of M){const T=A.currentRect,ne=Math.abs(T.x-A.originalRect.x)>1||Math.abs(T.y-A.originalRect.y)>1||Math.abs(T.width-A.originalRect.width)>1||Math.abs(T.height-A.originalRect.height)>1;f+=`- ${A.label}: \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`${ne?" ← suggested":""}
`}}return f}var Md="feedback-annotations-",qm=7;function rc(a){return`${Md}${a}`}function _d(a){if(typeof window>"u")return[];try{const r=localStorage.getItem(rc(a));if(!r)return[];const c=JSON.parse(r),u=Date.now()-qm*24*60*60*1e3;return c.filter(_=>!_.timestamp||_.timestamp>u)}catch{return[]}}function Qm(a,r){if(!(typeof window>"u"))try{localStorage.setItem(rc(a),JSON.stringify(r))}catch{}}function Xp(){const a=new Map;if(typeof window>"u")return a;try{const r=Date.now()-qm*24*60*60*1e3;for(let c=0;c<localStorage.length;c++){const u=localStorage.key(c);if(u?.startsWith(Md)){const _=u.slice(Md.length),f=localStorage.getItem(u);if(f){const R=JSON.parse(f).filter(b=>!b.timestamp||b.timestamp>r);R.length>0&&a.set(_,R)}}}}catch{}return a}function Si(a,r,c){const u=r.map(_=>({..._,_syncedTo:c}));Qm(a,u)}var Rd="agentation-design-";function Ip(a){if(typeof window>"u")return[];try{const r=localStorage.getItem(`${Rd}${a}`);return r?JSON.parse(r):[]}catch{return[]}}function qp(a,r){if(!(typeof window>"u"))try{localStorage.setItem(`${Rd}${a}`,JSON.stringify(r))}catch{}}function Qp(a){if(!(typeof window>"u"))try{localStorage.removeItem(`${Rd}${a}`)}catch{}}var zd="agentation-rearrange-";function Wp(a){if(typeof window>"u")return null;try{const r=localStorage.getItem(`${zd}${a}`);return r?JSON.parse(r):null}catch{return null}}function Gp(a,r){if(!(typeof window>"u"))try{localStorage.setItem(`${zd}${a}`,JSON.stringify(r))}catch{}}function Vp(a){if(!(typeof window>"u"))try{localStorage.removeItem(`${zd}${a}`)}catch{}}var Dd="agentation-wireframe-";function Zp(a){if(typeof window>"u")return null;try{const r=localStorage.getItem(`${Dd}${a}`);return r?JSON.parse(r):null}catch{return null}}function fm(a,r){if(!(typeof window>"u"))try{localStorage.setItem(`${Dd}${a}`,JSON.stringify(r))}catch{}}function nc(a){if(!(typeof window>"u"))try{localStorage.removeItem(`${Dd}${a}`)}catch{}}var Wm="agentation-session-";function Ad(a){return`${Wm}${a}`}function Kp(a){if(typeof window>"u")return null;try{return localStorage.getItem(Ad(a))}catch{return null}}function fd(a,r){if(!(typeof window>"u"))try{localStorage.setItem(Ad(a),r)}catch{}}function Fp(a){if(!(typeof window>"u"))try{localStorage.removeItem(Ad(a))}catch{}}var Gm=`${Wm}toolbar-hidden`;function Jp(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Gm)==="1"}catch{return!1}}function Pp(a){if(!(typeof window>"u"))try{a&&sessionStorage.setItem(Gm,"1")}catch{}}async function hd(a,r){const c=await fetch(`${a}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:r})});if(!c.ok)throw new Error(`Failed to create session: ${c.status}`);return c.json()}async function hm(a,r){const c=await fetch(`${a}/sessions/${r}`);if(!c.ok)throw new Error(`Failed to get session: ${c.status}`);return c.json()}async function xs(a,r,c){const u=await fetch(`${a}/sessions/${r}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error(`Failed to sync annotation: ${u.status}`);return u.json()}async function mm(a,r,c){const u=await fetch(`${a}/annotations/${r}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error(`Failed to update annotation: ${u.status}`);return u.json()}async function na(a,r){const c=await fetch(`${a}/annotations/${r}`,{method:"DELETE"});if(!c.ok)throw new Error(`Failed to delete annotation: ${c.status}`)}var Dt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},gm=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),ym=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],e1=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function t1(a){const r=a?.mode??"filtered";let c=gm;if(a?.skipExact){const u=a.skipExact instanceof Set?a.skipExact:new Set(a.skipExact);c=new Set([...gm,...u])}return{maxComponents:a?.maxComponents??6,maxDepth:a?.maxDepth??30,mode:r,skipExact:c,skipPatterns:a?.skipPatterns?[...ym,...a.skipPatterns]:ym,userPatterns:a?.userPatterns??e1,filter:a?.filter}}function n1(a){return a.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function l1(a,r=10){const c=new Set;let u=a,_=0;for(;u&&_<r;)u.className&&typeof u.className=="string"&&u.className.split(/\s+/).forEach(f=>{if(f.length>1){const x=f.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();x.length>1&&c.add(x)}}),u=u.parentElement,_++;return c}function o1(a,r){const c=n1(a);for(const u of r){if(u===c)return!0;const _=c.split("-").filter(x=>x.length>2),f=u.split("-").filter(x=>x.length>2);for(const x of _)for(const R of f)if(x===R||x.includes(R)||R.includes(x))return!0}return!1}function a1(a,r,c,u){if(c.filter)return c.filter(a,r);switch(c.mode){case"all":return!0;case"filtered":return!(c.skipExact.has(a)||c.skipPatterns.some(_=>_.test(a)));case"smart":return c.skipExact.has(a)||c.skipPatterns.some(_=>_.test(a))?!1:!!(u&&o1(a,u)||c.userPatterns.some(_=>_.test(a)));default:return!0}}var bs=null,s1=new WeakMap;function md(a){return Object.keys(a).some(r=>r.startsWith("__reactFiber$")||r.startsWith("__reactInternalInstance$")||r.startsWith("__reactProps$"))}function i1(){if(bs!==null)return bs;if(typeof document>"u")return!1;if(document.body&&md(document.body))return bs=!0,!0;const a=["#root","#app","#__next","[data-reactroot]"];for(const r of a){const c=document.querySelector(r);if(c&&md(c))return bs=!0,!0}if(document.body){for(const r of document.body.children)if(md(r))return bs=!0,!0}return bs=!1,!1}var ki={map:s1};function r1(a){return Object.keys(a).find(c=>c.startsWith("__reactFiber$")||c.startsWith("__reactInternalInstance$"))||null}function c1(a){const r=r1(a);return r?a[r]:null}function Ea(a){return a?a.displayName?a.displayName:a.name?a.name:null:null}function u1(a){const{tag:r,type:c,elementType:u}=a;if(r===Dt.HostComponent||r===Dt.HostText||r===Dt.HostHoistable||r===Dt.HostSingleton||r===Dt.Fragment||r===Dt.Mode||r===Dt.Profiler||r===Dt.DehydratedFragment||r===Dt.HostRoot||r===Dt.HostPortal||r===Dt.ScopeComponent||r===Dt.OffscreenComponent||r===Dt.LegacyHiddenComponent||r===Dt.CacheComponent||r===Dt.TracingMarkerComponent||r===Dt.Throw||r===Dt.ViewTransitionComponent||r===Dt.ActivityComponent)return null;if(r===Dt.ForwardRef){const _=u;if(_?.render){const f=Ea(_.render);if(f)return f}return _?.displayName?_.displayName:Ea(c)}if(r===Dt.MemoComponent||r===Dt.SimpleMemoComponent){const _=u;if(_?.type){const f=Ea(_.type);if(f)return f}return _?.displayName?_.displayName:Ea(c)}if(r===Dt.ContextProvider){const _=c;return _?._context?.displayName?`${_._context.displayName}.Provider`:null}if(r===Dt.ContextConsumer){const _=c;return _?.displayName?`${_.displayName}.Consumer`:null}if(r===Dt.LazyComponent){const _=u;return _?._status===1&&_._result?Ea(_._result):null}return r===Dt.SuspenseComponent||r===Dt.SuspenseListComponent?null:r===Dt.IncompleteClassComponent||r===Dt.IncompleteFunctionComponent||r===Dt.FunctionComponent||r===Dt.ClassComponent||r===Dt.IndeterminateComponent?Ea(c):null}function d1(a){return a.length<=2||a.length<=3&&a===a.toLowerCase()}function _1(a,r){const c=t1(r),u=c.mode==="all";if(u){const b=ki.map.get(a);if(b!==void 0)return b}if(!i1()){const b={path:null,components:[]};return u&&ki.map.set(a,b),b}const _=c.mode==="smart"?l1(a):void 0,f=[];try{let b=c1(a),k=0;for(;b&&k<c.maxDepth&&f.length<c.maxComponents;){const M=u1(b);M&&!d1(M)&&a1(M,k,c,_)&&f.push(M),b=b.return,k++}}catch{const b={path:null,components:[]};return u&&ki.map.set(a,b),b}if(f.length===0){const b={path:null,components:[]};return u&&ki.map.set(a,b),b}const R={path:f.slice().reverse().map(b=>`<${b}>`).join(" "),components:f};return u&&ki.map.set(a,R),R}var ji={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function f1(a){if(!a||typeof a!="object")return null;const r=Object.keys(a),c=r.find(f=>f.startsWith("__reactFiber$"));if(c)return a[c]||null;const u=r.find(f=>f.startsWith("__reactInternalInstance$"));if(u)return a[u]||null;const _=r.find(f=>{if(!f.startsWith("__react"))return!1;const x=a[f];return x&&typeof x=="object"&&"_debugSource"in x});return _&&a[_]||null}function Ei(a){if(!a.type||typeof a.type=="string")return null;if(typeof a.type=="object"||typeof a.type=="function"){const r=a.type;if(r.displayName)return r.displayName;if(r.name)return r.name}return null}function h1(a,r=50){let c=a,u=0;for(;c&&u<r;){if(c._debugSource)return{source:c._debugSource,componentName:Ei(c)};if(c._debugOwner?._debugSource)return{source:c._debugOwner._debugSource,componentName:Ei(c._debugOwner)};c=c.return,u++}return null}function m1(a){let r=a,c=0;const u=50;for(;r&&c<u;){const _=r,f=["_debugSource","__source","_source","debugSource"];for(const x of f){const R=_[x];if(R&&typeof R=="object"&&"fileName"in R)return{source:R,componentName:Ei(r)}}if(r.memoizedProps){const x=r.memoizedProps;if(x.__source&&typeof x.__source=="object"){const R=x.__source;if(R.fileName&&R.lineNumber)return{source:{fileName:R.fileName,lineNumber:R.lineNumber,columnNumber:R.columnNumber},componentName:Ei(r)}}}r=r.return,c++}return null}var lc=new Map;function g1(a){const r=a.tag,c=a.type,u=a.elementType;if(typeof c=="string"||c==null||typeof c=="function"&&c.prototype?.isReactComponent)return null;if((r===ji.FunctionComponent||r===ji.IndeterminateComponent)&&typeof c=="function")return c;if(r===ji.ForwardRef&&u){const _=u.render;if(typeof _=="function")return _}if((r===ji.MemoComponent||r===ji.SimpleMemoComponent)&&u){const _=u.type;if(typeof _=="function")return _}return typeof c=="function"?c:null}function y1(){const a=Tm,r=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(r&&"H"in r)return{get:()=>r.H,set:u=>{r.H=u}};const c=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(c){const u=c.ReactCurrentDispatcher;if(u&&"current"in u)return{get:()=>u.current,set:_=>{u.current=_}}}return null}function p1(a){const r=a.split(`
`),c=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],u=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,_=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const f of r){const x=f.trim();if(!x||c.some(b=>b.test(x)))continue;const R=u.exec(x)||_.exec(x);if(R)return{fileName:R[1],line:parseInt(R[2],10),column:parseInt(R[3],10)}}return null}function x1(a){let r=a;return r=r.replace(/[?#].*$/,""),r=r.replace(/^turbopack:\/\/\/\[project\]\//,""),r=r.replace(/^webpack-internal:\/\/\/\.\//,""),r=r.replace(/^webpack-internal:\/\/\//,""),r=r.replace(/^webpack:\/\/\/\.\//,""),r=r.replace(/^webpack:\/\/\//,""),r=r.replace(/^turbopack:\/\/\//,""),r=r.replace(/^https?:\/\/[^/]+\//,""),r=r.replace(/^file:\/\/\//,"/"),r=r.replace(/^\([^)]+\)\/\.\//,""),r=r.replace(/^\.\//,""),r}function b1(a){const r=g1(a);if(!r)return null;if(lc.has(r))return lc.get(r);const c=y1();if(!c)return lc.set(r,null),null;const u=c.get();let _=null;try{const f=new Proxy({},{get(){throw new Error("probe")}});c.set(f);try{r({})}catch(x){if(x instanceof Error&&x.message==="probe"&&x.stack){const R=p1(x.stack);R&&(_={fileName:x1(R.fileName),lineNumber:R.line,columnNumber:R.column,componentName:Ei(a)||void 0})}}}finally{c.set(u)}return lc.set(r,_),_}function v1(a,r=15){let c=a,u=0;for(;c&&u<r;){const _=b1(c);if(_)return _;c=c.return,u++}return null}function Ed(a){const r=f1(a);if(!r)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let c=h1(r);if(c||(c=m1(r)),c?.source)return{found:!0,source:{fileName:c.source.fileName,lineNumber:c.source.lineNumber,columnNumber:c.source.columnNumber,componentName:c.componentName||void 0},isReactApp:!0,isProduction:!1};const u=v1(r);return u?{found:!0,source:u,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function w1(a,r="path"){const{fileName:c,lineNumber:u,columnNumber:_}=a;let f=`${c}:${u}`;return _!==void 0&&(f+=`:${_}`),r==="vscode"?`vscode://file${c.startsWith("/")?"":"/"}${f}`:f}function S1(a,r=10){let c=a,u=0;for(;c&&u<r;){const _=Ed(c);if(_.found)return _;c=c.parentElement,u++}return Ed(a)}var k1=`.styles-module__toolbar___wNsdK svg[fill=none],
.styles-module__markersLayer___-25j1 svg[fill=none],
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] {
  fill: none !important;
}
.styles-module__toolbar___wNsdK svg[fill=none] :not([fill]),
.styles-module__markersLayer___-25j1 svg[fill=none] :not([fill]),
.styles-module__fixedMarkersLayer___ffyX6 svg[fill=none] :not([fill]) {
  fill: none !important;
}

.styles-module__controlsContent___9GJWU :where(button, input, select, textarea, label) {
  background: unset;
  border: unset;
  border-radius: unset;
  padding: unset;
  margin: unset;
  color: unset;
  font-family: unset;
  font-weight: unset;
  font-style: unset;
  line-height: unset;
  letter-spacing: unset;
  text-transform: unset;
  text-decoration: unset;
  box-shadow: unset;
  outline: unset;
}

@keyframes styles-module__toolbarEnter___u8RRu {
  from {
    opacity: 0;
    transform: scale(0.5) rotate(90deg);
  }
  to {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
@keyframes styles-module__toolbarHide___y8kaT {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.8);
  }
}
@keyframes styles-module__badgeEnter___mVQLj {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleIn___c-r1K {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__scaleOut___Wctwz {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.85);
  }
}
@keyframes styles-module__slideUp___kgD36 {
  from {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes styles-module__slideDown___zcdje {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.85) translateY(8px);
  }
}
@keyframes styles-module__fadeIn___b9qmf {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes styles-module__fadeOut___6Ut6- {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes styles-module__hoverHighlightIn___6WYHY {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__hoverTooltipIn___FYGQx {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(4px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.styles-module__disableTransitions___EopxO :is(*, *::before, *::after) {
  transition: none !important;
}

.styles-module__toolbar___wNsdK {
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  width: 337px;
  z-index: 100000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  pointer-events: none;
  transition: left 0s, top 0s, right 0s, bottom 0s;
}

:where(.styles-module__toolbar___wNsdK) {
  bottom: 1.25rem;
  right: 1.25rem;
}

.styles-module__toolbarContainer___dIhma {
  position: relative;
  user-select: none;
  margin-left: auto;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1a1a1a;
  color: #fff;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toolbarContainer___dIhma.styles-module__entrance___sgHd8 {
  animation: styles-module__toolbarEnter___u8RRu 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) forwards;
}
.styles-module__toolbarContainer___dIhma.styles-module__hiding___1td44 {
  animation: styles-module__toolbarHide___y8kaT 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
  pointer-events: none;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn {
  width: 44px;
  height: 44px;
  border-radius: 22px;
  padding: 0;
  cursor: pointer;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn svg {
  margin-top: -1px;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #2a2a2a;
}
.styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:active {
  transform: scale(0.95);
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx {
  height: 44px;
  border-radius: 1.5rem;
  padding: 0.375rem;
  width: 297px;
}
.styles-module__toolbarContainer___dIhma.styles-module__expanded___ofKPx.styles-module__serverConnected___Gfbou {
  width: 337px;
}

.styles-module__toggleContent___0yfyP {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.1s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__toggleContent___0yfyP.styles-module__visible___KHwEW {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.styles-module__toggleContent___0yfyP.styles-module__hidden___Ae8H4 {
  opacity: 0;
  pointer-events: none;
}

.styles-module__controlsContent___9GJWU {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  transition: filter 0.8s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.8s cubic-bezier(0.19, 1, 0.22, 1), transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__controlsContent___9GJWU.styles-module__visible___KHwEW {
  opacity: 1;
  filter: blur(0px);
  transform: scale(1);
  visibility: visible;
  pointer-events: auto;
}
.styles-module__controlsContent___9GJWU.styles-module__hidden___Ae8H4 {
  pointer-events: none;
  opacity: 0;
  filter: blur(10px);
  transform: scale(0.4);
}

.styles-module__badge___2XsgF {
  position: absolute;
  top: -13px;
  right: -13px;
  user-select: none;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), inset 0 0 0 1px rgba(255, 255, 255, 0.04);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.2s ease;
  transform: scale(1);
}
.styles-module__badge___2XsgF.styles-module__fadeOut___6Ut6- {
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
}
.styles-module__badge___2XsgF.styles-module__entrance___sgHd8 {
  animation: styles-module__badgeEnter___mVQLj 0.3s cubic-bezier(0.34, 1.2, 0.64, 1) 0.4s both;
}

.styles-module__controlButton___8Q0jc {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.85);
  transition: background-color 0.15s ease, color 0.15s ease, transform 0.1s ease, opacity 0.2s ease;
}
.styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.styles-module__controlButton___8Q0jc:active:not(:disabled) {
  transform: scale(0.92);
}
.styles-module__controlButton___8Q0jc:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}
.styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background-color: color-mix(in srgb, var(--agentation-color-blue) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}
.styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
  color: var(--agentation-color-red);
}
.styles-module__controlButton___8Q0jc[data-no-hover=true], .styles-module__controlButton___8Q0jc.styles-module__statusShowing___te6iu {
  cursor: default;
  pointer-events: none;
  background: transparent !important;
}
.styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
  cursor: default;
}
.styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background-color: color-mix(in srgb, var(--agentation-color-red) 25%, transparent);
}

.styles-module__buttonBadge___NeFWb {
  position: absolute;
  top: 0px;
  right: 0px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background-color: var(--agentation-color-accent);
  color: white;
  font-size: 0.625rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0 2px #1a1a1a, 0 1px 3px rgba(0, 0, 0, 0.2);
  pointer-events: none;
}
[data-agentation-theme=light] .styles-module__buttonBadge___NeFWb {
  box-shadow: 0 0 0 2px #fff, 0 1px 3px rgba(0, 0, 0, 0.2);
}

@keyframes styles-module__mcpIndicatorPulseConnected___EDodZ {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpIndicatorPulseConnecting___cCYte {
  0%, 100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-yellow) 50%, transparent);
  }
  50% {
    box-shadow: 0 0 0 5px color-mix(in srgb, var(--agentation-color-yellow) 0%, transparent);
  }
}
.styles-module__mcpIndicator___zGJeL {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  pointer-events: none;
  transition: background-color 0.3s ease, opacity 0.15s ease, transform 0.15s ease;
  opacity: 1;
  transform: scale(1);
}
.styles-module__mcpIndicator___zGJeL.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpIndicatorPulseConnected___EDodZ 2.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpIndicatorPulseConnecting___cCYte 1.5s ease-in-out infinite;
}
.styles-module__mcpIndicator___zGJeL.styles-module__hidden___Ae8H4 {
  opacity: 0;
  transform: scale(0);
  animation: none;
}

@keyframes styles-module__connectionPulse___-Zycw {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(0.9);
  }
}
.styles-module__connectionIndicatorWrapper___L-e-3 {
  width: 8px;
  height: 34px;
  margin-left: 6px;
  margin-right: 6px;
}

.styles-module__connectionIndicator___afk9p {
  position: relative;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  cursor: default;
}

.styles-module__connectionIndicatorVisible___C-i5B {
  opacity: 1;
}

.styles-module__connectionIndicatorConnected___IY8pR {
  background-color: var(--agentation-color-green);
  animation: styles-module__connectionPulse___-Zycw 2.5s ease-in-out infinite;
}

.styles-module__connectionIndicatorDisconnected___kmpaZ {
  background-color: var(--agentation-color-red);
  animation: none;
}

.styles-module__connectionIndicatorConnecting___QmSLH {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__connectionPulse___-Zycw 1s ease-in-out infinite;
}

.styles-module__buttonWrapper___rBcdv {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) scale(1);
  transition-delay: 0.85s;
}
.styles-module__buttonWrapper___rBcdv:has(.styles-module__controlButton___8Q0jc:disabled):hover .styles-module__buttonTooltip___Burd9 {
  opacity: 0;
  visibility: hidden;
}

.styles-module__tooltipsInSession___-0lHH .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transition-delay: 0s;
}

.styles-module__sendButtonWrapper___UUxG6 {
  width: 0;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  margin-left: -0.375rem;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.3s cubic-bezier(0.19, 1, 0.22, 1), margin 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6 .styles-module__controlButton___8Q0jc {
  transform: scale(0.8);
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU {
  width: 34px;
  opacity: 1;
  overflow: visible;
  pointer-events: auto;
  margin-left: 0;
}
.styles-module__sendButtonWrapper___UUxG6.styles-module__sendButtonVisible___WPSQU .styles-module__controlButton___8Q0jc {
  transform: scale(1);
}

.styles-module__buttonTooltip___Burd9 {
  position: absolute;
  bottom: calc(100% + 14px);
  left: 50%;
  transform: translateX(-50%) scale(0.95);
  padding: 6px 10px;
  background: #1a1a1a;
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border-radius: 8px;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 100001;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  transition: opacity 0.135s ease, transform 0.135s ease, visibility 0.135s ease;
}
.styles-module__buttonTooltip___Burd9::after {
  content: "";
  position: absolute;
  top: calc(100% - 4px);
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 8px;
  height: 8px;
  background: #1a1a1a;
  border-radius: 0 0 2px 0;
}

.styles-module__shortcut___lEAQk {
  margin-left: 4px;
  opacity: 0.5;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9 {
  bottom: auto;
  top: calc(100% + 14px);
  transform: translateX(-50%) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonTooltip___Burd9::after {
  top: -4px;
  bottom: auto;
  border-radius: 2px 0 0 0;
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapper___rBcdv:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-50%) scale(1);
}

.styles-module__tooltipsHidden___VtLJG .styles-module__buttonTooltip___Burd9 {
  opacity: 0 !important;
  visibility: hidden !important;
  transition: none !important;
}

.styles-module__tooltipVisible___0jcCv,
.styles-module__tooltipsHidden___VtLJG .styles-module__tooltipVisible___0jcCv {
  opacity: 1 !important;
  visibility: visible !important;
  transform: translateX(-50%) scale(1) !important;
  transition-delay: 0s !important;
}

.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(-12px) scale(0.95);
}
.styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9::after {
  left: 16px;
}
.styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignLeft___myzIp:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(-12px) scale(1);
}

.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  left: 50%;
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9::after {
  left: auto;
  right: 8px;
}
.styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(0.95);
}
.styles-module__tooltipBelow___m6ats .styles-module__buttonWrapperAlignRight___HCQFR:hover .styles-module__buttonTooltip___Burd9 {
  transform: translateX(calc(-100% + 12px)) scale(1);
}

.styles-module__divider___c--s1 {
  width: 1px;
  height: 12px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 0.125rem;
}

.styles-module__overlay___Q1O9y {
  position: fixed;
  inset: 0;
  z-index: 99997;
  pointer-events: none;
}
.styles-module__overlay___Q1O9y > * {
  pointer-events: auto;
}

.styles-module__hoverHighlight___ogakW {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-accent) 50%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-accent) 4%, transparent);
  pointer-events: none !important;
  box-sizing: border-box;
  will-change: opacity;
  contain: layout style;
}
.styles-module__hoverHighlight___ogakW.styles-module__enter___WFIki {
  animation: styles-module__hoverHighlightIn___6WYHY 0.12s ease-out forwards;
}

.styles-module__multiSelectOutline___cSJ-m {
  position: fixed;
  border: 2px dashed color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-green) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__multiSelectOutline___cSJ-m.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__singleSelectOutline___QhX-O {
  position: fixed;
  border: 2px solid color-mix(in srgb, var(--agentation-color-blue) 60%, transparent);
  border-radius: 4px;
  pointer-events: none !important;
  background-color: color-mix(in srgb, var(--agentation-color-blue) 5%, transparent);
  box-sizing: border-box;
  will-change: opacity;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__enter___WFIki {
  animation: styles-module__fadeIn___b9qmf 0.15s ease-out forwards;
}
.styles-module__singleSelectOutline___QhX-O.styles-module__exit___fyOJ0 {
  animation: styles-module__fadeOut___6Ut6- 0.15s ease-out forwards;
}

.styles-module__hoverTooltip___bvLk7 {
  position: fixed;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #fff;
  background: rgba(0, 0, 0, 0.85);
  padding: 0.35rem 0.6rem;
  border-radius: 0.375rem;
  pointer-events: none !important;
  white-space: nowrap;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.styles-module__hoverTooltip___bvLk7.styles-module__enter___WFIki {
  animation: styles-module__hoverTooltipIn___FYGQx 0.1s ease-out forwards;
}

.styles-module__hoverReactPath___gx1IJ {
  font-size: 0.625rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.15rem;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__hoverElementName___QMLMl {
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markersLayer___-25j1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__markersLayer___-25j1 > * {
  pointer-events: auto;
}

.styles-module__fixedMarkersLayer___ffyX6 {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  pointer-events: none;
}
.styles-module__fixedMarkersLayer___ffyX6 > * {
  pointer-events: auto;
}

.styles-module__marker___6sQrs {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___6sQrs:hover {
  z-index: 2;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___6sQrs.styles-module__enter___WFIki {
  animation: styles-module__markerIn___5FaAP 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___6sQrs.styles-module__exit___fyOJ0 {
  animation: styles-module__markerOut___GU5jX 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs.styles-module__clearing___FQ--7 {
  animation: styles-module__markerOut___GU5jX 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___6sQrs:not(.styles-module__enter___WFIki):not(.styles-module__exit___fyOJ0):not(.styles-module__clearing___FQ--7):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___6sQrs.styles-module__pending___2IHLC {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___6sQrs.styles-module__fixed___dBMHC {
  position: fixed;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___6sQrs.styles-module__multiSelect___YWiuz.styles-module__pending___2IHLC {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___6sQrs.styles-module__hovered___ZgXIy {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___nCTxD {
  display: block;
  animation: styles-module__renumberRoll___Wgbq3 0.2s ease-out;
}

@keyframes styles-module__renumberRoll___Wgbq3 {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__markerTooltip___aLJID {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___aLJID.styles-module__enter___WFIki {
  animation: styles-module__tooltipIn___0N31w 0.1s ease-out forwards;
}

.styles-module__markerQuote___FHmrz {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___QkrrS {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

.styles-module__markerHint___2iF-6 {
  display: block;
  font-size: 0.625rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 0.375rem;
  white-space: nowrap;
}

.styles-module__settingsPanel___OxX3Y {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 1rem;
  padding: 13px 0 16px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y::before, .styles-module__settingsPanel___OxX3Y::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___OxX3Y::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___OxX3Y .styles-module__settingsHeader___pwDY9,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrand___0gJeM,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsBrandSlash___uTG18,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsVersion___TUcFq,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsSection___m-YM2,
.styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleButton___FMKfw,
.styles-module__settingsPanel___OxX3Y .styles-module__cycleDot___nPgLY,
.styles-module__settingsPanel___OxX3Y .styles-module__dropdownButton___16NPz,
.styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa,
.styles-module__settingsPanel___OxX3Y .styles-module__customCheckbox___U39ax,
.styles-module__settingsPanel___OxX3Y .styles-module__sliderLabel___U8sPr,
.styles-module__settingsPanel___OxX3Y .styles-module__slider___GLdxp,
.styles-module__settingsPanel___OxX3Y .styles-module__themeToggle___2rUjA {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__enter___WFIki {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___OxX3Y.styles-module__exit___fyOJ0 {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12 {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___OxX3Y .styles-module__toggleLabel___Xm8Aa {
  color: rgba(255, 255, 255, 0.85);
}

.styles-module__settingsPanelContainer___Xksv8 {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 1rem;
}

.styles-module__settingsPage___6YfHH {
  min-width: 100%;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___6YfHH.styles-module__slideLeft___Ps01J {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 3px 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___uvCq6.styles-module__slideIn___4-qXe {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsNavLink___wCzJt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(255, 255, 255, 0.9);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover {
  color: rgba(0, 0, 0, 0.8);
}
.styles-module__settingsNavLink___wCzJt svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___wCzJt:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___wCzJt:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___ZWwhj {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__mcpNavIndicator___cl9pO {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___cl9pO.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s ease-in-out infinite;
}

.styles-module__settingsBackButton___bIe2j {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 0 12px 0;
  margin: -6px 0 0.5rem 0;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0;
  background: transparent;
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(255, 255, 255, 0.07);
}
.styles-module__settingsBackButton___bIe2j:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsBackButton___bIe2j:hover {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___InP0r {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___InP0r {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___NKlmo {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___NKlmo {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___8xv-x {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: underline dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___8xv-x:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___8xv-x:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendRow___UblX5 {
  display: flex;
  align-items: center;
  gap: 8px;
}

.styles-module__autoSendLabel___icDc2 {
  font-size: 0.6875rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___icDc2.styles-module__active___-zoN6 {
  color: var(--agentation-color-blue);
}

.styles-module__webhookUrlInput___2375C {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___2375C:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__settingsHeader___pwDY9 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
  margin-bottom: 0.5rem;
  padding-bottom: 9px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
}

.styles-module__settingsBrand___0gJeM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___uTG18 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___TUcFq {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__settingsSection___m-YM2 + .styles-module__settingsSection___m-YM2 {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.07);
}
.styles-module__settingsSection___m-YM2.styles-module__settingsSectionExtraPadding___jdhFV {
  padding-top: calc(0.5rem + 4px);
}

.styles-module__settingsSectionGrow___h-5HZ {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___3sdhc {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___3sdhc.styles-module__settingsRowMarginTop___zA0Sp {
  margin-top: 8px;
}

.styles-module__dropdownContainer___BVnxe {
  position: relative;
}

.styles-module__dropdownButton___16NPz {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownButton___16NPz:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownButton___16NPz svg {
  opacity: 0.6;
}

.styles-module__cycleButton___FMKfw {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___FMKfw {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___FMKfw:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___EgS0V .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.2);
}
.styles-module__settingsRowDisabled___EgS0V .styles-module__toggleSwitch___l4Ygm {
  opacity: 0.4;
  cursor: not-allowed;
}

@keyframes styles-module__cycleTextIn___Q6zJf {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.styles-module__cycleButtonText___fD1LR {
  display: inline-block;
  animation: styles-module__cycleTextIn___Q6zJf 0.2s ease-out;
}

.styles-module__cycleDots___LWuoQ {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___nPgLY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___nPgLY.styles-module__active___-zoN6 {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__dropdownMenu___k73ER {
  position: absolute;
  right: 0;
  top: calc(100% + 0.25rem);
  background: #1a1a1a;
  border-radius: 0.5rem;
  padding: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
  z-index: 10;
  animation: styles-module__scaleIn___c-r1K 0.15s ease-out;
}

.styles-module__dropdownItem___ylsLj {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.625rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease, color 0.15s ease;
  letter-spacing: -0.0094em;
}
.styles-module__dropdownItem___ylsLj:hover {
  background: rgba(255, 255, 255, 0.08);
}
.styles-module__dropdownItem___ylsLj.styles-module__selected___OwRqP {
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-weight: 600;
}

.styles-module__settingsLabel___8UjfX {
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: -0.0094em;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  gap: 0.125rem;
}
[data-agentation-theme=light] .styles-module__settingsLabel___8UjfX {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__settingsLabelMarker___ewdtV {
  padding-top: 3px;
  margin-bottom: 10px;
}

.styles-module__settingsOptions___LyrBA {
  display: flex;
  gap: 0.25rem;
}

.styles-module__settingsOption___UNa12 {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 0.375rem 0.5rem;
  border: none;
  border-radius: 0.375rem;
  background: transparent;
  font-size: 0.6875rem;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
  transition: background-color 0.15s ease, color 0.15s ease;
}
.styles-module__settingsOption___UNa12:hover {
  background: rgba(0, 0, 0, 0.05);
}
.styles-module__settingsOption___UNa12.styles-module__selected___OwRqP {
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
  color: var(--agentation-color-blue);
}

.styles-module__sliderContainer___ducXj {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.styles-module__slider___GLdxp {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 2px;
  outline: none;
  cursor: pointer;
}
.styles-module__slider___GLdxp::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp::-moz-range-thumb {
  width: 14px;
  height: 14px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.styles-module__slider___GLdxp:hover::-webkit-slider-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}
.styles-module__slider___GLdxp:hover::-moz-range-thumb {
  transform: scale(1.15);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
}

.styles-module__sliderLabels___FhLDB {
  display: flex;
  justify-content: space-between;
}

.styles-module__sliderLabel___U8sPr {
  font-size: 0.625rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.15s ease;
}
.styles-module__sliderLabel___U8sPr:hover {
  color: rgba(255, 255, 255, 0.7);
}
.styles-module__sliderLabel___U8sPr.styles-module__active___-zoN6 {
  color: rgba(255, 255, 255, 0.9);
}

.styles-module__colorOptions___iHCNX {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.375rem;
  margin-bottom: 1px;
}

.styles-module__colorOption___IodiY {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid transparent;
  background-color: var(--swatch);
  cursor: pointer;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___IodiY {
    background-color: var(--swatch-p3);
  }
}
.styles-module__colorOption___IodiY:hover {
  transform: scale(1.15);
}
.styles-module__colorOption___IodiY.styles-module__selected___OwRqP {
  transform: scale(0.83);
}

.styles-module__colorOptionRing___U2xpo {
  display: flex;
  width: 24px;
  height: 24px;
  border: 2px solid transparent;
  border-radius: 50%;
  transition: border-color 0.3s ease;
}
.styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
  border-color: var(--swatch);
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOptionRing___U2xpo.styles-module__selected___OwRqP {
    border-color: var(--swatch-p3);
  }
}

.styles-module__settingsToggle___fBrFn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}
.styles-module__settingsToggle___fBrFn + .styles-module__settingsToggle___fBrFn {
  margin-top: calc(0.5rem + 6px);
}
.styles-module__settingsToggle___fBrFn input[type=checkbox] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__settingsToggle___fBrFn.styles-module__settingsToggleMarginBottom___MZUyF {
  margin-bottom: calc(0.5rem + 6px);
}

.styles-module__customCheckbox___U39ax {
  position: relative;
  width: 14px;
  height: 14px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}
.styles-module__customCheckbox___U39ax svg {
  color: #1a1a1a;
  opacity: 1;
  transition: opacity 0.15s ease;
}
input[type=checkbox]:checked + .styles-module__customCheckbox___U39ax {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgb(255, 255, 255);
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax {
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo {
  border-color: #1a1a1a;
  background: #1a1a1a;
}
[data-agentation-theme=light] .styles-module__customCheckbox___U39ax.styles-module__checked___mnZLo svg {
  color: #fff;
}

.styles-module__toggleLabel___Xm8Aa {
  font-size: 0.8125rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: -0.0094em;
  display: flex;
  align-items: center;
  gap: 0.25rem;
}
[data-agentation-theme=light] .styles-module__toggleLabel___Xm8Aa {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__toggleSwitch___l4Ygm {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 16px;
  flex-shrink: 0;
  cursor: pointer;
  transition: background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}
.styles-module__toggleSwitch___l4Ygm input {
  opacity: 0;
  width: 0;
  height: 0;
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn {
  background-color: var(--agentation-color-blue);
}
.styles-module__toggleSwitch___l4Ygm input:checked + .styles-module__toggleSlider___wprIn::before {
  transform: translateX(8px);
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw {
  opacity: 0.4;
}
.styles-module__toggleSwitch___l4Ygm.styles-module__disabled___332Jw .styles-module__toggleSlider___wprIn {
  cursor: not-allowed;
}

.styles-module__toggleSlider___wprIn {
  position: absolute;
  cursor: pointer;
  inset: 0;
  border-radius: 16px;
  background: #484848;
}
[data-agentation-theme=light] .styles-module__toggleSlider___wprIn {
  background: #dddddd;
}
.styles-module__toggleSlider___wprIn::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background: white;
  border-radius: 50%;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes styles-module__mcpPulse___uNggr {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___fov9B {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
.styles-module__mcpStatusDot___ibgkc {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connecting___uo-CW {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___uNggr 1.5s infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__connected___7c28g {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___uNggr 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___ibgkc.styles-module__disconnected___cHPxR {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___fov9B 2s infinite;
}

.styles-module__drawCanvas___7cG9U {
  position: fixed;
  inset: 0;
  z-index: 99996;
  pointer-events: none !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6 {
  pointer-events: auto !important;
  cursor: crosshair !important;
}
.styles-module__drawCanvas___7cG9U.styles-module__active___-zoN6[data-stroke-hover] {
  cursor: pointer !important;
}

.styles-module__dragSelection___kZLq2 {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 60%, transparent);
  border-radius: 4px;
  background-color: color-mix(in srgb, var(--agentation-color-green) 8%, transparent);
  pointer-events: none;
  z-index: 99997;
  will-change: transform, width, height;
  contain: layout style;
}

.styles-module__dragCount___KM90j {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--agentation-color-green);
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  min-width: 1.5rem;
  text-align: center;
}

.styles-module__highlightsContainer___-0xzG {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99996;
}

.styles-module__selectedElementHighlight___fyVlI {
  position: fixed;
  top: 0;
  left: 0;
  border: 2px solid color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  border-radius: 4px;
  background: color-mix(in srgb, var(--agentation-color-green) 6%, transparent);
  pointer-events: none;
  will-change: transform, width, height;
  contain: layout style;
}

[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__toolbarContainer___dIhma.styles-module__collapsed___Rydsn:hover {
  background: #f5f5f5;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc:hover:not(:disabled):not([data-active=true]):not([data-failed=true]):not([data-auto-sync=true]):not([data-error=true]):not([data-no-hover=true]) {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-active=true] {
  color: var(--agentation-color-blue);
  background: color-mix(in srgb, var(--agentation-color-blue) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-error=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-danger]:hover:not(:disabled):not([data-active=true]):not([data-failed=true]) {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-auto-sync=true] {
  color: var(--agentation-color-green);
  background: transparent;
}
[data-agentation-theme=light] .styles-module__controlButton___8Q0jc[data-failed=true] {
  color: var(--agentation-color-red);
  background: color-mix(in srgb, var(--agentation-color-red) 15%, transparent);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9 {
  background: #fff;
  color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__buttonTooltip___Burd9::after {
  background: #fff;
}
[data-agentation-theme=light] .styles-module__divider___c--s1 {
  background: rgba(0, 0, 0, 0.1);
}`,j1={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(a)),a.textContent=k1}var re=j1,Ci=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function pm(a,r,c="standard"){if(a.length===0)return"";const u=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let _=`## Page Feedback: ${r}
`;return c==="forensic"?(_+=`
**Environment:**
`,_+=`- Viewport: ${u}
`,typeof window<"u"&&(_+=`- URL: ${window.location.href}
`,_+=`- User Agent: ${navigator.userAgent}
`,_+=`- Timestamp: ${new Date().toISOString()}
`,_+=`- Device Pixel Ratio: ${window.devicePixelRatio}
`),_+=`
---
`):c!=="compact"&&(_+=`**Viewport:** ${u}
`),_+=`
`,a.forEach((f,x)=>{c==="compact"?(_+=`${x+1}. **${f.element}**${f.sourceFile?` (${f.sourceFile})`:""}: ${f.comment}`,f.selectedText&&(_+=` (re: "${f.selectedText.slice(0,30)}${f.selectedText.length>30?"...":""}")`),_+=`
`):c==="forensic"?(_+=`### ${x+1}. ${f.element}
`,f.isMultiSelect&&f.fullPath&&(_+=`*Forensic data shown for first element of selection*
`),f.fullPath&&(_+=`**Full DOM Path:** ${f.fullPath}
`),f.cssClasses&&(_+=`**CSS Classes:** ${f.cssClasses}
`),f.boundingBox&&(_+=`**Position:** x:${Math.round(f.boundingBox.x)}, y:${Math.round(f.boundingBox.y)} (${Math.round(f.boundingBox.width)}×${Math.round(f.boundingBox.height)}px)
`),_+=`**Annotation at:** ${f.x.toFixed(1)}% from left, ${Math.round(f.y)}px from top
`,f.selectedText&&(_+=`**Selected text:** "${f.selectedText}"
`),f.nearbyText&&!f.selectedText&&(_+=`**Context:** ${f.nearbyText.slice(0,100)}
`),f.computedStyles&&(_+=`**Computed Styles:** ${f.computedStyles}
`),f.accessibility&&(_+=`**Accessibility:** ${f.accessibility}
`),f.nearbyElements&&(_+=`**Nearby Elements:** ${f.nearbyElements}
`),f.sourceFile&&(_+=`**Source:** ${f.sourceFile}
`),f.reactComponents&&(_+=`**React:** ${f.reactComponents}
`),_+=`**Feedback:** ${f.comment}

`):(_+=`### ${x+1}. ${f.element}
`,_+=`**Location:** ${f.elementPath}
`,f.sourceFile&&(_+=`**Source:** ${f.sourceFile}
`),f.reactComponents&&(_+=`**React:** ${f.reactComponents}
`),c==="detailed"&&(f.cssClasses&&(_+=`**Classes:** ${f.cssClasses}
`),f.boundingBox&&(_+=`**Position:** ${Math.round(f.boundingBox.x)}px, ${Math.round(f.boundingBox.y)}px (${Math.round(f.boundingBox.width)}×${Math.round(f.boundingBox.height)}px)
`)),f.selectedText&&(_+=`**Selected text:** "${f.selectedText}"
`),c==="detailed"&&f.nearbyText&&!f.selectedText&&(_+=`**Context:** ${f.nearbyText.slice(0,100)}
`),_+=`**Feedback:** ${f.comment}

`)}),_.trim()}var C1=`@keyframes styles-module__markerIn___x4G8D {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes styles-module__markerOut___6VhQN {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
  }
}
@keyframes styles-module__tooltipIn___aJslQ {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(2px) scale(0.891);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(0.909);
  }
}
@keyframes styles-module__renumberRoll___akV9B {
  0% {
    transform: translateX(-40%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
.styles-module__marker___9CKF7 {
  position: absolute;
  width: 22px;
  height: 22px;
  background: var(--agentation-color-blue);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.6875rem;
  font-weight: 600;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2), inset 0 0 0 1px rgba(0, 0, 0, 0.04);
  user-select: none;
  will-change: transform, opacity;
  contain: layout style;
  z-index: 1;
}
.styles-module__marker___9CKF7:hover {
  z-index: 2;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K) {
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.styles-module__marker___9CKF7.styles-module__enter___8kI3q {
  animation: styles-module__markerIn___x4G8D 0.25s cubic-bezier(0.22, 1, 0.36, 1) both;
}
.styles-module__marker___9CKF7.styles-module__exit___KBdR3 {
  animation: styles-module__markerOut___6VhQN 0.2s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7.styles-module__clearing___8rM7K {
  animation: styles-module__markerOut___6VhQN 0.15s ease-out both;
  pointer-events: none;
}
.styles-module__marker___9CKF7:not(.styles-module__enter___8kI3q):not(.styles-module__exit___KBdR3):not(.styles-module__clearing___8rM7K):hover {
  transform: translate(-50%, -50%) scale(1.1);
}
.styles-module__marker___9CKF7.styles-module__pending___BiY-U {
  position: fixed;
  background-color: var(--agentation-color-blue);
  cursor: default;
}
.styles-module__marker___9CKF7.styles-module__fixed___aKrQO {
  position: fixed;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC {
  background-color: var(--agentation-color-green);
  width: 26px;
  height: 26px;
  border-radius: 6px;
  font-size: 0.75rem;
}
.styles-module__marker___9CKF7.styles-module__multiSelect___CPfTC.styles-module__pending___BiY-U {
  background-color: var(--agentation-color-green);
}
.styles-module__marker___9CKF7.styles-module__hovered___-mg2N {
  background-color: var(--agentation-color-red);
}

.styles-module__renumber___16lvD {
  display: block;
  animation: styles-module__renumberRoll___akV9B 0.2s ease-out;
}

.styles-module__markerTooltip___-VUm- {
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%) scale(0.909);
  z-index: 100002;
  background: #1a1a1a;
  padding: 8px 0.75rem;
  border-radius: 0.75rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
  min-width: 120px;
  max-width: 200px;
  pointer-events: none;
  cursor: default;
}
.styles-module__markerTooltip___-VUm-.styles-module__enter___8kI3q {
  animation: styles-module__tooltipIn___aJslQ 0.1s ease-out forwards;
}

.styles-module__markerQuote___tQake {
  display: block;
  font-size: 12px;
  font-style: italic;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.3125rem;
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.styles-module__markerNote___Rh4eI {
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-bottom: 2px;
}

[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- {
  background: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerQuote___tQake {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__markerTooltip___-VUm- .styles-module__markerNote___Rh4eI {
  color: rgba(0, 0, 0, 0.85);
}`,M1={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-annotation-marker-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(a)),a.textContent=C1}var yn=M1;function xm({annotation:a,globalIndex:r,layerIndex:c,layerSize:u,isExiting:_,isClearing:f,isAnimated:x,isHovered:R,isDeleting:b,isEditingAny:k,renumberFrom:M,markerClickBehavior:A,tooltipStyle:T,onHoverEnter:ne,onHoverLeave:$,onClick:le,onContextMenu:U}){const q=(R||b)&&!k,me=q&&A==="delete",pe=a.isMultiSelect,be=pe?"var(--agentation-color-green)":"var(--agentation-color-accent)",et=_?yn.exit:f?yn.clearing:x?"":yn.enter,Je=_?`${(u-1-c)*20}ms`:`${c*20}ms`;return o.jsxs("div",{className:`${yn.marker} ${pe?yn.multiSelect:""} ${et} ${me?yn.hovered:""}`,"data-annotation-marker":!0,style:{left:`${a.x}%`,top:a.y,backgroundColor:me?void 0:be,animationDelay:Je},onMouseEnter:()=>ne(a),onMouseLeave:$,onClick:K=>{K.stopPropagation(),_||le(a)},onContextMenu:U?K=>{A==="delete"&&(K.preventDefault(),K.stopPropagation(),_||U(a))}:void 0,children:[q?me?o.jsx(zm,{size:pe?18:16}):o.jsx(Ug,{size:16}):o.jsx("span",{className:M!==null&&r>=M?yn.renumber:void 0,children:r+1}),R&&!k&&o.jsxs("div",{className:`${yn.markerTooltip} ${yn.enter}`,style:T,children:[o.jsxs("span",{className:yn.markerQuote,children:[a.element,a.selectedText&&` "${a.selectedText.slice(0,30)}${a.selectedText.length>30?"...":""}"`]}),o.jsx("span",{className:yn.markerNote,children:a.comment})]})]})}function E1({x:a,y:r,isMultiSelect:c,isExiting:u}){return o.jsx("div",{className:`${yn.marker} ${yn.pending} ${c?yn.multiSelect:""} ${u?yn.exit:yn.enter}`,style:{left:`${a}%`,top:r,backgroundColor:c?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:o.jsx(Eg,{size:12})})}function bm({annotation:a,fixed:r}){const c=a.isMultiSelect;return o.jsx("div",{className:`${yn.marker} ${r?yn.fixed:""} ${yn.hovered} ${c?yn.multiSelect:""} ${yn.exit}`,"data-annotation-marker":!0,style:{left:`${a.x}%`,top:a.y},children:o.jsx(zm,{size:c?12:10})})}var N1=`.styles-module__switchContainer___Ka-AB {
  display: flex;
  align-items: center;
  position: relative;
  padding: 2px;
  width: 24px;
  height: 16px;
  border-radius: 8px;
  background-color: #cdcdcd;
  transition: background-color 0.15s, opacity 0.15s;
}
[data-agentation-theme=dark] .styles-module__switchContainer___Ka-AB {
  background-color: #484848;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) {
  background-color: var(--agentation-color-blue);
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:disabled) {
  opacity: 0.3;
}

.styles-module__switchInput___kYDSD {
  position: absolute;
  z-index: 1;
  inset: 0;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}
.styles-module__switchInput___kYDSD:disabled {
  cursor: not-allowed;
}

.styles-module__switchThumb___4sCPH {
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transition: transform 0.15s;
}
.styles-module__switchContainer___Ka-AB:has(.styles-module__switchInput___kYDSD:checked) .styles-module__switchThumb___4sCPH {
  transform: translateX(8px);
}`,T1={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-switch-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-switch-styles",document.head.appendChild(a)),a.textContent=N1}var gd=T1,yd=({className:a="",...r})=>o.jsxs("div",{className:`${gd.switchContainer} ${a}`,children:[o.jsx("input",{className:gd.switchInput,type:"checkbox",...r}),o.jsx("div",{className:gd.switchThumb})]}),R1=`.styles-module__checkboxContainer___joqZk {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid rgba(26, 26, 26, 0.2);
  border-radius: 4px;
  width: 14px;
  height: 14px;
  background-color: #fff;
  transition: background-color 0.2s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk {
  border-color: rgba(255, 255, 255, 0.2);
  background-color: #252525;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #1a1a1a;
}
[data-agentation-theme=dark] .styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) {
  background-color: #fff;
}

.styles-module__checkboxInput___ECzzO {
  position: absolute;
  z-index: 1;
  inset: -1px;
  border-radius: inherit;
  opacity: 0;
  cursor: pointer;
}

.styles-module__checkboxCheck___fUXpr {
  color: #fafafa;
}
[data-agentation-theme=dark] .styles-module__checkboxCheck___fUXpr {
  color: #1a1a1a;
}

.styles-module__checkboxCheckPath___cDyh8 {
  stroke-dasharray: 9.29px;
  stroke-dashoffset: 9.29px;
  color: #fafafa;
  transition: stroke-dashoffset 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__checkboxCheckPath___cDyh8 {
  color: #1a1a1a;
}
.styles-module__checkboxContainer___joqZk:has(.styles-module__checkboxInput___ECzzO:checked) .styles-module__checkboxCheckPath___cDyh8 {
  transition-duration: 0.2s;
  stroke-dashoffset: 0;
}`,z1={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-checkbox-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(a)),a.textContent=R1}var oc=z1,D1=({className:a="",...r})=>o.jsxs("div",{className:`${oc.checkboxContainer} ${a}`,children:[o.jsx("input",{className:oc.checkboxInput,type:"checkbox",...r}),o.jsx("svg",{className:oc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:o.jsx("path",{className:oc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),A1=`.styles-module__container___w8eAF {
  display: flex;
  align-items: center;
  height: 24px;
}

.styles-module__label___J5mxE {
  padding-inline: 8px 2px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.15px;
  color: rgba(26, 26, 26, 0.5);
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__label___J5mxE {
  color: rgba(255, 255, 255, 0.5);
}`,O1={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-checkbox-field-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(a)),a.textContent=A1}var vm=O1,wm=({className:a="",label:r,tooltip:c,checked:u,onChange:_,...f})=>{const x=m.useId();return o.jsxs("div",{className:`${vm.container} ${a}`,...f,children:[o.jsx(D1,{id:x,onChange:_,checked:u}),o.jsx("label",{className:vm.label,htmlFor:x,children:r}),c&&o.jsx(Ra,{content:c})]})},L1=`@keyframes styles-module__cycleTextIn___VBNTi {
  0% {
    opacity: 0;
    transform: translateY(-6px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes styles-module__scaleIn___QpQ8E {
  from {
    opacity: 0;
    transform: scale(0.85);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes styles-module__mcpPulse___5Q3Jj {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-green) 0%, transparent);
  }
}
@keyframes styles-module__mcpPulseError___VHxhx {
  0% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 50%, transparent);
  }
  70% {
    box-shadow: 0 0 0 6px color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
  100% {
    box-shadow: 0 0 0 0 color-mix(in srgb, var(--agentation-color-red) 0%, transparent);
  }
}
@keyframes styles-module__themeIconIn___qUWMV {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-30deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}
.styles-module__settingsPanel___qNkn- {
  position: absolute;
  right: 5px;
  bottom: calc(100% + 0.5rem);
  z-index: 1;
  overflow: hidden;
  background: #1c1c1c;
  border-radius: 16px;
  padding: 12px 0;
  width: 100%;
  max-width: 253px;
  min-width: 205px;
  cursor: default;
  opacity: 1;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.04);
  transition: background-color 0.25s ease, box-shadow 0.25s ease;
}
.styles-module__settingsPanel___qNkn-::before, .styles-module__settingsPanel___qNkn-::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 16px;
  z-index: 2;
  pointer-events: none;
}
.styles-module__settingsPanel___qNkn-::before {
  left: 0;
  background: linear-gradient(to right, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn-::after {
  right: 0;
  background: linear-gradient(to left, #1c1c1c 0%, transparent 100%);
}
.styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM,
.styles-module__settingsPanel___qNkn- .styles-module__settingsBrandSlash___Q-AU9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9,
.styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4,
.styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ,
.styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3,
.styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY,
.styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8,
.styles-module__settingsPanel___qNkn- .styles-module__sliderLabel___6K5v1,
.styles-module__settingsPanel___qNkn- .styles-module__slider___v5z-c,
.styles-module__settingsPanel___qNkn- .styles-module__themeToggle___3imlT {
  transition: background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__enter___wginS {
  opacity: 1;
  transform: translateY(0) scale(1);
  filter: blur(0px);
  transition: opacity 0.2s ease, transform 0.2s ease, filter 0.2s ease;
}
.styles-module__settingsPanel___qNkn-.styles-module__exit___A4iJc {
  opacity: 0;
  transform: translateY(8px) scale(0.95);
  filter: blur(5px);
  pointer-events: none;
  transition: opacity 0.1s ease, transform 0.1s ease, filter 0.1s ease;
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- {
  background: #1a1a1a;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.6);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH- {
  color: rgba(255, 255, 255, 0.85);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-:hover {
  background: rgba(255, 255, 255, 0.1);
}
[data-agentation-theme=dark] .styles-module__settingsPanel___qNkn- .styles-module__settingsOption___JoyH-.styles-module__selected___k1-Vq {
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
}

.styles-module__settingsPanelContainer___5it-H {
  overflow: visible;
  position: relative;
  display: flex;
  padding: 0 16px;
}

.styles-module__settingsPage___BMn-3 {
  min-width: 100%;
  flex-basis: 0;
  flex-shrink: 0;
  transition: transform 0.2s ease, opacity 0.2s ease;
  transition-delay: 0s;
  opacity: 1;
}

.styles-module__settingsPage___BMn-3.styles-module__slideLeft___qUvW4 {
  transform: translateX(-24px);
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0 {
  position: absolute;
  top: 0;
  left: 24px;
  width: 100%;
  height: 100%;
  padding: 0 16px 4px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
}

.styles-module__automationsPage___N7By0.styles-module__slideIn___uXDSu {
  transform: translateX(-24px);
  opacity: 1;
  pointer-events: auto;
}

.styles-module__settingsHeader___Fn1DP {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 24px;
}

.styles-module__settingsBrand___OoKlM {
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: -0.0094em;
  color: #fff;
  text-decoration: none;
}

.styles-module__settingsBrandSlash___Q-AU9 {
  color: var(--agentation-color-accent);
  transition: color 0.2s ease;
}

.styles-module__settingsVersion___rXmL9 {
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  margin-left: auto;
  letter-spacing: -0.0094em;
}

.styles-module__themeToggle___3imlT {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  margin-left: 8px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: rgba(255, 255, 255, 0.4);
  transition: background-color 0.15s ease, color 0.15s ease;
  cursor: pointer;
}
.styles-module__themeToggle___3imlT:hover {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.8);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__themeToggle___3imlT:hover {
  background: rgba(0, 0, 0, 0.06);
  color: rgba(0, 0, 0, 0.7);
}

.styles-module__themeIconWrapper___pyaYa {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 20px;
  height: 20px;
}

.styles-module__themeIcon___w7lAm {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: styles-module__themeIconIn___qUWMV 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

.styles-module__settingsSectionGrow___eZTRw {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.styles-module__settingsRow___y-tDE {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 24px;
}
.styles-module__settingsRow___y-tDE.styles-module__settingsRowMarginTop___uLpGb {
  margin-top: 8px;
}

.styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(255, 255, 255, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsRowDisabled___ydl3Q .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.2);
}

.styles-module__settingsLabel___VCVOQ {
  display: flex;
  align-items: center;
  column-gap: 2px;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: -0.15px;
  color: rgba(255, 255, 255, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__cycleButton___XMBx3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0;
  border: none;
  background: transparent;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  letter-spacing: -0.0094em;
}
[data-agentation-theme=light] .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
.styles-module__cycleButton___XMBx3:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.styles-module__cycleButtonText___mbbnD {
  display: inline-block;
  animation: styles-module__cycleTextIn___VBNTi 0.2s ease-out;
}

.styles-module__cycleDots___ehp6i {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.styles-module__cycleDot___zgSXY {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: scale(0.667);
  transition: background-color 0.25s ease-out, transform 0.25s ease-out;
}
.styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: #fff;
  transform: scale(1);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}

.styles-module__colorOptions___pbxZx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 6px;
  height: 26px;
}

.styles-module__colorOption___Co955 {
  padding: 0;
  position: relative;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background-color: #fff;
  cursor: pointer;
}
[data-agentation-theme=dark] .styles-module__colorOption___Co955 {
  background-color: #1a1a1a;
}
.styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background-color: var(--swatch);
  transition: opacity 0.2s, transform 0.2s;
}
@supports (color: color(display-p3 0 0 0)) {
  .styles-module__colorOption___Co955::before, .styles-module__colorOption___Co955::after {
    --color: var(--swatch-p3);
  }
}
.styles-module__colorOption___Co955::after {
  z-index: -1;
  transform: scale(1.2);
  opacity: 0;
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::before {
  transform: scale(0.8);
}
.styles-module__colorOption___Co955.styles-module__selected___k1-Vq::after {
  opacity: 1;
}

.styles-module__settingsNavLink___uYIwM {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.5);
  transition: color 0.15s ease;
  cursor: pointer;
}
.styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(255, 255, 255, 0.9);
}
.styles-module__settingsNavLink___uYIwM svg {
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s ease;
}
.styles-module__settingsNavLink___uYIwM:hover svg {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover {
  color: rgba(0, 0, 0, 0.8);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM svg {
  color: rgba(0, 0, 0, 0.25);
}
[data-agentation-theme=light] .styles-module__settingsNavLink___uYIwM:hover svg {
  color: rgba(0, 0, 0, 0.8);
}

.styles-module__settingsNavLinkRight___XBUzC {
  display: flex;
  align-items: center;
  gap: 6px;
}

.styles-module__settingsBackButton___fflll {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 24px;
  background: transparent;
  font-family: inherit;
  line-height: 20px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.15px;
  color: #fff;
  cursor: pointer;
  transition: transform 0.12s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll svg {
  opacity: 0.4;
  flex-shrink: 0;
  transition: opacity 0.15s ease, transform 0.18s cubic-bezier(0.32, 0.72, 0, 1);
}
.styles-module__settingsBackButton___fflll:hover svg {
  opacity: 1;
}
[data-agentation-theme=light] .styles-module__settingsBackButton___fflll {
  color: rgba(0, 0, 0, 0.85);
  border-bottom-color: rgba(0, 0, 0, 0.08);
}

.styles-module__automationHeader___Avra9 {
  display: flex;
  align-items: center;
  gap: 0.125rem;
  font-size: 0.8125rem;
  font-weight: 400;
  color: #fff;
}
[data-agentation-theme=light] .styles-module__automationHeader___Avra9 {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__automationDescription___vFTmJ {
  font-size: 0.6875rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 2px;
  line-height: 14px;
}
[data-agentation-theme=light] .styles-module__automationDescription___vFTmJ {
  color: rgba(0, 0, 0, 0.5);
}

.styles-module__learnMoreLink___cG7OI {
  color: rgba(255, 255, 255, 0.8);
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: rgba(255, 255, 255, 0.2);
  text-underline-offset: 2px;
  transition: color 0.15s ease;
}
.styles-module__learnMoreLink___cG7OI:hover {
  color: #fff;
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI {
  color: rgba(0, 0, 0, 0.6);
  text-decoration-color: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__learnMoreLink___cG7OI:hover {
  color: rgba(0, 0, 0, 0.85);
}

.styles-module__autoSendContainer___VpkXk {
  display: flex;
  align-items: center;
}

.styles-module__autoSendLabel___ngNdC {
  padding-inline-end: 8px;
  font-size: 11px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.15s, opacity 0.15s;
  cursor: pointer;
}
.styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: #66b8ff;
  color: color(display-p3 0.4 0.72 1);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__autoSendLabel___ngNdC.styles-module__active___dpAhM {
  color: var(--agentation-color-blue);
}
.styles-module__autoSendLabel___ngNdC.styles-module__disabled___9AZYS {
  opacity: 0.3;
  cursor: not-allowed;
}

.styles-module__mcpStatusDot___8AMxP {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpStatusDot___8AMxP.styles-module__disconnected___mvmvQ {
  background-color: var(--agentation-color-red);
  animation: styles-module__mcpPulseError___VHxhx 2s infinite;
}

.styles-module__mcpNavIndicator___auBHI {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connected___WyFkx {
  background-color: var(--agentation-color-green);
  animation: styles-module__mcpPulse___5Q3Jj 2.5s ease-in-out infinite;
}
.styles-module__mcpNavIndicator___auBHI.styles-module__connecting___QEO1r {
  background-color: var(--agentation-color-yellow);
  animation: styles-module__mcpPulse___5Q3Jj 1.5s ease-in-out infinite;
}

.styles-module__webhookUrlInput___WDDDC {
  display: block;
  width: 100%;
  flex: 1;
  min-height: 60px;
  box-sizing: border-box;
  margin-top: 11px;
  padding: 8px 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.03);
  font-family: inherit;
  font-size: 0.75rem;
  font-weight: 400;
  color: #fff;
  outline: none;
  resize: none;
  user-select: text;
  transition: border-color 0.15s ease, background-color 0.15s ease, box-shadow 0.15s ease;
}
.styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
.styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.08);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC {
  border-color: rgba(0, 0, 0, 0.1);
  background: rgba(0, 0, 0, 0.03);
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-agentation-theme=light] .styles-module__webhookUrlInput___WDDDC:focus {
  border-color: rgba(0, 0, 0, 0.25);
  background: rgba(0, 0, 0, 0.05);
}

[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- {
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08), 0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::before {
  background: linear-gradient(to right, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn-::after {
  background: linear-gradient(to left, #fff 0%, transparent 100%);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsHeader___Fn1DP {
  border-bottom-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsBrand___OoKlM {
  color: #E5484D;
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsVersion___rXmL9 {
  color: rgba(0, 0, 0, 0.4);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsSection___n5V-4 {
  border-top-color: rgba(0, 0, 0, 0.08);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__settingsLabel___VCVOQ {
  color: rgba(0, 0, 0, 0.5);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleButton___XMBx3 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY {
  background: rgba(0, 0, 0, 0.2);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__cycleDot___zgSXY.styles-module__active___dpAhM {
  background: rgba(0, 0, 0, 0.7);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8 {
  color: rgba(0, 0, 0, 0.85);
}
[data-agentation-theme=light] .styles-module__settingsPanel___qNkn- .styles-module__dropdownButton___mKHe8:hover {
  background: rgba(0, 0, 0, 0.05);
}

.styles-module__checkboxField___ZrSqv:not(:first-child) {
  margin-top: 8px;
}

.styles-module__divider___h6Yux {
  margin-block: 8px;
  width: 100%;
  height: 1px;
  background-color: rgba(26, 26, 26, 0.07);
}
[data-agentation-theme=dark] .styles-module__divider___h6Yux {
  background-color: rgba(255, 255, 255, 0.07);
}`,B1={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let a=document.getElementById("feedback-tool-styles-settings-panel-styles");a||(a=document.createElement("style"),a.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(a)),a.textContent=L1}var Me=B1;function $1({settings:a,onSettingsChange:r,isDarkMode:c,onToggleTheme:u,isDevMode:_,connectionStatus:f,endpoint:x,isVisible:R,toolbarNearBottom:b,settingsPage:k,onSettingsPageChange:M,onHideToolbar:A}){return o.jsx("div",{className:`${Me.settingsPanel} ${R?Me.enter:Me.exit}`,style:b?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:o.jsxs("div",{className:Me.settingsPanelContainer,children:[o.jsxs("div",{className:`${Me.settingsPage} ${k==="automations"?Me.slideLeft:""}`,children:[o.jsxs("div",{className:Me.settingsHeader,children:[o.jsx("a",{className:Me.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:o.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),o.jsxs("p",{className:Me.settingsVersion,children:["v","3.0.2"]}),o.jsx("button",{className:Me.themeToggle,onClick:u,title:c?"Switch to light mode":"Switch to dark mode",children:o.jsx("span",{className:Me.themeIconWrapper,children:o.jsx("span",{className:Me.themeIcon,children:c?o.jsx($g,{size:20}):o.jsx(Hg,{size:20})},c?"sun":"moon")})})]}),o.jsx("div",{className:Me.divider}),o.jsxs("div",{className:Me.settingsSection,children:[o.jsxs("div",{className:Me.settingsRow,children:[o.jsxs("div",{className:Me.settingsLabel,children:["Output Detail",o.jsx(Ra,{content:"Controls how much detail is included in the copied output"})]}),o.jsxs("button",{className:Me.cycleButton,onClick:()=>{const ne=(Ci.findIndex($=>$.value===a.outputDetail)+1)%Ci.length;r({outputDetail:Ci[ne].value})},children:[o.jsx("span",{className:Me.cycleButtonText,children:Ci.find(T=>T.value===a.outputDetail)?.label},a.outputDetail),o.jsx("span",{className:Me.cycleDots,children:Ci.map(T=>o.jsx("span",{className:`${Me.cycleDot} ${a.outputDetail===T.value?Me.active:""}`},T.value))})]})]}),o.jsxs("div",{className:`${Me.settingsRow} ${Me.settingsRowMarginTop} ${_?"":Me.settingsRowDisabled}`,children:[o.jsxs("div",{className:Me.settingsLabel,children:["React Components",o.jsx(Ra,{content:_?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),o.jsx(yd,{checked:_&&a.reactEnabled,onChange:T=>r({reactEnabled:T.target.checked}),disabled:!_})]}),o.jsxs("div",{className:`${Me.settingsRow} ${Me.settingsRowMarginTop}`,children:[o.jsxs("div",{className:Me.settingsLabel,children:["Hide Until Restart",o.jsx(Ra,{content:"Hides the toolbar until you open a new tab"})]}),o.jsx(yd,{checked:!1,onChange:T=>{T.target.checked&&A()}})]})]}),o.jsx("div",{className:Me.divider}),o.jsxs("div",{className:Me.settingsSection,children:[o.jsx("div",{className:`${Me.settingsLabel} ${Me.settingsLabelMarker}`,children:"Marker Color"}),o.jsx("div",{className:Me.colorOptions,children:Mi.map(T=>o.jsx("button",{className:`${Me.colorOption} ${a.annotationColorId===T.id?Me.selected:""}`,style:{"--swatch":T.srgb,"--swatch-p3":T.p3},onClick:()=>r({annotationColorId:T.id}),title:T.label,type:"button"},T.id))})]}),o.jsx("div",{className:Me.divider}),o.jsxs("div",{className:Me.settingsSection,children:[o.jsx(wm,{className:"checkbox-field",label:"Clear on copy/send",checked:a.autoClearAfterCopy,onChange:T=>r({autoClearAfterCopy:T.target.checked}),tooltip:"Automatically clear annotations after copying"}),o.jsx(wm,{className:Me.checkboxField,label:"Block page interactions",checked:a.blockInteractions,onChange:T=>r({blockInteractions:T.target.checked})})]}),o.jsx("div",{className:Me.divider}),o.jsxs("button",{className:Me.settingsNavLink,onClick:()=>M("automations"),children:[o.jsx("span",{children:"Manage MCP & Webhooks"}),o.jsxs("span",{className:Me.settingsNavLinkRight,children:[x&&f!=="disconnected"&&o.jsx("span",{className:`${Me.mcpNavIndicator} ${Me[f]}`}),o.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),o.jsxs("div",{className:`${Me.settingsPage} ${Me.automationsPage} ${k==="automations"?Me.slideIn:""}`,children:[o.jsxs("button",{className:Me.settingsBackButton,onClick:()=>M("main"),children:[o.jsx(Xg,{size:16}),o.jsx("span",{children:"Manage MCP & Webhooks"})]}),o.jsx("div",{className:Me.divider}),o.jsxs("div",{className:Me.settingsSection,children:[o.jsxs("div",{className:Me.settingsRow,children:[o.jsxs("span",{className:Me.automationHeader,children:["MCP Connection",o.jsx(Ra,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),x&&o.jsx("div",{className:`${Me.mcpStatusDot} ${Me[f]}`,title:f==="connected"?"Connected":f==="connecting"?"Connecting...":"Disconnected"})]}),o.jsxs("p",{className:Me.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",o.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Me.learnMoreLink,children:"Learn more"})]})]}),o.jsx("div",{className:Me.divider}),o.jsxs("div",{className:`${Me.settingsSection} ${Me.settingsSectionGrow}`,children:[o.jsxs("div",{className:Me.settingsRow,children:[o.jsxs("span",{className:Me.automationHeader,children:["Webhooks",o.jsx(Ra,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),o.jsxs("div",{className:Me.autoSendContainer,children:[o.jsx("label",{htmlFor:"agentation-auto-send",className:`${Me.autoSendLabel} ${a.webhooksEnabled?Me.active:""} ${a.webhookUrl?"":Me.disabled}`,children:"Auto-Send"}),o.jsx(yd,{id:"agentation-auto-send",checked:a.webhooksEnabled,onChange:T=>r({webhooksEnabled:T.target.checked}),disabled:!a.webhookUrl})]})]}),o.jsx("p",{className:Me.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),o.jsx("textarea",{className:Me.webhookUrlInput,placeholder:"Webhook URL",value:a.webhookUrl,onKeyDown:T=>T.stopPropagation(),onChange:T=>r({webhookUrl:T.target.value})})]})]})]})})}function pd(a,r="filtered"){const{name:c,path:u}=Ss(a);if(r==="off")return{name:c,elementName:c,path:u,reactComponents:null};const _=_1(a,{mode:r});return{name:_.path?`${_.path} ${c}`:c,elementName:c,path:u,reactComponents:_.path}}var Sm=!1,xd={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},lo=a=>{if(!a||!a.trim())return!1;try{const r=new URL(a.trim());return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}},Mi=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],H1=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const a=document.createElement("style");a.id="agentation-color-tokens",a.textContent=[...Mi.map(r=>`
      [data-agentation-accent="${r.id}"] {
        --agentation-color-accent: ${r.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${r.id}"] {
          --agentation-color-accent: ${r.p3};
        }
      }
    `),`:root {
      ${Mi.map(r=>`--agentation-color-${r.id}: ${r.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Mi.map(r=>`--agentation-color-${r.id}: ${r.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(a)};H1();function Na(a,r){let c=document.elementFromPoint(a,r);if(!c)return null;for(;c?.shadowRoot;){const u=c.shadowRoot.elementFromPoint(a,r);if(!u||u===c)break;c=u}return c}function bd(a){let r=a;for(;r&&r!==document.body;){const u=window.getComputedStyle(r).position;if(u==="fixed"||u==="sticky")return!0;r=r.parentElement}return!1}function Ta(a){return a.status!=="resolved"&&a.status!=="dismissed"}function ac(a){const r=Ed(a),c=r.found?r:S1(a);if(c.found&&c.source)return w1(c.source,"path")}function U1({demoAnnotations:a,demoDelay:r=1e3,enableDemoMode:c=!1,onAnnotationAdd:u,onAnnotationDelete:_,onAnnotationUpdate:f,onAnnotationsClear:x,onCopy:R,onSubmit:b,copyToClipboard:k=!0,endpoint:M,sessionId:A,onSessionCreated:T,webhookUrl:ne,className:$}={}){const[le,U]=m.useState(!1),[q,me]=m.useState([]),[pe,be]=m.useState(!0),[et,Je]=m.useState(()=>Jp()),[K,Ee]=m.useState(!1),ae=m.useRef(null);m.useEffect(()=>{const g=j=>{const C=ae.current;C&&C.contains(j.target)&&j.stopPropagation()},p=["mousedown","click","pointerdown"];return p.forEach(j=>document.body.addEventListener(j,g)),()=>{p.forEach(j=>document.body.removeEventListener(j,g))}},[]);const[Fe,Re]=m.useState(!1),[qe,tt]=m.useState(!1),[ze,Xe]=m.useState(null),[v,F]=m.useState({x:0,y:0}),[Y,ye]=m.useState(null),[ve,S]=m.useState(!1),[I,ce]=m.useState("idle"),[xe,Oe]=m.useState(!1),[at,dt]=m.useState(!1),[qt,Et]=m.useState(null),[kn,rn]=m.useState(null),[_n,Mn]=m.useState([]),[tn,zn]=m.useState(null),[Dn,yl]=m.useState(null),[Z,De]=m.useState(null),[st,Ie]=m.useState(null),[ct,vt]=m.useState([]),[nt,Qe]=m.useState(0),[mt,At]=m.useState(!1),[Ae,D]=m.useState(!1),[L,P]=m.useState(!1),[oe,ke]=m.useState(!1),[_e,ie]=m.useState(!1),[Be,it]=m.useState("main"),[yt,Ct]=m.useState(!1),[Te,Q]=m.useState(!1),[de,ue]=m.useState(!1),[fe,ut]=m.useState([]),[Se,$e]=m.useState(null),pt=m.useRef(!1),[lt,En]=m.useState(!1),[Kt,Hn]=m.useState(!1),[il,Un]=m.useState(1),[Ul,oa]=m.useState("new-page"),[nn,Nn]=m.useState(""),[cn,Yn]=m.useState(!1),[Ve,Xn]=m.useState(null),js=m.useRef(!1),Cs=m.useRef({rearrange:null,placements:[]}),Yl=m.useRef({rearrange:null,placements:[]}),[aa,Da]=m.useState(0),[So,ko]=m.useState(0),[sa,Xl]=m.useState(0),[pn,Ms]=m.useState(0),jo=m.useRef(new Set),pl=m.useRef(new Set),Tn=m.useRef(null),Aa=m.useRef(),Es=Te&&le&&!de&&lt;m.useEffect(()=>{if(Es){Hn(!1);const g=ws(()=>{Hn(!0)});return()=>cancelAnimationFrame(g)}else Hn(!1)},[Es]);const Co=m.useRef(new Map),ia=m.useRef(new Map),Il=m.useRef(),[In,rl]=m.useState(!1),[Ft,Ni]=m.useState([]),cc=m.useRef(Ft);cc.current=Ft;const[Oa,uc]=m.useState(null),Mo=m.useRef(null);m.useRef(!1),m.useRef([]),m.useRef(0),m.useRef(null),m.useRef(null),m.useRef(1);const[Ti,Wn]=m.useState(!1),ql=m.useRef(null),[on,Ql]=m.useState([]),An=m.useRef({cmd:!1,shift:!1}),jn=()=>{Ct(!0)},Ri=()=>{Ct(!1)},Eo=()=>{Ti||(ql.current=Ke(()=>Wn(!0),850))},dc=()=>{ql.current&&(clearTimeout(ql.current),ql.current=null),Wn(!1),Ri()};m.useEffect(()=>()=>{ql.current&&clearTimeout(ql.current)},[]);const[xt,zi]=m.useState(()=>{try{const g=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...xd,...g,annotationColorId:Mi.find(p=>p.id===g.annotationColorId)?g.annotationColorId:xd.annotationColorId}}catch{return xd}}),[Pn,Di]=m.useState(!0),[Ai,ra]=m.useState(!1),zl=()=>{ae.current?.classList.add(re.disableTransitions),Di(g=>!g),ws(()=>{ae.current?.classList.remove(re.disableTransitions)})},Ns=!1,Dl="off",[Gt,Wl]=m.useState(A??null),Ts=m.useRef(!1),[Gn,Gl]=m.useState(M?"connecting":"disconnected"),[Lt,cl]=m.useState(null),[Al,No]=m.useState(!1),[Vn,La]=m.useState(null),To=m.useRef(!1),[Rs,Vl]=m.useState(new Set),[ca,ua]=m.useState(new Set),[xn,xl]=m.useState(!1),[Ba,bl]=m.useState(!1),[Ol,$a]=m.useState(!1),Zl=m.useRef(null),qn=m.useRef(null),Kl=m.useRef(null),Ro=m.useRef(null),Ha=m.useRef(!1),Oi=m.useRef(0),Ua=m.useRef(null),Ya=m.useRef(null),zs=8,_c=50,Li=m.useRef(null),Bi=m.useRef(null),da=m.useRef(null),Ze=typeof window<"u"?window.location.pathname:"/";m.useEffect(()=>{if(oe)ie(!0);else{Ct(!1),it("main");const g=Ke(()=>ie(!1),0);return()=>clearTimeout(g)}},[oe]);const Ds=le&&pe&&!Te;m.useEffect(()=>{if(Ds){tt(!1),Re(!0),Vl(new Set);const g=Ke(()=>{Vl(p=>{const j=new Set(p);return q.forEach(C=>j.add(C.id)),j})},350);return()=>clearTimeout(g)}else if(Fe){tt(!0);const g=Ke(()=>{Re(!1),tt(!1)},250);return()=>clearTimeout(g)}},[Ds]),m.useEffect(()=>{D(!0),Qe(window.scrollY);const g=_d(Ze);me(g.filter(Ta)),Sm||(ra(!0),Sm=!0,Ke(()=>ra(!1),750));try{const p=localStorage.getItem("feedback-toolbar-theme");p!==null&&Di(p==="dark")}catch{}try{const p=localStorage.getItem("feedback-toolbar-position");if(p){const j=JSON.parse(p);typeof j.x=="number"&&typeof j.y=="number"&&cl(j)}}catch{}},[Ze]),m.useEffect(()=>{Ae&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(xt))},[xt,Ae]),m.useEffect(()=>{Ae&&localStorage.setItem("feedback-toolbar-theme",Pn?"dark":"light")},[Pn,Ae]);const $i=m.useRef(!1);m.useEffect(()=>{const g=$i.current;$i.current=Al,g&&!Al&&Lt&&Ae&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Lt))},[Al,Lt,Ae]),m.useEffect(()=>{if(!M||!Ae||Ts.current)return;Ts.current=!0,Gl("connecting"),(async()=>{try{const p=Kp(Ze),j=A||p;let C=!1;if(j)try{const E=await hm(M,j);Wl(E.id),Gl("connected"),fd(Ze,E.id),C=!0;const G=_d(Ze),he=new Set(E.annotations.map(je=>je.id)),ge=G.filter(je=>!he.has(je.id));if(ge.length>0){const He=`${typeof window<"u"?window.location.origin:""}${Ze}`,ot=(await Promise.allSettled(ge.map(We=>xs(M,E.id,{...We,sessionId:E.id,url:He})))).map((We,we)=>We.status==="fulfilled"?We.value:(console.warn("[Agentation] Failed to sync annotation:",We.reason),ge[we])),gt=[...E.annotations,...ot];me(gt.filter(Ta)),Si(Ze,gt.filter(Ta),E.id)}else me(E.annotations.filter(Ta)),Si(Ze,E.annotations.filter(Ta),E.id)}catch(E){console.warn("[Agentation] Could not join session, creating new:",E),Fp(Ze)}if(!C){const E=typeof window<"u"?window.location.href:"/",G=await hd(M,E);Wl(G.id),Gl("connected"),fd(Ze,G.id),T?.(G.id);const he=Xp(),ge=typeof window<"u"?window.location.origin:"",je=[];for(const[He,Ye]of he){const ot=Ye.filter(we=>!we._syncedTo);if(ot.length===0)continue;const gt=`${ge}${He}`,We=He===Ze;je.push((async()=>{try{const we=We?G:await hd(M,gt),fn=(await Promise.allSettled(ot.map(Rt=>xs(M,we.id,{...Rt,sessionId:we.id,url:gt})))).map((Rt,sn)=>Rt.status==="fulfilled"?Rt.value:(console.warn("[Agentation] Failed to sync annotation:",Rt.reason),ot[sn])).filter(Ta);if(Si(He,fn,we.id),We){const Rt=new Set(ot.map(sn=>sn.id));me(sn=>{const Le=sn.filter(rt=>!Rt.has(rt.id));return[...fn,...Le]})}}catch(we){console.warn(`[Agentation] Failed to sync annotations for ${He}:`,we)}})())}await Promise.allSettled(je)}}catch(p){Gl("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",p)}})()},[M,A,Ae,T,Ze]),m.useEffect(()=>{if(!M||!Ae)return;const g=async()=>{try{(await fetch(`${M}/health`)).ok?Gl("connected"):Gl("disconnected")}catch{Gl("disconnected")}};g();const p=Qg(g,1e4);return()=>clearInterval(p)},[M,Ae]),m.useEffect(()=>{if(!M||!Ae||!Gt)return;const g=new EventSource(`${M}/sessions/${Gt}/events`),p=["resolved","dismissed"],j=C=>{try{const E=JSON.parse(C.data);if(p.includes(E.payload?.status)){const G=E.payload.id,he=E.payload.kind;if(he==="placement"){for(const[ge,je]of Co.current)if(je===G){Co.current.delete(ge),ut(He=>He.filter(Ye=>Ye.id!==ge));break}}else if(he==="rearrange"){for(const[ge,je]of ia.current)if(je===G){ia.current.delete(ge),Xn(He=>{if(!He)return null;const Ye=He.sections.filter(ot=>ot.id!==ge);return Ye.length===0?null:{...He,sections:Ye}});break}}else ua(ge=>new Set(ge).add(G)),Ke(()=>{me(ge=>ge.filter(je=>je.id!==G)),ua(ge=>{const je=new Set(ge);return je.delete(G),je})},150)}}catch{}};return g.addEventListener("annotation.updated",j),()=>{g.removeEventListener("annotation.updated",j),g.close()}},[M,Ae,Gt]),m.useEffect(()=>{if(!M||!Ae)return;const g=Ya.current==="disconnected",p=Gn==="connected";Ya.current=Gn,g&&p&&(async()=>{try{const C=_d(Ze);if(C.length===0)return;const G=`${typeof window<"u"?window.location.origin:""}${Ze}`;let he=Gt,ge=[];if(he)try{ge=(await hm(M,he)).annotations}catch{he=null}he||(he=(await hd(M,G)).id,Wl(he),fd(Ze,he));const je=new Set(ge.map(Ye=>Ye.id)),He=C.filter(Ye=>!je.has(Ye.id));if(He.length>0){const ot=(await Promise.allSettled(He.map(we=>xs(M,he,{...we,sessionId:he,url:G})))).map((we,an)=>we.status==="fulfilled"?we.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",we.reason),He[an])),We=[...ge,...ot].filter(Ta);me(We),Si(Ze,We,he)}}catch(C){console.warn("[Agentation] Failed to sync on reconnect:",C)}})()},[Gn,M,Ae,Gt,Ze]);const fc=m.useCallback(()=>{K||(Ee(!0),ke(!1),U(!1),Ke(()=>{Pp(!0),Je(!0),Ee(!1)},400))},[K]);m.useEffect(()=>{if(!c||!Ae||!a||a.length===0||q.length>0)return;const g=[];return g.push(Ke(()=>{U(!0)},r-200)),a.forEach((p,j)=>{const C=r+j*300;g.push(Ke(()=>{const E=document.querySelector(p.selector);if(!E)return;const G=E.getBoundingClientRect(),{name:he,path:ge}=Ss(E),je={id:`demo-${Date.now()}-${j}`,x:(G.left+G.width/2)/window.innerWidth*100,y:G.top+G.height/2+window.scrollY,comment:p.comment,element:he,elementPath:ge,timestamp:Date.now(),selectedText:p.selectedText,boundingBox:{x:G.left,y:G.top+window.scrollY,width:G.width,height:G.height},nearbyText:vi(E),cssClasses:wi(E)};me(He=>[...He,je])},C))}),()=>{g.forEach(clearTimeout)}},[c,Ae,a,r]),m.useEffect(()=>{const g=()=>{Qe(window.scrollY),At(!0),da.current&&clearTimeout(da.current),da.current=Ke(()=>{At(!1)},150)};return window.addEventListener("scroll",g,{passive:!0}),()=>{window.removeEventListener("scroll",g),da.current&&clearTimeout(da.current)}},[]),m.useEffect(()=>{Ae&&q.length>0?Gt?Si(Ze,q,Gt):Qm(Ze,q):Ae&&q.length===0&&localStorage.removeItem(rc(Ze))},[q,Ze,Ae,Gt]),m.useEffect(()=>{if(Ae&&!pt.current){pt.current=!0;const g=Ip(Ze);g.length>0&&ut(g)}},[Ae,Ze]),m.useEffect(()=>{Ae&&pt.current&&!lt&&(fe.length>0?qp(Ze,fe):Qp(Ze))},[fe,Ze,Ae,lt]),m.useEffect(()=>{if(Ae&&!js.current){js.current=!0;const g=Wp(Ze);if(g){const p={...g,sections:g.sections.map(j=>({...j,currentRect:j.currentRect??{...j.originalRect}}))};Xn(p)}}},[Ae,Ze]),m.useEffect(()=>{Ae&&js.current&&!lt&&(Ve?Gp(Ze,Ve):Vp(Ze))},[Ve,Ze,Ae,lt]);const As=m.useRef(!1);m.useEffect(()=>{if(Ae&&!As.current){As.current=!0;const g=Zp(Ze);g&&(Yl.current={rearrange:g.rearrange,placements:g.placements||[]},g.purpose&&Nn(g.purpose))}},[Ae,Ze]),m.useEffect(()=>{if(!Ae||!As.current)return;const g=Yl.current;lt?(Ve?.sections?.length??0)>0||fe.length>0||nn?fm(Ze,{rearrange:Ve,placements:fe,purpose:nn}):nc(Ze):(g.rearrange?.sections?.length??0)>0||g.placements.length>0||nn?fm(Ze,{rearrange:g.rearrange,placements:g.placements,purpose:nn}):nc(Ze)},[Ve,fe,nn,lt,Ze,Ae]),m.useEffect(()=>{Te&&!Ve&&Xn({sections:[],originalOrder:[],detectedAt:Date.now()})},[Te,Ve]),m.useEffect(()=>{if(!M||!Gt)return;const g=Co.current,p=new Set(fe.map(j=>j.id));for(const j of fe){if(g.has(j.id))continue;g.set(j.id,"");const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze;xs(M,Gt,{id:j.id,x:j.x/window.innerWidth*100,y:j.y,comment:`Place ${j.type} at (${Math.round(j.x)}, ${Math.round(j.y)}), ${j.width}×${j.height}px${j.text?` — "${j.text}"`:""}`,element:`[design:${j.type}]`,elementPath:"[placement]",timestamp:j.timestamp,url:C,intent:"change",severity:"important",kind:"placement",placement:{componentType:j.type,width:j.width,height:j.height,scrollY:j.scrollY,text:j.text}}).then(E=>{g.has(j.id)&&g.set(j.id,E.id)}).catch(E=>{console.warn("[Agentation] Failed to sync placement annotation:",E),g.delete(j.id)})}for(const[j,C]of g)p.has(j)||(g.delete(j),C&&na(M,C).catch(()=>{}))},[fe,M,Gt,Ze]),m.useEffect(()=>{if(!(!M||!Gt))return Il.current&&clearTimeout(Il.current),Il.current=Ke(()=>{const g=ia.current;if(!Ve||Ve.sections.length===0){for(const[,C]of g)C&&na(M,C).catch(()=>{});g.clear();return}const p=new Set(Ve.sections.map(C=>C.id)),j=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze;for(const C of Ve.sections){const E=C.originalRect,G=C.currentRect;if(!(Math.abs(E.x-G.x)>1||Math.abs(E.y-G.y)>1||Math.abs(E.width-G.width)>1||Math.abs(E.height-G.height)>1)){const je=g.get(C.id);je&&(g.delete(C.id),na(M,je).catch(()=>{}));continue}const ge=g.get(C.id);ge?mm(M,ge,{comment:`Move ${C.label} section (${C.tagName}) — from (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)} to (${Math.round(G.x)},${Math.round(G.y)}) ${Math.round(G.width)}×${Math.round(G.height)}`}).catch(je=>{console.warn("[Agentation] Failed to update rearrange annotation:",je)}):(g.set(C.id,""),xs(M,Gt,{id:C.id,x:G.x/window.innerWidth*100,y:G.y,comment:`Move ${C.label} section (${C.tagName}) — from (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)} to (${Math.round(G.x)},${Math.round(G.y)}) ${Math.round(G.width)}×${Math.round(G.height)}`,element:C.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:j,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:C.selector,label:C.label,tagName:C.tagName,originalRect:E,currentRect:G}}).then(je=>{g.has(C.id)&&g.set(C.id,je.id)}).catch(je=>{console.warn("[Agentation] Failed to sync rearrange annotation:",je),g.delete(C.id)}))}for(const[C,E]of g)p.has(C)||(g.delete(C),E&&na(M,E).catch(()=>{}))},300),()=>{Il.current&&clearTimeout(Il.current)}},[Ve,M,Gt,Ze]);const Fl=m.useRef(new Map);m.useLayoutEffect(()=>{const g=Ve?.sections??[],p=new Set;if((Te||de)&&le)for(const j of g){p.add(j.id);try{const C=document.querySelector(j.selector);if(!C)continue;if(!Fl.current.has(j.id)){const E={transform:C.style.transform,transformOrigin:C.style.transformOrigin,opacity:C.style.opacity,position:C.style.position,zIndex:C.style.zIndex,display:C.style.display},G=[];let he=C.parentElement;for(;he&&he!==document.body;){const je=getComputedStyle(he);(je.overflow!=="visible"||je.overflowX!=="visible"||je.overflowY!=="visible")&&(G.push({el:he,overflow:he.style.overflow}),he.style.overflow="visible"),he=he.parentElement}getComputedStyle(C).display==="inline"&&(C.style.display="inline-block"),Fl.current.set(j.id,{el:C,origStyles:E,ancestors:G}),C.style.transformOrigin="top left",C.style.zIndex="9999"}}catch{}}for(const[j,C]of Fl.current)if(!p.has(j)){const{el:E,origStyles:G,ancestors:he}=C;E.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",E.style.transform=G.transform,E.style.transformOrigin=G.transformOrigin,E.style.opacity=G.opacity,E.style.position=G.position,E.style.zIndex=G.zIndex,Fl.current.delete(j),Ke(()=>{E.style.transition="",E.style.display=G.display;for(const ge of he)ge.el.style.overflow=ge.overflow},450)}},[Ve,Te,de,le]),m.useEffect(()=>()=>{for(const[,g]of Fl.current){const{el:p,origStyles:j,ancestors:C}=g;p.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",p.style.transform=j.transform,p.style.transformOrigin=j.transformOrigin,p.style.opacity=j.opacity,p.style.position=j.position,p.style.zIndex=j.zIndex,Ke(()=>{p.style.transition="",p.style.display=j.display;for(const E of C)E.el.style.overflow=E.overflow},450)}Fl.current.clear()},[]);const Xa=m.useCallback(()=>{ue(!0),Q(!1),$e(null),clearTimeout(Aa.current),Aa.current=Ke(()=>{ue(!1)},300)},[]),Hi=m.useCallback(()=>{Te&&(ue(!0),Q(!1),$e(null),clearTimeout(Aa.current),Aa.current=Ke(()=>{ue(!1)},300)),U(!1)},[Te]),Ui=m.useCallback(()=>{L||(Gg(),P(!0))},[L]),_a=m.useCallback(()=>{L&&(Ph(),P(!1))},[L]),Os=m.useCallback(()=>{L?_a():Ui()},[L,Ui,_a]),Yi=m.useCallback(()=>{if(on.length===0)return;const g=on[0],p=g.element,j=on.length>1,C=on.map(E=>E.element.getBoundingClientRect());if(j){const E={left:Math.min(...C.map(we=>we.left)),top:Math.min(...C.map(we=>we.top)),right:Math.max(...C.map(we=>we.right)),bottom:Math.max(...C.map(we=>we.bottom))},G=on.slice(0,5).map(we=>we.name).join(", "),he=on.length>5?` +${on.length-5} more`:"",ge=C.map(we=>({x:we.left,y:we.top+window.scrollY,width:we.width,height:we.height})),He=on[on.length-1].element,Ye=C[C.length-1],ot=Ye.left+Ye.width/2,gt=Ye.top+Ye.height/2,We=bd(He);ye({x:ot/window.innerWidth*100,y:We?gt:gt+window.scrollY,clientY:gt,element:`${on.length} elements: ${G}${he}`,elementPath:"multi-select",boundingBox:{x:E.left,y:E.top+window.scrollY,width:E.right-E.left,height:E.bottom-E.top},isMultiSelect:!0,isFixed:We,elementBoundingBoxes:ge,multiSelectElements:on.map(we=>we.element),targetElement:He,fullPath:Pr(p),accessibility:Jr(p),computedStyles:Fr(p),computedStylesObj:Kr(p),nearbyElements:Zr(p),cssClasses:wi(p),nearbyText:vi(p),sourceFile:ac(p)})}else{const E=C[0],G=bd(p);ye({x:E.left/window.innerWidth*100,y:G?E.top:E.top+window.scrollY,clientY:E.top,element:g.name,elementPath:g.path,boundingBox:{x:E.left,y:G?E.top:E.top+window.scrollY,width:E.width,height:E.height},isFixed:G,fullPath:Pr(p),accessibility:Jr(p),computedStyles:Fr(p),computedStylesObj:Kr(p),nearbyElements:Zr(p),cssClasses:wi(p),nearbyText:vi(p),reactComponents:g.reactComponents,sourceFile:ac(p)})}Ql([]),Xe(null)},[on]);m.useEffect(()=>{le||(ye(null),De(null),Ie(null),vt([]),Xe(null),ke(!1),Ql([]),An.current={cmd:!1,shift:!1},L&&_a())},[le,L,_a]),m.useEffect(()=>()=>{Ph()},[]),m.useEffect(()=>{if(!le)return;const g=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),p=":not([data-agentation-root]):not([data-agentation-root] *)",j=document.createElement("style");return j.id="feedback-cursor-styles",j.textContent=`
      body ${p} {
        cursor: crosshair !important;
      }

      body :is(${g})${p} {
        cursor: text !important;
      }
    `,document.head.appendChild(j),()=>{const C=document.getElementById("feedback-cursor-styles");C&&C.remove()}},[le]),m.useEffect(()=>{if(Oa!==null&&le)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Oa,le]),m.useEffect(()=>{if(!le||Y||In||Te)return;const g=p=>{const j=p.composedPath()[0]||p.target;if(Fn(j,"[data-feedback-toolbar]")){Xe(null);return}const C=Na(p.clientX,p.clientY);if(!C||Fn(C,"[data-feedback-toolbar]")){Xe(null);return}const{name:E,elementName:G,path:he,reactComponents:ge}=pd(C,Dl),je=C.getBoundingClientRect();Xe({element:E,elementName:G,elementPath:he,rect:je,reactComponents:ge}),F({x:p.clientX,y:p.clientY})};return document.addEventListener("mousemove",g),()=>document.removeEventListener("mousemove",g)},[le,Y,In,Te,Dl,Ft]);const Ia=m.useCallback(g=>{if(De(g),Et(null),rn(null),Mn([]),g.elementBoundingBoxes?.length){const p=[];for(const j of g.elementBoundingBoxes){const C=j.x+j.width/2,E=j.y+j.height/2-window.scrollY,G=Na(C,E);G&&p.push(G)}vt(p),Ie(null)}else if(g.boundingBox){const p=g.boundingBox,j=p.x+p.width/2,C=g.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,E=Na(j,C);if(E){const G=E.getBoundingClientRect(),he=G.width/p.width,ge=G.height/p.height;he<.5||ge<.5?Ie(null):Ie(E)}else Ie(null);vt([])}else Ie(null),vt([])},[]);m.useEffect(()=>{if(!le||In||Te)return;const g=p=>{if(Ha.current){Ha.current=!1;return}const j=p.composedPath()[0]||p.target;if(Fn(j,"[data-feedback-toolbar]")||Fn(j,"[data-annotation-popup]")||Fn(j,"[data-annotation-marker]"))return;if(p.metaKey&&p.shiftKey&&!Y&&!Z){p.preventDefault(),p.stopPropagation();const Ot=Na(p.clientX,p.clientY);if(!Ot)return;const fn=Ot.getBoundingClientRect(),{name:Rt,path:sn,reactComponents:Le}=pd(Ot,Dl),rt=on.findIndex(Vt=>Vt.element===Ot);rt>=0?Ql(Vt=>Vt.filter((Jt,el)=>el!==rt)):Ql(Vt=>[...Vt,{element:Ot,rect:fn,name:Rt,path:sn,reactComponents:Le??void 0}]);return}const C=Fn(j,"button, a, input, select, textarea, [role='button'], [onclick]");if(xt.blockInteractions&&C&&(p.preventDefault(),p.stopPropagation()),Y){if(C&&!xt.blockInteractions)return;p.preventDefault(),Li.current?.shake();return}if(Z){if(C&&!xt.blockInteractions)return;p.preventDefault(),Bi.current?.shake();return}p.preventDefault();const E=Na(p.clientX,p.clientY);if(!E)return;const{name:G,path:he,reactComponents:ge}=pd(E,Dl),je=E.getBoundingClientRect(),He=p.clientX/window.innerWidth*100,Ye=bd(E),ot=Ye?p.clientY:p.clientY+window.scrollY,gt=window.getSelection();let We;gt&&gt.toString().trim().length>0&&(We=gt.toString().trim().slice(0,500));const we=Kr(E),an=Fr(E);ye({x:He,y:ot,clientY:p.clientY,element:G,elementPath:he,selectedText:We,boundingBox:{x:je.left,y:Ye?je.top:je.top+window.scrollY,width:je.width,height:je.height},nearbyText:vi(E),cssClasses:wi(E),isFixed:Ye,fullPath:Pr(E),accessibility:Jr(E),computedStyles:an,computedStylesObj:we,nearbyElements:Zr(E),reactComponents:ge??void 0,sourceFile:ac(E),targetElement:E}),Xe(null)};return document.addEventListener("click",g,!0),()=>document.removeEventListener("click",g,!0)},[le,In,Te,Y,Z,xt.blockInteractions,Dl,on]),m.useEffect(()=>{if(!le)return;const g=C=>{C.key==="Meta"&&(An.current.cmd=!0),C.key==="Shift"&&(An.current.shift=!0)},p=C=>{const E=An.current.cmd&&An.current.shift;C.key==="Meta"&&(An.current.cmd=!1),C.key==="Shift"&&(An.current.shift=!1);const G=An.current.cmd&&An.current.shift;E&&!G&&on.length>0&&Yi()},j=()=>{An.current={cmd:!1,shift:!1},Ql([])};return document.addEventListener("keydown",g),document.addEventListener("keyup",p),window.addEventListener("blur",j),()=>{document.removeEventListener("keydown",g),document.removeEventListener("keyup",p),window.removeEventListener("blur",j)}},[le,on,Yi]),m.useEffect(()=>{if(!le||Y||In||Te)return;const g=p=>{const j=p.composedPath()[0]||p.target;Fn(j,"[data-feedback-toolbar]")||Fn(j,"[data-annotation-marker]")||Fn(j,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(j.tagName)||j.isContentEditable||(p.preventDefault(),Zl.current={x:p.clientX,y:p.clientY})};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[le,Y,In,Te]),m.useEffect(()=>{if(!le||Y)return;const g=p=>{if(!Zl.current)return;const j=p.clientX-Zl.current.x,C=p.clientY-Zl.current.y,E=j*j+C*C,G=zs*zs;if(!Ol&&E>=G&&(qn.current=Zl.current,$a(!0),p.preventDefault()),(Ol||E>=G)&&qn.current){if(Kl.current){const Le=Math.min(qn.current.x,p.clientX),rt=Math.min(qn.current.y,p.clientY),Vt=Math.abs(p.clientX-qn.current.x),Jt=Math.abs(p.clientY-qn.current.y);Kl.current.style.transform=`translate(${Le}px, ${rt}px)`,Kl.current.style.width=`${Vt}px`,Kl.current.style.height=`${Jt}px`}const he=Date.now();if(he-Oi.current<_c)return;Oi.current=he;const ge=qn.current.x,je=qn.current.y,He=Math.min(ge,p.clientX),Ye=Math.min(je,p.clientY),ot=Math.max(ge,p.clientX),gt=Math.max(je,p.clientY),We=(He+ot)/2,we=(Ye+gt)/2,an=new Set,Ot=[[He,Ye],[ot,Ye],[He,gt],[ot,gt],[We,we],[We,Ye],[We,gt],[He,we],[ot,we]];for(const[Le,rt]of Ot){const Vt=document.elementsFromPoint(Le,rt);for(const Jt of Vt)Jt instanceof HTMLElement&&an.add(Jt)}const fn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Le of fn)if(Le instanceof HTMLElement){const rt=Le.getBoundingClientRect(),Vt=rt.left+rt.width/2,Jt=rt.top+rt.height/2,el=Vt>=He&&Vt<=ot&&Jt>=Ye&&Jt<=gt,Zn=Math.min(rt.right,ot)-Math.max(rt.left,He),hn=Math.min(rt.bottom,gt)-Math.max(rt.top,Ye),fa=Zn>0&&hn>0?Zn*hn:0,tl=rt.width*rt.height,wl=tl>0?fa/tl:0;(el||wl>.5)&&an.add(Le)}const Rt=[],sn=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Le of an){if(Fn(Le,"[data-feedback-toolbar]")||Fn(Le,"[data-annotation-marker]"))continue;const rt=Le.getBoundingClientRect();if(!(rt.width>window.innerWidth*.8&&rt.height>window.innerHeight*.5)&&!(rt.width<10||rt.height<10)&&rt.left<ot&&rt.right>He&&rt.top<gt&&rt.bottom>Ye){const Vt=Le.tagName;let Jt=sn.has(Vt);if(!Jt&&(Vt==="DIV"||Vt==="SPAN")){const el=Le.textContent&&Le.textContent.trim().length>0,Zn=Le.onclick!==null||Le.getAttribute("role")==="button"||Le.getAttribute("role")==="link"||Le.classList.contains("clickable")||Le.hasAttribute("data-clickable");(el||Zn)&&!Le.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Jt=!0)}if(Jt){let el=!1;for(const Zn of Rt)if(Zn.left<=rt.left&&Zn.right>=rt.right&&Zn.top<=rt.top&&Zn.bottom>=rt.bottom){el=!0;break}el||Rt.push(rt)}}}if(Ro.current){const Le=Ro.current;for(;Le.children.length>Rt.length;)Le.removeChild(Le.lastChild);Rt.forEach((rt,Vt)=>{let Jt=Le.children[Vt];Jt||(Jt=document.createElement("div"),Jt.className=re.selectedElementHighlight,Le.appendChild(Jt)),Jt.style.transform=`translate(${rt.left}px, ${rt.top}px)`,Jt.style.width=`${rt.width}px`,Jt.style.height=`${rt.height}px`})}}};return document.addEventListener("mousemove",g,{passive:!0}),()=>document.removeEventListener("mousemove",g)},[le,Y,Ol,zs]),m.useEffect(()=>{if(!le)return;const g=p=>{const j=Ol,C=qn.current;if(Ol&&C){Ha.current=!0;const E=Math.min(C.x,p.clientX),G=Math.min(C.y,p.clientY),he=Math.max(C.x,p.clientX),ge=Math.max(C.y,p.clientY),je=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(We=>{if(!(We instanceof HTMLElement)||Fn(We,"[data-feedback-toolbar]")||Fn(We,"[data-annotation-marker]"))return;const we=We.getBoundingClientRect();we.width>window.innerWidth*.8&&we.height>window.innerHeight*.5||we.width<10||we.height<10||we.left<he&&we.right>E&&we.top<ge&&we.bottom>G&&je.push({element:We,rect:we})});const Ye=je.filter(({element:We})=>!je.some(({element:we})=>we!==We&&We.contains(we))),ot=p.clientX/window.innerWidth*100,gt=p.clientY+window.scrollY;if(Ye.length>0){const We=Ye.reduce((sn,{rect:Le})=>({left:Math.min(sn.left,Le.left),top:Math.min(sn.top,Le.top),right:Math.max(sn.right,Le.right),bottom:Math.max(sn.bottom,Le.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),we=Ye.slice(0,5).map(({element:sn})=>Ss(sn).name).join(", "),an=Ye.length>5?` +${Ye.length-5} more`:"",Ot=Ye[0].element,fn=Kr(Ot),Rt=Fr(Ot);ye({x:ot,y:gt,clientY:p.clientY,element:`${Ye.length} elements: ${we}${an}`,elementPath:"multi-select",boundingBox:{x:We.left,y:We.top+window.scrollY,width:We.right-We.left,height:We.bottom-We.top},isMultiSelect:!0,fullPath:Pr(Ot),accessibility:Jr(Ot),computedStyles:Rt,computedStylesObj:fn,nearbyElements:Zr(Ot),cssClasses:wi(Ot),nearbyText:vi(Ot),sourceFile:ac(Ot)})}else{const We=Math.abs(he-E),we=Math.abs(ge-G);We>20&&we>20&&ye({x:ot,y:gt,clientY:p.clientY,element:"Area selection",elementPath:`region at (${Math.round(E)}, ${Math.round(G)})`,boundingBox:{x:E,y:G+window.scrollY,width:We,height:we},isMultiSelect:!0})}Xe(null)}else j&&(Ha.current=!0);Zl.current=null,qn.current=null,$a(!1),Ro.current&&(Ro.current.innerHTML="")};return document.addEventListener("mouseup",g),()=>document.removeEventListener("mouseup",g)},[le,Ol]);const vl=m.useCallback(async(g,p,j)=>{const C=xt.webhookUrl||ne;if(!C||!xt.webhooksEnabled&&!j)return!1;try{return(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:g,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...p})})).ok}catch(E){return console.warn("[Agentation] Webhook failed:",E),!1}},[ne,xt.webhookUrl,xt.webhooksEnabled]),hc=m.useCallback(g=>{if(!Y)return;const p={id:Date.now().toString(),x:Y.x,y:Y.y,comment:g,element:Y.element,elementPath:Y.elementPath,timestamp:Date.now(),selectedText:Y.selectedText,boundingBox:Y.boundingBox,nearbyText:Y.nearbyText,cssClasses:Y.cssClasses,isMultiSelect:Y.isMultiSelect,isFixed:Y.isFixed,fullPath:Y.fullPath,accessibility:Y.accessibility,computedStyles:Y.computedStyles,nearbyElements:Y.nearbyElements,reactComponents:Y.reactComponents,sourceFile:Y.sourceFile,elementBoundingBoxes:Y.elementBoundingBoxes,...M&&Gt?{sessionId:Gt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};me(j=>[...j,p]),Ua.current=p.id,Ke(()=>{Ua.current=null},300),Ke(()=>{Vl(j=>new Set(j).add(p.id))},250),u?.(p),vl("annotation.add",{annotation:p}),xl(!0),Ke(()=>{ye(null),xl(!1)},150),window.getSelection()?.removeAllRanges(),M&&Gt&&xs(M,Gt,p).then(j=>{j.id!==p.id&&(me(C=>C.map(E=>E.id===p.id?{...E,id:j.id}:E)),Vl(C=>{const E=new Set(C);return E.delete(p.id),E.add(j.id),E}))}).catch(j=>{console.warn("[Agentation] Failed to sync annotation:",j)})},[Y,u,vl,M,Gt]),Ls=m.useCallback(()=>{xl(!0),Ke(()=>{ye(null),xl(!1)},150)},[]),Bs=m.useCallback(g=>{const p=q.findIndex(C=>C.id===g),j=q[p];Z?.id===g&&(bl(!0),Ke(()=>{De(null),Ie(null),vt([]),bl(!1)},150)),zn(g),ua(C=>new Set(C).add(g)),j&&(_?.(j),vl("annotation.delete",{annotation:j})),M&&na(M,g).catch(C=>{console.warn("[Agentation] Failed to delete annotation from server:",C)}),Ke(()=>{me(C=>C.filter(E=>E.id!==g)),ua(C=>{const E=new Set(C);return E.delete(g),E}),zn(null),p<q.length-1&&(yl(p),Ke(()=>yl(null),200))},150)},[q,Z,_,vl,M]),qa=m.useCallback(g=>{if(!g){Et(null),rn(null),Mn([]);return}if(Et(g.id),g.elementBoundingBoxes?.length){const p=[];for(const j of g.elementBoundingBoxes){const C=j.x+j.width/2,E=j.y+j.height/2-window.scrollY,he=document.elementsFromPoint(C,E).find(ge=>!ge.closest("[data-annotation-marker]")&&!ge.closest("[data-agentation-root]"));he&&p.push(he)}Mn(p),rn(null)}else if(g.boundingBox){const p=g.boundingBox,j=p.x+p.width/2,C=g.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,E=Na(j,C);if(E){const G=E.getBoundingClientRect(),he=G.width/p.width,ge=G.height/p.height;he<.5||ge<.5?rn(null):rn(E)}else rn(null);Mn([])}else rn(null),Mn([])},[]),mc=m.useCallback(g=>{if(!Z)return;const p={...Z,comment:g};me(j=>j.map(C=>C.id===Z.id?p:C)),f?.(p),vl("annotation.update",{annotation:p}),M&&mm(M,Z.id,{comment:g}).catch(j=>{console.warn("[Agentation] Failed to update annotation on server:",j)}),bl(!0),Ke(()=>{De(null),Ie(null),vt([]),bl(!1)},150)},[Z,f,vl,M]),$s=m.useCallback(()=>{bl(!0),Ke(()=>{De(null),Ie(null),vt([]),bl(!1)},150)},[]),ul=m.useCallback(()=>{const g=q.length,p=fe.length>0||!!Ve;if(g===0&&Ft.length===0&&!p)return;if(x?.(q),vl("annotations.clear",{annotations:q}),M){Promise.all(q.map(E=>na(M,E.id).catch(G=>{console.warn("[Agentation] Failed to delete annotation from server:",G)})));for(const[,E]of Co.current)E&&na(M,E).catch(()=>{});Co.current.clear();for(const[,E]of ia.current)E&&na(M,E).catch(()=>{});ia.current.clear()}dt(!0),Oe(!0),Ni([]);const j=Mo.current;if(j){const E=j.getContext("2d");E&&E.clearRect(0,0,j.width,j.height)}(fe.length>0||Ve)&&(Xl(E=>E+1),Ms(E=>E+1),Ke(()=>{ut([]),Xn(null)},200)),lt&&En(!1),nn&&Nn(""),Yl.current={rearrange:null,placements:[]},nc(Ze);const C=g*30+200;Ke(()=>{me([]),Vl(new Set),localStorage.removeItem(rc(Ze)),dt(!1)},C),Ke(()=>Oe(!1),1500)},[Ze,q,Ft,fe,Ve,lt,nn,x,vl,M]),Hs=m.useCallback(async()=>{const g=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze,p=Te&&lt;let j;if(p){if(fe.length===0&&!Ve&&!nn)return;j=""}else{if(j=pm(q,g,xt.outputDetail),!j&&Ft.length===0&&fe.length===0&&!Ve)return;j||(j=`## Page Feedback: ${g}
`)}if(!p&&Ft.length>0){const C=new Set;for(const ge of q)ge.drawingIndex!=null&&C.add(ge.drawingIndex);const E=Mo.current;E&&(E.style.visibility="hidden");const G=[],he=window.scrollY;for(let ge=0;ge<Ft.length;ge++){if(C.has(ge))continue;const je=Ft[ge];if(je.points.length<2)continue;const He=je.fixed?je.points:je.points.map(Zt=>({x:Zt.x,y:Zt.y-he}));let Ye=1/0,ot=1/0,gt=-1/0,We=-1/0;for(const Zt of He)Ye=Math.min(Ye,Zt.x),ot=Math.min(ot,Zt.y),gt=Math.max(gt,Zt.x),We=Math.max(We,Zt.y);const we=gt-Ye,an=We-ot,Ot=Math.hypot(we,an),fn=He[0],Rt=He[He.length-1],sn=Math.hypot(Rt.x-fn.x,Rt.y-fn.y);let Le;const rt=sn<Ot*.35,Vt=we/Math.max(an,1);if(rt&&Ot>20){const Zt=Math.max(we,an)*.15;let Sl=0;for(const Jl of He){const so=Jl.x-Ye<Zt,Do=gt-Jl.x<Zt,Us=Jl.y-ot<Zt,Qi=We-Jl.y<Zt;(so||Do)&&(Us||Qi)&&Sl++}Le=Sl>He.length*.15?"box":"circle"}else Vt>3&&an<40?Le="underline":sn>Ot*.5?Le="arrow":Le="drawing";const Jt=Math.min(10,He.length),el=Math.max(1,Math.floor(He.length/Jt)),Zn=new Set,hn=[],fa=[fn];for(let Zt=el;Zt<He.length-1;Zt+=el)fa.push(He[Zt]);fa.push(Rt);for(const Zt of fa){const Sl=Na(Zt.x,Zt.y);if(!Sl||Zn.has(Sl)||Fn(Sl,"[data-feedback-toolbar]"))continue;Zn.add(Sl);const{name:Jl}=Ss(Sl);hn.includes(Jl)||hn.push(Jl)}const tl=`${Math.round(Ye)},${Math.round(ot)} → ${Math.round(gt)},${Math.round(We)}`;let wl;(Le==="circle"||Le==="box")&&hn.length>0?wl=`${Le==="box"?"Boxed":"Circled"} **${hn[0]}**${hn.length>1?` (and ${hn.slice(1).join(", ")})`:""} (region: ${tl})`:Le==="underline"&&hn.length>0?wl=`Underlined **${hn[0]}** (${tl})`:Le==="arrow"&&hn.length>=2?wl=`Arrow from **${hn[0]}** to **${hn[hn.length-1]}** (${Math.round(fn.x)},${Math.round(fn.y)} → ${Math.round(Rt.x)},${Math.round(Rt.y)})`:hn.length>0?wl=`${Le==="arrow"?"Arrow":"Drawing"} near **${hn.join("**, **")}** (region: ${tl})`:wl=`Drawing at ${tl}`,G.push(wl)}E&&(E.style.visibility=""),G.length>0&&(j+=`
**Drawings:**
`,G.forEach((ge,je)=>{j+=`${je+1}. ${ge}
`}))}if((fe.length>0||p&&nn)&&(j+=`
`+dm(fe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:lt,wireframePurpose:nn||void 0},xt.outputDetail)),Ve){const C=_m(Ve,xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});C&&(j+=`
`+C)}if(k)try{await navigator.clipboard.writeText(j)}catch{}R?.(j),S(!0),Ke(()=>S(!1),2e3),xt.autoClearAfterCopy&&Ke(()=>ul(),500)},[q,Ft,fe,Ve,lt,Te,Ul,nn,Ze,xt.outputDetail,Dl,xt.autoClearAfterCopy,ul,k,R]),Qa=m.useCallback(async()=>{const g=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ze;let p=pm(q,g,xt.outputDetail);if(!p&&fe.length===0&&!Ve)return;if(p||(p=`## Page Feedback: ${g}
`),fe.length>0&&(p+=`
`+dm(fe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:lt,wireframePurpose:nn||void 0},xt.outputDetail)),Ve){const C=_m(Ve,xt.outputDetail,{width:window.innerWidth,height:window.innerHeight});C&&(p+=`
`+C)}b&&b(p,q),ce("sending"),await new Promise(C=>Ke(C,150));const j=await vl("submit",{output:p,annotations:q},!0);ce(j?"sent":"failed"),Ke(()=>ce("idle"),2500),j&&xt.autoClearAfterCopy&&Ke(()=>ul(),500)},[b,vl,q,fe,Ve,lt,Ul,Ze,xt.outputDetail,Dl,xt.autoClearAfterCopy,ul]);m.useEffect(()=>{if(!Vn)return;const g=10,p=C=>{const E=C.clientX-Vn.x,G=C.clientY-Vn.y,he=Math.sqrt(E*E+G*G);if(!Al&&he>g&&No(!0),Al||he>g){let ge=Vn.toolbarX+E,je=Vn.toolbarY+G;const He=20,Ye=337,ot=44,We=Ye-(le?Gn==="connected"?297:257:44),we=He-We,an=window.innerWidth-He-Ye;ge=Math.max(we,Math.min(an,ge)),je=Math.max(He,Math.min(window.innerHeight-ot-He,je)),cl({x:ge,y:je})}},j=()=>{Al&&(To.current=!0),No(!1),La(null)};return document.addEventListener("mousemove",p),document.addEventListener("mouseup",j),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",j)}},[Vn,Al,le,Gn]);const Xi=m.useCallback(g=>{if(g.target.closest("button")||g.target.closest("[data-agentation-settings-panel]"))return;const p=g.currentTarget.parentElement;if(!p)return;const j=p.getBoundingClientRect(),C=Lt?.x??j.left,E=Lt?.y??j.top;La({x:g.clientX,y:g.clientY,toolbarX:C,toolbarY:E})},[Lt]);if(m.useEffect(()=>{if(!Lt)return;const g=()=>{let E=Lt.x,G=Lt.y;const je=20-(337-(le?Gn==="connected"?297:257:44)),He=window.innerWidth-20-337;E=Math.max(je,Math.min(He,E)),G=Math.max(20,Math.min(window.innerHeight-44-20,G)),(E!==Lt.x||G!==Lt.y)&&cl({x:E,y:G})};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[Lt,le,Gn]),m.useEffect(()=>{const g=p=>{const j=p.target,C=j.tagName==="INPUT"||j.tagName==="TEXTAREA"||j.isContentEditable;if(p.key==="Escape"){if(Te){Se?$e(null):Xa();return}if(In){rl(!1);return}if(on.length>0){Ql([]);return}Y||le&&(jn(),U(!1))}if((p.metaKey||p.ctrlKey)&&p.shiftKey&&(p.key==="f"||p.key==="F")){p.preventDefault(),jn(),le?Hi():U(!0);return}if(!(C||p.metaKey||p.ctrlKey)&&((p.key==="p"||p.key==="P")&&(p.preventDefault(),jn(),Os()),(p.key==="l"||p.key==="L")&&(p.preventDefault(),jn(),In&&rl(!1),oe&&ke(!1),Y&&Ls(),Te?Xa():Q(!0)),(p.key==="h"||p.key==="H")&&q.length>0&&(p.preventDefault(),jn(),be(E=>!E)),(p.key==="c"||p.key==="C")&&(q.length>0||fe.length>0||Ve)&&(p.preventDefault(),jn(),Hs()),(p.key==="x"||p.key==="X")&&(q.length>0||fe.length>0||Ve)&&(p.preventDefault(),jn(),ul(),fe.length>0&&ut([]),Ve&&Xn(null)),p.key==="s"||p.key==="S")){const E=lo(xt.webhookUrl)||lo(ne||"");q.length>0&&E&&I==="idle"&&(p.preventDefault(),jn(),Qa())}};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[le,In,Te,Se,fe,Ve,Y,q.length,xt.webhookUrl,ne,I,Qa,Os,Hs,ul,on]),!Ae||et)return null;const zo=q.length>0,oo=q.filter(g=>!ca.has(g.id)&&g.kind!=="placement"&&g.kind!=="rearrange"),Ii=oo.length>0,ao=q.filter(g=>ca.has(g.id)),qi=g=>{const G=g.x/100*window.innerWidth,he=typeof g.y=="string"?parseFloat(g.y):g.y,ge={};window.innerHeight-he-22-10<80&&(ge.top="auto",ge.bottom="calc(100% + 10px)");const He=G-200/2,Ye=10;if(He<Ye){const ot=Ye-He;ge.left=`calc(50% + ${ot}px)`}else if(He+200>window.innerWidth-Ye){const ot=He+200-(window.innerWidth-Ye);ge.left=`calc(50% - ${ot}px)`}return ge};return Td.createPortal(o.jsxs("div",{ref:ae,style:{display:"contents"},"data-agentation-theme":Pn?"dark":"light","data-agentation-accent":xt.annotationColorId,"data-agentation-root":"",children:[o.jsx("div",{className:`${re.toolbar}${$?` ${$}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Lt?{left:Lt.x,top:Lt.y,right:"auto",bottom:"auto"}:void 0,children:o.jsxs("div",{className:`${re.toolbarContainer} ${le?re.expanded:re.collapsed} ${Ai?re.entrance:""} ${K?re.hiding:""} ${!xt.webhooksEnabled&&(lo(xt.webhookUrl)||lo(ne||""))?re.serverConnected:""}`,onClick:le?void 0:g=>{if(To.current){To.current=!1,g.preventDefault();return}U(!0)},onMouseDown:Xi,role:le?void 0:"button",tabIndex:le?-1:0,title:le?void 0:"Start feedback mode",children:[o.jsxs("div",{className:`${re.toggleContent} ${le?re.hidden:re.visible}`,children:[o.jsx(Ng,{size:24}),Ii&&o.jsx("span",{className:`${re.badge} ${le?re.fadeOut:""} ${Ai?re.entrance:""}`,children:oo.length})]}),o.jsxs("div",{className:`${re.controlsContent} ${le?re.visible:re.hidden} ${Lt&&Lt.y<100?re.tooltipBelow:""} ${yt||oe?re.tooltipsHidden:""} ${Ti?re.tooltipsInSession:""}`,onMouseEnter:Eo,onMouseLeave:dc,children:[o.jsxs("div",{className:`${re.buttonWrapper} ${Lt&&Lt.x<120?re.buttonWrapperAlignLeft:""}`,children:[o.jsx("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),jn(),Os()},"data-active":L,children:o.jsx(Ag,{size:24,isPaused:L})}),o.jsxs("span",{className:re.buttonTooltip,children:[L?"Resume animations":"Pause animations",o.jsx("span",{className:re.shortcut,children:"P"})]})]}),o.jsxs("div",{className:re.buttonWrapper,children:[o.jsx("button",{className:`${re.controlButton} ${Pn?"":re.light}`,onClick:g=>{g.stopPropagation(),jn(),In&&rl(!1),oe&&ke(!1),Y&&Ls(),Te?Xa():Q(!0)},"data-active":Te,style:Te&&lt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:o.jsx(Ig,{size:21})}),o.jsxs("span",{className:re.buttonTooltip,children:[Te?"Exit layout mode":"Layout mode",o.jsx("span",{className:re.shortcut,children:"L"})]})]}),o.jsxs("div",{className:re.buttonWrapper,children:[o.jsx("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),jn(),be(!pe)},disabled:!zo||Te,children:o.jsx(Dg,{size:24,isOpen:pe})}),o.jsxs("span",{className:re.buttonTooltip,children:[pe?"Hide markers":"Show markers",o.jsx("span",{className:re.shortcut,children:"H"})]})]}),o.jsxs("div",{className:re.buttonWrapper,children:[o.jsx("button",{className:`${re.controlButton} ${ve?re.statusShowing:""}`,onClick:g=>{g.stopPropagation(),jn(),Hs()},disabled:Te&&lt?fe.length===0&&!Ve?.sections?.length:!zo&&Ft.length===0&&fe.length===0&&!Ve?.sections?.length,"data-active":ve,children:o.jsx(Rg,{size:24,copied:ve,tint:Te&&lt&&(fe.length>0||Ve?.sections?.length)?"#f97316":void 0})}),o.jsxs("span",{className:re.buttonTooltip,children:[Te&&lt?"Copy layout":"Copy feedback",o.jsx("span",{className:re.shortcut,children:"C"})]})]}),o.jsxs("div",{className:`${re.buttonWrapper} ${re.sendButtonWrapper} ${le&&!xt.webhooksEnabled&&(lo(xt.webhookUrl)||lo(ne||""))?re.sendButtonVisible:""}`,children:[o.jsxs("button",{className:`${re.controlButton} ${I==="sent"||I==="failed"?re.statusShowing:""}`,onClick:g=>{g.stopPropagation(),jn(),Qa()},disabled:!zo||!lo(xt.webhookUrl)&&!lo(ne||"")||I==="sending","data-no-hover":I==="sent"||I==="failed",tabIndex:lo(xt.webhookUrl)||lo(ne||"")?0:-1,children:[o.jsx(zg,{size:24,state:I}),zo&&I==="idle"&&o.jsx("span",{className:re.buttonBadge,children:q.length})]}),o.jsxs("span",{className:re.buttonTooltip,children:["Send Annotations",o.jsx("span",{className:re.shortcut,children:"S"})]})]}),o.jsxs("div",{className:re.buttonWrapper,children:[o.jsx("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),jn(),ul()},disabled:!zo&&Ft.length===0&&fe.length===0&&!Ve?.sections?.length,"data-danger":!0,children:o.jsx(Lg,{size:24})}),o.jsxs("span",{className:re.buttonTooltip,children:["Clear all",o.jsx("span",{className:re.shortcut,children:"X"})]})]}),o.jsxs("div",{className:re.buttonWrapper,children:[o.jsx("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),jn(),Te&&Xa(),ke(!oe)},children:o.jsx(Og,{size:24})}),M&&Gn!=="disconnected"&&o.jsx("span",{className:`${re.mcpIndicator} ${re[Gn]} ${oe?re.hidden:""}`,title:Gn==="connected"?"MCP Connected":"MCP Connecting..."}),o.jsx("span",{className:re.buttonTooltip,children:"Settings"})]}),o.jsx("div",{className:re.divider}),o.jsxs("div",{className:`${re.buttonWrapper} ${Lt&&typeof window<"u"&&Lt.x>window.innerWidth-120?re.buttonWrapperAlignRight:""}`,children:[o.jsx("button",{className:re.controlButton,onClick:g=>{g.stopPropagation(),jn(),Hi()},children:o.jsx(Bg,{size:24})}),o.jsxs("span",{className:re.buttonTooltip,children:["Exit",o.jsx("span",{className:re.shortcut,children:"Esc"})]})]})]}),o.jsx(pp,{visible:Te&&le,activeType:Se,onSelect:g=>{$e(Se===g?null:g)},isDarkMode:Pn,sectionCount:Ve?.sections.length??0,onDetectSections:()=>{const g=Np(),p=Ve?.sections??[],j=new Set(p.map(he=>he.selector)),C=g.filter(he=>!j.has(he.selector)),E=[...p,...C],G=[...Ve?.originalOrder??[],...C.map(he=>he.id)];Xn({sections:E,originalOrder:G,detectedAt:Date.now()})},placementCount:fe.length,onClearPlacements:()=>{Xl(g=>g+1),Ms(g=>g+1),Ke(()=>{Xn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:lt,onBlankCanvasChange:g=>{const p={sections:[],originalOrder:[],detectedAt:Date.now()};g?(Cs.current={rearrange:Ve,placements:fe},Xn(Yl.current.rearrange||p),ut(Yl.current.placements),$e(null)):(Yl.current={rearrange:Ve,placements:fe},Xn(Cs.current.rearrange||p),ut(Cs.current.placements)),En(g)},wireframePurpose:nn,onWireframePurposeChange:Nn,Tooltip:Ra,onDragStart:(g,p)=>{p.preventDefault();const j=Ce[g];let C=null,E=!1;const G=p.clientX,he=p.clientY,je=p.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,He=ot=>{const gt=ot.clientX-G,We=ot.clientY-he;if(!E&&(Math.abs(gt)>4||Math.abs(We)>4)&&(E=!0,C=document.createElement("div"),C.className=`${J.dragPreview}${lt?` ${J.dragPreviewWireframe}`:""}`,document.body.appendChild(C)),!C)return;const we=Math.max(0,je-ot.clientY),an=Math.min(1,we/180),Ot=1-Math.pow(1-an,2),fn=28,Rt=20,sn=Math.min(140,j.width*.18),Le=Math.min(90,j.height*.18),rt=fn+(sn-fn)*Ot,Vt=Rt+(Le-Rt)*Ot;C.style.width=`${rt}px`,C.style.height=`${Vt}px`,C.style.left=`${ot.clientX-rt/2}px`,C.style.top=`${ot.clientY-Vt/2}px`,C.style.opacity=`${.5+.5*Ot}`,C.textContent=Ot>.25?g:""},Ye=ot=>{if(window.removeEventListener("mousemove",He),window.removeEventListener("mouseup",Ye),C&&document.body.removeChild(C),E){const gt=j.width,We=j.height,we=window.scrollY,an=Math.max(0,ot.clientX-gt/2),Ot=Math.max(0,ot.clientY+we-We/2),fn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:g,x:an,y:Ot,width:gt,height:We,scrollY:we,timestamp:Date.now()};ut(Rt=>[...Rt,fn]),$e(null),jo.current=new Set,Da(Rt=>Rt+1)}};window.addEventListener("mousemove",He),window.addEventListener("mouseup",Ye)}}),o.jsx($1,{settings:xt,onSettingsChange:g=>zi(p=>({...p,...g})),isDarkMode:Pn,onToggleTheme:zl,isDevMode:Ns,connectionStatus:Gn,endpoint:M,isVisible:_e,toolbarNearBottom:!!Lt&&Lt.y<230,settingsPage:Be,onSettingsPageChange:it,onHideToolbar:fc})]})}),(Te||de)&&o.jsx("div",{className:`${J.blankCanvas} ${Kt?J.visible:""} ${cn?J.gridActive:""}`,style:{"--canvas-opacity":il},"data-feedback-toolbar":!0}),Te&&lt&&Kt&&o.jsxs("div",{className:J.wireframeNotice,"data-feedback-toolbar":!0,children:[o.jsxs("div",{className:J.wireframeOpacityRow,children:[o.jsx("span",{className:J.wireframeOpacityLabel,children:"Toggle Opacity"}),o.jsx("input",{type:"range",className:J.wireframeOpacitySlider,min:0,max:1,step:.01,value:il,onChange:g=>Un(Number(g.target.value))})]}),o.jsxs("div",{className:J.wireframeNoticeTitleRow,children:[o.jsx("span",{className:J.wireframeNoticeTitle,children:"Wireframe Mode"}),o.jsx("span",{className:J.wireframeNoticeDivider}),o.jsx("button",{className:J.wireframeStartOver,onClick:()=>{Xl(g=>g+1),Xn({sections:[],originalOrder:[],detectedAt:Date.now()}),Yl.current={rearrange:null,placements:[]},Nn(""),nc(Ze)},children:"Start Over"})]}),"Drag components onto the canvas.",o.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(Te||de)&&o.jsx(fp,{placements:fe,onChange:ut,activeComponent:de?null:Se,onActiveComponentChange:$e,isDarkMode:Pn,exiting:de,onInteractionChange:Yn,passthrough:!Se,extraSnapRects:Ve?.sections.map(g=>g.currentRect),deselectSignal:aa,clearSignal:sa,wireframe:lt,onSelectionChange:(g,p)=>{jo.current=g,p||(pl.current=new Set,ko(j=>j+1))},onDragMove:(g,p)=>{const j=pl.current;if(!(!j.size||!Ve)){if(!Tn.current){Tn.current=new Map;for(const C of Ve.sections)j.has(C.id)&&Tn.current.set(C.id,{x:C.currentRect.x,y:C.currentRect.y})}for(const C of Ve.sections){if(!j.has(C.id)||!Tn.current.get(C.id))continue;const G=document.querySelector(`[data-rearrange-section="${C.id}"]`);G&&(G.style.transform=`translate(${g}px, ${p}px)`)}}},onDragEnd:(g,p,j)=>{const C=pl.current,E=Tn.current;if(Tn.current=null,!(!C.size||!Ve||!E)){for(const G of C){const he=document.querySelector(`[data-rearrange-section="${G}"]`);he&&(he.style.transform="")}j&&Xn(G=>G&&{...G,sections:G.sections.map(he=>{const ge=E.get(he.id);return ge?{...he,currentRect:{...he.currentRect,x:Math.max(0,ge.x+g),y:Math.max(0,ge.y+p)}}:he})})}}}),(Te||de)&&Ve&&o.jsx(zp,{rearrangeState:Ve,onChange:Xn,isDarkMode:Pn,exiting:de,blankCanvas:lt,extraSnapRects:fe.map(g=>({x:g.x,y:g.y,width:g.width,height:g.height})),clearSignal:pn,deselectSignal:So,onSelectionChange:(g,p)=>{pl.current=g,p||(jo.current=new Set,Da(j=>j+1))},onDragMove:(g,p)=>{const j=jo.current;if(j.size){if(!Tn.current){Tn.current=new Map;for(const C of fe)j.has(C.id)&&Tn.current.set(C.id,{x:C.x,y:C.y})}for(const C of j){const E=document.querySelector(`[data-design-placement="${C}"]`);E&&(E.style.transform=`translate(${g}px, ${p}px)`)}}},onDragEnd:(g,p,j)=>{const C=jo.current,E=Tn.current;if(Tn.current=null,!(!C.size||!E)){for(const G of C){const he=document.querySelector(`[data-design-placement="${G}"]`);he&&(he.style.transform="")}j&&ut(G=>G.map(he=>{const ge=E.get(he.id);return ge?{...he,x:Math.max(0,ge.x+g),y:Math.max(0,ge.y+p)}:he}))}}}),o.jsx("canvas",{ref:Mo,className:`${re.drawCanvas} ${In?re.active:""}`,style:{opacity:Ds?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),o.jsxs("div",{className:re.markersLayer,"data-feedback-toolbar":!0,children:[Fe&&oo.filter(g=>!g.isFixed).map((g,p,j)=>o.jsx(xm,{annotation:g,globalIndex:oo.findIndex(C=>C.id===g.id),layerIndex:p,layerSize:j.length,isExiting:qe,isClearing:at,isAnimated:Rs.has(g.id),isHovered:!qe&&qt===g.id,isDeleting:tn===g.id,isEditingAny:!!Z,renumberFrom:Dn,markerClickBehavior:xt.markerClickBehavior,tooltipStyle:qi(g),onHoverEnter:C=>!qe&&C.id!==Ua.current&&qa(C),onHoverLeave:()=>qa(null),onClick:C=>xt.markerClickBehavior==="delete"?Bs(C.id):Ia(C),onContextMenu:Ia},g.id)),Fe&&!qe&&ao.filter(g=>!g.isFixed).map(g=>o.jsx(bm,{annotation:g},g.id))]}),o.jsxs("div",{className:re.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[Fe&&oo.filter(g=>g.isFixed).map((g,p,j)=>o.jsx(xm,{annotation:g,globalIndex:oo.findIndex(C=>C.id===g.id),layerIndex:p,layerSize:j.length,isExiting:qe,isClearing:at,isAnimated:Rs.has(g.id),isHovered:!qe&&qt===g.id,isDeleting:tn===g.id,isEditingAny:!!Z,renumberFrom:Dn,markerClickBehavior:xt.markerClickBehavior,tooltipStyle:qi(g),onHoverEnter:C=>!qe&&C.id!==Ua.current&&qa(C),onHoverLeave:()=>qa(null),onClick:C=>xt.markerClickBehavior==="delete"?Bs(C.id):Ia(C),onContextMenu:Ia},g.id)),Fe&&!qe&&ao.filter(g=>g.isFixed).map(g=>o.jsx(bm,{annotation:g,fixed:!0},g.id))]}),le&&o.jsxs("div",{className:re.overlay,"data-feedback-toolbar":!0,style:Y||Z?{zIndex:99999}:void 0,children:[ze?.rect&&!Y&&!mt&&!Ol&&o.jsx("div",{className:`${re.hoverHighlight} ${re.enter}`,style:{left:ze.rect.left,top:ze.rect.top,width:ze.rect.width,height:ze.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),on.filter(g=>document.contains(g.element)).map((g,p)=>{const j=g.element.getBoundingClientRect(),C=on.length>1;return o.jsx("div",{className:C?re.multiSelectOutline:re.singleSelectOutline,style:{position:"fixed",left:j.left,top:j.top,width:j.width,height:j.height,...C?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},p)}),qt&&!Y&&(()=>{const g=q.find(E=>E.id===qt);if(!g?.boundingBox)return null;if(g.elementBoundingBoxes?.length)return _n.length>0?_n.filter(E=>document.contains(E)).map((E,G)=>{const he=E.getBoundingClientRect();return o.jsx("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:he.left,top:he.top,width:he.width,height:he.height}},`hover-outline-live-${G}`)}):g.elementBoundingBoxes.map((E,G)=>o.jsx("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:E.x,top:E.y-nt,width:E.width,height:E.height}},`hover-outline-${G}`));const p=kn&&document.contains(kn)?kn.getBoundingClientRect():null,j=p?{x:p.left,y:p.top,width:p.width,height:p.height}:{x:g.boundingBox.x,y:g.isFixed?g.boundingBox.y:g.boundingBox.y-nt,width:g.boundingBox.width,height:g.boundingBox.height},C=g.isMultiSelect;return o.jsx("div",{className:`${C?re.multiSelectOutline:re.singleSelectOutline} ${re.enter}`,style:{left:j.x,top:j.y,width:j.width,height:j.height,...C?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ze&&!Y&&!mt&&!Ol&&o.jsxs("div",{className:`${re.hoverTooltip} ${re.enter}`,style:{left:Math.max(8,Math.min(v.x,window.innerWidth-100)),top:Math.max(v.y-(ze.reactComponents?48:32),8)},children:[ze.reactComponents&&o.jsx("div",{className:re.hoverReactPath,children:ze.reactComponents}),o.jsx("div",{className:re.hoverElementName,children:ze.elementName})]}),Y&&o.jsxs(o.Fragment,{children:[Y.multiSelectElements?.length?Y.multiSelectElements.filter(g=>document.contains(g)).map((g,p)=>{const j=g.getBoundingClientRect();return o.jsx("div",{className:`${re.multiSelectOutline} ${xn?re.exit:re.enter}`,style:{left:j.left,top:j.top,width:j.width,height:j.height}},`pending-multi-${p}`)}):Y.targetElement&&document.contains(Y.targetElement)?(()=>{const g=Y.targetElement.getBoundingClientRect();return o.jsx("div",{className:`${re.singleSelectOutline} ${xn?re.exit:re.enter}`,style:{left:g.left,top:g.top,width:g.width,height:g.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():Y.boundingBox&&o.jsx("div",{className:`${Y.isMultiSelect?re.multiSelectOutline:re.singleSelectOutline} ${xn?re.exit:re.enter}`,style:{left:Y.boundingBox.x,top:Y.boundingBox.y-nt,width:Y.boundingBox.width,height:Y.boundingBox.height,...Y.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const g=Y.x,p=Y.isFixed?Y.y:Y.y-nt;return o.jsxs(o.Fragment,{children:[o.jsx(E1,{x:g,y:p,isMultiSelect:Y.isMultiSelect,isExiting:xn}),o.jsx(sc,{ref:Li,element:Y.element,selectedText:Y.selectedText,computedStyles:Y.computedStylesObj,placeholder:Y.element==="Area selection"?"What should change in this area?":Y.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:hc,onCancel:Ls,isExiting:xn,lightMode:!Pn,accentColor:Y.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,g/100*window.innerWidth)),...p>window.innerHeight-290?{bottom:window.innerHeight-p+20}:{top:p+20}}})]})})()]}),Z&&o.jsxs(o.Fragment,{children:[Z.elementBoundingBoxes?.length?ct.length>0?ct.filter(g=>document.contains(g)).map((g,p)=>{const j=g.getBoundingClientRect();return o.jsx("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:j.left,top:j.top,width:j.width,height:j.height}},`edit-multi-live-${p}`)}):Z.elementBoundingBoxes.map((g,p)=>o.jsx("div",{className:`${re.multiSelectOutline} ${re.enter}`,style:{left:g.x,top:g.y-nt,width:g.width,height:g.height}},`edit-multi-${p}`)):(()=>{const g=st&&document.contains(st)?st.getBoundingClientRect():null,p=g?{x:g.left,y:g.top,width:g.width,height:g.height}:Z.boundingBox?{x:Z.boundingBox.x,y:Z.isFixed?Z.boundingBox.y:Z.boundingBox.y-nt,width:Z.boundingBox.width,height:Z.boundingBox.height}:null;return p?o.jsx("div",{className:`${Z.isMultiSelect?re.multiSelectOutline:re.singleSelectOutline} ${re.enter}`,style:{left:p.x,top:p.y,width:p.width,height:p.height,...Z.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),o.jsx(sc,{ref:Bi,element:Z.element,selectedText:Z.selectedText,computedStyles:jp(Z.computedStyles),placeholder:"Edit your feedback...",initialValue:Z.comment,submitLabel:"Save",onSubmit:mc,onCancel:$s,onDelete:()=>Bs(Z.id),isExiting:Ba,lightMode:!Pn,accentColor:Z.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const g=Z.isFixed?Z.y:Z.y-nt;return{left:Math.max(160,Math.min(window.innerWidth-160,Z.x/100*window.innerWidth)),...g>window.innerHeight-290?{bottom:window.innerHeight-g+20}:{top:g+20}}})()})]}),Ol&&o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:Kl,className:re.dragSelection}),o.jsx("div",{ref:Ro,className:re.highlightsContainer})]})]})]}),document.body)}function vd(a){if(!a||!a.key)return"";const r=String(a.key).replace(/_(line|fill)$/u,"");return a.kind==="fill"?`/fill-icons/${r}.svg`:`/line-icons/${r}.svg`}const Y1={approve_line:"approve.svg",card_list_view_line:"card_list_view.svg",chevron_down_line:"chevron_down.svg",chevron_up_line:"chevron_up.svg",close_line:"close.svg",close_sm_line:"close_sm.svg",grid_view_sm_line:"grid_view_sm.svg",plus_circle_fill:"plus circle.svg",preview_line:"preview.svg"};function X1(a){const r=String(a||"").match(/icon--([a-z0-9_]+)_(line|fill)\b/u);if(!r)return"";const[,c,u]=r,_=`${c}_${u}`,f=u==="fill"?"/fill-icons":"/line-icons",x=Y1[_]||`${c}.svg`;return`${f}/${encodeURIComponent(x)}`}function I1(){return[24,32,48,64]}function la({glyphClassName:a,fallbackClassName:r="",hasGeneratedFontStyles:c,style:u,..._}){if(c)return o.jsx("i",{className:a,style:u,..._});const f=X1(a);return f?o.jsx("img",{className:`ui-icon-fallback ${r}`.trim(),src:f,style:u,..._}):null}function vs({value:a,options:r,getValue:c,getLabel:u,renderLabel:_,renderOption:f,onChange:x,hasGeneratedFontStyles:R,className:b="",triggerClassName:k="",menuClassName:M="",align:A="up",menuAlign:T="left"}){const[ne,$]=m.useState(!1),le=m.useRef(null),U=m.useRef(null),q=m.useRef(null),[me,pe]=m.useState(null),be=r.find(K=>c(K)===a)||r[0];m.useEffect(()=>{function K(Ee){!le.current?.contains(Ee.target)&&!q.current?.contains(Ee.target)&&$(!1)}return document.addEventListener("mousedown",K),()=>document.removeEventListener("mousedown",K)},[]),m.useLayoutEffect(()=>{if(!ne||!U.current||!q.current)return;function K(){const Ee=U.current.getBoundingClientRect(),ae=q.current.getBoundingClientRect(),Fe=window.innerWidth,Re=window.innerHeight,qe=12,tt=10,ze=Re-Ee.bottom-tt-qe,Xe=Ee.top-tt-qe;let v=T==="right"?Ee.right-ae.width:Ee.left;v=Math.max(qe,Math.min(v,Fe-ae.width-qe));const F=A==="down",Y=!F&&Xe<ae.height&&ze>Xe,ye=F&&ze<ae.height&&Xe>ze,ve=Y||!ye&&F,S=Math.max(120,ve?ze:Xe);Math.min(ae.height,S),pe({position:"fixed",top:ve?`${Math.max(qe,Ee.bottom+tt)}px`:"auto",bottom:ve?"auto":`${Math.max(qe,Re-Ee.top+tt)}px`,left:`${v}px`,maxHeight:`${Math.floor(S)}px`,overflowY:"auto"})}return K(),window.addEventListener("resize",K),window.addEventListener("scroll",K,!0),()=>{window.removeEventListener("resize",K),window.removeEventListener("scroll",K,!0)}},[A,T,ne,r.length]);const et=ne?"icon icon--chevron_up_line dropdown-trigger-icon":"icon icon--chevron_down_line dropdown-trigger-icon",Je=o.jsx("div",{ref:q,className:`dropdown-menu dropdown-menu--portal dropdown-menu--${A} ${ne?"open":""} ${M}`.trim(),role:"listbox",style:me||void 0,children:r.map(K=>{const Ee=c(K),ae=Ee===a;return o.jsxs("button",{type:"button",className:`dropdown-option ${ae?"active":""}`,"aria-selected":ae,onClick:()=>{x(Ee),$(!1)},children:[f?f(K):o.jsx("span",{children:u(K)}),ae?o.jsx(la,{glyphClassName:"icon icon--approve_line dropdown-option-check",fallbackClassName:"dropdown-option-check",hasGeneratedFontStyles:R,"aria-hidden":"true",alt:"",style:{width:"18px",height:"18px"}}):null]},Ee)})});return o.jsxs("div",{ref:le,className:`dropdown ${A==="down"?"dropdown--down":"dropdown--up"} ${ne?"open":""} ${b}`.trim(),children:[o.jsxs("button",{ref:U,type:"button",className:`dropdown-trigger ${k}`.trim(),"aria-haspopup":"listbox","aria-expanded":ne,onClick:()=>$(K=>!K),children:[o.jsx("span",{children:be?_?_(be):u(be):""}),o.jsx(la,{glyphClassName:et,fallbackClassName:"dropdown-trigger-icon",hasGeneratedFontStyles:R,"aria-hidden":"true",alt:"",style:{width:"18px",height:"18px"}})]}),typeof document<"u"?Td.createPortal(Je,document.body):null]})}function q1({heroScrolled:a,lastBuiltAt:r,formatTimestamp:c,viewMode:u,onToggleViewMode:_,hasGeneratedFontStyles:f,sortMode:x,sortOptions:R,onChangeSortMode:b,summary:k}){const M=u==="grid"?"리스트 카드 형식으로 전환":"그리드 카드 형식으로 전환",A=u==="grid"?"icon icon--grid_view_sm_line hero-view-icon":"icon icon--card_list_view_line hero-view-icon";return o.jsxs("section",{className:`library-hero ${a?"is-scrolled":""}`,children:[o.jsx("div",{className:"library-hero-gradient","aria-hidden":"true"}),o.jsxs("div",{className:"hero-meta",children:[o.jsx("span",{className:`meta-pill ${r?"success":""}`,children:r?c(r):"빌드 대기"}),o.jsxs("div",{className:"hero-meta-actions",children:[o.jsxs("button",{type:"button",className:"hero-view-toggle","aria-pressed":u==="list","aria-label":"카드 표시 형식 전환","data-tooltip":M,onClick:_,children:[o.jsx(la,{glyphClassName:A,fallbackClassName:"hero-view-icon",hasGeneratedFontStyles:f,"aria-hidden":"true",alt:"",style:{width:"18px",height:"18px"}}),o.jsx("span",{children:u==="grid"?"Grid":"List"})]}),o.jsx("div",{className:"hero-sort-wrap",children:o.jsx(vs,{value:x,options:R,getValue:T=>T.key,getLabel:T=>T.label,onChange:b,hasGeneratedFontStyles:f,className:"hero-sort",triggerClassName:"hero-sort-trigger",align:"down",menuAlign:"right"})}),o.jsx("div",{className:"hero-summary-pill hidden","aria-hidden":"true",children:k})]})]})]})}function Q1({category:a,categoryOptions:r,getCategoryLabel:c,onChangeCategory:u,kind:_,kindOptions:f,getKindLabel:x,onChangeKind:R,query:b,onChangeQuery:k,weight:M,weightOptions:A,onChangeWeight:T,previewSize:ne,sizeOptions:$,onChangePreviewSize:le,palette:U,paletteOptions:q,paletteSwatches:me,hasGeneratedFontStyles:pe,onChangePalette:be,uploading:et,uploadInputRef:Je,onOpenUpload:K,onUploadChange:Ee}){return o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"bottom-controller-dim","aria-hidden":"true",children:[o.jsx("span",{className:"bottom-controller-dim-layer layer-1"}),o.jsx("span",{className:"bottom-controller-dim-layer layer-2"}),o.jsx("span",{className:"bottom-controller-dim-layer layer-3"}),o.jsx("span",{className:"bottom-controller-dim-layer layer-4"}),o.jsx("span",{className:"bottom-controller-dim-layer layer-5"}),o.jsx("span",{className:"bottom-controller-dim-overlay"})]}),o.jsxs("aside",{className:"bottom-controller","aria-label":"웹폰트 미리보기 컨트롤러",children:[o.jsx("div",{className:"controller-group",children:o.jsx(vs,{value:a,options:r,getValue:ae=>ae.key,getLabel:ae=>`${c(ae.key)} (${ae.count})`,onChange:u,hasGeneratedFontStyles:pe,className:"category-dropdown",triggerClassName:"category-trigger",menuClassName:"category-menu"})}),o.jsx("div",{className:"controller-group",children:o.jsx(vs,{value:_,options:f,getValue:ae=>ae.key,getLabel:ae=>ae.key==="all"?x(ae.key):`${x(ae.key)} (${ae.count})`,onChange:R,hasGeneratedFontStyles:pe,className:"kind-dropdown",triggerClassName:"kind-trigger",menuClassName:"kind-menu"})}),o.jsx("div",{className:"controller-group controller-search-group",children:o.jsx("div",{className:`search-combo controller-search ${b?"has-value":""}`,children:o.jsxs("div",{className:"search-combo-shell",children:[o.jsx("input",{className:"search-field",type:"search",placeholder:"아이콘 검색",value:b,onChange:ae=>k(ae.target.value)}),o.jsx("button",{type:"button",className:"search-clear-button","aria-label":"검색어 지우기",onClick:()=>k(""),children:o.jsx(la,{glyphClassName:"icon icon--close_sm_line",fallbackClassName:"search-clear-icon",hasGeneratedFontStyles:pe,"aria-hidden":"true",alt:"",style:{width:"16px",height:"16px"}})})]})})}),o.jsx("div",{className:"controller-group",children:o.jsx(vs,{value:M,options:A,getValue:ae=>ae.key,getLabel:ae=>ae.label,onChange:T,hasGeneratedFontStyles:pe,className:"weight-dropdown",triggerClassName:"weight-trigger",menuClassName:"weight-menu"})}),o.jsx("div",{className:"controller-group",children:o.jsx(vs,{value:ne,options:$,getValue:ae=>ae,getLabel:ae=>ae,onChange:le,hasGeneratedFontStyles:pe,className:"size-dropdown",triggerClassName:"size-trigger",menuClassName:"size-menu"})}),o.jsx("div",{className:"controller-group",children:o.jsx(vs,{value:U,options:q,getValue:ae=>ae,getLabel:ae=>ae,renderLabel:ae=>o.jsxs("span",{className:"palette-trigger-content",children:[o.jsx("span",{className:"palette-trigger-swatch",style:{"--swatch":me[ae]||"#1e1f24"}}),o.jsx("span",{children:ae})]}),renderOption:ae=>o.jsxs("span",{className:"palette-option-content",children:[o.jsx("span",{className:"palette-option-swatch",style:{"--swatch":me[ae]||"#1e1f24"}}),o.jsx("span",{className:"palette-option-label",children:ae})]}),onChange:be,hasGeneratedFontStyles:pe,className:"palette-dropdown",triggerClassName:"palette-trigger",menuClassName:"palette-menu"})}),o.jsxs("div",{className:"controller-group controller-upload-group",children:[o.jsx("button",{type:"button",className:"upload-button","aria-label":et?"SVG 업로드 중":"SVG 업로드","data-tooltip":et?"업로드 중":"SVG 업로드",disabled:et,onClick:K,children:o.jsx(la,{glyphClassName:"icon icon--plus_circle_fill upload-button-icon",fallbackClassName:"upload-button-icon",hasGeneratedFontStyles:pe,"aria-hidden":"true",alt:"",style:{width:"40px",height:"40px"}})}),o.jsx("input",{ref:Je,className:"visually-hidden",type:"file",accept:".svg,image/svg+xml",multiple:!0,onChange:ae=>Ee(ae.target.files)})]})]})]})}function W1({icon:a,viewMode:r,selected:c,hasGeneratedFontStyles:u,previewSize:_,previewColor:f,previewWeightValue:x,getSourceIconUrl:R,getCategoryLabel:b,setSelectedIcon:k,setOpenListMenuKey:M,openListMenuKey:A,handleListAction:T}){return o.jsx("article",{className:`icon-card ${r==="list"?"list-card":"grid-card"} ${c?"detail-active":""}`,onClick:()=>k(a),children:o.jsxs("div",{className:"icon-card-surface",children:[r==="grid"?o.jsxs("div",{className:"card-top",children:[o.jsx("span",{className:`kind-pill ${a.kind}`,children:a.kind}),o.jsx("span",{className:"card-subtitle",children:b(a.category)})]}):null,o.jsx("div",{className:r==="list"?"list-card-preview card-preview-stage":"card-icon-wrap card-preview-stage",children:u?o.jsx("i",{className:`icon library-icon ${a.className}`,"aria-hidden":"true",style:{fontSize:r==="list"?"36px":_,color:f,fontWeight:x}}):o.jsx("img",{className:"library-icon-fallback","aria-hidden":"true",alt:"",src:R(a),style:{width:r==="list"?"36px":_,height:r==="list"?"36px":_}})}),o.jsxs("div",{className:r==="list"?"list-card-main":"card-label",children:[o.jsx("strong",{className:"icon-card-title",children:a.displayName}),r==="list"?o.jsx("div",{className:"list-card-search-terms",children:[a.category,...a.keywords.slice(0,2),...a.synonyms.slice(0,1)].filter(Boolean).join(" · ")}):null]}),r==="list"?o.jsxs("div",{className:"list-card-actions","aria-label":`${a.displayName} 액션`,children:[o.jsxs("div",{className:"list-card-meta",children:[o.jsx("span",{className:"list-card-meta-chip",children:b(a.category)}),o.jsx("span",{className:"list-card-meta-chip",children:a.kind})]}),o.jsxs("div",{className:`list-action-group ${A===a.key?"open":""}`,onClick:ne=>ne.stopPropagation(),children:[o.jsxs("button",{type:"button",className:"list-action-main glyph-copy-button",onClick:ne=>{ne.stopPropagation(),M($=>$===a.key?null:a.key)},children:[o.jsx("span",{children:"복사하기"}),o.jsx("span",{className:"list-action-main-chevron",children:"˅"})]}),o.jsxs("div",{className:"list-action-menu",children:[o.jsx("button",{type:"button",className:"list-action-item",onClick:ne=>T(ne,"copy-glyph",a),children:"글리프 키 복사"}),o.jsx("button",{type:"button",className:"list-action-item",onClick:ne=>T(ne,"copy-class",a),children:"클래스 복사"}),o.jsx("button",{type:"button",className:"list-action-item",onClick:ne=>T(ne,"copy-name",a),children:"아이콘 이름 복사"}),o.jsx("button",{type:"button",className:"list-action-item",onClick:ne=>T(ne,"copy-svg",a),children:"SVG 복사"}),o.jsx("button",{type:"button",className:"list-action-item",onClick:ne=>T(ne,"download-png",a),children:"PNG 다운로드"})]}),o.jsx("button",{type:"button",className:"list-copy-button svg-download-button",onClick:ne=>T(ne,"download-svg",a),children:"SVG 다운로드"})]})]}):null]})})}function G1({selectedIcon:a,onClose:r,getCategoryLabel:c,hasGeneratedFontStyles:u,getSourceIconUrl:_,copyText:f,copySvgSource:x,downloadSvgSource:R,downloadPng:b,showToast:k,detailEditing:M,setDetailEditing:A,detailDirty:T,detailSaving:ne,detailSaveError:$,saveDetailDraft:le,setDetailSaveError:U,setDetailTokenInputs:q,setDetailDraft:me,detailDraft:pe,libraryCategories:be,removeDetailToken:et,detailTokenInputs:Je,commitDetailToken:K}){const[Ee,ae]=m.useState(null),[Fe,Re]=m.useState(""),qe=m.useRef(null);if(m.useEffect(()=>{function v(F){qe.current?.contains(F.target)||ae(null)}return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[]),m.useEffect(()=>{ae(null)},[a]),m.useEffect(()=>{let v=!1;async function F(){if(!a){Re("");return}try{const Y=await fetch(_(a),{cache:"no-store"});if(!Y.ok)throw new Error("원본 SVG를 불러오지 못했습니다.");const ye=await Y.text();if(v)return;const I=new DOMParser().parseFromString(ye,"image/svg+xml").querySelector("svg");if(!I){Re("");return}I.classList.add("icon-detail-source-svg"),I.setAttribute("aria-hidden","true"),I.setAttribute("focusable","false"),I.querySelectorAll("path, circle, rect, line, polyline, polygon, ellipse").forEach(ce=>ce.classList.add("icon-detail-source-vector-node")),Re(I.outerHTML)}catch{v||Re("")}}return F(),()=>{v=!0}},[_,a]),!a)return null;const tt=Array.from(new Set([...a.keywords||[],...a.synonyms||[]].filter(Boolean))),ze=a.createdVersion||"미정",Xe=a.lastChangedVersion||"미정";return o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"icon-detail-sheet-backdrop is-open",onClick:r}),o.jsx("section",{className:"icon-detail-sheet is-open",role:"dialog","aria-modal":"true","aria-labelledby":"iconDetailTitle",children:o.jsxs("div",{className:"icon-detail-sheet-shell",children:[o.jsxs("div",{className:"icon-detail-sheet-header",children:[o.jsx("div",{className:"icon-detail-title-block",children:o.jsx("h2",{id:"iconDetailTitle",className:"icon-detail-title",children:a.displayName})}),o.jsx("div",{className:"icon-detail-header-actions",children:M?o.jsxs(o.Fragment,{children:[o.jsx("button",{type:"button",className:"icon-detail-edit-button",onClick:()=>{A(!1),U(""),q({keywords:"",synonyms:""}),me({displayName:a.displayName||"",category:a.category||"misc",keywords:tt,synonyms:[]})},children:"취소"}),T?o.jsx("span",{className:"icon-detail-unsaved-badge",children:"Unsaved"}):null,o.jsx("button",{type:"button",className:"icon-detail-edit-button",onClick:le,disabled:ne,children:ne?"저장 중":"저장"})]}):o.jsx("button",{type:"button",className:"icon-detail-edit-button",onClick:()=>{U(""),A(!0)},children:"편집"})}),o.jsx("button",{className:"icon-detail-close",type:"button",onClick:r,children:o.jsx(la,{glyphClassName:"icon icon--close_sm_line",fallbackClassName:"icon-detail-close-icon",hasGeneratedFontStyles:u,"aria-hidden":"true",alt:"",style:{width:"20px",height:"20px"}})})]}),o.jsxs("div",{className:"icon-detail-sheet-body icon-detail-sheet-body--phase2",children:[o.jsx("div",{className:"icon-detail-source-panel",children:o.jsx("div",{className:"icon-detail-source-stage",children:Fe?o.jsx("div",{className:"icon-detail-source-image icon-detail-source-inline-svg",dangerouslySetInnerHTML:{__html:Fe}}):null})}),o.jsxs("div",{className:"icon-detail-webfont-panel",children:[o.jsxs("div",{className:"icon-detail-metadata-stack",children:[$?o.jsx("div",{className:"icon-detail-save-error",children:$}):null,o.jsxs("div",{className:"icon-detail-metadata",children:[o.jsxs("div",{className:"icon-detail-metadata-groups",children:[o.jsxs("div",{className:"icon-detail-metadata-group",children:[o.jsxs("div",{className:"icon-detail-metadata-row",children:[o.jsx("span",{className:"icon-detail-info-label",children:"표시 이름"}),M?o.jsx("div",{className:"icon-detail-edit-fields",children:o.jsx("input",{className:"icon-detail-text-input",type:"text",value:pe?.displayName||"",onChange:v=>me(F=>({...F,displayName:v.target.value}))})}):o.jsx("div",{className:"icon-detail-info-value icon-detail-read-value",children:a.displayName})]}),o.jsxs("div",{className:"icon-detail-metadata-row",children:[o.jsx("span",{className:"icon-detail-info-label",children:"카테고리"}),M?o.jsx("div",{className:"icon-detail-edit-fields",children:o.jsx("select",{className:"icon-detail-select-input",value:pe?.category||"misc",onChange:v=>me(F=>({...F,category:v.target.value})),children:be.filter(v=>v!=="all").map(v=>o.jsx("option",{value:v,children:c(v)},v))})}):o.jsx("div",{className:"icon-detail-info-value icon-detail-read-value",children:c(a.category)})]})]}),o.jsxs("div",{className:"icon-detail-metadata-group icon-detail-metadata-group--versions","aria-label":"아이콘 버전 정보",children:[o.jsxs("div",{className:"icon-detail-metadata-row",children:[o.jsx("span",{className:"icon-detail-info-label",children:"생성 버전"}),o.jsx("div",{className:"icon-detail-info-value icon-detail-read-value icon-detail-version-value",children:ze})]}),o.jsxs("div",{className:"icon-detail-metadata-row",children:[o.jsx("span",{className:"icon-detail-info-label",children:"최근 변경"}),o.jsx("div",{className:"icon-detail-info-value icon-detail-read-value icon-detail-version-value",children:Xe})]})]})]}),o.jsxs("div",{className:"icon-detail-metadata-row",children:[o.jsx("span",{className:"icon-detail-info-label",children:"검색어"}),M?o.jsx("div",{className:"icon-detail-edit-fields",children:o.jsxs("div",{className:"icon-detail-token-editor",children:[o.jsx("div",{className:"icon-detail-token-list",children:(pe?.keywords||[]).map((v,F)=>o.jsxs("span",{className:"icon-detail-token",children:[o.jsx("span",{children:v}),o.jsx("button",{type:"button",className:"icon-detail-token-remove","aria-label":`${v} 제거`,onClick:()=>et("keywords",F),children:"×"})]},`${v}-${F}`))}),o.jsx("input",{className:"icon-detail-token-input",type:"text",placeholder:"키워드 추가 후 Enter",value:Je.keywords,onChange:v=>q(F=>({...F,keywords:v.target.value})),onBlur:()=>K("keywords"),onKeyDown:v=>{(v.key==="Enter"||v.key===",")&&(v.preventDefault(),K("keywords"))}})]})}):o.jsx("div",{className:"icon-detail-token-list icon-detail-read-value",children:tt.map(v=>o.jsx("span",{className:"icon-detail-token",children:v},v))})]})]})]}),o.jsxs("div",{className:"icon-detail-actions",ref:qe,children:[o.jsxs("div",{className:`detail-action-dropdown detail-copy-dropdown ${Ee==="copy"?"open":""}`,children:[o.jsxs("button",{type:"button",className:"detail-action-trigger",onClick:()=>ae(v=>v==="copy"?null:"copy"),children:[o.jsx("span",{children:"복사"}),o.jsx(la,{glyphClassName:`icon ${Ee==="copy"?"icon--chevron_up_line":"icon--chevron_down_line"} detail-action-trigger-icon`,fallbackClassName:"detail-action-trigger-icon",hasGeneratedFontStyles:u,"aria-hidden":"true",alt:"",style:{width:"18px",height:"18px"}})]}),o.jsxs("div",{className:"detail-action-menu",children:[o.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await x(a),k("SVG를 복사했습니다."),ae(null)}catch(v){k(v.message||"복사하지 못했습니다.","error")}},children:"SVG 복사"}),o.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await f(a.displayName),k("이름을 복사했습니다."),ae(null)}catch(v){k(v.message||"복사하지 못했습니다.","error")}},children:"이름 복사"})]})]}),o.jsxs("div",{className:`detail-action-dropdown detail-download-dropdown ${Ee==="download"?"open":""}`,children:[o.jsxs("button",{type:"button",className:"detail-action-trigger",onClick:()=>ae(v=>v==="download"?null:"download"),children:[o.jsx("span",{children:"다운로드"}),o.jsx(la,{glyphClassName:`icon ${Ee==="download"?"icon--chevron_up_line":"icon--chevron_down_line"} detail-action-trigger-icon`,fallbackClassName:"detail-action-trigger-icon",hasGeneratedFontStyles:u,"aria-hidden":"true",alt:"",style:{width:"18px",height:"18px"}})]}),o.jsxs("div",{className:"detail-action-menu",children:[o.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await R(a),k("SVG를 다운로드했습니다."),ae(null)}catch(v){k(v.message||"다운로드하지 못했습니다.","error")}},children:"SVG 다운로드"}),o.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await b(a),k("PNG를 다운로드했습니다."),ae(null)}catch(v){k(v.message||"다운로드하지 못했습니다.","error")}},children:"PNG 다운로드"})]})]})]})]})]})]})})]})}function V1({toast:a}){return a?o.jsx("div",{className:`status-toast visible ${a.type==="error"?"error":""}`,"aria-live":"polite",children:o.jsx("span",{children:a.message})}):null}function Z1({dragActive:a,uploading:r}){return o.jsx("div",{className:`drag-overlay ${a?"visible":""}`,"aria-hidden":a?"false":"true",children:o.jsxs("div",{className:`drag-overlay-card ${r?"is-build":""}`,children:[o.jsx("div",{className:"drag-overlay-kicker",children:"여기에 놓기"}),o.jsx("div",{className:"drag-overlay-title",children:"SVG를 놓으면 웹폰트 라이브러리에 바로 반영됩니다."}),o.jsx("p",{className:"drag-overlay-desc",children:"놓는 즉시 전체 폰트를 다시 빌드하고, 성공한 결과만 라이브러리에 표시합니다."}),o.jsx("div",{className:"drag-overlay-progress","aria-hidden":"true",children:o.jsx("div",{className:"drag-overlay-progress-bar"})})]})})}function K1(a={}){const r=Array.isArray(a.icons)?a.icons:[],c=Array.from(new Set(r.map(u=>u.category).filter(Boolean).sort((u,_)=>u.localeCompare(_))));return{icons:r,categories:["all",...c],lastBuiltAt:a.lastBuiltAt||null,hasGeneratedFontStyles:a.hasGeneratedFontStyles===!0}}function F1(a=[],r={}){const c=String(r.query||"").trim().toLowerCase(),u=r.category||"all",_=r.kind||"all";return a.filter(f=>{const x=!c||String(f.searchText||"").toLowerCase().includes(c),R=u==="all"||f.category===u,b=_==="all"||f.kind===_;return x&&R&&b})}function J1({resultCount:a=0,totalCount:r=0,category:c="all",kind:u="all",query:_=""}){const f=[`${a} of ${r} icons`];return _&&f.push(`for "${_}"`),(c!=="all"||u!=="all")&&f.push(`in ${c} / ${u}`),f.join(" ")}async function km(a=fetch){const r=await a("/api/library-icons");if(!r.ok)throw new Error(`Failed to load library icons (${r.status})`);return K1(await r.json())}function P1(a=[],r="name"){const c=[...a];return r==="category"?(c.sort((u,_)=>String(u.category||"").localeCompare(String(_.category||""))||String(u.displayName||"").localeCompare(String(_.displayName||""))||String(u.key||"").localeCompare(String(_.key||""))),c):(c.sort((u,_)=>String(u.displayName||"").localeCompare(String(_.displayName||""))||String(u.key||"").localeCompare(String(_.key||""))),c)}function ex(a=[]){const r=a.reduce((c,u)=>{const _=u.category||"misc";return c[_]=(c[_]||0)+1,c},{});return[{key:"all",count:a.length},...Object.keys(r).sort((c,u)=>c.localeCompare(u)).map(c=>({key:c,count:r[c]}))]}function tx(a=[]){const r=a.reduce((c,u)=>{const _=u.kind||"mixed";return c[_]=(c[_]||0)+1,c},{});return[{key:"all",count:a.length},...Object.keys(r).sort((c,u)=>c.localeCompare(u)).map(c=>({key:c,count:r[c]}))]}const nx=[{key:"name",label:"이름순"},{key:"category",label:"카테고리순"}],lx=[{key:"light",label:"Light"},{key:"regular",label:"Regular"},{key:"medium",label:"Medium"},{key:"semibold",label:"SemiBold"},{key:"bold",label:"Bold"}],ox={light:300,regular:400,medium:500,semibold:600,bold:700},ax=["16px","20px","24px","28px","32px","40px","48px","64px"],sx=["Ink","Signal Blue","Moss","Amber","Violet"],jm={Ink:"#1e1f24","Signal Blue":"#1f6fff",Moss:"#0f8b6d",Amber:"#b86a2d",Violet:"#7a3ff2"};function Cm(a=[],r=[]){return Array.from(new Set([...a||[],...r||[]].filter(Boolean)))}function wd(a){return!a||a==="all"?"전체":a.charAt(0).toUpperCase()+a.slice(1)}function Mm(a){return!a||a==="all"?"All kinds":a.charAt(0).toUpperCase()+a.slice(1)}function ix(a){return a?new Intl.DateTimeFormat("ko-KR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(a)):"Not built yet"}function Em(a,r){return a?.key?`${a.key}.${r}`:`icon.${r}`}function rx(){const a=typeof window<"u"&&window.location.hostname==="localhost"&&!0,[r,c]=m.useState({icons:[],categories:["all"],lastBuiltAt:null,hasGeneratedFontStyles:!1}),[u,_]=m.useState(!0),[f,x]=m.useState(""),[R,b]=m.useState(()=>Date.now()),[k,M]=m.useState(""),[A,T]=m.useState("all"),[ne,$]=m.useState("line"),[le,U]=m.useState("name"),[q,me]=m.useState("medium"),[pe,be]=m.useState("64px"),[et,Je]=m.useState("Ink"),[K,Ee]=m.useState("grid"),[ae,Fe]=m.useState(null),[Re,qe]=m.useState(!0),[tt,ze]=m.useState(null),[Xe,v]=m.useState(!1),[F,Y]=m.useState(null),[ye,ve]=m.useState(!1),[S,I]=m.useState(""),[ce,xe]=m.useState(null),[Oe,at]=m.useState(!1),[dt,qt]=m.useState(!1),[Et,kn]=m.useState(!1),[rn,_n]=m.useState([]),[Mn,tn]=m.useState({keywords:"",synonyms:""}),zn=m.useRef(null),Dn=m.useDeferredValue(k),yl=I1();m.useEffect(()=>{if(!ae){v(!1),Y(null),ve(!1),I(""),tn({keywords:"",synonyms:""});return}Y({displayName:ae.displayName||"",category:ae.category||"misc",keywords:Cm(ae.keywords,ae.synonyms),synonyms:[]}),tn({keywords:"",synonyms:""})},[ae]),m.useEffect(()=>{if(!ce)return;const Q=window.setTimeout(()=>xe(null),2200);return()=>window.clearTimeout(Q)},[ce]),m.useEffect(()=>{function Q(de){if(de.key==="Escape"){if(tt){ze(null);return}ae&&Fe(null)}}return document.addEventListener("keydown",Q),()=>document.removeEventListener("keydown",Q)},[tt,ae]),m.useEffect(()=>{function Q(Se){return Array.from(Se.dataTransfer?.types||[]).includes("Files")}function de(Se){!Q(Se)||Oe||(Se.preventDefault(),kn(!0))}function ue(Se){!Q(Se)||Oe||(Se.preventDefault(),kn(!0))}function fe(Se){Q(Se)&&(Se.preventDefault(),kn(!1))}async function ut(Se){!Q(Se)||Oe||(Se.preventDefault(),kn(!1),await Ct(Se.dataTransfer?.files))}return window.addEventListener("dragenter",de),window.addEventListener("dragover",ue),window.addEventListener("dragleave",fe),window.addEventListener("drop",ut),()=>{window.removeEventListener("dragenter",de),window.removeEventListener("dragover",ue),window.removeEventListener("dragleave",fe),window.removeEventListener("drop",ut)}},[Oe]),m.useEffect(()=>{function Q(){ze(null)}if(tt)return document.addEventListener("mousedown",Q),()=>document.removeEventListener("mousedown",Q)},[tt]),m.useEffect(()=>{let Q=!1;async function de(){try{_(!0),x("");const ue=await km();Q||(c(ue),b(Date.now()))}catch(ue){Q||x(ue.message||"Failed to load icon library")}finally{Q||_(!1)}}return de(),()=>{Q=!0}},[]);async function Z(){const Q=await km();c(Q),b(Date.now())}const De=m.useMemo(()=>ex(r.icons),[r.icons]),st=m.useMemo(()=>tx(r.icons),[r.icons]),Ie=m.useMemo(()=>{const Q=F1(r.icons,{query:Dn,category:A,kind:ne});return P1(Q,le)},[r.icons,Dn,A,ne,le]),ct=J1({resultCount:Ie.length,totalCount:r.icons.length,category:A,kind:ne,query:Dn.trim()}),vt=jm[et]||"#1e1f24",nt=ox[q]||500;function Qe(Q,de="success"){xe({message:Q,type:de})}async function mt(Q){Q&&await navigator.clipboard.writeText(Q)}async function At(Q){const de=await fetch(vd(Q),{cache:"no-store"});if(!de.ok)throw new Error("원본 SVG를 불러오지 못했습니다.");return de.text()}function Ae(Q,de){const ue=URL.createObjectURL(Q),fe=document.createElement("a");fe.href=ue,fe.download=de,document.body.appendChild(fe),fe.click(),fe.remove(),setTimeout(()=>URL.revokeObjectURL(ue),0)}async function D(Q){const de=await At(Q);await navigator.clipboard.writeText(de)}async function L(Q){const de=await At(Q),ue=new Blob([de],{type:"image/svg+xml;charset=utf-8"});Ae(ue,Em(Q,"svg"))}async function P(Q){const de=await At(Q),ue=new Blob([de],{type:"image/svg+xml;charset=utf-8"}),fe=URL.createObjectURL(ue);try{const ut=await new Promise((lt,En)=>{const Kt=new Image;Kt.onload=()=>lt(Kt),Kt.onerror=()=>En(new Error("PNG 렌더링용 SVG를 읽지 못했습니다.")),Kt.src=fe}),Se=document.createElement("canvas"),$e=256;Se.width=$e,Se.height=$e;const pt=Se.getContext("2d");if(!pt)throw new Error("PNG 캔버스를 만들지 못했습니다.");return pt.clearRect(0,0,$e,$e),pt.drawImage(ut,0,0,$e,$e),await new Promise((lt,En)=>{Se.toBlob(Kt=>{if(Kt){lt(Kt);return}En(new Error("PNG 데이터 생성에 실패했습니다."))},"image/png")})}finally{URL.revokeObjectURL(fe)}}async function oe(Q){const de=await P(Q);Ae(de,Em(Q,"png"))}async function ke(Q,de,ue){Q.stopPropagation(),ze(null);try{if(de==="copy-class"){await mt(ue.className),Qe("클래스를 복사했습니다.");return}if(de==="copy-name"){await mt(ue.displayName),Qe("아이콘 이름을 복사했습니다.");return}if(de==="copy-svg"){await D(ue),Qe("SVG를 복사했습니다.");return}if(de==="download-svg"){await L(ue),Qe("SVG를 다운로드했습니다.");return}if(de==="download-png"){await oe(ue),Qe("PNG를 다운로드했습니다.");return}await mt(ue.key),Qe("글리프 키를 복사했습니다.")}catch(fe){Qe(fe.message||"액션을 처리하지 못했습니다.","error")}}function _e(Q){c(de=>({...de,icons:de.icons.map(ue=>ue.key===Q.key?{...ue,displayName:Q.displayName,category:Q.category,keywords:[...Q.keywords],synonyms:[...Q.synonyms],searchText:[Q.displayName,Q.category,...Q.keywords||[],...Q.synonyms||[]].join(" ").toLowerCase()}:ue)})),Fe(de=>de&&de.key===Q.key?{...de,displayName:Q.displayName,category:Q.category,keywords:[...Q.keywords],synonyms:[...Q.synonyms]}:de)}async function ie(){if(!(!ae||!F||ye)){ve(!0),I("");try{const Q=await fetch(`/api/icon-metadata/${encodeURIComponent(ae.key)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:F.displayName,category:F.category,keywords:F.keywords,synonyms:[]})}),de=await Q.json();if(!Q.ok)throw new Error(de.error||"메타데이터를 저장하지 못했습니다.");_e(de.icon),v(!1)}catch(Q){I(Q.message||"메타데이터를 저장하지 못했습니다.")}finally{ve(!1)}}}function Be(Q,de){Y(ue=>ue&&{...ue,[Q]:ue[Q].filter((fe,ut)=>ut!==de)})}function it(Q){const de=String(Mn[Q]||"").trim().replace(/\s+/g," ");de&&(Y(ue=>!ue||ue[Q].includes(de)?ue:{...ue,[Q]:[...ue[Q],de]}),tn(ue=>({...ue,[Q]:""})))}async function yt(Q){return await new Promise((de,ue)=>{const fe=new FileReader;fe.onload=()=>de(typeof fe.result=="string"?fe.result:""),fe.onerror=()=>ue(new Error(`${Q.name} 파일을 읽지 못했습니다.`)),fe.readAsText(Q)})}async function Ct(Q){const de=Array.from(Q||[]).filter(ue=>ue.name.toLowerCase().endsWith(".svg"));if(de.length===0){Qe("SVG 파일만 업로드할 수 있습니다.","error");return}at(!0),_n(de.map((ue,fe)=>({id:`${Date.now()}-${fe}`,label:ue.name.replace(/\.svg$/i,"")})));try{const ue=await Promise.all(de.map(async Se=>({name:Se.name,content:await yt(Se)}))),fe=await fetch("/api/upload-icons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:ue})}),ut=await fe.json();if(!fe.ok)throw new Error(ut.error||"SVG 업로드에 실패했습니다.");await Z(),Qe(`${de.length}개 SVG를 업로드했습니다.`)}catch(ue){Qe(ue.message||"SVG 업로드에 실패했습니다.","error")}finally{at(!1),_n([]),zn.current&&(zn.current.value="")}}const Te=!!ae&&!!F&&(F.displayName!==(ae.displayName||"")||F.category!==(ae.category||"")||JSON.stringify(F.keywords||[])!==JSON.stringify(Cm(ae.keywords,ae.synonyms)));return o.jsxs("main",{className:"app-shell",children:[r.hasGeneratedFontStyles?o.jsx("link",{rel:"stylesheet",href:`/generated-fonts/my-icon-font.css?v=${R}`}):null,o.jsx("header",{className:"topbar",children:o.jsx("span",{className:"visually-hidden",children:"IconFactory"})}),o.jsx("main",{className:"content-scroll",onScroll:Q=>qt(Q.currentTarget.scrollTop>8),children:o.jsxs("div",{className:"library-shell",children:[o.jsx(q1,{heroScrolled:dt,lastBuiltAt:r.lastBuiltAt,formatTimestamp:ix,viewMode:K,onToggleViewMode:()=>Ee(Q=>Q==="grid"?"list":"grid"),hasGeneratedFontStyles:r.hasGeneratedFontStyles,sortMode:le,sortOptions:nx,onChangeSortMode:U,summary:ct}),o.jsxs("section",{className:`library-grid ${K==="list"?"list-view":""}`,"aria-live":"polite",children:[rn.map((Q,de)=>o.jsxs("article",{className:"pending-build-card",children:[o.jsx("div",{className:"pending-build-kicker",children:rn.length>1?`${de+1}/${rn.length}`:"변환 중"}),o.jsx("div",{className:"pending-build-title",children:"웹폰트로 변환 중"}),o.jsx("div",{className:"pending-build-name",children:Q.label}),o.jsx("p",{className:"pending-build-desc",children:"SVG를 정리하고 폰트를 빌드하고 있습니다"}),o.jsx("div",{className:"pending-build-progress","aria-hidden":"true",children:o.jsx("div",{className:"pending-build-progress-bar"})})]},Q.id)),f?o.jsx("article",{className:"empty-card error-state",children:o.jsxs("div",{children:[o.jsx("strong",{children:"빌드된 라이브러리를 불러오지 못했습니다."}),o.jsx("p",{children:f})]})}):null,!f&&!u&&Ie.length===0?o.jsx("article",{className:"empty-card",children:o.jsxs("div",{className:"empty-card-content",children:[o.jsx("strong",{children:"조건에 맞는 웹폰트 아이콘이 없습니다."}),o.jsx("p",{children:"검색어를 바꾸거나 카테고리를 다시 선택해보세요."})]})}):null,!f&&Ie.map(Q=>o.jsx(W1,{icon:Q,viewMode:K,selected:ae?.key===Q.key,hasGeneratedFontStyles:r.hasGeneratedFontStyles,previewSize:pe,previewColor:vt,previewWeightValue:nt,getSourceIconUrl:vd,getCategoryLabel:wd,setSelectedIcon:Fe,setOpenListMenuKey:ze,openListMenuKey:tt,handleListAction:ke,copyText:mt,showToast:Qe},Q.key))]})]})}),o.jsx(Q1,{category:A,categoryOptions:De,getCategoryLabel:wd,onChangeCategory:T,kind:ne,kindOptions:st,getKindLabel:Mm,onChangeKind:$,query:k,onChangeQuery:M,weight:q,weightOptions:lx,onChangeWeight:me,previewSize:pe,sizeOptions:ax,onChangePreviewSize:be,palette:et,paletteOptions:sx,paletteSwatches:jm,hasGeneratedFontStyles:r.hasGeneratedFontStyles,onChangePalette:Je,uploading:Oe,uploadInputRef:zn,onOpenUpload:()=>zn.current?.click(),onUploadChange:Ct}),o.jsx(G1,{selectedIcon:ae,onClose:()=>Fe(null),getCategoryLabel:wd,getKindLabel:Mm,detailKeylineVisible:Re,onToggleKeyline:()=>qe(Q=>!Q),detailPreviewSizes:yl,previewColor:vt,previewWeightValue:nt,hasGeneratedFontStyles:r.hasGeneratedFontStyles,getSourceIconUrl:vd,copyText:mt,copySvgSource:D,downloadSvgSource:L,downloadPng:oe,showToast:Qe,detailEditing:Xe,setDetailEditing:v,detailDirty:Te,detailSaving:ye,detailSaveError:S,saveDetailDraft:ie,setDetailSaveError:I,setDetailTokenInputs:tn,setDetailDraft:Y,detailDraft:F,libraryCategories:r.categories,removeDetailToken:Be,detailTokenInputs:Mn,commitDetailToken:it}),o.jsx(Z1,{dragActive:Et,uploading:Oe}),a?o.jsx(U1,{endpoint:"http://localhost:4747",className:"agentation-layer"}):null,o.jsx(V1,{toast:ce})]})}Sg.createRoot(document.getElementById("root")).render(o.jsx(Tm.StrictMode,{children:o.jsx(rx,{})}));
