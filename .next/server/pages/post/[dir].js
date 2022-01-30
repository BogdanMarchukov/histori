(() => {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 7668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _dir_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./Components/Layout/PageLayout.tsx + 1 modules
var PageLayout = __webpack_require__(6787);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(7949);
// EXTERNAL MODULE: ./Components/PageMainContent/PageMainContent.module.css
var PageMainContent_module = __webpack_require__(8591);
var PageMainContent_module_default = /*#__PURE__*/__webpack_require__.n(PageMainContent_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./Components/RenderText/RenderText.module.css
var RenderText_module = __webpack_require__(1839);
var RenderText_module_default = /*#__PURE__*/__webpack_require__.n(RenderText_module);
// EXTERNAL MODULE: ./Components/RenderText/RenderElements/elementStyles.module.css
var elementStyles_module = __webpack_require__(9894);
var elementStyles_module_default = /*#__PURE__*/__webpack_require__.n(elementStyles_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./Components/RenderText/RenderElements/useStyleText.tsx

 // сортировка по параметрам offset


function offsetSort(inlineStyleRanges) {
  const sortArray = []; // отсортированный массив

  const cache = [];
  inlineStyleRanges.forEach((i, index) => {
    if (index === 0) {
      cache.push(i);
      return true;
    }

    if (cache.length) {
      if (index > 0 && i.offset === cache[cache.length - 1].offset) {
        cache.push(i);
        return true;
      } else {
        sortArray.push(JSON.parse(JSON.stringify(cache)));
        cache.length = 0;
        cache.push(i);
      }
    }
  });
  sortArray.push(cache);
  return sortArray;
} // фильтрует классы по группам и удаляет дублирующие

function filterBlock(styleBlock) {
  return styleBlock.map((i, index) => {
    const flexSort = [];
    const colorSort = [];
    const sizeSort = [];
    i.forEach((item, itemIndex) => {
      const flex = ['TEXT_LEFT', 'TEXT_RIGHT', 'TEXT_CENTER'];
      const color = ['Red', 'Yellow', 'Pink', 'Green', 'DarkBlue', 'Black', 'Grey', 'Orange'];
      const size = ['size8', 'size9', 'size10', 'size11', 'size12', 'size14', 'size16', 'size18', 'size20', 'size22', 'size24', 'size26', 'size28', 'size36', 'size48', 'size72'];

      if (flex.includes(item.style)) {
        flexSort.push(item);
        return true;
      }

      if (color.includes(item.style)) {
        colorSort.push(item);
        return true;
      }

      if (size.includes(item.style)) {
        sizeSort.push(item);
        return true;
      }
    });

    if (flexSort.length && colorSort.length && sizeSort.length) {
      return [colorSort[colorSort.length - 1], flexSort[flexSort.length - 1], sizeSort[sizeSort.length - 1]];
    }

    if (flexSort.length && colorSort.length) {
      return [flexSort[flexSort.length - 1], colorSort[colorSort.length - 1]];
    }

    if (colorSort.length && sizeSort.length) {
      return [colorSort[colorSort.length - 1], sizeSort[sizeSort.length - 1]];
    }

    if (flexSort.length && sizeSort.length) {
      return [flexSort[flexSort.length - 1], flexSort[flexSort.length - 1]];
    }

    if (flexSort.length) {
      return [flexSort[flexSort.length - 1]];
    }

    if (colorSort.length) {
      return [colorSort[colorSort.length - 1]];
    }

    if (sizeSort.length) {
      return [sizeSort[sizeSort.length - 1]];
    } else {
      return i;
    }
  });
}
function useStyleText(content) {
  const {
    inlineStyleRanges,
    text
  } = content; // входные данные

  const textBlock = (0,external_react_.useRef)([/*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {}, Math.random())]); // дефолтный контент

  const offsetCount = (0,external_react_.useRef)(0); // основная логика по стилизации блоков

  function start() {
    if (inlineStyleRanges.length > 0) {
      const offsetArray = offsetSort(inlineStyleRanges); // сортировка по параметрам offset

      const deleteDabbleStyleArray = filterBlock(offsetArray); // фильтрует классы по группам и удаляет дублирующие

      deleteDabbleStyleArray.forEach((i, index) => {
        let cls = '';

        const clsName = () => {
          i.forEach(item => {
            cls = `${cls} ${(elementStyles_module_default())[item.style]}`;
          });
        };

        if (index === deleteDabbleStyleArray.length - 1) {
          clsName();
          textBlock.current = [...textBlock.current, /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: text.substring(offsetCount.current, i[0].offset)
            })
          }, Math.random()), /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: cls,
              children: text.substring(i[0].offset, i[0].offset + i[0].length)
            })
          }, Math.random()), /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: text.substring(i[0].offset + i[0].length)
            })
          }, Math.random())];
          return true;
        }

        if (index === 0 && i[0].offset > 0) {
          clsName();
          textBlock.current = [/*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: text.substring(0, i[0].offset)
            })
          }, Math.random()), /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: cls,
              children: text.substring(i[0].offset, i[0].offset + i[0].length)
            })
          }, Math.random())];
          offsetCount.current = i[0].offset + i[0].length;
          return true;
        }

        if (index > 0 && offsetCount.current < i[0].offset) {
          clsName();
          textBlock.current = [...textBlock.current, /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: text.substring(offsetCount.current, i[0].offset)
            })
          }, Math.random()), /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: cls,
              children: text.substring(i[0].offset, i[0].offset + i[0].length)
            })
          }, Math.random())];
          offsetCount.current = i[0].offset + i[0].length;
          return true;
        }
      });
    } else textBlock.current = [/*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: text
      })
    }, Math.random())];
  }

  start();
  return {
    textBlock: textBlock.current
  };
}
;// CONCATENATED MODULE: ./Components/RenderText/RenderElements/Elements.tsx






const Elements = props => {
  const {
    type,
    key
  } = props.content;
  const {
    textBlock
  } = useStyleText(JSON.parse(JSON.stringify(props.content)));

  switch (type) {
    case 'header-one':
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: (elementStyles_module_default()).elementH1,
          children: textBlock
        }, key)
      });

    case 'header-two':
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
          className: (elementStyles_module_default()).elementH1,
          children: textBlock
        }, key), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      });

    case 'unstyled':
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: textBlock
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      }, key);

    case 'split-block':
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: textBlock
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
      }, key);

    case 'unordered-list-item':
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: textBlock
        })
      }, key);

    case 'table':
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("td", {
          children: textBlock
        })
      }, key);

    case 'ordered-list-item':
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: textBlock
        })
      }, key);

    default:
      return null;
  }
};

/* harmony default export */ const RenderElements_Elements = (Elements);
;// CONCATENATED MODULE: ./Components/RenderText/RenderText.tsx







const RenderText = props => {
  const dispatch = (0,external_react_redux_.useDispatch)();
  const {
    0: clientRender,
    1: setClientRender
  } = (0,external_react_.useState)(false); // функция разбивает контент на параграфы

  const paragraph = content => {
    // сортировка контента по блокам параграфам
    const blockParagraph = [];
    const blocksContent = [];
    content.blocks.forEach((item, index) => {
      const {
        type
      } = item;

      if (type === 'header-one') {
        blockParagraph.push(JSON.parse(JSON.stringify(item)));
        return true;
      }

      if (type === 'header-two' && index === 0) {
        blockParagraph.push(JSON.parse(JSON.stringify(item)));
        return true;
      }

      if (type !== 'header-two') {
        if (content.blocks.length - 1 === index) {
          blockParagraph.push(JSON.parse(JSON.stringify(item)));
          blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))]);
        } else {
          blockParagraph.push(JSON.parse(JSON.stringify(item)));
          return true;
        }
      }

      if (type === 'header-two') {
        blocksContent.push([JSON.parse(JSON.stringify(blockParagraph))]);
        blockParagraph.length = 0;
        blockParagraph.push(JSON.parse(JSON.stringify(item)));
      }
    });
    return blocksContent;
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (RenderText_module_default()).renderTextWrapper,
    children: /*#__PURE__*/jsx_runtime_.jsx("article", {
      children: paragraph(props.content).map((item, index) => {
        return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
          children: [index === 0 ? /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
            content: item[0][0]
          }) : null, " ", /*#__PURE__*/jsx_runtime_.jsx("section", {
            children: item.map((i, ind) => {
              const ulList = []; // сохраняем элименты li маркированный список

              let ulListCache = []; // капируем элимены li для того чтобы отчистить массив радитель

              const olList = []; // нумерованный список

              let olListCache = [];
              const line = []; // сортировка ячеек таблицы по строкам

              let lineCache = []; // кеш строк таблицы

              let table = []; // вся таблица целеком разбита на строки

              let tableCache = [];
              let lastElement = true;
              return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
                children: i.map((k, indexK) => {
                  function renderTable() {
                    tableCache = JSON.parse(JSON.stringify(table));
                    table.length = 0;
                    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("table", {
                        className: (RenderText_module_default()).table,
                        children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                          children: tableCache.map(line => {
                            // линия таблицы
                            return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
                              children: /*#__PURE__*/jsx_runtime_.jsx("tr", {
                                children: line.map(cell => {
                                  // ячейка табл
                                  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
                                    children: /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
                                      content: cell
                                    })
                                  }, Math.random());
                                })
                              })
                            }, Math.random());
                          })
                        }, Math.random())
                      }, Math.random()), lastElement ? /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
                        content: k
                      }) : null]
                    }, Math.random());
                  }

                  if (index === 0 && ind === 0 && indexK === 0) {
                    return null; // исключаем заголовок h1
                  }

                  if (k.type === 'table' && line.length === +props.tableCells[0]) {
                    lineCache = JSON.parse(JSON.stringify(line));
                    line.length = 0;
                    table.push(lineCache);
                    line.push(k);
                    return null;
                  }

                  if (k.type !== 'table' && table.length || indexK === i.length - 1 && table.length) {
                    if (k.type === 'table') {
                      line.push(k);
                    }

                    lineCache = JSON.parse(JSON.stringify(line));
                    line.length = 0;
                    table.push(lineCache);
                    return renderTable();
                  }

                  if (k.type === 'table' && line.length !== +props.tableCells[0]) {
                    line.push(k);
                    return null;
                  }

                  if (k.type === 'unordered-list-item') {
                    ulList.push(k);

                    if (indexK !== i.length - 1) {
                      return null;
                    } else {
                      lastElement = false;
                    }
                  }

                  if (ulList.length) {
                    ulListCache = JSON.parse(JSON.stringify(ulList));
                    ulList.length = 0;
                    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("ul", {
                        children: ulListCache.map(ul => {
                          return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
                              content: ul
                            })
                          }, Math.random());
                        })
                      }), lastElement ? /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
                        content: k
                      }) : null]
                    }, Math.random());
                  }

                  if (k.type === 'ordered-list-item') {
                    olList.push(k);

                    if (indexK !== i.length - 1) {
                      return null;
                    } else {
                      lastElement = false;
                    }
                  }

                  if (olList.length) {
                    olListCache = JSON.parse(JSON.stringify(olList));
                    olList.length = 0;
                    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                      children: [/*#__PURE__*/jsx_runtime_.jsx("ol", {
                        children: olListCache.map(ul => {
                          return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
                            children: /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
                              content: ul
                            })
                          }, Math.random());
                        })
                      }), lastElement ? /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
                        content: k
                      }) : null]
                    }, Math.random());
                  }

                  return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
                    children: /*#__PURE__*/jsx_runtime_.jsx(RenderElements_Elements, {
                      content: k
                    })
                  }, Math.random());
                })
              }, Math.random());
            })
          })]
        }, Math.random());
      })
    })
  });
};

/* harmony default export */ const RenderText_RenderText = (/*#__PURE__*/external_react_default().memo(RenderText));
;// CONCATENATED MODULE: ./Components/PageMainContent/PageMainContent.tsx






const PageMainContent = props => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (PageMainContent_module_default()).wrapper,
    children: props.currentArticle ? /*#__PURE__*/jsx_runtime_.jsx(RenderText_RenderText, {
      content: props.currentArticle,
      tableCells: props.tableCells
    }) : null
  });
};

function mapStateToProps(state) {
  return {
    currentArticle: state.textReducer.currentArticle,
    tableCells: state.textReducer.tableCells
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

/* harmony default export */ const PageMainContent_PageMainContent = ((0,external_react_redux_.connect)(mapStateToProps, mapDispatchToProps)(PageMainContent));
// EXTERNAL MODULE: ./redux/index.ts + 7 modules
var redux = __webpack_require__(4414);
// EXTERNAL MODULE: ./redux/action-creators/editorTextActionCreator.ts
var editorTextActionCreator = __webpack_require__(5359);
// EXTERNAL MODULE: ./Components/NavigationRight/navigationRight.module.css
var navigationRight_module = __webpack_require__(8449);
var navigationRight_module_default = /*#__PURE__*/__webpack_require__.n(navigationRight_module);
// EXTERNAL MODULE: ./Components/ListNavigation/listNavigation.module.css
var listNavigation_module = __webpack_require__(4235);
var listNavigation_module_default = /*#__PURE__*/__webpack_require__.n(listNavigation_module);
;// CONCATENATED MODULE: ./Components/IconSvg/IconArrowDown.tsx





const IconArrowDown = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "24px",
      viewBox: "0 0 24 24",
      width: "24px",
      fill: "#000000",
      children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M24 24H0V0h24v24z",
        fill: "none",
        opacity: ".87"
      }), /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
      })]
    })
  });
};

/* harmony default export */ const IconSvg_IconArrowDown = (IconArrowDown);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./Components/ListNavigation/ListNavigation.tsx







const ListNavigation = ({
  categoryName,
  list,
  callbackHandlers = null,
  firstPoint,
  linksHref = []
}) => {
  const {
    0: open,
    1: setOpen
  } = (0,external_react_.useState)(false);
  const {
    0: indexActive,
    1: setIndexActive
  } = (0,external_react_.useState)(0);

  const selectButton = () => {
    return open ? (listNavigation_module_default()).textBlockActive : (listNavigation_module_default()).textBlock;
  };

  const selectList = () => {
    return open ? (listNavigation_module_default()).activeList : (listNavigation_module_default()).none;
  };

  const spanIndication = indexList => {
    if (indexList === indexActive) {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (listNavigation_module_default()).activeSpan
      });
    } else return null;
  };

  const currentList = indexList => {
    if (indexList === indexActive) {
      return (listNavigation_module_default()).currentList;
    } else return '';
  };

  const onClickHandler = index => {
    if (callbackHandlers) {
      return callbackHandlers[index]();
    } else return true;
  };

  const linkWrap = (jsx, index) => {
    if (linksHref.length) {
      return /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: linksHref[index],
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: (listNavigation_module_default()).link,
            children: jsx
          })
        })
      }, Math.random());
    } else {
      return jsx;
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (listNavigation_module_default()).lest,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => setOpen(open => !open),
        className: (listNavigation_module_default()).btn,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: selectButton(),
          children: [categoryName, /*#__PURE__*/jsx_runtime_.jsx(IconSvg_IconArrowDown, {})]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: selectList(),
        children: list.map((paragraph, index) => {
          const text = index === 0 && firstPoint ? firstPoint : paragraph;
          return linkWrap( /*#__PURE__*/jsx_runtime_.jsx((external_react_default()).Fragment, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              onClick: () => {
                onClickHandler(index);
                setIndexActive(index);
              },
              className: currentList(index),
              children: [text, spanIndication(index)]
            })
          }, Math.random()), index);
        })
      })]
    })
  });
};

/* harmony default export */ const ListNavigation_ListNavigation = (ListNavigation);
;// CONCATENATED MODULE: ./Components/NavigationRight/NavigationRight.tsx








const NavigationRight = props => {
  const selector = state => {
    return {
      // @ts-ignore
      paragraphList: state.textReducer.paragraphList,
      // @ts-ignore
      currentArticleCash: state.textReducer.currentArticleCash,
      // @ts-ignore
      articleList: state.textReducer.articleList,
      // @ts-ignore
      dirName: state.textReducer.dirName
    };
  }; // @ts-ignore


  const {
    paragraphList,
    currentArticleCash,
    articleList,
    dirName
  } = (0,external_react_redux_.useSelector)(selector);
  const dispatch = (0,external_react_redux_.useDispatch)();

  function createCallback() {
    if (paragraphList) {
      return paragraphList.map(paragraphName => {
        return () => (0,editorTextActionCreator/* navigationArticle */.Zo)(dispatch, currentArticleCash, paragraphName);
      });
    } else return [];
  }

  const createLink = () => {
    let linkList = [];
    let listName = [];

    if (articleList) {
      articleList.forEach((obj, index) => {
        const [id] = Object.keys(obj); // @ts-ignore

        const name = obj[id];
        listName.push(name);
        linkList.push(`/post/${dirName}?id=${id}`);
      });
    }

    return {
      linkList,
      listName
    };
  };

  const {
    linkList,
    listName
  } = createLink();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (navigationRight_module_default()).nawWrapper,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (navigationRight_module_default()).navigation,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(ListNavigation_ListNavigation, {
          categoryName: 'Сожержание',
          list: paragraphList !== null && paragraphList !== void 0 ? paragraphList : [],
          callbackHandlers: createCallback(),
          firstPoint: 'в начало'
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (navigationRight_module_default()).margin,
          children: /*#__PURE__*/jsx_runtime_.jsx(ListNavigation_ListNavigation, {
            categoryName: 'Список статей',
            list: listName,
            linksHref: linkList,
            firstPoint: null
          })
        })]
      })
    })
  });
};

/* harmony default export */ const NavigationRight_NavigationRight = (NavigationRight);
// EXTERNAL MODULE: ./models/TokenHandler.ts
var TokenHandler = __webpack_require__(4345);
// EXTERNAL MODULE: ./redux/action-creators/homePageActionCreator.ts
var homePageActionCreator = __webpack_require__(9350);
// EXTERNAL MODULE: ./Components/AdminNavigation/adminNavigation.module.css
var adminNavigation_module = __webpack_require__(8446);
var adminNavigation_module_default = /*#__PURE__*/__webpack_require__.n(adminNavigation_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./Components/AdminNavigation/AdminNavigation.tsx










const AdminNavigation = props => {
  const {
    0: panelCss,
    1: setPanelCss
  } = (0,external_react_.useState)((adminNavigation_module_default()).none);

  const selector = state => {
    return {
      role: state.userReducer.role,
      dirName: state.textReducer.dirName,
      idArticle: state.textReducer._id
    };
  };

  const {
    role,
    dirName,
    idArticle
  } = (0,external_react_redux_.useSelector)(selector);
  const dispatch = (0,external_react_redux_.useDispatch)();
  const router = (0,router_.useRouter)();

  if (role) {
    if (role.includes('admin')) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          onMouseMove: () => setPanelCss((adminNavigation_module_default()).panel),
          className: (adminNavigation_module_default()).trigger
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onMouseMove: () => setPanelCss((adminNavigation_module_default()).none),
          className: (adminNavigation_module_default()).closePanel
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: panelCss,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (adminNavigation_module_default()).namePanel,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              children: ["\u041F\u0430\u043D\u0435\u043B\u044C", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "\u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0442\u043E\u0440\u0430"]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (adminNavigation_module_default()).content,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: '/edit-text',
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => (0,editorTextActionCreator/* editorTextSelectStatus */.Cn)(dispatch, 'edit'),
                    children: "\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: '/edit-text',
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    onClick: () => (0,editorTextActionCreator/* editorTextSelectStatus */.Cn)(dispatch, 'create'),
                    children: "\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                onClick: () => (0,editorTextActionCreator/* deleteCurrentArticle */.Ix)(dispatch, dirName !== null && dirName !== void 0 ? dirName : '', idArticle !== null && idArticle !== void 0 ? idArticle : '', router),
                children: "\u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0442\u0435\u043A\u0443\u0449\u0443\u044E"
              })]
            })
          })]
        })]
      });
    } else return null;
  } else {
    return null;
  }
};

/* harmony default export */ const AdminNavigation_AdminNavigation = (AdminNavigation);
;// CONCATENATED MODULE: ./pages/post/[dir].tsx













const Text = props => {
  return /*#__PURE__*/jsx_runtime_.jsx(PageLayout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
      container: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(material_.Grid, {
        item: true,
        xs: 9,
        children: /*#__PURE__*/jsx_runtime_.jsx(PageMainContent_PageMainContent, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(material_.Grid, {
        item: true,
        xs: 3,
        children: [/*#__PURE__*/jsx_runtime_.jsx(AdminNavigation_AdminNavigation, {}), /*#__PURE__*/jsx_runtime_.jsx(NavigationRight_NavigationRight, {})]
      })]
    })
  });
}; //@ts-ignore


const getServerSideProps = redux/* wrapper.getServerSideProps */.Y.getServerSideProps(store => async context => {
  const {
    query: {
      id,
      dir
    },
    req: {
      cookies: {
        token
      }
    }
  } = context;
  let userId = '';

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

  try {
    const firstArticle = await fetch(`${process.env.API_URL}/api/init/post/${dir}?id=${id}`, {
      method: 'GET'
    });
    const response = await firstArticle.json();
    const {
      dispatch
    } = store;

    if (!('entityMap' in response.article.article)) {
      response.article.article.entityMap = {};
    }

    (0,editorTextActionCreator/* saveText */.E4)(dispatch, response);
    (0,editorTextActionCreator/* saveParagraph */.wQ)(dispatch, response.article.article);
  } catch (e) {
    const {
      dispatch
    } = store; // @ts-ignore

    (0,editorTextActionCreator/* dirNameSelect */.rf)(dispatch, dir);
  }
});
/* harmony default export */ const _dir_ = (Text);

/***/ }),

/***/ 8446:
/***/ ((module) => {

// Exports
module.exports = {
	"trigger": "adminNavigation_trigger__2sDWW",
	"panel": "adminNavigation_panel__2xCjE",
	"closePanel": "adminNavigation_closePanel__3dBjW",
	"none": "adminNavigation_none__3SMby",
	"namePanel": "adminNavigation_namePanel__ScM_P",
	"content": "adminNavigation_content__djoOk"
};


/***/ }),

/***/ 4235:
/***/ ((module) => {

// Exports
module.exports = {
	"lest": "listNavigation_lest__1C_Ey",
	"none": "listNavigation_none__1LuHT",
	"btn": "listNavigation_btn__3gTS4",
	"textBlock": "listNavigation_textBlock__2OGmS",
	"textBlockActive": "listNavigation_textBlockActive__2NwlH",
	"activeList": "listNavigation_activeList__2WD5-",
	"link": "listNavigation_link__19Jl7",
	"currentList": "listNavigation_currentList__2iOWv",
	"activeSpan": "listNavigation_activeSpan__foUDD"
};


/***/ }),

/***/ 8449:
/***/ ((module) => {

// Exports
module.exports = {
	"nawWrapper": "navigationRight_nawWrapper__aXzsI",
	"navigation": "navigationRight_navigation__3DKov",
	"margin": "navigationRight_margin__3gMr4"
};


/***/ }),

/***/ 8591:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "PageMainContent_wrapper__2RLor"
};


/***/ }),

/***/ 9894:
/***/ ((module) => {

// Exports
module.exports = {
	"default": "elementStyles_default__2InGR",
	"elementH1": "elementStyles_elementH1__t07Us",
	"TEXT_CENTER": "elementStyles_TEXT_CENTER__1ANp7",
	"Black": "elementStyles_Black__149Az",
	"Red": "elementStyles_Red__2grTq",
	"Grey": "elementStyles_Grey__M_R9f",
	"LightLue": "elementStyles_LightLue__3yMtK",
	"DarkBlue": "elementStyles_DarkBlue__2U-Wb",
	"Green": "elementStyles_Green__1u3SL",
	"Yellow": "elementStyles_Yellow__30dnj",
	"Pink": "elementStyles_Pink__1vv8w",
	"Orange": "elementStyles_Orange__1turV",
	"size80": "elementStyles_size80__1JtGi",
	"TEXT_LEFT": "elementStyles_TEXT_LEFT__1mjmC",
	"TEXT_RIGHT": "elementStyles_TEXT_RIGHT__3buvY",
	"BOLD": "elementStyles_BOLD__3sv-w",
	"ITALIC": "elementStyles_ITALIC__2Agql",
	"UNDERLINE": "elementStyles_UNDERLINE__3NRj4",
	"LINE_THROUGH": "elementStyles_LINE_THROUGH__2KeoW",
	"FONT_ROBOTO": "elementStyles_FONT_ROBOTO__1puJL",
	"size8": "elementStyles_size8__1Df6u",
	"size9": "elementStyles_size9__of_EC",
	"size10": "elementStyles_size10__3VFst",
	"size11": "elementStyles_size11__LlW_9",
	"size12": "elementStyles_size12__1cJuH",
	"size14": "elementStyles_size14__3I0Di",
	"size16": "elementStyles_size16__2QmDu",
	"size18": "elementStyles_size18__2Q2EW",
	"size20": "elementStyles_size20__1Qgdl",
	"size22": "elementStyles_size22__1NH7l",
	"size24": "elementStyles_size24__nK-lB",
	"size26": "elementStyles_size26__26ETw",
	"size28": "elementStyles_size28__15vjF",
	"size36": "elementStyles_size36__2fwTB",
	"size48": "elementStyles_size48__3p5HL",
	"size72": "elementStyles_size72__9LuGg"
};


/***/ }),

/***/ 1839:
/***/ ((module) => {

// Exports
module.exports = {
	"renderTextWrapper": "RenderText_renderTextWrapper__Lc0yV",
	"table": "RenderText_table__1WomX"
};


/***/ }),

/***/ 7949:
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

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

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,345,908,718,414,787,359], () => (__webpack_exec__(7668)));
module.exports = __webpack_exports__;

})();