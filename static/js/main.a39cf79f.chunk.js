(this["webpackJsonpit-inc_my-homework-ignat"]=this["webpackJsonpit-inc_my-homework-ignat"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={appWrapper:"HW5_appWrapper__3oqtV",headerLinks:"HW5_headerLinks__1TC91",toggleControl:"HW5_toggleControl__1ClLD",activeLink:"HW5_activeLink__242HW"}},,function(e,t,n){e.exports={messageWrapper:"Message_messageWrapper__1hqYg",angle:"Message_angle__1JtA2",message:"Message_message__3al6k",userName:"Message_userName__VER38",time:"Message_time__21hvf"}},function(e,t,n){e.exports={wrapper:"Affairs_wrapper__Y28mq",item:"Affairs_item__3aUad",high:"Affairs_high__thy1Y",middle:"Affairs_middle__3FeKC",low:"Affairs_low__2dgUV"}},,function(e,t,n){e.exports={default:"SuperButton_default__2hd_a",red:"SuperButton_red__1rqyr",disabled:"SuperButton_disabled__MF14C"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2Z0dg",errorInput:"SuperInputText_errorInput__DAEw6",error:"SuperInputText_error__q_w-c"}},,,function(e,t,n){e.exports={wrapper:"Greeting_wrapper__2xUGS",error:"Greeting_error__Hybys"}},function(e,t,n){e.exports={blue:"HW4_blue__2o179",column:"HW4_column__2v-as",testSpanError:"HW4_testSpanError__1KpDo"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__S60XW",spanClassName:"SuperCheckbox_spanClassName__20ACJ"}},,,,,,function(e,t,n){e.exports={App:"App_App__3f5r6"}},function(e,t,n){e.exports={default:"SuperEditableSpan_default__2X2cT"}},function(e,t,n){e.exports={default:"SuperSelect_default__YLGMK"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(24),s=n.n(c),i=(n(33),n(25)),o=n.n(i),j=n(9),l=n(8),u=n.n(l),d=n(2),b=n(0);var h=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"}),Object(b.jsx)("hr",{})]})},O=n(10),x=n.n(O);var p=function(e){return Object(b.jsxs)("div",{className:x.a.messageWrapper,children:[Object(b.jsx)("img",{src:e.avatar,alt:"girl"}),Object(b.jsx)("div",{className:x.a.angle}),Object(b.jsxs)("div",{className:x.a.message,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:x.a.userName,children:e.name}),Object(b.jsx)("div",{className:x.a.userMessage,children:e.message})]}),Object(b.jsx)("div",{className:x.a.time,children:e.time})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="NyashMyash",v="How are YOU doing?",_="22:00";var g=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(p,{avatar:m,name:f,message:v,time:_}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},C=n(3),k=n(11),N=n.n(k),y=n(5),w=n(4),S=n(13),A=n.n(S),W=function(e){var t=e.red,n=e.className,r=e.disabled,a=Object(w.a)(e,["red","className","disabled"]),c=r?"".concat(A.a.disabled):"".concat(A.a.default," ").concat(t?A.a.red:""," ").concat(n);return Object(b.jsx)("button",Object(y.a)({disabled:r,className:c},a))};var T=function(e){return Object(b.jsxs)("div",{className:N.a.wrapper,children:[Object(b.jsx)("div",{className:N.a.item,children:e.affair.name}),Object(b.jsxs)("div",{className:"".concat(N.a.item," ").concat(N.a[e.affair.priority]),children:["[",e.affair.priority,"]"]}),Object(b.jsx)(W,{style:{width:"30px",marginTop:"10px"},red:!0,className:N.a.btn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var E=function(e){var t=e.data.map((function(t){return Object(b.jsx)(T,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{children:[t,Object(b.jsx)(W,{style:{margin:"15px",width:"100px"},onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)(W,{style:{margin:"15px",width:"100px"},onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)(W,{style:{margin:"15px",width:"100px"},onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)(W,{style:{margin:"15px",width:"100px"},onClick:function(){e.setFilter("low")},children:"Low"})]})},P=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var F=function(){var e=Object(r.useState)(P),t=Object(C.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(C.a)(c,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e.filter((function(e){return"high"===e.priority}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)(E,{data:j,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},H=n(17),I=n.n(H),L=n(14),M=n.n(L),J=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(w.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(c?M.a.error:""," ").concat(i||""),l="".concat(M.a.superInput," ").concat(c?M.a.errorInput:""," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(y.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(b.jsx)("span",{className:j,children:c})]})},U=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.onKeyEnterPress,c=e.error,s=e.totalUsers,i=c?I.a.error:"";return Object(b.jsxs)("div",{className:I.a.wrapper,children:[Object(b.jsx)(J,{value:t,onChange:n,error:c||"",className:i,onKeyPress:a}),Object(b.jsx)(W,{onClick:r,children:"add"}),Object(b.jsxs)("span",{children:["total users: ",s]})]})},B=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(C.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),j=Object(C.a)(o,2),l=j[0],u=j[1],d=function(){""!==s?(u(""),n(s),alert("Hello, ".concat(s,"!")),i("")):u("Enter a name, please!")},h=t.length;return Object(b.jsx)(U,{name:s,setNameCallback:function(e){e.currentTarget.value.indexOf(" ")>=0?u("Please, enter a name without spaces!"):(u(""),i(e.currentTarget.value))},addUser:d,error:l,onKeyEnterPress:function(e){13===e.charCode&&d()},totalUsers:h})},K=n(42);var q=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(B,{users:n,addUserCallback:function(e){var t=n;t.push({_id:Object(K.a)(),name:e}),a(t),console.log(n)}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},D=n(18),Y=n.n(D),G=n(19),X=n.n(G),R=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(w.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(y.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(b.jsx)("span",{className:X.a.spanClassName,children:a})]})};var V=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1],c=n?"":"enter text plz",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(C.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:Y.a.column,children:[Object(b.jsx)(J,{value:n,onChangeText:a,onEnter:s,error:c}),Object(b.jsx)(J,{className:Y.a.blue}),Object(b.jsx)(W,{children:"default"}),Object(b.jsx)(W,{red:!0,onClick:s,children:"X "}),Object(b.jsx)(W,{disabled:!0,children:"disabled"}),Object(b.jsx)(R,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(R,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},Z=n(26),z=n.n(Z),$=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(w.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(C.a)(s,2),o=i[0],j=i[1],l=a||{},u=l.children,d=l.onDoubleClick,h=l.className,O=Object(w.a)(l,["children","onDoubleClick","className"]),x="".concat(z.a.default," ").concat(h);return Object(b.jsx)(b.Fragment,{children:o?Object(b.jsx)(J,Object(y.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(b.jsxs)("span",Object(y.a)(Object(y.a)({onDoubleClick:function(e){j(!0),d&&d(e)},className:x},O),{},{children:["\u270e ",u||c.value]}))})};function Q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ee(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}Q("test",{x:"A",y:1});ee("test",{x:"",y:0});var te=function(){var e=Object(r.useState)(""),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 6",Object(b.jsx)("div",{children:Object(b.jsx)($,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(b.jsx)(W,{style:{margin:"10px"},onClick:function(){Q("editable-span-value",n)},children:"save"}),Object(b.jsx)(W,{style:{margin:"10px"},onClick:function(){var e=ee("editable-span-value","");a(e)},children:"restore"}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var ne=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"Pre-junior homeworks.",Object(b.jsx)("hr",{}),Object(b.jsx)(g,{}),Object(b.jsx)(F,{}),Object(b.jsx)(q,{}),Object(b.jsx)(V,{}),Object(b.jsx)(te,{})]})},re=n(27),ae=n.n(re),ce=function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,a=Object(w.a)(e,["options","onChange","onChangeOption"]),c=t?t.map((function(e,t){return Object(b.jsx)("option",{value:e,children:e},t)})):[];return Object(b.jsx)("select",Object(y.a)(Object(y.a)({className:ae.a.default,onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},a),{},{children:c}))},se=function(e){e.type;var t=e.name,n=e.options,r=e.value,a=e.onChange,c=e.onChangeOption,s=(Object(w.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){a&&a(e),c&&c(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",{type:"radio",onChange:s,name:t,value:e,checked:r===e}),e]},t+"-"+n)})):[];return Object(b.jsx)(b.Fragment,{children:i})},ie=["Python","ReactJS","C#"];var oe=function(){var e=Object(r.useState)(ie[1]),t=Object(C.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 7",Object(b.jsx)("div",{children:Object(b.jsx)(ce,{options:ie,value:n,onChangeOption:a})}),Object(b.jsx)("div",{children:Object(b.jsx)(se,{name:"radio",options:ie,value:n,onChangeOption:a})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var je=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"Junior homeworks.",Object(b.jsx)("hr",{}),Object(b.jsx)(oe,{})]})};var le=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"Junior Plus homeworks will be placed here soon enough...",Object(b.jsx)("hr",{})]})},ue="/pre-junior",de="/junior",be="/junior-plus";var he=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(d.d,{children:[Object(b.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(d.a,{to:ue})}}),Object(b.jsx)(d.b,{path:ue,render:function(){return Object(b.jsx)(ne,{})}}),Object(b.jsx)(d.b,{path:de,render:function(){return Object(b.jsx)(je,{})}}),Object(b.jsx)(d.b,{path:be,render:function(){return Object(b.jsx)(le,{})}}),Object(b.jsx)(d.b,{render:function(){return Object(b.jsx)(h,{})}})]})})};var Oe=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{className:u.a.headerLinks,children:[Object(b.jsx)(j.b,{to:ue,activeClassName:u.a.activeLink,children:"pre-junior"}),Object(b.jsx)(j.b,{to:de,activeClassName:u.a.activeLink,children:"junior"}),Object(b.jsx)(j.b,{to:be,activeClassName:u.a.activeLink,children:"junior-plus"}),Object(b.jsx)("span",{className:u.a.toggleControl})]})})]})};var xe=function(){return Object(b.jsx)("div",{className:u.a.appWrapper,children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)(Oe,{}),Object(b.jsx)(he,{})]})})};var pe=function(){return Object(b.jsx)("div",{className:o.a.App,children:Object(b.jsx)(xe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[40,1,2]]]);
//# sourceMappingURL=main.a39cf79f.chunk.js.map