import{a as Mf}from"./chunk-NAO6KXBS.js";import{$ as xr,$a as _f,A as vr,Aa as Fc,B as Oo,Ba as ui,C as oi,Ca as hi,D as bc,Da as Ms,E as Wd,Ea as cf,F as $d,Fa as Nc,G as qd,Ga as Oc,H as mn,Ha as uf,I as Xd,Ia as Bo,J as Rt,Ja as ko,K as Se,Ka as Uc,L as ai,La as zo,M as ke,Ma as hf,N as li,Na as Bc,O as Yd,Oa as kc,P as _t,Pa as zc,Q as Ec,Qa as df,R as Ve,Ra as ff,S as Te,Sa as Dt,T as wc,Ta as Ot,U as Ac,Ua as Tn,V as jd,Va as br,W as _s,Wa as pf,X as An,Xa as mf,Y as vs,Ya as gf,Z as Tc,Za as on,_ as Cc,_a as yf,a as ye,aa as Zd,ab as Vo,b as At,ba as Kd,bb as ki,c as Bd,ca as ci,cb as vf,d as ms,da as sn,db as xf,e as kd,ea as Rc,eb as bs,f as zd,fa as Jd,fb as Vc,g as vc,ga as Bi,gb as Sf,h as xc,ha as Qd,i as wn,ia as Dc,j as zt,ja as ef,k as Hn,ka as Sr,l as Vt,la as Ic,m as Re,ma as Pc,n as gs,na as tf,o as Vd,oa as nf,p as Hd,pa as xs,q as st,qa as rf,r as No,ra as sf,s as $t,sa as of,t as ys,ta as Tt,u as Gd,ua as af,v as Sc,va as Mr,w as Ui,wa as Uo,x as yr,xa as Ss,y as _r,ya as Lc,z as Mc,za as lf}from"./chunk-NBELEXDH.js";var Af=null;function zi(){return Af}function Tf(i){Af??=i}var Ho=class{};var It=new _t(""),$c=(()=>{class i{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>Te(S0),providedIn:"platform"})}return i})(),Cf=new _t(""),S0=(()=>{class i extends $c{_location;_history;_doc=Te(It);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return zi().getBaseHref(this._doc)}onPopState(t){let n=zi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",t,!1),()=>n.removeEventListener("popstate",t)}onHashChange(t){let n=zi().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",t,!1),()=>n.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,n,r){this._history.pushState(t,n,r)}replaceState(t,n,r){this._history.replaceState(t,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function qc(i,e){return i?e?i.endsWith("/")?e.startsWith("/")?i+e.slice(1):i+e:e.startsWith("/")?i+e:`${i}/${e}`:i:e}function bf(i){let e=i.match(/#|\?|$/),t=e&&e.index||i.length,n=t-(i[t-1]==="/"?1:0);return i.slice(0,n)+i.slice(t)}function Gn(i){return i&&i[0]!=="?"?"?"+i:i}var Wn=(()=>{class i{historyGo(t){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>Te(Xc),providedIn:"root"})}return i})(),Rf=new _t(""),Xc=(()=>{class i extends Wn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??Te(It).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return qc(this._baseHref,t)}path(t=!1){let n=this._platformLocation.pathname+Gn(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${n}${r}`:n}pushState(t,n,r,s){let o=this.prepareExternalUrl(r+Gn(s));this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,s){let o=this.prepareExternalUrl(r+Gn(s));this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||i)(Ve($c),Ve(Rf,8))};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Df=(()=>{class i extends Wn{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(t,n){super(),this._platformLocation=t,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}path(t=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(t){let n=qc(this._baseHref,t);return n.length>0?"#"+n:n}pushState(t,n,r,s){let o=this.prepareExternalUrl(r+Gn(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(t,n,o)}replaceState(t,n,r,s){let o=this.prepareExternalUrl(r+Gn(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(t,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(n){return new(n||i)(Ve($c),Ve(Rf,8))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),Er=(()=>{class i{_subject=new wn;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let n=this._locationStrategy.getBaseHref();this._basePath=E0(bf(Ef(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,n=""){return this.path()==this.normalize(t+Gn(n))}normalize(t){return i.stripTrailingSlash(b0(this._basePath,Ef(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,n="",r=null){this._locationStrategy.pushState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gn(n)),r)}replaceState(t,n="",r=null){this._locationStrategy.replaceState(r,"",t,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+Gn(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",n){this._urlChangeListeners.forEach(r=>r(t,n))}subscribe(t,n,r){return this._subject.subscribe({next:t,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Gn;static joinWithSlash=qc;static stripTrailingSlash=bf;static \u0275fac=function(n){return new(n||i)(Ve(Wn))};static \u0275prov=ke({token:i,factory:()=>M0(),providedIn:"root"})}return i})();function M0(){return new Er(Ve(Wn))}function b0(i,e){if(!i||!e.startsWith(i))return e;let t=e.substring(i.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Ef(i){return i.replace(/\/index.html$/,"")}function E0(i){if(new RegExp("^(https?:)?//").test(i)){let[,t]=i.split(/\/\/[^\/]+/);return t}return i}function If(i,e){e=encodeURIComponent(e);for(let t of i.split(";")){let n=t.indexOf("="),[r,s]=n==-1?[t,""]:[t.slice(0,n),t.slice(n+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}function w0(i,e){return new Se(2100,!1)}var Hc=class{createSubscription(e,t){return Vc(()=>e.subscribe({next:t,error:n=>{throw n}}))}dispose(e){Vc(()=>e.unsubscribe())}},Gc=class{createSubscription(e,t){return e.then(t,n=>{throw n})}dispose(e){}},A0=new Gc,T0=new Hc,Pf=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,n=>this._updateLatestValue(t,n))}_selectStrategy(t){if(zo(t))return A0;if(hf(t))return T0;throw w0(i,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,n){t===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||i)(Tt(ki,16))};static \u0275pipe=cf({name:"async",type:i,pure:!1})}return i})();var Wo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=hi({type:i});static \u0275inj=li({})}return i})(),Lf="browser",C0="server";function Yc(i){return i===C0}var Ff=(()=>{class i{static \u0275prov=ke({token:i,providedIn:"root",factory:()=>new Wc(Te(It),window)})}return i})(),Wc=class{document;window;offset=()=>[0,0];constructor(e,t){this.document=e,this.window=t}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=R0(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),n=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}};function R0(i,e){let t=i.getElementById(e)||i.getElementsByName(e)[0];if(t)return t;if(typeof i.createTreeWalker=="function"&&i.body&&typeof i.body.attachShadow=="function"){let n=i.createTreeWalker(i.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=n.nextNode()}}return null}var Go=class{};var Zc=class extends Ho{supportsDOMEvents=!0},Kc=class i extends Zc{static makeCurrent(){Tf(new i)}onAndCancel(e,t,n,r){return e.addEventListener(t,n,r),()=>{e.removeEventListener(t,n,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=I0();return t==null?null:P0(t)}resetBaseElement(){Es=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return If(document.cookie,e)}},Es=null;function I0(){return Es=Es||document.querySelector("base"),Es?Es.getAttribute("href"):null}function P0(i){return new URL(i,document.baseURI).pathname}var Jc=class{addToWindow(e){ai.getAngularTestability=(n,r=!0)=>{let s=e.findTestabilityInTree(n,r);if(s==null)throw new Se(5103,!1);return s},ai.getAllAngularTestabilities=()=>e.getAllTestabilities(),ai.getAllAngularRootElements=()=>e.getAllRootElements();let t=n=>{let r=ai.getAllAngularTestabilities(),s=r.length,o=function(){s--,s==0&&n()};r.forEach(a=>{a.whenStable(o)})};ai.frameworkStabilizers||(ai.frameworkStabilizers=[]),ai.frameworkStabilizers.push(t)}findTestabilityInTree(e,t,n){if(t==null)return null;let r=e.getTestability(t);return r??(n?zi().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},L0=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),Qc=new _t(""),zf=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,n){this._zone=n,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,n,r,s){return this._findPluginFor(n).addEventListener(t,n,r,s)}getZone(){return this._zone}_findPluginFor(t){let n=this._eventNameToPlugin.get(t);if(n)return n;if(n=this._plugins.find(s=>s.supports(t)),!n)throw new Se(5101,!1);return this._eventNameToPlugin.set(t,n),n}static \u0275fac=function(n){return new(n||i)(Ve(Qc),Ve(sn))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),qo=class{_doc;constructor(e){this._doc=e}manager},$o="ng-app-id";function Of(i){for(let e of i)e.remove()}function Uf(i,e){let t=e.createElement("style");return t.textContent=i,t}function F0(i,e,t,n){let r=i.head?.querySelectorAll(`style[${$o}="${e}"],link[${$o}="${e}"]`);if(r)for(let s of r)s.removeAttribute($o),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function eu(i,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",i),t}var Vf=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,n,r,s={}){this.doc=t,this.appId=n,this.nonce=r,this.isServer=Yc(s),F0(t,n,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,n){for(let r of t)this.addUsage(r,this.inline,Uf);n?.forEach(r=>this.addUsage(r,this.external,eu))}removeStyles(t,n){for(let r of t)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,n,r){let s=n.get(t);s?s.usage++:n.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,n){let r=n.get(t);r&&(r.usage--,r.usage<=0&&(Of(r.elements),n.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])Of(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(t,Uf(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(t,eu(n,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,n){return this.nonce&&n.setAttribute("nonce",this.nonce),this.isServer&&n.setAttribute($o,this.appId),t.appendChild(n)}static \u0275fac=function(n){return new(n||i)(Ve(It),Ve(Dc),Ve(Pc,8),Ve(Sr))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),jc={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},nu=/%COMP%/g;var Hf="%COMP%",N0=`_nghost-${Hf}`,O0=`_ngcontent-${Hf}`,U0=!0,B0=new _t("",{providedIn:"root",factory:()=>U0});function k0(i){return O0.replace(nu,i)}function z0(i){return N0.replace(nu,i)}function Gf(i,e){return e.map(t=>t.replace(nu,i))}var Xo=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,n,r,s,o,a,l,c=null,u=null){this.eventManager=t,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=Yc(a),this.defaultRenderer=new ws(t,o,l,this.platformIsServer,this.tracingService)}createRenderer(t,n){if(!t||!n)return this.defaultRenderer;this.platformIsServer&&n.encapsulation===xs.ShadowDom&&(n=At(ye({},n),{encapsulation:xs.Emulated}));let r=this.getOrCreateRenderer(t,n);return r instanceof Yo?r.applyToHost(t):r instanceof As&&r.applyStyles(),r}getOrCreateRenderer(t,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.platformIsServer,d=this.tracingService;switch(n.encapsulation){case xs.Emulated:s=new Yo(l,c,n,this.appId,u,o,a,h,d);break;case xs.ShadowDom:return new tu(l,c,t,n,o,a,this.nonce,h,d);default:s=new As(l,c,n,u,o,a,h,d);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(n){return new(n||i)(Ve(zf),Ve(Vf),Ve(Dc),Ve(B0),Ve(It),Ve(Sr),Ve(sn),Ve(Pc),Ve(tf,8))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),ws=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,n,r,s){this.eventManager=e,this.doc=t,this.ngZone=n,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(jc[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Bf(e)?e.content:e).appendChild(t)}insertBefore(e,t,n){e&&(Bf(e)?e.content:e).insertBefore(t,n)}removeChild(e,t){t.remove()}selectRootElement(e,t){let n=typeof e=="string"?this.doc.querySelector(e):e;if(!n)throw new Se(-5104,!1);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;let s=jc[r];s?e.setAttributeNS(s,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){let r=jc[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(Mr.DashCase|Mr.Important)?e.style.setProperty(t,n,r&Mr.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&Mr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e!=null&&(e[t]=n)}setValue(e,t){e.nodeValue=t}listen(e,t,n,r){if(typeof e=="string"&&(e=zi().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);let s=this.decoratePreventDefault(n);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Bf(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var tu=class extends ws{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,n,r,s,o,a,l,c){super(e,s,o,l,c),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Gf(r.id,u);for(let d of u){let p=document.createElement("style");a&&p.setAttribute("nonce",a),p.textContent=d,this.shadowRoot.appendChild(p)}let h=r.getExternalStyles?.();if(h)for(let d of h){let p=eu(d,s);a&&p.setAttribute("nonce",a),this.shadowRoot.appendChild(p)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},As=class extends ws{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,n,r,s,o,a,l,c){super(e,s,o,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=n.styles;this.styles=c?Gf(c,u):u,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Yo=class extends As{contentAttr;hostAttr;constructor(e,t,n,r,s,o,a,l,c){let u=r+"-"+n.id;super(e,t,n,s,o,a,l,c,u),this.contentAttr=k0(u),this.hostAttr=z0(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}},V0=(()=>{class i extends qo{constructor(t){super(t)}supports(t){return!0}addEventListener(t,n,r,s){return t.addEventListener(n,r,s),()=>this.removeEventListener(t,n,r,s)}removeEventListener(t,n,r,s){return t.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||i)(Ve(It))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),kf=["alt","control","meta","shift"],H0={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},G0={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},W0=(()=>{class i extends qo{constructor(t){super(t)}supports(t){return i.parseEventName(t)!=null}addEventListener(t,n,r,s){let o=i.parseEventName(n),a=i.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>zi().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let n=t.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),kf.forEach(c=>{let u=n.indexOf(c);u>-1&&(n.splice(u,1),o+=c+".")}),o+=s,n.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(t,n){let r=H0[t.key]||t.key,s="";return n.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),kf.forEach(o=>{if(o!==r){let a=G0[o];a(t)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(t,n,r){return s=>{i.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>n(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(n){return new(n||i)(Ve(It))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})();function Wf(i,e){return xf(ye({rootComponent:i},$0(e)))}function $0(i){return{appProviders:[...$f,...i?.providers??[]],platformProviders:j0}}function q0(){Kc.makeCurrent()}function X0(){return new Rc}function Y0(){return Qd(document),document}var j0=[{provide:Sr,useValue:Lf},{provide:ef,useValue:q0,multi:!0},{provide:It,useFactory:Y0,deps:[]}];var Z0=[{provide:Bo,useClass:Jc,deps:[]},{provide:uf,useClass:ko,deps:[sn,Uc,Bo]},{provide:ko,useClass:ko,deps:[sn,Uc,Bo]}],$f=[{provide:jd,useValue:"root"},{provide:Rc,useFactory:X0,deps:[]},{provide:Qc,useClass:V0,multi:!0,deps:[It,sn,Sr]},{provide:Qc,useClass:W0,multi:!0,deps:[It]},Xo,Vf,zf,{provide:Uo,useExisting:Xo},{provide:Go,useClass:L0,deps:[]},[]],jo=(()=>{class i{constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275mod=hi({type:i});static \u0275inj=li({providers:[...$f,...Z0],imports:[Wo,vf]})}return i})();var qf=(()=>{class i{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(n){return new(n||i)(Ve(It))};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ue="primary",zs=Symbol("RouteTitle"),au=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Dr(i){return new au(i)}function J0(i,e,t){let n=t.path.split("/");if(n.length>i.length||t.pathMatch==="full"&&(e.hasChildren()||n.length<i.length))return null;let r={};for(let s=0;s<n.length;s++){let o=n[s],a=i[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:i.slice(0,n.length),posParams:r}}function Q0(i,e){if(i.length!==e.length)return!1;for(let t=0;t<i.length;++t)if(!Cn(i[t],e[t]))return!1;return!0}function Cn(i,e){let t=i?lu(i):void 0,n=e?lu(e):void 0;if(!t||!n||t.length!=n.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!np(i[r],e[r]))return!1;return!0}function lu(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function np(i,e){if(Array.isArray(i)&&Array.isArray(e)){if(i.length!==e.length)return!1;let t=[...i].sort(),n=[...e].sort();return t.every((r,s)=>n[s]===r)}else return i===e}function ip(i){return i.length>0?i[i.length-1]:null}function mi(i){return Vd(i)?i:zo(i)?Vt(Promise.resolve(i)):Re(i)}var ey={exact:sp,subset:op},rp={exact:ty,subset:ny,ignored:()=>!0};function Xf(i,e,t){return ey[t.paths](i.root,e.root,t.matrixParams)&&rp[t.queryParams](i.queryParams,e.queryParams)&&!(t.fragment==="exact"&&i.fragment!==e.fragment)}function ty(i,e){return Cn(i,e)}function sp(i,e,t){if(!Hi(i.segments,e.segments)||!Jo(i.segments,e.segments,t)||i.numberOfChildren!==e.numberOfChildren)return!1;for(let n in e.children)if(!i.children[n]||!sp(i.children[n],e.children[n],t))return!1;return!0}function ny(i,e){return Object.keys(e).length<=Object.keys(i).length&&Object.keys(e).every(t=>np(i[t],e[t]))}function op(i,e,t){return ap(i,e,e.segments,t)}function ap(i,e,t,n){if(i.segments.length>t.length){let r=i.segments.slice(0,t.length);return!(!Hi(r,t)||e.hasChildren()||!Jo(r,t,n))}else if(i.segments.length===t.length){if(!Hi(i.segments,t)||!Jo(i.segments,t,n))return!1;for(let r in e.children)if(!i.children[r]||!op(i.children[r],e.children[r],n))return!1;return!0}else{let r=t.slice(0,i.segments.length),s=t.slice(i.segments.length);return!Hi(i.segments,r)||!Jo(i.segments,r,n)||!i.children[Ue]?!1:ap(i.children[Ue],e,s,n)}}function Jo(i,e,t){return e.every((n,r)=>rp[t](i[r].parameters,n.parameters))}var qn=class{root;queryParams;fragment;_queryParamMap;constructor(e=new nt([],{}),t={},n=null){this.root=e,this.queryParams=t,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Dr(this.queryParams),this._queryParamMap}toString(){return sy.serialize(this)}},nt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Qo(this)}},Vi=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=Dr(this.parameters),this._parameterMap}toString(){return cp(this)}};function iy(i,e){return Hi(i,e)&&i.every((t,n)=>Cn(t.parameters,e[n].parameters))}function Hi(i,e){return i.length!==e.length?!1:i.every((t,n)=>t.path===e[n].path)}function ry(i,e){let t=[];return Object.entries(i.children).forEach(([n,r])=>{n===Ue&&(t=t.concat(e(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==Ue&&(t=t.concat(e(r,n)))}),t}var Vs=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>new Ir,providedIn:"root"})}return i})(),Ir=class{parse(e){let t=new uu(e);return new qn(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Ts(e.root,!0)}`,n=ly(e.queryParams),r=typeof e.fragment=="string"?`#${oy(e.fragment)}`:"";return`${t}${n}${r}`}},sy=new Ir;function Qo(i){return i.segments.map(e=>cp(e)).join("/")}function Ts(i,e){if(!i.hasChildren())return Qo(i);if(e){let t=i.children[Ue]?Ts(i.children[Ue],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==Ue&&n.push(`${r}:${Ts(s,!1)}`)}),n.length>0?`${t}(${n.join("//")})`:t}else{let t=ry(i,(n,r)=>r===Ue?[Ts(i.children[Ue],!1)]:[`${r}:${Ts(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[Ue]!=null?`${Qo(i)}/${t[0]}`:`${Qo(i)}/(${t.join("//")})`}}function lp(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Zo(i){return lp(i).replace(/%3B/gi,";")}function oy(i){return encodeURI(i)}function cu(i){return lp(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ea(i){return decodeURIComponent(i)}function Yf(i){return ea(i.replace(/\+/g,"%20"))}function cp(i){return`${cu(i.path)}${ay(i.parameters)}`}function ay(i){return Object.entries(i).map(([e,t])=>`;${cu(e)}=${cu(t)}`).join("")}function ly(i){let e=Object.entries(i).map(([t,n])=>Array.isArray(n)?n.map(r=>`${Zo(t)}=${Zo(r)}`).join("&"):`${Zo(t)}=${Zo(n)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var cy=/^[^\/()?;#]+/;function iu(i){let e=i.match(cy);return e?e[0]:""}var uy=/^[^\/()?;=#]+/;function hy(i){let e=i.match(uy);return e?e[0]:""}var dy=/^[^=?&#]+/;function fy(i){let e=i.match(dy);return e?e[0]:""}var py=/^[^&#]+/;function my(i){let e=i.match(py);return e?e[0]:""}var uu=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new nt([],{}):new nt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(n[Ue]=new nt(e,t)),n}parseSegment(){let e=iu(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new Se(4009,!1);return this.capture(e),new Vi(ea(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=hy(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let r=iu(this.remaining);r&&(n=r,this.capture(n))}e[ea(t)]=ea(n)}parseQueryParam(e){let t=fy(this.remaining);if(!t)return;this.capture(t);let n="";if(this.consumeOptional("=")){let o=my(this.remaining);o&&(n=o,this.capture(n))}let r=Yf(t),s=Yf(n);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let n=iu(this.remaining),r=this.remaining[n.length];if(r!=="/"&&r!==")"&&r!==";")throw new Se(4010,!1);let s;n.indexOf(":")>-1?(s=n.slice(0,n.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Ue);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Ue]:new nt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new Se(4011,!1)}};function up(i){return i.segments.length>0?new nt([],{[Ue]:i}):i}function hp(i){let e={};for(let[n,r]of Object.entries(i.children)){let s=hp(r);if(n===Ue&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[n]=s)}let t=new nt(i.segments,e);return gy(t)}function gy(i){if(i.numberOfChildren===1&&i.children[Ue]){let e=i.children[Ue];return new nt(i.segments.concat(e.segments),e.children)}return i}function Gi(i){return i instanceof qn}function yy(i,e,t=null,n=null){let r=dp(i);return fp(r,e,t,n)}function dp(i){let e;function t(s){let o={};for(let l of s.children){let c=t(l);o[l.outlet]=c}let a=new nt(s.url,o);return s===i&&(e=a),a}let n=t(i.root),r=up(n);return e??r}function fp(i,e,t,n){let r=i;for(;r.parent;)r=r.parent;if(e.length===0)return ru(r,r,r,t,n);let s=_y(e);if(s.toRoot())return ru(r,r,new nt([],{}),t,n);let o=vy(s,r,i),a=o.processChildren?Rs(o.segmentGroup,o.index,s.commands):mp(o.segmentGroup,o.index,s.commands);return ru(r,o.segmentGroup,a,t,n)}function ta(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function Ps(i){return typeof i=="object"&&i!=null&&i.outlets}function ru(i,e,t,n,r){let s={};n&&Object.entries(n).forEach(([l,c])=>{s[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let o;i===e?o=t:o=pp(i,e,t);let a=up(hp(o));return new qn(a,s,r)}function pp(i,e,t){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===e?n[r]=t:n[r]=pp(s,e,t)}),new nt(i.segments,n)}var na=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,n){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=n,e&&n.length>0&&ta(n[0]))throw new Se(4003,!1);let r=n.find(Ps);if(r&&r!==ip(n))throw new Se(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function _y(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new na(!0,0,i);let e=0,t=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new na(t,e,n)}var Tr=class{segmentGroup;processChildren;index;constructor(e,t,n){this.segmentGroup=e,this.processChildren=t,this.index=n}};function vy(i,e,t){if(i.isAbsolute)return new Tr(e,!0,0);if(!t)return new Tr(e,!1,NaN);if(t.parent===null)return new Tr(t,!0,0);let n=ta(i.commands[0])?0:1,r=t.segments.length-1+n;return xy(t,r,i.numberOfDoubleDots)}function xy(i,e,t){let n=i,r=e,s=t;for(;s>r;){if(s-=r,n=n.parent,!n)throw new Se(4005,!1);r=n.segments.length}return new Tr(n,!1,r-s)}function Sy(i){return Ps(i[0])?i[0].outlets:{[Ue]:i}}function mp(i,e,t){if(i??=new nt([],{}),i.segments.length===0&&i.hasChildren())return Rs(i,e,t);let n=My(i,e,t),r=t.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new nt(i.segments.slice(0,n.pathIndex),{});return s.children[Ue]=new nt(i.segments.slice(n.pathIndex),i.children),Rs(s,0,r)}else return n.match&&r.length===0?new nt(i.segments,{}):n.match&&!i.hasChildren()?hu(i,e,t):n.match?Rs(i,0,r):hu(i,e,t)}function Rs(i,e,t){if(t.length===0)return new nt(i.segments,{});{let n=Sy(t),r={};if(Object.keys(n).some(s=>s!==Ue)&&i.children[Ue]&&i.numberOfChildren===1&&i.children[Ue].segments.length===0){let s=Rs(i.children[Ue],e,t);return new nt(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=mp(i.children[s],e,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new nt(i.segments,r)}}function My(i,e,t){let n=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=t.length)return s;let o=i.segments[r],a=t[n];if(Ps(a))break;let l=`${a}`,c=n<t.length-1?t[n+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!Zf(l,c,o))return s;n+=2}else{if(!Zf(l,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function hu(i,e,t){let n=i.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ps(s)){let l=by(s.outlets);return new nt(n,l)}if(r===0&&ta(t[0])){let l=i.segments[e];n.push(new Vi(l.path,jf(t[0]))),r++;continue}let o=Ps(s)?s.outlets[Ue]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&ta(a)?(n.push(new Vi(o,jf(a))),r+=2):(n.push(new Vi(o,{})),r++)}return new nt(n,{})}function by(i){let e={};return Object.entries(i).forEach(([t,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(e[t]=hu(new nt([],{}),0,n))}),e}function jf(i){let e={};return Object.entries(i).forEach(([t,n])=>e[t]=`${n}`),e}function Zf(i,e,t){return i==t.path&&Cn(e,t.parameters)}var Ds="imperative",Mt=function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i}(Mt||{}),an=class{id;url;constructor(e,t){this.id=e,this.url=t}},Pr=class extends an{type=Mt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,n="imperative",r=null){super(e,t),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},yn=class extends an{urlAfterRedirects;type=Mt.NavigationEnd;constructor(e,t,n){super(e,t),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Xt=function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i}(Xt||{}),ia=function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i}(ia||{}),$n=class extends an{reason;code;type=Mt.NavigationCancel;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},fi=class extends an{reason;code;type=Mt.NavigationSkipped;constructor(e,t,n,r){super(e,t),this.reason=n,this.code=r}},Ls=class extends an{error;target;type=Mt.NavigationError;constructor(e,t,n,r){super(e,t),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},ra=class extends an{urlAfterRedirects;state;type=Mt.RoutesRecognized;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},du=class extends an{urlAfterRedirects;state;type=Mt.GuardsCheckStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},fu=class extends an{urlAfterRedirects;state;shouldActivate;type=Mt.GuardsCheckEnd;constructor(e,t,n,r,s){super(e,t),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},pu=class extends an{urlAfterRedirects;state;type=Mt.ResolveStart;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mu=class extends an{urlAfterRedirects;state;type=Mt.ResolveEnd;constructor(e,t,n,r){super(e,t),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},gu=class{route;type=Mt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},yu=class{route;type=Mt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},_u=class{snapshot;type=Mt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},vu=class{snapshot;type=Mt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xu=class{snapshot;type=Mt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Su=class{snapshot;type=Mt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},sa=class{routerEvent;position;anchor;type=Mt.Scroll;constructor(e,t,n){this.routerEvent=e,this.position=t,this.anchor=n}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Fs=class{},Lr=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function Ey(i,e){return i.providers&&!i._injector&&(i._injector=Fc(i.providers,e,`Route: ${i.path}`)),i._injector??e}function gn(i){return i.outlet||Ue}function wy(i,e){let t=i.filter(n=>gn(n)===e);return t.push(...i.filter(n=>gn(n)!==e)),t}function Hs(i){if(!i)return null;if(i.routeConfig?._injector)return i.routeConfig._injector;for(let e=i.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Mu=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Hs(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new Gs(this.rootInjector)}},Gs=(()=>{class i{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,n){let r=this.getOrCreateContext(t);r.outlet=n,this.contexts.set(t,r)}onChildOutletDestroyed(t){let n=this.getContext(t);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let n=this.getContext(t);return n||(n=new Mu(this.rootInjector),this.contexts.set(t,n)),n}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(n){return new(n||i)(Ve(_s))};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),oa=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=bu(e,this._root);return t?t.children.map(n=>n.value):[]}firstChild(e){let t=bu(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Eu(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Eu(e,this._root).map(t=>t.value)}};function bu(i,e){if(i===e.value)return e;for(let t of e.children){let n=bu(i,t);if(n)return n}return null}function Eu(i,e){if(i===e.value)return[e];for(let t of e.children){let n=Eu(i,t);if(n.length)return n.unshift(e),n}return[]}var qt=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function Ar(i){let e={};return i&&i.children.forEach(t=>e[t.value.outlet]=t),e}var aa=class extends oa{snapshot;constructor(e,t){super(e),this.snapshot=t,Lu(this,e)}toString(){return this.snapshot.toString()}};function gp(i){let e=Ay(i),t=new zt([new Vi("",{})]),n=new zt({}),r=new zt({}),s=new zt({}),o=new zt(""),a=new pi(t,n,s,o,r,Ue,i,e.root);return a.snapshot=e.root,new aa(new qt(a,[]),e)}function Ay(i){let e={},t={},n={},r="",s=new Cr([],e,n,r,t,Ue,i,null,{});return new ca("",new qt(s,[]))}var pi=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,n,r,s,o,a,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(st(c=>c[zs]))??Re(void 0),this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(st(e=>Dr(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(st(e=>Dr(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function la(i,e,t="emptyOnly"){let n,{routeConfig:r}=i;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?n={params:ye(ye({},e.params),i.params),data:ye(ye({},e.data),i.data),resolve:ye(ye(ye(ye({},i.data),e.data),r?.data),i._resolvedData)}:n={params:ye({},i.params),data:ye({},i.data),resolve:ye(ye({},i.data),i._resolvedData??{})},r&&_p(r)&&(n.resolve[zs]=r.title),n}var Cr=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[zs]}constructor(e,t,n,r,s,o,a,l,c){this.url=e,this.params=t,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Dr(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Dr(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(n=>n.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},ca=class extends oa{url;constructor(e,t){super(t),this.url=e,Lu(this,t)}toString(){return yp(this._root)}};function Lu(i,e){e.value._routerState=i,e.children.forEach(t=>Lu(i,t))}function yp(i){let e=i.children.length>0?` { ${i.children.map(yp).join(", ")} } `:"";return`${i.value}${e}`}function su(i){if(i.snapshot){let e=i.snapshot,t=i._futureSnapshot;i.snapshot=t,Cn(e.queryParams,t.queryParams)||i.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&i.fragmentSubject.next(t.fragment),Cn(e.params,t.params)||i.paramsSubject.next(t.params),Q0(e.url,t.url)||i.urlSubject.next(t.url),Cn(e.data,t.data)||i.dataSubject.next(t.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function wu(i,e){let t=Cn(i.params,e.params)&&iy(i.url,e.url),n=!i.parent!=!e.parent;return t&&!n&&(!i.parent||wu(i.parent,e.parent))}function _p(i){return typeof i.title=="string"||i.title===null}var Ty=new _t(""),Fu=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=Ue;activateEvents=new ci;deactivateEvents=new ci;attachEvents=new ci;detachEvents=new ci;routerOutletData=Jd(void 0);parentContexts=Te(Gs);location=Te(Lc);changeDetector=Te(ki);inputBinder=Te(pa,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:n,previousValue:r}=t.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Se(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Se(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Se(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,n){this.activated=t,this._activatedRoute=n,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,n){if(this.isActivated)throw new Se(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Au(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=Ms({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[vs]})}return i})(),Au=class i{route;childContexts;parent;outletData;__ngOutletInjector(e){return new i(this.route,this.childContexts,e,this.outletData)}constructor(e,t,n,r){this.route=e,this.childContexts=t,this.parent=n,this.outletData=r}get(e,t){return e===pi?this.route:e===Gs?this.childContexts:e===Ty?this.outletData:this.parent.get(e,t)}},pa=new _t(""),Kf=(()=>{class i{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:n}=t,r=No([n.queryParams,n.params,n.data]).pipe(mn(([s,o,a],l)=>(a=ye(ye(ye({},s),o),a),l===0?Re(a):Promise.resolve(a)))).subscribe(s=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==n||n.component===null){this.unsubscribeFromRouteData(t);return}let o=Sf(n.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:a}of o.inputs)t.activatedComponentRef.setInput(a,s[a])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})();function Cy(i,e,t){let n=Ns(i,e._root,t?t._root:void 0);return new aa(n,e)}function Ns(i,e,t){if(t&&i.shouldReuseRoute(e.value,t.value.snapshot)){let n=t.value;n._futureSnapshot=e.value;let r=Ry(i,e,t);return new qt(n,r)}else{if(i.shouldAttach(e.value)){let s=i.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ns(i,a)),o}}let n=Dy(e.value),r=e.children.map(s=>Ns(i,s));return new qt(n,r)}}function Ry(i,e,t){return e.children.map(n=>{for(let r of t.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return Ns(i,n,r);return Ns(i,n)})}function Dy(i){return new pi(new zt(i.url),new zt(i.params),new zt(i.queryParams),new zt(i.fragment),new zt(i.data),i.outlet,i.component,i)}var Os=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},vp="ngNavigationCancelingError";function ua(i,e){let{redirectTo:t,navigationBehaviorOptions:n}=Gi(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=xp(!1,Xt.Redirect);return r.url=t,r.navigationBehaviorOptions=n,r}function xp(i,e){let t=new Error(`NavigationCancelingError: ${i||""}`);return t[vp]=!0,t.cancellationCode=e,t}function Iy(i){return Sp(i)&&Gi(i.url)}function Sp(i){return!!i&&i[vp]}var Py=(i,e,t,n)=>st(r=>(new Tu(e,r.targetRouterState,r.currentRouterState,t,n).activate(i),r)),Tu=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,n,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,n,e),su(this.futureState.root),this.activateChildRoutes(t,n,e)}deactivateChildRoutes(e,t,n){let r=Ar(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,n);else s&&this.deactivateRouteAndItsChildren(t,n)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Ar(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let n=t.getContext(e.value.outlet),r=n&&e.value.component?n.children:t,s=Ar(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(e,t,n){let r=Ar(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new Su(s.value.snapshot))}),e.children.length&&this.forwardEvent(new vu(e.value.snapshot))}activateRoutes(e,t,n){let r=e.value,s=t?t.value:null;if(su(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),su(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,n)}},ha=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},Rr=class{component;route;constructor(e,t){this.component=e,this.route=t}};function Ly(i,e,t){let n=i._root,r=e?e._root:null;return Cs(n,r,t,[n.value])}function Fy(i){let e=i.routeConfig?i.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:i,guards:e}}function Nr(i,e){let t=Symbol(),n=e.get(i,t);return n===t?typeof i=="function"&&!Yd(i)?i:e.get(i):n}function Cs(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Ar(e);return i.children.forEach(o=>{Ny(o,s[o.value.outlet],t,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Is(a,t.getContext(o),r)),r}function Ny(i,e,t,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=e?e.value:null,a=t?t.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let l=Oy(o,s,s.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new ha(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Cs(i,e,a?a.children:null,n,r):Cs(i,e,t,n,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Rr(a.outlet.component,o))}else o&&Is(e,a,r),r.canActivateChecks.push(new ha(n)),s.component?Cs(i,null,a?a.children:null,n,r):Cs(i,null,t,n,r);return r}function Oy(i,e,t){if(typeof t=="function")return t(i,e);switch(t){case"pathParamsChange":return!Hi(i.url,e.url);case"pathParamsOrQueryParamsChange":return!Hi(i.url,e.url)||!Cn(i.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!wu(i,e)||!Cn(i.queryParams,e.queryParams);case"paramsChange":default:return!wu(i,e)}}function Is(i,e,t){let n=Ar(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?e?Is(o,e.children.getContext(s),t):Is(o,null,t):Is(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new Rr(e.outlet.component,r)):t.canDeactivateChecks.push(new Rr(null,r)):t.canDeactivateChecks.push(new Rr(null,r))}function Ws(i){return typeof i=="function"}function Uy(i){return typeof i=="boolean"}function By(i){return i&&Ws(i.canLoad)}function ky(i){return i&&Ws(i.canActivate)}function zy(i){return i&&Ws(i.canActivateChild)}function Vy(i){return i&&Ws(i.canDeactivate)}function Hy(i){return i&&Ws(i.canMatch)}function Mp(i){return i instanceof Hd||i?.name==="EmptyError"}var Ko=Symbol("INITIAL_VALUE");function Fr(){return mn(i=>No(i.map(e=>e.pipe(vr(1),qd(Ko)))).pipe(st(e=>{for(let t of e)if(t!==!0){if(t===Ko)return Ko;if(t===!1||Gy(t))return t}return!0}),Ui(e=>e!==Ko),vr(1)))}function Gy(i){return Gi(i)||i instanceof Os}function Wy(i,e){return $t(t=>{let{targetSnapshot:n,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Re(At(ye({},t),{guardsResult:!0})):$y(o,n,r,i).pipe($t(a=>a&&Uy(a)?qy(n,s,i,e):Re(a)),st(a=>At(ye({},t),{guardsResult:a})))})}function $y(i,e,t,n){return Vt(i).pipe($t(r=>Ky(r.component,r.route,t,e,n)),oi(r=>r!==!0,!0))}function qy(i,e,t,n){return Vt(e).pipe(_r(r=>Gd(Yy(r.route.parent,n),Xy(r.route,n),Zy(i,r.path,t),jy(i,r.route,t))),oi(r=>r!==!0,!0))}function Xy(i,e){return i!==null&&e&&e(new xu(i)),Re(!0)}function Yy(i,e){return i!==null&&e&&e(new _u(i)),Re(!0)}function jy(i,e,t){let n=e.routeConfig?e.routeConfig.canActivate:null;if(!n||n.length===0)return Re(!0);let r=n.map(s=>Sc(()=>{let o=Hs(e)??t,a=Nr(s,o),l=ky(a)?a.canActivate(e,i):An(o,()=>a(e,i));return mi(l).pipe(oi())}));return Re(r).pipe(Fr())}function Zy(i,e,t){let n=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>Fy(o)).filter(o=>o!==null).map(o=>Sc(()=>{let a=o.guards.map(l=>{let c=Hs(o.node)??t,u=Nr(l,c),h=zy(u)?u.canActivateChild(n,i):An(c,()=>u(n,i));return mi(h).pipe(oi())});return Re(a).pipe(Fr())}));return Re(s).pipe(Fr())}function Ky(i,e,t,n,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Re(!0);let o=s.map(a=>{let l=Hs(e)??r,c=Nr(a,l),u=Vy(c)?c.canDeactivate(i,e,t,n):An(l,()=>c(i,e,t,n));return mi(u).pipe(oi())});return Re(o).pipe(Fr())}function Jy(i,e,t,n){let r=e.canLoad;if(r===void 0||r.length===0)return Re(!0);let s=r.map(o=>{let a=Nr(o,i),l=By(a)?a.canLoad(e,t):An(i,()=>a(e,t));return mi(l)});return Re(s).pipe(Fr(),bp(n))}function bp(i){return zd(Rt(e=>{if(typeof e!="boolean")throw ua(i,e)}),st(e=>e===!0))}function Qy(i,e,t,n){let r=e.canMatch;if(!r||r.length===0)return Re(!0);let s=r.map(o=>{let a=Nr(o,i),l=Hy(a)?a.canMatch(e,t):An(i,()=>a(e,t));return mi(l)});return Re(s).pipe(Fr(),bp(n))}var Us=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Bs=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function wr(i){return gs(new Us(i))}function e_(i){return gs(new Se(4e3,!1))}function t_(i){return gs(xp(!1,Xt.GuardRejected))}var Cu=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let n=[],r=t.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return Re(n);if(r.numberOfChildren>1||!r.children[Ue])return e_(`${e.redirectTo}`);r=r.children[Ue]}}applyRedirectCommands(e,t,n,r,s){if(typeof t!="string"){let a=t,{queryParams:l,fragment:c,routeConfig:u,url:h,outlet:d,params:p,data:g,title:y}=r,m=An(s,()=>a({params:p,data:g,queryParams:l,fragment:c,routeConfig:u,url:h,outlet:d,title:y}));if(m instanceof qn)throw new Bs(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,n);if(t[0]==="/")throw new Bs(o);return o}applyRedirectCreateUrlTree(e,t,n,r){let s=this.createSegmentGroup(e,t.root,n,r);return new qn(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let n={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[r]=t[a]}else n[r]=s}),n}createSegmentGroup(e,t,n,r){let s=this.createSegments(e,t.segments,n,r),o={};return Object.entries(t.children).forEach(([a,l])=>{o[a]=this.createSegmentGroup(e,l,n,r)}),new nt(s,o)}createSegments(e,t,n,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,n))}findPosParam(e,t,n){let r=n[t.path.substring(1)];if(!r)throw new Se(4001,!1);return r}findOrReturn(e,t){let n=0;for(let r of t){if(r.path===e.path)return t.splice(n),r;n++}return e}},Ru={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function n_(i,e,t,n,r){let s=Ep(i,e,t);return s.matched?(n=Ey(e,n),Qy(n,e,t,r).pipe(st(o=>o===!0?s:ye({},Ru)))):Re(s)}function Ep(i,e,t){if(e.path==="**")return i_(t);if(e.path==="")return e.pathMatch==="full"&&(i.hasChildren()||t.length>0)?ye({},Ru):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||J0)(t,i,e);if(!r)return ye({},Ru);let s={};Object.entries(r.posParams??{}).forEach(([a,l])=>{s[a]=l.path});let o=r.consumed.length>0?ye(ye({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function i_(i){return{matched:!0,parameters:i.length>0?ip(i).parameters:{},consumedSegments:i,remainingSegments:[],positionalParamSegments:{}}}function Jf(i,e,t,n){return t.length>0&&o_(i,t,n)?{segmentGroup:new nt(e,s_(n,new nt(t,i.children))),slicedSegments:[]}:t.length===0&&a_(i,t,n)?{segmentGroup:new nt(i.segments,r_(i,t,n,i.children)),slicedSegments:t}:{segmentGroup:new nt(i.segments,i.children),slicedSegments:t}}function r_(i,e,t,n){let r={};for(let s of t)if(ma(i,e,s)&&!n[gn(s)]){let o=new nt([],{});r[gn(s)]=o}return ye(ye({},n),r)}function s_(i,e){let t={};t[Ue]=e;for(let n of i)if(n.path===""&&gn(n)!==Ue){let r=new nt([],{});t[gn(n)]=r}return t}function o_(i,e,t){return t.some(n=>ma(i,e,n)&&gn(n)!==Ue)}function a_(i,e,t){return t.some(n=>ma(i,e,n))}function ma(i,e,t){return(i.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function l_(i,e,t){return e.length===0&&!i.children[t]}var Du=class{};function c_(i,e,t,n,r,s,o="emptyOnly"){return new Iu(i,e,t,n,r,o,s).recognize()}var u_=31,Iu=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,n,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Cu(this.urlSerializer,this.urlTree)}noMatchError(e){return new Se(4002,`'${e.segmentGroup}'`)}recognize(){let e=Jf(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(st(({children:t,rootSnapshot:n})=>{let r=new qt(n,t),s=new ca("",r),o=yy(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new Cr([],Object.freeze({}),Object.freeze(ye({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),Ue,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,Ue,t).pipe(st(n=>({children:n,rootSnapshot:t})),yr(n=>{if(n instanceof Bs)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Us?this.noMatchError(n):n}))}processSegmentGroup(e,t,n,r,s){return n.segments.length===0&&n.hasChildren()?this.processChildren(e,t,n,s):this.processSegment(e,t,n,n.segments,r,!0,s).pipe(st(o=>o instanceof qt?[o]:[]))}processChildren(e,t,n,r){let s=[];for(let o of Object.keys(n.children))o==="primary"?s.unshift(o):s.push(o);return Vt(s).pipe(_r(o=>{let a=n.children[o],l=wy(t,o);return this.processSegmentGroup(e,l,a,o,r)}),$d((o,a)=>(o.push(...a),o)),Mc(null),Wd(),$t(o=>{if(o===null)return wr(n);let a=wp(o);return h_(a),Re(a)}))}processSegment(e,t,n,r,s,o,a){return Vt(t).pipe(_r(l=>this.processSegmentAgainstRoute(l._injector??e,t,l,n,r,s,o,a).pipe(yr(c=>{if(c instanceof Us)return Re(null);throw c}))),oi(l=>!!l),yr(l=>{if(Mp(l))return l_(n,r,s)?Re(new Du):wr(n);throw l}))}processSegmentAgainstRoute(e,t,n,r,s,o,a,l){return gn(n)!==o&&(o===Ue||!ma(r,s,n))?wr(r):n.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,n,s,o,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,n,s,o,l):wr(r)}expandSegmentAgainstRouteUsingRedirect(e,t,n,r,s,o,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:h,remainingSegments:d}=Ep(t,r,s);if(!l)return wr(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>u_&&(this.allowRedirects=!1));let p=new Cr(s,c,Object.freeze(ye({},this.urlTree.queryParams)),this.urlTree.fragment,Qf(r),gn(r),r.component??r._loadedComponent??null,r,ep(r)),g=la(p,a,this.paramsInheritanceStrategy);p.params=Object.freeze(g.params),p.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,p,e);return this.applyRedirects.lineralizeSegments(r,y).pipe($t(m=>this.processSegment(e,n,t,m.concat(d),o,!1,a)))}matchSegmentAgainstRoute(e,t,n,r,s,o){let a=n_(t,n,r,e,this.urlSerializer);return n.path==="**"&&(t.children={}),a.pipe(mn(l=>l.matched?(e=n._injector??e,this.getChildConfig(e,n,r).pipe(mn(({routes:c})=>{let u=n._loadedInjector??e,{parameters:h,consumedSegments:d,remainingSegments:p}=l,g=new Cr(d,h,Object.freeze(ye({},this.urlTree.queryParams)),this.urlTree.fragment,Qf(n),gn(n),n.component??n._loadedComponent??null,n,ep(n)),y=la(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:f}=Jf(t,d,p,c);if(f.length===0&&m.hasChildren())return this.processChildren(u,c,m,g).pipe(st(E=>new qt(g,E)));if(c.length===0&&f.length===0)return Re(new qt(g,[]));let w=gn(n)===s;return this.processSegment(u,c,m,f,w?Ue:s,!0,g).pipe(st(E=>new qt(g,E instanceof qt?[E]:[])))}))):wr(t)))}getChildConfig(e,t,n){return t.children?Re({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Re({routes:t._loadedRoutes,injector:t._loadedInjector}):Jy(e,t,n,this.urlSerializer).pipe($t(r=>r?this.configLoader.loadChildren(e,t).pipe(Rt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):t_(t))):Re({routes:[],injector:e})}};function h_(i){i.sort((e,t)=>e.value.outlet===Ue?-1:t.value.outlet===Ue?1:e.value.outlet.localeCompare(t.value.outlet))}function d_(i){let e=i.value.routeConfig;return e&&e.path===""}function wp(i){let e=[],t=new Set;for(let n of i){if(!d_(n)){e.push(n);continue}let r=e.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),t.add(r)):e.push(n)}for(let n of t){let r=wp(n.children);e.push(new qt(n.value,r))}return e.filter(n=>!t.has(n))}function Qf(i){return i.data||{}}function ep(i){return i.resolve||{}}function f_(i,e,t,n,r,s){return $t(o=>c_(i,e,t,n,o.extractedUrl,r,s).pipe(st(({state:a,tree:l})=>At(ye({},o),{targetSnapshot:a,urlAfterRedirects:l}))))}function p_(i,e){return $t(t=>{let{targetSnapshot:n,guards:{canActivateChecks:r}}=t;if(!r.length)return Re(t);let s=new Set(r.map(l=>l.route)),o=new Set;for(let l of s)if(!o.has(l))for(let c of Ap(l))o.add(c);let a=0;return Vt(o).pipe(_r(l=>s.has(l)?m_(l,n,i,e):(l.data=la(l,l.parent,i).resolve,Re(void 0))),Rt(()=>a++),bc(1),$t(l=>a===o.size?Re(t):Hn))})}function Ap(i){let e=i.children.map(t=>Ap(t)).flat();return[i,...e]}function m_(i,e,t,n){let r=i.routeConfig,s=i._resolve;return r?.title!==void 0&&!_p(r)&&(s[zs]=r.title),g_(s,i,e,n).pipe(st(o=>(i._resolvedData=o,i.data=la(i,i.parent,t).resolve,null)))}function g_(i,e,t,n){let r=lu(i);if(r.length===0)return Re({});let s={};return Vt(r).pipe($t(o=>y_(i[o],e,t,n).pipe(oi(),Rt(a=>{if(a instanceof Os)throw ua(new Ir,a);s[o]=a}))),bc(1),st(()=>s),yr(o=>Mp(o)?Hn:gs(o)))}function y_(i,e,t,n){let r=Hs(e)??n,s=Nr(i,r),o=s.resolve?s.resolve(e,t):An(r,()=>s(e,t));return mi(o)}function ou(i){return mn(e=>{let t=i(e);return t?Vt(t).pipe(st(()=>e)):Re(e)})}var Tp=(()=>{class i{buildTitle(t){let n,r=t.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===Ue);return n}getResolvedTitleForRoute(t){return t.data[zs]}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>Te(__),providedIn:"root"})}return i})(),__=(()=>{class i extends Tp{title;constructor(t){super(),this.title=t}updateTitle(t){let n=this.buildTitle(t);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||i)(Ve(qf))};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$s=new _t("",{providedIn:"root",factory:()=>({})}),v_=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=ui({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Tn(0,"router-outlet")},dependencies:[Fu],encapsulation:2})}return i})();function Nu(i){let e=i.children&&i.children.map(Nu),t=e?At(ye({},i),{children:e}):ye({},i);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Ue&&(t.component=v_),t}var ks=new _t(""),Ou=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=Te(Vo);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Re(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let n=mi(t.loadComponent()).pipe(st(Cp),Rt(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),Oo(()=>{this.componentLoaders.delete(t)})),r=new xc(n,()=>new wn).pipe(vc());return this.componentLoaders.set(t,r),r}loadChildren(t,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Re({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let s=x_(n,this.compiler,t,this.onLoadEndListener).pipe(Oo(()=>{this.childrenLoaders.delete(n)})),o=new xc(s,()=>new wn).pipe(vc());return this.childrenLoaders.set(n,o),o}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function x_(i,e,t,n){return mi(i.loadChildren()).pipe(st(Cp),$t(r=>r instanceof lf||Array.isArray(r)?Re(r):Vt(e.compileModuleAsync(r))),st(r=>{n&&n(i);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(ks,[],{optional:!0,self:!0}).flat()),{routes:o.map(Nu),injector:s}}))}function S_(i){return i&&typeof i=="object"&&"default"in i}function Cp(i){return S_(i)?i.default:i}var Uu=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>Te(M_),providedIn:"root"})}return i})(),M_=(()=>{class i{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,n){return t}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Rp=new _t(""),Dp=new _t("");function b_(i,e,t){let n=i.get(Dp),r=i.get(It);return i.get(sn).runOutsideAngular(()=>{if(!r.startViewTransition||n.skipNextTransition)return n.skipNextTransition=!1,new Promise(c=>setTimeout(c));let s,o=new Promise(c=>{s=c}),a=r.startViewTransition(()=>(s(),E_(i))),{onViewTransitionCreated:l}=n;return l&&An(i,()=>l({transition:a,from:e,to:t})),o})}function E_(i){return new Promise(e=>{nf({read:()=>setTimeout(e)},{injector:i})})}var Ip=new _t(""),Bu=(()=>{class i{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new wn;transitionAbortSubject=new wn;configLoader=Te(Ou);environmentInjector=Te(_s);destroyRef=Te(Zd);urlSerializer=Te(Vs);rootContexts=Te(Gs);location=Te(Er);inputBindingEnabled=Te(pa,{optional:!0})!==null;titleStrategy=Te(Tp);options=Te($s,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=Te(Uu);createViewTransition=Te(Rp,{optional:!0});navigationErrorHandler=Te(Ip,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Re(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new gu(r)),n=r=>this.events.next(new yu(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let n=++this.navigationId;this.transitions?.next(At(ye(ye({},this.transitions.value),t),{id:n}))}setupNavigations(t,n,r){return this.transitions=new zt({id:0,currentUrlTree:n,currentRawUrl:n,extractedUrl:this.urlHandlingStrategy.extract(n),urlAfterRedirects:this.urlHandlingStrategy.extract(n),rawUrl:n,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:Ds,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Ui(s=>s.id!==0),st(s=>At(ye({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),mn(s=>{let o=!1,a=!1;return Re(s).pipe(mn(l=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",Xt.SupersededByNewNavigation),Hn;this.currentTransition=s,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?At(ye({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&u!=="reload"){let h="";return this.events.next(new fi(l.id,this.urlSerializer.serialize(l.rawUrl),h,ia.IgnoredSameUrlNavigation)),l.resolve(!1),Hn}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Re(l).pipe(mn(h=>{let d=this.transitions?.getValue();return this.events.next(new Pr(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),d!==this.transitions?.getValue()?Hn:Promise.resolve(h)}),f_(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),Rt(h=>{s.targetSnapshot=h.targetSnapshot,s.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=At(ye({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let d=new ra(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(d)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:d,source:p,restoredState:g,extras:y}=l,m=new Pr(h,this.urlSerializer.serialize(d),p,g);this.events.next(m);let f=gp(this.rootComponentType).snapshot;return this.currentTransition=s=At(ye({},l),{targetSnapshot:f,urlAfterRedirects:d,extras:At(ye({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=d,Re(s)}else{let h="";return this.events.next(new fi(l.id,this.urlSerializer.serialize(l.extractedUrl),h,ia.IgnoredByUrlHandlingStrategy)),l.resolve(!1),Hn}}),Rt(l=>{let c=new du(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),st(l=>(this.currentTransition=s=At(ye({},l),{guards:Ly(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),Wy(this.environmentInjector,l=>this.events.next(l)),Rt(l=>{if(s.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw ua(this.urlSerializer,l.guardsResult);let c=new fu(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),Ui(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",Xt.GuardRejected),!1)),ou(l=>{if(l.guards.canActivateChecks.length)return Re(l).pipe(Rt(c=>{let u=new pu(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),mn(c=>{let u=!1;return Re(c).pipe(p_(this.paramsInheritanceStrategy,this.environmentInjector),Rt({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",Xt.NoDataFromResolver)}}))}),Rt(c=>{let u=new mu(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),ou(l=>{let c=u=>{let h=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(u.routeConfig).pipe(Rt(d=>{u.component=d}),st(()=>{})));for(let d of u.children)h.push(...c(d));return h};return No(c(l.targetSnapshot.root)).pipe(Mc(null),vr(1))}),ou(()=>this.afterPreactivation()),mn(()=>{let{currentSnapshot:l,targetSnapshot:c}=s,u=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return u?Vt(u).pipe(st(()=>s)):Re(s)}),st(l=>{let c=Cy(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=At(ye({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),Rt(()=>{this.events.next(new Fs)}),Py(this.rootContexts,t.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),vr(1),Rt({next:l=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new yn(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{o=!0}}),Xd(this.transitionAbortSubject.pipe(Rt(l=>{throw l}))),Oo(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",Xt.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),yr(l=>{if(this.destroyed)return s.resolve(!1),Hn;if(a=!0,Sp(l))this.events.next(new $n(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),Iy(l)?this.events.next(new Lr(l.url,l.navigationBehaviorOptions)):s.resolve(!1);else{let c=new Ls(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0);try{let u=An(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Os){let{message:h,cancellationCode:d}=ua(this.urlSerializer,u);this.events.next(new $n(s.id,this.urlSerializer.serialize(s.extractedUrl),h,d)),this.events.next(new Lr(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return Hn}))}))}cancelNavigationTransition(t,n,r){let s=new $n(t.id,this.urlSerializer.serialize(t.extractedUrl),n,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==n?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function w_(i){return i!==Ds}var A_=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>Te(T_),providedIn:"root"})}return i})(),Pu=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},T_=(()=>{class i extends Pu{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Tc(i)))(r||i)}})();static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Pp=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:()=>Te(C_),providedIn:"root"})}return i})(),C_=(()=>{class i extends Pp{location=Te(Er);urlSerializer=Te(Vs);options=Te($s,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=Te(Uu);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new qn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=gp(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(n=>{n.type==="popstate"&&t(n.url,n.state)})}handleRouterEvent(t,n){if(t instanceof Pr)this.stateMemento=this.createStateMemento();else if(t instanceof fi)this.rawUrlTree=n.initialUrl;else if(t instanceof ra){if(this.urlUpdateStrategy==="eager"&&!n.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl);this.setBrowserUrl(n.targetBrowserUrl??r,n)}}else t instanceof Fs?(this.currentUrlTree=n.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(n.finalUrl,n.initialUrl),this.routerState=n.targetRouterState,this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(n.targetBrowserUrl??this.rawUrlTree,n)):t instanceof $n&&(t.code===Xt.GuardRejected||t.code===Xt.NoDataFromResolver)?this.restoreHistory(n):t instanceof Ls?this.restoreHistory(n,!0):t instanceof yn&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,n){let r=t instanceof qn?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||n.extras.replaceUrl){let s=this.browserPageId,o=ye(ye({},n.extras.state),this.generateNgRouterState(n.id,s));this.location.replaceState(r,"",o)}else{let s=ye(ye({},n.extras.state),this.generateNgRouterState(n.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,n){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:n}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Tc(i)))(r||i)}})();static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Lp(i,e){i.events.pipe(Ui(t=>t instanceof yn||t instanceof $n||t instanceof Ls||t instanceof fi),st(t=>t instanceof yn||t instanceof fi?0:(t instanceof $n?t.code===Xt.Redirect||t.code===Xt.SupersededByNewNavigation:!1)?2:1),Ui(t=>t!==2),vr(1)).subscribe(()=>{e()})}var R_={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},D_={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},Xn=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=Te(Oc);stateManager=Te(Pp);options=Te($s,{optional:!0})||{};pendingTasks=Te(Kd);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=Te(Bu);urlSerializer=Te(Vs);location=Te(Er);urlHandlingStrategy=Te(Uu);_events=new wn;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=Te(A_);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=Te(ks,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!Te(pa,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new kd;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof $n&&n.code!==Xt.Redirect&&n.code!==Xt.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof yn)this.navigated=!0;else if(n instanceof Lr){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),l=ye({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||w_(r.source)},o);this.scheduleNavigation(a,Ds,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}P_(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ds,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,n)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",n)},0)})}navigateToSyncWithBrowser(t,n,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let l=ye({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,n,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Nu),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:l}=n,c=l?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ye(ye({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let d=r?r.snapshot:this.routerState.snapshot.root;h=dp(d)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),h=this.currentUrlTree.root}return fp(h,t,u,c??null)}navigateByUrl(t,n={skipLocationChange:!1}){let r=Gi(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,Ds,null,n)}navigate(t,n={skipLocationChange:!1}){return I_(t),this.navigateByUrl(this.createUrlTree(t,n),n)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,n){let r;if(n===!0?r=ye({},R_):n===!1?r=ye({},D_):r=n,Gi(t))return Xf(this.currentUrlTree,t,r);let s=this.parseUrl(t);return Xf(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(t,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,l,c;o?(a=o.resolve,l=o.reject,c=o.promise):c=new Promise((h,d)=>{a=h,l=d});let u=this.pendingTasks.add();return Lp(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(h=>Promise.reject(h))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function I_(i){for(let e=0;e<i.length;e++)if(i[e]==null)throw new Se(4008,!1)}function P_(i){return!(i instanceof Fs)&&!(i instanceof Lr)}var da=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;href=null;target;queryParams;fragment;queryParamsHandling;state;info;relativeTo;isAnchorElement;subscription;onChanges=new wn;constructor(t,n,r,s,o,a){this.router=t,this.route=n,this.tabIndexAttribute=r,this.renderer=s,this.el=o,this.locationStrategy=a;let l=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=l==="a"||l==="area",this.isAnchorElement?this.subscription=t.events.subscribe(c=>{c instanceof yn&&this.updateHref()}):this.setTabIndexIfNotOnNativeEl("0")}preserveFragment=!1;skipLocationChange=!1;replaceUrl=!1;setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.isAnchorElement&&this.updateHref(),this.onChanges.next(this)}routerLinkInput=null;set routerLink(t){t==null?(this.routerLinkInput=null,this.setTabIndexIfNotOnNativeEl(null)):(Gi(t)?this.routerLinkInput=t:this.routerLinkInput=Array.isArray(t)?t:[t],this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,n,r,s,o){let a=this.urlTree;if(a===null||this.isAnchorElement&&(t!==0||n||r||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let l={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,l),!this.isAnchorElement}ngOnDestroy(){this.subscription?.unsubscribe()}updateHref(){let t=this.urlTree;this.href=t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t)):null;let n=this.href===null?null:rf(this.href,this.el.nativeElement.tagName.toLowerCase(),"href");this.applyAttributeValue("href",n)}applyAttributeValue(t,n){let r=this.renderer,s=this.el.nativeElement;n!==null?r.setAttribute(s,t,n):r.removeAttribute(s,t)}get urlTree(){return this.routerLinkInput===null?null:Gi(this.routerLinkInput)?this.routerLinkInput:this.router.createUrlTree(this.routerLinkInput,{relativeTo:this.relativeTo!==void 0?this.relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,queryParamsHandling:this.queryParamsHandling,preserveFragment:this.preserveFragment})}static \u0275fac=function(n){return new(n||i)(Tt(Xn),Tt(pi),Cc("tabindex"),Tt(Ss),Tt(Bi),Tt(Wn))};static \u0275dir=Ms({type:i,selectors:[["","routerLink",""]],hostVars:1,hostBindings:function(n,r){n&1&&br("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),n&2&&df("target",r.target)},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",bs],skipLocationChange:[2,"skipLocationChange","skipLocationChange",bs],replaceUrl:[2,"replaceUrl","replaceUrl",bs],routerLink:"routerLink"},features:[Nc,vs]})}return i})(),Fp=(()=>{class i{router;element;renderer;cdr;link;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new ci;constructor(t,n,r,s,o){this.router=t,this.element=n,this.renderer=r,this.cdr=s,this.link=o,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof yn&&this.update()})}ngAfterContentInit(){Re(this.links.changes,Re(null)).pipe(ys()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=Vt(t).pipe(ys()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(t){let n=Array.isArray(t)?t:t.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(n=>{t?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let n=L_(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact||!1;return r=>{let s=r.urlTree;return s?t.isActive(s,n):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(n){return new(n||i)(Tt(Xn),Tt(Bi),Tt(Ss),Tt(ki),Tt(da,8))};static \u0275dir=Ms({type:i,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,s){if(n&1&&pf(s,da,5),n&2){let o;mf(o=gf())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[vs]})}return i})();function L_(i){return!!i.paths}var fa=class{};var F_=(()=>{class i{router;injector;preloadingStrategy;loader;subscription;constructor(t,n,r,s,o){this.router=t,this.injector=r,this.preloadingStrategy=s,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(Ui(t=>t instanceof yn),_r(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(t,n){let r=[];for(let s of n){s.providers&&!s._injector&&(s._injector=Fc(s.providers,t,`Route: ${s.path}`));let o=s._injector??t,a=s._loadedInjector??o;(s.loadChildren&&!s._loadedRoutes&&s.canLoad===void 0||s.loadComponent&&!s._loadedComponent)&&r.push(this.preloadConfig(o,s)),(s.children||s._loadedRoutes)&&r.push(this.processRoutes(a,s.children??s._loadedRoutes))}return Vt(r).pipe(ys())}preloadConfig(t,n){return this.preloadingStrategy.preload(n,()=>{let r;n.loadChildren&&n.canLoad===void 0?r=this.loader.loadChildren(t,n):r=Re(null);let s=r.pipe($t(o=>o===null?Re(void 0):(n._loadedRoutes=o.routes,n._loadedInjector=o.injector,this.processRoutes(o.injector??t,o.routes))));if(n.loadComponent&&!n._loadedComponent){let o=this.loader.loadComponent(n);return Vt([s,o]).pipe(ys())}else return s})}static \u0275fac=function(n){return new(n||i)(Ve(Xn),Ve(Vo),Ve(_s),Ve(fa),Ve(Ou))};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Np=new _t(""),N_=(()=>{class i{urlSerializer;transitions;viewportScroller;zone;options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource="imperative";restoredId=0;store={};constructor(t,n,r,s,o={}){this.urlSerializer=t,this.transitions=n,this.viewportScroller=r,this.zone=s,this.options=o,o.scrollPositionRestoration||="disabled",o.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Pr?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof yn?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof fi&&t.code===ia.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof sa&&(t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,n){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new sa(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,n))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(n){af()};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})();function Op(i,...e){return wc([{provide:ks,multi:!0,useValue:i},[],{provide:pi,useFactory:Up,deps:[Xn]},{provide:kc,multi:!0,useFactory:Bp},e.map(t=>t.\u0275providers)])}function Up(i){return i.routerState.root}function qs(i,e){return{\u0275kind:i,\u0275providers:e}}function Bp(){let i=Te(xr);return e=>{let t=i.get(zc);if(e!==t.components[0])return;let n=i.get(Xn),r=i.get(kp);i.get(ku)===1&&n.initialNavigation(),i.get(zp,null,Ec.Optional)?.setUpPreloading(),i.get(Np,null,Ec.Optional)?.init(),n.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var kp=new _t("",{factory:()=>new wn}),ku=new _t("",{providedIn:"root",factory:()=>1});function O_(){return qs(2,[{provide:ku,useValue:0},{provide:Bc,multi:!0,deps:[xr],useFactory:e=>{let t=e.get(Cf,Promise.resolve());return()=>t.then(()=>new Promise(n=>{let r=e.get(Xn),s=e.get(kp);Lp(r,()=>{n(!0)}),e.get(Bu).afterPreactivation=()=>(n(!0),s.closed?Re(void 0):s),r.initialNavigation()}))}}])}function U_(){return qs(3,[{provide:Bc,multi:!0,useFactory:()=>{let e=Te(Xn);return()=>{e.setUpLocationChangeListener()}}},{provide:ku,useValue:2}])}var zp=new _t("");function B_(i){return qs(0,[{provide:zp,useExisting:F_},{provide:fa,useExisting:i}])}function k_(){return qs(8,[Kf,{provide:pa,useExisting:Kf}])}function z_(i){let e=[{provide:Rp,useValue:b_},{provide:Dp,useValue:ye({skipNextTransition:!!i?.skipInitialTransition},i)}];return qs(9,e)}var V_=[Er,{provide:Vs,useClass:Ir},Xn,Gs,{provide:pi,useFactory:Up,deps:[Xn]},Ou,[]],Vp=(()=>{class i{constructor(){}static forRoot(t,n){return{ngModule:i,providers:[V_,[],{provide:ks,multi:!0,useValue:t},[],n?.errorHandler?{provide:Ip,useValue:n.errorHandler}:[],{provide:$s,useValue:n||{}},n?.useHash?G_():W_(),H_(),n?.preloadingStrategy?B_(n.preloadingStrategy).\u0275providers:[],n?.initialNavigation?$_(n):[],n?.bindToComponentInputs?k_().\u0275providers:[],n?.enableViewTransitions?z_().\u0275providers:[],q_()]}}static forChild(t){return{ngModule:i,providers:[{provide:ks,multi:!0,useValue:t}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=hi({type:i});static \u0275inj=li({})}return i})();function H_(){return{provide:Np,useFactory:()=>{let i=Te(Ff),e=Te(sn),t=Te($s),n=Te(Bu),r=Te(Vs);return t.scrollOffset&&i.setOffset(t.scrollOffset),new N_(r,n,i,e,t)}}}function G_(){return{provide:Wn,useClass:Df}}function W_(){return{provide:Wn,useClass:Xc}}function $_(i){return[i.initialNavigation==="disabled"?U_().\u0275providers:[],i.initialNavigation==="enabledBlocking"?O_().\u0275providers:[]]}var tp=new _t("");function q_(){return[{provide:tp,useFactory:Bp},{provide:kc,multi:!0,useExisting:tp}]}var Hp=[{path:"",redirectTo:"accueil",pathMatch:"full"},{path:"accueil",loadComponent:()=>import("./chunk-4AS6ALXZ.js").then(i=>i.AccueilComponent),title:"Accueil"},{path:"changelog",loadComponent:()=>import("./chunk-VJYHUPD6.js").then(i=>i.ChangelogComponent),title:"Changelog"}];var Or=class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=ui({type:i,selectors:[["app-header"]],decls:29,vars:0,consts:[[1,"header"],[1,"header-container"],[1,"nav-menu"],["routerLink","/accueil","routerLinkActive","active",1,"nav-link"],["routerLink","/changelog","routerLinkActive","active",1,"nav-link"],["routerLink","/services","routerLinkActive","active",1,"nav-link"],["routerLink","/a-propos","routerLinkActive","active",1,"nav-link"],["routerLink","/contact","routerLinkActive","active",1,"nav-link"],[1,"header-actions"],[1,"search-bar"],[1,"fas","fa-search"],["type","text","placeholder","Rechercher...",1,"search-input"],[1,"btn","btn-secondary"],[1,"btn","btn-primary"],[1,"mobile-menu-btn"],[1,"fas","fa-bars"]],template:function(t,n){t&1&&(Dt(0,"header",0)(1,"div",1)(2,"nav")(3,"ul",2)(4,"li")(5,"a",3),on(6,"Accueil"),Ot()(),Dt(7,"li")(8,"a",4),on(9,"Changelog"),Ot()(),Dt(10,"li")(11,"a",5),on(12,"Services"),Ot()(),Dt(13,"li")(14,"a",6),on(15,"\xC0 propos"),Ot()(),Dt(16,"li")(17,"a",7),on(18,"Contact"),Ot()()()(),Dt(19,"div",8)(20,"div",9),Tn(21,"i",10)(22,"input",11),Ot(),Dt(23,"button",12),on(24,"Se connecter"),Ot(),Dt(25,"button",13),on(26,"S'inscrire"),Ot(),Dt(27,"button",14),Tn(28,"i",15),Ot()()()())},dependencies:[Vp,da,Fp],styles:['.header[_ngcontent-%COMP%]{background:#0006;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);padding:15px 0;position:sticky;top:0;z-index:1000;border-bottom:1px solid rgba(255,236,66,.2)}.header-container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto;padding:0 20px;display:flex;justify-content:space-between;align-items:center}.nav-menu[_ngcontent-%COMP%]{display:flex;list-style:none;margin:0;padding:0;gap:30px}.nav-link[_ngcontent-%COMP%]{color:#ffec42;text-decoration:none;font-family:Arial,sans-serif;font-size:16px;padding:8px 12px;transition:all .3s ease;position:relative}.nav-link[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:0;left:50%;transform:translate(-50%);width:0;height:2px;background:#ffec42;transition:width .3s ease}.nav-link[_ngcontent-%COMP%]:hover:after{width:100%}.header-actions[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px}.search-bar[_ngcontent-%COMP%]{display:flex;align-items:center;background:#ffec421a;border-radius:20px;padding:8px 15px;border:1px solid rgba(255,236,66,.2)}.search-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:#ffec42;margin-right:10px}.search-input[_ngcontent-%COMP%]{background:transparent;border:none;color:#ffec42;outline:none;width:150px;font-family:Arial,sans-serif}.search-input[_ngcontent-%COMP%]::placeholder{color:#ffec4280}.btn[_ngcontent-%COMP%]{padding:8px 16px;border-radius:20px;font-family:Arial,sans-serif;font-size:14px;cursor:pointer;transition:all .3s ease;border:none}.btn-primary[_ngcontent-%COMP%]{background:#ffec42;color:#000}.btn-secondary[_ngcontent-%COMP%]{background:transparent;color:#ffec42;border:1px solid #ffec42}.btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 4px 15px #ffec4233}.mobile-menu-btn[_ngcontent-%COMP%]{display:none;background:transparent;border:none;color:#ffec42;font-size:24px;cursor:pointer}@media (max-width: 968px){.nav-menu[_ngcontent-%COMP%]{gap:15px}.search-bar[_ngcontent-%COMP%]{display:none}}@media (max-width: 768px){.nav-menu[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]{display:none}.mobile-menu-btn[_ngcontent-%COMP%]{display:block}.header-container[_ngcontent-%COMP%]{padding:0 15px}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.nav-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fadeIn .5s ease forwards;animation-delay:calc(.1s * var(--i))}.nav-link.active[_ngcontent-%COMP%]{color:#ffec42;font-weight:700}.nav-link.active[_ngcontent-%COMP%]:after{width:100%}']})};var nl="173";var um=0,gh=1,hm=2;var yh=1,dm=2,Nn=3,ei=0,Bt=1,Gt=2,ni=0,Zi=1,_h=2,vh=3,xh=4,fm=5,Ei=100,pm=101,mm=102,gm=103,ym=104,_m=200,vm=201,xm=202,Sm=203,Na=204,Oa=205,Mm=206,bm=207,Em=208,wm=209,Am=210,Tm=211,Cm=212,Rm=213,Dm=214,il=0,rl=1,sl=2,Ki=3,ol=4,al=5,ll=6,cl=7,ul=0,Im=1,Pm=2,ii=0,Lm=1,Fm=2,Nm=3,Om=4,Um=5,Bm=6,km=7;var ah=300,nr=301,ir=302,hl=303,dl=304,_o=306,Ua=1e3,bi=1001,Ba=1002,cn=1003,zm=1004;var vo=1005;var Mn=1006,fl=1007;var Di=1008;var On=1009,Sh=1010,Mh=1011,is=1012,pl=1013,Ii=1014,Un=1015,rs=1016,ml=1017,gl=1018,rr=1020,bh=35902,Eh=1021,wh=1022,hn=1023,Ah=1024,Th=1025,ji=1026,Ji=1027,Ch=1028,yl=1029,Rh=1030,_l=1031;var vl=1033,xo=33776,So=33777,Mo=33778,bo=33779,xl=35840,Sl=35841,Ml=35842,bl=35843,El=36196,wl=37492,Al=37496,Tl=37808,Cl=37809,Rl=37810,Dl=37811,Il=37812,Pl=37813,Ll=37814,Fl=37815,Nl=37816,Ol=37817,Ul=37818,Bl=37819,kl=37820,zl=37821,Eo=36492,Vl=36494,Hl=36495,Dh=36283,Gl=36284,Wl=36285,$l=36286;var Qs=2300,ka=2301,Fa=2302,lh=2400,ch=2401,uh=2402;var Vm=3200,Hm=3201;var Ih=0,Gm=1,ri="",Zt="srgb",Qi="srgb-linear",eo="linear",rt="srgb";var Yi=7680;var hh=519,Wm=512,$m=513,qm=514,Ph=515,Xm=516,Ym=517,jm=518,Zm=519,dh=35044;var Lh="300 es",Dn=2e3,to=2001;var ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wp=1234567,Ks=Math.PI/180,Kr=180/Math.PI;function ss(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function Fh(i,e){return(i%e+e)%e}function Y_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function j_(i,e,t){return i!==e?(t-i)/(e-i):0}function Js(i,e,t){return(1-t)*i+t*e}function Z_(i,e,t,n){return Js(i,e,1-Math.exp(-t*n))}function K_(i,e=1){return e-Math.abs(Fh(i,e*2)-e)}function J_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Q_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function ev(i,e){return i+Math.floor(Math.random()*(e-i+1))}function tv(i,e){return i+Math.random()*(e-i)}function nv(i){return i*(.5-Math.random())}function iv(i){i!==void 0&&(Wp=i);let e=Wp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rv(i){return i*Ks}function sv(i){return i*Kr}function ov(i){return(i&i-1)===0&&i!==0}function av(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function lv(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cv(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*d,a*c);break;case"YZY":i.set(l*d,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*d,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function jr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Nh={DEG2RAD:Ks,RAD2DEG:Kr,generateUUID:ss,clamp:We,euclideanModulo:Fh,mapLinear:Y_,inverseLerp:j_,lerp:Js,damp:Z_,pingpong:K_,smoothstep:J_,smootherstep:Q_,randInt:ev,randFloat:tv,randFloatSpread:nv,seededRandom:iv,degToRad:rv,radToDeg:sv,isPowerOfTwo:ov,ceilPowerOfTwo:av,floorPowerOfTwo:lv,setQuaternionFromProperEuler:cv,normalize:Ut,denormalize:jr},Qe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fe=class i{constructor(e,t,n,r,s,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],y=r[0],m=r[3],f=r[6],w=r[1],E=r[4],S=r[7],P=r[2],R=r[5],A=r[8];return s[0]=o*y+a*w+l*P,s[3]=o*m+a*E+l*R,s[6]=o*f+a*S+l*A,s[1]=c*y+u*w+h*P,s[4]=c*m+u*E+h*R,s[7]=c*f+u*S+h*A,s[2]=d*y+p*w+g*P,s[5]=d*m+p*E+g*R,s[8]=d*f+p*S+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,g=t*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*c-u*n)*y,e[2]=(a*n-r*o)*y,e[3]=d*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(n*l-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zu.makeScale(e,t)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,t){return this.premultiply(zu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zu=new Fe;function Oh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Km(){let i=no("canvas");return i.style.display="block",i}var $p={};function sr(i){i in $p||($p[i]=!0,console.warn(i))}function Jm(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Qm(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function eg(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var qp=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xp=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uv(){let i={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===rt&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Zr(r.r),r.g=Zr(r.g),r.b=Zr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ri?eo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Qi]:{primaries:e,whitePoint:n,transfer:eo,toXYZ:qp,fromXYZ:Xp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:rt,toXYZ:qp,fromXYZ:Xp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),i}var Ke=uv();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Zr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ur,za=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ur===void 0&&(Ur=no("canvas")),Ur.width=e.width,Ur.height=e.height;let n=Ur.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ur}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=no("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},hv=0,io=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hv++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Vu(r[o].image)):s.push(Vu(r[o]))}else s=Vu(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function Vu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var dv=0,Pi=(()=>{class i extends ti{constructor(t=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=bi,s=bi,o=Mn,a=Di,l=hn,c=On,u=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=ss(),this.name="",this.source=new io(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ua:t.x=t.x-Math.floor(t.x);break;case bi:t.x=t.x<0?0:1;break;case Ba:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ua:t.y=t.y-Math.floor(t.y);break;case bi:t.y=t.y<0?0:1;break;case Ba:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=ah,i.DEFAULT_ANISOTROPY=1,i})(),ht=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,S=(p+1)/2,P=(f+1)/2,R=(u+d)/4,A=(h+y)/4,O=(g+m)/4;return E>S&&E>P?E<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(E),r=R/n,s=A/n):S>P?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=R/r,s=O/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=A/s,r=O/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-y)/w,this.z=(d-u)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Va=class extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Pi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new io(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends Va{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ro=class extends Pi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ha=class extends Pi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=cn,this.minFilter=cn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ht=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==p||u!==g){let m=1-a,f=l*d+c*p+u*g+h*y,w=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){let P=Math.sqrt(E),R=Math.atan2(P,f*w);m=Math.sin(m*R)/P,a=Math.sin(a*R)/P}let S=a*w;if(l=l*m+d*S,c=c*m+p*S,u=u*m+g*S,h=h*m+y*S,m===1-a){let P=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=P,c*=P,u*=P,h*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),d=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yp.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hu.copy(this).projectOnVector(e),this.sub(Hu)}reflect(e){return this.sub(Hu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hu=new B,Yp=new Ht,wi=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_n):_n.fromBufferAttribute(s,o),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ga.copy(n.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),ya.subVectors(this.max,Xs),Br.subVectors(e.a,Xs),kr.subVectors(e.b,Xs),zr.subVectors(e.c,Xs),gi.subVectors(kr,Br),yi.subVectors(zr,kr),Wi.subVectors(Br,zr);let t=[0,-gi.z,gi.y,0,-yi.z,yi.y,0,-Wi.z,Wi.y,gi.z,0,-gi.x,yi.z,0,-yi.x,Wi.z,0,-Wi.x,-gi.y,gi.x,0,-yi.y,yi.x,0,-Wi.y,Wi.x,0];return!Gu(t,Br,kr,zr,ya)||(t=[1,0,0,0,1,0,0,0,1],!Gu(t,Br,kr,zr,ya))?!1:(_a.crossVectors(gi,yi),t=[_a.x,_a.y,_a.z],Gu(t,Br,kr,zr,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Yn=[new B,new B,new B,new B,new B,new B,new B,new B],_n=new B,ga=new wi,Br=new B,kr=new B,zr=new B,gi=new B,yi=new B,Wi=new B,Xs=new B,ya=new B,_a=new B,$i=new B;function Gu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){$i.fromArray(i,s);let a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),u=n.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var fv=new wi,Ys=new B,Wu=new B,Jr=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):fv.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ys.subVectors(e,this.center);let t=Ys.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ys,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ys.copy(e.center).add(Wu)),this.expandByPoint(Ys.copy(e.center).sub(Wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},jn=new B,$u=new B,va=new B,_i=new B,qu=new B,xa=new B,Xu=new B,Ga=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){$u.copy(e).add(t).multiplyScalar(.5),va.copy(t).sub(e).normalize(),_i.copy(this.origin).sub($u);let s=e.distanceTo(t)*.5,o=-this.direction.dot(va),a=_i.dot(this.direction),l=-_i.dot(va),c=_i.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=s*u,h>=0)if(d>=-g)if(d<=g){let y=1/u;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($u).addScaledVector(va,d),p}intersectSphere(e,t){jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),r=jn.dot(jn)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,r,s){qu.subVectors(t,e),xa.subVectors(n,e),Xu.crossVectors(qu,xa);let o=this.direction.dot(Xu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_i.subVectors(this.origin,e);let l=a*this.direction.dot(xa.crossVectors(_i,xa));if(l<0)return null;let c=a*this.direction.dot(qu.cross(_i));if(c<0||l+c>o)return null;let u=-a*_i.dot(Xu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},mt=class i{constructor(e,t,n,r,s,o,a,l,c,u,h,d,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,h,d,p,g,y,m)}set(e,t,n,r,s,o,a,l,c,u,h,d,p,g,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),o=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let d=o*u,p=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*u,p=l*h,g=c*u,y=c*h;t[0]=d+y*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*u,p=l*h,g=c*u,y=c*h;t[0]=d-y*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*u,p=o*h,g=a*u,y=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-y*h}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,n){let r=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),vi.crossVectors(n,Yt),vi.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),vi.crossVectors(n,Yt)),vi.normalize(),Sa.crossVectors(Yt,vi),r[0]=vi.x,r[4]=Sa.x,r[8]=Yt.x,r[1]=vi.y,r[5]=Sa.y,r[9]=Yt.y,r[2]=vi.z,r[6]=Sa.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],w=n[3],E=n[7],S=n[11],P=n[15],R=r[0],A=r[4],O=r[8],M=r[12],x=r[1],C=r[5],$=r[9],G=r[13],Z=r[2],K=r[6],N=r[10],U=r[14],L=r[3],j=r[7],ne=r[11],he=r[15];return s[0]=o*R+a*x+l*Z+c*L,s[4]=o*A+a*C+l*K+c*j,s[8]=o*O+a*$+l*N+c*ne,s[12]=o*M+a*G+l*U+c*he,s[1]=u*R+h*x+d*Z+p*L,s[5]=u*A+h*C+d*K+p*j,s[9]=u*O+h*$+d*N+p*ne,s[13]=u*M+h*G+d*U+p*he,s[2]=g*R+y*x+m*Z+f*L,s[6]=g*A+y*C+m*K+f*j,s[10]=g*O+y*$+m*N+f*ne,s[14]=g*M+y*G+m*U+f*he,s[3]=w*R+E*x+S*Z+P*L,s[7]=w*A+E*C+S*K+P*j,s[11]=w*O+E*$+S*N+P*ne,s[15]=w*M+E*G+S*U+P*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],y=e[7],m=e[11],f=e[15];return g*(+s*l*h-r*c*h-s*a*d+n*c*d+r*a*p-n*l*p)+y*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+f*(-r*a*u-t*l*h+t*a*d+r*o*h-n*o*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],y=e[13],m=e[14],f=e[15],w=h*m*c-y*d*c+y*l*p-a*m*p-h*l*f+a*d*f,E=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,S=u*y*c-g*h*c+g*a*p-o*y*p-u*a*f+o*h*f,P=g*h*l-u*y*l-g*a*d+o*y*d+u*a*m-o*h*m,R=t*w+n*E+r*S+s*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/R;return e[0]=w*A,e[1]=(y*d*s-h*m*s-y*r*p+n*m*p+h*r*f-n*d*f)*A,e[2]=(a*m*s-y*l*s+y*r*c-n*m*c-a*r*f+n*l*f)*A,e[3]=(h*l*s-a*d*s-h*r*c+n*d*c+a*r*p-n*l*p)*A,e[4]=E*A,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*f+t*d*f)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*f-t*l*f)*A,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*A,e[8]=S*A,e[9]=(g*h*s-u*y*s-g*n*p+t*y*p+u*n*f-t*h*f)*A,e[10]=(o*y*s-g*a*s+g*n*c-t*y*c-o*n*f+t*a*f)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=P*A,e[13]=(u*y*r-g*h*r+g*n*d-t*y*d-u*n*m+t*h*m)*A,e[14]=(g*a*r-o*y*r-g*n*l+t*y*l+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,g=s*h,y=o*u,m=o*h,f=a*h,w=l*c,E=l*u,S=l*h,P=n.x,R=n.y,A=n.z;return r[0]=(1-(y+f))*P,r[1]=(p+S)*P,r[2]=(g-E)*P,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(d+f))*R,r[6]=(m+w)*R,r[7]=0,r[8]=(g+E)*A,r[9]=(m-w)*A,r[10]=(1-(d+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Vr.set(r[0],r[1],r[2]).length(),o=Vr.set(r[4],r[5],r[6]).length(),a=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],vn.copy(this);let c=1/s,u=1/o,h=1/a;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=u,vn.elements[5]*=u,vn.elements[6]*=u,vn.elements[8]*=h,vn.elements[9]*=h,vn.elements[10]*=h,t.setFromRotationMatrix(vn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=Dn){let l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),p,g;if(a===Dn)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===to)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=Dn){let l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(o-s),d=(t+e)*c,p=(n+r)*u,g,y;if(a===Dn)g=(o+s)*h,y=-2*h;else if(a===to)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Vr=new B,vn=new mt,pv=new B(0,0,0),mv=new B(1,1,1),vi=new B,Sa=new B,Yt=new B,jp=new mt,Zp=new Ht,Ai=(()=>{class i{constructor(t=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,r,s=this._order){return this._x=t,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],h=s[9],d=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,r){return jp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jp,n,r)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),so=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gv=0,Kp=new B,Hr=new Ht,Zn=new mt,Ma=new B,js=new B,yv=new B,_v=new Ht,Jp=new B(1,0,0),Qp=new B(0,1,0),em=new B(0,0,1),tm={type:"added"},vv={type:"removed"},Gr={type:"childadded",child:null},Yu={type:"childremoved",child:null},Ln=(()=>{class i extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,n=new Ai,r=new Ht,s=new B(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Fe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new so,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Hr.setFromAxisAngle(t,n),this.quaternion.multiply(Hr),this}rotateOnWorldAxis(t,n){return Hr.setFromAxisAngle(t,n),this.quaternion.premultiply(Hr),this}rotateX(t){return this.rotateOnAxis(Jp,t)}rotateY(t){return this.rotateOnAxis(Qp,t)}rotateZ(t){return this.rotateOnAxis(em,t)}translateOnAxis(t,n){return Kp.copy(t).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Jp,t)}translateY(t){return this.translateOnAxis(Qp,t)}translateZ(t){return this.translateOnAxis(em,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,n,r){t.isVector3?Ma.copy(t):Ma.set(t,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(js,Ma,this.up):Zn.lookAt(Ma,js,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),Hr.setFromRotationMatrix(Zn),this.quaternion.premultiply(Hr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tm),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(vv),Yu.child=t,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tm),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,n);if(a!==void 0)return a}}getObjectsByProperty(t,n,r=[]){this[t]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,n,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,t,yv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(js,_v,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(t)}traverseAncestors(t){let n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(t)}updateWorldMatrix(t,n){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let n=t===void 0||typeof t=="string",r={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){let d=c[u];o(t.shapes,d)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(n){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),h=a(t.images),d=a(t.shapes),p=a(t.skeletons),g=a(t.animations),y=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(l){let c=[];for(let u in l){let h=l[u];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new B(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),xn=new B,Kn=new B,ju=new B,Jn=new B,Wr=new B,$r=new B,nm=new B,Zu=new B,Ku=new B,Ju=new B,Qu=new ht,eh=new ht,th=new ht,Mi=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),xn.subVectors(e,t),r.cross(xn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){xn.subVectors(r,t),Kn.subVectors(n,t),ju.subVectors(e,t);let o=xn.dot(xn),a=xn.dot(Kn),l=xn.dot(ju),c=Kn.dot(Kn),u=Kn.dot(ju),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Qu.setScalar(0),eh.setScalar(0),th.setScalar(0),Qu.fromBufferAttribute(e,t),eh.fromBufferAttribute(e,n),th.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qu,s.x),o.addScaledVector(eh,s.y),o.addScaledVector(th,s.z),o}static isFrontFacing(e,t,n,r){return xn.subVectors(n,t),Kn.subVectors(e,t),xn.cross(Kn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),xn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Wr.subVectors(r,n),$r.subVectors(s,n),Zu.subVectors(e,n);let l=Wr.dot(Zu),c=$r.dot(Zu);if(l<=0&&c<=0)return t.copy(n);Ku.subVectors(e,r);let u=Wr.dot(Ku),h=$r.dot(Ku);if(u>=0&&h<=u)return t.copy(r);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Wr,o);Ju.subVectors(e,s);let p=Wr.dot(Ju),g=$r.dot(Ju);if(g>=0&&p<=g)return t.copy(s);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector($r,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return nm.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(nm,a);let f=1/(m+y+d);return o=y*f,a=d*f,t.copy(n).addScaledVector(Wr,o).addScaledVector($r,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},ba={h:0,s:0,l:0};function nh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var He=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ke.workingColorSpace){if(e=Fh(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=nh(o,s,e+1/3),this.g=nh(o,s,e),this.b=nh(o,s,e-1/3)}return Ke.toWorkingColorSpace(this,r),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=tg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Ke.fromWorkingColorSpace(Lt.copy(this),e),Math.round(We(Lt.r*255,0,255))*65536+Math.round(We(Lt.g*255,0,255))*256+Math.round(We(Lt.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Lt.copy(this),t);let n=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Zt){Ke.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,n=Lt.g,r=Lt.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(ba);let n=Js(xi.h,ba.h,t),r=Js(xi.s,ba.s,t),s=Js(xi.l,ba.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new He;He.NAMES=tg;var xv=0,Fn=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xv++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Zi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},oo=class extends Fn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var vt=new B,Ea=new Qe,Sv=0,Kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dh,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ea.fromBufferAttribute(this,t),Ea.applyMatrix3(e),this.setXY(t,Ea.x,Ea.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ut(t,this.array),n=Ut(n,this.array),r=Ut(r,this.array),s=Ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dh&&(e.usage=this.usage),e}};var ao=class extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var lo=class extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var In=class extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Mv=0,ln=new mt,ih=new Ln,qr=new B,jt=new wi,Zs=new wi,bt=new B,Ti=class i extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oh(e)?lo:ao)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,n){return ln.makeTranslation(e,t,n),this.applyMatrix4(ln),this}scale(e,t,n){return ln.makeScale(e,t,n),this.applyMatrix4(ln),this}lookAt(e){return ih.lookAt(e),ih.updateMatrix(),this.applyMatrix4(ih.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new In(n,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Zs.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(jt.min,Zs.min),jt.expandByPoint(bt),bt.addVectors(jt.max,Zs.max),jt.expandByPoint(bt)):(jt.expandByPoint(Zs.min),jt.expandByPoint(Zs.max))}jt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),bt.add(qr)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new B,l[O]=new B;let c=new B,u=new B,h=new B,d=new Qe,p=new Qe,g=new Qe,y=new B,m=new B;function f(O,M,x){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),d.fromBufferAttribute(s,O),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,x),u.sub(c),h.sub(c),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(C),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(C),a[O].add(y),a[M].add(y),a[x].add(y),l[O].add(m),l[M].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let O=0,M=w.length;O<M;++O){let x=w[O],C=x.start,$=x.count;for(let G=C,Z=C+$;G<Z;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let E=new B,S=new B,P=new B,R=new B;function A(O){P.fromBufferAttribute(r,O),R.copy(P);let M=a[O];E.copy(M),E.sub(P.multiplyScalar(P.dot(M))).normalize(),S.crossVectors(R,M);let C=S.dot(l[O])<0?-1:1;o.setXYZW(O,E.x,E.y,E.z,C)}for(let O=0,M=w.length;O<M;++O){let x=w[O],C=x.start,$=x.count;for(let G=C,Z=C+$;G<Z;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new B,s=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new Kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},im=new mt,qi=new Ga,wa=new Jr,rm=new B,Aa=new B,Ta=new B,Ca=new B,rh=new B,Ra=new B,sm=new B,Da=new B,gt=class extends Ln{constructor(e=new Ti,t=new oo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Ra.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(rh.fromBufferAttribute(h,e),o?Ra.addScaledVector(rh,u):Ra.addScaledVector(rh.sub(t),u))}t.add(Ra)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),qi.copy(e.ray).recast(e.near),!(wa.containsPoint(qi.origin)===!1&&(qi.intersectSphere(wa,rm)===null||qi.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),qi.copy(e.ray).applyMatrix4(im),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qi)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,P=E;S<P;S+=3){let R=a.getX(S),A=a.getX(S+1),O=a.getX(S+2);r=Ia(this,f,e,n,c,u,h,R,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let w=a.getX(m),E=a.getX(m+1),S=a.getX(m+2);r=Ia(this,o,e,n,c,u,h,w,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],w=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=w,P=E;S<P;S+=3){let R=S,A=S+1,O=S+2;r=Ia(this,f,e,n,c,u,h,R,A,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let w=m,E=m+1,S=m+2;r=Ia(this,o,e,n,c,u,h,w,E,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function bv(i,e,t,n,r,s,o,a){let l;if(e.side===Bt?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===ei,a),l===null)return null;Da.copy(a),Da.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Da);return c<t.near||c>t.far?null:{distance:c,point:Da.clone(),object:i}}function Ia(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Aa),i.getVertexPosition(l,Ta),i.getVertexPosition(c,Ca);let u=bv(i,e,t,n,Aa,Ta,Ca,sm);if(u){let h=new B;Mi.getBarycoord(sm,Aa,Ta,Ca,h),r&&(u.uv=Mi.getInterpolatedAttribute(r,a,l,c,h,new Qe)),s&&(u.uv1=Mi.getInterpolatedAttribute(s,a,l,c,h,new Qe)),o&&(u.normal=Mi.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};Mi.getNormal(Aa,Ta,Ca,d.normal),u.face=d,u.barycoord=h}return u}var Qr=class i extends Ti{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(u,3)),this.setAttribute("uv",new In(h,2));function g(y,m,f,w,E,S,P,R,A,O,M){let x=S/A,C=P/O,$=S/2,G=P/2,Z=R/2,K=A+1,N=O+1,U=0,L=0,j=new B;for(let ne=0;ne<N;ne++){let he=ne*C-G;for(let Ee=0;Ee<K;Ee++){let Ge=Ee*x-$;j[y]=Ge*w,j[m]=he*E,j[f]=Z,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[f]=R>0?1:-1,u.push(j.x,j.y,j.z),h.push(Ee/A),h.push(1-ne/O),U+=1}}for(let ne=0;ne<O;ne++)for(let he=0;he<A;he++){let Ee=d+he+K*ne,Ge=d+he+K*(ne+1),H=d+(he+1)+K*(ne+1),ie=d+(he+1)+K*ne;l.push(Ee,Ge,ie),l.push(Ge,H,ie),L+=6}a.addGroup(p,L,M),p+=L,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function or(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){let e={};for(let t=0;t<i.length;t++){let n=or(i[t]);for(let r in n)e[r]=n[r]}return e}function Ev(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Uh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}var ng={clone:or,merge:Ft},wv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,bn=class extends Fn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=Ev(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},co=class extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new B,om=new Qe,am=new Qe,Et=class extends co{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ks*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Ks*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,om,am),t.subVectors(am,om)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ks*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xr=-90,Yr=1,Wa=class extends Ln{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Et(Xr,Yr,e,t);r.layers=this.layers,this.add(r);let s=new Et(Xr,Yr,e,t);s.layers=this.layers,this.add(s);let o=new Et(Xr,Yr,e,t);o.layers=this.layers,this.add(o);let a=new Et(Xr,Yr,e,t);a.layers=this.layers,this.add(a);let l=new Et(Xr,Yr,e,t);l.layers=this.layers,this.add(l);let c=new Et(Xr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},uo=class extends Pi{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:nr,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$a=class extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new uo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Qr(5,5,5),s=new bn({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:ni});s.uniforms.tEquirect.value=t;let o=new gt(r,s),a=t.minFilter;return t.minFilter===Di&&(t.minFilter=Mn),new Wa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},Sn=class extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}},Tv={type:"move"},es=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Sn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ho=class extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var sh=new B,Cv=new B,Rv=new Fe,Rn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=sh.subVectors(n,t).cross(Cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(sh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rv.getNormalMatrix(e),r=this.coplanarPoint(sh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new Jr,Pa=new B,ts=class{constructor(e=new Rn,t=new Rn,n=new Rn,r=new Rn,s=new Rn,o=new Rn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Dn){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],g=r[9],y=r[10],m=r[11],f=r[12],w=r[13],E=r[14],S=r[15];if(n[0].setComponents(l-s,d-c,m-p,S-f).normalize(),n[1].setComponents(l+s,d+c,m+p,S+f).normalize(),n[2].setComponents(l+o,d+u,m+g,S+w).normalize(),n[3].setComponents(l-o,d-u,m-g,S-w).normalize(),n[4].setComponents(l-a,d-h,m-y,S-E).normalize(),t===Dn)n[5].setComponents(l+a,d+h,m+y,S+E).normalize();else if(t===to)n[5].setComponents(a,h,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var fo=class extends Pi{constructor(e,t,n,r,s,o,a,l,c,u=ji){if(u!==ji&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ji&&(n=Ii),n===void 0&&u===Ji&&(n=rr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Jt=class i extends Ti{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],y=[],m=[];for(let f=0;f<u;f++){let w=f*d-o;for(let E=0;E<c;E++){let S=E*h-s;g.push(S,-w,0),y.push(0,0,1),m.push(E/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){let E=w+c*f,S=w+c*(f+1),P=w+1+c*(f+1),R=w+1+c*f;p.push(E,S,R),p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(y,3)),this.setAttribute("uv",new In(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var er=class extends Fn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ih,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var qa=class extends Fn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xa=class extends Fn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function La(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var tr=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ya=class extends tr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lh,endingEnd:lh}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case ch:s=e,a=2*t-n;break;case uh:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ch:o=e,l=2*n-t;break;case uh:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,w=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-p)*m+(1.5+p)*y+.5*g,S=p*m-p*y;for(let P=0;P!==a;++P)s[P]=f*o[u+P]+w*o[c+P]+E*o[l+P]+S*o[h+P];return s}},ja=class extends tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*h+o[l+d]*u;return s}},Za=class extends tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=La(t,this.TimeBufferType),this.values=La(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:La(e.times,Array),values:La(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ya(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case ka:t=this.InterpolantFactoryMethodLinear;break;case Fa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return ka;case this.InterpolantFactoryMethodSmooth:return Fa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&Dv(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fa,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[d+g]||y!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=ka;var Ci=class extends un{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Qs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends un{};Ka.prototype.ValueTypeName="color";var Ja=class extends un{};Ja.prototype.ValueTypeName="number";var Qa=class extends tr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)Ht.slerpFlat(s,0,o,c-a,o,c,l);return s}},po=class extends un{InterpolantFactoryMethodLinear(e){return new Qa(this.times,this.values,this.getValueSize(),e)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends un{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Qs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var el=class extends un{};el.prototype.ValueTypeName="vector";var mo=class extends Ln{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var oh=new mt,lm=new B,cm=new B,fh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;lm.setFromMatrixPosition(e.matrixWorld),t.position.copy(lm),cm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cm),t.updateMatrixWorld(),oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var go=class extends co{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ph=class extends fh{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends mo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new ph}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yo=class extends mo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var tl=class extends Et{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Bh="\\[\\]\\.:\\/",Iv=new RegExp("["+Bh+"]","g"),kh="[^"+Bh+"]",Pv="[^"+Bh.replace("\\.","")+"]",Lv=/((?:WC+[\/:])*)/.source.replace("WC",kh),Fv=/(WCOD+)?/.source.replace("WCOD",Pv),Nv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kh),Ov=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kh),Uv=new RegExp("^"+Lv+Fv+Nv+Ov+"$"),Bv=["material","materials","bones","map"],mh=class{constructor(e,t,n){let r=n||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},pt=(()=>{class i{constructor(t,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new i.Composite(t,n,r):new i(t,n,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Iv,"")}static parseTrackName(t){let n=Uv.exec(t);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);Bv.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,n){if(n===void 0||n===""||n==="."||n===-1||n===t.name||n===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(n);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===n||l.uuid===n)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,n){t[n]=this.targetObject[this.propertyName]}_getValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[n++]=r[s]}_getValue_arrayElement(t,n){t[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,n){this.resolvedProperty.toArray(t,n)}_setValue_direct(t,n){this.targetObject[this.propertyName]=t[n]}_setValue_direct_setNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,n){this.targetObject[this.propertyName]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++]}_setValue_array_setNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,n){this.resolvedProperty[this.propertyIndex]=t[n]}_setValue_arrayElement_setNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty[this.propertyIndex]=t[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,n){this.resolvedProperty.fromArray(t,n)}_setValue_fromArray_setNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,n){this.resolvedProperty.fromArray(t,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,n){this.bind(),this.getValue(t,n)}_setValue_unbound(t,n){this.bind(),this.setValue(t,n)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(t||(t=i.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===u){u=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=mh,i})();pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var yT=new Float32Array(1);function zh(i,e,t,n){let r=kv(n);switch(t){case Eh:return i*e;case Ah:return i*e;case Th:return i*e*2;case Ch:return i*e/r.components*r.byteLength;case yl:return i*e/r.components*r.byteLength;case Rh:return i*e*2/r.components*r.byteLength;case _l:return i*e*2/r.components*r.byteLength;case wh:return i*e*3/r.components*r.byteLength;case hn:return i*e*4/r.components*r.byteLength;case vl:return i*e*4/r.components*r.byteLength;case xo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mo:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Sl:case bl:return Math.max(i,16)*Math.max(e,8)/4;case xl:case Ml:return Math.max(i,8)*Math.max(e,8)/2;case El:case wl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Rl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Dl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Il:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Pl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ll:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Nl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ol:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ul:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case kl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case zl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Eo:case Vl:case Hl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Dh:case Gl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Wl:case $l:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kv(i){switch(i){case On:case Sh:return{byteLength:1,components:1};case is:case Mh:case rs:return{byteLength:2,components:1};case ml:case gl:return{byteLength:2,components:4};case Ii:case pl:case Un:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nl);function Ag(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function zv(i){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],y=h[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let y=h[p];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Vv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Hv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$v=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Yv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Zv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ex=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ux=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,hx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yx="gl_FragColor = linearToOutputTexel( gl_FragColor );",_x=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ax=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ix=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Px=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Lx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Fx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ux=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$x=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_S=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,MS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ES=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,NS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,OS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,US=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,zS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,XS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_M=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Vv,alphahash_pars_fragment:Hv,alphamap_fragment:Gv,alphamap_pars_fragment:Wv,alphatest_fragment:$v,alphatest_pars_fragment:qv,aomap_fragment:Xv,aomap_pars_fragment:Yv,batching_pars_vertex:jv,batching_vertex:Zv,begin_vertex:Kv,beginnormal_vertex:Jv,bsdfs:Qv,iridescence_fragment:ex,bumpmap_pars_fragment:tx,clipping_planes_fragment:nx,clipping_planes_pars_fragment:ix,clipping_planes_pars_vertex:rx,clipping_planes_vertex:sx,color_fragment:ox,color_pars_fragment:ax,color_pars_vertex:lx,color_vertex:cx,common:ux,cube_uv_reflection_fragment:hx,defaultnormal_vertex:dx,displacementmap_pars_vertex:fx,displacementmap_vertex:px,emissivemap_fragment:mx,emissivemap_pars_fragment:gx,colorspace_fragment:yx,colorspace_pars_fragment:_x,envmap_fragment:vx,envmap_common_pars_fragment:xx,envmap_pars_fragment:Sx,envmap_pars_vertex:Mx,envmap_physical_pars_fragment:Lx,envmap_vertex:bx,fog_vertex:Ex,fog_pars_vertex:wx,fog_fragment:Ax,fog_pars_fragment:Tx,gradientmap_pars_fragment:Cx,lightmap_pars_fragment:Rx,lights_lambert_fragment:Dx,lights_lambert_pars_fragment:Ix,lights_pars_begin:Px,lights_toon_fragment:Fx,lights_toon_pars_fragment:Nx,lights_phong_fragment:Ox,lights_phong_pars_fragment:Ux,lights_physical_fragment:Bx,lights_physical_pars_fragment:kx,lights_fragment_begin:zx,lights_fragment_maps:Vx,lights_fragment_end:Hx,logdepthbuf_fragment:Gx,logdepthbuf_pars_fragment:Wx,logdepthbuf_pars_vertex:$x,logdepthbuf_vertex:qx,map_fragment:Xx,map_pars_fragment:Yx,map_particle_fragment:jx,map_particle_pars_fragment:Zx,metalnessmap_fragment:Kx,metalnessmap_pars_fragment:Jx,morphinstance_vertex:Qx,morphcolor_vertex:eS,morphnormal_vertex:tS,morphtarget_pars_vertex:nS,morphtarget_vertex:iS,normal_fragment_begin:rS,normal_fragment_maps:sS,normal_pars_fragment:oS,normal_pars_vertex:aS,normal_vertex:lS,normalmap_pars_fragment:cS,clearcoat_normal_fragment_begin:uS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:dS,iridescence_pars_fragment:fS,opaque_fragment:pS,packing:mS,premultiplied_alpha_fragment:gS,project_vertex:yS,dithering_fragment:_S,dithering_pars_fragment:vS,roughnessmap_fragment:xS,roughnessmap_pars_fragment:SS,shadowmap_pars_fragment:MS,shadowmap_pars_vertex:bS,shadowmap_vertex:ES,shadowmask_pars_fragment:wS,skinbase_vertex:AS,skinning_pars_vertex:TS,skinning_vertex:CS,skinnormal_vertex:RS,specularmap_fragment:DS,specularmap_pars_fragment:IS,tonemapping_fragment:PS,tonemapping_pars_fragment:LS,transmission_fragment:FS,transmission_pars_fragment:NS,uv_pars_fragment:OS,uv_pars_vertex:US,uv_vertex:BS,worldpos_vertex:kS,background_vert:zS,background_frag:VS,backgroundCube_vert:HS,backgroundCube_frag:GS,cube_vert:WS,cube_frag:$S,depth_vert:qS,depth_frag:XS,distanceRGBA_vert:YS,distanceRGBA_frag:jS,equirect_vert:ZS,equirect_frag:KS,linedashed_vert:JS,linedashed_frag:QS,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:rM,meshmatcap_frag:sM,meshnormal_vert:oM,meshnormal_frag:aM,meshphong_vert:lM,meshphong_frag:cM,meshphysical_vert:uM,meshphysical_frag:hM,meshtoon_vert:dM,meshtoon_frag:fM,points_vert:pM,points_frag:mM,shadow_vert:gM,shadow_frag:yM,sprite_vert:_M,sprite_frag:vM},re={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Bn={basic:{uniforms:Ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Ft([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Ft([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Ft([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new He(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Ft([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Ft([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Ft([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Ft([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Ft([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Ft([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Ft([re.common,re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Ft([re.lights,re.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Bn.physical={uniforms:Ft([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var ql={r:0,b:0,g:0},ar=new Ai,xM=new mt;function SM(i,e,t,n,r,s,o){let a=new He(0),l=s===!0?0:1,c,u,h=null,d=0,p=null;function g(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function y(E){let S=!1,P=g(E);P===null?f(a,l):P&&P.isColor&&(f(P,1),S=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){let P=g(S);P&&(P.isCubeTexture||P.mapping===_o)?(u===void 0&&(u=new gt(new Qr(1,1,1),new bn({name:"BackgroundCubeMaterial",uniforms:or(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ar.copy(S.backgroundRotation),ar.x*=-1,ar.y*=-1,ar.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(xM.makeRotationFromEuler(ar)),u.material.toneMapped=Ke.getTransfer(P.colorSpace)!==rt,(h!==P||d!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new gt(new Jt(2,2),new bn({name:"BackgroundMaterial",uniforms:or(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(P.colorSpace)!==rt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,S){E.getRGB(ql,Uh(i)),n.buffers.color.setClear(ql.r,ql.g,ql.b,S,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:y,addToRenderList:m,dispose:w}}function MM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(x,C,$,G,Z){let K=!1,N=h(G,$,C);s!==N&&(s=N,c(s.object)),K=p(x,G,$,Z),K&&g(x,G,$,Z),Z!==null&&e.update(Z,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(x,C,$,G),Z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,C,$){let G=$.wireframe===!0,Z=n[x.id];Z===void 0&&(Z={},n[x.id]=Z);let K=Z[C.id];K===void 0&&(K={},Z[C.id]=K);let N=K[G];return N===void 0&&(N=d(l()),K[G]=N),N}function d(x){let C=[],$=[],G=[];for(let Z=0;Z<t;Z++)C[Z]=0,$[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:$,attributeDivisors:G,object:x,attributes:{},index:null}}function p(x,C,$,G){let Z=s.attributes,K=C.attributes,N=0,U=$.getAttributes();for(let L in U)if(U[L].location>=0){let ne=Z[L],he=K[L];if(he===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;N++}return s.attributesNum!==N||s.index!==G}function g(x,C,$,G){let Z={},K=C.attributes,N=0,U=$.getAttributes();for(let L in U)if(U[L].location>=0){let ne=K[L];ne===void 0&&(L==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),L==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor));let he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),Z[L]=he,N++}s.attributes=Z,s.attributesNum=N,s.index=G}function y(){let x=s.newAttributes;for(let C=0,$=x.length;C<$;C++)x[C]=0}function m(x){f(x,0)}function f(x,C){let $=s.newAttributes,G=s.enabledAttributes,Z=s.attributeDivisors;$[x]=1,G[x]===0&&(i.enableVertexAttribArray(x),G[x]=1),Z[x]!==C&&(i.vertexAttribDivisor(x,C),Z[x]=C)}function w(){let x=s.newAttributes,C=s.enabledAttributes;for(let $=0,G=C.length;$<G;$++)C[$]!==x[$]&&(i.disableVertexAttribArray($),C[$]=0)}function E(x,C,$,G,Z,K,N){N===!0?i.vertexAttribIPointer(x,C,$,Z,K):i.vertexAttribPointer(x,C,$,G,Z,K)}function S(x,C,$,G){y();let Z=G.attributes,K=$.getAttributes(),N=C.defaultAttributeValues;for(let U in K){let L=K[U];if(L.location>=0){let j=Z[U];if(j===void 0&&(U==="instanceMatrix"&&x.instanceMatrix&&(j=x.instanceMatrix),U==="instanceColor"&&x.instanceColor&&(j=x.instanceColor)),j!==void 0){let ne=j.normalized,he=j.itemSize,Ee=e.get(j);if(Ee===void 0)continue;let Ge=Ee.buffer,H=Ee.type,ie=Ee.bytesPerElement,ge=H===i.INT||H===i.UNSIGNED_INT||j.gpuType===pl;if(j.isInterleavedBufferAttribute){let ee=j.data,_e=ee.stride,Pe=j.offset;if(ee.isInstancedInterleavedBuffer){for(let we=0;we<L.locationSize;we++)f(L.location+we,ee.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let we=0;we<L.locationSize;we++)m(L.location+we);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let we=0;we<L.locationSize;we++)E(L.location+we,he/L.locationSize,H,ne,_e*ie,(Pe+he/L.locationSize*we)*ie,ge)}else{if(j.isInstancedBufferAttribute){for(let ee=0;ee<L.locationSize;ee++)f(L.location+ee,j.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<L.locationSize;ee++)m(L.location+ee);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let ee=0;ee<L.locationSize;ee++)E(L.location+ee,he/L.locationSize,H,ne,he*ie,he/L.locationSize*ee*ie,ge)}}else if(N!==void 0){let ne=N[U];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(L.location,ne);break;case 3:i.vertexAttrib3fv(L.location,ne);break;case 4:i.vertexAttrib4fv(L.location,ne);break;default:i.vertexAttrib1fv(L.location,ne)}}}}w()}function P(){O();for(let x in n){let C=n[x];for(let $ in C){let G=C[$];for(let Z in G)u(G[Z].object),delete G[Z];delete C[$]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;let C=n[x.id];for(let $ in C){let G=C[$];for(let Z in G)u(G[Z].object),delete G[Z];delete C[$]}delete n[x.id]}function A(x){for(let C in n){let $=n[C];if($[x.id]===void 0)continue;let G=$[x.id];for(let Z in G)u(G[Z].object),delete G[Z];delete $[x.id]}}function O(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:w}}function bM(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function EM(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let O=A===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==On&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Un&&!O)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function wM(i){let e=this,t=null,n=0,r=!1,s=!1,o=new Rn,a=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let w=s?0:n,E=w*4,S=f.clippingState||null;l.value=S,S=u(g,d,E,p);for(let P=0;P!==E;++P)S[P]=t[P];f.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,S=p;E!==y;++E,S+=4)o.copy(h[E]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function AM(i){let e=new WeakMap;function t(o,a){return a===hl?o.mapping=nr:a===dl&&(o.mapping=ir),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===hl||a===dl)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $a(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var as=4,ig=[.125,.215,.35,.446,.526,.582],ur=20,Vh=new go,rg=new He,Hh=null,Gh=0,Wh=0,$h=!1,cr=(1+Math.sqrt(5))/2,os=1/cr,sg=[new B(-cr,os,0),new B(cr,os,0),new B(-os,0,cr),new B(os,0,cr),new B(0,cr,-os),new B(0,cr,os),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],jl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hh,Gh,Wh),this._renderer.xr.enabled=$h,e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===nr||e.mapping===ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hh=this._renderer.getRenderTarget(),Gh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:rs,format:hn,colorSpace:Qi,depthBuffer:!1},r=og(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=og(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=TM(s)),this._blurMaterial=CM(s,e,t)}return r}_compileMaterial(e){let t=new gt(this._lodPlanes[0],e);this._renderer.compile(t,Vh)}_sceneToCubeUV(e,t,n,r){let a=new Et(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rg),u.toneMapping=ii,u.autoClear=!1;let p=new oo({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new gt(new Qr,p),y=!1,m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(rg),y=!0);for(let f=0;f<6;f++){let w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let E=this._cubeSize;Xl(r,w*E,f>2?E:0,E,E),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===nr||e.mapping===ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ag());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new gt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Xl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Vh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=sg[(r-s-1)%sg.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new gt(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ur-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):ur;m>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);let f=[],w=0;for(let A=0;A<ur;++A){let O=A/y,M=Math.exp(-O*O/2);f.push(M),A===0?w+=M:A<m&&(w+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let S=this._sizeLods[r],P=3*S*(r>E-as?r-E+as:0),R=4*(this._cubeSize-S);Xl(t,P,R,3*S,2*S),l.setRenderTarget(t),l.render(h,Vh)}};function TM(i){let e=[],t=[],n=[],r=i,s=i-as+1+ig.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>i-as?l=ig[o-i+as-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,y=3,m=2,f=1,w=new Float32Array(y*g*p),E=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let R=0;R<p;R++){let A=R%3*2/3-1,O=R>2?0:-1,M=[A,O,0,A+2/3,O,0,A+2/3,O+1,0,A,O,0,A+2/3,O+1,0,A,O+1,0];w.set(M,y*g*R),E.set(d,m*g*R);let x=[R,R,R,R,R,R];S.set(x,f*g*R)}let P=new Ti;P.setAttribute("position",new Kt(w,y)),P.setAttribute("uv",new Kt(E,m)),P.setAttribute("faceIndex",new Kt(S,f)),e.push(P),r>as&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function og(i,e,t){let n=new Pn(i,e,t);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function CM(i,e,t){let n=new Float32Array(ur),r=new B(0,1,0);return new bn({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function ag(){return new bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function lg(){return new bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ni,depthTest:!1,depthWrite:!1})}function td(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function RM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===hl||l===dl,u=l===nr||l===ir;if(c||u){let h=e.get(a),d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new jl(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{let p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new jl(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function DM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&sr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function IM(i,e,t,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(h){let d=[],p=h.index,g=h.attributes.position,y=0;if(p!==null){let w=p.array;y=p.version;for(let E=0,S=w.length;E<S;E+=3){let P=w[E+0],R=w[E+1],A=w[E+2];d.push(P,R,R,A,A,P)}}else if(g!==void 0){let w=g.array;y=g.version;for(let E=0,S=w.length/3-1;E<S;E+=3){let P=E+0,R=E+1,A=E+2;d.push(P,R,R,A,A,P)}}else return;let m=new(Oh(d)?lo:ao)(d,1);m.version=y;let f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function PM(i,e,t){let n;function r(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,s,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,y,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*y[w];t.update(f,n,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function LM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function FM(i,e,t){let n=new WeakMap,r=new ht;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let x=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);let A=new Float32Array(P*R*4*h),O=new ro(A,P,R,h);O.type=Un,O.needsUpdate=!0;let M=S*4;for(let C=0;C<h;C++){let $=f[C],G=w[C],Z=E[C],K=P*R*4*C;for(let N=0;N<$.count;N++){let U=N*M;g===!0&&(r.fromBufferAttribute($,N),A[K+U+0]=r.x,A[K+U+1]=r.y,A[K+U+2]=r.z,A[K+U+3]=0),y===!0&&(r.fromBufferAttribute(G,N),A[K+U+4]=r.x,A[K+U+5]=r.y,A[K+U+6]=r.z,A[K+U+7]=0),m===!0&&(r.fromBufferAttribute(Z,N),A[K+U+8]=r.x,A[K+U+9]=r.y,A[K+U+10]=r.z,A[K+U+11]=Z.itemSize===4?r.w:1)}}d={count:h,texture:O,size:new Qe(P,R)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function NM(i,e,t,n){let r=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var Tg=new Pi,cg=new fo(1,1),Cg=new ro,Rg=new Ha,Dg=new uo,ug=[],hg=[],dg=new Float32Array(16),fg=new Float32Array(9),pg=new Float32Array(4);function cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=ug[r];if(s===void 0&&(s=new Float32Array(r),ug[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function xt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function St(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kl(i,e){let t=hg[e];t===void 0&&(t=new Int32Array(e),hg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function OM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2fv(this.addr,e),St(t,e)}}function BM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xt(t,e))return;i.uniform3fv(this.addr,e),St(t,e)}}function kM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4fv(this.addr,e),St(t,e)}}function zM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;pg.set(n),i.uniformMatrix2fv(this.addr,!1,pg),St(t,n)}}function VM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;fg.set(n),i.uniformMatrix3fv(this.addr,!1,fg),St(t,n)}}function HM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(xt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(xt(t,n))return;dg.set(n),i.uniformMatrix4fv(this.addr,!1,dg),St(t,n)}}function GM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function WM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2iv(this.addr,e),St(t,e)}}function $M(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3iv(this.addr,e),St(t,e)}}function qM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4iv(this.addr,e),St(t,e)}}function XM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function YM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xt(t,e))return;i.uniform2uiv(this.addr,e),St(t,e)}}function jM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xt(t,e))return;i.uniform3uiv(this.addr,e),St(t,e)}}function ZM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xt(t,e))return;i.uniform4uiv(this.addr,e),St(t,e)}}function KM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(cg.compareFunction=Ph,s=cg):s=Tg,t.setTexture2D(e||s,r)}function JM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Rg,r)}function QM(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Dg,r)}function eb(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Cg,r)}function tb(i){switch(i){case 5126:return OM;case 35664:return UM;case 35665:return BM;case 35666:return kM;case 35674:return zM;case 35675:return VM;case 35676:return HM;case 5124:case 35670:return GM;case 35667:case 35671:return WM;case 35668:case 35672:return $M;case 35669:case 35673:return qM;case 5125:return XM;case 36294:return YM;case 36295:return jM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return KM;case 35679:case 36299:case 36307:return JM;case 35680:case 36300:case 36308:case 36293:return QM;case 36289:case 36303:case 36311:case 36292:return eb}}function nb(i,e){i.uniform1fv(this.addr,e)}function ib(i,e){let t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function rb(i,e){let t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function sb(i,e){let t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function ob(i,e){let t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ab(i,e){let t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lb(i,e){let t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cb(i,e){i.uniform1iv(this.addr,e)}function ub(i,e){i.uniform2iv(this.addr,e)}function hb(i,e){i.uniform3iv(this.addr,e)}function db(i,e){i.uniform4iv(this.addr,e)}function fb(i,e){i.uniform1uiv(this.addr,e)}function pb(i,e){i.uniform2uiv(this.addr,e)}function mb(i,e){i.uniform3uiv(this.addr,e)}function gb(i,e){i.uniform4uiv(this.addr,e)}function yb(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tg,s[o])}function _b(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Rg,s[o])}function vb(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Dg,s[o])}function xb(i,e,t){let n=this.cache,r=e.length,s=Kl(t,r);xt(n,s)||(i.uniform1iv(this.addr,s),St(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Cg,s[o])}function Sb(i){switch(i){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return ub;case 35668:case 35672:return hb;case 35669:case 35673:return db;case 5125:return fb;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return _b;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return xb}}var Xh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tb(t.type)}},Yh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sb(t.type)}},jh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},qh=/(\w+)(\])?(\[|\.)?/g;function mg(i,e){i.seq.push(e),i.map[e.id]=e}function Mb(i,e,t){let n=i.name,r=n.length;for(qh.lastIndex=0;;){let s=qh.exec(n),o=qh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){mg(t,c===void 0?new Xh(a,i,e):new Yh(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new jh(a),mg(t,h)),t=h}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Mb(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function gg(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var bb=37297,Eb=0;function wb(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var yg=new Fe;function Ab(i){Ke._getMatrix(yg,Ke.workingColorSpace,i);let e=`mat3( ${yg.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case eo:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _g(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+wb(i.getShaderSource(e),o)}else return r}function Tb(i,e){let t=Ab(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Cb(i,e){let t;switch(e){case Lm:t="Linear";break;case Fm:t="Reinhard";break;case Nm:t="Cineon";break;case Om:t="ACESFilmic";break;case Bm:t="AgX";break;case km:t="Neutral";break;case Um:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Yl=new B;function Rb(){Ke.getLuminanceCoefficients(Yl);let i=Yl.x.toFixed(4),e=Yl.y.toFixed(4),t=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Db(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wo).join(`
`)}function Ib(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function wo(i){return i!==""}function vg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(i){return i.replace(Lb,Nb)}var Fb=new Map;function Nb(i,e){let t=ze[e];if(t===void 0){let n=Fb.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zh(t)}var Ob=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sg(i){return i.replace(Ob,Ub)}function Ub(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mg(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bb(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===yh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function kb(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case nr:case ir:e="ENVMAP_TYPE_CUBE";break;case _o:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zb(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Vb(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:e="ENVMAP_BLENDING_MULTIPLY";break;case Im:e="ENVMAP_BLENDING_MIX";break;case Pm:e="ENVMAP_BLENDING_ADD";break}return e}function Hb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Gb(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Bb(t),c=kb(t),u=zb(t),h=Vb(t),d=Hb(t),p=Db(t),g=Ib(s),y=r.createProgram(),m,f,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wo).join(`
`),f.length>0&&(f+=`
`)):(m=[Mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wo).join(`
`),f=[Mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?ze.tonemapping_pars_fragment:"",t.toneMapping!==ii?Cb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Tb("linearToOutputTexel",t.outputColorSpace),Rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wo).join(`
`)),o=Zh(o),o=vg(o,t),o=xg(o,t),a=Zh(a),a=vg(a,t),a=xg(a,t),o=Sg(o),a=Sg(a),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let E=w+m+o,S=w+f+a,P=gg(r,r.VERTEX_SHADER,E),R=gg(r,r.FRAGMENT_SHADER,S);r.attachShader(y,P),r.attachShader(y,R),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(C){if(i.debug.checkShaderErrors){let $=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(P).trim(),Z=r.getShaderInfoLog(R).trim(),K=!0,N=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,P,R);else{let U=_g(r,P,"vertex"),L=_g(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+$+`
`+U+`
`+L)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(G===""||Z==="")&&(N=!1);N&&(C.diagnostics={runnable:K,programLog:$,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:f}})}r.deleteShader(P),r.deleteShader(R),O=new ls(r,y),M=Pb(r,y)}let O;this.getUniforms=function(){return O===void 0&&A(this),O};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,bb)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=P,this.fragmentShader=R,this}var Wb=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Jh(e),t.set(e,n)),n}},Jh=class{constructor(e){this.id=Wb++,this.code=e,this.usedTimes=0}};function $b(i,e,t,n,r,s,o){let a=new so,l=new Kh,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures,p=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,C,$,G){let Z=$.fog,K=G.geometry,N=M.isMeshStandardMaterial?$.environment:null,U=(M.isMeshStandardMaterial?t:e).get(M.envMap||N),L=U&&U.mapping===_o?U.image.height:null,j=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let ne=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,he=ne!==void 0?ne.length:0,Ee=0;K.morphAttributes.position!==void 0&&(Ee=1),K.morphAttributes.normal!==void 0&&(Ee=2),K.morphAttributes.color!==void 0&&(Ee=3);let Ge,H,ie,ge;if(j){let it=Bn[j];Ge=it.vertexShader,H=it.fragmentShader}else Ge=M.vertexShader,H=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),ge=l.getFragmentShaderID(M);let ee=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Pe=G.isInstancedMesh===!0,we=G.isBatchedMesh===!0,at=!!M.map,ut=!!M.matcap,$e=!!U,T=!!M.aoMap,tn=!!M.lightMap,qe=!!M.bumpMap,Xe=!!M.normalMap,Me=!!M.displacementMap,lt=!!M.emissiveMap,xe=!!M.metalnessMap,b=!!M.roughnessMap,_=M.anisotropy>0,k=M.clearcoat>0,X=M.dispersion>0,J=M.iridescence>0,q=M.sheen>0,ve=M.transmission>0,ae=_&&!!M.anisotropyMap,de=k&&!!M.clearcoatMap,je=k&&!!M.clearcoatNormalMap,te=k&&!!M.clearcoatRoughnessMap,fe=J&&!!M.iridescenceMap,Ce=J&&!!M.iridescenceThicknessMap,De=q&&!!M.sheenColorMap,pe=q&&!!M.sheenRoughnessMap,Ye=!!M.specularMap,Be=!!M.specularColorMap,ot=!!M.specularIntensityMap,D=ve&&!!M.transmissionMap,se=ve&&!!M.thicknessMap,W=!!M.gradientMap,Y=!!M.alphaMap,ce=M.alphaTest>0,le=!!M.alphaHash,Oe=!!M.extensions,dt=ii;M.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(dt=i.toneMapping);let Ct={shaderID:j,shaderType:M.type,shaderName:M.name,vertexShader:Ge,fragmentShader:H,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:we,batchingColor:we&&G._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&G.instanceColor!==null,instancingMorph:Pe&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Qi,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:ut,envMap:$e,envMapMode:$e&&U.mapping,envMapCubeUVHeight:L,aoMap:T,lightMap:tn,bumpMap:qe,normalMap:Xe,displacementMap:d&&Me,emissiveMap:lt,normalMapObjectSpace:Xe&&M.normalMapType===Gm,normalMapTangentSpace:Xe&&M.normalMapType===Ih,metalnessMap:xe,roughnessMap:b,anisotropy:_,anisotropyMap:ae,clearcoat:k,clearcoatMap:de,clearcoatNormalMap:je,clearcoatRoughnessMap:te,dispersion:X,iridescence:J,iridescenceMap:fe,iridescenceThicknessMap:Ce,sheen:q,sheenColorMap:De,sheenRoughnessMap:pe,specularMap:Ye,specularColorMap:Be,specularIntensityMap:ot,transmission:ve,transmissionMap:D,thicknessMap:se,gradientMap:W,opaque:M.transparent===!1&&M.blending===Zi&&M.alphaToCoverage===!1,alphaMap:Y,alphaTest:ce,alphaHash:le,combine:M.combine,mapUv:at&&y(M.map.channel),aoMapUv:T&&y(M.aoMap.channel),lightMapUv:tn&&y(M.lightMap.channel),bumpMapUv:qe&&y(M.bumpMap.channel),normalMapUv:Xe&&y(M.normalMap.channel),displacementMapUv:Me&&y(M.displacementMap.channel),emissiveMapUv:lt&&y(M.emissiveMap.channel),metalnessMapUv:xe&&y(M.metalnessMap.channel),roughnessMapUv:b&&y(M.roughnessMap.channel),anisotropyMapUv:ae&&y(M.anisotropyMap.channel),clearcoatMapUv:de&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:pe&&y(M.sheenRoughnessMap.channel),specularMapUv:Ye&&y(M.specularMap.channel),specularColorMapUv:Be&&y(M.specularColorMap.channel),specularIntensityMapUv:ot&&y(M.specularIntensityMap.channel),transmissionMapUv:D&&y(M.transmissionMap.channel),thicknessMapUv:se&&y(M.thicknessMap.channel),alphaMapUv:Y&&y(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Xe||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(at||Y),fog:!!Z,useFog:M.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:_e,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Ee,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:dt,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===rt,decodeVideoTextureEmissive:lt&&M.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(M.emissiveMap.colorSpace)===rt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gt,flipSided:M.side===Bt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||we)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function f(M){let x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(let C in M.defines)x.push(C),x.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(w(x,M),E(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){let x=g[M.type],C;if(x){let $=Bn[x];C=ng.clone($.uniforms)}else C=M.uniforms;return C}function P(M,x){let C;for(let $=0,G=u.length;$<G;$++){let Z=u[$];if(Z.cacheKey===x){C=Z,++C.usedTimes;break}}return C===void 0&&(C=new Gb(i,x,M,s),u.push(C)),C}function R(M){if(--M.usedTimes===0){let x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:P,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:O}}function qb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function Xb(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Eg(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,d,p,g,y,m){let f=i[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function a(h,d,p,g,y,m){let f=o(h,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(h,d,p,g,y,m){let f=o(h,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||Xb),n.length>1&&n.sort(d||bg),r.length>1&&r.sort(d||bg)}function u(){for(let h=e,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Yb(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Eg,i.set(n,[o])):r>=s.length?(o=new Eg,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new He};break;case"SpotLight":t={position:new B,direction:new B,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function Zb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Kb=0;function Jb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Qb(i){let e=new jb,t=Zb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let r=new B,s=new mt,o=new mt;function a(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,w=0,E=0,S=0,P=0,R=0,A=0;c.sort(Jb);for(let M=0,x=c.length;M<x;M++){let C=c[M],$=C.color,G=C.intensity,Z=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)u+=$.r*G,h+=$.g*G,d+=$.b*G;else if(C.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(C.sh.coefficients[N],G);A++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let U=C.shadow,L=t.get(C);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,n.directionalShadow[p]=L,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,w++}n.directional[p]=N,p++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy($).multiplyScalar(G),N.distance=Z,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,n.spot[y]=N;let U=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,U.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[y]=U.matrix,C.castShadow){let L=t.get(C);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,n.spotShadow[y]=L,n.spotShadowMap[y]=K,S++}y++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy($).multiplyScalar(G),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=N,m++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){let U=C.shadow,L=t.get(C);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,L.shadowCameraNear=U.camera.near,L.shadowCameraFar=U.camera.far,n.pointShadow[g]=L,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,E++}n.point[g]=N,g++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(G),N.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[f]=N,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=re.LTC_FLOAT_1,n.rectAreaLTC2=re.LTC_FLOAT_2):(n.rectAreaLTC1=re.LTC_HALF_1,n.rectAreaLTC2=re.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let O=n.hash;(O.directionalLength!==p||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==f||O.numDirectionalShadows!==w||O.numPointShadows!==E||O.numSpotShadows!==S||O.numSpotMaps!==P||O.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,O.directionalLength=p,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=f,O.numDirectionalShadows=w,O.numPointShadows=E,O.numSpotShadows=S,O.numSpotMaps=P,O.numLightProbes=A,n.version=Kb++)}function l(c,u){let h=0,d=0,p=0,g=0,y=0,m=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){let E=c[f];if(E.isDirectionalLight){let S=n.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(E.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){let S=n.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function wg(i){let e=new Qb(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function eE(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new wg(i),e.set(r,[a])):s>=o.length?(a=new wg(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var tE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iE(i,e,t){let n=new ts,r=new Qe,s=new Qe,o=new ht,a=new qa({depthPacking:Hm}),l=new Xa,c={},u=t.maxTextureSize,h={[ei]:Bt,[Bt]:ei,[Gt]:Gt},d=new bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:tE,fragmentShader:nE}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ti;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new gt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yh;let f=this.type;this.render=function(R,A,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let M=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),$=i.state;$.setBlending(ni),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let G=f!==Nn&&this.type===Nn,Z=f===Nn&&this.type!==Nn;for(let K=0,N=R.length;K<N;K++){let U=R[K],L=U.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let j=L.getFrameExtents();if(r.multiply(j),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||G===!0||Z===!0){let he=this.type!==Nn?{minFilter:cn,magFilter:cn}:{};L.map!==null&&L.map.dispose(),L.map=new Pn(r.x,r.y,he),L.map.texture.name=U.name+".shadowMap",L.camera.updateProjectionMatrix()}i.setRenderTarget(L.map),i.clear();let ne=L.getViewportCount();for(let he=0;he<ne;he++){let Ee=L.getViewport(he);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),$.viewport(o),L.updateMatrices(U,he),n=L.getFrustum(),S(A,O,L.camera,U,this.type)}L.isPointLightShadow!==!0&&this.type===Nn&&w(L,O),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,C)};function w(R,A){let O=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,O,d,y,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,O,p,y,null)}function E(R,A,O,M){let x=null,C=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)x=C;else if(x=O.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let $=x.uuid,G=A.uuid,Z=c[$];Z===void 0&&(Z={},c[$]=Z);let K=Z[G];K===void 0&&(K=x.clone(),Z[G]=K,A.addEventListener("dispose",P)),x=K}if(x.visible=A.visible,x.wireframe=A.wireframe,M===Nn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:h[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let $=i.properties.get(x);$.light=O}return x}function S(R,A,O,M,x){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Nn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);let G=e.update(R),Z=R.material;if(Array.isArray(Z)){let K=G.groups;for(let N=0,U=K.length;N<U;N++){let L=K[N],j=Z[L.materialIndex];if(j&&j.visible){let ne=E(R,j,M,x);R.onBeforeShadow(i,R,A,O,G,ne,L),i.renderBufferDirect(O,null,G,ne,R,L),R.onAfterShadow(i,R,A,O,G,ne,L)}}}else if(Z.visible){let K=E(R,Z,M,x);R.onBeforeShadow(i,R,A,O,G,K,null),i.renderBufferDirect(O,null,G,K,R,null),R.onAfterShadow(i,R,A,O,G,K,null)}}let $=R.children;for(let G=0,Z=$.length;G<Z;G++)S($[G],A,O,M,x)}function P(R){R.target.removeEventListener("dispose",P);for(let O in c){let M=c[O],x=R.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}var rE={[il]:rl,[sl]:ll,[ol]:cl,[Ki]:al,[rl]:il,[ll]:sl,[cl]:ol,[al]:Ki};function sE(i,e){function t(){let D=!1,se=new ht,W=null,Y=new ht(0,0,0,0);return{setMask:function(ce){W!==ce&&!D&&(i.colorMask(ce,ce,ce,ce),W=ce)},setLocked:function(ce){D=ce},setClear:function(ce,le,Oe,dt,Ct){Ct===!0&&(ce*=dt,le*=dt,Oe*=dt),se.set(ce,le,Oe,dt),Y.equals(se)===!1&&(i.clearColor(ce,le,Oe,dt),Y.copy(se))},reset:function(){D=!1,W=null,Y.set(-1,0,0,0)}}}function n(){let D=!1,se=!1,W=null,Y=null,ce=null;return{setReversed:function(le){if(se!==le){let Oe=e.get("EXT_clip_control");se?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);let dt=ce;ce=null,this.setClear(dt)}se=le},getReversed:function(){return se},setTest:function(le){le?ee(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(le){W!==le&&!D&&(i.depthMask(le),W=le)},setFunc:function(le){if(se&&(le=rE[le]),Y!==le){switch(le){case il:i.depthFunc(i.NEVER);break;case rl:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case ol:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ll:i.depthFunc(i.GREATER);break;case cl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=le}},setLocked:function(le){D=le},setClear:function(le){ce!==le&&(se&&(le=1-le),i.clearDepth(le),ce=le)},reset:function(){D=!1,W=null,Y=null,ce=null,se=!1}}}function r(){let D=!1,se=null,W=null,Y=null,ce=null,le=null,Oe=null,dt=null,Ct=null;return{setTest:function(it){D||(it?ee(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(it){se!==it&&!D&&(i.stencilMask(it),se=it)},setFunc:function(it,fn,Vn){(W!==it||Y!==fn||ce!==Vn)&&(i.stencilFunc(it,fn,Vn),W=it,Y=fn,ce=Vn)},setOp:function(it,fn,Vn){(le!==it||Oe!==fn||dt!==Vn)&&(i.stencilOp(it,fn,Vn),le=it,Oe=fn,dt=Vn)},setLocked:function(it){D=it},setClear:function(it){Ct!==it&&(i.clearStencil(it),Ct=it)},reset:function(){D=!1,se=null,W=null,Y=null,ce=null,le=null,Oe=null,dt=null,Ct=null}}}let s=new t,o=new n,a=new r,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,w=null,E=null,S=null,P=null,R=null,A=new He(0,0,0),O=0,M=!1,x=null,C=null,$=null,G=null,Z=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,U=0,L=i.getParameter(i.VERSION);L.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(L)[1]),N=U>=1):L.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),N=U>=2);let j=null,ne={},he=i.getParameter(i.SCISSOR_BOX),Ee=i.getParameter(i.VIEWPORT),Ge=new ht().fromArray(he),H=new ht().fromArray(Ee);function ie(D,se,W,Y){let ce=new Uint8Array(4),le=i.createTexture();i.bindTexture(D,le),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Oe=0;Oe<W;Oe++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(se+Oe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return le}let ge={};ge[i.TEXTURE_2D]=ie(i.TEXTURE_2D,i.TEXTURE_2D,1),ge[i.TEXTURE_CUBE_MAP]=ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[i.TEXTURE_2D_ARRAY]=ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ge[i.TEXTURE_3D]=ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(i.DEPTH_TEST),o.setFunc(Ki),qe(!1),Xe(gh),ee(i.CULL_FACE),T(ni);function ee(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function _e(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function Pe(D,se){return h[D]!==se?(i.bindFramebuffer(D,se),h[D]=se,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function we(D,se){let W=p,Y=!1;if(D){W=d.get(se),W===void 0&&(W=[],d.set(se,W));let ce=D.textures;if(W.length!==ce.length||W[0]!==i.COLOR_ATTACHMENT0){for(let le=0,Oe=ce.length;le<Oe;le++)W[le]=i.COLOR_ATTACHMENT0+le;W.length=ce.length,Y=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Y=!0);Y&&i.drawBuffers(W)}function at(D){return g!==D?(i.useProgram(D),g=D,!0):!1}let ut={[Ei]:i.FUNC_ADD,[pm]:i.FUNC_SUBTRACT,[mm]:i.FUNC_REVERSE_SUBTRACT};ut[gm]=i.MIN,ut[ym]=i.MAX;let $e={[_m]:i.ZERO,[vm]:i.ONE,[xm]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[Am]:i.SRC_ALPHA_SATURATE,[Em]:i.DST_COLOR,[Mm]:i.DST_ALPHA,[Sm]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[wm]:i.ONE_MINUS_DST_COLOR,[bm]:i.ONE_MINUS_DST_ALPHA,[Tm]:i.CONSTANT_COLOR,[Cm]:i.ONE_MINUS_CONSTANT_COLOR,[Rm]:i.CONSTANT_ALPHA,[Dm]:i.ONE_MINUS_CONSTANT_ALPHA};function T(D,se,W,Y,ce,le,Oe,dt,Ct,it){if(D===ni){y===!0&&(_e(i.BLEND),y=!1);return}if(y===!1&&(ee(i.BLEND),y=!0),D!==fm){if(D!==m||it!==M){if((f!==Ei||S!==Ei)&&(i.blendEquation(i.FUNC_ADD),f=Ei,S=Ei),it)switch(D){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _h:i.blendFunc(i.ONE,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _h:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case vh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}w=null,E=null,P=null,R=null,A.set(0,0,0),O=0,m=D,M=it}return}ce=ce||se,le=le||W,Oe=Oe||Y,(se!==f||ce!==S)&&(i.blendEquationSeparate(ut[se],ut[ce]),f=se,S=ce),(W!==w||Y!==E||le!==P||Oe!==R)&&(i.blendFuncSeparate($e[W],$e[Y],$e[le],$e[Oe]),w=W,E=Y,P=le,R=Oe),(dt.equals(A)===!1||Ct!==O)&&(i.blendColor(dt.r,dt.g,dt.b,Ct),A.copy(dt),O=Ct),m=D,M=!1}function tn(D,se){D.side===Gt?_e(i.CULL_FACE):ee(i.CULL_FACE);let W=D.side===Bt;se&&(W=!W),qe(W),D.blending===Zi&&D.transparent===!1?T(ni):T(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let Y=D.stencilWrite;a.setTest(Y),Y&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),lt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function qe(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function Xe(D){D!==um?(ee(i.CULL_FACE),D!==C&&(D===gh?i.cullFace(i.BACK):D===hm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),C=D}function Me(D){D!==$&&(N&&i.lineWidth(D),$=D)}function lt(D,se,W){D?(ee(i.POLYGON_OFFSET_FILL),(G!==se||Z!==W)&&(i.polygonOffset(se,W),G=se,Z=W)):_e(i.POLYGON_OFFSET_FILL)}function xe(D){D?ee(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+K-1),j!==D&&(i.activeTexture(D),j=D)}function _(D,se,W){W===void 0&&(j===null?W=i.TEXTURE0+K-1:W=j);let Y=ne[W];Y===void 0&&(Y={type:void 0,texture:void 0},ne[W]=Y),(Y.type!==D||Y.texture!==se)&&(j!==W&&(i.activeTexture(W),j=W),i.bindTexture(D,se||ge[D]),Y.type=D,Y.texture=se)}function k(){let D=ne[j];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(D){Ge.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ge.copy(D))}function pe(D){H.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),H.copy(D))}function Ye(D,se){let W=c.get(se);W===void 0&&(W=new WeakMap,c.set(se,W));let Y=W.get(D);Y===void 0&&(Y=i.getUniformBlockIndex(se,D.name),W.set(D,Y))}function Be(D,se){let Y=c.get(se).get(D);l.get(se)!==Y&&(i.uniformBlockBinding(se,Y,D.__bindingPointIndex),l.set(se,Y))}function ot(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},j=null,ne={},h={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,w=null,E=null,S=null,P=null,R=null,A=new He(0,0,0),O=0,M=!1,x=null,C=null,$=null,G=null,Z=null,Ge.set(0,0,i.canvas.width,i.canvas.height),H.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:_e,bindFramebuffer:Pe,drawBuffers:we,useProgram:at,setBlending:T,setMaterial:tn,setFlipSided:qe,setCullFace:Xe,setLineWidth:Me,setPolygonOffset:lt,setScissorTest:xe,activeTexture:b,bindTexture:_,unbindTexture:k,compressedTexImage2D:X,compressedTexImage3D:J,texImage2D:fe,texImage3D:Ce,updateUBOMapping:Ye,uniformBlockBinding:Be,texStorage2D:je,texStorage3D:te,texSubImage2D:q,texSubImage3D:ve,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:De,viewport:pe,reset:ot}}function oE(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,_){return p?new OffscreenCanvas(b,_):no("canvas")}function y(b,_,k){let X=1,J=xe(b);if((J.width>k||J.height>k)&&(X=k/Math.max(J.width,J.height)),X<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let q=Math.floor(X*J.width),ve=Math.floor(X*J.height);h===void 0&&(h=g(q,ve));let ae=_?g(q,ve):h;return ae.width=q,ae.height=ve,ae.getContext("2d").drawImage(b,0,0,q,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+ve+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps}function f(b){i.generateMipmap(b)}function w(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(b,_,k,X,J=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let q=_;if(_===i.RED&&(k===i.FLOAT&&(q=i.R32F),k===i.HALF_FLOAT&&(q=i.R16F),k===i.UNSIGNED_BYTE&&(q=i.R8)),_===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.R8UI),k===i.UNSIGNED_SHORT&&(q=i.R16UI),k===i.UNSIGNED_INT&&(q=i.R32UI),k===i.BYTE&&(q=i.R8I),k===i.SHORT&&(q=i.R16I),k===i.INT&&(q=i.R32I)),_===i.RG&&(k===i.FLOAT&&(q=i.RG32F),k===i.HALF_FLOAT&&(q=i.RG16F),k===i.UNSIGNED_BYTE&&(q=i.RG8)),_===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RG8UI),k===i.UNSIGNED_SHORT&&(q=i.RG16UI),k===i.UNSIGNED_INT&&(q=i.RG32UI),k===i.BYTE&&(q=i.RG8I),k===i.SHORT&&(q=i.RG16I),k===i.INT&&(q=i.RG32I)),_===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGB8UI),k===i.UNSIGNED_SHORT&&(q=i.RGB16UI),k===i.UNSIGNED_INT&&(q=i.RGB32UI),k===i.BYTE&&(q=i.RGB8I),k===i.SHORT&&(q=i.RGB16I),k===i.INT&&(q=i.RGB32I)),_===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),k===i.UNSIGNED_INT&&(q=i.RGBA32UI),k===i.BYTE&&(q=i.RGBA8I),k===i.SHORT&&(q=i.RGBA16I),k===i.INT&&(q=i.RGBA32I)),_===i.RGB&&k===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),_===i.RGBA){let ve=J?eo:Ke.getTransfer(X);k===i.FLOAT&&(q=i.RGBA32F),k===i.HALF_FLOAT&&(q=i.RGBA16F),k===i.UNSIGNED_BYTE&&(q=ve===rt?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(b,_){let k;return b?_===null||_===Ii||_===rr?k=i.DEPTH24_STENCIL8:_===Un?k=i.DEPTH32F_STENCIL8:_===is&&(k=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ii||_===rr?k=i.DEPTH_COMPONENT24:_===Un?k=i.DEPTH_COMPONENT32F:_===is&&(k=i.DEPTH_COMPONENT16),k}function P(b,_){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==cn&&b.minFilter!==Mn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){let _=b.target;_.removeEventListener("dispose",R),O(_),_.isVideoTexture&&u.delete(_)}function A(b){let _=b.target;_.removeEventListener("dispose",A),x(_)}function O(b){let _=n.get(b);if(_.__webglInit===void 0)return;let k=b.source,X=d.get(k);if(X){let J=X[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(b),Object.keys(X).length===0&&d.delete(k)}n.remove(b)}function M(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let k=b.source,X=d.get(k);delete X[_.__cacheKey],o.memory.textures--}function x(b){let _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let J=0;J<_.__webglFramebuffer[X].length;J++)i.deleteFramebuffer(_.__webglFramebuffer[X][J]);else i.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)i.deleteFramebuffer(_.__webglFramebuffer[X]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=b.textures;for(let X=0,J=k.length;X<J;X++){let q=n.get(k[X]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(k[X])}n.remove(b)}let C=0;function $(){C=0}function G(){let b=C;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),C+=1,b}function Z(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function K(b,_){let k=n.get(b);if(b.isVideoTexture&&Me(b),b.isRenderTargetTexture===!1&&b.version>0&&k.__version!==b.version){let X=b.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(k,b,_);return}}t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+_)}function N(b,_){let k=n.get(b);if(b.version>0&&k.__version!==b.version){H(k,b,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+_)}function U(b,_){let k=n.get(b);if(b.version>0&&k.__version!==b.version){H(k,b,_);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+_)}function L(b,_){let k=n.get(b);if(b.version>0&&k.__version!==b.version){ie(k,b,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+_)}let j={[Ua]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Ba]:i.MIRRORED_REPEAT},ne={[cn]:i.NEAREST,[zm]:i.NEAREST_MIPMAP_NEAREST,[vo]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[fl]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},he={[Wm]:i.NEVER,[Zm]:i.ALWAYS,[$m]:i.LESS,[Ph]:i.LEQUAL,[qm]:i.EQUAL,[jm]:i.GEQUAL,[Xm]:i.GREATER,[Ym]:i.NOTEQUAL};function Ee(b,_){if(_.type===Un&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Mn||_.magFilter===fl||_.magFilter===vo||_.magFilter===Di||_.minFilter===Mn||_.minFilter===fl||_.minFilter===vo||_.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,j[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,j[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,j[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ne[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ne[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,he[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==vo&&_.minFilter!==Di||_.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ge(b,_){let k=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));let X=_.source,J=d.get(X);J===void 0&&(J={},d.set(X,J));let q=Z(_);if(q!==b.__cacheKey){J[q]===void 0&&(J[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),J[q].usedTimes++;let ve=J[b.__cacheKey];ve!==void 0&&(J[b.__cacheKey].usedTimes--,ve.usedTimes===0&&M(_)),b.__cacheKey=q,b.__webglTexture=J[q].texture}return k}function H(b,_,k){let X=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=i.TEXTURE_3D);let J=Ge(b,_),q=_.source;t.bindTexture(X,b.__webglTexture,i.TEXTURE0+k);let ve=n.get(q);if(q.version!==ve.__version||J===!0){t.activeTexture(i.TEXTURE0+k);let ae=Ke.getPrimaries(Ke.workingColorSpace),de=_.colorSpace===ri?null:Ke.getPrimaries(_.colorSpace),je=_.colorSpace===ri||ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let te=y(_.image,!1,r.maxTextureSize);te=lt(_,te);let fe=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type),De=E(_.internalFormat,fe,Ce,_.colorSpace,_.isVideoTexture);Ee(X,_);let pe,Ye=_.mipmaps,Be=_.isVideoTexture!==!0,ot=ve.__version===void 0||J===!0,D=q.dataReady,se=P(_,te);if(_.isDepthTexture)De=S(_.format===Ji,_.type),ot&&(Be?t.texStorage2D(i.TEXTURE_2D,1,De,te.width,te.height):t.texImage2D(i.TEXTURE_2D,0,De,te.width,te.height,0,fe,Ce,null));else if(_.isDataTexture)if(Ye.length>0){Be&&ot&&t.texStorage2D(i.TEXTURE_2D,se,De,Ye[0].width,Ye[0].height);for(let W=0,Y=Ye.length;W<Y;W++)pe=Ye[W],Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,W,De,pe.width,pe.height,0,fe,Ce,pe.data);_.generateMipmaps=!1}else Be?(ot&&t.texStorage2D(i.TEXTURE_2D,se,De,te.width,te.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,te.width,te.height,fe,Ce,te.data)):t.texImage2D(i.TEXTURE_2D,0,De,te.width,te.height,0,fe,Ce,te.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,De,Ye[0].width,Ye[0].height,te.depth);for(let W=0,Y=Ye.length;W<Y;W++)if(pe=Ye[W],_.format!==hn)if(fe!==null)if(Be){if(D)if(_.layerUpdates.size>0){let ce=zh(pe.width,pe.height,_.format,_.type);for(let le of _.layerUpdates){let Oe=pe.data.subarray(le*ce/pe.data.BYTES_PER_ELEMENT,(le+1)*ce/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,le,pe.width,pe.height,1,fe,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,te.depth,fe,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,De,pe.width,pe.height,te.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,pe.width,pe.height,te.depth,fe,Ce,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,W,De,pe.width,pe.height,te.depth,0,fe,Ce,pe.data)}else{Be&&ot&&t.texStorage2D(i.TEXTURE_2D,se,De,Ye[0].width,Ye[0].height);for(let W=0,Y=Ye.length;W<Y;W++)pe=Ye[W],_.format!==hn?fe!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,W,De,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,pe.width,pe.height,fe,Ce,pe.data):t.texImage2D(i.TEXTURE_2D,W,De,pe.width,pe.height,0,fe,Ce,pe.data)}else if(_.isDataArrayTexture)if(Be){if(ot&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,De,te.width,te.height,te.depth),D)if(_.layerUpdates.size>0){let W=zh(te.width,te.height,_.format,_.type);for(let Y of _.layerUpdates){let ce=te.data.subarray(Y*W/te.data.BYTES_PER_ELEMENT,(Y+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,te.width,te.height,1,fe,Ce,ce)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,fe,Ce,te.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,De,te.width,te.height,te.depth,0,fe,Ce,te.data);else if(_.isData3DTexture)Be?(ot&&t.texStorage3D(i.TEXTURE_3D,se,De,te.width,te.height,te.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,fe,Ce,te.data)):t.texImage3D(i.TEXTURE_3D,0,De,te.width,te.height,te.depth,0,fe,Ce,te.data);else if(_.isFramebufferTexture){if(ot)if(Be)t.texStorage2D(i.TEXTURE_2D,se,De,te.width,te.height);else{let W=te.width,Y=te.height;for(let ce=0;ce<se;ce++)t.texImage2D(i.TEXTURE_2D,ce,De,W,Y,0,fe,Ce,null),W>>=1,Y>>=1}}else if(Ye.length>0){if(Be&&ot){let W=xe(Ye[0]);t.texStorage2D(i.TEXTURE_2D,se,De,W.width,W.height)}for(let W=0,Y=Ye.length;W<Y;W++)pe=Ye[W],Be?D&&t.texSubImage2D(i.TEXTURE_2D,W,0,0,fe,Ce,pe):t.texImage2D(i.TEXTURE_2D,W,De,fe,Ce,pe);_.generateMipmaps=!1}else if(Be){if(ot){let W=xe(te);t.texStorage2D(i.TEXTURE_2D,se,De,W.width,W.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ce,te)}else t.texImage2D(i.TEXTURE_2D,0,De,fe,Ce,te);m(_)&&f(X),ve.__version=q.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ie(b,_,k){if(_.image.length!==6)return;let X=Ge(b,_),J=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+k);let q=n.get(J);if(J.version!==q.__version||X===!0){t.activeTexture(i.TEXTURE0+k);let ve=Ke.getPrimaries(Ke.workingColorSpace),ae=_.colorSpace===ri?null:Ke.getPrimaries(_.colorSpace),de=_.colorSpace===ri||ve===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);let je=_.isCompressedTexture||_.image[0].isCompressedTexture,te=_.image[0]&&_.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!je&&!te?fe[Y]=y(_.image[Y],!0,r.maxCubemapSize):fe[Y]=te?_.image[Y].image:_.image[Y],fe[Y]=lt(_,fe[Y]);let Ce=fe[0],De=s.convert(_.format,_.colorSpace),pe=s.convert(_.type),Ye=E(_.internalFormat,De,pe,_.colorSpace),Be=_.isVideoTexture!==!0,ot=q.__version===void 0||X===!0,D=J.dataReady,se=P(_,Ce);Ee(i.TEXTURE_CUBE_MAP,_);let W;if(je){Be&&ot&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ye,Ce.width,Ce.height);for(let Y=0;Y<6;Y++){W=fe[Y].mipmaps;for(let ce=0;ce<W.length;ce++){let le=W[ce];_.format!==hn?De!==null?Be?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,le.width,le.height,De,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Ye,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,le.width,le.height,De,pe,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,Ye,le.width,le.height,0,De,pe,le.data)}}}else{if(W=_.mipmaps,Be&&ot){W.length>0&&se++;let Y=xe(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ye,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(te){Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,De,pe,fe[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ye,fe[Y].width,fe[Y].height,0,De,pe,fe[Y].data);for(let ce=0;ce<W.length;ce++){let Oe=W[ce].image[Y].image;Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Oe.width,Oe.height,De,pe,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Ye,Oe.width,Oe.height,0,De,pe,Oe.data)}}else{Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,De,pe,fe[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ye,De,pe,fe[Y]);for(let ce=0;ce<W.length;ce++){let le=W[ce];Be?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,De,pe,le.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,Ye,De,pe,le.image[Y])}}}m(_)&&f(i.TEXTURE_CUBE_MAP),q.__version=J.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ge(b,_,k,X,J,q){let ve=s.convert(k.format,k.colorSpace),ae=s.convert(k.type),de=E(k.internalFormat,ve,ae,k.colorSpace),je=n.get(_),te=n.get(k);if(te.__renderTarget=_,!je.__hasExternalTextures){let fe=Math.max(1,_.width>>q),Ce=Math.max(1,_.height>>q);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,q,de,fe,Ce,_.depth,0,ve,ae,null):t.texImage2D(J,q,de,fe,Ce,0,ve,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Xe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,J,te.__webglTexture,0,qe(_)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,J,te.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(b,_,k){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let X=_.depthTexture,J=X&&X.isDepthTexture?X.type:null,q=S(_.stencilBuffer,J),ve=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=qe(_);Xe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ae,q,_.width,_.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,q,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,b)}else{let X=_.textures;for(let J=0;J<X.length;J++){let q=X[J],ve=s.convert(q.format,q.colorSpace),ae=s.convert(q.type),de=E(q.internalFormat,ve,ae,q.colorSpace),je=qe(_);k&&Xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,je,de,_.width,_.height):Xe(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,je,de,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,de,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _e(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let X=n.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);let J=X.__webglTexture,q=qe(_);if(_.depthTexture.format===ji)Xe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(_.depthTexture.format===Ji)Xe(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Pe(b){let _=n.get(b),k=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let X=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",J)};X.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=X}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");_e(_.__webglFramebuffer,b)}else if(k){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=i.createRenderbuffer(),ee(_.__webglDepthbuffer[X],b,!1);else{let J=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=_.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,q)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),ee(_.__webglDepthbuffer,b,!1);else{let X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(b,_,k){let X=n.get(b);_!==void 0&&ge(X.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&Pe(b)}function at(b){let _=b.texture,k=n.get(b),X=n.get(_);b.addEventListener("dispose",A);let J=b.textures,q=b.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=_.version,o.memory.textures++),q){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let de=0;de<_.mipmaps.length;de++)k.__webglFramebuffer[ae][de]=i.createFramebuffer()}else k.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)k.__webglFramebuffer[ae]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(ve)for(let ae=0,de=J.length;ae<de;ae++){let je=n.get(J[ae]);je.__webglTexture===void 0&&(je.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&Xe(b)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<J.length;ae++){let de=J[ae];k.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);let je=s.convert(de.format,de.colorSpace),te=s.convert(de.type),fe=E(de.internalFormat,je,te,de.colorSpace,b.isXRRenderTarget===!0),Ce=qe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,fe,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),ee(k.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ee(i.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)ge(k.__webglFramebuffer[ae][de],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else ge(k.__webglFramebuffer[ae],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ae=0,de=J.length;ae<de;ae++){let je=J[ae],te=n.get(je);t.bindTexture(i.TEXTURE_2D,te.__webglTexture),Ee(i.TEXTURE_2D,je),ge(k.__webglFramebuffer,b,je,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),m(je)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ae=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,X.__webglTexture),Ee(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let de=0;de<_.mipmaps.length;de++)ge(k.__webglFramebuffer[de],b,_,i.COLOR_ATTACHMENT0,ae,de);else ge(k.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,ae,0);m(_)&&f(ae),t.unbindTexture()}b.depthBuffer&&Pe(b)}function ut(b){let _=b.textures;for(let k=0,X=_.length;k<X;k++){let J=_[k];if(m(J)){let q=w(b),ve=n.get(J).__webglTexture;t.bindTexture(q,ve),f(q),t.unbindTexture()}}}let $e=[],T=[];function tn(b){if(b.samples>0){if(Xe(b)===!1){let _=b.textures,k=b.width,X=b.height,J=i.COLOR_BUFFER_BIT,q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(b),ae=_.length>1;if(ae)for(let de=0;de<_.length;de++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let de=0;de<_.length;de++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);let je=n.get(_[de]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,je,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,J,i.NEAREST),l===!0&&($e.length=0,T.length=0,$e.push(i.COLOR_ATTACHMENT0+de),b.depthBuffer&&b.resolveDepthBuffer===!1&&($e.push(q),T.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,T)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<_.length;de++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,ve.__webglColorRenderbuffer[de]);let je=n.get(_[de]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function qe(b){return Math.min(r.maxSamples,b.samples)}function Xe(b){let _=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Me(b){let _=o.render.frame;u.get(b)!==_&&(u.set(b,_),b.update())}function lt(b,_){let k=b.colorSpace,X=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||k!==Qi&&k!==ri&&(Ke.getTransfer(k)===rt?(X!==hn||J!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function xe(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=$,this.setTexture2D=K,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=L,this.rebindTextures=we,this.setupRenderTarget=at,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Xe}function aE(i,e){function t(n,r=ri){let s,o=Ke.getTransfer(r);if(n===On)return i.UNSIGNED_BYTE;if(n===ml)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sh)return i.BYTE;if(n===Mh)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===pl)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===Eh)return i.ALPHA;if(n===wh)return i.RGB;if(n===hn)return i.RGBA;if(n===Ah)return i.LUMINANCE;if(n===Th)return i.LUMINANCE_ALPHA;if(n===ji)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===yl)return i.RED_INTEGER;if(n===Rh)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===vl)return i.RGBA_INTEGER;if(n===xo||n===So||n===Mo||n===bo)if(o===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===So)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xl||n===Sl||n===Ml||n===bl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===xl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ml)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===El||n===wl||n===Al)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===El||n===wl)return o===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Al)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Tl||n===Cl||n===Rl||n===Dl||n===Il||n===Pl||n===Ll||n===Fl||n===Nl||n===Ol||n===Ul||n===Bl||n===kl||n===zl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Tl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Il)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ll)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ol)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ul)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zl)return o===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===Vl||n===Hl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return o===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dh||n===Gl||n===Wl||n===$l)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Gl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var lE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Qh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Pi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new bn({vertexShader:lE,fragmentShader:cE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ed=class extends ti{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null,y=new Qh,m=t.getContextAttributes(),f=null,w=null,E=[],S=[],P=new Qe,R=null,A=new Et;A.viewport=new ht;let O=new Et;O.viewport=new ht;let M=[A,O],x=new tl,C=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=E[H];return ie===void 0&&(ie=new es,E[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=E[H];return ie===void 0&&(ie=new es,E[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=E[H];return ie===void 0&&(ie=new es,E[H]=ie),ie.getHandSpace()};function G(H){let ie=S.indexOf(H.inputSource);if(ie===-1)return;let ge=E[ie];ge!==void 0&&(ge.update(H.inputSource,H.frame,c||o),ge.dispatchEvent({type:H.type,data:H.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",K);for(let H=0;H<E.length;H++){let ie=S[H];ie!==null&&(S[H]=null,E[H].disconnect(ie))}C=null,$=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,w=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(H){return ms(this,null,function*(){if(r=H,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),R=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,ee=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=m.stencil?Ji:ji,ee=m.stencil?rr:Ii);let Pe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new Pn(d.textureWidth,d.textureHeight,{format:hn,type:On,depthTexture:new fo(d.textureWidth,d.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{let ge={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ge),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new Pn(p.framebufferWidth,p.framebufferHeight,{format:hn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),Ge.setContext(r),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(H){for(let ie=0;ie<H.removed.length;ie++){let ge=H.removed[ie],ee=S.indexOf(ge);ee>=0&&(S[ee]=null,E[ee].disconnect(ge))}for(let ie=0;ie<H.added.length;ie++){let ge=H.added[ie],ee=S.indexOf(ge);if(ee===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=S.length){S.push(ge),ee=Pe;break}else if(S[Pe]===null){S[Pe]=ge,ee=Pe;break}if(ee===-1)break}let _e=E[ee];_e&&_e.connect(ge)}}let N=new B,U=new B;function L(H,ie,ge){N.setFromMatrixPosition(ie.matrixWorld),U.setFromMatrixPosition(ge.matrixWorld);let ee=N.distanceTo(U),_e=ie.projectionMatrix.elements,Pe=ge.projectionMatrix.elements,we=_e[14]/(_e[10]-1),at=_e[14]/(_e[10]+1),ut=(_e[9]+1)/_e[5],$e=(_e[9]-1)/_e[5],T=(_e[8]-1)/_e[0],tn=(Pe[8]+1)/Pe[0],qe=we*T,Xe=we*tn,Me=ee/(-T+tn),lt=Me*-T;if(ie.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(lt),H.translateZ(Me),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),_e[10]===-1)H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let xe=we+Me,b=at+Me,_=qe-lt,k=Xe+(ee-lt),X=ut*at/b*xe,J=$e*at/b*xe;H.projectionMatrix.makePerspective(_,k,X,J,xe,b),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function j(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ie=H.near,ge=H.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),x.near=O.near=A.near=ie,x.far=O.far=A.far=ge,(C!==x.near||$!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,$=x.far),A.layers.mask=H.layers.mask|2,O.layers.mask=H.layers.mask|4,x.layers.mask=A.layers.mask|O.layers.mask;let ee=H.parent,_e=x.cameras;j(x,ee);for(let Pe=0;Pe<_e.length;Pe++)j(_e[Pe],ee);_e.length===2?L(x,A,O):x.projectionMatrix.copy(A.projectionMatrix),ne(H,x,ee)};function ne(H,ie,ge){ge===null?H.matrix.copy(ie.matrixWorld):(H.matrix.copy(ge.matrixWorld),H.matrix.invert(),H.matrix.multiply(ie.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Kr*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(H){l=H,d!==null&&(d.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let he=null;function Ee(H,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){let ge=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let ee=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let we=0;we<ge.length;we++){let at=ge[we],ut=null;if(p!==null)ut=p.getViewport(at);else{let T=h.getViewSubImage(d,at);ut=T.viewport,we===0&&(e.setRenderTargetTextures(w,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(w))}let $e=M[we];$e===void 0&&($e=new Et,$e.layers.enable(we),$e.viewport=new ht,M[we]=$e),$e.matrix.fromArray(at.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(at.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(ut.x,ut.y,ut.width,ut.height),we===0&&(x.matrix.copy($e.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ee===!0&&x.cameras.push($e)}let _e=r.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){let we=h.getDepthInformation(ge[0]);we&&we.isValid&&we.texture&&y.init(e,we,r.renderState)}}for(let ge=0;ge<E.length;ge++){let ee=S[ge],_e=E[ge];ee!==null&&_e!==void 0&&_e.update(ee,ie,c||o)}he&&he(H,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ge=new Ag;Ge.setAnimationLoop(Ee),this.setAnimationLoop=function(H){he=H},this.dispose=function(){}}},lr=new Ai,uE=new mt;function hE(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Uh(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,w,E,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,w,E):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Bt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Bt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=e.get(f),E=w.envMap,S=w.envMapRotation;E&&(m.envMap.value=E,lr.copy(S),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),m.envMapRotation.value.setFromMatrix4(uE.makeRotationFromEuler(lr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Bt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let w=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function dE(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,E){let S=E.program;n.uniformBlockBinding(w,S)}function c(w,E){let S=r[w.id];S===void 0&&(g(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));let P=E.program;n.updateUBOMapping(w,P);let R=e.render.frame;s[w.id]!==R&&(d(w),s[w.id]=R)}function u(w){let E=h();w.__bindingPointIndex=E;let S=i.createBuffer(),P=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let E=r[w.id],S=w.uniforms,P=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,A=S.length;R<A;R++){let O=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,x=O.length;M<x;M++){let C=O[M];if(p(C,R,M,P)===!0){let $=C.__offset,G=Array.isArray(C.value)?C.value:[C.value],Z=0;for(let K=0;K<G.length;K++){let N=G[K],U=y(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,$+Z,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):(N.toArray(C.__data,Z),Z+=U.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,$,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,E,S,P){let R=w.value,A=E+"_"+S;if(P[A]===void 0)return typeof R=="number"||typeof R=="boolean"?P[A]=R:P[A]=R.clone(),!0;{let O=P[A];if(typeof R=="number"||typeof R=="boolean"){if(O!==R)return P[A]=R,!0}else if(O.equals(R)===!1)return O.copy(R),!0}return!1}function g(w){let E=w.uniforms,S=0,P=16;for(let A=0,O=E.length;A<O;A++){let M=Array.isArray(E[A])?E[A]:[E[A]];for(let x=0,C=M.length;x<C;x++){let $=M[x],G=Array.isArray($.value)?$.value:[$.value];for(let Z=0,K=G.length;Z<K;Z++){let N=G[Z],U=y(N),L=S%P,j=L%U.boundary,ne=L+j;S+=j,ne!==0&&P-ne<U.storage&&(S+=P-ne),$.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=S,S+=U.storage}}}let R=S%P;return R>0&&(S+=P-R),w.__size=S,w.__cache={},this}function y(w){let E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function m(w){let E=w.target;E.removeEventListener("dispose",m);let S=o.indexOf(E.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function f(){for(let w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}var Zl=class{constructor(e={}){let{canvas:t=Km(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,w=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Zt,this.toneMapping=ii,this.toneMappingExposure=1;let S=this,P=!1,R=0,A=0,O=null,M=-1,x=null,C=new ht,$=new ht,G=null,Z=new He(0),K=0,N=t.width,U=t.height,L=1,j=null,ne=null,he=new ht(0,0,N,U),Ee=new ht(0,0,N,U),Ge=!1,H=new ts,ie=!1,ge=!1;this.transmissionResolutionScale=1;let ee=new mt,_e=new mt,Pe=new B,we=new ht,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ut=!1;function $e(){return O===null?L:1}let T=n;function tn(v,I){return t.getContext(v,I)}try{let v={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nl}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),T===null){let I="webgl2";if(T=tn(I,v),T===null)throw tn(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let qe,Xe,Me,lt,xe,b,_,k,X,J,q,ve,ae,de,je,te,fe,Ce,De,pe,Ye,Be,ot,D;function se(){qe=new DM(T),qe.init(),Be=new aE(T,qe),Xe=new EM(T,qe,e,Be),Me=new sE(T,qe),Xe.reverseDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),lt=new LM(T),xe=new qb,b=new oE(T,qe,Me,xe,Xe,Be,lt),_=new AM(S),k=new RM(S),X=new zv(T),ot=new MM(T,X),J=new IM(T,X,lt,ot),q=new NM(T,J,X,lt),De=new FM(T,Xe,b),te=new wM(xe),ve=new $b(S,_,k,qe,Xe,ot,te),ae=new hE(S,xe),de=new Yb,je=new eE(qe),Ce=new SM(S,_,k,Me,q,p,l),fe=new iE(S,q,Xe),D=new dE(T,lt,Xe,Me),pe=new bM(T,qe,lt),Ye=new PM(T,qe,lt),lt.programs=ve.programs,S.capabilities=Xe,S.extensions=qe,S.properties=xe,S.renderLists=de,S.shadowMap=fe,S.state=Me,S.info=lt}se();let W=new ed(S,T);this.xr=W,this.getContext=function(){return T},this.getContextAttributes=function(){return T.getContextAttributes()},this.forceContextLoss=function(){let v=qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(v){v!==void 0&&(L=v,this.setSize(N,U,!1))},this.getSize=function(v){return v.set(N,U)},this.setSize=function(v,I,z=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=v,U=I,t.width=Math.floor(v*L),t.height=Math.floor(I*L),z===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(N*L,U*L).floor()},this.setDrawingBufferSize=function(v,I,z){N=v,U=I,L=z,t.width=Math.floor(v*z),t.height=Math.floor(I*z),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(C)},this.getViewport=function(v){return v.copy(he)},this.setViewport=function(v,I,z,V){v.isVector4?he.set(v.x,v.y,v.z,v.w):he.set(v,I,z,V),Me.viewport(C.copy(he).multiplyScalar(L).round())},this.getScissor=function(v){return v.copy(Ee)},this.setScissor=function(v,I,z,V){v.isVector4?Ee.set(v.x,v.y,v.z,v.w):Ee.set(v,I,z,V),Me.scissor($.copy(Ee).multiplyScalar(L).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(v){Me.setScissorTest(Ge=v)},this.setOpaqueSort=function(v){j=v},this.setTransparentSort=function(v){ne=v},this.getClearColor=function(v){return v.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(v=!0,I=!0,z=!0){let V=0;if(v){let F=!1;if(O!==null){let Q=O.texture.format;F=Q===vl||Q===_l||Q===yl}if(F){let Q=O.texture.type,oe=Q===On||Q===Ii||Q===is||Q===rr||Q===ml||Q===gl,ue=Ce.getClearColor(),me=Ce.getClearAlpha(),Ie=ue.r,Le=ue.g,be=ue.b;oe?(g[0]=Ie,g[1]=Le,g[2]=be,g[3]=me,T.clearBufferuiv(T.COLOR,0,g)):(y[0]=Ie,y[1]=Le,y[2]=be,y[3]=me,T.clearBufferiv(T.COLOR,0,y))}else V|=T.COLOR_BUFFER_BIT}I&&(V|=T.DEPTH_BUFFER_BIT),z&&(V|=T.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),T.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ce.dispose(),de.dispose(),je.dispose(),xe.dispose(),_.dispose(),k.dispose(),q.dispose(),ot.dispose(),D.dispose(),ve.dispose(),W.dispose(),W.removeEventListener("sessionstart",Id),W.removeEventListener("sessionend",Pd),Ni.stop()};function Y(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ce(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let v=lt.autoReset,I=fe.enabled,z=fe.autoUpdate,V=fe.needsUpdate,F=fe.type;se(),lt.autoReset=v,fe.enabled=I,fe.autoUpdate=z,fe.needsUpdate=V,fe.type=F}function le(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Oe(v){let I=v.target;I.removeEventListener("dispose",Oe),dt(I)}function dt(v){Ct(v),xe.remove(v)}function Ct(v){let I=xe.get(v).programs;I!==void 0&&(I.forEach(function(z){ve.releaseProgram(z)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,z,V,F,Q){I===null&&(I=at);let oe=F.isMesh&&F.matrixWorld.determinant()<0,ue=d0(v,I,z,V,F);Me.setMaterial(V,oe);let me=z.index,Ie=1;if(V.wireframe===!0){if(me=J.getWireframeAttribute(z),me===void 0)return;Ie=2}let Le=z.drawRange,be=z.attributes.position,Ze=Le.start*Ie,et=(Le.start+Le.count)*Ie;Q!==null&&(Ze=Math.max(Ze,Q.start*Ie),et=Math.min(et,(Q.start+Q.count)*Ie)),me!==null?(Ze=Math.max(Ze,0),et=Math.min(et,me.count)):be!=null&&(Ze=Math.max(Ze,0),et=Math.min(et,be.count));let yt=et-Ze;if(yt<0||yt===1/0)return;ot.setup(F,V,ue,z,me);let ft,Je=pe;if(me!==null&&(ft=X.get(me),Je=Ye,Je.setIndex(ft)),F.isMesh)V.wireframe===!0?(Me.setLineWidth(V.wireframeLinewidth*$e()),Je.setMode(T.LINES)):Je.setMode(T.TRIANGLES);else if(F.isLine){let Ae=V.linewidth;Ae===void 0&&(Ae=1),Me.setLineWidth(Ae*$e()),F.isLineSegments?Je.setMode(T.LINES):F.isLineLoop?Je.setMode(T.LINE_LOOP):Je.setMode(T.LINE_STRIP)}else F.isPoints?Je.setMode(T.POINTS):F.isSprite&&Je.setMode(T.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Ae=F._multiDrawStarts,wt=F._multiDrawCounts,tt=F._multiDrawCount,pn=me?X.get(me).bytesPerElement:1,gr=xe.get(V).currentProgram.getUniforms();for(let Wt=0;Wt<tt;Wt++)gr.setValue(T,"_gl_DrawID",Wt),Je.render(Ae[Wt]/pn,wt[Wt])}else if(F.isInstancedMesh)Je.renderInstances(Ze,yt,F.count);else if(z.isInstancedBufferGeometry){let Ae=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,wt=Math.min(z.instanceCount,Ae);Je.renderInstances(Ze,yt,wt)}else Je.render(Ze,yt)};function it(v,I,z){v.transparent===!0&&v.side===Gt&&v.forceSinglePass===!1?(v.side=Bt,v.needsUpdate=!0,Fo(v,I,z),v.side=ei,v.needsUpdate=!0,Fo(v,I,z),v.side=Gt):Fo(v,I,z)}this.compile=function(v,I,z=null){z===null&&(z=v),f=je.get(z),f.init(I),E.push(f),z.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),v!==z&&v.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();let V=new Set;return v.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let Q=F.material;if(Q)if(Array.isArray(Q))for(let oe=0;oe<Q.length;oe++){let ue=Q[oe];it(ue,z,F),V.add(ue)}else it(Q,z,F),V.add(Q)}),E.pop(),f=null,V},this.compileAsync=function(v,I,z=null){let V=this.compile(v,I,z);return new Promise(F=>{function Q(){if(V.forEach(function(oe){xe.get(oe).currentProgram.isReady()&&V.delete(oe)}),V.size===0){F(v);return}setTimeout(Q,10)}qe.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let fn=null;function Vn(v){fn&&fn(v)}function Id(){Ni.stop()}function Pd(){Ni.start()}let Ni=new Ag;Ni.setAnimationLoop(Vn),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(v){fn=v,W.setAnimationLoop(v),v===null?Ni.stop():Ni.start()},W.addEventListener("sessionstart",Id),W.addEventListener("sessionend",Pd),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,I,O),f=je.get(v,E.length),f.init(I),E.push(f),_e.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),H.setFromProjectionMatrix(_e),ge=this.localClippingEnabled,ie=te.init(this.clippingPlanes,ge),m=de.get(v,w.length),m.init(),w.push(m),W.enabled===!0&&W.isPresenting===!0){let Q=S.xr.getDepthSensingMesh();Q!==null&&yc(Q,I,-1/0,S.sortObjects)}yc(v,I,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(j,ne),ut=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,ut&&Ce.addToRenderList(m,v),this.info.render.frame++,ie===!0&&te.beginShadows();let z=f.state.shadowsArray;fe.render(z,v,I),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(f.setupLights(),I.isArrayCamera){let Q=I.cameras;if(F.length>0)for(let oe=0,ue=Q.length;oe<ue;oe++){let me=Q[oe];Fd(V,F,v,me)}ut&&Ce.render(v);for(let oe=0,ue=Q.length;oe<ue;oe++){let me=Q[oe];Ld(m,v,me,me.viewport)}}else F.length>0&&Fd(V,F,v,I),ut&&Ce.render(v),Ld(m,v,I);O!==null&&A===0&&(b.updateMultisampleRenderTarget(O),b.updateRenderTargetMipmap(O)),v.isScene===!0&&v.onAfterRender(S,v,I),ot.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(f=E[E.length-1],ie===!0&&te.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function yc(v,I,z,V){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)f.pushLight(v),v.castShadow&&f.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||H.intersectsSprite(v)){V&&we.setFromMatrixPosition(v.matrixWorld).applyMatrix4(_e);let oe=q.update(v),ue=v.material;ue.visible&&m.push(v,oe,ue,z,we.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||H.intersectsObject(v))){let oe=q.update(v),ue=v.material;if(V&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),we.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),we.copy(oe.boundingSphere.center)),we.applyMatrix4(v.matrixWorld).applyMatrix4(_e)),Array.isArray(ue)){let me=oe.groups;for(let Ie=0,Le=me.length;Ie<Le;Ie++){let be=me[Ie],Ze=ue[be.materialIndex];Ze&&Ze.visible&&m.push(v,oe,Ze,z,we.z,be)}}else ue.visible&&m.push(v,oe,ue,z,we.z,null)}}let Q=v.children;for(let oe=0,ue=Q.length;oe<ue;oe++)yc(Q[oe],I,z,V)}function Ld(v,I,z,V){let F=v.opaque,Q=v.transmissive,oe=v.transparent;f.setupLightsView(z),ie===!0&&te.setGlobalState(S.clippingPlanes,z),V&&Me.viewport(C.copy(V)),F.length>0&&Lo(F,I,z),Q.length>0&&Lo(Q,I,z),oe.length>0&&Lo(oe,I,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Fd(v,I,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[V.id]===void 0&&(f.state.transmissionRenderTarget[V.id]=new Pn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?rs:On,minFilter:Di,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));let Q=f.state.transmissionRenderTarget[V.id],oe=V.viewport||C;Q.setSize(oe.z*S.transmissionResolutionScale,oe.w*S.transmissionResolutionScale);let ue=S.getRenderTarget();S.setRenderTarget(Q),S.getClearColor(Z),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),ut&&Ce.render(z);let me=S.toneMapping;S.toneMapping=ii;let Ie=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),f.setupLightsView(V),ie===!0&&te.setGlobalState(S.clippingPlanes,V),Lo(v,z,V),b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let be=0,Ze=I.length;be<Ze;be++){let et=I[be],yt=et.object,ft=et.geometry,Je=et.material,Ae=et.group;if(Je.side===Gt&&yt.layers.test(V.layers)){let wt=Je.side;Je.side=Bt,Je.needsUpdate=!0,Nd(yt,z,V,ft,Je,Ae),Je.side=wt,Je.needsUpdate=!0,Le=!0}}Le===!0&&(b.updateMultisampleRenderTarget(Q),b.updateRenderTargetMipmap(Q))}S.setRenderTarget(ue),S.setClearColor(Z,K),Ie!==void 0&&(V.viewport=Ie),S.toneMapping=me}function Lo(v,I,z){let V=I.isScene===!0?I.overrideMaterial:null;for(let F=0,Q=v.length;F<Q;F++){let oe=v[F],ue=oe.object,me=oe.geometry,Ie=V===null?oe.material:V,Le=oe.group;ue.layers.test(z.layers)&&Nd(ue,I,z,me,Ie,Le)}}function Nd(v,I,z,V,F,Q){v.onBeforeRender(S,I,z,V,F,Q),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),F.onBeforeRender(S,I,z,V,v,Q),F.transparent===!0&&F.side===Gt&&F.forceSinglePass===!1?(F.side=Bt,F.needsUpdate=!0,S.renderBufferDirect(z,I,V,F,v,Q),F.side=ei,F.needsUpdate=!0,S.renderBufferDirect(z,I,V,F,v,Q),F.side=Gt):S.renderBufferDirect(z,I,V,F,v,Q),v.onAfterRender(S,I,z,V,F,Q)}function Fo(v,I,z){I.isScene!==!0&&(I=at);let V=xe.get(v),F=f.state.lights,Q=f.state.shadowsArray,oe=F.state.version,ue=ve.getParameters(v,F.state,Q,I,z),me=ve.getProgramCacheKey(ue),Ie=V.programs;V.environment=v.isMeshStandardMaterial?I.environment:null,V.fog=I.fog,V.envMap=(v.isMeshStandardMaterial?k:_).get(v.envMap||V.environment),V.envMapRotation=V.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ie===void 0&&(v.addEventListener("dispose",Oe),Ie=new Map,V.programs=Ie);let Le=Ie.get(me);if(Le!==void 0){if(V.currentProgram===Le&&V.lightsStateVersion===oe)return Ud(v,ue),Le}else ue.uniforms=ve.getUniforms(v),v.onBeforeCompile(ue,S),Le=ve.acquireProgram(ue,me),Ie.set(me,Le),V.uniforms=ue.uniforms;let be=V.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=te.uniform),Ud(v,ue),V.needsLights=p0(v),V.lightsStateVersion=oe,V.needsLights&&(be.ambientLightColor.value=F.state.ambient,be.lightProbe.value=F.state.probe,be.directionalLights.value=F.state.directional,be.directionalLightShadows.value=F.state.directionalShadow,be.spotLights.value=F.state.spot,be.spotLightShadows.value=F.state.spotShadow,be.rectAreaLights.value=F.state.rectArea,be.ltc_1.value=F.state.rectAreaLTC1,be.ltc_2.value=F.state.rectAreaLTC2,be.pointLights.value=F.state.point,be.pointLightShadows.value=F.state.pointShadow,be.hemisphereLights.value=F.state.hemi,be.directionalShadowMap.value=F.state.directionalShadowMap,be.directionalShadowMatrix.value=F.state.directionalShadowMatrix,be.spotShadowMap.value=F.state.spotShadowMap,be.spotLightMatrix.value=F.state.spotLightMatrix,be.spotLightMap.value=F.state.spotLightMap,be.pointShadowMap.value=F.state.pointShadowMap,be.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Le,V.uniformsList=null,Le}function Od(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=ls.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function Ud(v,I){let z=xe.get(v);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function d0(v,I,z,V,F){I.isScene!==!0&&(I=at),b.resetTextureUnits();let Q=I.fog,oe=V.isMeshStandardMaterial?I.environment:null,ue=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Qi,me=(V.isMeshStandardMaterial?k:_).get(V.envMap||oe),Ie=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Le=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!z.morphAttributes.position,Ze=!!z.morphAttributes.normal,et=!!z.morphAttributes.color,yt=ii;V.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(yt=S.toneMapping);let ft=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Je=ft!==void 0?ft.length:0,Ae=xe.get(V),wt=f.state.lights;if(ie===!0&&(ge===!0||v!==x)){let Nt=v===x&&V.id===M;te.setState(V,v,Nt)}let tt=!1;V.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==wt.state.version||Ae.outputColorSpace!==ue||F.isBatchedMesh&&Ae.batching===!1||!F.isBatchedMesh&&Ae.batching===!0||F.isBatchedMesh&&Ae.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ae.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ae.instancing===!1||!F.isInstancedMesh&&Ae.instancing===!0||F.isSkinnedMesh&&Ae.skinning===!1||!F.isSkinnedMesh&&Ae.skinning===!0||F.isInstancedMesh&&Ae.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ae.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ae.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ae.instancingMorph===!1&&F.morphTexture!==null||Ae.envMap!==me||V.fog===!0&&Ae.fog!==Q||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==te.numPlanes||Ae.numIntersection!==te.numIntersection)||Ae.vertexAlphas!==Ie||Ae.vertexTangents!==Le||Ae.morphTargets!==be||Ae.morphNormals!==Ze||Ae.morphColors!==et||Ae.toneMapping!==yt||Ae.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,Ae.__version=V.version);let pn=Ae.currentProgram;tt===!0&&(pn=Fo(V,I,F));let gr=!1,Wt=!1,ps=!1,ct=pn.getUniforms(),nn=Ae.uniforms;if(Me.useProgram(pn.program)&&(gr=!0,Wt=!0,ps=!0),V.id!==M&&(M=V.id,Wt=!0),gr||x!==v){Me.buffers.depth.getReversed()?(ee.copy(v.projectionMatrix),Qm(ee),eg(ee),ct.setValue(T,"projectionMatrix",ee)):ct.setValue(T,"projectionMatrix",v.projectionMatrix),ct.setValue(T,"viewMatrix",v.matrixWorldInverse);let kt=ct.map.cameraPosition;kt!==void 0&&kt.setValue(T,Pe.setFromMatrixPosition(v.matrixWorld)),Xe.logarithmicDepthBuffer&&ct.setValue(T,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(T,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Wt=!0,ps=!0)}if(F.isSkinnedMesh){ct.setOptional(T,F,"bindMatrix"),ct.setOptional(T,F,"bindMatrixInverse");let Nt=F.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ct.setValue(T,"boneTexture",Nt.boneTexture,b))}F.isBatchedMesh&&(ct.setOptional(T,F,"batchingTexture"),ct.setValue(T,"batchingTexture",F._matricesTexture,b),ct.setOptional(T,F,"batchingIdTexture"),ct.setValue(T,"batchingIdTexture",F._indirectTexture,b),ct.setOptional(T,F,"batchingColorTexture"),F._colorsTexture!==null&&ct.setValue(T,"batchingColorTexture",F._colorsTexture,b));let rn=z.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&De.update(F,z,pn),(Wt||Ae.receiveShadow!==F.receiveShadow)&&(Ae.receiveShadow=F.receiveShadow,ct.setValue(T,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(nn.envMap.value=me,nn.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&I.environment!==null&&(nn.envMapIntensity.value=I.environmentIntensity),Wt&&(ct.setValue(T,"toneMappingExposure",S.toneMappingExposure),Ae.needsLights&&f0(nn,ps),Q&&V.fog===!0&&ae.refreshFogUniforms(nn,Q),ae.refreshMaterialUniforms(nn,V,L,U,f.state.transmissionRenderTarget[v.id]),ls.upload(T,Od(Ae),nn,b)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ls.upload(T,Od(Ae),nn,b),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(T,"center",F.center),ct.setValue(T,"modelViewMatrix",F.modelViewMatrix),ct.setValue(T,"normalMatrix",F.normalMatrix),ct.setValue(T,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Nt=V.uniformsGroups;for(let kt=0,_c=Nt.length;kt<_c;kt++){let Oi=Nt[kt];D.update(Oi,pn),D.bind(Oi,pn)}}return pn}function f0(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function p0(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(v,I,z){xe.get(v.texture).__webglTexture=I,xe.get(v.depthTexture).__webglTexture=z;let V=xe.get(v);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=z===void 0,V.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){let z=xe.get(v);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0};let m0=T.createFramebuffer();this.setRenderTarget=function(v,I=0,z=0){O=v,R=I,A=z;let V=!0,F=null,Q=!1,oe=!1;if(v){let me=xe.get(v);if(me.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(T.FRAMEBUFFER,null),V=!1;else if(me.__webglFramebuffer===void 0)b.setupRenderTarget(v);else if(me.__hasExternalTextures)b.rebindTextures(v,xe.get(v.texture).__webglTexture,xe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let be=v.depthTexture;if(me.__boundDepthTexture!==be){if(be!==null&&xe.has(be)&&(v.width!==be.image.width||v.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(v)}}let Ie=v.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(oe=!0);let Le=xe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Le[I])?F=Le[I][z]:F=Le[I],Q=!0):v.samples>0&&b.useMultisampledRTT(v)===!1?F=xe.get(v).__webglMultisampledFramebuffer:Array.isArray(Le)?F=Le[z]:F=Le,C.copy(v.viewport),$.copy(v.scissor),G=v.scissorTest}else C.copy(he).multiplyScalar(L).floor(),$.copy(Ee).multiplyScalar(L).floor(),G=Ge;if(z!==0&&(F=m0),Me.bindFramebuffer(T.FRAMEBUFFER,F)&&V&&Me.drawBuffers(v,F),Me.viewport(C),Me.scissor($),Me.setScissorTest(G),Q){let me=xe.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,z)}else if(oe){let me=xe.get(v.texture),Ie=I;T.framebufferTextureLayer(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,me.__webglTexture,z,Ie)}else if(v!==null&&z!==0){let me=xe.get(v.texture);T.framebufferTexture2D(T.FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,me.__webglTexture,z)}M=-1},this.readRenderTargetPixels=function(v,I,z,V,F,Q,oe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ue=xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){Me.bindFramebuffer(T.FRAMEBUFFER,ue);try{let me=v.texture,Ie=me.format,Le=me.type;if(!Xe.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-V&&z>=0&&z<=v.height-F&&T.readPixels(I,z,V,F,Be.convert(Ie),Be.convert(Le),Q)}finally{let me=O!==null?xe.get(O).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=function(v,I,z,V,F,Q,oe){return ms(this,null,function*(){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ue=xe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(ue=ue[oe]),ue){let me=v.texture,Ie=me.format,Le=me.type;if(!Xe.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-V&&z>=0&&z<=v.height-F){Me.bindFramebuffer(T.FRAMEBUFFER,ue);let be=T.createBuffer();T.bindBuffer(T.PIXEL_PACK_BUFFER,be),T.bufferData(T.PIXEL_PACK_BUFFER,Q.byteLength,T.STREAM_READ),T.readPixels(I,z,V,F,Be.convert(Ie),Be.convert(Le),0);let Ze=O!==null?xe.get(O).__webglFramebuffer:null;Me.bindFramebuffer(T.FRAMEBUFFER,Ze);let et=T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE,0);return T.flush(),yield Jm(T,et,4),T.bindBuffer(T.PIXEL_PACK_BUFFER,be),T.getBufferSubData(T.PIXEL_PACK_BUFFER,0,Q),T.deleteBuffer(be),T.deleteSync(et),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(v,I=null,z=0){v.isTexture!==!0&&(sr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);let V=Math.pow(2,-z),F=Math.floor(v.image.width*V),Q=Math.floor(v.image.height*V),oe=I!==null?I.x:0,ue=I!==null?I.y:0;b.setTexture2D(v,0),T.copyTexSubImage2D(T.TEXTURE_2D,z,0,0,oe,ue,F,Q),Me.unbindTexture()};let g0=T.createFramebuffer(),y0=T.createFramebuffer();this.copyTextureToTexture=function(v,I,z=null,V=null,F=0,Q=null){v.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,v=arguments[1],I=arguments[2],Q=arguments[3]||0,z=null),Q===null&&(F!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=F,F=0):Q=0);let oe,ue,me,Ie,Le,be,Ze,et,yt,ft=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(z!==null)oe=z.max.x-z.min.x,ue=z.max.y-z.min.y,me=z.isBox3?z.max.z-z.min.z:1,Ie=z.min.x,Le=z.min.y,be=z.isBox3?z.min.z:0;else{let rn=Math.pow(2,-F);oe=Math.floor(ft.width*rn),ue=Math.floor(ft.height*rn),v.isDataArrayTexture?me=ft.depth:v.isData3DTexture?me=Math.floor(ft.depth*rn):me=1,Ie=0,Le=0,be=0}V!==null?(Ze=V.x,et=V.y,yt=V.z):(Ze=0,et=0,yt=0);let Je=Be.convert(I.format),Ae=Be.convert(I.type),wt;I.isData3DTexture?(b.setTexture3D(I,0),wt=T.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(b.setTexture2DArray(I,0),wt=T.TEXTURE_2D_ARRAY):(b.setTexture2D(I,0),wt=T.TEXTURE_2D),T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL,I.flipY),T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),T.pixelStorei(T.UNPACK_ALIGNMENT,I.unpackAlignment);let tt=T.getParameter(T.UNPACK_ROW_LENGTH),pn=T.getParameter(T.UNPACK_IMAGE_HEIGHT),gr=T.getParameter(T.UNPACK_SKIP_PIXELS),Wt=T.getParameter(T.UNPACK_SKIP_ROWS),ps=T.getParameter(T.UNPACK_SKIP_IMAGES);T.pixelStorei(T.UNPACK_ROW_LENGTH,ft.width),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,ft.height),T.pixelStorei(T.UNPACK_SKIP_PIXELS,Ie),T.pixelStorei(T.UNPACK_SKIP_ROWS,Le),T.pixelStorei(T.UNPACK_SKIP_IMAGES,be);let ct=v.isDataArrayTexture||v.isData3DTexture,nn=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let rn=xe.get(v),Nt=xe.get(I),kt=xe.get(rn.__renderTarget),_c=xe.get(Nt.__renderTarget);Me.bindFramebuffer(T.READ_FRAMEBUFFER,kt.__webglFramebuffer),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,_c.__webglFramebuffer);for(let Oi=0;Oi<me;Oi++)ct&&(T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xe.get(v).__webglTexture,F,be+Oi),T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,xe.get(I).__webglTexture,Q,yt+Oi)),T.blitFramebuffer(Ie,Le,oe,ue,Ze,et,oe,ue,T.DEPTH_BUFFER_BIT,T.NEAREST);Me.bindFramebuffer(T.READ_FRAMEBUFFER,null),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else if(F!==0||v.isRenderTargetTexture||xe.has(v)){let rn=xe.get(v),Nt=xe.get(I);Me.bindFramebuffer(T.READ_FRAMEBUFFER,g0),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,y0);for(let kt=0;kt<me;kt++)ct?T.framebufferTextureLayer(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,rn.__webglTexture,F,be+kt):T.framebufferTexture2D(T.READ_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,rn.__webglTexture,F),nn?T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,Nt.__webglTexture,Q,yt+kt):T.framebufferTexture2D(T.DRAW_FRAMEBUFFER,T.COLOR_ATTACHMENT0,T.TEXTURE_2D,Nt.__webglTexture,Q),F!==0?T.blitFramebuffer(Ie,Le,oe,ue,Ze,et,oe,ue,T.COLOR_BUFFER_BIT,T.NEAREST):nn?T.copyTexSubImage3D(wt,Q,Ze,et,yt+kt,Ie,Le,oe,ue):T.copyTexSubImage2D(wt,Q,Ze,et,Ie,Le,oe,ue);Me.bindFramebuffer(T.READ_FRAMEBUFFER,null),Me.bindFramebuffer(T.DRAW_FRAMEBUFFER,null)}else nn?v.isDataTexture||v.isData3DTexture?T.texSubImage3D(wt,Q,Ze,et,yt,oe,ue,me,Je,Ae,ft.data):I.isCompressedArrayTexture?T.compressedTexSubImage3D(wt,Q,Ze,et,yt,oe,ue,me,Je,ft.data):T.texSubImage3D(wt,Q,Ze,et,yt,oe,ue,me,Je,Ae,ft):v.isDataTexture?T.texSubImage2D(T.TEXTURE_2D,Q,Ze,et,oe,ue,Je,Ae,ft.data):v.isCompressedTexture?T.compressedTexSubImage2D(T.TEXTURE_2D,Q,Ze,et,ft.width,ft.height,Je,ft.data):T.texSubImage2D(T.TEXTURE_2D,Q,Ze,et,oe,ue,Je,Ae,ft);T.pixelStorei(T.UNPACK_ROW_LENGTH,tt),T.pixelStorei(T.UNPACK_IMAGE_HEIGHT,pn),T.pixelStorei(T.UNPACK_SKIP_PIXELS,gr),T.pixelStorei(T.UNPACK_SKIP_ROWS,Wt),T.pixelStorei(T.UNPACK_SKIP_IMAGES,ps),Q===0&&I.generateMipmaps&&T.generateMipmap(wt),Me.unbindTexture()},this.copyTextureToTexture3D=function(v,I,z=null,V=null,F=0){return v.isTexture!==!0&&(sr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,V=arguments[1]||null,v=arguments[2],I=arguments[3],F=arguments[4]||0),sr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,I,z,V,F)},this.initRenderTarget=function(v){xe.get(v).__webglFramebuffer===void 0&&b.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?b.setTextureCube(v,0):v.isData3DTexture?b.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?b.setTexture2DArray(v,0):b.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){R=0,A=0,O=null,Me.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}};var us=class i{constructor(e){this.elementRef=e}animationComplete=new ci;hasEmittedComplete=!1;sizes={width:window.innerWidth,height:window.innerHeight};scaleFactor=Math.min(this.sizes.width,this.sizes.height)/1e3;renderer;scene;camera;flaps=[];boxGroup;pivotGroupLeft;pivotGroupRight;animationId=null;initialCameraPosition=new B(5,5,5);intermediatePosition=new B(5,0,0);targetCameraPosition=new B(0,0,0);initialQuaternion=new Ht;intermediateQuaternion=new Ht;targetQuaternion=new Ht;startTime=null;firstPhaseDuration=1500;secondPhaseDuration=1500;onResize(){this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5))}ngOnInit(){this.scene=new ho,this.scene.background=new He(15044930),this.camera=new Et(75,this.sizes.width/this.sizes.height,.1,1e3),this.initialCameraPosition.set(5*this.scaleFactor,5*this.scaleFactor,5*this.scaleFactor),this.camera.position.copy(this.initialCameraPosition),this.camera.lookAt(new B(0,0,0)),this.initialQuaternion.copy(this.camera.quaternion);let e=new Et;this.intermediatePosition.set(2*this.scaleFactor,3*this.scaleFactor,2*this.scaleFactor),e.position.copy(this.intermediatePosition),e.lookAt(new B(0,0,0)),this.intermediateQuaternion.copy(e.quaternion);let t=new Et;this.targetCameraPosition.set(0,2*this.scaleFactor,0),t.position.copy(this.targetCameraPosition),t.lookAt(new B(0,0,0)),this.targetQuaternion.copy(t.quaternion),this.renderer=new Zl({antialias:!0}),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}ngAfterViewInit(){let e=this.elementRef.nativeElement.querySelector("div");e&&e.appendChild(this.renderer.domElement),this.boxGroup=new Sn;let t=1,n=1,r=1,s=.05,o=new er({color:4932699,side:Gt}),a=new gt(new Jt(t,n),o);a.position.z=r/2,this.boxGroup.add(a);let l=new gt(new Jt(t,n),o);l.position.z=-r/2,this.boxGroup.add(l);let c=new gt(new Jt(r,n),o);c.rotation.y=Math.PI/2,c.position.x=-t/2,this.boxGroup.add(c);let u=new gt(new Jt(r,n),o);u.rotation.y=-Math.PI/2,u.position.x=t/2,this.boxGroup.add(u);let h=new gt(new Jt(t,r),o);h.rotation.x=-Math.PI/2,h.position.y=-n/2,this.boxGroup.add(h);let d=new Jt(.5,1),p=new er({color:5655915,side:Gt}),g=new gt(d,p);g.position.set(.25,0,0),g.rotation.x=Math.PI/2;let y=new gt(d,p);y.position.set(-.25,0,0),y.rotation.x=-Math.PI/2,this.flaps=[g,y],this.pivotGroupLeft=new Sn,this.pivotGroupLeft.position.set(-.5,.5,0),this.pivotGroupLeft.add(g),this.pivotGroupRight=new Sn,this.pivotGroupRight.position.set(.5,.5,0),this.pivotGroupRight.add(y),this.boxGroup.add(this.pivotGroupLeft),this.boxGroup.add(this.pivotGroupRight),this.scene.add(this.boxGroup);let m=new Jt(10,10),f=new er({color:8421504,side:Gt}),w=new gt(m,f);w.rotation.x=-Math.PI/2,w.position.y=-.51;let E=new ns(16777215,1.5);E.position.set(-2,4,-1);let S=new ns(16777215,1.5);S.position.set(2,4,1),this.scene.add(S),this.scene.add(E);let P=new yo(4210752,4);this.scene.add(P),this.startAnimation()}startAnimation(){this.startTime=null,this.animate()}animate(e){this.animationId=requestAnimationFrame(g=>this.animate(g)),!this.startTime&&e&&(this.startTime=e),this.startTime||(this.startTime=0);let t=(e||0)-this.startTime,n=this.firstPhaseDuration+this.secondPhaseDuration,r=Math.min(t/n,1),s=this.easeInOutCubic(r),o=new B().lerpVectors(this.initialCameraPosition,this.intermediatePosition,.5),a=new B().lerpVectors(this.intermediatePosition,this.targetCameraPosition,.5),l=o.clone(),c=a.clone(),u=new B;u.copy(this.initialCameraPosition).multiplyScalar(Math.pow(1-s,3)).add(l.multiplyScalar(3*Math.pow(1-s,2)*s)).add(c.multiplyScalar(3*(1-s)*Math.pow(s,2))).add(this.targetCameraPosition.clone().multiplyScalar(Math.pow(s,3)));let h=new Ht;h.slerpQuaternions(this.initialQuaternion,this.targetQuaternion,s),this.camera.position.copy(u),this.camera.quaternion.copy(h);let d=75,p=45;if(this.camera.fov=Nh.lerp(d,p,s),this.camera.updateProjectionMatrix(),t<=n&&(this.pivotGroupLeft.rotation.z=s*Math.PI*.9,this.pivotGroupRight.rotation.z=-s*Math.PI*.9),t>=n&&!this.hasEmittedComplete){this.hasEmittedComplete=!0,this.animationComplete.emit();let g=this.elementRef.nativeElement.querySelector("div");g&&(g.style.transition="opacity 1s ease-out",g.style.opacity="1")}this.renderer.render(this.scene,this.camera)}easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}ngOnDestroy(){this.animationId!==null&&cancelAnimationFrame(this.animationId),this.scene.traverse(e=>{e instanceof gt&&(e.geometry.dispose(),e.material instanceof Fn?e.material.dispose():Array.isArray(e.material)&&e.material.forEach(t=>t.dispose()))}),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}static \u0275fac=function(t){return new(t||i)(Tt(Bi))};static \u0275cmp=ui({type:i,selectors:[["app-three-box"]],hostBindings:function(t,n){t&1&&br("resize",function(){return n.onResize()},!1,sf)},outputs:{animationComplete:"animationComplete"},decls:2,vars:0,consts:[["rendererContainer",""]],template:function(t,n){t&1&&Tn(0,"div",null,0)},styles:["div[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;top:0;left:0;overflow:hidden}"]})};var Ne=function(i){return i[i.State=0]="State",i[i.Transition=1]="Transition",i[i.Sequence=2]="Sequence",i[i.Group=3]="Group",i[i.Animate=4]="Animate",i[i.Keyframes=5]="Keyframes",i[i.Style=6]="Style",i[i.Trigger=7]="Trigger",i[i.Reference=8]="Reference",i[i.AnimateChild=9]="AnimateChild",i[i.AnimateRef=10]="AnimateRef",i[i.Query=11]="Query",i[i.Stagger=12]="Stagger",i}(Ne||{}),kn="*";function Ig(i,e){return{type:Ne.Trigger,name:i,definitions:e,options:{}}}function Pg(i,e=null){return{type:Ne.Animate,styles:e,timings:i}}function Lg(i,e=null){return{type:Ne.Sequence,steps:i,options:e}}function hs(i){return{type:Ne.Style,styles:i,offset:null}}function nd(i,e,t){return{type:Ne.State,name:i,styles:e,options:t}}function Fg(i,e,t=null){return{type:Ne.Transition,expr:i,animation:e,options:t}}var Li=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},Ao=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,n=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++n==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(n=>{let r=n.totalTime?Math.min(1,t/n.totalTime):1;n.setPosition(r)})}getPosition(){let e=this.players.reduce((t,n)=>t===null||n.totalTime>t.totalTime?n:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},Jl="!";function Ng(i){return new Se(3e3,!1)}function pE(){return new Se(3100,!1)}function mE(){return new Se(3101,!1)}function gE(i){return new Se(3001,!1)}function yE(i){return new Se(3003,!1)}function _E(i){return new Se(3004,!1)}function vE(i,e){return new Se(3005,!1)}function xE(){return new Se(3006,!1)}function SE(){return new Se(3007,!1)}function ME(i,e){return new Se(3008,!1)}function bE(i){return new Se(3002,!1)}function EE(i,e,t,n,r){return new Se(3010,!1)}function wE(){return new Se(3011,!1)}function AE(){return new Se(3012,!1)}function TE(){return new Se(3200,!1)}function CE(){return new Se(3202,!1)}function RE(){return new Se(3013,!1)}function DE(i){return new Se(3014,!1)}function IE(i){return new Se(3015,!1)}function PE(i){return new Se(3016,!1)}function LE(i,e){return new Se(3404,!1)}function FE(i){return new Se(3502,!1)}function NE(i){return new Se(3503,!1)}function OE(){return new Se(3300,!1)}function UE(i){return new Se(3504,!1)}function BE(i){return new Se(3301,!1)}function kE(i,e){return new Se(3302,!1)}function zE(i){return new Se(3303,!1)}function VE(i,e){return new Se(3400,!1)}function HE(i){return new Se(3401,!1)}function GE(i){return new Se(3402,!1)}function WE(i,e){return new Se(3505,!1)}function Fi(i){switch(i.length){case 0:return new Li;case 1:return i[0];default:return new Ao(i)}}function jg(i,e,t=new Map,n=new Map){let r=[],s=[],o=-1,a=null;if(e.forEach(l=>{let c=l.get("offset"),u=c==o,h=u&&a||new Map;l.forEach((d,p)=>{let g=p,y=d;if(p!=="offset")switch(g=i.normalizePropertyName(g,r),y){case Jl:y=t.get(p);break;case kn:y=n.get(p);break;default:y=i.normalizeStyleValue(p,g,y,r);break}h.set(g,y)}),u||s.push(h),a=h,o=c}),r.length)throw FE(r);return s}function Ed(i,e,t,n){switch(e){case"start":i.onStart(()=>n(t&&id(t,"start",i)));break;case"done":i.onDone(()=>n(t&&id(t,"done",i)));break;case"destroy":i.onDestroy(()=>n(t&&id(t,"destroy",i)));break}}function id(i,e,t){let n=t.totalTime,r=!!t.disabled,s=wd(i.element,i.triggerName,i.fromState,i.toState,e||i.phaseName,n??i.totalTime,r),o=i._data;return o!=null&&(s._data=o),s}function wd(i,e,t,n,r="",s=0,o){return{element:i,triggerName:e,fromState:t,toState:n,phaseName:r,totalTime:s,disabled:!!o}}function en(i,e,t){let n=i.get(e);return n||i.set(e,n=t),n}function Og(i){let e=i.indexOf(":"),t=i.substring(1,e),n=i.slice(e+1);return[t,n]}var $E=typeof document>"u"?null:document.documentElement;function Ad(i){let e=i.parentNode||i.host||null;return e===$E?null:e}function qE(i){return i.substring(1,6)=="ebkit"}var hr=null,Ug=!1;function XE(i){hr||(hr=YE()||{},Ug=hr.style?"WebkitAppearance"in hr.style:!1);let e=!0;return hr.style&&!qE(i)&&(e=i in hr.style,!e&&Ug&&(e="Webkit"+i.charAt(0).toUpperCase()+i.slice(1)in hr.style)),e}function YE(){return typeof document<"u"?document.body:null}function Zg(i,e){for(;e;){if(e===i)return!0;e=Ad(e)}return!1}function Kg(i,e,t){if(t)return Array.from(i.querySelectorAll(e));let n=i.querySelector(e);return n?[n]:[]}var Td=(()=>{class i{validateStyleProperty(t){return XE(t)}containsElement(t,n){return Zg(t,n)}getParentElement(t){return Ad(t)}query(t,n,r){return Kg(t,n,r)}computeStyle(t,n,r){return r||""}animate(t,n,r,s,o,a=[],l){return new Li(r,s)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})(),pr=class{static NOOP=new Td},mr=class{};var jE=1e3,Jg="{{",ZE="}}",Qg="ng-enter",cd="ng-leave",Ql="ng-trigger",rc=".ng-trigger",Bg="ng-animating",ud=".ng-animating";function si(i){if(typeof i=="number")return i;let e=i.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:hd(parseFloat(e[1]),e[2])}function hd(i,e){switch(e){case"s":return i*jE;default:return i}}function sc(i,e,t){return i.hasOwnProperty("duration")?i:KE(i,e,t)}function KE(i,e,t){let n=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,r,s=0,o="";if(typeof i=="string"){let a=i.match(n);if(a===null)return e.push(Ng(i)),{duration:0,delay:0,easing:""};r=hd(parseFloat(a[1]),a[2]);let l=a[3];l!=null&&(s=hd(parseFloat(l),a[4]));let c=a[5];c&&(o=c)}else r=i;if(!t){let a=!1,l=e.length;r<0&&(e.push(pE()),a=!0),s<0&&(e.push(mE()),a=!0),a&&e.splice(l,0,Ng(i))}return{duration:r,delay:s,easing:o}}function JE(i){return i.length?i[0]instanceof Map?i:i.map(e=>new Map(Object.entries(e))):[]}function zn(i,e,t){e.forEach((n,r)=>{let s=Cd(r);t&&!t.has(r)&&t.set(r,i.style[s]),i.style[s]=n})}function fr(i,e){e.forEach((t,n)=>{let r=Cd(n);i.style[r]=""})}function To(i){return Array.isArray(i)?i.length==1?i[0]:Lg(i):i}function QE(i,e,t){let n=e.params||{},r=e0(i);r.length&&r.forEach(s=>{n.hasOwnProperty(s)||t.push(gE(s))})}var dd=new RegExp(`${Jg}\\s*(.+?)\\s*${ZE}`,"g");function e0(i){let e=[];if(typeof i=="string"){let t;for(;t=dd.exec(i);)e.push(t[1]);dd.lastIndex=0}return e}function Ro(i,e,t){let n=`${i}`,r=n.replace(dd,(s,o)=>{let a=e[o];return a==null&&(t.push(yE(o)),a=""),a.toString()});return r==n?i:r}var ew=/-+([a-z0-9])/g;function Cd(i){return i.replace(ew,(...e)=>e[1].toUpperCase())}function tw(i,e){return i===0||e===0}function nw(i,e,t){if(t.size&&e.length){let n=e[0],r=[];if(t.forEach((s,o)=>{n.has(o)||r.push(o),n.set(o,s)}),r.length)for(let s=1;s<e.length;s++){let o=e[s];r.forEach(a=>o.set(a,Rd(i,a)))}}return e}function Qt(i,e,t){switch(e.type){case Ne.Trigger:return i.visitTrigger(e,t);case Ne.State:return i.visitState(e,t);case Ne.Transition:return i.visitTransition(e,t);case Ne.Sequence:return i.visitSequence(e,t);case Ne.Group:return i.visitGroup(e,t);case Ne.Animate:return i.visitAnimate(e,t);case Ne.Keyframes:return i.visitKeyframes(e,t);case Ne.Style:return i.visitStyle(e,t);case Ne.Reference:return i.visitReference(e,t);case Ne.AnimateChild:return i.visitAnimateChild(e,t);case Ne.AnimateRef:return i.visitAnimateRef(e,t);case Ne.Query:return i.visitQuery(e,t);case Ne.Stagger:return i.visitStagger(e,t);default:throw _E(e.type)}}function Rd(i,e){return window.getComputedStyle(i)[e]}var iw=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),oc=class extends mr{normalizePropertyName(e,t){return Cd(e)}normalizeStyleValue(e,t,n,r){let s="",o=n.toString().trim();if(iw.has(t)&&n!==0&&n!=="0")if(typeof n=="number")s="px";else{let a=n.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(vE(e,n))}return o+s}};var ac="*";function rw(i,e){let t=[];return typeof i=="string"?i.split(/\s*,\s*/).forEach(n=>sw(n,t,e)):t.push(i),t}function sw(i,e,t){if(i[0]==":"){let l=ow(i,t);if(typeof l=="function"){e.push(l);return}i=l}let n=i.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(n==null||n.length<4)return t.push(IE(i)),e;let r=n[1],s=n[2],o=n[3];e.push(kg(r,o));let a=r==ac&&o==ac;s[0]=="<"&&!a&&e.push(kg(o,r))}function ow(i,e){switch(i){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,n)=>parseFloat(n)>parseFloat(t);case":decrement":return(t,n)=>parseFloat(n)<parseFloat(t);default:return e.push(PE(i)),"* => *"}}var ec=new Set(["true","1"]),tc=new Set(["false","0"]);function kg(i,e){let t=ec.has(i)||tc.has(i),n=ec.has(e)||tc.has(e);return(r,s)=>{let o=i==ac||i==r,a=e==ac||e==s;return!o&&t&&typeof r=="boolean"&&(o=r?ec.has(i):tc.has(i)),!a&&n&&typeof s=="boolean"&&(a=s?ec.has(e):tc.has(e)),o&&a}}var t0=":self",aw=new RegExp(`s*${t0}s*,?`,"g");function n0(i,e,t,n){return new fd(i).build(e,t,n)}var zg="",fd=class{_driver;constructor(e){this._driver=e}build(e,t,n){let r=new pd(t);return this._resetContextStyleTimingState(r),Qt(this,To(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=zg,e.collectedStyles=new Map,e.collectedStyles.set(zg,new Map),e.currentTime=0}visitTrigger(e,t){let n=t.queryCount=0,r=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(xE()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==Ne.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,s.push(this.visitState(l,t))}),l.name=c}else if(a.type==Ne.Transition){let l=this.visitTransition(a,t);n+=l.queryCount,r+=l.depCount,o.push(l)}else t.errors.push(SE())}),{type:Ne.Trigger,name:e.name,states:s,transitions:o,queryCount:n,depCount:r,options:null}}visitState(e,t){let n=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(n.containsDynamicStyles){let s=new Set,o=r||{};n.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{e0(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(ME(e.name,[...s.values()]))}return{type:Ne.State,name:e.name,style:n,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let n=Qt(this,To(e.animation),t),r=rw(e.expr,t.errors);return{type:Ne.Transition,matchers:r,animation:n,queryCount:t.queryCount,depCount:t.depCount,options:dr(e.options)}}visitSequence(e,t){return{type:Ne.Sequence,steps:e.steps.map(n=>Qt(this,n,t)),options:dr(e.options)}}visitGroup(e,t){let n=t.currentTime,r=0,s=e.steps.map(o=>{t.currentTime=n;let a=Qt(this,o,t);return r=Math.max(r,t.currentTime),a});return t.currentTime=r,{type:Ne.Group,steps:s,options:dr(e.options)}}visitAnimate(e,t){let n=hw(e.timings,t.errors);t.currentAnimateTimings=n;let r,s=e.styles?e.styles:hs({});if(s.type==Ne.Keyframes)r=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let c={};n.easing&&(c.easing=n.easing),o=hs(c)}t.currentTime+=n.duration+n.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,r=l}return t.currentAnimateTimings=null,{type:Ne.Animate,timings:n,style:r,options:null}}visitStyle(e,t){let n=this._makeStyleAst(e,t);return this._validateStyleAst(n,t),n}_makeStyleAst(e,t){let n=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of r)typeof a=="string"?a===kn?n.push(a):t.errors.push(bE(a)):n.push(new Map(Object.entries(a)));let s=!1,o=null;return n.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let l of a.values())if(l.toString().indexOf(Jg)>=0){s=!0;break}}}),{type:Ne.Style,styles:n,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let n=t.currentAnimateTimings,r=t.currentTime,s=t.currentTime;n&&s>0&&(s-=n.duration+n.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),u=c.get(l),h=!0;u&&(s!=r&&s>=u.startTime&&r<=u.endTime&&(t.errors.push(EE(l,u.startTime,u.endTime,s,r)),h=!1),s=u.startTime),h&&c.set(l,{startTime:s,endTime:r}),t.options&&QE(a,t.options,t.errors)})})}visitKeyframes(e,t){let n={type:Ne.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(wE()),n;let r=1,s=0,o=[],a=!1,l=!1,c=0,u=e.steps.map(f=>{let w=this._makeStyleAst(f,t),E=w.offset!=null?w.offset:uw(w.styles),S=0;return E!=null&&(s++,S=w.offset=E),l=l||S<0||S>1,a=a||S<c,c=S,o.push(S),w});l&&t.errors.push(AE()),a&&t.errors.push(TE());let h=e.steps.length,d=0;s>0&&s<h?t.errors.push(CE()):s==0&&(d=r/(h-1));let p=h-1,g=t.currentTime,y=t.currentAnimateTimings,m=y.duration;return u.forEach((f,w)=>{let E=d>0?w==p?1:d*w:o[w],S=E*m;t.currentTime=g+y.delay+S,y.duration=S,this._validateStyleAst(f,t),f.offset=E,n.styles.push(f)}),n}visitReference(e,t){return{type:Ne.Reference,animation:Qt(this,To(e.animation),t),options:dr(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:Ne.AnimateChild,options:dr(e.options)}}visitAnimateRef(e,t){return{type:Ne.AnimateRef,animation:this.visitReference(e.animation,t),options:dr(e.options)}}visitQuery(e,t){let n=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=lw(e.selector);t.currentQuerySelector=n.length?n+" "+s:s,en(t.collectedStyles,t.currentQuerySelector,new Map);let a=Qt(this,To(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=n,{type:Ne.Query,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:dr(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(RE());let n=e.timings==="full"?{duration:0,delay:0,easing:"full"}:sc(e.timings,t.errors,!0);return{type:Ne.Stagger,animation:Qt(this,To(e.animation),t),timings:n,options:null}}};function lw(i){let e=!!i.split(/\s*,\s*/).find(t=>t==t0);return e&&(i=i.replace(aw,"")),i=i.replace(/@\*/g,rc).replace(/@\w+/g,t=>rc+"-"+t.slice(1)).replace(/:animating/g,ud),[i,e]}function cw(i){return i?ye({},i):null}var pd=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function uw(i){if(typeof i=="string")return null;let e=null;if(Array.isArray(i))i.forEach(t=>{if(t instanceof Map&&t.has("offset")){let n=t;e=parseFloat(n.get("offset")),n.delete("offset")}});else if(i instanceof Map&&i.has("offset")){let t=i;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function hw(i,e){if(i.hasOwnProperty("duration"))return i;if(typeof i=="number"){let s=sc(i,e).duration;return rd(s,0,"")}let t=i;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=rd(0,0,"");return s.dynamic=!0,s.strValue=t,s}let r=sc(t,e);return rd(r.duration,r.delay,r.easing)}function dr(i){return i?(i=ye({},i),i.params&&(i.params=cw(i.params))):i={},i}function rd(i,e,t){return{duration:i,delay:e,easing:t}}function Dd(i,e,t,n,r,s,o=null,a=!1){return{type:1,element:i,keyframes:e,preStyleProps:t,postStyleProps:n,duration:r,delay:s,totalTime:r+s,easing:o,subTimeline:a}}var Do=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let n=this._map.get(e);n||this._map.set(e,n=[]),n.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},dw=1,fw=":enter",pw=new RegExp(fw,"g"),mw=":leave",gw=new RegExp(mw,"g");function i0(i,e,t,n,r,s=new Map,o=new Map,a,l,c=[]){return new md().buildKeyframes(i,e,t,n,r,s,o,a,l,c)}var md=class{buildKeyframes(e,t,n,r,s,o,a,l,c,u=[]){c=c||new Do;let h=new gd(e,t,c,r,s,u,[]);h.options=l;let d=l.delay?si(l.delay):0;h.currentTimeline.delayNextStep(d),h.currentTimeline.setStyles([o],null,h.errors,l),Qt(this,n,h);let p=h.timelines.filter(g=>g.containsAnimation());if(p.length&&a.size){let g;for(let y=p.length-1;y>=0;y--){let m=p[y];if(m.element===t){g=m;break}}g&&!g.allowOnlyTimelineStyles()&&g.setStyles([a],null,h.errors,l)}return p.length?p.map(g=>g.buildKeyframes()):[Dd(t,[],[],[],0,d,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let n=t.subInstructions.get(t.element);if(n){let r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(n,r,r.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let n=t.createSubContext(e.options);n.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,n),this.visitReference(e.animation,n),t.transformIntoNewTimeline(n.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,n){for(let r of e){let s=r?.delay;if(s){let o=typeof s=="number"?s:si(Ro(s,r?.params??{},t.errors));n.delayNextStep(o)}}}_visitSubInstructions(e,t,n){let s=t.currentTimeline.currentTime,o=n.duration!=null?si(n.duration):null,a=n.delay!=null?si(n.delay):null;return o!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),Qt(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let n=t.subContextCount,r=t,s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==Ne.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=lc);let o=si(s.delay);r.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>Qt(this,o,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>n&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let n=[],r=t.currentTimeline.currentTime,s=e.options&&e.options.delay?si(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),Qt(this,o,a),r=Math.max(r,a.currentTimeline.currentTime),n.push(a.currentTimeline)}),n.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let n=e.strValue,r=t.params?Ro(n,t.params,t.errors):n;return sc(r,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let n=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;n.delay&&(t.incrementTime(n.delay),r.snapshotCurrentStyles());let s=e.style;s.type==Ne.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(n.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let n=t.currentTimeline,r=t.currentAnimateTimings;!r&&n.hasCurrentStyleProperties()&&n.forwardFrame();let s=r&&r.easing||e.easing;e.isEmptyStep?n.applyEmptyStep(s):n.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let n=t.currentAnimateTimings,r=t.currentTimeline.duration,s=n.duration,a=t.createSubContext().currentTimeline;a.easing=n.easing,e.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){let n=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?si(r.delay):0;s&&(t.previousNode.type===Ne.Style||n==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=lc);let o=n,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,u)=>{t.currentQueryIndex=u;let h=t.createSubContext(e.options,c);s&&h.delayNextStep(s),c===t.element&&(l=h.currentTimeline),Qt(this,e.animation,h),h.currentTimeline.applyStylesToKeyframe();let d=h.currentTimeline.currentTime;o=Math.max(o,d)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let n=t.parentContext,r=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=n.currentStaggerTime;break}let u=t.currentTimeline;l&&u.delayNextStep(l);let h=u.currentTime;Qt(this,e.animation,t),t.previousNode=e,n.currentStaggerTime=r.currentTime-h+(r.startTime-n.currentTimeline.startTime)}},lc={},gd=class i{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=lc;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,n,r,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=n,this._enterClassName=r,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=l||new cc(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let n=e,r=this.options;n.duration!=null&&(r.duration=si(n.duration)),n.delay!=null&&(r.delay=si(n.delay));let s=n.params;if(s){let o=r.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=Ro(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let n=e.params={};Object.keys(t).forEach(r=>{n[r]=t[r]})}}return e}createSubContext(e=null,t,n){let r=t||this.element,s=new i(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,n||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=lc,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,n){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(n??0)+e.delay,easing:""},s=new yd(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,n,r,s,o){let a=[];if(r&&a.push(this.element),e.length>0){e=e.replace(pw,"."+this._enterClassName),e=e.replace(gw,"."+this._leaveClassName);let l=n!=1,c=this._driver.query(this.element,e,l);n!==0&&(c=n<0?c.slice(c.length+n,c.length):c.slice(0,n)),a.push(...c)}return!s&&a.length==0&&o.push(DE(t)),a}},cc=class i{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,n,r){this._driver=e,this.element=t,this.startTime=n,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new i(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=dw,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,n]of this._globalTimelineStyles)this._backFill.set(t,n||kn),this._currentKeyframe.set(t,kn);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,n,r){t&&this._previousKeyframe.set("easing",t);let s=r&&r.params||{},o=yw(e,this._globalTimelineStyles);for(let[a,l]of o){let c=Ro(l,s,n);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??kn),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,n)=>{let r=this._styleSummary.get(n);(!r||t.time>r.time)&&this._updateStyle(n,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,n=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((u,h)=>{u===Jl?e.add(h):u===kn&&t.add(h)}),n||c.set("offset",l/this.duration),r.push(c)});let s=[...e.values()],o=[...t.values()];if(n){let a=r[0],l=new Map(a);a.set("offset",0),l.set("offset",1),r=[a,l]}return Dd(this.element,r,s,o,this.duration,this.startTime,this.easing,!1)}},yd=class extends cc{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,n,r,s,o,a=!1){super(e,t,o.delay),this.keyframes=n,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:n,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=n+t,a=t/o,l=new Map(e[0]);l.set("offset",0),s.push(l);let c=new Map(e[0]);c.set("offset",Vg(a)),s.push(c);let u=e.length-1;for(let h=1;h<=u;h++){let d=new Map(e[h]),p=d.get("offset"),g=t+p*n;d.set("offset",Vg(g/o)),s.push(d)}n=o,t=0,r="",e=s}return Dd(this.element,e,this.preStyleProps,this.postStyleProps,n,t,r,!0)}};function Vg(i,e=3){let t=Math.pow(10,e-1);return Math.round(i*t)/t}function yw(i,e){let t=new Map,n;return i.forEach(r=>{if(r==="*"){n??=e.keys();for(let s of n)t.set(s,kn)}else for(let[s,o]of r)t.set(s,o)}),t}function Hg(i,e,t,n,r,s,o,a,l,c,u,h,d){return{type:0,element:i,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:n,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:h,errors:d}}var sd={},uc=class{_triggerName;ast;_stateStyles;constructor(e,t,n){this._triggerName=e,this.ast=t,this._stateStyles=n}match(e,t,n,r){return _w(this.ast.matchers,e,t,n,r)}buildStyles(e,t,n){let r=this._stateStyles.get("*");return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,n):new Map}build(e,t,n,r,s,o,a,l,c,u){let h=[],d=this.ast.options&&this.ast.options.params||sd,p=a&&a.params||sd,g=this.buildStyles(n,p,h),y=l&&l.params||sd,m=this.buildStyles(r,y,h),f=new Set,w=new Map,E=new Map,S=r==="void",P={params:r0(y,d),delay:this.ast.options?.delay},R=u?[]:i0(e,t,this.ast.animation,s,o,g,m,P,c,h),A=0;return R.forEach(O=>{A=Math.max(O.duration+O.delay,A)}),h.length?Hg(t,this._triggerName,n,r,S,g,m,[],[],w,E,A,h):(R.forEach(O=>{let M=O.element,x=en(w,M,new Set);O.preStyleProps.forEach($=>x.add($));let C=en(E,M,new Set);O.postStyleProps.forEach($=>C.add($)),M!==t&&f.add(M)}),Hg(t,this._triggerName,n,r,S,g,m,R,[...f.values()],w,E,A))}};function _w(i,e,t,n,r){return i.some(s=>s(e,t,n,r))}function r0(i,e){let t=ye({},e);return Object.entries(i).forEach(([n,r])=>{r!=null&&(t[n]=r)}),t}var _d=class{styles;defaultParams;normalizer;constructor(e,t,n){this.styles=e,this.defaultParams=t,this.normalizer=n}buildStyles(e,t){let n=new Map,r=r0(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=Ro(o,r,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),n.set(a,o)})}),n}};function vw(i,e,t){return new vd(i,e,t)}var vd=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,n){this.name=e,this.ast=t,this._normalizer=n,t.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new _d(r.style,s,n))}),Gg(this.states,"true","1"),Gg(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new uc(e,r,this.states))}),this.fallbackTransition=xw(e,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,n,r){return this.transitionFactories.find(o=>o.match(e,t,n,r))||null}matchStyles(e,t,n){return this.fallbackTransition.buildStyles(e,t,n)}};function xw(i,e,t){let n=[(o,a)=>!0],r={type:Ne.Sequence,steps:[],options:null},s={type:Ne.Transition,animation:r,matchers:n,options:null,queryCount:0,depCount:0};return new uc(i,s,e)}function Gg(i,e,t){i.has(e)?i.has(t)||i.set(t,i.get(e)):i.has(t)&&i.set(e,i.get(t))}var Sw=new Do,xd=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,n){this.bodyNode=e,this._driver=t,this._normalizer=n}register(e,t){let n=[],r=[],s=n0(this._driver,t,n,r);if(n.length)throw NE(n);this._animations.set(e,s)}_buildPlayer(e,t,n){let r=e.element,s=jg(this._normalizer,e.keyframes,t,n);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,n={}){let r=[],s=this._animations.get(e),o,a=new Map;if(s?(o=i0(this._driver,t,s,Qg,cd,new Map,new Map,n,Sw,r),o.forEach(u=>{let h=en(a,u.element,new Map);u.postStyleProps.forEach(d=>h.set(d,null))})):(r.push(OE()),o=[]),r.length)throw UE(r);a.forEach((u,h)=>{u.forEach((d,p)=>{u.set(p,this._driver.computeStyle(h,p,kn))})});let l=o.map(u=>{let h=a.get(u.element);return this._buildPlayer(u,new Map,h)}),c=Fi(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let n=this.players.indexOf(t);n>=0&&this.players.splice(n,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw BE(e);return t}listen(e,t,n,r){let s=wd(t,"","","");return Ed(this._getPlayer(e),n,s,r),()=>{}}command(e,t,n,r){if(n=="register"){this.register(e,r[0]);return}if(n=="create"){let o=r[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(n){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e);break}}},Wg="ng-animate-queued",Mw=".ng-animate-queued",od="ng-animate-disabled",bw=".ng-animate-disabled",Ew="ng-star-inserted",ww=".ng-star-inserted",Aw=[],s0={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},Tw={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},En="__ng_removed",Io=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let n=e&&e.hasOwnProperty("value"),r=n?e.value:e;if(this.value=Rw(r),n){let s=e,{value:o}=s,a=Bd(s,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let n=this.options.params;Object.keys(t).forEach(r=>{n[r]==null&&(n[r]=t[r])})}}},Co="void",ad=new Io(Co),Sd=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,n){this.id=e,this.hostElement=t,this._engine=n,this._hostClassName="ng-tns-"+e,dn(t,this._hostClassName)}listen(e,t,n,r){if(!this._triggers.has(t))throw kE(n,t);if(n==null||n.length==0)throw zE(t);if(!Dw(n))throw VE(n,t);let s=en(this._elementListeners,e,[]),o={name:t,phase:n,callback:r};s.push(o);let a=en(this._engine.statesByElement,e,new Map);return a.has(t)||(dn(e,Ql),dn(e,Ql+"-"+t),a.set(t,ad)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw HE(e);return t}trigger(e,t,n,r=!0){let s=this._getTrigger(t),o=new Po(this.id,t,e),a=this._engine.statesByElement.get(e);a||(dn(e,Ql),dn(e,Ql+"-"+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),c=new Io(n,this.id);if(!(n&&n.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=ad),!(c.value===Co)&&l.value===c.value){if(!Lw(l.params,c.params)){let y=[],m=s.matchStyles(l.value,l.params,y),f=s.matchStyles(c.value,c.params,y);y.length?this._engine.reportError(y):this._engine.afterFlush(()=>{fr(e,m),zn(e,f)})}return}let d=en(this._engine.playersByElement,e,[]);d.forEach(y=>{y.namespaceId==this.id&&y.triggerName==t&&y.queued&&y.destroy()});let p=s.matchTransition(l.value,c.value,e,c.params),g=!1;if(!p){if(!r)return;p=s.fallbackTransition,g=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:p,fromState:l,toState:c,player:o,isFallbackTransition:g}),g||(dn(e,Wg),o.onStart(()=>{ds(e,Wg)})),o.onDone(()=>{let y=this.players.indexOf(o);y>=0&&this.players.splice(y,1);let m=this._engine.playersByElement.get(e);if(m){let f=m.indexOf(o);f>=0&&m.splice(f,1)}}),this.players.push(o),d.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,n)=>{this._elementListeners.set(n,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(n=>n.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let n=this._engine.driver.query(e,rc,!0);n.forEach(r=>{if(r[En])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(o=>o.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>n.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,n,r){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let u=this.trigger(e,c,Co,r);u&&a.push(u)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),n&&Fi(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),n=this._engine.statesByElement.get(e);if(t&&n){let r=new Set;t.forEach(s=>{let o=s.name;if(r.has(o))return;r.add(o);let l=this._triggers.get(o).fallbackTransition,c=n.get(o)||ad,u=new Io(Co),h=new Po(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:u,player:h,isFallbackTransition:!0})})}}removeNode(e,t){let n=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(n.totalAnimations){let s=n.players.length?n.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let o=e;for(;o=o.parentNode;)if(n.statesByElement.get(o)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)n.markElementAsRemoved(this.id,e,!1,t);else{let s=e[En];(!s||s===s0)&&(n.afterFlush(()=>this.clearElementCache(e)),n.destroyInnerAnimations(e),n._onRemovalComplete(e,t))}}insertNode(e,t){dn(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(n=>{let r=n.player;if(r.destroyed)return;let s=n.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==n.triggerName){let l=wd(s,n.triggerName,n.fromState.value,n.toState.value);l._data=e,Ed(n.player,a.phase,l,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(n)}),this._queue=[],t.sort((n,r)=>{let s=n.transition.ast.depCount,o=r.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(n.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},Md=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,n){this.bodyNode=e,this.driver=t,this._normalizer=n}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(n=>{n.queued&&e.push(n)})}),e}createNamespace(e,t){let n=new Sd(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(n,t):(this.newHostElements.set(t,n),this.collectEnterElement(t)),this._namespaceLookup[e]=n}_balanceNamespaceList(e,t){let n=this._namespaceList,r=this.namespacesByHostElement;if(n.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=r.get(a);if(l){let c=n.indexOf(l);n.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||n.unshift(e)}else n.push(e);return r.set(t,e),e}register(e,t){let n=this._namespaceLookup[e];return n||(n=this.createNamespace(e,t)),n}registerTrigger(e,t,n){let r=this._namespaceLookup[e];r&&r.register(t,n)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let n=this._fetchNamespace(e);this.namespacesByHostElement.delete(n.hostElement);let r=this._namespaceList.indexOf(n);r>=0&&this._namespaceList.splice(r,1),n.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,n=this.statesByElement.get(e);if(n){for(let r of n.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&t.add(s)}}return t}trigger(e,t,n,r){if(nc(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,n,r),!0}return!1}insertNode(e,t,n,r){if(!nc(t))return;let s=t[En];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,n)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),dn(e,od)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),ds(e,od))}removeNode(e,t,n){if(nc(t)){let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,n):this.markElementAsRemoved(e,t,!1,n);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,n)}else this._onRemovalComplete(t,n)}markElementAsRemoved(e,t,n,r,s){this.collectedLeaveElements.push(t),t[En]={namespaceId:e,setForRemoval:r,hasAnimation:n,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,n,r,s){return nc(t)?this._fetchNamespace(e).listen(t,n,r,s):()=>{}}_buildInstruction(e,t,n,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,n,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,rc,!0);t.forEach(n=>this.destroyActiveAnimationsForElement(n)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,ud,!0),t.forEach(n=>this.finishActiveQueriedAnimationOnElement(n)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(n=>{n.queued?n.markedForDestroy=!0:n.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(n=>n.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Fi(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[En];if(t&&t.setForRemoval){if(e[En]=s0,t.namespaceId){this.destroyInnerAnimations(e);let n=this._fetchNamespace(t.namespaceId);n&&n.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(od)&&this.markElementAsDisabled(e,!1),this.driver.query(e,bw,!0).forEach(n=>{this.markElementAsDisabled(n,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((n,r)=>this._balanceNamespaceList(n,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let n=0;n<this.collectedEnterElements.length;n++){let r=this.collectedEnterElements[n];dn(r,Ew)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let n=[];try{t=this._flushAnimations(n,e)}finally{for(let r=0;r<n.length;r++)n[r]()}}else for(let n=0;n<this.collectedLeaveElements.length;n++){let r=this.collectedLeaveElements[n];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(n=>n()),this._flushFns=[],this._whenQuietFns.length){let n=this._whenQuietFns;this._whenQuietFns=[],t.length?Fi(t).onDone(()=>{n.forEach(r=>r())}):n.forEach(r=>r())}}reportError(e){throw GE(e)}_flushAnimations(e,t){let n=new Do,r=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,u=new Set;this.disabledNodes.forEach(N=>{u.add(N);let U=this.driver.query(N,Mw,!0);for(let L=0;L<U.length;L++)u.add(U[L])});let h=this.bodyNode,d=Array.from(this.statesByElement.keys()),p=Xg(d,this.collectedEnterElements),g=new Map,y=0;p.forEach((N,U)=>{let L=Qg+y++;g.set(U,L),N.forEach(j=>dn(j,L))});let m=[],f=new Set,w=new Set;for(let N=0;N<this.collectedLeaveElements.length;N++){let U=this.collectedLeaveElements[N],L=U[En];L&&L.setForRemoval&&(m.push(U),f.add(U),L.hasAnimation?this.driver.query(U,ww,!0).forEach(j=>f.add(j)):w.add(U))}let E=new Map,S=Xg(d,Array.from(f));S.forEach((N,U)=>{let L=cd+y++;E.set(U,L),N.forEach(j=>dn(j,L))}),e.push(()=>{p.forEach((N,U)=>{let L=g.get(U);N.forEach(j=>ds(j,L))}),S.forEach((N,U)=>{let L=E.get(U);N.forEach(j=>ds(j,L))}),m.forEach(N=>{this.processLeaveNode(N)})});let P=[],R=[];for(let N=this._namespaceList.length-1;N>=0;N--)this._namespaceList[N].drainQueuedTransitions(t).forEach(L=>{let j=L.player,ne=L.element;if(P.push(j),this.collectedEnterElements.length){let ee=ne[En];if(ee&&ee.setForMove){if(ee.previousTriggersValues&&ee.previousTriggersValues.has(L.triggerName)){let _e=ee.previousTriggersValues.get(L.triggerName),Pe=this.statesByElement.get(L.element);if(Pe&&Pe.has(L.triggerName)){let we=Pe.get(L.triggerName);we.value=_e,Pe.set(L.triggerName,we)}}j.destroy();return}}let he=!h||!this.driver.containsElement(h,ne),Ee=E.get(ne),Ge=g.get(ne),H=this._buildInstruction(L,n,Ge,Ee,he);if(H.errors&&H.errors.length){R.push(H);return}if(he){j.onStart(()=>fr(ne,H.fromStyles)),j.onDestroy(()=>zn(ne,H.toStyles)),r.push(j);return}if(L.isFallbackTransition){j.onStart(()=>fr(ne,H.fromStyles)),j.onDestroy(()=>zn(ne,H.toStyles)),r.push(j);return}let ie=[];H.timelines.forEach(ee=>{ee.stretchStartingKeyframe=!0,this.disabledNodes.has(ee.element)||ie.push(ee)}),H.timelines=ie,n.append(ne,H.timelines);let ge={instruction:H,player:j,element:ne};o.push(ge),H.queriedElements.forEach(ee=>en(a,ee,[]).push(j)),H.preStyleProps.forEach((ee,_e)=>{if(ee.size){let Pe=l.get(_e);Pe||l.set(_e,Pe=new Set),ee.forEach((we,at)=>Pe.add(at))}}),H.postStyleProps.forEach((ee,_e)=>{let Pe=c.get(_e);Pe||c.set(_e,Pe=new Set),ee.forEach((we,at)=>Pe.add(at))})});if(R.length){let N=[];R.forEach(U=>{N.push(WE(U.triggerName,U.errors))}),P.forEach(U=>U.destroy()),this.reportError(N)}let A=new Map,O=new Map;o.forEach(N=>{let U=N.element;n.has(U)&&(O.set(U,U),this._beforeAnimationBuild(N.player.namespaceId,N.instruction,A))}),r.forEach(N=>{let U=N.element;this._getPreviousPlayers(U,!1,N.namespaceId,N.triggerName,null).forEach(j=>{en(A,U,[]).push(j),j.destroy()})});let M=m.filter(N=>Yg(N,l,c)),x=new Map;qg(x,this.driver,w,c,kn).forEach(N=>{Yg(N,l,c)&&M.push(N)});let $=new Map;p.forEach((N,U)=>{qg($,this.driver,new Set(N),l,Jl)}),M.forEach(N=>{let U=x.get(N),L=$.get(N);x.set(N,new Map([...U?.entries()??[],...L?.entries()??[]]))});let G=[],Z=[],K={};o.forEach(N=>{let{element:U,player:L,instruction:j}=N;if(n.has(U)){if(u.has(U)){L.onDestroy(()=>zn(U,j.toStyles)),L.disabled=!0,L.overrideTotalTime(j.totalTime),r.push(L);return}let ne=K;if(O.size>1){let Ee=U,Ge=[];for(;Ee=Ee.parentNode;){let H=O.get(Ee);if(H){ne=H;break}Ge.push(Ee)}Ge.forEach(H=>O.set(H,ne))}let he=this._buildAnimation(L.namespaceId,j,A,s,$,x);if(L.setRealPlayer(he),ne===K)G.push(L);else{let Ee=this.playersByElement.get(ne);Ee&&Ee.length&&(L.parentPlayer=Fi(Ee)),r.push(L)}}else fr(U,j.fromStyles),L.onDestroy(()=>zn(U,j.toStyles)),Z.push(L),u.has(U)&&r.push(L)}),Z.forEach(N=>{let U=s.get(N.element);if(U&&U.length){let L=Fi(U);N.setRealPlayer(L)}}),r.forEach(N=>{N.parentPlayer?N.syncPlayerEvents(N.parentPlayer):N.destroy()});for(let N=0;N<m.length;N++){let U=m[N],L=U[En];if(ds(U,cd),L&&L.hasAnimation)continue;let j=[];if(a.size){let he=a.get(U);he&&he.length&&j.push(...he);let Ee=this.driver.query(U,ud,!0);for(let Ge=0;Ge<Ee.length;Ge++){let H=a.get(Ee[Ge]);H&&H.length&&j.push(...H)}}let ne=j.filter(he=>!he.destroyed);ne.length?Iw(this,U,ne):this.processLeaveNode(U)}return m.length=0,G.forEach(N=>{this.players.push(N),N.onDone(()=>{N.destroy();let U=this.players.indexOf(N);this.players.splice(U,1)}),N.play()}),G}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,n,r,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!s||s==Co;a.forEach(c=>{c.queued||!l&&c.triggerName!=r||o.push(c)})}}return(n||r)&&(o=o.filter(a=>!(n&&n!=a.namespaceId||r&&r!=a.triggerName))),o}_beforeAnimationBuild(e,t,n){let r=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:r;for(let l of t.timelines){let c=l.element,u=c!==s,h=en(n,c,[]);this._getPreviousPlayers(c,u,o,a,t.toState).forEach(p=>{let g=p.getRealPlayer();g.beforeDestroy&&g.beforeDestroy(),p.destroy(),h.push(p)})}fr(s,t.fromStyles)}_buildAnimation(e,t,n,r,s,o){let a=t.triggerName,l=t.element,c=[],u=new Set,h=new Set,d=t.timelines.map(g=>{let y=g.element;u.add(y);let m=y[En];if(m&&m.removedBeforeQueried)return new Li(g.duration,g.delay);let f=y!==l,w=Pw((n.get(y)||Aw).map(A=>A.getRealPlayer())).filter(A=>{let O=A;return O.element?O.element===y:!1}),E=s.get(y),S=o.get(y),P=jg(this._normalizer,g.keyframes,E,S),R=this._buildPlayer(g,P,w);if(g.subTimeline&&r&&h.add(y),f){let A=new Po(e,a,y);A.setRealPlayer(R),c.push(A)}return R});c.forEach(g=>{en(this.playersByQueriedElement,g.element,[]).push(g),g.onDone(()=>Cw(this.playersByQueriedElement,g.element,g))}),u.forEach(g=>dn(g,Bg));let p=Fi(d);return p.onDestroy(()=>{u.forEach(g=>ds(g,Bg)),zn(l,t.toStyles)}),h.forEach(g=>{en(r,g,[]).push(p)}),p}_buildPlayer(e,t,n){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,n):new Li(e.duration,e.delay)}},Po=class{namespaceId;triggerName;element;_player=new Li;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,n){this.namespaceId=e,this.triggerName=t,this.element=n}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,n)=>{t.forEach(r=>Ed(e,n,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){en(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function Cw(i,e,t){let n=i.get(e);if(n){if(n.length){let r=n.indexOf(t);n.splice(r,1)}n.length==0&&i.delete(e)}return n}function Rw(i){return i??null}function nc(i){return i&&i.nodeType===1}function Dw(i){return i=="start"||i=="done"}function $g(i,e){let t=i.style.display;return i.style.display=e??"none",t}function qg(i,e,t,n,r){let s=[];t.forEach(l=>s.push($g(l)));let o=[];n.forEach((l,c)=>{let u=new Map;l.forEach(h=>{let d=e.computeStyle(c,h,r);u.set(h,d),(!d||d.length==0)&&(c[En]=Tw,o.push(c))}),i.set(c,u)});let a=0;return t.forEach(l=>$g(l,s[a++])),o}function Xg(i,e){let t=new Map;if(i.forEach(a=>t.set(a,[])),e.length==0)return t;let n=1,r=new Set(e),s=new Map;function o(a){if(!a)return n;let l=s.get(a);if(l)return l;let c=a.parentNode;return t.has(c)?l=c:r.has(c)?l=n:l=o(c),s.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==n&&t.get(l).push(a)}),t}function dn(i,e){i.classList?.add(e)}function ds(i,e){i.classList?.remove(e)}function Iw(i,e,t){Fi(t).onDone(()=>i.processLeaveNode(e))}function Pw(i){let e=[];return o0(i,e),e}function o0(i,e){for(let t=0;t<i.length;t++){let n=i[t];n instanceof Ao?o0(n.players,e):e.push(n)}}function Lw(i,e){let t=Object.keys(i),n=Object.keys(e);if(t.length!=n.length)return!1;for(let r=0;r<t.length;r++){let s=t[r];if(!e.hasOwnProperty(s)||i[s]!==e[s])return!1}return!0}function Yg(i,e,t){let n=t.get(i);if(!n)return!1;let r=e.get(i);return r?n.forEach(s=>r.add(s)):e.set(i,n),t.delete(i),!0}var fs=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,n){this._driver=t,this._normalizer=n,this._transitionEngine=new Md(e.body,t,n),this._timelineEngine=new xd(e.body,t,n),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(e,t,n,r,s){let o=e+"-"+r,a=this._triggerCache[o];if(!a){let l=[],c=[],u=n0(this._driver,s,l,c);if(l.length)throw LE(r,l);a=vw(r,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,r,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,n,r){this._transitionEngine.insertNode(e,t,n,r)}onRemove(e,t,n){this._transitionEngine.removeNode(e,t,n)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,n,r){if(n.charAt(0)=="@"){let[s,o]=Og(n),a=r;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,n,r)}listen(e,t,n,r,s){if(n.charAt(0)=="@"){let[o,a]=Og(n);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,n,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function Fw(i,e){let t=null,n=null;return Array.isArray(e)&&e.length?(t=ld(e[0]),e.length>1&&(n=ld(e[e.length-1]))):e instanceof Map&&(t=ld(e)),t||n?new Nw(i,t,n):null}var Nw=(()=>{class i{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,n,r){this._element=t,this._startStyles=n,this._endStyles=r;let s=i.initialStylesByElement.get(t);s||i.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&zn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(zn(this._element,this._initialStyles),this._endStyles&&(zn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(i.initialStylesByElement.delete(this._element),this._startStyles&&(fr(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(fr(this._element,this._endStyles),this._endStyles=null),zn(this._element,this._initialStyles),this._state=3)}}return i})();function ld(i){let e=null;return i.forEach((t,n)=>{Ow(n)&&(e=e||new Map,e.set(n,t))}),e}function Ow(i){return i==="display"||i==="position"}var hc=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,n,r){this.element=e,this.keyframes=t,this.options=n,this._specialStyles=r,this._duration=n.duration,this._delay=n.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map;let t=()=>this._onFinish();this.domPlayer.addEventListener("finish",t),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",t)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(n=>{t.push(Object.fromEntries(n))}),t}_triggerWebAnimation(e,t,n){return e.animate(this._convertKeyframesToObject(t),n)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((n,r)=>{r!=="offset"&&e.set(r,this._finished?n:Rd(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(n=>n()),t.length=0}},dc=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return Zg(e,t)}getParentElement(e){return Ad(e)}query(e,t,n){return Kg(e,t,n)}computeStyle(e,t,n){return Rd(e,t)}animate(e,t,n,r,s,o=[]){let a=r==0?"both":"forwards",l={duration:n,delay:r,fill:a};s&&(l.easing=s);let c=new Map,u=o.filter(p=>p instanceof hc);tw(n,r)&&u.forEach(p=>{p.currentSnapshot.forEach((g,y)=>c.set(y,g))});let h=JE(t).map(p=>new Map(p));h=nw(e,h,c);let d=Fw(e,h);return new hc(e,h,l,d)}};var ic="@",a0="@.disabled",fc=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,n,r){this.namespaceId=e,this.delegate=t,this.engine=n,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,n,r=!0){this.delegate.insertBefore(e,t,n),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,n){this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,n,r){this.delegate.setAttribute(e,t,n,r)}removeAttribute(e,t,n){this.delegate.removeAttribute(e,t,n)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,n,r){this.delegate.setStyle(e,t,n,r)}removeStyle(e,t,n){this.delegate.removeStyle(e,t,n)}setProperty(e,t,n){t.charAt(0)==ic&&t==a0?this.disableAnimations(e,!!n):this.delegate.setProperty(e,t,n)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,n,r){return this.delegate.listen(e,t,n,r)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},bd=class extends fc{factory;constructor(e,t,n,r,s){super(t,n,r,s),this.factory=e,this.namespaceId=t}setProperty(e,t,n){t.charAt(0)==ic?t.charAt(1)=="."&&t==a0?(n=n===void 0?!0:!!n,this.disableAnimations(e,n)):this.engine.process(this.namespaceId,e,t.slice(1),n):this.delegate.setProperty(e,t,n)}listen(e,t,n,r){if(t.charAt(0)==ic){let s=Uw(e),o=t.slice(1),a="";return o.charAt(0)!=ic&&([o,a]=Bw(o)),this.engine.listen(this.namespaceId,s,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,n,l)})}return this.delegate.listen(e,t,n,r)}};function Uw(i){switch(i){case"body":return document.body;case"document":return document;case"window":return window;default:return i}}function Bw(i){let e=i.indexOf("."),t=i.substring(0,e),n=i.slice(e+1);return[t,n]}var pc=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,n){this.delegate=e,this.engine=t,this._zone=n,t.onRemovalComplete=(r,s)=>{s?.removeChild(null,r)}}createRenderer(e,t){let n="",r=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,u=c.get(r);if(!u){let h=()=>c.delete(r);u=new fc(n,r,this.engine,h),c.set(r,u)}return u}let s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new bd(this,o,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,n){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(n));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),r.push([t,n])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var zw=(()=>{class i extends fs{constructor(t,n,r){super(t,n,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(n){return new(n||i)(Ve(It),Ve(pr),Ve(mr))};static \u0275prov=ke({token:i,factory:i.\u0275fac})}return i})();function Vw(){return new oc}function Hw(i,e,t){return new pc(i,e,t)}var c0=[{provide:mr,useFactory:Vw},{provide:fs,useClass:zw},{provide:Uo,useFactory:Hw,deps:[Xo,fs,sn]}],l0=[{provide:pr,useFactory:()=>new dc},{provide:Ic,useValue:"BrowserAnimations"},...c0],Gw=[{provide:pr,useClass:Td},{provide:Ic,useValue:"NoopAnimations"},...c0],u0=(()=>{class i{static withConfig(t){return{ngModule:i,providers:t.disableAnimations?Gw:l0}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=hi({type:i});static \u0275inj=li({providers:l0,imports:[jo]})}return i})();var h0={providers:[Ac(jo),Ac(u0),Op(Hp),Or,Mf,us]};var mc=class i{animationCompleteSubject=new zt(!1);animationComplete$=this.animationCompleteSubject.asObservable();setAnimationComplete(){this.animationCompleteSubject.next(!0)}resetAnimation(){this.animationCompleteSubject.next(!1)}getCurrentState(){return this.animationCompleteSubject.value}static \u0275fac=function(t){return new(t||i)};static \u0275prov=ke({token:i,factory:i.\u0275fac,providedIn:"root"})};var gc=class i{constructor(e){this.animationState=e}title="ige511-web";onAnimationComplete(){let e=document.getElementById("static-content");e&&e.classList.add("hidden"),this.animationState.setAnimationComplete()}static \u0275fac=function(t){return new(t||i)(Tt(mc))};static \u0275cmp=ui({type:i,selectors:[["app-root"]],decls:14,vars:3,consts:[["id","static-content"],[3,"animationComplete"],[1,"content-wrapper"]],template:function(t,n){t&1&&(Dt(0,"main")(1,"div",0)(2,"h1"),on(3,"Bienvenue sur mon site"),Ot()(),Dt(4,"app-three-box",1),br("animationComplete",function(){return n.onAnimationComplete()}),Ot(),Dt(5,"div",2),yf(6,"async"),Tn(7,"app-header"),Dt(8,"h1"),on(9,"rdvptrwjeiptwpes"),Ot(),Tn(10,"router-outlet"),Dt(11,"footer")(12,"p"),on(13,"\xA9 Roussel roua4409"),Ot()()()()),t&2&&(of(5),ff("@contentFade",_f(6,1,n.animationState.animationComplete$)?"visible":"hidden"))},dependencies:[Wo,Pf,Fu,Or,us],styles:['body[_ngcontent-%COMP%]{margin:0;display:flex;height:100vh}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{position:fixed;top:0;height:100%;width:200px;background-color:#ff00004d}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{right:0}.center[_ngcontent-%COMP%]{margin-left:20%;margin-right:20%;width:60%;background-color:#ffff0050;height:100%}@media (max-width: 800px){.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{display:none}.center[_ngcontent-%COMP%]{margin:0;width:100%}}#static-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;text-align:center;font-size:2rem;color:#333;transition:opacity 1s ease-out}#static-content.hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}h1[_ngcontent-%COMP%]{font-family:Arial,sans-serif;font-size:2.5rem;color:#ffec42;text-align:center;margin:40px 0;padding:0;font-weight:700;letter-spacing:2px;text-shadow:0 0 10px rgba(255,236,66,.3),0 0 20px rgba(255,236,66,.2);position:relative;transition:transform .3s ease}h1[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:-10px;left:50%;transform:translate(-50%);width:60px;height:2px;background:linear-gradient(to right,transparent,rgba(255,236,66,.8),transparent)}h1[_ngcontent-%COMP%]:hover{transform:scale(1.02);text-shadow:0 0 15px rgba(255,236,66,.4),0 0 30px rgba(255,236,66,.3)}@media (max-width: 768px){h1[_ngcontent-%COMP%]{font-size:1.8rem;margin:30px 0;letter-spacing:1px}}footer[_ngcontent-%COMP%]{background:linear-gradient(to right,#ffec421a,#ffec4233,#ffec421a);padding:20px 0;text-align:center;position:relative;width:100%;margin-top:50px;border-top:2px solid rgba(255,236,66,.3)}footer[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(to right,transparent,rgba(255,236,66,.5),transparent)}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Arial,sans-serif;color:#ffec42;font-size:14px;margin:0;padding:0;letter-spacing:1px;text-shadow:0 0 10px rgba(255,236,66,.3)}footer[_ngcontent-%COMP%]:hover{background:linear-gradient(to right,#ffec4226,#ffec4240,#ffec4226);transition:background .3s ease}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:hover{transform:scale(1.02);transition:transform .3s ease}@media (max-width: 768px){footer[_ngcontent-%COMP%]{padding:15px 0}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px}}'],data:{animation:[Ig("contentFade",[nd("hidden",hs({opacity:.001,transform:"translateY(20px)",background:"none"})),nd("visible",hs({opacity:1,transform:"translateY(0)",background:"none"})),Fg("hidden => visible",[Pg("0.8s cubic-bezier(0.6, 0.0, 0.2, 1)")])])]}})};Wf(gc,h0).catch(i=>console.error(i));
