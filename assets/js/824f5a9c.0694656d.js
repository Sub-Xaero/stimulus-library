(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[1178],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),g=o,m=f["".concat(i,".").concat(g)]||f[g]||p[g]||a;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5099:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var n=r(4034),o=r(9973),a=(r(7294),r(3905)),l=["components"],c={},i=void 0,s={unversionedId:"examples/toggle_class_controller_click.haml",id:"examples/toggle_class_controller_click.haml",isDocsHomePage:!1,title:"toggle_class_controller_click.haml",description:"",source:"@site/docs/examples/toggle_class_controller_click.haml.mdx",sourceDirName:"examples",slug:"/examples/toggle_class_controller_click.haml",permalink:"/stimulus-library/docs/examples/toggle_class_controller_click.haml",tags:[],version:"current",frontMatter:{}},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-haml"},'%div{"data-controller" => "toggle-class", "data-toggle-class-class-value" => "hidden", "data-toggle-class-click-away-value" => "true", "data-toggle-class-initial-value" => "on"}\n  %button#user-menu.navbar-button{"data-action" => "click->toggle-class#toggle"}\n    %i.far.fa-bell\n    %span.hidden.dropdown{"data-toggle-class-target" => "toggle"}\n      %a.dropdown-link{href: "/profile"} Your Profile\n      %a.dropdown-link{href: "/settings"} Settings\n      %a.dropdown-link{href: "/sign-out"} Sign Out\n')))}f.isMDXComponent=!0}}]);