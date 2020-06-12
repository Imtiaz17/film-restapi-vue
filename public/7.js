(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App/FilmPost.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      slug: this.$route.params.slug,
      data: ''
    };
  },
  computed: {},
  created: function created() {
    var _this = this;

    axios.get("/api/films/".concat(this.slug)).then(function (res) {
      _this.data = res.data.data;
    });
  },
  mounted: function mounted() {},
  methods: {
    getPhoto: function getPhoto(pic) {
      return pic;
    }
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.icon.is-small[data-v-5b9e9b7d] {\r\n    margin-right: 2px;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/App/FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "columns is-mobile is-centered mt-20" }, [
      _c("div", { staticClass: "column is-6-desktop is-12-mobile" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-image" }, [
            _c("figure", { staticClass: "image is-3by2" }, [
              _c("img", {
                attrs: {
                  src: _vm.getPhoto(_vm.data.image),
                  alt: "Placeholder image"
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-content" }, [
            _c("div", { staticClass: "media" }, [
              _c("div", { staticClass: "media-content" }, [
                _c("p", { staticClass: "title is-4" }, [
                  _vm._v(_vm._s(_vm.data.name) + " ( "),
                  _c("small", [_vm._v(_vm._s(_vm.data.country))]),
                  _vm._v(")")
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "rating" }, [
                  _c(
                    "a",
                    {
                      staticClass: "level-item",
                      attrs: { "aria-label": "like" }
                    },
                    [
                      _vm._m(0),
                      _vm._v(
                        "\n                                    " +
                          _vm._s(_vm.data.rating) +
                          ".00\n                                "
                      )
                    ]
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "content" }, [
              _c("p", [_vm._v(_vm._s(_vm.data.description))]),
              _vm._v(" "),
              _c("br"),
              _vm._v(" "),
              _c("p", [
                _c("b", [_vm._v("Genre:")]),
                _vm._v(" " + _vm._s(_vm.data.genre))
              ]),
              _vm._v(" "),
              _c("p", [
                _c("b", [_vm._v("Date: ")]),
                _vm._v(" " + _vm._s(_vm.data.date))
              ]),
              _vm._v(" "),
              _c("p", [
                _c("b", [_vm._v("Ticket: ")]),
                _vm._v(_vm._s(_vm.data.ticket))
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm._m(1),
    _vm._v(" "),
    _c("div", { staticClass: "columns is-mobile is-centered mt-20" }, [
      _c(
        "div",
        { staticClass: "column is-6-desktop is-12-mobile" },
        _vm._l(_vm.data.comments, function(comment, i) {
          return _c("div", { key: i, staticClass: "card" }, [
            _c("div", { staticClass: "card-content" }, [
              _c("div", { staticClass: "media" }, [
                _c("div", { staticClass: "media-content" }, [
                  _c("p", { staticClass: "title is-6" }, [
                    _vm._v(_vm._s(comment.name))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "content" }, [
                    _c("p", [_vm._v(_vm._s(comment.comment))])
                  ])
                ])
              ])
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fas fa-heart", attrs: { "aria-hidden": "true" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "columns is-mobile is-centered mt-20" }, [
      _c("div", { staticClass: "column is-6-desktop is-12-mobile" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-content" }, [
            _c("textarea", {
              staticClass: "textarea",
              attrs: { placeholder: "Comment" }
            }),
            _vm._v(" "),
            _c("button", { staticClass: "button is-info mt-10 is-right" }, [
              _vm._v("Submit")
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/App/FilmPost.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/App/FilmPost.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilmPost_vue_vue_type_template_id_5b9e9b7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true& */ "./resources/js/components/App/FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true&");
/* harmony import */ var _FilmPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilmPost.vue?vue&type=script&lang=js& */ "./resources/js/components/App/FilmPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FilmPost_vue_vue_type_style_index_0_id_5b9e9b7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css& */ "./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FilmPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilmPost_vue_vue_type_template_id_5b9e9b7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FilmPost_vue_vue_type_template_id_5b9e9b7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5b9e9b7d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/App/FilmPost.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/App/FilmPost.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/App/FilmPost.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilmPost.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_style_index_0_id_5b9e9b7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=style&index=0&id=5b9e9b7d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_style_index_0_id_5b9e9b7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_style_index_0_id_5b9e9b7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_style_index_0_id_5b9e9b7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_style_index_0_id_5b9e9b7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_style_index_0_id_5b9e9b7d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/App/FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/App/FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_template_id_5b9e9b7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/App/FilmPost.vue?vue&type=template&id=5b9e9b7d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_template_id_5b9e9b7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FilmPost_vue_vue_type_template_id_5b9e9b7d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);