(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{382:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return l})),n.d(e,"h",(function(){return c})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return d}));n(37),n(98),n(384),n(127),n(383),n(214),n(96),n(128),n(10),n(129),n(47),n(133),n(212);var i=/#.*$/,r=/\.(md|html)$/,s=/\/$/,o=/^[a-z]+:/i;function a(t){return decodeURI(t).replace(i,"").replace(r,"")}function u(t){return o.test(t)}function l(t){return/^mailto:/.test(t)}function c(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(i),n=e?e[0]:"",r=a(t);return s.test(r)?t:r+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),r=function(t){var e=t.match(i);if(e)return e[0]}(e);return(!r||n===r)&&a(t.path)===a(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;var r=e.split("/");n&&r[r.length-1]||r.pop();for(var s=t.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}""!==r[0]&&r.unshift("");return r.join("/")}(e,n));for(var i=a(e),r=0;r<t.length;r++)if(a(t[r].regularPath)===i)return Object.assign({},t[r],{type:"page",path:f(t[r].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function d(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},383:function(t,e,n){"use strict";var i=n(38),r=n(8),s=n(4),o=n(208),a=n(211),u=n(13),l=n(30),c=n(132),f=n(209),h=n(97),p=n(18),g=n(71),d=n(213),v=n(210),m=n(99),k=n(207),x=n(5),b=k.UNSUPPORTED_Y,w=Math.min,y=[].push,_=s(/./.exec),C=s(y),$=s("".slice);o("split",(function(t,e,n){var s;return s="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var s=p(l(this)),o=void 0===n?4294967295:n>>>0;if(0===o)return[];if(void 0===t)return[s];if(!a(t))return r(e,s,t,o);for(var u,c,f,h=[],g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,k=new RegExp(t.source,g+"g");(u=r(m,k,s))&&!((c=k.lastIndex)>v&&(C(h,$(s,v,u.index)),u.length>1&&u.index<s.length&&i(y,h,d(u,1)),f=u[0].length,v=c,h.length>=o));)k.lastIndex===u.index&&k.lastIndex++;return v===s.length?!f&&_(k,"")||C(h,""):C(h,$(s,v)),h.length>o?d(h,0,o):h}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r(e,this,t,n)}:e,[function(e,n){var i=l(this),o=null==e?void 0:g(e,t);return o?r(o,e,i,n):r(s,p(i),e,n)},function(t,i){var r=u(this),o=p(t),a=n(s,r,o,i,s!==e);if(a.done)return a.value;var l=c(r,RegExp),g=r.unicode,d=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(b?"g":"y"),m=new l(b?"^(?:"+r.source+")":r,d),k=void 0===i?4294967295:i>>>0;if(0===k)return[];if(0===o.length)return null===v(m,o)?[o]:[];for(var x=0,y=0,_=[];y<o.length;){m.lastIndex=b?0:y;var L,O=v(m,b?$(o,y):o);if(null===O||(L=w(h(m.lastIndex+(b?y:0)),o.length))===x)y=f(o,y,g);else{if(C(_,$(o,x,y)),_.length===k)return _;for(var I=1;I<=O.length-1;I++)if(C(_,O[I]),_.length===k)return _;y=x=L}}return C(_,$(o,x)),_}]}),!!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),b)},384:function(t,e,n){"use strict";var i=n(8),r=n(208),s=n(13),o=n(97),a=n(18),u=n(30),l=n(71),c=n(209),f=n(210);r("match",(function(t,e,n){return[function(e){var n=u(this),r=null==e?void 0:l(e,t);return r?i(r,e,n):new RegExp(e)[t](a(n))},function(t){var i=s(this),r=a(t),u=n(e,i,r);if(u.done)return u.value;if(!i.global)return f(i,r);var l=i.unicode;i.lastIndex=0;for(var h,p=[],g=0;null!==(h=f(i,r));){var d=a(h[0]);p[g]=d,""===d&&(i.lastIndex=c(r,o(i.lastIndex),l)),g++}return 0===g?null:p}]}))},389:function(t,e,n){"use strict";n(390),n(130),n(10),n(131);var i=n(382),r={name:"NavLink",props:{item:{required:!0}},computed:{link:function(){return Object(i.b)(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some((function(e){return e===t.link})):"/"===this.link},isNonHttpURI:function(){return Object(i.g)(this.link)||Object(i.h)(this.link)},isBlankTarget:function(){return"_blank"===this.target},isInternal:function(){return!Object(i.f)(this.link)&&!this.isBlankTarget},target:function(){return this.isNonHttpURI?null:this.item.target?this.item.target:Object(i.f)(this.link)?"_blank":""},rel:function(){return this.isNonHttpURI||!1===this.item.rel?null:this.item.rel?this.item.rel:this.isBlankTarget?"noopener noreferrer":null}},methods:{focusoutAction:function(){this.$emit("focusout")}}},s=n(36),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isInternal?n("RouterLink",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact},nativeOn:{focusout:function(e){return t.focusoutAction.apply(null,arguments)}}},[t._v("\n  "+t._s(t.item.text)+"\n")]):n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.target,rel:t.rel},on:{focusout:t.focusoutAction}},[t._v("\n  "+t._s(t.item.text)+"\n  "),t.isBlankTarget?n("OutboundLink"):t._e()],1)}),[],!1,null,null,null);e.a=o.exports},390:function(t,e,n){"use strict";var i=n(3),r=n(391);i({target:"String",proto:!0,forced:n(392)("link")},{link:function(t){return r(this,"a","href",t)}})},391:function(t,e,n){var i=n(4),r=n(30),s=n(18),o=/"/g,a=i("".replace);t.exports=function(t,e,n,i){var u=s(r(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+a(s(i),o,"&quot;")+'"'),l+">"+u+"</"+e+">"}},392:function(t,e,n){var i=n(5);t.exports=function(t){return i((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},407:function(t,e,n){"use strict";var i=n(3),r=n(221).trim;i({target:"String",proto:!0,forced:n(450)("trim")},{trim:function(){return r(this)}})},408:function(t,e,n){var i=n(11),r=n(0),s=n(4),o=n(103),a=n(138),u=n(22),l=n(48).f,c=n(32),f=n(211),h=n(18),p=n(409),g=n(207),d=n(227),v=n(16),m=n(5),k=n(12),x=n(39).enforce,b=n(223),w=n(7),y=n(216),_=n(226),C=w("match"),$=r.RegExp,L=$.prototype,O=r.SyntaxError,I=s(L.exec),E=s("".charAt),S=s("".replace),R=s("".indexOf),j=s("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,N=/a/g,D=/a/g,W=new $(N)!==N,P=g.MISSED_STICKY,T=g.UNSUPPORTED_Y,H=i&&(!W||P||y||_||m((function(){return D[C]=!1,$(N)!=N||$(D)==D||"/a/i"!=$(N,"i")})));if(o("RegExp",H)){for(var B=function(t,e){var n,i,r,s,o,l,g=c(L,this),d=f(t),v=void 0===e,m=[],b=t;if(!g&&d&&v&&t.constructor===B)return t;if((d||c(L,t))&&(t=t.source,v&&(e=p(b))),t=void 0===t?"":h(t),e=void 0===e?"":h(e),b=t,y&&"dotAll"in N&&(i=!!e&&R(e,"s")>-1)&&(e=S(e,/s/g,"")),n=e,P&&"sticky"in N&&(r=!!e&&R(e,"y")>-1)&&T&&(e=S(e,/y/g,"")),_&&(t=(s=function(t){for(var e,n=t.length,i=0,r="",s=[],o={},a=!1,u=!1,l=0,c="";i<=n;i++){if("\\"===(e=E(t,i)))e+=E(t,++i);else if("]"===e)a=!1;else if(!a)switch(!0){case"["===e:a=!0;break;case"("===e:I(A,j(t,i+1))&&(i+=2,u=!0),r+=e,l++;continue;case">"===e&&u:if(""===c||k(o,c))throw new O("Invalid capture group name");o[c]=!0,s[s.length]=[c,l],u=!1,c="";continue}u?c+=e:r+=e}return[r,s]}(t))[0],m=s[1]),o=a($(t,e),g?this:L,B),(i||r||m.length)&&(l=x(o),i&&(l.dotAll=!0,l.raw=B(function(t){for(var e,n=t.length,i=0,r="",s=!1;i<=n;i++)"\\"!==(e=E(t,i))?s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),r+=e):r+="[\\s\\S]":r+=e+E(t,++i);return r}(t),n)),r&&(l.sticky=!0),m.length&&(l.groups=m)),t!==b)try{u(o,"source",""===b?"(?:)":b)}catch(t){}return o},U=l($),M=0;U.length>M;)d(B,$,U[M++]);L.constructor=B,B.prototype=L,v(r,"RegExp",B)}b("RegExp")},409:function(t,e,n){var i=n(8),r=n(12),s=n(32),o=n(225),a=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in a||r(t,"flags")||!s(a,t)?e:i(o,t)}},410:function(t,e,n){var i=n(0),r=n(11),s=n(216),o=n(27),a=n(14).f,u=n(39).get,l=RegExp.prototype,c=i.TypeError;r&&s&&a(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!u(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},411:function(t,e,n){var i=n(0),r=n(11),s=n(207).MISSED_STICKY,o=n(27),a=n(14).f,u=n(39).get,l=RegExp.prototype,c=i.TypeError;r&&s&&a(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===o(this))return!!u(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},412:function(t,e,n){"use strict";var i=n(101).PROPER,r=n(16),s=n(13),o=n(18),a=n(5),u=n(409),l=RegExp.prototype.toString,c=a((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),f=i&&"toString"!=l.name;(c||f)&&r(RegExp.prototype,"toString",(function(){var t=s(this);return"/"+o(t.source)+"/"+o(u(t))}),{unsafe:!0})},413:function(t,e,n){},414:function(t,e,n){},415:function(t,e,n){},416:function(t,e,n){},417:function(t,e,n){},418:function(t,e,n){},431:function(t,e,n){"use strict";n(448),n(407),n(212),n(133),n(47),n(10),n(37),n(384),n(217),n(218),n(214),n(98),n(408),n(410),n(411),n(412),n(96),n(383),n(127),n(451),n(130);var i=n(228),r=n.n(i),s=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=r()(e,"title","");return r()(e,"frontmatter.tags")&&(i+=" ".concat(e.frontmatter.tags.join(" "))),n&&(i+=" ".concat(n)),o(t,i)},o=function(t,e){var n=function(t){return t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")},i=new RegExp("[^\0-]"),r=t.split(/\s+/g).map((function(t){return t.trim()})).filter((function(t){return!!t}));if(i.test(t))return r.some((function(t){return e.toLowerCase().indexOf(t)>-1}));var s=t.endsWith(" ");return new RegExp(r.map((function(t,e){return r.length!==e+1||s?"(?=.*\\b".concat(n(t),"\\b)"):"(?=.*\\b".concat(n(t),")")})).join("")+".+","gi").test(e)},a={name:"SearchBox",data:function(){return{query:"",focused:!1,focusIndex:0,placeholder:void 0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$site.themeConfig.searchMaxSuggestions||5,i=this.$localePath,r=[],o=0;o<e.length&&!(r.length>=n);o++){var a=e[o];if(this.getPageLocalePath(a)===i&&this.isSearchable(a))if(s(t,a))r.push(a);else if(a.headers)for(var u=0;u<a.headers.length&&!(r.length>=n);u++){var l=a.headers[u];l.title&&s(t,a,l.title)&&r.push(Object.assign({},a,{path:a.path+"#"+l.slug,header:l}))}}return r}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},mounted:function(){this.placeholder=this.$site.themeConfig.searchPlaceholder||"",document.addEventListener("keydown",this.onHotkey)},beforeDestroy:function(){document.removeEventListener("keydown",this.onHotkey)},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},isSearchable:function(t){var e=null;return null===e||(e=Array.isArray(e)?e:new Array(e)).filter((function(e){return t.path.match(e)})).length>0},onHotkey:function(t){t.srcElement===document.body&&["s","/"].includes(t.key)&&(this.$refs.input.focus(),t.preventDefault())},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}},u=(n(452),n(36)),l=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{ref:"input",class:{focused:t.focused},attrs:{"aria-label":"Search",placeholder:t.placeholder,autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.go(t.focusIndex)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:t.onUp.apply(null,arguments)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:t.onDown.apply(null,arguments)}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,(function(e,i){return n("li",{key:i,staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){return t.go(i)},mouseenter:function(e){return t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})),0):t._e()])}),[],!1,null,null,null).exports;n(453);function c(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var f={name:"Navbar",components:{SidebarButton:Object(u.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null).exports,NavLinks:n(433).a,SearchBox:l,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(c(this.$el,"paddingLeft"))+parseInt(c(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)}},h=(n(457),Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),n("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null));e.a=h.exports},433:function(t,e,n){"use strict";var i=n(69),r=(n(131),n(96),n(37),n(98),n(130),n(10),n(219),n(127),n(384),n(408),n(410),n(411),n(412),n(389)),s=n(438),o=n(229),a=n.n(o),u={name:"DropdownLink",components:{NavLink:r.a,DropdownTransition:s.a},props:{item:{required:!0}},data:function(){return{open:!1}},computed:{dropdownAriaLabel:function(){return this.item.ariaLabel||this.item.text}},watch:{$route:function(){this.open=!1}},methods:{setOpen:function(t){this.open=t},isLastItemOfArray:function(t,e){return a()(e)===t},handleDropdown:function(){0===event.detail&&this.setOpen(!this.open)}}},l=(n(455),n(36)),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("button",{staticClass:"dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:t.handleDropdown}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow down"})]),t._v(" "),n("button",{staticClass:"mobile-dropdown-title",attrs:{type:"button","aria-label":t.dropdownAriaLabel},on:{click:function(e){return t.setOpen(!t.open)}}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v("\n          "+t._s(e.text)+"\n        ")]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,(function(i){return n("li",{key:i.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:i},on:{focusout:function(n){t.isLastItemOfArray(i,e.items)&&t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0):n("NavLink",{attrs:{item:e},on:{focusout:function(n){t.isLastItemOfArray(e,t.item.items)&&t.setOpen(!1)}}})],1)})),0)])],1)}),[],!1,null,null,null).exports,f=n(382),h={name:"NavLinks",components:{NavLink:r.a,DropdownLink:c},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,r=this.$router.options.routes,s=this.$site.themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",ariaLabel:this.$themeLocaleConfig.ariaLabel||"Select language",items:Object.keys(e).map((function(i){var o,a=e[i],u=s[i]&&s[i].label||a.lang;return a.lang===t.$lang?o=n:(o=n.replace(t.$localeConfig.path,i),r.some((function(t){return t.path===o}))||(o=i)),{text:u,link:o}}))};return[].concat(Object(i.a)(this.userNav),[o])}return this.userNav},userLinks:function(){return(this.nav||[]).map((function(t){return Object.assign(Object(f.j)(t),{items:(t.items||[]).map(f.j)})}))},repoLink:function(){var t=this.$site.themeConfig.repo;return t?/^https?:/.test(t)?t:"https://github.com/".concat(t):null},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},p=(n(456),Object(l.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null));e.a=p.exports},438:function(t,e,n){"use strict";var i={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},r=(n(454),n(36)),s=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},448:function(t,e,n){var i=n(3),r=n(449);i({global:!0,forced:parseInt!=r},{parseInt:r})},449:function(t,e,n){var i=n(0),r=n(5),s=n(4),o=n(18),a=n(221).trim,u=n(222),l=i.parseInt,c=i.Symbol,f=c&&c.iterator,h=/^[+-]?0x/i,p=s(h.exec),g=8!==l(u+"08")||22!==l(u+"0x16")||f&&!r((function(){l(Object(f))}));t.exports=g?function(t,e){var n=a(o(t));return l(n,e>>>0||(p(h,n)?16:10))}:l},450:function(t,e,n){var i=n(101).PROPER,r=n(5),s=n(222);t.exports=function(t){return r((function(){return!!s[t]()||"​᠎"!=="​᠎"[t]()||i&&s[t].name!==t}))}},451:function(t,e,n){"use strict";var i,r=n(3),s=n(4),o=n(31).f,a=n(97),u=n(18),l=n(136),c=n(30),f=n(137),h=n(17),p=s("".endsWith),g=s("".slice),d=Math.min,v=f("endsWith");r({target:"String",proto:!0,forced:!!(h||v||(i=o(String.prototype,"endsWith"),!i||i.writable))&&!v},{endsWith:function(t){var e=u(c(this));l(t);var n=arguments.length>1?arguments[1]:void 0,i=e.length,r=void 0===n?i:d(a(n),i),s=u(t);return p?p(e,s,r):g(e,r-s.length,r)===s}})},452:function(t,e,n){"use strict";n(413)},453:function(t,e,n){"use strict";n(414)},454:function(t,e,n){"use strict";n(415)},455:function(t,e,n){"use strict";n(416)},456:function(t,e,n){"use strict";n(417)},457:function(t,e,n){"use strict";n(418)}}]);