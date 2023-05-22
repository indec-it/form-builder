"use strict";(self.webpackChunk_indec_form_builder=self.webpackChunk_indec_form_builder||[]).push([[438],{"./node_modules/@mui/material/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Button_Button});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiButton",slot)}const Button_buttonClasses=(0,generateUtilityClasses.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const ButtonGroup_ButtonGroupContext=react.createContext({});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const commonIconStyles=ownerState=>({..."small"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:18}},..."medium"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:20}},..."large"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:22}}}),ButtonRoot=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`${ownerState.variant}${(0,capitalize.Z)(ownerState.color)}`],styles[`size${(0,capitalize.Z)(ownerState.size)}`],styles[`${ownerState.variant}Size${(0,capitalize.Z)(ownerState.size)}`],"inherit"===ownerState.color&&styles.colorInherit,ownerState.disableElevation&&styles.disableElevation,ownerState.fullWidth&&styles.fullWidth]}})((({theme,ownerState})=>{var _theme$palette$getCon,_theme$palette;const inheritContainedBackgroundColor="light"===theme.palette.mode?theme.palette.grey[300]:theme.palette.grey[800],inheritContainedHoverBackgroundColor="light"===theme.palette.mode?theme.palette.grey.A100:theme.palette.grey[700];return{...theme.typography.button,minWidth:64,padding:"6px 16px",borderRadius:(theme.vars||theme).shape.borderRadius,transition:theme.transitions.create(["background-color","box-shadow","border-color","color"],{duration:theme.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.text.primary,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},..."text"===ownerState.variant&&"inherit"!==ownerState.color&&{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},..."outlined"===ownerState.variant&&"inherit"!==ownerState.color&&{border:`1px solid ${(theme.vars||theme).palette[ownerState.color].main}`,backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},..."contained"===ownerState.variant&&{backgroundColor:theme.vars?theme.vars.palette.Button.inheritContainedHoverBg:inheritContainedHoverBackgroundColor,boxShadow:(theme.vars||theme).shadows[4],"@media (hover: none)":{boxShadow:(theme.vars||theme).shadows[2],backgroundColor:(theme.vars||theme).palette.grey[300]}},..."contained"===ownerState.variant&&"inherit"!==ownerState.color&&{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark,"@media (hover: none)":{backgroundColor:(theme.vars||theme).palette[ownerState.color].main}}},"&:active":{..."contained"===ownerState.variant&&{boxShadow:(theme.vars||theme).shadows[8]}},[`&.${Button_buttonClasses.focusVisible}`]:{..."contained"===ownerState.variant&&{boxShadow:(theme.vars||theme).shadows[6]}},[`&.${Button_buttonClasses.disabled}`]:{color:(theme.vars||theme).palette.action.disabled,..."outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.action.disabledBackground}`},..."contained"===ownerState.variant&&{color:(theme.vars||theme).palette.action.disabled,boxShadow:(theme.vars||theme).shadows[0],backgroundColor:(theme.vars||theme).palette.action.disabledBackground}},..."text"===ownerState.variant&&{padding:"6px 8px"},..."text"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main},..."outlined"===ownerState.variant&&{padding:"5px 15px",border:"1px solid currentColor"},..."outlined"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main,border:theme.vars?`1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)`:`1px solid ${(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,.5)}`},..."contained"===ownerState.variant&&{color:theme.vars?theme.vars.palette.text.primary:null==(_theme$palette$getCon=(_theme$palette=theme.palette).getContrastText)?void 0:_theme$palette$getCon.call(_theme$palette,theme.palette.grey[300]),backgroundColor:theme.vars?theme.vars.palette.Button.inheritContainedBg:inheritContainedBackgroundColor,boxShadow:(theme.vars||theme).shadows[2]},..."contained"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].contrastText,backgroundColor:(theme.vars||theme).palette[ownerState.color].main},..."inherit"===ownerState.color&&{color:"inherit",borderColor:"currentColor"},..."small"===ownerState.size&&"text"===ownerState.variant&&{padding:"4px 5px",fontSize:theme.typography.pxToRem(13)},..."large"===ownerState.size&&"text"===ownerState.variant&&{padding:"8px 11px",fontSize:theme.typography.pxToRem(15)},..."small"===ownerState.size&&"outlined"===ownerState.variant&&{padding:"3px 9px",fontSize:theme.typography.pxToRem(13)},..."large"===ownerState.size&&"outlined"===ownerState.variant&&{padding:"7px 21px",fontSize:theme.typography.pxToRem(15)},..."small"===ownerState.size&&"contained"===ownerState.variant&&{padding:"4px 10px",fontSize:theme.typography.pxToRem(13)},..."large"===ownerState.size&&"contained"===ownerState.variant&&{padding:"8px 22px",fontSize:theme.typography.pxToRem(15)},...ownerState.fullWidth&&{width:"100%"}}}),(({ownerState})=>ownerState.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Button_buttonClasses.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Button_buttonClasses.disabled}`]:{boxShadow:"none"}})),ButtonStartIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.startIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState})=>({display:"inherit",marginRight:8,marginLeft:-4,..."small"===ownerState.size&&{marginLeft:-2},...commonIconStyles(ownerState)}))),ButtonEndIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.endIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState})=>({display:"inherit",marginRight:-4,marginLeft:8,..."small"===ownerState.size&&{marginRight:-2},...commonIconStyles(ownerState)}))),Button_Button=react.forwardRef((function Button(inProps,ref){const contextProps=react.useContext(ButtonGroup_ButtonGroupContext),resolvedProps=(0,resolveProps.Z)(contextProps,inProps),props=(0,useThemeProps.Z)({props:resolvedProps,name:"MuiButton"}),{children,color="primary",component="button",className,disabled=!1,disableElevation=!1,disableFocusRipple=!1,endIcon:endIconProp,focusVisibleClassName,fullWidth=!1,size="medium",startIcon:startIconProp,type,variant="text",...other}=props,ownerState={...props,color,component,disabled,disableElevation,disableFocusRipple,fullWidth,size,type,variant},classes=(ownerState=>{const{color,disableElevation,fullWidth,size,variant,classes}=ownerState,slots={root:["root",variant,`${variant}${(0,capitalize.Z)(color)}`,`size${(0,capitalize.Z)(size)}`,`${variant}Size${(0,capitalize.Z)(size)}`,"inherit"===color&&"colorInherit",disableElevation&&"disableElevation",fullWidth&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,capitalize.Z)(size)}`],endIcon:["endIcon",`iconSize${(0,capitalize.Z)(size)}`]},composedClasses=(0,composeClasses.Z)(slots,getButtonUtilityClass,classes);return{...classes,...composedClasses}})(ownerState),startIcon=startIconProp&&(0,jsx_runtime.jsx)(ButtonStartIcon,{className:classes.startIcon,ownerState,children:startIconProp}),endIcon=endIconProp&&(0,jsx_runtime.jsx)(ButtonEndIcon,{className:classes.endIcon,ownerState,children:endIconProp});return(0,jsx_runtime.jsxs)(ButtonRoot,{ownerState,className:(0,clsx_m.Z)(contextProps.className,classes.root,className),component,disabled,focusRipple:!disableFocusRipple,focusVisibleClassName:(0,clsx_m.Z)(classes.focusVisible,focusVisibleClassName),ref,type,...other,classes,children:[startIcon,children,endIcon]})}))},"./node_modules/@mui/material/Chip/Chip.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Chip_Chip});var react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Cancel=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var useForkRef=__webpack_require__("./node_modules/@mui/material/utils/useForkRef.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getChipUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiChip",slot)}const Chip_chipClasses=(0,generateUtilityClasses.Z)("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),ChipRoot=(0,styled.ZP)("div",{name:"MuiChip",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props,{color,iconColor,clickable,onDelete,size,variant}=ownerState;return[{[`& .${Chip_chipClasses.avatar}`]:styles.avatar},{[`& .${Chip_chipClasses.avatar}`]:styles[`avatar${(0,capitalize.Z)(size)}`]},{[`& .${Chip_chipClasses.avatar}`]:styles[`avatarColor${(0,capitalize.Z)(color)}`]},{[`& .${Chip_chipClasses.icon}`]:styles.icon},{[`& .${Chip_chipClasses.icon}`]:styles[`icon${(0,capitalize.Z)(size)}`]},{[`& .${Chip_chipClasses.icon}`]:styles[`iconColor${(0,capitalize.Z)(iconColor)}`]},{[`& .${Chip_chipClasses.deleteIcon}`]:styles.deleteIcon},{[`& .${Chip_chipClasses.deleteIcon}`]:styles[`deleteIcon${(0,capitalize.Z)(size)}`]},{[`& .${Chip_chipClasses.deleteIcon}`]:styles[`deleteIconColor${(0,capitalize.Z)(color)}`]},{[`& .${Chip_chipClasses.deleteIcon}`]:styles[`deleteIcon${(0,capitalize.Z)(variant)}Color${(0,capitalize.Z)(color)}`]},styles.root,styles[`size${(0,capitalize.Z)(size)}`],styles[`color${(0,capitalize.Z)(color)}`],clickable&&styles.clickable,clickable&&"default"!==color&&styles[`clickableColor${(0,capitalize.Z)(color)})`],onDelete&&styles.deletable,onDelete&&"default"!==color&&styles[`deletableColor${(0,capitalize.Z)(color)}`],styles[variant],styles[`${variant}${(0,capitalize.Z)(color)}`]]}})((({theme,ownerState})=>{const textColor="light"===theme.palette.mode?theme.palette.grey[700]:theme.palette.grey[300];return{maxWidth:"100%",fontFamily:theme.typography.fontFamily,fontSize:theme.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(theme.vars||theme).palette.text.primary,backgroundColor:(theme.vars||theme).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:theme.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${Chip_chipClasses.disabled}`]:{opacity:(theme.vars||theme).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${Chip_chipClasses.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:theme.vars?theme.vars.palette.Chip.defaultAvatarColor:textColor,fontSize:theme.typography.pxToRem(12)},[`& .${Chip_chipClasses.avatarColorPrimary}`]:{color:(theme.vars||theme).palette.primary.contrastText,backgroundColor:(theme.vars||theme).palette.primary.dark},[`& .${Chip_chipClasses.avatarColorSecondary}`]:{color:(theme.vars||theme).palette.secondary.contrastText,backgroundColor:(theme.vars||theme).palette.secondary.dark},[`& .${Chip_chipClasses.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:theme.typography.pxToRem(10)},[`& .${Chip_chipClasses.icon}`]:{marginLeft:5,marginRight:-6,..."small"===ownerState.size&&{fontSize:18,marginLeft:4,marginRight:-4},...ownerState.iconColor===ownerState.color&&{color:theme.vars?theme.vars.palette.Chip.defaultIconColor:textColor,..."default"!==ownerState.color&&{color:"inherit"}}},[`& .${Chip_chipClasses.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / 0.26)`:(0,colorManipulator.Fq)(theme.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / 0.4)`:(0,colorManipulator.Fq)(theme.palette.text.primary,.4)},..."small"===ownerState.size&&{fontSize:16,marginRight:4,marginLeft:-4},..."default"!==ownerState.color&&{color:theme.vars?`rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].contrastText,.7),"&:hover, &:active":{color:(theme.vars||theme).palette[ownerState.color].contrastText}}},..."small"===ownerState.size&&{height:24},..."default"!==ownerState.color&&{backgroundColor:(theme.vars||theme).palette[ownerState.color].main,color:(theme.vars||theme).palette[ownerState.color].contrastText},...ownerState.onDelete&&{[`&.${Chip_chipClasses.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.action.selected,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)}},...ownerState.onDelete&&"default"!==ownerState.color&&{[`&.${Chip_chipClasses.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark}}}}),(({theme,ownerState})=>({...ownerState.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))`:(0,colorManipulator.Fq)(theme.palette.action.selected,theme.palette.action.selectedOpacity+theme.palette.action.hoverOpacity)},[`&.${Chip_chipClasses.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))`:(0,colorManipulator.Fq)(theme.palette.action.selected,theme.palette.action.selectedOpacity+theme.palette.action.focusOpacity)},"&:active":{boxShadow:(theme.vars||theme).shadows[1]}},...ownerState.clickable&&"default"!==ownerState.color&&{[`&:hover, &.${Chip_chipClasses.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark}}})),(({theme,ownerState})=>({..."outlined"===ownerState.variant&&{backgroundColor:"transparent",border:theme.vars?`1px solid ${theme.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===theme.palette.mode?theme.palette.grey[400]:theme.palette.grey[700]}`,[`&.${Chip_chipClasses.clickable}:hover`]:{backgroundColor:(theme.vars||theme).palette.action.hover},[`&.${Chip_chipClasses.focusVisible}`]:{backgroundColor:(theme.vars||theme).palette.action.focus},[`& .${Chip_chipClasses.avatar}`]:{marginLeft:4},[`& .${Chip_chipClasses.avatarSmall}`]:{marginLeft:2},[`& .${Chip_chipClasses.icon}`]:{marginLeft:4},[`& .${Chip_chipClasses.iconSmall}`]:{marginLeft:2},[`& .${Chip_chipClasses.deleteIcon}`]:{marginRight:5},[`& .${Chip_chipClasses.deleteIconSmall}`]:{marginRight:3}},..."outlined"===ownerState.variant&&"default"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main,border:`1px solid ${theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,.7)}`,[`&.${Chip_chipClasses.clickable}:hover`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity)},[`&.${Chip_chipClasses.focusVisible}`]:{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.focusOpacity)},[`& .${Chip_chipClasses.deleteIcon}`]:{color:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,.7),"&:hover, &:active":{color:(theme.vars||theme).palette[ownerState.color].main}}}}))),ChipLabel=(0,styled.ZP)("span",{name:"MuiChip",slot:"Label",overridesResolver:(props,styles)=>{const{ownerState}=props,{size}=ownerState;return[styles.label,styles[`label${(0,capitalize.Z)(size)}`]]}})((({ownerState})=>({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",..."small"===ownerState.size&&{paddingLeft:8,paddingRight:8}})));function isDeleteKeyboardEvent(keyboardEvent){return"Backspace"===keyboardEvent.key||"Delete"===keyboardEvent.key}const Chip_Chip=react.forwardRef((function Chip(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiChip"}),{avatar:avatarProp,className,clickable:clickableProp,color="default",component:ComponentProp,deleteIcon:deleteIconProp,disabled=!1,icon:iconProp,label,onClick,onDelete,onKeyDown,onKeyUp,size="medium",variant="filled",tabIndex,skipFocusWhenDisabled=!1,...other}=props,chipRef=react.useRef(null),handleRef=(0,useForkRef.Z)(chipRef,ref),handleDeleteIconClick=event=>{event.stopPropagation(),onDelete&&onDelete(event)},clickable=!(!1===clickableProp||!onClick)||clickableProp,component=clickable||onDelete?ButtonBase.Z:ComponentProp||"div",ownerState={...props,component,disabled,size,color,iconColor:react.isValidElement(iconProp)&&iconProp.props.color||color,onDelete:!!onDelete,clickable,variant},classes=(ownerState=>{const{classes,disabled,size,color,iconColor,onDelete,clickable,variant}=ownerState,slots={root:["root",variant,disabled&&"disabled",`size${(0,capitalize.Z)(size)}`,`color${(0,capitalize.Z)(color)}`,clickable&&"clickable",clickable&&`clickableColor${(0,capitalize.Z)(color)}`,onDelete&&"deletable",onDelete&&`deletableColor${(0,capitalize.Z)(color)}`,`${variant}${(0,capitalize.Z)(color)}`],label:["label",`label${(0,capitalize.Z)(size)}`],avatar:["avatar",`avatar${(0,capitalize.Z)(size)}`,`avatarColor${(0,capitalize.Z)(color)}`],icon:["icon",`icon${(0,capitalize.Z)(size)}`,`iconColor${(0,capitalize.Z)(iconColor)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,capitalize.Z)(size)}`,`deleteIconColor${(0,capitalize.Z)(color)}`,`deleteIcon${(0,capitalize.Z)(variant)}Color${(0,capitalize.Z)(color)}`]};return(0,composeClasses.Z)(slots,getChipUtilityClass,classes)})(ownerState),moreProps=component===ButtonBase.Z?{component:ComponentProp||"div",focusVisibleClassName:classes.focusVisible,...onDelete&&{disableRipple:!0}}:{};let deleteIcon=null;onDelete&&(deleteIcon=deleteIconProp&&react.isValidElement(deleteIconProp)?react.cloneElement(deleteIconProp,{className:(0,clsx_m.Z)(deleteIconProp.props.className,classes.deleteIcon),onClick:handleDeleteIconClick}):(0,jsx_runtime.jsx)(Cancel,{className:(0,clsx_m.Z)(classes.deleteIcon),onClick:handleDeleteIconClick}));let avatar=null;avatarProp&&react.isValidElement(avatarProp)&&(avatar=react.cloneElement(avatarProp,{className:(0,clsx_m.Z)(classes.avatar,avatarProp.props.className)}));let icon=null;return iconProp&&react.isValidElement(iconProp)&&(icon=react.cloneElement(iconProp,{className:(0,clsx_m.Z)(classes.icon,iconProp.props.className)})),(0,jsx_runtime.jsxs)(ChipRoot,{as:component,className:(0,clsx_m.Z)(classes.root,className),disabled:!(!clickable||!disabled)||void 0,onClick,onKeyDown:event=>{event.currentTarget===event.target&&isDeleteKeyboardEvent(event)&&event.preventDefault(),onKeyDown&&onKeyDown(event)},onKeyUp:event=>{event.currentTarget===event.target&&(onDelete&&isDeleteKeyboardEvent(event)?onDelete(event):"Escape"===event.key&&chipRef.current&&chipRef.current.blur()),onKeyUp&&onKeyUp(event)},ref:handleRef,tabIndex:skipFocusWhenDisabled&&disabled?-1:tabIndex,ownerState,...moreProps,...other,children:[avatar||icon,(0,jsx_runtime.jsx)(ChipLabel,{className:(0,clsx_m.Z)(classes.label),ownerState,children:label}),deleteIcon]})}))}}]);