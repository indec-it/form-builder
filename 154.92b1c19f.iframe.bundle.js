"use strict";(self.webpackChunk_indec_form_builder=self.webpackChunk_indec_form_builder||[]).push([[154],{"./src/components/FormBuilder/Modals/Modals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Modals_Modals});var formik_esm=__webpack_require__("./node_modules/formik/dist/formik.esm.js"),Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),Typography=__webpack_require__("./node_modules/@mui/material/Typography/Typography.js"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),Container=__webpack_require__("./node_modules/@mui/material/Container/Container.js"),Divider=__webpack_require__("./node_modules/@mui/material/Divider/Divider.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Modal=__webpack_require__("./node_modules/@mui/material/Modal/Modal.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Cancel=__webpack_require__("./node_modules/@mui/icons-material/Cancel.js"),modals=__webpack_require__("./src/constants/modals.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Modal_Modal(_ref){var modal=_ref.modal,onClose=_ref.onClose,onAccept=_ref.onAccept,children=_ref.children,acceptButtonLabel=_ref.acceptButtonLabel,cancelButtonLabel=_ref.cancelButtonLabel,open=_ref.open;return(0,jsx_runtime.jsx)(Modal.Z,{open:modal>0&&open,onClose,children:(0,jsx_runtime.jsx)(Box.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",bgcolor:"background.paper",p:4,borderRadius:"20px"},children:(0,jsx_runtime.jsxs)(Container.Z,{children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",justifyContent:"flex-end"},children:(0,jsx_runtime.jsx)(IconButton.Z,{"data-testid":"close-button-icon",onClick:onClose,children:(0,jsx_runtime.jsx)(Cancel.Z,{color:"info"})})}),(0,jsx_runtime.jsx)(Divider.Z,{}),children,(0,jsx_runtime.jsxs)(Stack.Z,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",p:2,spacing:{xs:1,sm:2,md:4},children:[(0,jsx_runtime.jsx)(Button.Z,{"data-testid":"close-button",onClick:onClose,children:cancelButtonLabel}),onAccept&&(0,jsx_runtime.jsx)(Button.Z,{variant:"contained","data-testid":"accept-button",onClick:function onClick(){return onAccept(modal)},children:acceptButtonLabel})]})]})})})}Modal_Modal.displayName="Modal",Modal_Modal.propTypes={},Modal_Modal.defaultProps={onAccept:null,acceptButtonLabel:"Aceptar",cancelButtonLabel:"Cancelar",modal:void 0,children:void 0,open:!0},Modal_Modal.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{onAccept:{defaultValue:{value:"null",computed:!1},description:"",type:{name:"func"},required:!1},acceptButtonLabel:{defaultValue:{value:"'Aceptar'",computed:!1},description:"",type:{name:"string"},required:!1},cancelButtonLabel:{defaultValue:{value:"'Cancelar'",computed:!1},description:"",type:{name:"string"},required:!1},modal:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",computed:!0,value:"Object.values(modals)"},required:!1},children:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"union",value:[{name:"node"},{name:"arrayOf",value:{name:"node"}}]},required:!1},open:{defaultValue:{value:"true",computed:!1},description:"",type:{name:"bool"},required:!1},onClose:{description:"",type:{name:"func"},required:!0}}};const components_Modal=Modal_Modal;var Radio=__webpack_require__("./src/components/Radio/index.js"),_excluded=["modal","onAccept","open","onClose"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var getChildren=function getChildren(modal,_ref){var options=_ref.options,label=_ref.label,name=_ref.name;switch(modal){case modals.Z.CONFIRM_DELETE_SECTION_MODAL:return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Box.Z,{sx:{display:"flex",justifyContent:"center"},children:(0,jsx_runtime.jsx)(Typography.Z,{fontWeight:"bold",children:"Atención"})}),(0,jsx_runtime.jsx)(Typography.Z,{children:"¿Esta seguro que desea borrar esta sección?"})]});case modals.Z.INTERRUPTION_MODAL:return(0,jsx_runtime.jsx)(formik_esm.Rt,{component:Radio.Z,options,label,name,required:!0,readOnlyMode:!1});default:return null}};function Modals(_ref2){var modal=_ref2.modal,onAccept=_ref2.onAccept,open=_ref2.open,onClose=_ref2.onClose,props=_objectWithoutProperties(_ref2,_excluded);return(0,jsx_runtime.jsx)(components_Modal,{open,modal,cancelButtonLabel:"Cerrar",onAccept,onClose,children:getChildren(modal,props)})}Modals.displayName="Modals",Modals.propTypes={},Modals.defaultProps={onAccept:void 0,selectedSection:void 0,modal:void 0,open:!1},Modals.__docgenInfo={description:"",methods:[],displayName:"Modals",props:{onAccept:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"func"},required:!1},selectedSection:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"number"},required:!1},modal:{defaultValue:{value:"undefined",computed:!0},description:"",type:{name:"enum",computed:!0,value:"Object.values(modals)"},required:!1},open:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},onClose:{description:"",type:{name:"func"},required:!0}}};const Modals_Modals=Modals},"./src/components/Radio/Radio.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Radio_Radio});var IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),Radio=__webpack_require__("./node_modules/@mui/material/Radio/Radio.js"),RadioGroup=__webpack_require__("./node_modules/@mui/material/RadioGroup/RadioGroup.js"),FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Stack=__webpack_require__("./node_modules/@mui/material/Stack/Stack.js"),Clear=__webpack_require__("./node_modules/@mui/icons-material/Clear.js"),FieldMessage=__webpack_require__("./src/components/FieldMessage/index.js"),InputLabel=__webpack_require__("./src/components/InputLabel/index.js");const breakpoints_EXTRA_SMALL="xs",breakpoints_SMALL="sm",breakpoints_MEDIUM="md",breakpoints_LARGE="lg",breakpoints_EXTRA_LARGE="xl";var useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),useMediaQuery=__webpack_require__("./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");const hooks_useBreakpoint=function useBreakpoint(){var theme=(0,useTheme.Z)(),mq_xs=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_EXTRA_SMALL)),mq_sm=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_SMALL)),mq_md=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_MEDIUM)),mq_lg=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_LARGE)),mq_xl=(0,useMediaQuery.Z)(theme.breakpoints.only(breakpoints_EXTRA_LARGE));return{breakpoint:function getBreakPointName(){return mq_xs?breakpoints_EXTRA_SMALL:mq_sm?breakpoints_SMALL:mq_md?breakpoints_MEDIUM:mq_lg?breakpoints_LARGE:mq_xl?breakpoints_EXTRA_LARGE:null}()}};__webpack_require__("./src/utils/propTypes/index.js");var Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MobileRadio(_ref){var options=_ref.options,field=_ref.field,disabled=_ref.disabled,label=_ref.label,form=_ref.form,warnings=_ref.warnings;return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",spacing:2,sx:{width:"100%"},"data-testid":"radio",children:[(0,jsx_runtime.jsx)(InputLabel.Z,{warnings,form,field,label,disabled}),options.map((function(option,index){return(0,jsx_runtime.jsx)(Button.Z,{"data-testid":"radio-".concat(index),disabled,variant:option.value===field.value?"contained":"outlined",onClick:function onClick(){return form.setFieldValue(field.name,option.value===field.value?"":option.value)},size:"small",children:option.label},option.value)})),(0,jsx_runtime.jsx)(FieldMessage.Z,{form,field,warnings,disabled})]})}MobileRadio.displayName="MobileRadio",MobileRadio.propTypes={},MobileRadio.defaultProps={warnings:{},disabled:!1},MobileRadio.__docgenInfo={description:"",methods:[],displayName:"MobileRadio",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!0},field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0}}}},required:!0}}};const Radio_MobileRadio=MobileRadio;function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Radio_Radio(_ref){var options=_ref.options,field=_ref.field,disabled=_ref.disabled,label=_ref.label,form=_ref.form,warnings=_ref.warnings;return hooks_useBreakpoint().breakpoint===breakpoints_EXTRA_SMALL?(0,jsx_runtime.jsx)(Radio_MobileRadio,{options,field,disabled,label,form,warnings}):(0,jsx_runtime.jsxs)(Stack.Z,{direction:"column",spacing:2,sx:{width:"100%"},"data-testid":"radio",children:[(0,jsx_runtime.jsx)(InputLabel.Z,{warnings,form,field,label,disabled}),(0,jsx_runtime.jsx)(RadioGroup.Z,_objectSpread(_objectSpread({},field),{},{children:options.map((function(option,index){return(0,jsx_runtime.jsxs)(Stack.Z,{direction:"row",children:[(0,jsx_runtime.jsx)(FormControlLabel.Z,{"data-testid":"radio-".concat(index),value:option.value,control:(0,jsx_runtime.jsx)(Radio.Z,{}),label:option.label,disabled,checked:option.value===field.value}),option.value===field.value&&!disabled&&(0,jsx_runtime.jsx)(IconButton.Z,{onClick:function onClick(){return form.setFieldValue(field.name,"")},color:"error","data-testid":"clean-option-".concat(index),children:(0,jsx_runtime.jsx)(Clear.Z,{})})]},option.value)}))})),(0,jsx_runtime.jsx)(FieldMessage.Z,{form,field,warnings,disabled})]})}Radio_Radio.propTypes={},Radio_Radio.defaultProps={warnings:{},disabled:!1},Radio_Radio.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{warnings:{defaultValue:{value:"{}",computed:!1},description:"",type:{name:"shape",value:{}},required:!1},disabled:{defaultValue:{value:"false",computed:!1},description:"",type:{name:"bool"},required:!1},label:{description:"",type:{name:"string"},required:!0},field:{description:"",type:{name:"custom",raw:"formikField.isRequired"},required:!1},form:{description:"",type:{name:"custom",raw:"formikForm.isRequired"},required:!1},options:{description:"",type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"union",value:[{name:"string"},{name:"number"}],required:!0},label:{name:"string",required:!0}}}},required:!0}}};const components_Radio_Radio=Radio_Radio},"./src/components/Radio/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./src/components/Radio/Radio.js").Z},"./src/constants/modals.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={INTERRUPTION_MODAL:2,CONFIRM_DELETE_SECTION_MODAL:3}}}]);