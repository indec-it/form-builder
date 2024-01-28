"use strict";(self.webpackChunk_indec_form_builder=self.webpackChunk_indec_form_builder||[]).push([[495],{"./src/components/Radio/Radio.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithErrors:()=>WithErrors,WithReadOnlyMode:()=>WithReadOnlyMode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var formik__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_utils_getWarnings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/getWarnings.js"),_utils_getSchemas__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/getSchemas.js"),_Radio__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Radio/Radio.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["withErrors","withWarnings","initialValues"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Radio",component:_Radio__WEBPACK_IMPORTED_MODULE_4__.Z,argTypes:{backgroundColor:{control:"color"}}};var options=[{id:1,name:"S1P1O1",value:"1",label:"Option 1",subOptions:[{id:1}]},{id:2,name:"S1P1O1",value:"2",label:"Option 2",subOptions:[{id:1}]},{id:3,name:"S1P1O1",value:"3",label:"Option 3",subOptions:[{id:1}]}],section={id:1,name:"S1",label:"Sección 1",questions:[{id:1,label:"Select an option",name:"S1P1",number:"1",type:1,options,validations:[{id:1,rules:[{id:1,conditions:[{id:1,question:"S1P1",value:"",type:"eq",section:"S2"}]}],message:{text:"Must select an option",type:"error"}}],userVarName:"s1p1"}]};function Template(args){var _getSchemas=(0,_utils_getSchemas__WEBPACK_IMPORTED_MODULE_3__.Z)({section}),validateSchema=_getSchemas.errorSchema,warningSchema=_getSchemas.warningSchema,withErrors=args.withErrors,withWarnings=args.withWarnings,initialValues=args.initialValues,props=_objectWithoutProperties(args,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{S1:[{S1P1:{id:1,answer:{value:initialValues||""}}}]},validationSchema:withErrors?validateSchema:null,onSubmit:function onSubmit(){},children:function children(_ref){var values=_ref.values,submitForm=_ref.submitForm,warnings=withWarnings&&(0,_utils_getWarnings__WEBPACK_IMPORTED_MODULE_2__.Z)(warningSchema,values)||{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.gN,_objectSpread(_objectSpread({component:_Radio__WEBPACK_IMPORTED_MODULE_4__.Z},props),{},{warnings})),withErrors?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:submitForm,variant:"contained",children:"Click to validate form"}):null]})}})}Template.displayName="Template";var Basic=Template.bind({});Basic.args={disabled:!1,label:{text:"Select an option"},name:"S1.0.S1P1.answer.value",warnings:{},options};var WithReadOnlyMode=Template.bind({});WithReadOnlyMode.args={disabled:!0,label:{text:"Select an option"},name:"S1.0.S1P1.answer.value",warnings:{},options,initialValues:"3"};var WithErrors=Template.bind({});WithErrors.args={disabled:!1,label:{text:"Select an option"},name:"S1.0.S1P1.answer.value",warnings:{},withErrors:!0,options};var __namedExportsOrder=["Basic","WithReadOnlyMode","WithErrors"]},"./src/components/FieldMessage/FieldMessage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./src/utils/propTypes/index.js"),__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),alertStyles={justifyContent:"center",mt:2};function FieldMessage(_ref){var form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,warning=_hasFormikErrorsAndWa.warning,hasError=_hasFormikErrorsAndWa.hasError,error=_hasFormikErrorsAndWa.error;return hasError&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"error",sx:alertStyles,children:error}):hasWarning&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"warning",sx:alertStyles,children:warning}):null}FieldMessage.propTypes={},FieldMessage.__docgenInfo={description:"",methods:[],displayName:"FieldMessage",props:{field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0},warnings:{description:"",type:{name:"shape",value:{}},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=FieldMessage},"./src/components/FieldMessage/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/FieldMessage/FieldMessage.js").Z},"./src/components/InputLabel/InputLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/icons-material/Error.js"),_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@mui/icons-material/Warning.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/utils/propTypes/formikForm.js"),__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./src/utils/propTypes/label.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function InputLabel(_ref){var label=_ref.label,form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,hasError=_hasFormikErrorsAndWa.hasError,labelNumber=label.number?"".concat(label.number," - "):"";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__.Z,{direction:"row",spacing:2,"data-testid":"input-label",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_5__.Z,{direction:"row",mb:.5,alignItems:"center",sx:{opacity:disabled?.3:1},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.Z,{sx:{fontWeight:"bold",fontSize:"17px"},children:["".concat(labelNumber).concat(label.text)," ",hasError&&"*"]})}),hasError&&!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_8__.Z,{color:"error","data-testid":"error-icon"})}),hasWarning&&!disabled&&!hasError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_7__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_9__.Z,{color:"warning","data-testid":"warning-icon"})})]}),label.introduction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__.Z,{fontWeight:"bold",color:"gray",children:label.introduction})]})}InputLabel.propTypes={},InputLabel.defaultProps={warnings:{}},InputLabel.__docgenInfo={description:"",methods:[],displayName:"InputLabel",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},label:{description:"",type:{name:"custom",raw:"labelPropTypes.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikFormPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikFieldPropTypes.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=InputLabel},"./src/components/InputLabel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/InputLabel/InputLabel.js").Z},"./src/components/Radio/Radio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Radio_Radio});var IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Radio=__webpack_require__("./node_modules/@mui/material/Radio/Radio.js"),RadioGroup=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Delete=__webpack_require__("./node_modules/@mui/icons-material/Delete.js"),FieldMessage=__webpack_require__("./src/components/FieldMessage/index.js"),InputLabel=__webpack_require__("./src/components/InputLabel/index.js");const breakpoints_EXTRA_SMALL="xs",breakpoints_SMALL="sm",breakpoints_MEDIUM="md",breakpoints_LARGE="lg",breakpoints_EXTRA_LARGE="xl";var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");const hooks_useBreakpoint=function useBreakpoint(){var theme=(0,useTheme.Z)(),mq_xs=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_EXTRA_SMALL)),mq_sm=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_SMALL)),mq_md=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_MEDIUM)),mq_lg=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_LARGE)),mq_xl=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_EXTRA_LARGE));return{breakpoint:function getBreakPointName(){return mq_xs?breakpoints_EXTRA_SMALL:mq_sm?breakpoints_SMALL:mq_md?breakpoints_MEDIUM:mq_lg?breakpoints_LARGE:mq_xl?breakpoints_EXTRA_LARGE:null}()}};__webpack_require__("./src/utils/propTypes/index.js");var Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MobileRadio(_ref){var options=_ref.options,field=_ref.field,disabled=_ref.disabled,label=_ref.label,form=_ref.form,warnings=_ref.warnings;return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",sx:{width:"100%"},"data-testid":"radio",children:[(0,jsx_runtime.jsx)(InputLabel.Z,{warnings,form,field,label,disabled}),(0,jsx_runtime.jsx)(Stack.Z,{direction:"column",spacing:2,children:options.map((function(option,index){return(0,jsx_runtime.jsx)(Button.Z,{"data-testid":"radio-".concat(index),disabled,variant:option.value===field.value?"contained":"outlined",onClick:function onClick(){form.setFieldValue(field.name,option.value===field.value?"":option.value),form.setFieldTouched(field.name,!1)},size:"small",children:option.label},option.value)}))}),(0,jsx_runtime.jsx)(FieldMessage.Z,{form,field,warnings,disabled})]})}MobileRadio.displayName="MobileRadio",MobileRadio.propTypes={},MobileRadio.defaultProps={warnings:{},disabled:!1},MobileRadio.__docgenInfo={description:"",methods:[],displayName:"MobileRadio",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"custom",raw:"labelPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0}}}},required:!0}}};const Radio_MobileRadio=MobileRadio;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Radio_Radio(_ref){var options=_ref.options,field=_ref.field,disabled=_ref.disabled,label=_ref.label,form=_ref.form,warnings=_ref.warnings;return hooks_useBreakpoint().breakpoint===breakpoints_EXTRA_SMALL?(0,jsx_runtime.jsx)(Radio_MobileRadio,{options,field,disabled,label,form,warnings}):(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",sx:{width:"100%"},"data-testid":"radio",children:[(0,jsx_runtime.jsx)(InputLabel.Z,{warnings,form,field,label,disabled}),(0,jsx_runtime.jsx)(RadioGroup.Z,_objectSpread(_objectSpread({},field),{},{onBlur:form.handleBlur,onChange:function onChange(e){field.onChange(e),form.setFieldTouched(field.name,!1)},children:options.map((function(option,index){return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",children:[(0,jsx_runtime.jsx)(FormControlLabel.Z,{"data-testid":"radio-".concat(index),value:option.value,control:(0,jsx_runtime.jsx)(Radio.Z,{}),label:option.label,disabled,checked:option.value===field.value}),option.value===field.value&&!disabled&&(0,jsx_runtime.jsx)(IconButton.Z,{onClick:function onClick(){return form.setFieldValue(field.name,"")},color:"error","data-testid":"clean-option-".concat(index),children:(0,jsx_runtime.jsx)(Delete.Z,{})})]},option.value)}))})),(0,jsx_runtime.jsx)(FieldMessage.Z,{form,field,warnings,disabled})]})}Radio_Radio.propTypes={},Radio_Radio.defaultProps={warnings:{},disabled:!1},Radio_Radio.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"custom",raw:"labelPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0}}}},required:!0}}};const components_Radio_Radio=Radio_Radio},"./src/constants/dateTypes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={DATE_WITH_HOUR:"dateWithHour",DATE_WITHOUT_HOUR:"dateWithoutHour",RANGE_WITH_HOUR:"rangeWithHour",RANGE_WITHOUT_HOUR:"rangeWithoutHour"}},"./src/constants/questionTypes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={TEXT_FIELD:1,NUMERIC_FIELD:2,DROPDOWN:3,RADIO:4,CHECKBOX:5,DATE:6,RADIO_TABLE:7,CURRENCY:8,MESSAGE:9}},"./src/utils/getNavigation.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _getValidationRules__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/getValidationRules.js");const __WEBPACK_DEFAULT_EXPORT__=function getNavigation(_ref){var _ref$navigation=_ref.navigation,navigation=void 0===_ref$navigation?[]:_ref$navigation,answers=_ref.answers,questionType=_ref.questionType;return 0===navigation.length||navigation.map((function(nav){var rules=(0,_getValidationRules__WEBPACK_IMPORTED_MODULE_0__.Z)({validation:nav,answers,questionType});return{action:nav.action,result:rules.some((function(value){return value}))}})).find((function(rule){return rule.result}))}},"./src/utils/getSchemas.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>utils_getSchemas});var index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),dateTypes=__webpack_require__("./src/constants/dateTypes.js"),questionTypes=__webpack_require__("./src/constants/questionTypes.js"),getValidationRules=__webpack_require__("./src/utils/getValidationRules.js"),getNavigation=__webpack_require__("./src/utils/getNavigation.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var getValidatorType=function getValidatorType(type,options,metadata){switch(type){case questionTypes.Z.TEXT_FIELD:case questionTypes.Z.DROPDOWN:case questionTypes.Z.RADIO:return index_esm.Z_().default("");case questionTypes.Z.CURRENCY:case questionTypes.Z.NUMERIC_FIELD:return index_esm.Rx().transform((function(value){return Number.isNaN(value)||null==value||""===value?0:value}));case questionTypes.Z.CHECKBOX:return index_esm.IX().of(index_esm.Z_());case questionTypes.Z.RADIO_TABLE:var opts=options.reduce((function(accumulator,currentValue){return _objectSpread(_objectSpread({},accumulator),{},_defineProperty({},currentValue.name,index_esm.Z_().default("")))}),{});return index_esm.Ry(opts);case questionTypes.Z.DATE:var field=index_esm.Z_().default("");return[dateTypes.Z.RANGE_WITHOUT_HOUR,dateTypes.Z.RANGE_WITH_HOUR].includes(metadata.dateType)?index_esm.Ry({start:field,end:field}):index_esm.Z_();default:return null}},handleValidations=function handleValidations(_ref){var validator=_ref.validator,validations=_ref.validations,opts=_ref.opts,answers=_ref.answers,questionName=_ref.questionName,_ref$multiple=_ref.multiple,multiple=void 0!==_ref$multiple&&_ref$multiple,questionType=_ref.questionType,newValidator=validator;return validations.forEach((function(validation){var messageType=validation.message.type;"warning"===messageType&&"warning"!==opts.schemaType||"error"===messageType&&"error"!==opts.schemaType||(newValidator=newValidator.test("custom-validation",validation.message.text,(function(currentValue){var formatAnswer=answers;return formatAnswer=multiple?_objectSpread(_objectSpread({},formatAnswer),{},_defineProperty({},questionName,{answer:{value:currentValue}})):formatAnswer,!(0,getValidationRules.Z)({validation,answers:formatAnswer,questionType}).some((function(value){return!0===value}))||this.createError({path:this.path,message:validation.message.text})})))})),newValidator},buildSubQuestionsValidations=function buildSubQuestionsValidations(subQuestions,opts,answers,multiple){return subQuestions.reduce((function(acc,currentValue){var subQuestionValidator=getValidatorType(currentValue.type,currentValue.options);return acc[currentValue.name]=index_esm.Ry({answer:index_esm.Ry({value:index_esm.Vo((function(value){return handleValidations({validator:subQuestionValidator,validations:currentValue.validations,opts,answers:_objectSpread(_objectSpread({},answers),{},_defineProperty({},currentValue.name,{answer:{value}})),questionName:currentValue.name,multiple})}))})}),acc}),{})},getSubQuestionsSchema=function getSubQuestionsSchema(subQuestions,schema,opts,questionName,value,multiple){var newSchema=schema;if(subQuestions.length>0){var subQuestionsToRender=function getSelectedSubQuestions(_ref2){var subQuestions=_ref2.subQuestions,parentName=_ref2.parentName,value=_ref2.value;return subQuestions.filter((function(subQuestion){return!(0,getNavigation.Z)({navigation:subQuestion.navigation,answers:_defineProperty({},parentName,{answer:value})})}))}({subQuestions,parentName:questionName,value});newSchema=schema.concat(index_esm.Ry({specifications:index_esm.Ry(buildSubQuestionsValidations(subQuestionsToRender,opts,_defineProperty({},questionName,{answer:value}),multiple))}))}return newSchema},buildAnswerObj=function buildAnswerObj(_ref3){var answers=_ref3.answers,subQuestions=_ref3.subQuestions,validator=_ref3.validator,multiple=_ref3.multiple,opts=_ref3.opts,questionName=_ref3.name,schema=index_esm.Ry({value:validator});return multiple?index_esm.IX().of(index_esm.Vo((function(value){return schema=getSubQuestionsSchema(subQuestions,schema,opts,questionName,value,multiple)}))):schema=getSubQuestionsSchema(subQuestions,schema,opts,questionName,answers[questionName].answer,multiple)};function getSchemas_typeof(obj){return getSchemas_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},getSchemas_typeof(obj)}function getSchemas_defineProperty(obj,key,value){return(key=function getSchemas_toPropertyKey(arg){var key=function getSchemas_toPrimitive(input,hint){if("object"!==getSchemas_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==getSchemas_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===getSchemas_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var getSchema=function getSchema(section,schemaType){var schema=function schema(sectionValues){return section.questions.reduce((function(acc,currentValue){return function buildYupSchema(schema,config,values){var opts=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},schemaWithValidations=schema,name=config.name,type=config.type,validations=config.validations,options=config.options,metadata=config.metadata,multiple=config.multiple,_config$subQuestions=config.subQuestions,subQuestions=void 0===_config$subQuestions?[]:_config$subQuestions,validator=getValidatorType(type,options,metadata);return validator?(validator=handleValidations({validator,validations,opts,answers:values,questionName:name,multiple,questionType:type}),schemaWithValidations[name]=index_esm.Ry({id:index_esm.Rx().required(),answer:buildAnswerObj({answers:values,type,subQuestions,validator,multiple,opts,name})}),schemaWithValidations):schemaWithValidations}(acc,currentValue,sectionValues,{schemaType})}),{})};return index_esm.Ry(getSchemas_defineProperty({},section.name,index_esm.IX().of(index_esm.Vo((function(values){return index_esm.Ry(schema(values))})))))};const utils_getSchemas=function getSchemas(_ref){var _ref$section=_ref.section,section=void 0===_ref$section?{}:_ref$section;return{errorSchema:getSchema(section,"error"),warningSchema:getSchema(section,"warning")}}},"./src/utils/getValidationRules.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>utils_getValidationRules});var isEqual=__webpack_require__("./node_modules/date-fns/esm/isEqual/index.js"),isAfter=__webpack_require__("./node_modules/date-fns/esm/isAfter/index.js"),isBefore=__webpack_require__("./node_modules/date-fns/esm/isBefore/index.js"),questionTypes=__webpack_require__("./src/constants/questionTypes.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var isString=function isString(value){return"string"==typeof value};const utils_operations={eq:function eq(a,b,questionType){if(questionType===questionTypes.Z.DATE){var firstDate=new Date(a),secondDate=new Date(b);return(0,isEqual.Z)(firstDate,secondDate)}return function isObject(value){return"object"===_typeof(value)&&null!==value&&!Array.isArray(value)}(a)?Object.values(a).some((function(value){return value===b})):a===b},ne:function ne(a,b,questionType){if(questionType===questionTypes.Z.DATE){var firstDate=new Date(a),secondDate=new Date(b);return!(0,isEqual.Z)(firstDate,secondDate)}return a!==b},gt:function gt(a,b,questionType){if(questionType===questionTypes.Z.DATE){var firstDate=new Date(a),secondDate=new Date(b);return(0,isAfter.Z)(firstDate,secondDate)}return isString(a)?a.length>b:a>b},gte:function gte(a,b){return isString(a)?a.length>=b:a>=b},lt:function lt(a,b,questionType){if(questionType===questionTypes.Z.DATE){var firstDate=new Date(a),secondDate=new Date(b);return(0,isBefore.Z)(firstDate,secondDate)}return isString(a)?a.length<b:a<b},lte:function lte(a,b){return isString(a)?a.length<=b:a<=b},in:function _in(a,b){return a.includes(b)},nin:function nin(a,b){return!a.includes(b)}};const utils_getValidationRules=function getValidationRules(_ref2){var validation=_ref2.validation,answers=_ref2.answers,questionType=_ref2.questionType;return validation.rules.map((function(rule){var conditions=function getConditions(_ref){var conditions=_ref.conditions,answers=_ref.answers,questionType=_ref.questionType;return conditions.map((function(condition){var _question$answer;if(!Object.prototype.hasOwnProperty.call(answers,condition.question))return!1;var question=answers[condition.question],value=null==question||null===(_question$answer=question.answer)||void 0===_question$answer?void 0:_question$answer.value;return utils_operations[condition.type]("number"==typeof value?value:value||"",condition.value,questionType)}))}({conditions:rule.conditions,answers,questionType});return conditions.every((function(condition){return condition}))}))}},"./src/utils/getWarnings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>utils_getWarnings});var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const utils_castErrorsFromYup=function castErrorsFromYup(yupErrors){var warnings={};if(!yupErrors)return warnings;if(yupErrors.inner){if(0===yupErrors.inner.length)return(0,formik_esm.tP)(warnings,yupErrors.path,yupErrors.message);yupErrors.inner.forEach((function(error){(0,formik_esm.u9)(warnings,error.path)||(warnings=(0,formik_esm.tP)(warnings,error.path,error.message))}))}return warnings};const utils_getWarnings=function getWarnings(schema,values){var warnings={};if(!schema)return warnings;try{schema.validateSync(values,{abortEarly:!1})}catch(error){warnings=utils_castErrorsFromYup(error)}return warnings}},"./src/utils/hasFormikErrorsAndWarnings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function hasFormikErrorsAndWarnings(_ref){var form=_ref.form,field=_ref.field,_ref$warnings=_ref.warnings,warnings=void 0===_ref$warnings?{}:_ref$warnings,warning=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(warnings,field.name),error=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(form.errors,field.name),touched=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(form.touched,field.name);return form.submitCount>0&&touched||touched&&(error||warning)?{hasError:!!error,error,hasWarning:!!warning,warning}:{hasError:!1,hasWarning:!1}}},"./src/utils/propTypes/formikField.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({start:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,end:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})]).isRequired})},"./src/utils/propTypes/formikForm.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({touched:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({}),errors:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({})})},"./src/utils/propTypes/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./src/utils/propTypes/formikForm.js"),__webpack_require__("./src/utils/propTypes/label.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);prop_types_default().shape({name:prop_types_default().string.isRequired,lastName:prop_types_default().string.isRequired}),prop_types_default().shape({type:prop_types_default().string.isRequired,messageType:prop_types_default().oneOf(["warning","error"]).isRequired,params:prop_types_default().arrayOf(prop_types_default().shape({value:prop_types_default().number,message:prop_types_default().string.isRequired}).isRequired).isRequired})},"./src/utils/propTypes/label.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({text:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired,number:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,introduction:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})})}}]);