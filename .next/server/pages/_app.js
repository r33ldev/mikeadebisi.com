"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 18429:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(20997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(16689);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/CssBaseline/index.js
var CssBaseline = __webpack_require__(60164);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/styles/index.js
var styles = __webpack_require__(31232);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(40968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/container/app-container/theme.tsx
var theme = __webpack_require__(99101);
// EXTERNAL MODULE: ./node_modules/@mui/system/index.js
var system = __webpack_require__(99098);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(71853);
;// CONCATENATED MODULE: ./public/brand/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.fdd279a6.png","height":287,"width":280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA90lEQVR42mMAAa3Zp3lUphyLUenak6pSvylZuXRFnErREj4GMNj5h1N17vlM1SnHVEHcoBM/GZXLVyooZ8/N0UibLsRQ3Dk7SH/+hXiQpFznXj0GKJBJnSWpnDItg6GjtiTeq3dzgNKUY+0mEw5UMaQt4jHLmVoGUiSfOC2RoampNS0pKTVCdfIRf9vJBwNl+4/4uWS0+Id7aNsKpMyNZKhvaMosLCy2BOnQ6dyppTflsBaI7eUfHm8Y3xXLUF/fIFpZVZOaXVQlxwAFQaERUiGhYalJIUb8DCBQUloukl9QlJyanpUSG5+UHBoWnhoaGibKwMDAAABs2FEA8m8kCwAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./src/components/header-components/Header.tsx






const Header = ({ title  })=>{
    const router = (0,router_.useRouter)();
    const LINKS = [
        {
            link: "Projects",
            label: "Projects",
            url: "/projects"
        },
        {
            link: "Articles",
            label: "Articles",
            url: "/articles"
        },
        {
            link: "Guides",
            label: "Guides",
            url: "/guides"
        },
        {
            link: "About",
            label: "About",
            url: "/mike"
        },
        {
            link: "Uses",
            label: "Uses",
            url: "/uses"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeaderWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(LogoWrapper, {
                onClick: ()=>router.push("/"),
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: logo,
                    alt: "mikeadebisi.com",
                    height: 40,
                    width: 40
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderLinks, {
                children: LINKS.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx(HeaderLink, {
                        onClick: ()=>router.push(link.url),
                        children: link.label
                    }, link.label))
            })
        ]
    });
};
const HeaderWrapper = (0,system.styled)("div")(({ theme  })=>({
        display: "flex",
        borderTop: "5px solid #4299E1",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem"
    }));
const LogoWrapper = (0,system.styled)("div")(({ theme  })=>({
        cursor: "pointer",
        "& img": {
            height: "60px"
        }
    }));
const HeaderLinks = (0,system.styled)("div")(({ theme  })=>({
        display: "flex",
        gap: "2.5rem"
    }));
const HeaderLink = (0,system.styled)("div")(({ theme  })=>({
        cursor: "pointer",
        transition: "all 0.3s",
        "&:hover": {
            color: "#4299E1"
        }
    }));
/* harmony default export */ const header_components_Header = (Header);

;// CONCATENATED MODULE: ./src/components/app-components/app.tsx




const AppWrapper = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageLayout, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header_components_Header, {}),
            children
        ]
    });
};
const PageLayout = (0,system.styled)("div")(({})=>({
        color: "#FFFFFF",
        background: "#000000",
        height: "100%"
    }));
/* harmony default export */ const app = (AppWrapper);

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./redux/app-state/ui-slice.ts

const initialState = {
    isLoading: false,
    error: null
};
const appSlice = (0,toolkit_namespaceObject.createSlice)({
    name: "app",
    initialState,
    reducers: {
        setIsLoading: (state, action)=>{
            state.isLoading = action.payload;
        },
        setError: (state, action)=>{
            state.error = action.payload;
        }
    }
});
const { setIsLoading , setError  } = appSlice.actions;
/* harmony default export */ const ui_slice = (appSlice.reducer);

;// CONCATENATED MODULE: ./redux/localstorage.ts
const loadState = ()=>{
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};
const saveState = (state)=>{
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
        return true;
    } catch (err) {
        console.error("error saving state: ", err);
        return undefined;
    }
};

;// CONCATENATED MODULE: ./redux/store.ts



const rootReducer = (0,toolkit_namespaceObject.combineReducers)({
    app: ui_slice
});
const persistedState = loadState();
const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware({
            serializableCheck: false
        }),
    preloadedState: persistedState
});
/* harmony default export */ const redux_store = (store);

;// CONCATENATED MODULE: ./pages/_app.tsx










function MyApp(props) {
    const { Component , pageProps  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_namespaceObject.Provider, {
            store: redux_store,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Michael E Adebisi - Software Engineer"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "/favicon.ico",
                            rel: "icon"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            content: "minimum-scale=1, initial-scale=1, width=device-width",
                            name: "viewport"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles.ThemeProvider, {
                    theme: theme/* default */.Z,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(CssBaseline["default"], {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(app, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 99101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31232);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75495);
// import { createTheme } from '@mui/material/styles';


const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({
    palette: {
        mode: "dark",
        background: {
            default: "#1c1c25",
            paper: "#292933"
        },
        primary: {
            main: "#4299e1"
        },
        secondary: {
            main: "#63b3ed"
        },
        error: {
            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400
        }
    },
    typography: {
        fontFamily: "Roboto, sans-serif"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 63013:
/***/ ((module) => {

module.exports = require("@mui/base");

/***/ }),

/***/ 71174:
/***/ ((module) => {

module.exports = require("@mui/private-theming");

/***/ }),

/***/ 90657:
/***/ ((module) => {

module.exports = require("@mui/utils");

/***/ }),

/***/ 68103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 94957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 50744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 35843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [98,153,265], () => (__webpack_exec__(18429)));
module.exports = __webpack_exports__;

})();