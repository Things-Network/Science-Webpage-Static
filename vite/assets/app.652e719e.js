import{c as Y}from"./_commonjsHelpers.712cc82f.js";class Z{constructor(t){this.$el=$(t),this.$link=this.$el.find("[data-remote]"),this.bindEvents()}bindEvents(){this.$link.on("ajax:send",t=>{console.log("destroy - send",t),this.$el.addClass("-remote-loading")}),this.$link.on("ajax:success",t=>{console.log("destroy - success",t),this.$el.remove()}),this.$link.on("ajax:error",t=>{console.error("destroy - error",t)})}}class tt{constructor(t){this.el=t,this.setVars(),this.setup(),this.bindEvents()}setVars(){this.downloadButton=this.el.querySelector(".download-selected"),this.downloadAllButton=this.el.querySelector(".download-all"),this.clearButton=this.el.querySelector(".clear-selection"),this.checkboxes=[].slice.call(this.el.elements).filter(function(t){return t.type==="checkbox"&&t.disabled!==!0})}setup(){this.toggleButton()}bindEvents(){this.el.addEventListener("change",this.toggleButton.bind(this)),this.el.addEventListener("submit",this.trackEvents.bind(this)),this.downloadAllButton.addEventListener("click",this.checkAll.bind(this)),this.clearButton.addEventListener("click",this.clearSelection.bind(this))}toggleButton(){var t=this.checkboxes.some(function(s){return s.checked===!0});this.downloadButton.disabled=!t}checkAll(){this.checkboxes.forEach(function(t){t.checked=!0}),this.toggleButton()}clearSelection(){this.checkboxes.forEach(function(t){t.checked=!1}),this.toggleButton()}trackEvents(){window.classroomResourceMetadata&&this.checkboxes.forEach(function(t){t.checked&&dataLayer.push({event:"Content Interaction",action:"Download",fileTitle:t.parentElement.querySelector("a").innerHTML,...window.classroomResourceMetadata})})}}function H(){function e(){return Math.floor((1+Math.random())*65536).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()}class W{constructor(t,s){this.el=t,this.globalNav=s,this.setVars(),this.decorate(),this.bindEvents(),this.openIfActive()}setVars(){this.isOpen=!1,this.nav=this.el.querySelector(".global-header__nav-list__nested")}bindEvents(){this.el.addEventListener("keydown",this.onKeyDown.bind(this),!0),this.navToggle.addEventListener("click",this.toggleNav.bind(this))}decorate(){let t=H(),s=this.nav.previousElementSibling,i=this.navToggle=document.createElement("button");i.className="global-header__nested-toggle",i.innerHTML='<span class="__screenreader">Expand Subnav</span>',i.setAttribute("aria-controls",t),i.setAttribute("aria-expanded",!1),s.parentNode.insertBefore(i,this.nav),this.nav.setAttribute("id",t)}toggleNav(t){this.isOpen?this.close():this.open(),t.preventDefault()}openIfActive(){this.el.classList.contains("-active")&&this.open()}open(){this.navToggle.setAttribute("aria-expanded",!0),this.el.classList.add("-open"),this.isOpen=!0}close(){this.navToggle.setAttribute("aria-expanded",!1),this.el.classList.remove("-open"),this.isOpen=!1}onKeyDown(t){(t.which||t.code)==27&&this.isOpen&&(t.stopPropagation(),t.preventDefault(),this.close(),this.navToggle.focus())}}const et=(e,t)=>{let s=null;return(...i)=>{window.clearTimeout(s),s=window.setTimeout(()=>{e.apply(null,i)},t)}},k=900,P="-open";class st{constructor(t){this.el=t,this.setVars(),this.decorateAcctMenu(),this.decorateNav(),this.bindEvents(),this.createNestedNavs()}setVars(){this.uuid=H(),this.isNavOpen=!1,this.isAcctMenuOpen=!1,this.blurTimeout=null,this.focusedNode=null,this.isMobile=D()<k,this.acctMenu=this.el.querySelector('[data-js="acct-menu"]'),this.acctMenuToggle=this.el.querySelector('[data-js="acct-menu-toggle"]'),this.acctMenuItems=Array.from(this.el.querySelectorAll('[data-js="acct-menu"] li:not(:first-child)')),this.nav=this.el.querySelector('[data-js="nav"]'),this.navList=this.el.querySelector('[data-js="nav-list"]'),this.navToggle=this.el.querySelector('[data-js="toggle"]'),this.nestedNavs=Array.from(this.el.querySelectorAll('[data-js="nested-nav"]')),this.navs=[]}decorateAcctMenu(){this.acctMenuItems.forEach(t=>t.setAttribute("aria-hidden",!0))}decorateNav(){this.navToggle.setAttribute("aria-controls",this.uuid),this.navToggle.setAttribute("aria-expanded",!1)}undecorateNav(){this.navToggle.removeAttribute("aria-controls"),this.navToggle.removeAttribute("aria-expanded")}bindEvents(){this.el.addEventListener("keydown",this.onKeyDown.bind(this)),this.navToggle.addEventListener("click",this.toggleNav.bind(this)),document.body.addEventListener("click",this.clickAway.bind(this),!0),window.addEventListener("resize",et(this.onResize.bind(this),300)),this.navList.addEventListener("focus",this.onNavItemFocus.bind(this),!0),this.navList.addEventListener("blur",this.onNavItemBlur.bind(this),!0),this.acctMenuToggle&&this.acctMenuToggle.addEventListener("click",this.toggleAcctMenu.bind(this))}onKeyDown(t){(t.which||t.code)==27&&(this.isNavOpen||this.isAcctMenuOpen)&&(t.stopPropagation(),t.preventDefault(),this.isNavOpen?(this.closeNav(),this.navToggle.focus()):this.isAcctMenuOpen&&(this.closeAcctMenu(),this.acctMenuToggle.focus()))}onResize(t){let s=D();this.isMobile&&s>=k?this.initDesktop():!this.isMobile&&s<k&&this.initMobile(),t.preventDefault()}onNavItemFocus(t){if(this.focusedNode&&this.focusedNode.contains(t.target))return clearTimeout(this.blurTimeout);setTimeout(s=>{const i=this.focusedNode=t.target.parentNode;i.getAttribute("data-js")=="nested-nav"&&i.classList.add("-focus")})}onNavItemBlur(t){const s=this.focusedNode;this.blurTimeout=setTimeout(i=>s.classList.remove("-focus"),50)}createNestedNavs(){this.nestedNavs.forEach(t=>this.navs.push(new W(t,this)))}toggleAcctMenu(t){this.isAcctMenuOpen?this.closeAcctMenu():this.openAcctMenu(),t.preventDefault()}toggleNav(t){this.isNavOpen?this.closeNav():this.openNav(),t.preventDefault()}closeAcctMenu(){this.acctMenu.classList.remove("-active"),this.acctMenuItems.forEach(t=>t.setAttribute("aria-hidden",!0)),this.isAcctMenuOpen=!1}openAcctMenu(){this.acctMenu.classList.add("-active"),this.acctMenuItems.forEach(t=>t.removeAttribute("aria-hidden")),this.isAcctMenuOpen=!0}closeNav(){this.navs.forEach(t=>t.close()),this.el.classList.remove(P),this.navToggle.setAttribute("aria-expanded",!1),this.isNavOpen=!1}openNav(){this.el.classList.add(P),this.navToggle.setAttribute("aria-expanded",!0),this.nav.focus(),this.isNavOpen=!0}initMobile(){this.decorateNav(),this.isMobile=!0}initDesktop(){this.undecorateNav(),this.isMobile=!1}clickAway(t){if(this.isNavOpen){if(t.target===this.navToggle)return;this.el.contains(t.target)||(t.stopPropagation(),t.preventDefault(),this.closeNav())}}}function D(){let e=window,t="inner";return"innerWidth"in window||(t="client",e=document.documentElement||document.body),e[t+"Width"]}class it{constructor(t){this.el=t,this.setVars(),this.setup(),this.bindEvents()}setVars(){this.buttons=Array.from(this.el.querySelectorAll('[data-js="button"]'))}setup(){this.toggleItem(this.buttons[0],!0),this.buttons.slice(1).forEach(t=>{this.toggleItem(t,!1)})}bindEvents(){this.buttons.forEach(t=>{t.addEventListener("click",this.handleClick.bind(this))})}handleMqChange({matches:t}){t?this.bindEvents():this.cleanUp()}handleClick(t){const s=this.el.querySelector('[aria-expanded="true"]');t.currentTarget!==s&&(this.toggleItem(s,!1),this.toggleItem(t.currentTarget,!0))}toggleItem(t,s){const i=t.getAttribute("aria-controls"),n=this.el.querySelector(`#${i}`);t.setAttribute("aria-expanded",s),s?(n.parentNode.classList.add("-active"),n.removeAttribute("hidden"),n.focus()):(n.parentNode.classList.remove("-active"),n.setAttribute("hidden",""))}}const nt="modulepreload",rt=function(e){return"/vite/"+e},q={},ot=function(t,s,i){return!s||s.length===0?t():Promise.all(s.map(n=>{if(n=rt(n),n in q)return;q[n]=!0;const r=n.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${c}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":nt,r||(a.as="script",a.crossOrigin=""),a.href=n,document.head.appendChild(a),r)return new Promise((y,p)=>{a.addEventListener("load",y),a.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};class at{constructor(t){ot(()=>import("./chosen.dfc9d249.js"),[]).then(()=>{$(t).chosen()})}}class ct{constructor(t){this.el=t,this.bindEvents(),this.el.dispatchEvent(new Event("change"))}bindEvents(){this.el.addEventListener("change",this.updateState.bind(this))}updateState(t){t.target.classList[t.target.value==""?"add":"remove"]("-empty")}}var lt={exports:{}};/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v3.0.0
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */(function(e,t){(function(i,n){e.exports=n()})(Y,function(){return function(s){var i={};function n(r){if(i[r])return i[r].exports;var c=i[r]={exports:{},id:r,loaded:!1};return s[r].call(c.exports,c,c.exports,n),c.loaded=!0,c.exports}return n.m=s,n.c=i,n.p="",n(0)}([function(s,i){s.exports=function(){var n=[],r,c=!1,a=null,y=["button","input","select","textarea"],p=_(),F=[16,17,18,91,93],T={keydown:"keyboard",keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"};T[_()]="mouse";var w=[],g={9:"tab",13:"enter",16:"shift",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"},K={2:"touch",3:"touch",4:"mouse"},j;function E(o){U(),N(o),c=!0,j=window.setTimeout(function(){c=!1},650)}function d(o){c||N(o)}function U(){window.clearTimeout(j)}function N(o){var m=O(o),l=T[o.type];if(l==="pointer"&&(l=G(o)),a!==l){var X=document.activeElement.nodeName.toLowerCase();!r.hasAttribute("data-whatinput-formswitching")&&!r.hasAttribute("data-whatinput-formtyping")&&a&&y.indexOf(X)>-1||F.indexOf(m)>-1||x(l)}l==="keyboard"&&Q(m)}function x(o){a=o,r.setAttribute("data-whatinput",a),w.indexOf(a)===-1&&w.push(a)}function O(o){return o.keyCode?o.keyCode:o.which}function G(o){return typeof o.pointerType=="number"?K[o.pointerType]:o.pointerType==="pen"?"touch":o.pointerType}function Q(o){n.indexOf(g[o])===-1&&g[o]&&n.push(g[o])}function J(o){var m=O(o),l=n.indexOf(g[m]);l!==-1&&n.splice(l,1)}function I(){r=document.body,window.PointerEvent?(r.addEventListener("pointerdown",d),r.addEventListener("pointermove",d)):window.MSPointerEvent?(r.addEventListener("MSPointerDown",d),r.addEventListener("MSPointerMove",d)):(r.addEventListener("mousedown",d),r.addEventListener("mousemove",d),"ontouchstart"in window&&r.addEventListener("touchstart",E)),r.addEventListener(p,d),r.addEventListener("keydown",E),r.addEventListener("keyup",E),document.addEventListener("keyup",J)}function _(){return p="onwheel"in document.createElement("div")?"wheel":document.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll"}return"addEventListener"in window&&Array.prototype.indexOf&&(document.body?I():document.addEventListener("DOMContentLoaded",I)),{ask:function(){return a},keys:function(){return n},types:function(){return w},set:x}}()}])})})(lt);/*! npm.im/object-fit-images 3.2.4 */var u="bfred-it:object-fit-images",ut=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,h=typeof Image>"u"?{style:{"object-position":1}}:new Image,V="object-fit"in h.style,S="object-position"in h.style,dt="background-size"in h.style,ht=typeof h.currentSrc=="string",b=h.getAttribute,f=h.setAttribute,C=!1;function ft(e,t){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+e+"' height='"+t+"'%3E%3C/svg%3E"}function vt(e){if(e.srcset&&!ht&&window.picturefill){var t=window.picturefill._;(!e[t.ns]||!e[t.ns].evaled)&&t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}function pt(e){for(var t=getComputedStyle(e).fontFamily,s,i={};(s=ut.exec(t))!==null;)i[s[1]]=s[2];return i}function B(e,t,s){var i=ft(t||1,s||0);b.call(e,"src")!==i&&f.call(e,"src",i)}function L(e,t){e.naturalWidth?t(e):setTimeout(L,100,e,t)}function z(e){var t=pt(e),s=e[u];if(t["object-fit"]=t["object-fit"]||"fill",!(!s.img&&(t["object-fit"]==="fill"||!s.skipTest&&V&&!t["object-position"]))){if(!s.img){s.img=new Image(e.width,e.height),s.img.srcset=b.call(e,"data-ofi-srcset")||e.srcset,s.img.src=b.call(e,"data-ofi-src")||e.src,f.call(e,"data-ofi-src",e.src),e.srcset&&f.call(e,"data-ofi-srcset",e.srcset),B(e,e.naturalWidth||e.width,e.naturalHeight||e.height),e.srcset&&(e.srcset="");try{gt(e)}catch{window.console&&console.warn("https://bit.ly/ofi-old-browser")}}vt(s.img),e.style.backgroundImage='url("'+(s.img.currentSrc||s.img.src).replace(/"/g,'\\"')+'")',e.style.backgroundPosition=t["object-position"]||"center",e.style.backgroundRepeat="no-repeat",e.style.backgroundOrigin="content-box",/scale-down/.test(t["object-fit"])?L(s.img,function(){s.img.naturalWidth>e.width||s.img.naturalHeight>e.height?e.style.backgroundSize="contain":e.style.backgroundSize="auto"}):e.style.backgroundSize=t["object-fit"].replace("none","auto").replace("fill","100% 100%"),L(s.img,function(i){B(e,i.naturalWidth,i.naturalHeight)})}}function gt(e){var t={get:function(i){return e[u].img[i||"src"]},set:function(i,n){return e[u].img[n||"src"]=i,f.call(e,"data-ofi-"+n,i),z(e),i}};Object.defineProperty(e,"src",t),Object.defineProperty(e,"currentSrc",{get:function(){return t.get("currentSrc")}}),Object.defineProperty(e,"srcset",{get:function(){return t.get("srcset")},set:function(s){return t.set(s,"srcset")}})}function mt(){function e(t,s){return t[u]&&t[u].img&&(s==="src"||s==="srcset")?t[u].img:t}S||(HTMLImageElement.prototype.getAttribute=function(t){return b.call(e(this,t),t)},HTMLImageElement.prototype.setAttribute=function(t,s){return f.call(e(this,t),t,String(s))})}function v(e,t){var s=!C&&!e;if(t=t||{},e=e||"img",S&&!t.skipTest||!dt)return!1;e==="img"?e=document.getElementsByTagName("img"):typeof e=="string"?e=document.querySelectorAll(e):"length"in e||(e=[e]);for(var i=0;i<e.length;i++)e[i][u]=e[i][u]||{skipTest:t.skipTest},z(e[i]);s&&(document.body.addEventListener("load",function(n){n.target.tagName==="IMG"&&v(n.target,{skipTest:t.skipTest})},!0),C=!0,e="img"),t.watchMQ&&window.addEventListener("resize",v.bind(null,e,{skipTest:t.skipTest}))}v.supportsObjectFit=V;v.supportsObjectPosition=S;mt();var bt=v;const A=Object.assign({"../javascripts/modules/destroy-discussion-attachment.js":Z,"../javascripts/modules/file-archive.js":tt,"../javascripts/modules/global-header.js":st,"../javascripts/modules/home-hero.js":it,"../javascripts/modules/multi-select.js":at,"../javascripts/modules/nested-nav.js":W,"../javascripts/modules/placeholder-select.js":ct}),R=document.querySelectorAll("[data-module]");for(var M=0;M<R.length;M++){const e=R[M],t=e.getAttribute("data-module"),s=Object.keys(A).find(i=>i.indexOf(t)!==-1);if(A[s]){const i=A[s];new i(e)}else console.error("missing module for el",e,s)}const yt=document.querySelectorAll([".resources-hero__image img",".card__image.-full"]);bt(yt,{watchMQ:!0});
//# sourceMappingURL=app.652e719e.js.map
