(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(2),i=t(0),a=t(16),l=t(3),s=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"/personal-site",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,b=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(b);var o=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=t(8),d=t(32),h=[{index:!0,label:"Alisha Nanda",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return t.e(4).then(t.t.bind(null,166,7))})),x=function(){var e=Object(i.useState)(!1),n=Object(d.a)(e,2),t=n[0],a=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return a(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},p=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(x,{})]})},m=t(24),f=function(){return Object(c.jsx)("section",{id:"sidebar",children:Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(m.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Alisha Nanda ",Object(c.jsx)(u.b,{to:"/",children:"ananda1066.github.io/personal-site"}),"."]})]})})},N=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(N,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Alisha Nanda",defaultTitle:"Alisha Nanda",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(p,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Alisha Nanda's personal website."};n.a=v},24:function(e,n,t){"use strict";var c=t(2),i=(t(0),t(28)),a=t(29),l=t(30),s=t(31),r=[{link:"https://github.com/ananda1066",label:"Github",icon:a.faGithub},{link:"https://www.linkedin.com/in/alishananda",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:alishananda@gmail.com",label:"Email",icon:s.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},45:function(e,n,t){},46:function(e,n,t){"use strict";t.r(n);var c=t(2),i=t(0),a=t.n(i),l=t(15),s=t(8),r=t(3),j=t(21),b=(t(45),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(7)]).then(t.bind(null,162))}))),o=Object(i.lazy)((function(){return t.e(8).then(t.bind(null,163))})),u=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,164))})),d=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,165))})),h=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,168))})),O=Object(i.lazy)((function(){return t.e(5).then(t.bind(null,167))})),x=function(){return Object(c.jsx)(s.a,{basename:"/personal-site",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:b}),Object(c.jsx)(r.a,{path:"/projects",component:h}),Object(c.jsx)(r.a,{path:"/contact",component:o}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})})},m=document.getElementById("root");m.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),m):Object(l.render)(Object(c.jsx)(p,{}),m)}},[[46,1,3]]]);
//# sourceMappingURL=main.84599374.chunk.js.map