(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[5930],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(u,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},694:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var r=n(4034),o=n(9973),a=(n(7294),n(3905)),i=["components"],l={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},u=void 0,s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"To get started, you'll need to add the stimulus-library package to your project.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/",permalink:"/stimulus-library/docs/",tags:[],version:"current",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/"},sidebar:"someSidebar",next:{title:"Tree-shaking",permalink:"/stimulus-library/docs/treeshaking"}},c=[],p={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To get started, you'll need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"stimulus-library")," package to your project."),(0,a.kt)("p",null,"To do so, either add ",(0,a.kt)("inlineCode",{parentName:"p"},"stimulus-library")," to your package.json manually"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "stimulus-library": "latest"\n  }\n}\n')),(0,a.kt)("p",null,"or run\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm install --save stimulus-library")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn add stimulus-library")),(0,a.kt)("p",null,"Then, to get started, import and register the controllers you want to use."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Please Note")," as below, that when registering the name for the controller, you should use ",(0,a.kt)("inlineCode",{parentName:"p"},"kebab-case")," and omit the ",(0,a.kt)("inlineCode",{parentName:"p"},"-controller")," suffix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Application } from "stimulus";\nimport { AutoSubmitFormController } from "stimulus-library";\n\nconst application = Application.start();\napplication.register("auto-submit-form", AutoSubmitFormController);\n')))}m.isMDXComponent=!0}}]);