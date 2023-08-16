"use strict";(self.webpackChunk_indec_form_builder=self.webpackChunk_indec_form_builder||[]).push([[612],{"./src/components/Checkbox/Checkbox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,WithErrors:()=>WithErrors,WithReadOnlyMode:()=>WithReadOnlyMode,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var formik__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),_utils_getWarnings__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/utils/getWarnings.js"),_utils_getSchemas__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/getSchemas.js"),_Checkbox__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Checkbox/Checkbox.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["withErrors","withWarnings","initialValues"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Checkbox",component:_Checkbox__WEBPACK_IMPORTED_MODULE_4__.Z,argTypes:{backgroundColor:{control:"color"}}};var options=[{id:1,name:"S1P1O1",value:"1",label:"Option 1",subOptions:[{id:1}]},{id:2,name:"S1P1O1",value:"2",label:"Option 2",subOptions:[{id:1}]},{id:3,name:"S1P1O1",value:"3",label:"Option 3",subOptions:[{id:1}]}],section={id:1,name:"S1",label:"Sección 1",questions:[{id:1,label:"Write your name",name:"S1P1",number:"1",type:5,options,validations:[{id:1,rules:[{id:1,conditions:[{id:1,question:"S1P1",value:1,type:"lt",section:"S2"}]}],message:{text:"Must select an option",type:"error"}}],userVarName:"s1p1"}]};function Template(args){var _getSchemas=(0,_utils_getSchemas__WEBPACK_IMPORTED_MODULE_3__.Z)({section}),validateSchema=_getSchemas.errorSchema,warningSchema=_getSchemas.warningSchema,withErrors=args.withErrors,withWarnings=args.withWarnings,initialValues=args.initialValues,props=_objectWithoutProperties(args,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.J9,{initialValues:{S1:[{S1P1:{id:1,answer:{value:initialValues||[]}}}]},validationSchema:withErrors?validateSchema:null,onSubmit:function onSubmit(){},enableReinitialize:!0,children:function children(_ref){var values=_ref.values,submitForm=_ref.submitForm,warnings=withWarnings&&(0,_utils_getWarnings__WEBPACK_IMPORTED_MODULE_2__.Z)(warningSchema,values)||{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(formik__WEBPACK_IMPORTED_MODULE_1__.gN,_objectSpread(_objectSpread({component:_Checkbox__WEBPACK_IMPORTED_MODULE_4__.Z},props),{},{warnings})),withErrors?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_6__.Z,{onClick:submitForm,variant:"contained",children:"Click to validate form"}):null]})}})}Template.displayName="Template";var Basic=Template.bind({});Basic.args={disabled:!1,label:"Select an option",required:!1,name:"S1.0.S1P1.answer.value",warnings:{},options};var WithReadOnlyMode=Template.bind({});WithReadOnlyMode.args={disabled:!0,label:"Select an option",required:!1,name:"S1.0.S1P1.answer.value",warnings:{},options,initialValues:["2"]};var WithErrors=Template.bind({});WithErrors.args={disabled:!1,label:"Select an option",required:!0,name:"S1.0.S1P1.answer.value",warnings:{},withErrors:!0,options};var __namedExportsOrder=["Basic","WithReadOnlyMode","WithErrors"]},"./src/components/Checkbox/Checkbox.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Checkbox_Checkbox});var FormGroup=__webpack_require__("./node_modules/@mui/material/FormGroup/FormGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),SwitchBase=__webpack_require__("./node_modules/@mui/material/internal/SwitchBase.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckBoxOutlineBlank=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),CheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),IndeterminateCheckBox=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");var capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getCheckboxUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiCheckbox",slot)}const Checkbox_checkboxClasses=(0,generateUtilityClasses.Z)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),CheckboxRoot=(0,styled.ZP)(SwitchBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiCheckbox",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,ownerState.indeterminate&&styles.indeterminate,"default"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`]]}})((({theme,ownerState})=>({color:(theme.vars||theme).palette.text.secondary,...!ownerState.disableRipple&&{"&:hover":{backgroundColor:theme.vars?`rgba(${"default"===ownerState.color?theme.vars.palette.action.activeChannel:theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)("default"===ownerState.color?theme.palette.action.active:theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},..."default"!==ownerState.color&&{[`&.${Checkbox_checkboxClasses.checked}, &.${Checkbox_checkboxClasses.indeterminate}`]:{color:(theme.vars||theme).palette[ownerState.color].main},[`&.${Checkbox_checkboxClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled}}}))),defaultCheckedIcon=(0,jsx_runtime.jsx)(CheckBox,{}),defaultIcon=(0,jsx_runtime.jsx)(CheckBoxOutlineBlank,{}),defaultIndeterminateIcon=(0,jsx_runtime.jsx)(IndeterminateCheckBox,{}),Checkbox_Checkbox=react.forwardRef((function Checkbox(inProps,ref){var _icon$props$fontSize,_indeterminateIcon$pr;const props=(0,useThemeProps.Z)({props:inProps,name:"MuiCheckbox"}),{checkedIcon=defaultCheckedIcon,color="primary",icon:iconProp=defaultIcon,indeterminate=!1,indeterminateIcon:indeterminateIconProp=defaultIndeterminateIcon,inputProps,size="medium",className,...other}=props,icon=indeterminate?indeterminateIconProp:iconProp,indeterminateIcon=indeterminate?indeterminateIconProp:checkedIcon,ownerState={...props,color,indeterminate,size},classes=(ownerState=>{const{classes,indeterminate,color}=ownerState,slots={root:["root",indeterminate&&"indeterminate",`color${(0,capitalize.Z)(color)}`]},composedClasses=(0,composeClasses.Z)(slots,getCheckboxUtilityClass,classes);return{...classes,...composedClasses}})(ownerState);return(0,jsx_runtime.jsx)(CheckboxRoot,{type:"checkbox",inputProps:{"data-indeterminate":indeterminate,...inputProps},icon:react.cloneElement(icon,{fontSize:null!=(_icon$props$fontSize=icon.props.fontSize)?_icon$props$fontSize:size}),checkedIcon:react.cloneElement(indeterminateIcon,{fontSize:null!=(_indeterminateIcon$pr=indeterminateIcon.props.fontSize)?_indeterminateIcon$pr:size}),ownerState,ref,className:(0,clsx_m.Z)(classes.root,className),...other,classes})}));var Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),FieldMessage=__webpack_require__("./src/components/FieldMessage/index.js"),InputLabel=__webpack_require__("./src/components/InputLabel/index.js");__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./src/utils/propTypes/formikForm.js"),__webpack_require__("./src/utils/propTypes/option.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Checkbox_Checkbox_Checkbox(_ref2){var options=_ref2.options,label=_ref2.label,field=_ref2.field,form=_ref2.form,disabled=_ref2.disabled,required=_ref2.required,warnings=_ref2.warnings;return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",spacing:2,sx:{width:"100%"},children:[(0,jsx_runtime.jsx)(InputLabel.Z,{warnings,required,form,field,label,disabled}),(0,jsx_runtime.jsx)(FormGroup.Z,{children:options.map((function(option,index){return(0,jsx_runtime.jsx)(FormControlLabel.Z,{"data-testid":"checkbox-".concat(index),control:(0,jsx_runtime.jsx)(Checkbox_Checkbox,{"data-testid":"option-".concat(index),checked:field.value.includes(option.value),onChange:function onChange(e){return function handleChecked(e,selectedValue,_ref,setFieldValue){var name=_ref.name,value=_ref.value;setFieldValue(name,e.target.checked?[].concat(_toConsumableArray(value),[selectedValue]):value.filter((function(currentValue){return currentValue!==selectedValue})))}(e,option.value,field,form.setFieldValue)}}),label:option.label,disabled},option.value)}))}),(0,jsx_runtime.jsx)(FieldMessage.Z,{warnings,form,field,disabled})]})}Checkbox_Checkbox_Checkbox.displayName="Checkbox",Checkbox_Checkbox_Checkbox.propTypes={},Checkbox_Checkbox_Checkbox.defaultProps={required:!1,disabled:!1},Checkbox_Checkbox_Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{required:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!0},options:{description:"",type:{name:"arrayOf",value:{name:"custom",raw:"optionPropTypes"}},required:!0},field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},warnings:{description:"",type:{name:"shape",value:{}},required:!0}}};const components_Checkbox_Checkbox=Checkbox_Checkbox_Checkbox},"./src/components/FieldMessage/FieldMessage.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./src/utils/propTypes/index.js"),__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),alertStyles={justifyContent:"center",mt:2};function FieldMessage(_ref){var form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_1__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,warning=_hasFormikErrorsAndWa.warning,hasError=_hasFormikErrorsAndWa.hasError,error=_hasFormikErrorsAndWa.error;return hasError&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"error",sx:alertStyles,children:error}):hasWarning&&!disabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_3__.Z,{severity:"warning",sx:alertStyles,children:warning}):null}FieldMessage.propTypes={},FieldMessage.__docgenInfo={description:"",methods:[],displayName:"FieldMessage",props:{field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0},warnings:{description:"",type:{name:"shape",value:{}},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=FieldMessage},"./src/components/FieldMessage/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/FieldMessage/FieldMessage.js").Z},"./src/components/InputLabel/InputLabel.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/InputLabel/InputLabel.js"),_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/icons-material/Error.js"),_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/icons-material/Warning.js"),_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/hasFormikErrorsAndWarnings.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/utils/propTypes/formikForm.js"),__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function InputLabel(_ref){var required=_ref.required,label=_ref.label,form=_ref.form,field=_ref.field,disabled=_ref.disabled,warnings=_ref.warnings,_hasFormikErrorsAndWa=(0,_utils_hasFormikErrorsAndWarnings__WEBPACK_IMPORTED_MODULE_0__.Z)({form,field,warnings}),hasWarning=_hasFormikErrorsAndWa.hasWarning,hasError=_hasFormikErrorsAndWa.hasError;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Stack__WEBPACK_IMPORTED_MODULE_4__.Z,{direction:"row",spacing:2,"data-testid":"input-label",children:[hasError&&!disabled&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Error__WEBPACK_IMPORTED_MODULE_6__.Z,{color:"error","data-testid":"error-icon"})}),hasWarning&&!disabled&&!hasError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_Warning__WEBPACK_IMPORTED_MODULE_7__.Z,{color:"warning","data-testid":"warning-icon"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__.Z,{mb:.5,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_8__.Z,{required,children:label})})]})}InputLabel.displayName="InputLabel",InputLabel.propTypes={},InputLabel.defaultProps={warnings:{}},InputLabel.__docgenInfo={description:"",methods:[],displayName:"InputLabel",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},label:{description:"",type:{name:"string"},required:!0},required:{description:"",type:{name:"bool"},required:!0},form:{description:"",type:{name:"custom",raw:"formikFormPropTypes.isRequired"},required:!1},field:{description:"",type:{name:"custom",raw:"formikFieldPropTypes.isRequired"},required:!1},disabled:{description:"",type:{name:"bool"},required:!0}}};const __WEBPACK_DEFAULT_EXPORT__=InputLabel},"./src/components/InputLabel/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/InputLabel/InputLabel.js").Z},"./src/constants/dateTypes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={DATE_WITH_HOUR:"dateWithHour",DATE_WITHOUT_HOUR:"dateWithoutHour",RANGE_WITH_HOUR:"rangeWithHour",RANGE_WITHOUT_HOUR:"rangeWithoutHour"}},"./src/constants/questionTypes.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={TEXT_FIELD:1,NUMERIC_FIELD:2,DROPDOWN:3,RADIO:4,CHECKBOX:5,DATE:6,RADIO_TABLE:7}},"./src/utils/castArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function castArray(values){return Array.isArray(values)?values:[values]}},"./src/utils/getSchemas.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>utils_getSchemas});var index_esm=__webpack_require__("./node_modules/yup/index.esm.js"),dateTypes=__webpack_require__("./src/constants/dateTypes.js"),questionTypes=__webpack_require__("./src/constants/questionTypes.js"),castArray=__webpack_require__("./src/utils/castArray.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var isString=function isString(a){return"string"==typeof a},operations={eq:function eq(a,b){return a===b},ne:function ne(a,b){return a!==b},gt:function gt(a,b){return isString(a)?a.length>b:a>b},gte:function gte(a,b){return isString(a)?a.length>=b:a>=b},lt:function lt(a,b){return isString(a)?a.length<b:a<b},lte:function lte(a,b){return isString(a)?a.length<=b:a<=b},in:function _in(a,b){return a.includes(b)},nin:function nin(a,b){return!a.includes(b)}},handleValidations=function handleValidations(_ref2){var validator=_ref2.validator,validations=_ref2.validations,type=_ref2.type,opts=_ref2.opts,answers=_ref2.answers,newValidator=validator;return validations.forEach((function(validation){var validationType=validation.type,messageType=validation.message.type;if(!("required"===validationType&&type===questionTypes.Z.RADIO_TABLE||"warning"===messageType&&"warning"!==opts.schemaType||"error"===messageType&&"error"!==opts.schemaType)){var section=answers;newValidator=newValidator.test("custom-validation",validation.message.text,(function(){return!validation.rules.map((function(rule){return rule.conditions.map((function(condition){var _section$condition$qu,_section$condition$qu2;return!!Object.prototype.hasOwnProperty.call(section,condition.question)&&operations[condition.type]((null===(_section$condition$qu=section[condition.question])||void 0===_section$condition$qu||null===(_section$condition$qu2=_section$condition$qu.answer)||void 0===_section$condition$qu2?void 0:_section$condition$qu2.value)||"",condition.value)}))})).every((function(rule){return rule.some((function(value){return!0===value}))}))||this.createError({path:this.path,message:validation.message.text})}))}})),newValidator},buildAnswerObj=function buildAnswerObj(_ref3){var _ref3$values=_ref3.values,values=void 0===_ref3$values?[]:_ref3$values,subQuestions=_ref3.subQuestions,validator=_ref3.validator,multiple=_ref3.multiple,opts=_ref3.opts,defaultSchema=index_esm.Ry({value:validator});if(subQuestions.length>0){var valuesToArray=multiple&&values?values.map((function(value){return value.value})):(0,castArray.Z)(values.value),selectedQuestions=function buildSubQuestionsValidations(subQuestions,opts){return subQuestions.reduce((function(acc,currentValue){var subQuestionValidator=index_esm.Z_(),subQuestionValidations=currentValue.validations;return subQuestionValidator=handleValidations({validator:subQuestionValidator,validations:subQuestionValidations,type:currentValue.type,opts}),acc[currentValue.name]=index_esm.Ry({answer:index_esm.Ry({value:subQuestionValidator})}),acc}),{})}(subQuestions.filter((function(subQuestion){return valuesToArray.includes(subQuestion.optionId.toString())})),opts);defaultSchema=defaultSchema.concat(index_esm.Ry({specifications:index_esm.Ry(selectedQuestions)}))}return multiple?index_esm.IX().of(defaultSchema):defaultSchema};function buildYupSchema(schema,config,values){var _requiredField$messag,opts=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},schemaWithValidations=schema,name=config.name,type=config.type,validations=config.validations,options=config.options,metadata=config.metadata,multiple=config.multiple,_config$subQuestions=config.subQuestions,subQuestions=void 0===_config$subQuestions?[]:_config$subQuestions,requiredField=validations.find((function(validation){return"required"===validation.type})),validator=function getValidatorType(type,options,_ref){var isRequired=_ref.isRequired,message=_ref.message,metadata=_ref.metadata;switch(type){case questionTypes.Z.TEXT_FIELD:case questionTypes.Z.DROPDOWN:case questionTypes.Z.RADIO:return index_esm.Z_();case questionTypes.Z.NUMERIC_FIELD:return index_esm.Rx().transform((function(value){return Number.isNaN(value)||null==value||""===value?0:value}));case questionTypes.Z.CHECKBOX:return index_esm.IX().of(index_esm.Z_());case questionTypes.Z.RADIO_TABLE:var opts=options.reduce((function(accumulator,currentValue){return _objectSpread(_objectSpread({},accumulator),{},_defineProperty({},currentValue.name,isRequired?index_esm.Z_().required(message):index_esm.Z_()))}),{});return index_esm.Ry(opts);case questionTypes.Z.DATE:var field=isRequired?index_esm.Z_().required(message):index_esm.Z_();return[dateTypes.Z.RANGE_WITHOUT_HOUR,dateTypes.Z.RANGE_WITH_HOUR].includes(metadata.dateType)?index_esm.Ry({start:field,end:field}):index_esm.Z_();default:return null}}(type,options,{isRequired:!!requiredField,message:null==requiredField||null===(_requiredField$messag=requiredField.message)||void 0===_requiredField$messag?void 0:_requiredField$messag.text,metadata});return validator?(validator=handleValidations({validator,validations,type,opts,answers:values}),schemaWithValidations[name]=index_esm.Ry({id:index_esm.Rx().required(),answer:index_esm.Vo((function(answerValues){return buildAnswerObj({values:answerValues,type,subQuestions,validator,multiple,opts})}))}),schemaWithValidations):schemaWithValidations}function getSchemas_typeof(obj){return getSchemas_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},getSchemas_typeof(obj)}function getSchemas_defineProperty(obj,key,value){return(key=function getSchemas_toPropertyKey(arg){var key=function getSchemas_toPrimitive(input,hint){if("object"!==getSchemas_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==getSchemas_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===getSchemas_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var getSchema=function getSchema(section,schemaType){return index_esm.Ry(getSchemas_defineProperty({},section.name,index_esm.IX().of(index_esm.Vo((function(values){return index_esm.Ry(function schema(sectionValues){return section.questions.reduce((function(acc,currentValue){return buildYupSchema(acc,currentValue,sectionValues,{schemaType})}),{})}(values))})))))};const utils_getSchemas=function getSchemas(_ref){var _ref$section=_ref.section,section=void 0===_ref$section?{}:_ref$section;return{errorSchema:getSchema(section,"error"),warningSchema:getSchema(section,"warning")}}},"./src/utils/getWarnings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>utils_getWarnings});var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const utils_castErrorsFromYup=function castErrorsFromYup(yupErrors){var warnings={};if(!yupErrors)return warnings;if(yupErrors.inner){if(0===yupErrors.inner.length)return(0,formik_esm.tP)(warnings,yupErrors.path,yupErrors.message);yupErrors.inner.forEach((function(error){(0,formik_esm.u9)(warnings,error.path)||(warnings=(0,formik_esm.tP)(warnings,error.path,error.message))}))}return warnings};const utils_getWarnings=function getWarnings(schema,values){var warnings={};if(!schema)return warnings;try{schema.validateSync(values,{abortEarly:!1})}catch(error){warnings=utils_castErrorsFromYup(error)}return warnings}},"./src/utils/hasFormikErrorsAndWarnings.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/formik/dist/formik.esm.js");const __WEBPACK_DEFAULT_EXPORT__=function hasFormikErrorsAndWarnings(_ref){var form=_ref.form,field=_ref.field,_ref$warnings=_ref.warnings,warnings=void 0===_ref$warnings?{}:_ref$warnings,warning=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(warnings,field.name),error=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(form.errors,field.name),touched=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u9)(form.touched,field.name),formSubmittedOrTouched=form.submitCount>0||touched;return{hasError:!(!formSubmittedOrTouched||!error),error,hasWarning:!(!formSubmittedOrTouched||!warning),warning}}},"./src/utils/propTypes/formikField.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({name:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({start:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,end:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string})]).isRequired})},"./src/utils/propTypes/formikForm.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({touched:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({}),errors:prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({})})},"./src/utils/propTypes/index.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./src/utils/propTypes/formikField.js"),__webpack_require__("./src/utils/propTypes/formikForm.js");var prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types);prop_types_default().shape({name:prop_types_default().string.isRequired,lastName:prop_types_default().string.isRequired}),prop_types_default().shape({type:prop_types_default().string.isRequired,messageType:prop_types_default().oneOf(["warning","error"]).isRequired,params:prop_types_default().arrayOf(prop_types_default().shape({value:prop_types_default().number,message:prop_types_default().string.isRequired}).isRequired).isRequired})},"./src/utils/propTypes/option.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{var prop_types__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({id:prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired,value:prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default().string,prop_types__WEBPACK_IMPORTED_MODULE_0___default().number]).isRequired,label:prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired})}}]);