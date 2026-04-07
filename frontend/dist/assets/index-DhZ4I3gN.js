(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const _ of document.querySelectorAll('link[rel="modulepreload"]'))u(_);new MutationObserver(_=>{for(const f of _)if(f.type==="childList")for(const b of f.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&u(b)}).observe(document,{childList:!0,subtree:!0});function c(_){const f={};return _.integrity&&(f.integrity=_.integrity),_.referrerPolicy&&(f.referrerPolicy=_.referrerPolicy),_.crossOrigin==="use-credentials"?f.credentials="include":_.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(_){if(_.ep)return;_.ep=!0;const f=c(_);fetch(_.href,f)}})();function Mm(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var nd={exports:{}},pi={};var Yh;function _g(){if(Yh)return pi;Yh=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function c(u,_,f){var b=null;if(f!==void 0&&(b=""+f),_.key!==void 0&&(b=""+_.key),"key"in _){f={};for(var R in _)R!=="key"&&(f[R]=_[R])}else f=_;return _=f.ref,{$$typeof:o,type:u,key:b,ref:_!==void 0?_:null,props:f}}return pi.Fragment=r,pi.jsx=c,pi.jsxs=c,pi}var Xh;function fg(){return Xh||(Xh=1,nd.exports=_g()),nd.exports}var a=fg(),ld={exports:{}},_t={};var qh;function hg(){if(qh)return _t;qh=1;var o=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),b=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),T=Symbol.iterator;function de(S){return S===null||typeof S!="object"?null:(S=T&&S[T]||S["@@iterator"],typeof S=="function"?S:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},te=Object.assign,H={};function I(S,Q,ue){this.props=S,this.context=Q,this.refs=H,this.updater=ue||O}I.prototype.isReactComponent={},I.prototype.setState=function(S,Q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,Q,"setState")},I.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function he(){}he.prototype=I.prototype;function pe(S,Q,ue){this.props=S,this.context=Q,this.refs=H,this.updater=ue||O}var be=pe.prototype=new he;be.constructor=pe,te(be,I.prototype),be.isPureReactComponent=!0;var ct=Array.isArray;function we(){}var ee={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function tt(S,Q,ue){var ye=ue.ref;return{$$typeof:o,type:S,key:Q,ref:ye!==void 0?ye:null,props:ue}}function nt(S,Q){return tt(S.type,Q,S.props)}function Te(S){return typeof S=="object"&&S!==null&&S.$$typeof===o}function $e(S){var Q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(ue){return Q[ue]})}var Je=/\/+/g;function ke(S,Q){return typeof S=="object"&&S!==null&&S.key!=null?$e(""+S.key):Q.toString(36)}function Ye(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(we,we):(S.status="pending",S.then(function(Q){S.status==="pending"&&(S.status="fulfilled",S.value=Q)},function(Q){S.status==="pending"&&(S.status="rejected",S.reason=Q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function x(S,Q,ue,ye,qe){var ut=typeof S;(ut==="undefined"||ut==="boolean")&&(S=null);var dt=!1;if(S===null)dt=!0;else switch(ut){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(S.$$typeof){case o:case r:dt=!0;break;case k:return dt=S._init,x(dt(S._payload),Q,ue,ye,qe)}}if(dt)return qe=qe(S),dt=ye===""?"."+ke(S,0):ye,ct(qe)?(ue="",dt!=null&&(ue=dt.replace(Je,"$&/")+"/"),x(qe,Q,ue,"",function(Mn){return Mn})):qe!=null&&(Te(qe)&&(qe=nt(qe,ue+(qe.key==null||S&&S.key===qe.key?"":(""+qe.key).replace(Je,"$&/")+"/")+dt)),Q.push(qe)),1;dt=0;var It=ye===""?".":ye+":";if(ct(S))for(var Ct=0;Ct<S.length;Ct++)ye=S[Ct],ut=It+ke(ye,Ct),dt+=x(ye,Q,ue,ut,qe);else if(Ct=de(S),typeof Ct=="function")for(S=Ct.call(S),Ct=0;!(ye=S.next()).done;)ye=ye.value,ut=It+ke(ye,Ct++),dt+=x(ye,Q,ue,ut,qe);else if(ut==="object"){if(typeof S.then=="function")return x(Ye(S),Q,ue,ye,qe);throw Q=String(S),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return dt}function J(S,Q,ue){if(S==null)return S;var ye=[],qe=0;return x(S,ye,"","",function(ut){return Q.call(ue,ut,qe++)}),ye}function q(S){if(S._status===-1){var Q=S._result;Q=Q(),Q.then(function(ue){(S._status===0||S._status===-1)&&(S._status=1,S._result=ue)},function(ue){(S._status===0||S._status===-1)&&(S._status=2,S._result=ue)}),S._status===-1&&(S._status=0,S._result=Q)}if(S._status===1)return S._result.default;throw S._result}var me=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},Ee={map:J,forEach:function(S,Q,ue){J(S,function(){Q.apply(this,arguments)},ue)},count:function(S){var Q=0;return J(S,function(){Q++}),Q},toArray:function(S){return J(S,function(Q){return Q})||[]},only:function(S){if(!Te(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return _t.Activity=z,_t.Children=Ee,_t.Component=I,_t.Fragment=c,_t.Profiler=_,_t.PureComponent=pe,_t.StrictMode=u,_t.Suspense=v,_t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,_t.__COMPILER_RUNTIME={__proto__:null,c:function(S){return ee.H.useMemoCache(S)}},_t.cache=function(S){return function(){return S.apply(null,arguments)}},_t.cacheSignal=function(){return null},_t.cloneElement=function(S,Q,ue){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var ye=te({},S.props),qe=S.key;if(Q!=null)for(ut in Q.key!==void 0&&(qe=""+Q.key),Q)!oe.call(Q,ut)||ut==="key"||ut==="__self"||ut==="__source"||ut==="ref"&&Q.ref===void 0||(ye[ut]=Q[ut]);var ut=arguments.length-2;if(ut===1)ye.children=ue;else if(1<ut){for(var dt=Array(ut),It=0;It<ut;It++)dt[It]=arguments[It+2];ye.children=dt}return tt(S.type,qe,ye)},_t.createContext=function(S){return S={$$typeof:b,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:f,_context:S},S},_t.createElement=function(S,Q,ue){var ye,qe={},ut=null;if(Q!=null)for(ye in Q.key!==void 0&&(ut=""+Q.key),Q)oe.call(Q,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(qe[ye]=Q[ye]);var dt=arguments.length-2;if(dt===1)qe.children=ue;else if(1<dt){for(var It=Array(dt),Ct=0;Ct<dt;Ct++)It[Ct]=arguments[Ct+2];qe.children=It}if(S&&S.defaultProps)for(ye in dt=S.defaultProps,dt)qe[ye]===void 0&&(qe[ye]=dt[ye]);return tt(S,ut,qe)},_t.createRef=function(){return{current:null}},_t.forwardRef=function(S){return{$$typeof:R,render:S}},_t.isValidElement=Te,_t.lazy=function(S){return{$$typeof:k,_payload:{_status:-1,_result:S},_init:q}},_t.memo=function(S,Q){return{$$typeof:M,type:S,compare:Q===void 0?null:Q}},_t.startTransition=function(S){var Q=ee.T,ue={};ee.T=ue;try{var ye=S(),qe=ee.S;qe!==null&&qe(ue,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(we,me)}catch(ut){me(ut)}finally{Q!==null&&ue.types!==null&&(Q.types=ue.types),ee.T=Q}},_t.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},_t.use=function(S){return ee.H.use(S)},_t.useActionState=function(S,Q,ue){return ee.H.useActionState(S,Q,ue)},_t.useCallback=function(S,Q){return ee.H.useCallback(S,Q)},_t.useContext=function(S){return ee.H.useContext(S)},_t.useDebugValue=function(){},_t.useDeferredValue=function(S,Q){return ee.H.useDeferredValue(S,Q)},_t.useEffect=function(S,Q){return ee.H.useEffect(S,Q)},_t.useEffectEvent=function(S){return ee.H.useEffectEvent(S)},_t.useId=function(){return ee.H.useId()},_t.useImperativeHandle=function(S,Q,ue){return ee.H.useImperativeHandle(S,Q,ue)},_t.useInsertionEffect=function(S,Q){return ee.H.useInsertionEffect(S,Q)},_t.useLayoutEffect=function(S,Q){return ee.H.useLayoutEffect(S,Q)},_t.useMemo=function(S,Q){return ee.H.useMemo(S,Q)},_t.useOptimistic=function(S,Q){return ee.H.useOptimistic(S,Q)},_t.useReducer=function(S,Q,ue){return ee.H.useReducer(S,Q,ue)},_t.useRef=function(S){return ee.H.useRef(S)},_t.useState=function(S){return ee.H.useState(S)},_t.useSyncExternalStore=function(S,Q,ue){return ee.H.useSyncExternalStore(S,Q,ue)},_t.useTransition=function(){return ee.H.useTransition()},_t.version="19.2.4",_t}var Ih;function Md(){return Ih||(Ih=1,ld.exports=hg()),ld.exports}var m=Md();const Em=Mm(m);var ad={exports:{}},xi={},od={exports:{}},sd={};var Qh;function mg(){return Qh||(Qh=1,(function(o){function r(x,J){var q=x.length;x.push(J);e:for(;0<q;){var me=q-1>>>1,Ee=x[me];if(0<_(Ee,J))x[me]=J,x[q]=Ee,q=me;else break e}}function c(x){return x.length===0?null:x[0]}function u(x){if(x.length===0)return null;var J=x[0],q=x.pop();if(q!==J){x[0]=q;e:for(var me=0,Ee=x.length,S=Ee>>>1;me<S;){var Q=2*(me+1)-1,ue=x[Q],ye=Q+1,qe=x[ye];if(0>_(ue,q))ye<Ee&&0>_(qe,ue)?(x[me]=qe,x[ye]=q,me=ye):(x[me]=ue,x[Q]=q,me=Q);else if(ye<Ee&&0>_(qe,q))x[me]=qe,x[ye]=q,me=ye;else break e}}return J}function _(x,J){var q=x.sortIndex-J.sortIndex;return q!==0?q:x.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var b=Date,R=b.now();o.unstable_now=function(){return b.now()-R}}var v=[],M=[],k=1,z=null,T=3,de=!1,O=!1,te=!1,H=!1,I=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,pe=typeof setImmediate<"u"?setImmediate:null;function be(x){for(var J=c(M);J!==null;){if(J.callback===null)u(M);else if(J.startTime<=x)u(M),J.sortIndex=J.expirationTime,r(v,J);else break;J=c(M)}}function ct(x){if(te=!1,be(x),!O)if(c(v)!==null)O=!0,we||(we=!0,$e());else{var J=c(M);J!==null&&Ye(ct,J.startTime-x)}}var we=!1,ee=-1,oe=5,tt=-1;function nt(){return H?!0:!(o.unstable_now()-tt<oe)}function Te(){if(H=!1,we){var x=o.unstable_now();tt=x;var J=!0;try{e:{O=!1,te&&(te=!1,he(ee),ee=-1),de=!0;var q=T;try{t:{for(be(x),z=c(v);z!==null&&!(z.expirationTime>x&&nt());){var me=z.callback;if(typeof me=="function"){z.callback=null,T=z.priorityLevel;var Ee=me(z.expirationTime<=x);if(x=o.unstable_now(),typeof Ee=="function"){z.callback=Ee,be(x),J=!0;break t}z===c(v)&&u(v),be(x)}else u(v);z=c(v)}if(z!==null)J=!0;else{var S=c(M);S!==null&&Ye(ct,S.startTime-x),J=!1}}break e}finally{z=null,T=q,de=!1}J=void 0}}finally{J?$e():we=!1}}}var $e;if(typeof pe=="function")$e=function(){pe(Te)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,ke=Je.port2;Je.port1.onmessage=Te,$e=function(){ke.postMessage(null)}}else $e=function(){I(Te,0)};function Ye(x,J){ee=I(function(){x(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(x){x.callback=null},o.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<x?Math.floor(1e3/x):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_next=function(x){switch(T){case 1:case 2:case 3:var J=3;break;default:J=T}var q=T;T=J;try{return x()}finally{T=q}},o.unstable_requestPaint=function(){H=!0},o.unstable_runWithPriority=function(x,J){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var q=T;T=x;try{return J()}finally{T=q}},o.unstable_scheduleCallback=function(x,J,q){var me=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?me+q:me):q=me,x){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=q+Ee,x={id:k++,callback:J,priorityLevel:x,startTime:q,expirationTime:Ee,sortIndex:-1},q>me?(x.sortIndex=q,r(M,x),c(v)===null&&x===c(M)&&(te?(he(ee),ee=-1):te=!0,Ye(ct,q-me))):(x.sortIndex=Ee,r(v,x),O||de||(O=!0,we||(we=!0,$e()))),x},o.unstable_shouldYield=nt,o.unstable_wrapCallback=function(x){var J=T;return function(){var q=T;T=J;try{return x.apply(this,arguments)}finally{T=q}}}})(sd)),sd}var Wh;function gg(){return Wh||(Wh=1,od.exports=mg()),od.exports}var id={exports:{}},In={};var Gh;function yg(){if(Gh)return In;Gh=1;var o=Md();function r(v){var M="https://react.dev/errors/"+v;if(1<arguments.length){M+="?args[]="+encodeURIComponent(arguments[1]);for(var k=2;k<arguments.length;k++)M+="&args[]="+encodeURIComponent(arguments[k])}return"Minified React error #"+v+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function c(){}var u={d:{f:c,r:function(){throw Error(r(522))},D:c,C:c,L:c,m:c,X:c,S:c,M:c},p:0,findDOMNode:null},_=Symbol.for("react.portal");function f(v,M,k){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:_,key:z==null?null:""+z,children:v,containerInfo:M,implementation:k}}var b=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function R(v,M){if(v==="font")return"";if(typeof M=="string")return M==="use-credentials"?M:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,In.createPortal=function(v,M){var k=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M||M.nodeType!==1&&M.nodeType!==9&&M.nodeType!==11)throw Error(r(299));return f(v,M,null,k)},In.flushSync=function(v){var M=b.T,k=u.p;try{if(b.T=null,u.p=2,v)return v()}finally{b.T=M,u.p=k,u.d.f()}},In.preconnect=function(v,M){typeof v=="string"&&(M?(M=M.crossOrigin,M=typeof M=="string"?M==="use-credentials"?M:"":void 0):M=null,u.d.C(v,M))},In.prefetchDNS=function(v){typeof v=="string"&&u.d.D(v)},In.preinit=function(v,M){if(typeof v=="string"&&M&&typeof M.as=="string"){var k=M.as,z=R(k,M.crossOrigin),T=typeof M.integrity=="string"?M.integrity:void 0,de=typeof M.fetchPriority=="string"?M.fetchPriority:void 0;k==="style"?u.d.S(v,typeof M.precedence=="string"?M.precedence:void 0,{crossOrigin:z,integrity:T,fetchPriority:de}):k==="script"&&u.d.X(v,{crossOrigin:z,integrity:T,fetchPriority:de,nonce:typeof M.nonce=="string"?M.nonce:void 0})}},In.preinitModule=function(v,M){if(typeof v=="string")if(typeof M=="object"&&M!==null){if(M.as==null||M.as==="script"){var k=R(M.as,M.crossOrigin);u.d.M(v,{crossOrigin:k,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0})}}else M==null&&u.d.M(v)},In.preload=function(v,M){if(typeof v=="string"&&typeof M=="object"&&M!==null&&typeof M.as=="string"){var k=M.as,z=R(k,M.crossOrigin);u.d.L(v,k,{crossOrigin:z,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0,type:typeof M.type=="string"?M.type:void 0,fetchPriority:typeof M.fetchPriority=="string"?M.fetchPriority:void 0,referrerPolicy:typeof M.referrerPolicy=="string"?M.referrerPolicy:void 0,imageSrcSet:typeof M.imageSrcSet=="string"?M.imageSrcSet:void 0,imageSizes:typeof M.imageSizes=="string"?M.imageSizes:void 0,media:typeof M.media=="string"?M.media:void 0})}},In.preloadModule=function(v,M){if(typeof v=="string")if(M){var k=R(M.as,M.crossOrigin);u.d.m(v,{as:typeof M.as=="string"&&M.as!=="script"?M.as:void 0,crossOrigin:k,integrity:typeof M.integrity=="string"?M.integrity:void 0})}else u.d.m(v)},In.requestFormReset=function(v){u.d.r(v)},In.unstable_batchedUpdates=function(v,M){return v(M)},In.useFormState=function(v,M,k){return b.H.useFormState(v,M,k)},In.useFormStatus=function(){return b.H.useHostTransitionStatus()},In.version="19.2.4",In}var Vh;function Nm(){if(Vh)return id.exports;Vh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),id.exports=yg(),id.exports}var Zh;function pg(){if(Zh)return xi;Zh=1;var o=gg(),r=Md(),c=Nm();function u(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function _(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function b(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function R(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(u(188))}function M(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(u(188));return t!==e?null:e}for(var n=e,l=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(l=s.return,l!==null){n=l;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return v(s),e;if(i===l)return v(s),t;i=i.sibling}throw Error(u(188))}if(n.return!==l.return)n=s,l=i;else{for(var d=!1,h=s.child;h;){if(h===n){d=!0,n=s,l=i;break}if(h===l){d=!0,l=s,n=i;break}h=h.sibling}if(!d){for(h=i.child;h;){if(h===n){d=!0,n=i,l=s;break}if(h===l){d=!0,l=i,n=s;break}h=h.sibling}if(!d)throw Error(u(189))}}if(n.alternate!==l)throw Error(u(190))}if(n.tag!==3)throw Error(u(188));return n.stateNode.current===n?e:t}function k(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=k(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,T=Symbol.for("react.element"),de=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),he=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),be=Symbol.for("react.forward_ref"),ct=Symbol.for("react.suspense"),we=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),tt=Symbol.for("react.activity"),nt=Symbol.for("react.memo_cache_sentinel"),Te=Symbol.iterator;function $e(e){return e===null||typeof e!="object"?null:(e=Te&&e[Te]||e["@@iterator"],typeof e=="function"?e:null)}var Je=Symbol.for("react.client.reference");function ke(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Je?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case I:return"Profiler";case H:return"StrictMode";case ct:return"Suspense";case we:return"SuspenseList";case tt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O:return"Portal";case pe:return e.displayName||"Context";case he:return(e._context.displayName||"Context")+".Consumer";case be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case oe:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}var Ye=Array.isArray,x=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},me=[],Ee=-1;function S(e){return{current:e}}function Q(e){0>Ee||(e.current=me[Ee],me[Ee]=null,Ee--)}function ue(e,t){Ee++,me[Ee]=e.current,e.current=t}var ye=S(null),qe=S(null),ut=S(null),dt=S(null);function It(e,t){switch(ue(ut,t),ue(qe,e),ue(ye,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?uh(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=uh(t),e=dh(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(ye),ue(ye,e)}function Ct(){Q(ye),Q(qe),Q(ut)}function Mn(e){e.memoizedState!==null&&ue(dt,e);var t=ye.current,n=dh(t,e.type);t!==n&&(ue(qe,e),ue(ye,n))}function dn(e){qe.current===e&&(Q(ye),Q(qe)),dt.current===e&&(Q(dt),hi._currentValue=q)}var _n,pn;function en(e){if(_n===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_n=t&&t[1]||"",pn=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_n+e+pn}var Ln=!1;function Qn(e,t){if(!e||Ln)return"";Ln=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var ne=function(){throw Error()};if(Object.defineProperty(ne.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ne,[])}catch(X){var Y=X}Reflect.construct(e,[],ne)}else{try{ne.call()}catch(X){Y=X}e.call(ne.prototype)}}else{try{throw Error()}catch(X){Y=X}(ne=e())&&typeof ne.catch=="function"&&ne.catch(function(){})}}catch(X){if(X&&Y&&typeof X.stack=="string")return[X.stack,Y.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var s=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");s&&s.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),d=i[0],h=i[1];if(d&&h){var w=d.split(`
`),L=h.split(`
`);for(s=l=0;l<w.length&&!w[l].includes("DetermineComponentFrameRoot");)l++;for(;s<L.length&&!L[s].includes("DetermineComponentFrameRoot");)s++;if(l===w.length||s===L.length)for(l=w.length-1,s=L.length-1;1<=l&&0<=s&&w[l]!==L[s];)s--;for(;1<=l&&0<=s;l--,s--)if(w[l]!==L[s]){if(l!==1||s!==1)do if(l--,s--,0>s||w[l]!==L[s]){var W=`
`+w[l].replace(" at new "," at ");return e.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",e.displayName)),W}while(1<=l&&0<=s);break}}}finally{Ln=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?en(n):""}function yl(e,t){switch(e.tag){case 26:case 27:case 5:return en(e.type);case 16:return en("Lazy");case 13:return e.child!==t&&t!==null?en("Suspense Fallback"):en("Suspense");case 19:return en("SuspenseList");case 0:case 15:return Qn(e.type,!1);case 11:return Qn(e.type.render,!1);case 1:return Qn(e.type,!0);case 31:return en("Activity");default:return""}}function Z(e){try{var t="",n=null;do t+=yl(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ze=Object.prototype.hasOwnProperty,Pe=o.unstable_scheduleCallback,We=o.unstable_cancelCallback,ot=o.unstable_shouldYield,vt=o.unstable_requestPaint,He=o.unstable_now,st=o.unstable_getCurrentPriorityLevel,xt=o.unstable_ImmediatePriority,Ot=o.unstable_UserBlockingPriority,De=o.unstable_NormalPriority,A=o.unstable_LowPriority,$=o.unstable_IdlePriority,F=o.log,le=o.unstable_setDisableYieldValue,je=null,re=null;function se(e){if(typeof F=="function"&&le(e),re&&typeof re.setStrictMode=="function")try{re.setStrictMode(je,e)}catch{}}var Oe=Math.clz32?Math.clz32:Et,it=Math.log,mt=Math.LN2;function Et(e){return e>>>=0,e===0?32:31-(it(e)/mt|0)|0}var U=256,ce=262144,_e=4194304;function ve(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var s=0,i=e.suspendedLanes,d=e.pingedLanes;e=e.warmLanes;var h=l&134217727;return h!==0?(l=h&~i,l!==0?s=ve(l):(d&=h,d!==0?s=ve(d):n||(n=h&~e,n!==0&&(s=ve(n))))):(h=l&~i,h!==0?s=ve(h):d!==0?s=ve(d):n||(n=l&~e,n!==0&&(s=ve(n)))),s===0?0:t!==0&&t!==s&&(t&i)===0&&(i=s&-s,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:s}function Xe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ze(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=_e;return _e<<=1,(_e&62914560)===0&&(_e=4194304),e}function yt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function lt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function sn(e,t,n,l,s,i){var d=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var h=e.entanglements,w=e.expirationTimes,L=e.hiddenUpdates;for(n=d&~n;0<n;){var W=31-Oe(n),ne=1<<W;h[W]=0,w[W]=-1;var Y=L[W];if(Y!==null)for(L[W]=null,W=0;W<Y.length;W++){var X=Y[W];X!==null&&(X.lane&=-536870913)}n&=~ne}l!==0&&Rn(e,l,0),i!==0&&s===0&&e.tag!==0&&(e.suspendedLanes|=i&~(d&~t))}function Rn(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-Oe(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function $n(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Oe(n),s=1<<l;s&t|e[l]&t&&(e[l]|=t),n&=~s}}function il(e,t){var n=t&-t;return n=(n&42)!==0?1:Hn(n),(n&(e.suspendedLanes|t))!==0?0:n}function Hn(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ul(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function no(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Ah(e.type))}function tn(e,t){var n=J.p;try{return J.p=e,t()}finally{J.p=n}}var En=Math.random().toString(36).slice(2),rn="__reactFiber$"+En,Un="__reactProps$"+En,Ve="__reactContainer$"+En,Yn="__reactEvents$"+En,ks="__reactListeners$"+En,js="__reactHandles$"+En,Yl="__reactResources$"+En,lo="__reactMarker$"+En;function zo(e){delete e[rn],delete e[Un],delete e[Yn],delete e[ks],delete e[js]}function wa(e){var t=e[rn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ve]||n[rn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ph(e);e!==null;){if(n=e[rn])return n;e=ph(e)}return t}e=n,n=e.parentNode}return null}function Sa(e){if(e=e[rn]||e[Ve]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ao(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(u(33))}function Xl(e){var t=e[Yl];return t||(t=e[Yl]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function xn(e){e[lo]=!0}var Cs=new Set,ka={};function pl(e,t){Nn(e,t),Nn(e+"Capture",t)}function Nn(e,t){for(ka[e]=t,e=0;e<t.length;e++)Cs.add(t[e])}var Do=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ms={},ja={};function oo(e){return ze.call(ja,e)?!0:ze.call(Ms,e)?!1:Do.test(e)?ja[e]=!0:(Ms[e]=!0,!1)}function ql(e,t,n){if(oo(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Xn(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function rl(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function Kt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ei(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rc(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var s=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(d){n=""+d,i.call(this,d)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ao(e){if(!e._valueTracker){var t=Ei(e)?"checked":"value";e._valueTracker=rc(e,t,""+e[t])}}function cc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=Ei(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Ca(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ni=/[\n"\\]/g;function Wn(e){return e.replace(Ni,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Il(e,t,n,l,s,i,d,h){e.name="",d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"?e.type=d:e.removeAttribute("type"),t!=null?d==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Kt(t)):e.value!==""+Kt(t)&&(e.value=""+Kt(t)):d!=="submit"&&d!=="reset"||e.removeAttribute("value"),t!=null?Ql(e,d,Kt(t)):n!=null?Ql(e,d,Kt(n)):l!=null&&e.removeAttribute("value"),s==null&&i!=null&&(e.defaultChecked=!!i),s!=null&&(e.checked=s&&typeof s!="function"&&typeof s!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+Kt(h):e.removeAttribute("name")}function ln(e,t,n,l,s,i,d,h){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ao(e);return}n=n!=null?""+Kt(n):"",t=t!=null?""+Kt(t):n,h||t===e.value||(e.value=t),e.defaultValue=t}l=l??s,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=h?e.checked:!!l,e.defaultChecked=!!l,d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.name=d),Ao(e)}function Ql(e,t,n){t==="number"&&Ca(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function zn(e,t,n,l){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Kt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,l&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function jn(e,t,n){if(t!=null&&(t=""+Kt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Kt(n):""}function Ti(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(u(92));if(Ye(l)){if(1<l.length)throw Error(u(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=Kt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Ao(e)}function Ma(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var uc=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function pt(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||uc.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ri(e,t,n){if(t!=null&&typeof t!="object")throw Error(u(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var s in t)l=t[s],t.hasOwnProperty(s)&&n[s]!==l&&pt(e,s,l)}else for(var i in t)t.hasOwnProperty(i)&&pt(e,i,t[i])}function Pn(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zi=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Di=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function so(e){return Di.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zl(){}var Es=null;function Dl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Gt=null,Wl=null;function Ns(e){var t=Sa(e);if(t&&(e=t.stateNode)){var n=e[Un]||null;e:switch(e=t.stateNode,t.type){case"input":if(Il(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Wn(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var s=l[Un]||null;if(!s)throw Error(u(90));Il(l,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&cc(l)}break e;case"textarea":jn(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&zn(e,!!n.multiple,t,!1)}}}var Gn=!1;function Gl(e,t,n){if(Gn)return e(t,n);Gn=!0;try{var l=e(t);return l}finally{if(Gn=!1,(Gt!==null||Wl!==null)&&(jr(),Gt&&(t=Gt,e=Wl,Wl=Gt=null,Ns(t),e)))for(t=0;t<e.length;t++)Ns(e[t])}}function Bt(e,t){var n=e.stateNode;if(n===null)return null;var l=n[Un]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(u(231,t,typeof n));return n}var cl=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Al=!1;if(cl)try{var Ea={};Object.defineProperty(Ea,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Ea,Ea),window.removeEventListener("test",Ea,Ea)}catch{Al=!1}var Vn=null,Oo=null,Na=null;function Ts(){if(Na)return Na;var e,t=Oo,n=t.length,l,s="value"in Vn?Vn.value:Vn.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var d=n-e;for(l=1;l<=d&&t[n-l]===s[i-l];l++);return Na=s.slice(e,1<l?1-l:void 0)}function Vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function ro(){return!1}function bn(e){function t(n,l,s,i,d){this._reactName=n,this._targetInst=s,this.type=l,this.nativeEvent=i,this.target=d,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(n=e[h],this[h]=n?n(i):i[h]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?io:ro,this.isPropagationStopped=ro,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var xl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bo=bn(xl),bl=z({},xl,{view:0,detail:0}),Ol=bn(bl),Lo,Zl,qn,Kl=z({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qn&&(qn&&e.type==="mousemove"?(Lo=e.screenX-qn.screenX,Zl=e.screenY-qn.screenY):Zl=Lo=0,qn=e),Lo)},movementY:function(e){return"movementY"in e?e.movementY:Zl}}),Ta=bn(Kl),$o=z({},Kl,{dataTransfer:0}),Ai=bn($o),Ho=z({},bl,{relatedTarget:0}),Uo=bn(Ho),Rs=z({},xl,{animationName:0,elapsedTime:0,pseudoElement:0}),dc=bn(Rs),Oi=z({},xl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bi=bn(Oi),co=z({},xl,{data:0}),Ke=bn(co),zs={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Li={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_c={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ds(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=_c[e])?!!t[e]:!1}function Fl(){return Ds}var Yo=z({},bl,{key:function(e){if(e.key){var t=zs[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Li[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$i=bn(Yo),Hi=z({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uo=bn(Hi),As=z({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),Ui=bn(As),Xo=z({},xl,{propertyName:0,elapsedTime:0,pseudoElement:0}),vl=bn(Xo),fc=z({},Kl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Os=bn(fc),Bs=z({},xl,{newState:0,oldState:0}),qo=bn(Bs),hc=[9,13,27,32],Ls=cl&&"CompositionEvent"in window,ul=null;cl&&"documentMode"in document&&(ul=document.documentMode);var $s=cl&&"TextEvent"in window&&!ul,Io=cl&&(!Ls||ul&&8<ul&&11>=ul),Yi=" ",Ra=!1;function aa(e,t){switch(e){case"keyup":return hc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oa=!1;function qi(e,t){switch(e){case"compositionend":return Xi(t);case"keypress":return t.which!==32?null:(Ra=!0,Yi);case"textInput":return e=t.data,e===Yi&&Ra?null:e;default:return null}}function g(e,t){if(oa)return e==="compositionend"||!Ls&&aa(e,t)?(e=Ts(),Na=Oo=Vn=null,oa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Io&&t.locale!=="ko"?null:t.data;default:return null}}var p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function j(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p[e.type]:t==="textarea"}function C(e,t,n,l){Gt?Wl?Wl.push(l):Wl=[l]:Gt=l,t=zr(t,"onChange"),0<t.length&&(n=new Bo("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var E=null,G=null;function fe(e){ah(e,0)}function ge(e){var t=ao(e);if(cc(t))return e}function Ce(e,t){if(e==="change")return t}var Be=!1;if(cl){var Ue;if(cl){var at="oninput"in document;if(!at){var gt=document.createElement("div");gt.setAttribute("oninput","return;"),at=typeof gt.oninput=="function"}Ue=at}else Ue=!1;Be=Ue&&(!document.documentMode||9<document.documentMode)}function Qe(){E&&(E.detachEvent("onpropertychange",Se),G=E=null)}function Se(e){if(e.propertyName==="value"&&ge(G)){var t=[];C(t,G,e,Dl(e)),Gl(fe,t)}}function an(e,t,n){e==="focusin"?(Qe(),E=t,G=n,E.attachEvent("onpropertychange",Se)):e==="focusout"&&Qe()}function At(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ge(G)}function fn(e,t){if(e==="click")return ge(t)}function Rt(e,t){if(e==="input"||e==="change")return ge(t)}function on(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ae=typeof Object.is=="function"?Object.is:on;function rt(e,t){if(Ae(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var s=n[l];if(!ze.call(t,s)||!Ae(e[s],t[s]))return!1}return!0}function Vt(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ft(e,t){var n=Vt(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vt(n)}}function el(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?el(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Zn(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ca(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ca(e.document)}return t}function hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var _o=cl&&"documentMode"in document&&11>=document.documentMode,tl=null,wl=null,Zt=null,Sl=!1;function Jl(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Sl||tl==null||tl!==Ca(l)||(l=tl,"selectionStart"in l&&hn(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Zt&&rt(Zt,l)||(Zt=l,l=zr(wl,"onSelect"),0<l.length&&(t=new Bo("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=tl)))}function sa(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var za={animationend:sa("Animation","AnimationEnd"),animationiteration:sa("Animation","AnimationIteration"),animationstart:sa("Animation","AnimationStart"),transitionrun:sa("Transition","TransitionRun"),transitionstart:sa("Transition","TransitionStart"),transitioncancel:sa("Transition","TransitionCancel"),transitionend:sa("Transition","TransitionEnd")},Hs={},Ii={};cl&&(Ii=document.createElement("div").style,"AnimationEvent"in window||(delete za.animationend.animation,delete za.animationiteration.animation,delete za.animationstart.animation),"TransitionEvent"in window||delete za.transitionend.transition);function fo(e){if(Hs[e])return Hs[e];if(!za[e])return e;var t=za[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ii)return Hs[e]=t[n];return e}var Dd=fo("animationend"),Ad=fo("animationiteration"),Od=fo("animationstart"),Wm=fo("transitionrun"),Gm=fo("transitionstart"),Vm=fo("transitioncancel"),Bd=fo("transitionend"),Ld=new Map,mc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mc.push("scrollEnd");function Bl(e,t){Ld.set(e,t),pl(t,[e])}var Qi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},kl=[],Qo=0,gc=0;function Wi(){for(var e=Qo,t=gc=Qo=0;t<e;){var n=kl[t];kl[t++]=null;var l=kl[t];kl[t++]=null;var s=kl[t];kl[t++]=null;var i=kl[t];if(kl[t++]=null,l!==null&&s!==null){var d=l.pending;d===null?s.next=s:(s.next=d.next,d.next=s),l.pending=s}i!==0&&$d(n,s,i)}}function Gi(e,t,n,l){kl[Qo++]=e,kl[Qo++]=t,kl[Qo++]=n,kl[Qo++]=l,gc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function yc(e,t,n,l){return Gi(e,t,n,l),Vi(e)}function ho(e,t){return Gi(e,null,null,t),Vi(e)}function $d(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var s=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(s=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,s&&t!==null&&(s=31-Oe(n),e=i.hiddenUpdates,l=e[s],l===null?e[s]=[t]:l.push(t),t.lane=n|536870912),i):null}function Vi(e){if(50<ii)throw ii=0,Cu=null,Error(u(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Wo={};function Zm(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dl(e,t,n,l){return new Zm(e,t,n,l)}function pc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ia(e,t){var n=e.alternate;return n===null?(n=dl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Hd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Zi(e,t,n,l,s,i){var d=0;if(l=e,typeof e=="function")pc(e)&&(d=1);else if(typeof e=="string")d=eg(e,n,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case tt:return e=dl(31,n,t,s),e.elementType=tt,e.lanes=i,e;case te:return mo(n.children,s,i,t);case H:d=8,s|=24;break;case I:return e=dl(12,n,t,s|2),e.elementType=I,e.lanes=i,e;case ct:return e=dl(13,n,t,s),e.elementType=ct,e.lanes=i,e;case we:return e=dl(19,n,t,s),e.elementType=we,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pe:d=10;break e;case he:d=9;break e;case be:d=11;break e;case ee:d=14;break e;case oe:d=16,l=null;break e}d=29,n=Error(u(130,e===null?"null":typeof e,"")),l=null}return t=dl(d,n,t,s),t.elementType=e,t.type=l,t.lanes=i,t}function mo(e,t,n,l){return e=dl(7,e,l,t),e.lanes=n,e}function xc(e,t,n){return e=dl(6,e,null,t),e.lanes=n,e}function Ud(e){var t=dl(18,null,null,0);return t.stateNode=e,t}function bc(e,t,n){return t=dl(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Yd=new WeakMap;function jl(e,t){if(typeof e=="object"&&e!==null){var n=Yd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Z(t)},Yd.set(e,t),t)}return{value:e,source:t,stack:Z(t)}}var Go=[],Vo=0,Ki=null,Us=0,Cl=[],Ml=0,Da=null,Pl=1,ea="";function ra(e,t){Go[Vo++]=Us,Go[Vo++]=Ki,Ki=e,Us=t}function Xd(e,t,n){Cl[Ml++]=Pl,Cl[Ml++]=ea,Cl[Ml++]=Da,Da=e;var l=Pl;e=ea;var s=32-Oe(l)-1;l&=~(1<<s),n+=1;var i=32-Oe(t)+s;if(30<i){var d=s-s%5;i=(l&(1<<d)-1).toString(32),l>>=d,s-=d,Pl=1<<32-Oe(t)+s|n<<s|l,ea=i+e}else Pl=1<<i|n<<s|l,ea=e}function vc(e){e.return!==null&&(ra(e,1),Xd(e,1,0))}function wc(e){for(;e===Ki;)Ki=Go[--Vo],Go[Vo]=null,Us=Go[--Vo],Go[Vo]=null;for(;e===Da;)Da=Cl[--Ml],Cl[Ml]=null,ea=Cl[--Ml],Cl[Ml]=null,Pl=Cl[--Ml],Cl[Ml]=null}function qd(e,t){Cl[Ml++]=Pl,Cl[Ml++]=ea,Cl[Ml++]=Da,Pl=t.id,ea=t.overflow,Da=e}var Dn=null,Jt=null,Mt=!1,Aa=null,El=!1,Sc=Error(u(519));function Oa(e){var t=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ys(jl(t,e)),Sc}function Id(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[rn]=e,t[Un]=l,n){case"dialog":St("cancel",t),St("close",t);break;case"iframe":case"object":case"embed":St("load",t);break;case"video":case"audio":for(n=0;n<ci.length;n++)St(ci[n],t);break;case"source":St("error",t);break;case"img":case"image":case"link":St("error",t),St("load",t);break;case"details":St("toggle",t);break;case"input":St("invalid",t),ln(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":St("invalid",t);break;case"textarea":St("invalid",t),Ti(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||rh(t.textContent,n)?(l.popover!=null&&(St("beforetoggle",t),St("toggle",t)),l.onScroll!=null&&St("scroll",t),l.onScrollEnd!=null&&St("scrollend",t),l.onClick!=null&&(t.onclick=zl),t=!0):t=!1,t||Oa(e,!0)}function Qd(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 31:case 13:El=!1;return;case 27:case 3:El=!0;return;default:Dn=Dn.return}}function Zo(e){if(e!==Dn)return!1;if(!Mt)return Qd(e),Mt=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Yu(e.type,e.memoizedProps)),n=!n),n&&Jt&&Oa(e),Qd(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Jt=yh(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Jt=yh(e)}else t===27?(t=Jt,Za(e.type)?(e=Wu,Wu=null,Jt=e):Jt=t):Jt=Dn?Tl(e.stateNode.nextSibling):null;return!0}function go(){Jt=Dn=null,Mt=!1}function kc(){var e=Aa;return e!==null&&(ol===null?ol=e:ol.push.apply(ol,e),Aa=null),e}function Ys(e){Aa===null?Aa=[e]:Aa.push(e)}var jc=S(null),yo=null,ca=null;function Ba(e,t,n){ue(jc,t._currentValue),t._currentValue=n}function ua(e){e._currentValue=jc.current,Q(jc)}function Cc(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Mc(e,t,n,l){var s=e.child;for(s!==null&&(s.return=e);s!==null;){var i=s.dependencies;if(i!==null){var d=s.child;i=i.firstContext;e:for(;i!==null;){var h=i;i=s;for(var w=0;w<t.length;w++)if(h.context===t[w]){i.lanes|=n,h=i.alternate,h!==null&&(h.lanes|=n),Cc(i.return,n,e),l||(d=null);break e}i=h.next}}else if(s.tag===18){if(d=s.return,d===null)throw Error(u(341));d.lanes|=n,i=d.alternate,i!==null&&(i.lanes|=n),Cc(d,n,e),d=null}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===e){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}}function Ko(e,t,n,l){e=null;for(var s=t,i=!1;s!==null;){if(!i){if((s.flags&524288)!==0)i=!0;else if((s.flags&262144)!==0)break}if(s.tag===10){var d=s.alternate;if(d===null)throw Error(u(387));if(d=d.memoizedProps,d!==null){var h=s.type;Ae(s.pendingProps.value,d.value)||(e!==null?e.push(h):e=[h])}}else if(s===dt.current){if(d=s.alternate,d===null)throw Error(u(387));d.memoizedState.memoizedState!==s.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}s=s.return}e!==null&&Mc(t,e,n,l),t.flags|=262144}function Fi(e){for(e=e.firstContext;e!==null;){if(!Ae(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function po(e){yo=e,ca=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Wd(yo,e)}function Ji(e,t){return yo===null&&po(e),Wd(e,t)}function Wd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},ca===null){if(e===null)throw Error(u(308));ca=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ca=ca.next=t;return n}var Km=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Fm=o.unstable_scheduleCallback,Jm=o.unstable_NormalPriority,vn={$$typeof:pe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ec(){return{controller:new Km,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&Fm(Jm,function(){e.controller.abort()})}var qs=null,Nc=0,Fo=0,Jo=null;function Pm(e,t){if(qs===null){var n=qs=[];Nc=0,Fo=zu(),Jo={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Nc++,t.then(Gd,Gd),t}function Gd(){if(--Nc===0&&qs!==null){Jo!==null&&(Jo.status="fulfilled");var e=qs;qs=null,Fo=0,Jo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function e0(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(s){n.push(s)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var s=0;s<n.length;s++)(0,n[s])(t)},function(s){for(l.status="rejected",l.reason=s,s=0;s<n.length;s++)(0,n[s])(void 0)}),l}var Vd=x.S;x.S=function(e,t){zf=He(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Pm(e,t),Vd!==null&&Vd(e,t)};var xo=S(null);function Tc(){var e=xo.current;return e!==null?e:Qt.pooledCache}function Pi(e,t){t===null?ue(xo,xo.current):ue(xo,t.pool)}function Zd(){var e=Tc();return e===null?null:{parent:vn._currentValue,pool:e}}var Po=Error(u(460)),Rc=Error(u(474)),er=Error(u(542)),tr={then:function(){}};function Kd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(zl,zl),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e;default:if(typeof t.status=="string")t.then(zl,zl);else{if(e=Qt,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var s=t;s.status="fulfilled",s.value=l}},function(l){if(t.status==="pending"){var s=t;s.status="rejected",s.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Pd(e),e}throw vo=t,Po}}function bo(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(vo=n,Po):n}}var vo=null;function Jd(){if(vo===null)throw Error(u(459));var e=vo;return vo=null,e}function Pd(e){if(e===Po||e===er)throw Error(u(483))}var es=null,Is=0;function nr(e){var t=Is;return Is+=1,es===null&&(es=[]),Fd(es,e,t)}function Qs(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function lr(e,t){throw t.$$typeof===T?Error(u(525)):(e=Object.prototype.toString.call(t),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function e_(e){function t(D,N){if(e){var B=D.deletions;B===null?(D.deletions=[N],D.flags|=16):B.push(N)}}function n(D,N){if(!e)return null;for(;N!==null;)t(D,N),N=N.sibling;return null}function l(D){for(var N=new Map;D!==null;)D.key!==null?N.set(D.key,D):N.set(D.index,D),D=D.sibling;return N}function s(D,N){return D=ia(D,N),D.index=0,D.sibling=null,D}function i(D,N,B){return D.index=B,e?(B=D.alternate,B!==null?(B=B.index,B<N?(D.flags|=67108866,N):B):(D.flags|=67108866,N)):(D.flags|=1048576,N)}function d(D){return e&&D.alternate===null&&(D.flags|=67108866),D}function h(D,N,B,P){return N===null||N.tag!==6?(N=xc(B,D.mode,P),N.return=D,N):(N=s(N,B),N.return=D,N)}function w(D,N,B,P){var Ge=B.type;return Ge===te?W(D,N,B.props.children,P,B.key):N!==null&&(N.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===oe&&bo(Ge)===N.type)?(N=s(N,B.props),Qs(N,B),N.return=D,N):(N=Zi(B.type,B.key,B.props,null,D.mode,P),Qs(N,B),N.return=D,N)}function L(D,N,B,P){return N===null||N.tag!==4||N.stateNode.containerInfo!==B.containerInfo||N.stateNode.implementation!==B.implementation?(N=bc(B,D.mode,P),N.return=D,N):(N=s(N,B.children||[]),N.return=D,N)}function W(D,N,B,P,Ge){return N===null||N.tag!==7?(N=mo(B,D.mode,P,Ge),N.return=D,N):(N=s(N,B),N.return=D,N)}function ne(D,N,B){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=xc(""+N,D.mode,B),N.return=D,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case de:return B=Zi(N.type,N.key,N.props,null,D.mode,B),Qs(B,N),B.return=D,B;case O:return N=bc(N,D.mode,B),N.return=D,N;case oe:return N=bo(N),ne(D,N,B)}if(Ye(N)||$e(N))return N=mo(N,D.mode,B,null),N.return=D,N;if(typeof N.then=="function")return ne(D,nr(N),B);if(N.$$typeof===pe)return ne(D,Ji(D,N),B);lr(D,N)}return null}function Y(D,N,B,P){var Ge=N!==null?N.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return Ge!==null?null:h(D,N,""+B,P);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case de:return B.key===Ge?w(D,N,B,P):null;case O:return B.key===Ge?L(D,N,B,P):null;case oe:return B=bo(B),Y(D,N,B,P)}if(Ye(B)||$e(B))return Ge!==null?null:W(D,N,B,P,null);if(typeof B.then=="function")return Y(D,N,nr(B),P);if(B.$$typeof===pe)return Y(D,N,Ji(D,B),P);lr(D,B)}return null}function X(D,N,B,P,Ge){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return D=D.get(B)||null,h(N,D,""+P,Ge);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case de:return D=D.get(P.key===null?B:P.key)||null,w(N,D,P,Ge);case O:return D=D.get(P.key===null?B:P.key)||null,L(N,D,P,Ge);case oe:return P=bo(P),X(D,N,B,P,Ge)}if(Ye(P)||$e(P))return D=D.get(B)||null,W(N,D,P,Ge,null);if(typeof P.then=="function")return X(D,N,B,nr(P),Ge);if(P.$$typeof===pe)return X(D,N,B,Ji(N,P),Ge);lr(N,P)}return null}function Re(D,N,B,P){for(var Ge=null,Nt=null,Le=N,ht=N=0,jt=null;Le!==null&&ht<B.length;ht++){Le.index>ht?(jt=Le,Le=null):jt=Le.sibling;var Tt=Y(D,Le,B[ht],P);if(Tt===null){Le===null&&(Le=jt);break}e&&Le&&Tt.alternate===null&&t(D,Le),N=i(Tt,N,ht),Nt===null?Ge=Tt:Nt.sibling=Tt,Nt=Tt,Le=jt}if(ht===B.length)return n(D,Le),Mt&&ra(D,ht),Ge;if(Le===null){for(;ht<B.length;ht++)Le=ne(D,B[ht],P),Le!==null&&(N=i(Le,N,ht),Nt===null?Ge=Le:Nt.sibling=Le,Nt=Le);return Mt&&ra(D,ht),Ge}for(Le=l(Le);ht<B.length;ht++)jt=X(Le,D,ht,B[ht],P),jt!==null&&(e&&jt.alternate!==null&&Le.delete(jt.key===null?ht:jt.key),N=i(jt,N,ht),Nt===null?Ge=jt:Nt.sibling=jt,Nt=jt);return e&&Le.forEach(function(eo){return t(D,eo)}),Mt&&ra(D,ht),Ge}function et(D,N,B,P){if(B==null)throw Error(u(151));for(var Ge=null,Nt=null,Le=N,ht=N=0,jt=null,Tt=B.next();Le!==null&&!Tt.done;ht++,Tt=B.next()){Le.index>ht?(jt=Le,Le=null):jt=Le.sibling;var eo=Y(D,Le,Tt.value,P);if(eo===null){Le===null&&(Le=jt);break}e&&Le&&eo.alternate===null&&t(D,Le),N=i(eo,N,ht),Nt===null?Ge=eo:Nt.sibling=eo,Nt=eo,Le=jt}if(Tt.done)return n(D,Le),Mt&&ra(D,ht),Ge;if(Le===null){for(;!Tt.done;ht++,Tt=B.next())Tt=ne(D,Tt.value,P),Tt!==null&&(N=i(Tt,N,ht),Nt===null?Ge=Tt:Nt.sibling=Tt,Nt=Tt);return Mt&&ra(D,ht),Ge}for(Le=l(Le);!Tt.done;ht++,Tt=B.next())Tt=X(Le,D,ht,Tt.value,P),Tt!==null&&(e&&Tt.alternate!==null&&Le.delete(Tt.key===null?ht:Tt.key),N=i(Tt,N,ht),Nt===null?Ge=Tt:Nt.sibling=Tt,Nt=Tt);return e&&Le.forEach(function(dg){return t(D,dg)}),Mt&&ra(D,ht),Ge}function Xt(D,N,B,P){if(typeof B=="object"&&B!==null&&B.type===te&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case de:e:{for(var Ge=B.key;N!==null;){if(N.key===Ge){if(Ge=B.type,Ge===te){if(N.tag===7){n(D,N.sibling),P=s(N,B.props.children),P.return=D,D=P;break e}}else if(N.elementType===Ge||typeof Ge=="object"&&Ge!==null&&Ge.$$typeof===oe&&bo(Ge)===N.type){n(D,N.sibling),P=s(N,B.props),Qs(P,B),P.return=D,D=P;break e}n(D,N);break}else t(D,N);N=N.sibling}B.type===te?(P=mo(B.props.children,D.mode,P,B.key),P.return=D,D=P):(P=Zi(B.type,B.key,B.props,null,D.mode,P),Qs(P,B),P.return=D,D=P)}return d(D);case O:e:{for(Ge=B.key;N!==null;){if(N.key===Ge)if(N.tag===4&&N.stateNode.containerInfo===B.containerInfo&&N.stateNode.implementation===B.implementation){n(D,N.sibling),P=s(N,B.children||[]),P.return=D,D=P;break e}else{n(D,N);break}else t(D,N);N=N.sibling}P=bc(B,D.mode,P),P.return=D,D=P}return d(D);case oe:return B=bo(B),Xt(D,N,B,P)}if(Ye(B))return Re(D,N,B,P);if($e(B)){if(Ge=$e(B),typeof Ge!="function")throw Error(u(150));return B=Ge.call(B),et(D,N,B,P)}if(typeof B.then=="function")return Xt(D,N,nr(B),P);if(B.$$typeof===pe)return Xt(D,N,Ji(D,B),P);lr(D,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,N!==null&&N.tag===6?(n(D,N.sibling),P=s(N,B),P.return=D,D=P):(n(D,N),P=xc(B,D.mode,P),P.return=D,D=P),d(D)):n(D,N)}return function(D,N,B,P){try{Is=0;var Ge=Xt(D,N,B,P);return es=null,Ge}catch(Le){if(Le===Po||Le===er)throw Le;var Nt=dl(29,Le,null,D.mode);return Nt.lanes=P,Nt.return=D,Nt}}}var wo=e_(!0),t_=e_(!1),La=!1;function zc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ha(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(zt&2)!==0){var s=l.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),l.pending=t,t=Vi(e),$d(e,null,n),t}return Gi(e,l,t,n),Vi(e)}function Ws(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,$n(e,n)}}function Ac(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var d={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?s=i=d:i=i.next=d,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:l.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Oc=!1;function Gs(){if(Oc){var e=Jo;if(e!==null)throw e}}function Vs(e,t,n,l){Oc=!1;var s=e.updateQueue;La=!1;var i=s.firstBaseUpdate,d=s.lastBaseUpdate,h=s.shared.pending;if(h!==null){s.shared.pending=null;var w=h,L=w.next;w.next=null,d===null?i=L:d.next=L,d=w;var W=e.alternate;W!==null&&(W=W.updateQueue,h=W.lastBaseUpdate,h!==d&&(h===null?W.firstBaseUpdate=L:h.next=L,W.lastBaseUpdate=w))}if(i!==null){var ne=s.baseState;d=0,W=L=w=null,h=i;do{var Y=h.lane&-536870913,X=Y!==h.lane;if(X?(kt&Y)===Y:(l&Y)===Y){Y!==0&&Y===Fo&&(Oc=!0),W!==null&&(W=W.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var Re=e,et=h;Y=t;var Xt=n;switch(et.tag){case 1:if(Re=et.payload,typeof Re=="function"){ne=Re.call(Xt,ne,Y);break e}ne=Re;break e;case 3:Re.flags=Re.flags&-65537|128;case 0:if(Re=et.payload,Y=typeof Re=="function"?Re.call(Xt,ne,Y):Re,Y==null)break e;ne=z({},ne,Y);break e;case 2:La=!0}}Y=h.callback,Y!==null&&(e.flags|=64,X&&(e.flags|=8192),X=s.callbacks,X===null?s.callbacks=[Y]:X.push(Y))}else X={lane:Y,tag:h.tag,payload:h.payload,callback:h.callback,next:null},W===null?(L=W=X,w=ne):W=W.next=X,d|=Y;if(h=h.next,h===null){if(h=s.shared.pending,h===null)break;X=h,h=X.next,X.next=null,s.lastBaseUpdate=X,s.shared.pending=null}}while(!0);W===null&&(w=ne),s.baseState=w,s.firstBaseUpdate=L,s.lastBaseUpdate=W,i===null&&(s.shared.lanes=0),Ia|=d,e.lanes=d,e.memoizedState=ne}}function n_(e,t){if(typeof e!="function")throw Error(u(191,e));e.call(t)}function l_(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)n_(n[e],t)}var ts=S(null),ar=S(0);function a_(e,t){e=xa,ue(ar,e),ue(ts,t),xa=e|t.baseLanes}function Bc(){ue(ar,xa),ue(ts,ts.current)}function Lc(){xa=ar.current,Q(ts),Q(ar)}var _l=S(null),Nl=null;function Ua(e){var t=e.alternate;ue(mn,mn.current&1),ue(_l,e),Nl===null&&(t===null||ts.current!==null||t.memoizedState!==null)&&(Nl=e)}function $c(e){ue(mn,mn.current),ue(_l,e),Nl===null&&(Nl=e)}function o_(e){e.tag===22?(ue(mn,mn.current),ue(_l,e),Nl===null&&(Nl=e)):Ya()}function Ya(){ue(mn,mn.current),ue(_l,_l.current)}function fl(e){Q(_l),Nl===e&&(Nl=null),Q(mn)}var mn=S(0);function or(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Iu(n)||Qu(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var da=0,ft=null,Ut=null,wn=null,sr=!1,ns=!1,So=!1,ir=0,Zs=0,ls=null,t0=0;function cn(){throw Error(u(321))}function Hc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ae(e[n],t[n]))return!1;return!0}function Uc(e,t,n,l,s,i){return da=i,ft=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,x.H=e===null||e.memoizedState===null?X_:tu,So=!1,i=n(l,s),So=!1,ns&&(i=i_(t,n,l,s)),s_(e),i}function s_(e){x.H=Js;var t=Ut!==null&&Ut.next!==null;if(da=0,wn=Ut=ft=null,sr=!1,Zs=0,ls=null,t)throw Error(u(300));e===null||Sn||(e=e.dependencies,e!==null&&Fi(e)&&(Sn=!0))}function i_(e,t,n,l){ft=e;var s=0;do{if(ns&&(ls=null),Zs=0,ns=!1,25<=s)throw Error(u(301));if(s+=1,wn=Ut=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}x.H=q_,i=t(n,l)}while(ns);return i}function n0(){var e=x.H,t=e.useState()[0];return t=typeof t.then=="function"?Ks(t):t,e=e.useState()[0],(Ut!==null?Ut.memoizedState:null)!==e&&(ft.flags|=1024),t}function Yc(){var e=ir!==0;return ir=0,e}function Xc(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function qc(e){if(sr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}sr=!1}da=0,wn=Ut=ft=null,ns=!1,Zs=ir=0,ls=null}function Kn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?ft.memoizedState=wn=e:wn=wn.next=e,wn}function gn(){if(Ut===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=Ut.next;var t=wn===null?ft.memoizedState:wn.next;if(t!==null)wn=t,Ut=e;else{if(e===null)throw ft.alternate===null?Error(u(467)):Error(u(310));Ut=e,e={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},wn===null?ft.memoizedState=wn=e:wn=wn.next=e}return wn}function rr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ks(e){var t=Zs;return Zs+=1,ls===null&&(ls=[]),e=Fd(ls,e,t),t=ft,(wn===null?t.memoizedState:wn.next)===null&&(t=t.alternate,x.H=t===null||t.memoizedState===null?X_:tu),e}function cr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ks(e);if(e.$$typeof===pe)return An(e)}throw Error(u(438,String(e)))}function Ic(e){var t=null,n=ft.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=ft.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(s){return s.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=rr(),ft.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=nt;return t.index++,n}function _a(e,t){return typeof t=="function"?t(e):t}function ur(e){var t=gn();return Qc(t,Ut,e)}function Qc(e,t,n){var l=e.queue;if(l===null)throw Error(u(311));l.lastRenderedReducer=n;var s=e.baseQueue,i=l.pending;if(i!==null){if(s!==null){var d=s.next;s.next=i.next,i.next=d}t.baseQueue=s=i,l.pending=null}if(i=e.baseState,s===null)e.memoizedState=i;else{t=s.next;var h=d=null,w=null,L=t,W=!1;do{var ne=L.lane&-536870913;if(ne!==L.lane?(kt&ne)===ne:(da&ne)===ne){var Y=L.revertLane;if(Y===0)w!==null&&(w=w.next={lane:0,revertLane:0,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null}),ne===Fo&&(W=!0);else if((da&Y)===Y){L=L.next,Y===Fo&&(W=!0);continue}else ne={lane:0,revertLane:L.revertLane,gesture:null,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(h=w=ne,d=i):w=w.next=ne,ft.lanes|=Y,Ia|=Y;ne=L.action,So&&n(i,ne),i=L.hasEagerState?L.eagerState:n(i,ne)}else Y={lane:ne,revertLane:L.revertLane,gesture:L.gesture,action:L.action,hasEagerState:L.hasEagerState,eagerState:L.eagerState,next:null},w===null?(h=w=Y,d=i):w=w.next=Y,ft.lanes|=ne,Ia|=ne;L=L.next}while(L!==null&&L!==t);if(w===null?d=i:w.next=h,!Ae(i,e.memoizedState)&&(Sn=!0,W&&(n=Jo,n!==null)))throw n;e.memoizedState=i,e.baseState=d,e.baseQueue=w,l.lastRenderedState=i}return s===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Wc(e){var t=gn(),n=t.queue;if(n===null)throw Error(u(311));n.lastRenderedReducer=e;var l=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var d=s=s.next;do i=e(i,d.action),d=d.next;while(d!==s);Ae(i,t.memoizedState)||(Sn=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function r_(e,t,n){var l=ft,s=gn(),i=Mt;if(i){if(n===void 0)throw Error(u(407));n=n()}else n=t();var d=!Ae((Ut||s).memoizedState,n);if(d&&(s.memoizedState=n,Sn=!0),s=s.queue,Zc(d_.bind(null,l,s,e),[e]),s.getSnapshot!==t||d||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,as(9,{destroy:void 0},u_.bind(null,l,s,n,t),null),Qt===null)throw Error(u(349));i||(da&127)!==0||c_(l,t,n)}return n}function c_(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ft.updateQueue,t===null?(t=rr(),ft.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function u_(e,t,n,l){t.value=n,t.getSnapshot=l,__(t)&&f_(e)}function d_(e,t,n){return n(function(){__(t)&&f_(e)})}function __(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ae(e,n)}catch{return!0}}function f_(e){var t=ho(e,2);t!==null&&sl(t,e,2)}function Gc(e){var t=Kn();if(typeof e=="function"){var n=e;if(e=n(),So){se(!0);try{n()}finally{se(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:e},t}function h_(e,t,n,l){return e.baseState=n,Qc(e,Ut,typeof l=="function"?l:_a)}function l0(e,t,n,l,s){if(fr(e))throw Error(u(485));if(e=t.action,e!==null){var i={payload:s,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(d){i.listeners.push(d)}};x.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,m_(t,i)):(i.next=n.next,t.pending=n.next=i)}}function m_(e,t){var n=t.action,l=t.payload,s=e.state;if(t.isTransition){var i=x.T,d={};x.T=d;try{var h=n(s,l),w=x.S;w!==null&&w(d,h),g_(e,t,h)}catch(L){Vc(e,t,L)}finally{i!==null&&d.types!==null&&(i.types=d.types),x.T=i}}else try{i=n(s,l),g_(e,t,i)}catch(L){Vc(e,t,L)}}function g_(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){y_(e,t,l)},function(l){return Vc(e,t,l)}):y_(e,t,n)}function y_(e,t,n){t.status="fulfilled",t.value=n,p_(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,m_(e,n)))}function Vc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,p_(t),t=t.next;while(t!==l)}e.action=null}function p_(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function x_(e,t){return t}function b_(e,t){if(Mt){var n=Qt.formState;if(n!==null){e:{var l=ft;if(Mt){if(Jt){t:{for(var s=Jt,i=El;s.nodeType!==8;){if(!i){s=null;break t}if(s=Tl(s.nextSibling),s===null){s=null;break t}}i=s.data,s=i==="F!"||i==="F"?s:null}if(s){Jt=Tl(s.nextSibling),l=s.data==="F!";break e}}Oa(l)}l=!1}l&&(t=n[0])}}return n=Kn(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:x_,lastRenderedState:t},n.queue=l,n=H_.bind(null,ft,l),l.dispatch=n,l=Gc(!1),i=eu.bind(null,ft,!1,l.queue),l=Kn(),s={state:t,dispatch:null,action:e,pending:null},l.queue=s,n=l0.bind(null,ft,s,i,n),s.dispatch=n,l.memoizedState=e,[t,n,!1]}function v_(e){var t=gn();return w_(t,Ut,e)}function w_(e,t,n){if(t=Qc(e,t,x_)[0],e=ur(_a)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ks(t)}catch(d){throw d===Po?er:d}else l=t;t=gn();var s=t.queue,i=s.dispatch;return n!==t.memoizedState&&(ft.flags|=2048,as(9,{destroy:void 0},a0.bind(null,s,n),null)),[l,i,e]}function a0(e,t){e.action=t}function S_(e){var t=gn(),n=Ut;if(n!==null)return w_(t,n,e);gn(),t=t.memoizedState,n=gn();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function as(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=ft.updateQueue,t===null&&(t=rr(),ft.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function k_(){return gn().memoizedState}function dr(e,t,n,l){var s=Kn();ft.flags|=e,s.memoizedState=as(1|t,{destroy:void 0},n,l===void 0?null:l)}function _r(e,t,n,l){var s=gn();l=l===void 0?null:l;var i=s.memoizedState.inst;Ut!==null&&l!==null&&Hc(l,Ut.memoizedState.deps)?s.memoizedState=as(t,i,n,l):(ft.flags|=e,s.memoizedState=as(1|t,i,n,l))}function j_(e,t){dr(8390656,8,e,t)}function Zc(e,t){_r(2048,8,e,t)}function o0(e){ft.flags|=4;var t=ft.updateQueue;if(t===null)t=rr(),ft.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function C_(e){var t=gn().memoizedState;return o0({ref:t,nextImpl:e}),function(){if((zt&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}function M_(e,t){return _r(4,2,e,t)}function E_(e,t){return _r(4,4,e,t)}function N_(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function T_(e,t,n){n=n!=null?n.concat([e]):null,_r(4,4,N_.bind(null,t,e),n)}function Kc(){}function R_(e,t){var n=gn();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&Hc(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function z_(e,t){var n=gn();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&Hc(t,l[1]))return l[0];if(l=e(),So){se(!0);try{e()}finally{se(!1)}}return n.memoizedState=[l,t],l}function Fc(e,t,n){return n===void 0||(da&1073741824)!==0&&(kt&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Af(),ft.lanes|=e,Ia|=e,n)}function D_(e,t,n,l){return Ae(n,t)?n:ts.current!==null?(e=Fc(e,n,l),Ae(e,t)||(Sn=!0),e):(da&42)===0||(da&1073741824)!==0&&(kt&261930)===0?(Sn=!0,e.memoizedState=n):(e=Af(),ft.lanes|=e,Ia|=e,t)}function A_(e,t,n,l,s){var i=J.p;J.p=i!==0&&8>i?i:8;var d=x.T,h={};x.T=h,eu(e,!1,t,n);try{var w=s(),L=x.S;if(L!==null&&L(h,w),w!==null&&typeof w=="object"&&typeof w.then=="function"){var W=e0(w,l);Fs(e,t,W,gl(e))}else Fs(e,t,l,gl(e))}catch(ne){Fs(e,t,{then:function(){},status:"rejected",reason:ne},gl())}finally{J.p=i,d!==null&&h.types!==null&&(d.types=h.types),x.T=d}}function s0(){}function Jc(e,t,n,l){if(e.tag!==5)throw Error(u(476));var s=O_(e).queue;A_(e,s,t,q,n===null?s0:function(){return B_(e),n(l)})}function O_(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:q},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function B_(e){var t=O_(e);t.next===null&&(t=e.alternate.memoizedState),Fs(e,t.next.queue,{},gl())}function Pc(){return An(hi)}function L_(){return gn().memoizedState}function $_(){return gn().memoizedState}function i0(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=gl();e=$a(n);var l=Ha(t,e,n);l!==null&&(sl(l,t,n),Ws(l,t,n)),t={cache:Ec()},e.payload=t;return}t=t.return}}function r0(e,t,n){var l=gl();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},fr(e)?U_(t,n):(n=yc(e,t,n,l),n!==null&&(sl(n,e,l),Y_(n,t,l)))}function H_(e,t,n){var l=gl();Fs(e,t,n,l)}function Fs(e,t,n,l){var s={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(fr(e))U_(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var d=t.lastRenderedState,h=i(d,n);if(s.hasEagerState=!0,s.eagerState=h,Ae(h,d))return Gi(e,t,s,0),Qt===null&&Wi(),!1}catch{}if(n=yc(e,t,s,l),n!==null)return sl(n,e,l),Y_(n,t,l),!0}return!1}function eu(e,t,n,l){if(l={lane:2,revertLane:zu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},fr(e)){if(t)throw Error(u(479))}else t=yc(e,n,l,2),t!==null&&sl(t,e,2)}function fr(e){var t=e.alternate;return e===ft||t!==null&&t===ft}function U_(e,t){ns=sr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Y_(e,t,n){if((n&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,$n(e,n)}}var Js={readContext:An,use:cr,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn};Js.useEffectEvent=cn;var X_={readContext:An,use:cr,useCallback:function(e,t){return Kn().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:j_,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,dr(4194308,4,N_.bind(null,t,e),n)},useLayoutEffect:function(e,t){return dr(4194308,4,e,t)},useInsertionEffect:function(e,t){dr(4,2,e,t)},useMemo:function(e,t){var n=Kn();t=t===void 0?null:t;var l=e();if(So){se(!0);try{e()}finally{se(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Kn();if(n!==void 0){var s=n(t);if(So){se(!0);try{n(t)}finally{se(!1)}}}else s=t;return l.memoizedState=l.baseState=s,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:s},l.queue=e,e=e.dispatch=r0.bind(null,ft,e),[l.memoizedState,e]},useRef:function(e){var t=Kn();return e={current:e},t.memoizedState=e},useState:function(e){e=Gc(e);var t=e.queue,n=H_.bind(null,ft,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Kc,useDeferredValue:function(e,t){var n=Kn();return Fc(n,e,t)},useTransition:function(){var e=Gc(!1);return e=A_.bind(null,ft,e.queue,!0,!1),Kn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=ft,s=Kn();if(Mt){if(n===void 0)throw Error(u(407));n=n()}else{if(n=t(),Qt===null)throw Error(u(349));(kt&127)!==0||c_(l,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,j_(d_.bind(null,l,i,e),[e]),l.flags|=2048,as(9,{destroy:void 0},u_.bind(null,l,i,n,t),null),n},useId:function(){var e=Kn(),t=Qt.identifierPrefix;if(Mt){var n=ea,l=Pl;n=(l&~(1<<32-Oe(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=t0++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Pc,useFormState:b_,useActionState:b_,useOptimistic:function(e){var t=Kn();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=eu.bind(null,ft,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ic,useCacheRefresh:function(){return Kn().memoizedState=i0.bind(null,ft)},useEffectEvent:function(e){var t=Kn(),n={impl:e};return t.memoizedState=n,function(){if((zt&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}},tu={readContext:An,use:cr,useCallback:R_,useContext:An,useEffect:Zc,useImperativeHandle:T_,useInsertionEffect:M_,useLayoutEffect:E_,useMemo:z_,useReducer:ur,useRef:k_,useState:function(){return ur(_a)},useDebugValue:Kc,useDeferredValue:function(e,t){var n=gn();return D_(n,Ut.memoizedState,e,t)},useTransition:function(){var e=ur(_a)[0],t=gn().memoizedState;return[typeof e=="boolean"?e:Ks(e),t]},useSyncExternalStore:r_,useId:L_,useHostTransitionStatus:Pc,useFormState:v_,useActionState:v_,useOptimistic:function(e,t){var n=gn();return h_(n,Ut,e,t)},useMemoCache:Ic,useCacheRefresh:$_};tu.useEffectEvent=C_;var q_={readContext:An,use:cr,useCallback:R_,useContext:An,useEffect:Zc,useImperativeHandle:T_,useInsertionEffect:M_,useLayoutEffect:E_,useMemo:z_,useReducer:Wc,useRef:k_,useState:function(){return Wc(_a)},useDebugValue:Kc,useDeferredValue:function(e,t){var n=gn();return Ut===null?Fc(n,e,t):D_(n,Ut.memoizedState,e,t)},useTransition:function(){var e=Wc(_a)[0],t=gn().memoizedState;return[typeof e=="boolean"?e:Ks(e),t]},useSyncExternalStore:r_,useId:L_,useHostTransitionStatus:Pc,useFormState:S_,useActionState:S_,useOptimistic:function(e,t){var n=gn();return Ut!==null?h_(n,Ut,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ic,useCacheRefresh:$_};q_.useEffectEvent=C_;function nu(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lu={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=gl(),s=$a(l);s.payload=t,n!=null&&(s.callback=n),t=Ha(e,s,l),t!==null&&(sl(t,e,l),Ws(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=gl(),s=$a(l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ha(e,s,l),t!==null&&(sl(t,e,l),Ws(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=gl(),l=$a(n);l.tag=2,t!=null&&(l.callback=t),t=Ha(e,l,n),t!==null&&(sl(t,e,n),Ws(t,e,n))}};function I_(e,t,n,l,s,i,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,d):t.prototype&&t.prototype.isPureReactComponent?!rt(n,l)||!rt(s,i):!0}function Q_(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&lu.enqueueReplaceState(t,t.state,null)}function ko(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=z({},n));for(var s in e)n[s]===void 0&&(n[s]=e[s])}return n}function W_(e){Qi(e)}function G_(e){console.error(e)}function V_(e){Qi(e)}function hr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Z_(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(s){setTimeout(function(){throw s})}}function au(e,t,n){return n=$a(n),n.tag=3,n.payload={element:null},n.callback=function(){hr(e,t)},n}function K_(e){return e=$a(e),e.tag=3,e}function F_(e,t,n,l){var s=n.type.getDerivedStateFromError;if(typeof s=="function"){var i=l.value;e.payload=function(){return s(i)},e.callback=function(){Z_(t,n,l)}}var d=n.stateNode;d!==null&&typeof d.componentDidCatch=="function"&&(e.callback=function(){Z_(t,n,l),typeof s!="function"&&(Qa===null?Qa=new Set([this]):Qa.add(this));var h=l.stack;this.componentDidCatch(l.value,{componentStack:h!==null?h:""})})}function c0(e,t,n,l,s){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ko(t,n,s,!0),n=_l.current,n!==null){switch(n.tag){case 31:case 13:return Nl===null?Cr():n.alternate===null&&un===0&&(un=3),n.flags&=-257,n.flags|=65536,n.lanes=s,l===tr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),Nu(e,l,s)),!1;case 22:return n.flags|=65536,l===tr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),Nu(e,l,s)),!1}throw Error(u(435,n.tag))}return Nu(e,l,s),Cr(),!1}if(Mt)return t=_l.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=s,l!==Sc&&(e=Error(u(422),{cause:l}),Ys(jl(e,n)))):(l!==Sc&&(t=Error(u(423),{cause:l}),Ys(jl(t,n))),e=e.current.alternate,e.flags|=65536,s&=-s,e.lanes|=s,l=jl(l,n),s=au(e.stateNode,l,s),Ac(e,s),un!==4&&(un=2)),!1;var i=Error(u(520),{cause:l});if(i=jl(i,n),si===null?si=[i]:si.push(i),un!==4&&(un=2),t===null)return!0;l=jl(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=s&-s,n.lanes|=e,e=au(n.stateNode,l,e),Ac(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Qa===null||!Qa.has(i))))return n.flags|=65536,s&=-s,n.lanes|=s,s=K_(s),F_(s,e,n,l),Ac(n,s),!1}n=n.return}while(n!==null);return!1}var ou=Error(u(461)),Sn=!1;function On(e,t,n,l){t.child=e===null?t_(t,null,n,l):wo(t,e.child,n,l)}function J_(e,t,n,l,s){n=n.render;var i=t.ref;if("ref"in l){var d={};for(var h in l)h!=="ref"&&(d[h]=l[h])}else d=l;return po(t),l=Uc(e,t,n,d,i,s),h=Yc(),e!==null&&!Sn?(Xc(e,t,s),fa(e,t,s)):(Mt&&h&&vc(t),t.flags|=1,On(e,t,l,s),t.child)}function P_(e,t,n,l,s){if(e===null){var i=n.type;return typeof i=="function"&&!pc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,ef(e,t,i,l,s)):(e=Zi(n.type,null,l,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!fu(e,s)){var d=i.memoizedProps;if(n=n.compare,n=n!==null?n:rt,n(d,l)&&e.ref===t.ref)return fa(e,t,s)}return t.flags|=1,e=ia(i,l),e.ref=t.ref,e.return=t,t.child=e}function ef(e,t,n,l,s){if(e!==null){var i=e.memoizedProps;if(rt(i,l)&&e.ref===t.ref)if(Sn=!1,t.pendingProps=l=i,fu(e,s))(e.flags&131072)!==0&&(Sn=!0);else return t.lanes=e.lanes,fa(e,t,s)}return su(e,t,n,l,s)}function tf(e,t,n,l){var s=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,s=0;l!==null;)s=s|l.lanes|l.childLanes,l=l.sibling;l=s&~i}else l=0,t.child=null;return nf(e,t,i,n,l)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pi(t,i!==null?i.cachePool:null),i!==null?a_(t,i):Bc(),o_(t);else return l=t.lanes=536870912,nf(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(Pi(t,i.cachePool),a_(t,i),Ya(),t.memoizedState=null):(e!==null&&Pi(t,null),Bc(),Ya());return On(e,t,s,n),t.child}function Ps(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function nf(e,t,n,l,s){var i=Tc();return i=i===null?null:{parent:vn._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Pi(t,null),Bc(),o_(t),e!==null&&Ko(e,t,l,!0),t.childLanes=s,null}function mr(e,t){return t=yr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function lf(e,t,n){return wo(t,e.child,null,n),e=mr(t,t.pendingProps),e.flags|=2,fl(t),t.memoizedState=null,e}function u0(e,t,n){var l=t.pendingProps,s=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Mt){if(l.mode==="hidden")return e=mr(t,l),t.lanes=536870912,Ps(null,e);if($c(t),(e=Jt)?(e=gh(e,El),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pl,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},n=Ud(e),n.return=t,t.child=n,Dn=t,Jt=null)):e=null,e===null)throw Oa(t);return t.lanes=536870912,null}return mr(t,l)}var i=e.memoizedState;if(i!==null){var d=i.dehydrated;if($c(t),s)if(t.flags&256)t.flags&=-257,t=lf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(u(558));else if(Sn||Ko(e,t,n,!1),s=(n&e.childLanes)!==0,Sn||s){if(l=Qt,l!==null&&(d=il(l,n),d!==0&&d!==i.retryLane))throw i.retryLane=d,ho(e,d),sl(l,e,d),ou;Cr(),t=lf(e,t,n)}else e=i.treeContext,Jt=Tl(d.nextSibling),Dn=t,Mt=!0,Aa=null,El=!1,e!==null&&qd(t,e),t=mr(t,l),t.flags|=4096;return t}return e=ia(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function gr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(u(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function su(e,t,n,l,s){return po(t),n=Uc(e,t,n,l,void 0,s),l=Yc(),e!==null&&!Sn?(Xc(e,t,s),fa(e,t,s)):(Mt&&l&&vc(t),t.flags|=1,On(e,t,n,s),t.child)}function af(e,t,n,l,s,i){return po(t),t.updateQueue=null,n=i_(t,l,n,s),s_(e),l=Yc(),e!==null&&!Sn?(Xc(e,t,i),fa(e,t,i)):(Mt&&l&&vc(t),t.flags|=1,On(e,t,n,i),t.child)}function of(e,t,n,l,s){if(po(t),t.stateNode===null){var i=Wo,d=n.contextType;typeof d=="object"&&d!==null&&(i=An(d)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lu,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},zc(t),d=n.contextType,i.context=typeof d=="object"&&d!==null?An(d):Wo,i.state=t.memoizedState,d=n.getDerivedStateFromProps,typeof d=="function"&&(nu(t,n,d,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(d=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),d!==i.state&&lu.enqueueReplaceState(i,i.state,null),Vs(t,l,i,s),Gs(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var h=t.memoizedProps,w=ko(n,h);i.props=w;var L=i.context,W=n.contextType;d=Wo,typeof W=="object"&&W!==null&&(d=An(W));var ne=n.getDerivedStateFromProps;W=typeof ne=="function"||typeof i.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,W||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(h||L!==d)&&Q_(t,i,l,d),La=!1;var Y=t.memoizedState;i.state=Y,Vs(t,l,i,s),Gs(),L=t.memoizedState,h||Y!==L||La?(typeof ne=="function"&&(nu(t,n,ne,l),L=t.memoizedState),(w=La||I_(t,n,w,l,Y,L,d))?(W||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=L),i.props=l,i.state=L,i.context=d,l=w):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Dc(e,t),d=t.memoizedProps,W=ko(n,d),i.props=W,ne=t.pendingProps,Y=i.context,L=n.contextType,w=Wo,typeof L=="object"&&L!==null&&(w=An(L)),h=n.getDerivedStateFromProps,(L=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(d!==ne||Y!==w)&&Q_(t,i,l,w),La=!1,Y=t.memoizedState,i.state=Y,Vs(t,l,i,s),Gs();var X=t.memoizedState;d!==ne||Y!==X||La||e!==null&&e.dependencies!==null&&Fi(e.dependencies)?(typeof h=="function"&&(nu(t,n,h,l),X=t.memoizedState),(W=La||I_(t,n,W,l,Y,X,w)||e!==null&&e.dependencies!==null&&Fi(e.dependencies))?(L||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,X,w),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,X,w)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=X),i.props=l,i.state=X,i.context=w,l=W):(typeof i.componentDidUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&Y===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,gr(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=wo(t,e.child,null,s),t.child=wo(t,null,n,s)):On(e,t,n,s),t.memoizedState=i.state,e=t.child):e=fa(e,t,s),e}function sf(e,t,n,l){return go(),t.flags|=256,On(e,t,n,l),t.child}var iu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ru(e){return{baseLanes:e,cachePool:Zd()}}function cu(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=ml),e}function rf(e,t,n){var l=t.pendingProps,s=!1,i=(t.flags&128)!==0,d;if((d=i)||(d=e!==null&&e.memoizedState===null?!1:(mn.current&2)!==0),d&&(s=!0,t.flags&=-129),d=(t.flags&32)!==0,t.flags&=-33,e===null){if(Mt){if(s?Ua(t):Ya(),(e=Jt)?(e=gh(e,El),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Da!==null?{id:Pl,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},n=Ud(e),n.return=t,t.child=n,Dn=t,Jt=null)):e=null,e===null)throw Oa(t);return Qu(e)?t.lanes=32:t.lanes=536870912,null}var h=l.children;return l=l.fallback,s?(Ya(),s=t.mode,h=yr({mode:"hidden",children:h},s),l=mo(l,s,n,null),h.return=t,l.return=t,h.sibling=l,t.child=h,l=t.child,l.memoizedState=ru(n),l.childLanes=cu(e,d,n),t.memoizedState=iu,Ps(null,l)):(Ua(t),uu(t,h))}var w=e.memoizedState;if(w!==null&&(h=w.dehydrated,h!==null)){if(i)t.flags&256?(Ua(t),t.flags&=-257,t=du(e,t,n)):t.memoizedState!==null?(Ya(),t.child=e.child,t.flags|=128,t=null):(Ya(),h=l.fallback,s=t.mode,l=yr({mode:"visible",children:l.children},s),h=mo(h,s,n,null),h.flags|=2,l.return=t,h.return=t,l.sibling=h,t.child=l,wo(t,e.child,null,n),l=t.child,l.memoizedState=ru(n),l.childLanes=cu(e,d,n),t.memoizedState=iu,t=Ps(null,l));else if(Ua(t),Qu(h)){if(d=h.nextSibling&&h.nextSibling.dataset,d)var L=d.dgst;d=L,l=Error(u(419)),l.stack="",l.digest=d,Ys({value:l,source:null,stack:null}),t=du(e,t,n)}else if(Sn||Ko(e,t,n,!1),d=(n&e.childLanes)!==0,Sn||d){if(d=Qt,d!==null&&(l=il(d,n),l!==0&&l!==w.retryLane))throw w.retryLane=l,ho(e,l),sl(d,e,l),ou;Iu(h)||Cr(),t=du(e,t,n)}else Iu(h)?(t.flags|=192,t.child=e.child,t=null):(e=w.treeContext,Jt=Tl(h.nextSibling),Dn=t,Mt=!0,Aa=null,El=!1,e!==null&&qd(t,e),t=uu(t,l.children),t.flags|=4096);return t}return s?(Ya(),h=l.fallback,s=t.mode,w=e.child,L=w.sibling,l=ia(w,{mode:"hidden",children:l.children}),l.subtreeFlags=w.subtreeFlags&65011712,L!==null?h=ia(L,h):(h=mo(h,s,n,null),h.flags|=2),h.return=t,l.return=t,l.sibling=h,t.child=l,Ps(null,l),l=t.child,h=e.child.memoizedState,h===null?h=ru(n):(s=h.cachePool,s!==null?(w=vn._currentValue,s=s.parent!==w?{parent:w,pool:w}:s):s=Zd(),h={baseLanes:h.baseLanes|n,cachePool:s}),l.memoizedState=h,l.childLanes=cu(e,d,n),t.memoizedState=iu,Ps(e.child,l)):(Ua(t),n=e.child,e=n.sibling,n=ia(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(d=t.deletions,d===null?(t.deletions=[e],t.flags|=16):d.push(e)),t.child=n,t.memoizedState=null,n)}function uu(e,t){return t=yr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function yr(e,t){return e=dl(22,e,null,t),e.lanes=0,e}function du(e,t,n){return wo(t,e.child,null,n),e=uu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cf(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Cc(e.return,t,n)}function _u(e,t,n,l,s,i){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:s,treeForkCount:i}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=l,d.tail=n,d.tailMode=s,d.treeForkCount=i)}function uf(e,t,n){var l=t.pendingProps,s=l.revealOrder,i=l.tail;l=l.children;var d=mn.current,h=(d&2)!==0;if(h?(d=d&1|2,t.flags|=128):d&=1,ue(mn,d),On(e,t,l,n),l=Mt?Us:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cf(e,n,t);else if(e.tag===19)cf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&or(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),_u(t,!1,s,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&or(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}_u(t,!0,n,null,i,l);break;case"together":_u(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function fa(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ko(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(u(153));if(t.child!==null){for(e=t.child,n=ia(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ia(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fu(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Fi(e)))}function d0(e,t,n){switch(t.tag){case 3:It(t,t.stateNode.containerInfo),Ba(t,vn,e.memoizedState.cache),go();break;case 27:case 5:Mn(t);break;case 4:It(t,t.stateNode.containerInfo);break;case 10:Ba(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,$c(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ua(t),t.flags|=128,null):(n&t.child.childLanes)!==0?rf(e,t,n):(Ua(t),e=fa(e,t,n),e!==null?e.sibling:null);Ua(t);break;case 19:var s=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ko(e,t,n,!1),l=(n&t.childLanes)!==0),s){if(l)return uf(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ue(mn,mn.current),l)break;return null;case 22:return t.lanes=0,tf(e,t,n,t.pendingProps);case 24:Ba(t,vn,e.memoizedState.cache)}return fa(e,t,n)}function df(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Sn=!0;else{if(!fu(e,n)&&(t.flags&128)===0)return Sn=!1,d0(e,t,n);Sn=(e.flags&131072)!==0}else Sn=!1,Mt&&(t.flags&1048576)!==0&&Xd(t,Us,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=bo(t.elementType),t.type=e,typeof e=="function")pc(e)?(l=ko(e,l),t.tag=1,t=of(null,t,e,l,n)):(t.tag=0,t=su(null,t,e,l,n));else{if(e!=null){var s=e.$$typeof;if(s===be){t.tag=11,t=J_(null,t,e,l,n);break e}else if(s===ee){t.tag=14,t=P_(null,t,e,l,n);break e}}throw t=ke(e)||e,Error(u(306,t,""))}}return t;case 0:return su(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,s=ko(l,t.pendingProps),of(e,t,l,s,n);case 3:e:{if(It(t,t.stateNode.containerInfo),e===null)throw Error(u(387));l=t.pendingProps;var i=t.memoizedState;s=i.element,Dc(e,t),Vs(t,l,null,n);var d=t.memoizedState;if(l=d.cache,Ba(t,vn,l),l!==i.cache&&Mc(t,[vn],n,!0),Gs(),l=d.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:d.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=sf(e,t,l,n);break e}else if(l!==s){s=jl(Error(u(424)),t),Ys(s),t=sf(e,t,l,n);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,Jt=Tl(e.firstChild),Dn=t,Mt=!0,Aa=null,El=!0,n=t_(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(go(),l===s){t=fa(e,t,n);break e}On(e,t,l,n)}t=t.child}return t;case 26:return gr(e,t),e===null?(n=wh(t.type,null,t.pendingProps,null))?t.memoizedState=n:Mt||(n=t.type,e=t.pendingProps,l=Dr(ut.current).createElement(n),l[rn]=t,l[Un]=e,Bn(l,n,e),xn(l),t.stateNode=l):t.memoizedState=wh(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Mn(t),e===null&&Mt&&(l=t.stateNode=xh(t.type,t.pendingProps,ut.current),Dn=t,El=!0,s=Jt,Za(t.type)?(Wu=s,Jt=Tl(l.firstChild)):Jt=s),On(e,t,t.pendingProps.children,n),gr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Mt&&((s=l=Jt)&&(l=Y0(l,t.type,t.pendingProps,El),l!==null?(t.stateNode=l,Dn=t,Jt=Tl(l.firstChild),El=!1,s=!0):s=!1),s||Oa(t)),Mn(t),s=t.type,i=t.pendingProps,d=e!==null?e.memoizedProps:null,l=i.children,Yu(s,i)?l=null:d!==null&&Yu(s,d)&&(t.flags|=32),t.memoizedState!==null&&(s=Uc(e,t,n0,null,null,n),hi._currentValue=s),gr(e,t),On(e,t,l,n),t.child;case 6:return e===null&&Mt&&((e=n=Jt)&&(n=X0(n,t.pendingProps,El),n!==null?(t.stateNode=n,Dn=t,Jt=null,e=!0):e=!1),e||Oa(t)),null;case 13:return rf(e,t,n);case 4:return It(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=wo(t,null,l,n):On(e,t,l,n),t.child;case 11:return J_(e,t,t.type,t.pendingProps,n);case 7:return On(e,t,t.pendingProps,n),t.child;case 8:return On(e,t,t.pendingProps.children,n),t.child;case 12:return On(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Ba(t,t.type,l.value),On(e,t,l.children,n),t.child;case 9:return s=t.type._context,l=t.pendingProps.children,po(t),s=An(s),l=l(s),t.flags|=1,On(e,t,l,n),t.child;case 14:return P_(e,t,t.type,t.pendingProps,n);case 15:return ef(e,t,t.type,t.pendingProps,n);case 19:return uf(e,t,n);case 31:return u0(e,t,n);case 22:return tf(e,t,n,t.pendingProps);case 24:return po(t),l=An(vn),e===null?(s=Tc(),s===null&&(s=Qt,i=Ec(),s.pooledCache=i,i.refCount++,i!==null&&(s.pooledCacheLanes|=n),s=i),t.memoizedState={parent:l,cache:s},zc(t),Ba(t,vn,s)):((e.lanes&n)!==0&&(Dc(e,t),Vs(t,null,null,n),Gs()),s=e.memoizedState,i=t.memoizedState,s.parent!==l?(s={parent:l,cache:l},t.memoizedState=s,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=s),Ba(t,vn,l)):(l=i.cache,Ba(t,vn,l),l!==s.cache&&Mc(t,[vn],n,!0))),On(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(u(156,t.tag))}function ha(e){e.flags|=4}function hu(e,t,n,l,s){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(s&335544128)===s)if(e.stateNode.complete)e.flags|=8192;else if($f())e.flags|=8192;else throw vo=tr,Rc}else e.flags&=-16777217}function _f(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mh(t))if($f())e.flags|=8192;else throw vo=tr,Rc}function pr(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Ie():536870912,e.lanes|=t,rs|=t)}function ei(e,t){if(!Mt)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags&65011712,l|=s.flags&65011712,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,l|=s.subtreeFlags,l|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function _0(e,t,n){var l=t.pendingProps;switch(wc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(t),null;case 1:return Pt(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),ua(vn),Ct(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zo(t)?ha(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kc())),Pt(t),null;case 26:var s=t.type,i=t.memoizedState;return e===null?(ha(t),i!==null?(Pt(t),_f(t,i)):(Pt(t),hu(t,s,null,l,n))):i?i!==e.memoizedState?(ha(t),Pt(t),_f(t,i)):(Pt(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&ha(t),Pt(t),hu(t,s,e,l,n)),null;case 27:if(dn(t),n=ut.current,s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ha(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Pt(t),null}e=ye.current,Zo(t)?Id(t):(e=xh(s,l,n),t.stateNode=e,ha(t))}return Pt(t),null;case 5:if(dn(t),s=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&ha(t);else{if(!l){if(t.stateNode===null)throw Error(u(166));return Pt(t),null}if(i=ye.current,Zo(t))Id(t);else{var d=Dr(ut.current);switch(i){case 1:i=d.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:i=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":i=d.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":i=d.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":i=d.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?d.createElement("select",{is:l.is}):d.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?d.createElement(s,{is:l.is}):d.createElement(s)}}i[rn]=t,i[Un]=l;e:for(d=t.child;d!==null;){if(d.tag===5||d.tag===6)i.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}t.stateNode=i;e:switch(Bn(i,s,l),s){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ha(t)}}return Pt(t),hu(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&ha(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(u(166));if(e=ut.current,Zo(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,s=Dn,s!==null)switch(s.tag){case 27:case 5:l=s.memoizedProps}e[rn]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||rh(e.nodeValue,n)),e||Oa(t,!0)}else e=Dr(e).createTextNode(l),e[rn]=t,t.stateNode=e}return Pt(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Zo(t),n!==null){if(e===null){if(!l)throw Error(u(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[rn]=t}else go(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pt(t),e=!1}else n=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(fl(t),t):(fl(t),null);if((t.flags&128)!==0)throw Error(u(558))}return Pt(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(s=Zo(t),l!==null&&l.dehydrated!==null){if(e===null){if(!s)throw Error(u(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(u(317));s[rn]=t}else go(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Pt(t),s=!1}else s=kc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),s=!0;if(!s)return t.flags&256?(fl(t),t):(fl(t),null)}return fl(t),(t.flags&128)!==0?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,s=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(s=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==s&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),pr(t,t.updateQueue),Pt(t),null);case 4:return Ct(),e===null&&Bu(t.stateNode.containerInfo),Pt(t),null;case 10:return ua(t.type),Pt(t),null;case 19:if(Q(mn),l=t.memoizedState,l===null)return Pt(t),null;if(s=(t.flags&128)!==0,i=l.rendering,i===null)if(s)ei(l,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=or(e),i!==null){for(t.flags|=128,ei(l,!1),e=i.updateQueue,t.updateQueue=e,pr(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Hd(n,e),n=n.sibling;return ue(mn,mn.current&1|2),Mt&&ra(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&He()>Sr&&(t.flags|=128,s=!0,ei(l,!1),t.lanes=4194304)}else{if(!s)if(e=or(i),e!==null){if(t.flags|=128,s=!0,e=e.updateQueue,t.updateQueue=e,pr(t,e),ei(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!Mt)return Pt(t),null}else 2*He()-l.renderingStartTime>Sr&&n!==536870912&&(t.flags|=128,s=!0,ei(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=He(),e.sibling=null,n=mn.current,ue(mn,s?n&1|2:n&1),Mt&&ra(t,l.treeForkCount),e):(Pt(t),null);case 22:case 23:return fl(t),Lc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(n&536870912)!==0&&(t.flags&128)===0&&(Pt(t),t.subtreeFlags&6&&(t.flags|=8192)):Pt(t),n=t.updateQueue,n!==null&&pr(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Q(xo),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ua(vn),Pt(t),null;case 25:return null;case 30:return null}throw Error(u(156,t.tag))}function f0(e,t){switch(wc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ua(vn),Ct(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dn(t),null;case 31:if(t.memoizedState!==null){if(fl(t),t.alternate===null)throw Error(u(340));go()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fl(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(u(340));go()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(mn),null;case 4:return Ct(),null;case 10:return ua(t.type),null;case 22:case 23:return fl(t),Lc(),e!==null&&Q(xo),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ua(vn),null;case 25:return null;default:return null}}function ff(e,t){switch(wc(t),t.tag){case 3:ua(vn),Ct();break;case 26:case 27:case 5:dn(t);break;case 4:Ct();break;case 31:t.memoizedState!==null&&fl(t);break;case 13:fl(t);break;case 19:Q(mn);break;case 10:ua(t.type);break;case 22:case 23:fl(t),Lc(),e!==null&&Q(xo);break;case 24:ua(vn)}}function ti(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var s=l.next;n=s;do{if((n.tag&e)===e){l=void 0;var i=n.create,d=n.inst;l=i(),d.destroy=l}n=n.next}while(n!==s)}}catch(h){$t(t,t.return,h)}}function Xa(e,t,n){try{var l=t.updateQueue,s=l!==null?l.lastEffect:null;if(s!==null){var i=s.next;l=i;do{if((l.tag&e)===e){var d=l.inst,h=d.destroy;if(h!==void 0){d.destroy=void 0,s=t;var w=n,L=h;try{L()}catch(W){$t(s,w,W)}}}l=l.next}while(l!==i)}}catch(W){$t(t,t.return,W)}}function hf(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{l_(t,n)}catch(l){$t(e,e.return,l)}}}function mf(e,t,n){n.props=ko(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){$t(e,t,l)}}function ni(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(s){$t(e,t,s)}}function ta(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(s){$t(e,t,s)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(s){$t(e,t,s)}else n.current=null}function gf(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(s){$t(e,e.return,s)}}function mu(e,t,n){try{var l=e.stateNode;O0(l,e.type,n,t),l[Un]=t}catch(s){$t(e,e.return,s)}}function yf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function gu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zl));else if(l!==4&&(l===27&&Za(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(yu(e,t,n),e=e.sibling;e!==null;)yu(e,t,n),e=e.sibling}function xr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&Za(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(xr(e,t,n),e=e.sibling;e!==null;)xr(e,t,n),e=e.sibling}function pf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,s=t.attributes;s.length;)t.removeAttributeNode(s[0]);Bn(t,l,n),t[rn]=e,t[Un]=n}catch(i){$t(e,e.return,i)}}var ma=!1,kn=!1,pu=!1,xf=typeof WeakSet=="function"?WeakSet:Set,Tn=null;function h0(e,t){if(e=e.containerInfo,Hu=Ur,e=Zn(e),hn(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var s=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var d=0,h=-1,w=-1,L=0,W=0,ne=e,Y=null;t:for(;;){for(var X;ne!==n||s!==0&&ne.nodeType!==3||(h=d+s),ne!==i||l!==0&&ne.nodeType!==3||(w=d+l),ne.nodeType===3&&(d+=ne.nodeValue.length),(X=ne.firstChild)!==null;)Y=ne,ne=X;for(;;){if(ne===e)break t;if(Y===n&&++L===s&&(h=d),Y===i&&++W===l&&(w=d),(X=ne.nextSibling)!==null)break;ne=Y,Y=ne.parentNode}ne=X}n=h===-1||w===-1?null:{start:h,end:w}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:e,selectionRange:n},Ur=!1,Tn=t;Tn!==null;)if(t=Tn,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Tn=e;else for(;Tn!==null;){switch(t=Tn,i=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)s=e[n],s.ref.impl=s.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,n=t,s=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var Re=ko(n.type,s);e=l.getSnapshotBeforeUpdate(Re,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(et){$t(n,n.return,et)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)qu(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=t.sibling,e!==null){e.return=t.return,Tn=e;break}Tn=t.return}}function bf(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:ya(e,n),l&4&&ti(5,n);break;case 1:if(ya(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(d){$t(n,n.return,d)}else{var s=ko(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(s,t,e.__reactInternalSnapshotBeforeUpdate)}catch(d){$t(n,n.return,d)}}l&64&&hf(n),l&512&&ni(n,n.return);break;case 3:if(ya(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{l_(e,t)}catch(d){$t(n,n.return,d)}}break;case 27:t===null&&l&4&&pf(n);case 26:case 5:ya(e,n),t===null&&l&4&&gf(n),l&512&&ni(n,n.return);break;case 12:ya(e,n);break;case 31:ya(e,n),l&4&&Sf(e,n);break;case 13:ya(e,n),l&4&&kf(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=S0.bind(null,n),q0(e,n))));break;case 22:if(l=n.memoizedState!==null||ma,!l){t=t!==null&&t.memoizedState!==null||kn,s=ma;var i=kn;ma=l,(kn=t)&&!i?pa(e,n,(n.subtreeFlags&8772)!==0):ya(e,n),ma=s,kn=i}break;case 30:break;default:ya(e,n)}}function vf(e){var t=e.alternate;t!==null&&(e.alternate=null,vf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&zo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,nl=!1;function ga(e,t,n){for(n=n.child;n!==null;)wf(e,t,n),n=n.sibling}function wf(e,t,n){if(re&&typeof re.onCommitFiberUnmount=="function")try{re.onCommitFiberUnmount(je,n)}catch{}switch(n.tag){case 26:kn||ta(n,t),ga(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:kn||ta(n,t);var l=nn,s=nl;Za(n.type)&&(nn=n.stateNode,nl=!1),ga(e,t,n),di(n.stateNode),nn=l,nl=s;break;case 5:kn||ta(n,t);case 6:if(l=nn,s=nl,nn=null,ga(e,t,n),nn=l,nl=s,nn!==null)if(nl)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(n.stateNode)}catch(i){$t(n,t,i)}else try{nn.removeChild(n.stateNode)}catch(i){$t(n,t,i)}break;case 18:nn!==null&&(nl?(e=nn,hh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),gs(e)):hh(nn,n.stateNode));break;case 4:l=nn,s=nl,nn=n.stateNode.containerInfo,nl=!0,ga(e,t,n),nn=l,nl=s;break;case 0:case 11:case 14:case 15:Xa(2,n,t),kn||Xa(4,n,t),ga(e,t,n);break;case 1:kn||(ta(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&mf(n,t,l)),ga(e,t,n);break;case 21:ga(e,t,n);break;case 22:kn=(l=kn)||n.memoizedState!==null,ga(e,t,n),kn=l;break;default:ga(e,t,n)}}function Sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{gs(e)}catch(n){$t(t,t.return,n)}}}function kf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{gs(e)}catch(n){$t(t,t.return,n)}}function m0(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new xf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new xf),t;default:throw Error(u(435,e.tag))}}function br(e,t){var n=m0(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var s=k0.bind(null,e,l);l.then(s,s)}})}function ll(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var s=n[l],i=e,d=t,h=d;e:for(;h!==null;){switch(h.tag){case 27:if(Za(h.type)){nn=h.stateNode,nl=!1;break e}break;case 5:nn=h.stateNode,nl=!1;break e;case 3:case 4:nn=h.stateNode.containerInfo,nl=!0;break e}h=h.return}if(nn===null)throw Error(u(160));wf(i,d,s),nn=null,nl=!1,i=s.alternate,i!==null&&(i.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)jf(t,e),t=t.sibling}var Ll=null;function jf(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ll(t,e),al(e),l&4&&(Xa(3,e,e.return),ti(3,e),Xa(5,e,e.return));break;case 1:ll(t,e),al(e),l&512&&(kn||n===null||ta(n,n.return)),l&64&&ma&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var s=Ll;if(ll(t,e),al(e),l&512&&(kn||n===null||ta(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,s=s.ownerDocument||s;t:switch(l){case"title":i=s.getElementsByTagName("title")[0],(!i||i[lo]||i[rn]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=s.createElement(l),s.head.insertBefore(i,s.querySelector("head > title"))),Bn(i,l,n),i[rn]=e,xn(i),l=i;break e;case"link":var d=jh("link","href",s).get(l+(n.href||""));if(d){for(var h=0;h<d.length;h++)if(i=d[h],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){d.splice(h,1);break t}}i=s.createElement(l),Bn(i,l,n),s.head.appendChild(i);break;case"meta":if(d=jh("meta","content",s).get(l+(n.content||""))){for(h=0;h<d.length;h++)if(i=d[h],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){d.splice(h,1);break t}}i=s.createElement(l),Bn(i,l,n),s.head.appendChild(i);break;default:throw Error(u(468,l))}i[rn]=e,xn(i),l=i}e.stateNode=l}else Ch(s,e.type,e.stateNode);else e.stateNode=kh(s,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?Ch(s,e.type,e.stateNode):kh(s,l,e.memoizedProps)):l===null&&e.stateNode!==null&&mu(e,e.memoizedProps,n.memoizedProps)}break;case 27:ll(t,e),al(e),l&512&&(kn||n===null||ta(n,n.return)),n!==null&&l&4&&mu(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ll(t,e),al(e),l&512&&(kn||n===null||ta(n,n.return)),e.flags&32){s=e.stateNode;try{Ma(s,"")}catch(Re){$t(e,e.return,Re)}}l&4&&e.stateNode!=null&&(s=e.memoizedProps,mu(e,s,n!==null?n.memoizedProps:s)),l&1024&&(pu=!0);break;case 6:if(ll(t,e),al(e),l&4){if(e.stateNode===null)throw Error(u(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(Re){$t(e,e.return,Re)}}break;case 3:if(Br=null,s=Ll,Ll=Ar(t.containerInfo),ll(t,e),Ll=s,al(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(t.containerInfo)}catch(Re){$t(e,e.return,Re)}pu&&(pu=!1,Cf(e));break;case 4:l=Ll,Ll=Ar(e.stateNode.containerInfo),ll(t,e),al(e),Ll=l;break;case 12:ll(t,e),al(e);break;case 31:ll(t,e),al(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,br(e,l)));break;case 13:ll(t,e),al(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(wr=He()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,br(e,l)));break;case 22:s=e.memoizedState!==null;var w=n!==null&&n.memoizedState!==null,L=ma,W=kn;if(ma=L||s,kn=W||w,ll(t,e),kn=W,ma=L,al(e),l&8192)e:for(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,s&&(n===null||w||ma||kn||jo(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){w=n=t;try{if(i=w.stateNode,s)d=i.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none";else{h=w.stateNode;var ne=w.memoizedProps.style,Y=ne!=null&&ne.hasOwnProperty("display")?ne.display:null;h.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(Re){$t(w,w.return,Re)}}}else if(t.tag===6){if(n===null){w=t;try{w.stateNode.nodeValue=s?"":w.memoizedProps}catch(Re){$t(w,w.return,Re)}}}else if(t.tag===18){if(n===null){w=t;try{var X=w.stateNode;s?mh(X,!0):mh(w.stateNode,!1)}catch(Re){$t(w,w.return,Re)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,br(e,n))));break;case 19:ll(t,e),al(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,br(e,l)));break;case 30:break;case 21:break;default:ll(t,e),al(e)}}function al(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(yf(l)){n=l;break}l=l.return}if(n==null)throw Error(u(160));switch(n.tag){case 27:var s=n.stateNode,i=gu(e);xr(e,i,s);break;case 5:var d=n.stateNode;n.flags&32&&(Ma(d,""),n.flags&=-33);var h=gu(e);xr(e,h,d);break;case 3:case 4:var w=n.stateNode.containerInfo,L=gu(e);yu(e,L,w);break;default:throw Error(u(161))}}catch(W){$t(e,e.return,W)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Cf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ya(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)bf(e,t.alternate,t),t=t.sibling}function jo(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Xa(4,t,t.return),jo(t);break;case 1:ta(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&mf(t,t.return,n),jo(t);break;case 27:di(t.stateNode);case 26:case 5:ta(t,t.return),jo(t);break;case 22:t.memoizedState===null&&jo(t);break;case 30:jo(t);break;default:jo(t)}e=e.sibling}}function pa(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,s=e,i=t,d=i.flags;switch(i.tag){case 0:case 11:case 15:pa(s,i,n),ti(4,i);break;case 1:if(pa(s,i,n),l=i,s=l.stateNode,typeof s.componentDidMount=="function")try{s.componentDidMount()}catch(L){$t(l,l.return,L)}if(l=i,s=l.updateQueue,s!==null){var h=l.stateNode;try{var w=s.shared.hiddenCallbacks;if(w!==null)for(s.shared.hiddenCallbacks=null,s=0;s<w.length;s++)n_(w[s],h)}catch(L){$t(l,l.return,L)}}n&&d&64&&hf(i),ni(i,i.return);break;case 27:pf(i);case 26:case 5:pa(s,i,n),n&&l===null&&d&4&&gf(i),ni(i,i.return);break;case 12:pa(s,i,n);break;case 31:pa(s,i,n),n&&d&4&&Sf(s,i);break;case 13:pa(s,i,n),n&&d&4&&kf(s,i);break;case 22:i.memoizedState===null&&pa(s,i,n),ni(i,i.return);break;case 30:break;default:pa(s,i,n)}t=t.sibling}}function xu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Xs(n))}function bu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xs(e))}function $l(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Mf(e,t,n,l),t=t.sibling}function Mf(e,t,n,l){var s=t.flags;switch(t.tag){case 0:case 11:case 15:$l(e,t,n,l),s&2048&&ti(9,t);break;case 1:$l(e,t,n,l);break;case 3:$l(e,t,n,l),s&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xs(e)));break;case 12:if(s&2048){$l(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,d=i.id,h=i.onPostCommit;typeof h=="function"&&h(d,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(w){$t(t,t.return,w)}}else $l(e,t,n,l);break;case 31:$l(e,t,n,l);break;case 13:$l(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,d=t.alternate,t.memoizedState!==null?i._visibility&2?$l(e,t,n,l):li(e,t):i._visibility&2?$l(e,t,n,l):(i._visibility|=2,os(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),s&2048&&xu(d,t);break;case 24:$l(e,t,n,l),s&2048&&bu(t.alternate,t);break;default:$l(e,t,n,l)}}function os(e,t,n,l,s){for(s=s&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,d=t,h=n,w=l,L=d.flags;switch(d.tag){case 0:case 11:case 15:os(i,d,h,w,s),ti(8,d);break;case 23:break;case 22:var W=d.stateNode;d.memoizedState!==null?W._visibility&2?os(i,d,h,w,s):li(i,d):(W._visibility|=2,os(i,d,h,w,s)),s&&L&2048&&xu(d.alternate,d);break;case 24:os(i,d,h,w,s),s&&L&2048&&bu(d.alternate,d);break;default:os(i,d,h,w,s)}t=t.sibling}}function li(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,s=l.flags;switch(l.tag){case 22:li(n,l),s&2048&&xu(l.alternate,l);break;case 24:li(n,l),s&2048&&bu(l.alternate,l);break;default:li(n,l)}t=t.sibling}}var ai=8192;function ss(e,t,n){if(e.subtreeFlags&ai)for(e=e.child;e!==null;)Ef(e,t,n),e=e.sibling}function Ef(e,t,n){switch(e.tag){case 26:ss(e,t,n),e.flags&ai&&e.memoizedState!==null&&tg(n,Ll,e.memoizedState,e.memoizedProps);break;case 5:ss(e,t,n);break;case 3:case 4:var l=Ll;Ll=Ar(e.stateNode.containerInfo),ss(e,t,n),Ll=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ai,ai=16777216,ss(e,t,n),ai=l):ss(e,t,n));break;default:ss(e,t,n)}}function Nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Tn=l,Rf(l,e)}Nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tf(e),e=e.sibling}function Tf(e){switch(e.tag){case 0:case 11:case 15:oi(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:oi(e);break;case 12:oi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,vr(e)):oi(e);break;default:oi(e)}}function vr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];Tn=l,Rf(l,e)}Nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Xa(8,t,t.return),vr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,vr(t));break;default:vr(t)}e=e.sibling}}function Rf(e,t){for(;Tn!==null;){var n=Tn;switch(n.tag){case 0:case 11:case 15:Xa(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Xs(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Tn=l;else e:for(n=e;Tn!==null;){l=Tn;var s=l.sibling,i=l.return;if(vf(l),l===n){Tn=null;break e}if(s!==null){s.return=i,Tn=s;break e}Tn=i}}}var g0={getCacheForType:function(e){var t=An(vn),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return An(vn).controller.signal}},y0=typeof WeakMap=="function"?WeakMap:Map,zt=0,Qt=null,wt=null,kt=0,Lt=0,hl=null,qa=!1,is=!1,vu=!1,xa=0,un=0,Ia=0,Co=0,wu=0,ml=0,rs=0,si=null,ol=null,Su=!1,wr=0,zf=0,Sr=1/0,kr=null,Qa=null,Cn=0,Wa=null,cs=null,ba=0,ku=0,ju=null,Df=null,ii=0,Cu=null;function gl(){return(zt&2)!==0&&kt!==0?kt&-kt:x.T!==null?zu():no()}function Af(){if(ml===0)if((kt&536870912)===0||Mt){var e=ce;ce<<=1,(ce&3932160)===0&&(ce=262144),ml=e}else ml=536870912;return e=_l.current,e!==null&&(e.flags|=32),ml}function sl(e,t,n){(e===Qt&&(Lt===2||Lt===9)||e.cancelPendingCommit!==null)&&(us(e,0),Ga(e,kt,ml,!1)),lt(e,n),((zt&2)===0||e!==Qt)&&(e===Qt&&((zt&2)===0&&(Co|=n),un===4&&Ga(e,kt,ml,!1)),na(e))}function Of(e,t,n){if((zt&6)!==0)throw Error(u(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Xe(e,t),s=l?b0(e,t):Eu(e,t,!0),i=l;do{if(s===0){is&&!l&&Ga(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!p0(n)){s=Eu(e,t,!1),i=!1;continue}if(s===2){if(i=t,e.errorRecoveryDisabledLanes&i)var d=0;else d=e.pendingLanes&-536870913,d=d!==0?d:d&536870912?536870912:0;if(d!==0){t=d;e:{var h=e;s=si;var w=h.current.memoizedState.isDehydrated;if(w&&(us(h,d).flags|=256),d=Eu(h,d,!1),d!==2){if(vu&&!w){h.errorRecoveryDisabledLanes|=i,Co|=i,s=4;break e}i=ol,ol=s,i!==null&&(ol===null?ol=i:ol.push.apply(ol,i))}s=d}if(i=!1,s!==2)continue}}if(s===1){us(e,0),Ga(e,t,0,!0);break}e:{switch(l=e,i=s,i){case 0:case 1:throw Error(u(345));case 4:if((t&4194048)!==t)break;case 6:Ga(l,t,ml,!qa);break e;case 2:ol=null;break;case 3:case 5:break;default:throw Error(u(329))}if((t&62914560)===t&&(s=wr+300-He(),10<s)){if(Ga(l,t,ml,!qa),xe(l,0,!0)!==0)break e;ba=t,l.timeoutHandle=_h(Bf.bind(null,l,n,ol,kr,Su,t,ml,Co,rs,qa,i,"Throttled",-0,0),s);break e}Bf(l,n,ol,kr,Su,t,ml,Co,rs,qa,i,null,-0,0)}}break}while(!0);na(e)}function Bf(e,t,n,l,s,i,d,h,w,L,W,ne,Y,X){if(e.timeoutHandle=-1,ne=t.subtreeFlags,ne&8192||(ne&16785408)===16785408){ne={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zl},Ef(t,i,ne);var Re=(i&62914560)===i?wr-He():(i&4194048)===i?zf-He():0;if(Re=ng(ne,Re),Re!==null){ba=i,e.cancelPendingCommit=Re(If.bind(null,e,t,i,n,l,s,d,h,w,W,ne,null,Y,X)),Ga(e,i,d,!L);return}}If(e,t,i,n,l,s,d,h,w)}function p0(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var s=n[l],i=s.getSnapshot;s=s.value;try{if(!Ae(i(),s))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ga(e,t,n,l){t&=~wu,t&=~Co,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var s=t;0<s;){var i=31-Oe(s),d=1<<i;l[i]=-1,s&=~d}n!==0&&Rn(e,n,t)}function jr(){return(zt&6)===0?(ri(0),!1):!0}function Mu(){if(wt!==null){if(Lt===0)var e=wt.return;else e=wt,ca=yo=null,qc(e),es=null,Is=0,e=wt;for(;e!==null;)ff(e.alternate,e),e=e.return;wt=null}}function us(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,$0(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ba=0,Mu(),Qt=e,wt=n=ia(e.current,null),kt=t,Lt=0,hl=null,qa=!1,is=Xe(e,t),vu=!1,rs=ml=wu=Co=Ia=un=0,ol=si=null,Su=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var s=31-Oe(l),i=1<<s;t|=e[s],l&=~i}return xa=t,Wi(),n}function Lf(e,t){ft=null,x.H=Js,t===Po||t===er?(t=Jd(),Lt=3):t===Rc?(t=Jd(),Lt=4):Lt=t===ou?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,hl=t,wt===null&&(un=1,hr(e,jl(t,e.current)))}function $f(){var e=_l.current;return e===null?!0:(kt&4194048)===kt?Nl===null:(kt&62914560)===kt||(kt&536870912)!==0?e===Nl:!1}function Hf(){var e=x.H;return x.H=Js,e===null?Js:e}function Uf(){var e=x.A;return x.A=g0,e}function Cr(){un=4,qa||(kt&4194048)!==kt&&_l.current!==null||(is=!0),(Ia&134217727)===0&&(Co&134217727)===0||Qt===null||Ga(Qt,kt,ml,!1)}function Eu(e,t,n){var l=zt;zt|=2;var s=Hf(),i=Uf();(Qt!==e||kt!==t)&&(kr=null,us(e,t)),t=!1;var d=un;e:do try{if(Lt!==0&&wt!==null){var h=wt,w=hl;switch(Lt){case 8:Mu(),d=6;break e;case 3:case 2:case 9:case 6:_l.current===null&&(t=!0);var L=Lt;if(Lt=0,hl=null,ds(e,h,w,L),n&&is){d=0;break e}break;default:L=Lt,Lt=0,hl=null,ds(e,h,w,L)}}x0(),d=un;break}catch(W){Lf(e,W)}while(!0);return t&&e.shellSuspendCounter++,ca=yo=null,zt=l,x.H=s,x.A=i,wt===null&&(Qt=null,kt=0,Wi()),d}function x0(){for(;wt!==null;)Yf(wt)}function b0(e,t){var n=zt;zt|=2;var l=Hf(),s=Uf();Qt!==e||kt!==t?(kr=null,Sr=He()+500,us(e,t)):is=Xe(e,t);e:do try{if(Lt!==0&&wt!==null){t=wt;var i=hl;t:switch(Lt){case 1:Lt=0,hl=null,ds(e,t,i,1);break;case 2:case 9:if(Kd(i)){Lt=0,hl=null,Xf(t);break}t=function(){Lt!==2&&Lt!==9||Qt!==e||(Lt=7),na(e)},i.then(t,t);break e;case 3:Lt=7;break e;case 4:Lt=5;break e;case 7:Kd(i)?(Lt=0,hl=null,Xf(t)):(Lt=0,hl=null,ds(e,t,i,7));break;case 5:var d=null;switch(wt.tag){case 26:d=wt.memoizedState;case 5:case 27:var h=wt;if(d?Mh(d):h.stateNode.complete){Lt=0,hl=null;var w=h.sibling;if(w!==null)wt=w;else{var L=h.return;L!==null?(wt=L,Mr(L)):wt=null}break t}}Lt=0,hl=null,ds(e,t,i,5);break;case 6:Lt=0,hl=null,ds(e,t,i,6);break;case 8:Mu(),un=6;break e;default:throw Error(u(462))}}v0();break}catch(W){Lf(e,W)}while(!0);return ca=yo=null,x.H=l,x.A=s,zt=n,wt!==null?0:(Qt=null,kt=0,Wi(),un)}function v0(){for(;wt!==null&&!ot();)Yf(wt)}function Yf(e){var t=df(e.alternate,e,xa);e.memoizedProps=e.pendingProps,t===null?Mr(e):wt=t}function Xf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=af(n,t,t.pendingProps,t.type,void 0,kt);break;case 11:t=af(n,t,t.pendingProps,t.type.render,t.ref,kt);break;case 5:qc(t);default:ff(n,t),t=wt=Hd(t,xa),t=df(n,t,xa)}e.memoizedProps=e.pendingProps,t===null?Mr(e):wt=t}function ds(e,t,n,l){ca=yo=null,qc(t),es=null,Is=0;var s=t.return;try{if(c0(e,s,t,n,kt)){un=1,hr(e,jl(n,e.current)),wt=null;return}}catch(i){if(s!==null)throw wt=s,i;un=1,hr(e,jl(n,e.current)),wt=null;return}t.flags&32768?(Mt||l===1?e=!0:is||(kt&536870912)!==0?e=!1:(qa=e=!0,(l===2||l===9||l===3||l===6)&&(l=_l.current,l!==null&&l.tag===13&&(l.flags|=16384))),qf(t,e)):Mr(t)}function Mr(e){var t=e;do{if((t.flags&32768)!==0){qf(t,qa);return}e=t.return;var n=_0(t.alternate,t,xa);if(n!==null){wt=n;return}if(t=t.sibling,t!==null){wt=t;return}wt=t=e}while(t!==null);un===0&&(un=5)}function qf(e,t){do{var n=f0(e.alternate,e);if(n!==null){n.flags&=32767,wt=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){wt=e;return}wt=e=n}while(e!==null);un=6,wt=null}function If(e,t,n,l,s,i,d,h,w){e.cancelPendingCommit=null;do Er();while(Cn!==0);if((zt&6)!==0)throw Error(u(327));if(t!==null){if(t===e.current)throw Error(u(177));if(i=t.lanes|t.childLanes,i|=gc,sn(e,n,i,d,h,w),e===Qt&&(wt=Qt=null,kt=0),cs=t,Wa=e,ba=n,ku=i,ju=s,Df=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,j0(De,function(){return Zf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=x.T,x.T=null,s=J.p,J.p=2,d=zt,zt|=4;try{h0(e,t,n)}finally{zt=d,J.p=s,x.T=l}}Cn=1,Qf(),Wf(),Gf()}}function Qf(){if(Cn===1){Cn=0;var e=Wa,t=cs,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=x.T,x.T=null;var l=J.p;J.p=2;var s=zt;zt|=4;try{jf(t,e);var i=Uu,d=Zn(e.containerInfo),h=i.focusedElem,w=i.selectionRange;if(d!==h&&h&&h.ownerDocument&&el(h.ownerDocument.documentElement,h)){if(w!==null&&hn(h)){var L=w.start,W=w.end;if(W===void 0&&(W=L),"selectionStart"in h)h.selectionStart=L,h.selectionEnd=Math.min(W,h.value.length);else{var ne=h.ownerDocument||document,Y=ne&&ne.defaultView||window;if(Y.getSelection){var X=Y.getSelection(),Re=h.textContent.length,et=Math.min(w.start,Re),Xt=w.end===void 0?et:Math.min(w.end,Re);!X.extend&&et>Xt&&(d=Xt,Xt=et,et=d);var D=Ft(h,et),N=Ft(h,Xt);if(D&&N&&(X.rangeCount!==1||X.anchorNode!==D.node||X.anchorOffset!==D.offset||X.focusNode!==N.node||X.focusOffset!==N.offset)){var B=ne.createRange();B.setStart(D.node,D.offset),X.removeAllRanges(),et>Xt?(X.addRange(B),X.extend(N.node,N.offset)):(B.setEnd(N.node,N.offset),X.addRange(B))}}}}for(ne=[],X=h;X=X.parentNode;)X.nodeType===1&&ne.push({element:X,left:X.scrollLeft,top:X.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<ne.length;h++){var P=ne[h];P.element.scrollLeft=P.left,P.element.scrollTop=P.top}}Ur=!!Hu,Uu=Hu=null}finally{zt=s,J.p=l,x.T=n}}e.current=t,Cn=2}}function Wf(){if(Cn===2){Cn=0;var e=Wa,t=cs,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=x.T,x.T=null;var l=J.p;J.p=2;var s=zt;zt|=4;try{bf(e,t.alternate,t)}finally{zt=s,J.p=l,x.T=n}}Cn=3}}function Gf(){if(Cn===4||Cn===3){Cn=0,vt();var e=Wa,t=cs,n=ba,l=Df;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Cn=5:(Cn=0,cs=Wa=null,Vf(e,e.pendingLanes));var s=e.pendingLanes;if(s===0&&(Qa=null),Ul(n),t=t.stateNode,re&&typeof re.onCommitFiberRoot=="function")try{re.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=x.T,s=J.p,J.p=2,x.T=null;try{for(var i=e.onRecoverableError,d=0;d<l.length;d++){var h=l[d];i(h.value,{componentStack:h.stack})}}finally{x.T=t,J.p=s}}(ba&3)!==0&&Er(),na(e),s=e.pendingLanes,(n&261930)!==0&&(s&42)!==0?e===Cu?ii++:(ii=0,Cu=e):ii=0,ri(0)}}function Vf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xs(t)))}function Er(){return Qf(),Wf(),Gf(),Zf()}function Zf(){if(Cn!==5)return!1;var e=Wa,t=ku;ku=0;var n=Ul(ba),l=x.T,s=J.p;try{J.p=32>n?32:n,x.T=null,n=ju,ju=null;var i=Wa,d=ba;if(Cn=0,cs=Wa=null,ba=0,(zt&6)!==0)throw Error(u(331));var h=zt;if(zt|=4,Tf(i.current),Mf(i,i.current,d,n),zt=h,ri(0,!1),re&&typeof re.onPostCommitFiberRoot=="function")try{re.onPostCommitFiberRoot(je,i)}catch{}return!0}finally{J.p=s,x.T=l,Vf(e,t)}}function Kf(e,t,n){t=jl(n,t),t=au(e.stateNode,t,2),e=Ha(e,t,2),e!==null&&(lt(e,2),na(e))}function $t(e,t,n){if(e.tag===3)Kf(e,e,n);else for(;t!==null;){if(t.tag===3){Kf(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Qa===null||!Qa.has(l))){e=jl(n,e),n=K_(2),l=Ha(t,n,2),l!==null&&(F_(n,l,t,e),lt(l,2),na(l));break}}t=t.return}}function Nu(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new y0;var s=new Set;l.set(t,s)}else s=l.get(t),s===void 0&&(s=new Set,l.set(t,s));s.has(n)||(vu=!0,s.add(n),e=w0.bind(null,e,t,n),t.then(e,e))}function w0(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Qt===e&&(kt&n)===n&&(un===4||un===3&&(kt&62914560)===kt&&300>He()-wr?(zt&2)===0&&us(e,0):wu|=n,rs===kt&&(rs=0)),na(e)}function Ff(e,t){t===0&&(t=Ie()),e=ho(e,t),e!==null&&(lt(e,t),na(e))}function S0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ff(e,n)}function k0(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(u(314))}l!==null&&l.delete(t),Ff(e,n)}function j0(e,t){return Pe(e,t)}var Nr=null,_s=null,Tu=!1,Tr=!1,Ru=!1,Va=0;function na(e){e!==_s&&e.next===null&&(_s===null?Nr=_s=e:_s=_s.next=e),Tr=!0,Tu||(Tu=!0,M0())}function ri(e,t){if(!Ru&&Tr){Ru=!0;do for(var n=!1,l=Nr;l!==null;){if(e!==0){var s=l.pendingLanes;if(s===0)var i=0;else{var d=l.suspendedLanes,h=l.pingedLanes;i=(1<<31-Oe(42|e)+1)-1,i&=s&~(d&~h),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,th(l,i))}else i=kt,i=xe(l,l===Qt?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Xe(l,i)||(n=!0,th(l,i));l=l.next}while(n);Ru=!1}}function C0(){Jf()}function Jf(){Tr=Tu=!1;var e=0;Va!==0&&L0()&&(e=Va);for(var t=He(),n=null,l=Nr;l!==null;){var s=l.next,i=Pf(l,t);i===0?(l.next=null,n===null?Nr=s:n.next=s,s===null&&(_s=n)):(n=l,(e!==0||(i&3)!==0)&&(Tr=!0)),l=s}Cn!==0&&Cn!==5||ri(e),Va!==0&&(Va=0)}function Pf(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var d=31-Oe(i),h=1<<d,w=s[d];w===-1?((h&n)===0||(h&l)!==0)&&(s[d]=Ze(h,t)):w<=t&&(e.expiredLanes|=h),i&=~h}if(t=Qt,n=kt,n=xe(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(Lt===2||Lt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&We(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Xe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&We(l),Ul(n)){case 2:case 8:n=Ot;break;case 32:n=De;break;case 268435456:n=$;break;default:n=De}return l=eh.bind(null,e),n=Pe(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&We(l),e.callbackPriority=2,e.callbackNode=null,2}function eh(e,t){if(Cn!==0&&Cn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Er()&&e.callbackNode!==n)return null;var l=kt;return l=xe(e,e===Qt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Of(e,l,t),Pf(e,He()),e.callbackNode!=null&&e.callbackNode===n?eh.bind(null,e):null)}function th(e,t){if(Er())return null;Of(e,t,!0)}function M0(){H0(function(){(zt&6)!==0?Pe(xt,C0):Jf()})}function zu(){if(Va===0){var e=Fo;e===0&&(e=U,U<<=1,(U&261888)===0&&(U=256)),Va=e}return Va}function nh(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:so(""+e)}function lh(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function E0(e,t,n,l,s){if(t==="submit"&&n&&n.stateNode===s){var i=nh((s[Un]||null).action),d=l.submitter;d&&(t=(t=d[Un]||null)?nh(t.formAction):d.getAttribute("formAction"),t!==null&&(i=t,d=null));var h=new Bo("action","action",null,l,s);e.push({event:h,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Va!==0){var w=d?lh(s,d):new FormData(s);Jc(n,{pending:!0,data:w,method:s.method,action:i},null,w)}}else typeof i=="function"&&(h.preventDefault(),w=d?lh(s,d):new FormData(s),Jc(n,{pending:!0,data:w,method:s.method,action:i},i,w))},currentTarget:s}]})}}for(var Du=0;Du<mc.length;Du++){var Au=mc[Du],N0=Au.toLowerCase(),T0=Au[0].toUpperCase()+Au.slice(1);Bl(N0,"on"+T0)}Bl(Dd,"onAnimationEnd"),Bl(Ad,"onAnimationIteration"),Bl(Od,"onAnimationStart"),Bl("dblclick","onDoubleClick"),Bl("focusin","onFocus"),Bl("focusout","onBlur"),Bl(Wm,"onTransitionRun"),Bl(Gm,"onTransitionStart"),Bl(Vm,"onTransitionCancel"),Bl(Bd,"onTransitionEnd"),Nn("onMouseEnter",["mouseout","mouseover"]),Nn("onMouseLeave",["mouseout","mouseover"]),Nn("onPointerEnter",["pointerout","pointerover"]),Nn("onPointerLeave",["pointerout","pointerover"]),pl("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pl("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pl("onBeforeInput",["compositionend","keypress","textInput","paste"]),pl("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pl("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pl("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ci="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),R0=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ci));function ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],s=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var d=l.length-1;0<=d;d--){var h=l[d],w=h.instance,L=h.currentTarget;if(h=h.listener,w!==i&&s.isPropagationStopped())break e;i=h,s.currentTarget=L;try{i(s)}catch(W){Qi(W)}s.currentTarget=null,i=w}else for(d=0;d<l.length;d++){if(h=l[d],w=h.instance,L=h.currentTarget,h=h.listener,w!==i&&s.isPropagationStopped())break e;i=h,s.currentTarget=L;try{i(s)}catch(W){Qi(W)}s.currentTarget=null,i=w}}}}function St(e,t){var n=t[Yn];n===void 0&&(n=t[Yn]=new Set);var l=e+"__bubble";n.has(l)||(oh(t,e,2,!1),n.add(l))}function Ou(e,t,n){var l=0;t&&(l|=4),oh(n,e,l,t)}var Rr="_reactListening"+Math.random().toString(36).slice(2);function Bu(e){if(!e[Rr]){e[Rr]=!0,Cs.forEach(function(n){n!=="selectionchange"&&(R0.has(n)||Ou(n,!1,e),Ou(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Rr]||(t[Rr]=!0,Ou("selectionchange",!1,t))}}function oh(e,t,n,l){switch(Ah(t)){case 2:var s=og;break;case 8:s=sg;break;default:s=Fu}n=s.bind(null,t,n,e),s=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),l?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Lu(e,t,n,l,s){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var d=l.tag;if(d===3||d===4){var h=l.stateNode.containerInfo;if(h===s)break;if(d===4)for(d=l.return;d!==null;){var w=d.tag;if((w===3||w===4)&&d.stateNode.containerInfo===s)return;d=d.return}for(;h!==null;){if(d=wa(h),d===null)return;if(w=d.tag,w===5||w===6||w===26||w===27){l=i=d;continue e}h=h.parentNode}}l=l.return}Gl(function(){var L=i,W=Dl(n),ne=[];e:{var Y=Ld.get(e);if(Y!==void 0){var X=Bo,Re=e;switch(e){case"keypress":if(Vl(n)===0)break e;case"keydown":case"keyup":X=$i;break;case"focusin":Re="focus",X=Uo;break;case"focusout":Re="blur",X=Uo;break;case"beforeblur":case"afterblur":X=Uo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=Ai;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=Ui;break;case Dd:case Ad:case Od:X=dc;break;case Bd:X=vl;break;case"scroll":case"scrollend":X=Ol;break;case"wheel":X=Os;break;case"copy":case"cut":case"paste":X=Bi;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=uo;break;case"toggle":case"beforetoggle":X=qo}var et=(t&4)!==0,Xt=!et&&(e==="scroll"||e==="scrollend"),D=et?Y!==null?Y+"Capture":null:Y;et=[];for(var N=L,B;N!==null;){var P=N;if(B=P.stateNode,P=P.tag,P!==5&&P!==26&&P!==27||B===null||D===null||(P=Bt(N,D),P!=null&&et.push(ui(N,P,B))),Xt)break;N=N.return}0<et.length&&(Y=new X(Y,Re,null,n,W),ne.push({event:Y,listeners:et}))}}if((t&7)===0){e:{if(Y=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",Y&&n!==Es&&(Re=n.relatedTarget||n.fromElement)&&(wa(Re)||Re[Ve]))break e;if((X||Y)&&(Y=W.window===W?W:(Y=W.ownerDocument)?Y.defaultView||Y.parentWindow:window,X?(Re=n.relatedTarget||n.toElement,X=L,Re=Re?wa(Re):null,Re!==null&&(Xt=f(Re),et=Re.tag,Re!==Xt||et!==5&&et!==27&&et!==6)&&(Re=null)):(X=null,Re=L),X!==Re)){if(et=Ta,P="onMouseLeave",D="onMouseEnter",N="mouse",(e==="pointerout"||e==="pointerover")&&(et=uo,P="onPointerLeave",D="onPointerEnter",N="pointer"),Xt=X==null?Y:ao(X),B=Re==null?Y:ao(Re),Y=new et(P,N+"leave",X,n,W),Y.target=Xt,Y.relatedTarget=B,P=null,wa(W)===L&&(et=new et(D,N+"enter",Re,n,W),et.target=B,et.relatedTarget=Xt,P=et),Xt=P,X&&Re)t:{for(et=z0,D=X,N=Re,B=0,P=D;P;P=et(P))B++;P=0;for(var Ge=N;Ge;Ge=et(Ge))P++;for(;0<B-P;)D=et(D),B--;for(;0<P-B;)N=et(N),P--;for(;B--;){if(D===N||N!==null&&D===N.alternate){et=D;break t}D=et(D),N=et(N)}et=null}else et=null;X!==null&&sh(ne,Y,X,et,!1),Re!==null&&Xt!==null&&sh(ne,Xt,Re,et,!0)}}e:{if(Y=L?ao(L):window,X=Y.nodeName&&Y.nodeName.toLowerCase(),X==="select"||X==="input"&&Y.type==="file")var Nt=Ce;else if(j(Y))if(Be)Nt=Rt;else{Nt=At;var Le=an}else X=Y.nodeName,!X||X.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?L&&Pn(L.elementType)&&(Nt=Ce):Nt=fn;if(Nt&&(Nt=Nt(e,L))){C(ne,Nt,n,W);break e}Le&&Le(e,Y,L),e==="focusout"&&L&&Y.type==="number"&&L.memoizedProps.value!=null&&Ql(Y,"number",Y.value)}switch(Le=L?ao(L):window,e){case"focusin":(j(Le)||Le.contentEditable==="true")&&(tl=Le,wl=L,Zt=null);break;case"focusout":Zt=wl=tl=null;break;case"mousedown":Sl=!0;break;case"contextmenu":case"mouseup":case"dragend":Sl=!1,Jl(ne,n,W);break;case"selectionchange":if(_o)break;case"keydown":case"keyup":Jl(ne,n,W)}var ht;if(Ls)e:{switch(e){case"compositionstart":var jt="onCompositionStart";break e;case"compositionend":jt="onCompositionEnd";break e;case"compositionupdate":jt="onCompositionUpdate";break e}jt=void 0}else oa?aa(e,n)&&(jt="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(jt="onCompositionStart");jt&&(Io&&n.locale!=="ko"&&(oa||jt!=="onCompositionStart"?jt==="onCompositionEnd"&&oa&&(ht=Ts()):(Vn=W,Oo="value"in Vn?Vn.value:Vn.textContent,oa=!0)),Le=zr(L,jt),0<Le.length&&(jt=new Ke(jt,e,null,n,W),ne.push({event:jt,listeners:Le}),ht?jt.data=ht:(ht=Xi(n),ht!==null&&(jt.data=ht)))),(ht=$s?qi(e,n):g(e,n))&&(jt=zr(L,"onBeforeInput"),0<jt.length&&(Le=new Ke("onBeforeInput","beforeinput",null,n,W),ne.push({event:Le,listeners:jt}),Le.data=ht)),E0(ne,e,L,n,W)}ah(ne,t)})}function ui(e,t,n){return{instance:e,listener:t,currentTarget:n}}function zr(e,t){for(var n=t+"Capture",l=[];e!==null;){var s=e,i=s.stateNode;if(s=s.tag,s!==5&&s!==26&&s!==27||i===null||(s=Bt(e,n),s!=null&&l.unshift(ui(e,s,i)),s=Bt(e,t),s!=null&&l.push(ui(e,s,i))),e.tag===3)return l;e=e.return}return[]}function z0(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function sh(e,t,n,l,s){for(var i=t._reactName,d=[];n!==null&&n!==l;){var h=n,w=h.alternate,L=h.stateNode;if(h=h.tag,w!==null&&w===l)break;h!==5&&h!==26&&h!==27||L===null||(w=L,s?(L=Bt(n,i),L!=null&&d.unshift(ui(n,L,w))):s||(L=Bt(n,i),L!=null&&d.push(ui(n,L,w)))),n=n.return}d.length!==0&&e.push({event:t,listeners:d})}var D0=/\r\n?/g,A0=/\u0000|\uFFFD/g;function ih(e){return(typeof e=="string"?e:""+e).replace(D0,`
`).replace(A0,"")}function rh(e,t){return t=ih(t),ih(e)===t}function Yt(e,t,n,l,s,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Ma(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Ma(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,n,l);break;case"style":Ri(e,l,i);break;case"data":if(t!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=so(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&Yt(e,t,"name",s.name,s,null),Yt(e,t,"formEncType",s.formEncType,s,null),Yt(e,t,"formMethod",s.formMethod,s,null),Yt(e,t,"formTarget",s.formTarget,s,null)):(Yt(e,t,"encType",s.encType,s,null),Yt(e,t,"method",s.method,s,null),Yt(e,t,"target",s.target,s,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=so(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=zl);break;case"onScroll":l!=null&&St("scroll",e);break;case"onScrollEnd":l!=null&&St("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=so(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":St("beforetoggle",e),St("toggle",e),ql(e,"popover",l);break;case"xlinkActuate":rl(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":rl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":rl(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":rl(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":rl(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":rl(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":rl(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":rl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":rl(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ql(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=zi.get(n)||n,ql(e,n,l))}}function $u(e,t,n,l,s,i){switch(n){case"style":Ri(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(u(61));if(n=l.__html,n!=null){if(s.children!=null)throw Error(u(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Ma(e,l):(typeof l=="number"||typeof l=="bigint")&&Ma(e,""+l);break;case"onScroll":l!=null&&St("scroll",e);break;case"onScrollEnd":l!=null&&St("scrollend",e);break;case"onClick":l!=null&&(e.onclick=zl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ka.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(s=n.endsWith("Capture"),t=n.slice(2,s?n.length-7:void 0),i=e[Un]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,s),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,s);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ql(e,n,l)}}}function Bn(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":St("error",e),St("load",e);var l=!1,s=!1,i;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"src":l=!0;break;case"srcSet":s=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Yt(e,t,i,d,n,null)}}s&&Yt(e,t,"srcSet",n.srcSet,n,null),l&&Yt(e,t,"src",n.src,n,null);return;case"input":St("invalid",e);var h=i=d=s=null,w=null,L=null;for(l in n)if(n.hasOwnProperty(l)){var W=n[l];if(W!=null)switch(l){case"name":s=W;break;case"type":d=W;break;case"checked":w=W;break;case"defaultChecked":L=W;break;case"value":i=W;break;case"defaultValue":h=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(u(137,t));break;default:Yt(e,t,l,W,n,null)}}ln(e,i,h,w,L,d,s,!1);return;case"select":St("invalid",e),l=d=i=null;for(s in n)if(n.hasOwnProperty(s)&&(h=n[s],h!=null))switch(s){case"value":i=h;break;case"defaultValue":d=h;break;case"multiple":l=h;default:Yt(e,t,s,h,n,null)}t=i,n=d,e.multiple=!!l,t!=null?zn(e,!!l,t,!1):n!=null&&zn(e,!!l,n,!0);return;case"textarea":St("invalid",e),i=s=l=null;for(d in n)if(n.hasOwnProperty(d)&&(h=n[d],h!=null))switch(d){case"value":l=h;break;case"defaultValue":s=h;break;case"children":i=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(u(91));break;default:Yt(e,t,d,h,n,null)}Ti(e,l,s,i);return;case"option":for(w in n)n.hasOwnProperty(w)&&(l=n[w],l!=null)&&(w==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Yt(e,t,w,l,n,null));return;case"dialog":St("beforetoggle",e),St("toggle",e),St("cancel",e),St("close",e);break;case"iframe":case"object":St("load",e);break;case"video":case"audio":for(l=0;l<ci.length;l++)St(ci[l],e);break;case"image":St("error",e),St("load",e);break;case"details":St("toggle",e);break;case"embed":case"source":case"link":St("error",e),St("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(L in n)if(n.hasOwnProperty(L)&&(l=n[L],l!=null))switch(L){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,t));default:Yt(e,t,L,l,n,null)}return;default:if(Pn(t)){for(W in n)n.hasOwnProperty(W)&&(l=n[W],l!==void 0&&$u(e,t,W,l,n,void 0));return}}for(h in n)n.hasOwnProperty(h)&&(l=n[h],l!=null&&Yt(e,t,h,l,n,null))}function O0(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var s=null,i=null,d=null,h=null,w=null,L=null,W=null;for(X in n){var ne=n[X];if(n.hasOwnProperty(X)&&ne!=null)switch(X){case"checked":break;case"value":break;case"defaultValue":w=ne;default:l.hasOwnProperty(X)||Yt(e,t,X,null,l,ne)}}for(var Y in l){var X=l[Y];if(ne=n[Y],l.hasOwnProperty(Y)&&(X!=null||ne!=null))switch(Y){case"type":i=X;break;case"name":s=X;break;case"checked":L=X;break;case"defaultChecked":W=X;break;case"value":d=X;break;case"defaultValue":h=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(u(137,t));break;default:X!==ne&&Yt(e,t,Y,X,l,ne)}}Il(e,d,h,w,L,W,i,s);return;case"select":X=d=h=Y=null;for(i in n)if(w=n[i],n.hasOwnProperty(i)&&w!=null)switch(i){case"value":break;case"multiple":X=w;default:l.hasOwnProperty(i)||Yt(e,t,i,null,l,w)}for(s in l)if(i=l[s],w=n[s],l.hasOwnProperty(s)&&(i!=null||w!=null))switch(s){case"value":Y=i;break;case"defaultValue":h=i;break;case"multiple":d=i;default:i!==w&&Yt(e,t,s,i,l,w)}t=h,n=d,l=X,Y!=null?zn(e,!!n,Y,!1):!!l!=!!n&&(t!=null?zn(e,!!n,t,!0):zn(e,!!n,n?[]:"",!1));return;case"textarea":X=Y=null;for(h in n)if(s=n[h],n.hasOwnProperty(h)&&s!=null&&!l.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Yt(e,t,h,null,l,s)}for(d in l)if(s=l[d],i=n[d],l.hasOwnProperty(d)&&(s!=null||i!=null))switch(d){case"value":Y=s;break;case"defaultValue":X=s;break;case"children":break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(u(91));break;default:s!==i&&Yt(e,t,d,s,l,i)}jn(e,Y,X);return;case"option":for(var Re in n)Y=n[Re],n.hasOwnProperty(Re)&&Y!=null&&!l.hasOwnProperty(Re)&&(Re==="selected"?e.selected=!1:Yt(e,t,Re,null,l,Y));for(w in l)Y=l[w],X=n[w],l.hasOwnProperty(w)&&Y!==X&&(Y!=null||X!=null)&&(w==="selected"?e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol":Yt(e,t,w,Y,l,X));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in n)Y=n[et],n.hasOwnProperty(et)&&Y!=null&&!l.hasOwnProperty(et)&&Yt(e,t,et,null,l,Y);for(L in l)if(Y=l[L],X=n[L],l.hasOwnProperty(L)&&Y!==X&&(Y!=null||X!=null))switch(L){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(u(137,t));break;default:Yt(e,t,L,Y,l,X)}return;default:if(Pn(t)){for(var Xt in n)Y=n[Xt],n.hasOwnProperty(Xt)&&Y!==void 0&&!l.hasOwnProperty(Xt)&&$u(e,t,Xt,void 0,l,Y);for(W in l)Y=l[W],X=n[W],!l.hasOwnProperty(W)||Y===X||Y===void 0&&X===void 0||$u(e,t,W,Y,l,X);return}}for(var D in n)Y=n[D],n.hasOwnProperty(D)&&Y!=null&&!l.hasOwnProperty(D)&&Yt(e,t,D,null,l,Y);for(ne in l)Y=l[ne],X=n[ne],!l.hasOwnProperty(ne)||Y===X||Y==null&&X==null||Yt(e,t,ne,Y,l,X)}function ch(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function B0(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var s=n[l],i=s.transferSize,d=s.initiatorType,h=s.duration;if(i&&h&&ch(d)){for(d=0,h=s.responseEnd,l+=1;l<n.length;l++){var w=n[l],L=w.startTime;if(L>h)break;var W=w.transferSize,ne=w.initiatorType;W&&ch(ne)&&(w=w.responseEnd,d+=W*(w<h?1:(h-L)/(w-L)))}if(--l,t+=8*(i+d)/(s.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hu=null,Uu=null;function Dr(e){return e.nodeType===9?e:e.ownerDocument}function uh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function dh(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Yu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xu=null;function L0(){var e=window.event;return e&&e.type==="popstate"?e===Xu?!1:(Xu=e,!0):(Xu=null,!1)}var _h=typeof setTimeout=="function"?setTimeout:void 0,$0=typeof clearTimeout=="function"?clearTimeout:void 0,fh=typeof Promise=="function"?Promise:void 0,H0=typeof queueMicrotask=="function"?queueMicrotask:typeof fh<"u"?function(e){return fh.resolve(null).then(e).catch(U0)}:_h;function U0(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function hh(e,t){var n=t,l=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(s),gs(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")di(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,di(n);for(var i=n.firstChild;i;){var d=i.nextSibling,h=i.nodeName;i[lo]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=d}}else n==="body"&&di(e.ownerDocument.body);n=s}while(n);gs(t)}function mh(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function qu(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qu(n),zo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Y0(e,t,n,l){for(;e.nodeType===1;){var s=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[lo])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==s.rel||e.getAttribute("href")!==(s.href==null||s.href===""?null:s.href)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin)||e.getAttribute("title")!==(s.title==null?null:s.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(s.src==null?null:s.src)||e.getAttribute("type")!==(s.type==null?null:s.type)||e.getAttribute("crossorigin")!==(s.crossOrigin==null?null:s.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=s.name==null?null:""+s.name;if(s.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Tl(e.nextSibling),e===null)break}return null}function X0(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Tl(e.nextSibling),e===null))return null;return e}function gh(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Tl(e.nextSibling),e===null))return null;return e}function Iu(e){return e.data==="$?"||e.data==="$~"}function Qu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function q0(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Tl(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wu=null;function yh(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Tl(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function ph(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function xh(e,t,n){switch(t=Dr(n),e){case"html":if(e=t.documentElement,!e)throw Error(u(452));return e;case"head":if(e=t.head,!e)throw Error(u(453));return e;case"body":if(e=t.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function di(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);zo(e)}var Rl=new Map,bh=new Set;function Ar(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=J.d;J.d={f:I0,r:Q0,D:W0,C:G0,L:V0,m:Z0,X:F0,S:K0,M:J0};function I0(){var e=va.f(),t=jr();return e||t}function Q0(e){var t=Sa(e);t!==null&&t.tag===5&&t.type==="form"?B_(t):va.r(e)}var fs=typeof document>"u"?null:document;function vh(e,t,n){var l=fs;if(l&&typeof t=="string"&&t){var s=Wn(t);s='link[rel="'+e+'"][href="'+s+'"]',typeof n=="string"&&(s+='[crossorigin="'+n+'"]'),bh.has(s)||(bh.add(s),e={rel:e,crossOrigin:n,href:t},l.querySelector(s)===null&&(t=l.createElement("link"),Bn(t,"link",e),xn(t),l.head.appendChild(t)))}}function W0(e){va.D(e),vh("dns-prefetch",e,null)}function G0(e,t){va.C(e,t),vh("preconnect",e,t)}function V0(e,t,n){va.L(e,t,n);var l=fs;if(l&&e&&t){var s='link[rel="preload"][as="'+Wn(t)+'"]';t==="image"&&n&&n.imageSrcSet?(s+='[imagesrcset="'+Wn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(s+='[imagesizes="'+Wn(n.imageSizes)+'"]')):s+='[href="'+Wn(e)+'"]';var i=s;switch(t){case"style":i=hs(e);break;case"script":i=ms(e)}Rl.has(i)||(e=z({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Rl.set(i,e),l.querySelector(s)!==null||t==="style"&&l.querySelector(_i(i))||t==="script"&&l.querySelector(fi(i))||(t=l.createElement("link"),Bn(t,"link",e),xn(t),l.head.appendChild(t)))}}function Z0(e,t){va.m(e,t);var n=fs;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",s='link[rel="modulepreload"][as="'+Wn(l)+'"][href="'+Wn(e)+'"]',i=s;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=ms(e)}if(!Rl.has(i)&&(e=z({rel:"modulepreload",href:e},t),Rl.set(i,e),n.querySelector(s)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(fi(i)))return}l=n.createElement("link"),Bn(l,"link",e),xn(l),n.head.appendChild(l)}}}function K0(e,t,n){va.S(e,t,n);var l=fs;if(l&&e){var s=Xl(l).hoistableStyles,i=hs(e);t=t||"default";var d=s.get(i);if(!d){var h={loading:0,preload:null};if(d=l.querySelector(_i(i)))h.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Rl.get(i))&&Gu(e,n);var w=d=l.createElement("link");xn(w),Bn(w,"link",e),w._p=new Promise(function(L,W){w.onload=L,w.onerror=W}),w.addEventListener("load",function(){h.loading|=1}),w.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Or(d,t,l)}d={type:"stylesheet",instance:d,count:1,state:h},s.set(i,d)}}}function F0(e,t){va.X(e,t);var n=fs;if(n&&e){var l=Xl(n).hoistableScripts,s=ms(e),i=l.get(s);i||(i=n.querySelector(fi(s)),i||(e=z({src:e,async:!0},t),(t=Rl.get(s))&&Vu(e,t),i=n.createElement("script"),xn(i),Bn(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function J0(e,t){va.M(e,t);var n=fs;if(n&&e){var l=Xl(n).hoistableScripts,s=ms(e),i=l.get(s);i||(i=n.querySelector(fi(s)),i||(e=z({src:e,async:!0,type:"module"},t),(t=Rl.get(s))&&Vu(e,t),i=n.createElement("script"),xn(i),Bn(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(s,i))}}function wh(e,t,n,l){var s=(s=ut.current)?Ar(s):null;if(!s)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=hs(n.href),n=Xl(s).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=hs(n.href);var i=Xl(s).hoistableStyles,d=i.get(e);if(d||(s=s.ownerDocument||s,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,d),(i=s.querySelector(_i(e)))&&!i._p&&(d.instance=i,d.state.loading=5),Rl.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Rl.set(e,n),i||P0(s,e,n,d.state))),t&&l===null)throw Error(u(528,""));return d}if(t&&l!==null)throw Error(u(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=ms(n),n=Xl(s).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function hs(e){return'href="'+Wn(e)+'"'}function _i(e){return'link[rel="stylesheet"]['+e+"]"}function Sh(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function P0(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Bn(t,"link",n),xn(t),e.head.appendChild(t))}function ms(e){return'[src="'+Wn(e)+'"]'}function fi(e){return"script[async]"+e}function kh(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+Wn(n.href)+'"]');if(l)return t.instance=l,xn(l),l;var s=z({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),xn(l),Bn(l,"style",s),Or(l,n.precedence,e),t.instance=l;case"stylesheet":s=hs(n.href);var i=e.querySelector(_i(s));if(i)return t.state.loading|=4,t.instance=i,xn(i),i;l=Sh(n),(s=Rl.get(s))&&Gu(l,s),i=(e.ownerDocument||e).createElement("link"),xn(i);var d=i;return d._p=new Promise(function(h,w){d.onload=h,d.onerror=w}),Bn(i,"link",l),t.state.loading|=4,Or(i,n.precedence,e),t.instance=i;case"script":return i=ms(n.src),(s=e.querySelector(fi(i)))?(t.instance=s,xn(s),s):(l=n,(s=Rl.get(i))&&(l=z({},n),Vu(l,s)),e=e.ownerDocument||e,s=e.createElement("script"),xn(s),Bn(s,"link",l),e.head.appendChild(s),t.instance=s);case"void":return null;default:throw Error(u(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Or(l,n.precedence,e));return t.instance}function Or(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),s=l.length?l[l.length-1]:null,i=s,d=0;d<l.length;d++){var h=l[d];if(h.dataset.precedence===t)i=h;else if(i!==s)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Gu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Vu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Br=null;function jh(e,t,n){if(Br===null){var l=new Map,s=Br=new Map;s.set(n,l)}else s=Br,l=s.get(n),l||(l=new Map,s.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),s=0;s<n.length;s++){var i=n[s];if(!(i[lo]||i[rn]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var d=i.getAttribute(t)||"";d=e+d;var h=l.get(d);h?h.push(i):l.set(d,[i])}}return l}function Ch(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function eg(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Mh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tg(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var s=hs(l.href),i=t.querySelector(_i(s));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Lr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,xn(i);return}i=t.ownerDocument||t,l=Sh(l),(s=Rl.get(s))&&Gu(l,s),i=i.createElement("link"),xn(i);var d=i;d._p=new Promise(function(h,w){d.onload=h,d.onerror=w}),Bn(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=Lr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Zu=0;function ng(e,t){return e.stylesheets&&e.count===0&&Hr(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Hr(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Zu===0&&(Zu=62500*B0());var s=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Hr(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Zu?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(s)}}:null}function Lr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Hr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var $r=null;function Hr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,$r=new Map,t.forEach(lg,e),$r=null,Lr.call(e))}function lg(e,t){if(!(t.state.loading&4)){var n=$r.get(e);if(n)var l=n.get(null);else{n=new Map,$r.set(e,n);for(var s=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<s.length;i++){var d=s[i];(d.nodeName==="LINK"||d.getAttribute("media")!=="not all")&&(n.set(d.dataset.precedence,d),l=d)}l&&n.set(null,l)}s=t.instance,d=s.getAttribute("data-precedence"),i=n.get(d)||l,i===l&&n.set(null,s),n.set(d,s),this.count++,l=Lr.bind(this),s.addEventListener("load",l),s.addEventListener("error",l),i?i.parentNode.insertBefore(s,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(s,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:pe,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function ag(e,t,n,l,s,i,d,h,w){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=yt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yt(0),this.hiddenUpdates=yt(null),this.identifierPrefix=l,this.onUncaughtError=s,this.onCaughtError=i,this.onRecoverableError=d,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Eh(e,t,n,l,s,i,d,h,w,L,W,ne){return e=new ag(e,t,n,d,w,L,W,ne,h),t=1,i===!0&&(t|=24),i=dl(3,null,null,t),e.current=i,i.stateNode=e,t=Ec(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},zc(i),e}function Nh(e){return e?(e=Wo,e):Wo}function Th(e,t,n,l,s,i){s=Nh(s),l.context===null?l.context=s:l.pendingContext=s,l=$a(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=Ha(e,l,t),n!==null&&(sl(n,e,t),Ws(n,e,t))}function Rh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ku(e,t){Rh(e,t),(e=e.alternate)&&Rh(e,t)}function zh(e){if(e.tag===13||e.tag===31){var t=ho(e,67108864);t!==null&&sl(t,e,67108864),Ku(e,67108864)}}function Dh(e){if(e.tag===13||e.tag===31){var t=gl();t=Hn(t);var n=ho(e,t);n!==null&&sl(n,e,t),Ku(e,t)}}var Ur=!0;function og(e,t,n,l){var s=x.T;x.T=null;var i=J.p;try{J.p=2,Fu(e,t,n,l)}finally{J.p=i,x.T=s}}function sg(e,t,n,l){var s=x.T;x.T=null;var i=J.p;try{J.p=8,Fu(e,t,n,l)}finally{J.p=i,x.T=s}}function Fu(e,t,n,l){if(Ur){var s=Ju(l);if(s===null)Lu(e,t,l,Yr,n),Oh(e,l);else if(rg(s,e,t,n,l))l.stopPropagation();else if(Oh(e,l),t&4&&-1<ig.indexOf(e)){for(;s!==null;){var i=Sa(s);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var d=ve(i.pendingLanes);if(d!==0){var h=i;for(h.pendingLanes|=2,h.entangledLanes|=2;d;){var w=1<<31-Oe(d);h.entanglements[1]|=w,d&=~w}na(i),(zt&6)===0&&(Sr=He()+500,ri(0))}}break;case 31:case 13:h=ho(i,2),h!==null&&sl(h,i,2),jr(),Ku(i,2)}if(i=Ju(l),i===null&&Lu(e,t,l,Yr,n),i===s)break;s=i}s!==null&&l.stopPropagation()}else Lu(e,t,l,null,n)}}function Ju(e){return e=Dl(e),Pu(e)}var Yr=null;function Pu(e){if(Yr=null,e=wa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=b(t),e!==null)return e;e=null}else if(n===31){if(e=R(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Yr=e,null}function Ah(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(st()){case xt:return 2;case Ot:return 8;case De:case A:return 32;case $:return 268435456;default:return 32}default:return 32}}var ed=!1,Ka=null,Fa=null,Ja=null,mi=new Map,gi=new Map,Pa=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Oh(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Fa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":mi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gi.delete(t.pointerId)}}function yi(e,t,n,l,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Sa(t),t!==null&&zh(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function rg(e,t,n,l,s){switch(t){case"focusin":return Ka=yi(Ka,e,t,n,l,s),!0;case"dragenter":return Fa=yi(Fa,e,t,n,l,s),!0;case"mouseover":return Ja=yi(Ja,e,t,n,l,s),!0;case"pointerover":var i=s.pointerId;return mi.set(i,yi(mi.get(i)||null,e,t,n,l,s)),!0;case"gotpointercapture":return i=s.pointerId,gi.set(i,yi(gi.get(i)||null,e,t,n,l,s)),!0}return!1}function Bh(e){var t=wa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=b(n),t!==null){e.blockedOn=t,tn(e.priority,function(){Dh(n)});return}}else if(t===31){if(t=R(n),t!==null){e.blockedOn=t,tn(e.priority,function(){Dh(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ju(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Es=l,n.target.dispatchEvent(l),Es=null}else return t=Sa(n),t!==null&&zh(t),e.blockedOn=n,!1;t.shift()}return!0}function Lh(e,t,n){Xr(e)&&n.delete(t)}function cg(){ed=!1,Ka!==null&&Xr(Ka)&&(Ka=null),Fa!==null&&Xr(Fa)&&(Fa=null),Ja!==null&&Xr(Ja)&&(Ja=null),mi.forEach(Lh),gi.forEach(Lh)}function qr(e,t){e.blockedOn===t&&(e.blockedOn=null,ed||(ed=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cg)))}var Ir=null;function $h(e){Ir!==e&&(Ir=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ir===e&&(Ir=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],s=e[t+2];if(typeof l!="function"){if(Pu(l||n)===null)continue;break}var i=Sa(n);i!==null&&(e.splice(t,3),t-=3,Jc(i,{pending:!0,data:s,method:n.method,action:l},l,s))}}))}function gs(e){function t(w){return qr(w,e)}Ka!==null&&qr(Ka,e),Fa!==null&&qr(Fa,e),Ja!==null&&qr(Ja,e),mi.forEach(t),gi.forEach(t);for(var n=0;n<Pa.length;n++){var l=Pa[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Pa.length&&(n=Pa[0],n.blockedOn===null);)Bh(n),n.blockedOn===null&&Pa.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var s=n[l],i=n[l+1],d=s[Un]||null;if(typeof i=="function")d||$h(n);else if(d){var h=null;if(i&&i.hasAttribute("formAction")){if(s=i,d=i[Un]||null)h=d.formAction;else if(Pu(s)!==null)continue}else h=d.action;typeof h=="function"?n[l+1]=h:(n.splice(l,3),l-=3),$h(n)}}}function Hh(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(d){return s=d})},focusReset:"manual",scroll:"manual"})}function t(){s!==null&&(s(),s=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,s=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),s!==null&&(s(),s=null)}}}function td(e){this._internalRoot=e}Qr.prototype.render=td.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(u(409));var n=t.current,l=gl();Th(n,l,e,t,null,null)},Qr.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Th(e.current,2,null,e,null,null),jr(),t[Ve]=null}};function Qr(e){this._internalRoot=e}Qr.prototype.unstable_scheduleHydration=function(e){if(e){var t=no();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pa.length&&t!==0&&t<Pa[n].priority;n++);Pa.splice(n,0,e),n===0&&Bh(e)}};var Uh=r.version;if(Uh!=="19.2.4")throw Error(u(527,Uh,"19.2.4"));J.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=M(t),e=e!==null?k(e):null,e=e===null?null:e.stateNode,e};var ug={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:x,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wr.isDisabled&&Wr.supportsFiber)try{je=Wr.inject(ug),re=Wr}catch{}}return xi.createRoot=function(e,t){if(!_(e))throw Error(u(299));var n=!1,l="",s=W_,i=G_,d=V_;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(s=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=Eh(e,1,!1,null,null,n,l,null,s,i,d,Hh),e[Ve]=t.current,Bu(e),new td(t)},xi.hydrateRoot=function(e,t,n){if(!_(e))throw Error(u(299));var l=!1,s="",i=W_,d=G_,h=V_,w=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(h=n.onRecoverableError),n.formState!==void 0&&(w=n.formState)),t=Eh(e,1,!0,t,n??null,l,s,w,i,d,h,Hh),t.context=Nh(null),n=t.current,l=gl(),l=Hn(l),s=$a(l),s.callback=null,Ha(n,s,l),n=l,t.current.lanes=n,lt(t,n),na(t),e[Ve]=t.current,Bu(e),new Qr(t)},xi.version="19.2.4",xi}var Kh;function xg(){if(Kh)return ad.exports;Kh=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(r){console.error(r)}}return o(),ad.exports=pg(),ad.exports}var bg=xg();const vg=Mm(bg);var Ed=Nm(),wg=`.styles-module__popup___IhzrD svg[fill=none] {
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
}`,Sg={popup:"styles-module__popup___IhzrD",enter:"styles-module__enter___L7U7N",entered:"styles-module__entered___COX-w",exit:"styles-module__exit___5eGjE",shake:"styles-module__shake___jdbWe",header:"styles-module__header___wWsSi",element:"styles-module__element___fTV2z",headerToggle:"styles-module__headerToggle___WpW0b",chevron:"styles-module__chevron___ZZJlR",expanded:"styles-module__expanded___2Hxgv",stylesWrapper:"styles-module__stylesWrapper___pnHgy",stylesInner:"styles-module__stylesInner___YYZe2",stylesBlock:"styles-module__stylesBlock___VfQKn",styleLine:"styles-module__styleLine___1YQiD",styleProperty:"styles-module__styleProperty___84L1i",styleValue:"styles-module__styleValue___q51-h",timestamp:"styles-module__timestamp___Dtpsv",quote:"styles-module__quote___mcMmQ",textarea:"styles-module__textarea___jrSae",actions:"styles-module__actions___D6x3f",cancel:"styles-module__cancel___hRjnL",submit:"styles-module__submit___K-mIR",deleteWrapper:"styles-module__deleteWrapper___oSjdo",deleteButton:"styles-module__deleteButton___4VuAE",light:"styles-module__light___6AaSQ"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-annotation-popup-css-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-annotation-popup-css-styles",document.head.appendChild(o)),o.textContent=wg}var Wt=Sg,kg=`.icon-transitions-module__iconState___uqK9J {
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
}`,jg={iconState:"icon-transitions-module__iconState___uqK9J",iconStateFast:"icon-transitions-module__iconStateFast___HxlMm",iconFade:"icon-transitions-module__iconFade___nPwXg",iconFadeFast:"icon-transitions-module__iconFadeFast___Ofb2t",visible:"icon-transitions-module__visible___PlHsU",visibleScaled:"icon-transitions-module__visibleScaled___8Qog-",hidden:"icon-transitions-module__hidden___ETykt",hiddenScaled:"icon-transitions-module__hiddenScaled___JXn-m",sending:"icon-transitions-module__sending___uaLN-"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-components-icon-transitions");o||(o=document.createElement("style"),o.id="feedback-tool-styles-components-icon-transitions",document.head.appendChild(o)),o.textContent=kg}var qt=jg,Cg=({size:o=16})=>a.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",children:a.jsx("path",{d:"M8 3v10M3 8h10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Mg=({size:o=24,style:r={}})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:r,children:[a.jsxs("g",{clipPath:"url(#clip0_list_sparkle)",children:[a.jsx("path",{d:"M11.5 12L5.5 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M18.5 6.75L5.5 6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M9.25 17.25L5.5 17.25",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 12.75L16.5179 13.9677C16.8078 14.6494 17.3506 15.1922 18.0323 15.4821L19.25 16L18.0323 16.5179C17.3506 16.8078 16.8078 17.3506 16.5179 18.0323L16 19.25L15.4821 18.0323C15.1922 17.3506 14.6494 16.8078 13.9677 16.5179L12.75 16L13.9677 15.4821C14.6494 15.1922 15.1922 14.6494 15.4821 13.9677L16 12.75Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_list_sparkle",children:a.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Eg=({size:o=20,...r})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:[a.jsx("circle",{cx:"10",cy:"10",r:"5.375",stroke:"currentColor",strokeWidth:"1.25"}),a.jsx("path",{d:"M8.5 8.5C8.73 7.85 9.31 7.49 10 7.5C10.86 7.51 11.5 8.13 11.5 9C11.5 10.08 10 10.5 10 10.5V10.75",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"10",cy:"12.625",r:"0.625",fill:"currentColor"})]}),Ng=({size:o=24,copied:r=!1,tint:c})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",style:c?{color:c,transition:"color 0.3s ease"}:void 0,children:[a.jsxs("g",{className:`${qt.iconState} ${r?qt.hiddenScaled:qt.visibleScaled}`,children:[a.jsx("path",{d:"M4.75 11.25C4.75 10.4216 5.42157 9.75 6.25 9.75H12.75C13.5784 9.75 14.25 10.4216 14.25 11.25V17.75C14.25 18.5784 13.5784 19.25 12.75 19.25H6.25C5.42157 19.25 4.75 18.5784 4.75 17.75V11.25Z",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("path",{d:"M17.25 14.25H17.75C18.5784 14.25 19.25 13.5784 19.25 12.75V6.25C19.25 5.42157 18.5784 4.75 17.75 4.75H11.25C10.4216 4.75 9.75 5.42157 9.75 6.25V6.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),a.jsxs("g",{className:`${qt.iconState} ${r?qt.visibleScaled:qt.hiddenScaled}`,children:[a.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]}),Tg=({size:o=24,state:r="idle"})=>{const c=r==="idle",u=r==="sent",_=r==="failed",f=r==="sending";return a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[a.jsx("g",{className:`${qt.iconStateFast} ${c?qt.visibleScaled:f?qt.sending:qt.hiddenScaled}`,children:a.jsx("path",{d:"M9.875 14.125L12.3506 19.6951C12.7184 20.5227 13.9091 20.4741 14.2083 19.6193L18.8139 6.46032C19.0907 5.6695 18.3305 4.90933 17.5397 5.18611L4.38072 9.79174C3.52589 10.0909 3.47731 11.2816 4.30494 11.6494L9.875 14.125ZM9.875 14.125L13.375 10.625",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),a.jsxs("g",{className:`${qt.iconStateFast} ${u?qt.visibleScaled:qt.hiddenScaled}`,children:[a.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M15 10L11 14.25L9.25 12.25",stroke:"var(--agentation-color-green)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),a.jsxs("g",{className:`${qt.iconStateFast} ${_?qt.visibleScaled:qt.hiddenScaled}`,children:[a.jsx("path",{d:"M12 20C7.58172 20 4 16.4182 4 12C4 7.58172 7.58172 4 12 4C16.4182 4 20 7.58172 20 12C20 16.4182 16.4182 20 12 20Z",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 8V12",stroke:"var(--agentation-color-red)",strokeWidth:"1.5",strokeLinecap:"round"}),a.jsx("circle",{cx:"12",cy:"15",r:"0.5",fill:"var(--agentation-color-red)",stroke:"var(--agentation-color-red)",strokeWidth:"1"})]})]})},Rg=({size:o=24,isOpen:r=!0})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[a.jsxs("g",{className:`${qt.iconFade} ${r?qt.visible:qt.hidden}`,children:[a.jsx("path",{d:"M3.91752 12.7539C3.65127 12.2996 3.65037 11.7515 3.9149 11.2962C4.9042 9.59346 7.72688 5.49994 12 5.49994C16.2731 5.49994 19.0958 9.59346 20.0851 11.2962C20.3496 11.7515 20.3487 12.2996 20.0825 12.7539C19.0908 14.4459 16.2694 18.4999 12 18.4999C7.73064 18.4999 4.90918 14.4459 3.91752 12.7539Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M12 14.8261C13.5608 14.8261 14.8261 13.5608 14.8261 12C14.8261 10.4392 13.5608 9.17392 12 9.17392C10.4392 9.17392 9.17391 10.4392 9.17391 12C9.17391 13.5608 10.4392 14.8261 12 14.8261Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),a.jsxs("g",{className:`${qt.iconFade} ${r?qt.hidden:qt.visible}`,children:[a.jsx("path",{d:"M18.6025 9.28503C18.9174 8.9701 19.4364 8.99481 19.7015 9.35271C20.1484 9.95606 20.4943 10.507 20.7342 10.9199C21.134 11.6086 21.1329 12.4454 20.7303 13.1328C20.2144 14.013 19.2151 15.5225 17.7723 16.8193C16.3293 18.1162 14.3852 19.2497 12.0008 19.25C11.4192 19.25 10.8638 19.1823 10.3355 19.0613C9.77966 18.934 9.63498 18.2525 10.0382 17.8493C10.2412 17.6463 10.5374 17.573 10.8188 17.6302C11.1993 17.7076 11.5935 17.75 12.0008 17.75C13.8848 17.7497 15.4867 16.8568 16.7693 15.7041C18.0522 14.5511 18.9606 13.1867 19.4363 12.375C19.5656 12.1543 19.5659 11.8943 19.4373 11.6729C19.2235 11.3049 18.921 10.8242 18.5364 10.3003C18.3085 9.98991 18.3302 9.5573 18.6025 9.28503ZM12.0008 4.75C12.5814 4.75006 13.1358 4.81803 13.6632 4.93953C14.2182 5.06741 14.362 5.74812 13.9593 6.15091C13.7558 6.35435 13.4589 6.42748 13.1771 6.36984C12.7983 6.29239 12.4061 6.25006 12.0008 6.25C10.1167 6.25 8.51415 7.15145 7.23028 8.31543C5.94678 9.47919 5.03918 10.8555 4.56426 11.6729C4.43551 11.8945 4.43582 12.1542 4.56524 12.375C4.77587 12.7343 5.07189 13.2012 5.44718 13.7105C5.67623 14.0213 5.65493 14.4552 5.38193 14.7282C5.0671 15.0431 4.54833 15.0189 4.28292 14.6614C3.84652 14.0736 3.50813 13.5369 3.27129 13.1328C2.86831 12.4451 2.86717 11.6088 3.26739 10.9199C3.78185 10.0345 4.77959 8.51239 6.22247 7.2041C7.66547 5.89584 9.61202 4.75 12.0008 4.75Z",fill:"currentColor"}),a.jsx("path",{d:"M5 19L19 5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})]}),zg=({size:o=24,isPaused:r=!1})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[a.jsxs("g",{className:`${qt.iconFadeFast} ${r?qt.hidden:qt.visible}`,children:[a.jsx("path",{d:"M8 6L8 18",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),a.jsx("path",{d:"M16 18L16 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),a.jsx("path",{className:`${qt.iconFadeFast} ${r?qt.visible:qt.hidden}`,d:"M17.75 10.701C18.75 11.2783 18.75 12.7217 17.75 13.299L8.75 18.4952C7.75 19.0725 6.5 18.3509 6.5 17.1962L6.5 6.80384C6.5 5.64914 7.75 4.92746 8.75 5.50481L17.75 10.701Z",stroke:"currentColor",strokeWidth:"1.5"})]}),Dg=({size:o=16})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[a.jsx("path",{d:"M10.6504 5.81117C10.9939 4.39628 13.0061 4.39628 13.3496 5.81117C13.5715 6.72517 14.6187 7.15891 15.4219 6.66952C16.6652 5.91193 18.0881 7.33479 17.3305 8.57815C16.8411 9.38134 17.2748 10.4285 18.1888 10.6504C19.6037 10.9939 19.6037 13.0061 18.1888 13.3496C17.2748 13.5715 16.8411 14.6187 17.3305 15.4219C18.0881 16.6652 16.6652 18.0881 15.4219 17.3305C14.6187 16.8411 13.5715 17.2748 13.3496 18.1888C13.0061 19.6037 10.9939 19.6037 10.6504 18.1888C10.4285 17.2748 9.38135 16.8411 8.57815 17.3305C7.33479 18.0881 5.91193 16.6652 6.66952 15.4219C7.15891 14.6187 6.72517 13.5715 5.81117 13.3496C4.39628 13.0061 4.39628 10.9939 5.81117 10.6504C6.72517 10.4285 7.15891 9.38134 6.66952 8.57815C5.91193 7.33479 7.33479 5.91192 8.57815 6.66952C9.38135 7.15891 10.4285 6.72517 10.6504 5.81117Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("circle",{cx:"12",cy:"12",r:"2.5",stroke:"currentColor",strokeWidth:"1.5"})]}),Ag=({size:o=16})=>a.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:a.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4384 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Tm=({size:o=16})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[a.jsxs("g",{clipPath:"url(#clip0_2_53)",children:[a.jsx("path",{d:"M16.25 16.25L7.75 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M7.75 16.25L16.25 7.75",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),a.jsx("defs",{children:a.jsx("clipPath",{id:"clip0_2_53",children:a.jsx("rect",{width:"24",height:"24",fill:"white"})})})]}),Og=({size:o=24})=>a.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:a.jsx("path",{d:"M16.7198 6.21973C17.0127 5.92683 17.4874 5.92683 17.7803 6.21973C18.0732 6.51262 18.0732 6.9874 17.7803 7.28027L13.0606 12L17.7803 16.7197C18.0732 17.0126 18.0732 17.4874 17.7803 17.7803C17.4875 18.0731 17.0127 18.0731 16.7198 17.7803L12.0001 13.0605L7.28033 17.7803C6.98746 18.0731 6.51268 18.0731 6.21979 17.7803C5.92689 17.4874 5.92689 17.0126 6.21979 16.7197L10.9395 12L6.21979 7.28027C5.92689 6.98738 5.92689 6.51262 6.21979 6.21973C6.51268 5.92683 6.98744 5.92683 7.28033 6.21973L12.0001 10.9395L16.7198 6.21973Z",fill:"currentColor"})}),Bg=({size:o=16})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:[a.jsx("path",{d:"M9.99999 12.7082C11.4958 12.7082 12.7083 11.4956 12.7083 9.99984C12.7083 8.50407 11.4958 7.2915 9.99999 7.2915C8.50422 7.2915 7.29166 8.50407 7.29166 9.99984C7.29166 11.4956 8.50422 12.7082 9.99999 12.7082Z",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M10 3.9585V5.05698",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M10 14.9429V16.0414",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M5.7269 5.72656L6.50682 6.50649",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M13.4932 13.4932L14.2731 14.2731",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M3.95834 10H5.05683",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M14.9432 10H16.0417",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M5.7269 14.2731L6.50682 13.4932",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M13.4932 6.50649L14.2731 5.72656",stroke:"currentColor",strokeWidth:"1.25",strokeLinecap:"round",strokeLinejoin:"round"})]}),Lg=({size:o=16})=>a.jsx("svg",{width:o,height:o,viewBox:"0 0 20 20",fill:"none",children:a.jsx("path",{d:"M15.5 10.4955C15.4037 11.5379 15.0124 12.5314 14.3721 13.3596C13.7317 14.1878 12.8688 14.8165 11.8841 15.1722C10.8995 15.5278 9.83397 15.5957 8.81217 15.3679C7.79038 15.1401 6.8546 14.6259 6.11434 13.8857C5.37408 13.1454 4.85995 12.2096 4.63211 11.1878C4.40427 10.166 4.47215 9.10048 4.82781 8.11585C5.18346 7.13123 5.81218 6.26825 6.64039 5.62791C7.4686 4.98756 8.46206 4.59634 9.5045 4.5C8.89418 5.32569 8.60049 6.34302 8.67685 7.36695C8.75321 8.39087 9.19454 9.35339 9.92058 10.0794C10.6466 10.8055 11.6091 11.2468 12.6331 11.3231C13.657 11.3995 14.6743 11.1058 15.5 10.4955Z",stroke:"currentColor",strokeWidth:"1.13793",strokeLinecap:"round",strokeLinejoin:"round"})}),$g=({size:o=16})=>a.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M11.3799 6.9572L9.05645 4.63375M11.3799 6.9572L6.74949 11.5699C6.61925 11.6996 6.45577 11.791 6.277 11.8339L4.29549 12.3092C3.93194 12.3964 3.60478 12.0683 3.69297 11.705L4.16585 9.75693C4.20893 9.57947 4.29978 9.4172 4.42854 9.28771L9.05645 4.63375M11.3799 6.9572L12.3455 5.98759C12.9839 5.34655 12.9839 4.31002 12.3455 3.66897C11.7033 3.02415 10.6594 3.02415 10.0172 3.66897L9.06126 4.62892L9.05645 4.63375",stroke:"currentColor",strokeWidth:"0.9",strokeLinecap:"round",strokeLinejoin:"round"})}),Hg=({size:o=24})=>a.jsx("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M13.5 4C14.7426 4 15.75 5.00736 15.75 6.25V7H18.5C18.9142 7 19.25 7.33579 19.25 7.75C19.25 8.16421 18.9142 8.5 18.5 8.5H17.9678L17.6328 16.2217C17.61 16.7475 17.5912 17.1861 17.5469 17.543C17.5015 17.9087 17.4225 18.2506 17.2461 18.5723C16.9747 19.0671 16.5579 19.4671 16.0518 19.7168C15.7227 19.8791 15.3772 19.9422 15.0098 19.9717C14.6514 20.0004 14.2126 20 13.6865 20H10.3135C9.78735 20 9.34856 20.0004 8.99023 19.9717C8.62278 19.9422 8.27729 19.8791 7.94824 19.7168C7.44205 19.4671 7.02532 19.0671 6.75391 18.5723C6.57751 18.2506 6.49853 17.9087 6.45312 17.543C6.40883 17.1861 6.39005 16.7475 6.36719 16.2217L6.03223 8.5H5.5C5.08579 8.5 4.75 8.16421 4.75 7.75C4.75 7.33579 5.08579 7 5.5 7H8.25V6.25C8.25 5.00736 9.25736 4 10.5 4H13.5ZM7.86621 16.1562C7.89013 16.7063 7.90624 17.0751 7.94141 17.3584C7.97545 17.6326 8.02151 17.7644 8.06934 17.8516C8.19271 18.0763 8.38239 18.2577 8.6123 18.3711C8.70153 18.4151 8.83504 18.4545 9.11035 18.4766C9.39482 18.4994 9.76335 18.5 10.3135 18.5H13.6865C14.2367 18.5 14.6052 18.4994 14.8896 18.4766C15.165 18.4545 15.2985 18.4151 15.3877 18.3711C15.6176 18.2577 15.8073 18.0763 15.9307 17.8516C15.9785 17.7644 16.0245 17.6326 16.0586 17.3584C16.0938 17.0751 16.1099 16.7063 16.1338 16.1562L16.4668 8.5H7.5332L7.86621 16.1562ZM9.97656 10.75C10.3906 10.7371 10.7371 11.0626 10.75 11.4766L10.875 15.4766C10.8879 15.8906 10.5624 16.2371 10.1484 16.25C9.73443 16.2629 9.38794 15.9374 9.375 15.5234L9.25 11.5234C9.23706 11.1094 9.56255 10.7629 9.97656 10.75ZM14.0244 10.75C14.4383 10.7635 14.7635 11.1105 14.75 11.5244L14.6201 15.5244C14.6066 15.9384 14.2596 16.2634 13.8457 16.25C13.4317 16.2365 13.1067 15.8896 13.1201 15.4756L13.251 11.4756C13.2645 11.0617 13.6105 10.7366 14.0244 10.75ZM10.5 5.5C10.0858 5.5 9.75 5.83579 9.75 6.25V7H14.25V6.25C14.25 5.83579 13.9142 5.5 13.5 5.5H10.5Z",fill:"currentColor"})}),Ug=({size:o=16})=>a.jsx("svg",{width:o,height:o,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8.5 3.5L4 8L8.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Yg=({size:o=24})=>a.jsxs("svg",{width:o,height:o,viewBox:"0 0 24 24",fill:"none",children:[a.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9",stroke:"currentColor",strokeWidth:"1.5"}),a.jsx("line",{x1:"9",y1:"9",x2:"9",y2:"21",stroke:"currentColor",strokeWidth:"1.5"})]}),Rm=["data-feedback-toolbar","data-annotation-popup","data-annotation-marker"],rd=Rm.flatMap(o=>[`:not([${o}])`,`:not([${o}] *)`]).join(""),vd="feedback-freeze-styles",cd="__agentation_freeze";function Xg(){if(typeof window>"u")return{frozen:!1,installed:!0,origSetTimeout:setTimeout,origSetInterval:setInterval,origRAF:r=>0,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]};const o=window;return o[cd]||(o[cd]={frozen:!1,installed:!1,origSetTimeout:null,origSetInterval:null,origRAF:null,pausedAnimations:[],frozenTimeoutQueue:[],frozenRAFQueue:[]}),o[cd]}var bt=Xg();typeof window<"u"&&!bt.installed&&(bt.origSetTimeout=window.setTimeout.bind(window),bt.origSetInterval=window.setInterval.bind(window),bt.origRAF=window.requestAnimationFrame.bind(window),window.setTimeout=(o,r,...c)=>typeof o=="string"?bt.origSetTimeout(o,r):bt.origSetTimeout((...u)=>{bt.frozen?bt.frozenTimeoutQueue.push(()=>o(...u)):o(...u)},r,...c),window.setInterval=(o,r,...c)=>typeof o=="string"?bt.origSetInterval(o,r):bt.origSetInterval((...u)=>{bt.frozen||o(...u)},r,...c),window.requestAnimationFrame=o=>bt.origRAF(r=>{bt.frozen?bt.frozenRAFQueue.push(o):o(r)}),bt.installed=!0);var Fe=bt.origSetTimeout,qg=bt.origSetInterval,vs=bt.origRAF;function Ig(o){return o?Rm.some(r=>!!o.closest?.(`[${r}]`)):!1}function Qg(){if(typeof document>"u"||bt.frozen)return;bt.frozen=!0,bt.frozenTimeoutQueue=[],bt.frozenRAFQueue=[];let o=document.getElementById(vd);o||(o=document.createElement("style"),o.id=vd),o.textContent=`
    *${rd},
    *${rd}::before,
    *${rd}::after {
      animation-play-state: paused !important;
      transition: none !important;
    }
  `,document.head.appendChild(o),bt.pausedAnimations=[];try{document.getAnimations().forEach(r=>{if(r.playState!=="running")return;const c=r.effect?.target;Ig(c)||(r.pause(),bt.pausedAnimations.push(r))})}catch{}document.querySelectorAll("video").forEach(r=>{r.paused||(r.dataset.wasPaused="false",r.pause())})}function Fh(){if(typeof document>"u"||!bt.frozen)return;bt.frozen=!1;const o=bt.frozenTimeoutQueue;bt.frozenTimeoutQueue=[];for(const c of o)bt.origSetTimeout(()=>{if(bt.frozen){bt.frozenTimeoutQueue.push(c);return}try{c()}catch(u){console.warn("[agentation] Error replaying queued timeout:",u)}},0);const r=bt.frozenRAFQueue;bt.frozenRAFQueue=[];for(const c of r)bt.origRAF(u=>{if(bt.frozen){bt.frozenRAFQueue.push(c);return}c(u)});for(const c of bt.pausedAnimations)try{c.play()}catch(u){console.warn("[agentation] Error resuming animation:",u)}bt.pausedAnimations=[],document.getElementById(vd)?.remove(),document.querySelectorAll("video").forEach(c=>{c.dataset.wasPaused==="false"&&(c.play().catch(()=>{}),delete c.dataset.wasPaused)})}function ud(o){if(!o)return;const r=c=>c.stopImmediatePropagation();document.addEventListener("focusin",r,!0),document.addEventListener("focusout",r,!0);try{o.focus()}finally{document.removeEventListener("focusin",r,!0),document.removeEventListener("focusout",r,!0)}}var oc=m.forwardRef(function({element:r,timestamp:c,selectedText:u,placeholder:_="What should change?",initialValue:f="",submitLabel:b="Add",onSubmit:R,onCancel:v,onDelete:M,style:k,accentColor:z="#3c82f7",isExiting:T=!1,lightMode:de=!1,computedStyles:O},te){const[H,I]=m.useState(f),[he,pe]=m.useState(!1),[be,ct]=m.useState("initial"),[we,ee]=m.useState(!1),[oe,tt]=m.useState(!1),nt=m.useRef(null),Te=m.useRef(null),$e=m.useRef(null),Je=m.useRef(null);m.useEffect(()=>{T&&be!=="exit"&&ct("exit")},[T,be]),m.useEffect(()=>{Fe(()=>{ct("enter")},0);const me=Fe(()=>{ct("entered")},200),Ee=Fe(()=>{const S=nt.current;S&&(ud(S),S.selectionStart=S.selectionEnd=S.value.length,S.scrollTop=S.scrollHeight)},50);return()=>{clearTimeout(me),clearTimeout(Ee),$e.current&&clearTimeout($e.current),Je.current&&clearTimeout(Je.current)}},[]);const ke=m.useCallback(()=>{Je.current&&clearTimeout(Je.current),pe(!0),Je.current=Fe(()=>{pe(!1),ud(nt.current)},250)},[]);m.useImperativeHandle(te,()=>({shake:ke}),[ke]);const Ye=m.useCallback(()=>{ct("exit"),$e.current=Fe(()=>{v()},150)},[v]),x=m.useCallback(()=>{H.trim()&&R(H.trim())},[H,R]),J=m.useCallback(me=>{me.stopPropagation(),!me.nativeEvent.isComposing&&(me.key==="Enter"&&!me.shiftKey&&(me.preventDefault(),x()),me.key==="Escape"&&Ye())},[x,Ye]),q=[Wt.popup,de?Wt.light:"",be==="enter"?Wt.enter:"",be==="entered"?Wt.entered:"",be==="exit"?Wt.exit:"",he?Wt.shake:""].filter(Boolean).join(" ");return a.jsxs("div",{ref:Te,className:q,"data-annotation-popup":!0,style:k,onClick:me=>me.stopPropagation(),children:[a.jsxs("div",{className:Wt.header,children:[O&&Object.keys(O).length>0?a.jsxs("button",{className:Wt.headerToggle,onClick:()=>{const me=oe;tt(!oe),me&&Fe(()=>ud(nt.current),0)},type:"button",children:[a.jsx("svg",{className:`${Wt.chevron} ${oe?Wt.expanded:""}`,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M5.5 10.25L9 7.25L5.75 4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),a.jsx("span",{className:Wt.element,children:r})]}):a.jsx("span",{className:Wt.element,children:r}),c&&a.jsx("span",{className:Wt.timestamp,children:c})]}),O&&Object.keys(O).length>0&&a.jsx("div",{className:`${Wt.stylesWrapper} ${oe?Wt.expanded:""}`,children:a.jsx("div",{className:Wt.stylesInner,children:a.jsx("div",{className:Wt.stylesBlock,children:Object.entries(O).map(([me,Ee])=>a.jsxs("div",{className:Wt.styleLine,children:[a.jsx("span",{className:Wt.styleProperty,children:me.replace(/([A-Z])/g,"-$1").toLowerCase()}),": ",a.jsx("span",{className:Wt.styleValue,children:Ee}),";"]},me))})})}),u&&a.jsxs("div",{className:Wt.quote,children:["“",u.slice(0,80),u.length>80?"...":"","”"]}),a.jsx("textarea",{ref:nt,className:Wt.textarea,style:{borderColor:we?z:void 0},placeholder:_,value:H,onChange:me=>I(me.target.value),onFocus:()=>ee(!0),onBlur:()=>ee(!1),rows:2,onKeyDown:J}),a.jsxs("div",{className:Wt.actions,children:[M&&a.jsx("div",{className:Wt.deleteWrapper,children:a.jsx("button",{className:Wt.deleteButton,onClick:M,type:"button",children:a.jsx(Hg,{size:22})})}),a.jsx("button",{className:Wt.cancel,onClick:Ye,children:"Cancel"}),a.jsx("button",{className:Wt.submit,style:{backgroundColor:z,opacity:H.trim()?1:.4},onClick:x,disabled:!H.trim(),children:b})]})]})}),Wg=({content:o,children:r,...c})=>{const[u,_]=m.useState(!1),[f,b]=m.useState(!1),[R,v]=m.useState({top:0,right:0}),M=m.useRef(null),k=m.useRef(null),z=m.useRef(null),T=()=>{if(M.current){const te=M.current.getBoundingClientRect();v({top:te.top+te.height/2,right:window.innerWidth-te.left+8})}},de=()=>{b(!0),z.current&&(clearTimeout(z.current),z.current=null),T(),k.current=Fe(()=>{_(!0)},500)},O=()=>{k.current&&(clearTimeout(k.current),k.current=null),_(!1),z.current=Fe(()=>{b(!1)},150)};return m.useEffect(()=>()=>{k.current&&clearTimeout(k.current),z.current&&clearTimeout(z.current)},[]),a.jsxs(a.Fragment,{children:[a.jsx("span",{ref:M,onMouseEnter:de,onMouseLeave:O,...c,children:r}),f&&Ed.createPortal(a.jsx("div",{"data-feedback-toolbar":!0,style:{position:"fixed",top:R.top,right:R.right,transform:"translateY(-50%)",padding:"6px 10px",background:"#383838",color:"rgba(255, 255, 255, 0.7)",fontSize:"11px",fontWeight:400,lineHeight:"14px",borderRadius:"10px",width:"180px",textAlign:"left",zIndex:100020,pointerEvents:"none",boxShadow:"0px 1px 8px rgba(0, 0, 0, 0.28)",opacity:u?1:0,transition:"opacity 0.15s ease"},children:o}),document.body)]})},Gg=`.styles-module__tooltip___mcXL2 {
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
}`,Vg={tooltip:"styles-module__tooltip___mcXL2",tooltipIcon:"styles-module__tooltipIcon___Nq2nD"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-help-tooltip-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-help-tooltip-styles",document.head.appendChild(o)),o.textContent=Gg}var Jh=Vg,To=({content:o})=>a.jsx(Wg,{className:Jh.tooltip,content:o,children:a.jsx(Eg,{className:Jh.tooltipIcon})}),Me={navigation:{width:800,height:56},hero:{width:800,height:320},header:{width:800,height:80},section:{width:800,height:400},sidebar:{width:240,height:400},footer:{width:800,height:160},modal:{width:480,height:300},card:{width:280,height:240},text:{width:400,height:120},image:{width:320,height:200},video:{width:480,height:270},table:{width:560,height:220},grid:{width:600,height:300},list:{width:300,height:180},chart:{width:400,height:240},button:{width:140,height:40},input:{width:280,height:56},form:{width:360,height:320},tabs:{width:480,height:240},dropdown:{width:200,height:200},toggle:{width:44,height:24},search:{width:320,height:44},avatar:{width:48,height:48},badge:{width:80,height:28},breadcrumb:{width:300,height:24},pagination:{width:300,height:36},progress:{width:240,height:8},divider:{width:600,height:1},accordion:{width:400,height:200},carousel:{width:600,height:300},toast:{width:320,height:64},tooltip:{width:180,height:40},pricing:{width:300,height:360},testimonial:{width:360,height:200},cta:{width:600,height:160},alert:{width:400,height:56},banner:{width:800,height:48},stat:{width:200,height:120},stepper:{width:480,height:48},tag:{width:72,height:28},rating:{width:160,height:28},map:{width:480,height:300},timeline:{width:360,height:320},fileUpload:{width:360,height:180},codeBlock:{width:480,height:200},calendar:{width:300,height:300},notification:{width:360,height:72},productCard:{width:280,height:360},profile:{width:280,height:200},drawer:{width:320,height:400},popover:{width:240,height:160},logo:{width:120,height:40},faq:{width:560,height:320},gallery:{width:560,height:360},checkbox:{width:20,height:20},radio:{width:20,height:20},slider:{width:240,height:32},datePicker:{width:300,height:320},skeleton:{width:320,height:120},chip:{width:96,height:32},icon:{width:24,height:24},spinner:{width:32,height:32},feature:{width:360,height:200},team:{width:560,height:280},login:{width:360,height:360},contact:{width:400,height:320}},zm=[{section:"Layout",items:[{type:"navigation",label:"Navigation",...Me.navigation},{type:"header",label:"Header",...Me.header},{type:"hero",label:"Hero",...Me.hero},{type:"section",label:"Section",...Me.section},{type:"sidebar",label:"Sidebar",...Me.sidebar},{type:"footer",label:"Footer",...Me.footer},{type:"modal",label:"Modal",...Me.modal},{type:"banner",label:"Banner",...Me.banner},{type:"drawer",label:"Drawer",...Me.drawer},{type:"popover",label:"Popover",...Me.popover},{type:"divider",label:"Divider",...Me.divider}]},{section:"Content",items:[{type:"card",label:"Card",...Me.card},{type:"text",label:"Text",...Me.text},{type:"image",label:"Image",...Me.image},{type:"video",label:"Video",...Me.video},{type:"table",label:"Table",...Me.table},{type:"grid",label:"Grid",...Me.grid},{type:"list",label:"List",...Me.list},{type:"chart",label:"Chart",...Me.chart},{type:"codeBlock",label:"Code Block",...Me.codeBlock},{type:"map",label:"Map",...Me.map},{type:"timeline",label:"Timeline",...Me.timeline},{type:"calendar",label:"Calendar",...Me.calendar},{type:"accordion",label:"Accordion",...Me.accordion},{type:"carousel",label:"Carousel",...Me.carousel},{type:"logo",label:"Logo",...Me.logo},{type:"faq",label:"FAQ",...Me.faq},{type:"gallery",label:"Gallery",...Me.gallery}]},{section:"Controls",items:[{type:"button",label:"Button",...Me.button},{type:"input",label:"Input",...Me.input},{type:"search",label:"Search",...Me.search},{type:"form",label:"Form",...Me.form},{type:"tabs",label:"Tabs",...Me.tabs},{type:"dropdown",label:"Dropdown",...Me.dropdown},{type:"toggle",label:"Toggle",...Me.toggle},{type:"stepper",label:"Stepper",...Me.stepper},{type:"rating",label:"Rating",...Me.rating},{type:"fileUpload",label:"File Upload",...Me.fileUpload},{type:"checkbox",label:"Checkbox",...Me.checkbox},{type:"radio",label:"Radio",...Me.radio},{type:"slider",label:"Slider",...Me.slider},{type:"datePicker",label:"Date Picker",...Me.datePicker}]},{section:"Elements",items:[{type:"avatar",label:"Avatar",...Me.avatar},{type:"badge",label:"Badge",...Me.badge},{type:"tag",label:"Tag",...Me.tag},{type:"breadcrumb",label:"Breadcrumb",...Me.breadcrumb},{type:"pagination",label:"Pagination",...Me.pagination},{type:"progress",label:"Progress",...Me.progress},{type:"alert",label:"Alert",...Me.alert},{type:"toast",label:"Toast",...Me.toast},{type:"notification",label:"Notification",...Me.notification},{type:"tooltip",label:"Tooltip",...Me.tooltip},{type:"stat",label:"Stat",...Me.stat},{type:"skeleton",label:"Skeleton",...Me.skeleton},{type:"chip",label:"Chip",...Me.chip},{type:"icon",label:"Icon",...Me.icon},{type:"spinner",label:"Spinner",...Me.spinner}]},{section:"Blocks",items:[{type:"pricing",label:"Pricing",...Me.pricing},{type:"testimonial",label:"Testimonial",...Me.testimonial},{type:"cta",label:"CTA",...Me.cta},{type:"productCard",label:"Product Card",...Me.productCard},{type:"profile",label:"Profile",...Me.profile},{type:"feature",label:"Feature",...Me.feature},{type:"team",label:"Team",...Me.team},{type:"login",label:"Login",...Me.login},{type:"contact",label:"Contact",...Me.contact}]}],Hl={};for(const o of zm)for(const r of o.items)Hl[r.type]=r;function ae({w:o,h:r=3,strong:c}){return a.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:r,borderRadius:2,background:c?"var(--agd-bar-strong)":"var(--agd-bar)",flexShrink:0}})}function Ht({w:o,h:r,radius:c=3,style:u}){return a.jsx("div",{style:{width:typeof o=="number"?`${o}px`:o,height:typeof r=="number"?`${r}px`:r,borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0,...u}})}function Jn({size:o}){return a.jsx("div",{style:{width:o,height:o,borderRadius:"50%",border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",flexShrink:0}})}function Zg({width:o,height:r}){const c=Math.max(8,r*.2);return a.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100%",padding:`0 ${c}px`,gap:o*.02},children:[a.jsx(Ht,{w:Math.max(20,r*.5),h:Math.max(12,r*.4),radius:2}),a.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginLeft:o*.04},children:[a.jsx(ae,{w:o*.06}),a.jsx(ae,{w:o*.07}),a.jsx(ae,{w:o*.05}),a.jsx(ae,{w:o*.06})]}),a.jsx(Ht,{w:o*.1,h:Math.min(28,r*.5),radius:4})]})}function Kg({width:o,height:r,text:c}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:r*.05},children:[c?a.jsx("span",{style:{fontSize:Math.min(20,r*.08),fontWeight:600,color:"var(--agd-text-3)",textAlign:"center",maxWidth:"80%"},children:c}):a.jsx(ae,{w:o*.5,h:Math.max(6,r*.04),strong:!0}),a.jsx(ae,{w:o*.6}),a.jsx(ae,{w:o*.4}),a.jsx(Ht,{w:Math.min(140,o*.2),h:Math.min(36,r*.12),radius:6,style:{marginTop:r*.06}})]})}function Fg({width:o,height:r}){const c=Math.max(3,Math.floor(r/36));return a.jsxs("div",{style:{padding:o*.08,display:"flex",flexDirection:"column",gap:r*.03},children:[a.jsx(ae,{w:o*.6,h:4,strong:!0}),Array.from({length:c},(u,_)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(Ht,{w:10,h:10,radius:2}),a.jsx(ae,{w:o*(.4+_*17%30/100)})]},_))]})}function Jg({width:o,height:r}){const c=Math.max(2,Math.min(4,Math.floor(o/160)));return a.jsx("div",{style:{display:"flex",padding:`${r*.12}px ${o*.03}px`,gap:o*.05},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[a.jsx(ae,{w:"60%",h:3,strong:!0}),a.jsx(ae,{w:"80%",h:2}),a.jsx(ae,{w:"70%",h:2}),a.jsx(ae,{w:"60%",h:2})]},_))})}function Pg({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{padding:"10px 12px",borderBottom:"1px solid var(--agd-stroke)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx(ae,{w:o*.3,h:4,strong:!0}),a.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),a.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[a.jsx(ae,{w:"90%"}),a.jsx(ae,{w:"70%"}),a.jsx(ae,{w:"80%"})]}),a.jsxs("div",{style:{padding:"10px 12px",borderTop:"1px solid var(--agd-stroke)",display:"flex",justifyContent:"flex-end",gap:8},children:[a.jsx(Ht,{w:70,h:26,radius:4}),a.jsx(Ht,{w:70,h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})}function ey({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{height:"40%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),a.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[a.jsx(ae,{w:"70%",h:4,strong:!0}),a.jsx(ae,{w:"95%",h:2}),a.jsx(ae,{w:"85%",h:2}),a.jsx(ae,{w:"50%",h:2})]})]})}function ty({width:o,height:r,text:c}){if(c)return a.jsx("div",{style:{padding:4,fontSize:Math.min(14,r*.3),lineHeight:1.5,color:"var(--agd-text-3)",wordBreak:"break-word",overflow:"hidden"},children:c});const u=Math.max(2,Math.floor(r/18));return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,padding:4},children:[a.jsx(ae,{w:o*.6,h:5,strong:!0}),Array.from({length:u},(_,f)=>a.jsx(ae,{w:`${70+f*13%25}%`,h:2},f))]})}function ny({width:o,height:r}){return a.jsx("div",{style:{height:"100%",position:"relative"},children:a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,preserveAspectRatio:"none",fill:"none",children:[a.jsx("line",{x1:"0",y1:"0",x2:o,y2:r,stroke:"var(--agd-stroke)",strokeWidth:"1"}),a.jsx("line",{x1:o,y1:"0",x2:"0",y2:r,stroke:"var(--agd-stroke)",strokeWidth:"1"}),a.jsx("circle",{cx:o*.3,cy:r*.3,r:Math.min(o,r)*.08,fill:"var(--agd-fill)",stroke:"var(--agd-stroke)",strokeWidth:"0.8"})]})})}function ly({width:o,height:r}){const c=Math.max(2,Math.min(5,Math.floor(o/100))),u=Math.max(2,Math.min(6,Math.floor(r/32)));return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{display:"flex",borderBottom:"1px solid var(--agd-stroke)",padding:"6px 0"},children:Array.from({length:c},(_,f)=>a.jsx("div",{style:{flex:1,padding:"0 8px"},children:a.jsx(ae,{w:"70%",h:3,strong:!0})},f))}),Array.from({length:u},(_,f)=>a.jsx("div",{style:{display:"flex",borderBottom:"1px solid rgba(255,255,255,0.03)",padding:"6px 0"},children:Array.from({length:c},(b,R)=>a.jsx("div",{style:{flex:1,padding:"0 8px"},children:a.jsx(ae,{w:`${50+(f*7+R*13)%40}%`,h:2})},R))},f))]})}function ay({width:o,height:r}){const c=Math.max(2,Math.floor(r/28));return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:4,padding:4},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 0"},children:[a.jsx(Jn,{size:8}),a.jsx(ae,{w:`${55+_*17%35}%`,h:2})]},_))})}function oy({width:o,height:r,text:c}){return a.jsx("div",{style:{height:"100%",borderRadius:Math.min(8,r/3),border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:c?a.jsx("span",{style:{fontSize:Math.min(13,r*.4),fontWeight:500,color:"var(--agd-text-3)",letterSpacing:"-0.01em"},children:c}):a.jsx(ae,{w:Math.max(20,o*.5),h:3,strong:!0})})}function sy({width:o,height:r}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4,height:"100%",justifyContent:"center"},children:[a.jsx(ae,{w:Math.min(80,o*.3),h:2}),a.jsx("div",{style:{height:Math.min(36,r*.6),borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",paddingLeft:8},children:a.jsx(ae,{w:"40%",h:2})})]})}function iy({width:o,height:r}){const c=Math.max(2,Math.min(5,Math.floor(r/56)));return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:r*.04,padding:8},children:[Array.from({length:c},(u,_)=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[a.jsx(ae,{w:60+_*17%30,h:2}),a.jsx(Ht,{w:"100%",h:28,radius:4})]},_)),a.jsx(Ht,{w:Math.min(120,o*.35),h:30,radius:6,style:{marginTop:8,alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}function ry({width:o,height:r}){const c=Math.max(2,Math.min(4,Math.floor(o/120)));return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{display:"flex",gap:2,borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(u,_)=>a.jsx("div",{style:{padding:"8px 12px",borderBottom:_===0?"2px solid var(--agd-bar-strong)":"none"},children:a.jsx(ae,{w:60,h:3,strong:_===0})},_))}),a.jsxs("div",{style:{flex:1,padding:12,display:"flex",flexDirection:"column",gap:6},children:[a.jsx(ae,{w:"80%",h:2}),a.jsx(ae,{w:"65%",h:2}),a.jsx(ae,{w:"75%",h:2})]})]})}function cy({width:o,height:r}){const c=Math.min(o,r)/2;return a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",children:[a.jsx("circle",{cx:o/2,cy:r/2,r:c-1,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"1.5",strokeDasharray:"3 2"}),a.jsx("circle",{cx:o/2,cy:r*.38,r:c*.28,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"}),a.jsx("path",{d:`M${o/2-c*.55} ${r*.78} C${o/2-c*.55} ${r*.55} ${o/2+c*.55} ${r*.55} ${o/2+c*.55} ${r*.78}`,stroke:"var(--agd-stroke)",fill:"var(--agd-fill)",strokeWidth:"0.8"})]})}function uy({width:o,height:r}){return a.jsx("div",{style:{height:"100%",borderRadius:r/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(ae,{w:Math.max(16,o*.5),h:2,strong:!0})})}function dy({width:o,height:r}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:r*.08},children:[a.jsx(ae,{w:o*.5,h:Math.max(5,r*.06),strong:!0}),a.jsx(ae,{w:o*.35})]})}function _y({width:o,height:r}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",gap:r*.04,padding:o*.04},children:[a.jsx(ae,{w:o*.3,h:4,strong:!0}),a.jsx(ae,{w:o*.7}),a.jsx(ae,{w:o*.5}),a.jsxs("div",{style:{flex:1,display:"flex",gap:o*.03,marginTop:r*.06},children:[a.jsx(Ht,{w:"33%",h:"100%",radius:4}),a.jsx(Ht,{w:"33%",h:"100%",radius:4}),a.jsx(Ht,{w:"33%",h:"100%",radius:4})]})]})}function fy({width:o,height:r}){const c=Math.max(2,Math.min(4,Math.floor(o/140))),u=Math.max(1,Math.min(3,Math.floor(r/120)));return a.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${u}, 1fr)`,gap:6,height:"100%"},children:Array.from({length:c*u},(_,f)=>a.jsx(Ht,{w:"100%",h:"100%",radius:4},f))})}function hy({width:o,height:r}){const c=Math.max(2,Math.floor((r-32)/28));return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{padding:"6px 8px",borderBottom:"1px solid var(--agd-stroke)"},children:a.jsx(ae,{w:o*.5,h:3,strong:!0})}),a.jsx("div",{style:{flex:1,padding:4,display:"flex",flexDirection:"column",gap:2},children:Array.from({length:c},(u,_)=>a.jsx("div",{style:{padding:"4px 6px",borderRadius:3,background:_===0?"var(--agd-fill)":"transparent"},children:a.jsx(ae,{w:`${50+_*17%35}%`,h:2,strong:_===0})},_))})]})}function my({width:o,height:r}){const c=Math.min(o,r)/2;return a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",children:[a.jsx("rect",{x:"1",y:"1",width:o-2,height:r-2,rx:c,stroke:"var(--agd-stroke)",strokeWidth:"1"}),a.jsx("circle",{cx:o-c,cy:r/2,r:c*.7,fill:"var(--agd-bar)"})]})}function gy({width:o,height:r}){const c=Math.min(r/2,20);return a.jsxs("div",{style:{height:"100%",borderRadius:c,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${c*.6}px`,gap:6},children:[a.jsx(Jn,{size:Math.min(14,r*.4)}),a.jsx(ae,{w:"50%",h:2})]})}function yy({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[a.jsx(Jn,{size:Math.min(20,r*.5)}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:"60%",h:3,strong:!0}),a.jsx(ae,{w:"80%",h:2})]}),a.jsx("div",{style:{width:14,height:14,border:"1px solid var(--agd-stroke)",borderRadius:3,flexShrink:0}})]})}function py({width:o,height:r}){return a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",children:[a.jsx("rect",{x:"0",y:"0",width:o,height:r,rx:r/2,stroke:"var(--agd-stroke)",strokeWidth:"0.8"}),a.jsx("rect",{x:"1",y:"1",width:o*.65,height:r-2,rx:(r-2)/2,fill:"var(--agd-bar)"})]})}function xy({width:o,height:r}){const c=Math.max(3,Math.min(7,Math.floor(o/50))),u=o/(c*2);return a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"flex-end",justifyContent:"space-around",padding:"0 4px",borderBottom:"1px solid var(--agd-stroke)"},children:Array.from({length:c},(_,f)=>{const b=30+(f*37+17)%55;return a.jsx(Ht,{w:u,h:`${b}%`,radius:2},f)})})}function by({width:o,height:r}){const c=Math.min(o,r)*.12;return a.jsxs("div",{style:{height:"100%",position:"relative",display:"flex",alignItems:"center",justifyContent:"center"},children:[a.jsx(Ht,{w:"100%",h:"100%",radius:4}),a.jsx("div",{style:{position:"absolute",width:c*2,height:c*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("div",{style:{width:0,height:0,borderLeft:`${c*.6}px solid var(--agd-bar-strong)`,borderTop:`${c*.4}px solid transparent`,borderBottom:`${c*.4}px solid transparent`,marginLeft:c*.15}})})]})}function vy({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx("div",{style:{flex:1,width:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(ae,{w:"60%",h:2})}),a.jsx("div",{style:{width:8,height:8,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-5}})]})}function wy({width:o,height:r}){const c=Math.max(2,Math.min(4,Math.floor(o/80)));return a.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%",gap:4},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[_>0&&a.jsx("span",{style:{color:"var(--agd-stroke)",fontSize:10},children:"/"}),a.jsx(ae,{w:40+_*13%20,h:2,strong:_===c-1})]},_))})}function Sy({width:o,height:r}){const c=Math.max(3,Math.min(5,Math.floor(o/40))),u=Math.min(28,r*.8);return a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:4},children:Array.from({length:c},(_,f)=>a.jsx(Ht,{w:u,h:u,radius:4,style:f===1?{background:"var(--agd-bar)"}:void 0},f))})}function ky({width:o}){return a.jsx("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:a.jsx("div",{style:{width:"100%",height:1,background:"var(--agd-stroke)"}})})}function jy({width:o,height:r}){const c=Math.max(2,Math.min(4,Math.floor(r/40)));return a.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:_===0?2:1},children:[a.jsx(ae,{w:`${40+_*17%25}%`,h:3,strong:!0}),a.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:_===0?"▼":"▶"})]},_))})}function Cy({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:6},children:[a.jsxs("div",{style:{flex:1,display:"flex",gap:6,alignItems:"center"},children:[a.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"‹"}),a.jsx(Ht,{w:"100%",h:"100%",radius:4}),a.jsx("span",{style:{fontSize:12,color:"var(--agd-stroke)"},children:"›"})]}),a.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:4},children:[a.jsx(Jn,{size:5}),a.jsx(Jn,{size:5}),a.jsx(Jn,{size:5})]})]})}function My({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:10,gap:r*.04},children:[a.jsx(ae,{w:o*.4,h:3,strong:!0}),a.jsx(ae,{w:o*.3,h:6,strong:!0}),a.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4,width:"100%",padding:"8px 0"},children:Array.from({length:4},(c,u)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[a.jsx(Jn,{size:5}),a.jsx(ae,{w:`${50+u*17%35}%`,h:2})]},u))}),a.jsx(Ht,{w:o*.7,h:Math.min(32,r*.1),radius:6,style:{background:"var(--agd-bar)"}})]})}function Ey({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:10,gap:8},children:[a.jsx("span",{style:{fontSize:18,lineHeight:1,color:"var(--agd-stroke)",fontFamily:"serif"},children:"“"}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[a.jsx(ae,{w:"90%",h:2}),a.jsx(ae,{w:"75%",h:2}),a.jsx(ae,{w:"60%",h:2})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx(Jn,{size:20}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[a.jsx(ae,{w:60,h:3,strong:!0}),a.jsx(ae,{w:40,h:2})]})]})]})}function Ny({width:o,height:r}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:r*.08},children:[a.jsx(ae,{w:o*.5,h:Math.max(4,r*.05),strong:!0}),a.jsx(ae,{w:o*.35}),a.jsx(Ht,{w:Math.min(140,o*.25),h:Math.min(32,r*.15),radius:6,style:{marginTop:r*.04,background:"var(--agd-bar)"}})]})}function Ty({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[a.jsx("div",{style:{width:16,height:16,borderRadius:"50%",border:"1.5px solid var(--agd-bar-strong)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("div",{style:{width:2,height:6,background:"var(--agd-bar-strong)",borderRadius:1}})}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:"40%",h:3,strong:!0}),a.jsx(ae,{w:"70%",h:2})]})]})}function Ry({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:8,padding:"0 12px"},children:[a.jsx(ae,{w:o*.4,h:3,strong:!0}),a.jsx(Ht,{w:60,h:Math.min(24,r*.6),radius:4})]})}function zy({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:r*.06},children:[a.jsx(ae,{w:o*.5,h:2}),a.jsx(ae,{w:o*.4,h:Math.max(8,r*.18),strong:!0}),a.jsx(ae,{w:o*.3,h:2})]})}function Dy({width:o,height:r}){const c=Math.max(3,Math.min(5,Math.floor(o/100))),u=Math.min(12,r*.35);return a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"100%",padding:"0 8px"},children:Array.from({length:c},(_,f)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,flex:1},children:[a.jsx("div",{style:{width:u,height:u,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:f===0?"var(--agd-bar)":"transparent",flexShrink:0}}),f<c-1&&a.jsx("div",{style:{flex:1,height:1,background:"var(--agd-stroke)",margin:"0 4px"}})]},f))})}function Ay({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",borderRadius:4,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",justifyContent:"center",gap:4,padding:"0 6px"},children:[a.jsx(ae,{w:Math.max(16,o*.5),h:2,strong:!0}),a.jsx("div",{style:{width:8,height:8,borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0}})]})}function Oy({width:o,height:r}){const u=Math.min(r*.7,o/7.5);return a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",gap:u*.2},children:Array.from({length:5},(_,f)=>a.jsx("svg",{width:u,height:u,viewBox:"0 0 16 16",fill:"none",children:a.jsx("path",{d:"M8 1.5l2 4 4.5.7-3.25 3.1.75 4.5L8 11.4l-4 2.4.75-4.5L1.5 6.2 6 5.5z",stroke:"var(--agd-stroke)",strokeWidth:"0.8",fill:f<3?"var(--agd-bar)":"none"})},f))})}function By({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",position:"relative",borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",overflow:"hidden"},children:[a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",style:{position:"absolute",inset:0},children:[a.jsx("line",{x1:0,y1:r*.3,x2:o,y2:r*.7,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".2"}),a.jsx("line",{x1:0,y1:r*.6,x2:o,y2:r*.2,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"}),a.jsx("line",{x1:o*.4,y1:0,x2:o*.6,y2:r,stroke:"var(--agd-stroke)",strokeWidth:"0.5",opacity:".15"})]}),a.jsx("div",{style:{position:"absolute",left:"50%",top:"40%",transform:"translate(-50%, -100%)"},children:a.jsxs("svg",{width:"16",height:"22",viewBox:"0 0 16 22",fill:"none",children:[a.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8c0 6 8 14 8 14s8-8 8-14c0-4.4-3.6-8-8-8z",fill:"var(--agd-bar)",opacity:".4"}),a.jsx("circle",{cx:"8",cy:"8",r:"3",fill:"var(--agd-fill)"})]})})]})}function Ly({width:o,height:r}){const c=Math.max(3,Math.min(5,Math.floor(r/60)));return a.jsxs("div",{style:{display:"flex",height:"100%",padding:"8px 0"},children:[a.jsx("div",{style:{width:16,display:"flex",flexDirection:"column",alignItems:"center"},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",flex:1},children:[a.jsx(Jn,{size:8}),_<c-1&&a.jsx("div",{style:{flex:1,width:1,background:"var(--agd-stroke)"}})]},_))}),a.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",justifyContent:"space-around",paddingLeft:8},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:`${35+_*13%25}%`,h:3,strong:!0}),a.jsx(ae,{w:`${50+_*17%30}%`,h:2})]},_))})]})}function $y({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",borderRadius:8,border:"2px dashed var(--agd-stroke)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:r*.06},children:[a.jsxs("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:[a.jsx("path",{d:"M12 16V4m0 0l-4 4m4-4l4 4",stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),a.jsx("path",{d:"M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2",stroke:"var(--agd-stroke)",strokeWidth:"1.5"})]}),a.jsx(ae,{w:o*.4,h:2}),a.jsx(ae,{w:o*.25,h:2})]})}function Hy({width:o,height:r}){const c=Math.max(3,Math.min(8,Math.floor(r/20)));return a.jsxs("div",{style:{height:"100%",borderRadius:6,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",padding:8,display:"flex",flexDirection:"column",gap:4},children:[a.jsxs("div",{style:{display:"flex",gap:3,marginBottom:4},children:[a.jsx(Jn,{size:6}),a.jsx(Jn,{size:6}),a.jsx(Jn,{size:6})]}),Array.from({length:c},(u,_)=>a.jsx("div",{style:{display:"flex",gap:6,paddingLeft:_>0&&_<c-1?12:0},children:a.jsx(ae,{w:`${25+_*23%50}%`,h:2,strong:_===0})},_))]})}function Uy({width:o,height:r}){const _=Math.min((o-16)/7,(r-40)/6);return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"6px 8px"},children:[a.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"‹"}),a.jsx(ae,{w:o*.3,h:3,strong:!0}),a.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:"›"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:2,padding:"0 4px",flex:1},children:[Array.from({length:7},(f,b)=>a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:_*.6},children:a.jsx(ae,{w:_*.5,h:2})},`h${b}`)),Array.from({length:35},(f,b)=>a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:_},children:a.jsx("div",{style:{width:_*.6,height:_*.6,borderRadius:"50%",background:b===12?"var(--agd-bar)":"transparent",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("div",{style:{width:2,height:2,borderRadius:1,background:"var(--agd-bar-strong)",opacity:b===12?1:.3}})})},b))]})]})}function Yy({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 10px",gap:8},children:[a.jsx(Jn,{size:Math.min(32,r*.55)}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:"50%",h:3,strong:!0}),a.jsx(ae,{w:"75%",h:2})]}),a.jsx(ae,{w:30,h:2})]})}function Xy({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column"},children:[a.jsx("div",{style:{height:"50%",background:"var(--agd-fill)",borderBottom:"1px dashed var(--agd-stroke)"}}),a.jsxs("div",{style:{flex:1,padding:10,display:"flex",flexDirection:"column",gap:5},children:[a.jsx(ae,{w:"65%",h:4,strong:!0}),a.jsx(ae,{w:"40%",h:3}),a.jsx("div",{style:{flex:1}}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx(ae,{w:"30%",h:5,strong:!0}),a.jsx(Ht,{w:Math.min(70,o*.3),h:26,radius:4,style:{background:"var(--agd-bar)"}})]})]})]})}function qy({width:o,height:r}){const c=Math.min(48,r*.3);return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:r*.06},children:[a.jsx(Jn,{size:c}),a.jsx(ae,{w:o*.45,h:4,strong:!0}),a.jsx(ae,{w:o*.3,h:2}),a.jsxs("div",{style:{display:"flex",gap:o*.08,marginTop:r*.04},children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[a.jsx(ae,{w:20,h:3,strong:!0}),a.jsx(ae,{w:28,h:2})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[a.jsx(ae,{w:20,h:3,strong:!0}),a.jsx(ae,{w:28,h:2})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[a.jsx(ae,{w:20,h:3,strong:!0}),a.jsx(ae,{w:28,h:2})]})]})]})}function Iy({width:o,height:r}){const c=Math.max(o*.6,80),u=Math.max(3,Math.floor(r/40));return a.jsxs("div",{style:{height:"100%",display:"flex"},children:[a.jsx("div",{style:{width:o-c,background:"var(--agd-fill)",opacity:.3}}),a.jsxs("div",{style:{flex:1,borderLeft:"1px solid var(--agd-stroke)",display:"flex",flexDirection:"column",padding:o*.04},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:r*.06},children:[a.jsx(ae,{w:c*.4,h:4,strong:!0}),a.jsx("div",{style:{width:12,height:12,border:"1px solid var(--agd-stroke)",borderRadius:3}})]}),Array.from({length:u},(_,f)=>a.jsx("div",{style:{padding:"6px 0"},children:a.jsx(ae,{w:`${50+f*17%35}%`,h:2,strong:f===0})},f))]})]})}function Qy({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsxs("div",{style:{flex:1,width:"100%",borderRadius:8,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",padding:10,display:"flex",flexDirection:"column",gap:5},children:[a.jsx(ae,{w:"70%",h:3,strong:!0}),a.jsx(ae,{w:"90%",h:2}),a.jsx(ae,{w:"60%",h:2})]}),a.jsx("div",{style:{width:10,height:10,background:"var(--agd-fill)",border:"1px dashed var(--agd-stroke)",borderTop:"none",borderLeft:"none",transform:"rotate(45deg)",marginTop:-6}})]})}function Wy({width:o,height:r}){const c=Math.min(r*.7,o*.3);return a.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:o*.08},children:[a.jsx(Ht,{w:c,h:c,radius:c*.25}),a.jsx(ae,{w:o*.45,h:Math.max(4,r*.2),strong:!0})]})}function Gy({width:o,height:r}){const c=Math.max(2,Math.min(5,Math.floor(r/56)));return a.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{borderBottom:"1px solid var(--agd-stroke)",padding:"8px 6px",display:"flex",alignItems:"center",justifyContent:"space-between",flex:_===0?2:1},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{fontSize:9,fontWeight:700,color:"var(--agd-stroke)"},children:"Q"}),a.jsx(ae,{w:o*(.3+_*13%25/100),h:3,strong:!0})]}),a.jsx("span",{style:{fontSize:8,color:"var(--agd-stroke)"},children:_===0?"▼":"▶"})]},_))})}function Vy({width:o,height:r}){const c=Math.max(2,Math.min(4,Math.floor(o/120))),u=Math.max(1,Math.min(3,Math.floor(r/120)));return a.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${c}, 1fr)`,gridTemplateRows:`repeat(${u}, 1fr)`,gap:4,height:"100%"},children:Array.from({length:c*u},(_,f)=>a.jsx("div",{style:{borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",position:"relative",overflow:"hidden"},children:a.jsxs("svg",{width:"100%",height:"100%",viewBox:"0 0 100 100",preserveAspectRatio:"none",fill:"none",children:[a.jsx("line",{x1:"0",y1:"0",x2:"100",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"}),a.jsx("line",{x1:"100",y1:"0",x2:"0",y2:"100",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})},f))})}function Zy({width:o,height:r}){const c=Math.min(o,r);return a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",children:[a.jsx("rect",{x:"1",y:(r-c+2)/2,width:c-2,height:c-2,rx:c*.15,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),a.jsx("path",{d:`M${c*.25} ${r/2}l${c*.2} ${c*.2} ${c*.3}-${c*.35}`,stroke:"var(--agd-bar)",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})]})}function Ky({width:o,height:r}){const c=Math.min(o,r)/2-1;return a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",children:[a.jsx("circle",{cx:o/2,cy:r/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5"}),a.jsx("circle",{cx:o/2,cy:r/2,r:c*.45,fill:"var(--agd-bar)"})]})}function Fy({width:o,height:r}){const c=Math.max(2,r*.12),u=Math.min(r*.35,10),_=o*.55;return a.jsxs("div",{style:{height:"100%",display:"flex",alignItems:"center",position:"relative"},children:[a.jsx("div",{style:{width:"100%",height:c,borderRadius:c/2,background:"var(--agd-fill)",border:"1px solid var(--agd-stroke)",position:"relative"},children:a.jsx("div",{style:{width:_,height:"100%",borderRadius:c/2,background:"var(--agd-bar)"}})}),a.jsx("div",{style:{position:"absolute",left:_-u,width:u*2,height:u*2,borderRadius:"50%",border:"1.5px solid var(--agd-stroke)",background:"var(--agd-fill)"}})]})}function Jy({width:o,height:r}){const c=Math.min(36,r*.15),u=7,_=4,f=Math.min((o-16)/u,(r-c-40)/(_+1));return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:4},children:[a.jsxs("div",{style:{height:c,borderRadius:4,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"space-between"},children:[a.jsx(ae,{w:"40%",h:2}),a.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 16 16",fill:"none",children:[a.jsx("rect",{x:"2",y:"3",width:"12",height:"11",rx:"1",stroke:"var(--agd-stroke)",strokeWidth:"1"}),a.jsx("line",{x1:"2",y1:"6",x2:"14",y2:"6",stroke:"var(--agd-stroke)",strokeWidth:"0.5"})]})]}),a.jsxs("div",{style:{flex:1,borderRadius:6,border:"1px dashed var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",flexDirection:"column"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 6px"},children:[a.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"‹"}),a.jsx(ae,{w:o*.25,h:2,strong:!0}),a.jsx("span",{style:{fontSize:7,color:"var(--agd-stroke)"},children:"›"})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${u}, 1fr)`,gap:1,padding:"0 4px",flex:1},children:Array.from({length:u*_},(b,R)=>a.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:f},children:a.jsx("div",{style:{width:f*.5,height:f*.5,borderRadius:"50%",background:R===10?"var(--agd-bar)":"transparent"},children:a.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("div",{style:{width:1.5,height:1.5,borderRadius:1,background:"var(--agd-bar-strong)",opacity:R===10?1:.25}})})})},R))})]})]})}function Py({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",gap:r*.08,padding:4},children:[a.jsx("div",{style:{width:"100%",height:r*.2,borderRadius:4,background:"var(--agd-fill)"}}),a.jsx("div",{style:{width:"70%",height:Math.max(6,r*.1),borderRadius:3,background:"var(--agd-fill)"}}),a.jsx("div",{style:{width:"90%",height:Math.max(4,r*.06),borderRadius:3,background:"var(--agd-fill)"}}),a.jsx("div",{style:{width:"50%",height:Math.max(4,r*.06),borderRadius:3,background:"var(--agd-fill)"}})]})}function ep({width:o,height:r}){return a.jsx("div",{style:{height:"100%",display:"flex",alignItems:"center",gap:6},children:a.jsxs("div",{style:{height:"100%",flex:1,borderRadius:r/2,border:"1px solid var(--agd-stroke)",background:"var(--agd-fill)",display:"flex",alignItems:"center",padding:`0 ${r*.3}px`,gap:4},children:[a.jsx(ae,{w:"60%",h:2,strong:!0}),a.jsx("div",{style:{width:Math.max(6,r*.3),height:Math.max(6,r*.3),borderRadius:"50%",border:"1px solid var(--agd-stroke)",flexShrink:0,marginLeft:"auto"}})]})})}function tp({width:o,height:r}){const c=Math.min(o,r);return a.jsx("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",children:a.jsx("path",{d:`M${o/2} ${(r-c)/2+c*.1}l${c*.12} ${c*.25} ${c*.28} ${c*.04}-${c*.2} ${c*.2} ${c*.05} ${c*.28}-${c*.25}-${c*.12}-${c*.25} ${c*.12} ${c*.05}-${c*.28}-${c*.2}-${c*.2} ${c*.28}-${c*.04}z`,stroke:"var(--agd-stroke)",strokeWidth:"1",fill:"var(--agd-fill)"})})}function np({width:o,height:r}){const c=Math.min(o,r)/2-2;return a.jsxs("svg",{width:"100%",height:"100%",viewBox:`0 0 ${o} ${r}`,fill:"none",children:[a.jsx("circle",{cx:o/2,cy:r/2,r:c,stroke:"var(--agd-stroke)",strokeWidth:"1.5",opacity:".2"}),a.jsx("path",{d:`M${o/2} ${r/2-c}a${c} ${c} 0 0 1 ${c} ${c}`,stroke:"var(--agd-bar-strong)",strokeWidth:"1.5",strokeLinecap:"round"})]})}function lp({width:o,height:r}){const c=Math.min(36,r*.25,o*.12),u=Math.max(1,Math.min(3,Math.floor(r/80)));return a.jsx("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-around",padding:8},children:Array.from({length:u},(_,f)=>a.jsxs("div",{style:{display:"flex",gap:o*.04,alignItems:"flex-start"},children:[a.jsx(Ht,{w:c,h:c,radius:c*.25}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:4},children:[a.jsx(ae,{w:`${40+f*13%20}%`,h:3,strong:!0}),a.jsx(ae,{w:`${60+f*17%25}%`,h:2})]})]},f))})}function ap({width:o,height:r}){const c=Math.max(2,Math.min(4,Math.floor(o/120))),u=Math.min(36,r*.25);return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",gap:r*.06,padding:r*.06},children:[a.jsx(ae,{w:o*.3,h:4,strong:!0}),a.jsx("div",{style:{display:"flex",gap:o*.06,justifyContent:"center",flex:1,alignItems:"center"},children:Array.from({length:c},(_,f)=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:6},children:[a.jsx(Jn,{size:u}),a.jsx(ae,{w:o*.12,h:3,strong:!0}),a.jsx(ae,{w:o*.08,h:2})]},f))})]})}function op({width:o,height:r}){const c=Math.max(2,Math.min(3,Math.floor(r/80)));return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",padding:o*.06,gap:r*.04},children:[a.jsx(ae,{w:o*.5,h:Math.max(5,r*.04),strong:!0}),a.jsx(ae,{w:o*.35,h:2}),a.jsx("div",{style:{width:"100%",display:"flex",flexDirection:"column",gap:r*.03,marginTop:r*.04},children:Array.from({length:c},(u,_)=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:Math.min(60,o*.2),h:2}),a.jsx(Ht,{w:"100%",h:Math.min(32,r*.1),radius:4})]},_))}),a.jsx(Ht,{w:"100%",h:Math.min(36,r*.12),radius:6,style:{marginTop:r*.03,background:"var(--agd-bar)"}}),a.jsx(ae,{w:o*.4,h:2})]})}function sp({width:o,height:r}){return a.jsxs("div",{style:{height:"100%",display:"flex",flexDirection:"column",padding:o*.04,gap:r*.03},children:[a.jsx(ae,{w:o*.4,h:4,strong:!0}),a.jsx(ae,{w:o*.6,h:2}),a.jsxs("div",{style:{display:"flex",gap:6,marginTop:r*.03},children:[a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:50,h:2}),a.jsx(Ht,{w:"100%",h:Math.min(28,r*.1),radius:4})]}),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:40,h:2}),a.jsx(Ht,{w:"100%",h:Math.min(28,r*.1),radius:4})]})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3},children:[a.jsx(ae,{w:50,h:2}),a.jsx(Ht,{w:"100%",h:Math.min(28,r*.1),radius:4})]}),a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:3,flex:1},children:[a.jsx(ae,{w:60,h:2}),a.jsx(Ht,{w:"100%",h:"100%",radius:4})]}),a.jsx(Ht,{w:Math.min(120,o*.3),h:Math.min(30,r*.1),radius:6,style:{alignSelf:"flex-end",background:"var(--agd-bar)"}})]})}var ip={navigation:Zg,hero:Kg,sidebar:Fg,footer:Jg,modal:Pg,card:ey,text:ty,image:ny,table:ly,list:ay,button:oy,input:sy,form:iy,tabs:ry,avatar:cy,badge:uy,header:dy,section:_y,grid:fy,dropdown:hy,toggle:my,search:gy,toast:yy,progress:py,chart:xy,video:by,tooltip:vy,breadcrumb:wy,pagination:Sy,divider:ky,accordion:jy,carousel:Cy,pricing:My,testimonial:Ey,cta:Ny,alert:Ty,banner:Ry,stat:zy,stepper:Dy,tag:Ay,rating:Oy,map:By,timeline:Ly,fileUpload:$y,codeBlock:Hy,calendar:Uy,notification:Yy,productCard:Xy,profile:qy,drawer:Iy,popover:Qy,logo:Wy,faq:Gy,gallery:Vy,checkbox:Zy,radio:Ky,slider:Fy,datePicker:Jy,skeleton:Py,chip:ep,icon:tp,spinner:np,feature:lp,team:ap,login:op,contact:sp};function rp({type:o,width:r,height:c,text:u}){const _=ip[o];return _?a.jsx("div",{style:{width:"100%",height:"100%",padding:8,position:"relative",pointerEvents:"none"},children:a.jsx(_,{width:r,height:c,text:u})}):a.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx("span",{style:{fontSize:10,fontWeight:600,color:"var(--agd-text-3)",textTransform:"uppercase",letterSpacing:"0.06em",opacity:.5},children:o})})}var cp=`svg[fill=none] {
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
}`,up={overlayExiting:"styles-module__overlayExiting___iEmYr",overlay:"styles-module__overlay___aWh-q",overlayFadeIn:"styles-module__overlayFadeIn___aECVy",light:"styles-module__light___ORIft",wireframe:"styles-module__wireframe___itvQU",placing:"styles-module__placing___45yD8",passthrough:"styles-module__passthrough___xaFeE",blankCanvas:"styles-module__blankCanvas___t2Eue",visible:"styles-module__visible___OKKqX",gridActive:"styles-module__gridActive___OZ-cf",paletteHeader:"styles-module__paletteHeader___-Q5gQ",paletteHeaderTitle:"styles-module__paletteHeaderTitle___oHqZC",paletteHeaderDesc:"styles-module__paletteHeaderDesc___6i74T",wireframePurposeWrap:"styles-module__wireframePurposeWrap___To-tS",collapsed:"styles-module__collapsed___Ms9vS",wireframePurposeInner:"styles-module__wireframePurposeInner___Lrahs",wireframePurposeInput:"styles-module__wireframePurposeInput___7EtBN",canvasToggle:"styles-module__canvasToggle___-QqSy",active:"styles-module__active___hosp7",canvasToggleIcon:"styles-module__canvasToggleIcon___7pJ82",canvasToggleLabel:"styles-module__canvasToggleLabel___OanpY",canvasPurposeWrap:"styles-module__canvasPurposeWrap___hj6zk",canvasPurposeInner:"styles-module__canvasPurposeInner___VWiyu",canvasPurposeToggle:"styles-module__canvasPurposeToggle___byDH2",canvasPurposeCheck:"styles-module__canvasPurposeCheck___xqd7l",checked:"styles-module__checked___-1JGH",canvasPurposeLabel:"styles-module__canvasPurposeLabel___Zu-tD",canvasPurposeHelp:"styles-module__canvasPurposeHelp___jijwR",placement:"styles-module__placement___zcxv8",placementEnter:"styles-module__placementEnter___TdRhf",selected:"styles-module__selected___6yrp6",dragging:"styles-module__dragging___le6KZ",exiting:"styles-module__exiting___YrM8F",placementContent:"styles-module__placementContent___f64A4",placementLabel:"styles-module__placementLabel___0KvWl",placementAnnotation:"styles-module__placementAnnotation___78pTr",annotationVisible:"styles-module__annotationVisible___mrUyA",sectionAnnotation:"styles-module__sectionAnnotation___aUIs0",handle:"styles-module__handle___Ikbxm",sectionOutline:"styles-module__sectionOutline___s0hy-",ghostOutline:"styles-module__ghostOutline___po-kO",handleNw:"styles-module__handleNw___4TMIj",handleNe:"styles-module__handleNe___mnsTh",handleSe:"styles-module__handleSe___oSFnk",handleSw:"styles-module__handleSw___pi--Z",handleN:"styles-module__handleN___aBA-Q",handleE:"styles-module__handleE___0hM5u",handleS:"styles-module__handleS___JjDRv",handleW:"styles-module__handleW___ERWGQ",edgeHandle:"styles-module__edgeHandle___XxXdT",edgeN:"styles-module__edgeN___-JJDj",edgeS:"styles-module__edgeS___66lMX",edgeE:"styles-module__edgeE___1bGDa",edgeW:"styles-module__edgeW___lHQNo",deleteButton:"styles-module__deleteButton___LkGCb",rearrangeOverlay:"styles-module__rearrangeOverlay___-3R3t",drawBox:"styles-module__drawBox___BrVAa",selectBox:"styles-module__selectBox___Iu8kB",sizeIndicator:"styles-module__sizeIndicator___7zJ4y",guideLine:"styles-module__guideLine___DUQY2",dragPreview:"styles-module__dragPreview___onPbU",dragPreviewWireframe:"styles-module__dragPreviewWireframe___jsg0G",palette:"styles-module__palette___C7iSH",paletteItem:"styles-module__paletteItem___6TlnA",paletteItemLabel:"styles-module__paletteItemLabel___6ncO4",paletteSectionTitle:"styles-module__paletteSectionTitle___PqnjX",paletteFooter:"styles-module__paletteFooter___QYnAG",enter:"styles-module__enter___6LYk5",exit:"styles-module__exit___iSGRw",paletteSection:"styles-module__paletteSection___V8DEA",paletteItemIcon:"styles-module__paletteItemIcon___0NPQK",placeScroll:"styles-module__placeScroll___7sClM",fadeTop:"styles-module__fadeTop___KT9tF",fadeBottom:"styles-module__fadeBottom___x3ShT",paletteFooterWrap:"styles-module__paletteFooterWrap___71-fI",footerHidden:"styles-module__footerHidden___fJUik",paletteFooterInnerContent:"styles-module__paletteFooterInnerContent___VC26h",paletteFooterInner:"styles-module__paletteFooterInner___dfylY",paletteFooterCount:"styles-module__paletteFooterCount___D3Fia",paletteFooterClear:"styles-module__paletteFooterClear___ybBoa",paletteFooterActions:"styles-module__paletteFooterActions___fLzv8",rollingWrap:"styles-module__rollingWrap___S75jM",rollingNum:"styles-module__rollingNum___1RKDx",exitUp:"styles-module__exitUp___AFDRW",numExitUp:"styles-module__numExitUp___FRQqx",enterUp:"styles-module__enterUp___CPlXb",numEnterUp:"styles-module__numEnterUp___2Yd-w",exitDown:"styles-module__exitDown___-1yAy",numExitDown:"styles-module__numExitDown___xm5by",enterDown:"styles-module__enterDown___DDuFR",numEnterDown:"styles-module__numEnterDown___hpxBk",hoverHighlight:"styles-module__hoverHighlight___8eT-v",highlightFadeIn:"styles-module__highlightFadeIn___Lg7KY",sectionEnter:"styles-module__sectionEnter___-8BXT",settled:"styles-module__settled___b5U5o",sectionLabel:"styles-module__sectionLabel___F80HQ",movedBadge:"styles-module__movedBadge___s8z-q",sectionDimensions:"styles-module__sectionDimensions___RcJSL",badgeVisible:"styles-module__badgeVisible___npbdS",resizedBadge:"styles-module__resizedBadge___u51V8",wireframeNotice:"styles-module__wireframeNotice___4GJyB",wireframeOpacityRow:"styles-module__wireframeOpacityRow___CJXzi",wireframeOpacityLabel:"styles-module__wireframeOpacityLabel___afkfT",wireframeOpacitySlider:"styles-module__wireframeOpacitySlider___YcoEs",wireframeNoticeTitleRow:"styles-module__wireframeNoticeTitleRow___PJqyG",wireframeNoticeTitle:"styles-module__wireframeNoticeTitle___okr08",wireframeNoticeDivider:"styles-module__wireframeNoticeDivider___PNKQ6",wireframeStartOver:"styles-module__wireframeStartOver___YFk-I",ghostEnter:"styles-module__ghostEnter___EC3Mb",ghostBadge:"styles-module__ghostBadge___tsQUK",badgeSlideIn:"styles-module__badgeSlideIn___typJ7",ghostBadgeExtra:"styles-module__ghostBadgeExtra___6CVoD",badgeExtraIn:"styles-module__badgeExtraIn___i4W8F",originalOutline:"styles-module__originalOutline___Y6DD1",originalLabel:"styles-module__originalLabel___HqI9g",connectorSvg:"styles-module__connectorSvg___Lovld",connectorLine:"styles-module__connectorLine___XeWh-",connectorDraw:"styles-module__connectorDraw___8sK5I",connectorDot:"styles-module__connectorDot___yvf7C",connectorDotIn:"styles-module__connectorDotIn___NwTUq",connectorExiting:"styles-module__connectorExiting___2lLOs",connectorOut:"styles-module__connectorOut___5QoPl",connectorDotOut:"styles-module__connectorDotOut___FEq7e"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-design-mode-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-design-mode-styles",document.head.appendChild(o)),o.textContent=cp}var K=up,ys=24,Gr=5;function Ph(o,r,c,u,_){let f=1/0,b=1/0;const R=o.x,v=o.x+o.width,M=o.x+o.width/2,k=o.y,z=o.y+o.height,T=o.y+o.height/2,de=!u,O=de?[R,v,M]:[...u.left?[R]:[],...u.right?[v]:[]],te=de?[k,z,T]:[...u.top?[k]:[],...u.bottom?[z]:[]],H=[];for(const Te of r)c.has(Te.id)||H.push(Te);_&&H.push(..._);for(const Te of H){const $e=Te.x,Je=Te.x+Te.width,ke=Te.x+Te.width/2,Ye=Te.y,x=Te.y+Te.height,J=Te.y+Te.height/2;for(const q of O)for(const me of[$e,Je,ke]){const Ee=me-q;Math.abs(Ee)<Gr&&Math.abs(Ee)<Math.abs(f)&&(f=Ee)}for(const q of te)for(const me of[Ye,x,J]){const Ee=me-q;Math.abs(Ee)<Gr&&Math.abs(Ee)<Math.abs(b)&&(b=Ee)}}const I=Math.abs(f)<Gr?f:0,he=Math.abs(b)<Gr?b:0,pe=[],be=new Set,ct=R+I,we=v+I,ee=M+I,oe=k+he,tt=z+he,nt=T+he;for(const Te of H){const $e=Te.x,Je=Te.x+Te.width,ke=Te.x+Te.width/2,Ye=Te.y,x=Te.y+Te.height,J=Te.y+Te.height/2;for(const q of[$e,ke,Je])for(const me of[ct,ee,we])if(Math.abs(me-q)<.5){const Ee=`x:${Math.round(q)}`;be.has(Ee)||(be.add(Ee),pe.push({axis:"x",pos:q}))}for(const q of[Ye,J,x])for(const me of[oe,nt,tt])if(Math.abs(me-q)<.5){const Ee=`y:${Math.round(q)}`;be.has(Ee)||(be.add(Ee),pe.push({axis:"y",pos:q}))}}return{dx:I,dy:he,guides:pe}}function em(){return`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`}function dp({placements:o,onChange:r,activeComponent:c,onActiveComponentChange:u,isDarkMode:_,exiting:f,onInteractionChange:b,className:R,passthrough:v,extraSnapRects:M,onSelectionChange:k,deselectSignal:z,onDragMove:T,onDragEnd:de,clearSignal:O,wireframe:te}){const[H,I]=m.useState(new Set),[he,pe]=m.useState(null),[be,ct]=m.useState(null),[we,ee]=m.useState(null),[oe,tt]=m.useState([]),[nt,Te]=m.useState(null),[$e,Je]=m.useState(!1),ke=m.useRef(!1),[Ye,x]=m.useState(new Set),J=m.useRef(new Map),q=m.useRef(null),me=m.useRef(null),Ee=m.useRef(o);Ee.current=o;const S=m.useRef(k);S.current=k;const Q=m.useRef(T);Q.current=T;const ue=m.useRef(de);ue.current=de;const ye=m.useRef(z);m.useEffect(()=>{z!==ye.current&&(ye.current=z,I(new Set))},[z]);const qe=m.useRef(O);m.useEffect(()=>{if(O!==void 0&&O!==qe.current){qe.current=O;const Z=new Set(Ee.current.map(ze=>ze.id));Z.size>0&&(x(Z),I(new Set),me.current=null,Fe(()=>{r([]),x(new Set)},180))}},[O,r]),m.useEffect(()=>{const Z=ze=>{const Pe=ze.target;if(!(Pe.tagName==="INPUT"||Pe.tagName==="TEXTAREA"||Pe.isContentEditable)){if((ze.key==="Backspace"||ze.key==="Delete")&&H.size>0){ze.preventDefault();const ot=new Set(H);x(ot),I(new Set),Fe(()=>{r(Ee.current.filter(vt=>!ot.has(vt.id))),x(new Set)},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(ze.key)&&H.size>0){ze.preventDefault();const ot=ze.shiftKey?20:1,vt=ze.key==="ArrowLeft"?-ot:ze.key==="ArrowRight"?ot:0,He=ze.key==="ArrowUp"?-ot:ze.key==="ArrowDown"?ot:0;r(o.map(st=>H.has(st.id)?{...st,x:Math.max(0,st.x+vt),y:Math.max(0,st.y+He)}:st));return}if(ze.key==="Escape"){c?u(null):H.size>0&&I(new Set);return}}};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[H,c,o,r,u]);const ut=m.useCallback(Z=>{if(Z.button!==0||v||Z.target.closest(`.${K.placement}`))return;Z.preventDefault(),Z.stopPropagation();const Pe=window.scrollY,We=Z.clientX,ot=Z.clientY;if(c){me.current="place",b?.(!0);let vt=!1,He=We,st=ot;const xt=De=>{He=De.clientX,st=De.clientY;const A=Math.abs(He-We),$=Math.abs(st-ot);if((A>5||$>5)&&(vt=!0),vt){const F=Math.min(We,He),le=Math.min(ot,st),je=Math.abs(He-We),re=Math.abs(st-ot);pe({x:F,y:le,w:je,h:re}),ee({x:De.clientX+12,y:De.clientY+12,text:`${Math.round(je)} × ${Math.round(re)}`})}},Ot=De=>{window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",Ot),pe(null),ee(null),me.current=null,b?.(!1);const A=Me[c];let $,F,le,je;vt?($=Math.min(We,He),F=Math.min(ot,st)+Pe,le=Math.max(ys,Math.abs(He-We)),je=Math.max(ys,Math.abs(st-ot))):(le=A.width,je=A.height,$=We-le/2,F=ot+Pe-je/2),$=Math.max(0,$),F=Math.max(0,F);const re={id:em(),type:c,x:$,y:F,width:le,height:je,scrollY:Pe,timestamp:Date.now()},se=[...o,re];r(se),I(new Set([re.id])),u(null)};window.addEventListener("mousemove",xt),window.addEventListener("mouseup",Ot)}else{Z.shiftKey||I(new Set),me.current="select";let vt=!1;const He=xt=>{const Ot=Math.abs(xt.clientX-We),De=Math.abs(xt.clientY-ot);if((Ot>4||De>4)&&(vt=!0),vt){const A=Math.min(We,xt.clientX),$=Math.min(ot,xt.clientY);ct({x:A,y:$,w:Math.abs(xt.clientX-We),h:Math.abs(xt.clientY-ot)})}},st=xt=>{if(window.removeEventListener("mousemove",He),window.removeEventListener("mouseup",st),me.current=null,vt){const Ot=Math.min(We,xt.clientX),De=Math.min(ot,xt.clientY)+Pe,A=Math.abs(xt.clientX-We),$=Math.abs(xt.clientY-ot),F=new Set(Z.shiftKey?H:new Set);for(const le of o)le.y-Pe,le.x+le.width>Ot&&le.x<Ot+A&&le.y+le.height>De&&le.y<De+$&&F.add(le.id);I(F)}ct(null)};window.addEventListener("mousemove",He),window.addEventListener("mouseup",st)}},[c,v,o,r,H]),dt=m.useCallback((Z,ze)=>{if(Z.button!==0)return;const Pe=Z.target;if(Pe.closest(`.${K.handle}`)||Pe.closest(`.${K.deleteButton}`))return;Z.preventDefault(),Z.stopPropagation();let We;Z.shiftKey?(We=new Set(H),We.has(ze)?We.delete(ze):We.add(ze)):H.has(ze)?We=new Set(H):We=new Set([ze]),I(We),(We.size!==H.size||[...We].some(re=>!H.has(re)))&&S.current?.(We,Z.shiftKey);const vt=Z.clientX,He=Z.clientY,st=new Map;for(const re of o)We.has(re.id)&&st.set(re.id,{x:re.x,y:re.y});me.current="move",b?.(!0);let xt=!1,Ot=!1,De=o,A=0,$=0;const F=new Map;for(const re of o)st.has(re.id)&&F.set(re.id,{w:re.width,h:re.height});const le=re=>{const se=re.clientX-vt,Oe=re.clientY-He;if((Math.abs(se)>2||Math.abs(Oe)>2)&&(xt=!0),!xt)return;if(re.altKey&&!Ot){Ot=!0;const Ie=[];for(const yt of o)st.has(yt.id)&&Ie.push({...yt,id:em(),timestamp:Date.now()});De=[...o,...Ie]}let it=1/0,mt=1/0,Et=-1/0,U=-1/0;for(const[Ie,yt]of st){const lt=F.get(Ie);lt&&(it=Math.min(it,yt.x+se),mt=Math.min(mt,yt.y+Oe),Et=Math.max(Et,yt.x+se+lt.w),U=Math.max(U,yt.y+Oe+lt.h))}const ce={x:it,y:mt,width:Et-it,height:U-mt},{dx:_e,dy:ve,guides:xe}=Ph(ce,De,new Set(st.keys()),void 0,M);tt(xe);const Xe=se+_e,Ze=Oe+ve;A=Xe,$=Ze,r(De.map(Ie=>{const yt=st.get(Ie.id);return yt?{...Ie,x:Math.max(0,yt.x+Xe),y:Math.max(0,yt.y+Ze)}:Ie})),Q.current?.(Xe,Ze)},je=()=>{window.removeEventListener("mousemove",le),window.removeEventListener("mouseup",je),me.current=null,b?.(!1),tt([]),ue.current?.(A,$,xt)};window.addEventListener("mousemove",le),window.addEventListener("mouseup",je)},[H,o,r,b]),It=m.useCallback((Z,ze,Pe)=>{Z.preventDefault(),Z.stopPropagation();const We=o.find(F=>F.id===ze);if(!We)return;I(new Set([ze])),me.current="resize",b?.(!0);const ot=Z.clientX,vt=Z.clientY,He=We.width,st=We.height,xt=We.x,Ot=We.y,De={left:Pe.includes("w"),right:Pe.includes("e"),top:Pe.includes("n"),bottom:Pe.includes("s")},A=F=>{const le=F.clientX-ot,je=F.clientY-vt;let re=He,se=st,Oe=xt,it=Ot;Pe.includes("e")&&(re=Math.max(ys,He+le)),Pe.includes("w")&&(re=Math.max(ys,He-le),Oe=xt+He-re),Pe.includes("s")&&(se=Math.max(ys,st+je)),Pe.includes("n")&&(se=Math.max(ys,st-je),it=Ot+st-se);const mt={x:Oe,y:it,width:re,height:se},{dx:Et,dy:U,guides:ce}=Ph(mt,Ee.current,new Set([ze]),De,M);tt(ce),Et!==0&&(De.right?re+=Et:De.left&&(Oe+=Et,re-=Et)),U!==0&&(De.bottom?se+=U:De.top&&(it+=U,se-=U)),r(Ee.current.map(_e=>_e.id===ze?{..._e,x:Oe,y:it,width:re,height:se}:_e)),ee({x:F.clientX+12,y:F.clientY+12,text:`${Math.round(re)} × ${Math.round(se)}`})},$=()=>{window.removeEventListener("mousemove",A),window.removeEventListener("mouseup",$),ee(null),me.current=null,b?.(!1),tt([])};window.addEventListener("mousemove",A),window.addEventListener("mouseup",$)},[o,r,b]),Ct=m.useCallback(Z=>{me.current=null,x(ze=>{const Pe=new Set(ze);return Pe.add(Z),Pe}),I(ze=>{const Pe=new Set(ze);return Pe.delete(Z),Pe}),Fe(()=>{r(Ee.current.filter(ze=>ze.id!==Z)),x(ze=>{const Pe=new Set(ze);return Pe.delete(Z),Pe})},180)},[r]),Mn={hero:"Headline text",button:"Button label",badge:"Badge label",cta:"Call to action text",toast:"Notification message",modal:"Dialog title",card:"Card title",navigation:"Brand / nav items",tabs:"Tab labels",input:"Placeholder text",search:"Search placeholder",pricing:"Plan name or price",testimonial:"Quote text",alert:"Alert message",banner:"Banner text",tag:"Tag label",notification:"Notification message",stat:"Metric value",productCard:"Product name"},dn=m.useCallback(Z=>{const ze=o.find(Pe=>Pe.id===Z);ze&&(ke.current=!!ze.text,Te(Z),Je(!1))},[o]),_n=m.useCallback(()=>{nt&&(Je(!0),Fe(()=>{Te(null),Je(!1)},150))},[nt]);m.useEffect(()=>{f&&nt&&_n()},[f]);const pn=m.useCallback(Z=>{nt&&(r(o.map(ze=>ze.id===nt?{...ze,text:Z.trim()||void 0}:ze)),_n())},[nt,o,r,_n]),en=typeof window<"u"?window.scrollY:0,Ln=["nw","ne","se","sw"],Qn=te?"#f97316":"#3c82f7",yl=[{dir:"n",cls:K.edgeN,arrow:a.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:a.jsx("path",{d:"M4 0.5L1 4.5h6z",fill:Qn})})},{dir:"e",cls:K.edgeE,arrow:a.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:a.jsx("path",{d:"M5.5 4L1.5 1v6z",fill:Qn})})},{dir:"s",cls:K.edgeS,arrow:a.jsx("svg",{width:"8",height:"6",viewBox:"0 0 8 6",fill:"none",children:a.jsx("path",{d:"M4 5.5L1 1.5h6z",fill:Qn})})},{dir:"w",cls:K.edgeW,arrow:a.jsx("svg",{width:"6",height:"8",viewBox:"0 0 6 8",fill:"none",children:a.jsx("path",{d:"M0.5 4L4.5 1v6z",fill:Qn})})}];return a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:q,className:`${K.overlay} ${_?"":K.light} ${c?K.placing:""} ${v?K.passthrough:""} ${f?K.overlayExiting:""} ${te?K.wireframe:""}${R?` ${R}`:""}`,"data-feedback-toolbar":!0,onMouseDown:ut,children:o.map(Z=>{const ze=H.has(Z.id),Pe=Hl[Z.type]?.label||Z.type,We=Z.y-en;return a.jsxs("div",{"data-design-placement":Z.id,className:`${K.placement} ${ze?K.selected:""} ${Ye.has(Z.id)?K.exiting:""}`,style:{left:Z.x,top:We,width:Z.width,height:Z.height,position:"fixed"},onMouseDown:ot=>dt(ot,Z.id),onDoubleClick:()=>dn(Z.id),children:[a.jsx("span",{className:K.placementLabel,children:Pe}),a.jsx("span",{className:`${K.placementAnnotation} ${Z.text?K.annotationVisible:""}`,children:(Z.text&&J.current.set(Z.id,Z.text),Z.text||J.current.get(Z.id)||"")}),a.jsx("div",{className:K.placementContent,children:a.jsx(rp,{type:Z.type,width:Z.width,height:Z.height,text:Z.text})}),a.jsx("div",{className:K.deleteButton,onMouseDown:ot=>ot.stopPropagation(),onClick:()=>Ct(Z.id),children:"✕"}),Ln.map(ot=>a.jsx("div",{className:`${K.handle} ${K[`handle${ot.charAt(0).toUpperCase()}${ot.slice(1)}`]}`,onMouseDown:vt=>It(vt,Z.id,ot)},ot)),yl.map(({dir:ot,cls:vt,arrow:He})=>a.jsx("div",{className:`${K.edgeHandle} ${vt}`,onMouseDown:st=>It(st,Z.id,ot),children:He},ot))]},Z.id)})}),nt&&(()=>{const Z=o.find(Ot=>Ot.id===nt);if(!Z)return null;const ze=Z.y-en,Pe=Z.x+Z.width/2,We=ze-8,ot=ze+Z.height+8,vt=We>200,He=ot<window.innerHeight-100,st=Math.max(160,Math.min(window.innerWidth-160,Pe));let xt;return vt?xt={left:st,bottom:window.innerHeight-We}:He?xt={left:st,top:ot}:xt={left:st,top:Math.max(80,window.innerHeight/2-80)},a.jsx(oc,{element:Hl[Z.type]?.label||Z.type,placeholder:Mn[Z.type]||"Label or content text",initialValue:Z.text??"",submitLabel:ke.current?"Save":"Set",onSubmit:pn,onCancel:_n,onDelete:ke.current?()=>{pn("")}:void 0,isExiting:$e,lightMode:!_,style:xt})})(),he&&a.jsx("div",{className:K.drawBox,style:{left:he.x,top:he.y,width:he.w,height:he.h},"data-feedback-toolbar":!0}),be&&a.jsx("div",{className:K.selectBox,style:{left:be.x,top:be.y,width:be.w,height:be.h},"data-feedback-toolbar":!0}),we&&a.jsx("div",{className:K.sizeIndicator,style:{left:we.x,top:we.y},"data-feedback-toolbar":!0,children:we.text}),oe.map((Z,ze)=>a.jsx("div",{className:K.guideLine,style:Z.axis==="x"?{position:"fixed",left:Z.pos,top:0,width:1,bottom:0}:{position:"fixed",left:0,top:Z.pos-en,right:0,height:1},"data-feedback-toolbar":!0},`${Z.axis}-${Z.pos}-${ze}`))]})}function _p(o){if(!o)return"";const r=o.scrollTop>2,c=o.scrollTop+o.clientHeight<o.scrollHeight-2;return`${r?K.fadeTop:""} ${c?K.fadeBottom:""}`}var y="currentColor",V="0.5";function fp({type:o}){switch(o){case"navigation":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"4",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"2.5",y:"7",width:"3",height:"1.5",rx:".5",fill:y,opacity:".4"}),a.jsx("rect",{x:"7",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"11",y:"7",width:"2.5",height:"1.5",rx:".5",fill:y,opacity:".25"})]});case"header":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3",y:"5.5",width:"8",height:"2",rx:".5",fill:y,opacity:".35"}),a.jsx("rect",{x:"3",y:"9",width:"12",height:"1",rx:".5",fill:y,opacity:".15"})]});case"hero":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5",y:"5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".35"}),a.jsx("rect",{x:"7",y:"8",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"7.5",y:"10.5",width:"5",height:"2.5",rx:"1",stroke:y,strokeWidth:V})]});case"section":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"1",width:"18",height:"14",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3",y:"4",width:"6",height:"1",rx:".5",fill:y,opacity:".3"}),a.jsx("rect",{x:"3",y:"6.5",width:"14",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"3",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".15"})]});case"sidebar":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"2.5",y:"4",width:"4",height:"1",rx:".5",fill:y,opacity:".3"}),a.jsx("rect",{x:"2.5",y:"6.5",width:"3.5",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"2.5",y:"9",width:"4",height:"1",rx:".5",fill:y,opacity:".15"})]});case"footer":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"7",width:"18",height:"8",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"9",y:"9.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"15",y:"9.5",width:"3",height:"1",rx:".5",fill:y,opacity:".2"})]});case"modal":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5",y:"4.5",width:"7",height:"1",rx:".5",fill:y,opacity:".3"}),a.jsx("rect",{x:"5",y:"7",width:"10",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"11",y:"11",width:"5",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"divider":return a.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:a.jsx("line",{x1:"2",y1:"8",x2:"18",y2:"8",stroke:y,strokeWidth:"0.5",opacity:".3"})});case"card":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"2",y:"1",width:"16",height:"5.5",rx:"1",fill:y,opacity:".04"}),a.jsx("rect",{x:"4",y:"8.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"4",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".12"})]});case"text":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"4",width:"14",height:"1.5",rx:".5",fill:y,opacity:".3"}),a.jsx("rect",{x:"2",y:"7",width:"11",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"2",y:"9.5",width:"13",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"2",y:"12",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"image":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("line",{x1:"2",y1:"2",x2:"18",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),a.jsx("line",{x1:"18",y1:"2",x2:"2",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"video":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("path",{d:"M8.5 5.5v5l4.5-2.5z",stroke:y,strokeWidth:V,fill:y,opacity:".15"})]});case"table":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("line",{x1:"1",y1:"5.5",x2:"19",y2:"5.5",stroke:y,strokeWidth:".3",opacity:".25"}),a.jsx("line",{x1:"1",y1:"9",x2:"19",y2:"9",stroke:y,strokeWidth:".3",opacity:".25"}),a.jsx("line",{x1:"7",y1:"2",x2:"7",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"}),a.jsx("line",{x1:"13",y1:"2",x2:"13",y2:"14",stroke:y,strokeWidth:".3",opacity:".25"})]});case"grid":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"11.5",y:"2",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"1.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"11.5",y:"9.5",width:"7",height:"5.5",rx:"1",stroke:y,strokeWidth:V})]});case"list":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("circle",{cx:"3.5",cy:"4.5",r:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6.5",y:"4",width:"10",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("circle",{cx:"3.5",cy:"8",r:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6.5",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("circle",{cx:"3.5",cy:"11.5",r:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6.5",y:"11",width:"11",height:"1",rx:".5",fill:y,opacity:".2"})]});case"chart":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"9",width:"2.5",height:"4",rx:".5",fill:y,opacity:".2"}),a.jsx("rect",{x:"7",y:"6",width:"2.5",height:"7",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"11",y:"3",width:"2.5",height:"10",rx:".5",fill:y,opacity:".3"}),a.jsx("rect",{x:"15",y:"5",width:"2.5",height:"8",rx:".5",fill:y,opacity:".2"})]});case"accordion":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1.5",y:"2",width:"17",height:"4",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3",y:"3.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"1.5",y:"7.5",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"1.5",y:"12",width:"17",height:"3",rx:"1",stroke:y,strokeWidth:V})]});case"carousel":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"2",width:"14",height:"10",rx:"1",stroke:y,strokeWidth:V}),a.jsx("path",{d:"M1.5 7L3 8.5 1.5 10",stroke:y,strokeWidth:V,opacity:".35"}),a.jsx("path",{d:"M18.5 7L17 8.5 18.5 10",stroke:y,strokeWidth:V,opacity:".35"}),a.jsx("circle",{cx:"8.5",cy:"14",r:".6",fill:y,opacity:".35"}),a.jsx("circle",{cx:"10",cy:"14",r:".6",fill:y,opacity:".15"}),a.jsx("circle",{cx:"11.5",cy:"14",r:".6",fill:y,opacity:".15"})]});case"button":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"2",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6.5",y:"7.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"})]});case"input":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"4",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"2",y:"6.5",width:"16",height:"5.5",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3.5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"search":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"4.5",width:"16",height:"7",rx:"3.5",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:V,opacity:".3"}),a.jsx("line",{x1:"7.5",y1:"9.5",x2:"9",y2:"11",stroke:y,strokeWidth:V,opacity:".3"}),a.jsx("rect",{x:"9.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"form":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"1.5",width:"5.5",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"2",y:"3.5",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"2",y:"8",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"2",y:"10",width:"16",height:"3",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"12",y:"14",width:"6",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"tabs":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"5",width:"18",height:"10",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"1",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"2.5",y:"3.25",width:"3",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"7",y:"2",width:"6",height:"3.5",rx:".75",stroke:y,strokeWidth:V})]});case"dropdown":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"2",width:"16",height:"4",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3.5",y:"3.5",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("path",{d:"M15 3.5l1.5 1.5L18 3.5",stroke:y,strokeWidth:V,opacity:".3"}),a.jsx("rect",{x:"2",y:"7",width:"16",height:"7",rx:"1",stroke:y,strokeWidth:V,strokeDasharray:"2 1",opacity:".3"})]});case"toggle":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"4",y:"5",width:"12",height:"6",rx:"3",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"13",cy:"8",r:"2",fill:y,opacity:".3"})]});case"avatar":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("circle",{cx:"10",cy:"8",r:"6",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"10",cy:"6.5",r:"2",stroke:y,strokeWidth:V}),a.jsx("path",{d:"M6.5 13c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5",stroke:y,strokeWidth:V})]});case"badge":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"3",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"})]});case"breadcrumb":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1.5",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".3"}),a.jsx("path",{d:"M6.5 7l1 1-1 1",stroke:y,strokeWidth:V,opacity:".2"}),a.jsx("rect",{x:"9",y:"7",width:"3.5",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("path",{d:"M14 7l1 1-1 1",stroke:y,strokeWidth:V,opacity:".2"}),a.jsx("rect",{x:"16.5",y:"7",width:"2",height:"1",rx:".5",fill:y,opacity:".15"})]});case"pagination":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"11",y:"5.5",width:"3.5",height:"5",rx:"1",fill:y,opacity:".15",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"15.5",y:"5.5",width:"3.5",height:"5",rx:"1",stroke:y,strokeWidth:V})]});case"progress":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"7",width:"16",height:"2",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:"1",fill:y,opacity:".2"})]});case"toast":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"5",cy:"8",r:"1.5",stroke:y,strokeWidth:V,opacity:".3"}),a.jsx("rect",{x:"8",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"8",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"tooltip":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"3",width:"14",height:"7",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5.5",y:"5.5",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("path",{d:"M9 10l1 2.5 1-2.5",stroke:y,strokeWidth:V})]});case"pricing":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"7",y:"5.5",width:"6",height:"2",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"5",y:"9",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),a.jsx("rect",{x:"5",y:"11",width:"10",height:"1",rx:".5",fill:y,opacity:".1"}),a.jsx("rect",{x:"6",y:"13",width:"8",height:"1.5",rx:".5",fill:y,opacity:".2"})]});case"testimonial":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("text",{x:"4",y:"5.5",fontSize:"4",fill:y,opacity:".2",fontFamily:"serif",children:"“"}),a.jsx("rect",{x:"4",y:"7",width:"12",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"4",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".12"}),a.jsx("circle",{cx:"5.5",cy:"12.5",r:"1.5",stroke:y,strokeWidth:V,opacity:".25"}),a.jsx("rect",{x:"8",y:"12",width:"5",height:"1",rx:".5",fill:y,opacity:".15"})]});case"cta":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"2",width:"18",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5",y:"4.5",width:"10",height:"1.5",rx:".5",fill:y,opacity:".3"}),a.jsx("rect",{x:"6",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"7",y:"10",width:"6",height:"2.5",rx:"1",stroke:y,strokeWidth:V})]});case"alert":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"4",width:"16",height:"8",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"6",cy:"8",r:"2",stroke:y,strokeWidth:V,opacity:".3"}),a.jsx("line",{x1:"6",y1:"7",x2:"6",y2:"8.5",stroke:y,strokeWidth:"0.6",opacity:".5"}),a.jsx("circle",{cx:"6",cy:"9.3",r:".3",fill:y,opacity:".5"}),a.jsx("rect",{x:"9.5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".2"})]});case"banner":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1",y:"5",width:"18",height:"6",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"4",y:"7.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"14",y:"7",width:"3.5",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"stat":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"5",y:"7",width:"10",height:"2.5",rx:".5",fill:y,opacity:".3"}),a.jsx("rect",{x:"7",y:"11",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"stepper":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("circle",{cx:"4",cy:"8",r:"2",fill:y,opacity:".2",stroke:y,strokeWidth:V}),a.jsx("line",{x1:"6",y1:"8",x2:"8",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),a.jsx("circle",{cx:"10",cy:"8",r:"2",stroke:y,strokeWidth:V}),a.jsx("line",{x1:"12",y1:"8",x2:"14",y2:"8",stroke:y,strokeWidth:".4",opacity:".3"}),a.jsx("circle",{cx:"16",cy:"8",r:"2",stroke:y,strokeWidth:V})]});case"tag":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"5",width:"14",height:"6",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5.5",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("line",{x1:"14",y1:"6.5",x2:"15.5",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"}),a.jsx("line",{x1:"15.5",y1:"6.5",x2:"14",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"})]});case"rating":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("path",{d:"M4 5.5l1 2 2.2.3-1.6 1.5.4 2.2L4 10.3l-2 1.2.4-2.2L.8 7.8 3 7.5z",fill:y,opacity:".25"}),a.jsx("path",{d:"M10 5.5l1 2 2.2.3-1.6 1.5.4 2.2L10 10.3l-2 1.2.4-2.2L6.8 7.8 9 7.5z",fill:y,opacity:".25"}),a.jsx("path",{d:"M16 5.5l1 2 2.2.3-1.6 1.5.4 2.2L16 10.3l-2 1.2.4-2.2-1.6-1.5 2.2-.3z",stroke:y,strokeWidth:V,opacity:".25"})]});case"map":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("line",{x1:"2",y1:"6",x2:"18",y2:"10",stroke:y,strokeWidth:".3",opacity:".15"}),a.jsx("line",{x1:"7",y1:"2",x2:"11",y2:"14",stroke:y,strokeWidth:".3",opacity:".15"}),a.jsx("path",{d:"M10 5c-1.7 0-3 1.3-3 3 0 2.5 3 5 3 5s3-2.5 3-5c0-1.7-1.3-3-3-3z",fill:y,opacity:".15",stroke:y,strokeWidth:V})]});case"timeline":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("line",{x1:"5",y1:"2",x2:"5",y2:"14",stroke:y,strokeWidth:".4",opacity:".25"}),a.jsx("circle",{cx:"5",cy:"4",r:"1.5",fill:y,opacity:".2",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"8",y:"3",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("circle",{cx:"5",cy:"8.5",r:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"8",y:"7.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("circle",{cx:"5",cy:"13",r:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"8",y:"12",width:"7",height:"1",rx:".5",fill:y,opacity:".15"})]});case"fileUpload":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"2",width:"14",height:"12",rx:"1.5",stroke:y,strokeWidth:V,strokeDasharray:"2 1"}),a.jsx("path",{d:"M10 10V5.5m0 0L7.5 8m2.5-2.5L12.5 8",stroke:y,strokeWidth:V,opacity:".3"}),a.jsx("rect",{x:"7",y:"11.5",width:"6",height:"1",rx:".5",fill:y,opacity:".15"})]});case"codeBlock":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"2",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"4",cy:"4",r:".6",fill:y,opacity:".3"}),a.jsx("circle",{cx:"5.5",cy:"4",r:".6",fill:y,opacity:".3"}),a.jsx("circle",{cx:"7",cy:"4",r:".6",fill:y,opacity:".3"}),a.jsx("rect",{x:"4",y:"7",width:"7",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("rect",{x:"6",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"4",y:"11",width:"8",height:"1",rx:".5",fill:y,opacity:".12"})]});case"calendar":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"3",width:"16",height:"12",rx:"1",stroke:y,strokeWidth:V}),a.jsx("line",{x1:"2",y1:"6.5",x2:"18",y2:"6.5",stroke:y,strokeWidth:".4",opacity:".25"}),a.jsx("rect",{x:"5",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),a.jsx("rect",{x:"14",y:"4",width:"1",height:"1.5",rx:".3",fill:y,opacity:".2"}),a.jsx("circle",{cx:"7",cy:"9",r:".6",fill:y,opacity:".2"}),a.jsx("circle",{cx:"10",cy:"9",r:".6",fill:y,opacity:".2"}),a.jsx("circle",{cx:"13",cy:"9",r:".6",fill:y,opacity:".3"}),a.jsx("circle",{cx:"7",cy:"12",r:".6",fill:y,opacity:".2"}),a.jsx("circle",{cx:"10",cy:"12",r:".6",fill:y,opacity:".2"})]});case"notification":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"3",width:"16",height:"10",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"5.5",cy:"8",r:"2",stroke:y,strokeWidth:V,opacity:".25"}),a.jsx("rect",{x:"9",y:"6",width:"6",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"9",y:"8.5",width:"4.5",height:"1",rx:".5",fill:y,opacity:".12"}),a.jsx("circle",{cx:"16.5",cy:"4.5",r:"1.5",fill:y,opacity:".25"})]});case"productCard":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3",y:"1",width:"14",height:"6",rx:"1",fill:y,opacity:".04"}),a.jsx("rect",{x:"5",y:"8.5",width:"7",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"5",y:"10.5",width:"4",height:"1.5",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"12",y:"12",width:"4",height:"2",rx:".75",stroke:y,strokeWidth:V})]});case"profile":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("circle",{cx:"10",cy:"5",r:"3",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5",y:"10",width:"10",height:"1.5",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"7",y:"12.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"})]});case"drawer":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"9",y:"1",width:"10",height:"14",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"10.5",y:"4",width:"5",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"10.5",y:"6.5",width:"7",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"10.5",y:"9",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"1",y:"1",width:"7",height:"14",rx:"1",stroke:y,strokeWidth:V,opacity:".15"})]});case"popover":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"2",width:"14",height:"9",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5",y:"4.5",width:"8",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"5",y:"7",width:"6",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("path",{d:"M9 11l1 2.5 1-2.5",stroke:y,strokeWidth:V})]});case"logo":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"3",width:"10",height:"10",rx:"2",stroke:y,strokeWidth:V}),a.jsx("path",{d:"M5 9.5l2-4 2 4",stroke:y,strokeWidth:V,opacity:".3"}),a.jsx("rect",{x:"14",y:"6",width:"4",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("rect",{x:"14",y:"8.5",width:"3",height:"1",rx:".5",fill:y,opacity:".12"})]});case"faq":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("text",{x:"2.5",y:"5.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),a.jsx("rect",{x:"7",y:"3",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"7",y:"5.5",width:"8",height:"1",rx:".5",fill:y,opacity:".12"}),a.jsx("text",{x:"2.5",y:"11.5",fontSize:"4",fill:y,opacity:".3",fontWeight:"bold",children:"?"}),a.jsx("rect",{x:"7",y:"9",width:"9",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"7",y:"11.5",width:"7",height:"1",rx:".5",fill:y,opacity:".12"})]});case"gallery":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"7.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"13.5",y:"1.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"1.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"7.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"13.5",y:"9.5",width:"5",height:"5",rx:".75",stroke:y,strokeWidth:V})]});case"checkbox":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"5",y:"4",width:"8",height:"8",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("path",{d:"M7.5 8l1.5 1.5 3-3",stroke:y,strokeWidth:V,opacity:".35"})]});case"radio":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("circle",{cx:"10",cy:"8",r:"4",stroke:y,strokeWidth:V}),a.jsx("circle",{cx:"10",cy:"8",r:"2",fill:y,opacity:".3"})]});case"slider":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"7.5",width:"16",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"2",y:"7.5",width:"10",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("circle",{cx:"12",cy:"8",r:"2.5",stroke:y,strokeWidth:V})]});case"datePicker":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"1",width:"16",height:"5",rx:"1",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"3.5",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("rect",{x:"14",y:"2.5",width:"2.5",height:"2",rx:".5",fill:y,opacity:".12"}),a.jsx("rect",{x:"2",y:"7",width:"16",height:"8",rx:"1",stroke:y,strokeWidth:V,strokeDasharray:"2 1",opacity:".3"}),a.jsx("circle",{cx:"6",cy:"10",r:".6",fill:y,opacity:".2"}),a.jsx("circle",{cx:"10",cy:"10",r:".6",fill:y,opacity:".3"}),a.jsx("circle",{cx:"14",cy:"10",r:".6",fill:y,opacity:".2"}),a.jsx("circle",{cx:"6",cy:"13",r:".6",fill:y,opacity:".2"}),a.jsx("circle",{cx:"10",cy:"13",r:".6",fill:y,opacity:".2"})]});case"skeleton":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"2",width:"16",height:"3",rx:"1",fill:y,opacity:".08"}),a.jsx("rect",{x:"2",y:"7",width:"10",height:"2",rx:".75",fill:y,opacity:".08"}),a.jsx("rect",{x:"2",y:"11",width:"13",height:"2",rx:".75",fill:y,opacity:".08"})]});case"chip":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"1.5",y:"5",width:"10",height:"6",rx:"3",fill:y,opacity:".08",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"4",y:"7.5",width:"4",height:"1",rx:".5",fill:y,opacity:".25"}),a.jsx("line",{x1:"9.5",y1:"6.5",x2:"10.5",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"}),a.jsx("line",{x1:"10.5",y1:"6.5",x2:"9.5",y2:"9.5",stroke:y,strokeWidth:V,opacity:".2"}),a.jsx("rect",{x:"13",y:"5",width:"5.5",height:"6",rx:"3",stroke:y,strokeWidth:V,opacity:".25"})]});case"icon":return a.jsx("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:a.jsx("path",{d:"M10 3l1.5 3 3.5.5-2.5 2.5.5 3.5L10 11l-3 1.5.5-3.5L5 6.5l3.5-.5z",stroke:y,strokeWidth:V,opacity:".3"})});case"spinner":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("circle",{cx:"10",cy:"8",r:"5",stroke:y,strokeWidth:V,opacity:".12"}),a.jsx("path",{d:"M10 3a5 5 0 0 1 5 5",stroke:y,strokeWidth:V,opacity:".35",strokeLinecap:"round"})]});case"feature":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"2",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("path",{d:"M4.5 3.5v3m-1.5-1.5h3",stroke:y,strokeWidth:V,opacity:".25"}),a.jsx("rect",{x:"9",y:"2.5",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"9",y:"5.5",width:"6",height:"1",rx:".5",fill:y,opacity:".12"}),a.jsx("rect",{x:"2",y:"10",width:"5",height:"5",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"9",y:"10.5",width:"7",height:"1.5",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"9",y:"13.5",width:"5",height:"1",rx:".5",fill:y,opacity:".12"})]});case"team":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("circle",{cx:"5",cy:"5",r:"2.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"2.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("circle",{cx:"15",cy:"5",r:"2.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"12.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("circle",{cx:"10",cy:"5",r:"2.5",stroke:y,strokeWidth:V,opacity:".5"}),a.jsx("rect",{x:"7.5",y:"9",width:"5",height:"1",rx:".5",fill:y,opacity:".15"}),a.jsx("rect",{x:"4",y:"12",width:"12",height:"1",rx:".5",fill:y,opacity:".1"})]});case"login":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"3",y:"1",width:"14",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6",y:"3",width:"8",height:"1.5",rx:".5",fill:y,opacity:".25"}),a.jsx("rect",{x:"5",y:"5.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"5",y:"9.5",width:"10",height:"3",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"6.5",y:"13.5",width:"7",height:"2",rx:".75",fill:y,opacity:".2"})]});case"contact":return a.jsxs("svg",{viewBox:"0 0 20 16",width:"20",height:"16",fill:"none",children:[a.jsx("rect",{x:"2",y:"1",width:"16",height:"14",rx:"1.5",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"4",y:"3",width:"5",height:"1",rx:".5",fill:y,opacity:".2"}),a.jsx("rect",{x:"4",y:"5",width:"12",height:"2.5",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"4",y:"8.5",width:"12",height:"4",rx:".75",stroke:y,strokeWidth:V}),a.jsx("rect",{x:"11",y:"13.5",width:"5",height:"1.5",rx:".5",fill:y,opacity:".2"})]});default:return null}}function hp({activeType:o,onSelect:r,onDragStart:c,scrollRef:u,fadeClass:_,blankCanvas:f}){return a.jsx("div",{ref:u,className:`${K.placeScroll} ${_||""}`,children:zm.map(b=>a.jsxs("div",{className:K.paletteSection,children:[a.jsx("div",{className:K.paletteSectionTitle,children:b.section}),b.items.map(R=>a.jsxs("div",{className:`${K.paletteItem} ${o===R.type?K.active:""} ${f?K.wireframe:""}`,onClick:()=>r(R.type),onMouseDown:v=>{v.button===0&&c(R.type,v)},children:[a.jsx("div",{className:K.paletteItemIcon,children:a.jsx(fp,{type:R.type})}),a.jsx("span",{className:K.paletteItemLabel,children:R.label})]},R.type))]},b.section))})}function mp({value:o,suffix:r}){const[c,u]=m.useState(null),[_,f]=m.useState(r),[b,R]=m.useState("up"),v=m.useRef(o),M=m.useRef(r),k=m.useRef(),z=c!==null&&_!==r;return m.useEffect(()=>{if(o!==v.current){if(o===0){v.current=o,M.current=r,u(null);return}R(o>v.current?"up":"down"),u(v.current),f(M.current),v.current=o,M.current=r,clearTimeout(k.current),k.current=Fe(()=>u(null),250)}else M.current=r},[o,r]),c===null?a.jsxs(a.Fragment,{children:[o,r?` ${r}`:""]}):z?a.jsxs("span",{className:K.rollingWrap,children:[a.jsxs("span",{style:{visibility:"hidden"},children:[o," ",r]}),a.jsxs("span",{className:`${K.rollingNum} ${b==="up"?K.exitUp:K.exitDown}`,children:[c," ",_]},`o${c}-${o}`),a.jsxs("span",{className:`${K.rollingNum} ${b==="up"?K.enterUp:K.enterDown}`,children:[o," ",r]},`n${o}`)]}):a.jsxs(a.Fragment,{children:[a.jsxs("span",{className:K.rollingWrap,children:[a.jsx("span",{style:{visibility:"hidden"},children:o}),a.jsx("span",{className:`${K.rollingNum} ${b==="up"?K.exitUp:K.exitDown}`,children:c},`o${c}-${o}`),a.jsx("span",{className:`${K.rollingNum} ${b==="up"?K.enterUp:K.enterDown}`,children:o},`n${o}`)]}),r?` ${r}`:""]})}function gp({activeType:o,onSelect:r,isDarkMode:c,sectionCount:u,onDetectSections:_,visible:f,onExited:b,placementCount:R,onClearPlacements:v,onDragStart:M,blankCanvas:k,onBlankCanvasChange:z,wireframePurpose:T,onWireframePurposeChange:de,Tooltip:O}){const[te,H]=m.useState(!1),[I,he]=m.useState("exit"),[pe,be]=m.useState(!1),[ct,we]=m.useState(!0),ee=m.useRef(0),oe=m.useRef(""),tt=m.useRef(0),nt=m.useRef(),Te=m.useRef(null),[$e,Je]=m.useState("");m.useEffect(()=>(f?(H(!0),clearTimeout(nt.current),cancelAnimationFrame(tt.current),tt.current=vs(()=>{tt.current=vs(()=>{he("enter")})})):(cancelAnimationFrame(tt.current),he("exit"),clearTimeout(nt.current),nt.current=Fe(()=>{H(!1),b?.()},200)),()=>cancelAnimationFrame(tt.current)),[f]);const ke=R>0||u>0,Ye=R+u;return Ye>0&&(ee.current=Ye,oe.current=k?Ye===1?"Component":"Components":Ye===1?"Change":"Changes"),m.useEffect(()=>{if(ke)pe?we(!1):(we(!0),be(!0),vs(()=>{vs(()=>{we(!1)})}));else{we(!0);const x=Fe(()=>be(!1),300);return()=>clearTimeout(x)}},[ke]),m.useEffect(()=>{if(!te)return;const x=Te.current;if(!x)return;const J=()=>Je(_p(x));J(),x.addEventListener("scroll",J,{passive:!0});const q=new ResizeObserver(J);return q.observe(x),()=>{x.removeEventListener("scroll",J),q.disconnect()}},[te]),te?a.jsxs("div",{className:`${K.palette} ${K[I]} ${c?"":K.light}`,"data-feedback-toolbar":!0,"data-agentation-palette":!0,onClick:x=>x.stopPropagation(),onMouseDown:x=>x.stopPropagation(),onTransitionEnd:x=>{x.target===x.currentTarget&&(f||(clearTimeout(nt.current),H(!1),he("exit"),b?.()))},children:[a.jsxs("div",{className:K.paletteHeader,children:[a.jsx("div",{className:K.paletteHeaderTitle,children:"Layout Mode"}),a.jsxs("div",{className:K.paletteHeaderDesc,children:["Rearrange and resize existing elements, add new components, and explore layout ideas. Agent results may vary."," ",a.jsx("a",{href:"https://agentation.dev/features#layout-mode",target:"_blank",rel:"noopener noreferrer",children:"Learn more."})]})]}),a.jsxs("div",{className:`${K.canvasToggle} ${k?K.active:""}`,onClick:()=>z(!k),children:[a.jsx("span",{className:K.canvasToggleIcon,children:a.jsxs("svg",{viewBox:"0 0 14 14",width:"14",height:"14",fill:"none",children:[a.jsx("rect",{x:"1",y:"1",width:"12",height:"12",rx:"2",stroke:"currentColor",strokeWidth:"1"}),a.jsx("circle",{cx:"4.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"7",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"9.5",cy:"4.5",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"4.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"7",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"9.5",cy:"7",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"4.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"7",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"}),a.jsx("circle",{cx:"9.5",cy:"9.5",r:"0.8",fill:"currentColor",opacity:".6"})]})}),a.jsx("span",{className:K.canvasToggleLabel,children:"Wireframe New Page"})]}),a.jsx("div",{className:`${K.wireframePurposeWrap} ${k?"":K.collapsed}`,children:a.jsx("div",{className:K.wireframePurposeInner,children:a.jsx("textarea",{className:K.wireframePurposeInput,placeholder:"Describe this page to provide additional context for your agent.",value:T,onChange:x=>de(x.target.value),rows:2})})}),a.jsx(hp,{activeType:o,onSelect:r,onDragStart:M,scrollRef:Te,fadeClass:$e,blankCanvas:k}),pe&&a.jsx("div",{className:`${K.paletteFooterWrap} ${ct?K.footerHidden:""}`,children:a.jsx("div",{className:K.paletteFooterInner,children:a.jsx("div",{className:K.paletteFooterInnerContent,children:a.jsxs("div",{className:K.paletteFooter,children:[a.jsx("span",{className:K.paletteFooterCount,children:a.jsx(mp,{value:ee.current,suffix:oe.current})}),a.jsx("button",{className:K.paletteFooterClear,onClick:v,children:"Clear"})]})})})})]}):null}function Ss(o){if(o.parentElement)return o.parentElement;const r=o.getRootNode();return r instanceof ShadowRoot?r.host:null}function Fn(o,r){let c=o;for(;c;){if(c.matches(r))return c;c=Ss(c)}return null}function yp(o,r=4){const c=[];let u=o,_=0;for(;u&&_<r;){const f=u.tagName.toLowerCase();if(f==="html"||f==="body")break;let b=f;if(u.id)b=`#${u.id}`;else if(u.className&&typeof u.className=="string"){const v=u.className.split(/\s+/).find(M=>M.length>2&&!M.match(/^[a-z]{1,2}$/)&&!M.match(/[A-Z0-9]{5,}/));v&&(b=`.${v.split("_")[0]}`)}const R=Ss(u);!u.parentElement&&R&&(b=`⟨shadow⟩ ${b}`),c.unshift(b),u=R,_++}return c.join(" > ")}function ws(o){const r=yp(o);if(o.dataset.element)return{name:o.dataset.element,path:r};const c=o.tagName.toLowerCase();if(["path","circle","rect","line","g"].includes(c)){const u=Fn(o,"svg");if(u){const _=Ss(u);if(_ instanceof HTMLElement)return{name:`graphic in ${ws(_).name}`,path:r}}return{name:"graphic element",path:r}}if(c==="svg"){const u=Ss(o);if(u?.tagName.toLowerCase()==="button"){const _=u.textContent?.trim();return{name:_?`icon in "${_}" button`:"button icon",path:r}}return{name:"icon",path:r}}if(c==="button"){const u=o.textContent?.trim(),_=o.getAttribute("aria-label");return _?{name:`button [${_}]`,path:r}:{name:u?`button "${u.slice(0,25)}"`:"button",path:r}}if(c==="a"){const u=o.textContent?.trim(),_=o.getAttribute("href");return u?{name:`link "${u.slice(0,25)}"`,path:r}:_?{name:`link to ${_.slice(0,30)}`,path:r}:{name:"link",path:r}}if(c==="input"){const u=o.getAttribute("type")||"text",_=o.getAttribute("placeholder"),f=o.getAttribute("name");return _?{name:`input "${_}"`,path:r}:f?{name:`input [${f}]`,path:r}:{name:`${u} input`,path:r}}if(["h1","h2","h3","h4","h5","h6"].includes(c)){const u=o.textContent?.trim();return{name:u?`${c} "${u.slice(0,35)}"`:c,path:r}}if(c==="p"){const u=o.textContent?.trim();return u?{name:`paragraph: "${u.slice(0,40)}${u.length>40?"...":""}"`,path:r}:{name:"paragraph",path:r}}if(c==="span"||c==="label"){const u=o.textContent?.trim();return u&&u.length<40?{name:`"${u}"`,path:r}:{name:c,path:r}}if(c==="li"){const u=o.textContent?.trim();return u&&u.length<40?{name:`list item: "${u.slice(0,35)}"`,path:r}:{name:"list item",path:r}}if(c==="blockquote")return{name:"blockquote",path:r};if(c==="code"){const u=o.textContent?.trim();return u&&u.length<30?{name:`code: \`${u}\``,path:r}:{name:"code",path:r}}if(c==="pre")return{name:"code block",path:r};if(c==="img"){const u=o.getAttribute("alt");return{name:u?`image "${u.slice(0,30)}"`:"image",path:r}}if(c==="video")return{name:"video",path:r};if(["div","section","article","nav","header","footer","aside","main"].includes(c)){const u=o.className,_=o.getAttribute("role"),f=o.getAttribute("aria-label");if(f)return{name:`${c} [${f}]`,path:r};if(_)return{name:`${_}`,path:r};if(typeof u=="string"&&u){const b=u.split(/[\s_-]+/).map(R=>R.replace(/[A-Z0-9]{5,}.*$/,"")).filter(R=>R.length>2&&!/^[a-z]{1,2}$/.test(R)).slice(0,2);if(b.length>0)return{name:b.join(" "),path:r}}return{name:c==="div"?"container":c,path:r}}return{name:c,path:r}}function bi(o){const r=[],c=o.textContent?.trim();c&&c.length<100&&r.push(c);const u=o.previousElementSibling;if(u){const f=u.textContent?.trim();f&&f.length<50&&r.unshift(`[before: "${f.slice(0,40)}"]`)}const _=o.nextElementSibling;if(_){const f=_.textContent?.trim();f&&f.length<50&&r.push(`[after: "${f.slice(0,40)}"]`)}return r.join(" ")}function Vr(o){const r=Ss(o);if(!r)return"";const _=(o.getRootNode()instanceof ShadowRoot&&o.parentElement?Array.from(o.parentElement.children):Array.from(r.children)).filter(k=>k!==o&&k instanceof HTMLElement);if(_.length===0)return"";const f=_.slice(0,4).map(k=>{const z=k.tagName.toLowerCase(),T=k.className;let de="";if(typeof T=="string"&&T){const O=T.split(/\s+/).map(te=>te.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(te=>te.length>2&&!/^[a-z]{1,2}$/.test(te));O&&(de=`.${O}`)}if(z==="button"||z==="a"){const O=k.textContent?.trim().slice(0,15);if(O)return`${z}${de} "${O}"`}return`${z}${de}`});let R=r.tagName.toLowerCase();if(typeof r.className=="string"&&r.className){const k=r.className.split(/\s+/).map(z=>z.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(z=>z.length>2&&!/^[a-z]{1,2}$/.test(z));k&&(R=`.${k}`)}const v=r.children.length,M=v>f.length+1?` (${v} total in ${R})`:"";return f.join(", ")+M}function vi(o){const r=o.className;return typeof r!="string"||!r?"":r.split(/\s+/).filter(u=>u.length>0).map(u=>{const _=u.match(/^([a-zA-Z][a-zA-Z0-9_-]*?)(?:_[a-zA-Z0-9]{5,})?$/);return _?_[1]:u}).filter((u,_,f)=>f.indexOf(u)===_).join(", ")}var Dm=new Set(["none","normal","auto","0px","rgba(0, 0, 0, 0)","transparent","static","visible"]),pp=new Set(["p","span","h1","h2","h3","h4","h5","h6","label","li","td","th","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","a","time","cite","q"]),xp=new Set(["input","textarea","select"]),bp=new Set(["img","video","canvas","svg"]),vp=new Set(["div","section","article","nav","header","footer","aside","main","ul","ol","form","fieldset"]);function Zr(o){if(typeof window>"u")return{};const r=window.getComputedStyle(o),c={},u=o.tagName.toLowerCase();let _;pp.has(u)?_=["color","fontSize","fontWeight","fontFamily","lineHeight"]:u==="button"||u==="a"&&o.getAttribute("role")==="button"?_=["backgroundColor","color","padding","borderRadius","fontSize"]:xp.has(u)?_=["backgroundColor","color","padding","borderRadius","fontSize"]:bp.has(u)?_=["width","height","objectFit","borderRadius"]:vp.has(u)?_=["display","padding","margin","gap","backgroundColor"]:_=["color","fontSize","margin","padding","backgroundColor"];for(const f of _){const b=f.replace(/([A-Z])/g,"-$1").toLowerCase(),R=r.getPropertyValue(b);R&&!Dm.has(R)&&(c[f]=R)}return c}var wp=["color","backgroundColor","borderColor","fontSize","fontWeight","fontFamily","lineHeight","letterSpacing","textAlign","width","height","padding","margin","border","borderRadius","display","position","top","right","bottom","left","zIndex","flexDirection","justifyContent","alignItems","gap","opacity","visibility","overflow","boxShadow","transform"];function Kr(o){if(typeof window>"u")return"";const r=window.getComputedStyle(o),c=[];for(const u of wp){const _=u.replace(/([A-Z])/g,"-$1").toLowerCase(),f=r.getPropertyValue(_);f&&!Dm.has(f)&&c.push(`${_}: ${f}`)}return c.join("; ")}function Sp(o){if(!o)return;const r={},c=o.split(";").map(u=>u.trim()).filter(Boolean);for(const u of c){const _=u.indexOf(":");if(_>0){const f=u.slice(0,_).trim(),b=u.slice(_+1).trim();f&&b&&(r[f]=b)}}return Object.keys(r).length>0?r:void 0}function Fr(o){const r=[],c=o.getAttribute("role"),u=o.getAttribute("aria-label"),_=o.getAttribute("aria-describedby"),f=o.getAttribute("tabindex"),b=o.getAttribute("aria-hidden");return c&&r.push(`role="${c}"`),u&&r.push(`aria-label="${u}"`),_&&r.push(`aria-describedby="${_}"`),f&&r.push(`tabindex=${f}`),b==="true"&&r.push("aria-hidden"),o.matches("a, button, input, select, textarea, [tabindex]")&&r.push("focusable"),r.join(", ")}function Jr(o){const r=[];let c=o;for(;c&&c.tagName.toLowerCase()!=="html";){const u=c.tagName.toLowerCase();let _=u;if(c.id)_=`${u}#${c.id}`;else if(c.className&&typeof c.className=="string"){const b=c.className.split(/\s+/).map(R=>R.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(R=>R.length>2);b&&(_=`${u}.${b}`)}const f=Ss(c);!c.parentElement&&f&&(_=`⟨shadow⟩ ${_}`),r.unshift(_),c=f}return r.join(" > ")}var kp=new Set(["nav","header","main","section","article","footer","aside"]),wd={banner:"Header",navigation:"Navigation",main:"Main Content",contentinfo:"Footer",complementary:"Sidebar",region:"Section"},tm={nav:"Navigation",header:"Header",main:"Main Content",section:"Section",article:"Article",footer:"Footer",aside:"Sidebar"},jp=new Set(["script","style","noscript","link","meta"]),Cp=40;function Am(o){let r=o;for(;r&&r!==document.body&&r!==document.documentElement;){const c=window.getComputedStyle(r).position;if(c==="fixed"||c==="sticky")return!0;r=r.parentElement}return!1}function Ro(o){const r=o.tagName.toLowerCase();if(["nav","header","footer","main"].includes(r)&&document.querySelectorAll(r).length===1)return r;if(o.id)return`#${CSS.escape(o.id)}`;if(o.className&&typeof o.className=="string"){const _=o.className.split(/\s+/).filter(f=>f.length>0).find(f=>f.length>2&&!/^[a-zA-Z0-9]{6,}$/.test(f)&&!/^[a-z]{1,2}$/.test(f));if(_){const f=`${r}.${CSS.escape(_)}`;if(document.querySelectorAll(f).length===1)return f}}const c=o.parentElement;if(c){const _=Array.from(c.children).indexOf(o)+1;return`${c===document.body?"body":Ro(c)} > ${r}:nth-child(${_})`}return r}function sc(o){const r=o.tagName.toLowerCase(),c=o.getAttribute("aria-label");if(c)return c;const u=o.getAttribute("role");if(u&&wd[u])return wd[u];if(tm[r])return tm[r];const _=o.querySelector("h1, h2, h3, h4, h5, h6");if(_){const b=_.textContent?.trim();if(b&&b.length<=50)return b;if(b)return b.slice(0,47)+"..."}const{name:f}=ws(o);return f.charAt(0).toUpperCase()+f.slice(1)}function Om(o){const r=o.className;return typeof r!="string"||!r?null:r.split(/\s+/).map(u=>u.replace(/[_][a-zA-Z0-9]{5,}.*$/,"")).find(u=>u.length>2&&!/^[a-z]{1,2}$/.test(u))||null}function Bm(o){const r=o.textContent?.trim();if(!r)return null;const c=r.replace(/\s+/g," ");return c.length<=30?c:c.slice(0,30)+"…"}function Mp(){const o=document.querySelector("main")||document.body,r=Array.from(o.children);let c=r;o!==document.body&&r.length<3&&(c=Array.from(document.body.children));const u=[];return c.forEach((_,f)=>{if(!(_ instanceof HTMLElement))return;const b=_.tagName.toLowerCase();if(jp.has(b)||_.hasAttribute("data-feedback-toolbar")||_.closest("[data-feedback-toolbar]"))return;const R=window.getComputedStyle(_);if(R.display==="none"||R.visibility==="hidden")return;const v=_.getBoundingClientRect();if(v.height<Cp)return;const M=kp.has(b),k=_.getAttribute("role")&&wd[_.getAttribute("role")],z=b==="div"&&v.height>=60;if(!M&&!k&&!z)return;const T=window.scrollY,de=Am(_),O={x:v.x,y:de?v.y:v.y+T,width:v.width,height:v.height};u.push({id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:sc(_),tagName:b,selector:Ro(_),role:_.getAttribute("role"),className:Om(_),textSnippet:Bm(_),originalRect:O,currentRect:{...O},originalIndex:f,isFixed:de})}),u}function Ep(o){const r=window.scrollY,c=o.getBoundingClientRect(),u=Am(o),_={x:c.x,y:u?c.y:c.y+r,width:c.width,height:c.height},f=o.parentElement;let b=0;return f&&(b=Array.from(f.children).indexOf(o)),{id:`rs-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,label:sc(o),tagName:o.tagName.toLowerCase(),selector:Ro(o),role:o.getAttribute("role"),className:Om(o),textSnippet:Bm(o),originalRect:_,currentRect:{..._},originalIndex:b,isFixed:u}}var nm={bg:"rgba(59, 130, 246, 0.08)",border:"rgba(59, 130, 246, 0.5)",pill:"#3b82f6"},lm=["nw","n","ne","e","se","s","sw","w"],Pr=24,am=16,ec=5;function om(o,r,c,u){let _=1/0,f=1/0;const b=o.x,R=o.x+o.width,v=o.x+o.width/2,M=o.y,k=o.y+o.height,z=o.y+o.height/2,T=[];for(const ee of r)c.has(ee.id)||T.push(ee.currentRect);u&&T.push(...u);for(const ee of T){const oe=ee.x,tt=ee.x+ee.width,nt=ee.x+ee.width/2,Te=ee.y,$e=ee.y+ee.height,Je=ee.y+ee.height/2;for(const ke of[b,R,v])for(const Ye of[oe,tt,nt]){const x=Ye-ke;Math.abs(x)<ec&&Math.abs(x)<Math.abs(_)&&(_=x)}for(const ke of[M,k,z])for(const Ye of[Te,$e,Je]){const x=Ye-ke;Math.abs(x)<ec&&Math.abs(x)<Math.abs(f)&&(f=x)}}const de=Math.abs(_)<ec?_:0,O=Math.abs(f)<ec?f:0,te=[],H=new Set,I=b+de,he=R+de,pe=v+de,be=M+O,ct=k+O,we=z+O;for(const ee of T){const oe=ee.x,tt=ee.x+ee.width,nt=ee.x+ee.width/2,Te=ee.y,$e=ee.y+ee.height,Je=ee.y+ee.height/2;for(const ke of[oe,nt,tt])for(const Ye of[I,pe,he])if(Math.abs(Ye-ke)<.5){const x=`x:${Math.round(ke)}`;H.has(x)||(H.add(x),te.push({axis:"x",pos:ke}))}for(const ke of[Te,Je,$e])for(const Ye of[be,we,ct])if(Math.abs(Ye-ke)<.5){const x=`y:${Math.round(ke)}`;H.has(x)||(H.add(x),te.push({axis:"y",pos:ke}))}}return{dx:de,dy:O,guides:te}}var Np=new Set(["script","style","noscript","link","meta","br","hr"]);function sm(o){let r=o;for(;r&&r!==document.body&&r!==document.documentElement;){if(r.closest("[data-feedback-toolbar]"))return null;if(Np.has(r.tagName.toLowerCase())){r=r.parentElement;continue}const c=r.getBoundingClientRect();if(c.width>=am&&c.height>=am)return r;r=r.parentElement}return null}function Tp({rearrangeState:o,onChange:r,isDarkMode:c,exiting:u,className:_,blankCanvas:f,extraSnapRects:b,onSelectionChange:R,deselectSignal:v,onDragMove:M,onDragEnd:k,clearSignal:z}){const{sections:T}=o,de=m.useRef(o);de.current=o;const[O,te]=m.useState(new Set),[H,I]=m.useState(!1),he=m.useRef(z);m.useEffect(()=>{z!==void 0&&z!==he.current&&(he.current=z,T.length>0&&I(!0))},[z,T.length]);const pe=m.useRef(v);m.useEffect(()=>{v!==pe.current&&(pe.current=v,te(new Set))},[v]);const[be,ct]=m.useState(null),[we,ee]=m.useState(!1),oe=m.useRef(!1),tt=m.useCallback(A=>{const $=T.find(F=>F.id===A);$&&(oe.current=!!$.note,ct(A),ee(!1))},[T]),nt=m.useCallback(()=>{be&&(ee(!0),Fe(()=>{ct(null),ee(!1)},150))},[be]),Te=m.useCallback(A=>{be&&(r({...o,sections:T.map($=>$.id===be?{...$,note:A.trim()||void 0}:$)}),nt())},[be,T,o,r,nt]);m.useEffect(()=>{u&&be&&nt()},[u]);const[$e,Je]=m.useState(new Set),ke=m.useRef(new Map),[Ye,x]=m.useState(null),[J,q]=m.useState(null),[me,Ee]=m.useState([]),[S,Q]=m.useState(0),ue=m.useRef(null),ye=m.useRef(new Set),qe=m.useRef(new Map),[ut,dt]=m.useState(new Map),[It,Ct]=m.useState(new Map),Mn=m.useRef(new Set),dn=m.useRef(new Map),_n=m.useRef(R);_n.current=R;const pn=m.useRef(M);pn.current=M;const en=m.useRef(k);en.current=k,m.useEffect(()=>{f&&te(new Set)},[f]);const[Ln,Qn]=m.useState(()=>!o.sections.some(A=>{const $=A.originalRect,F=A.currentRect;return Math.abs($.x-F.x)>1||Math.abs($.y-F.y)>1||Math.abs($.width-F.width)>1||Math.abs($.height-F.height)>1}));m.useEffect(()=>{if(!Ln){const A=Fe(()=>Qn(!0),380);return()=>clearTimeout(A)}},[]);const yl=m.useRef(new Set);m.useEffect(()=>{yl.current=new Set(T.map(A=>A.selector))},[T]),m.useEffect(()=>{const A=()=>Q(window.scrollY);return A(),window.addEventListener("scroll",A,{passive:!0}),window.addEventListener("resize",A,{passive:!0}),()=>{window.removeEventListener("scroll",A),window.removeEventListener("resize",A)}},[]),m.useEffect(()=>{const A=$=>{if(ue.current){x(null);return}const F=document.elementFromPoint($.clientX,$.clientY);if(!F){x(null);return}if(F.closest("[data-feedback-toolbar]")){x(null);return}if(F.closest("[data-design-placement]")){x(null);return}if(F.closest("[data-annotation-popup]")){x(null);return}const le=sm(F);if(!le){x(null);return}for(const re of yl.current)try{const se=document.querySelector(re);if(se&&(se===le||le.contains(se))){x(null);return}}catch{}const je=le.getBoundingClientRect();x({x:je.x,y:je.y,w:je.width,h:je.height})};return document.addEventListener("mousemove",A,{passive:!0}),()=>document.removeEventListener("mousemove",A)},[T]),m.useEffect(()=>{const A=document.body.style.userSelect;return document.body.style.userSelect="none",()=>{document.body.style.userSelect=A}},[]),m.useEffect(()=>{const A=$=>{if(ue.current||$.button!==0)return;const F=$.target;if(!F||F.closest("[data-feedback-toolbar]")||F.closest("[data-design-placement]")||F.closest("[data-annotation-popup]"))return;const le=sm(F);let je=!1;if(le)for(const se of yl.current)try{const Oe=document.querySelector(se);if(Oe&&(Oe===le||le.contains(Oe))){je=!0;break}}catch{}const re=!!($.shiftKey||$.metaKey||$.ctrlKey);if(le&&!je){$.preventDefault(),$.stopPropagation();const se=Ep(le),Oe=[...T,se],it=[...o.originalOrder,se.id];r({...o,sections:Oe,originalOrder:it});const mt=new Set([se.id]);te(mt),_n.current?.(mt,re),x(null);const Et=$.clientX,U=$.clientY,ce={x:se.currentRect.x,y:se.currentRect.y};se.originalRect;let _e=!1,ve=0,xe=0;ue.current="move";const Xe=Ie=>{const yt=Ie.clientX-Et,lt=Ie.clientY-U;if(!_e&&(Math.abs(yt)>2||Math.abs(lt)>2)&&(_e=!0),!_e)return;const sn={x:ce.x+yt,y:ce.y+lt,width:se.currentRect.width,height:se.currentRect.height},Rn=om(sn,Oe,new Set([se.id]),b);Ee(Rn.guides);const $n=yt+Rn.dx,il=lt+Rn.dy;ve=$n,xe=il;const Hn=document.querySelector(`[data-rearrange-section="${se.id}"]`);Hn&&(Hn.style.transform=`translate(${$n}px, ${il}px)`),dt(new Map([[se.id,{x:ce.x+$n,y:ce.y+il,width:se.currentRect.width,height:se.currentRect.height}]])),pn.current?.($n,il)},Ze=()=>{window.removeEventListener("mousemove",Xe),window.removeEventListener("mouseup",Ze),ue.current=null,Ee([]),dt(new Map);const Ie=document.querySelector(`[data-rearrange-section="${se.id}"]`);Ie&&(Ie.style.transform=""),_e&&r({...o,sections:Oe.map(yt=>yt.id===se.id?{...yt,currentRect:{...yt.currentRect,x:Math.max(0,ce.x+ve),y:Math.max(0,ce.y+xe)}}:yt),originalOrder:it}),en.current?.(ve,xe,_e)};window.addEventListener("mousemove",Xe),window.addEventListener("mouseup",Ze)}else if(je&&le){$.preventDefault();for(const se of T)try{const Oe=document.querySelector(se.selector);if(Oe&&Oe===le){const it=new Set([se.id]);te(it),_n.current?.(it,re);return}}catch{}re||(te(new Set),_n.current?.(new Set,!1))}else re||(te(new Set),_n.current?.(new Set,!1))};return document.addEventListener("mousedown",A,!0),()=>document.removeEventListener("mousedown",A,!0)},[T,o,r]),m.useEffect(()=>{const A=$=>{const F=$.target;if(!(F.tagName==="INPUT"||F.tagName==="TEXTAREA"||F.isContentEditable)){if(($.key==="Backspace"||$.key==="Delete")&&O.size>0){$.preventDefault();const le=new Set(O);Je(je=>{const re=new Set(je);for(const se of le)re.add(se);return re}),te(new Set),Fe(()=>{const je=de.current;r({...je,sections:je.sections.filter(re=>!le.has(re.id)),originalOrder:je.originalOrder.filter(re=>!le.has(re))}),Je(re=>{const se=new Set(re);for(const Oe of le)se.delete(Oe);return se})},180);return}if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes($.key)&&O.size>0){$.preventDefault();const le=$.shiftKey?20:1,je=$.key==="ArrowLeft"?-le:$.key==="ArrowRight"?le:0,re=$.key==="ArrowUp"?-le:$.key==="ArrowDown"?le:0;r({...o,sections:T.map(se=>O.has(se.id)?{...se,currentRect:{...se.currentRect,x:Math.max(0,se.currentRect.x+je),y:Math.max(0,se.currentRect.y+re)}}:se)});return}$.key==="Escape"&&O.size>0&&te(new Set)}};return document.addEventListener("keydown",A),()=>document.removeEventListener("keydown",A)},[O,T,o,r]);const Z=m.useCallback((A,$)=>{if(A.button!==0)return;const F=A.target;if(F.closest(`.${K.handle}`)||F.closest(`.${K.deleteButton}`))return;A.preventDefault(),A.stopPropagation();let le;A.shiftKey||A.metaKey||A.ctrlKey?(le=new Set(O),le.has($)?le.delete($):le.add($)):O.has($)?le=new Set(O):le=new Set([$]),te(le),(le.size!==O.size||[...le].some(ve=>!O.has(ve)))&&_n.current?.(le,!!(A.shiftKey||A.metaKey||A.ctrlKey));const re=A.clientX,se=A.clientY,Oe=new Map;for(const ve of T)le.has(ve.id)&&Oe.set(ve.id,{x:ve.currentRect.x,y:ve.currentRect.y});ue.current="move";let it=!1,mt=0,Et=0;const U=new Map;for(const ve of T)if(le.has(ve.id)){const xe=document.querySelector(`[data-rearrange-section="${ve.id}"]`);U.set(ve.id,{outlineEl:xe,curW:ve.currentRect.width,curH:ve.currentRect.height})}const ce=ve=>{const xe=ve.clientX-re,Xe=ve.clientY-se;if(xe===0&&Xe===0)return;it=!0;let Ze=1/0,Ie=1/0,yt=-1/0,lt=-1/0;for(const[Hn,{curW:Ul,curH:no}]of U){const tn=Oe.get(Hn);if(!tn)continue;const En=tn.x+xe,rn=tn.y+Xe;Ze=Math.min(Ze,En),Ie=Math.min(Ie,rn),yt=Math.max(yt,En+Ul),lt=Math.max(lt,rn+no)}const sn=om({x:Ze,y:Ie,width:yt-Ze,height:lt-Ie},T,le,b),Rn=xe+sn.dx,$n=Xe+sn.dy;mt=Rn,Et=$n,Ee(sn.guides);for(const[,{outlineEl:Hn}]of U)Hn&&(Hn.style.transform=`translate(${Rn}px, ${$n}px)`);const il=new Map;for(const[Hn,{curW:Ul,curH:no}]of U){const tn=Oe.get(Hn);if(tn){const En={x:Math.max(0,tn.x+Rn),y:Math.max(0,tn.y+$n),width:Ul,height:no};il.set(Hn,En)}}dt(il),pn.current?.(Rn,$n)},_e=ve=>{window.removeEventListener("mousemove",ce),window.removeEventListener("mouseup",_e),ue.current=null,Ee([]),dt(new Map);for(const[,{outlineEl:xe}]of U)xe&&(xe.style.transform="");if(it){const xe=ve.clientX-re,Xe=ve.clientY-se;if(Math.abs(xe)<5&&Math.abs(Xe)<5)r({...o,sections:T.map(Ze=>{const Ie=Oe.get(Ze.id);return Ie?{...Ze,currentRect:{...Ze.currentRect,x:Ie.x,y:Ie.y}}:Ze})});else{r({...o,sections:T.map(Ze=>{const Ie=Oe.get(Ze.id);return Ie?{...Ze,currentRect:{...Ze.currentRect,x:Math.max(0,Ie.x+mt),y:Math.max(0,Ie.y+Et)}}:Ze})}),en.current?.(mt,Et,!0);return}}en.current?.(0,0,!1)};window.addEventListener("mousemove",ce),window.addEventListener("mouseup",_e)},[O,T,o,r]),ze=m.useCallback((A,$,F)=>{A.preventDefault(),A.stopPropagation();const le=T.find(ce=>ce.id===$);if(!le)return;te(new Set([$])),ue.current="resize";const je=A.clientX,re=A.clientY,se={...le.currentRect};le.originalRect;const Oe=se.width/se.height;let it={...se};const mt=document.querySelector(`[data-rearrange-section="${$}"]`),Et=ce=>{const _e=ce.clientX-je,ve=ce.clientY-re;let xe=se.x,Xe=se.y,Ze=se.width,Ie=se.height;if(F.includes("e")&&(Ze=Math.max(Pr,se.width+_e)),F.includes("w")&&(Ze=Math.max(Pr,se.width-_e),xe=se.x+se.width-Ze),F.includes("s")&&(Ie=Math.max(Pr,se.height+ve)),F.includes("n")&&(Ie=Math.max(Pr,se.height-ve),Xe=se.y+se.height-Ie),ce.shiftKey)if(F.length===2){const lt=Math.abs(Ze-se.width),sn=Math.abs(Ie-se.height);lt>sn?Ie=Ze/Oe:Ze=Ie*Oe,F.includes("w")&&(xe=se.x+se.width-Ze),F.includes("n")&&(Xe=se.y+se.height-Ie)}else F==="e"||F==="w"?Ie=Ze/Oe:Ze=Ie*Oe,F==="w"&&(xe=se.x+se.width-Ze),F==="n"&&(Xe=se.y+se.height-Ie);it={x:xe,y:Xe,width:Ze,height:Ie},mt&&(mt.style.left=`${xe}px`,mt.style.top=`${Xe-S}px`,mt.style.width=`${Ze}px`,mt.style.height=`${Ie}px`),q({x:ce.clientX+12,y:ce.clientY+12,text:`${Math.round(Ze)} × ${Math.round(Ie)}`}),dt(new Map([[$,it]]))},U=()=>{window.removeEventListener("mousemove",Et),window.removeEventListener("mouseup",U),q(null),ue.current=null,dt(new Map),r({...o,sections:T.map(ce=>ce.id===$?{...ce,currentRect:it}:ce)})};window.addEventListener("mousemove",Et),window.addEventListener("mouseup",U)},[T,o,r,S]),Pe=m.useCallback(A=>{Je($=>{const F=new Set($);return F.add(A),F}),te($=>{const F=new Set($);return F.delete(A),F}),Fe(()=>{const $=de.current;r({...$,sections:$.sections.filter(F=>F.id!==A),originalOrder:$.originalOrder.filter(F=>F!==A)}),Je(F=>{const le=new Set(F);return le.delete(A),le})},180)},[r]),We=A=>{const $=A.originalRect,F=A.currentRect;return Math.abs($.x-F.x)>1||Math.abs($.y-F.y)>1||Math.abs($.width-F.width)>1||Math.abs($.height-F.height)>1},ot=A=>{const $=A.originalRect,F=A.currentRect;return Math.abs($.x-F.x)>1||Math.abs($.y-F.y)>1},vt=A=>{const $=A.originalRect,F=A.currentRect;return Math.abs($.width-F.width)>1||Math.abs($.height-F.height)>1};for(const A of T)qe.current.has(A.id)||(ot(A)?qe.current.set(A.id,"move"):vt(A)&&qe.current.set(A.id,"resize"));for(const A of qe.current.keys())T.some($=>$.id===A)||qe.current.delete(A);const He=T.filter(A=>{try{if($e.has(A.id)||O.has(A.id))return!0;const $=document.querySelector(A.selector);if(!$)return!1;const F=$.getBoundingClientRect(),le=A.originalRect;return Math.abs(F.width-le.width)+Math.abs(F.height-le.height)<200}catch{return!1}}),st=He.filter(A=>We(A)),xt=He.filter(A=>!We(A)),Ot=new Set(st.map(A=>A.id));for(const A of ye.current)Ot.has(A)||ye.current.delete(A);const De=[...Ot].sort().join(",");for(const A of st)dn.current.set(A.id,{currentRect:A.currentRect,originalRect:A.originalRect,isFixed:A.isFixed});return m.useEffect(()=>{const A=Mn.current;Mn.current=Ot;const $=new Map;for(const F of A)if(!Ot.has(F)){if(!T.some(je=>je.id===F))continue;const le=dn.current.get(F);le&&($.set(F,{orig:le.originalRect,target:le.currentRect,isFixed:le.isFixed}),dn.current.delete(F))}if($.size>0){Ct(le=>{const je=new Map(le);for(const[re,se]of $)je.set(re,se);return je});const F=Fe(()=>{Ct(le=>{const je=new Map(le);for(const re of $.keys())je.delete(re);return je})},250);return()=>clearTimeout(F)}},[De,T]),a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`${K.rearrangeOverlay} ${c?"":K.light} ${u?K.overlayExiting:""}${_?` ${_}`:""}`,"data-feedback-toolbar":!0,children:[Ye&&a.jsx("div",{className:K.hoverHighlight,style:{left:Ye.x,top:Ye.y,width:Ye.w,height:Ye.h}}),xt.map(A=>{const $=A.currentRect,F=A.isFixed?$.y:$.y-S,le=nm,je=O.has(A.id);return a.jsxs("div",{"data-rearrange-section":A.id,className:`${K.sectionOutline} ${je?K.selected:""} ${H||u||$e.has(A.id)?K.exiting:""}`,style:{left:$.x,top:F,width:$.width,height:$.height,borderColor:le.border,backgroundColor:le.bg,...Ln?{}:{opacity:0,animation:"none",transition:"none"}},onMouseDown:re=>Z(re,A.id),onDoubleClick:()=>tt(A.id),children:[a.jsx("span",{className:K.sectionLabel,style:{backgroundColor:le.pill},children:A.label}),a.jsx("span",{className:`${K.sectionAnnotation} ${A.note?K.annotationVisible:""}`,children:(A.note&&ke.current.set(A.id,A.note),A.note||ke.current.get(A.id)||"")}),a.jsxs("span",{className:K.sectionDimensions,children:[Math.round($.width)," × ",Math.round($.height)]}),a.jsx("div",{className:K.deleteButton,onMouseDown:re=>re.stopPropagation(),onClick:()=>Pe(A.id),children:"✕"}),lm.map(re=>a.jsx("div",{className:`${K.handle} ${K[`handle${re.charAt(0).toUpperCase()}${re.slice(1)}`]}`,onMouseDown:se=>ze(se,A.id,re)},re))]},A.id)}),st.map(A=>{const $=A.currentRect,F=A.isFixed?$.y:$.y-S,le=O.has(A.id),je=ot(A),re=vt(A);if(f&&!le)return null;const Oe=!ye.current.has(A.id);return Oe&&ye.current.add(A.id),a.jsxs("div",{"data-rearrange-section":A.id,className:`${K.ghostOutline} ${le?K.selected:""} ${H||u||$e.has(A.id)?K.exiting:""}`,style:{left:$.x,top:F,width:$.width,height:$.height,...Ln?{}:{opacity:0,animation:"none",transition:"none"},...Oe?{}:{animation:"none"}},onMouseDown:it=>Z(it,A.id),onDoubleClick:()=>tt(A.id),children:[a.jsx("span",{className:K.sectionLabel,style:{backgroundColor:nm.pill},children:A.label}),a.jsx("span",{className:`${K.sectionAnnotation} ${A.note?K.annotationVisible:""}`,children:(A.note&&ke.current.set(A.id,A.note),A.note||ke.current.get(A.id)||"")}),a.jsxs("span",{className:K.sectionDimensions,children:[Math.round($.width)," × ",Math.round($.height)]}),a.jsx("div",{className:K.deleteButton,onMouseDown:it=>it.stopPropagation(),onClick:()=>Pe(A.id),children:"✕"}),lm.map(it=>a.jsx("div",{className:`${K.handle} ${K[`handle${it.charAt(0).toUpperCase()}${it.slice(1)}`]}`,onMouseDown:mt=>ze(mt,A.id,it)},it)),a.jsx("span",{className:K.ghostBadge,children:(()=>{const it=qe.current.get(A.id);if(je&&re){const[mt,Et]=it==="resize"?["Resize","Move"]:["Move","Resize"];return a.jsxs(a.Fragment,{children:["Suggested ",mt," ",a.jsxs("span",{className:K.ghostBadgeExtra,children:["& ",Et]})]})}return`Suggested ${re?"Resize":"Move"}`})()})]},A.id)})]}),!f&&(()=>{const A=[];for(const $ of st){const F=ut.get($.id);A.push({id:$.id,orig:$.originalRect,target:F||$.currentRect,isFixed:$.isFixed,isSelected:O.has($.id),isExiting:$e.has($.id)})}for(const[$,F]of ut)if(!A.some(le=>le.id===$)){const le=T.find(je=>je.id===$);le&&A.push({id:$,orig:le.originalRect,target:F,isFixed:le.isFixed,isSelected:O.has($)})}for(const[$,F]of It)A.some(le=>le.id===$)||A.push({id:$,orig:F.orig,target:F.target,isFixed:F.isFixed,isSelected:!1,isExiting:!0});return A.length===0?null:a.jsxs("svg",{className:`${K.connectorSvg} ${H||u?K.connectorExiting:""}`,children:[A.map(({id:$,orig:F,target:le,isFixed:je,isSelected:re,isExiting:se})=>{const Oe=F.x+F.width/2,it=(je?F.y:F.y-S)+F.height/2,mt=le.x+le.width/2,Et=(je?le.y:le.y-S)+le.height/2,U=mt-Oe,ce=Et-it,_e=Math.sqrt(U*U+ce*ce);if(_e<2)return null;const ve=Math.min(1,_e/40),xe=Math.min(_e*.3,60),Xe=_e>0?-ce/_e:0,Ze=_e>0?U/_e:0,Ie=(Oe+mt)/2+Xe*xe,yt=(it+Et)/2+Ze*xe,lt=ut.has($),sn=lt||re?1:.4,Rn=lt||re?1:.5;return a.jsxs("g",{className:se?K.connectorExiting:"",children:[a.jsx("path",{className:K.connectorLine,d:`M ${Oe} ${it} Q ${Ie} ${yt} ${mt} ${Et}`,fill:"none",stroke:"rgba(59, 130, 246, 0.45)",strokeWidth:"1.5",opacity:sn*ve}),a.jsx("circle",{className:K.connectorDot,cx:Oe,cy:it,r:4*ve,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rn*ve,filter:"url(#connDotShadow)"}),a.jsx("circle",{className:K.connectorDot,cx:mt,cy:Et,r:4*ve,fill:"rgba(59, 130, 246, 0.8)",stroke:"#fff",strokeWidth:"1.5",opacity:Rn*ve,filter:"url(#connDotShadow)"})]},`conn-${$}`)}),a.jsx("defs",{children:a.jsx("filter",{id:"connDotShadow",x:"-50%",y:"-50%",width:"200%",height:"200%",children:a.jsx("feDropShadow",{dx:"0",dy:"0.5",stdDeviation:"1",floodOpacity:"0.15"})})})]})})(),be&&(()=>{const A=T.find(Et=>Et.id===be);if(!A)return null;const $=A.currentRect,F=A.isFixed?$.y:$.y-S,le=$.x+$.width/2,je=F-8,re=F+$.height+8,se=je>200,Oe=re<window.innerHeight-100,it=Math.max(160,Math.min(window.innerWidth-160,le));let mt;return se?mt={left:it,bottom:window.innerHeight-je}:Oe?mt={left:it,top:re}:mt={left:it,top:Math.max(80,window.innerHeight/2-80)},a.jsx(oc,{element:A.label,placeholder:"Add a note about this section",initialValue:A.note??"",submitLabel:oe.current?"Save":"Set",onSubmit:Te,onCancel:nt,onDelete:oe.current?()=>{Te("")}:void 0,isExiting:we,lightMode:!c,style:mt})})(),J&&a.jsx("div",{className:K.sizeIndicator,style:{left:J.x,top:J.y},"data-feedback-toolbar":!0,children:J.text}),me.map((A,$)=>a.jsx("div",{className:K.guideLine,style:A.axis==="x"?{position:"fixed",left:A.pos,top:0,width:1,height:"100vh"}:{position:"fixed",left:0,top:A.pos-S,width:"100vw",height:1}},`${A.axis}-${A.pos}-${$}`))]})}var Sd=new Set(["script","style","noscript","link","meta","br","hr"]);function Rp(){const o=document.querySelector("main")||document.body,r=[],c=Array.from(o.children),u=o!==document.body&&c.length<3?Array.from(document.body.children):c;for(const _ of u){if(!(_ instanceof HTMLElement)||Sd.has(_.tagName.toLowerCase())||_.hasAttribute("data-feedback-toolbar"))continue;const f=window.getComputedStyle(_);if(f.display==="none"||f.visibility==="hidden")continue;const b=_.getBoundingClientRect();if(!(b.height<10||b.width<10)){r.push({label:sc(_),selector:Ro(_),top:b.top,bottom:b.bottom,left:b.left,right:b.right,area:b.width*b.height});for(const R of Array.from(_.children)){if(!(R instanceof HTMLElement)||Sd.has(R.tagName.toLowerCase())||R.hasAttribute("data-feedback-toolbar"))continue;const v=window.getComputedStyle(R);if(v.display==="none"||v.visibility==="hidden")continue;const M=R.getBoundingClientRect();M.height<10||M.width<10||r.push({label:sc(R),selector:Ro(R),top:M.top,bottom:M.bottom,left:M.left,right:M.right,area:M.width*M.height})}}}return r}function zp(o){const r=window.scrollY;return o.map(({label:c,selector:u,rect:_})=>{const f=_.y-r;return{label:c,selector:u,top:f,bottom:f+_.height,left:_.x,right:_.x+_.width,area:_.width*_.height}})}function Dp(o){const r=window.scrollY,c=o.y-r,u=o.x;return{top:c,bottom:c+o.height,left:u,right:u+o.width,area:o.width*o.height}}function kd(o,r){const c=r?zp(r):Rp(),u=Dp(o);let _=null,f=null,b=null,R=null,v=null;for(const O of c){if(Math.abs(O.left-u.left)<2&&Math.abs(O.top-u.top)<2&&Math.abs(O.right-O.left-o.width)<2&&Math.abs(O.bottom-O.top-o.height)<2)continue;O.left<=u.left+2&&O.right>=u.right-2&&O.top<=u.top+2&&O.bottom>=u.bottom-2&&O.area>u.area*1.5&&(!v||O.area<v._area)&&(v={label:O.label,selector:O.selector,_area:O.area});const te=u.right>O.left+5&&u.left<O.right-5,H=u.bottom>O.top+5&&u.top<O.bottom-5;if(te&&O.bottom<=u.top+5){const I=Math.round(u.top-O.bottom);(!_||I<_._dist)&&(_={label:O.label,selector:O.selector,gap:Math.max(0,I),_dist:I})}if(te&&O.top>=u.bottom-5){const I=Math.round(O.top-u.bottom);(!f||I<f._dist)&&(f={label:O.label,selector:O.selector,gap:Math.max(0,I),_dist:I})}if(H&&O.right<=u.left+5){const I=Math.round(u.left-O.right);(!b||I<b._dist)&&(b={label:O.label,selector:O.selector,gap:Math.max(0,I),_dist:I})}if(H&&O.left>=u.right-5){const I=Math.round(O.left-u.right);(!R||I<R._dist)&&(R={label:O.label,selector:O.selector,gap:Math.max(0,I),_dist:I})}}const M=window.innerWidth,k=window.innerHeight,z=Op(o,M),T=O=>O?{label:O.label,selector:O.selector,gap:O.gap}:null,de=Ap(u,o,M,k,v?{label:v.label,selector:v.selector,_area:v._area}:null,c);return{above:T(_),below:T(f),left:T(b),right:T(R),alignment:z,containedIn:v?{label:v.label,selector:v.selector}:null,outOfBounds:de}}function Ap(o,r,c,u,_,f){const b={};let R=!1;const v=[];if(o.left<-2&&v.push("left"),o.right>c+2&&v.push("right"),o.top<-2&&v.push("top"),o.bottom>u+2&&v.push("bottom"),v.length>0&&(b.viewport=v,R=!0),_){const M=f.find(k=>k.label===_.label&&k.selector===_.selector&&Math.abs(k.area-_._area)<10);if(M){const k=[];o.left<M.left-2&&k.push("left"),o.right>M.right+2&&k.push("right"),o.top<M.top-2&&k.push("top"),o.bottom>M.bottom+2&&k.push("bottom"),k.length>0&&(b.container={label:_.label,edges:k},R=!0)}}return R?b:null}function Op(o,r){if(o.width/r>.85)return"full-width";const u=o.x+o.width/2,_=r/2,f=u-_,b=r*.08;return Math.abs(f)<b?"center":f<0?"left":"right"}function Lm(o){switch(o){case"full-width":return"full-width";case"center":return"centered";case"left":return"left-aligned";case"right":return"right-aligned"}}function $m(o,r={}){const c=[];o.above&&c.push(`Below \`${o.above.label}\`${o.above.gap>0?` (${o.above.gap}px gap)`:""}`),o.below&&c.push(`Above \`${o.below.label}\`${o.below.gap>0?` (${o.below.gap}px gap)`:""}`),r.includeLeftRight&&(o.left&&c.push(`Right of \`${o.left.label}\`${o.left.gap>0?` (${o.left.gap}px gap)`:""}`),o.right&&c.push(`Left of \`${o.right.label}\`${o.right.gap>0?` (${o.right.gap}px gap)`:""}`));const u=Lm(o.alignment);return o.containedIn?c.push(`${u.charAt(0).toUpperCase()+u.slice(1)} in \`${o.containedIn.label}\``):c.push(`${u.charAt(0).toUpperCase()+u.slice(1)} in page`),r.includePixelRef&&r.pixelRef&&c.push(`Pixel ref: \`${r.pixelRef}\``),o.outOfBounds&&(o.outOfBounds.viewport&&c.push(`**Outside viewport** (${o.outOfBounds.viewport.join(", ")} edge${o.outOfBounds.viewport.length>1?"s":""})`),o.outOfBounds.container&&c.push(`**Outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")} edge${o.outOfBounds.container.edges.length>1?"s":""})`)),c}function Bp(o,r,c){const u=[];o.above&&u.push(`below \`${o.above.label}\``),o.below&&u.push(`above \`${o.below.label}\``),o.left&&u.push(`right of \`${o.left.label}\``),o.right&&u.push(`left of \`${o.right.label}\``),o.containedIn&&u.push(`inside \`${o.containedIn.label}\``),u.push(Lm(o.alignment)),o.outOfBounds?.viewport&&u.push(`**outside viewport** (${o.outOfBounds.viewport.join(", ")})`),o.outOfBounds?.container&&u.push(`**outside \`${o.outOfBounds.container.label}\`** (${o.outOfBounds.container.edges.join(", ")})`);const _=c?`, ${Math.round(c.width)}×${Math.round(c.height)}px`:"";return`at (${Math.round(r.x)}, ${Math.round(r.y)})${_}: ${u.join(", ")}`}var im=15;function rm(o){if(o.length<2)return[];const r=[],c=new Set;for(let u=0;u<o.length;u++){if(c.has(u))continue;const _=[u];for(let f=u+1;f<o.length;f++)c.has(f)||Math.abs(o[u].rect.y-o[f].rect.y)<im&&_.push(f);if(_.length>=2){const f=_.map(v=>o[v]);f.sort((v,M)=>v.rect.x-M.rect.x);const b=[];for(let v=0;v<f.length-1;v++)b.push(Math.round(f[v+1].rect.x-(f[v].rect.x+f[v].rect.width)));const R=Math.round(f.reduce((v,M)=>v+M.rect.y,0)/f.length);r.push({labels:f.map(v=>v.label),type:"row",sharedEdge:R,gaps:b,avgGap:b.length?Math.round(b.reduce((v,M)=>v+M,0)/b.length):0}),_.forEach(v=>c.add(v))}}for(let u=0;u<o.length;u++){if(c.has(u))continue;const _=[u];for(let f=u+1;f<o.length;f++)c.has(f)||Math.abs(o[u].rect.x-o[f].rect.x)<im&&_.push(f);if(_.length>=2){const f=_.map(v=>o[v]);f.sort((v,M)=>v.rect.y-M.rect.y);const b=[];for(let v=0;v<f.length-1;v++)b.push(Math.round(f[v+1].rect.y-(f[v].rect.y+f[v].rect.height)));const R=Math.round(f.reduce((v,M)=>v+M.rect.x,0)/f.length);r.push({labels:f.map(v=>v.label),type:"column",sharedEdge:R,gaps:b,avgGap:b.length?Math.round(b.reduce((v,M)=>v+M,0)/b.length):0}),_.forEach(v=>c.add(v))}}return r}function Lp(o){if(o.length<2)return[];const r=rm(o.map(b=>({label:b.label,rect:b.originalRect}))),c=rm(o.map(b=>({label:b.label,rect:b.currentRect}))),u=[],_=new Set;for(const b of r){const R=new Set(b.labels);let v=null,M=0;for(const k of c){const z=k.labels.filter(T=>R.has(T)).length;z>=2&&z>M&&(v=k,M=z)}if(v){const k=v.labels.filter(T=>R.has(T)),z=k.join(", ");if(v.type!==b.type){const T=b.type==="row"?"y":"x",de=v.type==="row"?"y":"x";u.push(`**${z}**: ${b.type} (${T}≈${b.sharedEdge}, ${b.avgGap}px gaps) → ${v.type} (${de}≈${v.sharedEdge}, ${v.avgGap}px gaps)`)}else if(Math.abs(b.sharedEdge-v.sharedEdge)>20||Math.abs(b.avgGap-v.avgGap)>5){const T=b.type==="row"?"y":"x",de=Math.abs(b.sharedEdge-v.sharedEdge)>20?` ${T}: ${b.sharedEdge} → ${v.sharedEdge}`:"",O=Math.abs(b.avgGap-v.avgGap)>5?` gaps: ${b.avgGap}px → ${v.avgGap}px`:"";u.push(`**${z}**: ${b.type} shifted —${de}${O}`)}k.forEach(T=>_.add(T))}else{const k=b.labels.join(", "),z=b.type==="row"?"y":"x";u.push(`**${k}**: ${b.type} (${z}≈${b.sharedEdge}) dissolved`),b.labels.forEach(T=>_.add(T))}}for(const b of c){if(b.labels.every(M=>_.has(M))||b.labels.filter(M=>!_.has(M)).length<2)continue;if(!r.some(M=>M.labels.filter(z=>b.labels.includes(z)).length>=2)){const M=b.type==="row"?"y":"x";u.push(`**${b.labels.join(", ")}**: new ${b.type} (${M}≈${b.sharedEdge}, ${b.avgGap}px gaps)`),b.labels.forEach(k=>_.add(k))}}const f=o.filter(b=>!_.has(b.label));if(f.length>=2){const b={};for(const R of f){const v=Math.round(R.currentRect.x/5)*5;(b[v]??(b[v]=[])).push(R.label)}for(const[R,v]of Object.entries(b))v.length>=2&&u.push(`**${v.join(", ")}**: shared left edge at x≈${R}`)}return u}function Hm(o){if(typeof document>"u")return{viewport:o,contentArea:null};const r=[],c=new Set,u=R=>{c.has(R)||R instanceof HTMLElement&&(R.hasAttribute("data-feedback-toolbar")||Sd.has(R.tagName.toLowerCase())||(c.add(R),r.push(R)))},_=document.querySelector("main");_&&u(_);const f=document.querySelector("[role='main']");f&&u(f);for(const R of Array.from(document.body.children))if(u(R),R.children){for(const v of Array.from(R.children))if(u(v),v.children)for(const M of Array.from(v.children))u(M)}let b=null;for(const R of r){const v=R.getBoundingClientRect();if(v.height<50)continue;const M=getComputedStyle(R);if(M.maxWidth&&M.maxWidth!=="none"&&M.maxWidth!=="0px"){(!b||v.width<b.rect.width)&&(b={el:R,rect:v});continue}!b&&v.width<o.width-20&&v.width>100&&(b={el:R,rect:v})}if(b){const{el:R,rect:v}=b;return{viewport:o,contentArea:{width:Math.round(v.width),left:Math.round(v.left),right:Math.round(v.right),centerX:Math.round(v.left+v.width/2),selector:Ro(R)}}}return{viewport:o,contentArea:null}}function $p(o){if(typeof document>"u")return null;const r=document.querySelector(o);if(!r?.parentElement)return null;const c=getComputedStyle(r.parentElement),u={parentDisplay:c.display,parentSelector:Ro(r.parentElement)};return c.display.includes("flex")&&(u.flexDirection=c.flexDirection),c.display.includes("grid")&&c.gridTemplateColumns!=="none"&&(u.gridCols=c.gridTemplateColumns),c.gap&&c.gap!=="normal"&&c.gap!=="0px"&&(u.gap=c.gap),u}function Um(o,r){const c=r.contentArea,u=c?c.width:r.viewport.width,_=c?c.left:0,f=c?c.centerX:Math.round(r.viewport.width/2),b=Math.round(o.x-_),R=Math.round(_+u-(o.x+o.width)),v=(o.width/u*100).toFixed(1),M=o.x+o.width/2,k=Math.abs(M-f)<20,z=o.width/u>.95,T=[];return z?T.push("`width: 100%` of container"):T.push(`left \`${b}px\` in container, right \`${R}px\`, width \`${v}%\` (\`${Math.round(o.width)}px\`)`),k&&!z&&T.push("centered — `margin-inline: auto`"),T.join(" — ")}function Ym(o){const{viewport:r,contentArea:c}=o;let u=`### Reference Frame
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
`,u}function Hp(o){const r=$p(o);if(!r)return null;let c=`\`${r.parentDisplay}\``;return r.flexDirection&&(c+=`, flex-direction: \`${r.flexDirection}\``),r.gridCols&&(c+=`, grid-template-columns: \`${r.gridCols}\``),r.gap&&(c+=`, gap: \`${r.gap}\``),`Parent: ${c} (\`${r.parentSelector}\`)`}function cm(o,r,c,u="standard"){if(o.length===0)return"";const _=[...o].sort((H,I)=>Math.abs(H.y-I.y)<20?H.x-I.x:H.y-I.y);let f="";if(c?.blankCanvas?(f+=`## Wireframe: New Page

`,c.wireframePurpose&&(f+=`> **Purpose:** ${c.wireframePurpose}
>
`),f+=`> ${o.length} component${o.length!==1?"s":""} placed — this is a standalone wireframe, not related to the current page.
>
> This wireframe is a rough sketch for exploring ideas.

`):f+=`## Design Layout

> ${o.length} component${o.length!==1?"s":""} placed

`,u==="compact")return f+=`### Components
`,_.forEach((H,I)=>{const he=Hl[H.type]?.label||H.type;f+=`${I+1}. **${he}** — \`${Math.round(H.width)}×${Math.round(H.height)}px\` at \`(${Math.round(H.x)}, ${Math.round(H.y)})\`
`}),f;const b=Hm(r);f+=Ym(b),f+=`### Components
`,_.forEach((H,I)=>{const he=Hl[H.type]?.label||H.type,pe={x:H.x,y:H.y,width:H.width,height:H.height};f+=`${I+1}. **${he}** — \`${Math.round(H.width)}×${Math.round(H.height)}px\` at \`(${Math.round(H.x)}, ${Math.round(H.y)})\`
`;const be=kd(pe),we=$m(be,{includeLeftRight:u==="detailed"||u==="forensic"});for(const oe of we)f+=`   - ${oe}
`;const ee=Um(pe,b);ee&&(f+=`   - CSS: ${ee}
`)}),f+=`
### Layout Analysis
`;const R=[];for(const H of _){const I=R.find(he=>Math.abs(he.y-H.y)<30);I?I.items.push(H):R.push({y:H.y,items:[H]})}if(R.sort((H,I)=>H.y-I.y),R.forEach((H,I)=>{H.items.sort((pe,be)=>pe.x-be.x);const he=H.items.map(pe=>Hl[pe.type]?.label||pe.type);if(H.items.length===1){const be=H.items[0].width>r.width*.8;f+=`- Row ${I+1} (y≈${Math.round(H.y)}): ${he[0]}${be?" — full width":""}
`}else f+=`- Row ${I+1} (y≈${Math.round(H.y)}): ${he.join(" | ")} — ${H.items.length} items side by side
`}),u==="detailed"||u==="forensic"){f+=`
### Spacing & Gaps
`;for(let H=0;H<_.length-1;H++){const I=_[H],he=_[H+1],pe=Hl[I.type]?.label||I.type,be=Hl[he.type]?.label||he.type,ct=Math.round(he.y-(I.y+I.height)),we=Math.round(he.x-(I.x+I.width));Math.abs(I.y-he.y)<30?f+=`- ${pe} → ${be}: \`${we}px\` horizontal gap
`:f+=`- ${pe} → ${be}: \`${ct}px\` vertical gap
`}if(u==="forensic"&&_.length>2){f+=`
### All Pairwise Gaps
`;for(let H=0;H<_.length;H++)for(let I=H+1;I<_.length;I++){const he=_[H],pe=_[I],be=Hl[he.type]?.label||he.type,ct=Hl[pe.type]?.label||pe.type,we=Math.round(pe.y-(he.y+he.height)),ee=Math.round(pe.x-(he.x+he.width));f+=`- ${be} ↔ ${ct}: h=\`${ee}px\` v=\`${we}px\`
`}}u==="forensic"&&(f+=`
### Z-Order (placement order)
`,o.forEach((H,I)=>{const he=Hl[H.type]?.label||H.type;f+=`${I}. ${he} at \`(${Math.round(H.x)}, ${Math.round(H.y)})\`
`}))}f+=`
### Suggested Implementation
`;const v=_.some(H=>H.type==="navigation"),M=_.some(H=>H.type==="hero"),k=_.some(H=>H.type==="sidebar"),z=_.some(H=>H.type==="footer"),T=_.filter(H=>H.type==="card"),de=_.filter(H=>H.type==="form"),O=_.filter(H=>H.type==="table"),te=_.filter(H=>H.type==="modal");if(v&&(f+=`- Top navigation bar with logo + nav links + CTA
`),M&&(f+=`- Hero section with heading, subtext, and call-to-action
`),k&&(f+=`- Sidebar layout — use CSS Grid with sidebar + main content area
`),T.length>1?f+=`- ${T.length}-column card grid — use CSS Grid or Flexbox
`:T.length===1&&(f+=`- Card component with image + content area
`),de.length>0&&(f+=`- ${de.length} form${de.length>1?"s":""} — add proper labels, validation, and submit handling
`),O.length>0&&(f+=`- Data table — consider sortable columns and pagination
`),te.length>0&&(f+=`- Modal dialog — add overlay backdrop and focus trapping
`),z&&(f+=`- Multi-column footer with links
`),u==="detailed"||u==="forensic"){if(f+=`
### CSS Suggestions
`,k){const H=_.find(I=>I.type==="sidebar");f+=`- \`display: grid; grid-template-columns: ${Math.round(H.width)}px 1fr;\`
`}if(T.length>1){const H=Math.round(T[0].width);f+=`- \`display: grid; grid-template-columns: repeat(${T.length}, ${H}px); gap: 16px;\`
`}v&&(f+="- Navigation: `position: sticky; top: 0; z-index: 50;`\n")}return f}function um(o,r="standard",c){const{sections:u}=o,_=[];for(const k of u){const z=k.originalRect,T=k.currentRect,de=Math.abs(z.x-T.x)>1||Math.abs(z.y-T.y)>1,O=Math.abs(z.width-T.width)>1||Math.abs(z.height-T.height)>1;if(!de&&!O){r==="forensic"&&_.push({section:k,posMoved:!1,sizeChanged:!1});continue}_.push({section:k,posMoved:de,sizeChanged:O})}if(_.length===0||r!=="forensic"&&_.every(k=>!k.posMoved&&!k.sizeChanged))return"";let f=`## Suggested Layout Changes

`;const b=c?c.width:typeof window<"u"?window.innerWidth:0,R=c?c.height:typeof window<"u"?window.innerHeight:0,v=Hm({width:b,height:R});r!=="compact"&&(f+=Ym(v)),r==="forensic"&&(f+=`> Detected at: \`${new Date(o.detectedAt).toISOString()}\`
`,f+=`> Total sections: ${u.length}

`);const M=k=>u.map(z=>({label:z.label,selector:z.selector,rect:k==="original"?z.originalRect:z.currentRect}));f+=`**Changes:**
`;for(const{section:k,posMoved:z,sizeChanged:T}of _){const de=k.originalRect,O=k.currentRect;if(!z&&!T){f+=`- ${k.label} — unchanged at (${Math.round(O.x)}, ${Math.round(O.y)}) ${Math.round(O.width)}×${Math.round(O.height)}px
`;continue}if(r==="compact"){z&&T?f+=`- Suggested: move **${k.label}** to (${Math.round(O.x)}, ${Math.round(O.y)}) ${Math.round(O.width)}×${Math.round(O.height)}px
`:z?f+=`- Suggested: move **${k.label}** to (${Math.round(O.x)}, ${Math.round(O.y)})
`:f+=`- Suggested: resize **${k.label}** to ${Math.round(O.width)}×${Math.round(O.height)}px
`;continue}if(z&&T?f+=`- Suggested: move and resize **${k.label}**
`:z?f+=`- Suggested: move **${k.label}**
`:f+=`- Suggested: resize **${k.label}** from ${Math.round(de.width)}×${Math.round(de.height)}px to ${Math.round(O.width)}×${Math.round(O.height)}px
`,z){const H=kd(de,M("original")),I=kd(O,M("current")),he=T?{width:de.width,height:de.height}:void 0;f+=`  - Currently ${Bp(H,{x:de.x,y:de.y},he)}
`;const pe=T?{width:O.width,height:O.height}:void 0,be=`at (${Math.round(O.x)}, ${Math.round(O.y)})`,ct=pe?`, ${Math.round(pe.width)}×${Math.round(pe.height)}px`:"",ee=$m(I,{includeLeftRight:r==="detailed"||r==="forensic"});if(ee.length>0){f+=`  - Suggested position ${be}${ct}: ${ee[0]}
`;for(let tt=1;tt<ee.length;tt++)f+=`    ${ee[tt]}
`}else f+=`  - Suggested position ${be}${ct}
`;const oe=Um(O,v);oe&&(f+=`  - CSS: ${oe}
`)}const te=Hp(k.selector);if(te&&(f+=`  - ${te}
`),f+=`  - Selector: \`${k.selector}\`
`,r==="detailed"||r==="forensic"){const H=k.className?`${k.tagName}.${k.className.split(" ")[0]}`:k.tagName;H!==k.selector&&(f+=`  - Element: \`${H}\`
`),k.role&&(f+=`  - Role: \`${k.role}\`
`),r==="forensic"&&k.textSnippet&&(f+=`  - Text: "${k.textSnippet}"
`)}r==="forensic"&&(f+=`  - Original rect: \`{ x: ${Math.round(de.x)}, y: ${Math.round(de.y)}, w: ${Math.round(de.width)}, h: ${Math.round(de.height)} }\`
`,f+=`  - Current rect: \`{ x: ${Math.round(O.x)}, y: ${Math.round(O.y)}, w: ${Math.round(O.width)}, h: ${Math.round(O.height)} }\`
`)}if(r!=="compact"){const k=_.filter(T=>T.posMoved).map(T=>({label:T.section.label,originalRect:T.section.originalRect,currentRect:T.section.currentRect})),z=Lp(k);if(z.length>0){f+=`
### Layout Summary
`;for(const T of z)f+=`- ${T}
`}}if(r!=="compact"&&u.length>1){f+=`
### All Sections (current positions)
`;const k=[...u].sort((z,T)=>Math.abs(z.currentRect.y-T.currentRect.y)<20?z.currentRect.x-T.currentRect.x:z.currentRect.y-T.currentRect.y);for(const z of k){const T=z.currentRect,de=Math.abs(T.x-z.originalRect.x)>1||Math.abs(T.y-z.originalRect.y)>1||Math.abs(T.width-z.originalRect.width)>1||Math.abs(T.height-z.originalRect.height)>1;f+=`- ${z.label}: \`${Math.round(T.width)}×${Math.round(T.height)}px\` at \`(${Math.round(T.x)}, ${Math.round(T.y)})\`${de?" ← suggested":""}
`}}return f}var jd="feedback-annotations-",Xm=7;function ic(o){return`${jd}${o}`}function dd(o){if(typeof window>"u")return[];try{const r=localStorage.getItem(ic(o));if(!r)return[];const c=JSON.parse(r),u=Date.now()-Xm*24*60*60*1e3;return c.filter(_=>!_.timestamp||_.timestamp>u)}catch{return[]}}function qm(o,r){if(!(typeof window>"u"))try{localStorage.setItem(ic(o),JSON.stringify(r))}catch{}}function Up(){const o=new Map;if(typeof window>"u")return o;try{const r=Date.now()-Xm*24*60*60*1e3;for(let c=0;c<localStorage.length;c++){const u=localStorage.key(c);if(u?.startsWith(jd)){const _=u.slice(jd.length),f=localStorage.getItem(u);if(f){const R=JSON.parse(f).filter(v=>!v.timestamp||v.timestamp>r);R.length>0&&o.set(_,R)}}}}catch{}return o}function wi(o,r,c){const u=r.map(_=>({..._,_syncedTo:c}));qm(o,u)}var Nd="agentation-design-";function Yp(o){if(typeof window>"u")return[];try{const r=localStorage.getItem(`${Nd}${o}`);return r?JSON.parse(r):[]}catch{return[]}}function Xp(o,r){if(!(typeof window>"u"))try{localStorage.setItem(`${Nd}${o}`,JSON.stringify(r))}catch{}}function qp(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Nd}${o}`)}catch{}}var Td="agentation-rearrange-";function Ip(o){if(typeof window>"u")return null;try{const r=localStorage.getItem(`${Td}${o}`);return r?JSON.parse(r):null}catch{return null}}function Qp(o,r){if(!(typeof window>"u"))try{localStorage.setItem(`${Td}${o}`,JSON.stringify(r))}catch{}}function Wp(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Td}${o}`)}catch{}}var Rd="agentation-wireframe-";function Gp(o){if(typeof window>"u")return null;try{const r=localStorage.getItem(`${Rd}${o}`);return r?JSON.parse(r):null}catch{return null}}function dm(o,r){if(!(typeof window>"u"))try{localStorage.setItem(`${Rd}${o}`,JSON.stringify(r))}catch{}}function tc(o){if(!(typeof window>"u"))try{localStorage.removeItem(`${Rd}${o}`)}catch{}}var Im="agentation-session-";function zd(o){return`${Im}${o}`}function Vp(o){if(typeof window>"u")return null;try{return localStorage.getItem(zd(o))}catch{return null}}function _d(o,r){if(!(typeof window>"u"))try{localStorage.setItem(zd(o),r)}catch{}}function Zp(o){if(!(typeof window>"u"))try{localStorage.removeItem(zd(o))}catch{}}var Qm=`${Im}toolbar-hidden`;function Kp(){if(typeof window>"u")return!1;try{return sessionStorage.getItem(Qm)==="1"}catch{return!1}}function Fp(o){if(!(typeof window>"u"))try{o&&sessionStorage.setItem(Qm,"1")}catch{}}async function fd(o,r){const c=await fetch(`${o}/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:r})});if(!c.ok)throw new Error(`Failed to create session: ${c.status}`);return c.json()}async function _m(o,r){const c=await fetch(`${o}/sessions/${r}`);if(!c.ok)throw new Error(`Failed to get session: ${c.status}`);return c.json()}async function ps(o,r,c){const u=await fetch(`${o}/sessions/${r}/annotations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error(`Failed to sync annotation: ${u.status}`);return u.json()}async function fm(o,r,c){const u=await fetch(`${o}/annotations/${r}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!u.ok)throw new Error(`Failed to update annotation: ${u.status}`);return u.json()}async function to(o,r){const c=await fetch(`${o}/annotations/${r}`,{method:"DELETE"});if(!c.ok)throw new Error(`Failed to delete annotation: ${c.status}`)}var Dt={FunctionComponent:0,ClassComponent:1,IndeterminateComponent:2,HostRoot:3,HostPortal:4,HostComponent:5,HostText:6,Fragment:7,Mode:8,ContextConsumer:9,ContextProvider:10,ForwardRef:11,Profiler:12,SuspenseComponent:13,MemoComponent:14,SimpleMemoComponent:15,LazyComponent:16,IncompleteClassComponent:17,DehydratedFragment:18,SuspenseListComponent:19,ScopeComponent:21,OffscreenComponent:22,LegacyHiddenComponent:23,CacheComponent:24,TracingMarkerComponent:25,HostHoistable:26,HostSingleton:27,IncompleteFunctionComponent:28,Throw:29,ViewTransitionComponent:30,ActivityComponent:31},hm=new Set(["Component","PureComponent","Fragment","Suspense","Profiler","StrictMode","Routes","Route","Outlet","Root","ErrorBoundaryHandler","HotReload","Hot"]),mm=[/Boundary$/,/BoundaryHandler$/,/Provider$/,/Consumer$/,/^(Inner|Outer)/,/Router$/,/^Client(Page|Segment|Root)/,/^Segment(ViewNode|Node)$/,/^LayoutSegment/,/^Server(Root|Component|Render)/,/^RSC/,/Context$/,/^Hot(Reload)?$/,/^(Dev|React)(Overlay|Tools|Root)/,/Overlay$/,/Handler$/,/^With[A-Z]/,/Wrapper$/,/^Root$/],Jp=[/Page$/,/View$/,/Screen$/,/Section$/,/Card$/,/List$/,/Item$/,/Form$/,/Modal$/,/Dialog$/,/Button$/,/Nav$/,/Header$/,/Footer$/,/Layout$/,/Panel$/,/Tab$/,/Menu$/];function Pp(o){const r=o?.mode??"filtered";let c=hm;if(o?.skipExact){const u=o.skipExact instanceof Set?o.skipExact:new Set(o.skipExact);c=new Set([...hm,...u])}return{maxComponents:o?.maxComponents??6,maxDepth:o?.maxDepth??30,mode:r,skipExact:c,skipPatterns:o?.skipPatterns?[...mm,...o.skipPatterns]:mm,userPatterns:o?.userPatterns??Jp,filter:o?.filter}}function e1(o){return o.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()}function t1(o,r=10){const c=new Set;let u=o,_=0;for(;u&&_<r;)u.className&&typeof u.className=="string"&&u.className.split(/\s+/).forEach(f=>{if(f.length>1){const b=f.replace(/[_][a-zA-Z0-9]{5,}.*$/,"").toLowerCase();b.length>1&&c.add(b)}}),u=u.parentElement,_++;return c}function n1(o,r){const c=e1(o);for(const u of r){if(u===c)return!0;const _=c.split("-").filter(b=>b.length>2),f=u.split("-").filter(b=>b.length>2);for(const b of _)for(const R of f)if(b===R||b.includes(R)||R.includes(b))return!0}return!1}function l1(o,r,c,u){if(c.filter)return c.filter(o,r);switch(c.mode){case"all":return!0;case"filtered":return!(c.skipExact.has(o)||c.skipPatterns.some(_=>_.test(o)));case"smart":return c.skipExact.has(o)||c.skipPatterns.some(_=>_.test(o))?!1:!!(u&&n1(o,u)||c.userPatterns.some(_=>_.test(o)));default:return!0}}var xs=null,a1=new WeakMap;function hd(o){return Object.keys(o).some(r=>r.startsWith("__reactFiber$")||r.startsWith("__reactInternalInstance$")||r.startsWith("__reactProps$"))}function o1(){if(xs!==null)return xs;if(typeof document>"u")return!1;if(document.body&&hd(document.body))return xs=!0,!0;const o=["#root","#app","#__next","[data-reactroot]"];for(const r of o){const c=document.querySelector(r);if(c&&hd(c))return xs=!0,!0}if(document.body){for(const r of document.body.children)if(hd(r))return xs=!0,!0}return xs=!1,!1}var Si={map:a1};function s1(o){return Object.keys(o).find(c=>c.startsWith("__reactFiber$")||c.startsWith("__reactInternalInstance$"))||null}function i1(o){const r=s1(o);return r?o[r]:null}function Mo(o){return o?o.displayName?o.displayName:o.name?o.name:null:null}function r1(o){const{tag:r,type:c,elementType:u}=o;if(r===Dt.HostComponent||r===Dt.HostText||r===Dt.HostHoistable||r===Dt.HostSingleton||r===Dt.Fragment||r===Dt.Mode||r===Dt.Profiler||r===Dt.DehydratedFragment||r===Dt.HostRoot||r===Dt.HostPortal||r===Dt.ScopeComponent||r===Dt.OffscreenComponent||r===Dt.LegacyHiddenComponent||r===Dt.CacheComponent||r===Dt.TracingMarkerComponent||r===Dt.Throw||r===Dt.ViewTransitionComponent||r===Dt.ActivityComponent)return null;if(r===Dt.ForwardRef){const _=u;if(_?.render){const f=Mo(_.render);if(f)return f}return _?.displayName?_.displayName:Mo(c)}if(r===Dt.MemoComponent||r===Dt.SimpleMemoComponent){const _=u;if(_?.type){const f=Mo(_.type);if(f)return f}return _?.displayName?_.displayName:Mo(c)}if(r===Dt.ContextProvider){const _=c;return _?._context?.displayName?`${_._context.displayName}.Provider`:null}if(r===Dt.ContextConsumer){const _=c;return _?.displayName?`${_.displayName}.Consumer`:null}if(r===Dt.LazyComponent){const _=u;return _?._status===1&&_._result?Mo(_._result):null}return r===Dt.SuspenseComponent||r===Dt.SuspenseListComponent?null:r===Dt.IncompleteClassComponent||r===Dt.IncompleteFunctionComponent||r===Dt.FunctionComponent||r===Dt.ClassComponent||r===Dt.IndeterminateComponent?Mo(c):null}function c1(o){return o.length<=2||o.length<=3&&o===o.toLowerCase()}function u1(o,r){const c=Pp(r),u=c.mode==="all";if(u){const v=Si.map.get(o);if(v!==void 0)return v}if(!o1()){const v={path:null,components:[]};return u&&Si.map.set(o,v),v}const _=c.mode==="smart"?t1(o):void 0,f=[];try{let v=i1(o),M=0;for(;v&&M<c.maxDepth&&f.length<c.maxComponents;){const k=r1(v);k&&!c1(k)&&l1(k,M,c,_)&&f.push(k),v=v.return,M++}}catch{const v={path:null,components:[]};return u&&Si.map.set(o,v),v}if(f.length===0){const v={path:null,components:[]};return u&&Si.map.set(o,v),v}const R={path:f.slice().reverse().map(v=>`<${v}>`).join(" "),components:f};return u&&Si.map.set(o,R),R}var ki={FunctionComponent:0,IndeterminateComponent:2,ForwardRef:11,MemoComponent:14,SimpleMemoComponent:15};function d1(o){if(!o||typeof o!="object")return null;const r=Object.keys(o),c=r.find(f=>f.startsWith("__reactFiber$"));if(c)return o[c]||null;const u=r.find(f=>f.startsWith("__reactInternalInstance$"));if(u)return o[u]||null;const _=r.find(f=>{if(!f.startsWith("__react"))return!1;const b=o[f];return b&&typeof b=="object"&&"_debugSource"in b});return _&&o[_]||null}function Mi(o){if(!o.type||typeof o.type=="string")return null;if(typeof o.type=="object"||typeof o.type=="function"){const r=o.type;if(r.displayName)return r.displayName;if(r.name)return r.name}return null}function _1(o,r=50){let c=o,u=0;for(;c&&u<r;){if(c._debugSource)return{source:c._debugSource,componentName:Mi(c)};if(c._debugOwner?._debugSource)return{source:c._debugOwner._debugSource,componentName:Mi(c._debugOwner)};c=c.return,u++}return null}function f1(o){let r=o,c=0;const u=50;for(;r&&c<u;){const _=r,f=["_debugSource","__source","_source","debugSource"];for(const b of f){const R=_[b];if(R&&typeof R=="object"&&"fileName"in R)return{source:R,componentName:Mi(r)}}if(r.memoizedProps){const b=r.memoizedProps;if(b.__source&&typeof b.__source=="object"){const R=b.__source;if(R.fileName&&R.lineNumber)return{source:{fileName:R.fileName,lineNumber:R.lineNumber,columnNumber:R.columnNumber},componentName:Mi(r)}}}r=r.return,c++}return null}var nc=new Map;function h1(o){const r=o.tag,c=o.type,u=o.elementType;if(typeof c=="string"||c==null||typeof c=="function"&&c.prototype?.isReactComponent)return null;if((r===ki.FunctionComponent||r===ki.IndeterminateComponent)&&typeof c=="function")return c;if(r===ki.ForwardRef&&u){const _=u.render;if(typeof _=="function")return _}if((r===ki.MemoComponent||r===ki.SimpleMemoComponent)&&u){const _=u.type;if(typeof _=="function")return _}return typeof c=="function"?c:null}function m1(){const o=Em,r=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;if(r&&"H"in r)return{get:()=>r.H,set:u=>{r.H=u}};const c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;if(c){const u=c.ReactCurrentDispatcher;if(u&&"current"in u)return{get:()=>u.current,set:_=>{u.current=_}}}return null}function g1(o){const r=o.split(`
`),c=[/source-location/,/\/dist\/index\./,/node_modules\//,/react-dom/,/react\.development/,/react\.production/,/chunk-[A-Z0-9]+/i,/react-stack-bottom-frame/,/react-reconciler/,/scheduler/,/<anonymous>/],u=/^\s*at\s+(?:.*?\s+\()?(.+?):(\d+):(\d+)\)?$/,_=/^[^@]*@(.+?):(\d+):(\d+)$/;for(const f of r){const b=f.trim();if(!b||c.some(v=>v.test(b)))continue;const R=u.exec(b)||_.exec(b);if(R)return{fileName:R[1],line:parseInt(R[2],10),column:parseInt(R[3],10)}}return null}function y1(o){let r=o;return r=r.replace(/[?#].*$/,""),r=r.replace(/^turbopack:\/\/\/\[project\]\//,""),r=r.replace(/^webpack-internal:\/\/\/\.\//,""),r=r.replace(/^webpack-internal:\/\/\//,""),r=r.replace(/^webpack:\/\/\/\.\//,""),r=r.replace(/^webpack:\/\/\//,""),r=r.replace(/^turbopack:\/\/\//,""),r=r.replace(/^https?:\/\/[^/]+\//,""),r=r.replace(/^file:\/\/\//,"/"),r=r.replace(/^\([^)]+\)\/\.\//,""),r=r.replace(/^\.\//,""),r}function p1(o){const r=h1(o);if(!r)return null;if(nc.has(r))return nc.get(r);const c=m1();if(!c)return nc.set(r,null),null;const u=c.get();let _=null;try{const f=new Proxy({},{get(){throw new Error("probe")}});c.set(f);try{r({})}catch(b){if(b instanceof Error&&b.message==="probe"&&b.stack){const R=g1(b.stack);R&&(_={fileName:y1(R.fileName),lineNumber:R.line,columnNumber:R.column,componentName:Mi(o)||void 0})}}}finally{c.set(u)}return nc.set(r,_),_}function x1(o,r=15){let c=o,u=0;for(;c&&u<r;){const _=p1(c);if(_)return _;c=c.return,u++}return null}function Cd(o){const r=d1(o);if(!r)return{found:!1,reason:"no-fiber",isReactApp:!1,isProduction:!1};let c=_1(r);if(c||(c=f1(r)),c?.source)return{found:!0,source:{fileName:c.source.fileName,lineNumber:c.source.lineNumber,columnNumber:c.source.columnNumber,componentName:c.componentName||void 0},isReactApp:!0,isProduction:!1};const u=x1(r);return u?{found:!0,source:u,isReactApp:!0,isProduction:!1}:{found:!1,reason:"no-debug-source",isReactApp:!0,isProduction:!1}}function b1(o,r="path"){const{fileName:c,lineNumber:u,columnNumber:_}=o;let f=`${c}:${u}`;return _!==void 0&&(f+=`:${_}`),r==="vscode"?`vscode://file${c.startsWith("/")?"":"/"}${f}`:f}function v1(o,r=10){let c=o,u=0;for(;c&&u<r;){const _=Cd(c);if(_.found)return _;c=c.parentElement,u++}return Cd(o)}var w1=`.styles-module__toolbar___wNsdK svg[fill=none],
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
}`,S1={toolbar:"styles-module__toolbar___wNsdK",markersLayer:"styles-module__markersLayer___-25j1",fixedMarkersLayer:"styles-module__fixedMarkersLayer___ffyX6",controlsContent:"styles-module__controlsContent___9GJWU",disableTransitions:"styles-module__disableTransitions___EopxO",toolbarContainer:"styles-module__toolbarContainer___dIhma",entrance:"styles-module__entrance___sgHd8",toolbarEnter:"styles-module__toolbarEnter___u8RRu",hiding:"styles-module__hiding___1td44",toolbarHide:"styles-module__toolbarHide___y8kaT",collapsed:"styles-module__collapsed___Rydsn",expanded:"styles-module__expanded___ofKPx",serverConnected:"styles-module__serverConnected___Gfbou",toggleContent:"styles-module__toggleContent___0yfyP",visible:"styles-module__visible___KHwEW",hidden:"styles-module__hidden___Ae8H4",badge:"styles-module__badge___2XsgF",fadeOut:"styles-module__fadeOut___6Ut6-",badgeEnter:"styles-module__badgeEnter___mVQLj",controlButton:"styles-module__controlButton___8Q0jc",statusShowing:"styles-module__statusShowing___te6iu",buttonBadge:"styles-module__buttonBadge___NeFWb",mcpIndicator:"styles-module__mcpIndicator___zGJeL",connected:"styles-module__connected___7c28g",mcpIndicatorPulseConnected:"styles-module__mcpIndicatorPulseConnected___EDodZ",connecting:"styles-module__connecting___uo-CW",mcpIndicatorPulseConnecting:"styles-module__mcpIndicatorPulseConnecting___cCYte",connectionIndicatorWrapper:"styles-module__connectionIndicatorWrapper___L-e-3",connectionIndicator:"styles-module__connectionIndicator___afk9p",connectionIndicatorVisible:"styles-module__connectionIndicatorVisible___C-i5B",connectionIndicatorConnected:"styles-module__connectionIndicatorConnected___IY8pR",connectionPulse:"styles-module__connectionPulse___-Zycw",connectionIndicatorDisconnected:"styles-module__connectionIndicatorDisconnected___kmpaZ",connectionIndicatorConnecting:"styles-module__connectionIndicatorConnecting___QmSLH",buttonWrapper:"styles-module__buttonWrapper___rBcdv",buttonTooltip:"styles-module__buttonTooltip___Burd9",tooltipsInSession:"styles-module__tooltipsInSession___-0lHH",sendButtonWrapper:"styles-module__sendButtonWrapper___UUxG6",sendButtonVisible:"styles-module__sendButtonVisible___WPSQU",shortcut:"styles-module__shortcut___lEAQk",tooltipBelow:"styles-module__tooltipBelow___m6ats",tooltipsHidden:"styles-module__tooltipsHidden___VtLJG",tooltipVisible:"styles-module__tooltipVisible___0jcCv",buttonWrapperAlignLeft:"styles-module__buttonWrapperAlignLeft___myzIp",buttonWrapperAlignRight:"styles-module__buttonWrapperAlignRight___HCQFR",divider:"styles-module__divider___c--s1",overlay:"styles-module__overlay___Q1O9y",hoverHighlight:"styles-module__hoverHighlight___ogakW",enter:"styles-module__enter___WFIki",hoverHighlightIn:"styles-module__hoverHighlightIn___6WYHY",multiSelectOutline:"styles-module__multiSelectOutline___cSJ-m",fadeIn:"styles-module__fadeIn___b9qmf",exit:"styles-module__exit___fyOJ0",singleSelectOutline:"styles-module__singleSelectOutline___QhX-O",hoverTooltip:"styles-module__hoverTooltip___bvLk7",hoverTooltipIn:"styles-module__hoverTooltipIn___FYGQx",hoverReactPath:"styles-module__hoverReactPath___gx1IJ",hoverElementName:"styles-module__hoverElementName___QMLMl",marker:"styles-module__marker___6sQrs",clearing:"styles-module__clearing___FQ--7",markerIn:"styles-module__markerIn___5FaAP",markerOut:"styles-module__markerOut___GU5jX",pending:"styles-module__pending___2IHLC",fixed:"styles-module__fixed___dBMHC",multiSelect:"styles-module__multiSelect___YWiuz",hovered:"styles-module__hovered___ZgXIy",renumber:"styles-module__renumber___nCTxD",renumberRoll:"styles-module__renumberRoll___Wgbq3",markerTooltip:"styles-module__markerTooltip___aLJID",tooltipIn:"styles-module__tooltipIn___0N31w",markerQuote:"styles-module__markerQuote___FHmrz",markerNote:"styles-module__markerNote___QkrrS",markerHint:"styles-module__markerHint___2iF-6",settingsPanel:"styles-module__settingsPanel___OxX3Y",settingsHeader:"styles-module__settingsHeader___pwDY9",settingsBrand:"styles-module__settingsBrand___0gJeM",settingsBrandSlash:"styles-module__settingsBrandSlash___uTG18",settingsVersion:"styles-module__settingsVersion___TUcFq",settingsSection:"styles-module__settingsSection___m-YM2",settingsLabel:"styles-module__settingsLabel___8UjfX",cycleButton:"styles-module__cycleButton___FMKfw",cycleDot:"styles-module__cycleDot___nPgLY",dropdownButton:"styles-module__dropdownButton___16NPz",toggleLabel:"styles-module__toggleLabel___Xm8Aa",customCheckbox:"styles-module__customCheckbox___U39ax",sliderLabel:"styles-module__sliderLabel___U8sPr",slider:"styles-module__slider___GLdxp",themeToggle:"styles-module__themeToggle___2rUjA",settingsOption:"styles-module__settingsOption___UNa12",selected:"styles-module__selected___OwRqP",settingsPanelContainer:"styles-module__settingsPanelContainer___Xksv8",settingsPage:"styles-module__settingsPage___6YfHH",slideLeft:"styles-module__slideLeft___Ps01J",automationsPage:"styles-module__automationsPage___uvCq6",slideIn:"styles-module__slideIn___4-qXe",settingsNavLink:"styles-module__settingsNavLink___wCzJt",settingsNavLinkRight:"styles-module__settingsNavLinkRight___ZWwhj",mcpNavIndicator:"styles-module__mcpNavIndicator___cl9pO",mcpPulse:"styles-module__mcpPulse___uNggr",settingsBackButton:"styles-module__settingsBackButton___bIe2j",automationHeader:"styles-module__automationHeader___InP0r",automationDescription:"styles-module__automationDescription___NKlmo",learnMoreLink:"styles-module__learnMoreLink___8xv-x",autoSendRow:"styles-module__autoSendRow___UblX5",autoSendLabel:"styles-module__autoSendLabel___icDc2",active:"styles-module__active___-zoN6",webhookUrlInput:"styles-module__webhookUrlInput___2375C",settingsSectionExtraPadding:"styles-module__settingsSectionExtraPadding___jdhFV",settingsSectionGrow:"styles-module__settingsSectionGrow___h-5HZ",settingsRow:"styles-module__settingsRow___3sdhc",settingsRowMarginTop:"styles-module__settingsRowMarginTop___zA0Sp",dropdownContainer:"styles-module__dropdownContainer___BVnxe",settingsRowDisabled:"styles-module__settingsRowDisabled___EgS0V",toggleSwitch:"styles-module__toggleSwitch___l4Ygm",cycleButtonText:"styles-module__cycleButtonText___fD1LR",cycleTextIn:"styles-module__cycleTextIn___Q6zJf",cycleDots:"styles-module__cycleDots___LWuoQ",dropdownMenu:"styles-module__dropdownMenu___k73ER",scaleIn:"styles-module__scaleIn___c-r1K",dropdownItem:"styles-module__dropdownItem___ylsLj",settingsLabelMarker:"styles-module__settingsLabelMarker___ewdtV",settingsOptions:"styles-module__settingsOptions___LyrBA",sliderContainer:"styles-module__sliderContainer___ducXj",sliderLabels:"styles-module__sliderLabels___FhLDB",colorOptions:"styles-module__colorOptions___iHCNX",colorOption:"styles-module__colorOption___IodiY",colorOptionRing:"styles-module__colorOptionRing___U2xpo",settingsToggle:"styles-module__settingsToggle___fBrFn",settingsToggleMarginBottom:"styles-module__settingsToggleMarginBottom___MZUyF",checked:"styles-module__checked___mnZLo",toggleSlider:"styles-module__toggleSlider___wprIn",disabled:"styles-module__disabled___332Jw",mcpStatusDot:"styles-module__mcpStatusDot___ibgkc",disconnected:"styles-module__disconnected___cHPxR",mcpPulseError:"styles-module__mcpPulseError___fov9B",drawCanvas:"styles-module__drawCanvas___7cG9U",dragSelection:"styles-module__dragSelection___kZLq2",dragCount:"styles-module__dragCount___KM90j",highlightsContainer:"styles-module__highlightsContainer___-0xzG",selectedElementHighlight:"styles-module__selectedElementHighlight___fyVlI",scaleOut:"styles-module__scaleOut___Wctwz",slideUp:"styles-module__slideUp___kgD36",slideDown:"styles-module__slideDown___zcdje"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-page-toolbar-css-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-page-toolbar-css-styles",document.head.appendChild(o)),o.textContent=w1}var ie=S1,ji=[{value:"compact",label:"Compact"},{value:"standard",label:"Standard"},{value:"detailed",label:"Detailed"},{value:"forensic",label:"Forensic"}];function gm(o,r,c="standard"){if(o.length===0)return"";const u=typeof window<"u"?`${window.innerWidth}×${window.innerHeight}`:"unknown";let _=`## Page Feedback: ${r}
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
`,o.forEach((f,b)=>{c==="compact"?(_+=`${b+1}. **${f.element}**${f.sourceFile?` (${f.sourceFile})`:""}: ${f.comment}`,f.selectedText&&(_+=` (re: "${f.selectedText.slice(0,30)}${f.selectedText.length>30?"...":""}")`),_+=`
`):c==="forensic"?(_+=`### ${b+1}. ${f.element}
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

`):(_+=`### ${b+1}. ${f.element}
`,_+=`**Location:** ${f.elementPath}
`,f.sourceFile&&(_+=`**Source:** ${f.sourceFile}
`),f.reactComponents&&(_+=`**React:** ${f.reactComponents}
`),c==="detailed"&&(f.cssClasses&&(_+=`**Classes:** ${f.cssClasses}
`),f.boundingBox&&(_+=`**Position:** ${Math.round(f.boundingBox.x)}px, ${Math.round(f.boundingBox.y)}px (${Math.round(f.boundingBox.width)}×${Math.round(f.boundingBox.height)}px)
`)),f.selectedText&&(_+=`**Selected text:** "${f.selectedText}"
`),c==="detailed"&&f.nearbyText&&!f.selectedText&&(_+=`**Context:** ${f.nearbyText.slice(0,100)}
`),_+=`**Feedback:** ${f.comment}

`)}),_.trim()}var k1=`@keyframes styles-module__markerIn___x4G8D {
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
}`,j1={marker:"styles-module__marker___9CKF7",enter:"styles-module__enter___8kI3q",exit:"styles-module__exit___KBdR3",clearing:"styles-module__clearing___8rM7K",pending:"styles-module__pending___BiY-U",fixed:"styles-module__fixed___aKrQO",multiSelect:"styles-module__multiSelect___CPfTC",hovered:"styles-module__hovered___-mg2N",renumber:"styles-module__renumber___16lvD",markerTooltip:"styles-module__markerTooltip___-VUm-",markerQuote:"styles-module__markerQuote___tQake",markerNote:"styles-module__markerNote___Rh4eI"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-annotation-marker-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-annotation-marker-styles",document.head.appendChild(o)),o.textContent=k1}var yn=j1;function ym({annotation:o,globalIndex:r,layerIndex:c,layerSize:u,isExiting:_,isClearing:f,isAnimated:b,isHovered:R,isDeleting:v,isEditingAny:M,renumberFrom:k,markerClickBehavior:z,tooltipStyle:T,onHoverEnter:de,onHoverLeave:O,onClick:te,onContextMenu:H}){const I=(R||v)&&!M,he=I&&z==="delete",pe=o.isMultiSelect,be=pe?"var(--agentation-color-green)":"var(--agentation-color-accent)",ct=_?yn.exit:f?yn.clearing:b?"":yn.enter,we=_?`${(u-1-c)*20}ms`:`${c*20}ms`;return a.jsxs("div",{className:`${yn.marker} ${pe?yn.multiSelect:""} ${ct} ${he?yn.hovered:""}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y,backgroundColor:he?void 0:be,animationDelay:we},onMouseEnter:()=>de(o),onMouseLeave:O,onClick:ee=>{ee.stopPropagation(),_||te(o)},onContextMenu:H?ee=>{z==="delete"&&(ee.preventDefault(),ee.stopPropagation(),_||H(o))}:void 0,children:[I?he?a.jsx(Tm,{size:pe?18:16}):a.jsx($g,{size:16}):a.jsx("span",{className:k!==null&&r>=k?yn.renumber:void 0,children:r+1}),R&&!M&&a.jsxs("div",{className:`${yn.markerTooltip} ${yn.enter}`,style:T,children:[a.jsxs("span",{className:yn.markerQuote,children:[o.element,o.selectedText&&` "${o.selectedText.slice(0,30)}${o.selectedText.length>30?"...":""}"`]}),a.jsx("span",{className:yn.markerNote,children:o.comment})]})]})}function C1({x:o,y:r,isMultiSelect:c,isExiting:u}){return a.jsx("div",{className:`${yn.marker} ${yn.pending} ${c?yn.multiSelect:""} ${u?yn.exit:yn.enter}`,style:{left:`${o}%`,top:r,backgroundColor:c?"var(--agentation-color-green)":"var(--agentation-color-accent)"},children:a.jsx(Cg,{size:12})})}function pm({annotation:o,fixed:r}){const c=o.isMultiSelect;return a.jsx("div",{className:`${yn.marker} ${r?yn.fixed:""} ${yn.hovered} ${c?yn.multiSelect:""} ${yn.exit}`,"data-annotation-marker":!0,style:{left:`${o.x}%`,top:o.y},children:a.jsx(Tm,{size:c?12:10})})}var M1=`.styles-module__switchContainer___Ka-AB {
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
}`,E1={switchContainer:"styles-module__switchContainer___Ka-AB",switchInput:"styles-module__switchInput___kYDSD",switchThumb:"styles-module__switchThumb___4sCPH"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-switch-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-switch-styles",document.head.appendChild(o)),o.textContent=M1}var md=E1,gd=({className:o="",...r})=>a.jsxs("div",{className:`${md.switchContainer} ${o}`,children:[a.jsx("input",{className:md.switchInput,type:"checkbox",...r}),a.jsx("div",{className:md.switchThumb})]}),N1=`.styles-module__checkboxContainer___joqZk {
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
}`,T1={checkboxContainer:"styles-module__checkboxContainer___joqZk",checkboxInput:"styles-module__checkboxInput___ECzzO",checkboxCheck:"styles-module__checkboxCheck___fUXpr",checkboxCheckPath:"styles-module__checkboxCheckPath___cDyh8"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-checkbox-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-checkbox-styles",document.head.appendChild(o)),o.textContent=N1}var lc=T1,R1=({className:o="",...r})=>a.jsxs("div",{className:`${lc.checkboxContainer} ${o}`,children:[a.jsx("input",{className:lc.checkboxInput,type:"checkbox",...r}),a.jsx("svg",{className:lc.checkboxCheck,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:a.jsx("path",{className:lc.checkboxCheckPath,d:"M3.94 7L6.13 9.19L10.5 4.81",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),z1=`.styles-module__container___w8eAF {
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
}`,D1={container:"styles-module__container___w8eAF",label:"styles-module__label___J5mxE"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-checkbox-field-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-checkbox-field-styles",document.head.appendChild(o)),o.textContent=z1}var xm=D1,bm=({className:o="",label:r,tooltip:c,checked:u,onChange:_,...f})=>{const b=m.useId();return a.jsxs("div",{className:`${xm.container} ${o}`,...f,children:[a.jsx(R1,{id:b,onChange:_,checked:u}),a.jsx("label",{className:xm.label,htmlFor:b,children:r}),c&&a.jsx(To,{content:c})]})},A1=`@keyframes styles-module__cycleTextIn___VBNTi {
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
}`,O1={settingsPanel:"styles-module__settingsPanel___qNkn-",settingsHeader:"styles-module__settingsHeader___Fn1DP",settingsBrand:"styles-module__settingsBrand___OoKlM",settingsBrandSlash:"styles-module__settingsBrandSlash___Q-AU9",settingsVersion:"styles-module__settingsVersion___rXmL9",settingsSection:"styles-module__settingsSection___n5V-4",settingsLabel:"styles-module__settingsLabel___VCVOQ",cycleButton:"styles-module__cycleButton___XMBx3",cycleDot:"styles-module__cycleDot___zgSXY",dropdownButton:"styles-module__dropdownButton___mKHe8",sliderLabel:"styles-module__sliderLabel___6K5v1",slider:"styles-module__slider___v5z-c",themeToggle:"styles-module__themeToggle___3imlT",enter:"styles-module__enter___wginS",exit:"styles-module__exit___A4iJc",settingsOption:"styles-module__settingsOption___JoyH-",selected:"styles-module__selected___k1-Vq",settingsPanelContainer:"styles-module__settingsPanelContainer___5it-H",settingsPage:"styles-module__settingsPage___BMn-3",slideLeft:"styles-module__slideLeft___qUvW4",automationsPage:"styles-module__automationsPage___N7By0",slideIn:"styles-module__slideIn___uXDSu",themeIconWrapper:"styles-module__themeIconWrapper___pyaYa",themeIcon:"styles-module__themeIcon___w7lAm",themeIconIn:"styles-module__themeIconIn___qUWMV",settingsSectionGrow:"styles-module__settingsSectionGrow___eZTRw",settingsRow:"styles-module__settingsRow___y-tDE",settingsRowMarginTop:"styles-module__settingsRowMarginTop___uLpGb",settingsRowDisabled:"styles-module__settingsRowDisabled___ydl3Q",cycleButtonText:"styles-module__cycleButtonText___mbbnD",cycleTextIn:"styles-module__cycleTextIn___VBNTi",cycleDots:"styles-module__cycleDots___ehp6i",active:"styles-module__active___dpAhM",colorOptions:"styles-module__colorOptions___pbxZx",colorOption:"styles-module__colorOption___Co955",settingsNavLink:"styles-module__settingsNavLink___uYIwM",settingsNavLinkRight:"styles-module__settingsNavLinkRight___XBUzC",settingsBackButton:"styles-module__settingsBackButton___fflll",automationHeader:"styles-module__automationHeader___Avra9",automationDescription:"styles-module__automationDescription___vFTmJ",learnMoreLink:"styles-module__learnMoreLink___cG7OI",autoSendContainer:"styles-module__autoSendContainer___VpkXk",autoSendLabel:"styles-module__autoSendLabel___ngNdC",disabled:"styles-module__disabled___9AZYS",mcpStatusDot:"styles-module__mcpStatusDot___8AMxP",connecting:"styles-module__connecting___QEO1r",mcpPulse:"styles-module__mcpPulse___5Q3Jj",connected:"styles-module__connected___WyFkx",disconnected:"styles-module__disconnected___mvmvQ",mcpPulseError:"styles-module__mcpPulseError___VHxhx",mcpNavIndicator:"styles-module__mcpNavIndicator___auBHI",webhookUrlInput:"styles-module__webhookUrlInput___WDDDC",checkboxField:"styles-module__checkboxField___ZrSqv",divider:"styles-module__divider___h6Yux",scaleIn:"styles-module__scaleIn___QpQ8E"};if(typeof document<"u"){let o=document.getElementById("feedback-tool-styles-settings-panel-styles");o||(o=document.createElement("style"),o.id="feedback-tool-styles-settings-panel-styles",document.head.appendChild(o)),o.textContent=A1}var Ne=O1;function B1({settings:o,onSettingsChange:r,isDarkMode:c,onToggleTheme:u,isDevMode:_,connectionStatus:f,endpoint:b,isVisible:R,toolbarNearBottom:v,settingsPage:M,onSettingsPageChange:k,onHideToolbar:z}){return a.jsx("div",{className:`${Ne.settingsPanel} ${R?Ne.enter:Ne.exit}`,style:v?{bottom:"auto",top:"calc(100% + 0.5rem)"}:void 0,"data-agentation-settings-panel":!0,children:a.jsxs("div",{className:Ne.settingsPanelContainer,children:[a.jsxs("div",{className:`${Ne.settingsPage} ${M==="automations"?Ne.slideLeft:""}`,children:[a.jsxs("div",{className:Ne.settingsHeader,children:[a.jsx("a",{className:Ne.settingsBrand,href:"https://agentation.com",target:"_blank",rel:"noopener noreferrer",children:a.jsx("svg",{width:"72",height:"16",viewBox:"0 0 676 151",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M79.6666 100.561L104.863 15.5213C107.828 4.03448 99.1201 -3.00582 88.7449 1.25541L3.52015 39.6065C1.48217 40.5329 0 42.7562 0 45.1647C0 48.6848 2.77907 51.4639 6.29922 51.4639C7.22558 51.4639 8.15193 51.2786 9.07829 50.9081L93.7472 12.7422C97.2674 11.0748 93.7472 8.29572 92.6356 12.1864L67.624 97.2259C66.5123 100.931 69.4767 105.193 73.7379 105.193C76.517 105.193 79.1108 103.155 79.6666 100.561ZM663.641 100.005C665.679 107.231 677.537 104.081 675.499 96.8553L666.05 66.2856C663.456 57.7631 655.489 55.7251 648.82 61.098L618.991 86.6654C617.324 87.9623 621.029 89.815 621.214 88.1476L625.846 61.6538C626.958 55.3546 624.179 50.5375 615.841 50.5375L579.158 51.0934C576.008 51.0934 578.417 53.8724 578.417 57.022C578.417 60.1716 580.825 61.6538 583.975 61.6538L616.212 60.9127C616.397 60.9127 614.544 59.6158 614.544 59.8011L609.727 88.7034C607.875 99.6344 617.694 102.784 626.031 95.7437L655.86 70.1763L654.192 69.6205L663.641 100.005ZM571.191 89.0739C555.443 88.7034 562.298 61.4685 578.787 61.8391C594.72 62.0243 587.124 89.2592 571.191 89.0739ZM571.006 100.375C601.575 100.931 611.024 51.6492 579.158 51.0934C547.847 50.5375 540.065 99.8197 571.006 100.375ZM521.909 46.4616C525.985 46.4616 529.505 42.9414 529.505 38.6802C529.505 34.4189 525.985 31.0841 521.909 31.0841C517.833 31.0841 514.127 34.6042 514.127 38.6802C514.127 42.7562 517.648 46.4616 521.909 46.4616ZM472.256 103.525C493.192 103.71 515.98 73.3259 519.13 62.3949L509.866 60.9127C505.234 73.3259 497.638 101.672 519.871 102.043C536.545 102.228 552.479 85.3685 563.595 70.1763C564.151 69.2499 564.706 68.1383 564.706 66.8414C564.706 63.6918 563.965 61.098 560.816 61.098C558.963 61.098 557.296 62.0243 556.184 63.5065C546.365 77.0313 530.802 90.9266 522.094 90.7414C511.904 90.5561 517.462 71.4732 519.871 64.9887C523.391 55.7251 512.831 53.5019 509.681 60.9127C506.531 68.6941 488.19 92.4088 475.035 92.2235C467.439 92.0383 464.29 83.8863 472.441 59.9864L486.707 17.7445C487.634 14.4097 485.41 10.519 481.334 10.519C478.741 10.519 476.517 12.1864 475.962 14.4097L461.696 56.4662C451.506 86.4801 455.211 103.155 472.256 103.525ZM447.43 42.5709L496.527 41.4593C499.306 41.4593 501.529 39.0507 501.529 36.2717C501.529 33.3073 499.306 31.0841 496.341 31.0841L447.245 32.1957C444.466 32.1957 442.242 34.4189 442.242 37.3833C442.242 40.1624 444.466 42.5709 447.43 42.5709ZM422.974 106.304C435.387 106.489 457.249 94.8173 472.441 53.8724C473.553 50.7228 472.071 48.3143 468.365 48.3143C466.142 48.3143 464.29 49.6112 463.548 51.6492C450.394 87.2212 431.682 96.1142 424.456 95.929C419.454 95.929 417.972 93.3352 418.713 85.5538C419.454 78.1429 410.376 74.9933 406.114 81.1073C401.297 87.777 394.442 94.2615 385.549 94.0763C370.172 93.891 376.471 67.0267 399.815 67.3972C408.338 67.5825 414.452 71.4732 417.045 76.6608C417.786 78.3282 419.454 79.6251 421.492 79.6251C424.271 79.6251 426.679 77.2166 426.679 74.4375C426.679 73.6964 426.494 72.9553 426.124 72.2143C421.862 63.6918 412.414 57.3926 400 57.2073C363.502 56.6515 353.497 104.451 383.326 104.822C397.036 105.193 410.005 94.0763 413.34 85.9243C412.599 86.8507 408.338 86.6654 408.523 84.4422C407.411 97.4111 410.931 106.119 422.974 106.304ZM335.897 104.266C335.897 115.012 347.569 117.606 347.569 103.34C347.569 89.0739 358.5 54.4282 361.464 45.1647L396.666 43.6825C405.929 43.1267 404.262 33.1221 397.036 33.3073L364.984 34.4189L368.875 22.7469C369.801 20.1531 370.542 17.9298 370.542 16.2624C370.542 13.4833 368.504 11.8159 365.911 11.8159C362.946 11.8159 360.352 12.7422 357.573 21.0794L352.942 35.16L330.153 36.0864C326.263 36.4569 323.483 38.1244 323.483 41.6445C323.483 45.5352 326.448 47.0174 330.709 46.8321L349.421 45.9058C345.901 56.6515 335.897 90.7414 335.897 104.266ZM186.939 78.6988C193.979 56.4662 212.877 54.984 212.877 62.9507C212.877 68.3236 203.984 77.0313 186.939 78.6988ZM113.942 150.955C142.844 152.437 159.704 111.492 160.63 80.5515C161.556 73.3259 153.96 70.3616 148.773 75.7344C141.918 83.1453 129.505 93.1499 119.685 93.1499C103.011 93.1499 116.165 59.8011 143.956 59.8011C149.514 59.8011 153.59 61.6538 156.184 64.0623C160.815 68.3236 170.82 62.0243 165.818 56.0957C161.927 51.4639 155.072 48.129 144.882 48.129C102.455 48.129 83.7426 105.007 116.721 105.007C134.692 105.007 151.367 88.3329 155.257 82.7747C154.516 83.5158 149.329 81.2925 149.699 79.4398L149.143 83.5158C148.958 107.045 134.322 141.506 116.536 139.838C113.386 139.468 112.089 137.43 112.089 134.836C112.089 128.907 122.094 119.273 145.067 113.53C159.518 109.824 152.293 101.487 143.4 104.081C111.163 113.53 99.6759 127.425 99.6759 137.8C99.6759 145.026 105.605 150.584 113.942 150.955ZM194.72 109.454C214.359 109.454 239 95.3732 251.228 77.9577C250.301 82.96 246.596 96.8553 246.596 101.487C246.596 110.01 254.748 109.454 261.232 102.784L288.097 75.5491L290.32 85.7391C293.284 99.4491 299.213 104.822 308.847 104.822C326.263 104.822 342.196 85.7391 349.421 74.8081L344.049 63.6918C339.787 74.8081 321.631 92.5941 311.626 92.5941C306.994 92.5941 304.771 89.815 303.289 83.7011L300.325 71.2879C297.916 60.7275 289.023 58.3189 279.018 68.1383L261.788 84.8127L264.382 69.991C266.235 59.2453 255.674 58.1337 250.116 65.915C241.779 77.0313 216.767 97.7817 196.387 97.7817C187.865 97.7817 185.456 93.7057 185.456 88.3329C230.848 84.998 239.185 47.2027 208.986 47.2027C172.858 47.2027 157.11 109.454 194.72 109.454Z",fill:"currentColor"})})}),a.jsxs("p",{className:Ne.settingsVersion,children:["v","3.0.2"]}),a.jsx("button",{className:Ne.themeToggle,onClick:u,title:c?"Switch to light mode":"Switch to dark mode",children:a.jsx("span",{className:Ne.themeIconWrapper,children:a.jsx("span",{className:Ne.themeIcon,children:c?a.jsx(Bg,{size:20}):a.jsx(Lg,{size:20})},c?"sun":"moon")})})]}),a.jsx("div",{className:Ne.divider}),a.jsxs("div",{className:Ne.settingsSection,children:[a.jsxs("div",{className:Ne.settingsRow,children:[a.jsxs("div",{className:Ne.settingsLabel,children:["Output Detail",a.jsx(To,{content:"Controls how much detail is included in the copied output"})]}),a.jsxs("button",{className:Ne.cycleButton,onClick:()=>{const de=(ji.findIndex(O=>O.value===o.outputDetail)+1)%ji.length;r({outputDetail:ji[de].value})},children:[a.jsx("span",{className:Ne.cycleButtonText,children:ji.find(T=>T.value===o.outputDetail)?.label},o.outputDetail),a.jsx("span",{className:Ne.cycleDots,children:ji.map(T=>a.jsx("span",{className:`${Ne.cycleDot} ${o.outputDetail===T.value?Ne.active:""}`},T.value))})]})]}),a.jsxs("div",{className:`${Ne.settingsRow} ${Ne.settingsRowMarginTop} ${_?"":Ne.settingsRowDisabled}`,children:[a.jsxs("div",{className:Ne.settingsLabel,children:["React Components",a.jsx(To,{content:_?"Include React component names in annotations":"Disabled — production builds minify component names, making detection unreliable. Use in development mode."})]}),a.jsx(gd,{checked:_&&o.reactEnabled,onChange:T=>r({reactEnabled:T.target.checked}),disabled:!_})]}),a.jsxs("div",{className:`${Ne.settingsRow} ${Ne.settingsRowMarginTop}`,children:[a.jsxs("div",{className:Ne.settingsLabel,children:["Hide Until Restart",a.jsx(To,{content:"Hides the toolbar until you open a new tab"})]}),a.jsx(gd,{checked:!1,onChange:T=>{T.target.checked&&z()}})]})]}),a.jsx("div",{className:Ne.divider}),a.jsxs("div",{className:Ne.settingsSection,children:[a.jsx("div",{className:`${Ne.settingsLabel} ${Ne.settingsLabelMarker}`,children:"Marker Color"}),a.jsx("div",{className:Ne.colorOptions,children:Ci.map(T=>a.jsx("button",{className:`${Ne.colorOption} ${o.annotationColorId===T.id?Ne.selected:""}`,style:{"--swatch":T.srgb,"--swatch-p3":T.p3},onClick:()=>r({annotationColorId:T.id}),title:T.label,type:"button"},T.id))})]}),a.jsx("div",{className:Ne.divider}),a.jsxs("div",{className:Ne.settingsSection,children:[a.jsx(bm,{className:"checkbox-field",label:"Clear on copy/send",checked:o.autoClearAfterCopy,onChange:T=>r({autoClearAfterCopy:T.target.checked}),tooltip:"Automatically clear annotations after copying"}),a.jsx(bm,{className:Ne.checkboxField,label:"Block page interactions",checked:o.blockInteractions,onChange:T=>r({blockInteractions:T.target.checked})})]}),a.jsx("div",{className:Ne.divider}),a.jsxs("button",{className:Ne.settingsNavLink,onClick:()=>k("automations"),children:[a.jsx("span",{children:"Manage MCP & Webhooks"}),a.jsxs("span",{className:Ne.settingsNavLinkRight,children:[b&&f!=="disconnected"&&a.jsx("span",{className:`${Ne.mcpNavIndicator} ${Ne[f]}`}),a.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M7.5 12.5L12 8L7.5 3.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})]})]}),a.jsxs("div",{className:`${Ne.settingsPage} ${Ne.automationsPage} ${M==="automations"?Ne.slideIn:""}`,children:[a.jsxs("button",{className:Ne.settingsBackButton,onClick:()=>k("main"),children:[a.jsx(Ug,{size:16}),a.jsx("span",{children:"Manage MCP & Webhooks"})]}),a.jsx("div",{className:Ne.divider}),a.jsxs("div",{className:Ne.settingsSection,children:[a.jsxs("div",{className:Ne.settingsRow,children:[a.jsxs("span",{className:Ne.automationHeader,children:["MCP Connection",a.jsx(To,{content:"Connect via Model Context Protocol to let AI agents like Claude Code receive annotations in real-time."})]}),b&&a.jsx("div",{className:`${Ne.mcpStatusDot} ${Ne[f]}`,title:f==="connected"?"Connected":f==="connecting"?"Connecting...":"Disconnected"})]}),a.jsxs("p",{className:Ne.automationDescription,style:{paddingBottom:6},children:["MCP connection allows agents to receive and act on annotations."," ",a.jsx("a",{href:"https://agentation.dev/mcp",target:"_blank",rel:"noopener noreferrer",className:Ne.learnMoreLink,children:"Learn more"})]})]}),a.jsx("div",{className:Ne.divider}),a.jsxs("div",{className:`${Ne.settingsSection} ${Ne.settingsSectionGrow}`,children:[a.jsxs("div",{className:Ne.settingsRow,children:[a.jsxs("span",{className:Ne.automationHeader,children:["Webhooks",a.jsx(To,{content:"Send annotation data to any URL endpoint when annotations change. Useful for custom integrations."})]}),a.jsxs("div",{className:Ne.autoSendContainer,children:[a.jsx("label",{htmlFor:"agentation-auto-send",className:`${Ne.autoSendLabel} ${o.webhooksEnabled?Ne.active:""} ${o.webhookUrl?"":Ne.disabled}`,children:"Auto-Send"}),a.jsx(gd,{id:"agentation-auto-send",checked:o.webhooksEnabled,onChange:T=>r({webhooksEnabled:T.target.checked}),disabled:!o.webhookUrl})]})]}),a.jsx("p",{className:Ne.automationDescription,children:"The webhook URL will receive live annotation changes and annotation data."}),a.jsx("textarea",{className:Ne.webhookUrlInput,placeholder:"Webhook URL",value:o.webhookUrl,onKeyDown:T=>T.stopPropagation(),onChange:T=>r({webhookUrl:T.target.value})})]})]})]})})}function yd(o,r="filtered"){const{name:c,path:u}=ws(o);if(r==="off")return{name:c,elementName:c,path:u,reactComponents:null};const _=u1(o,{mode:r});return{name:_.path?`${_.path} ${c}`:c,elementName:c,path:u,reactComponents:_.path}}var vm=!1,pd={outputDetail:"standard",autoClearAfterCopy:!1,annotationColorId:"blue",blockInteractions:!0,reactEnabled:!0,markerClickBehavior:"edit",webhookUrl:"",webhooksEnabled:!0},la=o=>{if(!o||!o.trim())return!1;try{const r=new URL(o.trim());return r.protocol==="http:"||r.protocol==="https:"}catch{return!1}},Ci=[{id:"indigo",label:"Indigo",srgb:"#6155F5",p3:"color(display-p3 0.38 0.33 0.96)"},{id:"blue",label:"Blue",srgb:"#0088FF",p3:"color(display-p3 0.00 0.53 1.00)"},{id:"cyan",label:"Cyan",srgb:"#00C3D0",p3:"color(display-p3 0.00 0.76 0.82)"},{id:"green",label:"Green",srgb:"#34C759",p3:"color(display-p3 0.20 0.78 0.35)"},{id:"yellow",label:"Yellow",srgb:"#FFCC00",p3:"color(display-p3 1.00 0.80 0.00)"},{id:"orange",label:"Orange",srgb:"#FF8D28",p3:"color(display-p3 1.00 0.55 0.16)"},{id:"red",label:"Red",srgb:"#FF383C",p3:"color(display-p3 1.00 0.22 0.24)"}],L1=()=>{if(typeof document>"u"||document.getElementById("agentation-color-tokens"))return;const o=document.createElement("style");o.id="agentation-color-tokens",o.textContent=[...Ci.map(r=>`
      [data-agentation-accent="${r.id}"] {
        --agentation-color-accent: ${r.srgb};
      }

      @supports (color: color(display-p3 0 0 0)) {
        [data-agentation-accent="${r.id}"] {
          --agentation-color-accent: ${r.p3};
        }
      }
    `),`:root {
      ${Ci.map(r=>`--agentation-color-${r.id}: ${r.srgb};`).join(`
`)}
    }`,`@supports (color: color(display-p3 0 0 0)) {
      :root {
        ${Ci.map(r=>`--agentation-color-${r.id}: ${r.p3};`).join(`
`)}
      }
    }`].join(""),document.head.appendChild(o)};L1();function Eo(o,r){let c=document.elementFromPoint(o,r);if(!c)return null;for(;c?.shadowRoot;){const u=c.shadowRoot.elementFromPoint(o,r);if(!u||u===c)break;c=u}return c}function xd(o){let r=o;for(;r&&r!==document.body;){const u=window.getComputedStyle(r).position;if(u==="fixed"||u==="sticky")return!0;r=r.parentElement}return!1}function No(o){return o.status!=="resolved"&&o.status!=="dismissed"}function ac(o){const r=Cd(o),c=r.found?r:v1(o);if(c.found&&c.source)return b1(c.source,"path")}function $1({demoAnnotations:o,demoDelay:r=1e3,enableDemoMode:c=!1,onAnnotationAdd:u,onAnnotationDelete:_,onAnnotationUpdate:f,onAnnotationsClear:b,onCopy:R,onSubmit:v,copyToClipboard:M=!0,endpoint:k,sessionId:z,onSessionCreated:T,webhookUrl:de,className:O}={}){const[te,H]=m.useState(!1),[I,he]=m.useState([]),[pe,be]=m.useState(!0),[ct,we]=m.useState(()=>Kp()),[ee,oe]=m.useState(!1),tt=m.useRef(null);m.useEffect(()=>{const g=j=>{const C=tt.current;C&&C.contains(j.target)&&j.stopPropagation()},p=["mousedown","click","pointerdown"];return p.forEach(j=>document.body.addEventListener(j,g)),()=>{p.forEach(j=>document.body.removeEventListener(j,g))}},[]);const[nt,Te]=m.useState(!1),[$e,Je]=m.useState(!1),[ke,Ye]=m.useState(null),[x,J]=m.useState({x:0,y:0}),[q,me]=m.useState(null),[Ee,S]=m.useState(!1),[Q,ue]=m.useState("idle"),[ye,qe]=m.useState(!1),[ut,dt]=m.useState(!1),[It,Ct]=m.useState(null),[Mn,dn]=m.useState(null),[_n,pn]=m.useState([]),[en,Ln]=m.useState(null),[Qn,yl]=m.useState(null),[Z,ze]=m.useState(null),[Pe,We]=m.useState(null),[ot,vt]=m.useState([]),[He,st]=m.useState(0),[xt,Ot]=m.useState(!1),[De,A]=m.useState(!1),[$,F]=m.useState(!1),[le,je]=m.useState(!1),[re,se]=m.useState(!1),[Oe,it]=m.useState("main"),[mt,Et]=m.useState(!1),[U,ce]=m.useState(!1),[_e,ve]=m.useState(!1),[xe,Xe]=m.useState([]),[Ze,Ie]=m.useState(null),yt=m.useRef(!1),[lt,sn]=m.useState(!1),[Rn,$n]=m.useState(!1),[il,Hn]=m.useState(1),[Ul,no]=m.useState("new-page"),[tn,En]=m.useState(""),[rn,Un]=m.useState(!1),[Ve,Yn]=m.useState(null),ks=m.useRef(!1),js=m.useRef({rearrange:null,placements:[]}),Yl=m.useRef({rearrange:null,placements:[]}),[lo,zo]=m.useState(0),[wa,Sa]=m.useState(0),[ao,Xl]=m.useState(0),[xn,Cs]=m.useState(0),ka=m.useRef(new Set),pl=m.useRef(new Set),Nn=m.useRef(null),Do=m.useRef(),Ms=U&&te&&!_e&&lt;m.useEffect(()=>{if(Ms){$n(!1);const g=vs(()=>{$n(!0)});return()=>cancelAnimationFrame(g)}else $n(!1)},[Ms]);const ja=m.useRef(new Map),oo=m.useRef(new Map),ql=m.useRef(),[Xn,rl]=m.useState(!1),[Kt,Ei]=m.useState([]),rc=m.useRef(Kt);rc.current=Kt;const[Ao,cc]=m.useState(null),Ca=m.useRef(null);m.useRef(!1),m.useRef([]),m.useRef(0),m.useRef(null),m.useRef(null),m.useRef(1);const[Ni,Wn]=m.useState(!1),Il=m.useRef(null),[ln,Ql]=m.useState([]),zn=m.useRef({cmd:!1,shift:!1}),jn=()=>{Et(!0)},Ti=()=>{Et(!1)},Ma=()=>{Ni||(Il.current=Fe(()=>Wn(!0),850))},uc=()=>{Il.current&&(clearTimeout(Il.current),Il.current=null),Wn(!1),Ti()};m.useEffect(()=>()=>{Il.current&&clearTimeout(Il.current)},[]);const[pt,Ri]=m.useState(()=>{try{const g=JSON.parse(localStorage.getItem("feedback-toolbar-settings")??"");return{...pd,...g,annotationColorId:Ci.find(p=>p.id===g.annotationColorId)?g.annotationColorId:pd.annotationColorId}}catch{return pd}}),[Pn,zi]=m.useState(!0),[Di,so]=m.useState(!1),zl=()=>{tt.current?.classList.add(ie.disableTransitions),zi(g=>!g),vs(()=>{tt.current?.classList.remove(ie.disableTransitions)})},Es=!1,Dl="off",[Gt,Wl]=m.useState(z??null),Ns=m.useRef(!1),[Gn,Gl]=m.useState(k?"connecting":"disconnected"),[Bt,cl]=m.useState(null),[Al,Ea]=m.useState(!1),[Vn,Oo]=m.useState(null),Na=m.useRef(!1),[Ts,Vl]=m.useState(new Set),[io,ro]=m.useState(new Set),[bn,xl]=m.useState(!1),[Bo,bl]=m.useState(!1),[Ol,Lo]=m.useState(!1),Zl=m.useRef(null),qn=m.useRef(null),Kl=m.useRef(null),Ta=m.useRef(null),$o=m.useRef(!1),Ai=m.useRef(0),Ho=m.useRef(null),Uo=m.useRef(null),Rs=8,dc=50,Oi=m.useRef(null),Bi=m.useRef(null),co=m.useRef(null),Ke=typeof window<"u"?window.location.pathname:"/";m.useEffect(()=>{if(le)se(!0);else{Et(!1),it("main");const g=Fe(()=>se(!1),0);return()=>clearTimeout(g)}},[le]);const zs=te&&pe&&!U;m.useEffect(()=>{if(zs){Je(!1),Te(!0),Vl(new Set);const g=Fe(()=>{Vl(p=>{const j=new Set(p);return I.forEach(C=>j.add(C.id)),j})},350);return()=>clearTimeout(g)}else if(nt){Je(!0);const g=Fe(()=>{Te(!1),Je(!1)},250);return()=>clearTimeout(g)}},[zs]),m.useEffect(()=>{A(!0),st(window.scrollY);const g=dd(Ke);he(g.filter(No)),vm||(so(!0),vm=!0,Fe(()=>so(!1),750));try{const p=localStorage.getItem("feedback-toolbar-theme");p!==null&&zi(p==="dark")}catch{}try{const p=localStorage.getItem("feedback-toolbar-position");if(p){const j=JSON.parse(p);typeof j.x=="number"&&typeof j.y=="number"&&cl(j)}}catch{}},[Ke]),m.useEffect(()=>{De&&localStorage.setItem("feedback-toolbar-settings",JSON.stringify(pt))},[pt,De]),m.useEffect(()=>{De&&localStorage.setItem("feedback-toolbar-theme",Pn?"dark":"light")},[Pn,De]);const Li=m.useRef(!1);m.useEffect(()=>{const g=Li.current;Li.current=Al,g&&!Al&&Bt&&De&&localStorage.setItem("feedback-toolbar-position",JSON.stringify(Bt))},[Al,Bt,De]),m.useEffect(()=>{if(!k||!De||Ns.current)return;Ns.current=!0,Gl("connecting"),(async()=>{try{const p=Vp(Ke),j=z||p;let C=!1;if(j)try{const E=await _m(k,j);Wl(E.id),Gl("connected"),_d(Ke,E.id),C=!0;const G=dd(Ke),fe=new Set(E.annotations.map(Ce=>Ce.id)),ge=G.filter(Ce=>!fe.has(Ce.id));if(ge.length>0){const Be=`${typeof window<"u"?window.location.origin:""}${Ke}`,at=(await Promise.allSettled(ge.map(Qe=>ps(k,E.id,{...Qe,sessionId:E.id,url:Be})))).map((Qe,Se)=>Qe.status==="fulfilled"?Qe.value:(console.warn("[Agentation] Failed to sync annotation:",Qe.reason),ge[Se])),gt=[...E.annotations,...at];he(gt.filter(No)),wi(Ke,gt.filter(No),E.id)}else he(E.annotations.filter(No)),wi(Ke,E.annotations.filter(No),E.id)}catch(E){console.warn("[Agentation] Could not join session, creating new:",E),Zp(Ke)}if(!C){const E=typeof window<"u"?window.location.href:"/",G=await fd(k,E);Wl(G.id),Gl("connected"),_d(Ke,G.id),T?.(G.id);const fe=Up(),ge=typeof window<"u"?window.location.origin:"",Ce=[];for(const[Be,Ue]of fe){const at=Ue.filter(Se=>!Se._syncedTo);if(at.length===0)continue;const gt=`${ge}${Be}`,Qe=Be===Ke;Ce.push((async()=>{try{const Se=Qe?G:await fd(k,gt),fn=(await Promise.allSettled(at.map(Rt=>ps(k,Se.id,{...Rt,sessionId:Se.id,url:gt})))).map((Rt,on)=>Rt.status==="fulfilled"?Rt.value:(console.warn("[Agentation] Failed to sync annotation:",Rt.reason),at[on])).filter(No);if(wi(Be,fn,Se.id),Qe){const Rt=new Set(at.map(on=>on.id));he(on=>{const Ae=on.filter(rt=>!Rt.has(rt.id));return[...fn,...Ae]})}}catch(Se){console.warn(`[Agentation] Failed to sync annotations for ${Be}:`,Se)}})())}await Promise.allSettled(Ce)}}catch(p){Gl("disconnected"),console.warn("[Agentation] Failed to initialize session, using local storage:",p)}})()},[k,z,De,T,Ke]),m.useEffect(()=>{if(!k||!De)return;const g=async()=>{try{(await fetch(`${k}/health`)).ok?Gl("connected"):Gl("disconnected")}catch{Gl("disconnected")}};g();const p=qg(g,1e4);return()=>clearInterval(p)},[k,De]),m.useEffect(()=>{if(!k||!De||!Gt)return;const g=new EventSource(`${k}/sessions/${Gt}/events`),p=["resolved","dismissed"],j=C=>{try{const E=JSON.parse(C.data);if(p.includes(E.payload?.status)){const G=E.payload.id,fe=E.payload.kind;if(fe==="placement"){for(const[ge,Ce]of ja.current)if(Ce===G){ja.current.delete(ge),Xe(Be=>Be.filter(Ue=>Ue.id!==ge));break}}else if(fe==="rearrange"){for(const[ge,Ce]of oo.current)if(Ce===G){oo.current.delete(ge),Yn(Be=>{if(!Be)return null;const Ue=Be.sections.filter(at=>at.id!==ge);return Ue.length===0?null:{...Be,sections:Ue}});break}}else ro(ge=>new Set(ge).add(G)),Fe(()=>{he(ge=>ge.filter(Ce=>Ce.id!==G)),ro(ge=>{const Ce=new Set(ge);return Ce.delete(G),Ce})},150)}}catch{}};return g.addEventListener("annotation.updated",j),()=>{g.removeEventListener("annotation.updated",j),g.close()}},[k,De,Gt]),m.useEffect(()=>{if(!k||!De)return;const g=Uo.current==="disconnected",p=Gn==="connected";Uo.current=Gn,g&&p&&(async()=>{try{const C=dd(Ke);if(C.length===0)return;const G=`${typeof window<"u"?window.location.origin:""}${Ke}`;let fe=Gt,ge=[];if(fe)try{ge=(await _m(k,fe)).annotations}catch{fe=null}fe||(fe=(await fd(k,G)).id,Wl(fe),_d(Ke,fe));const Ce=new Set(ge.map(Ue=>Ue.id)),Be=C.filter(Ue=>!Ce.has(Ue.id));if(Be.length>0){const at=(await Promise.allSettled(Be.map(Se=>ps(k,fe,{...Se,sessionId:fe,url:G})))).map((Se,an)=>Se.status==="fulfilled"?Se.value:(console.warn("[Agentation] Failed to sync annotation on reconnect:",Se.reason),Be[an])),Qe=[...ge,...at].filter(No);he(Qe),wi(Ke,Qe,fe)}}catch(C){console.warn("[Agentation] Failed to sync on reconnect:",C)}})()},[Gn,k,De,Gt,Ke]);const _c=m.useCallback(()=>{ee||(oe(!0),je(!1),H(!1),Fe(()=>{Fp(!0),we(!0),oe(!1)},400))},[ee]);m.useEffect(()=>{if(!c||!De||!o||o.length===0||I.length>0)return;const g=[];return g.push(Fe(()=>{H(!0)},r-200)),o.forEach((p,j)=>{const C=r+j*300;g.push(Fe(()=>{const E=document.querySelector(p.selector);if(!E)return;const G=E.getBoundingClientRect(),{name:fe,path:ge}=ws(E),Ce={id:`demo-${Date.now()}-${j}`,x:(G.left+G.width/2)/window.innerWidth*100,y:G.top+G.height/2+window.scrollY,comment:p.comment,element:fe,elementPath:ge,timestamp:Date.now(),selectedText:p.selectedText,boundingBox:{x:G.left,y:G.top+window.scrollY,width:G.width,height:G.height},nearbyText:bi(E),cssClasses:vi(E)};he(Be=>[...Be,Ce])},C))}),()=>{g.forEach(clearTimeout)}},[c,De,o,r]),m.useEffect(()=>{const g=()=>{st(window.scrollY),Ot(!0),co.current&&clearTimeout(co.current),co.current=Fe(()=>{Ot(!1)},150)};return window.addEventListener("scroll",g,{passive:!0}),()=>{window.removeEventListener("scroll",g),co.current&&clearTimeout(co.current)}},[]),m.useEffect(()=>{De&&I.length>0?Gt?wi(Ke,I,Gt):qm(Ke,I):De&&I.length===0&&localStorage.removeItem(ic(Ke))},[I,Ke,De,Gt]),m.useEffect(()=>{if(De&&!yt.current){yt.current=!0;const g=Yp(Ke);g.length>0&&Xe(g)}},[De,Ke]),m.useEffect(()=>{De&&yt.current&&!lt&&(xe.length>0?Xp(Ke,xe):qp(Ke))},[xe,Ke,De,lt]),m.useEffect(()=>{if(De&&!ks.current){ks.current=!0;const g=Ip(Ke);if(g){const p={...g,sections:g.sections.map(j=>({...j,currentRect:j.currentRect??{...j.originalRect}}))};Yn(p)}}},[De,Ke]),m.useEffect(()=>{De&&ks.current&&!lt&&(Ve?Qp(Ke,Ve):Wp(Ke))},[Ve,Ke,De,lt]);const Ds=m.useRef(!1);m.useEffect(()=>{if(De&&!Ds.current){Ds.current=!0;const g=Gp(Ke);g&&(Yl.current={rearrange:g.rearrange,placements:g.placements||[]},g.purpose&&En(g.purpose))}},[De,Ke]),m.useEffect(()=>{if(!De||!Ds.current)return;const g=Yl.current;lt?(Ve?.sections?.length??0)>0||xe.length>0||tn?dm(Ke,{rearrange:Ve,placements:xe,purpose:tn}):tc(Ke):(g.rearrange?.sections?.length??0)>0||g.placements.length>0||tn?dm(Ke,{rearrange:g.rearrange,placements:g.placements,purpose:tn}):tc(Ke)},[Ve,xe,tn,lt,Ke,De]),m.useEffect(()=>{U&&!Ve&&Yn({sections:[],originalOrder:[],detectedAt:Date.now()})},[U,Ve]),m.useEffect(()=>{if(!k||!Gt)return;const g=ja.current,p=new Set(xe.map(j=>j.id));for(const j of xe){if(g.has(j.id))continue;g.set(j.id,"");const C=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;ps(k,Gt,{id:j.id,x:j.x/window.innerWidth*100,y:j.y,comment:`Place ${j.type} at (${Math.round(j.x)}, ${Math.round(j.y)}), ${j.width}×${j.height}px${j.text?` — "${j.text}"`:""}`,element:`[design:${j.type}]`,elementPath:"[placement]",timestamp:j.timestamp,url:C,intent:"change",severity:"important",kind:"placement",placement:{componentType:j.type,width:j.width,height:j.height,scrollY:j.scrollY,text:j.text}}).then(E=>{g.has(j.id)&&g.set(j.id,E.id)}).catch(E=>{console.warn("[Agentation] Failed to sync placement annotation:",E),g.delete(j.id)})}for(const[j,C]of g)p.has(j)||(g.delete(j),C&&to(k,C).catch(()=>{}))},[xe,k,Gt,Ke]),m.useEffect(()=>{if(!(!k||!Gt))return ql.current&&clearTimeout(ql.current),ql.current=Fe(()=>{const g=oo.current;if(!Ve||Ve.sections.length===0){for(const[,C]of g)C&&to(k,C).catch(()=>{});g.clear();return}const p=new Set(Ve.sections.map(C=>C.id)),j=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;for(const C of Ve.sections){const E=C.originalRect,G=C.currentRect;if(!(Math.abs(E.x-G.x)>1||Math.abs(E.y-G.y)>1||Math.abs(E.width-G.width)>1||Math.abs(E.height-G.height)>1)){const Ce=g.get(C.id);Ce&&(g.delete(C.id),to(k,Ce).catch(()=>{}));continue}const ge=g.get(C.id);ge?fm(k,ge,{comment:`Move ${C.label} section (${C.tagName}) — from (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)} to (${Math.round(G.x)},${Math.round(G.y)}) ${Math.round(G.width)}×${Math.round(G.height)}`}).catch(Ce=>{console.warn("[Agentation] Failed to update rearrange annotation:",Ce)}):(g.set(C.id,""),ps(k,Gt,{id:C.id,x:G.x/window.innerWidth*100,y:G.y,comment:`Move ${C.label} section (${C.tagName}) — from (${Math.round(E.x)},${Math.round(E.y)}) ${Math.round(E.width)}×${Math.round(E.height)} to (${Math.round(G.x)},${Math.round(G.y)}) ${Math.round(G.width)}×${Math.round(G.height)}`,element:C.selector,elementPath:"[rearrange]",timestamp:Date.now(),url:j,intent:"change",severity:"important",kind:"rearrange",rearrange:{selector:C.selector,label:C.label,tagName:C.tagName,originalRect:E,currentRect:G}}).then(Ce=>{g.has(C.id)&&g.set(C.id,Ce.id)}).catch(Ce=>{console.warn("[Agentation] Failed to sync rearrange annotation:",Ce),g.delete(C.id)}))}for(const[C,E]of g)p.has(C)||(g.delete(C),E&&to(k,E).catch(()=>{}))},300),()=>{ql.current&&clearTimeout(ql.current)}},[Ve,k,Gt,Ke]);const Fl=m.useRef(new Map);m.useLayoutEffect(()=>{const g=Ve?.sections??[],p=new Set;if((U||_e)&&te)for(const j of g){p.add(j.id);try{const C=document.querySelector(j.selector);if(!C)continue;if(!Fl.current.has(j.id)){const E={transform:C.style.transform,transformOrigin:C.style.transformOrigin,opacity:C.style.opacity,position:C.style.position,zIndex:C.style.zIndex,display:C.style.display},G=[];let fe=C.parentElement;for(;fe&&fe!==document.body;){const Ce=getComputedStyle(fe);(Ce.overflow!=="visible"||Ce.overflowX!=="visible"||Ce.overflowY!=="visible")&&(G.push({el:fe,overflow:fe.style.overflow}),fe.style.overflow="visible"),fe=fe.parentElement}getComputedStyle(C).display==="inline"&&(C.style.display="inline-block"),Fl.current.set(j.id,{el:C,origStyles:E,ancestors:G}),C.style.transformOrigin="top left",C.style.zIndex="9999"}}catch{}}for(const[j,C]of Fl.current)if(!p.has(j)){const{el:E,origStyles:G,ancestors:fe}=C;E.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",E.style.transform=G.transform,E.style.transformOrigin=G.transformOrigin,E.style.opacity=G.opacity,E.style.position=G.position,E.style.zIndex=G.zIndex,Fl.current.delete(j),Fe(()=>{E.style.transition="",E.style.display=G.display;for(const ge of fe)ge.el.style.overflow=ge.overflow},450)}},[Ve,U,_e,te]),m.useEffect(()=>()=>{for(const[,g]of Fl.current){const{el:p,origStyles:j,ancestors:C}=g;p.style.transition="transform 0.4s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)",p.style.transform=j.transform,p.style.transformOrigin=j.transformOrigin,p.style.opacity=j.opacity,p.style.position=j.position,p.style.zIndex=j.zIndex,Fe(()=>{p.style.transition="",p.style.display=j.display;for(const E of C)E.el.style.overflow=E.overflow},450)}Fl.current.clear()},[]);const Yo=m.useCallback(()=>{ve(!0),ce(!1),Ie(null),clearTimeout(Do.current),Do.current=Fe(()=>{ve(!1)},300)},[]),$i=m.useCallback(()=>{U&&(ve(!0),ce(!1),Ie(null),clearTimeout(Do.current),Do.current=Fe(()=>{ve(!1)},300)),H(!1)},[U]),Hi=m.useCallback(()=>{$||(Qg(),F(!0))},[$]),uo=m.useCallback(()=>{$&&(Fh(),F(!1))},[$]),As=m.useCallback(()=>{$?uo():Hi()},[$,Hi,uo]),Ui=m.useCallback(()=>{if(ln.length===0)return;const g=ln[0],p=g.element,j=ln.length>1,C=ln.map(E=>E.element.getBoundingClientRect());if(j){const E={left:Math.min(...C.map(Se=>Se.left)),top:Math.min(...C.map(Se=>Se.top)),right:Math.max(...C.map(Se=>Se.right)),bottom:Math.max(...C.map(Se=>Se.bottom))},G=ln.slice(0,5).map(Se=>Se.name).join(", "),fe=ln.length>5?` +${ln.length-5} more`:"",ge=C.map(Se=>({x:Se.left,y:Se.top+window.scrollY,width:Se.width,height:Se.height})),Be=ln[ln.length-1].element,Ue=C[C.length-1],at=Ue.left+Ue.width/2,gt=Ue.top+Ue.height/2,Qe=xd(Be);me({x:at/window.innerWidth*100,y:Qe?gt:gt+window.scrollY,clientY:gt,element:`${ln.length} elements: ${G}${fe}`,elementPath:"multi-select",boundingBox:{x:E.left,y:E.top+window.scrollY,width:E.right-E.left,height:E.bottom-E.top},isMultiSelect:!0,isFixed:Qe,elementBoundingBoxes:ge,multiSelectElements:ln.map(Se=>Se.element),targetElement:Be,fullPath:Jr(p),accessibility:Fr(p),computedStyles:Kr(p),computedStylesObj:Zr(p),nearbyElements:Vr(p),cssClasses:vi(p),nearbyText:bi(p),sourceFile:ac(p)})}else{const E=C[0],G=xd(p);me({x:E.left/window.innerWidth*100,y:G?E.top:E.top+window.scrollY,clientY:E.top,element:g.name,elementPath:g.path,boundingBox:{x:E.left,y:G?E.top:E.top+window.scrollY,width:E.width,height:E.height},isFixed:G,fullPath:Jr(p),accessibility:Fr(p),computedStyles:Kr(p),computedStylesObj:Zr(p),nearbyElements:Vr(p),cssClasses:vi(p),nearbyText:bi(p),reactComponents:g.reactComponents,sourceFile:ac(p)})}Ql([]),Ye(null)},[ln]);m.useEffect(()=>{te||(me(null),ze(null),We(null),vt([]),Ye(null),je(!1),Ql([]),zn.current={cmd:!1,shift:!1},$&&uo())},[te,$,uo]),m.useEffect(()=>()=>{Fh()},[]),m.useEffect(()=>{if(!te)return;const g=["p","span","h1","h2","h3","h4","h5","h6","li","td","th","label","blockquote","figcaption","caption","legend","dt","dd","pre","code","em","strong","b","i","u","s","a","time","address","cite","q","abbr","dfn","mark","small","sub","sup","[contenteditable]"].join(", "),p=":not([data-agentation-root]):not([data-agentation-root] *)",j=document.createElement("style");return j.id="feedback-cursor-styles",j.textContent=`
      body ${p} {
        cursor: crosshair !important;
      }

      body :is(${g})${p} {
        cursor: text !important;
      }
    `,document.head.appendChild(j),()=>{const C=document.getElementById("feedback-cursor-styles");C&&C.remove()}},[te]),m.useEffect(()=>{if(Ao!==null&&te)return document.documentElement.setAttribute("data-drawing-hover",""),()=>document.documentElement.removeAttribute("data-drawing-hover")},[Ao,te]),m.useEffect(()=>{if(!te||q||Xn||U)return;const g=p=>{const j=p.composedPath()[0]||p.target;if(Fn(j,"[data-feedback-toolbar]")){Ye(null);return}const C=Eo(p.clientX,p.clientY);if(!C||Fn(C,"[data-feedback-toolbar]")){Ye(null);return}const{name:E,elementName:G,path:fe,reactComponents:ge}=yd(C,Dl),Ce=C.getBoundingClientRect();Ye({element:E,elementName:G,elementPath:fe,rect:Ce,reactComponents:ge}),J({x:p.clientX,y:p.clientY})};return document.addEventListener("mousemove",g),()=>document.removeEventListener("mousemove",g)},[te,q,Xn,U,Dl,Kt]);const Xo=m.useCallback(g=>{if(ze(g),Ct(null),dn(null),pn([]),g.elementBoundingBoxes?.length){const p=[];for(const j of g.elementBoundingBoxes){const C=j.x+j.width/2,E=j.y+j.height/2-window.scrollY,G=Eo(C,E);G&&p.push(G)}vt(p),We(null)}else if(g.boundingBox){const p=g.boundingBox,j=p.x+p.width/2,C=g.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,E=Eo(j,C);if(E){const G=E.getBoundingClientRect(),fe=G.width/p.width,ge=G.height/p.height;fe<.5||ge<.5?We(null):We(E)}else We(null);vt([])}else We(null),vt([])},[]);m.useEffect(()=>{if(!te||Xn||U)return;const g=p=>{if($o.current){$o.current=!1;return}const j=p.composedPath()[0]||p.target;if(Fn(j,"[data-feedback-toolbar]")||Fn(j,"[data-annotation-popup]")||Fn(j,"[data-annotation-marker]"))return;if(p.metaKey&&p.shiftKey&&!q&&!Z){p.preventDefault(),p.stopPropagation();const At=Eo(p.clientX,p.clientY);if(!At)return;const fn=At.getBoundingClientRect(),{name:Rt,path:on,reactComponents:Ae}=yd(At,Dl),rt=ln.findIndex(Vt=>Vt.element===At);rt>=0?Ql(Vt=>Vt.filter((Ft,el)=>el!==rt)):Ql(Vt=>[...Vt,{element:At,rect:fn,name:Rt,path:on,reactComponents:Ae??void 0}]);return}const C=Fn(j,"button, a, input, select, textarea, [role='button'], [onclick]");if(pt.blockInteractions&&C&&(p.preventDefault(),p.stopPropagation()),q){if(C&&!pt.blockInteractions)return;p.preventDefault(),Oi.current?.shake();return}if(Z){if(C&&!pt.blockInteractions)return;p.preventDefault(),Bi.current?.shake();return}p.preventDefault();const E=Eo(p.clientX,p.clientY);if(!E)return;const{name:G,path:fe,reactComponents:ge}=yd(E,Dl),Ce=E.getBoundingClientRect(),Be=p.clientX/window.innerWidth*100,Ue=xd(E),at=Ue?p.clientY:p.clientY+window.scrollY,gt=window.getSelection();let Qe;gt&&gt.toString().trim().length>0&&(Qe=gt.toString().trim().slice(0,500));const Se=Zr(E),an=Kr(E);me({x:Be,y:at,clientY:p.clientY,element:G,elementPath:fe,selectedText:Qe,boundingBox:{x:Ce.left,y:Ue?Ce.top:Ce.top+window.scrollY,width:Ce.width,height:Ce.height},nearbyText:bi(E),cssClasses:vi(E),isFixed:Ue,fullPath:Jr(E),accessibility:Fr(E),computedStyles:an,computedStylesObj:Se,nearbyElements:Vr(E),reactComponents:ge??void 0,sourceFile:ac(E),targetElement:E}),Ye(null)};return document.addEventListener("click",g,!0),()=>document.removeEventListener("click",g,!0)},[te,Xn,U,q,Z,pt.blockInteractions,Dl,ln]),m.useEffect(()=>{if(!te)return;const g=C=>{C.key==="Meta"&&(zn.current.cmd=!0),C.key==="Shift"&&(zn.current.shift=!0)},p=C=>{const E=zn.current.cmd&&zn.current.shift;C.key==="Meta"&&(zn.current.cmd=!1),C.key==="Shift"&&(zn.current.shift=!1);const G=zn.current.cmd&&zn.current.shift;E&&!G&&ln.length>0&&Ui()},j=()=>{zn.current={cmd:!1,shift:!1},Ql([])};return document.addEventListener("keydown",g),document.addEventListener("keyup",p),window.addEventListener("blur",j),()=>{document.removeEventListener("keydown",g),document.removeEventListener("keyup",p),window.removeEventListener("blur",j)}},[te,ln,Ui]),m.useEffect(()=>{if(!te||q||Xn||U)return;const g=p=>{const j=p.composedPath()[0]||p.target;Fn(j,"[data-feedback-toolbar]")||Fn(j,"[data-annotation-marker]")||Fn(j,"[data-annotation-popup]")||new Set(["P","SPAN","H1","H2","H3","H4","H5","H6","LI","TD","TH","LABEL","BLOCKQUOTE","FIGCAPTION","CAPTION","LEGEND","DT","DD","PRE","CODE","EM","STRONG","B","I","U","S","A","TIME","ADDRESS","CITE","Q","ABBR","DFN","MARK","SMALL","SUB","SUP"]).has(j.tagName)||j.isContentEditable||(p.preventDefault(),Zl.current={x:p.clientX,y:p.clientY})};return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[te,q,Xn,U]),m.useEffect(()=>{if(!te||q)return;const g=p=>{if(!Zl.current)return;const j=p.clientX-Zl.current.x,C=p.clientY-Zl.current.y,E=j*j+C*C,G=Rs*Rs;if(!Ol&&E>=G&&(qn.current=Zl.current,Lo(!0),p.preventDefault()),(Ol||E>=G)&&qn.current){if(Kl.current){const Ae=Math.min(qn.current.x,p.clientX),rt=Math.min(qn.current.y,p.clientY),Vt=Math.abs(p.clientX-qn.current.x),Ft=Math.abs(p.clientY-qn.current.y);Kl.current.style.transform=`translate(${Ae}px, ${rt}px)`,Kl.current.style.width=`${Vt}px`,Kl.current.style.height=`${Ft}px`}const fe=Date.now();if(fe-Ai.current<dc)return;Ai.current=fe;const ge=qn.current.x,Ce=qn.current.y,Be=Math.min(ge,p.clientX),Ue=Math.min(Ce,p.clientY),at=Math.max(ge,p.clientX),gt=Math.max(Ce,p.clientY),Qe=(Be+at)/2,Se=(Ue+gt)/2,an=new Set,At=[[Be,Ue],[at,Ue],[Be,gt],[at,gt],[Qe,Se],[Qe,Ue],[Qe,gt],[Be,Se],[at,Se]];for(const[Ae,rt]of At){const Vt=document.elementsFromPoint(Ae,rt);for(const Ft of Vt)Ft instanceof HTMLElement&&an.add(Ft)}const fn=document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th, div, span, section, article, aside, nav");for(const Ae of fn)if(Ae instanceof HTMLElement){const rt=Ae.getBoundingClientRect(),Vt=rt.left+rt.width/2,Ft=rt.top+rt.height/2,el=Vt>=Be&&Vt<=at&&Ft>=Ue&&Ft<=gt,Zn=Math.min(rt.right,at)-Math.max(rt.left,Be),hn=Math.min(rt.bottom,gt)-Math.max(rt.top,Ue),_o=Zn>0&&hn>0?Zn*hn:0,tl=rt.width*rt.height,wl=tl>0?_o/tl:0;(el||wl>.5)&&an.add(Ae)}const Rt=[],on=new Set(["BUTTON","A","INPUT","IMG","P","H1","H2","H3","H4","H5","H6","LI","LABEL","TD","TH","SECTION","ARTICLE","ASIDE","NAV"]);for(const Ae of an){if(Fn(Ae,"[data-feedback-toolbar]")||Fn(Ae,"[data-annotation-marker]"))continue;const rt=Ae.getBoundingClientRect();if(!(rt.width>window.innerWidth*.8&&rt.height>window.innerHeight*.5)&&!(rt.width<10||rt.height<10)&&rt.left<at&&rt.right>Be&&rt.top<gt&&rt.bottom>Ue){const Vt=Ae.tagName;let Ft=on.has(Vt);if(!Ft&&(Vt==="DIV"||Vt==="SPAN")){const el=Ae.textContent&&Ae.textContent.trim().length>0,Zn=Ae.onclick!==null||Ae.getAttribute("role")==="button"||Ae.getAttribute("role")==="link"||Ae.classList.contains("clickable")||Ae.hasAttribute("data-clickable");(el||Zn)&&!Ae.querySelector("p, h1, h2, h3, h4, h5, h6, button, a")&&(Ft=!0)}if(Ft){let el=!1;for(const Zn of Rt)if(Zn.left<=rt.left&&Zn.right>=rt.right&&Zn.top<=rt.top&&Zn.bottom>=rt.bottom){el=!0;break}el||Rt.push(rt)}}}if(Ta.current){const Ae=Ta.current;for(;Ae.children.length>Rt.length;)Ae.removeChild(Ae.lastChild);Rt.forEach((rt,Vt)=>{let Ft=Ae.children[Vt];Ft||(Ft=document.createElement("div"),Ft.className=ie.selectedElementHighlight,Ae.appendChild(Ft)),Ft.style.transform=`translate(${rt.left}px, ${rt.top}px)`,Ft.style.width=`${rt.width}px`,Ft.style.height=`${rt.height}px`})}}};return document.addEventListener("mousemove",g,{passive:!0}),()=>document.removeEventListener("mousemove",g)},[te,q,Ol,Rs]),m.useEffect(()=>{if(!te)return;const g=p=>{const j=Ol,C=qn.current;if(Ol&&C){$o.current=!0;const E=Math.min(C.x,p.clientX),G=Math.min(C.y,p.clientY),fe=Math.max(C.x,p.clientX),ge=Math.max(C.y,p.clientY),Ce=[];document.querySelectorAll("button, a, input, img, p, h1, h2, h3, h4, h5, h6, li, label, td, th").forEach(Qe=>{if(!(Qe instanceof HTMLElement)||Fn(Qe,"[data-feedback-toolbar]")||Fn(Qe,"[data-annotation-marker]"))return;const Se=Qe.getBoundingClientRect();Se.width>window.innerWidth*.8&&Se.height>window.innerHeight*.5||Se.width<10||Se.height<10||Se.left<fe&&Se.right>E&&Se.top<ge&&Se.bottom>G&&Ce.push({element:Qe,rect:Se})});const Ue=Ce.filter(({element:Qe})=>!Ce.some(({element:Se})=>Se!==Qe&&Qe.contains(Se))),at=p.clientX/window.innerWidth*100,gt=p.clientY+window.scrollY;if(Ue.length>0){const Qe=Ue.reduce((on,{rect:Ae})=>({left:Math.min(on.left,Ae.left),top:Math.min(on.top,Ae.top),right:Math.max(on.right,Ae.right),bottom:Math.max(on.bottom,Ae.bottom)}),{left:1/0,top:1/0,right:-1/0,bottom:-1/0}),Se=Ue.slice(0,5).map(({element:on})=>ws(on).name).join(", "),an=Ue.length>5?` +${Ue.length-5} more`:"",At=Ue[0].element,fn=Zr(At),Rt=Kr(At);me({x:at,y:gt,clientY:p.clientY,element:`${Ue.length} elements: ${Se}${an}`,elementPath:"multi-select",boundingBox:{x:Qe.left,y:Qe.top+window.scrollY,width:Qe.right-Qe.left,height:Qe.bottom-Qe.top},isMultiSelect:!0,fullPath:Jr(At),accessibility:Fr(At),computedStyles:Rt,computedStylesObj:fn,nearbyElements:Vr(At),cssClasses:vi(At),nearbyText:bi(At),sourceFile:ac(At)})}else{const Qe=Math.abs(fe-E),Se=Math.abs(ge-G);Qe>20&&Se>20&&me({x:at,y:gt,clientY:p.clientY,element:"Area selection",elementPath:`region at (${Math.round(E)}, ${Math.round(G)})`,boundingBox:{x:E,y:G+window.scrollY,width:Qe,height:Se},isMultiSelect:!0})}Ye(null)}else j&&($o.current=!0);Zl.current=null,qn.current=null,Lo(!1),Ta.current&&(Ta.current.innerHTML="")};return document.addEventListener("mouseup",g),()=>document.removeEventListener("mouseup",g)},[te,Ol]);const vl=m.useCallback(async(g,p,j)=>{const C=pt.webhookUrl||de;if(!C||!pt.webhooksEnabled&&!j)return!1;try{return(await fetch(C,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({event:g,timestamp:Date.now(),url:typeof window<"u"?window.location.href:void 0,...p})})).ok}catch(E){return console.warn("[Agentation] Webhook failed:",E),!1}},[de,pt.webhookUrl,pt.webhooksEnabled]),fc=m.useCallback(g=>{if(!q)return;const p={id:Date.now().toString(),x:q.x,y:q.y,comment:g,element:q.element,elementPath:q.elementPath,timestamp:Date.now(),selectedText:q.selectedText,boundingBox:q.boundingBox,nearbyText:q.nearbyText,cssClasses:q.cssClasses,isMultiSelect:q.isMultiSelect,isFixed:q.isFixed,fullPath:q.fullPath,accessibility:q.accessibility,computedStyles:q.computedStyles,nearbyElements:q.nearbyElements,reactComponents:q.reactComponents,sourceFile:q.sourceFile,elementBoundingBoxes:q.elementBoundingBoxes,...k&&Gt?{sessionId:Gt,url:typeof window<"u"?window.location.href:void 0,status:"pending"}:{}};he(j=>[...j,p]),Ho.current=p.id,Fe(()=>{Ho.current=null},300),Fe(()=>{Vl(j=>new Set(j).add(p.id))},250),u?.(p),vl("annotation.add",{annotation:p}),xl(!0),Fe(()=>{me(null),xl(!1)},150),window.getSelection()?.removeAllRanges(),k&&Gt&&ps(k,Gt,p).then(j=>{j.id!==p.id&&(he(C=>C.map(E=>E.id===p.id?{...E,id:j.id}:E)),Vl(C=>{const E=new Set(C);return E.delete(p.id),E.add(j.id),E}))}).catch(j=>{console.warn("[Agentation] Failed to sync annotation:",j)})},[q,u,vl,k,Gt]),Os=m.useCallback(()=>{xl(!0),Fe(()=>{me(null),xl(!1)},150)},[]),Bs=m.useCallback(g=>{const p=I.findIndex(C=>C.id===g),j=I[p];Z?.id===g&&(bl(!0),Fe(()=>{ze(null),We(null),vt([]),bl(!1)},150)),Ln(g),ro(C=>new Set(C).add(g)),j&&(_?.(j),vl("annotation.delete",{annotation:j})),k&&to(k,g).catch(C=>{console.warn("[Agentation] Failed to delete annotation from server:",C)}),Fe(()=>{he(C=>C.filter(E=>E.id!==g)),ro(C=>{const E=new Set(C);return E.delete(g),E}),Ln(null),p<I.length-1&&(yl(p),Fe(()=>yl(null),200))},150)},[I,Z,_,vl,k]),qo=m.useCallback(g=>{if(!g){Ct(null),dn(null),pn([]);return}if(Ct(g.id),g.elementBoundingBoxes?.length){const p=[];for(const j of g.elementBoundingBoxes){const C=j.x+j.width/2,E=j.y+j.height/2-window.scrollY,fe=document.elementsFromPoint(C,E).find(ge=>!ge.closest("[data-annotation-marker]")&&!ge.closest("[data-agentation-root]"));fe&&p.push(fe)}pn(p),dn(null)}else if(g.boundingBox){const p=g.boundingBox,j=p.x+p.width/2,C=g.isFixed?p.y+p.height/2:p.y+p.height/2-window.scrollY,E=Eo(j,C);if(E){const G=E.getBoundingClientRect(),fe=G.width/p.width,ge=G.height/p.height;fe<.5||ge<.5?dn(null):dn(E)}else dn(null);pn([])}else dn(null),pn([])},[]),hc=m.useCallback(g=>{if(!Z)return;const p={...Z,comment:g};he(j=>j.map(C=>C.id===Z.id?p:C)),f?.(p),vl("annotation.update",{annotation:p}),k&&fm(k,Z.id,{comment:g}).catch(j=>{console.warn("[Agentation] Failed to update annotation on server:",j)}),bl(!0),Fe(()=>{ze(null),We(null),vt([]),bl(!1)},150)},[Z,f,vl,k]),Ls=m.useCallback(()=>{bl(!0),Fe(()=>{ze(null),We(null),vt([]),bl(!1)},150)},[]),ul=m.useCallback(()=>{const g=I.length,p=xe.length>0||!!Ve;if(g===0&&Kt.length===0&&!p)return;if(b?.(I),vl("annotations.clear",{annotations:I}),k){Promise.all(I.map(E=>to(k,E.id).catch(G=>{console.warn("[Agentation] Failed to delete annotation from server:",G)})));for(const[,E]of ja.current)E&&to(k,E).catch(()=>{});ja.current.clear();for(const[,E]of oo.current)E&&to(k,E).catch(()=>{});oo.current.clear()}dt(!0),qe(!0),Ei([]);const j=Ca.current;if(j){const E=j.getContext("2d");E&&E.clearRect(0,0,j.width,j.height)}(xe.length>0||Ve)&&(Xl(E=>E+1),Cs(E=>E+1),Fe(()=>{Xe([]),Yn(null)},200)),lt&&sn(!1),tn&&En(""),Yl.current={rearrange:null,placements:[]},tc(Ke);const C=g*30+200;Fe(()=>{he([]),Vl(new Set),localStorage.removeItem(ic(Ke)),dt(!1)},C),Fe(()=>qe(!1),1500)},[Ke,I,Kt,xe,Ve,lt,tn,b,vl,k]),$s=m.useCallback(async()=>{const g=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke,p=U&&lt;let j;if(p){if(xe.length===0&&!Ve&&!tn)return;j=""}else{if(j=gm(I,g,pt.outputDetail),!j&&Kt.length===0&&xe.length===0&&!Ve)return;j||(j=`## Page Feedback: ${g}
`)}if(!p&&Kt.length>0){const C=new Set;for(const ge of I)ge.drawingIndex!=null&&C.add(ge.drawingIndex);const E=Ca.current;E&&(E.style.visibility="hidden");const G=[],fe=window.scrollY;for(let ge=0;ge<Kt.length;ge++){if(C.has(ge))continue;const Ce=Kt[ge];if(Ce.points.length<2)continue;const Be=Ce.fixed?Ce.points:Ce.points.map(Zt=>({x:Zt.x,y:Zt.y-fe}));let Ue=1/0,at=1/0,gt=-1/0,Qe=-1/0;for(const Zt of Be)Ue=Math.min(Ue,Zt.x),at=Math.min(at,Zt.y),gt=Math.max(gt,Zt.x),Qe=Math.max(Qe,Zt.y);const Se=gt-Ue,an=Qe-at,At=Math.hypot(Se,an),fn=Be[0],Rt=Be[Be.length-1],on=Math.hypot(Rt.x-fn.x,Rt.y-fn.y);let Ae;const rt=on<At*.35,Vt=Se/Math.max(an,1);if(rt&&At>20){const Zt=Math.max(Se,an)*.15;let Sl=0;for(const Jl of Be){const sa=Jl.x-Ue<Zt,za=gt-Jl.x<Zt,Hs=Jl.y-at<Zt,Ii=Qe-Jl.y<Zt;(sa||za)&&(Hs||Ii)&&Sl++}Ae=Sl>Be.length*.15?"box":"circle"}else Vt>3&&an<40?Ae="underline":on>At*.5?Ae="arrow":Ae="drawing";const Ft=Math.min(10,Be.length),el=Math.max(1,Math.floor(Be.length/Ft)),Zn=new Set,hn=[],_o=[fn];for(let Zt=el;Zt<Be.length-1;Zt+=el)_o.push(Be[Zt]);_o.push(Rt);for(const Zt of _o){const Sl=Eo(Zt.x,Zt.y);if(!Sl||Zn.has(Sl)||Fn(Sl,"[data-feedback-toolbar]"))continue;Zn.add(Sl);const{name:Jl}=ws(Sl);hn.includes(Jl)||hn.push(Jl)}const tl=`${Math.round(Ue)},${Math.round(at)} → ${Math.round(gt)},${Math.round(Qe)}`;let wl;(Ae==="circle"||Ae==="box")&&hn.length>0?wl=`${Ae==="box"?"Boxed":"Circled"} **${hn[0]}**${hn.length>1?` (and ${hn.slice(1).join(", ")})`:""} (region: ${tl})`:Ae==="underline"&&hn.length>0?wl=`Underlined **${hn[0]}** (${tl})`:Ae==="arrow"&&hn.length>=2?wl=`Arrow from **${hn[0]}** to **${hn[hn.length-1]}** (${Math.round(fn.x)},${Math.round(fn.y)} → ${Math.round(Rt.x)},${Math.round(Rt.y)})`:hn.length>0?wl=`${Ae==="arrow"?"Arrow":"Drawing"} near **${hn.join("**, **")}** (region: ${tl})`:wl=`Drawing at ${tl}`,G.push(wl)}E&&(E.style.visibility=""),G.length>0&&(j+=`
**Drawings:**
`,G.forEach((ge,Ce)=>{j+=`${Ce+1}. ${ge}
`}))}if((xe.length>0||p&&tn)&&(j+=`
`+cm(xe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:lt,wireframePurpose:tn||void 0},pt.outputDetail)),Ve){const C=um(Ve,pt.outputDetail,{width:window.innerWidth,height:window.innerHeight});C&&(j+=`
`+C)}if(M)try{await navigator.clipboard.writeText(j)}catch{}R?.(j),S(!0),Fe(()=>S(!1),2e3),pt.autoClearAfterCopy&&Fe(()=>ul(),500)},[I,Kt,xe,Ve,lt,U,Ul,tn,Ke,pt.outputDetail,Dl,pt.autoClearAfterCopy,ul,M,R]),Io=m.useCallback(async()=>{const g=typeof window<"u"?window.location.pathname+window.location.search+window.location.hash:Ke;let p=gm(I,g,pt.outputDetail);if(!p&&xe.length===0&&!Ve)return;if(p||(p=`## Page Feedback: ${g}
`),xe.length>0&&(p+=`
`+cm(xe,{width:window.innerWidth,height:window.innerHeight},{blankCanvas:lt,wireframePurpose:tn||void 0},pt.outputDetail)),Ve){const C=um(Ve,pt.outputDetail,{width:window.innerWidth,height:window.innerHeight});C&&(p+=`
`+C)}v&&v(p,I),ue("sending"),await new Promise(C=>Fe(C,150));const j=await vl("submit",{output:p,annotations:I},!0);ue(j?"sent":"failed"),Fe(()=>ue("idle"),2500),j&&pt.autoClearAfterCopy&&Fe(()=>ul(),500)},[v,vl,I,xe,Ve,lt,Ul,Ke,pt.outputDetail,Dl,pt.autoClearAfterCopy,ul]);m.useEffect(()=>{if(!Vn)return;const g=10,p=C=>{const E=C.clientX-Vn.x,G=C.clientY-Vn.y,fe=Math.sqrt(E*E+G*G);if(!Al&&fe>g&&Ea(!0),Al||fe>g){let ge=Vn.toolbarX+E,Ce=Vn.toolbarY+G;const Be=20,Ue=337,at=44,Qe=Ue-(te?Gn==="connected"?297:257:44),Se=Be-Qe,an=window.innerWidth-Be-Ue;ge=Math.max(Se,Math.min(an,ge)),Ce=Math.max(Be,Math.min(window.innerHeight-at-Be,Ce)),cl({x:ge,y:Ce})}},j=()=>{Al&&(Na.current=!0),Ea(!1),Oo(null)};return document.addEventListener("mousemove",p),document.addEventListener("mouseup",j),()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",j)}},[Vn,Al,te,Gn]);const Yi=m.useCallback(g=>{if(g.target.closest("button")||g.target.closest("[data-agentation-settings-panel]"))return;const p=g.currentTarget.parentElement;if(!p)return;const j=p.getBoundingClientRect(),C=Bt?.x??j.left,E=Bt?.y??j.top;Oo({x:g.clientX,y:g.clientY,toolbarX:C,toolbarY:E})},[Bt]);if(m.useEffect(()=>{if(!Bt)return;const g=()=>{let E=Bt.x,G=Bt.y;const Ce=20-(337-(te?Gn==="connected"?297:257:44)),Be=window.innerWidth-20-337;E=Math.max(Ce,Math.min(Be,E)),G=Math.max(20,Math.min(window.innerHeight-44-20,G)),(E!==Bt.x||G!==Bt.y)&&cl({x:E,y:G})};return g(),window.addEventListener("resize",g),()=>window.removeEventListener("resize",g)},[Bt,te,Gn]),m.useEffect(()=>{const g=p=>{const j=p.target,C=j.tagName==="INPUT"||j.tagName==="TEXTAREA"||j.isContentEditable;if(p.key==="Escape"){if(U){Ze?Ie(null):Yo();return}if(Xn){rl(!1);return}if(ln.length>0){Ql([]);return}q||te&&(jn(),H(!1))}if((p.metaKey||p.ctrlKey)&&p.shiftKey&&(p.key==="f"||p.key==="F")){p.preventDefault(),jn(),te?$i():H(!0);return}if(!(C||p.metaKey||p.ctrlKey)&&((p.key==="p"||p.key==="P")&&(p.preventDefault(),jn(),As()),(p.key==="l"||p.key==="L")&&(p.preventDefault(),jn(),Xn&&rl(!1),le&&je(!1),q&&Os(),U?Yo():ce(!0)),(p.key==="h"||p.key==="H")&&I.length>0&&(p.preventDefault(),jn(),be(E=>!E)),(p.key==="c"||p.key==="C")&&(I.length>0||xe.length>0||Ve)&&(p.preventDefault(),jn(),$s()),(p.key==="x"||p.key==="X")&&(I.length>0||xe.length>0||Ve)&&(p.preventDefault(),jn(),ul(),xe.length>0&&Xe([]),Ve&&Yn(null)),p.key==="s"||p.key==="S")){const E=la(pt.webhookUrl)||la(de||"");I.length>0&&E&&Q==="idle"&&(p.preventDefault(),jn(),Io())}};return document.addEventListener("keydown",g),()=>document.removeEventListener("keydown",g)},[te,Xn,U,Ze,xe,Ve,q,I.length,pt.webhookUrl,de,Q,Io,As,$s,ul,ln]),!De||ct)return null;const Ra=I.length>0,aa=I.filter(g=>!io.has(g.id)&&g.kind!=="placement"&&g.kind!=="rearrange"),Xi=aa.length>0,oa=I.filter(g=>io.has(g.id)),qi=g=>{const G=g.x/100*window.innerWidth,fe=typeof g.y=="string"?parseFloat(g.y):g.y,ge={};window.innerHeight-fe-22-10<80&&(ge.top="auto",ge.bottom="calc(100% + 10px)");const Be=G-200/2,Ue=10;if(Be<Ue){const at=Ue-Be;ge.left=`calc(50% + ${at}px)`}else if(Be+200>window.innerWidth-Ue){const at=Be+200-(window.innerWidth-Ue);ge.left=`calc(50% - ${at}px)`}return ge};return Ed.createPortal(a.jsxs("div",{ref:tt,style:{display:"contents"},"data-agentation-theme":Pn?"dark":"light","data-agentation-accent":pt.annotationColorId,"data-agentation-root":"",children:[a.jsx("div",{className:`${ie.toolbar}${O?` ${O}`:""}`,"data-feedback-toolbar":!0,"data-agentation-toolbar":!0,style:Bt?{left:Bt.x,top:Bt.y,right:"auto",bottom:"auto"}:void 0,children:a.jsxs("div",{className:`${ie.toolbarContainer} ${te?ie.expanded:ie.collapsed} ${Di?ie.entrance:""} ${ee?ie.hiding:""} ${!pt.webhooksEnabled&&(la(pt.webhookUrl)||la(de||""))?ie.serverConnected:""}`,onClick:te?void 0:g=>{if(Na.current){Na.current=!1,g.preventDefault();return}H(!0)},onMouseDown:Yi,role:te?void 0:"button",tabIndex:te?-1:0,title:te?void 0:"Start feedback mode",children:[a.jsxs("div",{className:`${ie.toggleContent} ${te?ie.hidden:ie.visible}`,children:[a.jsx(Mg,{size:24}),Xi&&a.jsx("span",{className:`${ie.badge} ${te?ie.fadeOut:""} ${Di?ie.entrance:""}`,children:aa.length})]}),a.jsxs("div",{className:`${ie.controlsContent} ${te?ie.visible:ie.hidden} ${Bt&&Bt.y<100?ie.tooltipBelow:""} ${mt||le?ie.tooltipsHidden:""} ${Ni?ie.tooltipsInSession:""}`,onMouseEnter:Ma,onMouseLeave:uc,children:[a.jsxs("div",{className:`${ie.buttonWrapper} ${Bt&&Bt.x<120?ie.buttonWrapperAlignLeft:""}`,children:[a.jsx("button",{className:ie.controlButton,onClick:g=>{g.stopPropagation(),jn(),As()},"data-active":$,children:a.jsx(zg,{size:24,isPaused:$})}),a.jsxs("span",{className:ie.buttonTooltip,children:[$?"Resume animations":"Pause animations",a.jsx("span",{className:ie.shortcut,children:"P"})]})]}),a.jsxs("div",{className:ie.buttonWrapper,children:[a.jsx("button",{className:`${ie.controlButton} ${Pn?"":ie.light}`,onClick:g=>{g.stopPropagation(),jn(),Xn&&rl(!1),le&&je(!1),q&&Os(),U?Yo():ce(!0)},"data-active":U,style:U&&lt?{color:"#f97316",background:"rgba(249, 115, 22, 0.25)"}:void 0,children:a.jsx(Yg,{size:21})}),a.jsxs("span",{className:ie.buttonTooltip,children:[U?"Exit layout mode":"Layout mode",a.jsx("span",{className:ie.shortcut,children:"L"})]})]}),a.jsxs("div",{className:ie.buttonWrapper,children:[a.jsx("button",{className:ie.controlButton,onClick:g=>{g.stopPropagation(),jn(),be(!pe)},disabled:!Ra||U,children:a.jsx(Rg,{size:24,isOpen:pe})}),a.jsxs("span",{className:ie.buttonTooltip,children:[pe?"Hide markers":"Show markers",a.jsx("span",{className:ie.shortcut,children:"H"})]})]}),a.jsxs("div",{className:ie.buttonWrapper,children:[a.jsx("button",{className:`${ie.controlButton} ${Ee?ie.statusShowing:""}`,onClick:g=>{g.stopPropagation(),jn(),$s()},disabled:U&&lt?xe.length===0&&!Ve?.sections?.length:!Ra&&Kt.length===0&&xe.length===0&&!Ve?.sections?.length,"data-active":Ee,children:a.jsx(Ng,{size:24,copied:Ee,tint:U&&lt&&(xe.length>0||Ve?.sections?.length)?"#f97316":void 0})}),a.jsxs("span",{className:ie.buttonTooltip,children:[U&&lt?"Copy layout":"Copy feedback",a.jsx("span",{className:ie.shortcut,children:"C"})]})]}),a.jsxs("div",{className:`${ie.buttonWrapper} ${ie.sendButtonWrapper} ${te&&!pt.webhooksEnabled&&(la(pt.webhookUrl)||la(de||""))?ie.sendButtonVisible:""}`,children:[a.jsxs("button",{className:`${ie.controlButton} ${Q==="sent"||Q==="failed"?ie.statusShowing:""}`,onClick:g=>{g.stopPropagation(),jn(),Io()},disabled:!Ra||!la(pt.webhookUrl)&&!la(de||"")||Q==="sending","data-no-hover":Q==="sent"||Q==="failed",tabIndex:la(pt.webhookUrl)||la(de||"")?0:-1,children:[a.jsx(Tg,{size:24,state:Q}),Ra&&Q==="idle"&&a.jsx("span",{className:ie.buttonBadge,children:I.length})]}),a.jsxs("span",{className:ie.buttonTooltip,children:["Send Annotations",a.jsx("span",{className:ie.shortcut,children:"S"})]})]}),a.jsxs("div",{className:ie.buttonWrapper,children:[a.jsx("button",{className:ie.controlButton,onClick:g=>{g.stopPropagation(),jn(),ul()},disabled:!Ra&&Kt.length===0&&xe.length===0&&!Ve?.sections?.length,"data-danger":!0,children:a.jsx(Ag,{size:24})}),a.jsxs("span",{className:ie.buttonTooltip,children:["Clear all",a.jsx("span",{className:ie.shortcut,children:"X"})]})]}),a.jsxs("div",{className:ie.buttonWrapper,children:[a.jsx("button",{className:ie.controlButton,onClick:g=>{g.stopPropagation(),jn(),U&&Yo(),je(!le)},children:a.jsx(Dg,{size:24})}),k&&Gn!=="disconnected"&&a.jsx("span",{className:`${ie.mcpIndicator} ${ie[Gn]} ${le?ie.hidden:""}`,title:Gn==="connected"?"MCP Connected":"MCP Connecting..."}),a.jsx("span",{className:ie.buttonTooltip,children:"Settings"})]}),a.jsx("div",{className:ie.divider}),a.jsxs("div",{className:`${ie.buttonWrapper} ${Bt&&typeof window<"u"&&Bt.x>window.innerWidth-120?ie.buttonWrapperAlignRight:""}`,children:[a.jsx("button",{className:ie.controlButton,onClick:g=>{g.stopPropagation(),jn(),$i()},children:a.jsx(Og,{size:24})}),a.jsxs("span",{className:ie.buttonTooltip,children:["Exit",a.jsx("span",{className:ie.shortcut,children:"Esc"})]})]})]}),a.jsx(gp,{visible:U&&te,activeType:Ze,onSelect:g=>{Ie(Ze===g?null:g)},isDarkMode:Pn,sectionCount:Ve?.sections.length??0,onDetectSections:()=>{const g=Mp(),p=Ve?.sections??[],j=new Set(p.map(fe=>fe.selector)),C=g.filter(fe=>!j.has(fe.selector)),E=[...p,...C],G=[...Ve?.originalOrder??[],...C.map(fe=>fe.id)];Yn({sections:E,originalOrder:G,detectedAt:Date.now()})},placementCount:xe.length,onClearPlacements:()=>{Xl(g=>g+1),Cs(g=>g+1),Fe(()=>{Yn({sections:[],originalOrder:[],detectedAt:Date.now()})},200)},blankCanvas:lt,onBlankCanvasChange:g=>{const p={sections:[],originalOrder:[],detectedAt:Date.now()};g?(js.current={rearrange:Ve,placements:xe},Yn(Yl.current.rearrange||p),Xe(Yl.current.placements),Ie(null)):(Yl.current={rearrange:Ve,placements:xe},Yn(js.current.rearrange||p),Xe(js.current.placements)),sn(g)},wireframePurpose:tn,onWireframePurposeChange:En,Tooltip:To,onDragStart:(g,p)=>{p.preventDefault();const j=Me[g];let C=null,E=!1;const G=p.clientX,fe=p.clientY,Ce=p.target.closest("[data-feedback-toolbar]")?.getBoundingClientRect().top??window.innerHeight,Be=at=>{const gt=at.clientX-G,Qe=at.clientY-fe;if(!E&&(Math.abs(gt)>4||Math.abs(Qe)>4)&&(E=!0,C=document.createElement("div"),C.className=`${K.dragPreview}${lt?` ${K.dragPreviewWireframe}`:""}`,document.body.appendChild(C)),!C)return;const Se=Math.max(0,Ce-at.clientY),an=Math.min(1,Se/180),At=1-Math.pow(1-an,2),fn=28,Rt=20,on=Math.min(140,j.width*.18),Ae=Math.min(90,j.height*.18),rt=fn+(on-fn)*At,Vt=Rt+(Ae-Rt)*At;C.style.width=`${rt}px`,C.style.height=`${Vt}px`,C.style.left=`${at.clientX-rt/2}px`,C.style.top=`${at.clientY-Vt/2}px`,C.style.opacity=`${.5+.5*At}`,C.textContent=At>.25?g:""},Ue=at=>{if(window.removeEventListener("mousemove",Be),window.removeEventListener("mouseup",Ue),C&&document.body.removeChild(C),E){const gt=j.width,Qe=j.height,Se=window.scrollY,an=Math.max(0,at.clientX-gt/2),At=Math.max(0,at.clientY+Se-Qe/2),fn={id:`dp-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,type:g,x:an,y:At,width:gt,height:Qe,scrollY:Se,timestamp:Date.now()};Xe(Rt=>[...Rt,fn]),Ie(null),ka.current=new Set,zo(Rt=>Rt+1)}};window.addEventListener("mousemove",Be),window.addEventListener("mouseup",Ue)}}),a.jsx(B1,{settings:pt,onSettingsChange:g=>Ri(p=>({...p,...g})),isDarkMode:Pn,onToggleTheme:zl,isDevMode:Es,connectionStatus:Gn,endpoint:k,isVisible:re,toolbarNearBottom:!!Bt&&Bt.y<230,settingsPage:Oe,onSettingsPageChange:it,onHideToolbar:_c})]})}),(U||_e)&&a.jsx("div",{className:`${K.blankCanvas} ${Rn?K.visible:""} ${rn?K.gridActive:""}`,style:{"--canvas-opacity":il},"data-feedback-toolbar":!0}),U&&lt&&Rn&&a.jsxs("div",{className:K.wireframeNotice,"data-feedback-toolbar":!0,children:[a.jsxs("div",{className:K.wireframeOpacityRow,children:[a.jsx("span",{className:K.wireframeOpacityLabel,children:"Toggle Opacity"}),a.jsx("input",{type:"range",className:K.wireframeOpacitySlider,min:0,max:1,step:.01,value:il,onChange:g=>Hn(Number(g.target.value))})]}),a.jsxs("div",{className:K.wireframeNoticeTitleRow,children:[a.jsx("span",{className:K.wireframeNoticeTitle,children:"Wireframe Mode"}),a.jsx("span",{className:K.wireframeNoticeDivider}),a.jsx("button",{className:K.wireframeStartOver,onClick:()=>{Xl(g=>g+1),Yn({sections:[],originalOrder:[],detectedAt:Date.now()}),Yl.current={rearrange:null,placements:[]},En(""),tc(Ke)},children:"Start Over"})]}),"Drag components onto the canvas.",a.jsx("br",{}),"Copied output will only include the wireframed layout."]}),(U||_e)&&a.jsx(dp,{placements:xe,onChange:Xe,activeComponent:_e?null:Ze,onActiveComponentChange:Ie,isDarkMode:Pn,exiting:_e,onInteractionChange:Un,passthrough:!Ze,extraSnapRects:Ve?.sections.map(g=>g.currentRect),deselectSignal:lo,clearSignal:ao,wireframe:lt,onSelectionChange:(g,p)=>{ka.current=g,p||(pl.current=new Set,Sa(j=>j+1))},onDragMove:(g,p)=>{const j=pl.current;if(!(!j.size||!Ve)){if(!Nn.current){Nn.current=new Map;for(const C of Ve.sections)j.has(C.id)&&Nn.current.set(C.id,{x:C.currentRect.x,y:C.currentRect.y})}for(const C of Ve.sections){if(!j.has(C.id)||!Nn.current.get(C.id))continue;const G=document.querySelector(`[data-rearrange-section="${C.id}"]`);G&&(G.style.transform=`translate(${g}px, ${p}px)`)}}},onDragEnd:(g,p,j)=>{const C=pl.current,E=Nn.current;if(Nn.current=null,!(!C.size||!Ve||!E)){for(const G of C){const fe=document.querySelector(`[data-rearrange-section="${G}"]`);fe&&(fe.style.transform="")}j&&Yn(G=>G&&{...G,sections:G.sections.map(fe=>{const ge=E.get(fe.id);return ge?{...fe,currentRect:{...fe.currentRect,x:Math.max(0,ge.x+g),y:Math.max(0,ge.y+p)}}:fe})})}}}),(U||_e)&&Ve&&a.jsx(Tp,{rearrangeState:Ve,onChange:Yn,isDarkMode:Pn,exiting:_e,blankCanvas:lt,extraSnapRects:xe.map(g=>({x:g.x,y:g.y,width:g.width,height:g.height})),clearSignal:xn,deselectSignal:wa,onSelectionChange:(g,p)=>{pl.current=g,p||(ka.current=new Set,zo(j=>j+1))},onDragMove:(g,p)=>{const j=ka.current;if(j.size){if(!Nn.current){Nn.current=new Map;for(const C of xe)j.has(C.id)&&Nn.current.set(C.id,{x:C.x,y:C.y})}for(const C of j){const E=document.querySelector(`[data-design-placement="${C}"]`);E&&(E.style.transform=`translate(${g}px, ${p}px)`)}}},onDragEnd:(g,p,j)=>{const C=ka.current,E=Nn.current;if(Nn.current=null,!(!C.size||!E)){for(const G of C){const fe=document.querySelector(`[data-design-placement="${G}"]`);fe&&(fe.style.transform="")}j&&Xe(G=>G.map(fe=>{const ge=E.get(fe.id);return ge?{...fe,x:Math.max(0,ge.x+g),y:Math.max(0,ge.y+p)}:fe}))}}}),a.jsx("canvas",{ref:Ca,className:`${ie.drawCanvas} ${Xn?ie.active:""}`,style:{opacity:zs?1:0,transition:"opacity 0.15s ease"},"data-feedback-toolbar":!0}),a.jsxs("div",{className:ie.markersLayer,"data-feedback-toolbar":!0,children:[nt&&aa.filter(g=>!g.isFixed).map((g,p,j)=>a.jsx(ym,{annotation:g,globalIndex:aa.findIndex(C=>C.id===g.id),layerIndex:p,layerSize:j.length,isExiting:$e,isClearing:ut,isAnimated:Ts.has(g.id),isHovered:!$e&&It===g.id,isDeleting:en===g.id,isEditingAny:!!Z,renumberFrom:Qn,markerClickBehavior:pt.markerClickBehavior,tooltipStyle:qi(g),onHoverEnter:C=>!$e&&C.id!==Ho.current&&qo(C),onHoverLeave:()=>qo(null),onClick:C=>pt.markerClickBehavior==="delete"?Bs(C.id):Xo(C),onContextMenu:Xo},g.id)),nt&&!$e&&oa.filter(g=>!g.isFixed).map(g=>a.jsx(pm,{annotation:g},g.id))]}),a.jsxs("div",{className:ie.fixedMarkersLayer,"data-feedback-toolbar":!0,children:[nt&&aa.filter(g=>g.isFixed).map((g,p,j)=>a.jsx(ym,{annotation:g,globalIndex:aa.findIndex(C=>C.id===g.id),layerIndex:p,layerSize:j.length,isExiting:$e,isClearing:ut,isAnimated:Ts.has(g.id),isHovered:!$e&&It===g.id,isDeleting:en===g.id,isEditingAny:!!Z,renumberFrom:Qn,markerClickBehavior:pt.markerClickBehavior,tooltipStyle:qi(g),onHoverEnter:C=>!$e&&C.id!==Ho.current&&qo(C),onHoverLeave:()=>qo(null),onClick:C=>pt.markerClickBehavior==="delete"?Bs(C.id):Xo(C),onContextMenu:Xo},g.id)),nt&&!$e&&oa.filter(g=>g.isFixed).map(g=>a.jsx(pm,{annotation:g,fixed:!0},g.id))]}),te&&a.jsxs("div",{className:ie.overlay,"data-feedback-toolbar":!0,style:q||Z?{zIndex:99999}:void 0,children:[ke?.rect&&!q&&!xt&&!Ol&&a.jsx("div",{className:`${ie.hoverHighlight} ${ie.enter}`,style:{left:ke.rect.left,top:ke.rect.top,width:ke.rect.width,height:ke.rect.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 50%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 4%, transparent)"}}),ln.filter(g=>document.contains(g.element)).map((g,p)=>{const j=g.element.getBoundingClientRect(),C=ln.length>1;return a.jsx("div",{className:C?ie.multiSelectOutline:ie.singleSelectOutline,style:{position:"fixed",left:j.left,top:j.top,width:j.width,height:j.height,...C?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}},p)}),It&&!q&&(()=>{const g=I.find(E=>E.id===It);if(!g?.boundingBox)return null;if(g.elementBoundingBoxes?.length)return _n.length>0?_n.filter(E=>document.contains(E)).map((E,G)=>{const fe=E.getBoundingClientRect();return a.jsx("div",{className:`${ie.multiSelectOutline} ${ie.enter}`,style:{left:fe.left,top:fe.top,width:fe.width,height:fe.height}},`hover-outline-live-${G}`)}):g.elementBoundingBoxes.map((E,G)=>a.jsx("div",{className:`${ie.multiSelectOutline} ${ie.enter}`,style:{left:E.x,top:E.y-He,width:E.width,height:E.height}},`hover-outline-${G}`));const p=Mn&&document.contains(Mn)?Mn.getBoundingClientRect():null,j=p?{x:p.left,y:p.top,width:p.width,height:p.height}:{x:g.boundingBox.x,y:g.isFixed?g.boundingBox.y:g.boundingBox.y-He,width:g.boundingBox.width,height:g.boundingBox.height},C=g.isMultiSelect;return a.jsx("div",{className:`${C?ie.multiSelectOutline:ie.singleSelectOutline} ${ie.enter}`,style:{left:j.x,top:j.y,width:j.width,height:j.height,...C?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}})})(),ke&&!q&&!xt&&!Ol&&a.jsxs("div",{className:`${ie.hoverTooltip} ${ie.enter}`,style:{left:Math.max(8,Math.min(x.x,window.innerWidth-100)),top:Math.max(x.y-(ke.reactComponents?48:32),8)},children:[ke.reactComponents&&a.jsx("div",{className:ie.hoverReactPath,children:ke.reactComponents}),a.jsx("div",{className:ie.hoverElementName,children:ke.elementName})]}),q&&a.jsxs(a.Fragment,{children:[q.multiSelectElements?.length?q.multiSelectElements.filter(g=>document.contains(g)).map((g,p)=>{const j=g.getBoundingClientRect();return a.jsx("div",{className:`${ie.multiSelectOutline} ${bn?ie.exit:ie.enter}`,style:{left:j.left,top:j.top,width:j.width,height:j.height}},`pending-multi-${p}`)}):q.targetElement&&document.contains(q.targetElement)?(()=>{const g=q.targetElement.getBoundingClientRect();return a.jsx("div",{className:`${ie.singleSelectOutline} ${bn?ie.exit:ie.enter}`,style:{left:g.left,top:g.top,width:g.width,height:g.height,borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}})})():q.boundingBox&&a.jsx("div",{className:`${q.isMultiSelect?ie.multiSelectOutline:ie.singleSelectOutline} ${bn?ie.exit:ie.enter}`,style:{left:q.boundingBox.x,top:q.boundingBox.y-He,width:q.boundingBox.width,height:q.boundingBox.height,...q.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}),(()=>{const g=q.x,p=q.isFixed?q.y:q.y-He;return a.jsxs(a.Fragment,{children:[a.jsx(C1,{x:g,y:p,isMultiSelect:q.isMultiSelect,isExiting:bn}),a.jsx(oc,{ref:Oi,element:q.element,selectedText:q.selectedText,computedStyles:q.computedStylesObj,placeholder:q.element==="Area selection"?"What should change in this area?":q.isMultiSelect?"Feedback for this group of elements...":"What should change?",onSubmit:fc,onCancel:Os,isExiting:bn,lightMode:!Pn,accentColor:q.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:{left:Math.max(160,Math.min(window.innerWidth-160,g/100*window.innerWidth)),...p>window.innerHeight-290?{bottom:window.innerHeight-p+20}:{top:p+20}}})]})})()]}),Z&&a.jsxs(a.Fragment,{children:[Z.elementBoundingBoxes?.length?ot.length>0?ot.filter(g=>document.contains(g)).map((g,p)=>{const j=g.getBoundingClientRect();return a.jsx("div",{className:`${ie.multiSelectOutline} ${ie.enter}`,style:{left:j.left,top:j.top,width:j.width,height:j.height}},`edit-multi-live-${p}`)}):Z.elementBoundingBoxes.map((g,p)=>a.jsx("div",{className:`${ie.multiSelectOutline} ${ie.enter}`,style:{left:g.x,top:g.y-He,width:g.width,height:g.height}},`edit-multi-${p}`)):(()=>{const g=Pe&&document.contains(Pe)?Pe.getBoundingClientRect():null,p=g?{x:g.left,y:g.top,width:g.width,height:g.height}:Z.boundingBox?{x:Z.boundingBox.x,y:Z.isFixed?Z.boundingBox.y:Z.boundingBox.y-He,width:Z.boundingBox.width,height:Z.boundingBox.height}:null;return p?a.jsx("div",{className:`${Z.isMultiSelect?ie.multiSelectOutline:ie.singleSelectOutline} ${ie.enter}`,style:{left:p.x,top:p.y,width:p.width,height:p.height,...Z.isMultiSelect?{}:{borderColor:"color-mix(in srgb, var(--agentation-color-accent) 60%, transparent)",backgroundColor:"color-mix(in srgb, var(--agentation-color-accent) 5%, transparent)"}}}):null})(),a.jsx(oc,{ref:Bi,element:Z.element,selectedText:Z.selectedText,computedStyles:Sp(Z.computedStyles),placeholder:"Edit your feedback...",initialValue:Z.comment,submitLabel:"Save",onSubmit:hc,onCancel:Ls,onDelete:()=>Bs(Z.id),isExiting:Bo,lightMode:!Pn,accentColor:Z.isMultiSelect?"var(--agentation-color-green)":"var(--agentation-color-accent)",style:(()=>{const g=Z.isFixed?Z.y:Z.y-He;return{left:Math.max(160,Math.min(window.innerWidth-160,Z.x/100*window.innerWidth)),...g>window.innerHeight-290?{bottom:window.innerHeight-g+20}:{top:g+20}}})()})]}),Ol&&a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:Kl,className:ie.dragSelection}),a.jsx("div",{ref:Ta,className:ie.highlightsContainer})]})]})]}),document.body)}function bs({value:o,options:r,getValue:c,getLabel:u,renderLabel:_,renderOption:f,onChange:b,className:R="",triggerClassName:v="",menuClassName:M="",align:k="up",menuAlign:z="left"}){const[T,de]=m.useState(!1),O=m.useRef(null),te=m.useRef(null),H=m.useRef(null),[I,he]=m.useState(null),pe=r.find(we=>c(we)===o)||r[0];m.useEffect(()=>{function we(ee){!O.current?.contains(ee.target)&&!H.current?.contains(ee.target)&&de(!1)}return document.addEventListener("mousedown",we),()=>document.removeEventListener("mousedown",we)},[]),m.useLayoutEffect(()=>{if(!T||!te.current||!H.current)return;function we(){const ee=te.current.getBoundingClientRect(),oe=H.current.getBoundingClientRect(),tt=window.innerWidth,nt=window.innerHeight,Te=12,$e=10,Je=nt-ee.bottom-$e-Te,ke=ee.top-$e-Te;let Ye=z==="right"?ee.right-oe.width:ee.left;Ye=Math.max(Te,Math.min(Ye,tt-oe.width-Te));const x=k==="down",J=!x&&ke<oe.height&&Je>ke,q=x&&Je<oe.height&&ke>Je,me=J||!q&&x,Ee=Math.max(120,me?Je:ke);Math.min(oe.height,Ee),he({position:"fixed",top:me?`${Math.max(Te,ee.bottom+$e)}px`:"auto",bottom:me?"auto":`${Math.max(Te,nt-ee.top+$e)}px`,left:`${Ye}px`,maxHeight:`${Math.floor(Ee)}px`,overflowY:"auto"})}return we(),window.addEventListener("resize",we),window.addEventListener("scroll",we,!0),()=>{window.removeEventListener("resize",we),window.removeEventListener("scroll",we,!0)}},[k,z,T,r.length]);const be=T?"icon icon--chevron_up_line dropdown-trigger-icon":"icon icon--chevron_down_line dropdown-trigger-icon",ct=a.jsx("div",{ref:H,className:`dropdown-menu dropdown-menu--portal dropdown-menu--${k} ${T?"open":""} ${M}`.trim(),role:"listbox",style:I||void 0,children:r.map(we=>{const ee=c(we),oe=ee===o;return a.jsxs("button",{type:"button",className:`dropdown-option ${oe?"active":""}`,"aria-selected":oe,onClick:()=>{b(ee),de(!1)},children:[f?f(we):a.jsx("span",{children:u(we)}),oe?a.jsx("i",{className:"icon icon--approve_line dropdown-option-check","aria-hidden":"true"}):null]},ee)})});return a.jsxs("div",{ref:O,className:`dropdown ${k==="down"?"dropdown--down":"dropdown--up"} ${T?"open":""} ${R}`.trim(),children:[a.jsxs("button",{ref:te,type:"button",className:`dropdown-trigger ${v}`.trim(),"aria-haspopup":"listbox","aria-expanded":T,onClick:()=>de(we=>!we),children:[a.jsx("span",{children:pe?_?_(pe):u(pe):""}),a.jsx("i",{className:be,"aria-hidden":"true"})]}),typeof document<"u"?Ed.createPortal(ct,document.body):null]})}function H1({heroScrolled:o,lastBuiltAt:r,formatTimestamp:c,viewMode:u,onToggleViewMode:_,sortMode:f,sortOptions:b,onChangeSortMode:R,summary:v}){const M=u==="grid"?"리스트 카드 형식으로 전환":"그리드 카드 형식으로 전환",k=u==="grid"?"icon icon--grid_view_sm_line hero-view-icon":"icon icon--card_list_view_line hero-view-icon";return a.jsxs("section",{className:`library-hero ${o?"is-scrolled":""}`,children:[a.jsx("div",{className:"library-hero-gradient","aria-hidden":"true"}),a.jsxs("div",{className:"hero-meta",children:[a.jsx("span",{className:`meta-pill ${r?"success":""}`,children:r?c(r):"빌드 대기"}),a.jsxs("div",{className:"hero-meta-actions",children:[a.jsxs("button",{type:"button",className:"hero-view-toggle","aria-pressed":u==="list","aria-label":"카드 표시 형식 전환","data-tooltip":M,onClick:_,children:[a.jsx("i",{className:k,"aria-hidden":"true"}),a.jsx("span",{children:u==="grid"?"Grid":"List"})]}),a.jsx("div",{className:"hero-sort-wrap",children:a.jsx(bs,{value:f,options:b,getValue:z=>z.key,getLabel:z=>z.label,onChange:R,className:"hero-sort",triggerClassName:"hero-sort-trigger",align:"down",menuAlign:"right"})}),a.jsx("div",{className:"hero-summary-pill hidden","aria-hidden":"true",children:v})]})]})]})}function U1({category:o,categoryOptions:r,getCategoryLabel:c,onChangeCategory:u,kind:_,kindOptions:f,getKindLabel:b,onChangeKind:R,query:v,onChangeQuery:M,weight:k,weightOptions:z,onChangeWeight:T,previewSize:de,sizeOptions:O,onChangePreviewSize:te,palette:H,paletteOptions:I,paletteSwatches:he,onChangePalette:pe,uploading:be,uploadInputRef:ct,onOpenUpload:we,onUploadChange:ee}){return a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"bottom-controller-dim","aria-hidden":"true",children:[a.jsx("span",{className:"bottom-controller-dim-layer layer-1"}),a.jsx("span",{className:"bottom-controller-dim-layer layer-2"}),a.jsx("span",{className:"bottom-controller-dim-layer layer-3"}),a.jsx("span",{className:"bottom-controller-dim-layer layer-4"}),a.jsx("span",{className:"bottom-controller-dim-layer layer-5"}),a.jsx("span",{className:"bottom-controller-dim-overlay"})]}),a.jsxs("aside",{className:"bottom-controller","aria-label":"웹폰트 미리보기 컨트롤러",children:[a.jsx("div",{className:"controller-group",children:a.jsx(bs,{value:o,options:r,getValue:oe=>oe.key,getLabel:oe=>`${c(oe.key)} (${oe.count})`,onChange:u,className:"category-dropdown",triggerClassName:"category-trigger",menuClassName:"category-menu"})}),a.jsx("div",{className:"controller-group",children:a.jsx(bs,{value:_,options:f,getValue:oe=>oe.key,getLabel:oe=>oe.key==="all"?b(oe.key):`${b(oe.key)} (${oe.count})`,onChange:R,className:"kind-dropdown",triggerClassName:"kind-trigger",menuClassName:"kind-menu"})}),a.jsx("div",{className:"controller-group controller-search-group",children:a.jsx("div",{className:`search-combo controller-search ${v?"has-value":""}`,children:a.jsxs("div",{className:"search-combo-shell",children:[a.jsx("input",{className:"search-field",type:"search",placeholder:"아이콘 검색",value:v,onChange:oe=>M(oe.target.value)}),a.jsx("button",{type:"button",className:"search-clear-button","aria-label":"검색어 지우기",onClick:()=>M(""),children:a.jsx("i",{className:"icon icon--close_sm_line","aria-hidden":"true"})})]})})}),a.jsx("div",{className:"controller-group",children:a.jsx(bs,{value:k,options:z,getValue:oe=>oe.key,getLabel:oe=>oe.label,onChange:T,className:"weight-dropdown",triggerClassName:"weight-trigger",menuClassName:"weight-menu"})}),a.jsx("div",{className:"controller-group",children:a.jsx(bs,{value:de,options:O,getValue:oe=>oe,getLabel:oe=>oe,onChange:te,className:"size-dropdown",triggerClassName:"size-trigger",menuClassName:"size-menu"})}),a.jsx("div",{className:"controller-group",children:a.jsx(bs,{value:H,options:I,getValue:oe=>oe,getLabel:oe=>oe,renderLabel:oe=>a.jsxs("span",{className:"palette-trigger-content",children:[a.jsx("span",{className:"palette-trigger-swatch",style:{"--swatch":he[oe]||"#1e1f24"}}),a.jsx("span",{children:oe})]}),renderOption:oe=>a.jsxs("span",{className:"palette-option-content",children:[a.jsx("span",{className:"palette-option-swatch",style:{"--swatch":he[oe]||"#1e1f24"}}),a.jsx("span",{className:"palette-option-label",children:oe})]}),onChange:pe,className:"palette-dropdown",triggerClassName:"palette-trigger",menuClassName:"palette-menu"})}),a.jsxs("div",{className:"controller-group controller-upload-group",children:[a.jsx("button",{type:"button",className:"upload-button","aria-label":be?"SVG 업로드 중":"SVG 업로드","data-tooltip":be?"업로드 중":"SVG 업로드",disabled:be,onClick:we,children:a.jsx("i",{className:"icon icon--plus_circle_fill upload-button-icon","aria-hidden":"true"})}),a.jsx("input",{ref:ct,className:"visually-hidden",type:"file",accept:".svg,image/svg+xml",multiple:!0,onChange:oe=>ee(oe.target.files)})]})]})]})}function Y1({icon:o,viewMode:r,selected:c,previewSize:u,previewColor:_,previewWeightValue:f,getCategoryLabel:b,setSelectedIcon:R,setOpenListMenuKey:v,openListMenuKey:M,handleListAction:k}){return a.jsx("article",{className:`icon-card ${r==="list"?"list-card":"grid-card"} ${c?"detail-active":""}`,onClick:()=>R(o),children:a.jsxs("div",{className:"icon-card-surface",children:[r==="grid"?a.jsxs("div",{className:"card-top",children:[a.jsx("span",{className:`kind-pill ${o.kind}`,children:o.kind}),a.jsx("span",{className:"card-subtitle",children:b(o.category)})]}):null,a.jsx("div",{className:r==="list"?"list-card-preview card-preview-stage":"card-icon-wrap card-preview-stage",children:a.jsx("i",{className:`icon library-icon ${o.className}`,"aria-hidden":"true",style:{fontSize:r==="list"?"36px":u,color:_,fontWeight:f}})}),a.jsxs("div",{className:r==="list"?"list-card-main":"card-label",children:[a.jsx("strong",{className:"icon-card-title",children:o.displayName}),r==="list"?a.jsx("div",{className:"list-card-search-terms",children:[o.category,...o.keywords.slice(0,2),...o.synonyms.slice(0,1)].filter(Boolean).join(" · ")}):null]}),r==="list"?a.jsxs("div",{className:"list-card-actions","aria-label":`${o.displayName} 액션`,children:[a.jsxs("div",{className:"list-card-meta",children:[a.jsx("span",{className:"list-card-meta-chip",children:b(o.category)}),a.jsx("span",{className:"list-card-meta-chip",children:o.kind})]}),a.jsxs("div",{className:`list-action-group ${M===o.key?"open":""}`,onClick:z=>z.stopPropagation(),children:[a.jsxs("button",{type:"button",className:"list-action-main glyph-copy-button",onClick:z=>{z.stopPropagation(),v(T=>T===o.key?null:o.key)},children:[a.jsx("span",{children:"복사하기"}),a.jsx("span",{className:"list-action-main-chevron",children:"˅"})]}),a.jsxs("div",{className:"list-action-menu",children:[a.jsx("button",{type:"button",className:"list-action-item",onClick:z=>k(z,"copy-glyph",o),children:"글리프 키 복사"}),a.jsx("button",{type:"button",className:"list-action-item",onClick:z=>k(z,"copy-class",o),children:"클래스 복사"}),a.jsx("button",{type:"button",className:"list-action-item",onClick:z=>k(z,"copy-name",o),children:"아이콘 이름 복사"}),a.jsx("button",{type:"button",className:"list-action-item",onClick:z=>k(z,"copy-svg",o),children:"SVG 복사"}),a.jsx("button",{type:"button",className:"list-action-item",onClick:z=>k(z,"download-png",o),children:"PNG 다운로드"})]}),a.jsx("button",{type:"button",className:"list-copy-button svg-download-button",onClick:z=>k(z,"download-svg",o),children:"SVG 다운로드"})]})]}):null]})})}function X1({selectedIcon:o,onClose:r,getCategoryLabel:c,getKindLabel:u,detailKeylineVisible:_,onToggleKeyline:f,detailPreviewSizes:b,previewColor:R,previewWeightValue:v,getSourceIconUrl:M,copyText:k,copySvgSource:z,downloadSvgSource:T,downloadPng:de,showToast:O,detailEditing:te,setDetailEditing:H,detailDirty:I,detailSaving:he,detailSaveError:pe,saveDetailDraft:be,setDetailSaveError:ct,setDetailTokenInputs:we,setDetailDraft:ee,detailDraft:oe,libraryCategories:tt,removeDetailToken:nt,detailTokenInputs:Te,commitDetailToken:$e}){const[Je,ke]=m.useState(null),Ye=m.useRef(null);return m.useEffect(()=>{function x(J){Ye.current?.contains(J.target)||ke(null)}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[]),m.useEffect(()=>{ke(null)},[o]),o?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"icon-detail-sheet-backdrop is-open",onClick:r}),a.jsx("section",{className:"icon-detail-sheet is-open",role:"dialog","aria-modal":"true","aria-labelledby":"iconDetailTitle",children:a.jsxs("div",{className:"icon-detail-sheet-shell",children:[a.jsxs("div",{className:"icon-detail-sheet-header",children:[a.jsxs("div",{className:"icon-detail-title-block",children:[a.jsx("h2",{id:"iconDetailTitle",className:"icon-detail-title",children:o.displayName}),a.jsx("p",{className:"icon-detail-subtitle",children:`${c(o.category)} · ${u(o.kind)}`})]}),a.jsx("button",{className:"icon-detail-close",type:"button",onClick:r,children:a.jsx("i",{className:"icon icon--close_sm_line","aria-hidden":"true"})})]}),a.jsxs("div",{className:"icon-detail-sheet-body icon-detail-sheet-body--phase2",children:[a.jsxs("div",{className:"icon-detail-source-panel",children:[a.jsx("div",{className:"icon-detail-panel-heading",children:a.jsx("span",{className:"icon-detail-panel-title",children:"Preview"})}),a.jsxs("div",{className:`icon-detail-source-stage ${_?"keyline-visible":""}`,children:[a.jsx("button",{type:"button",className:"icon-detail-keyline-toggle","aria-pressed":_,"aria-label":"키라인 보기",onClick:f,children:a.jsx("i",{className:"icon icon--preview_line","aria-hidden":"true"})}),a.jsx("div",{className:"icon-detail-frame-guide","aria-hidden":"true"}),a.jsx("div",{className:"icon-detail-circle-guide","aria-hidden":"true"}),a.jsx("div",{className:"icon-detail-safe-area","aria-hidden":"true"}),a.jsx("div",{className:"icon-detail-source-asset-frame",children:a.jsx("img",{className:"icon-detail-source-image",alt:"",src:M(o)})})]}),a.jsx("div",{className:"icon-detail-source-preview-block",children:a.jsx("div",{className:"icon-detail-size-previews",children:b.map(x=>a.jsxs("div",{className:"icon-detail-size-card",children:[a.jsx("i",{className:`${o.className} icon-detail-size-icon`,"aria-hidden":"true",style:{fontSize:`${x}px`,color:R,fontWeight:v}}),a.jsxs("span",{className:"icon-detail-size-label",children:[x,"px"]})]},x))})})]}),a.jsxs("div",{className:"icon-detail-webfont-panel",children:[a.jsx("div",{className:"icon-detail-panel-heading",children:a.jsx("span",{className:"icon-detail-panel-title",children:"Webfont Detail"})}),a.jsxs("div",{className:"icon-detail-info-grid",children:[a.jsxs("div",{className:"icon-detail-info-card",children:[a.jsx("span",{className:"icon-detail-info-label",children:"Glyph Key"}),a.jsx("div",{className:"icon-detail-info-value",children:o.key})]}),a.jsxs("div",{className:"icon-detail-info-card",children:[a.jsx("span",{className:"icon-detail-info-label",children:"Class Key"}),a.jsx("div",{className:"icon-detail-info-value",children:o.className})]}),a.jsxs("div",{className:"icon-detail-info-card",children:[a.jsx("span",{className:"icon-detail-info-label",children:"카테고리"}),a.jsx("div",{className:"icon-detail-info-value",children:c(o.category)})]}),a.jsxs("div",{className:"icon-detail-info-card",children:[a.jsx("span",{className:"icon-detail-info-label",children:"타입"}),a.jsx("div",{className:"icon-detail-info-value",children:u(o.kind)})]})]}),a.jsxs("div",{className:"icon-detail-actions",ref:Ye,children:[a.jsxs("div",{className:`detail-action-dropdown detail-copy-dropdown ${Je==="copy"?"open":""}`,children:[a.jsxs("button",{type:"button",className:"detail-action-trigger",onClick:()=>ke(x=>x==="copy"?null:"copy"),children:[a.jsx("span",{children:"복사"}),a.jsx("i",{className:`icon ${Je==="copy"?"icon--chevron_up_line":"icon--chevron_down_line"} detail-action-trigger-icon`,"aria-hidden":"true"})]}),a.jsxs("div",{className:"detail-action-menu",children:[a.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await k(o.key),O("글리프 키를 복사했습니다."),ke(null)}catch(x){O(x.message||"복사하지 못했습니다.","error")}},children:"글리프 키 복사"}),a.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await k(o.className),O("클래스를 복사했습니다."),ke(null)}catch(x){O(x.message||"복사하지 못했습니다.","error")}},children:"클래스 복사"}),a.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await z(o),O("SVG를 복사했습니다."),ke(null)}catch(x){O(x.message||"복사하지 못했습니다.","error")}},children:"SVG 복사"}),a.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await k(o.displayName),O("이름을 복사했습니다."),ke(null)}catch(x){O(x.message||"복사하지 못했습니다.","error")}},children:"이름 복사"})]})]}),a.jsxs("div",{className:`detail-action-dropdown detail-download-dropdown ${Je==="download"?"open":""}`,children:[a.jsxs("button",{type:"button",className:"detail-action-trigger",onClick:()=>ke(x=>x==="download"?null:"download"),children:[a.jsx("span",{children:"다운로드"}),a.jsx("i",{className:`icon ${Je==="download"?"icon--chevron_up_line":"icon--chevron_down_line"} detail-action-trigger-icon`,"aria-hidden":"true"})]}),a.jsxs("div",{className:"detail-action-menu",children:[a.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await T(o),O("SVG를 다운로드했습니다."),ke(null)}catch(x){O(x.message||"다운로드하지 못했습니다.","error")}},children:"SVG 다운로드"}),a.jsx("button",{type:"button",className:"detail-action-item",onClick:async()=>{try{await de(o),O("PNG를 다운로드했습니다."),ke(null)}catch(x){O(x.message||"다운로드하지 못했습니다.","error")}},children:"PNG 다운로드"})]})]})]}),a.jsxs("div",{className:"icon-detail-metadata-stack",children:[a.jsxs("div",{className:"icon-detail-panel-heading icon-detail-metadata-header",children:[a.jsx("span",{className:"icon-detail-panel-title",children:"Metadata"}),a.jsx("div",{className:"icon-detail-metadata-actions",children:te?a.jsxs(a.Fragment,{children:[a.jsx("button",{type:"button",className:"icon-detail-edit-button",onClick:()=>{H(!1),ct(""),we({keywords:"",synonyms:""}),ee({displayName:o.displayName||"",category:o.category||"misc",keywords:[...o.keywords||[]],synonyms:[...o.synonyms||[]]})},children:"취소"}),I?a.jsx("span",{className:"icon-detail-unsaved-badge",children:"Unsaved"}):null,a.jsx("button",{type:"button",className:"icon-detail-edit-button",onClick:be,disabled:he,children:he?"저장 중":"저장"})]}):a.jsx("button",{type:"button",className:"icon-detail-edit-button",onClick:()=>{ct(""),H(!0)},children:"편집"})})]}),pe?a.jsx("div",{className:"icon-detail-save-error",children:pe}):null,a.jsxs("div",{className:"icon-detail-metadata",children:[a.jsxs("div",{className:"icon-detail-metadata-row",children:[a.jsx("span",{className:"icon-detail-info-label",children:"displayName"}),te?a.jsx("div",{className:"icon-detail-edit-fields",children:a.jsx("input",{className:"icon-detail-text-input",type:"text",value:oe?.displayName||"",onChange:x=>ee(J=>({...J,displayName:x.target.value}))})}):a.jsx("div",{className:"icon-detail-info-value icon-detail-read-value",children:o.displayName})]}),a.jsxs("div",{className:"icon-detail-metadata-row",children:[a.jsx("span",{className:"icon-detail-info-label",children:"category"}),te?a.jsx("div",{className:"icon-detail-edit-fields",children:a.jsx("select",{className:"icon-detail-select-input",value:oe?.category||"misc",onChange:x=>ee(J=>({...J,category:x.target.value})),children:tt.filter(x=>x!=="all").map(x=>a.jsx("option",{value:x,children:c(x)},x))})}):a.jsx("div",{className:"icon-detail-info-value icon-detail-read-value",children:c(o.category)})]}),a.jsxs("div",{className:"icon-detail-metadata-row",children:[a.jsx("span",{className:"icon-detail-info-label",children:"keywords"}),te?a.jsx("div",{className:"icon-detail-edit-fields",children:a.jsxs("div",{className:"icon-detail-token-editor",children:[a.jsx("div",{className:"icon-detail-token-list",children:(oe?.keywords||[]).map((x,J)=>a.jsxs("span",{className:"icon-detail-token",children:[a.jsx("span",{children:x}),a.jsx("button",{type:"button",className:"icon-detail-token-remove","aria-label":`${x} 제거`,onClick:()=>nt("keywords",J),children:"×"})]},`${x}-${J}`))}),a.jsx("input",{className:"icon-detail-token-input",type:"text",placeholder:"키워드 추가 후 Enter",value:Te.keywords,onChange:x=>we(J=>({...J,keywords:x.target.value})),onBlur:()=>$e("keywords"),onKeyDown:x=>{(x.key==="Enter"||x.key===",")&&(x.preventDefault(),$e("keywords"))}})]})}):a.jsx("div",{className:"icon-detail-token-list icon-detail-read-value",children:(o.keywords||[]).map(x=>a.jsx("span",{className:"icon-detail-token",children:x},x))})]}),a.jsxs("div",{className:"icon-detail-metadata-row",children:[a.jsx("span",{className:"icon-detail-info-label",children:"synonyms"}),te?a.jsx("div",{className:"icon-detail-edit-fields",children:a.jsxs("div",{className:"icon-detail-token-editor",children:[a.jsx("div",{className:"icon-detail-token-list",children:(oe?.synonyms||[]).map((x,J)=>a.jsxs("span",{className:"icon-detail-token",children:[a.jsx("span",{children:x}),a.jsx("button",{type:"button",className:"icon-detail-token-remove","aria-label":`${x} 제거`,onClick:()=>nt("synonyms",J),children:"×"})]},`${x}-${J}`))}),a.jsx("input",{className:"icon-detail-token-input",type:"text",placeholder:"동의어 추가 후 Enter",value:Te.synonyms,onChange:x=>we(J=>({...J,synonyms:x.target.value})),onBlur:()=>$e("synonyms"),onKeyDown:x=>{(x.key==="Enter"||x.key===",")&&(x.preventDefault(),$e("synonyms"))}})]})}):a.jsx("div",{className:"icon-detail-token-list icon-detail-read-value",children:(o.synonyms||[]).map(x=>a.jsx("span",{className:"icon-detail-token",children:x},x))})]})]})]})]})]})]})})]}):null}function q1({toast:o}){return o?a.jsx("div",{className:`status-toast visible ${o.type==="error"?"error":""}`,"aria-live":"polite",children:a.jsx("span",{children:o.message})}):null}function I1({dragActive:o,uploading:r}){return a.jsx("div",{className:`drag-overlay ${o?"visible":""}`,"aria-hidden":o?"false":"true",children:a.jsxs("div",{className:`drag-overlay-card ${r?"is-build":""}`,children:[a.jsx("div",{className:"drag-overlay-kicker",children:"여기에 놓기"}),a.jsx("div",{className:"drag-overlay-title",children:"SVG를 놓으면 웹폰트 라이브러리에 바로 반영됩니다."}),a.jsx("p",{className:"drag-overlay-desc",children:"놓는 즉시 전체 폰트를 다시 빌드하고, 성공한 결과만 라이브러리에 표시합니다."}),a.jsx("div",{className:"drag-overlay-progress","aria-hidden":"true",children:a.jsx("div",{className:"drag-overlay-progress-bar"})})]})})}function Q1(o={}){const r=Array.isArray(o.icons)?o.icons:[],c=Array.from(new Set(r.map(u=>u.category).filter(Boolean).sort((u,_)=>u.localeCompare(_))));return{icons:r,categories:["all",...c],lastBuiltAt:o.lastBuiltAt||null}}function W1(o=[],r={}){const c=String(r.query||"").trim().toLowerCase(),u=r.category||"all",_=r.kind||"all";return o.filter(f=>{const b=!c||String(f.searchText||"").toLowerCase().includes(c),R=u==="all"||f.category===u,v=_==="all"||f.kind===_;return b&&R&&v})}function G1({resultCount:o=0,totalCount:r=0,category:c="all",kind:u="all",query:_=""}){const f=[`${o} of ${r} icons`];return _&&f.push(`for "${_}"`),(c!=="all"||u!=="all")&&f.push(`in ${c} / ${u}`),f.join(" ")}async function wm(o=fetch){const r=await o("/api/library-icons");if(!r.ok)throw new Error(`Failed to load library icons (${r.status})`);return Q1(await r.json())}function V1(o=[],r="name"){const c=[...o];return r==="category"?(c.sort((u,_)=>String(u.category||"").localeCompare(String(_.category||""))||String(u.displayName||"").localeCompare(String(_.displayName||""))||String(u.key||"").localeCompare(String(_.key||""))),c):(c.sort((u,_)=>String(u.displayName||"").localeCompare(String(_.displayName||""))||String(u.key||"").localeCompare(String(_.key||""))),c)}function Z1(o=[]){const r=o.reduce((c,u)=>{const _=u.category||"misc";return c[_]=(c[_]||0)+1,c},{});return[{key:"all",count:o.length},...Object.keys(r).sort((c,u)=>c.localeCompare(u)).map(c=>({key:c,count:r[c]}))]}function K1(o=[]){const r=o.reduce((c,u)=>{const _=u.kind||"mixed";return c[_]=(c[_]||0)+1,c},{});return[{key:"all",count:o.length},...Object.keys(r).sort((c,u)=>c.localeCompare(u)).map(c=>({key:c,count:r[c]}))]}function Sm(o){if(!o||!o.key)return"";const r=String(o.key).replace(/_(line|fill)$/u,"");return o.kind==="fill"?`/fill-icons/${r}.svg`:`/line-icons/${r}.svg`}function F1(){return[24,32,48,64]}const J1=[{key:"name",label:"이름순"},{key:"category",label:"카테고리순"}],P1=[{key:"light",label:"Light"},{key:"regular",label:"Regular"},{key:"medium",label:"Medium"},{key:"semibold",label:"SemiBold"},{key:"bold",label:"Bold"}],ex={light:300,regular:400,medium:500,semibold:600,bold:700},tx=["16px","20px","24px","28px","32px","40px","48px","64px"],nx=["Ink","Signal Blue","Moss","Amber","Violet"],km={Ink:"#1e1f24","Signal Blue":"#1f6fff",Moss:"#0f8b6d",Amber:"#b86a2d",Violet:"#7a3ff2"};function bd(o){return!o||o==="all"?"전체":o.charAt(0).toUpperCase()+o.slice(1)}function jm(o){return!o||o==="all"?"All kinds":o.charAt(0).toUpperCase()+o.slice(1)}function lx(o){return o?new Intl.DateTimeFormat("ko-KR",{dateStyle:"medium",timeStyle:"short"}).format(new Date(o)):"Not built yet"}function Cm(o,r){return o?.key?`${o.key}.${r}`:`icon.${r}`}function ax(){const[o,r]=m.useState({icons:[],categories:["all"],lastBuiltAt:null}),[c,u]=m.useState(!0),[_,f]=m.useState(""),[b,R]=m.useState(()=>Date.now()),[v,M]=m.useState(""),[k,z]=m.useState("all"),[T,de]=m.useState("line"),[O,te]=m.useState("name"),[H,I]=m.useState("medium"),[he,pe]=m.useState("64px"),[be,ct]=m.useState("Ink"),[we,ee]=m.useState("grid"),[oe,tt]=m.useState(null),[nt,Te]=m.useState(!0),[$e,Je]=m.useState(null),[ke,Ye]=m.useState(!1),[x,J]=m.useState(null),[q,me]=m.useState(!1),[Ee,S]=m.useState(""),[Q,ue]=m.useState(null),[ye,qe]=m.useState(!1),[ut,dt]=m.useState(!1),[It,Ct]=m.useState(!1),[Mn,dn]=m.useState([]),[_n,pn]=m.useState({keywords:"",synonyms:""}),en=m.useRef(null),Ln=m.useDeferredValue(v),Qn=F1();m.useEffect(()=>{if(!oe){Ye(!1),J(null),me(!1),S(""),pn({keywords:"",synonyms:""});return}J({displayName:oe.displayName||"",category:oe.category||"misc",keywords:[...oe.keywords||[]],synonyms:[...oe.synonyms||[]]}),pn({keywords:"",synonyms:""})},[oe]),m.useEffect(()=>{if(!Q)return;const U=window.setTimeout(()=>ue(null),2200);return()=>window.clearTimeout(U)},[Q]),m.useEffect(()=>{function U(ce){if(ce.key==="Escape"){if($e){Je(null);return}oe&&tt(null)}}return document.addEventListener("keydown",U),()=>document.removeEventListener("keydown",U)},[$e,oe]),m.useEffect(()=>{function U(Xe){return Array.from(Xe.dataTransfer?.types||[]).includes("Files")}function ce(Xe){!U(Xe)||ye||(Xe.preventDefault(),Ct(!0))}function _e(Xe){!U(Xe)||ye||(Xe.preventDefault(),Ct(!0))}function ve(Xe){U(Xe)&&(Xe.preventDefault(),Ct(!1))}async function xe(Xe){!U(Xe)||ye||(Xe.preventDefault(),Ct(!1),await mt(Xe.dataTransfer?.files))}return window.addEventListener("dragenter",ce),window.addEventListener("dragover",_e),window.addEventListener("dragleave",ve),window.addEventListener("drop",xe),()=>{window.removeEventListener("dragenter",ce),window.removeEventListener("dragover",_e),window.removeEventListener("dragleave",ve),window.removeEventListener("drop",xe)}},[ye]),m.useEffect(()=>{function U(){Je(null)}if($e)return document.addEventListener("mousedown",U),()=>document.removeEventListener("mousedown",U)},[$e]),m.useEffect(()=>{let U=!1;async function ce(){try{u(!0),f("");const _e=await wm();U||(r(_e),R(Date.now()))}catch(_e){U||f(_e.message||"Failed to load icon library")}finally{U||u(!1)}}return ce(),()=>{U=!0}},[]);async function yl(){const U=await wm();r(U),R(Date.now())}const Z=m.useMemo(()=>Z1(o.icons),[o.icons]),ze=m.useMemo(()=>K1(o.icons),[o.icons]),Pe=m.useMemo(()=>{const U=W1(o.icons,{query:Ln,category:k,kind:T});return V1(U,O)},[o.icons,Ln,k,T,O]),We=G1({resultCount:Pe.length,totalCount:o.icons.length,category:k,kind:T,query:Ln.trim()}),ot=km[be]||"#1e1f24",vt=ex[H]||500;function He(U,ce="success"){ue({message:U,type:ce})}async function st(U){U&&await navigator.clipboard.writeText(U)}async function xt(U){const ce=await fetch(Sm(U),{cache:"no-store"});if(!ce.ok)throw new Error("원본 SVG를 불러오지 못했습니다.");return ce.text()}function Ot(U,ce){const _e=URL.createObjectURL(U),ve=document.createElement("a");ve.href=_e,ve.download=ce,document.body.appendChild(ve),ve.click(),ve.remove(),setTimeout(()=>URL.revokeObjectURL(_e),0)}async function De(U){const ce=await xt(U);await navigator.clipboard.writeText(ce)}async function A(U){const ce=await xt(U),_e=new Blob([ce],{type:"image/svg+xml;charset=utf-8"});Ot(_e,Cm(U,"svg"))}async function $(U){const ce=await xt(U),_e=new Blob([ce],{type:"image/svg+xml;charset=utf-8"}),ve=URL.createObjectURL(_e);try{const xe=await new Promise((yt,lt)=>{const sn=new Image;sn.onload=()=>yt(sn),sn.onerror=()=>lt(new Error("PNG 렌더링용 SVG를 읽지 못했습니다.")),sn.src=ve}),Xe=document.createElement("canvas"),Ze=256;Xe.width=Ze,Xe.height=Ze;const Ie=Xe.getContext("2d");if(!Ie)throw new Error("PNG 캔버스를 만들지 못했습니다.");return Ie.clearRect(0,0,Ze,Ze),Ie.drawImage(xe,0,0,Ze,Ze),await new Promise((yt,lt)=>{Xe.toBlob(sn=>{if(sn){yt(sn);return}lt(new Error("PNG 데이터 생성에 실패했습니다."))},"image/png")})}finally{URL.revokeObjectURL(ve)}}async function F(U){const ce=await $(U);Ot(ce,Cm(U,"png"))}async function le(U,ce,_e){U.stopPropagation(),Je(null);try{if(ce==="copy-class"){await st(_e.className),He("클래스를 복사했습니다.");return}if(ce==="copy-name"){await st(_e.displayName),He("아이콘 이름을 복사했습니다.");return}if(ce==="copy-svg"){await De(_e),He("SVG를 복사했습니다.");return}if(ce==="download-svg"){await A(_e),He("SVG를 다운로드했습니다.");return}if(ce==="download-png"){await F(_e),He("PNG를 다운로드했습니다.");return}await st(_e.key),He("글리프 키를 복사했습니다.")}catch(ve){He(ve.message||"액션을 처리하지 못했습니다.","error")}}function je(U){r(ce=>({...ce,icons:ce.icons.map(_e=>_e.key===U.key?{..._e,displayName:U.displayName,category:U.category,keywords:[...U.keywords],synonyms:[...U.synonyms],searchText:[U.displayName,U.category,...U.keywords||[],...U.synonyms||[]].join(" ").toLowerCase()}:_e)})),tt(ce=>ce&&ce.key===U.key?{...ce,displayName:U.displayName,category:U.category,keywords:[...U.keywords],synonyms:[...U.synonyms]}:ce)}async function re(){if(!(!oe||!x||q)){me(!0),S("");try{const U=await fetch(`/api/icon-metadata/${encodeURIComponent(oe.key)}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({displayName:x.displayName,category:x.category,keywords:x.keywords,synonyms:x.synonyms})}),ce=await U.json();if(!U.ok)throw new Error(ce.error||"메타데이터를 저장하지 못했습니다.");je(ce.icon),Ye(!1)}catch(U){S(U.message||"메타데이터를 저장하지 못했습니다.")}finally{me(!1)}}}function se(U,ce){J(_e=>_e&&{..._e,[U]:_e[U].filter((ve,xe)=>xe!==ce)})}function Oe(U){const ce=String(_n[U]||"").trim().replace(/\s+/g," ");ce&&(J(_e=>!_e||_e[U].includes(ce)?_e:{..._e,[U]:[..._e[U],ce]}),pn(_e=>({..._e,[U]:""})))}async function it(U){return await new Promise((ce,_e)=>{const ve=new FileReader;ve.onload=()=>ce(typeof ve.result=="string"?ve.result:""),ve.onerror=()=>_e(new Error(`${U.name} 파일을 읽지 못했습니다.`)),ve.readAsText(U)})}async function mt(U){const ce=Array.from(U||[]).filter(_e=>_e.name.toLowerCase().endsWith(".svg"));if(ce.length===0){He("SVG 파일만 업로드할 수 있습니다.","error");return}qe(!0),dn(ce.map((_e,ve)=>({id:`${Date.now()}-${ve}`,label:_e.name.replace(/\.svg$/i,"")})));try{const _e=await Promise.all(ce.map(async Xe=>({name:Xe.name,content:await it(Xe)}))),ve=await fetch("/api/upload-icons",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({files:_e})}),xe=await ve.json();if(!ve.ok)throw new Error(xe.error||"SVG 업로드에 실패했습니다.");await yl(),He(`${ce.length}개 SVG를 업로드했습니다.`)}catch(_e){He(_e.message||"SVG 업로드에 실패했습니다.","error")}finally{qe(!1),dn([]),en.current&&(en.current.value="")}}const Et=!!oe&&!!x&&(x.displayName!==(oe.displayName||"")||x.category!==(oe.category||"")||JSON.stringify(x.keywords||[])!==JSON.stringify(oe.keywords||[])||JSON.stringify(x.synonyms||[])!==JSON.stringify(oe.synonyms||[]));return a.jsxs("main",{className:"app-shell",children:[a.jsx("link",{rel:"stylesheet",href:`/generated-fonts/my-icon-font.css?v=${b}`}),a.jsx("header",{className:"topbar",children:a.jsx("span",{className:"visually-hidden",children:"IconFactory"})}),a.jsx("main",{className:"content-scroll",onScroll:U=>dt(U.currentTarget.scrollTop>8),children:a.jsxs("div",{className:"library-shell",children:[a.jsx(H1,{heroScrolled:ut,lastBuiltAt:o.lastBuiltAt,formatTimestamp:lx,viewMode:we,onToggleViewMode:()=>ee(U=>U==="grid"?"list":"grid"),sortMode:O,sortOptions:J1,onChangeSortMode:te,summary:We}),a.jsxs("section",{className:`library-grid ${we==="list"?"list-view":""}`,"aria-live":"polite",children:[Mn.map((U,ce)=>a.jsxs("article",{className:"pending-build-card",children:[a.jsx("div",{className:"pending-build-kicker",children:Mn.length>1?`${ce+1}/${Mn.length}`:"변환 중"}),a.jsx("div",{className:"pending-build-title",children:"웹폰트로 변환 중"}),a.jsx("div",{className:"pending-build-name",children:U.label}),a.jsx("p",{className:"pending-build-desc",children:"SVG를 정리하고 폰트를 빌드하고 있습니다"}),a.jsx("div",{className:"pending-build-progress","aria-hidden":"true",children:a.jsx("div",{className:"pending-build-progress-bar"})})]},U.id)),_?a.jsx("article",{className:"empty-card error-state",children:a.jsxs("div",{children:[a.jsx("strong",{children:"빌드된 라이브러리를 불러오지 못했습니다."}),a.jsx("p",{children:_})]})}):null,!_&&!c&&Pe.length===0?a.jsx("article",{className:"empty-card",children:a.jsxs("div",{className:"empty-card-content",children:[a.jsx("strong",{children:"조건에 맞는 웹폰트 아이콘이 없습니다."}),a.jsx("p",{children:"검색어를 바꾸거나 카테고리를 다시 선택해보세요."})]})}):null,!_&&Pe.map(U=>a.jsx(Y1,{icon:U,viewMode:we,selected:oe?.key===U.key,previewSize:he,previewColor:ot,previewWeightValue:vt,getCategoryLabel:bd,setSelectedIcon:tt,setOpenListMenuKey:Je,openListMenuKey:$e,handleListAction:le,copyText:st,showToast:He},U.key))]})]})}),a.jsx(U1,{category:k,categoryOptions:Z,getCategoryLabel:bd,onChangeCategory:z,kind:T,kindOptions:ze,getKindLabel:jm,onChangeKind:de,query:v,onChangeQuery:M,weight:H,weightOptions:P1,onChangeWeight:I,previewSize:he,sizeOptions:tx,onChangePreviewSize:pe,palette:be,paletteOptions:nx,paletteSwatches:km,onChangePalette:ct,uploading:ye,uploadInputRef:en,onOpenUpload:()=>en.current?.click(),onUploadChange:mt}),a.jsx(X1,{selectedIcon:oe,onClose:()=>tt(null),getCategoryLabel:bd,getKindLabel:jm,detailKeylineVisible:nt,onToggleKeyline:()=>Te(U=>!U),detailPreviewSizes:Qn,previewColor:ot,previewWeightValue:vt,getSourceIconUrl:Sm,copyText:st,copySvgSource:De,downloadSvgSource:A,downloadPng:F,showToast:He,detailEditing:ke,setDetailEditing:Ye,detailDirty:Et,detailSaving:q,detailSaveError:Ee,saveDetailDraft:re,setDetailSaveError:S,setDetailTokenInputs:pn,setDetailDraft:J,detailDraft:x,libraryCategories:o.categories,removeDetailToken:se,detailTokenInputs:_n,commitDetailToken:Oe}),a.jsx(I1,{dragActive:It,uploading:ye}),a.jsx($1,{endpoint:"http://localhost:4747",className:"agentation-layer"}),a.jsx(q1,{toast:Q})]})}vg.createRoot(document.getElementById("root")).render(a.jsx(Em.StrictMode,{children:a.jsx(ax,{})}));
