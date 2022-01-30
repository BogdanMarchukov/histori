(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{5725:function(e,n,t){"use strict";t.d(n,{ZP:function(){return j}});var r=t(1048),i=t(2793),s=t(7294),a=(t(5697),t(6010)),l=t(5408),c=t(9707),o=t(7463),u=t(9602),d=t(6122);var h=s.createContext(),m=t(1420);function p(e){return(0,m.Z)("MuiGrid",e)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var g=(0,t(1271).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...f.map((e=>`grid-xs-${e}`)),...f.map((e=>`grid-sm-${e}`)),...f.map((e=>`grid-md-${e}`)),...f.map((e=>`grid-lg-${e}`)),...f.map((e=>`grid-xl-${e}`))]),_=t(5893);const x=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function v(e){const n=parseFloat(e);return`${n}${String(e).replace(String(n),"")||"px"}`}const S=(0,u.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,n)=>{const{container:t,direction:r,item:i,lg:s,md:a,sm:l,spacing:c,wrap:o,xl:u,xs:d,zeroMinWidth:h}=e.ownerState;return[n.root,t&&n.container,i&&n.item,h&&n.zeroMinWidth,t&&0!==c&&n[`spacing-xs-${String(c)}`],"row"!==r&&n[`direction-xs-${String(r)}`],"wrap"!==o&&n[`wrap-xs-${String(o)}`],!1!==d&&n[`grid-xs-${String(d)}`],!1!==l&&n[`grid-sm-${String(l)}`],!1!==a&&n[`grid-md-${String(a)}`],!1!==s&&n[`grid-lg-${String(s)}`],!1!==u&&n[`grid-xl-${String(u)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"nowrap"===e.wrap&&{flexWrap:"nowrap"},"reverse"===e.wrap&&{flexWrap:"wrap-reverse"})),(function({theme:e,ownerState:n}){return(0,l.k9)({theme:e},n.direction,(e=>{const n={flexDirection:e};return 0===e.indexOf("column")&&(n[`& > .${g.item}`]={maxWidth:"none"}),n}))}),(function({theme:e,ownerState:n}){const{container:t,rowSpacing:r}=n;let i={};return t&&0!==r&&(i=(0,l.k9)({theme:e},r,(n=>{const t=e.spacing(n);return"0px"!==t?{marginTop:`-${v(t)}`,[`& > .${g.item}`]:{paddingTop:v(t)}}:{}}))),i}),(function({theme:e,ownerState:n}){const{container:t,columnSpacing:r}=n;let i={};return t&&0!==r&&(i=(0,l.k9)({theme:e},r,(n=>{const t=e.spacing(n);return"0px"!==t?{width:`calc(100% + ${v(t)})`,marginLeft:`-${v(t)}`,[`& > .${g.item}`]:{paddingLeft:v(t)}}:{}}))),i}),(({theme:e,ownerState:n})=>e.breakpoints.keys.reduce(((t,r)=>(function(e,n,t,r){const s=r[t];if(!s)return;let a={};if(!0===s)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===s)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const e=(0,l.P$)({values:r.columns,base:n.breakpoints.values}),c=Math.round(s/e[t]*1e8)/1e6+"%";let o={};if(r.container&&r.item&&0!==r.columnSpacing){const e=n.spacing(r.columnSpacing);if("0px"!==e){const n=`calc(${c} + ${v(e)})`;o={flexBasis:n,maxWidth:n}}}a=(0,i.Z)({flexBasis:c,flexGrow:0,maxWidth:c},o)}0===n.breakpoints.values[t]?Object.assign(e,a):e[n.breakpoints.up(t)]=a}(t,e,r,n),t)),{})));var j=s.forwardRef((function(e,n){const t=(0,d.Z)({props:e,name:"MuiGrid"}),l=(0,c.Z)(t),{className:u,columns:m=12,columnSpacing:f,component:g="div",container:v=!1,direction:j="row",item:y=!1,lg:N=!1,md:w=!1,rowSpacing:z,sm:T=!1,spacing:b=0,wrap:k="wrap",xl:O=!1,xs:E=!1,zeroMinWidth:M=!1}=l,L=(0,r.Z)(l,x),R=z||b,F=f||b,$=s.useContext(h)||m,C=(0,i.Z)({},l,{columns:$,container:v,direction:j,item:y,lg:N,md:w,sm:T,rowSpacing:R,columnSpacing:F,wrap:k,xl:O,xs:E,zeroMinWidth:M}),J=(e=>{const{classes:n,container:t,direction:r,item:i,lg:s,md:a,sm:l,spacing:c,wrap:u,xl:d,xs:h,zeroMinWidth:m}=e,f={root:["root",t&&"container",i&&"item",m&&"zeroMinWidth",t&&0!==c&&`spacing-xs-${String(c)}`,"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==u&&`wrap-xs-${String(u)}`,!1!==h&&`grid-xs-${String(h)}`,!1!==l&&`grid-sm-${String(l)}`,!1!==a&&`grid-md-${String(a)}`,!1!==s&&`grid-lg-${String(s)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,o.Z)(f,p,n)})(C);return P=(0,_.jsx)(S,(0,i.Z)({ownerState:C,className:(0,a.Z)(J.root,u),as:g,ref:n},L)),12!==$?(0,_.jsx)(h.Provider,{value:$,children:P}):P;var P}))},9707:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(4695),i=t(916),s=t(4178);const a=["sx"];function l(e){const{sx:n}=e,t=(0,i.Z)(e,a),{systemProps:l,otherProps:c}=(e=>{const n={systemProps:{},otherProps:{}};return Object.keys(e).forEach((t=>{s.G[t]?n.systemProps[t]=e[t]:n.otherProps[t]=e[t]})),n})(t);return(0,r.Z)({},c,{sx:(0,r.Z)({},l,n)})}},7668:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSP:function(){return F},default:function(){return $}});var r=t(7294),i=t(6787),s=t(5725),a=t(8804),l=t.n(a),c=t(8216),o=t(8277),u=t.n(o),d=t(2982),h=t(7624),m=t.n(h),p=t(5893);function f(e){var n=e.inlineStyleRanges,t=e.text,i=(0,r.useRef)([(0,p.jsx)(r.Fragment,{},Math.random())]),s=(0,r.useRef)(0);return function(){if(n.length>0){var e=function(e){var n=[],t=[];return e.forEach((function(e,r){if(0===r)return t.push(e),!0;if(t.length){if(r>0&&e.offset===t[t.length-1].offset)return t.push(e),!0;n.push(JSON.parse(JSON.stringify(t))),t.length=0,t.push(e)}})),n.push(t),n}(n),a=e.map((function(e,n){var t=[],r=[],i=[];return e.forEach((function(e,n){return["TEXT_LEFT","TEXT_RIGHT","TEXT_CENTER"].includes(e.style)?(t.push(e),!0):["Red","Yellow","Pink","Green","DarkBlue","Black","Grey","Orange"].includes(e.style)?(r.push(e),!0):["size8","size9","size10","size11","size12","size14","size16","size18","size20","size22","size24","size26","size28","size36","size48","size72"].includes(e.style)?(i.push(e),!0):void 0})),t.length&&r.length&&i.length?[r[r.length-1],t[t.length-1],i[i.length-1]]:t.length&&r.length?[t[t.length-1],r[r.length-1]]:r.length&&i.length?[r[r.length-1],i[i.length-1]]:t.length&&i.length?[t[t.length-1],t[t.length-1]]:t.length?[t[t.length-1]]:r.length?[r[r.length-1]]:i.length?[i[i.length-1]]:e}));a.forEach((function(e,n){var l="",c=function(){e.forEach((function(e){l="".concat(l," ").concat(m()[e.style])}))};return n===a.length-1?(c(),i.current=[].concat((0,d.Z)(i.current),[(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{children:t.substring(s.current,e[0].offset)})},Math.random()),(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{className:l,children:t.substring(e[0].offset,e[0].offset+e[0].length)})},Math.random()),(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{children:t.substring(e[0].offset+e[0].length)})},Math.random())]),!0):0===n&&e[0].offset>0?(c(),i.current=[(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{children:t.substring(0,e[0].offset)})},Math.random()),(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{className:l,children:t.substring(e[0].offset,e[0].offset+e[0].length)})},Math.random())],s.current=e[0].offset+e[0].length,!0):n>0&&s.current<e[0].offset?(c(),i.current=[].concat((0,d.Z)(i.current),[(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{children:t.substring(s.current,e[0].offset)})},Math.random()),(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{className:l,children:t.substring(e[0].offset,e[0].offset+e[0].length)})},Math.random())]),s.current=e[0].offset+e[0].length,!0):void 0}))}else i.current=[(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("span",{children:t})},Math.random())]}(),{textBlock:i.current}}var g=function(e){var n=e.content,t=n.type,i=n.key,s=f(JSON.parse(JSON.stringify(e.content))).textBlock;switch(t){case"header-one":return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("h1",{className:m().elementH1,children:s},i)});case"header-two":return(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("h2",{className:m().elementH1,children:s},i),(0,p.jsx)("br",{})]});case"unstyled":case"split-block":return(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("span",{children:s}),(0,p.jsx)("br",{})]},i);case"unordered-list-item":return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("li",{children:s})},i);case"table":return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("td",{children:s})},i);case"ordered-list-item":return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("li",{children:s})},i);default:return null}},_=function(e){(0,c.I0)();var n=(0,r.useState)(!1);n[0],n[1];return(0,p.jsx)("div",{className:u().renderTextWrapper,children:(0,p.jsx)("article",{children:function(e){var n=[],t=[];return e.blocks.forEach((function(r,i){var s=r.type;if("header-one"===s)return n.push(JSON.parse(JSON.stringify(r))),!0;if("header-two"===s&&0===i)return n.push(JSON.parse(JSON.stringify(r))),!0;if("header-two"!==s){if(e.blocks.length-1!==i)return n.push(JSON.parse(JSON.stringify(r))),!0;n.push(JSON.parse(JSON.stringify(r))),t.push([JSON.parse(JSON.stringify(n))])}"header-two"===s&&(t.push([JSON.parse(JSON.stringify(n))]),n.length=0,n.push(JSON.parse(JSON.stringify(r))))})),t}(e.content).map((function(n,t){return(0,p.jsxs)(r.Fragment,{children:[0===t?(0,p.jsx)(g,{content:n[0][0]}):null," ",(0,p.jsx)("section",{children:n.map((function(n,i){var s=[],a=[],l=[],c=[],o=[],d=[],h=[],m=[],f=!0;return(0,p.jsx)(r.Fragment,{children:n.map((function(_,x){if(0===t&&0===i&&0===x)return null;if("table"===_.type&&o.length===+e.tableCells[0])return d=JSON.parse(JSON.stringify(o)),o.length=0,h.push(d),o.push(_),null;if("table"!==_.type&&h.length||x===n.length-1&&h.length)return"table"===_.type&&o.push(_),d=JSON.parse(JSON.stringify(o)),o.length=0,h.push(d),m=JSON.parse(JSON.stringify(h)),h.length=0,(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("table",{className:u().table,children:(0,p.jsx)("tbody",{children:m.map((function(e){return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)("tr",{children:e.map((function(e){return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)(g,{content:e})},Math.random())}))})},Math.random())}))},Math.random())},Math.random()),f?(0,p.jsx)(g,{content:_}):null]},Math.random());if("table"===_.type&&o.length!==+e.tableCells[0])return o.push(_),null;if("unordered-list-item"===_.type){if(s.push(_),x!==n.length-1)return null;f=!1}if(s.length)return a=JSON.parse(JSON.stringify(s)),s.length=0,(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("ul",{children:a.map((function(e){return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)(g,{content:e})},Math.random())}))}),f?(0,p.jsx)(g,{content:_}):null]},Math.random());if("ordered-list-item"===_.type){if(l.push(_),x!==n.length-1)return null;f=!1}return l.length?(c=JSON.parse(JSON.stringify(l)),l.length=0,(0,p.jsxs)(r.Fragment,{children:[(0,p.jsx)("ol",{children:c.map((function(e){return(0,p.jsx)(r.Fragment,{children:(0,p.jsx)(g,{content:e})},Math.random())}))}),f?(0,p.jsx)(g,{content:_}):null]},Math.random())):(0,p.jsx)(r.Fragment,{children:(0,p.jsx)(g,{content:_})},Math.random())}))},Math.random())}))})]},Math.random())}))})})},x=r.memo(_);var v=(0,c.$j)((function(e){return{currentArticle:e.textReducer.currentArticle,tableCells:e.textReducer.tableCells}}),(function(e){return{}}))((function(e){return(0,p.jsx)("div",{className:l().wrapper,children:e.currentArticle?(0,p.jsx)(x,{content:e.currentArticle,tableCells:e.tableCells}):null})})),S=t(885),j=t(1659),y=t.n(j),N=t(5930),w=t.n(N),z=function(e){return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,p.jsx)("path",{d:"M24 24H0V0h24v24z",fill:"none",opacity:".87"}),(0,p.jsx)("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"})]})})},T=t(1664),b=function(e){var n=e.categoryName,t=e.list,i=e.callbackHandlers,s=void 0===i?null:i,a=e.firstPoint,l=e.linksHref,c=void 0===l?[]:l,o=(0,r.useState)(!1),u=o[0],d=o[1],h=(0,r.useState)(0),m=h[0],f=h[1],g=function(e){return e===m?(0,p.jsx)("span",{className:w().activeSpan}):null};return(0,p.jsx)("div",{className:w().lest,children:(0,p.jsxs)("div",{children:[(0,p.jsx)("button",{onClick:function(){return d((function(e){return!e}))},className:w().btn,children:(0,p.jsxs)("div",{className:u?w().textBlockActive:w().textBlock,children:[n,(0,p.jsx)(z,{})]})}),(0,p.jsx)("ul",{className:u?w().activeList:w().none,children:t.map((function(e,n){var t,i=0===n&&a?a:e;return function(e,n){return c.length?(0,p.jsx)(r.Fragment,{children:(0,p.jsx)(T.default,{href:c[n],children:(0,p.jsx)("a",{className:w().link,children:e})})},Math.random()):e}((0,p.jsx)(r.Fragment,{children:(0,p.jsxs)("li",{onClick:function(){!function(e){!s||s[e]()}(n),f(n)},className:(t=n,t===m?w().currentList:""),children:[i,g(n)]})},Math.random()),n)}))})]})})},k=t(5359),O=function(e){var n=(0,c.v9)((function(e){return{paragraphList:e.textReducer.paragraphList,currentArticleCash:e.textReducer.currentArticleCash,articleList:e.textReducer.articleList,dirName:e.textReducer.dirName}})),t=n.paragraphList,r=n.currentArticleCash,i=n.articleList,s=n.dirName,a=(0,c.I0)();var l=function(){var e=[],n=[];return i&&i.forEach((function(t,r){var i=Object.keys(t),a=(0,S.Z)(i,1)[0],l=t[a];n.push(l),e.push("/post/".concat(s,"?id=").concat(a))})),{linkList:e,listName:n}}(),o=l.linkList,u=l.listName;return(0,p.jsx)("div",{className:y().nawWrapper,children:(0,p.jsx)("div",{className:y().navigation,children:(0,p.jsxs)("nav",{children:[(0,p.jsx)(b,{categoryName:"\u0421\u043e\u0436\u0435\u0440\u0436\u0430\u043d\u0438\u0435",list:null!==t&&void 0!==t?t:[],callbackHandlers:t?t.map((function(e){return function(){return(0,k.Zo)(a,r,e)}})):[],firstPoint:"\u0432 \u043d\u0430\u0447\u0430\u043b\u043e"}),(0,p.jsx)("div",{className:y().margin,children:(0,p.jsx)(b,{categoryName:"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u0442\u0430\u0442\u0435\u0439",list:u,linksHref:o,firstPoint:null})})]})})})},E=t(8473),M=t.n(E),L=t(1163),R=function(e){var n=(0,r.useState)(M().none),t=n[0],i=n[1],s=(0,c.v9)((function(e){return{role:e.userReducer.role,dirName:e.textReducer.dirName,idArticle:e.textReducer._id}})),a=s.role,l=s.dirName,o=s.idArticle,u=(0,c.I0)(),d=(0,L.useRouter)();return a&&a.includes("admin")?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{onMouseMove:function(){return i(M().panel)},className:M().trigger}),(0,p.jsx)("div",{onMouseMove:function(){return i(M().none)},className:M().closePanel}),(0,p.jsxs)("div",{className:t,children:[(0,p.jsx)("div",{className:M().namePanel,children:(0,p.jsxs)("p",{children:["\u041f\u0430\u043d\u0435\u043b\u044c",(0,p.jsx)("br",{}),"\u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u0430"]})}),(0,p.jsx)("div",{className:M().content,children:(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:(0,p.jsx)(T.default,{href:"/edit-text",children:(0,p.jsx)("a",{onClick:function(){return(0,k.Cn)(u,"edit")},children:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})})}),(0,p.jsx)("li",{children:(0,p.jsx)(T.default,{href:"/edit-text",children:(0,p.jsx)("a",{onClick:function(){return(0,k.Cn)(u,"create")},children:"\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e"})})}),(0,p.jsx)("li",{onClick:function(){return(0,k.Ix)(u,null!==l&&void 0!==l?l:"",null!==o&&void 0!==o?o:"",d)},children:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e"})]})})]})]}):null},F=!0,$=function(e){return(0,p.jsx)(i.Z,{children:(0,p.jsxs)(s.ZP,{container:!0,children:[(0,p.jsx)(s.ZP,{item:!0,xs:9,children:(0,p.jsx)(v,{})}),(0,p.jsxs)(s.ZP,{item:!0,xs:3,children:[(0,p.jsx)(R,{}),(0,p.jsx)(O,{})]})]})})}},5359:function(e,n,t){"use strict";t.d(n,{gv:function(){return u},j8:function(){return d},Ix:function(){return m},Zo:function(){return f},Cn:function(){return g}});var r=t(5861),i=t(7757),s=t.n(i),a=t(908),l=t(8393),c=t(9350);function o(e,n){e({type:a.M.SAVE_TEXT,payload:n})}function u(e,n){e({type:a.M.TABLE_SELECT_SAVE,payload:n})}function d(e,n,t,r,i){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(n,t,i,a,u){var h,m,p,f,g,_,x,v=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h=v.length>5&&void 0!==v[5]?v[5]:null,m=v.length>6?v[6]:void 0,p={categoryName:a,article:t,tableCells:i},f=function(){return"create"===u?"api/create/article":"edit"===u?"api/edit/post/".concat(h):void 0},e.prev=4,e.next=7,fetch(null!==(g=f())&&void 0!==g?g:"",{method:"POST",headers:{Authorization:null!==(_=(0,l.$o)("accessToken"))&&void 0!==_?_:"null","Content-Type":"application/json"},body:JSON.stringify(p)});case 7:x=e.sent,(0,l.E1)(x,(function(){return d(n,t,i,a,u,h,m)}),n).then(function(){var e=(0,r.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Ok"!==t){e.next=6;break}return e.next=3,x.json();case 3:return r=e.sent,o(n,r),e.abrupt("return",m.push("/post/".concat(a,"?id=").concat(r.article._id)));case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),(0,c.cz)(n,{error:!0,errorMassage:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u043d\u0435\u043d\u043d\u044b"},"error");case 14:case"end":return e.stop()}}),e,null,[[4,11]])})))).apply(this,arguments)}function m(e,n,t,r){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(n,t,r,i){var a,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/delete/post/".concat(t,"?id=").concat(r),{method:"POST",headers:{Authorization:null!==(a=(0,l.$o)("accessToken"))&&void 0!==a?a:""}});case 2:return o=e.sent,e.next=5,(0,l.E1)(o,(function(){return m(n,t,r,i)}),n);case 5:"Ok"===e.sent&&((0,c.cz)(n,{error:!0,errorMassage:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b \u0443\u0434\u0430\u043b\u0435\u043d"},"success"),setTimeout((function(){return i.push("/post/".concat(t,"?id=0"))}),1e3));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,n,t){if(n){var r=n.blocks,i=!1,s=!1,l=JSON.parse(JSON.stringify(n));t===n.blocks[0].text||(l.blocks=r.filter((function(e){var n=e.type,r=e.text;return!(r!==t&&!s)&&(r===t?(s=!0,!0):!i&&"header-two"!==n||"header-two"===n&&(i=!0,!1))}))),e({type:a.M.FILTER_NAVIGATION_PARAGRAPH,payload:l})}}function g(e,n){e({type:a.M.SELECT_STATUS_EDITOR_TEXT,payload:n})}},9326:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/[dir]",function(){return t(7668)}])},8473:function(e){e.exports={trigger:"adminNavigation_trigger__2sDWW",panel:"adminNavigation_panel__2xCjE",closePanel:"adminNavigation_closePanel__3dBjW",none:"adminNavigation_none__3SMby",namePanel:"adminNavigation_namePanel__ScM_P",content:"adminNavigation_content__djoOk"}},5930:function(e){e.exports={lest:"listNavigation_lest__1C_Ey",none:"listNavigation_none__1LuHT",btn:"listNavigation_btn__3gTS4",textBlock:"listNavigation_textBlock__2OGmS",textBlockActive:"listNavigation_textBlockActive__2NwlH",activeList:"listNavigation_activeList__2WD5-",link:"listNavigation_link__19Jl7",currentList:"listNavigation_currentList__2iOWv",activeSpan:"listNavigation_activeSpan__foUDD"}},1659:function(e){e.exports={nawWrapper:"navigationRight_nawWrapper__aXzsI",navigation:"navigationRight_navigation__3DKov",margin:"navigationRight_margin__3gMr4"}},8804:function(e){e.exports={wrapper:"PageMainContent_wrapper__2RLor"}},7624:function(e){e.exports={default:"elementStyles_default__2InGR",elementH1:"elementStyles_elementH1__t07Us",TEXT_CENTER:"elementStyles_TEXT_CENTER__1ANp7",Black:"elementStyles_Black__149Az",Red:"elementStyles_Red__2grTq",Grey:"elementStyles_Grey__M_R9f",LightLue:"elementStyles_LightLue__3yMtK",DarkBlue:"elementStyles_DarkBlue__2U-Wb",Green:"elementStyles_Green__1u3SL",Yellow:"elementStyles_Yellow__30dnj",Pink:"elementStyles_Pink__1vv8w",Orange:"elementStyles_Orange__1turV",size80:"elementStyles_size80__1JtGi",TEXT_LEFT:"elementStyles_TEXT_LEFT__1mjmC",TEXT_RIGHT:"elementStyles_TEXT_RIGHT__3buvY",BOLD:"elementStyles_BOLD__3sv-w",ITALIC:"elementStyles_ITALIC__2Agql",UNDERLINE:"elementStyles_UNDERLINE__3NRj4",LINE_THROUGH:"elementStyles_LINE_THROUGH__2KeoW",FONT_ROBOTO:"elementStyles_FONT_ROBOTO__1puJL",size8:"elementStyles_size8__1Df6u",size9:"elementStyles_size9__of_EC",size10:"elementStyles_size10__3VFst",size11:"elementStyles_size11__LlW_9",size12:"elementStyles_size12__1cJuH",size14:"elementStyles_size14__3I0Di",size16:"elementStyles_size16__2QmDu",size18:"elementStyles_size18__2Q2EW",size20:"elementStyles_size20__1Qgdl",size22:"elementStyles_size22__1NH7l",size24:"elementStyles_size24__nK-lB",size26:"elementStyles_size26__26ETw",size28:"elementStyles_size28__15vjF",size36:"elementStyles_size36__2fwTB",size48:"elementStyles_size48__3p5HL",size72:"elementStyles_size72__9LuGg"}},8277:function(e){e.exports={renderTextWrapper:"RenderText_renderTextWrapper__Lc0yV",table:"RenderText_table__1WomX"}},1163:function(e,n,t){e.exports=t(4651)},885:function(e,n,t){"use strict";t.d(n,{Z:function(){return i}});var r=t(181);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,s=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(s.push(r.value),!n||s.length!==n);a=!0);}catch(c){l=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(l)throw i}}return s}}(e,n)||(0,r.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(e){e.O(0,[824,914,774,888,179],(function(){return n=9326,e(e.s=n);var n}));var n=e.O();_N_E=n}]);