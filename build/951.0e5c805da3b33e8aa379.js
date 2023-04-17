"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[951],{7951:(e,n,r)=>{r.r(n),r.d(n,{default:()=>W});var a=r(5893),t=r(7168),o=(0,t.hg)("fetchProfileData",(function(e,n){return r=void 0,a=void 0,o=function(){var e;return function(e,n){var r,a,t,o,l={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(t=2&o[0]?a.return:o[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,o[1])).done)return t;switch(a=0,t&&(o=[2&o[0],t.value]),o[0]){case 0:case 1:t=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((t=(t=l.trys).length>0&&t[t.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!t||o[1]>t[0]&&o[1]<t[3])){l.label=o[1];break}if(6===o[0]&&l.label<t[1]){l.label=t[1],t=o;break}if(t&&l.label<t[2]){l.label=t[2],l.ops.push(o);break}t[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],a=0}finally{r=t=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,(function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,n.extra.api.get("/profile")];case 1:if(!(e=r.sent()).data)throw new Error;return[2,e.data];case 2:return r.sent(),[2,n.rejectWithValue("error")];case 3:return[2]}}))},new((t=void 0)||(t=Promise))((function(e,n){function l(e){try{u(o.next(e))}catch(e){n(e)}}function i(e){try{u(o.throw(e))}catch(e){n(e)}}function u(n){var r;n.done?e(n.value):(r=n.value,r instanceof t?r:new t((function(e){e(r)}))).then(l,i)}u((o=o.apply(r,a||[])).next())}));var r,a,t,o})),l=function(){return l=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},l.apply(this,arguments)},i=(0,t.oM)({name:"profile",initialState:{error:"",isLoading:!1,readonly:!0},reducers:{setReadonly:function(e,n){e.readonly=n.payload},patchProfile:function(e,n){e.form=l(l({},e.form),n.payload)},resetForm:function(e){e.form=e.data}},extraReducers:function(e){return e.addCase(o.pending,(function(e){e.isLoading=!0,e.error=""})).addCase(o.fulfilled,(function(e,n){e.data=n.payload,e.form=n.payload,e.error="",e.isLoading=!1})).addCase(o.rejected,(function(e,n){e.error=n.payload||"",e.isLoading=!1}))}}),u=i.actions,c=i.reducer,s=function(e){var n;return null===(n=e.profile)||void 0===n?void 0:n.form},f=(0,t.hg)("profile/updateProfileData",(function(e,n){return r=void 0,a=void 0,o=function(){var e,r,a,t;return function(e,n){var r,a,t,o,l={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;l;)try{if(r=1,a&&(t=2&o[0]?a.return:o[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,o[1])).done)return t;switch(a=0,t&&(o=[2&o[0],t.value]),o[0]){case 0:case 1:t=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!((t=(t=l.trys).length>0&&t[t.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!t||o[1]>t[0]&&o[1]<t[3])){l.label=o[1];break}if(6===o[0]&&l.label<t[1]){l.label=t[1],t=o;break}if(t&&l.label<t[2]){l.label=t[2],l.ops.push(o);break}t[2]&&l.ops.pop(),l.trys.pop();continue}o=n.call(e,l)}catch(e){o=[6,e],a=0}finally{r=t=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}}(this,(function(o){switch(o.label){case 0:e=n.extra,r=n.getState,a=n.rejectWithValue,o.label=1;case 1:return o.trys.push([1,3,,4]),t=s(r()),[4,e.api.put("/profile",t)];case 2:return[2,o.sent().data];case 3:return o.sent(),[2,a("error")];case 4:return[2]}}))},new((t=void 0)||(t=Promise))((function(e,n){function l(e){try{u(o.next(e))}catch(e){n(e)}}function i(e){try{u(o.throw(e))}catch(e){n(e)}}function u(n){var r;n.done?e(n.value):(r=n.value,r instanceof t?r:new t((function(e){e(r)}))).then(l,i)}u((o=o.apply(r,a||[])).next())}));var r,a,t,o})),d=r(7294),v=r(2327),h=r(4611),p=r(7492),y=r(6925),g=r(4809);var b=(0,d.memo)((function(e){var n=e.src,r=e.alt,t=e.size,o=e.className,l=(0,d.useMemo)((function(){return{width:t||100,height:t||100}}),[t]);return(0,a.jsx)("img",{src:n,alt:r,style:l,className:(0,h.A)("ZqPdwJxd",o)},void 0)}));const m={ProfileCard:"wW9jgKKD",data:"mem1neCT",loading:"t07ZxFGs",avatarWrapper:"bEFNSahN",editting:"HH5xWEL3"};var x=function(){return x=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},x.apply(this,arguments)},j=function(e){var n,r=e.className,t=e.data,o=e.isLoading,l=e.error,i=e.readonly,u=e.onChangeFirst,c=e.onChangeLastname,s=e.onChangeAge,f=e.onChangeCountry,j=e.onChangeUsername,C=e.onChangeAvatar,w=(0,v.$)("profile").t,P=(0,d.useCallback)((function(e){null==u||u(e)}),[]),k=(0,d.useCallback)((function(e){null==c||c(e)}),[]),O=(0,d.useCallback)((function(e){null==s||s(e)}),[]),N=(0,d.useCallback)((function(e){null==f||f(e)}),[]),E=(0,d.useCallback)((function(e){null==j||j(e)}),[]),L=(0,d.useCallback)((function(e){null==C||C(e)}),[]);return o?(0,a.jsx)("div",x({className:m.loading},{children:(0,a.jsx)(p.aN,{},void 0)}),void 0):l?(0,a.jsx)("div",x({className:m.error},{children:(0,a.jsx)(p.xv,{theme:g.l.ERROR,title:"Произошла ошибка при загрузке профиля",text:"Попробуйте перезагрузить страницу"},void 0)}),void 0):(0,a.jsx)("div",x({className:(0,h.A)(m.ProfileCard,r,(n={},n[m.editting]=!i,n))},{children:(0,a.jsxs)("div",x({className:m.data},{children:[(null==t?void 0:t.avatar)&&(0,a.jsx)("div",x({className:m.avatarWrapper},{children:(0,a.jsx)(b,{src:t.avatar,alt:"Аватар пользователя"},void 0)}),void 0),(0,a.jsx)(y.I,{value:null==t?void 0:t.first,placeholder:w("your_firstname"),readonly:i,onChange:P},void 0),(0,a.jsx)(y.I,{value:null==t?void 0:t.lastname,placeholder:w("your_lastname"),readonly:i,onChange:k},void 0),(0,a.jsx)(y.I,{value:String(null==t?void 0:t.age),placeholder:w("your_lastname"),readonly:i,onChange:O},void 0),(0,a.jsx)(y.I,{value:null==t?void 0:t.country,placeholder:w("your_lastname"),readonly:i,onChange:N},void 0),(0,a.jsx)(y.I,{value:null==t?void 0:t.username,placeholder:w("your_username"),readonly:i,onChange:E},void 0),(0,a.jsx)(y.I,{value:null==t?void 0:t.avatar,placeholder:w("type_your_avatar"),readonly:i,onChange:L},void 0)]}),void 0)}),void 0)},C=function(e){var n;return(null===(n=e.profile)||void 0===n?void 0:n.isLoading)||!1},w=function(e){var n;return(null===(n=e.profile)||void 0===n?void 0:n.error)||""},P=function(e){var n;return(null===(n=e.profile)||void 0===n?void 0:n.readonly)&&!0},k=r(5998),O=r(5792),N=r(6088);var E=r(9161);const L={ProfilePageHeader:"FPJSgL1_",editBtn:"vP5lJqeW"};var S=function(){return S=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},S.apply(this,arguments)},I=function(){var e=(0,v.$)("profile").t,n=(0,k.v9)(P),r=(0,O.T)(),t=(0,d.useCallback)((function(){r(u.setReadonly(!n)),r(u.resetForm())}),[r,n]),o=(0,d.useCallback)((function(){r(f())}),[r]);return(0,a.jsxs)("div",S({className:L.ProfilePageHeader},{children:[(0,a.jsx)(p.xv,{title:e("profile")},void 0),(0,a.jsx)(p.zx,S({className:L.editBtn,theme:E.bn.OUTLINED,onClick:t},{children:e(n?"edit":"cancel")}),void 0),!n&&(0,a.jsx)(p.zx,S({className:L.saveBtn,theme:E.bn.OUTLINED_NEGATIVE,onClick:o},{children:e("save")}),void 0)]}),void 0)},F=function(){return F=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},F.apply(this,arguments)},T={profile:c};const W=function(){var e=(0,O.T)(),n=(0,k.v9)(s),r=(0,k.v9)(C),t=(0,k.v9)(w),l=(0,k.v9)(P);(0,d.useEffect)((function(){e(o())}),[e]);var i=(0,d.useCallback)((function(n){e(u.patchProfile({first:n.target.value}))}),[e]),c=(0,d.useCallback)((function(n){e(u.patchProfile({lastname:n.target.value}))}),[e]),f=(0,d.useCallback)((function(n){e(u.patchProfile({age:Number(n.target.value)}))}),[e]),v=(0,d.useCallback)((function(n){e(u.patchProfile({country:n.target.value}))}),[e]),h=(0,d.useCallback)((function(n){console.log(n.target.value),e(u.patchProfile({username:n.target.value}))}),[e]),p=(0,d.useCallback)((function(n){console.log(n.target.value),e(u.patchProfile({avatar:n.target.value}))}),[e]);return(0,a.jsx)(N.W,F({reducers:T,removeAfterUnmount:!0},{children:(0,a.jsxs)("div",F({className:"WDcPPDH8"},{children:[(0,a.jsx)(I,{},void 0),(0,a.jsx)(j,{data:n,isLoading:r,error:t,readonly:l,onChangeFirst:i,onChangeLastname:c,onChangeAge:f,onChangeCountry:v,onChangeUsername:h,onChangeAvatar:p},void 0)]}),void 0)}),void 0)}},6088:(e,n,r)=>{r.d(n,{W:()=>i});var a=r(5893),t=r(7294),o=r(5998),l=r(5792),i=function(e){var n=e.reducers,r=e.removeAfterUnmount,i=void 0!==r&&r,u=e.children,c=(0,o.oR)(),s=(0,l.T)();return(0,t.useEffect)((function(){return Object.entries(n).forEach((function(e){var n=e[0],r=e[1];c.reducerManager.add(n,r),s({type:"@INIT ".concat(n)})})),function(){i&&Object.keys(n).forEach((function(e){c.reducerManager.remove(e),s({type:"@DELETE ".concat(e)})}))}}),[]),(0,a.jsx)(a.Fragment,{children:u},void 0)}},6925:(e,n,r)=>{r.d(n,{I:()=>i});var a=r(5893),t=r(7294),o=r(4611);var l=function(){return l=Object.assign||function(e){for(var n,r=1,a=arguments.length;r<a;r++)for(var t in n=arguments[r])Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t]);return e},l.apply(this,arguments)},i=(0,t.memo)((function(e){var n,r=e.value,i=e.onChange,u=e.className,c=e.placeholder,s=e.autofocus,f=e.readonly,d=function(e,n){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(a=Object.getOwnPropertySymbols(e);t<a.length;t++)n.indexOf(a[t])<0&&Object.prototype.propertyIsEnumerable.call(e,a[t])&&(r[a[t]]=e[a[t]])}return r}(e,["value","onChange","className","placeholder","autofocus","readonly"]),v=(0,t.useState)(!1),h=v[0],p=v[1],y=(0,t.useState)(0),g=y[0],b=y[1],m=(0,t.useRef)(null),x=h&&!f;return(0,t.useEffect)((function(){var e;s&&(null===(e=null==m?void 0:m.current)||void 0===e||e.focus(),p(!0))}),[s]),(0,a.jsxs)("div",l({className:(0,o.A)("LuFDUWoP",u,(n={},n.fTN1PnWu=f,n))},{children:[c&&(0,a.jsx)("div",l({className:"emAQQ85i"},{children:"".concat(c,">")}),void 0),(0,a.jsxs)("div",l({className:"y1GiFC_L"},{children:[(0,a.jsx)("input",l({ref:m,className:"LVdIPwcx",value:r,onChange:function(e){null==i||i(e),b(e.target.value.length)},onFocus:function(){p(!0)},onBlur:function(){p(!1)},onSelect:function(e){var n;b((null===(n=null==e?void 0:e.target)||void 0===n?void 0:n.selectionStart)||0)},readOnly:f},d),void 0),x&&(0,a.jsx)("span",{className:"lqMFGBuL",style:{left:"".concat(9.6*g,"px")}},void 0)]}),void 0)]}),void 0)}))}}]);