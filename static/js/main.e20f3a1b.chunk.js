(this["webpackJsonpcollision-app-demo"]=this["webpackJsonpcollision-app-demo"]||[]).push([[0],{105:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(28),r=n.n(c),l=n(71),u=n(82),o=n(48),s=n(123),d=n(122),j=n(120),b=n(61),h=n(9),p=function(e){var t=e.index,n=e.item,i=e.collisionList,a=e.handleDelete,c=e.handleInputChange;return Object(h.jsxs)(d.a,{basic:!0,role:"inputbox",children:[Object(h.jsx)(b.a,{size:"large",role:"label",children:t}),Object(h.jsx)(j.a,{type:"text",style:{marginRight:".8rem"},value:n.inputVal,onChange:function(e){return c(e,n.id)},"data-testid":"input-string"}),Object(h.jsx)("button",{className:"ui button red icon",onClick:function(){return a(n.id)},children:Object(h.jsx)("i",{"aria-hidden":"true",className:"trash alternate outline icon"})}),Object(h.jsx)(j.a,{type:"text",style:{marginLeft:".8rem"},value:i[t]?i[t].join(","):"","data-testid":"input-collision",disabled:!0,readOnly:!0})]})};var f=function(){var e=Object(i.useState)(3),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),r=Object(o.a)(c,2),b=r[0],f=r[1],O=Object(i.useState)(1),g=Object(o.a)(O,2),x=g[0],m=g[1],v=Object(i.useState)([]),y=Object(o.a)(v,2),C=y[0],k=y[1],S=Object(i.useRef)(!0);return Object(i.useEffect)((function(){S.current?S.current=!1:function(e,t){var n=e.map((function(){return[]}));t=parseInt(t),!e.length||e.length<=1||e.forEach((function(i,a){var c=i.inputVal,r=[];if(c.length>=t){for(var l=[],u=0;u<c.length-t+1;u++)l.push(c.slice(u,t+u));for(var o=0;o<e.length;o++)if(a!==o)for(var s=e[o].inputVal,d=0;d<l.length;d++)if(-1!==s.indexOf(l[d])){r.push(o);break}}n[a]=r})),k(n)}(b,n)}),[b,n]),Object(h.jsxs)("div",{className:"ui container",style:{marginTop:"10px"},children:[Object(h.jsx)(s.a,{as:"h3",block:!0,icon:"cubes",content:"Collision Analyzer"}),b.length?Object(h.jsx)(d.a.Group,{children:b.map((function(e,t){return Object(h.jsx)(p,{index:t,item:e,collisionList:C,handleDelete:function(e){return function(e){f(b.filter((function(t){return e!==t.id})))}(e)},handleInputChange:function(e,t){return function(e,t){f(b.map((function(n){return t!==n.id?n:Object(l.a)(Object(l.a)({},n),{},{inputVal:e.target.value.replace(/ /g,"").toUpperCase()})})))}(e,t)}},e.id)}))}):null,Object(h.jsxs)(d.a,{compact:!0,textAlign:"center",children:[Object(h.jsx)("div",{style:{marginBottom:".5rem"},children:Object(h.jsx)("button",{className:"ui button primary",onClick:function(){f([].concat(Object(u.a)(b),[{id:x,inputVal:""}])),m(x+1)},children:"Add"})}),Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{type:"number",style:{width:"68px"},value:n,onChange:function(e){return a(e.target.value)},"data-testid":"input-number"})})]})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,124)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};n(104);r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),O()}},[[105,1,2]]]);
//# sourceMappingURL=main.e20f3a1b.chunk.js.map