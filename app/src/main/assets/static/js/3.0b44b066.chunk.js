(this["webpackJsonpfamily-fe"]=this["webpackJsonpfamily-fe"]||[]).push([[3],{259:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(0),c=a.n(n),o=a(55),r=a(225),i=Object(r.a)({root:{height:"100%"}}),l=function(e){var t=e.footerContent,a=e.className,n=e.children,r=i();return c.a.createElement("div",{className:Object(o.a)("flex flex-column",r.root)},c.a.createElement("div",{className:Object(o.a)("flex-1",a)},n),t)}},265:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a(54),c=a(0),o=a.n(c),r=a(8),i=a(27),l=a(48),d=a(267),s=a(122),m=Object(s.a)(c.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),u=Object(s.a)(c.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),b=a(88),h=Object(s.a)(c.createElement("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),p=a(73),f=a(121),v=c.createElement(u,null),x=c.createElement(m,null),g=c.createElement(h,null),O=c.forwardRef((function(e,t){var a=e.checkedIcon,n=void 0===a?v:a,o=e.classes,s=e.color,m=void 0===s?"secondary":s,u=e.icon,b=void 0===u?x:u,h=e.indeterminate,f=void 0!==h&&h,O=e.indeterminateIcon,k=void 0===O?g:O,j=e.inputProps,y=e.size,E=void 0===y?"medium":y,C=Object(i.a)(e,["checkedIcon","classes","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),N=f?k:b,w=f?k:n;return c.createElement(d.a,Object(r.a)({type:"checkbox",classes:{root:Object(l.a)(o.root,o["color".concat(Object(p.a)(m))],f&&o.indeterminate),checked:o.checked,disabled:o.disabled},color:m,inputProps:Object(r.a)({"data-indeterminate":f},j),icon:c.cloneElement(N,{fontSize:void 0===N.props.fontSize&&"small"===E?E:N.props.fontSize}),checkedIcon:c.cloneElement(w,{fontSize:void 0===w.props.fontSize&&"small"===E?E:w.props.fontSize}),ref:t},C))})),k=Object(f.a)((function(e){return{root:{color:e.palette.text.secondary},checked:{},disabled:{},indeterminate:{},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.a)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.a)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:e.palette.action.disabled}}}}),{name:"MuiCheckbox"})(O),j=function(e){return o.a.createElement(k,Object(n.b)({},e))};j.defaultProps={color:"primary"}},267:function(e,t,a){"use strict";var n=a(8),c=a(11),o=a(27),r=a(0),i=a(48),l=a(127),d=a(261),s=a(121),m=a(386),u=r.forwardRef((function(e,t){var a=e.autoFocus,s=e.checked,u=e.checkedIcon,b=e.classes,h=e.className,p=e.defaultChecked,f=e.disabled,v=e.icon,x=e.id,g=e.inputProps,O=e.inputRef,k=e.name,j=e.onBlur,y=e.onChange,E=e.onFocus,C=e.readOnly,N=e.required,w=e.tabIndex,z=e.type,S=e.value,I=Object(o.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),B=Object(l.a)({controlled:s,default:Boolean(p),name:"SwitchBase",state:"checked"}),P=Object(c.a)(B,2),R=P[0],A=P[1],L=Object(d.a)(),F=f;L&&"undefined"===typeof F&&(F=L.disabled);var M="checkbox"===z||"radio"===z;return r.createElement(m.a,Object(n.a)({component:"span",className:Object(i.a)(b.root,h,R&&b.checked,F&&b.disabled),disabled:F,tabIndex:null,role:void 0,onFocus:function(e){E&&E(e),L&&L.onFocus&&L.onFocus(e)},onBlur:function(e){j&&j(e),L&&L.onBlur&&L.onBlur(e)},ref:t},I),r.createElement("input",Object(n.a)({autoFocus:a,checked:s,defaultChecked:p,className:b.input,disabled:F,id:M&&x,name:k,onChange:function(e){var t=e.target.checked;A(t),y&&y(e,t)},readOnly:C,ref:O,required:N,tabIndex:w,type:z,value:S},g)),R?u:v)}));t.a=Object(s.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(u)},286:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(54),c=a(0),o=a.n(c),r=a(47),i=a.n(r),l=a(55),d=a(230),s=a(265),m=a(123),u=a(87);Object(u.a)(".footer-container {\n  bottom: 0;\n  left: 0;\n  z-index: 9;\n}\n.footer-container .footer-shadow {\n  box-shadow: -1px -10px 24px 2px rgba(0, 0, 0, 0.07);\n}");var b=function(e){var t=e.topContent,a=e.children,r=e.variant,i=e.primaryAction,u=e.primaryActionText,b=e.disablePrimaryButton,h=e.secondaryAction,p=e.secondaryActionText,f=e.disableSecondaryButton,v=e.checkboxLabel,x=e.isCheckboxChecked,g=e.onCheckboxClick,O=e.showCheckbox,k=e.isSticky,j=e.className,y=e.primaryActionProps,E=e.secondaryActionProps,C=e.transparentBackground,N=Object(c.useState)(!1),w=N[0],z=N[1];Object(c.useEffect)((function(){x&&z(!0)}),[]);return o.a.createElement("div",{className:Object(l.a)("footer-container width-100",j,{sticky:k,fixed:!k})},(O||v)&&o.a.createElement("div",{className:"flex px4 py3 flex-center"},O&&o.a.createElement(s.a,{checked:w,className:"p0 mr2",onChange:function(e){var t,a=!!(null===(t=null===e||void 0===e?void 0:e.target)||void 0===t?void 0:t.checked);z(a),g&&g(a)}}),v?"string"===typeof v?o.a.createElement(m.a,{variant:"Light200"},v):v:null),o.a.createElement("div",{className:"flex flex-column border-box px6 py2 top-index\n          ".concat(C?"transparent-background":"light-background footer-shadow")},t,function(){switch(r){case"default":return u?o.a.createElement(d.a,Object(n.b)({},y,{className:"width-100 ".concat(null===y||void 0===y?void 0:y.className),size:"large",onClick:i,disabled:b}),u):p?o.a.createElement(d.a,Object(n.b)({},E,{variant:"outlined",className:"width-100 ".concat(null===E||void 0===E?void 0:E.className),size:"large",onClick:h,disabled:f}),p):null;case"horizontal":return o.a.createElement("div",{className:"flex width-100"},p&&o.a.createElement(d.a,Object(n.b)({},E,{variant:"outlined",size:"large",className:"width-50 mr2 ".concat(null===E||void 0===E?void 0:E.className),onClick:h,disabled:f}),p),u&&o.a.createElement(d.a,Object(n.b)({},y,{size:"large",className:"width-50 mr2 ".concat(null===y||void 0===y?void 0:y.className),onClick:i,disabled:b}),u));case"vertical":return o.a.createElement("div",{className:"flex flex-column width-100"},u&&o.a.createElement(d.a,Object(n.b)({},y,{size:"large",className:"width-100 ".concat(null===y||void 0===y?void 0:y.className),onClick:i,disabled:b}),u),p&&o.a.createElement(d.a,Object(n.b)({},E,{size:"large",variant:"text",className:"width-100 mt1 ".concat(null===E||void 0===E?void 0:E.className),onClick:h,disabled:f}),p));default:return null}}(),a))};b.propTypes={topContent:i.a.node,children:i.a.node,variant:i.a.string,primaryAction:i.a.func,secondaryAction:i.a.func,disablePrimaryButton:i.a.bool,disableSecondaryButton:i.a.bool,transparentBackground:i.a.bool},b.defaultProps={topContent:null,children:null,variant:"default",primaryAction:void 0,secondaryAction:void 0,primaryActionText:"",secondaryActionText:"",disablePrimaryButton:!1,disableSecondaryButton:!1,checkboxLabel:"",onCheckboxClick:function(e){},showCheckbox:!1,isSticky:!1,className:"",transparentBackground:!1}},287:function(e,t,a){"use strict";a.d(t,"a",(function(){return O}));var n=a(54),c=a(0),o=a.n(c),r=a(225),i=a(55),l=a(123),d=a(124),s=a(122),m=Object(s.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 11c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1 4h-2v-2h2v2z"}),"ErrorRounded"),u=Object(s.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1zm1-8h-2V7h2v2z"}),"InfoRounded"),b=Object(s.a)(c.createElement("path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"}),"WatchLater"),h=Object(s.a)(c.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7a.9959.9959 0 010-1.41c.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z"}),"CheckCircleRounded"),p=function(e){var t=e.variant,a=e.colorVariant,c={color:a||t,width:e.width,height:e.height,className:e.className};return"warning"===t?o.a.createElement(d.a,Object(n.b)({icon:m},c)):"danger"===t||"failed"===t||"rejected"===t?(c.color=a||"danger",o.a.createElement(d.a,Object(n.b)({icon:m},c))):"primary"===t?o.a.createElement(d.a,Object(n.b)({icon:u},c)):"pending"===t?(c.color=a||"warning",o.a.createElement(d.a,Object(n.b)({icon:b},c))):"success"===t?o.a.createElement(d.a,Object(n.b)({icon:h},c)):o.a.createElement(d.a,Object(n.b)({icon:m},c))};p.defaultProps={variant:"primary",width:36,height:36};var f=Object(r.a)({root:{alignItems:"flex-center",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px",boxSizing:"border-box",display:"flex",fontSize:"10px",justifyContent:"flex-start",minHeight:"28px",padding:"8px 16px"}}),v=function(e){var t=e.variant,a=e.className,c=e.text,r=e.showIcon,s=e.customIcon,m=e.children,u=e.rightContent,b=f(),h="mr2 primary Light200";return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:Object(i.a)(b.root,"width-100 flex flex-center flex-justify","".concat(t,"-light-background"),a)},o.a.createElement("div",{className:"flex flex-center"},r&&(s?o.a.createElement(d.a,Object(n.b)({},s,{className:h,width:15,height:15})):o.a.createElement(p,{variant:t,className:h,width:15,height:15})),c&&o.a.createElement(l.a,{variant:"Regular300",className:"primary"},c),m),u))};v.defaultProps={variant:"primary",showIcon:!0,children:null,rightContent:null};var x=a(33),g=Object(r.a)({root:{background:x.a.light,borderRadius:"8px",boxShadow:"none"},vertical:{alignItems:"center",flexDirection:"column",justifyContent:"center",textAlign:"center"},variantVertical:{width:"155px"},variantSquare:{display:"block",height:"305px",minWidth:"325px"},variantInfo:{height:"120px",overflow:"hidden",width:"120px"},rootWithStrip:{borderRadius:"8px 8px 0px 0px"},rootWithStripTop:{borderRadius:"0px 0px 8px 8px"},strip:{borderRadius:"0px 0px 8px 8px"},stripTop:{borderRadius:"8px 8px 0px 0px"}}),O=function(e){var t=e.variant,a=e.children,c=e.className,r=e.strip,l=e.stripPosition,d=e.onClick,s=e.cardClassName,m=Object(n.a)(e,["variant","children","className","strip","stripPosition","onClick","cardClassName"]),u=g(),b=Object(i.a)(u.root,r?"top"==l?u.rootWithStripTop:u.rootWithStrip:"");switch(t){case"vertical":b=Object(i.a)(u.root,u.variantVertical,u.vertical);break;case"square":b=Object(i.a)(u.root,u.variantSquare,u.vertical);break;case"info":b=Object(i.a)(u.root,u.variantInfo)}return r?o.a.createElement("div",Object(n.b)({onClick:d,className:Object(i.a)("br3 default-box-shadow",r&&s)},m),r&&"default"==t&&"top"==l&&o.a.createElement(v,Object(n.b)({className:u.stripTop},r)),o.a.createElement("div",{className:Object(i.a)(b,"flex border-box overflow-hidden",c,!r&&s)},a),r&&"default"==t&&"bottom"==l&&o.a.createElement(v,Object(n.b)({className:u.strip},r))):o.a.createElement("div",Object(n.b)({onClick:d,className:Object(i.a)(b,"flex border-box overflow-hidden br3 default-box-shadow",c,s)},m),a)};O.defaultProps={variant:"default",children:o.a.createElement(o.a.Fragment,null),className:"p4",stripPosition:"bottom",onClick:function(){},cardClassName:""}},319:function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(54),c=a(0),o=a.n(c),r=a(55),i=a(225),l=a(8),d=a(27),s=a(48),m=a(121),u=a(88),b=c.forwardRef((function(e,t){var a=e.absolute,n=void 0!==a&&a,o=e.classes,r=e.className,i=e.component,m=void 0===i?"hr":i,u=e.flexItem,b=void 0!==u&&u,h=e.light,p=void 0!==h&&h,f=e.orientation,v=void 0===f?"horizontal":f,x=e.role,g=void 0===x?"hr"!==m?"separator":void 0:x,O=e.variant,k=void 0===O?"fullWidth":O,j=Object(d.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return c.createElement(m,Object(l.a)({className:Object(s.a)(o.root,r,"fullWidth"!==k&&o[k],n&&o.absolute,b&&o.flexItem,p&&o.light,"vertical"===v&&o.vertical),role:g,ref:t},j))})),h=Object(m.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(u.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(b),p=a(123),f=Object(i.a)({root:{height:"32px",left:"50%",transform:"translate(-50%,-50%)",top:"50%",width:"32px"}}),v=function(e){var t=e.showOr,a=Object(n.a)(e,["showOr"]),c=f();return t?o.a.createElement("div",{className:"relative width-100"},o.a.createElement(h,Object(n.b)({},a)),o.a.createElement(p.a,{variant:"SemiBold100",className:Object(r.a)("absolute br-50 dark-grey-background dark flex flex-center flex-justify-center",c.root)},"OR")):o.a.createElement(h,Object(n.b)({},a))}}}]);