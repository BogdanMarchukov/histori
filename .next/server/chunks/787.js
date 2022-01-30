exports.id = 787;
exports.ids = [787];
exports.modules = {

/***/ 6787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout_PageLayout)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./Components/MiniNavigation/MiniNavigation.module.css
var MiniNavigation_module = __webpack_require__(746);
var MiniNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MiniNavigation_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./Components/MiniNavigation/MiniNavigation.tsx







const MiniNavigation = props => {
  const selector = state => {
    return {
      dirName: state.textReducer.dirName
    };
  };

  const {
    dirName
  } = (0,external_react_redux_.useSelector)(selector);
  const {
    0: classLink,
    1: setClassLink
  } = (0,external_react_.useState)([(MiniNavigation_module_default()).activeLink, '', '', '', '']);

  const classSelector = () => {
    switch (dirName) {
      case null:
        setClassLink([(MiniNavigation_module_default()).activeLink, '', '', '', '']);
        break;

      case 'story':
        setClassLink(['', (MiniNavigation_module_default()).activeLink, '', '', '']);
        break;

      case 'society':
        setClassLink(['', '', (MiniNavigation_module_default()).activeLink, '', '']);
        break;

      case 'jurisprudence':
        setClassLink(['', '', '', (MiniNavigation_module_default()).activeLink, '']);
        break;

      case 'economy':
        setClassLink(['', '', '', '', (MiniNavigation_module_default()).activeLink]);
        break;
    }
  };

  (0,external_react_.useEffect)(() => {
    classSelector();
  }, [dirName]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (MiniNavigation_module_default()).wrepper,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (MiniNavigation_module_default()).container,
      children: /*#__PURE__*/jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: '/',
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: classLink[0],
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: '/post/story?id=0',
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: classLink[1],
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: '/post/society?id=0',
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: classLink[2],
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "\u041E\u0431\u0449\u0435\u0441\u0442\u0432\u043E"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: '/post/jurisprudence?id=0',
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: classLink[3],
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "\u041F\u0440\u0430\u0432\u043E"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: '/post/economy?id=0',
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
              className: classLink[4],
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: "\u042D\u043A\u043E\u043D\u043E\u043C\u0438\u043A\u0430"
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const MiniNavigation_MiniNavigation = (MiniNavigation);
// EXTERNAL MODULE: ./Components/Footer/Footer.tsx
var Footer = __webpack_require__(7465);
// EXTERNAL MODULE: ./Components/AlertCustomize/AlertCustomize.tsx
var AlertCustomize = __webpack_require__(5666);
;// CONCATENATED MODULE: ./Components/Layout/PageLayout.tsx









const PageLayout = ({
  children
}) => {
  const selector = state => {
    return {
      alert: state.homePageReducer.alert
    };
  };

  const {
    alert
  } = (0,external_react_redux_.useSelector)(selector);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(MiniNavigation_MiniNavigation, {}), /*#__PURE__*/jsx_runtime_.jsx(AlertCustomize/* default */.Z, {
        alert: alert
      }), children, /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
    })
  });
};

/* harmony default export */ const Layout_PageLayout = (PageLayout);

/***/ }),

/***/ 746:
/***/ ((module) => {

// Exports
module.exports = {
	"wrepper": "MiniNavigation_wrepper__15Dqq",
	"activeLink": "MiniNavigation_activeLink__2nTd0",
	"none": "MiniNavigation_none__2H07q",
	"container": "MiniNavigation_container__EERlF"
};


/***/ })

};
;