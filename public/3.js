(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

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
                  _vm._v(_vm._s(_vm.data.name) + " (  "),
                  _c("small", [_vm._v(_vm._s(_vm.data.country))]),
                  _vm._v(")")
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "content" }, [
              _vm._v(
                "\n                      " +
                  _vm._s(_vm.data.description) +
                  "\n                      "
              ),
              _c("br"),
              _vm._v(
                " \n                      Genre: " +
                  _vm._s(_vm.data.genre) +
                  "\n                        "
              ),
              _c("br"),
              _vm._v(" "),
              _c("p", [_vm._v("Date: " + _vm._s(_vm.data.date))]),
              _vm._v(" "),
              _c("p", [_vm._v("Ticket: " + _vm._s(_vm.data.ticket))])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
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
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
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