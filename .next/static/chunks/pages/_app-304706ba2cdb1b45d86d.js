(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8679:function(e,t,r){"use strict";var n=r(1296),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},u={};function c(e){return n.isMemo(e)?i:u[e.$$typeof]||o}u[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},u[n.Memo]=i;var l=Object.defineProperty,s=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,y=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(y){var o=d(r);o&&o!==y&&e(t,o,n)}var i=s(r);p&&(i=i.concat(p(r)));for(var u=c(t),v=c(r),O=0;O<i.length;++O){var E=i[O];if(!a[E]&&(!n||!n[E])&&(!v||!v[E])&&(!u||!u[E])){var b=f(r,E);try{l(t,E,b)}catch(S){}}}}return t}},6103:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,O=r?Symbol.for("react.lazy"):60116,E=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,m=r?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case p:case a:case u:case i:case d:return e;default:switch(e=e&&e.$$typeof){case l:case f:case O:case v:case c:return e;default:return t}}case o:return t}}}function P(e){return _(e)===p}t.AsyncMode=s,t.ConcurrentMode=p,t.ContextConsumer=l,t.ContextProvider=c,t.Element=n,t.ForwardRef=f,t.Fragment=a,t.Lazy=O,t.Memo=v,t.Portal=o,t.Profiler=u,t.StrictMode=i,t.Suspense=d,t.isAsyncMode=function(e){return P(e)||_(e)===s},t.isConcurrentMode=P,t.isContextConsumer=function(e){return _(e)===l},t.isContextProvider=function(e){return _(e)===c},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return _(e)===f},t.isFragment=function(e){return _(e)===a},t.isLazy=function(e){return _(e)===O},t.isMemo=function(e){return _(e)===v},t.isPortal=function(e){return _(e)===o},t.isProfiler=function(e){return _(e)===u},t.isStrictMode=function(e){return _(e)===i},t.isSuspense=function(e){return _(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===p||e===u||e===i||e===d||e===y||"object"===typeof e&&null!==e&&(e.$$typeof===O||e.$$typeof===v||e.$$typeof===c||e.$$typeof===l||e.$$typeof===f||e.$$typeof===b||e.$$typeof===S||e.$$typeof===m||e.$$typeof===E)},t.typeOf=_},1296:function(e,t,r){"use strict";e.exports=r(6103)},7436:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.r(t),r.d(t,{default:function(){return Q}});var o,a=r(7294),i=(r(3146),r(8216)),u=function(){var e=function(t,r){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])})(t,r)};return function(t,r){function n(){this.constructor=t}e(t,r),t.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),c=function(){return(c=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},l=function(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{c(n.next(e))}catch(t){a(t)}}function u(e){try{c(n.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,u)}c((n=n.apply(e,t||[])).next())}))},s=function(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(u){a=[6,u],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},p=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},f="__NEXT_REDUX_WRAPPER_HYDRATE__",d=function(){return"undefined"===typeof window},y=function(e,t){var r=(void 0===t?{}:t).deserializeState;return r?r(e):e},v=function(e,t){var r=(void 0===t?{}:t).serializeState;return r?r(e):e},O=function(e){var t=e.makeStore,r=e.context,n=function(){return t(r)};if(d()){var a=r,i=void 0;return a.req&&(i=a.req),a.ctx&&a.ctx.req&&(i=a.ctx.req),i?(i.__nextReduxWrapperStore||(i.__nextReduxWrapperStore=n()),i.__nextReduxWrapperStore):n()}return o||(o=n()),o},E=function(e,t){void 0===t&&(t={});var r=function(r){var n=r.callback,o=r.context;return l(void 0,void 0,void 0,(function(){var r,a,i,u,c;return s(this,(function(l){switch(l.label){case 0:return r=O({context:o,makeStore:e}),t.debug&&console.log("1. getProps created store with state",r.getState()),a=n&&n(r),(u=a)?[4,a(o)]:[3,2];case 1:u=l.sent(),l.label=2;case 2:return i=u||{},t.debug&&console.log("3. getProps after dispatches has store state",r.getState()),c=r.getState(),[2,{initialProps:i,initialState:d()?v(c,t):c}]}}))}))},n=function(e){return function(t){return l(void 0,void 0,void 0,(function(){var n,o,a;return s(this,(function(i){switch(i.label){case 0:return[4,r({callback:e,context:t})];case 1:return n=i.sent(),o=n.initialProps,a=n.initialState,[2,c(c({},o),{props:c(c({},o.props),{initialState:a})})]}}))}))}};return{getServerSideProps:function(e){return function(t){return l(void 0,void 0,void 0,(function(){return s(this,(function(r){switch(r.label){case 0:return[4,n(e)(t)];case 1:return[2,r.sent()]}}))}))}},getStaticProps:n,getInitialAppProps:function(e){return function(t){return l(void 0,void 0,void 0,(function(){var n,o,a;return s(this,(function(i){switch(i.label){case 0:return[4,r({callback:e,context:t})];case 1:return n=i.sent(),o=n.initialProps,a=n.initialState,[2,c(c({},o),{initialState:a})]}}))}))}},getInitialPageProps:function(e){return function(t){return l(void 0,void 0,void 0,(function(){return s(this,(function(n){return"getState"in t?[2,e&&e(t)]:[2,r({callback:e,context:t})]}))}))}},withRedux:function(r){var n,o="withRedux("+(r.displayName||r.name||"Component")+")",l="getInitialProps"in r;return(n=function(n){function l(e,t){var r=n.call(this,e,t)||this;return r.store=null,r.hydrate(e,t),r}return u(l,n),l.prototype.hydrate=function(r,n){var a,i=r.initialState,u=(r.initialProps,p(r,["initialState","initialProps"])),c=null===(a=null===u||void 0===u?void 0:u.pageProps)||void 0===a?void 0:a.initialState;this.store||(this.store=O({makeStore:e,context:n}),t.debug&&console.log("4. WrappedApp created new store with",o,{initialState:i,initialStateFromGSPorGSSR:c})),i&&this.store.dispatch({type:f,payload:y(i,t)}),c&&this.store.dispatch({type:f,payload:y(c,t)})},l.prototype.shouldComponentUpdate=function(e,t,r){var n,o,a,i;return(null===(n=null===e||void 0===e?void 0:e.pageProps)||void 0===n?void 0:n.initialState)===(null===(a=null===(o=this.props)||void 0===o?void 0:o.pageProps)||void 0===a?void 0:a.initialState)&&(null===e||void 0===e?void 0:e.initialState)===(null===(i=this.props)||void 0===i?void 0:i.initialState)||this.hydrate(e,r),!0},l.prototype.render=function(){var e,t,n=this.props,o=(n.initialState,n.initialProps),u=p(n,["initialState","initialProps"]),l=u;return o&&o.pageProps&&(l.pageProps=c(c({},o.pageProps),u.pageProps)),(null===(e=null===u||void 0===u?void 0:u.pageProps)||void 0===e?void 0:e.initialState)&&delete(l=c(c({},u),{pageProps:c({},u.pageProps)})).pageProps.initialState,(null===(t=null===l||void 0===l?void 0:l.pageProps)||void 0===t?void 0:t.initialProps)&&(l.pageProps=c(c({},l.pageProps),l.pageProps.initialProps),delete l.pageProps.initialProps),a.createElement(i.zt,{store:this.store},a.createElement(r,c({},o,l)))},l}(a.Component)).displayName=o,n.getInitialProps=l?r.getInitialProps:void 0,n}}};function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var _="function"===typeof Symbol&&Symbol.observable||"@@observable",P=function(){return Math.random().toString(36).substring(7).split("").join(".")},h={INIT:"@@redux/INIT"+P(),REPLACE:"@@redux/REPLACE"+P(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+P()}};function g(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function T(e,t,r){var n;if("function"===typeof t&&"function"===typeof r||"function"===typeof r&&"function"===typeof arguments[3])throw new Error(m(0));if("function"===typeof t&&"undefined"===typeof r&&(r=t,t=void 0),"undefined"!==typeof r){if("function"!==typeof r)throw new Error(m(1));return r(T)(e,t)}if("function"!==typeof e)throw new Error(m(2));var o=e,a=t,i=[],u=i,c=!1;function l(){u===i&&(u=i.slice())}function s(){if(c)throw new Error(m(3));return a}function p(e){if("function"!==typeof e)throw new Error(m(4));if(c)throw new Error(m(5));var t=!0;return l(),u.push(e),function(){if(t){if(c)throw new Error(m(6));t=!1,l();var r=u.indexOf(e);u.splice(r,1),i=null}}}function f(e){if(!g(e))throw new Error(m(7));if("undefined"===typeof e.type)throw new Error(m(8));if(c)throw new Error(m(9));try{c=!0,a=o(a,e)}finally{c=!1}for(var t=i=u,r=0;r<t.length;r++){(0,t[r])()}return e}function d(e){if("function"!==typeof e)throw new Error(m(10));o=e,f({type:h.REPLACE})}function y(){var e,t=p;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(m(11));function r(){e.next&&e.next(s())}return r(),{unsubscribe:t(r)}}})[_]=function(){return this},e}return f({type:h.INIT}),(n={dispatch:f,subscribe:p,getState:s,replaceReducer:d})[_]=y,n}function w(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}var R=r(908);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N={registerWin:!1,pathAvatar:null,registerTitle:"\u0432\u0445\u043e\u0434",validateEmail:null,validatePassword:null,emailValue:null,passwordValue:null,profileWindow:!1,loading:!1,alert:{alertMassage:null,alertStart:!1,alertType:"error"},loadMini:!1};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={id:null,email:null,isActivation:!1,role:null,surname:null,userName:null,patronymic:null,address:null,tel:null,__v:null,accessToken:null};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L={editAccountWindow:!1},W=r(2982);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={tableCells:[],currentArticle:null,_id:null,dirName:null,paragraphList:null,currentArticleCash:null,articleList:null,editorStatus:null},V={linkNameList:null};function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H=function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];0,"function"===typeof e[o]&&(r[o]=e[o])}var a,i=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if("undefined"===typeof r(void 0,{type:h.INIT}))throw new Error(m(12));if("undefined"===typeof r(void 0,{type:h.PROBE_UNKNOWN_ACTION()}))throw new Error(m(13))}))}(r)}catch(u){a=u}return function(e,t){if(void 0===e&&(e={}),a)throw a;for(var n=!1,o={},u=0;u<i.length;u++){var c=i[u],l=r[c],s=e[c],p=l(s,t);if("undefined"===typeof p){t&&t.type;throw new Error(m(14))}o[c]=p,n=n||p!==s}return(n=n||i.length!==Object.keys(e).length)?o:e}}({homePageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.M.OPEN_WINDOW_REGISTER:return I(I({},e),{},{registerWin:!e.registerWin,validatePassword:N.validatePassword,validateEmail:N.validateEmail,registerTitle:N.registerTitle});case R.M.INIT_USER_SSR:case R.M.INIT_USER:case R.M.INIT_ACCOUNT:case R.M.UPDATE_USER_REDUCER:return I(I({},e),{},{pathAvatar:t.payload.pathAvatar});case R.M.REGISTER_INPUT_EMAIL_VALIDATION:return I(I({},e),{},{validateEmail:"resultEmail"in t.payload?t.payload.resultEmail:null,emailValue:"inputValue"in t.payload?t.payload.inputValue:null});case R.M.REGISTER_INPUT_PASSWORD_VALIDATION:return I(I({},e),{},{validatePassword:"resultPassword"in t.payload?t.payload.resultPassword:null,passwordValue:"inputValue"in t.payload?t.payload.inputValue:null});case R.M.OPEN_WINDOW_MINI_PROFILE:return I(I({},e),{},{profileWindow:t.payload});case R.M.LOADER_ON_OFF:return I(I({},e),{},{loading:t.payload});case R.M.CLOSE_REGISTER_WINDOW:return I(I({},e),{},{registerWin:!1,registerTitle:N.registerTitle});case R.M.LOGIN_ERROR:return I(I({},e),{},{alert:{alertStart:t.payload.error,alertType:t.payload.alertType,alertMassage:t.payload.errorMassage}});case R.M.RESET_LOGIN_ERROR:return I(I({},e),{},{alert:N.alert});case R.M.RESTART_STATE:return I({},N);case R.M.SWITCHING_WINDOW_REGISTER:return I(I({},e),{},{registerTitle:t.payload});case R.M.MIMI_LOADER_START_STOP:return I(I({},e),{},{loadMini:t.payload});case R.M.SAVE_AVATAR:return I(I({},e),{},{pathAvatar:t.payload});default:return e}},userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.M.INIT_USER:return D(D({},e),{},{id:t.payload.id,isActivation:t.payload.isActivation,email:t.payload.emailDto,role:t.payload.role,__v:t.payload.__v,patronymic:t.payload.patronymic,tel:t.payload.tel,address:t.payload.address,userName:t.payload.userName,surname:t.payload.surname,accessToken:t.payload.accessToken});case R.M.INIT_USER_SSR:return D(D({},e),{},{id:t.payload.id,isActivation:t.payload.isActivation,email:t.payload.emailDto,role:t.payload.role,__v:t.payload.__v,patronymic:t.payload.patronymic,tel:t.payload.tel,address:t.payload.address,userName:t.payload.userName,surname:t.payload.surname});case R.M.RESTART_STATE:return D({},C);case R.M.INIT_ACCOUNT:return D(D({},e),{},{id:t.payload.id,isActivation:t.payload.isActivation,email:t.payload.emailDto,role:t.payload.role,__v:t.payload.__v,patronymic:t.payload.patronymic,tel:t.payload.tel,address:t.payload.address,userName:t.payload.userName,surname:t.payload.surname});case R.M.UPDATE_USER_REDUCER:return D(D({},e),{},{accessToken:t.payload.accessToken,tel:t.payload.tel,surname:t.payload.surname,userName:t.payload.userName,email:t.payload.emailDto,__v:t.payload.__v,address:t.payload.address,id:t.payload.id,isActivation:t.payload.isActivation,patronymic:t.payload.patronymic,role:t.payload.role});default:return e}},accountPageReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.M.OPEN_MODEL_WIDOW_EDIT_ACCOUNT:return x(x({},e),{},{editAccountWindow:t.payload});default:return e}},textReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R.M.SAVE_TEXT:return G(G({},e),{},{currentArticle:t.payload.article.article,currentArticleCash:t.payload.article.article,tableCells:t.payload.article.tableCells,_id:t.payload.article._id.toString(),dirName:t.payload.dir,articleList:t.payload.articleList});case R.M.TABLE_SELECT_SAVE:return G(G({},e),{},{tableCells:[].concat((0,W.Z)(e.tableCells),[t.payload])});case R.M.SAVE_PARAGRAPH:return G(G({},e),{},{paragraphList:t.payload});case R.M.FILTER_NAVIGATION_PARAGRAPH:return G(G({},e),{},{currentArticle:t.payload});case R.M.SELECT_STATUS_EDITOR_TEXT:return G(G({},e),{},{editorStatus:t.payload});case R.M.SELECT_DIR_NAME:return G(G({},e),{},{dirName:t.payload});default:return e}},adminPanelReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;return t.type,e}}),q=function(e,t){switch(t.type){case f:return F(F({},e),t.payload);case"TICK":default:return H(e,t)}};function X(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var Z=X();Z.withExtraArgument=X;var B=[Z],z=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):w)(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(m(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},a=t.map((function(e){return e(o)}));return n=w.apply(void 0,a)(r.dispatch),S(S({},r),{},{dispatch:n})}}}.apply(void 0,B)),K=E((function(e){return T(q,z)}),{debug:!0}),Y=r(5893);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var Q=K.withRedux((function(e){var t=e.Component,r=e.pageProps;return(0,Y.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r))}))},908:function(e,t,r){"use strict";var n;r.d(t,{M:function(){return n}}),function(e){e.OPEN_WINDOW_REGISTER="HOME_PAGE/OPEN_WINDOW_REGISTER",e.REGISTER_INPUT_EMAIL_VALIDATION="HOME_PAGE/REGISTER_INPUT_EMAIL_VALIDATION",e.REGISTER_INPUT_PASSWORD_VALIDATION="HOME_PAGE/REGISTER_INPUT_PASSWORD_VALIDATION",e.INIT_USER="INIT_USER",e.INIT_USER_SSR="INIT_USER_SSR",e.OPEN_WINDOW_MINI_PROFILE="HOME_PAGE/OPEN_WINDOW_MINI_PROFILE",e.LOADER_ON_OFF="HOME_PAGE/LOADER_ON_OFF",e.CLOSE_REGISTER_WINDOW="HOME_PAGE/CLOSE_REGISTER_WINDOW",e.LOGIN_ERROR="HOME_PAGE/LOGIN_ERROR",e.RESET_LOGIN_ERROR="HOME_PAGE/RESET_LOGIN_ERROR",e.RESTART_STATE="HOME_PAGE/RESTART_STATE",e.SWITCHING_WINDOW_REGISTER="HOME_PAGE/SWITCHING_WINDOW_REGISTER",e.INIT_ACCOUNT="ACCOUNT/INIT_ACCOUNT",e.UPDATE_USER_REDUCER="ACCOUNT/UPDATE_USER_REDUCER",e.MIMI_LOADER_START_STOP="ACCOUNT/MIMI_LOADER_START_STOP",e.OPEN_MODEL_WIDOW_EDIT_ACCOUNT="OPEN_MODEL_WIDOW_EDIT_ACCOUNT",e.SAVE_AVATAR="ACCOUNT/SAVE_AVATAR",e.SAVE_TEXT="EDITOR_TEXT/SAVE_TEXT",e.TABLE_SELECT_SAVE="EDITOR_TEXT/TABLE_SELECT_SAVE",e.SAVE_PARAGRAPH="EDITOR_TEXT/SAVE_PARAGRAPH",e.FILTER_NAVIGATION_PARAGRAPH="EDITOR_TEXT/FILTER_NAVIGATION_PARAGRAPH",e.SELECT_STATUS_EDITOR_TEXT="EDITOR_TEXT/SELECT_STATUS_EDITOR_TEXT",e.SELECT_DIR_NAME="EDITOR_TEXT/SELECT_DIR_NAME"}(n||(n={}))},6363:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7436)}])},3146:function(){},8216:function(e,t,r){"use strict";r.d(t,{zt:function(){return s},$j:function(){return F},I0:function(){return B},v9:function(){return J}});var n=r(7294),o=(r(5697),n.createContext(null));var a=function(e){e()},i=function(){return a};var u={notify:function(){},get:function(){return[]}};function c(e,t){var r,n=u;function o(){c.onStateChange&&c.onStateChange()}function a(){r||(r=t?t.addNestedSub(o):e.subscribe(o),n=function(){var e=i(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e((function(){for(var e=t;e;)e.callback(),e=e.next}))},get:function(){for(var e=[],r=t;r;)e.push(r),r=r.next;return e},subscribe:function(e){var n=!0,o=r={callback:e,next:null,prev:r};return o.prev?o.prev.next=o:t=o,function(){n&&null!==t&&(n=!1,o.next?o.next.prev=o.prev:r=o.prev,o.prev?o.prev.next=o.next:t=o.next)}}}}())}var c={addNestedSub:function(e){return a(),n.subscribe(e)},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:o,isSubscribed:function(){return Boolean(r)},trySubscribe:a,tryUnsubscribe:function(){r&&(r(),r=void 0,n.clear(),n=u)},getListeners:function(){return n}};return c}var l="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?n.useLayoutEffect:n.useEffect;var s=function(e){var t=e.store,r=e.context,a=e.children,i=(0,n.useMemo)((function(){var e=c(t);return e.onStateChange=e.notifyNestedSubs,{store:t,subscription:e}}),[t]),u=(0,n.useMemo)((function(){return t.getState()}),[t]);l((function(){var e=i.subscription;return e.trySubscribe(),u!==t.getState()&&e.notifyNestedSubs(),function(){e.tryUnsubscribe(),e.onStateChange=null}}),[i,u]);var s=r||o;return n.createElement(s.Provider,{value:i},a)},p=r(7462),f=r(3366),d=r(8679),y=r.n(d),v=r(2973),O=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],E=["reactReduxForwardedRef"],b=[],S=[null,null];function m(e,t){var r=e[1];return[t.payload,r+1]}function _(e,t,r){l((function(){return e.apply(void 0,t)}),r)}function P(e,t,r,n,o,a,i){e.current=n,t.current=o,r.current=!1,a.current&&(a.current=null,i())}function h(e,t,r,n,o,a,i,u,c,l){if(e){var s=!1,p=null,f=function(){if(!s){var e,r,f=t.getState();try{e=n(f,o.current)}catch(d){r=d,p=d}r||(p=null),e===a.current?i.current||c():(a.current=e,u.current=e,i.current=!0,l({type:"STORE_UPDATED",payload:{error:r}}))}};r.onStateChange=f,r.trySubscribe(),f();return function(){if(s=!0,r.tryUnsubscribe(),r.onStateChange=null,p)throw p}}}var g=function(){return[null,0]};function T(e,t){void 0===t&&(t={});var r=t,a=r.getDisplayName,i=void 0===a?function(e){return"ConnectAdvanced("+e+")"}:a,u=r.methodName,l=void 0===u?"connectAdvanced":u,s=r.renderCountProp,d=void 0===s?void 0:s,T=r.shouldHandleStateChanges,w=void 0===T||T,R=r.storeKey,A=void 0===R?"store":R,I=(r.withRef,r.forwardRef),N=void 0!==I&&I,j=r.context,D=void 0===j?o:j,C=(0,f.Z)(r,O),M=D;return function(t){var r=t.displayName||t.name||"Component",o=i(r),a=(0,p.Z)({},C,{getDisplayName:i,methodName:l,renderCountProp:d,shouldHandleStateChanges:w,storeKey:A,displayName:o,wrappedComponentName:r,WrappedComponent:t}),u=C.pure;var s=u?n.useMemo:function(e){return e()};function O(r){var o=(0,n.useMemo)((function(){var e=r.reactReduxForwardedRef,t=(0,f.Z)(r,E);return[r.context,e,t]}),[r]),i=o[0],u=o[1],l=o[2],d=(0,n.useMemo)((function(){return i&&i.Consumer&&(0,v.isContextConsumer)(n.createElement(i.Consumer,null))?i:M}),[i,M]),y=(0,n.useContext)(d),O=Boolean(r.store)&&Boolean(r.store.getState)&&Boolean(r.store.dispatch);Boolean(y)&&Boolean(y.store);var T=O?r.store:y.store,R=(0,n.useMemo)((function(){return function(t){return e(t.dispatch,a)}(T)}),[T]),A=(0,n.useMemo)((function(){if(!w)return S;var e=c(T,O?null:y.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[T,O,y]),I=A[0],N=A[1],j=(0,n.useMemo)((function(){return O?y:(0,p.Z)({},y,{subscription:I})}),[O,y,I]),D=(0,n.useReducer)(m,b,g),C=D[0][0],x=D[1];if(C&&C.error)throw C.error;var L=(0,n.useRef)(),W=(0,n.useRef)(l),U=(0,n.useRef)(),G=(0,n.useRef)(!1),k=s((function(){return U.current&&l===W.current?U.current:R(T.getState(),l)}),[T,C,l]);_(P,[W,L,G,l,k,U,N]),_(h,[w,T,I,R,W,L,G,U,N,x],[T,I,R]);var V=(0,n.useMemo)((function(){return n.createElement(t,(0,p.Z)({},k,{ref:u}))}),[u,t,k]);return(0,n.useMemo)((function(){return w?n.createElement(d.Provider,{value:j},V):V}),[d,V,j])}var T=u?n.memo(O):O;if(T.WrappedComponent=t,T.displayName=O.displayName=o,N){var R=n.forwardRef((function(e,t){return n.createElement(T,(0,p.Z)({},e,{reactReduxForwardedRef:t}))}));return R.displayName=o,R.WrappedComponent=t,y()(R,t)}return y()(T,t)}}function w(e,t){return e===t?0!==e||0!==t||1/e===1/t:e!==e&&t!==t}function R(e,t){if(w(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!w(e[r[o]],t[r[o]]))return!1;return!0}function A(e){return function(t,r){var n=e(t,r);function o(){return n}return o.dependsOnOwnProps=!1,o}}function I(e){return null!==e.dependsOnOwnProps&&void 0!==e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function N(e,t){return function(t,r){r.displayName;var n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=I(e);var o=n(t,r);return"function"===typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=I(o),o=n(t,r)),o},n}}var j=[function(e){return"function"===typeof e?N(e):void 0},function(e){return e?void 0:A((function(e){return{dispatch:e}}))},function(e){return e&&"object"===typeof e?A((function(t){return function(e,t){var r={},n=function(n){var o=e[n];"function"===typeof o&&(r[n]=function(){return t(o.apply(void 0,arguments))})};for(var o in e)n(o);return r}(e,t)})):void 0}];var D=[function(e){return"function"===typeof e?N(e):void 0},function(e){return e?void 0:A((function(){return{}}))}];function C(e,t,r){return(0,p.Z)({},r,e,t)}var M=[function(e){return"function"===typeof e?function(e){return function(t,r){r.displayName;var n,o=r.pure,a=r.areMergedPropsEqual,i=!1;return function(t,r,u){var c=e(t,r,u);return i?o&&a(c,n)||(n=c):(i=!0,n=c),n}}}(e):void 0},function(e){return e?void 0:function(){return C}}],x=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function L(e,t,r,n){return function(o,a){return r(e(o,a),t(n,a),a)}}function W(e,t,r,n,o){var a,i,u,c,l,s=o.areStatesEqual,p=o.areOwnPropsEqual,f=o.areStatePropsEqual,d=!1;function y(o,d){var y=!p(d,i),v=!s(o,a);return a=o,i=d,y&&v?(u=e(a,i),t.dependsOnOwnProps&&(c=t(n,i)),l=r(u,c,i)):y?(e.dependsOnOwnProps&&(u=e(a,i)),t.dependsOnOwnProps&&(c=t(n,i)),l=r(u,c,i)):v?function(){var t=e(a,i),n=!f(t,u);return u=t,n&&(l=r(u,c,i)),l}():l}return function(o,s){return d?y(o,s):(u=e(a=o,i=s),c=t(n,i),l=r(u,c,i),d=!0,l)}}function U(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,a=(0,f.Z)(t,x),i=r(e,a),u=n(e,a),c=o(e,a);return(a.pure?W:L)(i,u,c,e,a)}var G=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function k(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(t,n){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+n.wrappedComponentName+".")}}function V(e,t){return e===t}function $(e){var t=void 0===e?{}:e,r=t.connectHOC,n=void 0===r?T:r,o=t.mapStateToPropsFactories,a=void 0===o?D:o,i=t.mapDispatchToPropsFactories,u=void 0===i?j:i,c=t.mergePropsFactories,l=void 0===c?M:c,s=t.selectorFactory,d=void 0===s?U:s;return function(e,t,r,o){void 0===o&&(o={});var i=o,c=i.pure,s=void 0===c||c,y=i.areStatesEqual,v=void 0===y?V:y,O=i.areOwnPropsEqual,E=void 0===O?R:O,b=i.areStatePropsEqual,S=void 0===b?R:b,m=i.areMergedPropsEqual,_=void 0===m?R:m,P=(0,f.Z)(i,G),h=k(e,a,"mapStateToProps"),g=k(t,u,"mapDispatchToProps"),T=k(r,l,"mergeProps");return n(d,(0,p.Z)({methodName:"connect",getDisplayName:function(e){return"Connect("+e+")"},shouldHandleStateChanges:Boolean(e),initMapStateToProps:h,initMapDispatchToProps:g,initMergeProps:T,pure:s,areStatesEqual:v,areOwnPropsEqual:E,areStatePropsEqual:S,areMergedPropsEqual:_},P))}}var F=$();function H(){return(0,n.useContext)(o)}function q(e){void 0===e&&(e=o);var t=e===o?H:function(){return(0,n.useContext)(e)};return function(){return t().store}}var X=q();function Z(e){void 0===e&&(e=o);var t=e===o?X:q(e);return function(){return t().dispatch}}var B=Z(),z=function(e,t){return e===t};function K(e){void 0===e&&(e=o);var t=e===o?H:function(){return(0,n.useContext)(e)};return function(e,r){void 0===r&&(r=z);var o=t(),a=function(e,t,r,o){var a,i=(0,n.useReducer)((function(e){return e+1}),0)[1],u=(0,n.useMemo)((function(){return c(r,o)}),[r,o]),s=(0,n.useRef)(),p=(0,n.useRef)(),f=(0,n.useRef)(),d=(0,n.useRef)(),y=r.getState();try{if(e!==p.current||y!==f.current||s.current){var v=e(y);a=void 0!==d.current&&t(v,d.current)?d.current:v}else a=d.current}catch(O){throw s.current&&(O.message+="\nThe error may be correlated with this previous error:\n"+s.current.stack+"\n\n"),O}return l((function(){p.current=e,f.current=y,d.current=a,s.current=void 0})),l((function(){function e(){try{var e=r.getState();if(e===f.current)return;var n=p.current(e);if(t(n,d.current))return;d.current=n,f.current=e}catch(O){s.current=O}i()}return u.onStateChange=e,u.trySubscribe(),e(),function(){return u.tryUnsubscribe()}}),[r,u]),a}(e,r,o.store,o.subscription);return(0,n.useDebugValue)(a),a}}var Y,J=K(),Q=r(3935);Y=Q.unstable_batchedUpdates,a=Y},8359:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,u=r?Symbol.for("react.profiler"):60114,c=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,f=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,y=r?Symbol.for("react.suspense_list"):60120,v=r?Symbol.for("react.memo"):60115,O=r?Symbol.for("react.lazy"):60116,E=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,S=r?Symbol.for("react.responder"):60118,m=r?Symbol.for("react.scope"):60119;function _(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case p:case a:case u:case i:case d:return e;default:switch(e=e&&e.$$typeof){case l:case f:case O:case v:case c:return e;default:return t}}case o:return t}}}function P(e){return _(e)===p}t.isContextConsumer=function(e){return _(e)===l}},2973:function(e,t,r){"use strict";e.exports=r(8359)},907:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},7462:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},3366:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},2982:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(907);var o=r(181);function a(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},181:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(907);function o(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var r=e.O();_N_E=r}]);