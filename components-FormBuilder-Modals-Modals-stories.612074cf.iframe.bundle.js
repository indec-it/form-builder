"use strict";(self.webpackChunk_indec_form_builder=self.webpackChunk_indec_form_builder||[]).push([[147],{"./src/components/FormBuilder/Modals/Modals.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConfirmDeleteSection:()=>ConfirmDeleteSection,Interruption:()=>Interruption,Preview:()=>Preview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var formik__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),_Modals__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormBuilder/Modals/Modals.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Modals",component:_Modals__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{backgroundColor:{control:"color"}}};function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{S1:{id:1,answer:""}},onSubmit:function onSubmit(){},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modals__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread({acceptButtonLabel:"Accept",cancelButtonLabel:"Cancel",onClose:function onClose(){},onAccept:function onAccept(){},open:!0},args))})}Template.displayName="Template";var Preview=Template.bind({});Preview.args={modal:1,index:0,section:{id:1,name:"S1",label:"Sección 1",multiple:!1,questions:[{id:1,label:"Ingrese su nombre",name:"S1P1",number:"1",type:1,options:[],validations:[],userVarName:"s1p1"}],headers:[{id:1,question:1}]},values:{S1:{id:1,answer:""}}};var Interruption=Template.bind({});Interruption.args={modal:2,label:"Select an option",options:[{value:"1",label:"Yes"},{value:"2",label:"No"}],name:"S1"};var ConfirmDeleteSection=Template.bind({});ConfirmDeleteSection.args={modal:3};var __namedExportsOrder=["Preview","Interruption","ConfirmDeleteSection"]}}]);