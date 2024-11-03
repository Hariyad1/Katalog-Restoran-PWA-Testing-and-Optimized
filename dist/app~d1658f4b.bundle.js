/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(367), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  font-size: 12px;
  color: #424242;
}

.app-bar {
  padding: 8px 16px;
  background-color: #4F75FF;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 10px;
  position: sticky;
  top: 0;
  z-index: 99;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.app-bar .app-bar__menu {
  display: flex;
  align-items: center;
  width: 44px;
  height: 44px;
}

.app-bar .app-bar__menu button {
  background-color: transparent;
  border: none;
  font-size: 18px;
  padding: 0.8em;
  cursor: pointer;
}

.app-bar .app-bar__title {
  display: flex;
  align-items: center;
  display: inline-block;
  margin-top: 10px;
  min-width: 44px;
  min-height: 44px;
}

.app-bar .app-bar__title h1 a {
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 22px;
  display: inline-block;
    min-width: 44px;
    min-height: 44px;
}

.app-bar .app-bar__nav {
  position: absolute;
  top: 68px;
  left: -180px;
  width: 150px;
  transition: all 0.3s;
  padding: 8px;
  overflow: hidden;
}

.app-bar .app-bar__nav.open {
  left: 0;
}

.app-bar .app-bar__nav ul li a {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  padding: 1em;
  background-color: #4F75FF;
  width: 44px;
  height: 44px;
  text-align: center;
}

/* hero */
.hero {
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  height: 500px;
  background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)),url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-position: center;
  background-color: white;
  background-size: cover;
}

.hero-inner {
  margin: 0 auto;
  max-width: 800px;
}

.hero-title {
  color: white;
  font-weight: 500px;
  font-size: 40px;
  text-align: center;
}

.hero-desc {
  color: white;
  margin-top: 16px;
  font-size: 20px;
  font-weight: 300px;
}

/* Main */
main {
  width: 100%;
  margin: 0 auto;
}

.content {
  padding: 25px;
  text-align: left;
  overflow: auto;
}

.latest {
  width: 100%;
  margin: 20px auto;
  text-align: center;
}

.latesthead {
  padding-top: 40px;
  text-align: center;
  color: black;
}

.detail_list {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
}

.detail_list h4 {
  margin: 0;
  font-weight: bold;
}

.detail_list p {
  margin: 0;
}

.contentlist {
  margin: 20px;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.contentlist:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.resto_info {
  text-align: center;
}

.image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.info_judul {
  font-size: 1.5em;
  margin-bottom: 5px;
}

.info_city {
  margin-top: 5px;
}
.contentlist {
  margin: 10px 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background-color: #ffffff;
}

.contentlist a {
  text-decoration: none;
  color: #393646;
}

.image {
  width: 100%;
  max-height: 250px;
}

.resto_info {
  padding: 18px 32px 32px 32px;
  color: black;
}

.info_judul {
  text-align: center;
}

.info_judul:hover {
  opacity: 0.7;
}

.info_city {
  text-align: center;
  padding: 0.8em;
}

.info_desc {
  margin-top: 5px;
  text-align: justify;
}

.info_rates {
  color: white;
  text-align: center;
  margin-top: 5px;
  padding: 0.8em;
  font-style: italic;
  border-radius: 5px 5px 5px;
  background-color: #4F75FF;
  min-width: 44px;
  min-height: 44px;
}

/* halaman detail */
.contentdetail {
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px 16px;
}

.contentdetail .resto_info_detail {
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px 16px;
}

.contentdetail .detail_title {
  margin-top: 50px;
  text-align: center;
}

.contentdetail .image_detail {
  width: 80%;
  padding: 10px;
  margin: 0 auto;
}

.contentdetail .detail_list {
  margin-bottom: 50px;
  padding: 1em;
}

.contentdetail .detail_list h4 {
  margin: 8px 0;
}

/* untuk makanan dan minuman */
.menuContainer {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 30px;
  margin-left: 30px;
}

.menuMakan,
.menuMinum {
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);
  background-color: #4F75FF;
  color: white;
}

.menuMakan ul,
.menuMinum ul {
  list-style-type: decimal;
  padding-left: 20px;
}

.menuMakan h3,
.menuMinum h3 {
  margin-bottom: 10px;
  color: white;
}

.menuMakan li,
.menuMinum li {
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 1.4;
}

/* untuk ulasan */
.reviewCust {
  padding: 10px;
}

.headerInformation {
  font-size: 1.5em;
  margin-bottom: 10px;
  text-align: center;
}

.customerReviews {
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  color: black;
}

.customerReview {
  flex: 1 1 300px;
  margin: 5px;
  padding: 10px;
  border: 2px solid #4F75FF;
}

#reviewFormContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#reviewForm {
  width: 50%;
  text-align: center;
}

#reviewForm input, #reviewForm textarea {
  width: 100%;
  margin-bottom: 10px;
}

/* fitur like */
.like {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4F75FF;

  position: fixed;
  bottom: 16px;
  right: 16px;
  border-radius: 50%;
  border: 0;

  font-size: 18px;
  color: red;
  cursor: pointer;
}

.like:hover {
  background-color: pink;
}

/* untuk reviewer */
.judul-review {
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

form {
  margin-bottom: 40px;
  margin: 10px;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #4F75FF;
}

label {
  display: block;
  margin-bottom: 5px;
  color: white;
}

input[type="text"],
textarea {
  width: 80%;
  padding: 1em;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 44px;
  min-height: 44px;
}

#title-button {
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
  margin: 0 auto;
  padding: 1.2em;
  height: 44px;
}

button:hover {
  background-color: #4F75FF;
}

#customerReviews {
  border-top: 1px solid #ccc;
  padding-top: 20px;
}

.review {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.review strong {
  font-weight: bold;
}

.review span {
  font-style: italic;
  color: #666;
}

/* footer */
footer {
  width: 100%;
  text-align: center;
  font-size: 18px;
  margin-bottom: 0;
  background-color: #4F75FF;
  color: white;
}

footer p {
  padding: 1em;
}

/* Skip Content */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  z-index: 100;
  background-color: brown;
  color: white;
}

.skip-link:focus {
  top: 0;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["*{\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n}\r\n\r\nbody, html {\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nbody {\r\n  font-size: 12px;\r\n  color: #424242;\r\n}\r\n\r\n.app-bar {\r\n  padding: 8px 16px;\r\n  background-color: #4F75FF;\r\n  display: grid;\r\n  grid-template-columns: auto 1fr auto;\r\n  gap: 10px;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 99;\r\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 44px;\r\n  height: 44px;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  padding: 0.8em;\r\n  cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__title {\r\n  display: flex;\r\n  align-items: center;\r\n  display: inline-block;\r\n  margin-top: 10px;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n}\r\n\r\n.app-bar .app-bar__title h1 a {\r\n  color: white;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  font-size: 22px;\r\n  display: inline-block;\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n}\r\n\r\n.app-bar .app-bar__nav {\r\n  position: absolute;\r\n  top: 68px;\r\n  left: -180px;\r\n  width: 150px;\r\n  transition: all 0.3s;\r\n  padding: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__nav.open {\r\n  left: 0;\r\n}\r\n\r\n.app-bar .app-bar__nav ul li a {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  text-decoration: none;\r\n  color: white;\r\n  padding: 1em;\r\n  background-color: #4F75FF;\r\n  width: 44px;\r\n  height: 44px;\r\n  text-align: center;\r\n}\r\n\r\n/* hero */\r\n.hero {\r\n  width: 100%;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  height: 500px;\r\n  background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)),url(../public/images/hero-image_4-large.jpg);\r\n  background-position: center;\r\n  background-color: white;\r\n  background-size: cover;\r\n}\r\n\r\n.hero-inner {\r\n  margin: 0 auto;\r\n  max-width: 800px;\r\n}\r\n\r\n.hero-title {\r\n  color: white;\r\n  font-weight: 500px;\r\n  font-size: 40px;\r\n  text-align: center;\r\n}\r\n\r\n.hero-desc {\r\n  color: white;\r\n  margin-top: 16px;\r\n  font-size: 20px;\r\n  font-weight: 300px;\r\n}\r\n\r\n/* Main */\r\nmain {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.content {\r\n  padding: 25px;\r\n  text-align: left;\r\n  overflow: auto;\r\n}\r\n\r\n.latest {\r\n  width: 100%;\r\n  margin: 20px auto;\r\n  text-align: center;\r\n}\r\n\r\n.latesthead {\r\n  padding-top: 40px;\r\n  text-align: center;\r\n  color: black;\r\n}\r\n\r\n.detail_list {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  gap: 10px;\r\n  align-items: center;\r\n}\r\n\r\n.detail_list h4 {\r\n  margin: 0;\r\n  font-weight: bold;\r\n}\r\n\r\n.detail_list p {\r\n  margin: 0;\r\n}\r\n\r\n.contentlist {\r\n  margin: 20px;\r\n  padding: 15px;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r\n  transition: transform 0.2s, box-shadow 0.2s;\r\n}\r\n\r\n.contentlist:hover {\r\n  transform: translateY(-5px);\r\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.resto_info {\r\n  text-align: center;\r\n}\r\n\r\n.image {\r\n  width: 100%;\r\n  height: auto;\r\n  border-radius: 8px;\r\n}\r\n\r\n.info_judul {\r\n  font-size: 1.5em;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.info_city {\r\n  margin-top: 5px;\r\n}\r\n.contentlist {\r\n  margin: 10px 0;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n  width: 100%;\r\n  border-radius: 5px;\r\n  overflow: hidden;\r\n  background-color: #ffffff;\r\n}\r\n\r\n.contentlist a {\r\n  text-decoration: none;\r\n  color: #393646;\r\n}\r\n\r\n.image {\r\n  width: 100%;\r\n  max-height: 250px;\r\n}\r\n\r\n.resto_info {\r\n  padding: 18px 32px 32px 32px;\r\n  color: black;\r\n}\r\n\r\n.info_judul {\r\n  text-align: center;\r\n}\r\n\r\n.info_judul:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.info_city {\r\n  text-align: center;\r\n  padding: 0.8em;\r\n}\r\n\r\n.info_desc {\r\n  margin-top: 5px;\r\n  text-align: justify;\r\n}\r\n\r\n.info_rates {\r\n  color: white;\r\n  text-align: center;\r\n  margin-top: 5px;\r\n  padding: 0.8em;\r\n  font-style: italic;\r\n  border-radius: 5px 5px 5px;\r\n  background-color: #4F75FF;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n}\r\n\r\n/* halaman detail */\r\n.contentdetail {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 18px 16px;\r\n}\r\n\r\n.contentdetail .resto_info_detail {\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  max-width: 800px;\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  gap: 18px 16px;\r\n}\r\n\r\n.contentdetail .detail_title {\r\n  margin-top: 50px;\r\n  text-align: center;\r\n}\r\n\r\n.contentdetail .image_detail {\r\n  width: 80%;\r\n  padding: 10px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.contentdetail .detail_list {\r\n  margin-bottom: 50px;\r\n  padding: 1em;\r\n}\r\n\r\n.contentdetail .detail_list h4 {\r\n  margin: 8px 0;\r\n}\r\n\r\n/* untuk makanan dan minuman */\r\n.menuContainer {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  gap: 20px;\r\n  margin: 30px;\r\n  margin-left: 30px;\r\n}\r\n\r\n.menuMakan,\r\n.menuMinum {\r\n  margin-bottom: 20px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  border-radius: 8px;\r\n  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1);\r\n  background-color: #4F75FF;\r\n  color: white;\r\n}\r\n\r\n.menuMakan ul,\r\n.menuMinum ul {\r\n  list-style-type: decimal;\r\n  padding-left: 20px;\r\n}\r\n\r\n.menuMakan h3,\r\n.menuMinum h3 {\r\n  margin-bottom: 10px;\r\n  color: white;\r\n}\r\n\r\n.menuMakan li,\r\n.menuMinum li {\r\n  margin-bottom: 5px;\r\n  font-size: 16px;\r\n  line-height: 1.4;\r\n}\r\n\r\n/* untuk ulasan */\r\n.reviewCust {\r\n  padding: 10px;\r\n}\r\n\r\n.headerInformation {\r\n  font-size: 1.5em;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.customerReviews {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  background-color: white;\r\n  color: black;\r\n}\r\n\r\n.customerReview {\r\n  flex: 1 1 300px;\r\n  margin: 5px;\r\n  padding: 10px;\r\n  border: 2px solid #4F75FF;\r\n}\r\n\r\n#reviewFormContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n#reviewForm {\r\n  width: 50%;\r\n  text-align: center;\r\n}\r\n\r\n#reviewForm input, #reviewForm textarea {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n/* fitur like */\r\n.like {\r\n  width: 44px;\r\n  height: 44px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background-color: #4F75FF;\r\n\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  border-radius: 50%;\r\n  border: 0;\r\n\r\n  font-size: 18px;\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n.like:hover {\r\n  background-color: pink;\r\n}\r\n\r\n/* untuk reviewer */\r\n.judul-review {\r\n  font-size: 24px;\r\n  margin-bottom: 20px;\r\n  color: #333;\r\n  text-align: center;\r\n}\r\n\r\nform {\r\n  margin-bottom: 40px;\r\n  margin: 10px;\r\n  border: 1px solid #ccc;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  background-color: #4F75FF;\r\n}\r\n\r\nlabel {\r\n  display: block;\r\n  margin-bottom: 5px;\r\n  color: white;\r\n}\r\n\r\ninput[type=\"text\"],\r\ntextarea {\r\n  width: 80%;\r\n  padding: 1em;\r\n  margin-bottom: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  min-width: 44px;\r\n  min-height: 44px;\r\n}\r\n\r\n#title-button {\r\n  background-color: white;\r\n  color: black;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n  text-align: center;\r\n  margin: 0 auto;\r\n  padding: 1.2em;\r\n  height: 44px;\r\n}\r\n\r\nbutton:hover {\r\n  background-color: #4F75FF;\r\n}\r\n\r\n#customerReviews {\r\n  border-top: 1px solid #ccc;\r\n  padding-top: 20px;\r\n}\r\n\r\n.review {\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n}\r\n\r\n.review strong {\r\n  font-weight: bold;\r\n}\r\n\r\n.review span {\r\n  font-style: italic;\r\n  color: #666;\r\n}\r\n\r\n/* footer */\r\nfooter {\r\n  width: 100%;\r\n  text-align: center;\r\n  font-size: 18px;\r\n  margin-bottom: 0;\r\n  background-color: #4F75FF;\r\n  color: white;\r\n}\r\n\r\nfooter p {\r\n  padding: 1em;\r\n}\r\n\r\n/* Skip Content */\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  padding: 8px;\r\n  z-index: 100;\r\n  background-color: brown;\r\n  color: white;\r\n}\r\n\r\n.skip-link:focus {\r\n  top: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 936:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(511), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@media screen and (min-width: 650px) {
  .app-bar {
    grid-template-columns: 1fr auto;
    padding: 8px 32px;
  }

  .app-bar .app-bar__brand h1 {
    font-size: 1.5em;
  }

  .app-bar .app-bar__menu {
    display: none;
  }

  .app-bar .app-bar__nav {
    position: static;
    width: 100%;
  }

  .app-bar .app-bar__nav ul li {
    display: inline-block;
  }

  .app-bar .app-bar__nav ul li a {
    display: inline-block;
    width: 120px;
    text-align: center;
    margin: 0;
  }
}

@media screen and (max-width: 500px) {
  .hero {
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    height: 60vh;
  }
  
  .app-bar .app-bar__title h1 a{
    font-size: 20px;
    align-items: center;
  }

  .headerinner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 12px 25px;
    margin-top: 0;
  }
  .nav-mob {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 15px;
    list-style-type: none;
  }
  .headertitle {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 24px;
  }
  .menu_drawer {
    line-height: 44px;
    margin-top: 0px;
    color: #fff;
    text-decoration: none;
    background-color: transparent;
    border: none;

  }
  .nav {
    z-index: 10;
    background-color: #753449;
    width: 100%;
    position: absolute;
    -webkit-transform: translate(100%, 0);
    transform: translate(-100%, 0);
    transition: transform 0.3s ease;
    top: 92px;
  }
  .open {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  .navitem {
    display: list-item;
    border-bottom: 1px solid #ffc4c4;
    width: 100%;
    text-align: left;
  }

  .resto_menu {
    display: flex;
    grid-template-columns: auto auto;
    gap: 20px;
    margin: 15px auto;
    padding: 15px 0px;
    border-top: 1px solid rgb(133, 14, 53);
    border-bottom: 1px solid rgb(133, 14, 53);
    flex-direction: column;
  }

  .menuContainer{
    display: block;
   }
}

@media screen and (min-width: 500px) {
  .nav-mob {
    display: none;
  }
  .info_judul {
    font-size: 18px;
  }
  .info_city {
    font-size: 16px;
  }
  .info_desc {
    font-size: 13px;
  }
}

@media screen and (min-width: 650px) {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }
}

@media screen and (min-width: 950px) {
  .content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (min-width: 1200px) {
  .hero {
    min-width: 1000px;
  }
  main {
    max-width: 1200px;
  }
} `, "",{"version":3,"sources":["webpack://./src/styles/responsive.css"],"names":[],"mappings":"AAAA;EACE;IACE,+BAA+B;IAC/B,iBAAiB;EACnB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,WAAW;EACb;;EAEA;IACE,qBAAqB;EACvB;;EAEA;IACE,qBAAqB;IACrB,YAAY;IACZ,kBAAkB;IAClB,SAAS;EACX;AACF;;AAEA;EACE;IACE,yDAA8D;IAC9D,YAAY;EACd;;EAEA;IACE,eAAe;IACf,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,kBAAkB;IAClB,aAAa;EACf;EACA;IACE,aAAa;IACb,mBAAmB;IACnB,2BAA2B;IAC3B,gBAAgB;IAChB,qBAAqB;EACvB;EACA;IACE,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,iBAAiB;IACjB,eAAe;IACf,WAAW;IACX,qBAAqB;IACrB,6BAA6B;IAC7B,YAAY;;EAEd;EACA;IACE,WAAW;IACX,yBAAyB;IACzB,WAAW;IACX,kBAAkB;IAClB,qCAAqC;IACrC,8BAA8B;IAC9B,+BAA+B;IAC/B,SAAS;EACX;EACA;IACE,kCAAkC;IAClC,0BAA0B;EAC5B;EACA;IACE,kBAAkB;IAClB,gCAAgC;IAChC,WAAW;IACX,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,gCAAgC;IAChC,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,sCAAsC;IACtC,yCAAyC;IACzC,sBAAsB;EACxB;;EAEA;IACE,cAAc;GACf;AACH;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,qBAAqB;IACrB,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,aAAa;IACb,kCAAkC;EACpC;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,iBAAiB;EACnB;AACF","sourcesContent":["@media screen and (min-width: 650px) {\r\n  .app-bar {\r\n    grid-template-columns: 1fr auto;\r\n    padding: 8px 32px;\r\n  }\r\n\r\n  .app-bar .app-bar__brand h1 {\r\n    font-size: 1.5em;\r\n  }\r\n\r\n  .app-bar .app-bar__menu {\r\n    display: none;\r\n  }\r\n\r\n  .app-bar .app-bar__nav {\r\n    position: static;\r\n    width: 100%;\r\n  }\r\n\r\n  .app-bar .app-bar__nav ul li {\r\n    display: inline-block;\r\n  }\r\n\r\n  .app-bar .app-bar__nav ul li a {\r\n    display: inline-block;\r\n    width: 120px;\r\n    text-align: center;\r\n    margin: 0;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .hero {\r\n    background-image: url(../public/images/hero-image_4-small.jpg);\r\n    height: 60vh;\r\n  }\r\n  \r\n  .app-bar .app-bar__title h1 a{\r\n    font-size: 20px;\r\n    align-items: center;\r\n  }\r\n\r\n  .headerinner {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    padding: 12px 25px;\r\n    margin-top: 0;\r\n  }\r\n  .nav-mob {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n    margin-top: 15px;\r\n    list-style-type: none;\r\n  }\r\n  .headertitle {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    font-size: 24px;\r\n  }\r\n  .menu_drawer {\r\n    line-height: 44px;\r\n    margin-top: 0px;\r\n    color: #fff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    border: none;\r\n\r\n  }\r\n  .nav {\r\n    z-index: 10;\r\n    background-color: #753449;\r\n    width: 100%;\r\n    position: absolute;\r\n    -webkit-transform: translate(100%, 0);\r\n    transform: translate(-100%, 0);\r\n    transition: transform 0.3s ease;\r\n    top: 92px;\r\n  }\r\n  .open {\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n  }\r\n  .navitem {\r\n    display: list-item;\r\n    border-bottom: 1px solid #ffc4c4;\r\n    width: 100%;\r\n    text-align: left;\r\n  }\r\n\r\n  .resto_menu {\r\n    display: flex;\r\n    grid-template-columns: auto auto;\r\n    gap: 20px;\r\n    margin: 15px auto;\r\n    padding: 15px 0px;\r\n    border-top: 1px solid rgb(133, 14, 53);\r\n    border-bottom: 1px solid rgb(133, 14, 53);\r\n    flex-direction: column;\r\n  }\r\n\r\n  .menuContainer{\r\n    display: block;\r\n   }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n  .nav-mob {\r\n    display: none;\r\n  }\r\n  .info_judul {\r\n    font-size: 18px;\r\n  }\r\n  .info_city {\r\n    font-size: 16px;\r\n  }\r\n  .info_desc {\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 650px) {\r\n  .content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\r\n    grid-column-gap: 10px;\r\n    grid-row-gap: 15px;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 950px) {\r\n  .content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n  .hero {\r\n    min-width: 1000px;\r\n  }\r\n  main {\r\n    max-width: 1200px;\r\n  }\r\n} "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 810:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(249);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ }),

/***/ 47:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(825);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(659);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(540);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(936);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, options);




       /* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A && _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals ? _node_modules_css_loader_dist_cjs_js_responsive_css__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A.locals : undefined);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			580: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrestaurant_apps"] = self["webpackChunkrestaurant_apps"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [97,71,74,720], () => (__webpack_require__(956)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app~d1658f4b.bundle.js.map