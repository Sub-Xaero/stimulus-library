"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[6238],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(3117),a=n(102),l=(n(7294),n(3905)),o=["components"],i={id:"useLocalStorage",title:"useLocalStorage"},u=void 0,s={unversionedId:"mixins/useLocalStorage",id:"mixins/useLocalStorage",title:"useLocalStorage",description:"Purpose",source:"@site/docs/mixins/use_localstorage.mdx",sourceDirName:"mixins",slug:"/mixins/useLocalStorage",permalink:"/stimulus-library/docs/mixins/useLocalStorage",tags:[],version:"current",frontMatter:{id:"useLocalStorage",title:"useLocalStorage"},sidebar:"DocsSidebar",previous:{title:"useInterval",permalink:"/stimulus-library/docs/mixins/useInterval"},next:{title:"useTemporaryContent",permalink:"/stimulus-library/docs/mixins/useTemporaryContent"}},p=[{value:"Purpose",id:"purpose",children:[{value:"useLocalStorage",id:"uselocalstorage",children:[],level:3}],level:2},{value:"Side Effects",id:"side-effects",children:[],level:2},{value:"How to Use",id:"how-to-use",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"purpose"},"Purpose"),(0,l.kt)("p",null,"A mixin to enable easy use of the ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," API."),(0,l.kt)("h3",{id:"uselocalstorage"},"useLocalStorage"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"controller")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Controller")),(0,l.kt)("td",{parentName:"tr",align:null},"The instance of the controller to install the behaviour on. This allows the mixin to automatically register cleanup on the controller's ",(0,l.kt)("inlineCode",{parentName:"td"},"disconnect"),"."),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"this"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"identifier")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"defaultValue")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Function(position)")),(0,l.kt)("td",{parentName:"tr",align:null},"The default value to use if there is none stored. The value given here will determine how the mixin serializes future data read/writes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"options")," (Optional)"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object")),(0,l.kt)("td",{parentName:"tr",align:null},"An object of options to configure the mixin's behaviour"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"-"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"writeDefaults"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,l.kt)("td",{parentName:"tr",align:null},"If the LocalStorage value is empty, whether to write the given default to storage on load"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"true"))))),(0,l.kt)("h2",{id:"side-effects"},"Side Effects"),(0,l.kt)("p",null,"Stores a JSON value in LocalStorage."),(0,l.kt)("h2",{id:"how-to-use"},"How to Use"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"\nimport {Controller} from 'stimulus';\nimport {useLocalStorage} from 'stimulus-library';\n\nexport default class extends Controller {\n\n  connect() {\n    this.store = useLocalStorage(this, 'my-value', 42)\n\n    this.store.value // Reactive property that reflects the value in LocalStorage\n    this.store.isEmpty // Reactive value that is true if the store is empty\n    this.store.read() // returns the value stored in LocalStorage\n    this.store.write(value) // the raw value to be stored in LocalStorage. Should be the same type as the default value.\n    this.store.clear() // clears the stored value\n  }\n\n}\n\n")))}d.isMDXComponent=!0}}]);