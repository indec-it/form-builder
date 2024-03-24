"use strict";(self.webpackChunk_indec_form_builder=self.webpackChunk_indec_form_builder||[]).push([[959],{"./src/components/FieldMessage/FieldMessage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./src/utils/propTypes/index.js"),__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),alertStyles={justifyContent:"center",mt:2};function FieldMessage(_ref){var form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,warning=_hasFormikErrorsAndWa.warning,hasError=_hasFormikErrorsAndWa.hasError,error=_hasFormikErrorsAndWa.error;return hasError&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"error",sx:alertStyles,children:error}):hasWarning&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"warning",sx:alertStyles,children:warning}):null}FieldMessage.propTypes={},FieldMessage.__docgenInfo={description:"",methods:[],displayName:"FieldMessage",props:{field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0},warnings:{description:"",type:{name:"shape",value:{}},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=FieldMessage},"./src/components/FieldMessage/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/FieldMessage/FieldMessage.js").Z},"./src/components/InputLabel/InputLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/icons-material/Error.js"),_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/icons-material/Warning.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/utils/propTypes/formikForm.js"),__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./src/utils/propTypes/label.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function InputLabel(_ref){var label=_ref.label,form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,hasError=_hasFormikErrorsAndWa.hasError,labelNumber=label.number?"".concat(label.number," - "):"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__.Z,{direction:"row",spacing:2,"data-testid":"input-label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__.Z,{direction:"row",mb:.5,alignItems:"center",sx:{opacity:disabled?.3:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.Z,{sx:{fontWeight:"bold",fontSize:"17px"},children:["".concat(labelNumber).concat(label.text)," ",hasError&&"*"]})}),hasError&&!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_8__.Z,{color:"error","data-testid":"error-icon"})}),hasWarning&&!disabled&&!hasError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_9__.Z,{color:"warning","data-testid":"warning-icon"})})]}),label.introduction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.Z,{fontWeight:"bold",color:"gray",children:label.introduction})]})}InputLabel.propTypes={},InputLabel.defaultProps={warnings:{}},InputLabel.__docgenInfo={description:"",methods:[],displayName:"InputLabel",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},label:{description:"",type:{name:"custom",raw:"labelPropTypes.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikFormPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikFieldPropTypes.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=InputLabel},"./src/components/InputLabel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/InputLabel/InputLabel.js").Z},"./src/components/Radio/Radio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Radio_Radio});var IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Radio=__webpack_require__("./node_modules/@mui/material/Radio/Radio.js"),RadioGroup=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Delete=__webpack_require__("./node_modules/@mui/icons-material/Delete.js"),FieldMessage=__webpack_require__("./src/components/FieldMessage/index.js"),InputLabel=__webpack_require__("./src/components/InputLabel/index.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.js"),hooks=__webpack_require__("./src/hooks/index.js"),Button=(__webpack_require__("./src/utils/propTypes/index.js"),__webpack_require__("./node_modules/@mui/material/Button/Button.js")),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MobileRadio(_ref){var options=_ref.options,field=_ref.field,disabled=_ref.disabled,label=_ref.label,form=_ref.form,warnings=_ref.warnings;return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",sx:{width:"100%"},"data-testid":"radio",children:[(0,jsx_runtime.jsx)(InputLabel.Z,{warnings,form,field,label,disabled}),(0,jsx_runtime.jsx)(Stack.Z,{direction:"column",spacing:2,children:options.map((function(option,index){return(0,jsx_runtime.jsx)(Button.Z,{"data-testid":"radio-".concat(index),disabled,variant:option.value===field.value?"contained":"outlined",onClick:function onClick(){form.setFieldValue(field.name,option.value===field.value?"":option.value),form.setFieldTouched(field.name,!1)},size:"small",children:option.label},option.value)}))}),(0,jsx_runtime.jsx)(FieldMessage.Z,{form,field,warnings,disabled})]})}MobileRadio.displayName="MobileRadio",MobileRadio.propTypes={},MobileRadio.defaultProps={warnings:{},disabled:!1},MobileRadio.__docgenInfo={description:"",methods:[],displayName:"MobileRadio",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"custom",raw:"labelPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0}}}},required:!0}}};const Radio_MobileRadio=MobileRadio;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Radio_Radio(_ref){var options=_ref.options,field=_ref.field,disabled=_ref.disabled,label=_ref.label,form=_ref.form,warnings=_ref.warnings;return(0,hooks.Gc)().breakpoint===breakpoints.Z.EXTRA_SMALL?(0,jsx_runtime.jsx)(Radio_MobileRadio,{options,field,disabled,label,form,warnings}):(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",sx:{width:"100%"},"data-testid":"radio",children:[(0,jsx_runtime.jsx)(InputLabel.Z,{warnings,form,field,label,disabled}),(0,jsx_runtime.jsx)(RadioGroup.Z,_objectSpread(_objectSpread({},field),{},{onBlur:form.handleBlur,onChange:function onChange(e){field.onChange(e),form.setFieldTouched(field.name,!1)},children:options.map((function(option,index){return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",children:[(0,jsx_runtime.jsx)(FormControlLabel.Z,{"data-testid":"radio-".concat(index),value:option.value,control:(0,jsx_runtime.jsx)(Radio.Z,{}),label:option.label,disabled,checked:option.value===field.value}),option.value===field.value&&!disabled&&(0,jsx_runtime.jsx)(IconButton.Z,{onClick:function onClick(){return form.setFieldValue(field.name,"")},color:"error","data-testid":"clean-option-".concat(index),children:(0,jsx_runtime.jsx)(Delete.Z,{})})]},option.value)}))})),(0,jsx_runtime.jsx)(FieldMessage.Z,{form,field,warnings,disabled})]})}Radio_Radio.propTypes={},Radio_Radio.defaultProps={warnings:{},disabled:!1},Radio_Radio.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"custom",raw:"labelPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0}}}},required:!0}}};const components_Radio_Radio=Radio_Radio},"./src/constants/breakpoints.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={EXTRA_SMALL:"xs",SMALL:"sm",MEDIUM:"md",LARGE:"lg",EXTRA_LARGE:"xl"}},"./src/context/form.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,q:()=>FormContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./src/utils/propTypes/section.js"),__webpack_require__("./node_modules/react/jsx-runtime.js")),FormContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({initialValues:{},sections:[],section:{}});function FormProvider(_ref){var children=_ref.children,initialValues=_ref.initialValues,sections=_ref.sections,section=_ref.section,value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((function(){return{initialValues,section,sections}}),[initialValues,section,sections]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FormContext.Provider,{value,children})}FormProvider.displayName="FormProvider",FormProvider.propTypes={},FormProvider.defaultProps={initialValues:void 0},FormProvider.__docgenInfo={description:"",methods:[],displayName:"FormProvider",props:{initialValues:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"shape",value:{}},required:!1},children:{description:"",type:{name:"node"},required:!0},sections:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"sectionPropTypes"}},required:!0},section:{description:"",type:{name:"custom",raw:"sectionPropTypes.isRequired"},required:!1}}};const __WEBPACK_DEFAULT_EXPORT__=FormProvider},"./src/hooks/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>hooks_useBreakpoint,cI:()=>hooks_useForm,HJ:()=>hooks_useNavigation,eD:()=>hooks_useSectionInitialValues,h7:()=>hooks_useSubQuestions});var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js"),breakpoints=__webpack_require__("./src/constants/breakpoints.js");const hooks_useBreakpoint=function useBreakpoint(){var theme=(0,useTheme.Z)(),mq_xs=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints.Z.EXTRA_SMALL)),mq_sm=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints.Z.SMALL)),mq_md=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints.Z.MEDIUM)),mq_lg=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints.Z.LARGE)),mq_xl=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints.Z.EXTRA_LARGE));return{breakpoint:function getBreakPointName(){return mq_xs?breakpoints.Z.EXTRA_SMALL:mq_sm?breakpoints.Z.SMALL:mq_md?breakpoints.Z.MEDIUM:mq_lg?breakpoints.Z.LARGE:mq_xl?breakpoints.Z.EXTRA_LARGE:null}()}};var react=__webpack_require__("./node_modules/react/index.js"),context_form=__webpack_require__("./src/context/form.js");const hooks_useForm=function useForm(){return(0,react.useContext)(context_form.q)};var getNavigation=__webpack_require__("./src/utils/getNavigation.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const hooks_useNavigation=function useNavigation(_ref){var sections=_ref.sections,initialValues=_ref.initialValues,handleFinish=_ref.handleFinish,_useState2=_slicedToArray((0,react.useState)(0),2),page=_useState2[0],setPage=_useState2[1],_useState4=_slicedToArray((0,react.useState)(),2),nextPage=_useState4[0],setNextPage=_useState4[1],section=sections[page],navigation=(0,react.useMemo)((function(){var _sections$nextPage;return(0,getNavigation.Z)({navigation:null==sections||null===(_sections$nextPage=sections[nextPage])||void 0===_sections$nextPage?void 0:_sections$nextPage.navigation,initialValues,sections,section})}),[nextPage]);return(0,react.useEffect)((function(){if(nextPage>=0){(navigation.valid||"disable"===navigation.action)&&setPage(nextPage);var calcPage=nextPage<page?nextPage:nextPage-1,isLastPage=calcPage<=sections.length||page===sections.length;"hide"===navigation.action&&setNextPage(isLastPage?void 0:calcPage),handleFinish(isLastPage)}}),[nextPage,page]),{handleNextPage:function handleNextPage(){page<sections.length-1&&setNextPage(page+1)},handlePreviousPage:function handlePreviousPage(){setNextPage(page-1)},navigation,page,section}};var buildQuestions=__webpack_require__("./src/utils/buildQuestions.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function useSectionInitialValues_slicedToArray(arr,i){return function useSectionInitialValues_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useSectionInitialValues_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function useSectionInitialValues_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useSectionInitialValues_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useSectionInitialValues_arrayLikeToArray(o,minLen)}(arr,i)||function useSectionInitialValues_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useSectionInitialValues_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const hooks_useSectionInitialValues=function useSectionInitialValues(values,section){var _useState2=useSectionInitialValues_slicedToArray((0,react.useState)(),2),initialValues=_useState2[0],setInitialValues=_useState2[1];return(0,react.useEffect)((function(){setInitialValues(values&&values[section.name]?_defineProperty({},section.name,values[section.name]):(0,buildQuestions.Z)(section))}),[section,values]),{initialValues}};var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js");function useSubQuestions_typeof(obj){return useSubQuestions_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},useSubQuestions_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){useSubQuestions_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function useSubQuestions_defineProperty(obj,key,value){return(key=function useSubQuestions_toPropertyKey(arg){var key=function useSubQuestions_toPrimitive(input,hint){if("object"!==useSubQuestions_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==useSubQuestions_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===useSubQuestions_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function useSubQuestions_slicedToArray(arr,i){return function useSubQuestions_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useSubQuestions_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function useSubQuestions_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useSubQuestions_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useSubQuestions_arrayLikeToArray(o,minLen)}(arr,i)||function useSubQuestions_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useSubQuestions_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const hooks_useSubQuestions=function useSubQuestions(_ref){var _value$name2,_value$name2$answer,subQuestions=_ref.subQuestions,value=_ref.value,name=_ref.name,specificationsPathName=_ref.specificationsPathName,_useState2=useSubQuestions_slicedToArray((0,react.useState)([]),2),selectedQuestions=_useState2[0],setSelectedSubQuestions=_useState2[1],setFieldValue=(0,formik_esm.u6)().setFieldValue,_useForm=hooks_useForm(),sections=_useForm.sections,initialValues=_useForm.initialValues,section=_useForm.section;return(0,react.useEffect)((function(){var _value$name,_value$name$answer,allSubQuestions=subQuestions.map((function(subQuestion){return _objectSpread(_objectSpread({},subQuestion),{},{show:(0,getNavigation.Z)({navigation:subQuestion.navigation,answers:value,section,initialValues,sections,questionName:name,isSubQuestion:!0}).valid})})),hiddenSubQuestions=allSubQuestions.filter((function(subQuestion){return!subQuestion.show})),showSubQuestions=allSubQuestions.filter((function(subQuestion){return subQuestion.show}));hiddenSubQuestions.length>0&&setFieldValue(specificationsPathName,_objectSpread(_objectSpread({},null==value||null===(_value$name=value[name])||void 0===_value$name||null===(_value$name$answer=_value$name.answer)||void 0===_value$name$answer?void 0:_value$name$answer.specifications),(0,buildQuestions.q)(hiddenSubQuestions)));setSelectedSubQuestions(showSubQuestions)}),[null==value||null===(_value$name2=value[name])||void 0===_value$name2||null===(_value$name2$answer=_value$name2.answer)||void 0===_value$name2$answer?void 0:_value$name2$answer.value]),{selectedQuestions}}},"./src/utils/buildQuestions.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,q:()=>getSubQuestions});var _constants_questionTypes__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/constants/questionTypes.js"),_constants_dateTypes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants/dateTypes.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var getValue=function getValue(question){switch(question.type){case _constants_questionTypes__WEBPACK_IMPORTED_MODULE_0__.Z.CHECKBOX:return[];case _constants_questionTypes__WEBPACK_IMPORTED_MODULE_0__.Z.RADIO_TABLE:return question.options.reduce((function(accumulator,currentValue){return _objectSpread(_objectSpread({},accumulator),{},_defineProperty({},currentValue.name,void 0))}),{});case _constants_questionTypes__WEBPACK_IMPORTED_MODULE_0__.Z.DATE:return[_constants_dateTypes__WEBPACK_IMPORTED_MODULE_1__.Z.RANGE_WITHOUT_HOUR,_constants_dateTypes__WEBPACK_IMPORTED_MODULE_1__.Z.RANGE_WITH_HOUR].includes(question.metadata.dateType)?{start:"",end:""}:"";default:return""}},getSubQuestions=function getSubQuestions(subQuestions){return Object.fromEntries(subQuestions.map((function(subQuestion){return[subQuestion.name,{id:subQuestion.id,answer:{value:""}}]})))};const __WEBPACK_DEFAULT_EXPORT__=function buildQuestions(section){var values=_defineProperty({},section.name,{id:1});return section.interruption.interruptible&&(values[section.name][section.interruption.name]={id:"section-".concat(section.id),answer:{value:""}}),section.questions.forEach((function(question){var id=question.id;question.type===_constants_questionTypes__WEBPACK_IMPORTED_MODULE_0__.Z.MESSAGE?values[section.name][question.name]={id}:(values[section.name][question.name]={id,answer:{value:getValue(question)}},question.subQuestions&&question.subQuestions.length>0&&(values[section.name][question.name]=_objectSpread(_objectSpread({},values[section.name][question.name]),{},{answer:_objectSpread(_objectSpread({},values[section.name][question.name].answer),{},{specifications:getSubQuestions(question.subQuestions)})})),question.multiple&&(values[section.name][question.name]=_objectSpread(_objectSpread({},values[section.name][question.name]),{},{answer:[_objectSpread({id:1},values[section.name][question.name].answer)]})))})),values[section.name]=[values[section.name]],values}},"./src/utils/propTypes/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./src/utils/propTypes/formikForm.js"),__webpack_require__("./src/utils/propTypes/label.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);prop_types_default().shape({name:prop_types_default().string.isRequired,lastName:prop_types_default().string.isRequired}),prop_types_default().shape({type:prop_types_default().string.isRequired,messageType:prop_types_default().oneOf(["warning","error"]).isRequired,params:prop_types_default().arrayOf(prop_types_default().shape({value:prop_types_default().number,message:prop_types_default().string.isRequired}).isRequired).isRequired})},"./src/utils/propTypes/section.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__),_subQuestion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/propTypes/subQuestion.js");const __WEBPACK_DEFAULT_EXPORT__=prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,introduction:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,questions:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,name:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string.isRequired,introduction:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,type:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired,placeholder:prop_types__WEBPACK_IMPORTED_MODULE_1___default().string,subQuestions:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(_subQuestion__WEBPACK_IMPORTED_MODULE_0__.Z)})),multiple:prop_types__WEBPACK_IMPORTED_MODULE_1___default().bool.isRequired,headers:prop_types__WEBPACK_IMPORTED_MODULE_1___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired,question:prop_types__WEBPACK_IMPORTED_MODULE_1___default().number}))})},"./src/utils/propTypes/subQuestion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);const __WEBPACK_DEFAULT_EXPORT__=prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number,label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,optionId:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number,name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})}}]);