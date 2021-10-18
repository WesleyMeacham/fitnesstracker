(this.webpackJsonpfitness=this.webpackJsonpfitness||[]).push([[0],{25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(17),a=n.n(s),i=n(2),o=n.n(i),u=n(5),j=n(3),l=(n(25),n(4)),d=n(10),b=n(0),h=function(e){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("header",{children:[Object(b.jsx)("div",{className:"siteName",children:Object(b.jsx)("h1",{className:"siteTitle",children:"Fitness Tracker"})}),Object(b.jsxs)("div",{className:"navContainer",children:[Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("button",{className:"navButtons",children:"Home"})}),Object(b.jsx)(d.b,{to:"/activities",children:Object(b.jsx)("button",{className:"navButtons",children:"Activities"})}),Object(b.jsx)(d.b,{to:"/routines",children:Object(b.jsx)("button",{className:"navButtons",children:"Routines"})}),!e.user&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.b,{to:"/login",children:Object(b.jsx)("button",{className:"navButtons",children:"Log In"})}),Object(b.jsx)(d.b,{to:"/register",children:Object(b.jsx)("button",{className:"navButtons",children:"Register"})})]}),e.user&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(d.b,{to:"/myroutines",children:Object(b.jsx)("button",{className:"navButtons",children:"My Routines "})}),Object(b.jsx)(d.b,{onClick:function(){localStorage.removeItem("token"),e.setUser(null)},to:"/",children:Object(b.jsx)("button",{className:"navButtons",children:"Log Out"})})]})]})]})})},O=function(e){return e.user?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:["Welcome ",e.user.username]})}):Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"container",children:"Welcome"})})},p="http://fitnesstrac-kr.herokuapp.com/api",x=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),l=i[0],d=i[1],h=e.token,O=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("".concat(p,"/activities"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(h," ")},body:JSON.stringify({name:"".concat(c),description:"".concat(l)})});case 3:return r=t.sent,t.next=6,r.json();case 6:(a=t.sent).error&&e.setErrorMessage(a.message),console.log(a),s(""),d("");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:O,className:"actForm",children:[Object(b.jsx)("h1",{children:"Create a New Activitiy"}),Object(b.jsx)("input",{type:"text",placeholder:"Activity Name",value:c,onChange:function(e){return s(e.target.value)},required:!0}),Object(b.jsx)("textarea",{cols:"30",rows:"5",placeholder:"Write a Short Description of your Activity",value:l,onChange:function(e){return d(e.target.value)},required:!0}),Object(b.jsx)("button",{children:"Submit"})]}),Object(b.jsx)("p",{children:e.errorMessage})]})},v=function(e){var t=e.activities;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsxs)("div",{className:"actCard",children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsxs)("p",{children:[e.description," "]})]},e.id)}))})},m=function(e){if(e.user){var t=e.user.token;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[e.user&&Object(b.jsx)(x,{token:t,setActivities:e.setActivities}),Object(b.jsx)("div",{className:"cardDisplay",children:Object(b.jsx)(v,{setActivities:e.setActivities,activities:e.activities})})]})})}return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"cardDisplay",children:Object(b.jsx)(v,{setActivities:e.setActivities,activities:e.activities})})})},f=function(e){var t=e.routines;return Object(b.jsx)(b.Fragment,{children:t.map((function(e){return Object(b.jsxs)("div",{className:"routCard",children:[Object(b.jsxs)("h3",{children:[e.name," "]}),Object(b.jsxs)("p",{children:["Goal: ",e.goal," "]}),Object(b.jsxs)("p",{children:["Created By: ",e.creatorName," "]}),Object(b.jsxs)("div",{children:["Activities Include:",e.activities.map((function(e){return Object(b.jsxs)("div",{className:"actCard",children:[Object(b.jsxs)("h5",{children:[e.name," "]}),Object(b.jsxs)("p",{children:[e.description," "]})]},e.id)}))]})]},e.id)}))})},g=function(e){return Object(b.jsx)("div",{className:"container",children:Object(b.jsx)("div",{className:"cardDisplay",children:Object(b.jsx)(f,{routines:e.routines,setRoutines:e.setRoutines,getRoutines:e.getRoutines})})})},y=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),l=i[0],d=i[1],h=Object(r.useState)(!0),O=Object(j.a)(h,2),x=O[0],v=O[1];if(e.user){var m=e.user.token,f=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("".concat(p,"/routines"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(m," ")},body:JSON.stringify({name:"".concat(c),goal:"".concat(l),isPublic:"".concat(x)})});case 3:return r=t.sent,t.next=6,r.json();case 6:(a=t.sent).error&&e.setErrorMessage(a.message),console.log(a),s(""),d(""),v(!0);case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:f,className:"actForm",children:[Object(b.jsx)("h1",{children:"Create a New Routine"}),Object(b.jsx)("input",{type:"text",placeholder:"Routine Name",value:c,onChange:function(e){return s(e.target.value)},required:!0}),Object(b.jsx)("input",{type:"text",placeholder:"Write a Short Description of your Activity",value:l,onChange:function(e){return d(e.target.value)},required:!0}),Object(b.jsxs)("select",{value:x,onChange:function(e){v(e.target.value)},children:[Object(b.jsx)("option",{value:!0,children:"Public"}),Object(b.jsx)("option",{value:!1,children:"Private"})]}),Object(b.jsx)("button",{children:"Submit"})]}),Object(b.jsx)("p",{children:e.errorMessage})]})}return Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)("h1",{children:"Loading!"})})},N=function(e){var t=Object(r.useState)("false"),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),l=i[0],d=i[1],h=Object(r.useState)(""),O=Object(j.a)(h,2),x=O[0],v=O[1],m=e.activity.routineActivityId,f=e.user.token,g=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("".concat(p,"/routine_activities/").concat(m),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(f," ")},body:JSON.stringify({count:"".concat(l),duration:"".concat(x)})});case 3:return r=t.sent,t.next=6,r.json();case 6:(c=t.sent).error&&e.setErrorMessage(c.message),d(""),v("");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/routine_activities/").concat(n),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(f)}});case 2:return r=t.sent,t.next=5,r.json();case 5:(c=t.sent).error&&e.setErrorMessage(c.message);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:function(){s(!c)},className:"actCardButton",children:"Edit or Remove"}),Object(b.jsx)("div",{className:c?"open":null,children:Object(b.jsxs)("form",{onSubmit:g,className:"updateForm",children:[Object(b.jsx)("h3",{children:"Update Activity"}),Object(b.jsx)("label",{children:"Count:"}),Object(b.jsx)("input",{type:"number",placeholder:"0",min:"0",value:l,onChange:function(e){return d(e.target.value)},required:!0}),Object(b.jsx)("label",{children:"Duration:"}),Object(b.jsx)("input",{type:"number",placeholder:"0",min:"0",value:x,onChange:function(e){return v(e.target.value)},required:!0}),Object(b.jsx)("button",{className:"actCardButton",type:"submit",children:"Submit"}),Object(b.jsx)("p",{children:"or"}),Object(b.jsx)("button",{onClick:function(e){y(m)},className:"deleteActivity",children:"Remove"})]})})]})},S=function(e){var t=Object(r.useState)("false"),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)("false"),i=Object(j.a)(a,2),l=i[0],d=i[1],h=Object(r.useState)(""),O=Object(j.a)(h,2),x=O[0],v=O[1],m=Object(r.useState)(""),f=Object(j.a)(m,2),g=f[0],y=f[1],N=Object(r.useState)(!0),S=Object(j.a)(N,2),C=S[0],k=S[1],E=Object(r.useState)(""),w=Object(j.a)(E,2),A=w[0],M=w[1],R=Object(r.useState)(""),T=Object(j.a)(R,2),F=T[0],D=T[1],B=Object(r.useState)(""),P=Object(j.a)(B,2),I=P[0],q=P[1],J=e.routineId,U=e.activities;if(e.user){var z=e.user.token,L=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,fetch("".concat(p,"/routines/").concat(J),{method:"PATCH",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(z," ")},body:JSON.stringify({name:"".concat(x),goal:"".concat(g),isPublic:"".concat(C)})});case 3:return r=t.sent,t.next=6,r.json();case 6:(c=t.sent).error&&e.setErrorMessage(c.message),console.log(c),v(""),y("");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),W=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/routines/").concat(n),{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(z)}});case 2:return r=t.sent,t.next=5,r.json();case 5:(c=t.sent).error&&e.setErrorMessage(c.message);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),H=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),console.log("activityId",I,"count",A,"duration",F),t.next=4,fetch("".concat(p,"/routines/").concat(J,"/activities"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({activityId:"".concat(I),count:"".concat(A),duration:"".concat(F)})});case 4:return r=t.sent,t.next=7,r.json();case 7:c=t.sent,console.log(c),c.error&&e.setErrorMessage(c.message),M(""),D(""),n.target.reset();case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"editOrDelete",children:[Object(b.jsx)("button",{onClick:function(){s(!c)},className:"updateRoutine",children:"Edit"}),Object(b.jsx)("button",{onClick:function(){d(!l)},className:"updateRoutine",children:"Add Activity"}),Object(b.jsx)("button",{onClick:function(){return W(J)},className:"deleteRoutine",children:"Delete"})]}),Object(b.jsxs)("div",{className:c?"open":null,children:[Object(b.jsxs)("form",{onSubmit:L,className:"updateForm",children:[Object(b.jsx)("h1",{children:"Edit Routine"}),Object(b.jsx)("input",{type:"text",placeholder:"Routine Name",value:x,onChange:function(e){return v(e.target.value)},required:!0}),Object(b.jsx)("input",{type:"text",placeholder:"Write a Short Description of your Activity",value:g,onChange:function(e){return y(e.target.value)},required:!0}),Object(b.jsxs)("select",{value:C,onChange:function(e){k(e.target.value)},children:[Object(b.jsx)("option",{value:!0,children:"Public"}),Object(b.jsx)("option",{value:!1,children:"Private"})]}),Object(b.jsx)("button",{children:"Submit"})]}),Object(b.jsx)("p",{children:e.errorMessage})]}),Object(b.jsxs)("div",{className:l?"open":null,children:[Object(b.jsxs)("form",{onSubmit:H,className:"updateForm",children:[Object(b.jsx)("h1",{children:"Add Activities to Routine"}),Object(b.jsx)("select",{className:"selectAct",onChange:function(e){return q(e.target.value)},children:U.map((function(e){return Object(b.jsx)("option",{value:e.id,children:e.name},e.id)}))}),Object(b.jsx)("label",{children:"Count:"}),Object(b.jsx)("input",{type:"number",placeholder:"0",min:"0",value:A,onChange:function(e){return M(e.target.value)},required:!0}),Object(b.jsx)("label",{children:"Duration:"}),Object(b.jsx)("input",{type:"number",placeholder:"0",min:"0",value:F,onChange:function(e){return D(e.target.value)},required:!0}),Object(b.jsx)("button",{children:"Submit"})]}),Object(b.jsx)("p",{children:e.errorMessage})]})]})}return Object(b.jsx)("div",{className:"loading",children:Object(b.jsx)("h1",{children:"Loading!"})})},C=function(e){var t=e.routines,n=e.user;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(y,{user:n,setErrorMessage:e.setErrorMessage}),Object(b.jsx)("div",{className:"cardDisplay",children:t.filter((function(e){return e.creatorId===n.id})).map((function(r){return Object(b.jsxs)("div",{className:"routCard",children:[Object(b.jsxs)("h3",{children:[r.name," "]}),Object(b.jsxs)("p",{children:["Goal: ",r.goal," "]}),Object(b.jsxs)("p",{children:["Created By: ",r.creatorName," "]}),Object(b.jsxs)("div",{children:["Activities Include:",r.activities.map((function(t){return Object(b.jsxs)("div",{className:"actCard",children:[Object(b.jsxs)("h5",{children:[t.name," "]}),Object(b.jsxs)("p",{children:[t.description," "]}),Object(b.jsxs)("p",{children:["Count: ",t.count]}),Object(b.jsxs)("p",{children:["Duration: ",t.duration]}),Object(b.jsx)(N,{user:n,activity:t,setRoutines:e.setRoutines,getRoutines:e.getRoutines,setErrorMessage:e.setErrorMessage})]},t.id)}))]}),Object(b.jsx)(S,{user:n,routineId:r.id,routines:t,setRoutines:e.setRoutines,getRoutines:e.getRoutines,activities:e.activities,setErrorMessage:e.setErrorMessage})]},r.id)}))})]})})},k=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),d=i[0],h=i[1],O=Object(l.e)(),x=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.setErrorMessage(""),t.next=4,fetch("".concat(p,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:d})});case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,console.log(s),s.error&&e.setErrorMessage(s.message),console.log(s.token),localStorage.setItem("token",s.token),O.push("/");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("form",{onSubmit:x,children:[Object(b.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},placeholder:"Enter Username...",type:"text"}),Object(b.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},placeholder:"Enter Password...",type:"password"}),Object(b.jsx)("button",{children:"Login"})]}),Object(b.jsx)("p",{children:e.errorMessage})]})})},E=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(""),i=Object(j.a)(a,2),d=i[0],h=i[1],O=Object(l.e)(),x=function(){var t=Object(u.a)(o.a.mark((function t(n){var r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),e.setErrorMessage(""),t.next=4,fetch("".concat(p,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:d})});case 4:return r=t.sent,t.next=7,r.json();case 7:s=t.sent,console.log(s),s.error&&e.setErrorMessage(s.message),console.log(s.token),localStorage.setItem("token",s.token),e.setUser({id:s.user.id,username:s.user.username,token:s.token}),O.push("/");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("form",{onSubmit:x,children:[Object(b.jsx)("input",{value:c,onChange:function(e){return s(e.target.value)},placeholder:"Enter Username...",type:"text"}),Object(b.jsx)("input",{value:d,onChange:function(e){return h(e.target.value)},placeholder:"Enter Password...",type:"password"}),Object(b.jsx)("button",{children:"Register"})]}),Object(b.jsx)("p",{children:e.errorMessage})]})})};var w=function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(j.a)(s,2),i=a[0],d=a[1],x=Object(r.useState)(""),v=Object(j.a)(x,2),f=v[0],y=v[1],N=Object(r.useState)([]),S=Object(j.a)(N,2),w=S[0],A=S[1];return Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/activities"),{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,d(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(p,"/routines"),{headers:{"Content-Type":"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,A(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[w]),Object(r.useEffect)((function(){var e=localStorage.getItem("token");if(!e)return c(null);var t=function(){var t=Object(u.a)(o.a.mark((function t(){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(p,"/users/me"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,c({id:r.id,username:r.username,token:e});case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{setUser:c,user:n}),Object(b.jsx)(l.a,{exact:!0,path:"/",children:Object(b.jsx)(O,{user:n})}),Object(b.jsx)(l.a,{path:"/activities",children:Object(b.jsx)(m,{user:n,activities:i,setActivities:d})}),Object(b.jsx)(l.a,{path:"/routines",children:Object(b.jsx)(g,{user:n,routines:w,setRoutines:A})}),Object(b.jsx)(l.a,{path:"/myroutines",children:Object(b.jsx)(C,{user:n,routines:w,setRoutines:A,setErrorMessage:y,activities:i})}),Object(b.jsx)(l.a,{path:"/login",children:Object(b.jsx)(k,{setUser:c,errorMessage:f,setErrorMessage:y})}),Object(b.jsx)(l.a,{path:"/register",children:Object(b.jsx)(E,{setUser:c,errorMessage:f,setErrorMessage:y})})]})};n(32);a.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(d.a,{children:Object(b.jsx)(w,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.7df10b2e.chunk.js.map