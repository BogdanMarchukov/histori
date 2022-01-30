(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./Components/Layout/MainLayout.tsx + 6 modules
var MainLayout = __webpack_require__(3434);
// EXTERNAL MODULE: ./redux/index.ts + 7 modules
var redux = __webpack_require__(4414);
// EXTERNAL MODULE: ./redux/action-creators/homePageActionCreator.ts
var homePageActionCreator = __webpack_require__(9350);
// EXTERNAL MODULE: ./models/TokenHandler.ts
var TokenHandler = __webpack_require__(4345);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./Components/HomePageContent/homePageContent.module.css
var homePageContent_module = __webpack_require__(8959);
var homePageContent_module_default = /*#__PURE__*/__webpack_require__.n(homePageContent_module);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(7949);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./Components/HomePageContent/HomePageContent.tsx







const HomePageContent = props => {
  const {
    0: animal,
    1: setAnimal
  } = (0,external_react_.useState)((homePageContent_module_default()).slotOne);

  const animation = name => {
    setAnimal((homePageContent_module_default()).slotStart);
    setTimeout(() => {
      if (name === 'one') {
        setAnimal((homePageContent_module_default()).slotOne);
      }

      if (name === 'two') {
        setAnimal((homePageContent_module_default()).slotTwo);
      }

      if (name === 'three') {
        setAnimal((homePageContent_module_default()).slotThree);
      }

      if (name === 'four') {
        setAnimal((homePageContent_module_default()).slotFour);
      }
    }, 600);
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (homePageContent_module_default()).contentContainer,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        md: 10,
        xl: 10,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homePageContent_module_default()).rootContent,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
            container: true,
            className: `${(homePageContent_module_default()).rootContentCont} ${animal}`,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
              className: (homePageContent_module_default()).histori,
              item: true,
              md: 6,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
              className: (homePageContent_module_default()).economy,
              item: true,
              md: 6,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
              className: (homePageContent_module_default()).right,
              item: true,
              md: 6,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "\u041F\u0440\u0430\u0432\u043E"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?"
                })
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
              className: (homePageContent_module_default()).society,
              item: true,
              md: 6,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
                children: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0430"
              }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("p", {
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam deserunt dignissimos eos eveniet excepturi illo incidunt necessitatibus, provident unde voluptatem! Excepturi quidem quod suscipit. Ab accusantium architecto consequuntur ipsum tenetur?"
                })
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        md: 2,
        xl: 2,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (homePageContent_module_default()).rightContent,
          children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/post/story?id=0',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                    onMouseOver: () => animation('one'),
                    children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/post/society?id=0',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                    onMouseOver: () => animation('two'),
                    children: "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/post/jurisprudence?id=0',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                    onMouseOver: () => animation('three'),
                    children: "\u041F\u0440\u0430\u0432\u043E"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: '/post/economy?id=0',
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("li", {
                    onMouseOver: () => animation('four'),
                    children: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0430"
                  })
                })
              })]
            })
          })
        })
      })]
    })
  });
};

/* harmony default export */ const HomePageContent_HomePageContent = (HomePageContent);
;// CONCATENATED MODULE: ./pages/index.tsx








const Home = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(MainLayout/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx(HomePageContent_HomePageContent, {})
  });
};

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
} //@ts-ignore


const getServerSideProps = redux/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async context => {
  const {
    token
  } = context.req.cookies;
  let userId = false;

  if (token) {
    userId = await TokenHandler/* TokenHandler.decodedPayloadRefresh */.M.decodedPayloadRefresh(token);

    if (userId) {
      const response = await fetch(`${process.env.API_URL}/api/init/user`, {
        method: 'POST',
        body: JSON.stringify({
          userId
        }),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const result = await response.json(); // @ts-ignore

      if (!result.error) {
        // @ts-ignore
        store.dispatch((0,homePageActionCreator/* initUser */.PJ)(result));
      }
    }
  }
});
/* harmony default export */ const pages = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(Home));

/***/ }),

/***/ 8959:
/***/ ((module) => {

// Exports
module.exports = {
	"contentContainer": "homePageContent_contentContainer__2EXGT",
	"imageBlock": "homePageContent_imageBlock__3CkB7",
	"rightContent": "homePageContent_rightContent__2yxAd",
	"rootContent": "homePageContent_rootContent__1jBPv",
	"rootContentCont": "homePageContent_rootContentCont__3MbtH",
	"histori": "homePageContent_histori__2ujDr",
	"right": "homePageContent_right__P9rr1",
	"economy": "homePageContent_economy__1cu3E",
	"society": "homePageContent_society__38Kc6",
	"slotStart": "homePageContent_slotStart__1Xu6D",
	"slotOne": "homePageContent_slotOne__3VJPx",
	"slotTwo": "homePageContent_slotTwo__2Osow",
	"slotThree": "homePageContent_slotThree__24gkU",
	"slotFour": "homePageContent_slotFour__3wUK0"
};


/***/ }),

/***/ 2368:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/AddLocationOutlined");

/***/ }),

/***/ 5162:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/icons-material/Edit");

/***/ }),

/***/ 7949:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ 1586:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Box");

/***/ }),

/***/ 1874:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Button");

/***/ }),

/***/ 2675:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Grid");

/***/ }),

/***/ 3701:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Modal");

/***/ }),

/***/ 6351:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/Tab");

/***/ }),

/***/ 8258:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 9722:
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ 7548:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 5619:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 2744:
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7561:
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ 5694:
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ }),

/***/ 2224:
/***/ ((module) => {

"use strict";
module.exports = require("simple-react-validator");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,345,908,718,414,434], () => (__webpack_exec__(383)));
module.exports = __webpack_exports__;

})();