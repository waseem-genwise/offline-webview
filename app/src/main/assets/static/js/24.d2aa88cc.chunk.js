(this["webpackJsonpfamily-fe"]=this["webpackJsonpfamily-fe"]||[]).push([[24],{257:function(e,t,n){"use strict";var a=n(2),c=n(11),o=n(0),l=n.n(o),i=n(5),r=n(272),s={en:{ADD_NOW_1:"https://d2anekac6qb5o9.cloudfront.net/audio/family/english/ADD_NOW_1.mp3",ADD_MORE:"https://d2anekac6qb5o9.cloudfront.net/audio/family/english/ADD_MORE.mp3",ADD_RELATION:"https://d2anekac6qb5o9.cloudfront.net/audio/family/english/ADD_RELATION.mp3",ENTER_NAME:"https://d2anekac6qb5o9.cloudfront.net/audio/family/english/ENTER_NAME.mp3"},hi:{ADD_NOW_1:"https://d2anekac6qb5o9.cloudfront.net/audio/family/hindi/ADD_NOW_1.mp3",ADD_MORE:"https://d2anekac6qb5o9.cloudfront.net/audio/family/hindi/ADD_MORE.mp3",ADD_RELATION:"https://d2anekac6qb5o9.cloudfront.net/audio/family/hindi/ADD_RELATION.mp3",ENTER_NAME:"https://d2anekac6qb5o9.cloudfront.net/audio/family/hindi/ENTER_NAME.mp3"},kn:{},te:{},bn:{},gu:{},ta:{},ml:{},mr:{}},u=n(28),d=n(13),v=n(111),b=n(72),j=n(86),O=n(10),m=function(){var e=Object(O.b)(),t=Object(o.useCallback)((function(t){var n;null===(n=e(Object(v.b)({serviceName:"SOCIAL_FAMILY",eventName:t})))||void 0===n||n.then((function(t){var n,a,c=null===t||void 0===t||null===(n=t.payload)||void 0===n?void 0:n.payload;c&&e(Object(b.g)({noOfCoins:null!==(a=null===c||void 0===c?void 0:c.coins)&&void 0!==a?a:0,showCoinWalletRightContent:!0,playCoinWalletAnimation:!1}))}))}),[e]),n=Object(o.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"FAMILY_MEMBER_ONBOARDED";Object(j.g)({serviceName:"SOCIAL_FAMILY"}).then((function(){t(e)}))}),[t]);return{fetchLoyaltyCoins:t,updateLoyaltyViewStatus:n}},C=n(123),A=n(85),f=n(7),N=function(e){var t=e.noOfCoins,n=e.visible,a=void 0!==n&&n,c=e.type,l=void 0===c?"HELPER_TEXT":c,i=Object(A.b)().t,r=Object(o.useMemo)((function(){return"TOAST_TEXT"===l?Object(f.jsxs)(C.a,{variant:"Bold200",children:[Object(f.jsxs)("span",{className:"Bold300",children:[null!==t&&void 0!==t?t:0," "]}),"".concat(i("COINS_EARNED_BY_ADDING_FAMILY_MEMBER"))]}):Object(f.jsxs)("div",{className:"width-100 primary-gradient-background flex flex-row content-center gap-25 px4 py1",children:[Object(f.jsx)("img",{src:"data:image/png;base64,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",height:"16",width:"16",loading:"lazy",alt:"icon"}),Object(f.jsxs)(C.a,{variant:"Regular200",className:"flex content-center gap-25",children:["".concat(i("ADD_A_FAMILY_MEMBER_AND_EARN")),Object(f.jsxs)("span",{className:"Bold300",children:[null!==t&&void 0!==t?t:0," "]}),"".concat(i("COINS"))]})]})}),[t,i,l]);return a?r:null},E=l.a.memo(N),h=n(23),p=function(e){if(e){var t=Object(d.g)();return s["".concat(t)][e]}},y=function(e,t){var n,l,s,d,j,C,A,N,y=e.className,D=e.title,g=e.rightContent,x=e.leftIconAction,T=e.pageId,k=e.autoPlay,S=void 0===k||k,w=e.playCount,I=void 0===w?2:w,R=e.transparentBackground,M=void 0!==R&&R,L=e.onAudioCoachMarkPlay,_=e.onAudioCoachMarkPause,W=e.loyaltyEventName,q=void 0===W?"FAMILY_MEMBER_ONBOARDED":W,F=e.refreshLoyaltyCoins,Q=void 0===F||F,P=(e.showLoyaltyHelperText,Object(i.o)()),H=Object(o.useState)(T?Number(Object(u.a)(T,!0)):0),B=Object(c.a)(H,2),J=B[0],z=B[1],G=Object(v.c)(),V=Object(b.s)(),Y=m(),X=Y.fetchLoyaltyCoins,K=Y.updateLoyaltyViewStatus,Z=Object(O.b)(),U=Object(o.useCallback)((function(){x?x():P(-1)}),[P,x]),$=Object(o.useMemo)((function(){return J<I&&S}),[I,J,S]),ee=Object(o.useCallback)((function(e){L&&L(),!e&&T&&z((function(e){return e+1}))}),[L,T]),te=Object(o.useCallback)((function(){h.a.openDeepLinkWithCallback("genwise://dynamic?key=loyalty")}),[]),ne=Object(o.useCallback)((function(){var e,t,n;Z(Object(b.g)({playCoinWalletAnimation:!1,noOfCoins:null!==(e=null===G||void 0===G||null===(t=G.data)||void 0===t||null===(n=t.payload)||void 0===n?void 0:n.coins)&&void 0!==e?e:0})),K(q)}),[Z,null===G||void 0===G||null===(n=G.data)||void 0===n||null===(l=n.payload)||void 0===l?void 0:l.coins,q,K]);return Object(o.useEffect)((function(){T&&J&&Object(u.c)(T,J,!0)}),[J,T]),Object(o.useEffect)((function(){Q&&X(q)}),[X,q,Q]),Object(f.jsx)(r.a,{className:y,title:D,leftIconAction:U,transparentBackground:M,audioCoachMarkPath:p(T),autoPlay:$,onAudioCoachMarkPlay:ee,onAudioCoachMarkPause:_,rightContent:g,coinWalletProps:Object(a.a)(Object(a.a)({},V),{},{onCoinWalletRightContentClick:te,coinInfo:Object(f.jsx)(E,{visible:!1,noOfCoins:null===G||void 0===G||null===(s=G.data)||void 0===s||null===(d=s.payload)||void 0===d?void 0:d.coinsOnModal,type:"HELPER_TEXT"}),snackbarMessage:Object(f.jsx)(E,{visible:!0,noOfCoins:null===G||void 0===G||null===(j=G.data)||void 0===j||null===(C=j.payload)||void 0===C?void 0:C.coinsOnModal,type:"TOAST_TEXT"}),onPlayAnimationEnded:ne,showCoinWalletRightContent:null===G||void 0===G||null===(A=G.data)||void 0===A||null===(N=A.payload)||void 0===N?void 0:N.isLoyaltyActive,playCoinWalletAnimation:!1}),ref:t})},D=l.a.memo(Object(o.forwardRef)(y));t.a=D},258:function(e,t,n){"use strict";n(0);var a=n(90),c=(n(262),n(23)),o=n(13),l=n(112),i=n(7),r=function(e){var t=e.message;return Object(i.jsx)("div",{children:t})};t.a={error:function(e,t){var n=l.a.t(null!==e&&void 0!==e?e:"");return n.includes("_")&&(n=Object(o.a)(n.replaceAll("_"," "))),Object(o.q)()?(c.a.showToast(n||"Something went wrong!",!0),Object(i.jsx)(i.Fragment,{})):a.c.error(Object(i.jsx)(r,{message:n||"Something went wrong!"}),t)},info:function(e,t){var n=l.a.t(null!==e&&void 0!==e?e:"");return n.includes("_")&&(n=Object(o.a)(n.replaceAll("_"," "))),Object(o.q)()?(c.a.showToast(n||"Something went wrong!",!0),Object(i.jsx)(i.Fragment,{})):a.c.info(Object(i.jsx)(r,{message:n||"Info!"}),t)},success:function(e,t){var n=l.a.t(null!==e&&void 0!==e?e:"");return n.includes("_")&&(n=Object(o.a)(n.replaceAll("_"," "))),Object(o.q)()?(c.a.showToast(n||"Something went wrong!",!0),Object(i.jsx)(i.Fragment,{})):a.c.success(Object(i.jsx)(r,{message:n||"Success"}),t)}}},262:function(e,t,n){},264:function(e,t,n){"use strict";var a=n(258);n.d(t,"a",(function(){return a.a}))},384:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var a=n(3),c=n(9),o=n(2),l=n(11),i=n(257),r=n(0),s=n(85),u=n(287),d=n(302),v=n(259),b=n.p+"static/media/contact.db09c495.svg",j=n(123),O=n(13),m=n(286),C=n(74),A=n(72),f=n(86),N=n(264),E=n(5),h=n(10),p=n(75),y=n(28),D=n(6),g={rltvContactDetailsScreenVisited:{eventName:"rltvContactDetailsScreenVisited",screenName:"rltvContactDetailsScreen",event_params:{type:"Screen Visit"}},rltvContactDetailsNameFieldClicked:{eventName:"rltvContactDetailsNameFieldClicked",screenName:"rltvContactDetailsScreen",event_params:{type:"Click"}},rltvContactDetailsSelectClicked:{eventName:"rltvContactDetailsSelectClicked",screenName:"rltvContactDetailsScreen",event_params:{type:"Click"}},rltvContactDetailsNmbrFieldClicked:{eventName:"rltvContactDetailsNmbrFieldClicked",screenName:"rltvContactDetailsScreen",event_params:{type:"Click"}},rltvContactDetailsSendClicked:{eventName:"rltvContactDetailsSendClicked",screenName:"rltvContactDetailsScreen",event_params:{type:"Click"}},rltvContactDetailsBackBtnClkd:{eventName:"rltvContactDetailsBackBtnClkd",screenName:"rltvContactDetailsScreen",event_params:{type:"Click"}}},x=n(7),T=Object(O.p)()?Number(Object(y.a)(D.b))<=101:Number(Object(y.a)(D.b))<=109;Object(O.z)(g.rltvContactDetailsScreenVisited);var k=function(){var e,t,n,y=Object(s.b)().t,k=Object(C.c)(),S=Object(A.x)(),w=Object(r.useState)({fullName:"",contact:"",countryCode:"",isError:!1,errorMsg:"",isContactError:!1,isNameError:!1}),I=Object(l.a)(w,2),R=I[0],M=I[1],L=Object(E.o)(),_=Object(h.b)(),W=Object(r.useCallback)((function(e){var t=e.target.value;D.d.test(t)?M((function(e){return Object(o.a)(Object(o.a)({},e),{},{isContactError:!1})})):M((function(e){return Object(o.a)(Object(o.a)({},e),{},{isContactError:!0})})),t.length>13||M((function(e){return Object(o.a)(Object(o.a)({},e),{},{contact:t})}))}),[]),q=Object(r.useCallback)(Object(c.a)(Object(a.a)().mark((function e(){var t,n,c,l,i;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(O.n)("SHOW"),Object(O.z)(g.rltvContactDetailsSendClicked,{name:null===R||void 0===R?void 0:R.fullName}),e.prev=2,e.next=5,Object(O.w)();case 5:if(null!==(t=e.sent)&&void 0!==t&&t.success){e.next=10;break}return _(Object(A.i)("CONTACT_DENIED")),Object(O.n)("HIDE"),e.abrupt("return");case 10:if(n=null===t||void 0===t?void 0:t.data,(null===t||void 0===t||!t.error)&&n){e.next=14;break}return Object(O.n)("HIDE"),e.abrupt("return");case 14:c=(null===n||void 0===n?void 0:n.name)||"",l=(null===n||void 0===n?void 0:n.phoneNumber)||"",i=(null===n||void 0===n?void 0:n.countryCode)||"",M((function(e){return Object(o.a)(Object(o.a)({},e),{},{contact:l.slice(l.length-10),fullName:c,countryCode:i.length<=1||i.length>=3?"91":i})})),Object(O.n)("HIDE"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),Object(O.n)("HIDE");case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),[null===R||void 0===R?void 0:R.fullName,_]),F=Object(r.useCallback)((function(e){var t=e.currentTarget.value.trimStart();!t.length||t.length<3||t.length>30?M((function(e){return Object(o.a)(Object(o.a)({},e),{},{isNameError:!0})})):M((function(e){return Object(o.a)(Object(o.a)({},e),{},{isNameError:!1})})),M((function(e){return Object(o.a)(Object(o.a)({},e),{},{fullName:t})}))}),[]),Q=Object(r.useCallback)(Object(c.a)(Object(a.a)().mark((function e(){var t,n,c;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(O.n)("SHOW"),Object(O.z)(null===g||void 0===g?void 0:g.rltvContactDetailsSendClicked,{name:null===R||void 0===R?void 0:R.fullName,mobileNumber:null===R||void 0===R?void 0:R.contact}),c={eventName:"NATIVE_CONTACT",sharedBy:null===k||void 0===k||null===(t=k.data)||void 0===t||null===(n=t.payload)||void 0===n?void 0:n.user_id,sharedWithGroup:null===S||void 0===S?void 0:S.group_id,socialMessageDTO:{contactName:null===R||void 0===R?void 0:R.fullName,contactCountryCode:null!==R&&void 0!==R&&R.countryCode?null===R||void 0===R?void 0:R.countryCode:"91",contactMobile:null===R||void 0===R?void 0:R.contact}},e.prev=3,e.next=6,Object(f.e)({payload:c});case 6:e.sent,_(Object(p.c)({userId:null===S||void 0===S?void 0:S.user_id,status:!1})),L(-1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Error--\x3e",e.t0),N.a.error(null===e.t0||void 0===e.t0?void 0:e.t0.message),Object(O.n)("HIDE");case 16:case"end":return e.stop()}}),e,null,[[3,11]])}))),[null===k||void 0===k||null===(e=k.data)||void 0===e||null===(t=e.payload)||void 0===t?void 0:t.user_id,null===S||void 0===S?void 0:S.group_id,null===S||void 0===S?void 0:S.user_id,null===R||void 0===R?void 0:R.fullName,null===R||void 0===R?void 0:R.countryCode,null===R||void 0===R?void 0:R.contact,_,L]),P=Object(r.useCallback)((function(e){"name"===e?Object(O.z)(g.rltvContactDetailsNameFieldClicked,{name:null===R||void 0===R?void 0:R.fullName}):Object(O.z)(g.rltvContactDetailsNmbrFieldClicked,{phoneNumber:null===R||void 0===R?void 0:R.contact})}),[null===R||void 0===R?void 0:R.contact,null===R||void 0===R?void 0:R.fullName]),H=Object(r.useMemo)((function(){return T?null:Object(x.jsxs)("div",{className:"flex flex-row flex-center gap-25",onClick:q,children:[Object(x.jsx)("img",{src:b,height:"16",width:"16",loading:"lazy",alt:"contact"}),Object(x.jsx)(j.a,{variant:"SemiBold400",className:"primary",children:"".concat(y("SELECT"))})]})}),[q,y]);return Object(x.jsxs)(v.a,{footerContent:Object(x.jsx)(m.a,{primaryAction:Q,primaryActionText:"".concat(y("SEND")),disablePrimaryButton:R.isContactError||R.isNameError||(null===(n=R.contact)||void 0===n?void 0:n.length)<10||!R.fullName}),children:[Object(x.jsx)(i.a,{title:"".concat(y("CONTACT_DETAILS"))}),Object(x.jsx)("div",{className:"flex flex-column gap-1 m4",children:Object(x.jsxs)(u.a,{className:"p4 flex flex-column gap-1",children:[Object(x.jsx)(d.a,{className:"width-100",endAdornment:H,value:R.contact,variant:"outlined",placeholder:"".concat(y(T?"ENTER_CONTACT":"ENTER_OR_SELECT_CONTACT")),label:"".concat(y(T?"ENTER_CONTACT":"ENTER_OR_SELECT_CONTACT")),onChange:W,helperText:"".concat(y("ENTER_VALID_CONTACT")),error:R.isContactError,type:"tel",onFocus:function(){return P("number")}}),Object(x.jsx)(d.a,{className:"width-100 mt2",value:R.fullName,variant:"outlined",placeholder:"".concat(y("ENTER_FULL_NAME")),label:"".concat(y("ENTER_FULL_NAME")),onChange:F,error:R.isNameError,helperText:"".concat(y("ENTER_VALID_NAME")),type:"text",onFocus:function(){return P("name")}})]})})]})},S=function(){return Object(x.jsx)(k,{})}}}]);