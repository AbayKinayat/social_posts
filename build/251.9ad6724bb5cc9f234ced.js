"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[251],{394:(e,n,t)=>{t.r(n),t.d(n,{default:()=>F});var r=t(893),o=t(294),a=t(471),i=t(998),l=t(611);const s={title:"ikI7VPeL",text:"uNJeeCm1",error:"F9oLXAK4"};var u,c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)};!function(e){e.PRIMARY="primary",e.ERROR="error"}(u||(u={}));var d=function(e){var n=e.title,t=e.text,o=e.theme,a=void 0===o?u.PRIMARY:o;return(0,r.jsxs)("div",c({className:(0,l.A)(s.Text,s[a])},{children:[n&&(0,r.jsx)("p",c({className:s.title},{children:n}),void 0),t&&(0,r.jsx)("p",c({className:s.text},{children:t}),void 0)]}),void 0)},f=t(161),v=t(925),p=t(792),h=function(e){var n;return(null===(n=e.loginForm)||void 0===n?void 0:n.username)||""},m=function(e){var n;return(null===(n=e.loginForm)||void 0===n?void 0:n.password)||""},g=function(e){var n;return(null===(n=e.loginForm)||void 0===n?void 0:n.error)||""},y=function(e){var n;return(null===(n=e.loginForm)||void 0===n?void 0:n.isLoading)||!1},b=t(168),x=t(861),w=t(329),j=t(663),O=(0,b.hg)("login/loginByUsername",(function(e,n){return t=void 0,r=void 0,a=function(){var t,r;return function(e,n){var t,r,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=n.call(e,i)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}}(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),[4,x.Z.post("http://localhost:8000/login",e)];case 1:if(!(t=o.sent()).data)throw new Error;return localStorage.setItem(j.y,JSON.stringify(t.data)),n.dispatch(w.hI.setAuthData(t.data)),[2,t.data];case 2:return r=o.sent(),console.log(r),[2,n.rejectWithValue("")];case 3:return[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{s(a.next(e))}catch(e){n(e)}}function l(e){try{s(a.throw(e))}catch(e){n(e)}}function s(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,l)}s((a=a.apply(t,r||[])).next())}));var t,r,o,a})),N=(0,b.oM)({name:"login",initialState:{username:"",password:"",isLoading:!1,error:""},reducers:{setUsername:function(e,n){e.username=n.payload},setPassword:function(e,n){e.password=n.payload}},extraReducers:function(e){return e.addCase(O.fulfilled,(function(e,n){e.username=n.payload.username,e.isLoading=!1,e.error=""})).addCase(O.pending,(function(e){e.isLoading=!0,e.error=""})).addCase(O.rejected,(function(e,n){e.error=n.payload,e.isLoading=!1}))}}),C=N.actions,k=N.reducer;const L={LoginForm:"xYNEfcE9",loginButton:"B5SuDjVb"};var P=function(){return P=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},P.apply(this,arguments)};const F=(0,o.memo)((function(){var e=(0,a.$)().t,n=(0,p.T)(),t=(0,i.oR)(),s=(0,i.v9)(h),c=(0,i.v9)(m),b=(0,i.v9)(g),x=(0,i.v9)(y);(0,o.useEffect)((function(){return t.reducerManager.add("loginForm",k),n({type:"@INIT loginform"}),function(){t.reducerManager.remove("loginForm")}}),[]);var w=(0,o.useCallback)((function(e){n(C.setUsername(e.target.value))}),[n]),j=(0,o.useCallback)((function(e){n(C.setPassword(e.target.value))}),[n]),N=(0,o.useCallback)((function(){n(O({username:s,password:c}))}),[n,s,c]);return(0,r.jsxs)("div",P({className:(0,l.A)(L.LoginForm)},{children:[(0,r.jsx)(d,{title:e("auth_form")},void 0),e("auth_error")&&(0,r.jsx)(d,{text:b,theme:u.ERROR},void 0),(0,r.jsx)(v.I,{className:L.input,type:"text",placeholder:e("type_username"),value:s,autofocus:!0,onChange:w},void 0),(0,r.jsx)(v.I,{className:L.input,type:"text",placeholder:e("type_password"),value:c,onChange:j},void 0),(0,r.jsx)(f.zx,P({className:L.loginButton,theme:f.bn.OUTLINED,onClick:N,disabled:x},{children:e("sign_in")}),void 0)]}),void 0)}))},925:(e,n,t)=>{t.d(n,{I:()=>l});var r=t(893),o=t(294),a=t(611);var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},l=(0,o.memo)((function(e){var n=e.value,t=e.onChange,l=e.className,s=e.placeholder,u=e.autofocus,c=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(e,["value","onChange","className","placeholder","autofocus"]),d=(0,o.useState)(!1),f=d[0],v=d[1],p=(0,o.useState)(0),h=p[0],m=p[1],g=(0,o.useRef)();return(0,o.useEffect)((function(){var e;u&&(null===(e=null==g?void 0:g.current)||void 0===e||e.focus(),v(!0))}),[u]),(0,r.jsxs)("div",i({className:(0,a.A)("LuFDUWoP",l)},{children:[s&&(0,r.jsx)("div",i({className:"emAQQ85i"},{children:"".concat(s,">")}),void 0),(0,r.jsxs)("div",i({className:"y1GiFC_L"},{children:[(0,r.jsx)("input",i({ref:g,className:"LVdIPwcx",value:n,onChange:function(e){null==t||t(e),m(e.target.value.length)},onFocus:function(){v(!0)},onBlur:function(){v(!1)},onSelect:function(e){var n;m((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)}},c),void 0),f&&(0,r.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9.6*h,"px")}},void 0)]}),void 0)]}),void 0)}))}}]);