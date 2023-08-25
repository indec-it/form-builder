"use strict";(self.webpackChunk_indec_form_builder=self.webpackChunk_indec_form_builder||[]).push([[147],{"./node_modules/@mui/material/useMediaQuery/useMediaQuery.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;__webpack_require__.d(__webpack_exports__,{Z:()=>useMediaQuery});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js"),_mui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js"),_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/useEnhancedEffect.js");function useMediaQueryOld(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const[match,setMatch]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>noSsr&&matchMedia?matchMedia(query).matches:ssrMatchMedia?ssrMatchMedia(query).matches:defaultMatches));return(0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.Z)((()=>{let active=!0;if(!matchMedia)return;const queryList=matchMedia(query),updateMatch=()=>{active&&setMatch(queryList.matches)};return updateMatch(),queryList.addListener(updateMatch),()=>{active=!1,queryList.removeListener(updateMatch)}}),[query,matchMedia]),match}const maybeReactUseSyncExternalStore=(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache||(react__WEBPACK_IMPORTED_MODULE_0___namespace_cache=__webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__,2))).useSyncExternalStore;function useMediaQueryNew(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr){const getDefaultSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>defaultMatches),[defaultMatches]),getServerSnapshot=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(noSsr&&matchMedia)return()=>matchMedia(query).matches;if(null!==ssrMatchMedia){const{matches}=ssrMatchMedia(query);return()=>matches}return getDefaultSnapshot}),[getDefaultSnapshot,query,ssrMatchMedia,noSsr,matchMedia]),[getSnapshot,subscribe]=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{if(null===matchMedia)return[getDefaultSnapshot,()=>()=>{}];const mediaQueryList=matchMedia(query);return[()=>mediaQueryList.matches,notify=>(mediaQueryList.addListener(notify),()=>{mediaQueryList.removeListener(notify)})]}),[getDefaultSnapshot,matchMedia,query]);return maybeReactUseSyncExternalStore(subscribe,getSnapshot,getServerSnapshot)}function useMediaQuery(queryInput,options={}){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_2__.Z)(),supportMatchMedia="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches=!1,matchMedia=supportMatchMedia?window.matchMedia:null,ssrMatchMedia=null,noSsr=!1}=(0,_mui_system__WEBPACK_IMPORTED_MODULE_3__.Z)({name:"MuiUseMediaQuery",props:options,theme});let query="function"==typeof queryInput?queryInput(theme):queryInput;query=query.replace(/^@media( ?)/m,"");return(void 0!==maybeReactUseSyncExternalStore?useMediaQueryNew:useMediaQueryOld)(query,defaultMatches,matchMedia,ssrMatchMedia,noSsr)}},"./src/components/FormBuilder/Modals/Modals.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ConfirmDeleteSection:()=>ConfirmDeleteSection,Interruption:()=>Interruption,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var formik__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),_Modals__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormBuilder/Modals/Modals.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={title:"Modals",component:_Modals__WEBPACK_IMPORTED_MODULE_2__.Z,argTypes:{backgroundColor:{control:"color"}}};function Template(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{S1:{id:1,answer:""}},onSubmit:function onSubmit(){},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Modals__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread({acceptButtonLabel:"Accept",cancelButtonLabel:"Cancel",onClose:function onClose(){},onAccept:function onAccept(){},open:!0},args))})}Template.displayName="Template";var Interruption=Template.bind({});Interruption.args={modal:2,label:"Select an option",options:[{value:"1",label:"Yes"},{value:"2",label:"No"}],name:"S1"};var ConfirmDeleteSection=Template.bind({});ConfirmDeleteSection.args={modal:3};var __namedExportsOrder=["Interruption","ConfirmDeleteSection"]},"./src/components/FieldMessage/FieldMessage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./src/utils/propTypes/index.js"),__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),alertStyles={justifyContent:"center",mt:2};function FieldMessage(_ref){var form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,warning=_hasFormikErrorsAndWa.warning,hasError=_hasFormikErrorsAndWa.hasError,error=_hasFormikErrorsAndWa.error;return hasError&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"error",sx:alertStyles,children:error}):hasWarning&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"warning",sx:alertStyles,children:warning}):null}FieldMessage.propTypes={},FieldMessage.__docgenInfo={description:"",methods:[],displayName:"FieldMessage",props:{field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0},warnings:{description:"",type:{name:"shape",value:{}},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=FieldMessage},"./src/components/FieldMessage/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/FieldMessage/FieldMessage.js").Z},"./src/components/InputLabel/InputLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/InputLabel/InputLabel.js"),_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/Error.js"),_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/icons-material/Warning.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/utils/propTypes/formikForm.js"),__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function InputLabel(_ref){var label=_ref.label,form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,hasError=_hasFormikErrorsAndWa.hasError,fieldMustBeCompleted=_hasFormikErrorsAndWa.fieldMustBeCompleted;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__.Z,{direction:"row",spacing:2,"data-testid":"input-label",children:[hasError&&!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_6__.Z,{color:"error","data-testid":"error-icon"})}),hasWarning&&!disabled&&!hasError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_7__.Z,{color:"warning","data-testid":"warning-icon"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__.Z,{mb:.5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__.Z,{required:fieldMustBeCompleted,children:label})})]})}InputLabel.displayName="InputLabel",InputLabel.propTypes={},InputLabel.defaultProps={warnings:{}},InputLabel.__docgenInfo={description:"",methods:[],displayName:"InputLabel",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},label:{description:"",type:{name:"string"},required:!0},form:{description:"",type:{name:"custom",raw:"formikFormPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikFieldPropTypes.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=InputLabel},"./src/components/InputLabel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/InputLabel/InputLabel.js").Z},"./src/utils/hasFormikErrorsAndWarnings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function hasFormikErrorsAndWarnings(_ref){var form=_ref.form,field=_ref.field,_ref$warnings=_ref.warnings,warnings=void 0===_ref$warnings?{}:_ref$warnings,warning=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(warnings,field.name),error=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(form.errors,field.name),touched=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(form.touched,field.name),formSubmittedOrTouched=form.submitCount>0||touched;return{fieldMustBeCompleted:!!error,hasError:!(!formSubmittedOrTouched||!error),error,hasWarning:!(!formSubmittedOrTouched||!warning),warning}}},"./src/utils/propTypes/formikField.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({start:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,end:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})]).isRequired})},"./src/utils/propTypes/formikForm.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({touched:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({}),errors:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({})})},"./src/utils/propTypes/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./src/utils/propTypes/formikForm.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);prop_types_default().shape({name:prop_types_default().string.isRequired,lastName:prop_types_default().string.isRequired}),prop_types_default().shape({type:prop_types_default().string.isRequired,messageType:prop_types_default().oneOf(["warning","error"]).isRequired,params:prop_types_default().arrayOf(prop_types_default().shape({value:prop_types_default().number,message:prop_types_default().string.isRequired}).isRequired).isRequired})}}]);