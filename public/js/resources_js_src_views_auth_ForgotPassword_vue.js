"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_views_auth_ForgotPassword_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/Logo.vue */ "./resources/js/src/@core/layouts/components/Logo.vue");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/card/card.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/link/link.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/card/card-text.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/card/card-title.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/form-group/form-group.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/form-input/form-input.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/button/button.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/components/form/form.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @validations */ "./resources/js/src/@core/utils/validations/validations.js");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VuexyLogo: _core_layouts_components_Logo_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__.BCard,
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__.BLink,
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_4__.BCardText,
    BCardTitle: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__.BCardTitle,
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_6__.BFormGroup,
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_7__.BFormInput,
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_8__.BButton,
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_9__.BForm,
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_10__.ValidationProvider,
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_10__.ValidationObserver
  },
  data: function data() {
    return {
      userEmail: '',
      // validation
      required: _validations__WEBPACK_IMPORTED_MODULE_1__.required,
      email: _validations__WEBPACK_IMPORTED_MODULE_1__.email
    };
  },
  methods: {
    validationForm: function validationForm() {
      var _this = this;
      this.$refs.simpleRules.validate().then(function (success) {
        if (success) {
          _this.$router.push({
            name: 'auth-reset-password-v1'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validations.js":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validations.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "alphaDash": () => (/* binding */ alphaDash),
/* harmony export */   "alphaNum": () => (/* binding */ alphaNum),
/* harmony export */   "between": () => (/* binding */ between),
/* harmony export */   "confirmed": () => (/* binding */ confirmed),
/* harmony export */   "credit": () => (/* binding */ credit),
/* harmony export */   "digits": () => (/* binding */ digits),
/* harmony export */   "email": () => (/* binding */ email),
/* harmony export */   "integer": () => (/* binding */ integer),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "password": () => (/* binding */ password),
/* harmony export */   "positive": () => (/* binding */ positive),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "required": () => (/* binding */ required),
/* harmony export */   "url": () => (/* binding */ url)
/* harmony export */ });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./node_modules/vee-validate/dist/locale/ar.json");
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./node_modules/vee-validate/dist/locale/en.json");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validators */ "./resources/js/src/@core/utils/validations/validators.js");





// eslint-disable-next-line object-curly-newline


// ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.required);
var email = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.email);
var min = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.min);
var confirmed = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.confirmed);
var regex = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.regex);
var between = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.between);
var alpha = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.alpha);
var integer = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.integer);
var digits = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.digits);
var alphaDash = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.alpha_dash);
var alphaNum = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.alpha_num);
var length = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_2__.length);
var positive = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_0__.validatorPositive,
  message: 'Please enter positive number!'
});
var credit = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_0__.validatorCreditCard,
  message: 'It is not valid credit card!'
});
var password = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_0__.validatorPassword,
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = (0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.extend)('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_0__.validatorUrlValidator,
  message: 'URL is invalid'
});

// Install English and Arabic localizations.
(0,vee_validate__WEBPACK_IMPORTED_MODULE_1__.localize)({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_4__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
});
// ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////

// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }

// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }

// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }

// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation

//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/

//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }

// export const date = val => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }

// export const max = (val, max) => {

//   // If blank return
//   if (val === undefined || val === null) return true

//   return val.length <= max || `More than ${max} characters are not allowed`
// }

// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }

// export const min = (val, min) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   return val.length >= min || `Minimum ${min} characters are required`
// }

// export const num_range = (val, min, max) => {

//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true

//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./resources/js/src/@core/utils/validations/validators.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/@core/utils/validations/validators.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validatorCreditCard": () => (/* binding */ validatorCreditCard),
/* harmony export */   "validatorPassword": () => (/* binding */ validatorPassword),
/* harmony export */   "validatorPositive": () => (/* binding */ validatorPositive),
/* harmony export */   "validatorUrlValidator": () => (/* binding */ validatorUrlValidator)
/* harmony export */ });
var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }
  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */
  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */
  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */
  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */
  return re.test(val);
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-body.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-body.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardBody": () => (/* binding */ BCardBody),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
/* harmony import */ var _card_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card-title */ "./node_modules/bootstrap-vue/esm/components/card/card-title.js");
/* harmony import */ var _card_sub_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-sub-title */ "./node_modules/bootstrap-vue/esm/components/card/card-sub-title.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _card_title__WEBPACK_IMPORTED_MODULE_2__.props), _card_sub_title__WEBPACK_IMPORTED_MODULE_3__.props), (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_mixins_card__WEBPACK_IMPORTED_MODULE_4__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'body'))), {}, {
  bodyClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_ARRAY_OBJECT_STRING),
  overlay: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN, false)
})), _constants_components__WEBPACK_IMPORTED_MODULE_6__.NAME_CARD_BODY); // --- Main component ---
// @vue/component

var BCardBody = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_7__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_6__.NAME_CARD_BODY,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var bodyBgVariant = props.bodyBgVariant,
        bodyBorderVariant = props.bodyBorderVariant,
        bodyTextVariant = props.bodyTextVariant;
    var $title = h();

    if (props.title) {
      $title = h(_card_title__WEBPACK_IMPORTED_MODULE_2__.BCardTitle, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_title__WEBPACK_IMPORTED_MODULE_2__.props, props)
      });
    }

    var $subTitle = h();

    if (props.subTitle) {
      $subTitle = h(_card_sub_title__WEBPACK_IMPORTED_MODULE_3__.BCardSubTitle, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_sub_title__WEBPACK_IMPORTED_MODULE_3__.props, props),
        class: ['mb-2']
      });
    }

    return h(props.bodyTag, (0,_vue__WEBPACK_IMPORTED_MODULE_8__.mergeData)(data, {
      staticClass: 'card-body',
      class: [(_ref2 = {
        'card-img-overlay': props.overlay
      }, _defineProperty(_ref2, "bg-".concat(bodyBgVariant), bodyBgVariant), _defineProperty(_ref2, "border-".concat(bodyBorderVariant), bodyBorderVariant), _defineProperty(_ref2, "text-".concat(bodyTextVariant), bodyTextVariant), _ref2), props.bodyClass]
    }), [$title, $subTitle, children]);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-footer.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-footer.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardFooter": () => (/* binding */ BCardFooter),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread({}, (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_mixins_card__WEBPACK_IMPORTED_MODULE_2__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'footer'))), {}, {
  footer: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  footerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_OBJECT_STRING),
  footerHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING)
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_FOOTER); // --- Main component ---
// @vue/component

var BCardFooter = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_FOOTER,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var footerBgVariant = props.footerBgVariant,
        footerBorderVariant = props.footerBorderVariant,
        footerTextVariant = props.footerTextVariant;
    return h(props.footerTag, (0,_vue__WEBPACK_IMPORTED_MODULE_6__.mergeData)(data, {
      staticClass: 'card-footer',
      class: [props.footerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(footerBgVariant), footerBgVariant), _defineProperty(_ref2, "border-".concat(footerBorderVariant), footerBorderVariant), _defineProperty(_ref2, "text-".concat(footerTextVariant), footerTextVariant), _ref2)],
      domProps: children ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_7__.htmlOrText)(props.footerHtml, props.footer)
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-header.js":
/*!***********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-header.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardHeader": () => (/* binding */ BCardHeader),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread({}, (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_mixins_card__WEBPACK_IMPORTED_MODULE_2__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'header'))), {}, {
  header: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING),
  headerClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_ARRAY_OBJECT_STRING),
  headerHtml: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_STRING)
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_HEADER); // --- Main component ---
// @vue/component

var BCardHeader = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_HEADER,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _ref2;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var headerBgVariant = props.headerBgVariant,
        headerBorderVariant = props.headerBorderVariant,
        headerTextVariant = props.headerTextVariant;
    return h(props.headerTag, (0,_vue__WEBPACK_IMPORTED_MODULE_6__.mergeData)(data, {
      staticClass: 'card-header',
      class: [props.headerClass, (_ref2 = {}, _defineProperty(_ref2, "bg-".concat(headerBgVariant), headerBgVariant), _defineProperty(_ref2, "border-".concat(headerBorderVariant), headerBorderVariant), _defineProperty(_ref2, "text-".concat(headerTextVariant), headerTextVariant), _ref2)],
      domProps: children ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_7__.htmlOrText)(props.headerHtml, props.header)
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-img.js":
/*!********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-img.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardImg": () => (/* binding */ BCardImg),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _image_img__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/img */ "./node_modules/bootstrap-vue/esm/components/image/img.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread({}, (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.pick)(_image_img__WEBPACK_IMPORTED_MODULE_2__.props, ['src', 'alt', 'width', 'height', 'left', 'right'])), {}, {
  bottom: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  end: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  start: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false),
  top: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_3__.PROP_TYPE_BOOLEAN, false)
})), _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_IMG); // --- Main component ---
// @vue/component

var BCardImg = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_4__.NAME_CARD_IMG,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data;
    var src = props.src,
        alt = props.alt,
        width = props.width,
        height = props.height;
    var baseClass = 'card-img';

    if (props.top) {
      baseClass += '-top';
    } else if (props.right || props.end) {
      baseClass += '-right';
    } else if (props.bottom) {
      baseClass += '-bottom';
    } else if (props.left || props.start) {
      baseClass += '-left';
    }

    return h('img', (0,_vue__WEBPACK_IMPORTED_MODULE_6__.mergeData)(data, {
      class: baseClass,
      attrs: {
        src: src,
        alt: alt,
        width: width,
        height: height
      }
    }));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-sub-title.js":
/*!**************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-sub-title.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardSubTitle": () => (/* binding */ BCardSubTitle),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");




 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  subTitle: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  subTitleTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'h6'),
  subTitleTextVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'muted')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_SUB_TITLE); // --- Main component ---
// @vue/component

var BCardSubTitle = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_SUB_TITLE,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.subTitleTag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      staticClass: 'card-subtitle',
      class: [props.subTitleTextVariant ? "text-".concat(props.subTitleTextVariant) : null]
    }), children || (0,_utils_string__WEBPACK_IMPORTED_MODULE_5__.toString)(props.subTitle));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-text.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-text.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardText": () => (/* binding */ BCardText),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  textTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'p')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TEXT); // --- Main component ---
// @vue/component

var BCardText = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TEXT,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.textTag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      staticClass: 'card-text'
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card-title.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card-title.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCardTitle": () => (/* binding */ BCardTitle),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");




 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  title: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  titleTag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'h4')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TITLE); // --- Main component ---
// @vue/component

var BCardTitle = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD_TITLE,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.titleTag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      staticClass: 'card-title'
    }), children || (0,_utils_string__WEBPACK_IMPORTED_MODULE_5__.toString)(props.title));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/card/card.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/card/card.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCard": () => (/* binding */ BCard),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/esm/utils/html.js");
/* harmony import */ var _utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/normalize-slot */ "./node_modules/bootstrap-vue/esm/utils/normalize-slot.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/card */ "./node_modules/bootstrap-vue/esm/mixins/card.js");
/* harmony import */ var _card_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-body */ "./node_modules/bootstrap-vue/esm/components/card/card-body.js");
/* harmony import */ var _card_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card-header */ "./node_modules/bootstrap-vue/esm/components/card/card-header.js");
/* harmony import */ var _card_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card-footer */ "./node_modules/bootstrap-vue/esm/components/card/card-footer.js");
/* harmony import */ var _card_img__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-img */ "./node_modules/bootstrap-vue/esm/components/card/card-img.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // --- Props ---

var cardImgProps = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.copyProps)(_card_img__WEBPACK_IMPORTED_MODULE_1__.props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.prefixPropName.bind(null, 'img'));
cardImgProps.imgSrc.required = false;
var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_2__.sortKeys)(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _card_body__WEBPACK_IMPORTED_MODULE_3__.props), _card_header__WEBPACK_IMPORTED_MODULE_4__.props), _card_footer__WEBPACK_IMPORTED_MODULE_5__.props), cardImgProps), _mixins_card__WEBPACK_IMPORTED_MODULE_6__.props), {}, {
  align: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_STRING),
  noBody: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_BOOLEAN, false)
})), _constants_components__WEBPACK_IMPORTED_MODULE_8__.NAME_CARD); // --- Main component ---
// @vue/component

var BCard = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_9__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_8__.NAME_CARD,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var imgSrc = props.imgSrc,
        imgLeft = props.imgLeft,
        imgRight = props.imgRight,
        imgStart = props.imgStart,
        imgEnd = props.imgEnd,
        imgBottom = props.imgBottom,
        header = props.header,
        headerHtml = props.headerHtml,
        footer = props.footer,
        footerHtml = props.footerHtml,
        align = props.align,
        textVariant = props.textVariant,
        bgVariant = props.bgVariant,
        borderVariant = props.borderVariant;
    var $scopedSlots = scopedSlots || {};
    var $slots = slots();
    var slotScope = {};
    var $imgFirst = h();
    var $imgLast = h();

    if (imgSrc) {
      var $img = h(_card_img__WEBPACK_IMPORTED_MODULE_1__.BCardImg, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(cardImgProps, props, _utils_props__WEBPACK_IMPORTED_MODULE_0__.unprefixPropName.bind(null, 'img'))
      });

      if (imgBottom) {
        $imgLast = $img;
      } else {
        $imgFirst = $img;
      }
    }

    var $header = h();
    var hasHeaderSlot = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.hasNormalizedSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_HEADER, $scopedSlots, $slots);

    if (hasHeaderSlot || header || headerHtml) {
      $header = h(_card_header__WEBPACK_IMPORTED_MODULE_4__.BCardHeader, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_header__WEBPACK_IMPORTED_MODULE_4__.props, props),
        domProps: hasHeaderSlot ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_12__.htmlOrText)(headerHtml, header)
      }, (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_HEADER, slotScope, $scopedSlots, $slots));
    }

    var $content = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_DEFAULT, slotScope, $scopedSlots, $slots); // Wrap content in `<card-body>` when `noBody` prop set

    if (!props.noBody) {
      $content = h(_card_body__WEBPACK_IMPORTED_MODULE_3__.BCardBody, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_body__WEBPACK_IMPORTED_MODULE_3__.props, props)
      }, $content); // When the `overlap` prop is set we need to wrap the `<b-card-img>` and `<b-card-body>`
      // into a relative positioned wrapper to don't distract a potential header or footer

      if (props.overlay && imgSrc) {
        $content = h('div', {
          staticClass: 'position-relative'
        }, [$imgFirst, $content, $imgLast]); // Reset image variables since they are already in the wrapper

        $imgFirst = h();
        $imgLast = h();
      }
    }

    var $footer = h();
    var hasFooterSlot = (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.hasNormalizedSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_FOOTER, $scopedSlots, $slots);

    if (hasFooterSlot || footer || footerHtml) {
      $footer = h(_card_footer__WEBPACK_IMPORTED_MODULE_5__.BCardFooter, {
        props: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.pluckProps)(_card_footer__WEBPACK_IMPORTED_MODULE_5__.props, props),
        domProps: hasHeaderSlot ? {} : (0,_utils_html__WEBPACK_IMPORTED_MODULE_12__.htmlOrText)(footerHtml, footer)
      }, (0,_utils_normalize_slot__WEBPACK_IMPORTED_MODULE_10__.normalizeSlot)(_constants_slots__WEBPACK_IMPORTED_MODULE_11__.SLOT_NAME_FOOTER, slotScope, $scopedSlots, $slots));
    }

    return h(props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_13__.mergeData)(data, {
      staticClass: 'card',
      class: (_class = {
        'flex-row': imgLeft || imgStart,
        'flex-row-reverse': (imgRight || imgEnd) && !(imgLeft || imgStart)
      }, _defineProperty(_class, "text-".concat(align), align), _defineProperty(_class, "bg-".concat(bgVariant), bgVariant), _defineProperty(_class, "border-".concat(borderVariant), borderVariant), _defineProperty(_class, "text-".concat(textVariant), textVariant), _class)
    }), [$imgFirst, $header, $content, $footer, $imgLast]);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/form-group/form-group.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/form-group/form-group.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BFormGroup": () => (/* binding */ BFormGroup),
/* harmony export */   "generateProps": () => (/* binding */ generateProps)
/* harmony export */ });
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_env__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../constants/env */ "./node_modules/bootstrap-vue/esm/constants/env.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _constants_slots__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../constants/slots */ "./node_modules/bootstrap-vue/esm/constants/slots.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _utils_css_escape__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/css-escape */ "./node_modules/bootstrap-vue/esm/utils/css-escape.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_form_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/esm/mixins/form-state.js");
/* harmony import */ var _mixins_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/esm/mixins/id.js");
/* harmony import */ var _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/normalize-slot */ "./node_modules/bootstrap-vue/esm/mixins/normalize-slot.js");
/* harmony import */ var _layout_col__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../layout/col */ "./node_modules/bootstrap-vue/esm/components/layout/col.js");
/* harmony import */ var _layout_form_row__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../layout/form-row */ "./node_modules/bootstrap-vue/esm/components/layout/form-row.js");
/* harmony import */ var _form_form_text__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../form/form-text */ "./node_modules/bootstrap-vue/esm/components/form/form-text.js");
/* harmony import */ var _form_form_invalid_feedback__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../form/form-invalid-feedback */ "./node_modules/bootstrap-vue/esm/components/form/form-invalid-feedback.js");
/* harmony import */ var _form_form_valid_feedback__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../form/form-valid-feedback */ "./node_modules/bootstrap-vue/esm/components/form/form-valid-feedback.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















 // --- Constants ---

var INPUTS = ['input', 'select', 'textarea']; // Selector for finding first input in the form group

var INPUT_SELECTOR = INPUTS.map(function (v) {
  return "".concat(v, ":not([disabled])");
}).join(); // A list of interactive elements (tag names) inside `<b-form-group>`'s legend

var LEGEND_INTERACTIVE_ELEMENTS = [].concat(INPUTS, ['a', 'button', 'label']); // --- Props ---
// Prop generator for lazy generation of props

var generateProps = function generateProps() {
  return (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _mixins_id__WEBPACK_IMPORTED_MODULE_2__.props), _mixins_form_state__WEBPACK_IMPORTED_MODULE_3__.props), (0,_utils_config__WEBPACK_IMPORTED_MODULE_4__.getBreakpointsUpCached)().reduce(function (props, breakpoint) {
    // i.e. 'content-cols', 'content-cols-sm', 'content-cols-md', ...
    props[(0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.suffixPropName)(breakpoint, 'contentCols')] = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN_NUMBER_STRING); // i.e. 'label-align', 'label-align-sm', 'label-align-md', ...

    props[(0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.suffixPropName)(breakpoint, 'labelAlign')] = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING); // i.e. 'label-cols', 'label-cols-sm', 'label-cols-md', ...

    props[(0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.suffixPropName)(breakpoint, 'labelCols')] = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN_NUMBER_STRING);
    return props;
  }, (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.create)(null))), {}, {
    description: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING),
    disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN, false),
    feedbackAriaLive: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING, 'assertive'),
    invalidFeedback: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING),
    label: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING),
    labelClass: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_ARRAY_OBJECT_STRING),
    labelFor: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING),
    labelSize: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING),
    labelSrOnly: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN, false),
    tooltip: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN, false),
    validFeedback: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_STRING),
    validated: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_5__.PROP_TYPE_BOOLEAN, false)
  })), _constants_components__WEBPACK_IMPORTED_MODULE_6__.NAME_FORM_GROUP);
}; // --- Main component ---
// We do not use `extend()` here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component

var BFormGroup = {
  name: _constants_components__WEBPACK_IMPORTED_MODULE_6__.NAME_FORM_GROUP,
  mixins: [_mixins_id__WEBPACK_IMPORTED_MODULE_2__.idMixin, _mixins_form_state__WEBPACK_IMPORTED_MODULE_3__.formStateMixin, _mixins_normalize_slot__WEBPACK_IMPORTED_MODULE_7__.normalizeSlotMixin],

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = generateProps();
  },

  data: function data() {
    return {
      ariaDescribedby: null
    };
  },
  computed: {
    contentColProps: function contentColProps() {
      return this.getColProps(this.$props, 'content');
    },
    labelAlignClasses: function labelAlignClasses() {
      return this.getAlignClasses(this.$props, 'label');
    },
    labelColProps: function labelColProps() {
      return this.getColProps(this.$props, 'label');
    },
    isHorizontal: function isHorizontal() {
      // Determine if the form group will be rendered horizontal
      // based on the existence of 'content-col' or 'label-col' props
      return (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.keys)(this.contentColProps).length > 0 || (0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.keys)(this.labelColProps).length > 0;
    }
  },
  watch: {
    ariaDescribedby: function ariaDescribedby(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.updateAriaDescribedby(newValue, oldValue);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // Set `aria-describedby` on the input specified by `labelFor`
      // We do this in a `$nextTick()` to ensure the children have finished rendering
      _this.updateAriaDescribedby(_this.ariaDescribedby);
    });
  },
  methods: {
    getAlignClasses: function getAlignClasses(props, prefix) {
      return (0,_utils_config__WEBPACK_IMPORTED_MODULE_4__.getBreakpointsUpCached)().reduce(function (result, breakpoint) {
        var propValue = props[(0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.suffixPropName)(breakpoint, "".concat(prefix, "Align"))] || null;

        if (propValue) {
          result.push(['text', breakpoint, propValue].filter(_utils_identity__WEBPACK_IMPORTED_MODULE_8__.identity).join('-'));
        }

        return result;
      }, []);
    },
    getColProps: function getColProps(props, prefix) {
      return (0,_utils_config__WEBPACK_IMPORTED_MODULE_4__.getBreakpointsUpCached)().reduce(function (result, breakpoint) {
        var propValue = props[(0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.suffixPropName)(breakpoint, "".concat(prefix, "Cols"))]; // Handle case where the prop's value is an empty string,
        // which represents `true`

        propValue = propValue === '' ? true : propValue || false;

        if (!(0,_utils_inspect__WEBPACK_IMPORTED_MODULE_9__.isBoolean)(propValue) && propValue !== 'auto') {
          // Convert to column size to number
          propValue = (0,_utils_number__WEBPACK_IMPORTED_MODULE_10__.toInteger)(propValue, 0); // Ensure column size is greater than `0`

          propValue = propValue > 0 ? propValue : false;
        } // Add the prop to the list of props to give to `<b-col>`
        // If breakpoint is '' (`${prefix}Cols` is `true`), then we use
        // the 'col' prop to make equal width at 'xs'


        if (propValue) {
          result[breakpoint || ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_9__.isBoolean)(propValue) ? 'col' : 'cols')] = propValue;
        }

        return result;
      }, {});
    },
    // Sets the `aria-describedby` attribute on the input if `labelFor` is set
    // Optionally accepts a string of IDs to remove as the second parameter
    // Preserves any `aria-describedby` value(s) user may have on input
    updateAriaDescribedby: function updateAriaDescribedby(newValue, oldValue) {
      var labelFor = this.labelFor;

      if (_constants_env__WEBPACK_IMPORTED_MODULE_11__.IS_BROWSER && labelFor) {
        // We need to escape `labelFor` since it can be user-provided
        var $input = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.select)("#".concat((0,_utils_css_escape__WEBPACK_IMPORTED_MODULE_13__.cssEscape)(labelFor)), this.$refs.content);

        if ($input) {
          var attr = 'aria-describedby';
          var newIds = (newValue || '').split(_constants_regex__WEBPACK_IMPORTED_MODULE_14__.RX_SPACE_SPLIT);
          var oldIds = (oldValue || '').split(_constants_regex__WEBPACK_IMPORTED_MODULE_14__.RX_SPACE_SPLIT); // Update ID list, preserving any original IDs
          // and ensuring the ID's are unique

          var ids = ((0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.getAttr)($input, attr) || '').split(_constants_regex__WEBPACK_IMPORTED_MODULE_14__.RX_SPACE_SPLIT).filter(function (id) {
            return !(0,_utils_array__WEBPACK_IMPORTED_MODULE_15__.arrayIncludes)(oldIds, id);
          }).concat(newIds).filter(function (id, index, ids) {
            return ids.indexOf(id) === index;
          }).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_8__.identity).join(' ').trim();

          if (ids) {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.setAttr)($input, attr, ids);
          } else {
            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.removeAttr)($input, attr);
          }
        }
      }
    },
    onLegendClick: function onLegendClick(event) {
      // Don't do anything if `labelFor` is set

      /* istanbul ignore next: clicking a label will focus the input, so no need to test */
      if (this.labelFor) {
        return;
      }

      var target = event.target;
      var tagName = target ? target.tagName : ''; // If clicked an interactive element inside legend,
      // we just let the default happen

      /* istanbul ignore next */

      if (LEGEND_INTERACTIVE_ELEMENTS.indexOf(tagName) !== -1) {
        return;
      } // If only a single input, focus it, emulating label behaviour


      var inputs = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.selectAll)(INPUT_SELECTOR, this.$refs.content).filter(_utils_dom__WEBPACK_IMPORTED_MODULE_12__.isVisible);

      if (inputs.length === 1) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_12__.attemptFocus)(inputs[0]);
      }
    }
  },
  render: function render(h) {
    var state = this.computedState,
        feedbackAriaLive = this.feedbackAriaLive,
        isHorizontal = this.isHorizontal,
        labelFor = this.labelFor,
        normalizeSlot = this.normalizeSlot,
        safeId = this.safeId,
        tooltip = this.tooltip;
    var id = safeId();
    var isFieldset = !labelFor;
    var $label = h();
    var labelContent = normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_16__.SLOT_NAME_LABEL) || this.label;
    var labelId = labelContent ? safeId('_BV_label_') : null;

    if (labelContent || isHorizontal) {
      var labelSize = this.labelSize,
          labelColProps = this.labelColProps;
      var labelTag = isFieldset ? 'legend' : 'label';

      if (this.labelSrOnly) {
        if (labelContent) {
          $label = h(labelTag, {
            class: 'sr-only',
            attrs: {
              id: labelId,
              for: labelFor || null
            }
          }, [labelContent]);
        }

        $label = h(isHorizontal ? _layout_col__WEBPACK_IMPORTED_MODULE_17__.BCol : 'div', {
          props: isHorizontal ? labelColProps : {}
        }, [$label]);
      } else {
        $label = h(isHorizontal ? _layout_col__WEBPACK_IMPORTED_MODULE_17__.BCol : labelTag, {
          on: isFieldset ? {
            click: this.onLegendClick
          } : {},
          props: isHorizontal ? _objectSpread(_objectSpread({}, labelColProps), {}, {
            tag: labelTag
          }) : {},
          attrs: {
            id: labelId,
            for: labelFor || null,
            // We add a `tabindex` to legend so that screen readers
            // will properly read the `aria-labelledby` in IE
            tabindex: isFieldset ? '-1' : null
          },
          class: [// Hide the focus ring on the legend
          isFieldset ? 'bv-no-focus-ring' : '', // When horizontal or if a legend is rendered, add 'col-form-label' class
          // for correct sizing as Bootstrap has inconsistent font styling for
          // legend in non-horizontal form groups
          // See: https://github.com/twbs/bootstrap/issues/27805
          isHorizontal || isFieldset ? 'col-form-label' : '', // Emulate label padding top of `0` on legend when not horizontal
          !isHorizontal && isFieldset ? 'pt-0' : '', // If not horizontal and not a legend, we add 'd-block' class to label
          // so that label-align works
          !isHorizontal && !isFieldset ? 'd-block' : '', labelSize ? "col-form-label-".concat(labelSize) : '', this.labelAlignClasses, this.labelClass]
        }, [labelContent]);
      }
    }

    var $invalidFeedback = h();
    var invalidFeedbackContent = normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_16__.SLOT_NAME_INVALID_FEEDBACK) || this.invalidFeedback;
    var invalidFeedbackId = invalidFeedbackContent ? safeId('_BV_feedback_invalid_') : null;

    if (invalidFeedbackContent) {
      $invalidFeedback = h(_form_form_invalid_feedback__WEBPACK_IMPORTED_MODULE_18__.BFormInvalidFeedback, {
        props: {
          ariaLive: feedbackAriaLive,
          id: invalidFeedbackId,
          // If state is explicitly `false`, always show the feedback
          state: state,
          tooltip: tooltip
        },
        attrs: {
          tabindex: invalidFeedbackContent ? '-1' : null
        }
      }, [invalidFeedbackContent]);
    }

    var $validFeedback = h();
    var validFeedbackContent = normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_16__.SLOT_NAME_VALID_FEEDBACK) || this.validFeedback;
    var validFeedbackId = validFeedbackContent ? safeId('_BV_feedback_valid_') : null;

    if (validFeedbackContent) {
      $validFeedback = h(_form_form_valid_feedback__WEBPACK_IMPORTED_MODULE_19__.BFormValidFeedback, {
        props: {
          ariaLive: feedbackAriaLive,
          id: validFeedbackId,
          // If state is explicitly `true`, always show the feedback
          state: state,
          tooltip: tooltip
        },
        attrs: {
          tabindex: validFeedbackContent ? '-1' : null
        }
      }, [validFeedbackContent]);
    }

    var $description = h();
    var descriptionContent = normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_16__.SLOT_NAME_DESCRIPTION) || this.description;
    var descriptionId = descriptionContent ? safeId('_BV_description_') : null;

    if (descriptionContent) {
      $description = h(_form_form_text__WEBPACK_IMPORTED_MODULE_20__.BFormText, {
        attrs: {
          id: descriptionId,
          tabindex: '-1'
        }
      }, [descriptionContent]);
    } // Update `ariaDescribedby`
    // Screen readers will read out any content linked to by `aria-describedby`
    // even if the content is hidden with `display: none;`, hence we only include
    // feedback IDs if the form group's state is explicitly valid or invalid


    var ariaDescribedby = this.ariaDescribedby = [descriptionId, state === false ? invalidFeedbackId : null, state === true ? validFeedbackId : null].filter(_utils_identity__WEBPACK_IMPORTED_MODULE_8__.identity).join(' ') || null;
    var $content = h(isHorizontal ? _layout_col__WEBPACK_IMPORTED_MODULE_17__.BCol : 'div', {
      props: isHorizontal ? this.contentColProps : {},
      ref: 'content'
    }, [normalizeSlot(_constants_slots__WEBPACK_IMPORTED_MODULE_16__.SLOT_NAME_DEFAULT, {
      ariaDescribedby: ariaDescribedby,
      descriptionId: descriptionId,
      id: id,
      labelId: labelId
    }) || h(), $invalidFeedback, $validFeedback, $description]); // Return it wrapped in a form group
    // Note: Fieldsets do not support adding `row` or `form-row` directly
    // to them due to browser specific render issues, so we move the `form-row`
    // to an inner wrapper div when horizontal and using a fieldset

    return h(isFieldset ? 'fieldset' : isHorizontal ? _layout_form_row__WEBPACK_IMPORTED_MODULE_21__.BFormRow : 'div', {
      staticClass: 'form-group',
      class: [{
        'was-validated': this.validated
      }, this.stateClass],
      attrs: {
        id: id,
        disabled: isFieldset ? this.disabled : null,
        role: isFieldset ? null : 'group',
        'aria-invalid': this.computedAriaInvalid,
        // Only apply `aria-labelledby` if we are a horizontal fieldset
        // as the legend is no longer a direct child of fieldset
        'aria-labelledby': isFieldset && isHorizontal ? labelId : null
      }
    }, isHorizontal && isFieldset ? [h(_layout_form_row__WEBPACK_IMPORTED_MODULE_21__.BFormRow, [$label, $content])] : [$label, $content]);
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/form-input/form-input.js":
/*!****************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/form-input/form-input.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BFormInput": () => (/* binding */ BFormInput),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _mixins_form_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/form-control */ "./node_modules/bootstrap-vue/esm/mixins/form-control.js");
/* harmony import */ var _mixins_form_selection__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../mixins/form-selection */ "./node_modules/bootstrap-vue/esm/mixins/form-selection.js");
/* harmony import */ var _mixins_form_size__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/form-size */ "./node_modules/bootstrap-vue/esm/mixins/form-size.js");
/* harmony import */ var _mixins_form_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/form-state */ "./node_modules/bootstrap-vue/esm/mixins/form-state.js");
/* harmony import */ var _mixins_form_text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/form-text */ "./node_modules/bootstrap-vue/esm/mixins/form-text.js");
/* harmony import */ var _mixins_form_validity__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../mixins/form-validity */ "./node_modules/bootstrap-vue/esm/mixins/form-validity.js");
/* harmony import */ var _mixins_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/esm/mixins/id.js");
/* harmony import */ var _mixins_listeners__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../mixins/listeners */ "./node_modules/bootstrap-vue/esm/mixins/listeners.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















 // --- Constants ---
// Valid supported input types

var TYPES = ['text', 'password', 'email', 'number', 'url', 'tel', 'search', 'range', 'color', 'date', 'time', 'datetime', 'datetime-local', 'month', 'week']; // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_1__.sortKeys)(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _mixins_id__WEBPACK_IMPORTED_MODULE_2__.props), _mixins_form_control__WEBPACK_IMPORTED_MODULE_3__.props), _mixins_form_size__WEBPACK_IMPORTED_MODULE_4__.props), _mixins_form_state__WEBPACK_IMPORTED_MODULE_5__.props), _mixins_form_text__WEBPACK_IMPORTED_MODULE_6__.props), {}, {
  list: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_STRING),
  max: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING),
  min: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING),
  // Disable mousewheel to prevent wheel from changing values (i.e. number/date)
  noWheel: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_BOOLEAN, false),
  step: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING),
  type: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_STRING, 'text', function (type) {
    return (0,_utils_array__WEBPACK_IMPORTED_MODULE_8__.arrayIncludes)(TYPES, type);
  })
})), _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_FORM_INPUT); // --- Main component ---
// @vue/component

var BFormInput = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_10__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_FORM_INPUT,
  // Mixin order is important!
  mixins: [_mixins_listeners__WEBPACK_IMPORTED_MODULE_11__.listenersMixin, _mixins_id__WEBPACK_IMPORTED_MODULE_2__.idMixin, _mixins_form_control__WEBPACK_IMPORTED_MODULE_3__.formControlMixin, _mixins_form_size__WEBPACK_IMPORTED_MODULE_4__.formSizeMixin, _mixins_form_state__WEBPACK_IMPORTED_MODULE_5__.formStateMixin, _mixins_form_text__WEBPACK_IMPORTED_MODULE_6__.formTextMixin, _mixins_form_selection__WEBPACK_IMPORTED_MODULE_12__.formSelectionMixin, _mixins_form_validity__WEBPACK_IMPORTED_MODULE_13__.formValidityMixin],
  props: props,
  computed: {
    localType: function localType() {
      // We only allow certain types
      var type = this.type;
      return (0,_utils_array__WEBPACK_IMPORTED_MODULE_8__.arrayIncludes)(TYPES, type) ? type : 'text';
    },
    computedAttrs: function computedAttrs() {
      var type = this.localType,
          name = this.name,
          form = this.form,
          disabled = this.disabled,
          placeholder = this.placeholder,
          required = this.required,
          min = this.min,
          max = this.max,
          step = this.step;
      return {
        id: this.safeId(),
        name: name,
        form: form,
        type: type,
        disabled: disabled,
        placeholder: placeholder,
        required: required,
        autocomplete: this.autocomplete || null,
        readonly: this.readonly || this.plaintext,
        min: min,
        max: max,
        step: step,
        list: type !== 'password' ? this.list : null,
        'aria-required': required ? 'true' : null,
        'aria-invalid': this.computedAriaInvalid
      };
    },
    computedListeners: function computedListeners() {
      return _objectSpread(_objectSpread({}, this.bvListeners), {}, {
        input: this.onInput,
        change: this.onChange,
        blur: this.onBlur
      });
    }
  },
  watch: {
    noWheel: function noWheel(newValue) {
      this.setWheelStopper(newValue);
    }
  },
  mounted: function mounted() {
    this.setWheelStopper(this.noWheel);
  },

  /* istanbul ignore next */
  deactivated: function deactivated() {
    // Turn off listeners when keep-alive component deactivated

    /* istanbul ignore next */
    this.setWheelStopper(false);
  },

  /* istanbul ignore next */
  activated: function activated() {
    // Turn on listeners (if no-wheel) when keep-alive component activated

    /* istanbul ignore next */
    this.setWheelStopper(this.noWheel);
  },
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore next */
    this.setWheelStopper(false);
  },
  methods: {
    setWheelStopper: function setWheelStopper(on) {
      var input = this.$el; // We use native events, so that we don't interfere with propagation

      (0,_utils_events__WEBPACK_IMPORTED_MODULE_14__.eventOnOff)(on, input, 'focus', this.onWheelFocus);
      (0,_utils_events__WEBPACK_IMPORTED_MODULE_14__.eventOnOff)(on, input, 'blur', this.onWheelBlur);

      if (!on) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_14__.eventOff)(document, 'wheel', this.stopWheel);
      }
    },
    onWheelFocus: function onWheelFocus() {
      (0,_utils_events__WEBPACK_IMPORTED_MODULE_14__.eventOn)(document, 'wheel', this.stopWheel);
    },
    onWheelBlur: function onWheelBlur() {
      (0,_utils_events__WEBPACK_IMPORTED_MODULE_14__.eventOff)(document, 'wheel', this.stopWheel);
    },
    stopWheel: function stopWheel(event) {
      (0,_utils_events__WEBPACK_IMPORTED_MODULE_14__.stopEvent)(event, {
        propagation: false
      });
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_15__.attemptBlur)(this.$el);
    }
  },
  render: function render(h) {
    return h('input', {
      class: this.computedClass,
      attrs: this.computedAttrs,
      domProps: {
        value: this.localValue
      },
      on: this.computedListeners,
      ref: 'input'
    });
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/form/form-invalid-feedback.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/form/form-invalid-feedback.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BFormInvalidFeedback": () => (/* binding */ BFormInvalidFeedback),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  ariaLive: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  forceShow: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  id: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  role: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  // Tri-state prop: `true`, `false`, or `null`
  state: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, null),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'div'),
  tooltip: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false)
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_INVALID_FEEDBACK); // --- Main component ---
// @vue/component

var BFormInvalidFeedback = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_INVALID_FEEDBACK,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tooltip = props.tooltip,
        ariaLive = props.ariaLive;
    var show = props.forceShow === true || props.state === false;
    return h(props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      class: {
        'd-block': show,
        'invalid-feedback': !tooltip,
        'invalid-tooltip': tooltip
      },
      attrs: {
        id: props.id || null,
        role: props.role || null,
        'aria-live': ariaLive || null,
        'aria-atomic': ariaLive ? 'true' : null
      }
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/form/form-text.js":
/*!*********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/form/form-text.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BFormText": () => (/* binding */ BFormText),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  id: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  inline: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'small'),
  textVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'muted')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_TEXT); // --- Main component ---
// @vue/component

var BFormText = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_TEXT,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      class: _defineProperty({
        'form-text': !props.inline
      }, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        id: props.id
      }
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/form/form-valid-feedback.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/form/form-valid-feedback.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BFormValidFeedback": () => (/* binding */ BFormValidFeedback),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  ariaLive: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  forceShow: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  id: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  role: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  // Tri-state prop: `true`, `false`, or `null`
  state: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, null),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'div'),
  tooltip: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false)
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_VALID_FEEDBACK); // --- Main component ---
// @vue/component

var BFormValidFeedback = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_VALID_FEEDBACK,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var tooltip = props.tooltip,
        ariaLive = props.ariaLive;
    var show = props.forceShow === true || props.state === true;
    return h(props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      class: {
        'd-block': show,
        'valid-feedback': !tooltip,
        'valid-tooltip': tooltip
      },
      attrs: {
        id: props.id || null,
        role: props.role || null,
        'aria-live': ariaLive || null,
        'aria-atomic': ariaLive ? 'true' : null
      }
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/form/form.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/form/form.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BForm": () => (/* binding */ BForm),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  id: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  inline: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  novalidate: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  validated: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false)
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM); // --- Main component ---
// @vue/component

var BForm = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h('form', (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      class: {
        'form-inline': props.inline,
        'was-validated': props.validated
      },
      attrs: {
        id: props.id,
        novalidate: props.novalidate
      }
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/image/img.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/image/img.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BImg": () => (/* binding */ BImg),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









 // --- Constants --
// Blank image with fill template

var BLANK_TEMPLATE = '<svg width="%{w}" height="%{h}" ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'viewBox="0 0 %{w} %{h}" preserveAspectRatio="none">' + '<rect width="100%" height="100%" style="fill:%{f};"></rect>' + '</svg>'; // --- Helper methods ---

var makeBlankImgSrc = function makeBlankImgSrc(width, height, color) {
  var src = encodeURIComponent(BLANK_TEMPLATE.replace('%{w}', (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(width)).replace('%{h}', (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(height)).replace('%{f}', color));
  return "data:image/svg+xml;charset=UTF-8,".concat(src);
}; // --- Props ---


var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makePropsConfigurable)({
  alt: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_STRING),
  blank: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  blankColor: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_STRING, 'transparent'),
  block: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  center: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  fluid: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  // Gives fluid images class `w-100` to make them grow to fit container
  fluidGrow: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  height: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_NUMBER_STRING),
  left: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  right: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  // Possible values:
  //   `false`: no rounding of corners
  //   `true`: slightly rounded corners
  //   'top': top corners rounded
  //   'right': right corners rounded
  //   'bottom': bottom corners rounded
  //   'left': left corners rounded
  //   'circle': circle/oval
  //   '0': force rounding off
  rounded: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN_STRING, false),
  sizes: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_ARRAY_STRING),
  src: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_STRING),
  srcset: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_ARRAY_STRING),
  thumbnail: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_BOOLEAN, false),
  width: (0,_utils_props__WEBPACK_IMPORTED_MODULE_1__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_2__.PROP_TYPE_NUMBER_STRING)
}, _constants_components__WEBPACK_IMPORTED_MODULE_3__.NAME_IMG); // --- Main component ---
// @vue/component

var BImg = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_4__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_3__.NAME_IMG,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var _class;

    var props = _ref.props,
        data = _ref.data;
    var alt = props.alt,
        src = props.src,
        block = props.block,
        fluidGrow = props.fluidGrow,
        rounded = props.rounded;
    var width = (0,_utils_number__WEBPACK_IMPORTED_MODULE_5__.toInteger)(props.width) || null;
    var height = (0,_utils_number__WEBPACK_IMPORTED_MODULE_5__.toInteger)(props.height) || null;
    var align = null;
    var srcset = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(props.srcset).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity).join(',');
    var sizes = (0,_utils_array__WEBPACK_IMPORTED_MODULE_6__.concat)(props.sizes).filter(_utils_identity__WEBPACK_IMPORTED_MODULE_7__.identity).join(',');

    if (props.blank) {
      if (!height && width) {
        height = width;
      } else if (!width && height) {
        width = height;
      }

      if (!width && !height) {
        width = 1;
        height = 1;
      } // Make a blank SVG image


      src = makeBlankImgSrc(width, height, props.blankColor || 'transparent'); // Disable srcset and sizes

      srcset = null;
      sizes = null;
    }

    if (props.left) {
      align = 'float-left';
    } else if (props.right) {
      align = 'float-right';
    } else if (props.center) {
      align = 'mx-auto';
      block = true;
    }

    return h('img', (0,_vue__WEBPACK_IMPORTED_MODULE_8__.mergeData)(data, {
      attrs: {
        src: src,
        alt: alt,
        width: width ? (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(width) : null,
        height: height ? (0,_utils_string__WEBPACK_IMPORTED_MODULE_0__.toString)(height) : null,
        srcset: srcset || null,
        sizes: sizes || null
      },
      class: (_class = {
        'img-thumbnail': props.thumbnail,
        'img-fluid': props.fluid || fluidGrow,
        'w-100': fluidGrow,
        rounded: rounded === '' || rounded === true
      }, _defineProperty(_class, "rounded-".concat(rounded), (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_9__.isString)(rounded) && rounded !== ''), _defineProperty(_class, align, align), _defineProperty(_class, 'd-block', block), _class)
    }));
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/layout/col.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/layout/col.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BCol": () => (/* binding */ BCol),
/* harmony export */   "generateProps": () => (/* binding */ generateProps)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _constants_regex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants/regex */ "./node_modules/bootstrap-vue/esm/constants/regex.js");
/* harmony import */ var _utils_array__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/esm/utils/array.js");
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/config */ "./node_modules/bootstrap-vue/esm/utils/config.js");
/* harmony import */ var _utils_identity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/identity */ "./node_modules/bootstrap-vue/esm/utils/identity.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_memoize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/memoize */ "./node_modules/bootstrap-vue/esm/utils/memoize.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












 // --- Constants ---

var ALIGN_SELF_VALUES = ['auto', 'start', 'end', 'center', 'baseline', 'stretch']; // --- Helper methods ---
// Compute a breakpoint class name

var computeBreakpoint = function computeBreakpoint(type, breakpoint, value) {
  var className = type;

  if ((0,_utils_inspect__WEBPACK_IMPORTED_MODULE_0__.isUndefinedOrNull)(value) || value === false) {
    return undefined;
  }

  if (breakpoint) {
    className += "-".concat(breakpoint);
  } // Handling the boolean style prop when accepting `[Boolean, String, Number]`
  // means Vue will not convert `<b-col sm></b-col>` to `sm: true` for us
  // Since the default is `false`, '' indicates the prop's presence


  if (type === 'col' && (value === '' || value === true)) {
    // .col-md
    return (0,_utils_string__WEBPACK_IMPORTED_MODULE_1__.lowerCase)(className);
  } // .order-md-6


  className += "-".concat(value);
  return (0,_utils_string__WEBPACK_IMPORTED_MODULE_1__.lowerCase)(className);
}; // Memoized function for better performance on generating class names


var computeBreakpointClass = (0,_utils_memoize__WEBPACK_IMPORTED_MODULE_2__.memoize)(computeBreakpoint); // Cached copy of the breakpoint prop names

var breakpointPropMap = (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.create)(null); // --- Props ---
// Prop generator for lazy generation of props

var generateProps = function generateProps() {
  // Grab the breakpoints from the cached config (exclude the '' (xs) breakpoint)
  var breakpoints = (0,_utils_config__WEBPACK_IMPORTED_MODULE_4__.getBreakpointsUpCached)().filter(_utils_identity__WEBPACK_IMPORTED_MODULE_5__.identity); // i.e. 'col-sm', 'col-md-6', 'col-lg-auto', ...

  var breakpointCol = breakpoints.reduce(function (props, breakpoint) {
    props[breakpoint] = (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_BOOLEAN_NUMBER_STRING);
    return props;
  }, (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.create)(null)); // i.e. 'offset-md-1', 'offset-lg-12', ...

  var breakpointOffset = breakpoints.reduce(function (props, breakpoint) {
    props[(0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.suffixPropName)(breakpoint, 'offset')] = (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING);
    return props;
  }, (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.create)(null)); // i.e. 'order-md-1', 'order-lg-12', ...

  var breakpointOrder = breakpoints.reduce(function (props, breakpoint) {
    props[(0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.suffixPropName)(breakpoint, 'order')] = (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING);
    return props;
  }, (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.create)(null)); // For loop doesn't need to check `.hasOwnProperty()`
  // when using an object created from `null`

  breakpointPropMap = (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.assign)((0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.create)(null), {
    col: (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.keys)(breakpointCol),
    offset: (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.keys)(breakpointOffset),
    order: (0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.keys)(breakpointOrder)
  }); // Return the generated props

  return (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_3__.sortKeys)(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, breakpointCol), breakpointOffset), breakpointOrder), {}, {
    // Flex alignment
    alignSelf: (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_STRING, null, function (value) {
      return (0,_utils_array__WEBPACK_IMPORTED_MODULE_8__.arrayIncludes)(ALIGN_SELF_VALUES, value);
    }),
    // Generic flexbox 'col' (xs)
    col: (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_BOOLEAN, false),
    // i.e. 'col-1', 'col-2', 'col-auto', ...
    cols: (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING),
    offset: (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING),
    order: (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_NUMBER_STRING),
    tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_6__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_7__.PROP_TYPE_STRING, 'div')
  })), _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_COL);
}; // --- Main component ---
// We do not use extend here as that would evaluate the props
// immediately, which we do not want to happen
// @vue/component

var BCol = {
  name: _constants_components__WEBPACK_IMPORTED_MODULE_9__.NAME_COL,
  functional: true,

  get props() {
    // Allow props to be lazy evaled on first access and
    // then they become a non-getter afterwards.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get#Smart_self-overwriting_lazy_getters
    delete this.props; // eslint-disable-next-line no-return-assign

    return this.props = generateProps();
  },

  render: function render(h, _ref) {
    var _classList$push;

    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    var cols = props.cols,
        offset = props.offset,
        order = props.order,
        alignSelf = props.alignSelf;
    var classList = []; // Loop through `col`, `offset`, `order` breakpoint props

    for (var type in breakpointPropMap) {
      // Returns colSm, offset, offsetSm, orderMd, etc.
      var _keys = breakpointPropMap[type];

      for (var i = 0; i < _keys.length; i++) {
        // computeBreakpoint(col, colSm => Sm, value=[String, Number, Boolean])
        var c = computeBreakpointClass(type, _keys[i].replace(type, ''), props[_keys[i]]); // If a class is returned, push it onto the array.

        if (c) {
          classList.push(c);
        }
      }
    }

    var hasColClasses = classList.some(function (className) {
      return _constants_regex__WEBPACK_IMPORTED_MODULE_10__.RX_COL_CLASS.test(className);
    });
    classList.push((_classList$push = {
      // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.
      col: props.col || !hasColClasses && !cols
    }, _defineProperty(_classList$push, "col-".concat(cols), cols), _defineProperty(_classList$push, "offset-".concat(offset), offset), _defineProperty(_classList$push, "order-".concat(order), order), _defineProperty(_classList$push, "align-self-".concat(alignSelf), alignSelf), _classList$push));
    return h(props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_11__.mergeData)(data, {
      class: classList
    }), children);
  }
};

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/components/layout/form-row.js":
/*!**********************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/components/layout/form-row.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BFormRow": () => (/* binding */ BFormRow),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../vue */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'div')
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_ROW); // --- Main component ---
// @vue/component

var BFormRow = /*#__PURE__*/(0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  name: _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_FORM_ROW,
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        children = _ref.children;
    return h(props.tag, (0,_vue__WEBPACK_IMPORTED_MODULE_4__.mergeData)(data, {
      staticClass: 'form-row'
    }), children);
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/card.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/card.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardMixin": () => (/* binding */ cardMixin),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/components */ "./node_modules/bootstrap-vue/esm/constants/components.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  bgVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  borderVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  tag: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING, 'div'),
  textVariant: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
}, _constants_components__WEBPACK_IMPORTED_MODULE_2__.NAME_CARD); // --- Mixin ---
// @vue/component

var cardMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_3__.extend)({
  props: props
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/form-control.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/form-control.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formControlMixin": () => (/* binding */ formControlMixin),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");



 // --- Constants ---

var SELECTOR = 'input, textarea, select'; // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  autofocus: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  disabled: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  form: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  id: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  name: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  required: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false)
}, 'formControls'); // --- Mixin ---
// @vue/component

var formControlMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_2__.extend)({
  props: props,
  mounted: function mounted() {
    this.handleAutofocus();
  },

  /* istanbul ignore next */
  activated: function activated() {
    this.handleAutofocus();
  },
  methods: {
    handleAutofocus: function handleAutofocus() {
      var _this = this;

      this.$nextTick(function () {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.requestAF)(function () {
          var el = _this.$el;

          if (_this.autofocus && (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.isVisible)(el)) {
            if (!(0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.matches)(el, SELECTOR)) {
              el = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.select)(SELECTOR, el);
            }

            (0,_utils_dom__WEBPACK_IMPORTED_MODULE_3__.attemptFocus)(el);
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/form-selection.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/form-selection.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSelectionMixin": () => (/* binding */ formSelectionMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
 // @vue/component

var formSelectionMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  computed: {
    selectionStart: {
      // Expose selectionStart for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionStart;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionStart = val;
      }
    },
    selectionEnd: {
      // Expose selectionEnd for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionEnd;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionEnd = val;
      }
    },
    selectionDirection: {
      // Expose selectionDirection for formatters, etc
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.selectionDirection;
      },

      /* istanbul ignore next */
      set: function set(val) {
        this.$refs.input.selectionDirection = val;
      }
    }
  },
  methods: {
    /* istanbul ignore next */
    select: function select() {
      var _this$$refs$input;

      // For external handler that may want a select() method
      (_this$$refs$input = this.$refs.input).select.apply(_this$$refs$input, arguments);
    },

    /* istanbul ignore next */
    setSelectionRange: function setSelectionRange() {
      var _this$$refs$input2;

      // For external handler that may want a setSelectionRange(a,b,c) method
      (_this$$refs$input2 = this.$refs.input).setSelectionRange.apply(_this$$refs$input2, arguments);
    },

    /* istanbul ignore next */
    setRangeText: function setRangeText() {
      var _this$$refs$input3;

      // For external handler that may want a setRangeText(a,b,c) method
      (_this$$refs$input3 = this.$refs.input).setRangeText.apply(_this$$refs$input3, arguments);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/form-size.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/form-size.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formSizeMixin": () => (/* binding */ formSizeMixin),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");


 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  size: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING)
}, 'formControls'); // --- Mixin ---
// @vue/component

var formSizeMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_2__.extend)({
  props: props,
  computed: {
    sizeFormClass: function sizeFormClass() {
      return [this.size ? "form-control-".concat(this.size) : null];
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/form-state.js":
/*!*************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/form-state.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formStateMixin": () => (/* binding */ formStateMixin),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_inspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/inspect */ "./node_modules/bootstrap-vue/esm/utils/inspect.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_safe_vue_instance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/safe-vue-instance */ "./node_modules/bootstrap-vue/esm/utils/safe-vue-instance.js");
/* Form control contextual state class computation
 *
 * Returned class is either 'is-valid' or 'is-invalid' based on the 'state' prop
 * state can be one of five values:
 *  - true for is-valid
 *  - false for is-invalid
 *  - null for no contextual state
 */




 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makePropsConfigurable)({
  // Tri-state prop: true, false, null (or undefined)
  state: (0,_utils_props__WEBPACK_IMPORTED_MODULE_0__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, null)
}, 'formState'); // --- Mixin ---
// @vue/component

var formStateMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_2__.extend)({
  props: props,
  computed: {
    computedState: function computedState() {
      // If not a boolean, ensure that value is null
      return (0,_utils_inspect__WEBPACK_IMPORTED_MODULE_3__.isBoolean)(this.state) ? this.state : null;
    },
    stateClass: function stateClass() {
      var state = this.computedState;
      return state === true ? 'is-valid' : state === false ? 'is-invalid' : null;
    },
    computedAriaInvalid: function computedAriaInvalid() {
      var ariaInvalid = (0,_utils_safe_vue_instance__WEBPACK_IMPORTED_MODULE_4__.safeVueInstance)(this).ariaInvalid;

      if (ariaInvalid === true || ariaInvalid === 'true' || ariaInvalid === '') {
        return 'true';
      }

      return this.computedState === false ? 'true' : ariaInvalid;
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/form-text.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/form-text.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MODEL_EVENT_NAME": () => (/* binding */ MODEL_EVENT_NAME),
/* harmony export */   "MODEL_PROP_NAME": () => (/* binding */ MODEL_PROP_NAME),
/* harmony export */   "formTextMixin": () => (/* binding */ formTextMixin),
/* harmony export */   "props": () => (/* binding */ props)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
/* harmony import */ var _constants_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/events */ "./node_modules/bootstrap-vue/esm/constants/events.js");
/* harmony import */ var _constants_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/props */ "./node_modules/bootstrap-vue/esm/constants/props.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/dom */ "./node_modules/bootstrap-vue/esm/utils/dom.js");
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/events */ "./node_modules/bootstrap-vue/esm/utils/events.js");
/* harmony import */ var _utils_math__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/math */ "./node_modules/bootstrap-vue/esm/utils/math.js");
/* harmony import */ var _utils_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/model */ "./node_modules/bootstrap-vue/esm/utils/model.js");
/* harmony import */ var _utils_number__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/number */ "./node_modules/bootstrap-vue/esm/utils/number.js");
/* harmony import */ var _utils_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/esm/utils/object.js");
/* harmony import */ var _utils_props__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/props */ "./node_modules/bootstrap-vue/esm/utils/props.js");
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/string */ "./node_modules/bootstrap-vue/esm/utils/string.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











 // --- Constants ---

var _makeModelMixin = (0,_utils_model__WEBPACK_IMPORTED_MODULE_0__.makeModelMixin)('value', {
  type: _constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_NUMBER_STRING,
  defaultValue: '',
  event: _constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_UPDATE
}),
    modelMixin = _makeModelMixin.mixin,
    modelProps = _makeModelMixin.props,
    MODEL_PROP_NAME = _makeModelMixin.prop,
    MODEL_EVENT_NAME = _makeModelMixin.event;

 // --- Props ---

var props = (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makePropsConfigurable)((0,_utils_object__WEBPACK_IMPORTED_MODULE_4__.sortKeys)(_objectSpread(_objectSpread({}, modelProps), {}, {
  ariaInvalid: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN_STRING, false),
  autocomplete: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  // Debounce timeout (in ms). Not applicable with `lazy` prop
  debounce: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_NUMBER_STRING, 0),
  formatter: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_FUNCTION),
  // Only update the `v-model` on blur/change events
  lazy: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  lazyFormatter: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  number: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  placeholder: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_STRING),
  plaintext: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  readonly: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false),
  trim: (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.makeProp)(_constants_props__WEBPACK_IMPORTED_MODULE_1__.PROP_TYPE_BOOLEAN, false)
})), 'formTextControls'); // --- Mixin ---
// @vue/component

var formTextMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_5__.extend)({
  mixins: [modelMixin],
  props: props,
  data: function data() {
    var value = this[MODEL_PROP_NAME];
    return {
      localValue: (0,_utils_string__WEBPACK_IMPORTED_MODULE_6__.toString)(value),
      vModelValue: this.modifyValue(value)
    };
  },
  computed: {
    computedClass: function computedClass() {
      var plaintext = this.plaintext,
          type = this.type;
      var isRange = type === 'range';
      var isColor = type === 'color';
      return [{
        // Range input needs class `custom-range`
        'custom-range': isRange,
        // `plaintext` not supported by `type="range"` or `type="color"`
        'form-control-plaintext': plaintext && !isRange && !isColor,
        // `form-control` not used by `type="range"` or `plaintext`
        // Always used by `type="color"`
        'form-control': isColor || !plaintext && !isRange
      }, this.sizeFormClass, this.stateClass];
    },
    computedDebounce: function computedDebounce() {
      // Ensure we have a positive number equal to or greater than 0
      return (0,_utils_math__WEBPACK_IMPORTED_MODULE_7__.mathMax)((0,_utils_number__WEBPACK_IMPORTED_MODULE_8__.toInteger)(this.debounce, 0), 0);
    },
    hasFormatter: function hasFormatter() {
      return (0,_utils_props__WEBPACK_IMPORTED_MODULE_3__.hasPropFunction)(this.formatter);
    }
  },
  watch: _defineProperty({}, MODEL_PROP_NAME, function (newValue) {
    var stringifyValue = (0,_utils_string__WEBPACK_IMPORTED_MODULE_6__.toString)(newValue);
    var modifiedValue = this.modifyValue(newValue);

    if (stringifyValue !== this.localValue || modifiedValue !== this.vModelValue) {
      // Clear any pending debounce timeout, as we are overwriting the user input
      this.clearDebounce(); // Update the local values

      this.localValue = stringifyValue;
      this.vModelValue = modifiedValue;
    }
  }),
  created: function created() {
    // Create private non-reactive props
    this.$_inputDebounceTimer = null;
  },
  beforeDestroy: function beforeDestroy() {
    this.clearDebounce();
  },
  methods: {
    clearDebounce: function clearDebounce() {
      clearTimeout(this.$_inputDebounceTimer);
      this.$_inputDebounceTimer = null;
    },
    formatValue: function formatValue(value, event) {
      var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      value = (0,_utils_string__WEBPACK_IMPORTED_MODULE_6__.toString)(value);

      if (this.hasFormatter && (!this.lazyFormatter || force)) {
        value = this.formatter(value, event);
      }

      return value;
    },
    modifyValue: function modifyValue(value) {
      value = (0,_utils_string__WEBPACK_IMPORTED_MODULE_6__.toString)(value); // Emulate `.trim` modifier behaviour

      if (this.trim) {
        value = value.trim();
      } // Emulate `.number` modifier behaviour


      if (this.number) {
        value = (0,_utils_number__WEBPACK_IMPORTED_MODULE_8__.toFloat)(value, value);
      }

      return value;
    },
    updateValue: function updateValue(value) {
      var _this = this;

      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var lazy = this.lazy;

      if (lazy && !force) {
        return;
      } // Make sure to always clear the debounce when `updateValue()`
      // is called, even when the v-model hasn't changed


      this.clearDebounce(); // Define the shared update logic in a method to be able to use
      // it for immediate and debounced value changes

      var doUpdate = function doUpdate() {
        value = _this.modifyValue(value);

        if (value !== _this.vModelValue) {
          _this.vModelValue = value;

          _this.$emit(MODEL_EVENT_NAME, value);
        } else if (_this.hasFormatter) {
          // When the `vModelValue` hasn't changed but the actual input value
          // is out of sync, make sure to change it to the given one
          // Usually caused by browser autocomplete and how it triggers the
          // change or input event, or depending on the formatter function
          // https://github.com/bootstrap-vue/bootstrap-vue/issues/2657
          // https://github.com/bootstrap-vue/bootstrap-vue/issues/3498

          /* istanbul ignore next: hard to test */
          var $input = _this.$refs.input;
          /* istanbul ignore if: hard to test out of sync value */

          if ($input && value !== $input.value) {
            $input.value = value;
          }
        }
      }; // Only debounce the value update when a value greater than `0`
      // is set and we are not in lazy mode or this is a forced update


      var debounce = this.computedDebounce;

      if (debounce > 0 && !lazy && !force) {
        this.$_inputDebounceTimer = setTimeout(doUpdate, debounce);
      } else {
        // Immediately update the v-model
        doUpdate();
      }
    },
    onInput: function onInput(event) {
      // `event.target.composing` is set by Vue
      // https://github.com/vuejs/vue/blob/dev/src/platforms/web/runtime/directives/model.js
      // TODO: Is this needed now with the latest Vue?

      /* istanbul ignore if: hard to test composition events */
      if (event.target.composing) {
        return;
      }

      var value = event.target.value;
      var formattedValue = this.formatValue(value, event); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || event.defaultPrevented) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_9__.stopEvent)(event, {
          propagation: false
        });
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue);
      this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_INPUT, formattedValue);
    },
    onChange: function onChange(event) {
      var value = event.target.value;
      var formattedValue = this.formatValue(value, event); // Exit when the `formatter` function strictly returned `false`
      // or prevented the input event

      /* istanbul ignore next */

      if (formattedValue === false || event.defaultPrevented) {
        (0,_utils_events__WEBPACK_IMPORTED_MODULE_9__.stopEvent)(event, {
          propagation: false
        });
        return;
      }

      this.localValue = formattedValue;
      this.updateValue(formattedValue, true);
      this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_CHANGE, formattedValue);
    },
    onBlur: function onBlur(event) {
      // Apply the `localValue` on blur to prevent cursor jumps
      // on mobile browsers (e.g. caused by autocomplete)
      var value = event.target.value;
      var formattedValue = this.formatValue(value, event, true);

      if (formattedValue !== false) {
        // We need to use the modified value here to apply the
        // `.trim` and `.number` modifiers properly
        this.localValue = (0,_utils_string__WEBPACK_IMPORTED_MODULE_6__.toString)(this.modifyValue(formattedValue)); // We pass the formatted value here since the `updateValue` method
        // handles the modifiers itself

        this.updateValue(formattedValue, true);
      } // Emit native blur event


      this.$emit(_constants_events__WEBPACK_IMPORTED_MODULE_2__.EVENT_NAME_BLUR, event);
    },
    focus: function focus() {
      // For external handler that may want a focus method
      if (!this.disabled) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.attemptFocus)(this.$el);
      }
    },
    blur: function blur() {
      // For external handler that may want a blur method
      if (!this.disabled) {
        (0,_utils_dom__WEBPACK_IMPORTED_MODULE_10__.attemptBlur)(this.$el);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/mixins/form-validity.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/mixins/form-validity.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formValidityMixin": () => (/* binding */ formValidityMixin)
/* harmony export */ });
/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vue */ "./node_modules/bootstrap-vue/esm/vue.js");
 // @vue/component

var formValidityMixin = (0,_vue__WEBPACK_IMPORTED_MODULE_0__.extend)({
  computed: {
    validity: {
      // Expose validity property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.validity;
      }
    },
    validationMessage: {
      // Expose validationMessage property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.validationMessage;
      }
    },
    willValidate: {
      // Expose willValidate property
      cache: false,

      /* istanbul ignore next */
      get: function get() {
        return this.$refs.input.willValidate;
      }
    }
  },
  methods: {
    /* istanbul ignore next */
    setCustomValidity: function setCustomValidity() {
      var _this$$refs$input;

      // For external handler that may want a setCustomValidity(...) method
      return (_this$$refs$input = this.$refs.input).setCustomValidity.apply(_this$$refs$input, arguments);
    },

    /* istanbul ignore next */
    checkValidity: function checkValidity() {
      var _this$$refs$input2;

      // For external handler that may want a checkValidity(...) method
      return (_this$$refs$input2 = this.$refs.input).checkValidity.apply(_this$$refs$input2, arguments);
    },

    /* istanbul ignore next */
    reportValidity: function reportValidity() {
      var _this$$refs$input3;

      // For external handler that may want a reportValidity(...) method
      return (_this$$refs$input3 = this.$refs.input).reportValidity.apply(_this$$refs$input3, arguments);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/esm/utils/css-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/esm/utils/css-escape.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cssEscape": () => (/* binding */ cssEscape)
/* harmony export */ });
/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./string */ "./node_modules/bootstrap-vue/esm/utils/string.js");


var escapeChar = function escapeChar(value) {
  return '\\' + value;
}; // The `cssEscape()` util is based on this `CSS.escape()` polyfill:
// https://github.com/mathiasbynens/CSS.escape


var cssEscape = function cssEscape(value) {
  value = (0,_string__WEBPACK_IMPORTED_MODULE_0__.toString)(value);
  var length = value.length;
  var firstCharCode = value.charCodeAt(0);
  return value.split('').reduce(function (result, char, index) {
    var charCode = value.charCodeAt(index); // If the character is NULL (U+0000), use (U+FFFD) as replacement

    if (charCode === 0x0000) {
      return result + "\uFFFD";
    } // If the character ...


    if ( // ... is U+007F OR
    charCode === 0x007f || // ... is in the range [\1-\1F] (U+0001 to U+001F) OR ...
    charCode >= 0x0001 && charCode <= 0x001f || // ... is the first character and is in the range [0-9] (U+0030 to U+0039) OR ...
    index === 0 && charCode >= 0x0030 && charCode <= 0x0039 || // ... is the second character and is in the range [0-9] (U+0030 to U+0039)
    // and the first character is a `-` (U+002D) ...
    index === 1 && charCode >= 0x0030 && charCode <= 0x0039 && firstCharCode === 0x002d) {
      // ... https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
      return result + escapeChar("".concat(charCode.toString(16), " "));
    } // If the character ...


    if ( // ... is the first character AND ...
    index === 0 && // ... is a `-` (U+002D) AND ...
    charCode === 0x002d && // ... there is no second character ...
    length === 1) {
      // ... use the escaped character
      return result + escapeChar(char);
    } // If the character ...


    if ( // ... is greater than or equal to U+0080 OR ...
    charCode >= 0x0080 || // ... is `-` (U+002D) OR ...
    charCode === 0x002d || // ... is `_` (U+005F) OR ...
    charCode === 0x005f || // ... is in the range [0-9] (U+0030 to U+0039) OR ...
    charCode >= 0x0030 && charCode <= 0x0039 || // ... is in the range [A-Z] (U+0041 to U+005A) OR ...
    charCode >= 0x0041 && charCode <= 0x005a || // ... is in the range [a-z] (U+0061 to U+007A) ...
    charCode >= 0x0061 && charCode <= 0x007a) {
      // ... use the character itself
      return result + char;
    } // Otherwise use the escaped character
    // See: https://drafts.csswg.org/cssom/#escape-a-character


    return result + escapeChar(char);
  }, '');
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".auth-wrapper {\n  display: flex;\n  flex-basis: 100%;\n  min-height: 100vh;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n}\n.auth-wrapper .auth-inner {\n  width: 100%;\n  position: relative;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.auth-wrapper.auth-v1 .auth-inner:before {\n  width: 244px;\n  height: 243px;\n  content: \" \";\n  position: absolute;\n  top: -54px;\n  left: -46px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPQAAADzCAMAAACG9Mt0AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAA9KADAAQAAAABAAAA8wAAAADhQHfUAAAAyVBMVEUAAAD///+AgP+AgP9mZv+AgNWAgP9tbf9gYP+AgP9xcf9mZv+AZuaAgP9dXf90dOhiYv92dv9mZu5mZv93d+53d/9paf94afCAcfFrXvJra/9mZvJzZvJzc/JoaP96b/Rqav91aupsYvV2bOt2bPVxaPZ7cfZqavZyau1waPd4aO9xafBxafh4afB1bfh4avFuZ/F2afJzZvJzZ/N0aPN0bvN3bPR0ae5yZ/R3be93bfR1au9zafBxbPVzavV0a/F0a/ZyafFwaPKZm3nTAAAAQ3RSTlMAAQIEBQYGBwgICQoKCgsLDQ0PDw8PERESExMUFBQWFxgYGhoaGxsdHSAgIiIiIyQlJygqLCwtLi8vLzAzNDU3Nzg7h9vbHgAAA9RJREFUeNrt3ftS2kAUx/Fc1gSyWsErtuJdRDQiiteolb7/QzUoTm07k4AzObuu3/MCez45yWbzT36eZ6b8erO1e1B97baadd+zocJWmg0HaXe/+uqmg2GWtkLT5Lle1m9LdhG2+1lvzuiUO1knEF81yFc1N+35m15kZOGodz1vyLx+v2Lseq/erxtZd/NuweCTtfiwaWLOD5FnsqI7+VnP3y8afnEs3Es/1+H1qvETwuq18B7e6VlwLup1ZM8kWWQBOsrmHL7GVtxvYRZYgQ4ywae61ffsqH5Lbq20bQm6ncp9P2ehJegwE/u+rl95ttSwLrVSc2ANetAU28dSa9Cp2E623bUG3d2VWmn/wBq0XCugQYMGLdVKoOJaoiuok1NdXSW1WAUfRPtRUllflaJf5ZE/O9pXVbZUPTov5c+IDqvtRwStdTgLutoxy6GnGfYb2o+1I2gd+1OiqzfLocvVE7TSDqG1mgodaqfQZbvZC9rXjqG1X45WzqFVKVpk0LLo4lGP0ZGD6KgMnTiITkrQgXYQrYNitHISrYrRsZPouBhdcxJdK0YnTqKTYrR2Eq1BgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRoh9DH59ag86ACoSYOL61B55EUQk1s3VqDzsNHhJpYe7QGncfMSHUxaliCHgcKSXVxeWQJehwdJdXF4dAS9DgkTKqLxuibFeiXODixNi7OrEC/BP+JtbE0WrYA/RrxKNfH2YUF6NegSbk+Gk87xtErN6EsWm88fzeMXpwE9EruLns/l42io4dJFLPo2/Po1w+D6IW7t9Bt2SPx3vOOMfS7eHVZtN54ulg2go56138Ct4XRunE2Ovsmjg46WeddUoUWr6WL0fCoIYgO2/2s91fstDZQjcPL0ePt5flpdXUwqW46uMrS1j95JNpQrW0dHp9UV/uT2m416/8HVGg3qzhpBjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KBBgwYNGjRo0KC/FDpx0pwUo2tOomvF6NhJdFyMVk6iVTE6cBIdeF9vJyvZx/I/AzuIjsrQvoNovwzt4FamSs0Ojrp80PmvoB0zh940pb7azf1yg7t0LIt978uppzbnalfucDW92ZndLPRmKweGPduYJ+zoM5/Dk+gD5NdvLhXXPp88qcUqmEH5G5JZRs6cuxwIAAAAAElFTkSuQmCC\");\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:before {\n    display: none;\n}\n}\n.auth-wrapper.auth-v1 .auth-inner:after {\n  width: 272px;\n  height: 272px;\n  content: \" \";\n  position: absolute;\n  bottom: -55px;\n  right: -75px;\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAAEQCAMAAABP1NsnAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAABEKADAAQAAAABAAABEAAAAAAQWxS2AAAAwFBMVEUAAAD///+AgICAgP9VVaqqVf+qqv+AgL+AgP9mZsxmZv+ZZv+AgNWAgP9tbdttbf+Sbf+AYN+AgN+AgP9xceNmZv+AZuaAZv90dOh0dP9qav+AauqAav+AgP92dv9tbf+Abe2Abf93Zu53d+6AcO94afCAcfF5a+R5a/JzZuaAZvKAc/J5bed5bfOAaPN6b/R1auqAavR6ZvV6cPV2bOuAbPV7aPZ2be2AbfZ7au17avZ3Zu53b+57a+97a/d4aO9J6CoeAAAAQHRSTlMAAQICAwMDBAQFBQUGBgcHBwgICAkKCgoLCwwMDAwNDg4ODw8QERITExQUFBUVFhcYGBkZGhobHBwdHR4eHx8gJ5uMWwAAA/FJREFUeNrt2G1XEkEYxvHZNk2xHGzdbKFl0cTwgdSkCKzu7/+t4pw6sAjtjIueE/f8r3fMO35nZnbuy5gVGcvfzJe0rnTfGI+MggGJRUZnbpPIhJKt88nU53JnFULvyISY6KAv8vPj0vr2rYwiE2Z2B9J+uNYcyyQxwWZvaeGH3G4bMjsvI/kcwTC/V+7kLoahlITzQojP3ZFgsJCh7IJQzpX0QFj4uMiY18eDMZ9bZCF9OQahnK6cm/Y7js0sh/LF3Auv1PlQd3MxbdXYIQspV44EEEAAAWTNDAYYkKdJbNMsLzYueZbaZ2iM46RVbHBaiZ9Js+nHEdli42N9XuSen5hGp1CQTuOJQDRsD99N4gMSpYWapNH6IJo83CIeILZQFesEaber79NCWRoukOpNEnW0gXQqD81w6ACxhbrYde7VuFCYeA2QRCNIsgZISyNIqz6IyhPjOjNVIFYniK3dmKU6QdLaJUimEySrDZLrBMlrgxRKU7sxCw/EMe0CAggggADySJCqxixIkKpNEh6IozELD8RxjQACCCCAAPJIkKrGLEgQXqqAAEJjxrQLCCCAAEJjRmNGY8a0CwgggABCYwYIfQgggNCYMe0CAggggNCY0ZjRmDHtAgIIIIAAQmNGHwIIIDRmTLuAAAIIIDRmNGY0Zky7gAACCCCA0JjRhwACCI0Z0y4ggAACCI0ZjRmNGdMuIIAAAgggNGb0IYAAQmPGtAsIIIAAQmNGY0ZjxrQLCCCAAAIIjRl9CCCA0Jgx7QICCCCA0JjRmNGYMe0CAggggABCY0YfAgggNGZMu4AAAgggNGY0ZjRmTLuAAAIIIIDQmNGHAAIIjRnTLiCAAAIIjRmNGY0ZIEy7gAACCCA0ZvQhgABCY8a0CwgggABCY0ZjBgiNGdMuIIAAAgiN2f/Sh+Q6PfLaIJlOkKw2SKoTJK3dmFmdILb2tBvrBIlrg5iWRo+WqQ+SaARJ1gCJAzsxThCN16p1vNurGjNjoo42j07kAHFskoY2kEbl33U0ZgoPjXW+Rl0gkarnahqtDaJKxMPDDWIiNafGenh4gExvVhXfmk7Da6L1AVGxSby2h6MxK79Zk42ea1pJbJ48sU2zDezQ8iy1z6BBwoyjMQsvXp8YQAAhgADilRfyy+wf8WqZZUfGZihvgZiB3FybC+kCUU5XLkAo50C+gbBQdUzkAIVyejIAYfFTI1solHP2HgNCnHn5AYNy4jvpoVB6fVzL91cwzLJ9Lfd7S0jhehxO5H5/yePr1W6gHonI7fJ5ORSR/n6Q2yQanq763zuXU5LJZRKiyD/W9/pjkdPZz0/yJ8fqVyry+qQZDMjJKoDfy8bRVhHhQTwAAAAASUVORK5CYII=\");\n  z-index: -1;\n}\n@media (max-width: 575.98px) {\n.auth-wrapper.auth-v1 .auth-inner:after {\n    display: none;\n}\n}\n.auth-wrapper.auth-v2 {\n  align-items: flex-start;\n}\n.auth-wrapper.auth-v2 .auth-inner {\n  height: 100vh;\n  overflow-y: auto;\n  height: calc(var(--vh, 1vh) * 100);\n}\n.auth-wrapper.auth-v2 .brand-logo {\n  position: absolute;\n  top: 2rem;\n  left: 2rem;\n  margin: 0;\n  z-index: 1;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  max-width: 400px;\n}\n.auth-wrapper .brand-logo {\n  display: flex;\n  justify-content: center;\n  margin: 1rem 0 2rem 0;\n}\n.auth-wrapper .brand-logo .brand-text {\n  font-weight: 600;\n}\n.auth-wrapper .auth-footer-btn .btn {\n  padding: 0.6rem !important;\n}\n.auth-wrapper .auth-footer-btn .btn:not(:last-child) {\n  margin-right: 1rem;\n}\n@media (min-width: 1200px) {\n.auth-wrapper.auth-v2 .auth-card {\n    width: 400px;\n}\n}\n.auth-wrapper .auth-bg {\n  background-color: #fff;\n}\n.dark-layout .auth-wrapper .auth-bg {\n  background-color: #283046;\n}\n@media (max-height: 625px) {\n.dark-layout .auth-wrapper .auth-inner {\n    background-color: #283046;\n}\n.auth-wrapper .auth-bg {\n    padding-top: 3rem;\n}\n.auth-wrapper .auth-inner {\n    background-color: #fff;\n    padding-bottom: 1rem;\n}\n.auth-wrapper.auth-v2 .brand-logo {\n    width: 100%;\n    display: flex;\n    justify-content: unset;\n    position: relative;\n    left: 0;\n    padding-left: 1.5rem;\n}\n}\n.brand-logo svg {\n  height: 28px;\n  width: 40.95px;\n}\nhtml[dir=rtl] svg.feather {\n  transform: rotate(180deg);\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_23bc2aaa_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_23bc2aaa_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_23bc2aaa_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vee-validate/dist/rules.js":
/*!*************************************************!*\
  !*** ./node_modules/vee-validate/dist/rules.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alpha": () => (/* binding */ alpha),
/* harmony export */   "alpha_dash": () => (/* binding */ alpha_dash),
/* harmony export */   "alpha_num": () => (/* binding */ alpha_num),
/* harmony export */   "alpha_spaces": () => (/* binding */ alpha_spaces),
/* harmony export */   "between": () => (/* binding */ between),
/* harmony export */   "confirmed": () => (/* binding */ confirmed),
/* harmony export */   "digits": () => (/* binding */ digits),
/* harmony export */   "dimensions": () => (/* binding */ dimensions),
/* harmony export */   "double": () => (/* binding */ double),
/* harmony export */   "email": () => (/* binding */ email),
/* harmony export */   "excluded": () => (/* binding */ excluded),
/* harmony export */   "ext": () => (/* binding */ ext),
/* harmony export */   "image": () => (/* binding */ image),
/* harmony export */   "integer": () => (/* binding */ integer),
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "is_not": () => (/* binding */ is_not),
/* harmony export */   "length": () => (/* binding */ length),
/* harmony export */   "max": () => (/* binding */ max),
/* harmony export */   "max_value": () => (/* binding */ max_value),
/* harmony export */   "mimes": () => (/* binding */ mimes),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "min_value": () => (/* binding */ min_value),
/* harmony export */   "numeric": () => (/* binding */ numeric),
/* harmony export */   "oneOf": () => (/* binding */ oneOf),
/* harmony export */   "regex": () => (/* binding */ regex),
/* harmony export */   "required": () => (/* binding */ required),
/* harmony export */   "required_if": () => (/* binding */ required_if),
/* harmony export */   "size": () => (/* binding */ size)
/* harmony export */ });
/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */
/**
 * Some Alpha Regex helpers.
 * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
 */
/* eslint-disable no-misleading-character-class */
var alpha$1 = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[A-ZĂÂÎŞŢ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[Α-ώ]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
    he: /^[A-Z\u05D0-\u05EA']*$/i
};
var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    el: /^[Α-ώ\s]*$/i,
    ja: /^[A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\s]*$/i,
    he: /^[A-Z\u05D0-\u05EA'\s]*$/i
};
var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[0-9Α-ώ]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF]*$/i,
    he: /^[0-9A-Z\u05D0-\u05EA']*$/i
};
var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    el: /^[0-9Α-ώ_-]*$/i,
    ja: /^[0-9A-Z\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF_-]*$/i,
    he: /^[0-9A-Z\u05D0-\u05EA'_-]*$/i
};

var validate$r = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$r(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alpha$1).some(function (loc) { return alpha$1[loc].test(value); });
    }
    return (alpha$1[locale] || alpha$1.en).test(value);
};
var params$k = [
    {
        name: 'locale'
    }
];
var alpha = {
    validate: validate$r,
    params: params$k
};

var validate$q = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$q(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaDash).some(function (loc) { return alphaDash[loc].test(value); });
    }
    return (alphaDash[locale] || alphaDash.en).test(value);
};
var params$j = [
    {
        name: 'locale'
    }
];
var alpha_dash = {
    validate: validate$q,
    params: params$j
};

var validate$p = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$p(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphanumeric).some(function (loc) { return alphanumeric[loc].test(value); });
    }
    return (alphanumeric[locale] || alphanumeric.en).test(value);
};
var params$i = [
    {
        name: 'locale'
    }
];
var alpha_num = {
    validate: validate$p,
    params: params$i
};

var validate$o = function (value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale, locale = _b === void 0 ? '' : _b;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$o(val, { locale: locale }); });
    }
    // Match at least one locale.
    if (!locale) {
        return Object.keys(alphaSpaces).some(function (loc) { return alphaSpaces[loc].test(value); });
    }
    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
};
var params$h = [
    {
        name: 'locale'
    }
];
var alpha_spaces = {
    validate: validate$o,
    params: params$h
};

var validate$n = function (value, _a) {
    var _b = _a === void 0 ? {} : _a, min = _b.min, max = _b.max;
    if (Array.isArray(value)) {
        return value.every(function (val) { return !!validate$n(val, { min: min, max: max }); });
    }
    return Number(min) <= value && Number(max) >= value;
};
var params$g = [
    {
        name: 'min'
    },
    {
        name: 'max'
    }
];
var between = {
    validate: validate$n,
    params: params$g
};

var validate$m = function (value, _a) {
    var target = _a.target;
    return String(value) === String(target);
};
var params$f = [
    {
        name: 'target',
        isTarget: true
    }
];
var confirmed = {
    validate: validate$m,
    params: params$f
};

var validate$l = function (value, _a) {
    var length = _a.length;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$l(val, { length: length }); });
    }
    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === length;
};
var params$e = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var digits = {
    validate: validate$l,
    params: params$e
};

var validateImage = function (file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
        var image = new Image();
        image.onerror = function () { return resolve(false); };
        image.onload = function () { return resolve(image.width === width && image.height === height); };
        image.src = URL.createObjectURL(file);
    });
};
var validate$k = function (files, _a) {
    var width = _a.width, height = _a.height;
    var list = [];
    files = Array.isArray(files) ? files : [files];
    for (var i = 0; i < files.length; i++) {
        // if file is not an image, reject.
        if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
            return Promise.resolve(false);
        }
        list.push(files[i]);
    }
    return Promise.all(list.map(function (file) { return validateImage(file, width, height); })).then(function (values) {
        return values.every(function (v) { return v; });
    });
};
var params$d = [
    {
        name: 'width',
        cast: function (value) {
            return Number(value);
        }
    },
    {
        name: 'height',
        cast: function (value) {
            return Number(value);
        }
    }
];
var dimensions = {
    validate: validate$k,
    params: params$d
};

var validate$j = function (value, _a) {
    var multiple = (_a === void 0 ? {} : _a).multiple;
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (multiple && !Array.isArray(value)) {
        value = String(value)
            .split(',')
            .map(function (emailStr) { return emailStr.trim(); });
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return re.test(String(val)); });
    }
    return re.test(String(value));
};
var params$c = [
    {
        name: 'multiple',
        default: false
    }
];
var email = {
    validate: validate$j,
    params: params$c
};

function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isCallable(fn) {
    return typeof fn === 'function';
}

function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}

var validate$i = function (value, options) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$i(val, options); });
    }
    return toArray(options).some(function (item) {
        // eslint-disable-next-line
        return item == value;
    });
};
var oneOf = {
    validate: validate$i
};

var validate$h = function (value, args) {
    return !validate$i(value, args);
};
var excluded = {
    validate: validate$h
};

var validate$g = function (files, extensions) {
    var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var ext = {
    validate: validate$g
};

var validate$f = function (files) {
    var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.name); });
    }
    return regex.test(files.name);
};
var image = {
    validate: validate$f
};

var validate$e = function (value) {
    if (Array.isArray(value)) {
        return value.every(function (val) { return /^-?[0-9]+$/.test(String(val)); });
    }
    return /^-?[0-9]+$/.test(String(value));
};
var integer = {
    validate: validate$e
};

var validate$d = function (value, _a) {
    var other = _a.other;
    return value === other;
};
var params$b = [
    {
        name: 'other'
    }
];
var is = {
    validate: validate$d,
    params: params$b
};

var validate$c = function (value, _a) {
    var other = _a.other;
    return value !== other;
};
var params$a = [
    {
        name: 'other'
    }
];
var is_not = {
    validate: validate$c,
    params: params$a
};

var validate$b = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (typeof value === 'string') {
        value = toArray(value);
    }
    if (typeof value === 'number') {
        value = String(value);
    }
    if (!value.length) {
        value = toArray(value);
    }
    return value.length === length;
};
var params$9 = [
    {
        name: 'length',
        cast: function (value) { return Number(value); }
    }
];
var length = {
    validate: validate$b,
    params: params$9
};

var validate$a = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return length >= 0;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$a(val, { length: length }); });
    }
    return String(value).length <= length;
};
var params$8 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max = {
    validate: validate$a,
    params: params$8
};

var validate$9 = function (value, _a) {
    var max = _a.max;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$9(val, { max: max }); });
    }
    return Number(value) <= max;
};
var params$7 = [
    {
        name: 'max',
        cast: function (value) {
            return Number(value);
        }
    }
];
var max_value = {
    validate: validate$9,
    params: params$7
};

var validate$8 = function (files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');
    if (Array.isArray(files)) {
        return files.every(function (file) { return regex.test(file.type); });
    }
    return regex.test(files.type);
};
var mimes = {
    validate: validate$8
};

var validate$7 = function (value, _a) {
    var length = _a.length;
    if (isNullOrUndefined(value)) {
        return false;
    }
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$7(val, { length: length }); });
    }
    return String(value).length >= length;
};
var params$6 = [
    {
        name: 'length',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min = {
    validate: validate$7,
    params: params$6
};

var validate$6 = function (value, _a) {
    var min = _a.min;
    if (isNullOrUndefined(value) || value === '') {
        return false;
    }
    if (Array.isArray(value)) {
        return value.length > 0 && value.every(function (val) { return validate$6(val, { min: min }); });
    }
    return Number(value) >= min;
};
var params$5 = [
    {
        name: 'min',
        cast: function (value) {
            return Number(value);
        }
    }
];
var min_value = {
    validate: validate$6,
    params: params$5
};

var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
var en = /^[0-9]+$/;
var validate$5 = function (value) {
    var testValue = function (val) {
        var strValue = String(val);
        return en.test(strValue) || ar.test(strValue);
    };
    if (Array.isArray(value)) {
        return value.every(testValue);
    }
    return testValue(value);
};
var numeric = {
    validate: validate$5
};

var validate$4 = function (value, _a) {
    var regex = _a.regex;
    if (Array.isArray(value)) {
        return value.every(function (val) { return validate$4(val, { regex: regex }); });
    }
    return regex.test(String(value));
};
var params$4 = [
    {
        name: 'regex',
        cast: function (value) {
            if (typeof value === 'string') {
                return new RegExp(value);
            }
            return value;
        }
    }
];
var regex = {
    validate: validate$4,
    params: params$4
};

var validate$3 = function (value, _a) {
    var allowFalse = (_a === void 0 ? { allowFalse: true } : _a).allowFalse;
    var result = {
        valid: false,
        required: true
    };
    if (isNullOrUndefined(value) || isEmptyArray(value)) {
        return result;
    }
    // incase a field considers `false` as an empty value like checkboxes.
    if (value === false && !allowFalse) {
        return result;
    }
    result.valid = !!String(value).trim().length;
    return result;
};
var computesRequired$1 = true;
var params$3 = [
    {
        name: 'allowFalse',
        default: true
    }
];
var required = {
    validate: validate$3,
    params: params$3,
    computesRequired: computesRequired$1
};

var testEmpty = function (value) {
    return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
};
var validate$2 = function (value, _a) {
    var target = _a.target, values = _a.values;
    var required;
    if (values && values.length) {
        if (!Array.isArray(values) && typeof values === 'string') {
            values = [values];
        }
        // eslint-disable-next-line
        required = values.some(function (val) { return val == String(target).trim(); });
    }
    else {
        required = !testEmpty(target);
    }
    if (!required) {
        return {
            valid: true,
            required: required
        };
    }
    return {
        valid: !testEmpty(value),
        required: required
    };
};
var params$2 = [
    {
        name: 'target',
        isTarget: true
    },
    {
        name: 'values'
    }
];
var computesRequired = true;
var required_if = {
    validate: validate$2,
    params: params$2,
    computesRequired: computesRequired
};

var validate$1 = function (files, _a) {
    var size = _a.size;
    if (isNaN(size)) {
        return false;
    }
    var nSize = size * 1024;
    if (!Array.isArray(files)) {
        return files.size <= nSize;
    }
    for (var i = 0; i < files.length; i++) {
        if (files[i].size > nSize) {
            return false;
        }
    }
    return true;
};
var params$1 = [
    {
        name: 'size',
        cast: function (value) {
            return Number(value);
        }
    }
];
var size = {
    validate: validate$1,
    params: params$1
};

var validate = function (value, params) {
    var _a = params || {}, _b = _a.decimals, decimals = _b === void 0 ? 0 : _b, _c = _a.separator, separator = _c === void 0 ? 'dot' : _c;
    var delimiterRegexPart = separator === 'comma' ? ',?' : '\\.?';
    var decimalRegexPart = decimals === 0 ? '\\d*' : "(\\d{" + decimals + "})?";
    var regex = new RegExp("^-?\\d+" + delimiterRegexPart + decimalRegexPart + "$");
    return Array.isArray(value) ? value.every(function (val) { return regex.test(String(val)); }) : regex.test(String(value));
};
var params = [
    {
        name: 'decimals',
        default: 0
    },
    {
        name: 'separator',
        default: 'dot'
    }
];
var double = {
    validate: validate,
    params: params
};




/***/ }),

/***/ "./node_modules/vee-validate/dist/vee-validate.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/vee-validate/dist/vee-validate.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationObserver": () => (/* binding */ ValidationObserver),
/* harmony export */   "ValidationProvider": () => (/* binding */ ValidationProvider),
/* harmony export */   "configure": () => (/* binding */ configure),
/* harmony export */   "extend": () => (/* binding */ extend),
/* harmony export */   "localeChanged": () => (/* binding */ localeChanged),
/* harmony export */   "localize": () => (/* binding */ localize),
/* harmony export */   "normalizeRules": () => (/* binding */ normalizeRules),
/* harmony export */   "setInteractionMode": () => (/* binding */ setInteractionMode),
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "withValidation": () => (/* binding */ withValidation)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/**
  * vee-validate v3.4.14
  * (c) 2021 Abdelrahman Awad
  * @license MIT
  */


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function isNaN(value) {
    // NaN is the one value that does not equal itself.
    // eslint-disable-next-line
    return value !== value;
}
function isNullOrUndefined(value) {
    return value === null || value === undefined;
}
function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
}
var isObject = function (obj) {
    return obj !== null && obj && typeof obj === 'object' && !Array.isArray(obj);
};
/**
 * A reference comparison function with NaN support
 */
function isRefEqual(lhs, rhs) {
    if (isNaN(lhs) && isNaN(rhs)) {
        return true;
    }
    return lhs === rhs;
}
// Checks if a given value is not an empty string or null or undefined.
function isSpecified(val) {
    if (val === '') {
        return false;
    }
    return !isNullOrUndefined(val);
}
// eslint-disable-next-line @typescript-eslint/ban-types
function isCallable(fn) {
    return typeof fn === 'function';
}
function isLocator(value) {
    return isCallable(value) && !!value.__locatorRef;
}

function findIndex(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    if (isCallable(array.findIndex)) {
        return array.findIndex(predicate);
    }
    /* istanbul ignore next */
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i)) {
            return i;
        }
    }
    /* istanbul ignore next */
    return -1;
}
/**
 * finds the first element that satisfies the predicate callback, polyfills array.find
 */
function find(arrayLike, predicate) {
    var array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike);
    var idx = findIndex(array, predicate);
    return idx === -1 ? undefined : array[idx];
}
function includes(collection, item) {
    return collection.indexOf(item) !== -1;
}
/**
 * Converts an array-like object to array, provides a simple polyfill for Array.from
 */
function toArray(arrayLike) {
    if (isCallable(Array.from)) {
        return Array.from(arrayLike);
    }
    /* istanbul ignore next */
    return _copyArray(arrayLike);
}
/* istanbul ignore next */
function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;
    for (var i = 0; i < length; i++) {
        array.push(arrayLike[i]);
    }
    return array;
}
function values(obj) {
    if (isCallable(Object.values)) {
        return Object.values(obj);
    }
    // fallback to keys()
    /* istanbul ignore next */
    return Object.keys(obj).map(function (k) { return obj[k]; });
}
function merge(target, source) {
    Object.keys(source).forEach(function (key) {
        if (isObject(source[key])) {
            if (!target[key]) {
                target[key] = {};
            }
            merge(target[key], source[key]);
            return;
        }
        target[key] = source[key];
    });
    return target;
}

function createFlags() {
    return {
        untouched: true,
        touched: false,
        dirty: false,
        pristine: true,
        valid: false,
        invalid: false,
        validated: false,
        pending: false,
        required: false,
        changed: false,
        passed: false,
        failed: false
    };
}

function identity(x) {
    return x;
}
function debounce(fn, wait, token) {
    if (wait === void 0) { wait = 0; }
    if (token === void 0) { token = { cancelled: false }; }
    if (wait === 0) {
        return fn;
    }
    var timeout;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var later = function () {
            timeout = undefined;
            // check if the fn call was cancelled.
            if (!token.cancelled)
                fn.apply(void 0, args);
        };
        // because we might want to use Node.js setTimout for SSR.
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Emits a warning to the console
 */
function warn(message) {
    console.warn("[vee-validate] " + message);
}
/**
 * Replaces placeholder values in a string with their actual values
 */
function interpolate(template, values) {
    return template.replace(/{([^}]+)}/g, function (_, p) {
        return p in values ? values[p] : "{" + p + "}";
    });
}

var RULES = {};
function normalizeSchema(schema) {
    var _a;
    if ((_a = schema.params) === null || _a === void 0 ? void 0 : _a.length) {
        schema.params = schema.params.map(function (param) {
            if (typeof param === 'string') {
                return { name: param };
            }
            return param;
        });
    }
    return schema;
}
var RuleContainer = /** @class */ (function () {
    function RuleContainer() {
    }
    RuleContainer.extend = function (name, schema) {
        // if rule already exists, overwrite it.
        var rule = normalizeSchema(schema);
        if (RULES[name]) {
            RULES[name] = merge(RULES[name], schema);
            return;
        }
        RULES[name] = __assign({ lazy: false, computesRequired: false }, rule);
    };
    RuleContainer.isLazy = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.lazy);
    };
    RuleContainer.isRequireRule = function (name) {
        var _a;
        return !!((_a = RULES[name]) === null || _a === void 0 ? void 0 : _a.computesRequired);
    };
    RuleContainer.getRuleDefinition = function (ruleName) {
        return RULES[ruleName];
    };
    return RuleContainer;
}());
/**
 * Adds a custom validator to the list of validation rules.
 */
function extend(name, schema) {
    // makes sure new rules are properly formatted.
    guardExtend(name, schema);
    // Full schema object.
    if (typeof schema === 'object') {
        RuleContainer.extend(name, schema);
        return;
    }
    RuleContainer.extend(name, {
        validate: schema
    });
}
/**
 * Guards from extension violations.
 */
function guardExtend(name, validator) {
    if (isCallable(validator)) {
        return;
    }
    if (isCallable(validator.validate)) {
        return;
    }
    if (RuleContainer.getRuleDefinition(name)) {
        return;
    }
    throw new Error("Extension Error: The validator '" + name + "' must be a function or have a 'validate' method.");
}

var DEFAULT_CONFIG = {
    defaultMessage: "{_field_} is not valid.",
    skipOptional: true,
    classes: {
        touched: 'touched',
        untouched: 'untouched',
        valid: 'valid',
        invalid: 'invalid',
        pristine: 'pristine',
        dirty: 'dirty' // control has been interacted with
    },
    bails: true,
    mode: 'aggressive',
    useConstraintAttrs: true
};
var currentConfig = __assign({}, DEFAULT_CONFIG);
var getConfig = function () { return currentConfig; };
var setConfig = function (newConf) {
    currentConfig = __assign(__assign({}, currentConfig), newConf);
};
var configure = function (cfg) {
    setConfig(cfg);
};

/**
 * Normalizes the given rules expression.
 */
function normalizeRules(rules) {
    // if falsy value return an empty object.
    var acc = {};
    Object.defineProperty(acc, '_$$isNormalized', {
        value: true,
        writable: false,
        enumerable: false,
        configurable: false
    });
    if (!rules) {
        return acc;
    }
    // Object is already normalized, skip.
    if (isObject(rules) && rules._$$isNormalized) {
        return rules;
    }
    if (isObject(rules)) {
        return Object.keys(rules).reduce(function (prev, curr) {
            var params = [];
            if (rules[curr] === true) {
                params = [];
            }
            else if (Array.isArray(rules[curr])) {
                params = rules[curr];
            }
            else if (isObject(rules[curr])) {
                params = rules[curr];
            }
            else {
                params = [rules[curr]];
            }
            if (rules[curr] !== false) {
                prev[curr] = buildParams(curr, params);
            }
            return prev;
        }, acc);
    }
    /* istanbul ignore if */
    if (typeof rules !== 'string') {
        warn('rules must be either a string or an object.');
        return acc;
    }
    return rules.split('|').reduce(function (prev, rule) {
        var parsedRule = parseRule(rule);
        if (!parsedRule.name) {
            return prev;
        }
        prev[parsedRule.name] = buildParams(parsedRule.name, parsedRule.params);
        return prev;
    }, acc);
}
function buildParams(ruleName, provided) {
    var ruleSchema = RuleContainer.getRuleDefinition(ruleName);
    if (!ruleSchema) {
        return provided;
    }
    var params = {};
    if (!ruleSchema.params && !Array.isArray(provided)) {
        throw new Error('You provided an object params to a rule that has no defined schema.');
    }
    // Rule probably uses an array for their args, keep it as is.
    if (Array.isArray(provided) && !ruleSchema.params) {
        return provided;
    }
    var definedParams;
    // collect the params schema.
    if (!ruleSchema.params || (ruleSchema.params.length < provided.length && Array.isArray(provided))) {
        var lastDefinedParam_1;
        // collect any additional parameters in the last item.
        definedParams = provided.map(function (_, idx) {
            var _a;
            var param = (_a = ruleSchema.params) === null || _a === void 0 ? void 0 : _a[idx];
            lastDefinedParam_1 = param || lastDefinedParam_1;
            if (!param) {
                param = lastDefinedParam_1;
            }
            return param;
        });
    }
    else {
        definedParams = ruleSchema.params;
    }
    // Match the provided array length with a temporary schema.
    for (var i = 0; i < definedParams.length; i++) {
        var options = definedParams[i];
        var value = options.default;
        // if the provided is an array, map element value.
        if (Array.isArray(provided)) {
            if (i in provided) {
                value = provided[i];
            }
        }
        else {
            // If the param exists in the provided object.
            if (options.name in provided) {
                value = provided[options.name];
                // if the provided is the first param value.
            }
            else if (definedParams.length === 1) {
                value = provided;
            }
        }
        // if the param is a target, resolve the target value.
        if (options.isTarget) {
            value = createLocator(value, options.cast);
        }
        // A target param using interpolation
        if (typeof value === 'string' && value[0] === '@') {
            value = createLocator(value.slice(1), options.cast);
        }
        // If there is a transformer defined.
        if (!isLocator(value) && options.cast) {
            value = options.cast(value);
        }
        // already been set, probably multiple values.
        if (params[options.name]) {
            params[options.name] = Array.isArray(params[options.name]) ? params[options.name] : [params[options.name]];
            params[options.name].push(value);
        }
        else {
            // set the value.
            params[options.name] = value;
        }
    }
    return params;
}
/**
 * Parses a rule string expression.
 */
var parseRule = function (rule) {
    var params = [];
    var name = rule.split(':')[0];
    if (includes(rule, ':')) {
        params = rule
            .split(':')
            .slice(1)
            .join(':')
            .split(',');
    }
    return { name: name, params: params };
};
function createLocator(value, castFn) {
    var locator = function (crossTable) {
        var val = crossTable[value];
        return castFn ? castFn(val) : val;
    };
    locator.__locatorRef = value;
    return locator;
}
function extractLocators(params) {
    if (Array.isArray(params)) {
        return params.filter(function (param) {
            return isLocator(param) || (typeof param === 'string' && param[0] === '@');
        });
    }
    return Object.keys(params)
        .filter(function (key) { return isLocator(params[key]); })
        .map(function (key) { return params[key]; });
}

/**
 * Validates a value against the rules.
 */
function validate(value, rules, options) {
    if (options === void 0) { options = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var shouldBail, skipIfEmpty, field, result, errors, failedRules, regenerateMap;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    shouldBail = options === null || options === void 0 ? void 0 : options.bails;
                    skipIfEmpty = options === null || options === void 0 ? void 0 : options.skipIfEmpty;
                    field = {
                        name: (options === null || options === void 0 ? void 0 : options.name) || '{field}',
                        rules: normalizeRules(rules),
                        bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
                        skipIfEmpty: skipIfEmpty !== null && skipIfEmpty !== void 0 ? skipIfEmpty : true,
                        forceRequired: false,
                        crossTable: (options === null || options === void 0 ? void 0 : options.values) || {},
                        names: (options === null || options === void 0 ? void 0 : options.names) || {},
                        customMessages: (options === null || options === void 0 ? void 0 : options.customMessages) || {}
                    };
                    return [4 /*yield*/, _validate(field, value, options)];
                case 1:
                    result = _a.sent();
                    errors = [];
                    failedRules = {};
                    regenerateMap = {};
                    result.errors.forEach(function (e) {
                        var msg = e.msg();
                        errors.push(msg);
                        failedRules[e.rule] = msg;
                        regenerateMap[e.rule] = e.msg;
                    });
                    return [2 /*return*/, {
                            valid: result.valid,
                            required: result.required,
                            errors: errors,
                            failedRules: failedRules,
                            regenerateMap: regenerateMap
                        }];
            }
        });
    });
}
/**
 * Starts the validation process.
 */
function _validate(field, value, _a) {
    var _b = (_a === void 0 ? {} : _a).isInitial, isInitial = _b === void 0 ? false : _b;
    return __awaiter(this, void 0, void 0, function () {
        var _c, shouldSkip, required, errors, rules, length, i, rule, result;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, _shouldSkip(field, value)];
                case 1:
                    _c = _d.sent(), shouldSkip = _c.shouldSkip, required = _c.required, errors = _c.errors;
                    if (shouldSkip) {
                        return [2 /*return*/, {
                                valid: !errors.length,
                                required: required,
                                errors: errors
                            }];
                    }
                    rules = Object.keys(field.rules).filter(function (rule) { return !RuleContainer.isRequireRule(rule); });
                    length = rules.length;
                    i = 0;
                    _d.label = 2;
                case 2:
                    if (!(i < length)) return [3 /*break*/, 5];
                    if (isInitial && RuleContainer.isLazy(rules[i])) {
                        return [3 /*break*/, 4];
                    }
                    rule = rules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 3:
                    result = _d.sent();
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        if (field.bails) {
                            return [2 /*return*/, {
                                    valid: false,
                                    required: required,
                                    errors: errors
                                }];
                        }
                    }
                    _d.label = 4;
                case 4:
                    i++;
                    return [3 /*break*/, 2];
                case 5: return [2 /*return*/, {
                        valid: !errors.length,
                        required: required,
                        errors: errors
                    }];
            }
        });
    });
}
function _shouldSkip(field, value) {
    return __awaiter(this, void 0, void 0, function () {
        var requireRules, length, errors, isEmpty, isEmptyAndOptional, isRequired, i, rule, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    requireRules = Object.keys(field.rules).filter(RuleContainer.isRequireRule);
                    length = requireRules.length;
                    errors = [];
                    isEmpty = isNullOrUndefined(value) || value === '' || isEmptyArray(value);
                    isEmptyAndOptional = isEmpty && field.skipIfEmpty;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 4];
                    rule = requireRules[i];
                    return [4 /*yield*/, _test(field, value, {
                            name: rule,
                            params: field.rules[rule]
                        })];
                case 2:
                    result = _a.sent();
                    if (!isObject(result)) {
                        throw new Error('Require rules has to return an object (see docs)');
                    }
                    if (result.required !== undefined) {
                        isRequired = result.required;
                    }
                    if (!result.valid && result.error) {
                        errors.push(result.error);
                        // Exit early as the field is required and failed validation.
                        if (field.bails) {
                            return [2 /*return*/, {
                                    shouldSkip: true,
                                    required: result.required,
                                    errors: errors
                                }];
                        }
                    }
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4:
                    if (isEmpty && !isRequired && !field.skipIfEmpty) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                required: isRequired,
                                errors: errors
                            }];
                    }
                    // field is configured to run through the pipeline regardless
                    if (!field.bails && !isEmptyAndOptional) {
                        return [2 /*return*/, {
                                shouldSkip: false,
                                required: isRequired,
                                errors: errors
                            }];
                    }
                    // skip if the field is not required and has an empty value.
                    return [2 /*return*/, {
                            shouldSkip: !isRequired && isEmpty,
                            required: isRequired,
                            errors: errors
                        }];
            }
        });
    });
}
/**
 * Tests a single input value against a rule.
 */
function _test(field, value, rule) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleSchema, normalizedValue, params, result, values_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ruleSchema = RuleContainer.getRuleDefinition(rule.name);
                    if (!ruleSchema || !ruleSchema.validate) {
                        throw new Error("No such validator '" + rule.name + "' exists.");
                    }
                    normalizedValue = ruleSchema.castValue ? ruleSchema.castValue(value) : value;
                    params = fillTargetValues(rule.params, field.crossTable);
                    return [4 /*yield*/, ruleSchema.validate(normalizedValue, params)];
                case 1:
                    result = _a.sent();
                    if (typeof result === 'string') {
                        values_1 = __assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: rule.name });
                        return [2 /*return*/, {
                                valid: false,
                                error: { rule: rule.name, msg: function () { return interpolate(result, values_1); } }
                            }];
                    }
                    if (!isObject(result)) {
                        result = { valid: result };
                    }
                    return [2 /*return*/, {
                            valid: result.valid,
                            required: result.required,
                            error: result.valid ? undefined : _generateFieldError(field, value, ruleSchema, rule.name, params)
                        }];
            }
        });
    });
}
/**
 * Generates error messages.
 */
function _generateFieldError(field, value, ruleSchema, ruleName, params) {
    var _a;
    var message = (_a = field.customMessages[ruleName]) !== null && _a !== void 0 ? _a : ruleSchema.message;
    var ruleTargets = _getRuleTargets(field, ruleSchema, ruleName);
    var _b = _getUserTargets(field, ruleSchema, ruleName, message), userTargets = _b.userTargets, userMessage = _b.userMessage;
    var values = __assign(__assign(__assign(__assign({}, (params || {})), { _field_: field.name, _value_: value, _rule_: ruleName }), ruleTargets), userTargets);
    return {
        msg: function () { return _normalizeMessage(userMessage || getConfig().defaultMessage, field.name, values); },
        rule: ruleName
    };
}
function _getRuleTargets(field, ruleSchema, ruleName) {
    var params = ruleSchema.params;
    if (!params) {
        return {};
    }
    var numTargets = params.filter(function (param) { return param.isTarget; }).length;
    if (numTargets <= 0) {
        return {};
    }
    var names = {};
    var ruleConfig = field.rules[ruleName];
    if (!Array.isArray(ruleConfig) && isObject(ruleConfig)) {
        ruleConfig = params.map(function (param) {
            return ruleConfig[param.name];
        });
    }
    for (var index = 0; index < params.length; index++) {
        var param = params[index];
        var key = ruleConfig[index];
        if (!isLocator(key)) {
            continue;
        }
        key = key.__locatorRef;
        var name_1 = field.names[key] || key;
        names[param.name] = name_1;
        names["_" + param.name + "_"] = field.crossTable[key];
    }
    return names;
}
function _getUserTargets(field, ruleSchema, ruleName, userMessage) {
    var userTargets = {};
    var rules = field.rules[ruleName];
    var params = ruleSchema.params || [];
    // early return if no rules
    if (!rules) {
        return {};
    }
    // check all rules to convert targets
    Object.keys(rules).forEach(function (key, index) {
        // get the rule
        var rule = rules[key];
        if (!isLocator(rule)) {
            return {};
        }
        // get associated parameter
        var param = params[index];
        if (!param) {
            return {};
        }
        // grab the name of the target
        var name = rule.__locatorRef;
        userTargets[param.name] = field.names[name] || name;
        userTargets["_" + param.name + "_"] = field.crossTable[name];
    });
    return {
        userTargets: userTargets,
        userMessage: userMessage
    };
}
function _normalizeMessage(template, field, values) {
    if (typeof template === 'function') {
        return template(field, values);
    }
    return interpolate(template, __assign(__assign({}, values), { _field_: field }));
}
function fillTargetValues(params, crossTable) {
    if (Array.isArray(params)) {
        return params.map(function (param) {
            var targetPart = typeof param === 'string' && param[0] === '@' ? param.slice(1) : param;
            if (targetPart in crossTable) {
                return crossTable[targetPart];
            }
            return param;
        });
    }
    var values = {};
    var normalize = function (value) {
        if (isLocator(value)) {
            return value(crossTable);
        }
        return value;
    };
    Object.keys(params).forEach(function (param) {
        values[param] = normalize(params[param]);
    });
    return values;
}

var aggressive = function () { return ({
    on: ['input', 'blur']
}); };
var lazy = function () { return ({
    on: ['change', 'blur']
}); };
var eager = function (_a) {
    var errors = _a.errors;
    if (errors.length) {
        return {
            on: ['input', 'change']
        };
    }
    return {
        on: ['change', 'blur']
    };
};
var passive = function () { return ({
    on: []
}); };
var modes = {
    aggressive: aggressive,
    eager: eager,
    passive: passive,
    lazy: lazy
};
var setInteractionMode = function (mode, implementation) {
    setConfig({ mode: mode });
    if (!implementation) {
        return;
    }
    if (!isCallable(implementation)) {
        throw new Error('A mode implementation must be a function');
    }
    modes[mode] = implementation;
};

var EVENT_BUS = new vue__WEBPACK_IMPORTED_MODULE_0__["default"]();
function localeChanged() {
    EVENT_BUS.$emit('change:locale');
}

var Dictionary = /** @class */ (function () {
    function Dictionary(locale, dictionary) {
        this.container = {};
        this.locale = locale;
        this.merge(dictionary);
    }
    Dictionary.prototype.resolve = function (field, rule, values) {
        return this.format(this.locale, field, rule, values);
    };
    Dictionary.prototype.format = function (locale, field, rule, values) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message;
        // find if specific message for that field was specified.
        var fieldContainer = (_c = (_b = (_a = this.container[locale]) === null || _a === void 0 ? void 0 : _a.fields) === null || _b === void 0 ? void 0 : _b[field]) === null || _c === void 0 ? void 0 : _c[rule];
        var messageContainer = (_e = (_d = this.container[locale]) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[rule];
        message = fieldContainer || messageContainer || '';
        if (!message) {
            message = '{_field_} is not valid';
        }
        field = (_h = (_g = (_f = this.container[locale]) === null || _f === void 0 ? void 0 : _f.names) === null || _g === void 0 ? void 0 : _g[field]) !== null && _h !== void 0 ? _h : field;
        return isCallable(message) ? message(field, values) : interpolate(message, __assign(__assign({}, values), { _field_: field }));
    };
    Dictionary.prototype.merge = function (dictionary) {
        merge(this.container, dictionary);
    };
    Dictionary.prototype.hasRule = function (name) {
        var _a, _b;
        return !!((_b = (_a = this.container[this.locale]) === null || _a === void 0 ? void 0 : _a.messages) === null || _b === void 0 ? void 0 : _b[name]);
    };
    return Dictionary;
}());
var DICTIONARY;
function localize(locale, dictionary) {
    var _a;
    if (!DICTIONARY) {
        DICTIONARY = new Dictionary('en', {});
        setConfig({
            defaultMessage: function (field, values) {
                return DICTIONARY.resolve(field, values === null || values === void 0 ? void 0 : values._rule_, values || {});
            }
        });
    }
    if (typeof locale === 'string') {
        DICTIONARY.locale = locale;
        if (dictionary) {
            DICTIONARY.merge((_a = {}, _a[locale] = dictionary, _a));
        }
        localeChanged();
        return;
    }
    DICTIONARY.merge(locale);
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

var isEvent = function (evt) {
    if (!evt) {
        return false;
    }
    if (typeof Event !== 'undefined' && isCallable(Event) && evt instanceof Event) {
        return true;
    }
    // this is for IE
    /* istanbul ignore next */
    if (evt && evt.srcElement) {
        return true;
    }
    return false;
};
function normalizeEventValue(value) {
    var _a, _b;
    if (!isEvent(value)) {
        return value;
    }
    var input = value.target;
    if (input.type === 'file' && input.files) {
        return toArray(input.files);
    }
    // If the input has a `v-model.number` modifier applied.
    if ((_a = input._vModifiers) === null || _a === void 0 ? void 0 : _a.number) {
        // as per the spec the v-model.number uses parseFloat
        var valueAsNumber = parseFloat(input.value);
        if (isNaN(valueAsNumber)) {
            return input.value;
        }
        return valueAsNumber;
    }
    if ((_b = input._vModifiers) === null || _b === void 0 ? void 0 : _b.trim) {
        var trimmedValue = typeof input.value === 'string' ? input.value.trim() : input.value;
        return trimmedValue;
    }
    return input.value;
}

var isTextInput = function (vnode) {
    var _a;
    var attrs = ((_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs) || vnode.elm;
    // it will fallback to being a text input per browsers spec.
    if (vnode.tag === 'input' && (!attrs || !attrs.type)) {
        return true;
    }
    if (vnode.tag === 'textarea') {
        return true;
    }
    return includes(['text', 'password', 'search', 'email', 'tel', 'url', 'number'], attrs === null || attrs === void 0 ? void 0 : attrs.type);
};
// export const isCheckboxOrRadioInput = (vnode: VNode): boolean => {
//   const attrs = (vnode.data && vnode.data.attrs) || vnode.elm;
//   return includes(['radio', 'checkbox'], attrs && attrs.type);
// };
// Gets the model object on the vnode.
function findModel(vnode) {
    if (!vnode.data) {
        return undefined;
    }
    // Component Model
    // THIS IS NOT TYPED IN OFFICIAL VUE TYPINGS
    // eslint-disable-next-line
    var nonStandardVNodeData = vnode.data;
    if ('model' in nonStandardVNodeData) {
        return nonStandardVNodeData.model;
    }
    if (!vnode.data.directives) {
        return undefined;
    }
    return find(vnode.data.directives, function (d) { return d.name === 'model'; });
}
function findValue(vnode) {
    var _a, _b;
    var model = findModel(vnode);
    if (model) {
        return { value: model.value };
    }
    var config = findModelConfig(vnode);
    var prop = (config === null || config === void 0 ? void 0 : config.prop) || 'value';
    if (((_a = vnode.componentOptions) === null || _a === void 0 ? void 0 : _a.propsData) && prop in vnode.componentOptions.propsData) {
        var propsDataWithValue = vnode.componentOptions.propsData;
        return { value: propsDataWithValue[prop] };
    }
    if (((_b = vnode.data) === null || _b === void 0 ? void 0 : _b.domProps) && 'value' in vnode.data.domProps) {
        return { value: vnode.data.domProps.value };
    }
    return undefined;
}
function extractChildren(vnode) {
    if (Array.isArray(vnode)) {
        return vnode;
    }
    if (Array.isArray(vnode.children)) {
        return vnode.children;
    }
    /* istanbul ignore next */
    if (vnode.componentOptions && Array.isArray(vnode.componentOptions.children)) {
        return vnode.componentOptions.children;
    }
    return [];
}
function findInputNodes(vnode) {
    if (!Array.isArray(vnode) && findValue(vnode) !== undefined) {
        return [vnode];
    }
    var children = extractChildren(vnode);
    return children.reduce(function (nodes, node) {
        var candidates = findInputNodes(node);
        if (candidates.length) {
            nodes.push.apply(nodes, candidates);
        }
        return nodes;
    }, []);
}
// Resolves v-model config if exists.
function findModelConfig(vnode) {
    /* istanbul ignore next */
    if (!vnode.componentOptions)
        return null;
    // This is also not typed in the standard Vue TS.
    return vnode.componentOptions.Ctor.options.model;
}
// Adds a listener to vnode listener object.
function mergeVNodeListeners(obj, eventName, handler) {
    // no listener at all.
    if (isNullOrUndefined(obj[eventName])) {
        obj[eventName] = [handler];
        return;
    }
    // Is an invoker.
    if (isCallable(obj[eventName]) && obj[eventName].fns) {
        var invoker = obj[eventName];
        invoker.fns = Array.isArray(invoker.fns) ? invoker.fns : [invoker.fns];
        if (!includes(invoker.fns, handler)) {
            invoker.fns.push(handler);
        }
        return;
    }
    if (isCallable(obj[eventName])) {
        var prev = obj[eventName];
        obj[eventName] = [prev];
    }
    if (Array.isArray(obj[eventName]) && !includes(obj[eventName], handler)) {
        obj[eventName].push(handler);
    }
}
// Adds a listener to a native HTML vnode.
function addNativeNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.data) {
        node.data = {};
    }
    if (isNullOrUndefined(node.data.on)) {
        node.data.on = {};
    }
    mergeVNodeListeners(node.data.on, eventName, handler);
}
// Adds a listener to a Vue component vnode.
function addComponentNodeListener(node, eventName, handler) {
    /* istanbul ignore next */
    if (!node.componentOptions) {
        return;
    }
    /* istanbul ignore next */
    if (!node.componentOptions.listeners) {
        node.componentOptions.listeners = {};
    }
    mergeVNodeListeners(node.componentOptions.listeners, eventName, handler);
}
function addVNodeListener(vnode, eventName, handler) {
    if (vnode.componentOptions) {
        addComponentNodeListener(vnode, eventName, handler);
        return;
    }
    addNativeNodeListener(vnode, eventName, handler);
}
// Determines if `change` should be used over `input` for listeners.
function getInputEventName(vnode, model) {
    var _a;
    // Is a component.
    if (vnode.componentOptions) {
        var event_1 = (findModelConfig(vnode) || { event: 'input' }).event;
        return event_1;
    }
    // Lazy Models typically use change event
    if ((_a = model === null || model === void 0 ? void 0 : model.modifiers) === null || _a === void 0 ? void 0 : _a.lazy) {
        return 'change';
    }
    // is a textual-type input.
    if (isTextInput(vnode)) {
        return 'input';
    }
    return 'change';
}
function isHTMLNode(node) {
    return includes(['input', 'select', 'textarea'], node.tag);
}
// TODO: Type this one properly.
function normalizeSlots(slots, ctx) {
    var acc = [];
    return Object.keys(slots).reduce(function (arr, key) {
        slots[key].forEach(function (vnode) {
            if (!vnode.context) {
                slots[key].context = ctx;
                if (!vnode.data) {
                    vnode.data = {};
                }
                vnode.data.slot = key;
            }
        });
        return arr.concat(slots[key]);
    }, acc);
}
function resolveTextualRules(vnode) {
    var _a;
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    var rules = {};
    if (!attrs)
        return rules;
    if (attrs.type === 'email' && RuleContainer.getRuleDefinition('email')) {
        rules.email = ['multiple' in attrs];
    }
    if (attrs.pattern && RuleContainer.getRuleDefinition('regex')) {
        rules.regex = attrs.pattern;
    }
    if (attrs.maxlength >= 0 && RuleContainer.getRuleDefinition('max')) {
        rules.max = attrs.maxlength;
    }
    if (attrs.minlength >= 0 && RuleContainer.getRuleDefinition('min')) {
        rules.min = attrs.minlength;
    }
    if (attrs.type === 'number') {
        if (isSpecified(attrs.min) && RuleContainer.getRuleDefinition('min_value')) {
            rules.min_value = Number(attrs.min);
        }
        if (isSpecified(attrs.max) && RuleContainer.getRuleDefinition('max_value')) {
            rules.max_value = Number(attrs.max);
        }
    }
    return rules;
}
function resolveRules(vnode) {
    var _a;
    var htmlTags = ['input', 'select', 'textarea'];
    var attrs = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.attrs;
    if (!includes(htmlTags, vnode.tag) || !attrs) {
        return {};
    }
    var rules = {};
    if ('required' in attrs && attrs.required !== false && RuleContainer.getRuleDefinition('required')) {
        rules.required = attrs.type === 'checkbox' ? [true] : true;
    }
    if (isTextInput(vnode)) {
        return normalizeRules(__assign(__assign({}, rules), resolveTextualRules(vnode)));
    }
    return normalizeRules(rules);
}
function normalizeChildren(context, slotProps) {
    if (context.$scopedSlots.default) {
        return context.$scopedSlots.default(slotProps) || [];
    }
    return context.$slots.default || [];
}

/**
 * Determines if a provider needs to run validation.
 */
function shouldValidate(ctx, value) {
    // when an immediate/initial validation is needed and wasn't done before.
    if (!ctx._ignoreImmediate && ctx.immediate) {
        return true;
    }
    // when the value changes for whatever reason.
    if (!isRefEqual(ctx.value, value) && ctx.normalizedEvents.length) {
        return true;
    }
    // when it needs validation due to props/cross-fields changes.
    if (ctx._needsValidation) {
        return true;
    }
    // when the initial value is undefined and the field wasn't rendered yet.
    if (!ctx.initialized && value === undefined) {
        return true;
    }
    return false;
}
function createValidationCtx(ctx) {
    return __assign(__assign({}, ctx.flags), { errors: ctx.errors, classes: ctx.classes, failedRules: ctx.failedRules, reset: function () { return ctx.reset(); }, validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return ctx.validate.apply(ctx, args);
        }, ariaInput: {
            'aria-invalid': ctx.flags.invalid ? 'true' : 'false',
            'aria-required': ctx.isRequired ? 'true' : 'false',
            'aria-errormessage': "vee_" + ctx.id
        }, ariaMsg: {
            id: "vee_" + ctx.id,
            'aria-live': ctx.errors.length ? 'assertive' : 'off'
        } });
}
function onRenderUpdate(vm, value) {
    if (!vm.initialized) {
        vm.initialValue = value;
    }
    var validateNow = shouldValidate(vm, value);
    vm._needsValidation = false;
    vm.value = value;
    vm._ignoreImmediate = true;
    if (!validateNow) {
        return;
    }
    var validate = function () {
        if (vm.immediate || vm.flags.validated) {
            return triggerThreadSafeValidation(vm);
        }
        vm.validateSilent();
    };
    if (vm.initialized) {
        validate();
        return;
    }
    vm.$once('hook:mounted', function () { return validate(); });
}
function computeModeSetting(ctx) {
    var compute = (isCallable(ctx.mode) ? ctx.mode : modes[ctx.mode]);
    return compute(ctx);
}
function triggerThreadSafeValidation(vm) {
    var pendingPromise = vm.validateSilent();
    // avoids race conditions between successive validations.
    vm._pendingValidation = pendingPromise;
    return pendingPromise.then(function (result) {
        if (pendingPromise === vm._pendingValidation) {
            vm.applyResult(result);
            vm._pendingValidation = undefined;
        }
        return result;
    });
}
// Creates the common handlers for a validatable context.
function createCommonHandlers(vm) {
    if (!vm.$veeOnInput) {
        vm.$veeOnInput = function (e) {
            vm.syncValue(e); // track and keep the value updated.
            vm.setFlags({ dirty: true, pristine: false });
        };
    }
    var onInput = vm.$veeOnInput;
    if (!vm.$veeOnBlur) {
        vm.$veeOnBlur = function () {
            vm.setFlags({ touched: true, untouched: false });
        };
    }
    // Blur event listener.
    var onBlur = vm.$veeOnBlur;
    var onValidate = vm.$veeHandler;
    var mode = computeModeSetting(vm);
    // Handle debounce changes.
    if (!onValidate || vm.$veeDebounce !== vm.debounce) {
        onValidate = debounce(function () {
            vm.$nextTick(function () {
                if (!vm._pendingReset) {
                    triggerThreadSafeValidation(vm);
                }
                vm._pendingReset = false;
            });
        }, mode.debounce || vm.debounce);
        // Cache the handler so we don't create it each time.
        vm.$veeHandler = onValidate;
        // cache the debounce value so we detect if it was changed.
        vm.$veeDebounce = vm.debounce;
    }
    return { onInput: onInput, onBlur: onBlur, onValidate: onValidate };
}
// Adds all plugin listeners to the vnode.
function addListeners(vm, node) {
    var value = findValue(node);
    // cache the input eventName.
    vm._inputEventName = vm._inputEventName || getInputEventName(node, findModel(node));
    onRenderUpdate(vm, value === null || value === void 0 ? void 0 : value.value);
    var _a = createCommonHandlers(vm), onInput = _a.onInput, onBlur = _a.onBlur, onValidate = _a.onValidate;
    addVNodeListener(node, vm._inputEventName, onInput);
    addVNodeListener(node, 'blur', onBlur);
    // add the validation listeners.
    vm.normalizedEvents.forEach(function (evt) {
        addVNodeListener(node, evt, onValidate);
    });
    vm.initialized = true;
}

var PROVIDER_COUNTER = 0;
function data$1() {
    var errors = [];
    var fieldName = '';
    var defaultValues = {
        errors: errors,
        value: undefined,
        initialized: false,
        initialValue: undefined,
        flags: createFlags(),
        failedRules: {},
        isActive: true,
        fieldName: fieldName,
        id: ''
    };
    return defaultValues;
}
var ValidationProvider = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: 'ValidationProvider',
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    this.$vnode.context.$_veeObserver = createObserver();
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        vid: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: null
        },
        mode: {
            type: [String, Function],
            default: function () {
                return getConfig().mode;
            }
        },
        rules: {
            type: [Object, String],
            default: null
        },
        immediate: {
            type: Boolean,
            default: false
        },
        bails: {
            type: Boolean,
            default: function () { return getConfig().bails; }
        },
        skipIfEmpty: {
            type: Boolean,
            default: function () { return getConfig().skipOptional; }
        },
        debounce: {
            type: Number,
            default: 0
        },
        tag: {
            type: String,
            default: 'span'
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        customMessages: {
            type: Object,
            default: function () {
                return {};
            }
        },
        detectInput: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        rules: {
            deep: true,
            handler: function (val, oldVal) {
                this._needsValidation = !fastDeepEqual(val, oldVal);
            }
        }
    },
    data: data$1,
    computed: {
        fieldDeps: function () {
            var _this = this;
            return Object.keys(this.normalizedRules).reduce(function (acc, rule) {
                var deps = extractLocators(_this.normalizedRules[rule]).map(function (dep) {
                    return isLocator(dep) ? dep.__locatorRef : dep.slice(1);
                });
                acc.push.apply(acc, deps);
                deps.forEach(function (depName) {
                    watchCrossFieldDep(_this, depName);
                });
                return acc;
            }, []);
        },
        normalizedEvents: function () {
            var _this = this;
            var on = computeModeSetting(this).on;
            return (on || []).map(function (e) {
                if (e === 'input') {
                    return _this._inputEventName;
                }
                return e;
            });
        },
        isRequired: function () {
            var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
            var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
            this.flags.required = !!isRequired;
            return isRequired;
        },
        classes: function () {
            var names = getConfig().classes;
            return computeClassObj(names, this.flags);
        },
        normalizedRules: function () {
            return normalizeRules(this.rules);
        }
    },
    mounted: function () {
        var _this = this;
        var onLocaleChanged = function () {
            if (!_this.flags.validated) {
                return;
            }
            var regenerateMap = _this._regenerateMap;
            if (regenerateMap) {
                var errors_1 = [];
                var failedRules_1 = {};
                Object.keys(regenerateMap).forEach(function (rule) {
                    var msg = regenerateMap[rule]();
                    errors_1.push(msg);
                    failedRules_1[rule] = msg;
                });
                _this.applyResult({ errors: errors_1, failedRules: failedRules_1, regenerateMap: regenerateMap });
                return;
            }
            _this.validate();
        };
        EVENT_BUS.$on('change:locale', onLocaleChanged);
        this.$on('hook:beforeDestroy', function () {
            EVENT_BUS.$off('change:locale', onLocaleChanged);
        });
    },
    render: function (h) {
        var _this = this;
        this.registerField();
        var ctx = createValidationCtx(this);
        var children = normalizeChildren(this, ctx);
        // Automatic v-model detection
        if (this.detectInput) {
            var inputs = findInputNodes(children);
            if (inputs.length) {
                inputs.forEach(function (input, idx) {
                    var _a, _b, _c, _d, _e, _f;
                    // If the elements are not checkboxes and there are more input nodes
                    if (!includes(['checkbox', 'radio'], (_b = (_a = input.data) === null || _a === void 0 ? void 0 : _a.attrs) === null || _b === void 0 ? void 0 : _b.type) && idx > 0) {
                        return;
                    }
                    var resolved = getConfig().useConstraintAttrs ? resolveRules(input) : {};
                    if (!fastDeepEqual(_this._resolvedRules, resolved)) {
                        _this._needsValidation = true;
                    }
                    if (isHTMLNode(input)) {
                        _this.fieldName = ((_d = (_c = input.data) === null || _c === void 0 ? void 0 : _c.attrs) === null || _d === void 0 ? void 0 : _d.name) || ((_f = (_e = input.data) === null || _e === void 0 ? void 0 : _e.attrs) === null || _f === void 0 ? void 0 : _f.id);
                    }
                    _this._resolvedRules = resolved;
                    addListeners(_this, input);
                });
            }
        }
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, children);
    },
    beforeDestroy: function () {
        // cleanup reference.
        this.$_veeObserver.unobserve(this.id);
    },
    activated: function () {
        this.isActive = true;
    },
    deactivated: function () {
        this.isActive = false;
    },
    methods: {
        setFlags: function (flags) {
            var _this = this;
            Object.keys(flags).forEach(function (flag) {
                _this.flags[flag] = flags[flag];
            });
        },
        syncValue: function (v) {
            var value = normalizeEventValue(v);
            this.value = value;
            this.flags.changed = !fastDeepEqual(this.initialValue, value);
        },
        reset: function () {
            var _this = this;
            this.errors = [];
            this.initialValue = this.value;
            var flags = createFlags();
            flags.required = this.isRequired;
            this.setFlags(flags);
            this.failedRules = {};
            this.validateSilent();
            this._pendingValidation = undefined;
            this._pendingReset = true;
            setTimeout(function () {
                _this._pendingReset = false;
            }, this.debounce);
        },
        validate: function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (args.length > 0) {
                        this.syncValue(args[0]);
                    }
                    return [2 /*return*/, triggerThreadSafeValidation(this)];
                });
            });
        },
        validateSilent: function () {
            return __awaiter(this, void 0, void 0, function () {
                var rules, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.setFlags({ pending: true });
                            rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
                            Object.defineProperty(rules, '_$$isNormalized', {
                                value: true,
                                writable: false,
                                enumerable: false,
                                configurable: false
                            });
                            return [4 /*yield*/, validate(this.value, rules, __assign(__assign({ name: this.name || this.fieldName }, createLookup(this)), { bails: this.bails, skipIfEmpty: this.skipIfEmpty, isInitial: !this.initialized, customMessages: this.customMessages }))];
                        case 1:
                            result = _a.sent();
                            this.setFlags({
                                pending: false,
                                valid: result.valid,
                                invalid: !result.valid
                            });
                            if (result.required !== undefined) {
                                this.setFlags({
                                    required: result.required
                                });
                            }
                            return [2 /*return*/, result];
                    }
                });
            });
        },
        setErrors: function (errors) {
            this.applyResult({ errors: errors, failedRules: {} });
        },
        applyResult: function (_a) {
            var errors = _a.errors, failedRules = _a.failedRules, regenerateMap = _a.regenerateMap;
            this.errors = errors;
            this._regenerateMap = regenerateMap;
            this.failedRules = __assign({}, (failedRules || {}));
            this.setFlags({
                valid: !errors.length,
                passed: !errors.length,
                invalid: !!errors.length,
                failed: !!errors.length,
                validated: true,
                changed: !fastDeepEqual(this.value, this.initialValue)
            });
        },
        registerField: function () {
            updateRenderingContextRefs(this);
        },
        checkComputesRequiredState: function () {
            var rules = __assign(__assign({}, this._resolvedRules), this.normalizedRules);
            var isRequired = Object.keys(rules).some(RuleContainer.isRequireRule);
            return isRequired;
        }
    }
});
function computeClassObj(names, flags) {
    var acc = {};
    var keys = Object.keys(flags);
    var length = keys.length;
    var _loop_1 = function (i) {
        var flag = keys[i];
        var className = (names && names[flag]) || flag;
        var value = flags[flag];
        if (isNullOrUndefined(value)) {
            return "continue";
        }
        if ((flag === 'valid' || flag === 'invalid') && !flags.validated) {
            return "continue";
        }
        if (typeof className === 'string') {
            acc[className] = value;
        }
        else if (Array.isArray(className)) {
            className.forEach(function (cls) {
                acc[cls] = value;
            });
        }
    };
    for (var i = 0; i < length; i++) {
        _loop_1(i);
    }
    return acc;
}
function createLookup(vm) {
    var providers = vm.$_veeObserver.refs;
    var reduced = {
        names: {},
        values: {}
    };
    return vm.fieldDeps.reduce(function (acc, depName) {
        if (!providers[depName]) {
            return acc;
        }
        acc.values[depName] = providers[depName].value;
        acc.names[depName] = providers[depName].name;
        return acc;
    }, reduced);
}
function extractId(vm) {
    if (vm.vid) {
        return vm.vid;
    }
    if (vm.name) {
        return vm.name;
    }
    if (vm.id) {
        return vm.id;
    }
    if (vm.fieldName) {
        return vm.fieldName;
    }
    PROVIDER_COUNTER++;
    return "_vee_" + PROVIDER_COUNTER;
}
function updateRenderingContextRefs(vm) {
    var providedId = extractId(vm);
    var id = vm.id;
    // Nothing has changed.
    if (!vm.isActive || (id === providedId && vm.$_veeObserver.refs[id])) {
        return;
    }
    // vid was changed.
    if (id !== providedId && vm.$_veeObserver.refs[id] === vm) {
        vm.$_veeObserver.unobserve(id);
    }
    vm.id = providedId;
    vm.$_veeObserver.observe(vm);
}
function createObserver() {
    return {
        refs: {},
        observe: function (vm) {
            this.refs[vm.id] = vm;
        },
        unobserve: function (id) {
            delete this.refs[id];
        }
    };
}
function watchCrossFieldDep(ctx, depName, withHooks) {
    if (withHooks === void 0) { withHooks = true; }
    var providers = ctx.$_veeObserver.refs;
    if (!ctx._veeWatchers) {
        ctx._veeWatchers = {};
    }
    if (!providers[depName] && withHooks) {
        return ctx.$once('hook:mounted', function () {
            watchCrossFieldDep(ctx, depName, false);
        });
    }
    if (!isCallable(ctx._veeWatchers[depName]) && providers[depName]) {
        ctx._veeWatchers[depName] = providers[depName].$watch('value', function () {
            var isComputesRequired = ctx.checkComputesRequiredState();
            if (ctx.flags.validated) {
                ctx._needsValidation = true;
                ctx.validate();
            }
            // Validate dependent field silently if it has rules with computesRequired
            if (isComputesRequired && !ctx.flags.validated) {
                ctx.validateSilent();
            }
        });
    }
}

var FLAGS_STRATEGIES = [
    ['pristine', 'every'],
    ['dirty', 'some'],
    ['touched', 'some'],
    ['untouched', 'every'],
    ['valid', 'every'],
    ['invalid', 'some'],
    ['pending', 'some'],
    ['validated', 'every'],
    ['changed', 'some'],
    ['passed', 'every'],
    ['failed', 'some']
];
var OBSERVER_COUNTER = 0;
function data() {
    var refs = {};
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    // FIXME: Not sure of this one can be typed, circular type reference.
    var observers = [];
    return {
        id: '',
        refs: refs,
        observers: observers,
        errors: errors,
        flags: flags,
        fields: fields
    };
}
function provideSelf() {
    return {
        $_veeObserver: this
    };
}
var ValidationObserver = vue__WEBPACK_IMPORTED_MODULE_0__["default"].extend({
    name: 'ValidationObserver',
    provide: provideSelf,
    inject: {
        $_veeObserver: {
            from: '$_veeObserver',
            default: function () {
                if (!this.$vnode.context.$_veeObserver) {
                    return null;
                }
                return this.$vnode.context.$_veeObserver;
            }
        }
    },
    props: {
        tag: {
            type: String,
            default: 'span'
        },
        vid: {
            type: String,
            default: function () {
                return "obs_" + OBSERVER_COUNTER++;
            }
        },
        slim: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data: data,
    created: function () {
        var _this = this;
        this.id = this.vid;
        register(this);
        var onChange = debounce(function (_a) {
            var errors = _a.errors, flags = _a.flags, fields = _a.fields;
            _this.errors = errors;
            _this.flags = flags;
            _this.fields = fields;
        }, 16);
        this.$watch(computeObserverState, onChange);
    },
    activated: function () {
        register(this);
    },
    deactivated: function () {
        unregister(this);
    },
    beforeDestroy: function () {
        unregister(this);
    },
    render: function (h) {
        var children = normalizeChildren(this, prepareSlotProps(this));
        return this.slim && children.length <= 1 ? children[0] : h(this.tag, { on: this.$listeners }, children);
    },
    methods: {
        observe: function (subscriber, kind) {
            var _a;
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'observer') {
                this.observers.push(subscriber);
                return;
            }
            this.refs = __assign(__assign({}, this.refs), (_a = {}, _a[subscriber.id] = subscriber, _a));
        },
        unobserve: function (id, kind) {
            if (kind === void 0) { kind = 'provider'; }
            if (kind === 'provider') {
                var provider = this.refs[id];
                if (!provider) {
                    return;
                }
                this.$delete(this.refs, id);
                return;
            }
            var idx = findIndex(this.observers, function (o) { return o.id === id; });
            if (idx !== -1) {
                this.observers.splice(idx, 1);
            }
        },
        validateWithInfo: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var results, isValid, _c, errors, flags, fields;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, Promise.all(__spreadArrays(values(this.refs)
                                .filter(function (r) { return !r.disabled; })
                                .map(function (ref) { return ref[silent ? 'validateSilent' : 'validate']().then(function (r) { return r.valid; }); }), this.observers.filter(function (o) { return !o.disabled; }).map(function (obs) { return obs.validate({ silent: silent }); })))];
                        case 1:
                            results = _d.sent();
                            isValid = results.every(function (r) { return r; });
                            _c = computeObserverState.call(this), errors = _c.errors, flags = _c.flags, fields = _c.fields;
                            this.errors = errors;
                            this.flags = flags;
                            this.fields = fields;
                            return [2 /*return*/, {
                                    errors: errors,
                                    flags: flags,
                                    fields: fields,
                                    isValid: isValid
                                }];
                    }
                });
            });
        },
        validate: function (_a) {
            var _b = (_a === void 0 ? {} : _a).silent, silent = _b === void 0 ? false : _b;
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, this.validateWithInfo({ silent: silent })];
                        case 1:
                            isValid = (_c.sent()).isValid;
                            return [2 /*return*/, isValid];
                    }
                });
            });
        },
        handleSubmit: function (cb) {
            return __awaiter(this, void 0, void 0, function () {
                var isValid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validate()];
                        case 1:
                            isValid = _a.sent();
                            if (!isValid || !cb) {
                                return [2 /*return*/];
                            }
                            return [2 /*return*/, cb()];
                    }
                });
            });
        },
        reset: function () {
            return __spreadArrays(values(this.refs), this.observers).forEach(function (ref) { return ref.reset(); });
        },
        setErrors: function (errors) {
            var _this = this;
            Object.keys(errors).forEach(function (key) {
                var provider = _this.refs[key];
                if (!provider)
                    return;
                var errorArr = errors[key] || [];
                errorArr = typeof errorArr === 'string' ? [errorArr] : errorArr;
                provider.setErrors(errorArr);
            });
            this.observers.forEach(function (observer) {
                observer.setErrors(errors);
            });
        }
    }
});
function unregister(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.unobserve(vm.id, 'observer');
    }
}
function register(vm) {
    if (vm.$_veeObserver) {
        vm.$_veeObserver.observe(vm, 'observer');
    }
}
function prepareSlotProps(vm) {
    return __assign(__assign({}, vm.flags), { errors: vm.errors, fields: vm.fields, validate: vm.validate, validateWithInfo: vm.validateWithInfo, passes: vm.handleSubmit, handleSubmit: vm.handleSubmit, reset: vm.reset });
}
// Creates a modified version of validation flags
function createObserverFlags() {
    return __assign(__assign({}, createFlags()), { valid: true, invalid: false });
}
function computeObserverState() {
    var vms = __spreadArrays(values(this.refs), this.observers.filter(function (o) { return !o.disabled; }));
    var errors = {};
    var flags = createObserverFlags();
    var fields = {};
    var length = vms.length;
    for (var i = 0; i < length; i++) {
        var vm = vms[i];
        // validation provider
        if (Array.isArray(vm.errors)) {
            errors[vm.id] = vm.errors;
            fields[vm.id] = __assign({ id: vm.id, name: vm.name, failedRules: vm.failedRules }, vm.flags);
            continue;
        }
        // Nested observer, merge errors and fields
        errors = __assign(__assign({}, errors), vm.errors);
        fields = __assign(__assign({}, fields), vm.fields);
    }
    FLAGS_STRATEGIES.forEach(function (_a) {
        var flag = _a[0], method = _a[1];
        flags[flag] = vms[method](function (vm) { return vm.flags[flag]; });
    });
    return { errors: errors, flags: flags, fields: fields };
}

function withValidation(component, mapProps) {
    var _a;
    if (mapProps === void 0) { mapProps = identity; }
    var options = 'options' in component ? component.options : component;
    var providerOpts = ValidationProvider.options;
    var hoc = {
        name: (options.name || 'AnonymousHoc') + "WithValidation",
        props: __assign({}, providerOpts.props),
        data: providerOpts.data,
        computed: __assign({}, providerOpts.computed),
        methods: __assign({}, providerOpts.methods),
        beforeDestroy: providerOpts.beforeDestroy,
        inject: providerOpts.inject
    };
    var eventName = ((_a = options === null || options === void 0 ? void 0 : options.model) === null || _a === void 0 ? void 0 : _a.event) || 'input';
    hoc.render = function (h) {
        var _a;
        this.registerField();
        var vctx = createValidationCtx(this);
        var listeners = __assign({}, this.$listeners);
        var model = findModel(this.$vnode);
        this._inputEventName = this._inputEventName || getInputEventName(this.$vnode, model);
        var value = findValue(this.$vnode);
        onRenderUpdate(this, value === null || value === void 0 ? void 0 : value.value);
        var _b = createCommonHandlers(this), onInput = _b.onInput, onBlur = _b.onBlur, onValidate = _b.onValidate;
        mergeVNodeListeners(listeners, eventName, onInput);
        mergeVNodeListeners(listeners, 'blur', onBlur);
        this.normalizedEvents.forEach(function (evt) {
            mergeVNodeListeners(listeners, evt, onValidate);
        });
        // Props are any attrs not associated with ValidationProvider Plus the model prop.
        // WARNING: Accidental prop overwrite will probably happen.
        var prop = (findModelConfig(this.$vnode) || { prop: 'value' }).prop;
        var props = __assign(__assign(__assign({}, this.$attrs), (_a = {}, _a[prop] = model === null || model === void 0 ? void 0 : model.value, _a)), mapProps(vctx));
        return h(options, {
            attrs: this.$attrs,
            props: props,
            on: listeners,
            scopedSlots: this.$scopedSlots
        }, normalizeSlots(this.$slots, this.$vnode.context));
    };
    return hoc;
}

var version = '3.4.14';




/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logo.vue?vue&type=template&id=46f77075& */ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__.render,
  _Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/Logo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/auth/ForgotPassword.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/auth/ForgotPassword.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ForgotPassword_vue_vue_type_template_id_23bc2aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=template&id=23bc2aaa& */ "./resources/js/src/views/auth/ForgotPassword.vue?vue&type=template&id=23bc2aaa&");
/* harmony import */ var _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=script&lang=js& */ "./resources/js/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&");
/* harmony import */ var _ForgotPassword_vue_vue_type_style_index_0_id_23bc2aaa_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss& */ "./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ForgotPassword_vue_vue_type_template_id_23bc2aaa___WEBPACK_IMPORTED_MODULE_0__.render,
  _ForgotPassword_vue_vue_type_template_id_23bc2aaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/auth/ForgotPassword.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_style_index_0_id_23bc2aaa_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=style&index=0&id=23bc2aaa&lang=scss&");


/***/ }),

/***/ "./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Logo_vue_vue_type_template_id_46f77075___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Logo.vue?vue&type=template&id=46f77075& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&");


/***/ }),

/***/ "./resources/js/src/views/auth/ForgotPassword.vue?vue&type=template&id=23bc2aaa&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/auth/ForgotPassword.vue?vue&type=template&id=23bc2aaa& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_23bc2aaa___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_23bc2aaa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ForgotPassword_vue_vue_type_template_id_23bc2aaa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ForgotPassword.vue?vue&type=template&id=23bc2aaa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=template&id=23bc2aaa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/@core/layouts/components/Logo.vue?vue&type=template&id=46f77075& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      attrs: {
        viewBox: "0 0 139 95",
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        height: "24",
      },
    },
    [
      _c(
        "defs",
        [
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-1",
                x1: "100%",
                y1: "10.5120544%",
                x2: "50%",
                y2: "89.4879456%",
              },
            },
            [
              _c("stop", { attrs: { "stop-color": "#000000", offset: "0%" } }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "linearGradient",
            {
              attrs: {
                id: "linearGradient-2",
                x1: "64.0437835%",
                y1: "46.3276743%",
                x2: "37.373316%",
                y2: "100%",
              },
            },
            [
              _c("stop", {
                attrs: {
                  "stop-color": "#EEEEEE",
                  "stop-opacity": "0",
                  offset: "0%",
                },
              }),
              _vm._v(" "),
              _c("stop", {
                attrs: { "stop-color": "#FFFFFF", offset: "100%" },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "g",
        {
          attrs: {
            id: "Page-1",
            stroke: "none",
            "stroke-width": "1",
            fill: "none",
            "fill-rule": "evenodd",
          },
        },
        [
          _c(
            "g",
            {
              attrs: {
                id: "Artboard",
                transform: "translate(-400.000000, -178.000000)",
              },
            },
            [
              _c(
                "g",
                {
                  attrs: {
                    id: "Group",
                    transform: "translate(400.000000, 178.000000)",
                  },
                },
                [
                  _c("path", {
                    staticClass: "text-primary",
                    staticStyle: { fill: "currentColor" },
                    attrs: {
                      id: "Path",
                      d: "M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z",
                    },
                  }),
                  _vm._v(" "),
                  _c("path", {
                    attrs: {
                      id: "Path1",
                      d: "M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z",
                      fill: "url(#linearGradient-1)",
                      opacity: "0.2",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-2",
                      fill: "#000000",
                      opacity: "0.049999997",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-21",
                      fill: "#000000",
                      opacity: "0.099999994",
                      points:
                        "69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338",
                    },
                  }),
                  _vm._v(" "),
                  _c("polygon", {
                    attrs: {
                      id: "Path-3",
                      fill: "url(#linearGradient-2)",
                      opacity: "0.099999994",
                      points:
                        "101.428699 0 83.0667527 94.1480575 130.378721 47.0740288",
                    },
                  }),
                ]
              ),
            ]
          ),
        ]
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=template&id=23bc2aaa&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/auth/ForgotPassword.vue?vue&type=template&id=23bc2aaa& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "auth-wrapper auth-v1 px-2" }, [
    _c(
      "div",
      { staticClass: "auth-inner py-2" },
      [
        _c(
          "b-card",
          { staticClass: "mb-0" },
          [
            _c(
              "b-link",
              { staticClass: "brand-logo" },
              [
                _c("vuexy-logo"),
                _vm._v(" "),
                _c("h2", { staticClass: "brand-text text-primary ml-1" }, [
                  _vm._v("\n                    SupportBug\n                "),
                ]),
              ],
              1
            ),
            _vm._v(" "),
            _c("b-card-title", { staticClass: "mb-1" }, [
              _vm._v("\n                Forgot Password? 🔒\n            "),
            ]),
            _vm._v(" "),
            _c("b-card-text", { staticClass: "mb-2" }, [
              _vm._v(
                "\n                Enter your email and we'll send you instructions to reset your password\n            "
              ),
            ]),
            _vm._v(" "),
            _c(
              "validation-observer",
              { ref: "simpleRules" },
              [
                _c(
                  "b-form",
                  {
                    staticClass: "auth-forgot-password-form mt-2",
                    on: {
                      submit: function ($event) {
                        $event.preventDefault()
                        return _vm.validationForm($event)
                      },
                    },
                  },
                  [
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          label: "Email",
                          "label-for": "forgot-password-email",
                        },
                      },
                      [
                        _c("validation-provider", {
                          attrs: { name: "Email", rules: "required|email" },
                          scopedSlots: _vm._u([
                            {
                              key: "default",
                              fn: function (ref) {
                                var errors = ref.errors
                                return [
                                  _c("b-form-input", {
                                    attrs: {
                                      id: "forgot-password-email",
                                      state: errors.length > 0 ? false : null,
                                      name: "forgot-password-email",
                                      placeholder: "john@example.com",
                                    },
                                    model: {
                                      value: _vm.userEmail,
                                      callback: function ($$v) {
                                        _vm.userEmail = $$v
                                      },
                                      expression: "userEmail",
                                    },
                                  }),
                                  _vm._v(" "),
                                  _c("small", { staticClass: "text-danger" }, [
                                    _vm._v(_vm._s(errors[0])),
                                  ]),
                                ]
                              },
                            },
                          ]),
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-button",
                      {
                        attrs: {
                          variant: "primary",
                          block: "",
                          type: "submit",
                        },
                      },
                      [
                        _vm._v(
                          "\n                        Send reset link\n                    "
                        ),
                      ]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-card-text",
              { staticClass: "text-center mt-2" },
              [
                _c(
                  "b-link",
                  { attrs: { to: { name: "login" } } },
                  [
                    _c("feather-icon", { attrs: { icon: "ChevronLeftIcon" } }),
                    _vm._v(" Back to login\n                "),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vee-validate/dist/locale/ar.json":
/*!*******************************************************!*\
  !*** ./node_modules/vee-validate/dist/locale/ar.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"code":"ar","messages":{"alpha":"{_field_} يجب ان يحتوي على حروف فقط","alpha_num":"{_field_} قد يحتوي فقط على حروف وارقام","alpha_dash":"{_field_} قد يحتوي على حروف او الرموز - و _","alpha_spaces":"{_field_} قد يحتوي فقط على حروف ومسافات","between":"قيمة {_field_} يجب ان تكون ما بين {min} و {max}","confirmed":"{_field_} لا يماثل التأكيد","digits":"{_field_} يجب ان تحتوي فقط على ارقام والا يزيد عددها عن {length} رقم","dimensions":"{_field_} يجب ان تكون بمقاس {width} بكسل في {height} بكسل","email":"{_field_} يجب ان يكون بريدا اليكتروني صحيح","excluded":"الحقل {_field_} غير صحيح","ext":"نوع ملف {_field_} غير صحيح","image":"{_field_} يجب ان تكون صورة","integer":"الحقل {_field_} يجب ان يكون عدداً صحيحاً","length":"حقل {_field_} يجب الا يزيد عن {length}","max_value":"قيمة الحقل {_field_} يجب ان تكون اصغر من {max} او تساويها","max":"الحقل {_field_} يجب ان يحتوي على {length} حروف على الأكثر","mimes":"نوع ملف {_field_} غير صحيح","min_value":"قيمة الحقل {_field_} يجب ان تكون اكبر من {min} او تساويها","min":"الحقل {_field_} يجب ان يحتوي على {length} حروف على الأقل","numeric":"{_field_} يمكن ان يحتوي فقط على ارقام","oneOf":"الحقل {_field_} يجب ان يكون قيمة صحيحة","regex":"الحقل {_field_} غير صحيح","required":"{_field_} مطلوب","required_if":"حقل {_field_} مطلوب","size":"{_field_} يجب ان يكون اقل من {size} كيلوبايت","double":"يجب أن يكون الحقل {_field_} عددًا عشريًا صالحًا"}}');

/***/ }),

/***/ "./node_modules/vee-validate/dist/locale/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/vee-validate/dist/locale/en.json ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"code":"en","messages":{"alpha":"The {_field_} field may only contain alphabetic characters","alpha_num":"The {_field_} field may only contain alpha-numeric characters","alpha_dash":"The {_field_} field may contain alpha-numeric characters as well as dashes and underscores","alpha_spaces":"The {_field_} field may only contain alphabetic characters as well as spaces","between":"The {_field_} field must be between {min} and {max}","confirmed":"The {_field_} field confirmation does not match","digits":"The {_field_} field must be numeric and exactly contain {length} digits","dimensions":"The {_field_} field must be {width} pixels by {height} pixels","email":"The {_field_} field must be a valid email","excluded":"The {_field_} field is not a valid value","ext":"The {_field_} field is not a valid file","image":"The {_field_} field must be an image","integer":"The {_field_} field must be an integer","length":"The {_field_} field must be {length} long","max_value":"The {_field_} field must be {max} or less","max":"The {_field_} field may not be greater than {length} characters","mimes":"The {_field_} field must have a valid file type","min_value":"The {_field_} field must be {min} or more","min":"The {_field_} field must be at least {length} characters","numeric":"The {_field_} field may only contain numeric characters","oneOf":"The {_field_} field is not a valid value","regex":"The {_field_} field format is invalid","required_if":"The {_field_} field is required","required":"The {_field_} field is required","size":"The {_field_} field size must be less than {size}KB","double":"The {_field_} field must be a valid decimal"}}');

/***/ })

}]);