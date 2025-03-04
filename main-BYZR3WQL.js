var pM=Object.defineProperty,mM=Object.defineProperties;var gM=Object.getOwnPropertyDescriptors;var Sl=Object.getOwnPropertySymbols;var Kg=Object.prototype.hasOwnProperty,Qg=Object.prototype.propertyIsEnumerable;var Zg=(n,e,t)=>e in n?pM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,me=(n,e)=>{for(var t in e||={})Kg.call(e,t)&&Zg(n,t,e[t]);if(Sl)for(var t of Sl(e))Qg.call(e,t)&&Zg(n,t,e[t]);return n},Mt=(n,e)=>mM(n,gM(e));var Jg=(n,e)=>{var t={};for(var i in n)Kg.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&Sl)for(var i of Sl(n))e.indexOf(i)<0&&Qg.call(n,i)&&(t[i]=n[i]);return t};var bs=(n,e,t)=>new Promise((i,r)=>{var s=l=>{try{a(t.next(l))}catch(c){r(c)}},o=l=>{try{a(t.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(s,o);a((t=t.apply(n,e)).next())});function yM(n,e){return Object.is(n,e)}var Ft=null,El=!1,uf=1,Ts=Symbol("SIGNAL");function ut(n){let e=Ft;return Ft=n,e}function ty(){return Ft}var Ml={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function ny(n){if(El)throw new Error("");if(Ft===null)return;Ft.consumerOnSignalRead(n);let e=Ft.nextProducerIndex++;if(bl(Ft),e<Ft.producerNode.length&&Ft.producerNode[e]!==n&&Wo(Ft)){let t=Ft.producerNode[e];wl(t,Ft.producerIndexOfThis[e])}Ft.producerNode[e]!==n&&(Ft.producerNode[e]=n,Ft.producerIndexOfThis[e]=Wo(Ft)?sy(n,Ft,e):0),Ft.producerLastReadVersion[e]=n.version}function vM(){uf++}function _M(n){if(!(Wo(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===uf)){if(!n.producerMustRecompute(n)&&!ff(n)){ey(n);return}n.producerRecomputeValue(n),ey(n)}}function iy(n){if(n.liveConsumerNode===void 0)return;let e=El;El=!0;try{for(let t of n.liveConsumerNode)t.dirty||SM(t)}finally{El=e}}function xM(){return Ft?.consumerAllowSignalWrites!==!1}function SM(n){n.dirty=!0,iy(n),n.consumerMarkedDirty?.(n)}function ey(n){n.dirty=!1,n.lastCleanEpoch=uf}function df(n){return n&&(n.nextProducerIndex=0),ut(n)}function ry(n,e){if(ut(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Wo(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)wl(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function ff(n){bl(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(_M(t),i!==t.version))return!0}return!1}function hf(n){if(bl(n),Wo(n))for(let e=0;e<n.producerNode.length;e++)wl(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function sy(n,e,t){if(oy(n),n.liveConsumerNode.length===0&&ay(n))for(let i=0;i<n.producerNode.length;i++)n.producerIndexOfThis[i]=sy(n.producerNode[i],n,i);return n.liveConsumerIndexOfThis.push(t),n.liveConsumerNode.push(e)-1}function wl(n,e){if(oy(n),n.liveConsumerNode.length===1&&ay(n))for(let i=0;i<n.producerNode.length;i++)wl(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];bl(r),r.producerIndexOfThis[i]=e}}function Wo(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function bl(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function oy(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function ay(n){return n.producerNode!==void 0}function EM(){throw new Error}var ly=EM;function MM(){ly()}function cy(n){ly=n}var wM=null;function uy(n,e){xM()||MM(),n.equal(n.value,e)||(n.value=e,bM(n))}var dy=Mt(me({},Ml),{equal:yM,value:void 0,kind:"signal"});function bM(n){n.version++,vM(),iy(n),wM?.()}function Be(n){return typeof n=="function"}function Cs(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var Tl=Cs(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function jo(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ot=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Be(i))try{i()}catch(s){e=s instanceof Tl?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{fy(s)}catch(o){e=e??[],o instanceof Tl?e=[...e,...o.errors]:e.push(o)}}if(e)throw new Tl(e)}}add(e){var t;if(e&&e!==this)if(this.closed)fy(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&jo(t,e)}remove(e){let{_finalizers:t}=this;t&&jo(t,e),e instanceof n&&e._removeParent(this)}};Ot.EMPTY=(()=>{let n=new Ot;return n.closed=!0,n})();var pf=Ot.EMPTY;function Cl(n){return n instanceof Ot||n&&"closed"in n&&Be(n.remove)&&Be(n.add)&&Be(n.unsubscribe)}function fy(n){Be(n)?n():n.unsubscribe()}var Hn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ds={setTimeout(n,e,...t){let{delegate:i}=Ds;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=Ds;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function Dl(n){Ds.setTimeout(()=>{let{onUnhandledError:e}=Hn;if(e)e(n);else throw n})}function $o(){}var hy=mf("C",void 0,void 0);function py(n){return mf("E",void 0,n)}function my(n){return mf("N",n,void 0)}function mf(n,e,t){return{kind:n,value:e,error:t}}var Pr=null;function As(n){if(Hn.useDeprecatedSynchronousErrorHandling){let e=!Pr;if(e&&(Pr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=Pr;if(Pr=null,t)throw i}}else n()}function gy(n){Hn.useDeprecatedSynchronousErrorHandling&&Pr&&(Pr.errorThrown=!0,Pr.error=n)}var Or=class extends Ot{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,Cl(e)&&e.add(this)):this.destination=DM}static create(e,t,i){return new Is(e,t,i)}next(e){this.isStopped?yf(my(e),this):this._next(e)}error(e){this.isStopped?yf(py(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?yf(hy,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},TM=Function.prototype.bind;function gf(n,e){return TM.call(n,e)}var vf=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){Al(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){Al(i)}else Al(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){Al(t)}}},Is=class extends Or{constructor(e,t,i){super();let r;if(Be(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Hn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&gf(e.next,s),error:e.error&&gf(e.error,s),complete:e.complete&&gf(e.complete,s)}):r=e}this.destination=new vf(r)}};function Al(n){Hn.useDeprecatedSynchronousErrorHandling?gy(n):Dl(n)}function CM(n){throw n}function yf(n,e){let{onStoppedNotification:t}=Hn;t&&Ds.setTimeout(()=>t(n,e))}var DM={closed:!0,next:$o,error:CM,complete:$o};var Rs=typeof Symbol=="function"&&Symbol.observable||"@@observable";function pn(n){return n}function _f(...n){return xf(n)}function xf(n){return n.length===0?pn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var vt=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=IM(t)?t:new Is(t,i,r);return As(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=yy(i),new i((r,s)=>{let o=new Is({next:a=>{try{t(a)}catch(l){s(l),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Rs](){return this}pipe(...t){return xf(t)(this)}toPromise(t){return t=yy(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function yy(n){var e;return(e=n??Hn.Promise)!==null&&e!==void 0?e:Promise}function AM(n){return n&&Be(n.next)&&Be(n.error)&&Be(n.complete)}function IM(n){return n&&n instanceof Or||AM(n)&&Cl(n)}function Sf(n){return Be(n?.lift)}function nt(n){return e=>{if(Sf(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function it(n,e,t,i,r){return new Ef(n,e,t,i,r)}var Ef=class extends Or{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(l){e.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){e.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function Ns(){return nt((n,e)=>{let t=null;n._refCount++;let i=it(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var Ps=class extends vt{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,Sf(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ot;let t=this.getSubject();e.add(this.source.subscribe(it(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ot.EMPTY)}return e}refCount(){return Ns()(this)}};var vy=Cs(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var Yt=(()=>{class n extends vt{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new Il(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new vy}next(t){As(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){As(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){As(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?pf:(this.currentObservers=null,s.push(t),new Ot(()=>{this.currentObservers=null,jo(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new vt;return t.source=this,t}}return n.create=(e,t)=>new Il(e,t),n})(),Il=class extends Yt{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:pf}};var kt=class extends Yt{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var an=new vt(n=>n.complete());function _y(n){return n&&Be(n.schedule)}function xy(n){return n[n.length-1]}function Sy(n){return Be(xy(n))?n.pop():void 0}function Ki(n){return _y(xy(n))?n.pop():void 0}function My(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{c(i.next(u))}catch(d){o(d)}}function l(u){try{c(i.throw(u))}catch(d){o(d)}}function c(u){u.done?s(u.value):r(u.value).then(a,l)}c((i=i.apply(n,e||[])).next())})}function Ey(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Lr(n){return this instanceof Lr?(this.v=n,this):new Lr(n)}function wy(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",o),r[Symbol.asyncIterator]=function(){return this},r;function o(h){return function(g){return Promise.resolve(g).then(h,d)}}function a(h,g){i[h]&&(r[h]=function(y){return new Promise(function(m,p){s.push([h,y,m,p])>1||l(h,y)})},g&&(r[h]=g(r[h])))}function l(h,g){try{c(i[h](g))}catch(y){f(s[0][3],y)}}function c(h){h.value instanceof Lr?Promise.resolve(h.value.v).then(u,d):f(s[0][2],h)}function u(h){l("next",h)}function d(h){l("throw",h)}function f(h,g){h(g),s.shift(),s.length&&l(s[0][0],s[0][1])}}function by(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Ey=="function"?Ey(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,l){o=n[s](o),r(a,l,o.done,o.value)})}}function r(s,o,a,l){Promise.resolve(l).then(function(c){s({value:c,done:a})},o)}}var Rl=n=>n&&typeof n.length=="number"&&typeof n!="function";function Nl(n){return Be(n?.then)}function Pl(n){return Be(n[Rs])}function Ol(n){return Symbol.asyncIterator&&Be(n?.[Symbol.asyncIterator])}function Ll(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function RM(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Fl=RM();function kl(n){return Be(n?.[Fl])}function Ul(n){return wy(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield Lr(t.read());if(r)return yield Lr(void 0);yield yield Lr(i)}}finally{t.releaseLock()}})}function Bl(n){return Be(n?.getReader)}function Ht(n){if(n instanceof vt)return n;if(n!=null){if(Pl(n))return NM(n);if(Rl(n))return PM(n);if(Nl(n))return OM(n);if(Ol(n))return Ty(n);if(kl(n))return LM(n);if(Bl(n))return FM(n)}throw Ll(n)}function NM(n){return new vt(e=>{let t=n[Rs]();if(Be(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function PM(n){return new vt(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function OM(n){return new vt(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,Dl)})}function LM(n){return new vt(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Ty(n){return new vt(e=>{kM(n,e).catch(t=>e.error(t))})}function FM(n){return Ty(Ul(n))}function kM(n,e){var t,i,r,s;return My(this,void 0,void 0,function*(){try{for(t=by(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function ln(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Vl(n,e=0){return nt((t,i)=>{t.subscribe(it(i,r=>ln(i,n,()=>i.next(r),e),()=>ln(i,n,()=>i.complete(),e),r=>ln(i,n,()=>i.error(r),e)))})}function zl(n,e=0){return nt((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function Cy(n,e){return Ht(n).pipe(zl(e),Vl(e))}function Dy(n,e){return Ht(n).pipe(zl(e),Vl(e))}function Ay(n,e){return new vt(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Iy(n,e){return new vt(t=>{let i;return ln(t,e,()=>{i=n[Fl](),ln(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Be(i?.return)&&i.return()})}function Hl(n,e){if(!n)throw new Error("Iterable cannot be null");return new vt(t=>{ln(t,e,()=>{let i=n[Symbol.asyncIterator]();ln(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Ry(n,e){return Hl(Ul(n),e)}function Ny(n,e){if(n!=null){if(Pl(n))return Cy(n,e);if(Rl(n))return Ay(n,e);if(Nl(n))return Dy(n,e);if(Ol(n))return Hl(n,e);if(kl(n))return Iy(n,e);if(Bl(n))return Ry(n,e)}throw Ll(n)}function Ut(n,e){return e?Ny(n,e):Ht(n)}function Ve(...n){let e=Ki(n);return Ut(n,e)}function Os(n,e){let t=Be(n)?n:()=>n,i=r=>r.error(t());return new vt(e?r=>e.schedule(i,0,r):i)}function Mf(n){return!!n&&(n instanceof vt||Be(n.lift)&&Be(n.subscribe))}var Di=Cs(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function rt(n,e){return nt((t,i)=>{let r=0;t.subscribe(it(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:UM}=Array;function BM(n,e){return UM(e)?n(...e):n(e)}function Py(n){return rt(e=>BM(n,e))}var{isArray:VM}=Array,{getPrototypeOf:zM,prototype:HM,keys:GM}=Object;function Oy(n){if(n.length===1){let e=n[0];if(VM(e))return{args:e,keys:null};if(WM(e)){let t=GM(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function WM(n){return n&&typeof n=="object"&&zM(n)===HM}function Ly(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function Gl(...n){let e=Ki(n),t=Sy(n),{args:i,keys:r}=Oy(n);if(i.length===0)return Ut([],e);let s=new vt(jM(i,e,r?o=>Ly(r,o):pn));return t?s.pipe(Py(t)):s}function jM(n,e,t=pn){return i=>{Fy(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let l=0;l<r;l++)Fy(e,()=>{let c=Ut(n[l],e),u=!1;c.subscribe(it(i,d=>{s[l]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function Fy(n,e,t){n?ln(t,n,e):e()}function ky(n,e,t,i,r,s,o,a){let l=[],c=0,u=0,d=!1,f=()=>{d&&!l.length&&!c&&e.complete()},h=y=>c<i?g(y):l.push(y),g=y=>{s&&e.next(y),c++;let m=!1;Ht(t(y,u++)).subscribe(it(e,p=>{r?.(p),s?h(p):e.next(p)},()=>{m=!0},void 0,()=>{if(m)try{for(c--;l.length&&c<i;){let p=l.shift();o?ln(e,o,()=>g(p)):g(p)}f()}catch(p){e.error(p)}}))};return n.subscribe(it(e,h,()=>{d=!0,f()})),()=>{a?.()}}function Bt(n,e,t=1/0){return Be(e)?Bt((i,r)=>rt((s,o)=>e(i,s,r,o))(Ht(n(i,r))),t):(typeof e=="number"&&(t=e),nt((i,r)=>ky(i,r,n,t)))}function wf(n=1/0){return Bt(pn,n)}function Uy(){return wf(1)}function Ls(...n){return Uy()(Ut(n,Ki(n)))}function Wl(n){return new vt(e=>{Ht(n()).subscribe(e)})}function Gn(n,e){return nt((t,i)=>{let r=0;t.subscribe(it(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Qi(n){return nt((e,t)=>{let i=null,r=!1,s;i=e.subscribe(it(t,void 0,void 0,o=>{s=Ht(n(o,Qi(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function By(n,e,t,i,r){return(s,o)=>{let a=t,l=e,c=0;s.subscribe(it(o,u=>{let d=c++;l=a?n(l,u,d):(a=!0,u),i&&o.next(l)},r&&(()=>{a&&o.next(l),o.complete()})))}}function Fs(n,e){return Be(e)?Bt(n,e,1):Bt(n,1)}function Ji(n){return nt((e,t)=>{let i=!1;e.subscribe(it(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function Ai(n){return n<=0?()=>an:nt((e,t)=>{let i=0;e.subscribe(it(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function jl(n=$M){return nt((e,t)=>{let i=!1;e.subscribe(it(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function $M(){return new Di}function qo(n){return nt((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Ii(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Gn((r,s)=>n(r,s,i)):pn,Ai(1),t?Ji(e):jl(()=>new Di))}function ks(n){return n<=0?()=>an:nt((e,t)=>{let i=[];e.subscribe(it(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function bf(n,e){let t=arguments.length>=2;return i=>i.pipe(n?Gn((r,s)=>n(r,s,i)):pn,ks(1),t?Ji(e):jl(()=>new Di))}function Tf(n,e){return nt(By(n,e,arguments.length>=2,!0))}function Cf(...n){let e=Ki(n);return nt((t,i)=>{(e?Ls(n,t,e):Ls(n,t)).subscribe(i)})}function Wn(n,e){return nt((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(it(i,l=>{r?.unsubscribe();let c=0,u=s++;Ht(n(l,u)).subscribe(r=it(i,d=>i.next(e?e(l,d,u,c++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function Df(n){return nt((e,t)=>{Ht(n).subscribe(it(t,()=>t.complete(),$o)),!t.closed&&e.subscribe(t)})}function $t(n,e,t){let i=Be(n)||e||t?{next:n,error:e,complete:t}:n;return i?nt((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(it(s,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),s.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),s.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),s.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):pn}var re=class extends Error{code;constructor(e,t){super(mh(e,t)),this.code=e}};function mh(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}var Ev=Symbol("InputSignalNode#UNSET"),qM=Mt(me({},dy),{transformFn:void 0,applyValueToInputSignal(n,e){uy(n,e)}});function Mv(n,e){let t=Object.create(qM);t.value=n,t.transformFn=e?.transform;function i(){if(ny(t),t.value===Ev)throw new re(-950,!1);return t.value}return i[Ts]=t,i}function _c(n){return{toString:n}.toString()}var ar=globalThis;function _t(n){for(let e in n)if(n[e]===_t)return e;throw Error("Could not find renamed property on target object.")}function mn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(mn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function Vy(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var XM=_t({__forward_ref__:_t});function wv(n){return n.__forward_ref__=wv,n.toString=function(){return mn(this())},n}function An(n){return bv(n)?n():n}function bv(n){return typeof n=="function"&&n.hasOwnProperty(XM)&&n.__forward_ref__===wv}function Re(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function lr(n){return{providers:n.providers||[],imports:n.imports||[]}}function xc(n){return zy(n,Cv)||zy(n,Dv)}function Tv(n){return xc(n)!==null}function zy(n,e){return n.hasOwnProperty(e)?n[e]:null}function YM(n){let e=n&&(n[Cv]||n[Dv]);return e||null}function Hy(n){return n&&(n.hasOwnProperty(Gy)||n.hasOwnProperty(ZM))?n[Gy]:null}var Cv=_t({\u0275prov:_t}),Gy=_t({\u0275inj:_t}),Dv=_t({ngInjectableDef:_t}),ZM=_t({ngInjectorDef:_t}),Ue=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(e,t){this._desc=e,this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Re({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Av(n){return n&&!!n.\u0275providers}var KM=_t({\u0275cmp:_t}),QM=_t({\u0275dir:_t}),JM=_t({\u0275pipe:_t}),ew=_t({\u0275mod:_t}),Kl=_t({\u0275fac:_t}),Ko=_t({__NG_ELEMENT_ID__:_t}),Wy=_t({__NG_ENV_ID__:_t});function tw(n){return typeof n=="string"?n:n==null?"":String(n)}function nw(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():tw(n)}function iw(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new re(-200,n)}function gh(n,e){throw new re(-201,!1)}var Xe=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}(Xe||{}),Ff;function Iv(){return Ff}function cn(n){let e=Ff;return Ff=n,e}function Rv(n,e,t){let i=xc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&Xe.Optional)return null;if(e!==void 0)return e;gh(n,"Injector")}var rw={},Qo=rw,sw="__NG_DI_FLAG__",Ql="ngTempTokenPath",ow="ngTokenPath",aw=/\n/gm,lw="\u0275",jy="__source",zs;function cw(){return zs}function er(n){let e=zs;return zs=n,e}function uw(n,e=Xe.Default){if(zs===void 0)throw new re(-203,!1);return zs===null?Rv(n,void 0,e):zs.get(n,e&Xe.Optional?null:void 0,e)}function ke(n,e=Xe.Default){return(Iv()||uw)(An(n),e)}function le(n,e=Xe.Default){return ke(n,Sc(e))}function Sc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function kf(n){let e=[];for(let t=0;t<n.length;t++){let i=An(n[t]);if(Array.isArray(i)){if(i.length===0)throw new re(900,!1);let r,s=Xe.Default;for(let o=0;o<i.length;o++){let a=i[o],l=dw(a);typeof l=="number"?l===-1?r=a.token:s|=l:r=a}e.push(ke(r,s))}else e.push(ke(i))}return e}function dw(n){return n[sw]}function fw(n,e,t,i){let r=n[Ql];throw e[jy]&&r.unshift(e[jy]),n.message=hw(`
`+n.message,r,t,i),n[ow]=r,n[Ql]=null,n}function hw(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==lw?n.slice(2):n;let r=mn(e);if(Array.isArray(e))r=e.map(mn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):mn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(aw,`
  `)}`}function Ur(n,e){let t=n.hasOwnProperty(Kl);return t?n[Kl]:null}function yh(n,e){n.forEach(t=>Array.isArray(t)?yh(t,e):e(t))}function Nv(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Jl(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var Jo={},ri=[],Gs=new Ue(""),Pv=new Ue("",-1),Ov=new Ue(""),ec=class{get(e,t=Qo){if(t===Qo){let i=new Error(`NullInjectorError: No provider for ${mn(e)}!`);throw i.name="NullInjectorError",i}return t}};function Lv(n,e){let t=n[ew]||null;if(!t&&e===!0)throw new Error(`Type ${mn(n)} does not have '\u0275mod' property.`);return t}function Br(n){return n[KM]||null}function Fv(n){return n[QM]||null}function kv(n){return n[JM]||null}function Uv(n){let e=Br(n)||Fv(n)||kv(n);return e!==null&&e.standalone}function vh(n){return{\u0275providers:n}}function Ec(...n){return{\u0275providers:Bv(!0,n),\u0275fromNgModule:!0}}function Bv(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return yh(e,o=>{let a=o;Uf(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&Vv(r,s),t}function Vv(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];_h(r,s=>{e(s,i)})}}function Uf(n,e,t,i){if(n=An(n),!n)return!1;let r=null,s=Hy(n),o=!s&&Br(n);if(!s&&!o){let l=n.ngModule;if(s=Hy(l),s)r=l;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let l=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let c of l)Uf(c,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let c;try{yh(s.imports,u=>{Uf(u,e,t,i)&&(c||=[],c.push(u))})}finally{}c!==void 0&&Vv(c,e)}if(!a){let c=Ur(r)||(()=>new r);e({provide:r,useFactory:c,deps:ri},r),e({provide:Ov,useValue:r,multi:!0},r),e({provide:Gs,useValue:()=>ke(r),multi:!0},r)}let l=s.providers;if(l!=null&&!a){let c=n;_h(l,u=>{e(u,c)})}}else return!1;return r!==n&&n.providers!==void 0}function _h(n,e){for(let t of n)Av(t)&&(t=t.\u0275providers),Array.isArray(t)?_h(t,e):e(t)}var pw=_t({provide:String,useValue:_t});function zv(n){return n!==null&&typeof n=="object"&&pw in n}function mw(n){return!!(n&&n.useExisting)}function gw(n){return!!(n&&n.useFactory)}function Bf(n){return typeof n=="function"}var Mc=new Ue(""),$l={},yw={},Af;function xh(){return Af===void 0&&(Af=new ec),Af}var Nn=class{},ea=class extends Nn{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,zf(e,o=>this.processProvider(o)),this.records.set(Pv,Us(void 0,this)),r.has("environment")&&this.records.set(Nn,Us(void 0,this));let s=this.records.get(Mc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Ov,ri,Xe.Self))}destroy(){Yo(this),this._destroyed=!0;let e=ut(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),ut(e)}}onDestroy(e){return Yo(this),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){Yo(this);let t=er(this),i=cn(void 0),r;try{return e()}finally{er(t),cn(i)}}get(e,t=Qo,i=Xe.Default){if(Yo(this),e.hasOwnProperty(Wy))return e[Wy](this);i=Sc(i);let r,s=er(this),o=cn(void 0);try{if(!(i&Xe.SkipSelf)){let l=this.records.get(e);if(l===void 0){let c=Mw(e)&&xc(e);c&&this.injectableDefInScope(c)?l=Us(Vf(e),$l):l=null,this.records.set(e,l)}if(l!=null)return this.hydrate(e,l)}let a=i&Xe.Self?xh():this.parent;return t=i&Xe.Optional&&t===Qo?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[Ql]=a[Ql]||[]).unshift(mn(e)),s)throw a;return fw(a,e,"R3InjectorError",this.source)}else throw a}finally{cn(o),er(s)}}resolveInjectorInitializers(){let e=ut(null),t=er(this),i=cn(void 0),r;try{let s=this.get(Gs,ri,Xe.Self);for(let o of s)o()}finally{er(t),cn(i),ut(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(mn(i));return`R3Injector[${e.join(", ")}]`}processProvider(e){e=An(e);let t=Bf(e)?e:An(e&&e.provide),i=_w(e);if(!Bf(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Us(void 0,$l,!0),r.factory=()=>kf(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=ut(null);try{return t.value===$l&&(t.value=yw,t.value=t.factory()),typeof t.value=="object"&&t.value&&Ew(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{ut(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=An(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Vf(n){let e=xc(n),t=e!==null?e.factory:Ur(n);if(t!==null)return t;if(n instanceof Ue)throw new re(204,!1);if(n instanceof Function)return vw(n);throw new re(204,!1)}function vw(n){if(n.length>0)throw new re(204,!1);let t=YM(n);return t!==null?()=>t.factory(n):()=>new n}function _w(n){if(zv(n))return Us(void 0,n.useValue);{let e=xw(n);return Us(e,$l)}}function xw(n,e,t){let i;if(Bf(n)){let r=An(n);return Ur(r)||Vf(r)}else if(zv(n))i=()=>An(n.useValue);else if(gw(n))i=()=>n.useFactory(...kf(n.deps||[]));else if(mw(n))i=()=>ke(An(n.useExisting));else{let r=An(n&&(n.useClass||n.provide));if(Sw(n))i=()=>new r(...kf(n.deps));else return Ur(r)||Vf(r)}return i}function Yo(n){if(n.destroyed)throw new re(205,!1)}function Us(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function Sw(n){return!!n.deps}function Ew(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function Mw(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ue}function zf(n,e){for(let t of n)Array.isArray(t)?zf(t,e):t&&Av(t)?zf(t.\u0275providers,e):e(t)}function qn(n,e){n instanceof ea&&Yo(n);let t,i=er(n),r=cn(void 0);try{return e()}finally{er(i),cn(r)}}function ww(){return Iv()!==void 0||cw()!=null}function bw(n){return typeof n=="function"}var Oi=0,at=1,ze=2,tn=3,$n=4,Xn=5,tc=6,nc=7,oi=8,ta=9,nr=10,Pn=11,na=12,$y=13,la=14,ai=15,ia=16,Bs=17,wc=18,bc=19,Hv=20,tr=21,If=22,ic=23,gn=24,li=25,Gv=1;var Vr=7,rc=8,sc=9,Rn=10;function Fr(n){return Array.isArray(n)&&typeof n[Gv]=="object"}function Li(n){return Array.isArray(n)&&n[Gv]===!0}function Wv(n){return(n.flags&4)!==0}function Gr(n){return n.componentOffset>-1}function jv(n){return(n.flags&1)===1}function $s(n){return!!n.template}function oc(n){return(n[ze]&512)!==0}function ca(n){return(n[ze]&256)===256}var Hf=class{previousValue;currentValue;firstChange;constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function $v(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}var Sh=(()=>{let n=()=>qv;return n.ngInherit=!0,n})();function qv(n){return n.type.prototype.ngOnChanges&&(n.setInput=Cw),Tw}function Tw(){let n=Yv(this),e=n?.current;if(e){let t=n.previous;if(t===Jo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function Cw(n,e,t,i,r){let s=this.declaredInputs[i],o=Yv(n)||Dw(n,{previous:Jo,current:null}),a=o.current||(o.current={}),l=o.previous,c=l[s];a[s]=new Hf(c&&c.currentValue,t,l===Jo),$v(n,e,r,t)}var Xv="__ngSimpleChanges__";function Yv(n){return n[Xv]||null}function Dw(n,e){return n[Xv]=e}var qy=null;var In=function(n,e,t){qy?.(n,e,t)},Aw="svg",Iw="math";function Ri(n){for(;Array.isArray(n);)n=n[Oi];return n}function di(n,e){return Ri(e[n.index])}function Zv(n,e){return n.data[e]}function Rw(n,e){return n[e]}function Ni(n,e){let t=e[n];return Fr(t)?t:t[Oi]}function Eh(n){return(n[ze]&128)===128}function Nw(n){return Li(n[tn])}function Xy(n,e){return e==null?null:n[e]}function Kv(n){n[Bs]=0}function Mh(n){n[ze]&1024||(n[ze]|=1024,Eh(n)&&Cc(n))}function Tc(n){return!!(n[ze]&9216||n[gn]?.dirty)}function Gf(n){n[nr].changeDetectionScheduler?.notify(9),n[ze]&64&&(n[ze]|=1024),Tc(n)&&Cc(n)}function Cc(n){n[nr].changeDetectionScheduler?.notify(0);let e=zr(n);for(;e!==null&&!(e[ze]&8192||(e[ze]|=8192,!Eh(e)));)e=zr(e)}function Qv(n,e){if(ca(n))throw new re(911,!1);n[tr]===null&&(n[tr]=[]),n[tr].push(e)}function Pw(n,e){if(n[tr]===null)return;let t=n[tr].indexOf(e);t!==-1&&n[tr].splice(t,1)}function zr(n){let e=n[tn];return Li(e)?e[tn]:e}function Ow(n){return n[nc]??=[]}function Lw(n){return n.cleanup??=[]}var dt={lFrame:o_(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var Wf=!1;function Fw(){return dt.lFrame.elementDepthCount}function kw(){dt.lFrame.elementDepthCount++}function Uw(){dt.lFrame.elementDepthCount--}function Jv(){return dt.bindingsEnabled}function Bw(){return dt.skipHydrationRootTNode!==null}function Vw(n){return dt.skipHydrationRootTNode===n}function zw(){dt.skipHydrationRootTNode=null}function nn(){return dt.lFrame.lView}function Wr(){return dt.lFrame.tView}function cr(){let n=e_();for(;n!==null&&n.type===64;)n=n.parent;return n}function e_(){return dt.lFrame.currentTNode}function Hw(){let n=dt.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function Dc(n,e){let t=dt.lFrame;t.currentTNode=n,t.isParent=e}function t_(){return dt.lFrame.isParent}function Gw(){dt.lFrame.isParent=!1}function n_(){return Wf}function Yy(n){let e=Wf;return Wf=n,e}function Ww(){let n=dt.lFrame,e=n.bindingRootIndex;return e===-1&&(e=n.bindingRootIndex=n.tView.bindingStartIndex),e}function jw(n){return dt.lFrame.bindingIndex=n}function $w(){return dt.lFrame.bindingIndex++}function qw(){return dt.lFrame.inI18n}function Xw(n,e){let t=dt.lFrame;t.bindingIndex=t.bindingRootIndex=n,jf(e)}function Yw(){return dt.lFrame.currentDirectiveIndex}function jf(n){dt.lFrame.currentDirectiveIndex=n}function i_(n){dt.lFrame.currentQueryIndex=n}function Zw(n){let e=n[at];return e.type===2?e.declTNode:e.type===1?n[Xn]:null}function r_(n,e,t){if(t&Xe.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&Xe.Host);)if(r=Zw(s),r===null||(s=s[la],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=dt.lFrame=s_();return i.currentTNode=e,i.lView=n,!0}function wh(n){let e=s_(),t=n[at];dt.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function s_(){let n=dt.lFrame,e=n===null?null:n.child;return e===null?o_(n):e}function o_(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function a_(){let n=dt.lFrame;return dt.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var l_=a_;function bh(){let n=a_();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function c_(){return dt.lFrame.selectedIndex}function Hr(n){dt.lFrame.selectedIndex=n}function Kw(){let n=dt.lFrame;return Zv(n.tView,n.selectedIndex)}function Qw(){return dt.lFrame.currentNamespace}var u_=!0;function d_(){return u_}function f_(n){u_=n}function Jw(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=qv(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function h_(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),l&&(n.viewHooks??=[]).push(-t,l),c&&((n.viewHooks??=[]).push(t,c),(n.viewCheckHooks??=[]).push(t,c)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function ql(n,e,t){p_(n,e,3,t)}function Xl(n,e,t,i){(n[ze]&3)===t&&p_(n,e,t,i)}function Rf(n,e){let t=n[ze];(t&3)===e&&(t&=16383,t+=1,n[ze]=t)}function p_(n,e,t,i){let r=i!==void 0?n[Bs]&65535:0,s=i??-1,o=e.length-1,a=0;for(let l=r;l<o;l++)if(typeof e[l+1]=="number"){if(a=e[l],i!=null&&a>=i)break}else e[l]<0&&(n[Bs]+=65536),(a<s||s==-1)&&(eb(n,t,e,l),n[Bs]=(n[Bs]&4294901760)+l+2),l++}function Zy(n,e){In(4,n,e);let t=ut(null);try{e.call(n)}finally{ut(t),In(5,n,e)}}function eb(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[ze]>>14<n[Bs]>>16&&(n[ze]&3)===e&&(n[ze]+=16384,Zy(a,s)):Zy(a,s)}var Hs=-1,ra=class{factory;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(e,t,i){this.factory=e,this.canSeeViewProviders=t,this.injectImpl=i}};function tb(n){return n instanceof ra}function nb(n){return(n.flags&8)!==0}function ib(n){return(n.flags&16)!==0}function rb(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];ob(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function sb(n){return n===3||n===4||n===6}function ob(n){return n.charCodeAt(0)===64}function ac(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?Ky(n,t,r,null,e[++i]):Ky(n,t,r,null,null))}}return n}function Ky(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Nf={},$f=class{injector;parentInjector;constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=Sc(i);let r=this.injector.get(e,Nf,i);return r!==Nf||t===Nf?r:this.parentInjector.get(e,t,i)}};function m_(n){return n!==Hs}function lc(n){return n&32767}function ab(n){return n>>16}function cc(n,e){let t=ab(n),i=e;for(;t>0;)i=i[la],t--;return i}var qf=!0;function uc(n){let e=qf;return qf=n,e}var lb=256,g_=lb-1,y_=5,cb=0,si={};function ub(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(Ko)&&(i=t[Ko]),i==null&&(i=t[Ko]=cb++);let r=i&g_,s=1<<r;e.data[n+(r>>y_)]|=s}function v_(n,e){let t=__(n,e);if(t!==-1)return t;let i=e[at];i.firstCreatePass&&(n.injectorIndex=e.length,Pf(i.data,n),Pf(e,null),Pf(i.blueprint,null));let r=Th(n,e),s=n.injectorIndex;if(m_(r)){let o=lc(r),a=cc(r,e),l=a[at].data;for(let c=0;c<8;c++)e[s+c]=a[o+c]|l[o+c]}return e[s+8]=r,s}function Pf(n,e){n.push(0,0,0,0,0,0,0,0,e)}function __(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function Th(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=w_(r),i===null)return Hs;if(t++,r=r[la],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return Hs}function db(n,e,t){ub(n,e,t)}function x_(n,e,t){if(t&Xe.Optional||n!==void 0)return n;gh(e,"NodeInjector")}function S_(n,e,t,i){if(t&Xe.Optional&&i===void 0&&(i=null),!(t&(Xe.Self|Xe.Host))){let r=n[ta],s=cn(void 0);try{return r?r.get(e,i,t&Xe.Optional):Rv(e,i,t&Xe.Optional)}finally{cn(s)}}return x_(i,e,t)}function E_(n,e,t,i=Xe.Default,r){if(n!==null){if(e[ze]&2048&&!(i&Xe.Self)){let o=gb(n,e,t,i,si);if(o!==si)return o}let s=M_(n,e,t,i,si);if(s!==si)return s}return S_(e,t,i,r)}function M_(n,e,t,i,r){let s=pb(t);if(typeof s=="function"){if(!r_(e,n,i))return i&Xe.Host?x_(r,t,i):S_(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&Xe.Optional))gh(t);else return o}finally{l_()}}else if(typeof s=="number"){let o=null,a=__(n,e),l=Hs,c=i&Xe.Host?e[ai][Xn]:null;for((a===-1||i&Xe.SkipSelf)&&(l=a===-1?Th(n,e):e[a+8],l===Hs||!Jy(i,!1)?a=-1:(o=e[at],a=lc(l),e=cc(l,e)));a!==-1;){let u=e[at];if(Qy(s,a,u.data)){let d=fb(a,e,t,o,i,c);if(d!==si)return d}l=e[a+8],l!==Hs&&Jy(i,e[at].data[a+8]===c)&&Qy(s,a,e)?(o=u,a=lc(l),e=cc(l,e)):a=-1}}return r}function fb(n,e,t,i,r,s){let o=e[at],a=o.data[n+8],l=i==null?Gr(a)&&qf:i!=o&&(a.type&3)!==0,c=r&Xe.Host&&s===a,u=hb(a,o,t,l,c);return u!==null?Xf(e,o,u,a):si}function hb(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,l=n.directiveStart,c=n.directiveEnd,u=s>>20,d=i?a:a+u,f=r?a+u:c;for(let h=d;h<f;h++){let g=o[h];if(h<l&&t===g||h>=l&&g.type===t)return h}if(r){let h=o[l];if(h&&$s(h)&&h.type===t)return l}return null}function Xf(n,e,t,i){let r=n[t],s=e.data;if(tb(r)){let o=r;o.resolving&&iw(nw(s[t]));let a=uc(o.canSeeViewProviders);o.resolving=!0;let l,c=o.injectImpl?cn(o.injectImpl):null,u=r_(n,i,Xe.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&Jw(t,s[t],e)}finally{c!==null&&cn(c),uc(a),o.resolving=!1,l_()}}return r}function pb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(Ko)?n[Ko]:void 0;return typeof e=="number"?e>=0?e&g_:mb:e}function Qy(n,e,t){let i=1<<n;return!!(t[e+(n>>y_)]&i)}function Jy(n,e){return!(n&Xe.Self)&&!(n&Xe.Host&&e)}var kr=class{_tNode;_lView;constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return E_(this._tNode,this._lView,e,Sc(i),t)}};function mb(){return new kr(cr(),nn())}function Ch(n){return _c(()=>{let e=n.prototype.constructor,t=e[Kl]||Yf(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Kl]||Yf(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Yf(n){return bv(n)?()=>{let e=Yf(An(n));return e&&e()}:Ur(n)}function gb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[ze]&2048&&!oc(o);){let a=M_(s,o,t,i|Xe.Self,si);if(a!==si)return a;let l=s.parent;if(!l){let c=o[Hv];if(c){let u=c.get(t,si,i);if(u!==si)return u}l=w_(o),o=o[la]}s=l}return r}function w_(n){let e=n[at],t=e.type;return t===2?e.declTNode:t===1?n[Xn]:null}function ev(n,e=null,t=null,i){let r=b_(n,e,t,i);return r.resolveInjectorInitializers(),r}function b_(n,e=null,t=null,i,r=new Set){let s=[t||ri,Ec(n)];return i=i||(typeof n=="object"?void 0:mn(n)),new ea(s,e||xh(),i||null,r)}var ci=class n{static THROW_IF_NOT_FOUND=Qo;static NULL=new ec;static create(e,t){if(Array.isArray(e))return ev({name:""},t,e,"");{let i=e.name??"";return ev({name:i},e.parent,e.providers,i)}}static \u0275prov=Re({token:n,providedIn:"any",factory:()=>ke(Pv)});static __NG_ELEMENT_ID__=-1};var yb=new Ue("");yb.__NG_ELEMENT_ID__=n=>{let e=cr();if(e===null)throw new re(204,!1);if(e.type&2)return e.value;if(n&Xe.Optional)return null;throw new re(204,!1)};var T_=!1,Ac=(()=>{class n{static __NG_ELEMENT_ID__=vb;static __NG_ENV_ID__=t=>t}return n})(),Zf=class extends Ac{_lView;constructor(e){super(),this._lView=e}onDestroy(e){return Qv(this._lView,e),()=>Pw(this._lView,e)}};function vb(){return new Zf(nn())}var sa=class{},Dh=new Ue("",{providedIn:"root",factory:()=>!1});var C_=new Ue(""),D_=new Ue(""),qs=(()=>{class n{taskId=0;pendingTasks=new Set;get _hasPendingTasks(){return this.hasPendingTasks.value}hasPendingTasks=new kt(!1);add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let t=this.taskId++;return this.pendingTasks.add(t),t}has(t){return this.pendingTasks.has(t)}remove(t){this.pendingTasks.delete(t),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}static \u0275prov=Re({token:n,providedIn:"root",factory:()=>new n})}return n})();var Kf=class extends Yt{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(e=!1){super(),this.__isAsync=e,ww()&&(this.destroyRef=le(Ac,{optional:!0})??void 0,this.pendingTasks=le(qs,{optional:!0})??void 0)}emit(e){let t=ut(null);try{super.next(e)}finally{ut(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let l=e;r=l.next?.bind(l),s=l.error?.bind(l),o=l.complete?.bind(l)}this.__isAsync&&(s=this.wrapInTimeout(s),r&&(r=this.wrapInTimeout(r)),o&&(o=this.wrapInTimeout(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ot&&e.add(a),a}wrapInTimeout(e){return t=>{let i=this.pendingTasks?.add();setTimeout(()=>{e(t),i!==void 0&&this.pendingTasks?.remove(i)})}}},en=Kf;function dc(...n){}function A_(n){let e,t;function i(){n=dc;try{t!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(t),e!==void 0&&clearTimeout(e)}catch{}}return e=setTimeout(()=>{n(),i()}),typeof requestAnimationFrame=="function"&&(t=requestAnimationFrame(()=>{n(),i()})),()=>i()}function tv(n){return queueMicrotask(()=>n()),()=>{n=dc}}var Ah="isAngularZone",fc=Ah+"_ID",_b=0,Tt=class n{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new en(!1);onMicrotaskEmpty=new en(!1);onStable=new en(!1);onError=new en(!1);constructor(e){let{enableLongStackTrace:t=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:s=T_}=e;if(typeof Zone>"u")throw new re(908,!1);Zone.assertZonePatched();let o=this;o._nesting=0,o._outer=o._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(o._inner=o._inner.fork(new Zone.TaskTrackingZoneSpec)),t&&Zone.longStackTraceZoneSpec&&(o._inner=o._inner.fork(Zone.longStackTraceZoneSpec)),o.shouldCoalesceEventChangeDetection=!r&&i,o.shouldCoalesceRunChangeDetection=r,o.callbackScheduled=!1,o.scheduleInRootZone=s,Eb(o)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Ah)===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new re(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new re(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,xb,dc,dc);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},xb={};function Ih(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Sb(n){if(n.isCheckStableRunning||n.callbackScheduled)return;n.callbackScheduled=!0;function e(){A_(()=>{n.callbackScheduled=!1,Qf(n),n.isCheckStableRunning=!0,Ih(n),n.isCheckStableRunning=!1})}n.scheduleInRootZone?Zone.root.run(()=>{e()}):n._outer.run(()=>{e()}),Qf(n)}function Eb(n){let e=()=>{Sb(n)},t=_b++;n._inner=n._inner.fork({name:"angular",properties:{[Ah]:!0,[fc]:t,[fc+t]:!0},onInvokeTask:(i,r,s,o,a,l)=>{if(Mb(l))return i.invokeTask(s,o,a,l);try{return nv(n),i.invokeTask(s,o,a,l)}finally{(n.shouldCoalesceEventChangeDetection&&o.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),iv(n)}},onInvoke:(i,r,s,o,a,l,c)=>{try{return nv(n),i.invoke(s,o,a,l,c)}finally{n.shouldCoalesceRunChangeDetection&&!n.callbackScheduled&&!wb(l)&&e(),iv(n)}},onHasTask:(i,r,s,o)=>{i.hasTask(s,o),r===s&&(o.change=="microTask"?(n._hasPendingMicrotasks=o.microTask,Qf(n),Ih(n)):o.change=="macroTask"&&(n.hasPendingMacrotasks=o.macroTask))},onHandleError:(i,r,s,o)=>(i.handleError(s,o),n.runOutsideAngular(()=>n.onError.emit(o)),!1)})}function Qf(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.callbackScheduled===!0?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function nv(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function iv(n){n._nesting--,Ih(n)}var Jf=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new en;onMicrotaskEmpty=new en;onStable=new en;onError=new en;run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Mb(n){return I_(n,"__ignore_ng_zone__")}function wb(n){return I_(n,"__scheduler_tick__")}function I_(n,e){return!Array.isArray(n)||n.length!==1?!1:n[0]?.data?.[e]===!0}var ir=class{_console=console;handleError(e){this._console.error("ERROR",e)}},bb=new Ue("",{providedIn:"root",factory:()=>{let n=le(Tt),e=le(ir);return t=>n.runOutsideAngular(()=>e.handleError(t))}});function rv(n,e){return Mv(n,e)}function Tb(n){return Mv(Ev,n)}var R_=(rv.required=Tb,rv);function Cb(){return Rh(cr(),nn())}function Rh(n,e){return new Xs(di(n,e))}var Xs=(()=>{class n{nativeElement;constructor(t){this.nativeElement=t}static __NG_ELEMENT_ID__=Cb}return n})();var sv=new Set;function Nh(n){sv.has(n)||(sv.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function N_(n){return(n.flags&128)===128}var P_=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(P_||{}),O_=new Map,Db=0;function Ab(){return Db++}function Ib(n){O_.set(n[bc],n)}function eh(n){O_.delete(n[bc])}var ov="__ngContext__";function ua(n,e){Fr(e)?(n[ov]=e[bc],Ib(e)):n[ov]=e}function L_(n){return k_(n[na])}function F_(n){return k_(n[$n])}function k_(n){for(;n!==null&&!Li(n);)n=n[$n];return n}var th;function U_(n){th=n}function Rb(){if(th!==void 0)return th;if(typeof document<"u")return document;throw new re(210,!1)}var Ph=new Ue("",{providedIn:"root",factory:()=>Nb}),Nb="ng",Oh=new Ue(""),Ys=new Ue("",{providedIn:"platform",factory:()=>"unknown"});var Lh=new Ue(""),Fh=new Ue("",{providedIn:"root",factory:()=>Rb().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Pb="h",Ob="b";var B_=!1,Lb=new Ue("",{providedIn:"root",factory:()=>B_});var V_=function(n){return n[n.CHANGE_DETECTION=0]="CHANGE_DETECTION",n[n.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",n}(V_||{}),Ic=new Ue("");var Fb=(()=>{class n{impl=null;execute(){this.impl?.execute()}static \u0275prov=Re({token:n,providedIn:"root",factory:()=>new n})}return n})();var kb=()=>null;function z_(n,e,t=!1){return kb(n,e,t)}function H_(n,e){let t=n.contentQueries;if(t!==null){let i=ut(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];i_(s),a.contentQueries(2,e[o],o)}}}finally{ut(i)}}}function nh(n,e,t){i_(0);let i=ut(null);try{e(n,t)}finally{ut(i)}}function G_(n,e,t){if(Wv(e)){let i=ut(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let l=t[o];a.contentQueries(1,l,o)}}}finally{ut(i)}}}var ui=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(ui||{});function W_(n){return n.ownerDocument.defaultView}function j_(n){return n instanceof Function?n():n}var rr=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(rr||{});function Ub(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}var $_="ng-template";function Bb(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&Ub(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(kh(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function kh(n){return n.type===4&&n.value!==$_}function Vb(n,e,t){let i=n.type===4&&!t?$_:n.value;return e===i}function zb(n,e,t){let i=4,r=n.attrs,s=r!==null?Wb(r):0,o=!1;for(let a=0;a<e.length;a++){let l=e[a];if(typeof l=="number"){if(!o&&!jn(i)&&!jn(l))return!1;if(o&&jn(l))continue;o=!1,i=l|i&1;continue}if(!o)if(i&4){if(i=2|i&1,l!==""&&!Vb(n,l,t)||l===""&&e.length===1){if(jn(i))return!1;o=!0}}else if(i&8){if(r===null||!Bb(n,r,l,t)){if(jn(i))return!1;o=!0}}else{let c=e[++a],u=Hb(l,r,kh(n),t);if(u===-1){if(jn(i))return!1;o=!0;continue}if(c!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&c!==d){if(jn(i))return!1;o=!0}}}}return jn(i)||o}function jn(n){return(n&1)===0}function Hb(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return jb(e,n)}function Gb(n,e,t=!1){for(let i=0;i<e.length;i++)if(zb(n,e[i],t))return!0;return!1}function Wb(n){for(let e=0;e<n.length;e++){let t=n[e];if(sb(t))return e}return n.length}function jb(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function av(n,e){return n?":not("+e.trim()+")":e}function $b(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!jn(o)&&(e+=av(s,r),r=""),i=o,s=s||!jn(i);t++}return r!==""&&(e+=av(s,r)),e}function qb(n){return n.map($b).join(",")}function Xb(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!jn(r))break;r=s}i++}return t.length&&e.push(1,...t),e}var Uh={};function Yb(n,e){return n.createText(e)}function q_(n,e,t){return n.createElement(e,t)}function hc(n,e,t,i,r){n.insertBefore(e,t,i,r)}function X_(n,e,t){n.appendChild(e,t)}function lv(n,e,t,i,r){i!==null?hc(n,e,t,i,r):X_(n,e,t)}function Zb(n,e,t){n.removeChild(null,e,t)}function Kb(n,e,t){n.setAttribute(e,"style",t)}function Qb(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function Y_(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&rb(n,e,i),r!==null&&Qb(n,e,r),s!==null&&Kb(n,e,s)}function Z_(n=1){K_(Wr(),nn(),c_()+n,!1)}function K_(n,e,t,i){if(!i)if((e[ze]&3)===3){let s=n.preOrderCheckHooks;s!==null&&ql(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Xl(e,s,0,t)}Hr(t)}function Fi(n,e=Xe.Default){let t=nn();if(t===null)return ke(n,e);let i=cr();return E_(i,t,An(n),e)}function Q_(n,e,t,i,r,s){let o=ut(null);try{let a=null;r&rr.SignalBased&&(a=e[i][Ts]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&rr.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):$v(e,a,i,s)}finally{ut(o)}}function J_(n,e,t,i,r,s,o,a,l,c,u){let d=e.blueprint.slice();return d[Oi]=r,d[ze]=i|4|128|8|64|1024,(c!==null||n&&n[ze]&2048)&&(d[ze]|=2048),Kv(d),d[tn]=d[la]=n,d[oi]=t,d[nr]=o||n&&n[nr],d[Pn]=a||n&&n[Pn],d[ta]=l||n&&n[ta]||null,d[Xn]=s,d[bc]=Ab(),d[tc]=u,d[Hv]=c,d[ai]=e.type==2?n[ai]:d,d}function e0(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function t0(n,e,t,i,r){let s=c_(),o=i&2;try{Hr(-1),o&&e.length>li&&K_(n,e,li,!1),In(o?2:0,r),t(i,r)}finally{Hr(s),In(o?3:1,r)}}function Jb(n,e,t){Jv()&&(ua(di(t,e),e),n0(n,e,t))}function n0(n,e,t){hT(n,e,t),(t.flags&64)===64&&pT(n,e,t)}function eT(n,e,t=di){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function tT(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=i0(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function i0(n,e,t,i,r,s,o,a,l,c,u){let d=li+i,f=d+r,h=nT(d,f),g=typeof c=="function"?c():c;return h[at]={type:n,blueprint:h,template:t,queries:null,viewQuery:a,declTNode:e,data:h.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:l,consts:g,incompleteFirstPass:!1,ssrId:u}}function nT(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:Uh);return t}function iT(n,e,t,i){let s=i.get(Lb,B_)||t===ui.ShadowDom,o=n.selectRootElement(e,s);return rT(o),o}function rT(n){sT(n)}var sT=()=>null;function cv(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,l=rr.None;Array.isArray(o)?(a=o[0],l=o[1]):a=o;let c=s;if(r!==null){if(!r.hasOwnProperty(s))continue;c=r[s]}n===0?uv(i,t,c,a,l):uv(i,t,c,a)}return i}function uv(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function oT(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],l=null,c=null;for(let u=i;u<r;u++){let d=s[u],f=t?t.get(d):null,h=f?f.inputs:null,g=f?f.outputs:null;l=cv(0,d.inputs,u,l,h),c=cv(1,d.outputs,u,c,g);let y=l!==null&&o!==null&&!kh(e)?bT(l,u,o):null;a.push(y)}l!==null&&(l.hasOwnProperty("class")&&(e.flags|=8),l.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=l,e.outputs=c}function aT(n){return n==="class"?"className":n==="for"?"htmlFor":n==="formaction"?"formAction":n==="innerHtml"?"innerHTML":n==="readonly"?"readOnly":n==="tabindex"?"tabIndex":n}function lT(n,e,t,i,r,s,o,a){let l=di(e,t),c=e.inputs,u;!a&&c!=null&&(u=c[i])?(Bh(n,t,u,i,r),Gr(e)&&cT(t,e.index)):e.type&3?(i=aT(i),r=o!=null?o(r,e.value||"",i):r,s.setProperty(l,i,r)):e.type&12}function cT(n,e){let t=Ni(e,n);t[ze]&16||(t[ze]|=64)}function uT(n,e,t,i){if(Jv()){let r=i===null?null:{"":-1},s=gT(n,t);if(s!==null){let[o,a]=s0(n,t,s);r0(n,e,t,o,r,a)}r&&vT(t,i,r)}t.mergedAttrs=ac(t.mergedAttrs,t.attrs)}function r0(n,e,t,i,r,s){for(let c=0;c<i.length;c++)db(v_(t,e),n,i[c].type);xT(t,n.data.length,i.length);for(let c=0;c<i.length;c++){let u=i[c];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,l=e0(n,e,i.length,null);for(let c=0;c<i.length;c++){let u=i[c];t.mergedAttrs=ac(t.mergedAttrs,u.hostAttrs),ST(n,t,e,l,u),_T(l,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),l++}oT(n,t,s)}function dT(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;fT(o)!=a&&o.push(a),o.push(t,i,s)}}function fT(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function hT(n,e,t){let i=t.directiveStart,r=t.directiveEnd;Gr(t)&&MT(e,t,n.data[i+t.componentOffset]),n.firstCreatePass||v_(t,e);let s=t.initialInputs;for(let o=i;o<r;o++){let a=n.data[o],l=Xf(e,n,o,t);if(ua(l,e),s!==null&&wT(e,o-i,l,a,t,s),$s(a)){let c=Ni(t.index,e);c[oi]=Xf(e,n,o,t)}}}function pT(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=Yw();try{Hr(s);for(let a=i;a<r;a++){let l=n.data[a],c=e[a];jf(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&mT(l,c)}}finally{Hr(-1),jf(o)}}function mT(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function gT(n,e){let t=n.directiveRegistry,i=null;if(t)for(let r=0;r<t.length;r++){let s=t[r];Gb(e,s.selectors,!1)&&(i??=[],$s(s)?i.unshift(s):i.push(s))}return i}function s0(n,e,t){let i=[],r=null;for(let s of t)s.findHostDirectiveDefs!==null&&(r??=new Map,s.findHostDirectiveDefs(s,i,r)),$s(s)&&(i.push(s),yT(n,e,i.length-1));return Gr(e)?i.push(...t.slice(1)):i.push(...t),[i,r]}function yT(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function vT(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new re(-301,!1);i.push(e[r],s)}}}function _T(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;$s(e)&&(t[""]=n)}}function xT(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function ST(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=Ur(r.type,!0)),o=new ra(s,$s(r),Fi);n.blueprint[i]=o,t[i]=o,dT(n,e,i,e0(n,t,r.hostVars,Uh),r)}function ET(n){let e=16;return n.signals?e=4096:n.onPush&&(e=64),e}function MT(n,e,t){let i=di(e,n),r=tT(t),s=n[nr].rendererFactory,o=o0(n,J_(n,r,null,ET(t),i,e,null,s.createRenderer(i,t),null,null,null));return n[e.index]=o}function wT(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let l=o[a++],c=o[a++],u=o[a++],d=o[a++];Q_(i,t,l,c,u,d)}}function bT(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function TT(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function o0(n,e){return n[na]?n[$y][$n]=e:n[na]=e,n[$y]=e,e}function a0(n,e){let t=n[ta],i=t?t.get(ir,null):null;i&&i.handleError(e)}function Bh(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],l=t[s++],c=e[o],u=n.data[o];Q_(u,c,i,a,l,r)}}function CT(n,e){let t=Ni(e,n),i=t[at];DT(i,t);let r=t[Oi];r!==null&&t[tc]===null&&(t[tc]=z_(r,t[ta])),l0(i,t,t[oi])}function DT(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function l0(n,e,t){wh(e);try{let i=n.viewQuery;i!==null&&nh(1,i,t);let r=n.template;r!==null&&t0(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[wc]?.finishViewCreation(n),n.staticContentQueries&&H_(n,e),n.staticViewQueries&&nh(2,n.viewQuery,t);let s=n.components;s!==null&&AT(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[ze]&=-5,bh()}}function AT(n,e){for(let t=0;t<e.length;t++)CT(n,e[t])}var jr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(jr||{}),IT;function Vh(n,e){return IT(n,e)}function c0(n){return(n.flags&32)===32}function Vs(n,e,t,i,r){if(i!=null){let s,o=!1;Li(i)?s=i:Fr(i)&&(o=!0,i=i[Oi]);let a=Ri(i);n===0&&t!==null?r==null?X_(e,t,a):hc(e,t,a,r||null,!0):n===1&&t!==null?hc(e,t,a,r||null,!0):n===2?Zb(e,a,o):n===3&&e.destroyNode(a),s!=null&&GT(e,n,s,t,r)}}function RT(n,e){u0(n,e),e[Oi]=null,e[Xn]=null}function NT(n,e,t,i,r,s){i[Oi]=r,i[Xn]=e,Rc(n,i,t,1,r,s)}function u0(n,e){e[nr].changeDetectionScheduler?.notify(10),Rc(n,e,e[Pn],2,null,null)}function PT(n){let e=n[na];if(!e)return Of(n[at],n);for(;e;){let t=null;if(Fr(e))t=e[na];else{let i=e[Rn];i&&(t=i)}if(!t){for(;e&&!e[$n]&&e!==n;)Fr(e)&&Of(e[at],e),e=e[tn];e===null&&(e=n),Fr(e)&&Of(e[at],e),t=e&&e[$n]}e=t}}function OT(n,e,t,i){let r=Rn+i,s=t.length;i>0&&(t[r-1][$n]=e),i<s-Rn?(e[$n]=t[r],Nv(t,Rn+i,e)):(t.push(e),e[$n]=null),e[tn]=t;let o=e[ia];o!==null&&t!==o&&d0(o,e);let a=e[wc];a!==null&&a.insertView(n),Gf(e),e[ze]|=128}function d0(n,e){let t=n[sc],i=e[tn];if(Fr(i))n[ze]|=2;else{let r=i[tn][ai];e[ai]!==r&&(n[ze]|=2)}t===null?n[sc]=[e]:t.push(e)}function zh(n,e){let t=n[sc],i=t.indexOf(e);t.splice(i,1)}function ih(n,e){if(n.length<=Rn)return;let t=Rn+e,i=n[t];if(i){let r=i[ia];r!==null&&r!==n&&zh(r,i),e>0&&(n[t-1][$n]=i[$n]);let s=Jl(n,Rn+e);RT(i[at],i);let o=s[wc];o!==null&&o.detachView(s[at]),i[tn]=null,i[$n]=null,i[ze]&=-129}return i}function f0(n,e){if(ca(e))return;let t=e[Pn];t.destroyNode&&Rc(n,e,t,3,null,null),PT(e)}function Of(n,e){if(ca(e))return;let t=ut(null);try{e[ze]&=-129,e[ze]|=256,e[gn]&&hf(e[gn]),FT(n,e),LT(n,e),e[at].type===1&&e[Pn].destroy();let i=e[ia];if(i!==null&&Li(e[tn])){i!==e[tn]&&zh(i,e);let r=e[wc];r!==null&&r.detachView(n)}eh(e)}finally{ut(t)}}function LT(n,e){let t=n.cleanup,i=e[nc];if(t!==null)for(let o=0;o<t.length-1;o+=2)if(typeof t[o]=="string"){let a=t[o+3];a>=0?i[a]():i[-a].unsubscribe(),o+=2}else{let a=i[t[o+1]];t[o].call(a)}i!==null&&(e[nc]=null);let r=e[tr];if(r!==null){e[tr]=null;for(let o=0;o<r.length;o++){let a=r[o];a()}}let s=e[ic];if(s!==null){e[ic]=null;for(let o of s)o.destroy()}}function FT(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof ra)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],l=s[o+1];In(4,a,l);try{l.call(a)}finally{In(5,a,l)}}else{In(4,r,s);try{s.call(r)}finally{In(5,r,s)}}}}}function kT(n,e,t){return UT(n,e.parent,t)}function UT(n,e,t){let i=e;for(;i!==null&&i.type&168;)e=i,i=e.parent;if(i===null)return t[Oi];if(Gr(i)){let{encapsulation:r}=n.data[i.directiveStart+i.componentOffset];if(r===ui.None||r===ui.Emulated)return null}return di(i,t)}function BT(n,e,t){return zT(n,e,t)}function VT(n,e,t){return n.type&40?di(n,t):null}var zT=VT,dv;function h0(n,e,t,i){let r=kT(n,i,e),s=e[Pn],o=i.parent||e[Xn],a=BT(o,i,e);if(r!=null)if(Array.isArray(t))for(let l=0;l<t.length;l++)lv(s,r,t[l],a,!1);else lv(s,r,t,a,!1);dv!==void 0&&dv(s,i,e,t,r)}function Zo(n,e){if(e!==null){let t=e.type;if(t&3)return di(e,n);if(t&4)return rh(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return Zo(n,i);{let r=n[e.index];return Li(r)?rh(-1,r):Ri(r)}}else{if(t&128)return Zo(n,e.next);if(t&32)return Vh(e,n)()||Ri(n[e.index]);{let i=p0(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=zr(n[ai]);return Zo(r,i)}else return Zo(n,e.next)}}}return null}function p0(n,e){if(e!==null){let i=n[ai][Xn],r=e.projection;return i.projection[r]}return null}function rh(n,e){let t=Rn+n+1;if(t<e.length){let i=e[t],r=i[at].firstChild;if(r!==null)return Zo(i,r)}return e[Vr]}function Hh(n,e,t,i,r,s,o){for(;t!=null;){if(t.type===128){t=t.next;continue}let a=i[t.index],l=t.type;if(o&&e===0&&(a&&ua(Ri(a),i),t.flags|=2),!c0(t))if(l&8)Hh(n,e,t.child,i,r,s,!1),Vs(e,n,r,a,s);else if(l&32){let c=Vh(t,i),u;for(;u=c();)Vs(e,n,r,u,s);Vs(e,n,r,a,s)}else l&16?HT(n,e,i,t,r,s):Vs(e,n,r,a,s);t=o?t.projectionNext:t.next}}function Rc(n,e,t,i,r,s){Hh(t,i,n.firstChild,e,r,s,!1)}function HT(n,e,t,i,r,s){let o=t[ai],l=o[Xn].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let u=l[c];Vs(e,n,r,u,s)}else{let c=l,u=o[tn];N_(i)&&(c.flags|=128),Hh(n,e,c,u,r,s,!0)}}function GT(n,e,t,i,r){let s=t[Vr],o=Ri(t);s!==o&&Vs(e,n,i,s,r);for(let a=Rn;a<t.length;a++){let l=t[a];Rc(l[at],l,n,e,i,s)}}function fv(n,e){return!e||e.firstChild===null||N_(n)}function WT(n,e,t,i=!0){let r=e[at];if(OT(r,e,n,t),i){let o=rh(t,n),a=e[Pn],l=a.parentNode(n[Vr]);l!==null&&NT(r,n[Xn],a,e,l,o)}let s=e[tc];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function pc(n,e,t,i,r=!1){for(;t!==null;){if(t.type===128){t=r?t.projectionNext:t.next;continue}let s=e[t.index];s!==null&&i.push(Ri(s)),Li(s)&&jT(s,i);let o=t.type;if(o&8)pc(n,e,t.child,i);else if(o&32){let a=Vh(t,e),l;for(;l=a();)i.push(l)}else if(o&16){let a=p0(e,t);if(Array.isArray(a))i.push(...a);else{let l=zr(e[ai]);pc(l[at],l,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function jT(n,e){for(let t=Rn;t<n.length;t++){let i=n[t],r=i[at].firstChild;r!==null&&pc(i[at],i,r,e)}n[Vr]!==n[Oi]&&e.push(n[Vr])}var m0=[];function $T(n){return n[gn]??qT(n)}function qT(n){let e=m0.pop()??Object.create(YT);return e.lView=n,e}function XT(n){n.lView[gn]!==n&&(n.lView=null,m0.push(n))}var YT=Mt(me({},Ml),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{Cc(n.lView)},consumerOnSignalRead(){this.lView[gn]=this}});function ZT(n){let e=n[gn]??Object.create(KT);return e.lView=n,e}var KT=Mt(me({},Ml),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:n=>{let e=zr(n.lView);for(;e&&!g0(e[at]);)e=zr(e);e&&Mh(e)},consumerOnSignalRead(){this.lView[gn]=this}});function g0(n){return n.type!==2}function y0(n){if(n[ic]===null)return;let e=!0;for(;e;){let t=!1;for(let i of n[ic])i.dirty&&(t=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));e=t&&!!(n[ze]&8192)}}var QT=100;function v0(n,e=!0,t=0){let r=n[nr].rendererFactory,s=!1;s||r.begin?.();try{JT(n,t)}catch(o){throw e&&a0(n,o),o}finally{s||r.end?.()}}function JT(n,e){let t=n_();try{Yy(!0),sh(n,e);let i=0;for(;Tc(n);){if(i===QT)throw new re(103,!1);i++,sh(n,1)}}finally{Yy(t)}}function eC(n,e,t,i){if(ca(e))return;let r=e[ze],s=!1,o=!1;wh(e);let a=!0,l=null,c=null;s||(g0(n)?(c=$T(e),l=df(c)):ty()===null?(a=!1,c=ZT(e),l=df(c)):e[gn]&&(hf(e[gn]),e[gn]=null));try{Kv(e),jw(n.bindingStartIndex),t!==null&&t0(n,e,t,2,i);let u=(r&3)===3;if(!s)if(u){let h=n.preOrderCheckHooks;h!==null&&ql(e,h,null)}else{let h=n.preOrderHooks;h!==null&&Xl(e,h,0,null),Rf(e,0)}if(o||tC(e),y0(e),_0(e,0),n.contentQueries!==null&&H_(n,e),!s)if(u){let h=n.contentCheckHooks;h!==null&&ql(e,h)}else{let h=n.contentHooks;h!==null&&Xl(e,h,1),Rf(e,1)}iC(n,e);let d=n.components;d!==null&&S0(e,d,0);let f=n.viewQuery;if(f!==null&&nh(2,f,i),!s)if(u){let h=n.viewCheckHooks;h!==null&&ql(e,h)}else{let h=n.viewHooks;h!==null&&Xl(e,h,2),Rf(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[If]){for(let h of e[If])h();e[If]=null}s||(e[ze]&=-73)}catch(u){throw s||Cc(e),u}finally{c!==null&&(ry(c,l),a&&XT(c)),bh()}}function _0(n,e){for(let t=L_(n);t!==null;t=F_(t))for(let i=Rn;i<t.length;i++){let r=t[i];x0(r,e)}}function tC(n){for(let e=L_(n);e!==null;e=F_(e)){if(!(e[ze]&2))continue;let t=e[sc];for(let i=0;i<t.length;i++){let r=t[i];Mh(r)}}}function nC(n,e,t){let i=Ni(e,n);x0(i,t)}function x0(n,e){Eh(n)&&sh(n,e)}function sh(n,e){let i=n[at],r=n[ze],s=n[gn],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&ff(s)),o||=!1,s&&(s.dirty=!1),n[ze]&=-9217,o)eC(i,n,i.template,n[oi]);else if(r&8192){y0(n),_0(n,1);let a=i.components;a!==null&&S0(n,a,1)}}function S0(n,e,t){for(let i=0;i<e.length;i++)nC(n,e[i],t)}function iC(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)Hr(~r);else{let s=r,o=t[++i],a=t[++i];Xw(o,s);let l=e[s];In(24,l),a(2,l),In(25,l)}}}finally{Hr(-1)}}function Gh(n,e){let t=n_()?64:1088;for(n[nr].changeDetectionScheduler?.notify(e);n;){n[ze]|=t;let i=zr(n);if(oc(n)&&!i)return n;n=i}return null}var Ws=class{_lView;_cdRefInjectingView;notifyErrorHandler;_appRef=null;_attachedToViewContainer=!1;get rootNodes(){let e=this._lView,t=e[at];return pc(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i}get context(){return this._lView[oi]}get dirty(){return!!(this._lView[ze]&9280)||!!this._lView[gn]?.dirty}set context(e){this._lView[oi]=e}get destroyed(){return ca(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[tn];if(Li(e)){let t=e[rc],i=t?t.indexOf(this):-1;i>-1&&(ih(e,i),Jl(t,i))}this._attachedToViewContainer=!1}f0(this._lView[at],this._lView)}onDestroy(e){Qv(this._lView,e)}markForCheck(){Gh(this._cdRefInjectingView||this._lView,4)}markForRefresh(){Mh(this._cdRefInjectingView||this._lView)}detach(){this._lView[ze]&=-129}reattach(){Gf(this._lView),this._lView[ze]|=128}detectChanges(){this._lView[ze]|=1024,v0(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new re(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let e=oc(this._lView),t=this._lView[ia];t!==null&&!e&&zh(t,this._lView),u0(this._lView[at],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new re(902,!1);this._appRef=e;let t=oc(this._lView),i=this._lView[ia];i!==null&&!t&&d0(i,this._lView),Gf(this._lView)}};function Wh(n,e,t,i,r){let s=n.data[e];if(s===null)s=rC(n,e,t,i,r),qw()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=Hw();s.injectorIndex=o===null?-1:o.injectorIndex}return Dc(s,!0),s}function rC(n,e,t,i,r){let s=e_(),o=t_(),a=o?s:s&&s.parent,l=n.data[e]=oC(n,a,t,e,i,r);return sC(n,l,s,o),l}function sC(n,e,t,i){n.firstChild===null&&(n.firstChild=e),t!==null&&(i?t.child==null&&e.parent!==null&&(t.child=e):t.next===null&&(t.next=e,e.prev=t))}function oC(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return Bw()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}var aV=new RegExp(`^(\\d+)*(${Ob}|${Pb})*(.*)`);var aC=()=>null;function hv(n,e){return aC(n,e)}var oh=class{},mc=class{},ah=class{resolveComponentFactory(e){throw Error(`No component factory found for ${mn(e)}.`)}},js=class{static NULL=new ah},sr=class{};var lC=(()=>{class n{static \u0275prov=Re({token:n,providedIn:"root",factory:()=>null})}return n})();function lh(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=Vy(r,a);else if(s==2){let l=a,c=e[++o];i=Vy(i,l+": "+c+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var gc=class extends js{ngModule;constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Br(e);return new oa(t,this.ngModule)}};function pv(n,e){let t=[];for(let i in n){if(!n.hasOwnProperty(i))continue;let r=n[i];if(r===void 0)continue;let s=Array.isArray(r),o=s?r[0]:r,a=s?r[1]:rr.None;e?t.push({propName:o,templateName:i,isSignal:(a&rr.SignalBased)!==0}):t.push({propName:o,templateName:i})}return t}function cC(n){let e=n.toLowerCase();return e==="svg"?Aw:e==="math"?Iw:null}var oa=class extends mc{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;get inputs(){let e=this.componentDef,t=e.inputTransforms,i=pv(e.inputs,!0);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return pv(this.componentDef.outputs,!1)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=qb(e.selectors),this.ngContentSelectors=e.ngContentSelectors??[],this.isBoundToModule=!!t}create(e,t,i,r){let s=ut(null);try{r=r||this.ngModule;let o=r instanceof Nn?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new $f(e,o):e,l=a.get(sr,null);if(l===null)throw new re(407,!1);let c=a.get(lC,null),u=a.get(sa,null),d={rendererFactory:l,sanitizer:c,changeDetectionScheduler:u},f=l.createRenderer(null,this.componentDef),h=this.componentDef.selectors[0][0]||"div",g=i?iT(f,i,this.componentDef.encapsulation,a):q_(f,h,cC(h)),y=512;this.componentDef.signals?y|=4096:this.componentDef.onPush||(y|=16);let m=null;g!==null&&(m=z_(g,a,!0));let p=i0(0,null,null,1,0,null,null,null,null,null,null),b=J_(null,p,null,y,null,null,d,f,a,null,m);b[li]=g,wh(b);let w=null;try{let S=i?["ng-version","19.1.4"]:Xb(this.componentDef.selectors[0]),A=Wh(p,li,2,"#host",S),[D,T]=s0(p,A,[this.componentDef]);r0(p,b,A,D,{},T);for(let O of D)A.mergedAttrs=ac(A.mergedAttrs,O.hostAttrs);A.mergedAttrs=ac(A.mergedAttrs,S),lh(A,A.mergedAttrs,!0),g&&(Y_(f,g,A),ua(g,b)),t!==void 0&&uC(A,this.ngContentSelectors,t),n0(p,b,A),G_(p,A,b),h_(p,A),w=Ni(A.index,b),b[oi]=w[oi],l0(p,b,null)}catch(S){throw w!==null&&eh(w),eh(b),S}finally{bh()}return new ch(this.componentType,b)}finally{ut(s)}}},ch=class extends oh{_rootLView;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(e,t){super(),this._rootLView=t,this._tNode=Zv(t[at],li),this.location=Rh(this._tNode,t),this.instance=Ni(this._tNode.index,t)[oi],this.hostView=this.changeDetectorRef=new Ws(t,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;Bh(s[at],s,r,e,t),this.previousInputValues.set(e,t);let o=Ni(this._tNode.index,s);Gh(o,1)}}get injector(){return new kr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function uC(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null&&s.length?Array.from(s):null)}}var Nc=(()=>{class n{static __NG_ELEMENT_ID__=dC}return n})();function dC(){let n=cr();return hC(n,nn())}var fC=Nc,E0=class extends fC{_lContainer;_hostTNode;_hostLView;constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return Rh(this._hostTNode,this._hostLView)}get injector(){return new kr(this._hostTNode,this._hostLView)}get parentInjector(){let e=Th(this._hostTNode,this._hostLView);if(m_(e)){let t=cc(e,this._hostLView),i=lc(e),r=t[at].data[i+8];return new kr(r,t)}else return new kr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=mv(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-Rn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=hv(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,fv(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!bw(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let l=o?e:new oa(Br(e)),c=i||this.parentInjector;if(!s&&l.ngModule==null){let y=(o?c:this.parentInjector).get(Nn,null);y&&(s=y)}let u=Br(l.componentType??{}),d=hv(this._lContainer,u?.id??null),f=d?.firstChild??null,h=l.create(c,r,f,s);return this.insertImpl(h.hostView,a,fv(this._hostTNode,d)),h}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(Nw(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let l=r[tn],c=new E0(l,l[Xn],l[tn]);c.detach(c.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return WT(o,r,s,i),e.attachToViewContainerRef(),Nv(Lf(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=mv(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=ih(this._lContainer,t);i&&(Jl(Lf(this._lContainer),t),f0(i[at],i))}detach(e){let t=this._adjustIndex(e,-1),i=ih(this._lContainer,t);return i&&Jl(Lf(this._lContainer),t)!=null?new Ws(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function mv(n){return n[rc]}function Lf(n){return n[rc]||(n[rc]=[])}function hC(n,e){let t,i=e[n.index];return Li(i)?t=i:(t=TT(i,e,null,n),e[n.index]=t,o0(e,t)),mC(t,e,n,i),new E0(t,n,e)}function pC(n,e){let t=n[Pn],i=t.createComment(""),r=di(e,n),s=t.parentNode(r);return hc(t,s,i,t.nextSibling(r),!1),i}var mC=gC;function gC(n,e,t,i){if(n[Vr])return;let r;t.type&8?r=Ri(i):r=pC(e,t),n[Vr]=r}var or=class{},aa=class{};var uh=class extends or{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new gc(this);constructor(e,t,i,r=!0){super(),this.ngModuleType=e,this._parent=t;let s=Lv(e);this._bootstrapComponents=j_(s.bootstrap),this._r3Injector=b_(e,t,[{provide:or,useValue:this},{provide:js,useValue:this.componentFactoryResolver},...i],mn(e),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},dh=class extends aa{moduleType;constructor(e){super(),this.moduleType=e}create(e){return new uh(this.moduleType,e,[])}};var yc=class extends or{injector;componentFactoryResolver=new gc(this);instance=null;constructor(e){super();let t=new ea([...e.providers,{provide:or,useValue:this},{provide:js,useValue:this.componentFactoryResolver}],e.parent||xh(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function jh(n,e,t=null){return new yc({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var yC=(()=>{class n{_injector;cachedInjectors=new Map;constructor(t){this._injector=t}getOrCreateStandaloneInjector(t){if(!t.standalone)return null;if(!this.cachedInjectors.has(t)){let i=Bv(!1,t.type),r=i.length>0?jh([i],this._injector,`Standalone[${t.type.name}]`):null;this.cachedInjectors.set(t,r)}return this.cachedInjectors.get(t)}ngOnDestroy(){try{for(let t of this.cachedInjectors.values())t!==null&&t.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=Re({token:n,providedIn:"environment",factory:()=>new n(ke(Nn))})}return n})();function fi(n){return _c(()=>{let e=w0(n),t=Mt(me({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===P_.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:e.standalone?r=>r.get(yC).getOrCreateStandaloneInjector(t):null,getExternalStyles:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||ui.Emulated,styles:n.styles||ri,_:null,schemas:n.schemas||null,tView:null,id:""});e.standalone&&Nh("NgStandalone"),b0(t);let i=n.dependencies;return t.directiveDefs=yv(i,!1),t.pipeDefs=yv(i,!0),t.id=xC(t),t})}function vC(n){return Br(n)||Fv(n)}function _C(n){return n!==null}function ur(n){return _c(()=>({type:n.type,bootstrap:n.bootstrap||ri,declarations:n.declarations||ri,imports:n.imports||ri,exports:n.exports||ri,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function gv(n,e){if(n==null)return Jo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=rr.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==rr.None?[i,a]:i,e[s]=o):t[s]=i}return t}function $h(n){return _c(()=>{let e=w0(n);return b0(e),e})}function M0(n){return{type:n.type,name:n.name,factory:null,pure:n.pure!==!1,standalone:n.standalone??!0,onDestroy:n.type.prototype.ngOnDestroy||null}}function w0(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||Jo,exportAs:n.exportAs||null,standalone:n.standalone??!0,signals:n.signals===!0,selectors:n.selectors||ri,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:gv(n.inputs,e),outputs:gv(n.outputs),debugInfo:null}}function b0(n){n.features?.forEach(e=>e(n))}function yv(n,e){if(!n)return null;let t=e?kv:vC;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(_C)}function xC(n){let e=0,t=typeof n.consts=="function"?"":n.consts,i=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,t,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery];for(let s of i.join("|"))e=Math.imul(31,e)+s.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function SC(n,e,t){return n[e]=t}function T0(n,e,t){let i=n[e];return Object.is(i,t)?!1:(n[e]=t,!0)}var qh=(()=>{class n{log(t){console.log(t)}warn(t){console.warn(t)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();var Xh=new Ue(""),da=new Ue(""),Pc=(()=>{class n{_ngZone;registry;_isZoneStable=!0;_callbacks=[];taskTrackingZone=null;constructor(t,i,r){this._ngZone=t,this.registry=i,Yh||(EC(r),r.addToWindow(i)),this._watchAngularEvents(),t.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{Tt.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let t=this._callbacks.pop();clearTimeout(t.timeoutId),t.doneCb()}});else{let t=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(t)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(t=>({source:t.source,creationLocation:t.creationLocation,data:t.data})):[]}addCallback(t,i,r){let s=-1;i&&i>0&&(s=setTimeout(()=>{this._callbacks=this._callbacks.filter(o=>o.timeoutId!==s),t()},i)),this._callbacks.push({doneCb:t,timeoutId:s,updateCb:r})}whenStable(t,i,r){if(r&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(t,i,r),this._runCallbacksIfReady()}registerApplication(t){this.registry.registerApplication(t,this)}unregisterApplication(t){this.registry.unregisterApplication(t)}findProviders(t,i,r){return[]}static \u0275fac=function(i){return new(i||n)(ke(Tt),ke(Oc),ke(da))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),Oc=(()=>{class n{_applications=new Map;registerApplication(t,i){this._applications.set(t,i)}unregisterApplication(t){this._applications.delete(t)}unregisterAllApplications(){this._applications.clear()}getTestability(t){return this._applications.get(t)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(t,i=!0){return Yh?.findTestabilityInTree(this,t,i)??null}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"platform"})}return n})();function EC(n){Yh=n}var Yh;function Zs(n){return!!n&&typeof n.then=="function"}function Zh(n){return!!n&&typeof n.subscribe=="function"}var C0=new Ue("");var D0=(()=>{class n{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((t,i)=>{this.resolve=t,this.reject=i});appInits=le(C0,{optional:!0})??[];injector=le(ci);constructor(){}runInitializers(){if(this.initialized)return;let t=[];for(let r of this.appInits){let s=qn(this.injector,r);if(Zs(s))t.push(s);else if(Zh(s)){let o=new Promise((a,l)=>{s.subscribe({complete:a,error:l})});t.push(o)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(t).then(()=>{i()}).catch(r=>{this.reject(r)}),t.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),MC=(()=>{class n{static \u0275prov=Re({token:n,providedIn:"root",factory:()=>new fh})}return n})(),fh=class{queuedEffectCount=0;queues=new Map;schedule(e){this.enqueue(e)}remove(e){let t=e.zone,i=this.queues.get(t);i.has(e)&&(i.delete(e),this.queuedEffectCount--)}enqueue(e){let t=e.zone;this.queues.has(t)||this.queues.set(t,new Set);let i=this.queues.get(t);i.has(e)||(this.queuedEffectCount++,i.add(e))}flush(){for(;this.queuedEffectCount>0;)for(let[e,t]of this.queues)e===null?this.flushQueue(t):e.run(()=>this.flushQueue(t))}flushQueue(e){for(let t of e)e.delete(t),this.queuedEffectCount--,t.run()}},Kh=new Ue("");function wC(){cy(()=>{throw new re(600,!1)})}function bC(n){return n.isBoundToModule}var TC=10;function CC(n,e,t){try{let i=t();return Zs(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}var Pi=(()=>{class n{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=le(bb);afterRenderManager=le(Fb);zonelessEnabled=le(Dh);rootEffectScheduler=le(MC);dirtyFlags=0;deferredDirtyFlags=0;tracingSnapshot=null;externalTestViews=new Set;afterTick=new Yt;get allViews(){return[...this.externalTestViews.keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];isStable=le(qs).hasPendingTasks.pipe(rt(t=>!t));constructor(){le(Ic,{optional:!0})}whenStable(){let t;return new Promise(i=>{t=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{t.unsubscribe()})}_injector=le(Nn);_rendererFactory=null;get injector(){return this._injector}bootstrap(t,i){let r=t instanceof mc;if(!this._injector.get(D0).done){let f=!r&&Uv(t),h=!1;throw new re(405,h)}let o;r?o=t:o=this._injector.get(js).resolveComponentFactory(t),this.componentTypes.push(o.componentType);let a=bC(o)?void 0:this._injector.get(or),l=i||o.selector,c=o.create(ci.NULL,[],l,a),u=c.location.nativeElement,d=c.injector.get(Xh,null);return d?.registerApplication(u),c.onDestroy(()=>{this.detachView(c.hostView),Yl(this.components,c),d?.unregisterApplication(u)}),this._loadComponent(c),c}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick=()=>{if(this.tracingSnapshot!==null){let i=this.tracingSnapshot;this.tracingSnapshot=null,i.run(V_.CHANGE_DETECTION,this._tick),i.dispose();return}if(this._runningTick)throw new re(101,!1);let t=ut(null);try{this._runningTick=!0,this.synchronize()}catch(i){this.internalErrorHandler(i)}finally{this._runningTick=!1,ut(t),this.afterTick.next()}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(sr,null,{optional:!0})),this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0;let t=0;for(;this.dirtyFlags!==0&&t++<TC;)this.synchronizeOnce()}synchronizeOnce(){if(this.dirtyFlags|=this.deferredDirtyFlags,this.deferredDirtyFlags=0,this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush()),this.dirtyFlags&7){let t=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:i,notifyErrorHandler:r}of this.allViews)DC(i,r,t,this.zonelessEnabled);if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}else this._rendererFactory?.begin?.(),this._rendererFactory?.end?.();this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:t})=>Tc(t))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(t){let i=t;this._views.push(i),i.attachToAppRef(this)}detachView(t){let i=t;Yl(this._views,i),i.detachFromAppRef()}_loadComponent(t){this.attachView(t.hostView),this.tick(),this.components.push(t),this._injector.get(Kh,[]).forEach(r=>r(t))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(t=>t()),this._views.slice().forEach(t=>t.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(t){return this._destroyListeners.push(t),()=>Yl(this._destroyListeners,t)}destroy(){if(this._destroyed)throw new re(406,!1);let t=this._injector;t.destroy&&!t.destroyed&&t.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Yl(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function DC(n,e,t,i){if(!t&&!Tc(n))return;v0(n,e,t&&!i?0:1)}function Qh(n,e,t){let i=nn(),r=$w();if(T0(i,r,e)){let s=Wr(),o=Kw();lT(s,o,i,n,e,i[Pn],t,!1)}return Qh}function vv(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";Bh(n,t,s[o],o,i)}function AC(n,e,t,i,r,s){let o=e.consts,a=Xy(o,r),l=Wh(e,n,2,i,a);return uT(e,t,l,Xy(o,s)),l.attrs!==null&&lh(l,l.attrs,!1),l.mergedAttrs!==null&&lh(l,l.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,l),l}function ge(n,e,t,i){let r=nn(),s=Wr(),o=li+n,a=r[Pn],l=s.firstCreatePass?AC(o,s,r,e,t,i):s.data[o],c=IC(s,r,l,a,e,n);r[o]=c;let u=jv(l);return Dc(l,!0),Y_(a,c,l),!c0(l)&&d_()&&h0(s,r,c,l),Fw()===0&&ua(c,r),kw(),u&&(Jb(s,r,l),G_(s,l,r)),i!==null&&eT(r,l),ge}function be(){let n=cr();t_()?Gw():(n=n.parent,Dc(n,!1));let e=n;Vw(e)&&zw(),Uw();let t=Wr();return t.firstCreatePass&&(h_(t,n),Wv(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&nb(e)&&vv(t,e,nn(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&ib(e)&&vv(t,e,nn(),e.stylesWithoutHost,!1),be}function Yn(n,e,t,i){return ge(n,e,t,i),be(),Yn}var IC=(n,e,t,i,r,s)=>(f_(!0),q_(i,r,Qw()));var vc="en-US";var RC=vc;function NC(n){typeof n=="string"&&(RC=n.toLowerCase().replace(/_/g,"-"))}var PC=(n,e,t)=>{};function Ks(n,e,t,i){let r=nn(),s=Wr(),o=cr();return LC(s,r,r[Pn],o,n,e,i),Ks}function OC(n,e,t,i){let r=n.cleanup;if(r!=null)for(let s=0;s<r.length-1;s+=2){let o=r[s];if(o===t&&r[s+1]===i){let a=e[nc],l=r[s+2];return a.length>l?a[l]:null}typeof o=="string"&&(s+=2)}return null}function LC(n,e,t,i,r,s,o){let a=jv(i),c=n.firstCreatePass&&Lw(n),u=e[oi],d=Ow(e),f=!0;if(i.type&3||o){let y=di(i,e),m=o?o(y):y,p=d.length,b=o?S=>o(Ri(S[i.index])):i.index,w=null;if(!o&&a&&(w=OC(n,e,r,i.index)),w!==null){let S=w.__ngLastListenerFn__||w;S.__ngNextListenerFn__=s,w.__ngLastListenerFn__=s,f=!1}else{s=xv(i,e,u,s),PC(y,r,s);let S=t.listen(m,r,s);d.push(s,S),c&&c.push(r,b,p,p+1)}}else s=xv(i,e,u,s);let h=i.outputs,g;if(f&&h!==null&&(g=h[r])){let y=g.length;if(y)for(let m=0;m<y;m+=2){let p=g[m],b=g[m+1],A=e[p][b].subscribe(s),D=d.length;d.push(s,A),c&&c.push(r,i.index,D,-(D+1))}}}function _v(n,e,t,i){let r=ut(null);try{return In(6,e,t),t(i)!==!1}catch(s){return a0(n,s),!1}finally{In(7,e,t),ut(r)}}function xv(n,e,t,i){return function r(s){if(s===Function)return i;let o=Gr(n)?Ni(n.index,e):e;Gh(o,5);let a=_v(e,t,i,s),l=r.__ngNextListenerFn__;for(;l;)a=_v(e,t,l,s)&&a,l=l.__ngNextListenerFn__;return a}}function FC(n,e,t,i){t>=n.data.length&&(n.data[t]=null,n.blueprint[t]=null),e[t]=i}function Se(n,e=""){let t=nn(),i=Wr(),r=n+li,s=i.firstCreatePass?Wh(i,r,1,e,null):i.data[r],o=kC(i,t,s,e,n);t[r]=o,d_()&&h0(i,t,o,s),Dc(s,!1)}var kC=(n,e,t,i,r)=>(f_(!0),Yb(e[Pn],i));function UC(n,e){let t=n[e];return t===Uh?void 0:t}function BC(n,e,t,i,r,s){let o=e+t;return T0(n,o,r)?SC(n,o+1,s?i.call(s,r):i(r)):UC(n,o+1)}function A0(n,e){let t=Wr(),i,r=n+li;t.firstCreatePass?(i=VC(e,t.pipeRegistry),t.data[r]=i,i.onDestroy&&(t.destroyHooks??=[]).push(r,i.onDestroy)):i=t.data[r];let s=i.factory||(i.factory=Ur(i.type,!0)),o,a=cn(Fi);try{let l=uc(!1),c=s();return uc(l),FC(t,nn(),r,c),c}finally{cn(a)}}function VC(n,e){if(e)for(let t=e.length-1;t>=0;t--){let i=e[t];if(n===i.name)return i}}function I0(n,e,t){let i=n+li,r=nn(),s=Rw(r,i);return zC(r,i)?BC(r,Ww(),e,s.transform,t,s):s.transform(t)}function zC(n,e){return n[at].data[e].pure}var hh=class{ngModuleFactory;componentFactories;constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},Jh=(()=>{class n{compileModuleSync(t){return new dh(t)}compileModuleAsync(t){return Promise.resolve(this.compileModuleSync(t))}compileModuleAndAllComponentsSync(t){let i=this.compileModuleSync(t),r=Lv(t),s=j_(r.declarations).reduce((o,a)=>{let l=Br(a);return l&&o.push(new oa(l)),o},[]);return new hh(i,s)}compileModuleAndAllComponentsAsync(t){return Promise.resolve(this.compileModuleAndAllComponentsSync(t))}clearCache(){}clearCacheFor(t){}getModuleId(t){}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var HC=(()=>{class n{zone=le(Tt);changeDetectionScheduler=le(sa);applicationRef=le(Pi);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function GC({ngZoneFactory:n,ignoreChangesOutsideZone:e,scheduleInRootZone:t}){return n??=()=>new Tt(Mt(me({},WC()),{scheduleInRootZone:t})),[{provide:Tt,useFactory:n},{provide:Gs,multi:!0,useFactory:()=>{let i=le(HC,{optional:!0});return()=>i.initialize()}},{provide:Gs,multi:!0,useFactory:()=>{let i=le(jC);return()=>{i.initialize()}}},e===!0?{provide:C_,useValue:!0}:[],{provide:D_,useValue:t??T_}]}function WC(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var jC=(()=>{class n{subscription=new Ot;initialized=!1;zone=le(Tt);pendingTasks=le(qs);initialize(){if(this.initialized)return;this.initialized=!0;let t=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(t=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{Tt.assertNotInAngularZone(),queueMicrotask(()=>{t!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(t),t=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{Tt.assertInAngularZone(),t??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var $C=(()=>{class n{appRef=le(Pi);taskService=le(qs);ngZone=le(Tt);zonelessEnabled=le(Dh);tracing=le(Ic,{optional:!0});disableScheduling=le(C_,{optional:!0})??!1;zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new Ot;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(fc):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(le(D_,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{this.runningTick||this.cleanup()})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()})),this.disableScheduling||=!this.zonelessEnabled&&(this.ngZone instanceof Jf||!this.zoneIsDefined)}notify(t){if(!this.zonelessEnabled&&t===5)return;let i=!1;switch(t){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 8:{this.appRef.deferredDirtyFlags|=8;break}case 6:{this.appRef.dirtyFlags|=2,i=!0;break}case 13:{this.appRef.dirtyFlags|=16,i=!0;break}case 14:{this.appRef.dirtyFlags|=2,i=!0;break}case 12:{i=!0;break}case 10:case 9:case 7:case 11:default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick(i))return;let r=this.useMicrotaskScheduler?tv:A_;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>r(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>r(()=>this.tick()))}shouldScheduleTick(t){return!(this.disableScheduling&&!t||this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(fc+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let t=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){throw this.taskService.remove(t),i}finally{this.cleanup()}this.useMicrotaskScheduler=!0,tv(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(t)})}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let t=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(t)}}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function qC(){return typeof $localize<"u"&&$localize.locale||vc}var ep=new Ue("",{providedIn:"root",factory:()=>le(ep,Xe.Optional|Xe.SkipSelf)||qC()});var ph=new Ue(""),XC=new Ue("");function Xo(n){return!n.moduleRef}function YC(n){let e=Xo(n)?n.r3Injector:n.moduleRef.injector,t=e.get(Tt);return t.run(()=>{Xo(n)?n.r3Injector.resolveInjectorInitializers():n.moduleRef.resolveInjectorInitializers();let i=e.get(ir,null),r;if(t.runOutsideAngular(()=>{r=t.onError.subscribe({next:s=>{i.handleError(s)}})}),Xo(n)){let s=()=>e.destroy(),o=n.platformInjector.get(ph);o.add(s),e.onDestroy(()=>{r.unsubscribe(),o.delete(s)})}else{let s=()=>n.moduleRef.destroy(),o=n.platformInjector.get(ph);o.add(s),n.moduleRef.onDestroy(()=>{Yl(n.allPlatformModules,n.moduleRef),r.unsubscribe(),o.delete(s)})}return CC(i,t,()=>{let s=e.get(D0);return s.runInitializers(),s.donePromise.then(()=>{let o=e.get(ep,vc);if(NC(o||vc),!e.get(XC,!0))return Xo(n)?e.get(Pi):(n.allPlatformModules.push(n.moduleRef),n.moduleRef);if(Xo(n)){let l=e.get(Pi);return n.rootComponent!==void 0&&l.bootstrap(n.rootComponent),l}else return ZC(n.moduleRef,n.allPlatformModules),n.moduleRef})})})}function ZC(n,e){let t=n.injector.get(Pi);if(n._bootstrapComponents.length>0)n._bootstrapComponents.forEach(i=>t.bootstrap(i));else if(n.instance.ngDoBootstrap)n.instance.ngDoBootstrap(t);else throw new re(-403,!1);e.push(n)}var Zl=null;function KC(n=[],e){return ci.create({name:e,providers:[{provide:Mc,useValue:"platform"},{provide:ph,useValue:new Set([()=>Zl=null])},...n]})}function QC(n=[]){if(Zl)return Zl;let e=KC(n);return Zl=e,wC(),JC(e),e}function JC(n){let e=n.get(Oh,null);qn(n,()=>{e?.forEach(t=>t())})}var Qs=(()=>{class n{static __NG_ELEMENT_ID__=eD}return n})();function eD(n){return tD(cr(),nn(),(n&16)===16)}function tD(n,e,t){if(Gr(n)&&!t){let i=Ni(n.index,e);return new Ws(i,i)}else if(n.type&175){let i=e[ai];return new Ws(i,e)}return null}var R0=(()=>{class n{constructor(t){}static \u0275fac=function(i){return new(i||n)(ke(Pi))};static \u0275mod=ur({type:n});static \u0275inj=lr({})}return n})();function N0(n){try{let{rootComponent:e,appProviders:t,platformProviders:i}=n,r=QC(i),s=[GC({}),{provide:sa,useExisting:$C},...t||[]],o=new yc({providers:s,parent:r,debugName:"",runEnvironmentInitializers:!1});return YC({r3Injector:o.injector,platformInjector:r,rootComponent:e})}catch(e){return Promise.reject(e)}}function tp(n){let e=ut(null);try{return n()}finally{ut(e)}}var Sv=class{[Ts];constructor(e){this[Ts]=e}destroy(){this[Ts].destroy()}};var k0=null;function qr(){return k0}function U0(n){k0??=n}var Lc=class{};var un=new Ue(""),B0=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>le(oD),providedIn:"platform"})}return n})();var oD=(()=>{class n extends B0{_location;_history;_doc=le(un);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return qr().getBaseHref(this._doc)}onPopState(t){let i=qr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",t,!1),()=>i.removeEventListener("popstate",t)}onHashChange(t){let i=qr().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",t,!1),()=>i.removeEventListener("hashchange",t)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(t){this._location.pathname=t}pushState(t,i,r){this._history.pushState(t,i,r)}replaceState(t,i,r){this._history.replaceState(t,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(t=0){this._history.go(t)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>new n,providedIn:"platform"})}return n})();function V0(n,e){return n?e?n.endsWith("/")?e.startsWith("/")?n+e.slice(1):n+e:e.startsWith("/")?n+e:`${n}/${e}`:n:e}function P0(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function $r(n){return n&&n[0]!=="?"?"?"+n:n}var kc=(()=>{class n{historyGo(t){throw new Error("")}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>le(z0),providedIn:"root"})}return n})(),aD=new Ue(""),z0=(()=>{class n extends kc{_platformLocation;_baseHref;_removeListenerFns=[];constructor(t,i){super(),this._platformLocation=t,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??le(un).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(t){this._removeListenerFns.push(this._platformLocation.onPopState(t),this._platformLocation.onHashChange(t))}getBaseHref(){return this._baseHref}prepareExternalUrl(t){return V0(this._baseHref,t)}path(t=!1){let i=this._platformLocation.pathname+$r(this._platformLocation.search),r=this._platformLocation.hash;return r&&t?`${i}${r}`:i}pushState(t,i,r,s){let o=this.prepareExternalUrl(r+$r(s));this._platformLocation.pushState(t,i,o)}replaceState(t,i,r,s){let o=this.prepareExternalUrl(r+$r(s));this._platformLocation.replaceState(t,i,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(t=0){this._platformLocation.historyGo?.(t)}static \u0275fac=function(i){return new(i||n)(ke(B0),ke(aD,8))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var fa=(()=>{class n{_subject=new Yt;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(t){this._locationStrategy=t;let i=this._locationStrategy.getBaseHref();this._basePath=uD(P0(O0(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(t=!1){return this.normalize(this._locationStrategy.path(t))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(t,i=""){return this.path()==this.normalize(t+$r(i))}normalize(t){return n.stripTrailingSlash(cD(this._basePath,O0(t)))}prepareExternalUrl(t){return t&&t[0]!=="/"&&(t="/"+t),this._locationStrategy.prepareExternalUrl(t)}go(t,i="",r=null){this._locationStrategy.pushState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+$r(i)),r)}replaceState(t,i="",r=null){this._locationStrategy.replaceState(r,"",t,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(t+$r(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(t=0){this._locationStrategy.historyGo?.(t)}onUrlChange(t){return this._urlChangeListeners.push(t),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(t);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(t="",i){this._urlChangeListeners.forEach(r=>r(t,i))}subscribe(t,i,r){return this._subject.subscribe({next:t,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=$r;static joinWithSlash=V0;static stripTrailingSlash=P0;static \u0275fac=function(i){return new(i||n)(ke(kc))};static \u0275prov=Re({token:n,factory:()=>lD(),providedIn:"root"})}return n})();function lD(){return new fa(ke(kc))}function cD(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function O0(n){return n.replace(/\/index.html$/,"")}function uD(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function H0(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}function dD(n,e){return new re(2100,!1)}var np=class{createSubscription(e,t){return tp(()=>e.subscribe({next:t,error:i=>{throw i}}))}dispose(e){tp(()=>e.unsubscribe())}},ip=class{createSubscription(e,t){return e.then(t,i=>{throw i})}dispose(e){}},fD=new ip,hD=new np,G0=(()=>{class n{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;constructor(t){this._ref=t}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(t){if(!this._obj){if(t)try{this.markForCheckOnValueUpdate=!1,this._subscribe(t)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return t!==this._obj?(this._dispose(),this.transform(t)):this._latestValue}_subscribe(t){this._obj=t,this._strategy=this._selectStrategy(t),this._subscription=this._strategy.createSubscription(t,i=>this._updateLatestValue(t,i))}_selectStrategy(t){if(Zs(t))return fD;if(Zh(t))return hD;throw dD(n,t)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(t,i){t===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||n)(Fi(Qs,16))};static \u0275pipe=M0({name:"async",type:n,pure:!1})}return n})();var Uc=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=ur({type:n});static \u0275inj=lr({})}return n})(),W0="browser",pD="server";function rp(n){return n===pD}var Fc=class{};var op=class extends Lc{supportsDOMEvents=!0},ap=class n extends op{static makeCurrent(){U0(new n)}onAndCancel(e,t,i,r){return e.addEventListener(t,i,r),()=>{e.removeEventListener(t,i,r)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.remove()}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=gD();return t==null?null:yD(t)}resetBaseElement(){ha=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return H0(document.cookie,e)}},ha=null;function gD(){return ha=ha||document.querySelector("base"),ha?ha.getAttribute("href"):null}function yD(n){return new URL(n,document.baseURI).pathname}var lp=class{addToWindow(e){ar.getAngularTestability=(i,r=!0)=>{let s=e.findTestabilityInTree(i,r);if(s==null)throw new re(5103,!1);return s},ar.getAllAngularTestabilities=()=>e.getAllTestabilities(),ar.getAllAngularRootElements=()=>e.getAllRootElements();let t=i=>{let r=ar.getAllAngularTestabilities(),s=r.length,o=function(){s--,s==0&&i()};r.forEach(a=>{a.whenStable(o)})};ar.frameworkStabilizers||(ar.frameworkStabilizers=[]),ar.frameworkStabilizers.push(t)}findTestabilityInTree(e,t,i){if(t==null)return null;let r=e.getTestability(t);return r??(i?qr().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},vD=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),cp=new Ue(""),Y0=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,i){this._zone=i,t.forEach(r=>{r.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,i,r,s){return this._findPluginFor(i).addEventListener(t,i,r,s)}getZone(){return this._zone}_findPluginFor(t){let i=this._eventNameToPlugin.get(t);if(i)return i;if(i=this._plugins.find(s=>s.supports(t)),!i)throw new re(5101,!1);return this._eventNameToPlugin.set(t,i),i}static \u0275fac=function(i){return new(i||n)(ke(cp),ke(Tt))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),Vc=class{_doc;constructor(e){this._doc=e}manager},Bc="ng-app-id";function j0(n){for(let e of n)e.remove()}function $0(n,e){let t=e.createElement("style");return t.textContent=n,t}function _D(n,e,t,i){let r=n.head?.querySelectorAll(`style[${Bc}="${e}"],link[${Bc}="${e}"]`);if(r)for(let s of r)s.removeAttribute(Bc),s instanceof HTMLLinkElement?i.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&t.set(s.textContent,{usage:0,elements:[s]})}function up(n,e){let t=e.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var Z0=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,i,r,s={}){this.doc=t,this.appId=i,this.nonce=r,this.isServer=rp(s),_D(t,i,this.inline,this.external),this.hosts.add(t.head)}addStyles(t,i){for(let r of t)this.addUsage(r,this.inline,$0);i?.forEach(r=>this.addUsage(r,this.external,up))}removeStyles(t,i){for(let r of t)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(t,i,r){let s=i.get(t);s?s.usage++:i.set(t,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(t,this.doc)))})}removeUsage(t,i){let r=i.get(t);r&&(r.usage--,r.usage<=0&&(j0(r.elements),i.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])j0(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(t,$0(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(t,up(i,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,i){return this.nonce&&i.setAttribute("nonce",this.nonce),this.isServer&&i.setAttribute(Bc,this.appId),t.appendChild(i)}static \u0275fac=function(i){return new(i||n)(ke(un),ke(Ph),ke(Fh,8),ke(Ys))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),sp={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},fp=/%COMP%/g;var K0="%COMP%",xD=`_nghost-${K0}`,SD=`_ngcontent-${K0}`,ED=!0,MD=new Ue("",{providedIn:"root",factory:()=>ED});function wD(n){return SD.replace(fp,n)}function bD(n){return xD.replace(fp,n)}function Q0(n,e){return e.map(t=>t.replace(fp,n))}var zc=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,i,r,s,o,a,l,c=null,u=null){this.eventManager=t,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.platformId=a,this.ngZone=l,this.nonce=c,this.tracingService=u,this.platformIsServer=rp(a),this.defaultRenderer=new pa(t,o,l,this.platformIsServer,this.tracingService)}createRenderer(t,i){if(!t||!i)return this.defaultRenderer;this.platformIsServer&&i.encapsulation===ui.ShadowDom&&(i=Mt(me({},i),{encapsulation:ui.Emulated}));let r=this.getOrCreateRenderer(t,i);return r instanceof Hc?r.applyToHost(t):r instanceof ma&&r.applyStyles(),r}getOrCreateRenderer(t,i){let r=this.rendererByCompId,s=r.get(i.id);if(!s){let o=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,d=this.platformIsServer,f=this.tracingService;switch(i.encapsulation){case ui.Emulated:s=new Hc(l,c,i,this.appId,u,o,a,d,f);break;case ui.ShadowDom:return new dp(l,c,t,i,o,a,this.nonce,d,f);default:s=new ma(l,c,i,u,o,a,d,f);break}r.set(i.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(t){this.rendererByCompId.delete(t)}static \u0275fac=function(i){return new(i||n)(ke(Y0),ke(Z0),ke(Ph),ke(MD),ke(un),ke(Ys),ke(Tt),ke(Fh),ke(Ic,8))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),pa=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(e,t,i,r,s){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.tracingService=s}destroy(){}destroyNode=null;createElement(e,t){return t?this.doc.createElementNS(sp[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(q0(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(q0(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){t.remove()}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new re(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=sp[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=sp[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(jr.DashCase|jr.Important)?e.style.setProperty(t,i,r&jr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&jr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i,r){if(typeof e=="string"&&(e=qr().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);let s=this.decoratePreventDefault(i);return this.tracingService!==null&&this.tracingService.wrapEventListener&&(s=this.tracingService.wrapEventListener(e,t,s)),this.eventManager.addEventListener(e,t,s,r)}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function q0(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var dp=class extends pa{sharedStylesHost;hostEl;shadowRoot;constructor(e,t,i,r,s,o,a,l,c){super(e,s,o,l,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let u=r.styles;u=Q0(r.id,u);for(let f of u){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=f,this.shadowRoot.appendChild(h)}let d=r.getExternalStyles?.();if(d)for(let f of d){let h=up(f,s);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(null,t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},ma=class extends pa{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(e,t,i,r,s,o,a,l,c){super(e,s,o,a,l),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r;let u=i.styles;this.styles=c?Q0(c,u):u,this.styleUrls=i.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Hc=class extends ma{contentAttr;hostAttr;constructor(e,t,i,r,s,o,a,l,c){let u=r+"-"+i.id;super(e,t,i,s,o,a,l,c,u),this.contentAttr=wD(u),this.hostAttr=bD(u)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},TD=(()=>{class n extends Vc{constructor(t){super(t)}supports(t){return!0}addEventListener(t,i,r,s){return t.addEventListener(i,r,s),()=>this.removeEventListener(t,i,r,s)}removeEventListener(t,i,r,s){return t.removeEventListener(i,r,s)}static \u0275fac=function(i){return new(i||n)(ke(un))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),X0=["alt","control","meta","shift"],CD={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},DD={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},AD=(()=>{class n extends Vc{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,i,r,s){let o=n.parseEventName(i),a=n.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>qr().onAndCancel(t,o.domEventName,a,s))}static parseEventName(t){let i=t.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let s=n._normalizeKey(i.pop()),o="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),o="code."),X0.forEach(c=>{let u=i.indexOf(c);u>-1&&(i.splice(u,1),o+=c+".")}),o+=s,i.length!=0||s.length===0)return null;let l={};return l.domEventName=r,l.fullKey=o,l}static matchEventFullKeyCode(t,i){let r=CD[t.key]||t.key,s="";return i.indexOf("code.")>-1&&(r=t.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),X0.forEach(o=>{if(o!==r){let a=DD[o];a(t)&&(s+=o+".")}}),s+=r,s===i)}static eventCallback(t,i,r){return s=>{n.matchEventFullKeyCode(s,t)&&r.runGuarded(()=>i(s))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(i){return new(i||n)(ke(un))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})();function J0(n,e){return N0(me({rootComponent:n},ID(e)))}function ID(n){return{appProviders:[...ex,...n?.providers??[]],platformProviders:OD}}function RD(){ap.makeCurrent()}function ND(){return new ir}function PD(){return U_(document),document}var OD=[{provide:Ys,useValue:W0},{provide:Oh,useValue:RD,multi:!0},{provide:un,useFactory:PD,deps:[]}];var LD=[{provide:da,useClass:lp,deps:[]},{provide:Xh,useClass:Pc,deps:[Tt,Oc,da]},{provide:Pc,useClass:Pc,deps:[Tt,Oc,da]}],ex=[{provide:Mc,useValue:"root"},{provide:ir,useFactory:ND,deps:[]},{provide:cp,useClass:TD,multi:!0,deps:[un,Tt,Ys]},{provide:cp,useClass:AD,multi:!0,deps:[un]},zc,Z0,Y0,{provide:sr,useExisting:zc},{provide:Fc,useClass:vD,deps:[]},[]],Gc=(()=>{class n{constructor(){}static \u0275fac=function(i){return new(i||n)};static \u0275mod=ur({type:n});static \u0275inj=lr({providers:[...ex,...LD],imports:[Uc,R0]})}return n})();var tx=(()=>{class n{_doc;constructor(t){this._doc=t}getTitle(){return this._doc.title}setTitle(t){this._doc.title=t||""}static \u0275fac=function(i){return new(i||n)(ke(un))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var je="primary",Ra=Symbol("RouteTitle"),yp=class{params;constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function ro(n){return new yp(n)}function kD(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o[0]===":")r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function UD(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!pi(n[t],e[t]))return!1;return!0}function pi(n,e){let t=n?vp(n):void 0,i=e?vp(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!cx(n[r],e[r]))return!1;return!0}function vp(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function cx(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function ux(n){return n.length>0?n[n.length-1]:null}function dr(n){return Mf(n)?n:Zs(n)?Ut(Promise.resolve(n)):Ve(n)}var BD={exact:fx,subset:hx},dx={exact:VD,subset:zD,ignored:()=>!0};function nx(n,e,t){return BD[t.paths](n.root,e.root,t.matrixParams)&&dx[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function VD(n,e){return pi(n,e)}function fx(n,e,t){if(!Yr(n.segments,e.segments)||!$c(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!fx(n.children[i],e.children[i],t))return!1;return!0}function zD(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>cx(n[t],e[t]))}function hx(n,e,t){return px(n,e,e.segments,t)}function px(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!Yr(r,t)||e.hasChildren()||!$c(r,t,i))}else if(n.segments.length===t.length){if(!Yr(n.segments,t)||!$c(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!hx(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!Yr(n.segments,r)||!$c(n.segments,r,i)||!n.children[je]?!1:px(n.children[je],e,s,i)}}function $c(n,e,t){return e.every((i,r)=>dx[t](n[r].parameters,i.parameters))}var Ui=class{root;queryParams;fragment;_queryParamMap;constructor(e=new mt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=ro(this.queryParams),this._queryParamMap}toString(){return WD.serialize(this)}},mt=class{segments;children;parent=null;constructor(e,t){this.segments=e,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return qc(this)}},Xr=class{path;parameters;_parameterMap;constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=ro(this.parameters),this._parameterMap}toString(){return gx(this)}};function HD(n,e){return Yr(n,e)&&n.every((t,i)=>pi(t.parameters,e[i].parameters))}function Yr(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function GD(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===je&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==je&&(t=t.concat(e(r,i)))}),t}var Wp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>new Sa,providedIn:"root"})}return n})(),Sa=class{parse(e){let t=new xp(e);return new Ui(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${ga(e.root,!0)}`,i=qD(e.queryParams),r=typeof e.fragment=="string"?`#${jD(e.fragment)}`:"";return`${t}${i}${r}`}},WD=new Sa;function qc(n){return n.segments.map(e=>gx(e)).join("/")}function ga(n,e){if(!n.hasChildren())return qc(n);if(e){let t=n.children[je]?ga(n.children[je],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==je&&i.push(`${r}:${ga(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=GD(n,(i,r)=>r===je?[ga(n.children[je],!1)]:[`${r}:${ga(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[je]!=null?`${qc(n)}/${t[0]}`:`${qc(n)}/(${t.join("//")})`}}function mx(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Wc(n){return mx(n).replace(/%3B/gi,";")}function jD(n){return encodeURI(n)}function _p(n){return mx(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Xc(n){return decodeURIComponent(n)}function ix(n){return Xc(n.replace(/\+/g,"%20"))}function gx(n){return`${_p(n.path)}${$D(n.parameters)}`}function $D(n){return Object.entries(n).map(([e,t])=>`;${_p(e)}=${_p(t)}`).join("")}function qD(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Wc(t)}=${Wc(r)}`).join("&"):`${Wc(t)}=${Wc(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var XD=/^[^\/()?;#]+/;function hp(n){let e=n.match(XD);return e?e[0]:""}var YD=/^[^\/()?;=#]+/;function ZD(n){let e=n.match(YD);return e?e[0]:""}var KD=/^[^=?&#]+/;function QD(n){let e=n.match(KD);return e?e[0]:""}var JD=/^[^&#]+/;function eA(n){let e=n.match(JD);return e?e[0]:""}var xp=class{url;remaining;constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new mt([],{}):new mt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[je]=new mt(e,t)),i}parseSegment(){let e=hp(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new re(4009,!1);return this.capture(e),new Xr(Xc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=ZD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=hp(this.remaining);r&&(i=r,this.capture(i))}e[Xc(t)]=Xc(i)}parseQueryParam(e){let t=QD(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=eA(this.remaining);o&&(i=o,this.capture(i))}let r=ix(t),s=ix(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=hp(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new re(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=je);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[je]:new mt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new re(4011,!1)}};function yx(n){return n.segments.length>0?new mt([],{[je]:n}):n}function vx(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=vx(r);if(i===je&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new mt(n.segments,e);return tA(t)}function tA(n){if(n.numberOfChildren===1&&n.children[je]){let e=n.children[je];return new mt(n.segments.concat(e.segments),e.children)}return n}function Ea(n){return n instanceof Ui}function nA(n,e,t=null,i=null){let r=_x(n);return xx(r,e,t,i)}function _x(n){let e;function t(s){let o={};for(let l of s.children){let c=t(l);o[l.outlet]=c}let a=new mt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=yx(i);return e??r}function xx(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return pp(r,r,r,t,i);let s=iA(e);if(s.toRoot())return pp(r,r,new mt([],{}),t,i);let o=rA(s,r,n),a=o.processChildren?va(o.segmentGroup,o.index,s.commands):Ex(o.segmentGroup,o.index,s.commands);return pp(r,o.segmentGroup,a,t,i)}function Yc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Ma(n){return typeof n=="object"&&n!=null&&n.outlets}function pp(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([l,c])=>{s[l]=Array.isArray(c)?c.map(u=>`${u}`):`${c}`});let o;n===e?o=t:o=Sx(n,e,t);let a=yx(vx(o));return new Ui(a,s,r)}function Sx(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Sx(s,e,t)}),new mt(n.segments,i)}var Zc=class{isAbsolute;numberOfDoubleDots;commands;constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Yc(i[0]))throw new re(4003,!1);let r=i.find(Ma);if(r&&r!==ux(i))throw new re(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function iA(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Zc(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Zc(t,e,i)}var to=class{segmentGroup;processChildren;index;constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function rA(n,e,t){if(n.isAbsolute)return new to(e,!0,0);if(!t)return new to(e,!1,NaN);if(t.parent===null)return new to(t,!0,0);let i=Yc(n.commands[0])?0:1,r=t.segments.length-1+i;return sA(t,r,n.numberOfDoubleDots)}function sA(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new re(4005,!1);r=i.segments.length}return new to(i,!1,r-s)}function oA(n){return Ma(n[0])?n[0].outlets:{[je]:n}}function Ex(n,e,t){if(n??=new mt([],{}),n.segments.length===0&&n.hasChildren())return va(n,e,t);let i=aA(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new mt(n.segments.slice(0,i.pathIndex),{});return s.children[je]=new mt(n.segments.slice(i.pathIndex),n.children),va(s,0,r)}else return i.match&&r.length===0?new mt(n.segments,{}):i.match&&!n.hasChildren()?Sp(n,e,t):i.match?va(n,0,r):Sp(n,e,t)}function va(n,e,t){if(t.length===0)return new mt(n.segments,{});{let i=oA(t),r={};if(Object.keys(i).some(s=>s!==je)&&n.children[je]&&n.numberOfChildren===1&&n.children[je].segments.length===0){let s=va(n.children[je],e,t);return new mt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Ex(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new mt(n.segments,r)}}function aA(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Ma(a))break;let l=`${a}`,c=i<t.length-1?t[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!sx(l,c,o))return s;i+=2}else{if(!sx(l,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Sp(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Ma(s)){let l=lA(s.outlets);return new mt(i,l)}if(r===0&&Yc(t[0])){let l=n.segments[e];i.push(new Xr(l.path,rx(t[0]))),r++;continue}let o=Ma(s)?s.outlets[je]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Yc(a)?(i.push(new Xr(o,rx(a))),r+=2):(i.push(new Xr(o,{})),r++)}return new mt(i,{})}function lA(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=Sp(new mt([],{}),0,i))}),e}function rx(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function sx(n,e,t){return n==t.path&&pi(e,t.parameters)}var _a="imperative",qt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(qt||{}),On=class{id;url;constructor(e,t){this.id=e,this.url=t}},wa=class extends On{type=qt.NavigationStart;navigationTrigger;restoredState;constructor(e,t,i="imperative",r=null){super(e,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Zr=class extends On{urlAfterRedirects;type=qt.NavigationEnd;constructor(e,t,i){super(e,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},vn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(vn||{}),Ep=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Ep||{}),ki=class extends On{reason;code;type=qt.NavigationCancel;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},Kr=class extends On{reason;code;type=qt.NavigationSkipped;constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r}},ba=class extends On{error;target;type=qt.NavigationError;constructor(e,t,i,r){super(e,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Kc=class extends On{urlAfterRedirects;state;type=qt.RoutesRecognized;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Mp=class extends On{urlAfterRedirects;state;type=qt.GuardsCheckStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wp=class extends On{urlAfterRedirects;state;shouldActivate;type=qt.GuardsCheckEnd;constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},bp=class extends On{urlAfterRedirects;state;type=qt.ResolveStart;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Tp=class extends On{urlAfterRedirects;state;type=qt.ResolveEnd;constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},Cp=class{route;type=qt.RouteConfigLoadStart;constructor(e){this.route=e}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Dp=class{route;type=qt.RouteConfigLoadEnd;constructor(e){this.route=e}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Ap=class{snapshot;type=qt.ChildActivationStart;constructor(e){this.snapshot=e}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Ip=class{snapshot;type=qt.ChildActivationEnd;constructor(e){this.snapshot=e}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Rp=class{snapshot;type=qt.ActivationStart;constructor(e){this.snapshot=e}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Np=class{snapshot;type=qt.ActivationEnd;constructor(e){this.snapshot=e}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ta=class{},so=class{url;navigationBehaviorOptions;constructor(e,t){this.url=e,this.navigationBehaviorOptions=t}};function cA(n,e){return n.providers&&!n._injector&&(n._injector=jh(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Zn(n){return n.outlet||je}function uA(n,e){let t=n.filter(i=>Zn(i)===e);return t.push(...n.filter(i=>Zn(i)!==e)),t}function Na(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var Pp=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return Na(this.route?.snapshot)??this.rootInjector}constructor(e){this.rootInjector=e,this.children=new ru(this.rootInjector)}},ru=(()=>{class n{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new Pp(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||n)(ke(Nn))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Qc=class{_root;constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=Op(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=Op(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=Lp(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return Lp(e,this._root).map(t=>t.value)}};function Op(n,e){if(n===e.value)return e;for(let t of e.children){let i=Op(n,t);if(i)return i}return null}function Lp(n,e){if(n===e.value)return[e];for(let t of e.children){let i=Lp(n,t);if(i.length)return i.unshift(e),i}return[]}var yn=class{value;children;constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function eo(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var Jc=class extends Qc{snapshot;constructor(e,t){super(e),this.snapshot=t,jp(this,e)}toString(){return this.snapshot.toString()}};function Mx(n){let e=dA(n),t=new kt([new Xr("",{})]),i=new kt({}),r=new kt({}),s=new kt({}),o=new kt(""),a=new oo(t,i,s,o,r,je,n,e.root);return a.snapshot=e.root,new Jc(new yn(a,[]),e)}function dA(n){let e={},t={},i={},r="",s=new no([],e,i,r,t,je,n,null,{});return new tu("",new yn(s,[]))}var oo=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(e,t,i,r,s,o,a,l){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(rt(c=>c[Ra]))??Ve(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(rt(e=>ro(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(rt(e=>ro(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function eu(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:me(me({},e.params),n.params),data:me(me({},e.data),n.data),resolve:me(me(me(me({},n.data),e.data),r?.data),n._resolvedData)}:i={params:me({},n.params),data:me({},n.data),resolve:me(me({},n.data),n._resolvedData??{})},r&&bx(r)&&(i.resolve[Ra]=r.title),i}var no=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;get title(){return this.data?.[Ra]}constructor(e,t,i,r,s,o,a,l,c){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=l,this._resolve=c}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ro(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ro(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},tu=class extends Qc{url;constructor(e,t){super(t),this.url=e,jp(this,t)}toString(){return wx(this._root)}};function jp(n,e){e.value._routerState=n,e.children.forEach(t=>jp(n,t))}function wx(n){let e=n.children.length>0?` { ${n.children.map(wx).join(", ")} } `:"";return`${n.value}${e}`}function mp(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,pi(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),pi(e.params,t.params)||n.paramsSubject.next(t.params),UD(e.url,t.url)||n.urlSubject.next(t.url),pi(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Fp(n,e){let t=pi(n.params,e.params)&&HD(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Fp(n.parent,e.parent))}function bx(n){return typeof n.title=="string"||n.title===null}var fA=new Ue(""),hA=(()=>{class n{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=je;activateEvents=new en;deactivateEvents=new en;attachEvents=new en;detachEvents=new en;routerOutletData=R_(void 0);parentContexts=le(ru);location=le(Nc);changeDetector=le(Qs);inputBinder=le($p,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new re(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new re(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new re(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new re(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new kp(t,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||n)};static \u0275dir=$h({type:n,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Sh]})}return n})(),kp=class n{route;childContexts;parent;outletData;__ngOutletInjector(e){return new n(this.route,this.childContexts,e,this.outletData)}constructor(e,t,i,r){this.route=e,this.childContexts=t,this.parent=i,this.outletData=r}get(e,t){return e===oo?this.route:e===ru?this.childContexts:e===fA?this.outletData:this.parent.get(e,t)}},$p=new Ue("");function pA(n,e,t){let i=Ca(n,e._root,t?t._root:void 0);return new Jc(i,e)}function Ca(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=mA(n,e,t);return new yn(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ca(n,a)),o}}let i=gA(e.value),r=e.children.map(s=>Ca(n,s));return new yn(i,r)}}function mA(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Ca(n,i,r);return Ca(n,i)})}function gA(n){return new oo(new kt(n.url),new kt(n.params),new kt(n.queryParams),new kt(n.fragment),new kt(n.data),n.outlet,n.component,n)}var Da=class{redirectTo;navigationBehaviorOptions;constructor(e,t){this.redirectTo=e,this.navigationBehaviorOptions=t}},Tx="ngNavigationCancelingError";function nu(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=Ea(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Cx(!1,vn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Cx(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Tx]=!0,t.cancellationCode=e,t}function yA(n){return Dx(n)&&Ea(n.url)}function Dx(n){return!!n&&n[Tx]}var vA=(n,e,t,i)=>rt(r=>(new Up(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Up=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),mp(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=eo(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=eo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=eo(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=eo(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new Np(s.value.snapshot))}),e.children.length&&this.forwardEvent(new Ip(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(mp(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),mp(a.route.value),this.activateChildRoutes(e,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}else this.activateChildRoutes(e,null,i)}},iu=class{path;route;constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},io=class{component;route;constructor(e,t){this.component=e,this.route=t}};function _A(n,e,t){let i=n._root,r=e?e._root:null;return ya(i,r,t,[i.value])}function xA(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function lo(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!Tv(n)?n:e.get(n):i}function ya(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=eo(e);return n.children.forEach(o=>{SA(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>xa(a,t.getContext(o),r)),r}function SA(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let l=EA(o,s,s.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new iu(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ya(n,e,a?a.children:null,i,r):ya(n,e,t,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new io(a.outlet.component,o))}else o&&xa(e,a,r),r.canActivateChecks.push(new iu(i)),s.component?ya(n,null,a?a.children:null,i,r):ya(n,null,t,i,r);return r}function EA(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!Yr(n.url,e.url);case"pathParamsOrQueryParamsChange":return!Yr(n.url,e.url)||!pi(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Fp(n,e)||!pi(n.queryParams,e.queryParams);case"paramsChange":default:return!Fp(n,e)}}function xa(n,e,t){let i=eo(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?xa(o,e.children.getContext(s),t):xa(o,null,t):xa(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new io(e.outlet.component,r)):t.canDeactivateChecks.push(new io(null,r)):t.canDeactivateChecks.push(new io(null,r))}function Pa(n){return typeof n=="function"}function MA(n){return typeof n=="boolean"}function wA(n){return n&&Pa(n.canLoad)}function bA(n){return n&&Pa(n.canActivate)}function TA(n){return n&&Pa(n.canActivateChild)}function CA(n){return n&&Pa(n.canDeactivate)}function DA(n){return n&&Pa(n.canMatch)}function Ax(n){return n instanceof Di||n?.name==="EmptyError"}var jc=Symbol("INITIAL_VALUE");function ao(){return Wn(n=>Gl(n.map(e=>e.pipe(Ai(1),Cf(jc)))).pipe(rt(e=>{for(let t of e)if(t!==!0){if(t===jc)return jc;if(t===!1||AA(t))return t}return!0}),Gn(e=>e!==jc),Ai(1)))}function AA(n){return Ea(n)||n instanceof Da}function IA(n,e){return Bt(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Ve(Mt(me({},t),{guardsResult:!0})):RA(o,i,r,n).pipe(Bt(a=>a&&MA(a)?NA(i,s,n,e):Ve(a)),rt(a=>Mt(me({},t),{guardsResult:a})))})}function RA(n,e,t,i){return Ut(n).pipe(Bt(r=>kA(r.component,r.route,t,e,i)),Ii(r=>r!==!0,!0))}function NA(n,e,t,i){return Ut(e).pipe(Fs(r=>Ls(OA(r.route.parent,i),PA(r.route,i),FA(n,r.path,t),LA(n,r.route,t))),Ii(r=>r!==!0,!0))}function PA(n,e){return n!==null&&e&&e(new Rp(n)),Ve(!0)}function OA(n,e){return n!==null&&e&&e(new Ap(n)),Ve(!0)}function LA(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Ve(!0);let r=i.map(s=>Wl(()=>{let o=Na(e)??t,a=lo(s,o),l=bA(a)?a.canActivate(e,n):qn(o,()=>a(e,n));return dr(l).pipe(Ii())}));return Ve(r).pipe(ao())}function FA(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>xA(o)).filter(o=>o!==null).map(o=>Wl(()=>{let a=o.guards.map(l=>{let c=Na(o.node)??t,u=lo(l,c),d=TA(u)?u.canActivateChild(i,n):qn(c,()=>u(i,n));return dr(d).pipe(Ii())});return Ve(a).pipe(ao())}));return Ve(s).pipe(ao())}function kA(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Ve(!0);let o=s.map(a=>{let l=Na(e)??r,c=lo(a,l),u=CA(c)?c.canDeactivate(n,e,t,i):qn(l,()=>c(n,e,t,i));return dr(u).pipe(Ii())});return Ve(o).pipe(ao())}function UA(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Ve(!0);let s=r.map(o=>{let a=lo(o,n),l=wA(a)?a.canLoad(e,t):qn(n,()=>a(e,t));return dr(l)});return Ve(s).pipe(ao(),Ix(i))}function Ix(n){return _f($t(e=>{if(typeof e!="boolean")throw nu(n,e)}),rt(e=>e===!0))}function BA(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Ve(!0);let s=r.map(o=>{let a=lo(o,n),l=DA(a)?a.canMatch(e,t):qn(n,()=>a(e,t));return dr(l)});return Ve(s).pipe(ao(),Ix(i))}var Aa=class{segmentGroup;constructor(e){this.segmentGroup=e||null}},Ia=class extends Error{urlTree;constructor(e){super(),this.urlTree=e}};function Js(n){return Os(new Aa(n))}function VA(n){return Os(new re(4e3,!1))}function zA(n){return Os(Cx(!1,vn.GuardRejected))}var Bp=class{urlSerializer;urlTree;constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Ve(i);if(r.numberOfChildren>1||!r.children[je])return VA(`${e.redirectTo}`);r=r.children[je]}}applyRedirectCommands(e,t,i,r,s){if(typeof t!="string"){let a=t,{queryParams:l,fragment:c,routeConfig:u,url:d,outlet:f,params:h,data:g,title:y}=r,m=qn(s,()=>a({params:h,data:g,queryParams:l,fragment:c,routeConfig:u,url:d,outlet:f,title:y}));if(m instanceof Ui)throw new Ia(m);t=m}let o=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t[0]==="/")throw new Ia(o);return o}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Ui(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,l])=>{o[a]=this.createSegmentGroup(e,l,i,r)}),new mt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path[0]===":"?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new re(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Vp={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function HA(n,e,t,i,r){let s=Rx(n,e,t);return s.matched?(i=cA(e,i),BA(i,e,t,r).pipe(rt(o=>o===!0?s:me({},Vp)))):Ve(s)}function Rx(n,e,t){if(e.path==="**")return GA(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?me({},Vp):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||kD)(t,n,e);if(!r)return me({},Vp);let s={};Object.entries(r.posParams??{}).forEach(([a,l])=>{s[a]=l.path});let o=r.consumed.length>0?me(me({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function GA(n){return{matched:!0,parameters:n.length>0?ux(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function ox(n,e,t,i){return t.length>0&&$A(n,t,i)?{segmentGroup:new mt(e,jA(i,new mt(t,n.children))),slicedSegments:[]}:t.length===0&&qA(n,t,i)?{segmentGroup:new mt(n.segments,WA(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new mt(n.segments,n.children),slicedSegments:t}}function WA(n,e,t,i){let r={};for(let s of t)if(su(n,e,s)&&!i[Zn(s)]){let o=new mt([],{});r[Zn(s)]=o}return me(me({},i),r)}function jA(n,e){let t={};t[je]=e;for(let i of n)if(i.path===""&&Zn(i)!==je){let r=new mt([],{});t[Zn(i)]=r}return t}function $A(n,e,t){return t.some(i=>su(n,e,i)&&Zn(i)!==je)}function qA(n,e,t){return t.some(i=>su(n,e,i))}function su(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function XA(n,e,t){return e.length===0&&!n.children[t]}var zp=class{};function YA(n,e,t,i,r,s,o="emptyOnly"){return new Hp(n,e,t,i,r,o,s).recognize()}var ZA=31,Hp=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Bp(this.urlSerializer,this.urlTree)}noMatchError(e){return new re(4002,`'${e.segmentGroup}'`)}recognize(){let e=ox(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(rt(({children:t,rootSnapshot:i})=>{let r=new yn(i,t),s=new tu("",r),o=nA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}))}match(e){let t=new no([],Object.freeze({}),Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),je,this.rootComponentType,null,{});return this.processSegmentGroup(this.injector,this.config,e,je,t).pipe(rt(i=>({children:i,rootSnapshot:t})),Qi(i=>{if(i instanceof Ia)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Aa?this.noMatchError(i):i}))}processSegmentGroup(e,t,i,r,s){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i,s):this.processSegment(e,t,i,i.segments,r,!0,s).pipe(rt(o=>o instanceof yn?[o]:[]))}processChildren(e,t,i,r){let s=[];for(let o of Object.keys(i.children))o==="primary"?s.unshift(o):s.push(o);return Ut(s).pipe(Fs(o=>{let a=i.children[o],l=uA(t,o);return this.processSegmentGroup(e,l,a,o,r)}),Tf((o,a)=>(o.push(...a),o)),Ji(null),bf(),Bt(o=>{if(o===null)return Js(i);let a=Nx(o);return KA(a),Ve(a)}))}processSegment(e,t,i,r,s,o,a){return Ut(t).pipe(Fs(l=>this.processSegmentAgainstRoute(l._injector??e,t,l,i,r,s,o,a).pipe(Qi(c=>{if(c instanceof Aa)return Ve(null);throw c}))),Ii(l=>!!l),Qi(l=>{if(Ax(l))return XA(i,r,s)?Ve(new zp):Js(i);throw l}))}processSegmentAgainstRoute(e,t,i,r,s,o,a,l){return Zn(i)!==o&&(o===je||!su(r,s,i))?Js(r):i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o,l):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o,l):Js(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o,a){let{matched:l,parameters:c,consumedSegments:u,positionalParamSegments:d,remainingSegments:f}=Rx(t,r,s);if(!l)return Js(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ZA&&(this.allowRedirects=!1));let h=new no(s,c,Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,ax(r),Zn(r),r.component??r._loadedComponent??null,r,lx(r)),g=eu(h,a,this.paramsInheritanceStrategy);h.params=Object.freeze(g.params),h.data=Object.freeze(g.data);let y=this.applyRedirects.applyRedirectCommands(u,r.redirectTo,d,h,e);return this.applyRedirects.lineralizeSegments(r,y).pipe(Bt(m=>this.processSegment(e,i,t,m.concat(f),o,!1,a)))}matchSegmentAgainstRoute(e,t,i,r,s,o){let a=HA(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),a.pipe(Wn(l=>l.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(Wn(({routes:c})=>{let u=i._loadedInjector??e,{parameters:d,consumedSegments:f,remainingSegments:h}=l,g=new no(f,d,Object.freeze(me({},this.urlTree.queryParams)),this.urlTree.fragment,ax(i),Zn(i),i.component??i._loadedComponent??null,i,lx(i)),y=eu(g,o,this.paramsInheritanceStrategy);g.params=Object.freeze(y.params),g.data=Object.freeze(y.data);let{segmentGroup:m,slicedSegments:p}=ox(t,f,h,c);if(p.length===0&&m.hasChildren())return this.processChildren(u,c,m,g).pipe(rt(w=>new yn(g,w)));if(c.length===0&&p.length===0)return Ve(new yn(g,[]));let b=Zn(i)===s;return this.processSegment(u,c,m,p,b?je:s,!0,g).pipe(rt(w=>new yn(g,w instanceof yn?[w]:[])))}))):Js(t)))}getChildConfig(e,t,i){return t.children?Ve({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Ve({routes:t._loadedRoutes,injector:t._loadedInjector}):UA(e,t,i,this.urlSerializer).pipe(Bt(r=>r?this.configLoader.loadChildren(e,t).pipe($t(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):zA(t))):Ve({routes:[],injector:e})}};function KA(n){n.sort((e,t)=>e.value.outlet===je?-1:t.value.outlet===je?1:e.value.outlet.localeCompare(t.value.outlet))}function QA(n){let e=n.value.routeConfig;return e&&e.path===""}function Nx(n){let e=[],t=new Set;for(let i of n){if(!QA(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=Nx(i.children);e.push(new yn(i.value,r))}return e.filter(i=>!t.has(i))}function ax(n){return n.data||{}}function lx(n){return n.resolve||{}}function JA(n,e,t,i,r,s){return Bt(o=>YA(n,e,t,i,o.extractedUrl,r,s).pipe(rt(({state:a,tree:l})=>Mt(me({},o),{targetSnapshot:a,urlAfterRedirects:l}))))}function eI(n,e){return Bt(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Ve(t);let s=new Set(r.map(l=>l.route)),o=new Set;for(let l of s)if(!o.has(l))for(let c of Px(l))o.add(c);let a=0;return Ut(o).pipe(Fs(l=>s.has(l)?tI(l,i,n,e):(l.data=eu(l,l.parent,n).resolve,Ve(void 0))),$t(()=>a++),ks(1),Bt(l=>a===o.size?Ve(t):an))})}function Px(n){let e=n.children.map(t=>Px(t)).flat();return[n,...e]}function tI(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!bx(r)&&(s[Ra]=r.title),nI(s,n,e,i).pipe(rt(o=>(n._resolvedData=o,n.data=eu(n,n.parent,t).resolve,null)))}function nI(n,e,t,i){let r=vp(n);if(r.length===0)return Ve({});let s={};return Ut(r).pipe(Bt(o=>iI(n[o],e,t,i).pipe(Ii(),$t(a=>{if(a instanceof Da)throw nu(new Sa,a);s[o]=a}))),ks(1),rt(()=>s),Qi(o=>Ax(o)?an:Os(o)))}function iI(n,e,t,i){let r=Na(e)??i,s=lo(n,r),o=s.resolve?s.resolve(e,t):qn(r,()=>s(e,t));return dr(o)}function gp(n){return Wn(e=>{let t=n(e);return t?Ut(t).pipe(rt(()=>e)):Ve(e)})}var Ox=(()=>{class n{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(s=>s.outlet===je);return i}getResolvedTitleForRoute(t){return t.data[Ra]}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>le(rI),providedIn:"root"})}return n})(),rI=(()=>{class n extends Ox{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||n)(ke(tx))};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),qp=new Ue("",{providedIn:"root",factory:()=>({})}),sI=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275cmp=fi({type:n,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Yn(0,"router-outlet")},dependencies:[hA],encapsulation:2})}return n})();function Xp(n){let e=n.children&&n.children.map(Xp),t=e?Mt(me({},n),{children:e}):me({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==je&&(t.component=sI),t}var Yp=new Ue(""),oI=(()=>{class n{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=le(Jh);loadComponent(t){if(this.componentLoaders.get(t))return this.componentLoaders.get(t);if(t._loadedComponent)return Ve(t._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(t);let i=dr(t.loadComponent()).pipe(rt(Lx),$t(s=>{this.onLoadEndListener&&this.onLoadEndListener(t),t._loadedComponent=s}),qo(()=>{this.componentLoaders.delete(t)})),r=new Ps(i,()=>new Yt).pipe(Ns());return this.componentLoaders.set(t,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Ve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let s=aI(i,this.compiler,t,this.onLoadEndListener).pipe(qo(()=>{this.childrenLoaders.delete(i)})),o=new Ps(s,()=>new Yt).pipe(Ns());return this.childrenLoaders.set(i,o),o}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function aI(n,e,t,i){return dr(n.loadChildren()).pipe(rt(Lx),Bt(r=>r instanceof aa||Array.isArray(r)?Ve(r):Ut(e.compileModuleAsync(r))),rt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Yp,[],{optional:!0,self:!0}).flat()),{routes:o.map(Xp),injector:s}}))}function lI(n){return n&&typeof n=="object"&&"default"in n}function Lx(n){return lI(n)?n.default:n}var Zp=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>le(cI),providedIn:"root"})}return n})(),cI=(()=>{class n{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),uI=new Ue("");var dI=new Ue(""),fI=(()=>{class n{currentNavigation=null;currentTransition=null;lastSuccessfulNavigation=null;events=new Yt;transitionAbortSubject=new Yt;configLoader=le(oI);environmentInjector=le(Nn);destroyRef=le(Ac);urlSerializer=le(Wp);rootContexts=le(ru);location=le(fa);inputBindingEnabled=le($p,{optional:!0})!==null;titleStrategy=le(Ox);options=le(qp,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=le(Zp);createViewTransition=le(uI,{optional:!0});navigationErrorHandler=le(dI,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ve(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new Cp(r)),i=r=>this.events.next(new Dp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;this.transitions?.next(Mt(me(me({},this.transitions.value),t),{id:i}))}setupNavigations(t,i,r){return this.transitions=new kt({id:0,currentUrlTree:i,currentRawUrl:i,extractedUrl:this.urlHandlingStrategy.extract(i),urlAfterRedirects:this.urlHandlingStrategy.extract(i),rawUrl:i,extras:{},resolve:()=>{},reject:()=>{},promise:Promise.resolve(!0),source:_a,restoredState:null,currentSnapshot:r.snapshot,targetSnapshot:null,currentRouterState:r,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(Gn(s=>s.id!==0),rt(s=>Mt(me({},s),{extractedUrl:this.urlHandlingStrategy.extract(s.rawUrl)})),Wn(s=>{let o=!1,a=!1;return Ve(s).pipe(Wn(l=>{if(this.navigationId>s.id)return this.cancelNavigationTransition(s,"",vn.SupersededByNewNavigation),an;this.currentTransition=s,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,targetBrowserUrl:typeof l.extras.browserUrl=="string"?this.urlSerializer.parse(l.extras.browserUrl):l.extras.browserUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?Mt(me({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let c=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=l.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!c&&u!=="reload"){let d="";return this.events.next(new Kr(l.id,this.urlSerializer.serialize(l.rawUrl),d,Ep.IgnoredSameUrlNavigation)),l.resolve(!1),an}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Ve(l).pipe(Wn(d=>{let f=this.transitions?.getValue();return this.events.next(new wa(d.id,this.urlSerializer.serialize(d.extractedUrl),d.source,d.restoredState)),f!==this.transitions?.getValue()?an:Promise.resolve(d)}),JA(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy),$t(d=>{s.targetSnapshot=d.targetSnapshot,s.urlAfterRedirects=d.urlAfterRedirects,this.currentNavigation=Mt(me({},this.currentNavigation),{finalUrl:d.urlAfterRedirects});let f=new Kc(d.id,this.urlSerializer.serialize(d.extractedUrl),this.urlSerializer.serialize(d.urlAfterRedirects),d.targetSnapshot);this.events.next(f)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:d,extractedUrl:f,source:h,restoredState:g,extras:y}=l,m=new wa(d,this.urlSerializer.serialize(f),h,g);this.events.next(m);let p=Mx(this.rootComponentType).snapshot;return this.currentTransition=s=Mt(me({},l),{targetSnapshot:p,urlAfterRedirects:f,extras:Mt(me({},y),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=f,Ve(s)}else{let d="";return this.events.next(new Kr(l.id,this.urlSerializer.serialize(l.extractedUrl),d,Ep.IgnoredByUrlHandlingStrategy)),l.resolve(!1),an}}),$t(l=>{let c=new Mp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(c)}),rt(l=>(this.currentTransition=s=Mt(me({},l),{guards:_A(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),s)),IA(this.environmentInjector,l=>this.events.next(l)),$t(l=>{if(s.guardsResult=l.guardsResult,l.guardsResult&&typeof l.guardsResult!="boolean")throw nu(this.urlSerializer,l.guardsResult);let c=new wp(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(c)}),Gn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",vn.GuardRejected),!1)),gp(l=>{if(l.guards.canActivateChecks.length)return Ve(l).pipe($t(c=>{let u=new bp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}),Wn(c=>{let u=!1;return Ve(c).pipe(eI(this.paramsInheritanceStrategy,this.environmentInjector),$t({next:()=>u=!0,complete:()=>{u||this.cancelNavigationTransition(c,"",vn.NoDataFromResolver)}}))}),$t(c=>{let u=new Tp(c.id,this.urlSerializer.serialize(c.extractedUrl),this.urlSerializer.serialize(c.urlAfterRedirects),c.targetSnapshot);this.events.next(u)}))}),gp(l=>{let c=u=>{let d=[];u.routeConfig?.loadComponent&&!u.routeConfig._loadedComponent&&d.push(this.configLoader.loadComponent(u.routeConfig).pipe($t(f=>{u.component=f}),rt(()=>{})));for(let f of u.children)d.push(...c(f));return d};return Gl(c(l.targetSnapshot.root)).pipe(Ji(null),Ai(1))}),gp(()=>this.afterPreactivation()),Wn(()=>{let{currentSnapshot:l,targetSnapshot:c}=s,u=this.createViewTransition?.(this.environmentInjector,l.root,c.root);return u?Ut(u).pipe(rt(()=>s)):Ve(s)}),rt(l=>{let c=pA(t.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=s=Mt(me({},l),{targetRouterState:c}),this.currentNavigation.targetRouterState=c,s}),$t(()=>{this.events.next(new Ta)}),vA(this.rootContexts,t.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),Ai(1),$t({next:l=>{o=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new Zr(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{o=!0}}),Df(this.transitionAbortSubject.pipe($t(l=>{throw l}))),qo(()=>{!o&&!a&&this.cancelNavigationTransition(s,"",vn.SupersededByNewNavigation),this.currentTransition?.id===s.id&&(this.currentNavigation=null,this.currentTransition=null)}),Qi(l=>{if(this.destroyed)return s.resolve(!1),an;if(a=!0,Dx(l))this.events.next(new ki(s.id,this.urlSerializer.serialize(s.extractedUrl),l.message,l.cancellationCode)),yA(l)?this.events.next(new so(l.url,l.navigationBehaviorOptions)):s.resolve(!1);else{let c=new ba(s.id,this.urlSerializer.serialize(s.extractedUrl),l,s.targetSnapshot??void 0);try{let u=qn(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(u instanceof Da){let{message:d,cancellationCode:f}=nu(this.urlSerializer,u);this.events.next(new ki(s.id,this.urlSerializer.serialize(s.extractedUrl),d,f)),this.events.next(new so(u.redirectTo,u.navigationBehaviorOptions))}else throw this.events.next(c),l}catch(u){this.options.resolveNavigationPromiseOnError?s.resolve(!1):s.reject(u)}}return an}))}))}cancelNavigationTransition(t,i,r){let s=new ki(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(s),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=this.currentNavigation?.targetBrowserUrl??this.currentNavigation?.extractedUrl;return t.toString()!==i?.toString()&&!this.currentNavigation?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hI(n){return n!==_a}var pI=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>le(mI),providedIn:"root"})}return n})(),Gp=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},mI=(()=>{class n extends Gp{static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ch(n)))(r||n)}})();static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fx=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:()=>le(gI),providedIn:"root"})}return n})(),gI=(()=>{class n extends Fx{location=le(fa);urlSerializer=le(Wp);options=le(qp,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";urlHandlingStrategy=le(Zp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ui;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}currentPageId=0;lastSuccessfulId=-1;restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}routerState=Mx(null);getRouterState(){return this.routerState}stateMemento=this.createStateMemento();createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&t(i.url,i.state)})}handleRouterEvent(t,i){if(t instanceof wa)this.stateMemento=this.createStateMemento();else if(t instanceof Kr)this.rawUrlTree=i.initialUrl;else if(t instanceof Kc){if(this.urlUpdateStrategy==="eager"&&!i.extras.skipLocationChange){let r=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl);this.setBrowserUrl(i.targetBrowserUrl??r,i)}}else t instanceof Ta?(this.currentUrlTree=i.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(i.finalUrl,i.initialUrl),this.routerState=i.targetRouterState,this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(i.targetBrowserUrl??this.rawUrlTree,i)):t instanceof ki&&(t.code===vn.GuardRejected||t.code===vn.NoDataFromResolver)?this.restoreHistory(i):t instanceof ba?this.restoreHistory(i,!0):t instanceof Zr&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let r=t instanceof Ui?this.urlSerializer.serialize(t):t;if(this.location.isCurrentPathEqualTo(r)||i.extras.replaceUrl){let s=this.browserPageId,o=me(me({},i.extras.state),this.generateNgRouterState(i.id,s));this.location.replaceState(r,"",o)}else{let s=me(me({},i.extras.state),this.generateNgRouterState(i.id,this.browserPageId+1));this.location.go(r,"",s)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.currentUrlTree===t.finalUrl&&s===0&&(this.resetState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetState(t),this.resetUrlToCurrentUrlTree())}resetState(t){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i){return this.canceledNavigationResolution==="computed"?{navigationId:t,\u0275routerPageId:i}:{navigationId:t}}static \u0275fac=(()=>{let t;return function(r){return(t||(t=Ch(n)))(r||n)}})();static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function yI(n,e){n.events.pipe(Gn(t=>t instanceof Zr||t instanceof ki||t instanceof ba||t instanceof Kr),rt(t=>t instanceof Zr||t instanceof Kr?0:(t instanceof ki?t.code===vn.Redirect||t.code===vn.SupersededByNewNavigation:!1)?2:1),Gn(t=>t!==2),Ai(1)).subscribe(()=>{e()})}var vI={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},_I={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},kx=(()=>{class n{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=le(qh);stateManager=le(Fx);options=le(qp,{optional:!0})||{};pendingTasks=le(qs);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=le(fI);urlSerializer=le(Wp);location=le(fa);urlHandlingStrategy=le(Zp);_events=new Yt;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=le(pI);onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=le(Yp,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!le($p,{optional:!0});constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:t=>{this.console.warn(t)}}),this.subscribeToNavigationEvents()}eventsSubscription=new Ot;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,s=this.navigationTransitions.currentNavigation;if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(i,s),i instanceof ki&&i.code!==vn.Redirect&&i.code!==vn.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Zr)this.navigated=!0;else if(i instanceof so){let o=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=me({browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||hI(r.source)},o);this.scheduleNavigation(a,_a,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}SI(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),_a,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(t,"popstate",i)},0)})}navigateToSyncWithBrowser(t,i,r){let s={replaceUrl:!0},o=r?.navigationId?r:null;if(r){let l=me({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(s.state=l)}let a=this.parseUrl(t);this.scheduleNavigation(a,i,o,s)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(Xp),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=me(me({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let d;try{let f=r?r.snapshot:this.routerState.snapshot.root;d=_x(f)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),d=this.currentUrlTree.root}return xx(d,t,u,c??null)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Ea(t)?t:this.parseUrl(t),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,_a,null,i)}navigate(t,i={skipLocationChange:!1}){return xI(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=me({},vI):i===!1?r=me({},_I):r=i,Ea(t))return nx(this.currentUrlTree,t,r);let s=this.parseUrl(t);return nx(this.currentUrlTree,s,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,s])=>(s!=null&&(i[r]=s),i),{})}scheduleNavigation(t,i,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,l,c;o?(a=o.resolve,l=o.reject,c=o.promise):c=new Promise((d,f)=>{a=d,l=f});let u=this.pendingTasks.add();return yI(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:s,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(d=>Promise.reject(d))}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function xI(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new re(4008,!1)}function SI(n){return!(n instanceof Ta)&&!(n instanceof so)}var EI=new Ue("");function Ux(n,...e){return vh([{provide:Yp,multi:!0,useValue:n},[],{provide:oo,useFactory:MI,deps:[kx]},{provide:Kh,multi:!0,useFactory:wI},e.map(t=>t.\u0275providers)])}function MI(n){return n.routerState.root}function wI(){let n=le(ci);return e=>{let t=n.get(Pi);if(e!==t.components[0])return;let i=n.get(kx),r=n.get(bI);n.get(TI)===1&&i.initialNavigation(),n.get(CI,null,Xe.Optional)?.setUpPreloading(),n.get(EI,null,Xe.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var bI=new Ue("",{factory:()=>new Yt}),TI=new Ue("",{providedIn:"root",factory:()=>1});var CI=new Ue("");var Bx=[];var co=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=fi({type:n,selectors:[["app-header"]],decls:29,vars:0,consts:[[1,"header"],[1,"header-container"],[1,"nav-menu"],["href","#",1,"nav-link"],[1,"header-actions"],[1,"search-bar"],[1,"fas","fa-search"],["type","text","placeholder","Rechercher...",1,"search-input"],[1,"btn","btn-secondary"],[1,"btn","btn-primary"],[1,"mobile-menu-btn"],[1,"fas","fa-bars"]],template:function(t,i){t&1&&(ge(0,"header",0)(1,"div",1)(2,"nav")(3,"ul",2)(4,"li")(5,"a",3),Se(6,"Accueil"),be()(),ge(7,"li")(8,"a",3),Se(9,"Produits"),be()(),ge(10,"li")(11,"a",3),Se(12,"Services"),be()(),ge(13,"li")(14,"a",3),Se(15,"\xC0 propos"),be()(),ge(16,"li")(17,"a",3),Se(18,"Contact"),be()()()(),ge(19,"div",4)(20,"div",5),Yn(21,"i",6)(22,"input",7),be(),ge(23,"button",8),Se(24,"Se connecter"),be(),ge(25,"button",9),Se(26,"S'inscrire"),be(),ge(27,"button",10),Yn(28,"i",11),be()()()())},encapsulation:2})};var uo=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=fi({type:n,selectors:[["app-changelog"]],decls:127,vars:0,consts:[[1,"changelog"],[1,"version"],[1,"version-header"],[1,"version-number"],[1,"version-date"],[1,"change-type"],[1,"changes-list"],[1,"tag","tag-improvement"],[1,"tag","tag-feature"]],template:function(t,i){t&1&&(ge(0,"div",0)(1,"div",1)(2,"div",2)(3,"span",3),Se(4,"v3.1.0"),be(),ge(5,"span",4),Se(6,"4 Mars 2025"),be()(),ge(7,"div",5)(8,"h3"),Se(9,"Ajout d'une animation Three.js"),be(),ge(10,"ul",6)(11,"li"),Se(12,"L'animation n'est pas trop lourde et ne ralentit pas le chargement du site"),ge(13,"span",7),Se(14,"Improvement"),be()()()()(),ge(15,"div",1)(16,"div",2)(17,"span",3),Se(18,"v3.0.1"),be(),ge(19,"span",4),Se(20,"4 Mars 2025"),be()(),ge(21,"div",5)(22,"h3"),Se(23,"Re-indexation dans Google Search Console"),be(),ge(24,"ul",6)(25,"li"),Se(26,"La page n'est plus ind\xE9x\xE9 sur Google depuis le 20 janvier"),ge(27,"span",7),Se(28,"Fix"),be()()()()(),ge(29,"div",1)(30,"div",2)(31,"span",3),Se(32,"v3.0.0"),be(),ge(33,"span",4),Se(34,"5 F\xE9vrier 2025"),be()(),ge(35,"div",5)(36,"h3"),Se(37,"Nouveau site web"),be(),ge(38,"ul",6)(39,"li"),Se(40,"Nouvelle architecture de site (Angular)"),ge(41,"span",7),Se(42,"Improvement"),be()()()()(),ge(43,"div",1)(44,"div",2)(45,"span",3),Se(46,"v2.0.0"),be(),ge(47,"span",4),Se(48,"28 Janvier 2025"),be()(),ge(49,"div",5)(50,"h3"),Se(51,"Nouveau site web"),be(),ge(52,"ul",6)(53,"li"),Se(54,"Nouvelle structure de site r\xE9cup\xE9r\xE9e d'un template gratuit en ligne "),ge(55,"span",7),Se(56,"Improvement"),be()()()()(),ge(57,"div",1)(58,"div",2)(59,"span",3),Se(60,"v1.2.2"),be(),ge(61,"span",4),Se(62,"13 Janvier 2025"),be()(),ge(63,"div",5)(64,"h3"),Se(65,"Nouveau sitemap"),be(),ge(66,"ul",6)(67,"li"),Se(68,"G\xE9n\xE9ration de plusieurs pages ainsi qu'un sitemap pour am\xE9liorer le r\xE9f\xE9rencement "),ge(69,"span",7),Se(70,"Improvement"),be()()()()(),ge(71,"div",1)(72,"div",2)(73,"span",3),Se(74,"v1.2.1"),be(),ge(75,"span",4),Se(76,"13 Janvier 2025"),be()(),ge(77,"div",5)(78,"h3"),Se(79,"Nouveau contenu"),be(),ge(80,"ul",6)(81,"li"),Se(82,"G\xE9n\xE9ration d'un faux contenu sur mot-cl\xE9 (langue extraterrestre fictive) "),ge(83,"span",7),Se(84,"Improvement"),be()()()()(),ge(85,"div",1)(86,"div",2)(87,"span",3),Se(88,"v1.2.0"),be(),ge(89,"span",4),Se(90,"13 Janvier 2025"),be()(),ge(91,"div",5)(92,"h3"),Se(93,"D\xE9pot Git"),be(),ge(94,"ul",6)(95,"li"),Se(96,"Cr\xE9ation d'un d\xE9pot git associ\xE9 au site"),ge(97,"span",8),Se(98,"Feature"),be()()()()(),ge(99,"div",1)(100,"div",2)(101,"span",3),Se(102,"v1.0.1"),be(),ge(103,"span",4),Se(104,"8 Janvier 2025"),be()(),ge(105,"div",5)(106,"h3"),Se(107,"Nouveau style"),be(),ge(108,"ul",6)(109,"li"),Se(110,"Ajout d'un style minimal g\xE9n\xE9r\xE9 par ChatGPT "),ge(111,"span",7),Se(112,"Improvement"),be()()()()(),ge(113,"div",1)(114,"div",2)(115,"span",3),Se(116,"v1.0.0"),be(),ge(117,"span",4),Se(118,"8 Janvier 2025"),be()(),ge(119,"div",5)(120,"h3"),Se(121,"Premi\xE8re version"),be(),ge(122,"ul",6)(123,"li"),Se(124,"Page html native"),ge(125,"span",8),Se(126,"Feature"),be()()()()()())},encapsulation:2})};var $u="173";var oS=0,Dm=1,aS=2;var Am=1,lS=2,Si=3,ji=0,sn=1,fn=2,qi=0,rs=1,Im=2,Rm=3,Nm=4,cS=5,xr=100,uS=101,dS=102,fS=103,hS=104,pS=200,mS=201,gS=202,yS=203,bu=204,Tu=205,vS=206,_S=207,xS=208,SS=209,ES=210,MS=211,wS=212,bS=213,TS=214,qu=0,Xu=1,Yu=2,ss=3,Zu=4,Ku=5,Qu=6,Ju=7,ed=0,CS=1,DS=2,Xi=0,AS=1,IS=2,RS=3,NS=4,PS=5,OS=6,LS=7;var _m=300,us=301,ds=302,td=303,nd=304,rl=306,Cu=1e3,_r=1001,Du=1002,Fn=1003,FS=1004;var sl=1005;var ti=1006,id=1007;var Tr=1008;var Ei=1009,Pm=1010,Om=1011,No=1012,rd=1013,Cr=1014,Mi=1015,Po=1016,sd=1017,od=1018,fs=1020,Lm=35902,Fm=1021,km=1022,Un=1023,Um=1024,Bm=1025,is=1026,os=1027,Vm=1028,ad=1029,zm=1030,ld=1031;var cd=1033,ol=33776,al=33777,ll=33778,cl=33779,ud=35840,dd=35841,fd=35842,hd=35843,pd=36196,md=37492,gd=37496,yd=37808,vd=37809,_d=37810,xd=37811,Sd=37812,Ed=37813,Md=37814,wd=37815,bd=37816,Td=37817,Cd=37818,Dd=37819,Ad=37820,Id=37821,ul=36492,Rd=36494,Nd=36495,Hm=36283,Pd=36284,Od=36285,Ld=36286;var Va=2300,Au=2301,wu=2302,xm=2400,Sm=2401,Em=2402;var kS=3200,US=3201;var Gm=0,BS=1,Yi="",Sn="srgb",as="srgb-linear",za="linear",yt="srgb";var ns=7680;var Mm=519,VS=512,zS=513,HS=514,Wm=515,GS=516,WS=517,jS=518,$S=519,wm=35044;var jm="300 es",gi=2e3,Ha=2001;var $i=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vx=1234567,Ua=Math.PI/180,To=180/Math.PI;function Oo(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Ke(n,e,t){return Math.max(e,Math.min(t,n))}function $m(n,e){return(n%e+e)%e}function DI(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function AI(n,e,t){return n!==e?(t-n)/(e-n):0}function Ba(n,e,t){return(1-t)*n+t*e}function II(n,e,t,i){return Ba(n,e,1-Math.exp(-t*i))}function RI(n,e=1){return e-Math.abs($m(n,e*2)-e)}function NI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function PI(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function OI(n,e){return n+Math.floor(Math.random()*(e-n+1))}function LI(n,e){return n+Math.random()*(e-n)}function FI(n){return n*(.5-Math.random())}function kI(n){n!==void 0&&(Vx=n);let e=Vx+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function UI(n){return n*Ua}function BI(n){return n*To}function VI(n){return(n&n-1)===0&&n!==0}function zI(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function HI(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function GI(n,e,t,i,r){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),d=s((e-i)/2),f=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*g,l*h,a*c);break;case"YXY":n.set(l*h,a*u,l*g,a*c);break;case"ZYZ":n.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function rn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var qm={DEG2RAD:Ua,RAD2DEG:To,generateUUID:Oo,clamp:Ke,euclideanModulo:$m,mapLinear:DI,inverseLerp:AI,lerp:Ba,damp:II,pingpong:RI,smoothstep:NI,smootherstep:PI,randInt:OI,randFloat:LI,randFloatSpread:FI,seededRandom:kI,degToRad:UI,radToDeg:BI,isPowerOfTwo:VI,ceilPowerOfTwo:zI,floorPowerOfTwo:HI,setQuaternionFromProperEuler:GI,normalize:rn,denormalize:wo},ft=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class n{constructor(e,t,i,r,s,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],m=r[3],p=r[6],b=r[1],w=r[4],S=r[7],A=r[2],D=r[5],T=r[8];return s[0]=o*y+a*b+l*A,s[3]=o*m+a*w+l*D,s[6]=o*p+a*S+l*T,s[1]=c*y+u*b+d*A,s[4]=c*m+u*w+d*D,s[7]=c*p+u*S+d*T,s[2]=f*y+h*b+g*A,s[5]=f*m+h*w+g*D,s[8]=f*p+h*S+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=t*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=f*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=h*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qp.makeScale(e,t)),this}rotate(e){return this.premultiply(Qp.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qp.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qp=new He;function Xm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ga(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qS(){let n=Ga("canvas");return n.style.display="block",n}var zx={};function hs(n){n in zx||(zx[n]=!0,console.warn(n))}function XS(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function YS(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ZS(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Hx=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gx=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WI(){let n={enabled:!0,workingColorSpace:as,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(r.r=bo(r.r),r.g=bo(r.g),r.b=bo(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?za:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[as]:{primaries:e,whitePoint:i,transfer:za,toXYZ:Hx,fromXYZ:Gx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:yt,toXYZ:Hx,fromXYZ:Gx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}var lt=WI();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function bo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fo,Iu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fo===void 0&&(fo=Ga("canvas")),fo.width=e.width,fo.height=e.height;let i=fo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fo}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ga("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jI=0,Wa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jI++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Jp(r[o].image)):s.push(Jp(r[o]))}else s=Jp(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Jp(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Iu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $I=0,Dr=(()=>{class n extends $i{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=_r,s=_r,o=ti,a=Tr,l=Un,c=Ei,u=n.DEFAULT_ANISOTROPY,d=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$I++}),this.uuid=Oo(),this.name="",this.source=new Wa(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_m)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Cu:t.x=t.x-Math.floor(t.x);break;case _r:t.x=t.x<0?0:1;break;case Du:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Cu:t.y=t.y-Math.floor(t.y);break;case _r:t.y=t.y<0?0:1;break;case Du:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=_m,n.DEFAULT_ANISOTROPY=1,n})(),Ct=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,S=(h+1)/2,A=(p+1)/2,D=(u+f)/4,T=(d+y)/4,O=(g+m)/4;return w>S&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=D/i,s=T/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=D/r,s=O/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=T/s,r=O/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(f-u)/b,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ru=class extends $i{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new Dr(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;let t=Object.assign({},e.texture.image);return this.texture.source=new Wa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},vi=class extends Ru{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},ja=class extends Dr{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Nu=class extends Dr{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[o+0],h=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==f||c!==h||u!==g){let m=1-a,p=l*f+c*h+u*g+d*y,b=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){let A=Math.sqrt(w),D=Math.atan2(A,p*b);m=Math.sin(m*D)/A,a=Math.sin(a*D)/A}let S=a*b;if(l=l*m+f*S,c=c*m+h*S,u=u*m+g*S,d=d*m+y*S,m===1-a){let A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[t]=a*g+u*d+l*h-c*f,e[t+1]=l*g+u*f+c*d-a*h,e[t+2]=c*g+u*h+a*f-l*d,e[t+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+a+d;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){let h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){let h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{let h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let h=1-t;return this._w=h*o+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wx.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ke(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return em.copy(this).projectOnVector(e),this.sub(em)}reflect(e){return this.sub(em.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ke(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},em=new U,Wx=new dn,Sr=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Kn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Kn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Kn):Kn.fromBufferAttribute(s,o),Kn.applyMatrix4(e.matrixWorld),this.expandByPoint(Kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ou.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ou.copy(i.boundingBox)),ou.applyMatrix4(e.matrixWorld),this.union(ou)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),au.subVectors(this.max,Oa),ho.subVectors(e.a,Oa),po.subVectors(e.b,Oa),mo.subVectors(e.c,Oa),fr.subVectors(po,ho),hr.subVectors(mo,po),Qr.subVectors(ho,mo);let t=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-Qr.z,Qr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,Qr.z,0,-Qr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-Qr.y,Qr.x,0];return!tm(t,ho,po,mo,au)||(t=[1,0,0,0,1,0,0,0,1],!tm(t,ho,po,mo,au))?!1:(lu.crossVectors(fr,hr),t=[lu.x,lu.y,lu.z],tm(t,ho,po,mo,au))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Bi=[new U,new U,new U,new U,new U,new U,new U,new U],Kn=new U,ou=new Sr,ho=new U,po=new U,mo=new U,fr=new U,hr=new U,Qr=new U,Oa=new U,au=new U,lu=new U,Jr=new U;function tm(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Jr.fromArray(n,s);let a=r.x*Math.abs(Jr.x)+r.y*Math.abs(Jr.y)+r.z*Math.abs(Jr.z),l=e.dot(Jr),c=t.dot(Jr),u=i.dot(Jr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var qI=new Sr,La=new U,nm=new U,Co=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):qI.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;La.subVectors(e,this.center);let t=La.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(La,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(La.copy(e.center).add(nm)),this.expandByPoint(La.copy(e.center).sub(nm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Vi=new U,im=new U,cu=new U,pr=new U,rm=new U,uu=new U,sm=new U,Pu=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,t),Vi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){im.copy(e).add(t).multiplyScalar(.5),cu.copy(t).sub(e).normalize(),pr.copy(this.origin).sub(im);let s=e.distanceTo(t)*.5,o=-this.direction.dot(cu),a=pr.dot(this.direction),l=-pr.dot(cu),c=pr.lengthSq(),u=Math.abs(1-o*o),d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){let y=1/u;d*=y,f*=y,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(im).addScaledVector(cu,f),h}intersectSphere(e,t){Vi.subVectors(e.center,this.origin);let i=Vi.dot(this.direction),r=Vi.dot(Vi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,t,i,r,s){rm.subVectors(t,e),uu.subVectors(i,e),sm.crossVectors(rm,uu);let o=this.direction.dot(sm),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;pr.subVectors(this.origin,e);let l=a*this.direction.dot(uu.crossVectors(pr,uu));if(l<0)return null;let c=a*this.direction.dot(rm.cross(pr));if(c<0||l+c>o)return null;let u=-a*pr.dot(sm);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class n{constructor(e,t,i,r,s,o,a,l,c,u,d,f,h,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,y,m)}set(e,t,i,r,s,o,a,l,c,u,d,f,h,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/go.setFromMatrixColumn(e,0).length(),s=1/go.setFromMatrixColumn(e,1).length(),o=1/go.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=f-y*c,t[9]=-a*l,t[2]=y-f*c,t[6]=g+h*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*u,h=l*d,g=c*u,y=c*d;t[0]=f+y*a,t[4]=g*a-h,t[8]=o*c,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=h*a-g,t[6]=y+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*u,h=l*d,g=c*u,y=c*d;t[0]=f-y*a,t[4]=-o*d,t[8]=g+h*a,t[1]=h+g*a,t[5]=o*u,t[9]=y-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*u,h=o*d,g=a*u,y=a*d;t[0]=l*u,t[4]=g*c-h,t[8]=f*c+y,t[1]=l*d,t[5]=y*c+f,t[9]=h*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,h=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=y-f*d,t[8]=g*d+h,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=h*d+g,t[10]=f-y*d}else if(e.order==="XZY"){let f=o*l,h=o*c,g=a*l,y=a*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+y,t[5]=o*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=a*u,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XI,e,YI)}lookAt(e,t,i){let r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),mr.crossVectors(i,_n),mr.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),mr.crossVectors(i,_n)),mr.normalize(),du.crossVectors(_n,mr),r[0]=mr.x,r[4]=du.x,r[8]=_n.x,r[1]=mr.y,r[5]=du.y,r[9]=_n.y,r[2]=mr.z,r[6]=du.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],w=i[7],S=i[11],A=i[15],D=r[0],T=r[4],O=r[8],E=r[12],x=r[1],I=r[5],j=r[9],G=r[13],Z=r[2],K=r[6],F=r[10],k=r[14],P=r[3],Y=r[7],ne=r[11],he=r[15];return s[0]=o*D+a*x+l*Z+c*P,s[4]=o*T+a*I+l*K+c*Y,s[8]=o*O+a*j+l*F+c*ne,s[12]=o*E+a*G+l*k+c*he,s[1]=u*D+d*x+f*Z+h*P,s[5]=u*T+d*I+f*K+h*Y,s[9]=u*O+d*j+f*F+h*ne,s[13]=u*E+d*G+f*k+h*he,s[2]=g*D+y*x+m*Z+p*P,s[6]=g*T+y*I+m*K+p*Y,s[10]=g*O+y*j+m*F+p*ne,s[14]=g*E+y*G+m*k+p*he,s[3]=b*D+w*x+S*Z+A*P,s[7]=b*T+w*I+S*K+A*Y,s[11]=b*O+w*j+S*F+A*ne,s[15]=b*E+w*G+S*k+A*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+y*(+t*l*h-t*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+m*(+t*c*d-t*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-t*l*d+t*a*f+r*o*d-i*o*f+i*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],m=e[14],p=e[15],b=d*m*c-y*f*c+y*l*h-a*m*h-d*l*p+a*f*p,w=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,S=u*y*c-g*d*c+g*a*h-o*y*h-u*a*p+o*d*p,A=g*d*l-u*y*l-g*a*f+o*y*f+u*a*m-o*d*m,D=t*b+i*w+r*S+s*A;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/D;return e[0]=b*T,e[1]=(y*f*s-d*m*s-y*r*h+i*m*h+d*r*p-i*f*p)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*p+i*l*p)*T,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*T,e[4]=w*T,e[5]=(u*m*s-g*f*s+g*r*h-t*m*h-u*r*p+t*f*p)*T,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*p-t*l*p)*T,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*h+t*l*h)*T,e[8]=S*T,e[9]=(g*d*s-u*y*s-g*i*h+t*y*h+u*i*p-t*d*p)*T,e[10]=(o*y*s-g*a*s+g*i*c-t*y*c-o*i*p+t*a*p)*T,e[11]=(u*a*s-o*d*s-u*i*c+t*d*c+o*i*h-t*a*h)*T,e[12]=A*T,e[13]=(u*y*r-g*d*r+g*i*f-t*y*f-u*i*m+t*d*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+t*y*l+o*i*m-t*a*m)*T,e[15]=(o*d*r-u*a*r+u*i*l-t*d*l-o*i*f+t*a*f)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,y=o*u,m=o*d,p=a*d,b=l*c,w=l*u,S=l*d,A=i.x,D=i.y,T=i.z;return r[0]=(1-(y+p))*A,r[1]=(h+S)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(h-S)*D,r[5]=(1-(f+p))*D,r[6]=(m+b)*D,r[7]=0,r[8]=(g+w)*T,r[9]=(m-b)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=go.set(r[0],r[1],r[2]).length(),o=go.set(r[4],r[5],r[6]).length(),a=go.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);let c=1/s,u=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=u,Qn.elements[5]*=u,Qn.elements[6]*=u,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=gi){let l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r),h,g;if(a===gi)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ha)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=gi){let l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(o-s),f=(t+e)*c,h=(i+r)*u,g,y;if(a===gi)g=(o+s)*d,y=-2*d;else if(a===Ha)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},go=new U,Qn=new Rt,XI=new U(0,0,0),YI=new U(1,1,1),mr=new U,du=new U,_n=new U,jx=new Rt,$x=new dn,Er=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],l=s[8],c=s[1],u=s[5],d=s[9],f=s[2],h=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(Ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return jx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return $x.setFromEuler(this),this.setFromQuaternion($x,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),$a=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ZI=0,qx=new U,yo=new dn,zi=new Rt,fu=new U,Fa=new U,KI=new U,QI=new dn,Xx=new U(1,0,0),Yx=new U(0,1,0),Zx=new U(0,0,1),Kx={type:"added"},JI={type:"removed"},vo={type:"childadded",child:null},om={type:"childremoved",child:null},_i=(()=>{class n extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZI++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new U,i=new Er,r=new dn,s=new U(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new He}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $a,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yo.setFromAxisAngle(t,i),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,i){return yo.setFromAxisAngle(t,i),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(Xx,t)}rotateY(t){return this.rotateOnAxis(Yx,t)}rotateZ(t){return this.rotateOnAxis(Zx,t)}translateOnAxis(t,i){return qx.copy(t).applyQuaternion(this.quaternion),this.position.add(qx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Xx,t)}translateY(t){return this.translateOnAxis(Yx,t)}translateZ(t){return this.translateOnAxis(Zx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?fu.copy(t):fu.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Fa,fu,this.up):zi.lookAt(fu,Fa,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),yo.setFromRotationMatrix(zi),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kx),vo.child=t,this.dispatchEvent(vo),vo.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JI),om.child=t,this.dispatchEvent(om),om.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zi.multiply(t.parent.matrixWorld)),t.applyMatrix4(zi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kx),vo.child=t,this.dispatchEvent(vo),vo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,t,KI),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,QI,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){let f=c[u];o(t.shapes,f)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(o(t.materials,this.material[c]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(o(t.animations,c))}}if(i){let l=a(t.geometries),c=a(t.materials),u=a(t.textures),d=a(t.images),f=a(t.shapes),h=a(t.skeletons),g=a(t.animations),y=a(t.nodes);l.length>0&&(r.geometries=l),c.length>0&&(r.materials=c),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),f.length>0&&(r.shapes=f),h.length>0&&(r.skeletons=h),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(l){let c=[];for(let u in l){let d=l[u];delete d.metadata,c.push(d)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new U(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),Jn=new U,Hi=new U,am=new U,Gi=new U,_o=new U,xo=new U,Qx=new U,lm=new U,cm=new U,um=new U,dm=new Ct,fm=new Ct,hm=new Ct,vr=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Hi.subVectors(i,t),am.subVectors(e,t);let o=Jn.dot(Jn),a=Jn.dot(Hi),l=Jn.dot(am),c=Hi.dot(Hi),u=Hi.dot(am),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Gi)===null?!1:Gi.x>=0&&Gi.y>=0&&Gi.x+Gi.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Gi.x),l.addScaledVector(o,Gi.y),l.addScaledVector(a,Gi.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return dm.setScalar(0),fm.setScalar(0),hm.setScalar(0),dm.fromBufferAttribute(e,t),fm.fromBufferAttribute(e,i),hm.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(dm,s.x),o.addScaledVector(fm,s.y),o.addScaledVector(hm,s.z),o}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Hi.subVectors(e,t),Jn.cross(Hi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),Jn.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;_o.subVectors(r,i),xo.subVectors(s,i),lm.subVectors(e,i);let l=_o.dot(lm),c=xo.dot(lm);if(l<=0&&c<=0)return t.copy(i);cm.subVectors(e,r);let u=_o.dot(cm),d=xo.dot(cm);if(u>=0&&d<=u)return t.copy(r);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(_o,o);um.subVectors(e,s);let h=_o.dot(um),g=xo.dot(um);if(g>=0&&h<=g)return t.copy(s);let y=h*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(xo,a);let m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Qx.subVectors(s,r),a=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(Qx,a);let p=1/(m+y+f);return o=y*p,a=f*p,t.copy(i).addScaledVector(_o,o).addScaledVector(xo,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},KS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},hu={h:0,s:0,l:0};function pm(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=$m(e,1),t=Ke(t,0,1),i=Ke(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=pm(o,s,e+1/3),this.g=pm(o,s,e),this.b=pm(o,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){let i=KS[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=bo(e.r),this.g=bo(e.g),this.b=bo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return lt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(Ke(Kt.r*255,0,255))*65536+Math.round(Ke(Kt.g*255,0,255))*256+Math.round(Ke(Kt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(Kt.copy(this),t);let i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=Sn){lt.fromWorkingColorSpace(Kt.copy(this),e);let t=Kt.r,i=Kt.g,r=Kt.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+t,gr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(gr),e.getHSL(hu);let i=Ba(gr.h,hu.h,t),r=Ba(gr.s,hu.s,t),s=Ba(gr.l,hu.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Kt=new Ye;Ye.NAMES=KS;var eR=0,xi=class extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eR++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=rs,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bu,this.blendDst=Tu,this.blendEquation=xr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ss,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ns,this.stencilZFail=ns,this.stencilZPass=ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bu&&(i.blendSrc=this.blendSrc),this.blendDst!==Tu&&(i.blendDst=this.blendDst),this.blendEquation!==xr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ss&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ns&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ns&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ns&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qa=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new U,pu=new ft,tR=0,En=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=wm,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)pu.fromBufferAttribute(this,t),pu.applyMatrix3(e),this.setXY(t,pu.x,pu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wo(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wo(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wo(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}};var Xa=class extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ya=class extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var yi=class extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}},nR=0,Ln=new Rt,mm=new _i,So=new U,xn=new Sr,ka=new Sr,Gt=new U,Mr=class n extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nR++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xm(e)?Ya:Xa)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return mm.lookAt(e),mm.updateMatrix(),this.applyMatrix4(mm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(So).negate(),this.translate(So.x,So.y,So.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yi(i,3))}else{let i=Math.min(e.length,t.count);for(let r=0;r<i;r++){let s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];ka.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(xn.min,ka.min),xn.expandByPoint(Gt),Gt.addVectors(xn.max,ka.max),xn.expandByPoint(Gt)):(xn.expandByPoint(ka.min),xn.expandByPoint(ka.max))}xn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(So.fromBufferAttribute(e,c),Gt.add(So)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<i.count;O++)a[O]=new U,l[O]=new U;let c=new U,u=new U,d=new U,f=new ft,h=new ft,g=new ft,y=new U,m=new U;function p(O,E,x){c.fromBufferAttribute(i,O),u.fromBufferAttribute(i,E),d.fromBufferAttribute(i,x),f.fromBufferAttribute(s,O),h.fromBufferAttribute(s,E),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),h.sub(f),g.sub(f);let I=1/(h.x*g.y-g.x*h.y);isFinite(I)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(I),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(I),a[O].add(y),a[E].add(y),a[x].add(y),l[O].add(m),l[E].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,E=b.length;O<E;++O){let x=b[O],I=x.start,j=x.count;for(let G=I,Z=I+j;G<Z;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let w=new U,S=new U,A=new U,D=new U;function T(O){A.fromBufferAttribute(r,O),D.copy(A);let E=a[O];w.copy(E),w.sub(A.multiplyScalar(A.dot(E))).normalize(),S.crossVectors(D,E);let I=S.dot(l[O])<0?-1:1;o.setXYZW(O,w.x,w.y,w.z,I)}for(let O=0,E=b.length;O<E;++O){let x=b[O],I=x.start,j=x.count;for(let G=I,Z=I+j;G<Z;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);let r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,d=new U;if(e)for(let f=0,h=e.count;f<h;f+=3){let g=e.getX(f+0),y=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){let c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u),h=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?h=l[y]*a.data.stride+a.offset:h=l[y]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new En(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){let f=c[u],h=e(f,i);l.push(h)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(t))}let s=e.morphAttributes;for(let c in s){let u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,u=o.length;c<u;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jx=new Rt,es=new Pu,mu=new Co,eS=new U,gu=new U,yu=new U,vu=new U,gm=new U,_u=new U,tS=new U,xu=new U,Nt=class extends _i{constructor(e=new Mr,t=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){_u.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],d=s[l];u!==0&&(gm.fromBufferAttribute(d,e),o?_u.addScaledVector(gm,u):_u.addScaledVector(gm.sub(t),u))}t.add(_u)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mu.copy(i.boundingSphere),mu.applyMatrix4(s),es.copy(e.ray).recast(e.near),!(mu.containsPoint(es.origin)===!1&&(es.intersectSphere(mu,eS)===null||es.origin.distanceToSquared(eS)>(e.far-e.near)**2))&&(Jx.copy(s).invert(),es.copy(e.ray).applyMatrix4(Jx),!(i.boundingBox!==null&&es.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,es)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=b,A=w;S<A;S+=3){let D=a.getX(S),T=a.getX(S+1),O=a.getX(S+2);r=Su(this,p,e,i,c,u,d,D,T,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(a.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let b=a.getX(m),w=a.getX(m+1),S=a.getX(m+2);r=Su(this,o,e,i,c,u,d,b,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=b,A=w;S<A;S+=3){let D=S,T=S+1,O=S+2;r=Su(this,p,e,i,c,u,d,D,T,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let m=g,p=y;m<p;m+=3){let b=m,w=m+1,S=m+2;r=Su(this,o,e,i,c,u,d,b,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function iR(n,e,t,i,r,s,o,a){let l;if(e.side===sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ji,a),l===null)return null;xu.copy(a),xu.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(xu);return c<t.near||c>t.far?null:{distance:c,point:xu.clone(),object:n}}function Su(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,gu),n.getVertexPosition(l,yu),n.getVertexPosition(c,vu);let u=iR(n,e,t,i,gu,yu,vu,tS);if(u){let d=new U;vr.getBarycoord(tS,gu,yu,vu,d),r&&(u.uv=vr.getInterpolatedAttribute(r,a,l,c,d,new ft)),s&&(u.uv1=vr.getInterpolatedAttribute(s,a,l,c,d,new ft)),o&&(u.normal=vr.getInterpolatedAttribute(o,a,l,c,d,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};vr.getNormal(gu,yu,vu,f.normal),u.face=f,u.barycoord=d}return u}var Do=class n extends Mr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],d=[],f=0,h=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new yi(c,3)),this.setAttribute("normal",new yi(u,3)),this.setAttribute("uv",new yi(d,2));function g(y,m,p,b,w,S,A,D,T,O,E){let x=S/T,I=A/O,j=S/2,G=A/2,Z=D/2,K=T+1,F=O+1,k=0,P=0,Y=new U;for(let ne=0;ne<F;ne++){let he=ne*I-G;for(let De=0;De<K;De++){let Ze=De*x-j;Y[y]=Ze*b,Y[m]=he*w,Y[p]=Z,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[p]=D>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(De/T),d.push(1-ne/O),k+=1}}for(let ne=0;ne<O;ne++)for(let he=0;he<T;he++){let De=f+he+K*ne,Ze=f+he+K*(ne+1),H=f+(he+1)+K*(ne+1),ie=f+(he+1)+K*ne;l.push(De,Ze,ie),l.push(Ze,H,ie),P+=6}a.addGroup(h,P,E),h+=P,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ps(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Qt(n){let e={};for(let t=0;t<n.length;t++){let i=ps(n[t]);for(let r in i)e[r]=i[r]}return e}function rR(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ym(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var QS={clone:ps,merge:Qt},sR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ni=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sR,this.fragmentShader=oR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ps(e.uniforms),this.uniformsGroups=rR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Za=class extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yr=new U,nS=new ft,iS=new ft,Wt=class extends Za{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=To*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ua*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return To*2*Math.atan(Math.tan(Ua*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){yr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yr.x,yr.y).multiplyScalar(-e/yr.z),yr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yr.x,yr.y).multiplyScalar(-e/yr.z)}getViewSize(e,t){return this.getViewBounds(e,nS,iS),t.subVectors(iS,nS)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ua*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Eo=-90,Mo=1,Ou=class extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Wt(Eo,Mo,e,t);r.layers=this.layers,this.add(r);let s=new Wt(Eo,Mo,e,t);s.layers=this.layers,this.add(s);let o=new Wt(Eo,Mo,e,t);o.layers=this.layers,this.add(o);let a=new Wt(Eo,Mo,e,t);a.layers=this.layers,this.add(a);let l=new Wt(Eo,Mo,e,t);l.layers=this.layers,this.add(l);let c=new Wt(Eo,Mo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ka=class extends Dr{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:us,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lu=class extends vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ka(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Do(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:qi});s.uniforms.tEquirect.value=t;let o=new Nt(r,s),a=t.minFilter;return t.minFilter===Tr&&(t.minFilter=ti),new Ou(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},ei=class extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}},aR={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(aR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new ei;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}};var Qa=class extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ym=new U,lR=new U,cR=new He,mi=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=ym.subVectors(i,t).cross(lR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(ym),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||cR.getNormalMatrix(e),r=this.coplanarPoint(ym).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ts=new Co,Eu=new U,Io=class{constructor(e=new mi,t=new mi,i=new mi,r=new mi,s=new mi,o=new mi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=gi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],h=r[8],g=r[9],y=r[10],m=r[11],p=r[12],b=r[13],w=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-h,S-p).normalize(),i[1].setComponents(l+s,f+c,m+h,S+p).normalize(),i[2].setComponents(l+o,f+u,m+g,S+b).normalize(),i[3].setComponents(l-o,f-u,m-g,S-b).normalize(),i[4].setComponents(l-a,f-d,m-y,S-w).normalize(),t===gi)i[5].setComponents(l+a,f+d,m+y,S+w).normalize();else if(t===Ha)i[5].setComponents(a,d,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(e){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Eu.x=r.normal.x>0?e.max.x:e.min.x,Eu.y=r.normal.y>0?e.max.y:e.min.y,Eu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Eu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ja=class extends Dr{constructor(e,t,i,r,s,o,a,l,c,u=is){if(u!==is&&u!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===is&&(i=Cr),i===void 0&&u===os&&(i=fs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}};var Mn=class n extends Mr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=t/l,h=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let b=p*f-o;for(let w=0;w<c;w++){let S=w*d-s;g.push(S,-b,0),y.push(0,0,1),m.push(w/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let w=b+c*p,S=b+c*(p+1),A=b+1+c*(p+1),D=b+1+c*p;h.push(w,S,D),h.push(S,A,D)}this.setIndex(h),this.setAttribute("position",new yi(g,3)),this.setAttribute("normal",new yi(y,3)),this.setAttribute("uv",new yi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ls=class extends xi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gm,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=ed,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Fu=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ku=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Mu(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function uR(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var cs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uu=class extends cs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xm,endingEnd:xm}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sm:s=e,a=2*t-i;break;case Em:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Sm:o=e,l=2*i-t;break;case Em:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,h=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-f*m+2*f*y-f*g,b=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,w=(-1-h)*m+(1.5+h)*y+.5*g,S=h*m-h*y;for(let A=0;A!==a;++A)s[A]=p*o[u+A]+b*o[c+A]+w*o[l+A]+S*o[d+A];return s}},Bu=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),d=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*d+o[l+f]*u;return s}},Vu=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Mu(t,this.TimeBufferType),this.values=Mu(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Mu(e.times,Array),values:Mu(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Va:t=this.InterpolantFactoryMethodDiscrete;break;case Au:t=this.InterpolantFactoryMethodLinear;break;case wu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Va;case this.InterpolantFactoryMethodLinear:return Au;case this.InterpolantFactoryMethodSmooth:return wu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&uR(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===wu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{let d=a*i,f=d-i,h=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[f+g]||y!==t[h+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let h=0;h!==i;++h)t[f+h]=t[d+h]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=Au;var wr=class extends kn{constructor(e,t,i){super(e,t,i)}};wr.prototype.ValueTypeName="bool";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=Va;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;var zu=class extends kn{};zu.prototype.ValueTypeName="color";var Hu=class extends kn{};Hu.prototype.ValueTypeName="number";var Gu=class extends cs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t),c=e*a;for(let u=c+a;c!==u;c+=4)dn.slerpFlat(s,0,o,c-a,o,c,l);return s}},el=class extends kn{InterpolantFactoryMethodLinear(e){return new Gu(this.times,this.values,this.getValueSize(),e)}};el.prototype.ValueTypeName="quaternion";el.prototype.InterpolantFactoryMethodSmooth=void 0;var br=class extends kn{constructor(e,t,i){super(e,t,i)}};br.prototype.ValueTypeName="string";br.prototype.ValueBufferType=Array;br.prototype.DefaultInterpolation=Va;br.prototype.InterpolantFactoryMethodLinear=void 0;br.prototype.InterpolantFactoryMethodSmooth=void 0;var Wu=class extends kn{};Wu.prototype.ValueTypeName="vector";var tl=class extends _i{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var vm=new Rt,rS=new U,sS=new U,bm=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Io,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;rS.setFromMatrixPosition(e.matrixWorld),t.position.copy(rS),sS.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sS),t.updateMatrixWorld(),vm.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vm),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vm)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var nl=class extends Za{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tm=class extends bm{constructor(){super(new nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ro=class extends tl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_i.DEFAULT_UP),this.updateMatrix(),this.target=new _i,this.shadow=new Tm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},il=class extends tl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ju=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}};var Zm="\\[\\]\\.:\\/",dR=new RegExp("["+Zm+"]","g"),Km="[^"+Zm+"]",fR="[^"+Zm.replace("\\.","")+"]",hR=/((?:WC+[\/:])*)/.source.replace("WC",Km),pR=/(WCOD+)?/.source.replace("WCOD",fR),mR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Km),gR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Km),yR=new RegExp("^"+hR+pR+mR+gR+"$"),vR=["material","materials","bones","map"],Cm=class{constructor(e,t,i){let r=i||It.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},It=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(dR,"")}static parseTrackName(t){let i=yR.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);vR.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let l=o[a];if(l.name===i||l.uuid===i)return l;let c=r(l.children);if(c)return c}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=Cm,n})();It.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};It.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};It.prototype.GetterByBindingType=[It.prototype._getValue_direct,It.prototype._getValue_array,It.prototype._getValue_arrayElement,It.prototype._getValue_toArray];It.prototype.SetterByBindingTypeAndVersioning=[[It.prototype._setValue_direct,It.prototype._setValue_direct_setNeedsUpdate,It.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[It.prototype._setValue_array,It.prototype._setValue_array_setNeedsUpdate,It.prototype._setValue_array_setMatrixWorldNeedsUpdate],[It.prototype._setValue_arrayElement,It.prototype._setValue_arrayElement_setNeedsUpdate,It.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[It.prototype._setValue_fromArray,It.prototype._setValue_fromArray_setNeedsUpdate,It.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gz=new Float32Array(1);function Qm(n,e,t,i){let r=_R(i);switch(t){case Fm:return n*e;case Um:return n*e;case Bm:return n*e*2;case Vm:return n*e/r.components*r.byteLength;case ad:return n*e/r.components*r.byteLength;case zm:return n*e*2/r.components*r.byteLength;case ld:return n*e*2/r.components*r.byteLength;case km:return n*e*3/r.components*r.byteLength;case Un:return n*e*4/r.components*r.byteLength;case cd:return n*e*4/r.components*r.byteLength;case ol:case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ll:case cl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dd:case hd:return Math.max(n,16)*Math.max(e,8)/4;case ud:case fd:return Math.max(n,8)*Math.max(e,8)/2;case pd:case md:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case gd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case _d:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case xd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wd:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case bd:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Td:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Dd:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ad:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Id:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ul:case Rd:case Nd:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Hm:case Pd:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Od:case Ld:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _R(n){switch(n){case Ei:case Pm:return{byteLength:1,components:1};case No:case Om:case Po:return{byteLength:2,components:1};case sd:case od:return{byteLength:2,components:4};case Cr:case rd:case Mi:return{byteLength:4,components:1};case Lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$u}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$u);function EE(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function xR(n){let e=new WeakMap;function t(a,l){let c=a.array,u=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let u=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){let g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){let y=d[h];n.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var SR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ER=`#ifdef USE_ALPHAHASH
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
#endif`,MR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CR=`#ifdef USE_AOMAP
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
#endif`,DR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AR=`#ifdef USE_BATCHING
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
#endif`,IR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,NR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PR=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,OR=`#ifdef USE_IRIDESCENCE
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
#endif`,LR=`#ifdef USE_BUMPMAP
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
#endif`,FR=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,BR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,HR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,GR=`#if defined( USE_COLOR_ALPHA )
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
#endif`,WR=`#define PI 3.141592653589793
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
} // validated`,jR=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$R=`vec3 transformedNormal = objectNormal;
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
#endif`,qR=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XR=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YR=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZR=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KR="gl_FragColor = linearToOutputTexel( gl_FragColor );",QR=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,JR=`#ifdef USE_ENVMAP
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
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,t1=`#ifdef USE_ENVMAP
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
#endif`,n1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,a1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l1=`#ifdef USE_GRADIENTMAP
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
}`,c1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f1=`uniform bool receiveShadow;
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
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,p1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,v1=`PhysicalMaterial material;
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
#endif`,_1=`struct PhysicalMaterial {
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
}`,x1=`
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
#endif`,S1=`#if defined( RE_IndirectDiffuse )
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,w1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I1=`#if defined( USE_POINTS_UV )
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
#endif`,R1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`#ifdef USE_MORPHTARGETS
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
#endif`,k1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,B1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
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
#endif`,W1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,X1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Z1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eN=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iN=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sN=`float getShadowMask() {
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
}`,oN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aN=`#ifdef USE_SKINNING
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
#endif`,lN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cN=`#ifdef USE_SKINNING
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
#endif`,uN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dN=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hN=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pN=`#ifdef USE_TRANSMISSION
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
#endif`,mN=`#ifdef USE_TRANSMISSION
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
#endif`,gN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_N=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xN=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SN=`uniform sampler2D t2D;
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
}`,EN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MN=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bN=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TN=`#include <common>
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
}`,CN=`#if DEPTH_PACKING == 3200
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
}`,DN=`#define DISTANCE
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
}`,AN=`#define DISTANCE
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
}`,IN=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,RN=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NN=`uniform float scale;
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
}`,PN=`uniform vec3 diffuse;
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
}`,ON=`#include <common>
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
}`,LN=`uniform vec3 diffuse;
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
}`,FN=`#define LAMBERT
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
}`,kN=`#define LAMBERT
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
}`,UN=`#define MATCAP
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
}`,BN=`#define MATCAP
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
}`,VN=`#define NORMAL
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
}`,zN=`#define NORMAL
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
}`,HN=`#define PHONG
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
}`,GN=`#define PHONG
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
}`,WN=`#define STANDARD
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
}`,jN=`#define STANDARD
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
}`,$N=`#define TOON
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
}`,qN=`#define TOON
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
}`,XN=`uniform float size;
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
}`,YN=`uniform vec3 diffuse;
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
}`,ZN=`#include <common>
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
}`,KN=`uniform vec3 color;
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
}`,QN=`uniform float rotation;
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
}`,JN=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:SR,alphahash_pars_fragment:ER,alphamap_fragment:MR,alphamap_pars_fragment:wR,alphatest_fragment:bR,alphatest_pars_fragment:TR,aomap_fragment:CR,aomap_pars_fragment:DR,batching_pars_vertex:AR,batching_vertex:IR,begin_vertex:RR,beginnormal_vertex:NR,bsdfs:PR,iridescence_fragment:OR,bumpmap_pars_fragment:LR,clipping_planes_fragment:FR,clipping_planes_pars_fragment:kR,clipping_planes_pars_vertex:UR,clipping_planes_vertex:BR,color_fragment:VR,color_pars_fragment:zR,color_pars_vertex:HR,color_vertex:GR,common:WR,cube_uv_reflection_fragment:jR,defaultnormal_vertex:$R,displacementmap_pars_vertex:qR,displacementmap_vertex:XR,emissivemap_fragment:YR,emissivemap_pars_fragment:ZR,colorspace_fragment:KR,colorspace_pars_fragment:QR,envmap_fragment:JR,envmap_common_pars_fragment:e1,envmap_pars_fragment:t1,envmap_pars_vertex:n1,envmap_physical_pars_fragment:h1,envmap_vertex:i1,fog_vertex:r1,fog_pars_vertex:s1,fog_fragment:o1,fog_pars_fragment:a1,gradientmap_pars_fragment:l1,lightmap_pars_fragment:c1,lights_lambert_fragment:u1,lights_lambert_pars_fragment:d1,lights_pars_begin:f1,lights_toon_fragment:p1,lights_toon_pars_fragment:m1,lights_phong_fragment:g1,lights_phong_pars_fragment:y1,lights_physical_fragment:v1,lights_physical_pars_fragment:_1,lights_fragment_begin:x1,lights_fragment_maps:S1,lights_fragment_end:E1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:w1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:T1,map_fragment:C1,map_pars_fragment:D1,map_particle_fragment:A1,map_particle_pars_fragment:I1,metalnessmap_fragment:R1,metalnessmap_pars_fragment:N1,morphinstance_vertex:P1,morphcolor_vertex:O1,morphnormal_vertex:L1,morphtarget_pars_vertex:F1,morphtarget_vertex:k1,normal_fragment_begin:U1,normal_fragment_maps:B1,normal_pars_fragment:V1,normal_pars_vertex:z1,normal_vertex:H1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:W1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:$1,iridescence_pars_fragment:q1,opaque_fragment:X1,packing:Y1,premultiplied_alpha_fragment:Z1,project_vertex:K1,dithering_fragment:Q1,dithering_pars_fragment:J1,roughnessmap_fragment:eN,roughnessmap_pars_fragment:tN,shadowmap_pars_fragment:nN,shadowmap_pars_vertex:iN,shadowmap_vertex:rN,shadowmask_pars_fragment:sN,skinbase_vertex:oN,skinning_pars_vertex:aN,skinning_vertex:lN,skinnormal_vertex:cN,specularmap_fragment:uN,specularmap_pars_fragment:dN,tonemapping_fragment:fN,tonemapping_pars_fragment:hN,transmission_fragment:pN,transmission_pars_fragment:mN,uv_pars_fragment:gN,uv_pars_vertex:yN,uv_vertex:vN,worldpos_vertex:_N,background_vert:xN,background_frag:SN,backgroundCube_vert:EN,backgroundCube_frag:MN,cube_vert:wN,cube_frag:bN,depth_vert:TN,depth_frag:CN,distanceRGBA_vert:DN,distanceRGBA_frag:AN,equirect_vert:IN,equirect_frag:RN,linedashed_vert:NN,linedashed_frag:PN,meshbasic_vert:ON,meshbasic_frag:LN,meshlambert_vert:FN,meshlambert_frag:kN,meshmatcap_vert:UN,meshmatcap_frag:BN,meshnormal_vert:VN,meshnormal_frag:zN,meshphong_vert:HN,meshphong_frag:GN,meshphysical_vert:WN,meshphysical_frag:jN,meshtoon_vert:$N,meshtoon_frag:qN,points_vert:XN,points_frag:YN,shadow_vert:ZN,shadow_frag:KN,sprite_vert:QN,sprite_frag:JN},se={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},wi={basic:{uniforms:Qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Qt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Qt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Qt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ye(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Qt([se.points,se.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Qt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Qt([se.common,se.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Qt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Qt([se.sprite,se.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Qt([se.common,se.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Qt([se.lights,se.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};wi.physical={uniforms:Qt([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Fd={r:0,b:0,g:0},ms=new Er,eP=new Rt;function tP(n,e,t,i,r,s,o){let a=new Ye(0),l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function y(w){let S=!1,A=g(w);A===null?p(a,l):A&&A.isColor&&(p(A,1),S=!0);let D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,S){let A=g(S);A&&(A.isCubeTexture||A.mapping===rl)?(u===void 0&&(u=new Nt(new Do(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ps(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,T,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),ms.copy(S.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(eP.makeRotationFromEuler(ms)),u.material.toneMapped=lt.getTransfer(A.colorSpace)!==yt,(d!==A||f!==A.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new Nt(new Mn(2,2),new ni({name:"BackgroundMaterial",uniforms:ps(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=lt.getTransfer(A.colorSpace)!==yt,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,S){w.getRGB(Fd,Ym(n)),i.buffers.color.setClear(Fd.r,Fd.g,Fd.b,S,o)}function b(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(a,l)},render:y,addToRenderList:m,dispose:b}}function nP(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null),s=r,o=!1;function a(x,I,j,G,Z){let K=!1,F=d(G,j,I);s!==F&&(s=F,c(s.object)),K=h(x,G,j,Z),K&&g(x,G,j,Z),Z!==null&&e.update(Z,n.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(x,I,j,G),Z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,I,j){let G=j.wireframe===!0,Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let K=Z[I.id];K===void 0&&(K={},Z[I.id]=K);let F=K[G];return F===void 0&&(F=f(l()),K[G]=F),F}function f(x){let I=[],j=[],G=[];for(let Z=0;Z<t;Z++)I[Z]=0,j[Z]=0,G[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:j,attributeDivisors:G,object:x,attributes:{},index:null}}function h(x,I,j,G){let Z=s.attributes,K=I.attributes,F=0,k=j.getAttributes();for(let P in k)if(k[P].location>=0){let ne=Z[P],he=K[P];if(he===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(he=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(he=x.instanceColor)),ne===void 0||ne.attribute!==he||he&&ne.data!==he.data)return!0;F++}return s.attributesNum!==F||s.index!==G}function g(x,I,j,G){let Z={},K=I.attributes,F=0,k=j.getAttributes();for(let P in k)if(k[P].location>=0){let ne=K[P];ne===void 0&&(P==="instanceMatrix"&&x.instanceMatrix&&(ne=x.instanceMatrix),P==="instanceColor"&&x.instanceColor&&(ne=x.instanceColor));let he={};he.attribute=ne,ne&&ne.data&&(he.data=ne.data),Z[P]=he,F++}s.attributes=Z,s.attributesNum=F,s.index=G}function y(){let x=s.newAttributes;for(let I=0,j=x.length;I<j;I++)x[I]=0}function m(x){p(x,0)}function p(x,I){let j=s.newAttributes,G=s.enabledAttributes,Z=s.attributeDivisors;j[x]=1,G[x]===0&&(n.enableVertexAttribArray(x),G[x]=1),Z[x]!==I&&(n.vertexAttribDivisor(x,I),Z[x]=I)}function b(){let x=s.newAttributes,I=s.enabledAttributes;for(let j=0,G=I.length;j<G;j++)I[j]!==x[j]&&(n.disableVertexAttribArray(j),I[j]=0)}function w(x,I,j,G,Z,K,F){F===!0?n.vertexAttribIPointer(x,I,j,Z,K):n.vertexAttribPointer(x,I,j,G,Z,K)}function S(x,I,j,G){y();let Z=G.attributes,K=j.getAttributes(),F=I.defaultAttributeValues;for(let k in K){let P=K[k];if(P.location>=0){let Y=Z[k];if(Y===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Y=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Y=x.instanceColor)),Y!==void 0){let ne=Y.normalized,he=Y.itemSize,De=e.get(Y);if(De===void 0)continue;let Ze=De.buffer,H=De.type,ie=De.bytesPerElement,xe=H===n.INT||H===n.UNSIGNED_INT||Y.gpuType===rd;if(Y.isInterleavedBufferAttribute){let ee=Y.data,Ee=ee.stride,Le=Y.offset;if(ee.isInstancedInterleavedBuffer){for(let Ae=0;Ae<P.locationSize;Ae++)p(P.location+Ae,ee.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Ae=0;Ae<P.locationSize;Ae++)m(P.location+Ae);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let Ae=0;Ae<P.locationSize;Ae++)w(P.location+Ae,he/P.locationSize,H,ne,Ee*ie,(Le+he/P.locationSize*Ae)*ie,xe)}else{if(Y.isInstancedBufferAttribute){for(let ee=0;ee<P.locationSize;ee++)p(P.location+ee,Y.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ee=0;ee<P.locationSize;ee++)m(P.location+ee);n.bindBuffer(n.ARRAY_BUFFER,Ze);for(let ee=0;ee<P.locationSize;ee++)w(P.location+ee,he/P.locationSize,H,ne,he*ie,he/P.locationSize*ee*ie,xe)}}else if(F!==void 0){let ne=F[k];if(ne!==void 0)switch(ne.length){case 2:n.vertexAttrib2fv(P.location,ne);break;case 3:n.vertexAttrib3fv(P.location,ne);break;case 4:n.vertexAttrib4fv(P.location,ne);break;default:n.vertexAttrib1fv(P.location,ne)}}}}b()}function A(){O();for(let x in i){let I=i[x];for(let j in I){let G=I[j];for(let Z in G)u(G[Z].object),delete G[Z];delete I[j]}delete i[x]}}function D(x){if(i[x.id]===void 0)return;let I=i[x.id];for(let j in I){let G=I[j];for(let Z in G)u(G[Z].object),delete G[Z];delete I[j]}delete i[x.id]}function T(x){for(let I in i){let j=i[I];if(j[x.id]===void 0)continue;let G=j[x.id];for(let Z in G)u(G[Z].object),delete G[Z];delete j[x.id]}}function O(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:O,resetDefaultState:E,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function iP(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function o(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,f){if(d===0)return;let h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=u[y]*f[y];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rP(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let O=T===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ei&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mi&&!O)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,D=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:A,maxSamples:D}}function sP(n){let e=this,t=null,i=0,r=!1,s=!1,o=new mi,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,h){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{let b=s?0:i,w=b*4,S=p.clippingState||null;l.value=S,S=u(g,f,w,h);for(let A=0;A!==w;++A)S[A]=t[A];p.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=h+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=h;w!==y;++w,S+=4)o.copy(d[w]).applyMatrix4(b,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function oP(n){let e=new WeakMap;function t(o,a){return a===td?o.mapping=us:a===nd&&(o.mapping=ds),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===td||a===nd)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Lu(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Fo=4,JS=[.125,.215,.35,.446,.526,.582],vs=20,Jm=new nl,eE=new Ye,eg=null,tg=0,ng=0,ig=!1,ys=(1+Math.sqrt(5))/2,Lo=1/ys,tE=[new U(-ys,Lo,0),new U(ys,Lo,0),new U(-Lo,0,ys),new U(Lo,0,ys),new U(0,ys,-Lo),new U(0,ys,Lo),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Bd=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){eg=this._renderer.getRenderTarget(),tg=this._renderer.getActiveCubeFace(),ng=this._renderer.getActiveMipmapLevel(),ig=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eg,tg,ng),this._renderer.xr.enabled=ig,e.scissorTest=!1,kd(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===us||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eg=this._renderer.getRenderTarget(),tg=this._renderer.getActiveCubeFace(),ng=this._renderer.getActiveMipmapLevel(),ig=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Po,format:Un,colorSpace:as,depthBuffer:!1},r=nE(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nE(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aP(s)),this._blurMaterial=lP(s,e,t)}return r}_compileMaterial(e){let t=new Nt(this._lodPlanes[0],e);this._renderer.compile(t,Jm)}_sceneToCubeUV(e,t,i,r){let a=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(eE),u.toneMapping=Xi,u.autoClear=!1;let h=new qa({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Nt(new Do,h),y=!1,m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,y=!0):(h.color.copy(eE),y=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let w=this._cubeSize;kd(r,b*w,p>2?w:0,w,w),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===us||e.mapping===ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iE());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Nt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;kd(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Jm)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=tE[(r-s-1)%tE.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Nt(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*vs-1),y=s/g,m=isFinite(s)?1+Math.floor(u*y):vs;m>vs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);let p=[],b=0;for(let T=0;T<vs;++T){let O=T/y,E=Math.exp(-O*O/2);p.push(E),T===0?b+=E:T<m&&(b+=2*E)}for(let T=0;T<p.length;T++)p[T]=p[T]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;let S=this._sizeLods[r],A=3*S*(r>w-Fo?r-w+Fo:0),D=4*(this._cubeSize-S);kd(t,A,D,3*S,2*S),l.setRenderTarget(t),l.render(d,Jm)}};function aP(n){let e=[],t=[],i=[],r=n,s=n-Fo+1+JS.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Fo?l=JS[o-n+Fo-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*h),w=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let D=0;D<h;D++){let T=D%3*2/3-1,O=D>2?0:-1,E=[T,O,0,T+2/3,O,0,T+2/3,O+1,0,T,O,0,T+2/3,O+1,0,T,O+1,0];b.set(E,y*g*D),w.set(f,m*g*D);let x=[D,D,D,D,D,D];S.set(x,p*g*D)}let A=new Mr;A.setAttribute("position",new En(b,y)),A.setAttribute("uv",new En(w,m)),A.setAttribute("faceIndex",new En(S,p)),e.push(A),r>Fo&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function nE(n,e,t){let i=new vi(n,e,t);return i.texture.mapping=rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function kd(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function lP(n,e,t){let i=new Float32Array(vs),r=new U(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hg(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function iE(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hg(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function rE(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function hg(){return`

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
	`}function cP(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===td||l===nd,u=l===us||l===ds;if(c||u){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Bd(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new Bd(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uP(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&hs("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dP(n,e,t,i){let r={},s=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let h in f)e.update(f[h],n.ARRAY_BUFFER)}function c(d){let f=[],h=d.index,g=d.attributes.position,y=0;if(h!==null){let b=h.array;y=h.version;for(let w=0,S=b.length;w<S;w+=3){let A=b[w+0],D=b[w+1],T=b[w+2];f.push(A,D,D,T,T,A)}}else if(g!==void 0){let b=g.array;y=g.version;for(let w=0,S=b.length/3-1;w<S;w+=3){let A=w+0,D=w+1,T=w+2;f.push(A,D,D,T,T,A)}}else return;let m=new(Xm(f)?Ya:Xa)(f,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){let f=s.get(d);if(f){let h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function fP(n,e,t){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){n.drawElements(i,h,s,f*o),t.update(h,i,1)}function c(f,h,g){g!==0&&(n.drawElementsInstanced(i,h,s,f*o,g),t.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,i,1)}function d(f,h,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,y,0,g);let p=0;for(let b=0;b<g;b++)p+=h[b]*y[b];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function hP(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pP(n,e,t){let i=new WeakMap,r=new Ct;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0,f=i.get(a);if(f===void 0||f.count!==d){let x=function(){O.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var h=x;f!==void 0&&f.texture.dispose();let g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[],S=0;g===!0&&(S=1),y===!0&&(S=2),m===!0&&(S=3);let A=a.attributes.position.count*S,D=1;A>e.maxTextureSize&&(D=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);let T=new Float32Array(A*D*4*d),O=new ja(T,A,D,d);O.type=Mi,O.needsUpdate=!0;let E=S*4;for(let I=0;I<d;I++){let j=p[I],G=b[I],Z=w[I],K=A*D*4*I;for(let F=0;F<j.count;F++){let k=F*E;g===!0&&(r.fromBufferAttribute(j,F),T[K+k+0]=r.x,T[K+k+1]=r.y,T[K+k+2]=r.z,T[K+k+3]=0),y===!0&&(r.fromBufferAttribute(G,F),T[K+k+4]=r.x,T[K+k+5]=r.y,T[K+k+6]=r.z,T[K+k+7]=0),m===!0&&(r.fromBufferAttribute(Z,F),T[K+k+8]=r.x,T[K+k+9]=r.y,T[K+k+10]=r.z,T[K+k+11]=Z.itemSize===4?r.w:1)}}f={count:d,texture:O,size:new ft(A,D)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];let y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",y),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function mP(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var ME=new Dr,sE=new Ja(1,1),wE=new ja,bE=new Nu,TE=new Ka,oE=[],aE=[],lE=new Float32Array(16),cE=new Float32Array(9),uE=new Float32Array(4);function Uo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=oE[r];if(s===void 0&&(s=new Float32Array(r),oE[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Vt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function zd(n,e){let t=aE[e];t===void 0&&(t=new Int32Array(e),aE[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function gP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function yP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function vP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function _P(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function xP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;uE.set(i),n.uniformMatrix2fv(this.addr,!1,uE),zt(t,i)}}function SP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;cE.set(i),n.uniformMatrix3fv(this.addr,!1,cE),zt(t,i)}}function EP(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Vt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Vt(t,i))return;lE.set(i),n.uniformMatrix4fv(this.addr,!1,lE),zt(t,i)}}function MP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function wP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function bP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function TP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function CP(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function DP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function AP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function IP(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function RP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(sE.compareFunction=Wm,s=sE):s=ME,t.setTexture2D(e||s,r)}function NP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||bE,r)}function PP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||TE,r)}function OP(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||wE,r)}function LP(n){switch(n){case 5126:return gP;case 35664:return yP;case 35665:return vP;case 35666:return _P;case 35674:return xP;case 35675:return SP;case 35676:return EP;case 5124:case 35670:return MP;case 35667:case 35671:return wP;case 35668:case 35672:return bP;case 35669:case 35673:return TP;case 5125:return CP;case 36294:return DP;case 36295:return AP;case 36296:return IP;case 35678:case 36198:case 36298:case 36306:case 35682:return RP;case 35679:case 36299:case 36307:return NP;case 35680:case 36300:case 36308:case 36293:return PP;case 36289:case 36303:case 36311:case 36292:return OP}}function FP(n,e){n.uniform1fv(this.addr,e)}function kP(n,e){let t=Uo(e,this.size,2);n.uniform2fv(this.addr,t)}function UP(n,e){let t=Uo(e,this.size,3);n.uniform3fv(this.addr,t)}function BP(n,e){let t=Uo(e,this.size,4);n.uniform4fv(this.addr,t)}function VP(n,e){let t=Uo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function zP(n,e){let t=Uo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function HP(n,e){let t=Uo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GP(n,e){n.uniform1iv(this.addr,e)}function WP(n,e){n.uniform2iv(this.addr,e)}function jP(n,e){n.uniform3iv(this.addr,e)}function $P(n,e){n.uniform4iv(this.addr,e)}function qP(n,e){n.uniform1uiv(this.addr,e)}function XP(n,e){n.uniform2uiv(this.addr,e)}function YP(n,e){n.uniform3uiv(this.addr,e)}function ZP(n,e){n.uniform4uiv(this.addr,e)}function KP(n,e,t){let i=this.cache,r=e.length,s=zd(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ME,s[o])}function QP(n,e,t){let i=this.cache,r=e.length,s=zd(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||bE,s[o])}function JP(n,e,t){let i=this.cache,r=e.length,s=zd(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||TE,s[o])}function eO(n,e,t){let i=this.cache,r=e.length,s=zd(t,r);Vt(i,s)||(n.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||wE,s[o])}function tO(n){switch(n){case 5126:return FP;case 35664:return kP;case 35665:return UP;case 35666:return BP;case 35674:return VP;case 35675:return zP;case 35676:return HP;case 5124:case 35670:return GP;case 35667:case 35671:return WP;case 35668:case 35672:return jP;case 35669:case 35673:return $P;case 5125:return qP;case 36294:return XP;case 36295:return YP;case 36296:return ZP;case 35678:case 36198:case 36298:case 36306:case 35682:return KP;case 35679:case 36299:case 36307:return QP;case 35680:case 36300:case 36308:case 36293:return JP;case 36289:case 36303:case 36311:case 36292:return eO}}var sg=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=LP(t.type)}},og=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tO(t.type)}},ag=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},rg=/(\w+)(\])?(\[|\.)?/g;function dE(n,e){n.seq.push(e),n.map[e.id]=e}function nO(n,e,t){let i=n.name,r=i.length;for(rg.lastIndex=0;;){let s=rg.exec(i),o=rg.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dE(t,c===void 0?new sg(a,n,e):new og(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new ag(a),dE(t,d)),t=d}}}var ko=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);nO(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function fE(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var iO=37297,rO=0;function sO(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var hE=new He;function oO(n){lt._getMatrix(hE,lt.workingColorSpace,n);let e=`mat3( ${hE.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(n)){case za:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function pE(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sO(n.getShaderSource(e),o)}else return r}function aO(n,e){let t=oO(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function lO(n,e){let t;switch(e){case AS:t="Linear";break;case IS:t="Reinhard";break;case RS:t="Cineon";break;case NS:t="ACESFilmic";break;case OS:t="AgX";break;case LS:t="Neutral";break;case PS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ud=new U;function cO(){lt.getLuminanceCoefficients(Ud);let n=Ud.x.toFixed(4),e=Ud.y.toFixed(4),t=Ud.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uO(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dl).join(`
`)}function dO(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fO(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function dl(n){return n!==""}function mE(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gE(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var hO=/^[ \t]*#include +<([\w\d./]+)>/gm;function lg(n){return n.replace(hO,mO)}var pO=new Map;function mO(n,e){let t=qe[e];if(t===void 0){let i=pO.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return lg(t)}var gO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yE(n){return n.replace(gO,yO)}function yO(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vE(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function vO(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Am?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Si&&(e="SHADOWMAP_TYPE_VSM"),e}function _O(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case us:case ds:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xO(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ds:e="ENVMAP_MODE_REFRACTION";break}return e}function SO(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ed:e="ENVMAP_BLENDING_MULTIPLY";break;case CS:e="ENVMAP_BLENDING_MIX";break;case DS:e="ENVMAP_BLENDING_ADD";break}return e}function EO(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function MO(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=vO(t),c=_O(t),u=xO(t),d=SO(t),f=EO(t),h=uO(t),g=dO(s),y=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dl).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(dl).join(`
`),p.length>0&&(p+=`
`)):(m=[vE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dl).join(`
`),p=[vE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Xi?lO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,aO("linearToOutputTexel",t.outputColorSpace),cO(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dl).join(`
`)),o=lg(o),o=mE(o,t),o=gE(o,t),a=lg(a),a=mE(a,t),a=gE(a,t),o=yE(o),a=yE(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===jm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+m+o,S=b+p+a,A=fE(r,r.VERTEX_SHADER,w),D=fE(r,r.FRAGMENT_SHADER,S);r.attachShader(y,A),r.attachShader(y,D),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(I){if(n.debug.checkShaderErrors){let j=r.getProgramInfoLog(y).trim(),G=r.getShaderInfoLog(A).trim(),Z=r.getShaderInfoLog(D).trim(),K=!0,F=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,A,D);else{let k=pE(r,A,"vertex"),P=pE(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+k+`
`+P)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||Z==="")&&(F=!1);F&&(I.diagnostics={runnable:K,programLog:j,vertexShader:{log:G,prefix:m},fragmentShader:{log:Z,prefix:p}})}r.deleteShader(A),r.deleteShader(D),O=new ko(r,y),E=fO(r,y)}let O;this.getUniforms=function(){return O===void 0&&T(this),O};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,iO)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rO++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=D,this}var wO=0,cg=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ug(e),t.set(e,i)),i}},ug=class{constructor(e){this.id=wO++,this.code=e,this.usedTimes=0}};function bO(n,e,t,i,r,s,o){let a=new $a,l=new cg,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures,h=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,x,I,j,G){let Z=j.fog,K=G.geometry,F=E.isMeshStandardMaterial?j.environment:null,k=(E.isMeshStandardMaterial?t:e).get(E.envMap||F),P=k&&k.mapping===rl?k.image.height:null,Y=g[E.type];E.precision!==null&&(h=r.getMaxPrecision(E.precision),h!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",h,"instead."));let ne=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,he=ne!==void 0?ne.length:0,De=0;K.morphAttributes.position!==void 0&&(De=1),K.morphAttributes.normal!==void 0&&(De=2),K.morphAttributes.color!==void 0&&(De=3);let Ze,H,ie,xe;if(Y){let gt=wi[Y];Ze=gt.vertexShader,H=gt.fragmentShader}else Ze=E.vertexShader,H=E.fragmentShader,l.update(E),ie=l.getVertexShaderID(E),xe=l.getFragmentShaderID(E);let ee=n.getRenderTarget(),Ee=n.state.buffers.depth.getReversed(),Le=G.isInstancedMesh===!0,Ae=G.isBatchedMesh===!0,St=!!E.map,bt=!!E.matcap,Qe=!!k,C=!!E.aoMap,Tn=!!E.lightMap,Je=!!E.bumpMap,et=!!E.normalMap,Te=!!E.displacementMap,Et=!!E.emissiveMap,we=!!E.metalnessMap,M=!!E.roughnessMap,v=E.anisotropy>0,B=E.clearcoat>0,q=E.dispersion>0,Q=E.iridescence>0,$=E.sheen>0,Me=E.transmission>0,ce=v&&!!E.anisotropyMap,pe=B&&!!E.clearcoatMap,st=B&&!!E.clearcoatNormalMap,te=B&&!!E.clearcoatRoughnessMap,ye=Q&&!!E.iridescenceMap,Ne=Q&&!!E.iridescenceThicknessMap,Pe=$&&!!E.sheenColorMap,ve=$&&!!E.sheenRoughnessMap,tt=!!E.specularMap,$e=!!E.specularColorMap,xt=!!E.specularIntensityMap,R=Me&&!!E.transmissionMap,oe=Me&&!!E.thicknessMap,W=!!E.gradientMap,X=!!E.alphaMap,de=E.alphaTest>0,ue=!!E.alphaHash,We=!!E.extensions,Dt=Xi;E.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Dt=n.toneMapping);let Xt={shaderID:Y,shaderType:E.type,shaderName:E.name,vertexShader:Ze,fragmentShader:H,defines:E.defines,customVertexShaderID:ie,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:h,batching:Ae,batchingColor:Ae&&G._colorsTexture!==null,instancing:Le,instancingColor:Le&&G.instanceColor!==null,instancingMorph:Le&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ee===null?n.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:as,alphaToCoverage:!!E.alphaToCoverage,map:St,matcap:bt,envMap:Qe,envMapMode:Qe&&k.mapping,envMapCubeUVHeight:P,aoMap:C,lightMap:Tn,bumpMap:Je,normalMap:et,displacementMap:f&&Te,emissiveMap:Et,normalMapObjectSpace:et&&E.normalMapType===BS,normalMapTangentSpace:et&&E.normalMapType===Gm,metalnessMap:we,roughnessMap:M,anisotropy:v,anisotropyMap:ce,clearcoat:B,clearcoatMap:pe,clearcoatNormalMap:st,clearcoatRoughnessMap:te,dispersion:q,iridescence:Q,iridescenceMap:ye,iridescenceThicknessMap:Ne,sheen:$,sheenColorMap:Pe,sheenRoughnessMap:ve,specularMap:tt,specularColorMap:$e,specularIntensityMap:xt,transmission:Me,transmissionMap:R,thicknessMap:oe,gradientMap:W,opaque:E.transparent===!1&&E.blending===rs&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:de,alphaHash:ue,combine:E.combine,mapUv:St&&y(E.map.channel),aoMapUv:C&&y(E.aoMap.channel),lightMapUv:Tn&&y(E.lightMap.channel),bumpMapUv:Je&&y(E.bumpMap.channel),normalMapUv:et&&y(E.normalMap.channel),displacementMapUv:Te&&y(E.displacementMap.channel),emissiveMapUv:Et&&y(E.emissiveMap.channel),metalnessMapUv:we&&y(E.metalnessMap.channel),roughnessMapUv:M&&y(E.roughnessMap.channel),anisotropyMapUv:ce&&y(E.anisotropyMap.channel),clearcoatMapUv:pe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:st&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ve&&y(E.sheenRoughnessMap.channel),specularMapUv:tt&&y(E.specularMap.channel),specularColorMapUv:$e&&y(E.specularColorMap.channel),specularIntensityMapUv:xt&&y(E.specularIntensityMap.channel),transmissionMapUv:R&&y(E.transmissionMap.channel),thicknessMapUv:oe&&y(E.thicknessMap.channel),alphaMapUv:X&&y(E.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(et||v),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!K.attributes.uv&&(St||X),fog:!!Z,useFog:E.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ee,skinning:G.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:De,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:St&&E.map.isVideoTexture===!0&&lt.getTransfer(E.map.colorSpace)===yt,decodeVideoTextureEmissive:Et&&E.emissiveMap.isVideoTexture===!0&&lt.getTransfer(E.emissiveMap.colorSpace)===yt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===fn,flipSided:E.side===sn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:We&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&E.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xt.vertexUv1s=c.has(1),Xt.vertexUv2s=c.has(2),Xt.vertexUv3s=c.has(3),c.clear(),Xt}function p(E){let x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(let I in E.defines)x.push(I),x.push(E.defines[I]);return E.isRawShaderMaterial===!1&&(b(x,E),w(x,E),x.push(n.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function b(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function w(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function S(E){let x=g[E.type],I;if(x){let j=wi[x];I=QS.clone(j.uniforms)}else I=E.uniforms;return I}function A(E,x){let I;for(let j=0,G=u.length;j<G;j++){let Z=u[j];if(Z.cacheKey===x){I=Z,++I.usedTimes;break}}return I===void 0&&(I=new MO(n,x,E,s),u.push(I)),I}function D(E){if(--E.usedTimes===0){let x=u.indexOf(E);u[x]=u[u.length-1],u.pop(),E.destroy()}}function T(E){l.remove(E)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:A,releaseProgram:D,releaseShaderCache:T,programs:u,dispose:O}}function TO(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CO(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _E(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function xE(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,f,h,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function a(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):t.push(p)}function l(d,f,h,g,y,m){let p=o(d,f,h,g,y,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||CO),i.length>1&&i.sort(f||_E),r.length>1&&r.sort(f||_E)}function u(){for(let d=e,f=n.length;d<f;d++){let h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function DO(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new xE,n.set(i,[o])):r>=s.length?(o=new xE,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function AO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Ye};break;case"SpotLight":t={position:new U,direction:new U,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function IO(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var RO=0;function NO(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function PO(n){let e=new AO,t=IO(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let r=new U,s=new Rt,o=new Rt;function a(c){let u=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let h=0,g=0,y=0,m=0,p=0,b=0,w=0,S=0,A=0,D=0,T=0;c.sort(NO);for(let E=0,x=c.length;E<x;E++){let I=c[E],j=I.color,G=I.intensity,Z=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=j.r*G,d+=j.g*G,f+=j.b*G;else if(I.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(I.sh.coefficients[F],G);T++}else if(I.isDirectionalLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let k=I.shadow,P=t.get(I);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,i.directionalShadow[h]=P,i.directionalShadowMap[h]=K,i.directionalShadowMatrix[h]=I.shadow.matrix,b++}i.directional[h]=F,h++}else if(I.isSpotLight){let F=e.get(I);F.position.setFromMatrixPosition(I.matrixWorld),F.color.copy(j).multiplyScalar(G),F.distance=Z,F.coneCos=Math.cos(I.angle),F.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),F.decay=I.decay,i.spot[y]=F;let k=I.shadow;if(I.map&&(i.spotLightMap[A]=I.map,A++,k.updateMatrices(I),I.castShadow&&D++),i.spotLightMatrix[y]=k.matrix,I.castShadow){let P=t.get(I);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,i.spotShadow[y]=P,i.spotShadowMap[y]=K,S++}y++}else if(I.isRectAreaLight){let F=e.get(I);F.color.copy(j).multiplyScalar(G),F.halfWidth.set(I.width*.5,0,0),F.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=F,m++}else if(I.isPointLight){let F=e.get(I);if(F.color.copy(I.color).multiplyScalar(I.intensity),F.distance=I.distance,F.decay=I.decay,I.castShadow){let k=I.shadow,P=t.get(I);P.shadowIntensity=k.intensity,P.shadowBias=k.bias,P.shadowNormalBias=k.normalBias,P.shadowRadius=k.radius,P.shadowMapSize=k.mapSize,P.shadowCameraNear=k.camera.near,P.shadowCameraFar=k.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=I.shadow.matrix,w++}i.point[g]=F,g++}else if(I.isHemisphereLight){let F=e.get(I);F.skyColor.copy(I.color).multiplyScalar(G),F.groundColor.copy(I.groundColor).multiplyScalar(G),i.hemi[p]=F,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;let O=i.hash;(O.directionalLength!==h||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==m||O.hemiLength!==p||O.numDirectionalShadows!==b||O.numPointShadows!==w||O.numSpotShadows!==S||O.numSpotMaps!==A||O.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=S+A-D,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=T,O.directionalLength=h,O.pointLength=g,O.spotLength=y,O.rectAreaLength=m,O.hemiLength=p,O.numDirectionalShadows=b,O.numPointShadows=w,O.numSpotShadows=S,O.numSpotMaps=A,O.numLightProbes=T,i.version=RO++)}function l(c,u){let d=0,f=0,h=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let w=c[p];if(w.isDirectionalLight){let S=i.directional[d];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),d++}else if(w.isSpotLight){let S=i.spot[h];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(w.isRectAreaLight){let S=i.rectArea[g];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(w.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let S=i.point[f];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){let S=i.hemi[y];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function SE(n){let e=new PO(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function o(u){i.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function OO(n){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new SE(n),e.set(r,[a])):s>=o.length?(a=new SE(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var LO=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FO=`uniform sampler2D shadow_pass;
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
}`;function kO(n,e,t){let i=new Io,r=new ft,s=new ft,o=new Ct,a=new Fu({depthPacking:US}),l=new ku,c={},u=t.maxTextureSize,d={[ji]:sn,[sn]:ji,[fn]:fn},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:LO,fragmentShader:FO}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let g=new Mr;g.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Nt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Am;let p=this.type;this.render=function(D,T,O){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||D.length===0)return;let E=n.getRenderTarget(),x=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),j=n.state;j.setBlending(qi),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);let G=p!==Si&&this.type===Si,Z=p===Si&&this.type!==Si;for(let K=0,F=D.length;K<F;K++){let k=D[K],P=k.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);let Y=P.getFrameExtents();if(r.multiply(Y),s.copy(P.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,P.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,P.mapSize.y=s.y)),P.map===null||G===!0||Z===!0){let he=this.type!==Si?{minFilter:Fn,magFilter:Fn}:{};P.map!==null&&P.map.dispose(),P.map=new vi(r.x,r.y,he),P.map.texture.name=k.name+".shadowMap",P.camera.updateProjectionMatrix()}n.setRenderTarget(P.map),n.clear();let ne=P.getViewportCount();for(let he=0;he<ne;he++){let De=P.getViewport(he);o.set(s.x*De.x,s.y*De.y,s.x*De.z,s.y*De.w),j.viewport(o),P.updateMatrices(k,he),i=P.getFrustum(),S(T,O,P.camera,k,this.type)}P.isPointLightShadow!==!0&&this.type===Si&&b(P,O),P.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(E,x,I)};function b(D,T){let O=e.update(y);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,h.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new vi(r.x,r.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,n.setRenderTarget(D.mapPass),n.clear(),n.renderBufferDirect(T,null,O,f,y,null),h.uniforms.shadow_pass.value=D.mapPass.texture,h.uniforms.resolution.value=D.mapSize,h.uniforms.radius.value=D.radius,n.setRenderTarget(D.map),n.clear(),n.renderBufferDirect(T,null,O,h,y,null)}function w(D,T,O,E){let x=null,I=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(I!==void 0)x=I;else if(x=O.isPointLight===!0?l:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let j=x.uuid,G=T.uuid,Z=c[j];Z===void 0&&(Z={},c[j]=Z);let K=Z[G];K===void 0&&(K=x.clone(),Z[G]=K,T.addEventListener("dispose",A)),x=K}if(x.visible=T.visible,x.wireframe=T.wireframe,E===Si?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,O.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let j=n.properties.get(x);j.light=O}return x}function S(D,T,O,E,x){if(D.visible===!1)return;if(D.layers.test(T.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&x===Si)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);let G=e.update(D),Z=D.material;if(Array.isArray(Z)){let K=G.groups;for(let F=0,k=K.length;F<k;F++){let P=K[F],Y=Z[P.materialIndex];if(Y&&Y.visible){let ne=w(D,Y,E,x);D.onBeforeShadow(n,D,T,O,G,ne,P),n.renderBufferDirect(O,null,G,ne,D,P),D.onAfterShadow(n,D,T,O,G,ne,P)}}}else if(Z.visible){let K=w(D,Z,E,x);D.onBeforeShadow(n,D,T,O,G,K,null),n.renderBufferDirect(O,null,G,K,D,null),D.onAfterShadow(n,D,T,O,G,K,null)}}let j=D.children;for(let G=0,Z=j.length;G<Z;G++)S(j[G],T,O,E,x)}function A(D){D.target.removeEventListener("dispose",A);for(let O in c){let E=c[O],x=D.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}var UO={[qu]:Xu,[Yu]:Qu,[Zu]:Ju,[ss]:Ku,[Xu]:qu,[Qu]:Yu,[Ju]:Zu,[Ku]:ss};function BO(n,e){function t(){let R=!1,oe=new Ct,W=null,X=new Ct(0,0,0,0);return{setMask:function(de){W!==de&&!R&&(n.colorMask(de,de,de,de),W=de)},setLocked:function(de){R=de},setClear:function(de,ue,We,Dt,Xt){Xt===!0&&(de*=Dt,ue*=Dt,We*=Dt),oe.set(de,ue,We,Dt),X.equals(oe)===!1&&(n.clearColor(de,ue,We,Dt),X.copy(oe))},reset:function(){R=!1,W=null,X.set(-1,0,0,0)}}}function i(){let R=!1,oe=!1,W=null,X=null,de=null;return{setReversed:function(ue){if(oe!==ue){let We=e.get("EXT_clip_control");oe?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT);let Dt=de;de=null,this.setClear(Dt)}oe=ue},getReversed:function(){return oe},setTest:function(ue){ue?ee(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(ue){W!==ue&&!R&&(n.depthMask(ue),W=ue)},setFunc:function(ue){if(oe&&(ue=UO[ue]),X!==ue){switch(ue){case qu:n.depthFunc(n.NEVER);break;case Xu:n.depthFunc(n.ALWAYS);break;case Yu:n.depthFunc(n.LESS);break;case ss:n.depthFunc(n.LEQUAL);break;case Zu:n.depthFunc(n.EQUAL);break;case Ku:n.depthFunc(n.GEQUAL);break;case Qu:n.depthFunc(n.GREATER);break;case Ju:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ue}},setLocked:function(ue){R=ue},setClear:function(ue){de!==ue&&(oe&&(ue=1-ue),n.clearDepth(ue),de=ue)},reset:function(){R=!1,W=null,X=null,de=null,oe=!1}}}function r(){let R=!1,oe=null,W=null,X=null,de=null,ue=null,We=null,Dt=null,Xt=null;return{setTest:function(gt){R||(gt?ee(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(gt){oe!==gt&&!R&&(n.stencilMask(gt),oe=gt)},setFunc:function(gt,Vn,Ci){(W!==gt||X!==Vn||de!==Ci)&&(n.stencilFunc(gt,Vn,Ci),W=gt,X=Vn,de=Ci)},setOp:function(gt,Vn,Ci){(ue!==gt||We!==Vn||Dt!==Ci)&&(n.stencilOp(gt,Vn,Ci),ue=gt,We=Vn,Dt=Ci)},setLocked:function(gt){R=gt},setClear:function(gt){Xt!==gt&&(n.clearStencil(gt),Xt=gt)},reset:function(){R=!1,oe=null,W=null,X=null,de=null,ue=null,We=null,Dt=null,Xt=null}}}let s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,b=null,w=null,S=null,A=null,D=null,T=new Ye(0,0,0),O=0,E=!1,x=null,I=null,j=null,G=null,Z=null,K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,k=0,P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(P)[1]),F=k>=1):P.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),F=k>=2);let Y=null,ne={},he=n.getParameter(n.SCISSOR_BOX),De=n.getParameter(n.VIEWPORT),Ze=new Ct().fromArray(he),H=new Ct().fromArray(De);function ie(R,oe,W,X){let de=new Uint8Array(4),ue=n.createTexture();n.bindTexture(R,ue),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let We=0;We<W;We++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(oe,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(oe+We,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ue}let xe={};xe[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),xe[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),xe[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(n.DEPTH_TEST),o.setFunc(ss),Je(!1),et(Dm),ee(n.CULL_FACE),C(qi);function ee(R){u[R]!==!0&&(n.enable(R),u[R]=!0)}function Ee(R){u[R]!==!1&&(n.disable(R),u[R]=!1)}function Le(R,oe){return d[R]!==oe?(n.bindFramebuffer(R,oe),d[R]=oe,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=oe),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=oe),!0):!1}function Ae(R,oe){let W=h,X=!1;if(R){W=f.get(oe),W===void 0&&(W=[],f.set(oe,W));let de=R.textures;if(W.length!==de.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ue=0,We=de.length;ue<We;ue++)W[ue]=n.COLOR_ATTACHMENT0+ue;W.length=de.length,X=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,X=!0);X&&n.drawBuffers(W)}function St(R){return g!==R?(n.useProgram(R),g=R,!0):!1}let bt={[xr]:n.FUNC_ADD,[uS]:n.FUNC_SUBTRACT,[dS]:n.FUNC_REVERSE_SUBTRACT};bt[fS]=n.MIN,bt[hS]=n.MAX;let Qe={[pS]:n.ZERO,[mS]:n.ONE,[gS]:n.SRC_COLOR,[bu]:n.SRC_ALPHA,[ES]:n.SRC_ALPHA_SATURATE,[xS]:n.DST_COLOR,[vS]:n.DST_ALPHA,[yS]:n.ONE_MINUS_SRC_COLOR,[Tu]:n.ONE_MINUS_SRC_ALPHA,[SS]:n.ONE_MINUS_DST_COLOR,[_S]:n.ONE_MINUS_DST_ALPHA,[MS]:n.CONSTANT_COLOR,[wS]:n.ONE_MINUS_CONSTANT_COLOR,[bS]:n.CONSTANT_ALPHA,[TS]:n.ONE_MINUS_CONSTANT_ALPHA};function C(R,oe,W,X,de,ue,We,Dt,Xt,gt){if(R===qi){y===!0&&(Ee(n.BLEND),y=!1);return}if(y===!1&&(ee(n.BLEND),y=!0),R!==cS){if(R!==m||gt!==E){if((p!==xr||S!==xr)&&(n.blendEquation(n.FUNC_ADD),p=xr,S=xr),gt)switch(R){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Im:n.blendFunc(n.ONE,n.ONE);break;case Rm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Im:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Rm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Nm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}b=null,w=null,A=null,D=null,T.set(0,0,0),O=0,m=R,E=gt}return}de=de||oe,ue=ue||W,We=We||X,(oe!==p||de!==S)&&(n.blendEquationSeparate(bt[oe],bt[de]),p=oe,S=de),(W!==b||X!==w||ue!==A||We!==D)&&(n.blendFuncSeparate(Qe[W],Qe[X],Qe[ue],Qe[We]),b=W,w=X,A=ue,D=We),(Dt.equals(T)===!1||Xt!==O)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Xt),T.copy(Dt),O=Xt),m=R,E=!1}function Tn(R,oe){R.side===fn?Ee(n.CULL_FACE):ee(n.CULL_FACE);let W=R.side===sn;oe&&(W=!W),Je(W),R.blending===rs&&R.transparent===!1?C(qi):C(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),o.setFunc(R.depthFunc),o.setTest(R.depthTest),o.setMask(R.depthWrite),s.setMask(R.colorWrite);let X=R.stencilWrite;a.setTest(X),X&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Et(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ee(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(R){x!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),x=R)}function et(R){R!==oS?(ee(n.CULL_FACE),R!==I&&(R===Dm?n.cullFace(n.BACK):R===aS?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),I=R}function Te(R){R!==j&&(F&&n.lineWidth(R),j=R)}function Et(R,oe,W){R?(ee(n.POLYGON_OFFSET_FILL),(G!==oe||Z!==W)&&(n.polygonOffset(oe,W),G=oe,Z=W)):Ee(n.POLYGON_OFFSET_FILL)}function we(R){R?ee(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function M(R){R===void 0&&(R=n.TEXTURE0+K-1),Y!==R&&(n.activeTexture(R),Y=R)}function v(R,oe,W){W===void 0&&(Y===null?W=n.TEXTURE0+K-1:W=Y);let X=ne[W];X===void 0&&(X={type:void 0,texture:void 0},ne[W]=X),(X.type!==R||X.texture!==oe)&&(Y!==W&&(n.activeTexture(W),Y=W),n.bindTexture(R,oe||xe[R]),X.type=R,X.texture=oe)}function B(){let R=ne[Y];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function pe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function st(){try{n.texStorage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Pe(R){Ze.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Ze.copy(R))}function ve(R){H.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),H.copy(R))}function tt(R,oe){let W=c.get(oe);W===void 0&&(W=new WeakMap,c.set(oe,W));let X=W.get(R);X===void 0&&(X=n.getUniformBlockIndex(oe,R.name),W.set(R,X))}function $e(R,oe){let X=c.get(oe).get(R);l.get(oe)!==X&&(n.uniformBlockBinding(oe,X,R.__bindingPointIndex),l.set(oe,X))}function xt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},Y=null,ne={},d={},f=new WeakMap,h=[],g=null,y=!1,m=null,p=null,b=null,w=null,S=null,A=null,D=null,T=new Ye(0,0,0),O=0,E=!1,x=null,I=null,j=null,G=null,Z=null,Ze.set(0,0,n.canvas.width,n.canvas.height),H.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:Ee,bindFramebuffer:Le,drawBuffers:Ae,useProgram:St,setBlending:C,setMaterial:Tn,setFlipSided:Je,setCullFace:et,setLineWidth:Te,setPolygonOffset:Et,setScissorTest:we,activeTexture:M,bindTexture:v,unbindTexture:B,compressedTexImage2D:q,compressedTexImage3D:Q,texImage2D:ye,texImage3D:Ne,updateUBOMapping:tt,uniformBlockBinding:$e,texStorage2D:st,texStorage3D:te,texSubImage2D:$,texSubImage3D:Me,compressedTexSubImage2D:ce,compressedTexSubImage3D:pe,scissor:Pe,viewport:ve,reset:xt}}function VO(n,e,t,i,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,u=new WeakMap,d,f=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return h?new OffscreenCanvas(M,v):Ga("canvas")}function y(M,v,B){let q=1,Q=we(M);if((Q.width>B||Q.height>B)&&(q=B/Math.max(Q.width,Q.height)),q<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){let $=Math.floor(q*Q.width),Me=Math.floor(q*Q.height);d===void 0&&(d=g($,Me));let ce=v?g($,Me):d;return ce.width=$,ce.height=Me,ce.getContext("2d").drawImage(M,0,0,$,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+Me+")."),ce}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){n.generateMipmap(M)}function b(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(M,v,B,q,Q=!1){if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $=v;if(v===n.RED&&(B===n.FLOAT&&($=n.R32F),B===n.HALF_FLOAT&&($=n.R16F),B===n.UNSIGNED_BYTE&&($=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.R8UI),B===n.UNSIGNED_SHORT&&($=n.R16UI),B===n.UNSIGNED_INT&&($=n.R32UI),B===n.BYTE&&($=n.R8I),B===n.SHORT&&($=n.R16I),B===n.INT&&($=n.R32I)),v===n.RG&&(B===n.FLOAT&&($=n.RG32F),B===n.HALF_FLOAT&&($=n.RG16F),B===n.UNSIGNED_BYTE&&($=n.RG8)),v===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RG8UI),B===n.UNSIGNED_SHORT&&($=n.RG16UI),B===n.UNSIGNED_INT&&($=n.RG32UI),B===n.BYTE&&($=n.RG8I),B===n.SHORT&&($=n.RG16I),B===n.INT&&($=n.RG32I)),v===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGB8UI),B===n.UNSIGNED_SHORT&&($=n.RGB16UI),B===n.UNSIGNED_INT&&($=n.RGB32UI),B===n.BYTE&&($=n.RGB8I),B===n.SHORT&&($=n.RGB16I),B===n.INT&&($=n.RGB32I)),v===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&($=n.RGBA8UI),B===n.UNSIGNED_SHORT&&($=n.RGBA16UI),B===n.UNSIGNED_INT&&($=n.RGBA32UI),B===n.BYTE&&($=n.RGBA8I),B===n.SHORT&&($=n.RGBA16I),B===n.INT&&($=n.RGBA32I)),v===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),v===n.RGBA){let Me=Q?za:lt.getTransfer(q);B===n.FLOAT&&($=n.RGBA32F),B===n.HALF_FLOAT&&($=n.RGBA16F),B===n.UNSIGNED_BYTE&&($=Me===yt?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function S(M,v){let B;return M?v===null||v===Cr||v===fs?B=n.DEPTH24_STENCIL8:v===Mi?B=n.DEPTH32F_STENCIL8:v===No&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Cr||v===fs?B=n.DEPTH_COMPONENT24:v===Mi?B=n.DEPTH_COMPONENT32F:v===No&&(B=n.DEPTH_COMPONENT16),B}function A(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Fn&&M.minFilter!==ti?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function D(M){let v=M.target;v.removeEventListener("dispose",D),O(v),v.isVideoTexture&&u.delete(v)}function T(M){let v=M.target;v.removeEventListener("dispose",T),x(v)}function O(M){let v=i.get(M);if(v.__webglInit===void 0)return;let B=M.source,q=f.get(B);if(q){let Q=q[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&E(M),Object.keys(q).length===0&&f.delete(B)}i.remove(M)}function E(M){let v=i.get(M);n.deleteTexture(v.__webglTexture);let B=M.source,q=f.get(B);delete q[v.__cacheKey],o.memory.textures--}function x(M){let v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let Q=0;Q<v.__webglFramebuffer[q].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[q][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)n.deleteFramebuffer(v.__webglFramebuffer[q]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=M.textures;for(let q=0,Q=B.length;q<Q;q++){let $=i.get(B[q]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(B[q])}i.remove(M)}let I=0;function j(){I=0}function G(){let M=I;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),I+=1,M}function Z(M){let v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function K(M,v){let B=i.get(M);if(M.isVideoTexture&&Te(M),M.isRenderTargetTexture===!1&&M.version>0&&B.__version!==M.version){let q=M.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(B,M,v);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function F(M,v){let B=i.get(M);if(M.version>0&&B.__version!==M.version){H(B,M,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function k(M,v){let B=i.get(M);if(M.version>0&&B.__version!==M.version){H(B,M,v);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function P(M,v){let B=i.get(M);if(M.version>0&&B.__version!==M.version){ie(B,M,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let Y={[Cu]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[Du]:n.MIRRORED_REPEAT},ne={[Fn]:n.NEAREST,[FS]:n.NEAREST_MIPMAP_NEAREST,[sl]:n.NEAREST_MIPMAP_LINEAR,[ti]:n.LINEAR,[id]:n.LINEAR_MIPMAP_NEAREST,[Tr]:n.LINEAR_MIPMAP_LINEAR},he={[VS]:n.NEVER,[$S]:n.ALWAYS,[zS]:n.LESS,[Wm]:n.LEQUAL,[HS]:n.EQUAL,[jS]:n.GEQUAL,[GS]:n.GREATER,[WS]:n.NOTEQUAL};function De(M,v){if(v.type===Mi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ti||v.magFilter===id||v.magFilter===sl||v.magFilter===Tr||v.minFilter===ti||v.minFilter===id||v.minFilter===sl||v.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,Y[v.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,Y[v.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,Y[v.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,ne[v.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,he[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Fn||v.minFilter!==sl&&v.minFilter!==Tr||v.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ze(M,v){let B=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",D));let q=v.source,Q=f.get(q);Q===void 0&&(Q={},f.set(q,Q));let $=Z(v);if($!==M.__cacheKey){Q[$]===void 0&&(Q[$]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),Q[$].usedTimes++;let Me=Q[M.__cacheKey];Me!==void 0&&(Q[M.__cacheKey].usedTimes--,Me.usedTimes===0&&E(v)),M.__cacheKey=$,M.__webglTexture=Q[$].texture}return B}function H(M,v,B){let q=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=n.TEXTURE_3D);let Q=Ze(M,v),$=v.source;t.bindTexture(q,M.__webglTexture,n.TEXTURE0+B);let Me=i.get($);if($.version!==Me.__version||Q===!0){t.activeTexture(n.TEXTURE0+B);let ce=lt.getPrimaries(lt.workingColorSpace),pe=v.colorSpace===Yi?null:lt.getPrimaries(v.colorSpace),st=v.colorSpace===Yi||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let te=y(v.image,!1,r.maxTextureSize);te=Et(v,te);let ye=s.convert(v.format,v.colorSpace),Ne=s.convert(v.type),Pe=w(v.internalFormat,ye,Ne,v.colorSpace,v.isVideoTexture);De(q,v);let ve,tt=v.mipmaps,$e=v.isVideoTexture!==!0,xt=Me.__version===void 0||Q===!0,R=$.dataReady,oe=A(v,te);if(v.isDepthTexture)Pe=S(v.format===os,v.type),xt&&($e?t.texStorage2D(n.TEXTURE_2D,1,Pe,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,Pe,te.width,te.height,0,ye,Ne,null));else if(v.isDataTexture)if(tt.length>0){$e&&xt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,tt[0].width,tt[0].height);for(let W=0,X=tt.length;W<X;W++)ve=tt[W],$e?R&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ve.width,ve.height,ye,Ne,ve.data):t.texImage2D(n.TEXTURE_2D,W,Pe,ve.width,ve.height,0,ye,Ne,ve.data);v.generateMipmaps=!1}else $e?(xt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,te.width,te.height),R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ye,Ne,te.data)):t.texImage2D(n.TEXTURE_2D,0,Pe,te.width,te.height,0,ye,Ne,te.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$e&&xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,tt[0].width,tt[0].height,te.depth);for(let W=0,X=tt.length;W<X;W++)if(ve=tt[W],v.format!==Un)if(ye!==null)if($e){if(R)if(v.layerUpdates.size>0){let de=Qm(ve.width,ve.height,v.format,v.type);for(let ue of v.layerUpdates){let We=ve.data.subarray(ue*de/ve.data.BYTES_PER_ELEMENT,(ue+1)*de/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,ue,ve.width,ve.height,1,ye,We)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,te.depth,ye,ve.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,W,Pe,ve.width,ve.height,te.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,W,0,0,0,ve.width,ve.height,te.depth,ye,Ne,ve.data):t.texImage3D(n.TEXTURE_2D_ARRAY,W,Pe,ve.width,ve.height,te.depth,0,ye,Ne,ve.data)}else{$e&&xt&&t.texStorage2D(n.TEXTURE_2D,oe,Pe,tt[0].width,tt[0].height);for(let W=0,X=tt.length;W<X;W++)ve=tt[W],v.format!==Un?ye!==null?$e?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,W,0,0,ve.width,ve.height,ye,ve.data):t.compressedTexImage2D(n.TEXTURE_2D,W,Pe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?R&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ve.width,ve.height,ye,Ne,ve.data):t.texImage2D(n.TEXTURE_2D,W,Pe,ve.width,ve.height,0,ye,Ne,ve.data)}else if(v.isDataArrayTexture)if($e){if(xt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,oe,Pe,te.width,te.height,te.depth),R)if(v.layerUpdates.size>0){let W=Qm(te.width,te.height,v.format,v.type);for(let X of v.layerUpdates){let de=te.data.subarray(X*W/te.data.BYTES_PER_ELEMENT,(X+1)*W/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,te.width,te.height,1,ye,Ne,de)}v.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ye,Ne,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Pe,te.width,te.height,te.depth,0,ye,Ne,te.data);else if(v.isData3DTexture)$e?(xt&&t.texStorage3D(n.TEXTURE_3D,oe,Pe,te.width,te.height,te.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ye,Ne,te.data)):t.texImage3D(n.TEXTURE_3D,0,Pe,te.width,te.height,te.depth,0,ye,Ne,te.data);else if(v.isFramebufferTexture){if(xt)if($e)t.texStorage2D(n.TEXTURE_2D,oe,Pe,te.width,te.height);else{let W=te.width,X=te.height;for(let de=0;de<oe;de++)t.texImage2D(n.TEXTURE_2D,de,Pe,W,X,0,ye,Ne,null),W>>=1,X>>=1}}else if(tt.length>0){if($e&&xt){let W=we(tt[0]);t.texStorage2D(n.TEXTURE_2D,oe,Pe,W.width,W.height)}for(let W=0,X=tt.length;W<X;W++)ve=tt[W],$e?R&&t.texSubImage2D(n.TEXTURE_2D,W,0,0,ye,Ne,ve):t.texImage2D(n.TEXTURE_2D,W,Pe,ye,Ne,ve);v.generateMipmaps=!1}else if($e){if(xt){let W=we(te);t.texStorage2D(n.TEXTURE_2D,oe,Pe,W.width,W.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ne,te)}else t.texImage2D(n.TEXTURE_2D,0,Pe,ye,Ne,te);m(v)&&p(q),Me.__version=$.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function ie(M,v,B){if(v.image.length!==6)return;let q=Ze(M,v),Q=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+B);let $=i.get(Q);if(Q.version!==$.__version||q===!0){t.activeTexture(n.TEXTURE0+B);let Me=lt.getPrimaries(lt.workingColorSpace),ce=v.colorSpace===Yi?null:lt.getPrimaries(v.colorSpace),pe=v.colorSpace===Yi||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);let st=v.isCompressedTexture||v.image[0].isCompressedTexture,te=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let X=0;X<6;X++)!st&&!te?ye[X]=y(v.image[X],!0,r.maxCubemapSize):ye[X]=te?v.image[X].image:v.image[X],ye[X]=Et(v,ye[X]);let Ne=ye[0],Pe=s.convert(v.format,v.colorSpace),ve=s.convert(v.type),tt=w(v.internalFormat,Pe,ve,v.colorSpace),$e=v.isVideoTexture!==!0,xt=$.__version===void 0||q===!0,R=Q.dataReady,oe=A(v,Ne);De(n.TEXTURE_CUBE_MAP,v);let W;if(st){$e&&xt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,tt,Ne.width,Ne.height);for(let X=0;X<6;X++){W=ye[X].mipmaps;for(let de=0;de<W.length;de++){let ue=W[de];v.format!==Un?Pe!==null?$e?R&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,0,0,ue.width,ue.height,Pe,ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,tt,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,0,0,ue.width,ue.height,Pe,ve,ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de,tt,ue.width,ue.height,0,Pe,ve,ue.data)}}}else{if(W=v.mipmaps,$e&&xt){W.length>0&&oe++;let X=we(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,oe,tt,X.width,X.height)}for(let X=0;X<6;X++)if(te){$e?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ye[X].width,ye[X].height,Pe,ve,ye[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,tt,ye[X].width,ye[X].height,0,Pe,ve,ye[X].data);for(let de=0;de<W.length;de++){let We=W[de].image[X].image;$e?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,0,0,We.width,We.height,Pe,ve,We.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,tt,We.width,We.height,0,Pe,ve,We.data)}}else{$e?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Pe,ve,ye[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,tt,Pe,ve,ye[X]);for(let de=0;de<W.length;de++){let ue=W[de];$e?R&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,0,0,Pe,ve,ue.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,de+1,tt,Pe,ve,ue.image[X])}}}m(v)&&p(n.TEXTURE_CUBE_MAP),$.__version=Q.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function xe(M,v,B,q,Q,$){let Me=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),pe=w(B.internalFormat,Me,ce,B.colorSpace),st=i.get(v),te=i.get(B);if(te.__renderTarget=v,!st.__hasExternalTextures){let ye=Math.max(1,v.width>>$),Ne=Math.max(1,v.height>>$);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?t.texImage3D(Q,$,pe,ye,Ne,v.depth,0,Me,ce,null):t.texImage2D(Q,$,pe,ye,Ne,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),et(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,Q,te.__webglTexture,0,Je(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,Q,te.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(M,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,M),v.depthBuffer){let q=v.depthTexture,Q=q&&q.isDepthTexture?q.type:null,$=S(v.stencilBuffer,Q),Me=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=Je(v);et(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,$,v.width,v.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,$,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,$,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,M)}else{let q=v.textures;for(let Q=0;Q<q.length;Q++){let $=q[Q],Me=s.convert($.format,$.colorSpace),ce=s.convert($.type),pe=w($.internalFormat,Me,ce,$.colorSpace),st=Je(v);B&&et(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,st,pe,v.width,v.height):et(v)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,st,pe,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,pe,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=i.get(v.depthTexture);q.__renderTarget=v,(!q.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);let Q=q.__webglTexture,$=Je(v);if(v.depthTexture.format===is)et(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===os)et(v)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Le(M){let v=i.get(M),B=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){let q=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener("dispose",Q)};q.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=q}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Ee(v.__webglFramebuffer,M)}else if(B){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=n.createRenderbuffer(),ee(v.__webglDepthbuffer[q],M,!1);else{let Q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),ee(v.__webglDepthbuffer,M,!1);else{let q=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,q,n.RENDERBUFFER,Q)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ae(M,v,B){let q=i.get(M);v!==void 0&&xe(q.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&Le(M)}function St(M){let v=M.texture,B=i.get(M),q=i.get(v);M.addEventListener("dispose",T);let Q=M.textures,$=M.isWebGLCubeRenderTarget===!0,Me=Q.length>1;if(Me||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=v.version,o.memory.textures++),$){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let pe=0;pe<v.mipmaps.length;pe++)B.__webglFramebuffer[ce][pe]=n.createFramebuffer()}else B.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<v.mipmaps.length;ce++)B.__webglFramebuffer[ce]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,pe=Q.length;ce<pe;ce++){let st=i.get(Q[ce]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),o.memory.textures++)}if(M.samples>0&&et(M)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<Q.length;ce++){let pe=Q[ce];B.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);let st=s.convert(pe.format,pe.colorSpace),te=s.convert(pe.type),ye=w(pe.internalFormat,st,te,pe.colorSpace,M.isXRRenderTarget===!0),Ne=Je(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ye,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(B.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),De(n.TEXTURE_CUBE_MAP,v);for(let ce=0;ce<6;ce++)if(v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)xe(B.__webglFramebuffer[ce][pe],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else xe(B.__webglFramebuffer[ce],M,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(v)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,pe=Q.length;ce<pe;ce++){let st=Q[ce],te=i.get(st);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),De(n.TEXTURE_2D,st),xe(B.__webglFramebuffer,M,st,n.COLOR_ATTACHMENT0+ce,n.TEXTURE_2D,0),m(st)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,q.__webglTexture),De(ce,v),v.mipmaps&&v.mipmaps.length>0)for(let pe=0;pe<v.mipmaps.length;pe++)xe(B.__webglFramebuffer[pe],M,v,n.COLOR_ATTACHMENT0,ce,pe);else xe(B.__webglFramebuffer,M,v,n.COLOR_ATTACHMENT0,ce,0);m(v)&&p(ce),t.unbindTexture()}M.depthBuffer&&Le(M)}function bt(M){let v=M.textures;for(let B=0,q=v.length;B<q;B++){let Q=v[B];if(m(Q)){let $=b(M),Me=i.get(Q).__webglTexture;t.bindTexture($,Me),p($),t.unbindTexture()}}}let Qe=[],C=[];function Tn(M){if(M.samples>0){if(et(M)===!1){let v=M.textures,B=M.width,q=M.height,Q=n.COLOR_BUFFER_BIT,$=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(M),ce=v.length>1;if(ce)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);let st=i.get(v[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,st,0)}n.blitFramebuffer(0,0,B,q,0,0,B,q,Q,n.NEAREST),l===!0&&(Qe.length=0,C.length=0,Qe.push(n.COLOR_ATTACHMENT0+pe),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Qe.push($),C.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,C)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,Me.__webglColorRenderbuffer[pe]);let st=i.get(v[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,st,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){let v=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function Je(M){return Math.min(r.maxSamples,M.samples)}function et(M){let v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Te(M){let v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function Et(M,v){let B=M.colorSpace,q=M.format,Q=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||B!==as&&B!==Yi&&(lt.getTransfer(B)===yt?(q!==Un||Q!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function we(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=j,this.setTexture2D=K,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=P,this.rebindTextures=Ae,this.setupRenderTarget=St,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=Tn,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=et}function zO(n,e){function t(i,r=Yi){let s,o=lt.getTransfer(r);if(i===Ei)return n.UNSIGNED_BYTE;if(i===sd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===od)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lm)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pm)return n.BYTE;if(i===Om)return n.SHORT;if(i===No)return n.UNSIGNED_SHORT;if(i===rd)return n.INT;if(i===Cr)return n.UNSIGNED_INT;if(i===Mi)return n.FLOAT;if(i===Po)return n.HALF_FLOAT;if(i===Fm)return n.ALPHA;if(i===km)return n.RGB;if(i===Un)return n.RGBA;if(i===Um)return n.LUMINANCE;if(i===Bm)return n.LUMINANCE_ALPHA;if(i===is)return n.DEPTH_COMPONENT;if(i===os)return n.DEPTH_STENCIL;if(i===Vm)return n.RED;if(i===ad)return n.RED_INTEGER;if(i===zm)return n.RG;if(i===ld)return n.RG_INTEGER;if(i===cd)return n.RGBA_INTEGER;if(i===ol||i===al||i===ll||i===cl)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ol)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ol)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ud||i===dd||i===fd||i===hd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===pd||i===md||i===gd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===pd||i===md)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===gd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yd||i===vd||i===_d||i===xd||i===Sd||i===Ed||i===Md||i===wd||i===bd||i===Td||i===Cd||i===Dd||i===Ad||i===Id)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===_d)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ed)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Md)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===bd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Td)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Cd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dd)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ad)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Id)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ul||i===Rd||i===Nd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ul)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hm||i===Pd||i===Od||i===Ld)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ul)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Od)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ld)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var HO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GO=`
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

}`,dg=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Dr,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new ni({vertexShader:HO,fragmentShader:GO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Nt(new Mn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fg=class extends $i{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null,y=new dg,m=t.getContextAttributes(),p=null,b=null,w=[],S=[],A=new ft,D=null,T=new Wt;T.viewport=new Ct;let O=new Wt;O.viewport=new Ct;let E=[T,O],x=new ju,I=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ie=w[H];return ie===void 0&&(ie=new Ao,w[H]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(H){let ie=w[H];return ie===void 0&&(ie=new Ao,w[H]=ie),ie.getGripSpace()},this.getHand=function(H){let ie=w[H];return ie===void 0&&(ie=new Ao,w[H]=ie),ie.getHandSpace()};function G(H){let ie=S.indexOf(H.inputSource);if(ie===-1)return;let xe=w[ie];xe!==void 0&&(xe.update(H.inputSource,H.frame,c||o),xe.dispatchEvent({type:H.type,data:H.inputSource}))}function Z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",K);for(let H=0;H<w.length;H++){let ie=S[H];ie!==null&&(S[H]=null,w[H].disconnect(ie))}I=null,j=null,y.reset(),e.setRenderTarget(p),h=null,f=null,d=null,r=null,b=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(H){return bs(this,null,function*(){if(r=H,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&(yield t.makeXRCompatible()),D=e.getPixelRatio(),e.getSize(A),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,ee=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=m.stencil?os:is,ee=m.stencil?fs:Cr);let Le={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Le),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new vi(f.textureWidth,f.textureHeight,{format:Un,type:Ei,depthTexture:new Ja(f.textureWidth,f.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{let xe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new vi(h.framebufferWidth,h.framebufferHeight,{format:Un,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=yield r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(H){for(let ie=0;ie<H.removed.length;ie++){let xe=H.removed[ie],ee=S.indexOf(xe);ee>=0&&(S[ee]=null,w[ee].disconnect(xe))}for(let ie=0;ie<H.added.length;ie++){let xe=H.added[ie],ee=S.indexOf(xe);if(ee===-1){for(let Le=0;Le<w.length;Le++)if(Le>=S.length){S.push(xe),ee=Le;break}else if(S[Le]===null){S[Le]=xe,ee=Le;break}if(ee===-1)break}let Ee=w[ee];Ee&&Ee.connect(xe)}}let F=new U,k=new U;function P(H,ie,xe){F.setFromMatrixPosition(ie.matrixWorld),k.setFromMatrixPosition(xe.matrixWorld);let ee=F.distanceTo(k),Ee=ie.projectionMatrix.elements,Le=xe.projectionMatrix.elements,Ae=Ee[14]/(Ee[10]-1),St=Ee[14]/(Ee[10]+1),bt=(Ee[9]+1)/Ee[5],Qe=(Ee[9]-1)/Ee[5],C=(Ee[8]-1)/Ee[0],Tn=(Le[8]+1)/Le[0],Je=Ae*C,et=Ae*Tn,Te=ee/(-C+Tn),Et=Te*-C;if(ie.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Et),H.translateZ(Te),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ee[10]===-1)H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let we=Ae+Te,M=St+Te,v=Je-Et,B=et+(ee-Et),q=bt*St/M*we,Q=Qe*St/M*we;H.projectionMatrix.makePerspective(v,B,q,Q,we,M),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function Y(H,ie){ie===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ie.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let ie=H.near,xe=H.far;y.texture!==null&&(y.depthNear>0&&(ie=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),x.near=O.near=T.near=ie,x.far=O.far=T.far=xe,(I!==x.near||j!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),I=x.near,j=x.far),T.layers.mask=H.layers.mask|2,O.layers.mask=H.layers.mask|4,x.layers.mask=T.layers.mask|O.layers.mask;let ee=H.parent,Ee=x.cameras;Y(x,ee);for(let Le=0;Le<Ee.length;Le++)Y(Ee[Le],ee);Ee.length===2?P(x,T,O):x.projectionMatrix.copy(T.projectionMatrix),ne(H,x,ee)};function ne(H,ie,xe){xe===null?H.matrix.copy(ie.matrixWorld):(H.matrix.copy(xe.matrixWorld),H.matrix.invert(),H.matrix.multiply(ie.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(ie.projectionMatrix),H.projectionMatrixInverse.copy(ie.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=To*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let he=null;function De(H,ie){if(u=ie.getViewerPose(c||o),g=ie,u!==null){let xe=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ee=!1;xe.length!==x.cameras.length&&(x.cameras.length=0,ee=!0);for(let Ae=0;Ae<xe.length;Ae++){let St=xe[Ae],bt=null;if(h!==null)bt=h.getViewport(St);else{let C=d.getViewSubImage(f,St);bt=C.viewport,Ae===0&&(e.setRenderTargetTextures(b,C.colorTexture,f.ignoreDepthValues?void 0:C.depthStencilTexture),e.setRenderTarget(b))}let Qe=E[Ae];Qe===void 0&&(Qe=new Wt,Qe.layers.enable(Ae),Qe.viewport=new Ct,E[Ae]=Qe),Qe.matrix.fromArray(St.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(St.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(bt.x,bt.y,bt.width,bt.height),Ae===0&&(x.matrix.copy(Qe.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ee===!0&&x.cameras.push(Qe)}let Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){let Ae=d.getDepthInformation(xe[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let xe=0;xe<w.length;xe++){let ee=S[xe],Ee=w[xe];ee!==null&&Ee!==void 0&&Ee.update(ee,ie,c||o)}he&&he(H,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ze=new EE;Ze.setAnimationLoop(De),this.setAnimationLoop=function(H){he=H},this.dispose=function(){}}},gs=new Er,WO=new Rt;function jO(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ym(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,w,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),w=b.envMap,S=b.envMapRotation;w&&(m.envMap.value=w,gs.copy(S),gs.x*=-1,gs.y*=-1,gs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(WO.makeRotationFromEuler(gs)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function $O(n,e,t,i){let r={},s={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){let S=w.program;i.uniformBlockBinding(b,S)}function c(b,w){let S=r[b.id];S===void 0&&(g(b),S=u(b),r[b.id]=S,b.addEventListener("dispose",m));let A=w.program;i.updateUBOMapping(b,A);let D=e.render.frame;s[b.id]!==D&&(f(b),s[b.id]=D)}function u(b){let w=d();b.__bindingPointIndex=w;let S=n.createBuffer(),A=b.__size,D=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,S),S}function d(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let w=r[b.id],S=b.uniforms,A=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let D=0,T=S.length;D<T;D++){let O=Array.isArray(S[D])?S[D]:[S[D]];for(let E=0,x=O.length;E<x;E++){let I=O[E];if(h(I,D,E,A)===!0){let j=I.__offset,G=Array.isArray(I.value)?I.value:[I.value],Z=0;for(let K=0;K<G.length;K++){let F=G[K],k=y(F);typeof F=="number"||typeof F=="boolean"?(I.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,j+Z,I.__data)):F.isMatrix3?(I.__data[0]=F.elements[0],I.__data[1]=F.elements[1],I.__data[2]=F.elements[2],I.__data[3]=0,I.__data[4]=F.elements[3],I.__data[5]=F.elements[4],I.__data[6]=F.elements[5],I.__data[7]=0,I.__data[8]=F.elements[6],I.__data[9]=F.elements[7],I.__data[10]=F.elements[8],I.__data[11]=0):(F.toArray(I.__data,Z),Z+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(b,w,S,A){let D=b.value,T=w+"_"+S;if(A[T]===void 0)return typeof D=="number"||typeof D=="boolean"?A[T]=D:A[T]=D.clone(),!0;{let O=A[T];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return A[T]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function g(b){let w=b.uniforms,S=0,A=16;for(let T=0,O=w.length;T<O;T++){let E=Array.isArray(w[T])?w[T]:[w[T]];for(let x=0,I=E.length;x<I;x++){let j=E[x],G=Array.isArray(j.value)?j.value:[j.value];for(let Z=0,K=G.length;Z<K;Z++){let F=G[Z],k=y(F),P=S%A,Y=P%k.boundary,ne=P+Y;S+=Y,ne!==0&&A-ne<k.storage&&(S+=A-ne),j.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=S,S+=k.storage}}}let D=S%A;return D>0&&(S+=A-D),b.__size=S,b.__cache={},this}function y(b){let w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){let w=b.target;w.removeEventListener("dispose",m);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}var Vd=class{constructor(e={}){let{canvas:t=qS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=Xi,this.toneMappingExposure=1;let S=this,A=!1,D=0,T=0,O=null,E=-1,x=null,I=new Ct,j=new Ct,G=null,Z=new Ye(0),K=0,F=t.width,k=t.height,P=1,Y=null,ne=null,he=new Ct(0,0,F,k),De=new Ct(0,0,F,k),Ze=!1,H=new Io,ie=!1,xe=!1;this.transmissionResolutionScale=1;let ee=new Rt,Ee=new Rt,Le=new U,Ae=new Ct,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},bt=!1;function Qe(){return O===null?P:1}let C=i;function Tn(_,N){return t.getContext(_,N)}try{let _={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$u}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",de,!1),t.addEventListener("webglcontextcreationerror",ue,!1),C===null){let N="webgl2";if(C=Tn(N,_),C===null)throw Tn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Je,et,Te,Et,we,M,v,B,q,Q,$,Me,ce,pe,st,te,ye,Ne,Pe,ve,tt,$e,xt,R;function oe(){Je=new uP(C),Je.init(),$e=new zO(C,Je),et=new rP(C,Je,e,$e),Te=new BO(C,Je),et.reverseDepthBuffer&&f&&Te.buffers.depth.setReversed(!0),Et=new hP(C),we=new TO,M=new VO(C,Je,Te,we,et,$e,Et),v=new oP(S),B=new cP(S),q=new xR(C),xt=new nP(C,q),Q=new dP(C,q,Et,xt),$=new mP(C,Q,q,Et),Pe=new pP(C,et,M),te=new sP(we),Me=new bO(S,v,B,Je,et,xt,te),ce=new jO(S,we),pe=new DO,st=new OO(Je),Ne=new tP(S,v,B,Te,$,h,l),ye=new kO(S,$,et),R=new $O(C,Et,et,Te),ve=new iP(C,Je,Et),tt=new fP(C,Je,Et),Et.programs=Me.programs,S.capabilities=et,S.extensions=Je,S.properties=we,S.renderLists=pe,S.shadowMap=ye,S.state=Te,S.info=Et}oe();let W=new fg(S,C);this.xr=W,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){let _=Je.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Je.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return P},this.setPixelRatio=function(_){_!==void 0&&(P=_,this.setSize(F,k,!1))},this.getSize=function(_){return _.set(F,k)},this.setSize=function(_,N,V=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=_,k=N,t.width=Math.floor(_*P),t.height=Math.floor(N*P),V===!0&&(t.style.width=_+"px",t.style.height=N+"px"),this.setViewport(0,0,_,N)},this.getDrawingBufferSize=function(_){return _.set(F*P,k*P).floor()},this.setDrawingBufferSize=function(_,N,V){F=_,k=N,P=V,t.width=Math.floor(_*V),t.height=Math.floor(N*V),this.setViewport(0,0,_,N)},this.getCurrentViewport=function(_){return _.copy(I)},this.getViewport=function(_){return _.copy(he)},this.setViewport=function(_,N,V,z){_.isVector4?he.set(_.x,_.y,_.z,_.w):he.set(_,N,V,z),Te.viewport(I.copy(he).multiplyScalar(P).round())},this.getScissor=function(_){return _.copy(De)},this.setScissor=function(_,N,V,z){_.isVector4?De.set(_.x,_.y,_.z,_.w):De.set(_,N,V,z),Te.scissor(j.copy(De).multiplyScalar(P).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(_){Te.setScissorTest(Ze=_)},this.setOpaqueSort=function(_){Y=_},this.setTransparentSort=function(_){ne=_},this.getClearColor=function(_){return _.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(_=!0,N=!0,V=!0){let z=0;if(_){let L=!1;if(O!==null){let J=O.texture.format;L=J===cd||J===ld||J===ad}if(L){let J=O.texture.type,ae=J===Ei||J===Cr||J===No||J===fs||J===sd||J===od,fe=Ne.getClearColor(),_e=Ne.getClearAlpha(),Oe=fe.r,Fe=fe.g,Ce=fe.b;ae?(g[0]=Oe,g[1]=Fe,g[2]=Ce,g[3]=_e,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Oe,y[1]=Fe,y[2]=Ce,y[3]=_e,C.clearBufferiv(C.COLOR,0,y))}else z|=C.COLOR_BUFFER_BIT}N&&(z|=C.DEPTH_BUFFER_BIT),V&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",de,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),Ne.dispose(),pe.dispose(),st.dispose(),we.dispose(),v.dispose(),B.dispose(),$.dispose(),xt.dispose(),R.dispose(),Me.dispose(),W.dispose(),W.removeEventListener("sessionstart",Gg),W.removeEventListener("sessionend",Wg),Rr.stop()};function X(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let _=Et.autoReset,N=ye.enabled,V=ye.autoUpdate,z=ye.needsUpdate,L=ye.type;oe(),Et.autoReset=_,ye.enabled=N,ye.autoUpdate=V,ye.needsUpdate=z,ye.type=L}function ue(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function We(_){let N=_.target;N.removeEventListener("dispose",We),Dt(N)}function Dt(_){Xt(_),we.remove(_)}function Xt(_){let N=we.get(_).programs;N!==void 0&&(N.forEach(function(V){Me.releaseProgram(V)}),_.isShaderMaterial&&Me.releaseShaderCache(_))}this.renderBufferDirect=function(_,N,V,z,L,J){N===null&&(N=St);let ae=L.isMesh&&L.matrixWorld.determinant()<0,fe=lM(_,N,V,z,L);Te.setMaterial(z,ae);let _e=V.index,Oe=1;if(z.wireframe===!0){if(_e=Q.getWireframeAttribute(V),_e===void 0)return;Oe=2}let Fe=V.drawRange,Ce=V.attributes.position,ot=Fe.start*Oe,ht=(Fe.start+Fe.count)*Oe;J!==null&&(ot=Math.max(ot,J.start*Oe),ht=Math.min(ht,(J.start+J.count)*Oe)),_e!==null?(ot=Math.max(ot,0),ht=Math.min(ht,_e.count)):Ce!=null&&(ot=Math.max(ot,0),ht=Math.min(ht,Ce.count));let Pt=ht-ot;if(Pt<0||Pt===1/0)return;xt.setup(L,z,fe,V,_e);let At,ct=ve;if(_e!==null&&(At=q.get(_e),ct=tt,ct.setIndex(At)),L.isMesh)z.wireframe===!0?(Te.setLineWidth(z.wireframeLinewidth*Qe()),ct.setMode(C.LINES)):ct.setMode(C.TRIANGLES);else if(L.isLine){let Ie=z.linewidth;Ie===void 0&&(Ie=1),Te.setLineWidth(Ie*Qe()),L.isLineSegments?ct.setMode(C.LINES):L.isLineLoop?ct.setMode(C.LINE_LOOP):ct.setMode(C.LINE_STRIP)}else L.isPoints?ct.setMode(C.POINTS):L.isSprite&&ct.setMode(C.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)ct.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))ct.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{let Ie=L._multiDrawStarts,jt=L._multiDrawCounts,pt=L._multiDrawCount,zn=_e?q.get(_e).bytesPerElement:1,ws=we.get(z).currentProgram.getUniforms();for(let hn=0;hn<pt;hn++)ws.setValue(C,"_gl_DrawID",hn),ct.render(Ie[hn]/zn,jt[hn])}else if(L.isInstancedMesh)ct.renderInstances(ot,Pt,L.count);else if(V.isInstancedBufferGeometry){let Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,jt=Math.min(V.instanceCount,Ie);ct.renderInstances(ot,Pt,jt)}else ct.render(ot,Pt)};function gt(_,N,V){_.transparent===!0&&_.side===fn&&_.forceSinglePass===!1?(_.side=sn,_.needsUpdate=!0,xl(_,N,V),_.side=ji,_.needsUpdate=!0,xl(_,N,V),_.side=fn):xl(_,N,V)}this.compile=function(_,N,V=null){V===null&&(V=_),p=st.get(V),p.init(N),w.push(p),V.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),_!==V&&_.traverseVisible(function(L){L.isLight&&L.layers.test(N.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();let z=new Set;return _.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;let J=L.material;if(J)if(Array.isArray(J))for(let ae=0;ae<J.length;ae++){let fe=J[ae];gt(fe,V,L),z.add(fe)}else gt(J,V,L),z.add(J)}),w.pop(),p=null,z},this.compileAsync=function(_,N,V=null){let z=this.compile(_,N,V);return new Promise(L=>{function J(){if(z.forEach(function(ae){we.get(ae).currentProgram.isReady()&&z.delete(ae)}),z.size===0){L(_);return}setTimeout(J,10)}Je.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let Vn=null;function Ci(_){Vn&&Vn(_)}function Gg(){Rr.stop()}function Wg(){Rr.start()}let Rr=new EE;Rr.setAnimationLoop(Ci),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(_){Vn=_,W.setAnimationLoop(_),_===null?Rr.stop():Rr.start()},W.addEventListener("sessionstart",Gg),W.addEventListener("sessionend",Wg),this.render=function(_,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(N),N=W.getCamera()),_.isScene===!0&&_.onBeforeRender(S,_,N,O),p=st.get(_,w.length),p.init(N),w.push(p),Ee.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),H.setFromProjectionMatrix(Ee),xe=this.localClippingEnabled,ie=te.init(this.clippingPlanes,xe),m=pe.get(_,b.length),m.init(),b.push(m),W.enabled===!0&&W.isPresenting===!0){let J=S.xr.getDepthSensingMesh();J!==null&&lf(J,N,-1/0,S.sortObjects)}lf(_,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(Y,ne),bt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,bt&&Ne.addToRenderList(m,_),this.info.render.frame++,ie===!0&&te.beginShadows();let V=p.state.shadowsArray;ye.render(V,_,N),ie===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let z=m.opaque,L=m.transmissive;if(p.setupLights(),N.isArrayCamera){let J=N.cameras;if(L.length>0)for(let ae=0,fe=J.length;ae<fe;ae++){let _e=J[ae];$g(z,L,_,_e)}bt&&Ne.render(_);for(let ae=0,fe=J.length;ae<fe;ae++){let _e=J[ae];jg(m,_,_e,_e.viewport)}}else L.length>0&&$g(z,L,_,N),bt&&Ne.render(_),jg(m,_,N);O!==null&&T===0&&(M.updateMultisampleRenderTarget(O),M.updateRenderTargetMipmap(O)),_.isScene===!0&&_.onAfterRender(S,_,N),xt.resetDefaultState(),E=-1,x=null,w.pop(),w.length>0?(p=w[w.length-1],ie===!0&&te.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function lf(_,N,V,z){if(_.visible===!1)return;if(_.layers.test(N.layers)){if(_.isGroup)V=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(N);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||H.intersectsSprite(_)){z&&Ae.setFromMatrixPosition(_.matrixWorld).applyMatrix4(Ee);let ae=$.update(_),fe=_.material;fe.visible&&m.push(_,ae,fe,V,Ae.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||H.intersectsObject(_))){let ae=$.update(_),fe=_.material;if(z&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Ae.copy(_.boundingSphere.center)):(ae.boundingSphere===null&&ae.computeBoundingSphere(),Ae.copy(ae.boundingSphere.center)),Ae.applyMatrix4(_.matrixWorld).applyMatrix4(Ee)),Array.isArray(fe)){let _e=ae.groups;for(let Oe=0,Fe=_e.length;Oe<Fe;Oe++){let Ce=_e[Oe],ot=fe[Ce.materialIndex];ot&&ot.visible&&m.push(_,ae,ot,V,Ae.z,Ce)}}else fe.visible&&m.push(_,ae,fe,V,Ae.z,null)}}let J=_.children;for(let ae=0,fe=J.length;ae<fe;ae++)lf(J[ae],N,V,z)}function jg(_,N,V,z){let L=_.opaque,J=_.transmissive,ae=_.transparent;p.setupLightsView(V),ie===!0&&te.setGlobalState(S.clippingPlanes,V),z&&Te.viewport(I.copy(z)),L.length>0&&_l(L,N,V),J.length>0&&_l(J,N,V),ae.length>0&&_l(ae,N,V),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function $g(_,N,V,z){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new vi(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Po:Ei,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let J=p.state.transmissionRenderTarget[z.id],ae=z.viewport||I;J.setSize(ae.z*S.transmissionResolutionScale,ae.w*S.transmissionResolutionScale);let fe=S.getRenderTarget();S.setRenderTarget(J),S.getClearColor(Z),K=S.getClearAlpha(),K<1&&S.setClearColor(16777215,.5),S.clear(),bt&&Ne.render(V);let _e=S.toneMapping;S.toneMapping=Xi;let Oe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),ie===!0&&te.setGlobalState(S.clippingPlanes,z),_l(_,V,z),M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J),Je.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ce=0,ot=N.length;Ce<ot;Ce++){let ht=N[Ce],Pt=ht.object,At=ht.geometry,ct=ht.material,Ie=ht.group;if(ct.side===fn&&Pt.layers.test(z.layers)){let jt=ct.side;ct.side=sn,ct.needsUpdate=!0,qg(Pt,V,z,At,ct,Ie),ct.side=jt,ct.needsUpdate=!0,Fe=!0}}Fe===!0&&(M.updateMultisampleRenderTarget(J),M.updateRenderTargetMipmap(J))}S.setRenderTarget(fe),S.setClearColor(Z,K),Oe!==void 0&&(z.viewport=Oe),S.toneMapping=_e}function _l(_,N,V){let z=N.isScene===!0?N.overrideMaterial:null;for(let L=0,J=_.length;L<J;L++){let ae=_[L],fe=ae.object,_e=ae.geometry,Oe=z===null?ae.material:z,Fe=ae.group;fe.layers.test(V.layers)&&qg(fe,N,V,_e,Oe,Fe)}}function qg(_,N,V,z,L,J){_.onBeforeRender(S,N,V,z,L,J),_.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),L.onBeforeRender(S,N,V,z,_,J),L.transparent===!0&&L.side===fn&&L.forceSinglePass===!1?(L.side=sn,L.needsUpdate=!0,S.renderBufferDirect(V,N,z,L,_,J),L.side=ji,L.needsUpdate=!0,S.renderBufferDirect(V,N,z,L,_,J),L.side=fn):S.renderBufferDirect(V,N,z,L,_,J),_.onAfterRender(S,N,V,z,L,J)}function xl(_,N,V){N.isScene!==!0&&(N=St);let z=we.get(_),L=p.state.lights,J=p.state.shadowsArray,ae=L.state.version,fe=Me.getParameters(_,L.state,J,N,V),_e=Me.getProgramCacheKey(fe),Oe=z.programs;z.environment=_.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(_.isMeshStandardMaterial?B:v).get(_.envMap||z.environment),z.envMapRotation=z.environment!==null&&_.envMap===null?N.environmentRotation:_.envMapRotation,Oe===void 0&&(_.addEventListener("dispose",We),Oe=new Map,z.programs=Oe);let Fe=Oe.get(_e);if(Fe!==void 0){if(z.currentProgram===Fe&&z.lightsStateVersion===ae)return Yg(_,fe),Fe}else fe.uniforms=Me.getUniforms(_),_.onBeforeCompile(fe,S),Fe=Me.acquireProgram(fe,_e),Oe.set(_e,Fe),z.uniforms=fe.uniforms;let Ce=z.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ce.clippingPlanes=te.uniform),Yg(_,fe),z.needsLights=uM(_),z.lightsStateVersion=ae,z.needsLights&&(Ce.ambientLightColor.value=L.state.ambient,Ce.lightProbe.value=L.state.probe,Ce.directionalLights.value=L.state.directional,Ce.directionalLightShadows.value=L.state.directionalShadow,Ce.spotLights.value=L.state.spot,Ce.spotLightShadows.value=L.state.spotShadow,Ce.rectAreaLights.value=L.state.rectArea,Ce.ltc_1.value=L.state.rectAreaLTC1,Ce.ltc_2.value=L.state.rectAreaLTC2,Ce.pointLights.value=L.state.point,Ce.pointLightShadows.value=L.state.pointShadow,Ce.hemisphereLights.value=L.state.hemi,Ce.directionalShadowMap.value=L.state.directionalShadowMap,Ce.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Ce.spotShadowMap.value=L.state.spotShadowMap,Ce.spotLightMatrix.value=L.state.spotLightMatrix,Ce.spotLightMap.value=L.state.spotLightMap,Ce.pointShadowMap.value=L.state.pointShadowMap,Ce.pointShadowMatrix.value=L.state.pointShadowMatrix),z.currentProgram=Fe,z.uniformsList=null,Fe}function Xg(_){if(_.uniformsList===null){let N=_.currentProgram.getUniforms();_.uniformsList=ko.seqWithValue(N.seq,_.uniforms)}return _.uniformsList}function Yg(_,N){let V=we.get(_);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function lM(_,N,V,z,L){N.isScene!==!0&&(N=St),M.resetTextureUnits();let J=N.fog,ae=z.isMeshStandardMaterial?N.environment:null,fe=O===null?S.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:as,_e=(z.isMeshStandardMaterial?B:v).get(z.envMap||ae),Oe=z.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Fe=!!V.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ce=!!V.morphAttributes.position,ot=!!V.morphAttributes.normal,ht=!!V.morphAttributes.color,Pt=Xi;z.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Pt=S.toneMapping);let At=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=At!==void 0?At.length:0,Ie=we.get(z),jt=p.state.lights;if(ie===!0&&(xe===!0||_!==x)){let Jt=_===x&&z.id===E;te.setState(z,_,Jt)}let pt=!1;z.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==jt.state.version||Ie.outputColorSpace!==fe||L.isBatchedMesh&&Ie.batching===!1||!L.isBatchedMesh&&Ie.batching===!0||L.isBatchedMesh&&Ie.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&Ie.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&Ie.instancing===!1||!L.isInstancedMesh&&Ie.instancing===!0||L.isSkinnedMesh&&Ie.skinning===!1||!L.isSkinnedMesh&&Ie.skinning===!0||L.isInstancedMesh&&Ie.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ie.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ie.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ie.instancingMorph===!1&&L.morphTexture!==null||Ie.envMap!==_e||z.fog===!0&&Ie.fog!==J||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==te.numPlanes||Ie.numIntersection!==te.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Fe||Ie.morphTargets!==Ce||Ie.morphNormals!==ot||Ie.morphColors!==ht||Ie.toneMapping!==Pt||Ie.morphTargetsCount!==ct)&&(pt=!0):(pt=!0,Ie.__version=z.version);let zn=Ie.currentProgram;pt===!0&&(zn=xl(z,N,L));let ws=!1,hn=!1,Go=!1,wt=zn.getUniforms(),Cn=Ie.uniforms;if(Te.useProgram(zn.program)&&(ws=!0,hn=!0,Go=!0),z.id!==E&&(E=z.id,hn=!0),ws||x!==_){Te.buffers.depth.getReversed()?(ee.copy(_.projectionMatrix),YS(ee),ZS(ee),wt.setValue(C,"projectionMatrix",ee)):wt.setValue(C,"projectionMatrix",_.projectionMatrix),wt.setValue(C,"viewMatrix",_.matrixWorldInverse);let on=wt.map.cameraPosition;on!==void 0&&on.setValue(C,Le.setFromMatrixPosition(_.matrixWorld)),et.logarithmicDepthBuffer&&wt.setValue(C,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&wt.setValue(C,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,hn=!0,Go=!0)}if(L.isSkinnedMesh){wt.setOptional(C,L,"bindMatrix"),wt.setOptional(C,L,"bindMatrixInverse");let Jt=L.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),wt.setValue(C,"boneTexture",Jt.boneTexture,M))}L.isBatchedMesh&&(wt.setOptional(C,L,"batchingTexture"),wt.setValue(C,"batchingTexture",L._matricesTexture,M),wt.setOptional(C,L,"batchingIdTexture"),wt.setValue(C,"batchingIdTexture",L._indirectTexture,M),wt.setOptional(C,L,"batchingColorTexture"),L._colorsTexture!==null&&wt.setValue(C,"batchingColorTexture",L._colorsTexture,M));let Dn=V.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&Pe.update(L,V,zn),(hn||Ie.receiveShadow!==L.receiveShadow)&&(Ie.receiveShadow=L.receiveShadow,wt.setValue(C,"receiveShadow",L.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Cn.envMap.value=_e,Cn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Cn.envMapIntensity.value=N.environmentIntensity),hn&&(wt.setValue(C,"toneMappingExposure",S.toneMappingExposure),Ie.needsLights&&cM(Cn,Go),J&&z.fog===!0&&ce.refreshFogUniforms(Cn,J),ce.refreshMaterialUniforms(Cn,z,P,k,p.state.transmissionRenderTarget[_.id]),ko.upload(C,Xg(Ie),Cn,M)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(ko.upload(C,Xg(Ie),Cn,M),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&wt.setValue(C,"center",L.center),wt.setValue(C,"modelViewMatrix",L.modelViewMatrix),wt.setValue(C,"normalMatrix",L.normalMatrix),wt.setValue(C,"modelMatrix",L.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){let Jt=z.uniformsGroups;for(let on=0,cf=Jt.length;on<cf;on++){let Nr=Jt[on];R.update(Nr,zn),R.bind(Nr,zn)}}return zn}function cM(_,N){_.ambientLightColor.needsUpdate=N,_.lightProbe.needsUpdate=N,_.directionalLights.needsUpdate=N,_.directionalLightShadows.needsUpdate=N,_.pointLights.needsUpdate=N,_.pointLightShadows.needsUpdate=N,_.spotLights.needsUpdate=N,_.spotLightShadows.needsUpdate=N,_.rectAreaLights.needsUpdate=N,_.hemisphereLights.needsUpdate=N}function uM(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(_,N,V){we.get(_.texture).__webglTexture=N,we.get(_.depthTexture).__webglTexture=V;let z=we.get(_);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=V===void 0,z.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(_,N){let V=we.get(_);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0};let dM=C.createFramebuffer();this.setRenderTarget=function(_,N=0,V=0){O=_,D=N,T=V;let z=!0,L=null,J=!1,ae=!1;if(_){let _e=we.get(_);if(_e.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(_e.__webglFramebuffer===void 0)M.setupRenderTarget(_);else if(_e.__hasExternalTextures)M.rebindTextures(_,we.get(_.texture).__webglTexture,we.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let Ce=_.depthTexture;if(_e.__boundDepthTexture!==Ce){if(Ce!==null&&we.has(Ce)&&(_.width!==Ce.image.width||_.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(_)}}let Oe=_.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ae=!0);let Fe=we.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Fe[N])?L=Fe[N][V]:L=Fe[N],J=!0):_.samples>0&&M.useMultisampledRTT(_)===!1?L=we.get(_).__webglMultisampledFramebuffer:Array.isArray(Fe)?L=Fe[V]:L=Fe,I.copy(_.viewport),j.copy(_.scissor),G=_.scissorTest}else I.copy(he).multiplyScalar(P).floor(),j.copy(De).multiplyScalar(P).floor(),G=Ze;if(V!==0&&(L=dM),Te.bindFramebuffer(C.FRAMEBUFFER,L)&&z&&Te.drawBuffers(_,L),Te.viewport(I),Te.scissor(j),Te.setScissorTest(G),J){let _e=we.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,_e.__webglTexture,V)}else if(ae){let _e=we.get(_.texture),Oe=N;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,_e.__webglTexture,V,Oe)}else if(_!==null&&V!==0){let _e=we.get(_.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,V)}E=-1},this.readRenderTargetPixels=function(_,N,V,z,L,J,ae){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let fe=we.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){Te.bindFramebuffer(C.FRAMEBUFFER,fe);try{let _e=_.texture,Oe=_e.format,Fe=_e.type;if(!et.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=_.width-z&&V>=0&&V<=_.height-L&&C.readPixels(N,V,z,L,$e.convert(Oe),$e.convert(Fe),J)}finally{let _e=O!==null?we.get(O).__webglFramebuffer:null;Te.bindFramebuffer(C.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=function(_,N,V,z,L,J,ae){return bs(this,null,function*(){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let fe=we.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&ae!==void 0&&(fe=fe[ae]),fe){let _e=_.texture,Oe=_e.format,Fe=_e.type;if(!et.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=_.width-z&&V>=0&&V<=_.height-L){Te.bindFramebuffer(C.FRAMEBUFFER,fe);let Ce=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.bufferData(C.PIXEL_PACK_BUFFER,J.byteLength,C.STREAM_READ),C.readPixels(N,V,z,L,$e.convert(Oe),$e.convert(Fe),0);let ot=O!==null?we.get(O).__webglFramebuffer:null;Te.bindFramebuffer(C.FRAMEBUFFER,ot);let ht=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),yield XS(C,ht,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ce),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,J),C.deleteBuffer(Ce),C.deleteSync(ht),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}})},this.copyFramebufferToTexture=function(_,N=null,V=0){_.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,_=arguments[1]);let z=Math.pow(2,-V),L=Math.floor(_.image.width*z),J=Math.floor(_.image.height*z),ae=N!==null?N.x:0,fe=N!==null?N.y:0;M.setTexture2D(_,0),C.copyTexSubImage2D(C.TEXTURE_2D,V,0,0,ae,fe,L,J),Te.unbindTexture()};let fM=C.createFramebuffer(),hM=C.createFramebuffer();this.copyTextureToTexture=function(_,N,V=null,z=null,L=0,J=null){_.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,_=arguments[1],N=arguments[2],J=arguments[3]||0,V=null),J===null&&(L!==0?(hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=L,L=0):J=0);let ae,fe,_e,Oe,Fe,Ce,ot,ht,Pt,At=_.isCompressedTexture?_.mipmaps[J]:_.image;if(V!==null)ae=V.max.x-V.min.x,fe=V.max.y-V.min.y,_e=V.isBox3?V.max.z-V.min.z:1,Oe=V.min.x,Fe=V.min.y,Ce=V.isBox3?V.min.z:0;else{let Dn=Math.pow(2,-L);ae=Math.floor(At.width*Dn),fe=Math.floor(At.height*Dn),_.isDataArrayTexture?_e=At.depth:_.isData3DTexture?_e=Math.floor(At.depth*Dn):_e=1,Oe=0,Fe=0,Ce=0}z!==null?(ot=z.x,ht=z.y,Pt=z.z):(ot=0,ht=0,Pt=0);let ct=$e.convert(N.format),Ie=$e.convert(N.type),jt;N.isData3DTexture?(M.setTexture3D(N,0),jt=C.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(M.setTexture2DArray(N,0),jt=C.TEXTURE_2D_ARRAY):(M.setTexture2D(N,0),jt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,N.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,N.unpackAlignment);let pt=C.getParameter(C.UNPACK_ROW_LENGTH),zn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ws=C.getParameter(C.UNPACK_SKIP_PIXELS),hn=C.getParameter(C.UNPACK_SKIP_ROWS),Go=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,At.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,At.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Oe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ce);let wt=_.isDataArrayTexture||_.isData3DTexture,Cn=N.isDataArrayTexture||N.isData3DTexture;if(_.isDepthTexture){let Dn=we.get(_),Jt=we.get(N),on=we.get(Dn.__renderTarget),cf=we.get(Jt.__renderTarget);Te.bindFramebuffer(C.READ_FRAMEBUFFER,on.__webglFramebuffer),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,cf.__webglFramebuffer);for(let Nr=0;Nr<_e;Nr++)wt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,we.get(_).__webglTexture,L,Ce+Nr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,we.get(N).__webglTexture,J,Pt+Nr)),C.blitFramebuffer(Oe,Fe,ae,fe,ot,ht,ae,fe,C.DEPTH_BUFFER_BIT,C.NEAREST);Te.bindFramebuffer(C.READ_FRAMEBUFFER,null),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(L!==0||_.isRenderTargetTexture||we.has(_)){let Dn=we.get(_),Jt=we.get(N);Te.bindFramebuffer(C.READ_FRAMEBUFFER,fM),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,hM);for(let on=0;on<_e;on++)wt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dn.__webglTexture,L,Ce+on):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Dn.__webglTexture,L),Cn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Jt.__webglTexture,J,Pt+on):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Jt.__webglTexture,J),L!==0?C.blitFramebuffer(Oe,Fe,ae,fe,ot,ht,ae,fe,C.COLOR_BUFFER_BIT,C.NEAREST):Cn?C.copyTexSubImage3D(jt,J,ot,ht,Pt+on,Oe,Fe,ae,fe):C.copyTexSubImage2D(jt,J,ot,ht,Oe,Fe,ae,fe);Te.bindFramebuffer(C.READ_FRAMEBUFFER,null),Te.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Cn?_.isDataTexture||_.isData3DTexture?C.texSubImage3D(jt,J,ot,ht,Pt,ae,fe,_e,ct,Ie,At.data):N.isCompressedArrayTexture?C.compressedTexSubImage3D(jt,J,ot,ht,Pt,ae,fe,_e,ct,At.data):C.texSubImage3D(jt,J,ot,ht,Pt,ae,fe,_e,ct,Ie,At):_.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,J,ot,ht,ae,fe,ct,Ie,At.data):_.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,J,ot,ht,At.width,At.height,ct,At.data):C.texSubImage2D(C.TEXTURE_2D,J,ot,ht,ae,fe,ct,Ie,At);C.pixelStorei(C.UNPACK_ROW_LENGTH,pt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,zn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ws),C.pixelStorei(C.UNPACK_SKIP_ROWS,hn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Go),J===0&&N.generateMipmaps&&C.generateMipmap(jt),Te.unbindTexture()},this.copyTextureToTexture3D=function(_,N,V=null,z=null,L=0){return _.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,z=arguments[1]||null,_=arguments[2],N=arguments[3],L=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(_,N,V,z,L)},this.initRenderTarget=function(_){we.get(_).__webglFramebuffer===void 0&&M.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?M.setTextureCube(_,0):_.isData3DTexture?M.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?M.setTexture2DArray(_,0):M.setTexture2D(_,0),Te.unbindTexture()},this.resetState=function(){D=0,T=0,O=null,Te.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}};var Bo=class n{constructor(e){this.elementRef=e}animationComplete=new en;hasEmittedComplete=!1;sizes={width:window.innerWidth,height:window.innerHeight};scaleFactor=Math.min(this.sizes.width,this.sizes.height)/1e3;renderer;scene;camera;flaps=[];boxGroup;pivotGroupLeft;pivotGroupRight;animationId=null;initialCameraPosition=new U(5,5,5);intermediatePosition=new U(5,0,0);targetCameraPosition=new U(0,0,0);initialQuaternion=new dn;intermediateQuaternion=new dn;targetQuaternion=new dn;startTime=null;firstPhaseDuration=1500;secondPhaseDuration=1500;onResize(){this.sizes.width=window.innerWidth,this.sizes.height=window.innerHeight,this.camera.aspect=this.sizes.width/this.sizes.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5))}ngOnInit(){this.scene=new Qa,this.scene.background=new Ye(8900331),this.camera=new Wt(75,this.sizes.width/this.sizes.height,.1,1e3),this.initialCameraPosition.set(5*this.scaleFactor,5*this.scaleFactor,5*this.scaleFactor),this.camera.position.copy(this.initialCameraPosition),this.camera.lookAt(new U(0,0,0)),this.initialQuaternion.copy(this.camera.quaternion);let e=new Wt;this.intermediatePosition.set(2*this.scaleFactor,3*this.scaleFactor,2*this.scaleFactor),e.position.copy(this.intermediatePosition),e.lookAt(new U(0,0,0)),this.intermediateQuaternion.copy(e.quaternion);let t=new Wt;this.targetCameraPosition.set(0,1*this.scaleFactor,0),t.position.copy(this.targetCameraPosition),t.lookAt(new U(0,0,0)),this.targetQuaternion.copy(t.quaternion),this.renderer=new Vd({antialias:!0}),this.renderer.setSize(this.sizes.width,this.sizes.height),this.renderer.shadowMap.enabled=!1,this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}ngAfterViewInit(){let e=this.elementRef.nativeElement.querySelector("div");e&&e.appendChild(this.renderer.domElement),this.boxGroup=new ei;let t=1,i=1,r=1,s=.05,o=new ls({color:16632410,side:fn}),a=new Nt(new Mn(t,i),o);a.position.z=r/2,this.boxGroup.add(a);let l=new Nt(new Mn(t,i),o);l.position.z=-r/2,this.boxGroup.add(l);let c=new Nt(new Mn(r,i),o);c.rotation.y=Math.PI/2,c.position.x=-t/2,this.boxGroup.add(c);let u=new Nt(new Mn(r,i),o);u.rotation.y=-Math.PI/2,u.position.x=t/2,this.boxGroup.add(u);let d=new Nt(new Mn(t,r),o);d.rotation.x=-Math.PI/2,d.position.y=-i/2,this.boxGroup.add(d);let f=new Mn(.5,1),h=new ls({color:16711680,side:fn}),g=new Nt(f,h);g.position.set(.25,0,0),g.rotation.x=Math.PI/2;let y=new Nt(f,h);y.position.set(-.25,0,0),y.rotation.x=-Math.PI/2,this.flaps=[g,y],this.pivotGroupLeft=new ei,this.pivotGroupLeft.position.set(-.5,.5,0),this.pivotGroupLeft.add(g),this.pivotGroupRight=new ei,this.pivotGroupRight.position.set(.5,.5,0),this.pivotGroupRight.add(y),this.boxGroup.add(this.pivotGroupLeft),this.boxGroup.add(this.pivotGroupRight),this.scene.add(this.boxGroup);let m=new Mn(10,10),p=new ls({color:8421504,side:fn}),b=new Nt(m,p);b.rotation.x=-Math.PI/2,b.position.y=-.51;let w=new Ro(16777215,1.5);w.position.set(-2,4,-1);let S=new Ro(16777215,1.5);S.position.set(2,4,1),this.scene.add(S),this.scene.add(w);let A=new il(4210752,4);this.scene.add(A),this.startAnimation()}startAnimation(){this.startTime=null,this.animate()}animate(e){this.animationId=requestAnimationFrame(g=>this.animate(g)),!this.startTime&&e&&(this.startTime=e),this.startTime||(this.startTime=0);let t=(e||0)-this.startTime,i=this.firstPhaseDuration+this.secondPhaseDuration,r=Math.min(t/i,1),s=this.easeInOutCubic(r),o=new U().lerpVectors(this.initialCameraPosition,this.intermediatePosition,.5),a=new U().lerpVectors(this.intermediatePosition,this.targetCameraPosition,.5),l=o.clone(),c=a.clone(),u=new U;u.copy(this.initialCameraPosition).multiplyScalar(Math.pow(1-s,3)).add(l.multiplyScalar(3*Math.pow(1-s,2)*s)).add(c.multiplyScalar(3*(1-s)*Math.pow(s,2))).add(this.targetCameraPosition.clone().multiplyScalar(Math.pow(s,3)));let d=new dn;d.slerpQuaternions(this.initialQuaternion,this.targetQuaternion,s),this.camera.position.copy(u),this.camera.quaternion.copy(d);let f=75,h=45;if(this.camera.fov=qm.lerp(f,h,s),this.camera.updateProjectionMatrix(),t<=i&&(this.pivotGroupLeft.rotation.z=s*Math.PI*.9,this.pivotGroupRight.rotation.z=-s*Math.PI*.9),t>=i&&!this.hasEmittedComplete){this.hasEmittedComplete=!0,this.animationComplete.emit();let g=this.elementRef.nativeElement.querySelector("div");g&&(g.style.transition="opacity 1s ease-out",g.style.opacity="1")}this.renderer.render(this.scene,this.camera)}easeInOutCubic(e){return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2}ngOnDestroy(){this.animationId!==null&&cancelAnimationFrame(this.animationId),this.scene.traverse(e=>{e instanceof Nt&&(e.geometry.dispose(),e.material instanceof xi?e.material.dispose():Array.isArray(e.material)&&e.material.forEach(t=>t.dispose()))}),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement&&this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement)}static \u0275fac=function(t){return new(t||n)(Fi(Xs))};static \u0275cmp=fi({type:n,selectors:[["app-three-box"]],hostBindings:function(t,i){t&1&&Ks("resize",function(){return i.onResize()},!1,W_)},outputs:{animationComplete:"animationComplete"},decls:2,vars:0,consts:[["rendererContainer",""]],template:function(t,i){t&1&&Yn(0,"div",null,0)},styles:["div[_ngcontent-%COMP%]{width:100vw;height:100vh;position:fixed;top:0;left:0;overflow:hidden}"]})};var Ge=function(n){return n[n.State=0]="State",n[n.Transition=1]="Transition",n[n.Sequence=2]="Sequence",n[n.Group=3]="Group",n[n.Animate=4]="Animate",n[n.Keyframes=5]="Keyframes",n[n.Style=6]="Style",n[n.Trigger=7]="Trigger",n[n.Reference=8]="Reference",n[n.AnimateChild=9]="AnimateChild",n[n.AnimateRef=10]="AnimateRef",n[n.Query=11]="Query",n[n.Stagger=12]="Stagger",n}(Ge||{}),bi="*";function CE(n,e){return{type:Ge.Trigger,name:n,definitions:e,options:{}}}function DE(n,e=null){return{type:Ge.Animate,styles:e,timings:n}}function AE(n,e=null){return{type:Ge.Sequence,steps:n,options:e}}function Vo(n){return{type:Ge.Style,styles:n,offset:null}}function pg(n,e,t){return{type:Ge.State,name:n,styles:e,options:t}}function IE(n,e,t=null){return{type:Ge.Transition,expr:n,animation:e,options:t}}var Ar=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(e=0,t=0){this.totalTime=e+t}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},fl=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(e){this.players=e;let t=0,i=0,r=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++t==s&&this._onFinish()}),o.onDestroy(()=>{++i==s&&this._onDestroy()}),o.onStart(()=>{++r==s&&this._onStart()})}),this.totalTime=this.players.reduce((o,a)=>Math.max(o,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let t=e*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,t/i.totalTime):1;i.setPosition(r)})}getPosition(){let e=this.players.reduce((t,i)=>t===null||i.totalTime>t.totalTime?i:t,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let t=e=="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},Hd="!";function RE(n){return new re(3e3,!1)}function XO(){return new re(3100,!1)}function YO(){return new re(3101,!1)}function ZO(n){return new re(3001,!1)}function KO(n){return new re(3003,!1)}function QO(n){return new re(3004,!1)}function JO(n,e){return new re(3005,!1)}function eL(){return new re(3006,!1)}function tL(){return new re(3007,!1)}function nL(n,e){return new re(3008,!1)}function iL(n){return new re(3002,!1)}function rL(n,e,t,i,r){return new re(3010,!1)}function sL(){return new re(3011,!1)}function oL(){return new re(3012,!1)}function aL(){return new re(3200,!1)}function lL(){return new re(3202,!1)}function cL(){return new re(3013,!1)}function uL(n){return new re(3014,!1)}function dL(n){return new re(3015,!1)}function fL(n){return new re(3016,!1)}function hL(n,e){return new re(3404,!1)}function pL(n){return new re(3502,!1)}function mL(n){return new re(3503,!1)}function gL(){return new re(3300,!1)}function yL(n){return new re(3504,!1)}function vL(n){return new re(3301,!1)}function _L(n,e){return new re(3302,!1)}function xL(n){return new re(3303,!1)}function SL(n,e){return new re(3400,!1)}function EL(n){return new re(3401,!1)}function ML(n){return new re(3402,!1)}function wL(n,e){return new re(3505,!1)}function Ir(n){switch(n.length){case 0:return new Ar;case 1:return n[0];default:return new fl(n)}}function jE(n,e,t=new Map,i=new Map){let r=[],s=[],o=-1,a=null;if(e.forEach(l=>{let c=l.get("offset"),u=c==o,d=u&&a||new Map;l.forEach((f,h)=>{let g=h,y=f;if(h!=="offset")switch(g=n.normalizePropertyName(g,r),y){case Hd:y=t.get(h);break;case bi:y=i.get(h);break;default:y=n.normalizeStyleValue(h,g,y,r);break}d.set(g,y)}),u||s.push(d),a=d,o=c}),r.length)throw pL(r);return s}function Fg(n,e,t,i){switch(e){case"start":n.onStart(()=>i(t&&mg(t,"start",n)));break;case"done":n.onDone(()=>i(t&&mg(t,"done",n)));break;case"destroy":n.onDestroy(()=>i(t&&mg(t,"destroy",n)));break}}function mg(n,e,t){let i=t.totalTime,r=!!t.disabled,s=kg(n.element,n.triggerName,n.fromState,n.toState,e||n.phaseName,i??n.totalTime,r),o=n._data;return o!=null&&(s._data=o),s}function kg(n,e,t,i,r="",s=0,o){return{element:n,triggerName:e,fromState:t,toState:i,phaseName:r,totalTime:s,disabled:!!o}}function bn(n,e,t){let i=n.get(e);return i||n.set(e,i=t),i}function NE(n){let e=n.indexOf(":"),t=n.substring(1,e),i=n.slice(e+1);return[t,i]}var bL=typeof document>"u"?null:document.documentElement;function Ug(n){let e=n.parentNode||n.host||null;return e===bL?null:e}function TL(n){return n.substring(1,6)=="ebkit"}var _s=null,PE=!1;function CL(n){_s||(_s=DL()||{},PE=_s.style?"WebkitAppearance"in _s.style:!1);let e=!0;return _s.style&&!TL(n)&&(e=n in _s.style,!e&&PE&&(e="Webkit"+n.charAt(0).toUpperCase()+n.slice(1)in _s.style)),e}function DL(){return typeof document<"u"?document.body:null}function $E(n,e){for(;e;){if(e===n)return!0;e=Ug(e)}return!1}function qE(n,e,t){if(t)return Array.from(n.querySelectorAll(e));let i=n.querySelector(e);return i?[i]:[]}var Bg=(()=>{class n{validateStyleProperty(t){return CL(t)}containsElement(t,i){return $E(t,i)}getParentElement(t){return Ug(t)}query(t,i,r){return qE(t,i,r)}computeStyle(t,i,r){return r||""}animate(t,i,r,s,o,a=[],l){return new Ar(r,s)}static \u0275fac=function(i){return new(i||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})(),Es=class{static NOOP=new Bg},Ms=class{};var AL=1e3,XE="{{",IL="}}",YE="ng-enter",Sg="ng-leave",Gd="ng-trigger",Xd=".ng-trigger",OE="ng-animating",Eg=".ng-animating";function Zi(n){if(typeof n=="number")return n;let e=n.match(/^(-?[\.\d]+)(m?s)/);return!e||e.length<2?0:Mg(parseFloat(e[1]),e[2])}function Mg(n,e){switch(e){case"s":return n*AL;default:return n}}function Yd(n,e,t){return n.hasOwnProperty("duration")?n:RL(n,e,t)}function RL(n,e,t){let i=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i,r,s=0,o="";if(typeof n=="string"){let a=n.match(i);if(a===null)return e.push(RE(n)),{duration:0,delay:0,easing:""};r=Mg(parseFloat(a[1]),a[2]);let l=a[3];l!=null&&(s=Mg(parseFloat(l),a[4]));let c=a[5];c&&(o=c)}else r=n;if(!t){let a=!1,l=e.length;r<0&&(e.push(XO()),a=!0),s<0&&(e.push(YO()),a=!0),a&&e.splice(l,0,RE(n))}return{duration:r,delay:s,easing:o}}function NL(n){return n.length?n[0]instanceof Map?n:n.map(e=>new Map(Object.entries(e))):[]}function Ti(n,e,t){e.forEach((i,r)=>{let s=Vg(r);t&&!t.has(r)&&t.set(r,n.style[s]),n.style[s]=i})}function Ss(n,e){e.forEach((t,i)=>{let r=Vg(i);n.style[r]=""})}function hl(n){return Array.isArray(n)?n.length==1?n[0]:AE(n):n}function PL(n,e,t){let i=e.params||{},r=ZE(n);r.length&&r.forEach(s=>{i.hasOwnProperty(s)||t.push(ZO(s))})}var wg=new RegExp(`${XE}\\s*(.+?)\\s*${IL}`,"g");function ZE(n){let e=[];if(typeof n=="string"){let t;for(;t=wg.exec(n);)e.push(t[1]);wg.lastIndex=0}return e}function ml(n,e,t){let i=`${n}`,r=i.replace(wg,(s,o)=>{let a=e[o];return a==null&&(t.push(KO(o)),a=""),a.toString()});return r==i?n:r}var OL=/-+([a-z0-9])/g;function Vg(n){return n.replace(OL,(...e)=>e[1].toUpperCase())}function LL(n,e){return n===0||e===0}function FL(n,e,t){if(t.size&&e.length){let i=e[0],r=[];if(t.forEach((s,o)=>{i.has(o)||r.push(o),i.set(o,s)}),r.length)for(let s=1;s<e.length;s++){let o=e[s];r.forEach(a=>o.set(a,zg(n,a)))}}return e}function wn(n,e,t){switch(e.type){case Ge.Trigger:return n.visitTrigger(e,t);case Ge.State:return n.visitState(e,t);case Ge.Transition:return n.visitTransition(e,t);case Ge.Sequence:return n.visitSequence(e,t);case Ge.Group:return n.visitGroup(e,t);case Ge.Animate:return n.visitAnimate(e,t);case Ge.Keyframes:return n.visitKeyframes(e,t);case Ge.Style:return n.visitStyle(e,t);case Ge.Reference:return n.visitReference(e,t);case Ge.AnimateChild:return n.visitAnimateChild(e,t);case Ge.AnimateRef:return n.visitAnimateRef(e,t);case Ge.Query:return n.visitQuery(e,t);case Ge.Stagger:return n.visitStagger(e,t);default:throw QO(e.type)}}function zg(n,e){return window.getComputedStyle(n)[e]}var kL=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),Zd=class extends Ms{normalizePropertyName(e,t){return Vg(e)}normalizeStyleValue(e,t,i,r){let s="",o=i.toString().trim();if(kL.has(t)&&i!==0&&i!=="0")if(typeof i=="number")s="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(JO(e,i))}return o+s}};var Kd="*";function UL(n,e){let t=[];return typeof n=="string"?n.split(/\s*,\s*/).forEach(i=>BL(i,t,e)):t.push(n),t}function BL(n,e,t){if(n[0]==":"){let l=VL(n,t);if(typeof l=="function"){e.push(l);return}n=l}let i=n.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return t.push(dL(n)),e;let r=i[1],s=i[2],o=i[3];e.push(LE(r,o));let a=r==Kd&&o==Kd;s[0]=="<"&&!a&&e.push(LE(o,r))}function VL(n,e){switch(n){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(t,i)=>parseFloat(i)>parseFloat(t);case":decrement":return(t,i)=>parseFloat(i)<parseFloat(t);default:return e.push(fL(n)),"* => *"}}var Wd=new Set(["true","1"]),jd=new Set(["false","0"]);function LE(n,e){let t=Wd.has(n)||jd.has(n),i=Wd.has(e)||jd.has(e);return(r,s)=>{let o=n==Kd||n==r,a=e==Kd||e==s;return!o&&t&&typeof r=="boolean"&&(o=r?Wd.has(n):jd.has(n)),!a&&i&&typeof s=="boolean"&&(a=s?Wd.has(e):jd.has(e)),o&&a}}var KE=":self",zL=new RegExp(`s*${KE}s*,?`,"g");function QE(n,e,t,i){return new bg(n).build(e,t,i)}var FE="",bg=class{_driver;constructor(e){this._driver=e}build(e,t,i){let r=new Tg(t);return this._resetContextStyleTimingState(r),wn(this,hl(e),r)}_resetContextStyleTimingState(e){e.currentQuerySelector=FE,e.collectedStyles=new Map,e.collectedStyles.set(FE,new Map),e.currentTime=0}visitTrigger(e,t){let i=t.queryCount=0,r=t.depCount=0,s=[],o=[];return e.name.charAt(0)=="@"&&t.errors.push(eL()),e.definitions.forEach(a=>{if(this._resetContextStyleTimingState(t),a.type==Ge.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(u=>{l.name=u,s.push(this.visitState(l,t))}),l.name=c}else if(a.type==Ge.Transition){let l=this.visitTransition(a,t);i+=l.queryCount,r+=l.depCount,o.push(l)}else t.errors.push(tL())}),{type:Ge.Trigger,name:e.name,states:s,transitions:o,queryCount:i,depCount:r,options:null}}visitState(e,t){let i=this.visitStyle(e.styles,t),r=e.options&&e.options.params||null;if(i.containsDynamicStyles){let s=new Set,o=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{ZE(l).forEach(c=>{o.hasOwnProperty(c)||s.add(c)})})}),s.size&&t.errors.push(nL(e.name,[...s.values()]))}return{type:Ge.State,name:e.name,style:i,options:r?{params:r}:null}}visitTransition(e,t){t.queryCount=0,t.depCount=0;let i=wn(this,hl(e.animation),t),r=UL(e.expr,t.errors);return{type:Ge.Transition,matchers:r,animation:i,queryCount:t.queryCount,depCount:t.depCount,options:xs(e.options)}}visitSequence(e,t){return{type:Ge.Sequence,steps:e.steps.map(i=>wn(this,i,t)),options:xs(e.options)}}visitGroup(e,t){let i=t.currentTime,r=0,s=e.steps.map(o=>{t.currentTime=i;let a=wn(this,o,t);return r=Math.max(r,t.currentTime),a});return t.currentTime=r,{type:Ge.Group,steps:s,options:xs(e.options)}}visitAnimate(e,t){let i=jL(e.timings,t.errors);t.currentAnimateTimings=i;let r,s=e.styles?e.styles:Vo({});if(s.type==Ge.Keyframes)r=this.visitKeyframes(s,t);else{let o=e.styles,a=!1;if(!o){a=!0;let c={};i.easing&&(c.easing=i.easing),o=Vo(c)}t.currentTime+=i.duration+i.delay;let l=this.visitStyle(o,t);l.isEmptyStep=a,r=l}return t.currentAnimateTimings=null,{type:Ge.Animate,timings:i,style:r,options:null}}visitStyle(e,t){let i=this._makeStyleAst(e,t);return this._validateStyleAst(i,t),i}_makeStyleAst(e,t){let i=[],r=Array.isArray(e.styles)?e.styles:[e.styles];for(let a of r)typeof a=="string"?a===bi?i.push(a):t.errors.push(iL(a)):i.push(new Map(Object.entries(a)));let s=!1,o=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(o=a.get("easing"),a.delete("easing")),!s)){for(let l of a.values())if(l.toString().indexOf(XE)>=0){s=!0;break}}}),{type:Ge.Style,styles:i,easing:o,offset:e.offset,containsDynamicStyles:s,options:null}}_validateStyleAst(e,t){let i=t.currentAnimateTimings,r=t.currentTime,s=t.currentTime;i&&s>0&&(s-=i.duration+i.delay),e.styles.forEach(o=>{typeof o!="string"&&o.forEach((a,l)=>{let c=t.collectedStyles.get(t.currentQuerySelector),u=c.get(l),d=!0;u&&(s!=r&&s>=u.startTime&&r<=u.endTime&&(t.errors.push(rL(l,u.startTime,u.endTime,s,r)),d=!1),s=u.startTime),d&&c.set(l,{startTime:s,endTime:r}),t.options&&PL(a,t.options,t.errors)})})}visitKeyframes(e,t){let i={type:Ge.Keyframes,styles:[],options:null};if(!t.currentAnimateTimings)return t.errors.push(sL()),i;let r=1,s=0,o=[],a=!1,l=!1,c=0,u=e.steps.map(p=>{let b=this._makeStyleAst(p,t),w=b.offset!=null?b.offset:WL(b.styles),S=0;return w!=null&&(s++,S=b.offset=w),l=l||S<0||S>1,a=a||S<c,c=S,o.push(S),b});l&&t.errors.push(oL()),a&&t.errors.push(aL());let d=e.steps.length,f=0;s>0&&s<d?t.errors.push(lL()):s==0&&(f=r/(d-1));let h=d-1,g=t.currentTime,y=t.currentAnimateTimings,m=y.duration;return u.forEach((p,b)=>{let w=f>0?b==h?1:f*b:o[b],S=w*m;t.currentTime=g+y.delay+S,y.duration=S,this._validateStyleAst(p,t),p.offset=w,i.styles.push(p)}),i}visitReference(e,t){return{type:Ge.Reference,animation:wn(this,hl(e.animation),t),options:xs(e.options)}}visitAnimateChild(e,t){return t.depCount++,{type:Ge.AnimateChild,options:xs(e.options)}}visitAnimateRef(e,t){return{type:Ge.AnimateRef,animation:this.visitReference(e.animation,t),options:xs(e.options)}}visitQuery(e,t){let i=t.currentQuerySelector,r=e.options||{};t.queryCount++,t.currentQuery=e;let[s,o]=HL(e.selector);t.currentQuerySelector=i.length?i+" "+s:s,bn(t.collectedStyles,t.currentQuerySelector,new Map);let a=wn(this,hl(e.animation),t);return t.currentQuery=null,t.currentQuerySelector=i,{type:Ge.Query,selector:s,limit:r.limit||0,optional:!!r.optional,includeSelf:o,animation:a,originalSelector:e.selector,options:xs(e.options)}}visitStagger(e,t){t.currentQuery||t.errors.push(cL());let i=e.timings==="full"?{duration:0,delay:0,easing:"full"}:Yd(e.timings,t.errors,!0);return{type:Ge.Stagger,animation:wn(this,hl(e.animation),t),timings:i,options:null}}};function HL(n){let e=!!n.split(/\s*,\s*/).find(t=>t==KE);return e&&(n=n.replace(zL,"")),n=n.replace(/@\*/g,Xd).replace(/@\w+/g,t=>Xd+"-"+t.slice(1)).replace(/:animating/g,Eg),[n,e]}function GL(n){return n?me({},n):null}var Tg=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(e){this.errors=e}};function WL(n){if(typeof n=="string")return null;let e=null;if(Array.isArray(n))n.forEach(t=>{if(t instanceof Map&&t.has("offset")){let i=t;e=parseFloat(i.get("offset")),i.delete("offset")}});else if(n instanceof Map&&n.has("offset")){let t=n;e=parseFloat(t.get("offset")),t.delete("offset")}return e}function jL(n,e){if(n.hasOwnProperty("duration"))return n;if(typeof n=="number"){let s=Yd(n,e).duration;return gg(s,0,"")}let t=n;if(t.split(/\s+/).some(s=>s.charAt(0)=="{"&&s.charAt(1)=="{")){let s=gg(0,0,"");return s.dynamic=!0,s.strValue=t,s}let r=Yd(t,e);return gg(r.duration,r.delay,r.easing)}function xs(n){return n?(n=me({},n),n.params&&(n.params=GL(n.params))):n={},n}function gg(n,e,t){return{duration:n,delay:e,easing:t}}function Hg(n,e,t,i,r,s,o=null,a=!1){return{type:1,element:n,keyframes:e,preStyleProps:t,postStyleProps:i,duration:r,delay:s,totalTime:r+s,easing:o,subTimeline:a}}var gl=class{_map=new Map;get(e){return this._map.get(e)||[]}append(e,t){let i=this._map.get(e);i||this._map.set(e,i=[]),i.push(...t)}has(e){return this._map.has(e)}clear(){this._map.clear()}},$L=1,qL=":enter",XL=new RegExp(qL,"g"),YL=":leave",ZL=new RegExp(YL,"g");function JE(n,e,t,i,r,s=new Map,o=new Map,a,l,c=[]){return new Cg().buildKeyframes(n,e,t,i,r,s,o,a,l,c)}var Cg=class{buildKeyframes(e,t,i,r,s,o,a,l,c,u=[]){c=c||new gl;let d=new Dg(e,t,c,r,s,u,[]);d.options=l;let f=l.delay?Zi(l.delay):0;d.currentTimeline.delayNextStep(f),d.currentTimeline.setStyles([o],null,d.errors,l),wn(this,i,d);let h=d.timelines.filter(g=>g.containsAnimation());if(h.length&&a.size){let g;for(let y=h.length-1;y>=0;y--){let m=h[y];if(m.element===t){g=m;break}}g&&!g.allowOnlyTimelineStyles()&&g.setStyles([a],null,d.errors,l)}return h.length?h.map(g=>g.buildKeyframes()):[Hg(t,[],[],[],0,f,"",!1)]}visitTrigger(e,t){}visitState(e,t){}visitTransition(e,t){}visitAnimateChild(e,t){let i=t.subInstructions.get(t.element);if(i){let r=t.createSubContext(e.options),s=t.currentTimeline.currentTime,o=this._visitSubInstructions(i,r,r.options);s!=o&&t.transformIntoNewTimeline(o)}t.previousNode=e}visitAnimateRef(e,t){let i=t.createSubContext(e.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([e.options,e.animation.options],t,i),this.visitReference(e.animation,i),t.transformIntoNewTimeline(i.currentTimeline.currentTime),t.previousNode=e}_applyAnimationRefDelays(e,t,i){for(let r of e){let s=r?.delay;if(s){let o=typeof s=="number"?s:Zi(ml(s,r?.params??{},t.errors));i.delayNextStep(o)}}}_visitSubInstructions(e,t,i){let s=t.currentTimeline.currentTime,o=i.duration!=null?Zi(i.duration):null,a=i.delay!=null?Zi(i.delay):null;return o!==0&&e.forEach(l=>{let c=t.appendInstructionToTimeline(l,o,a);s=Math.max(s,c.duration+c.delay)}),s}visitReference(e,t){t.updateOptions(e.options,!0),wn(this,e.animation,t),t.previousNode=e}visitSequence(e,t){let i=t.subContextCount,r=t,s=e.options;if(s&&(s.params||s.delay)&&(r=t.createSubContext(s),r.transformIntoNewTimeline(),s.delay!=null)){r.previousNode.type==Ge.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Qd);let o=Zi(s.delay);r.delayNextStep(o)}e.steps.length&&(e.steps.forEach(o=>wn(this,o,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),t.previousNode=e}visitGroup(e,t){let i=[],r=t.currentTimeline.currentTime,s=e.options&&e.options.delay?Zi(e.options.delay):0;e.steps.forEach(o=>{let a=t.createSubContext(e.options);s&&a.delayNextStep(s),wn(this,o,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(o=>t.currentTimeline.mergeTimelineCollectedStyles(o)),t.transformIntoNewTimeline(r),t.previousNode=e}_visitTiming(e,t){if(e.dynamic){let i=e.strValue,r=t.params?ml(i,t.params,t.errors):i;return Yd(r,t.errors)}else return{duration:e.duration,delay:e.delay,easing:e.easing}}visitAnimate(e,t){let i=t.currentAnimateTimings=this._visitTiming(e.timings,t),r=t.currentTimeline;i.delay&&(t.incrementTime(i.delay),r.snapshotCurrentStyles());let s=e.style;s.type==Ge.Keyframes?this.visitKeyframes(s,t):(t.incrementTime(i.duration),this.visitStyle(s,t),r.applyStylesToKeyframe()),t.currentAnimateTimings=null,t.previousNode=e}visitStyle(e,t){let i=t.currentTimeline,r=t.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let s=r&&r.easing||e.easing;e.isEmptyStep?i.applyEmptyStep(s):i.setStyles(e.styles,s,t.errors,t.options),t.previousNode=e}visitKeyframes(e,t){let i=t.currentAnimateTimings,r=t.currentTimeline.duration,s=i.duration,a=t.createSubContext().currentTimeline;a.easing=i.easing,e.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*s),a.setStyles(l.styles,l.easing,t.errors,t.options),a.applyStylesToKeyframe()}),t.currentTimeline.mergeTimelineCollectedStyles(a),t.transformIntoNewTimeline(r+s),t.previousNode=e}visitQuery(e,t){let i=t.currentTimeline.currentTime,r=e.options||{},s=r.delay?Zi(r.delay):0;s&&(t.previousNode.type===Ge.Style||i==0&&t.currentTimeline.hasCurrentStyleProperties())&&(t.currentTimeline.snapshotCurrentStyles(),t.previousNode=Qd);let o=i,a=t.invokeQuery(e.selector,e.originalSelector,e.limit,e.includeSelf,!!r.optional,t.errors);t.currentQueryTotal=a.length;let l=null;a.forEach((c,u)=>{t.currentQueryIndex=u;let d=t.createSubContext(e.options,c);s&&d.delayNextStep(s),c===t.element&&(l=d.currentTimeline),wn(this,e.animation,d),d.currentTimeline.applyStylesToKeyframe();let f=d.currentTimeline.currentTime;o=Math.max(o,f)}),t.currentQueryIndex=0,t.currentQueryTotal=0,t.transformIntoNewTimeline(o),l&&(t.currentTimeline.mergeTimelineCollectedStyles(l),t.currentTimeline.snapshotCurrentStyles()),t.previousNode=e}visitStagger(e,t){let i=t.parentContext,r=t.currentTimeline,s=e.timings,o=Math.abs(s.duration),a=o*(t.currentQueryTotal-1),l=o*t.currentQueryIndex;switch(s.duration<0?"reverse":s.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime;break}let u=t.currentTimeline;l&&u.delayNextStep(l);let d=u.currentTime;wn(this,e.animation,t),t.previousNode=e,i.currentStaggerTime=r.currentTime-d+(r.startTime-i.currentTimeline.startTime)}},Qd={},Dg=class n{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Qd;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(e,t,i,r,s,o,a,l){this._driver=e,this.element=t,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=s,this.errors=o,this.timelines=a,this.currentTimeline=l||new Jd(this._driver,t,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(e,t){if(!e)return;let i=e,r=this.options;i.duration!=null&&(r.duration=Zi(i.duration)),i.delay!=null&&(r.delay=Zi(i.delay));let s=i.params;if(s){let o=r.params;o||(o=this.options.params={}),Object.keys(s).forEach(a=>{(!t||!o.hasOwnProperty(a))&&(o[a]=ml(s[a],o,this.errors))})}}_copyOptions(){let e={};if(this.options){let t=this.options.params;if(t){let i=e.params={};Object.keys(t).forEach(r=>{i[r]=t[r]})}}return e}createSubContext(e=null,t,i){let r=t||this.element,s=new n(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return s.previousNode=this.previousNode,s.currentAnimateTimings=this.currentAnimateTimings,s.options=this._copyOptions(),s.updateOptions(e),s.currentQueryIndex=this.currentQueryIndex,s.currentQueryTotal=this.currentQueryTotal,s.parentContext=this,this.subContextCount++,s}transformIntoNewTimeline(e){return this.previousNode=Qd,this.currentTimeline=this.currentTimeline.fork(this.element,e),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(e,t,i){let r={duration:t??e.duration,delay:this.currentTimeline.currentTime+(i??0)+e.delay,easing:""},s=new Ag(this._driver,e.element,e.keyframes,e.preStyleProps,e.postStyleProps,r,e.stretchStartingKeyframe);return this.timelines.push(s),r}incrementTime(e){this.currentTimeline.forwardTime(this.currentTimeline.duration+e)}delayNextStep(e){e>0&&this.currentTimeline.delayNextStep(e)}invokeQuery(e,t,i,r,s,o){let a=[];if(r&&a.push(this.element),e.length>0){e=e.replace(XL,"."+this._enterClassName),e=e.replace(ZL,"."+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,e,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!s&&a.length==0&&o.push(uL(t)),a}},Jd=class n{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(e,t,i,r){this._driver=e,this.element=t,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(t),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(t,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(e){let t=this._keyframes.size===1&&this._pendingStyles.size;this.duration||t?(this.forwardTime(this.currentTime+e),t&&this.snapshotCurrentStyles()):this.startTime+=e}fork(e,t){return this.applyStylesToKeyframe(),new n(this._driver,e,t||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=$L,this._loadKeyframe()}forwardTime(e){this.applyStylesToKeyframe(),this.duration=e,this._loadKeyframe()}_updateStyle(e,t){this._localTimelineStyles.set(e,t),this._globalTimelineStyles.set(e,t),this._styleSummary.set(e,{time:this.currentTime,value:t})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(e){e&&this._previousKeyframe.set("easing",e);for(let[t,i]of this._globalTimelineStyles)this._backFill.set(t,i||bi),this._currentKeyframe.set(t,bi);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(e,t,i,r){t&&this._previousKeyframe.set("easing",t);let s=r&&r.params||{},o=KL(e,this._globalTimelineStyles);for(let[a,l]of o){let c=ml(l,s,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??bi),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((e,t)=>{this._currentKeyframe.set(t,e)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((e,t)=>{this._currentKeyframe.has(t)||this._currentKeyframe.set(t,e)}))}snapshotCurrentStyles(){for(let[e,t]of this._localTimelineStyles)this._pendingStyles.set(e,t),this._updateStyle(e,t)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let e=[];for(let t in this._currentKeyframe)e.push(t);return e}mergeTimelineCollectedStyles(e){e._styleSummary.forEach((t,i)=>{let r=this._styleSummary.get(i);(!r||t.time>r.time)&&this._updateStyle(i,t.value)})}buildKeyframes(){this.applyStylesToKeyframe();let e=new Set,t=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((u,d)=>{u===Hd?e.add(d):u===bi&&t.add(d)}),i||c.set("offset",l/this.duration),r.push(c)});let s=[...e.values()],o=[...t.values()];if(i){let a=r[0],l=new Map(a);a.set("offset",0),l.set("offset",1),r=[a,l]}return Hg(this.element,r,s,o,this.duration,this.startTime,this.easing,!1)}},Ag=class extends Jd{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(e,t,i,r,s,o,a=!1){super(e,t,o.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=s,this._stretchStartingKeyframe=a,this.timings={duration:o.duration,delay:o.delay,easing:o.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let e=this.keyframes,{delay:t,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&t){let s=[],o=i+t,a=t/o,l=new Map(e[0]);l.set("offset",0),s.push(l);let c=new Map(e[0]);c.set("offset",kE(a)),s.push(c);let u=e.length-1;for(let d=1;d<=u;d++){let f=new Map(e[d]),h=f.get("offset"),g=t+h*i;f.set("offset",kE(g/o)),s.push(f)}i=o,t=0,r="",e=s}return Hg(this.element,e,this.preStyleProps,this.postStyleProps,i,t,r,!0)}};function kE(n,e=3){let t=Math.pow(10,e-1);return Math.round(n*t)/t}function KL(n,e){let t=new Map,i;return n.forEach(r=>{if(r==="*"){i??=e.keys();for(let s of i)t.set(s,bi)}else for(let[s,o]of r)t.set(s,o)}),t}function UE(n,e,t,i,r,s,o,a,l,c,u,d,f){return{type:0,element:n,triggerName:e,isRemovalTransition:r,fromState:t,fromStyles:s,toState:i,toStyles:o,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:u,totalTime:d,errors:f}}var yg={},ef=class{_triggerName;ast;_stateStyles;constructor(e,t,i){this._triggerName=e,this.ast=t,this._stateStyles=i}match(e,t,i,r){return QL(this.ast.matchers,e,t,i,r)}buildStyles(e,t,i){let r=this._stateStyles.get("*");return e!==void 0&&(r=this._stateStyles.get(e?.toString())||r),r?r.buildStyles(t,i):new Map}build(e,t,i,r,s,o,a,l,c,u){let d=[],f=this.ast.options&&this.ast.options.params||yg,h=a&&a.params||yg,g=this.buildStyles(i,h,d),y=l&&l.params||yg,m=this.buildStyles(r,y,d),p=new Set,b=new Map,w=new Map,S=r==="void",A={params:eM(y,f),delay:this.ast.options?.delay},D=u?[]:JE(e,t,this.ast.animation,s,o,g,m,A,c,d),T=0;return D.forEach(O=>{T=Math.max(O.duration+O.delay,T)}),d.length?UE(t,this._triggerName,i,r,S,g,m,[],[],b,w,T,d):(D.forEach(O=>{let E=O.element,x=bn(b,E,new Set);O.preStyleProps.forEach(j=>x.add(j));let I=bn(w,E,new Set);O.postStyleProps.forEach(j=>I.add(j)),E!==t&&p.add(E)}),UE(t,this._triggerName,i,r,S,g,m,D,[...p.values()],b,w,T))}};function QL(n,e,t,i,r){return n.some(s=>s(e,t,i,r))}function eM(n,e){let t=me({},e);return Object.entries(n).forEach(([i,r])=>{r!=null&&(t[i]=r)}),t}var Ig=class{styles;defaultParams;normalizer;constructor(e,t,i){this.styles=e,this.defaultParams=t,this.normalizer=i}buildStyles(e,t){let i=new Map,r=eM(e,this.defaultParams);return this.styles.styles.forEach(s=>{typeof s!="string"&&s.forEach((o,a)=>{o&&(o=ml(o,r,t));let l=this.normalizer.normalizePropertyName(a,t);o=this.normalizer.normalizeStyleValue(a,l,o,t),i.set(a,o)})}),i}};function JL(n,e,t){return new Rg(n,e,t)}var Rg=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(e,t,i){this.name=e,this.ast=t,this._normalizer=i,t.states.forEach(r=>{let s=r.options&&r.options.params||{};this.states.set(r.name,new Ig(r.style,s,i))}),BE(this.states,"true","1"),BE(this.states,"false","0"),t.transitions.forEach(r=>{this.transitionFactories.push(new ef(e,r,this.states))}),this.fallbackTransition=eF(e,this.states,this._normalizer)}get containsQueries(){return this.ast.queryCount>0}matchTransition(e,t,i,r){return this.transitionFactories.find(o=>o.match(e,t,i,r))||null}matchStyles(e,t,i){return this.fallbackTransition.buildStyles(e,t,i)}};function eF(n,e,t){let i=[(o,a)=>!0],r={type:Ge.Sequence,steps:[],options:null},s={type:Ge.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new ef(n,s,e)}function BE(n,e,t){n.has(e)?n.has(t)||n.set(t,n.get(e)):n.has(t)&&n.set(e,n.get(t))}var tF=new gl,Ng=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(e,t,i){this.bodyNode=e,this._driver=t,this._normalizer=i}register(e,t){let i=[],r=[],s=QE(this._driver,t,i,r);if(i.length)throw mL(i);this._animations.set(e,s)}_buildPlayer(e,t,i){let r=e.element,s=jE(this._normalizer,e.keyframes,t,i);return this._driver.animate(r,s,e.duration,e.delay,e.easing,[],!0)}create(e,t,i={}){let r=[],s=this._animations.get(e),o,a=new Map;if(s?(o=JE(this._driver,t,s,YE,Sg,new Map,new Map,i,tF,r),o.forEach(u=>{let d=bn(a,u.element,new Map);u.postStyleProps.forEach(f=>d.set(f,null))})):(r.push(gL()),o=[]),r.length)throw yL(r);a.forEach((u,d)=>{u.forEach((f,h)=>{u.set(h,this._driver.computeStyle(d,h,bi))})});let l=o.map(u=>{let d=a.get(u.element);return this._buildPlayer(u,new Map,d)}),c=Ir(l);return this._playersById.set(e,c),c.onDestroy(()=>this.destroy(e)),this.players.push(c),c}destroy(e){let t=this._getPlayer(e);t.destroy(),this._playersById.delete(e);let i=this.players.indexOf(t);i>=0&&this.players.splice(i,1)}_getPlayer(e){let t=this._playersById.get(e);if(!t)throw vL(e);return t}listen(e,t,i,r){let s=kg(t,"","","");return Fg(this._getPlayer(e),i,s,r),()=>{}}command(e,t,i,r){if(i=="register"){this.register(e,r[0]);return}if(i=="create"){let o=r[0]||{};this.create(e,t,o);return}let s=this._getPlayer(e);switch(i){case"play":s.play();break;case"pause":s.pause();break;case"reset":s.reset();break;case"restart":s.restart();break;case"finish":s.finish();break;case"init":s.init();break;case"setPosition":s.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(e);break}}},VE="ng-animate-queued",nF=".ng-animate-queued",vg="ng-animate-disabled",iF=".ng-animate-disabled",rF="ng-star-inserted",sF=".ng-star-inserted",oF=[],tM={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},aF={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},ii="__ng_removed",yl=class{namespaceId;value;options;get params(){return this.options.params}constructor(e,t=""){this.namespaceId=t;let i=e&&e.hasOwnProperty("value"),r=i?e.value:e;if(this.value=cF(r),i){let s=e,{value:o}=s,a=Jg(s,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(e){let t=e.params;if(t){let i=this.options.params;Object.keys(t).forEach(r=>{i[r]==null&&(i[r]=t[r])})}}},pl="void",_g=new yl(pl),Pg=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(e,t,i){this.id=e,this.hostElement=t,this._engine=i,this._hostClassName="ng-tns-"+e,Bn(t,this._hostClassName)}listen(e,t,i,r){if(!this._triggers.has(t))throw _L(i,t);if(i==null||i.length==0)throw xL(t);if(!uF(i))throw SL(i,t);let s=bn(this._elementListeners,e,[]),o={name:t,phase:i,callback:r};s.push(o);let a=bn(this._engine.statesByElement,e,new Map);return a.has(t)||(Bn(e,Gd),Bn(e,Gd+"-"+t),a.set(t,_g)),()=>{this._engine.afterFlush(()=>{let l=s.indexOf(o);l>=0&&s.splice(l,1),this._triggers.has(t)||a.delete(t)})}}register(e,t){return this._triggers.has(e)?!1:(this._triggers.set(e,t),!0)}_getTrigger(e){let t=this._triggers.get(e);if(!t)throw EL(e);return t}trigger(e,t,i,r=!0){let s=this._getTrigger(t),o=new vl(this.id,t,e),a=this._engine.statesByElement.get(e);a||(Bn(e,Gd),Bn(e,Gd+"-"+t),this._engine.statesByElement.set(e,a=new Map));let l=a.get(t),c=new yl(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(t,c),l||(l=_g),!(c.value===pl)&&l.value===c.value){if(!hF(l.params,c.params)){let y=[],m=s.matchStyles(l.value,l.params,y),p=s.matchStyles(c.value,c.params,y);y.length?this._engine.reportError(y):this._engine.afterFlush(()=>{Ss(e,m),Ti(e,p)})}return}let f=bn(this._engine.playersByElement,e,[]);f.forEach(y=>{y.namespaceId==this.id&&y.triggerName==t&&y.queued&&y.destroy()});let h=s.matchTransition(l.value,c.value,e,c.params),g=!1;if(!h){if(!r)return;h=s.fallbackTransition,g=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:t,transition:h,fromState:l,toState:c,player:o,isFallbackTransition:g}),g||(Bn(e,VE),o.onStart(()=>{zo(e,VE)})),o.onDone(()=>{let y=this.players.indexOf(o);y>=0&&this.players.splice(y,1);let m=this._engine.playersByElement.get(e);if(m){let p=m.indexOf(o);p>=0&&m.splice(p,1)}}),this.players.push(o),f.push(o),o}deregister(e){this._triggers.delete(e),this._engine.statesByElement.forEach(t=>t.delete(e)),this._elementListeners.forEach((t,i)=>{this._elementListeners.set(i,t.filter(r=>r.name!=e))})}clearElementCache(e){this._engine.statesByElement.delete(e),this._elementListeners.delete(e);let t=this._engine.playersByElement.get(e);t&&(t.forEach(i=>i.destroy()),this._engine.playersByElement.delete(e))}_signalRemovalForInnerTriggers(e,t){let i=this._engine.driver.query(e,Xd,!0);i.forEach(r=>{if(r[ii])return;let s=this._engine.fetchNamespacesByElement(r);s.size?s.forEach(o=>o.triggerLeaveAnimation(r,t,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(e,t,i,r){let s=this._engine.statesByElement.get(e),o=new Map;if(s){let a=[];if(s.forEach((l,c)=>{if(o.set(c,l.value),this._triggers.has(c)){let u=this.trigger(e,c,pl,r);u&&a.push(u)}}),a.length)return this._engine.markElementAsRemoved(this.id,e,!0,t,o),i&&Ir(a).onDone(()=>this._engine.processLeaveNode(e)),!0}return!1}prepareLeaveAnimationListeners(e){let t=this._elementListeners.get(e),i=this._engine.statesByElement.get(e);if(t&&i){let r=new Set;t.forEach(s=>{let o=s.name;if(r.has(o))return;r.add(o);let l=this._triggers.get(o).fallbackTransition,c=i.get(o)||_g,u=new yl(pl),d=new vl(this.id,o,e);this._engine.totalQueuedPlayers++,this._queue.push({element:e,triggerName:o,transition:l,fromState:c,toState:u,player:d,isFallbackTransition:!0})})}}removeNode(e,t){let i=this._engine;if(e.childElementCount&&this._signalRemovalForInnerTriggers(e,t),this.triggerLeaveAnimation(e,t,!0))return;let r=!1;if(i.totalAnimations){let s=i.players.length?i.playersByQueriedElement.get(e):[];if(s&&s.length)r=!0;else{let o=e;for(;o=o.parentNode;)if(i.statesByElement.get(o)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(e),r)i.markElementAsRemoved(this.id,e,!1,t);else{let s=e[ii];(!s||s===tM)&&(i.afterFlush(()=>this.clearElementCache(e)),i.destroyInnerAnimations(e),i._onRemovalComplete(e,t))}}insertNode(e,t){Bn(e,this._hostClassName)}drainQueuedTransitions(e){let t=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let s=i.element,o=this._elementListeners.get(s);o&&o.forEach(a=>{if(a.name==i.triggerName){let l=kg(s,i.triggerName,i.fromState.value,i.toState.value);l._data=e,Fg(i.player,a.phase,l,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):t.push(i)}),this._queue=[],t.sort((i,r)=>{let s=i.transition.ast.depCount,o=r.transition.ast.depCount;return s==0||o==0?s-o:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(e){this.players.forEach(t=>t.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,e)}},Og=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(e,t)=>{};_onRemovalComplete(e,t){this.onRemovalComplete(e,t)}constructor(e,t,i){this.bodyNode=e,this.driver=t,this._normalizer=i}get queuedPlayers(){let e=[];return this._namespaceList.forEach(t=>{t.players.forEach(i=>{i.queued&&e.push(i)})}),e}createNamespace(e,t){let i=new Pg(e,t,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,t)?this._balanceNamespaceList(i,t):(this.newHostElements.set(t,i),this.collectEnterElement(t)),this._namespaceLookup[e]=i}_balanceNamespaceList(e,t){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let o=!1,a=this.driver.getParentElement(t);for(;a;){let l=r.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,e),o=!0;break}a=this.driver.getParentElement(a)}o||i.unshift(e)}else i.push(e);return r.set(t,e),e}register(e,t){let i=this._namespaceLookup[e];return i||(i=this.createNamespace(e,t)),i}registerTrigger(e,t,i){let r=this._namespaceLookup[e];r&&r.register(t,i)&&this.totalAnimations++}destroy(e,t){e&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(e);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(t),delete this._namespaceLookup[e]}))}_fetchNamespace(e){return this._namespaceLookup[e]}fetchNamespacesByElement(e){let t=new Set,i=this.statesByElement.get(e);if(i){for(let r of i.values())if(r.namespaceId){let s=this._fetchNamespace(r.namespaceId);s&&t.add(s)}}return t}trigger(e,t,i,r){if($d(t)){let s=this._fetchNamespace(e);if(s)return s.trigger(t,i,r),!0}return!1}insertNode(e,t,i,r){if(!$d(t))return;let s=t[ii];if(s&&s.setForRemoval){s.setForRemoval=!1,s.setForMove=!0;let o=this.collectedLeaveElements.indexOf(t);o>=0&&this.collectedLeaveElements.splice(o,1)}if(e){let o=this._fetchNamespace(e);o&&o.insertNode(t,i)}r&&this.collectEnterElement(t)}collectEnterElement(e){this.collectedEnterElements.push(e)}markElementAsDisabled(e,t){t?this.disabledNodes.has(e)||(this.disabledNodes.add(e),Bn(e,vg)):this.disabledNodes.has(e)&&(this.disabledNodes.delete(e),zo(e,vg))}removeNode(e,t,i){if($d(t)){let r=e?this._fetchNamespace(e):null;r?r.removeNode(t,i):this.markElementAsRemoved(e,t,!1,i);let s=this.namespacesByHostElement.get(t);s&&s.id!==e&&s.removeNode(t,i)}else this._onRemovalComplete(t,i)}markElementAsRemoved(e,t,i,r,s){this.collectedLeaveElements.push(t),t[ii]={namespaceId:e,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:s}}listen(e,t,i,r,s){return $d(t)?this._fetchNamespace(e).listen(t,i,r,s):()=>{}}_buildInstruction(e,t,i,r,s){return e.transition.build(this.driver,e.element,e.fromState.value,e.toState.value,i,r,e.fromState.options,e.toState.options,t,s)}destroyInnerAnimations(e){let t=this.driver.query(e,Xd,!0);t.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(t=this.driver.query(e,Eg,!0),t.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(e){let t=this.playersByElement.get(e);t&&t.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(e){let t=this.playersByQueriedElement.get(e);t&&t.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(e=>{if(this.players.length)return Ir(this.players).onDone(()=>e());e()})}processLeaveNode(e){let t=e[ii];if(t&&t.setForRemoval){if(e[ii]=tM,t.namespaceId){this.destroyInnerAnimations(e);let i=this._fetchNamespace(t.namespaceId);i&&i.clearElementCache(e)}this._onRemovalComplete(e,t.setForRemoval)}e.classList?.contains(vg)&&this.markElementAsDisabled(e,!1),this.driver.query(e,iF,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(e=-1){let t=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];Bn(r,rF)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{t=this._flushAnimations(i,e)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],t.length?Ir(t).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(e){throw ML(e)}_flushAnimations(e,t){let i=new gl,r=[],s=new Map,o=[],a=new Map,l=new Map,c=new Map,u=new Set;this.disabledNodes.forEach(F=>{u.add(F);let k=this.driver.query(F,nF,!0);for(let P=0;P<k.length;P++)u.add(k[P])});let d=this.bodyNode,f=Array.from(this.statesByElement.keys()),h=GE(f,this.collectedEnterElements),g=new Map,y=0;h.forEach((F,k)=>{let P=YE+y++;g.set(k,P),F.forEach(Y=>Bn(Y,P))});let m=[],p=new Set,b=new Set;for(let F=0;F<this.collectedLeaveElements.length;F++){let k=this.collectedLeaveElements[F],P=k[ii];P&&P.setForRemoval&&(m.push(k),p.add(k),P.hasAnimation?this.driver.query(k,sF,!0).forEach(Y=>p.add(Y)):b.add(k))}let w=new Map,S=GE(f,Array.from(p));S.forEach((F,k)=>{let P=Sg+y++;w.set(k,P),F.forEach(Y=>Bn(Y,P))}),e.push(()=>{h.forEach((F,k)=>{let P=g.get(k);F.forEach(Y=>zo(Y,P))}),S.forEach((F,k)=>{let P=w.get(k);F.forEach(Y=>zo(Y,P))}),m.forEach(F=>{this.processLeaveNode(F)})});let A=[],D=[];for(let F=this._namespaceList.length-1;F>=0;F--)this._namespaceList[F].drainQueuedTransitions(t).forEach(P=>{let Y=P.player,ne=P.element;if(A.push(Y),this.collectedEnterElements.length){let ee=ne[ii];if(ee&&ee.setForMove){if(ee.previousTriggersValues&&ee.previousTriggersValues.has(P.triggerName)){let Ee=ee.previousTriggersValues.get(P.triggerName),Le=this.statesByElement.get(P.element);if(Le&&Le.has(P.triggerName)){let Ae=Le.get(P.triggerName);Ae.value=Ee,Le.set(P.triggerName,Ae)}}Y.destroy();return}}let he=!d||!this.driver.containsElement(d,ne),De=w.get(ne),Ze=g.get(ne),H=this._buildInstruction(P,i,Ze,De,he);if(H.errors&&H.errors.length){D.push(H);return}if(he){Y.onStart(()=>Ss(ne,H.fromStyles)),Y.onDestroy(()=>Ti(ne,H.toStyles)),r.push(Y);return}if(P.isFallbackTransition){Y.onStart(()=>Ss(ne,H.fromStyles)),Y.onDestroy(()=>Ti(ne,H.toStyles)),r.push(Y);return}let ie=[];H.timelines.forEach(ee=>{ee.stretchStartingKeyframe=!0,this.disabledNodes.has(ee.element)||ie.push(ee)}),H.timelines=ie,i.append(ne,H.timelines);let xe={instruction:H,player:Y,element:ne};o.push(xe),H.queriedElements.forEach(ee=>bn(a,ee,[]).push(Y)),H.preStyleProps.forEach((ee,Ee)=>{if(ee.size){let Le=l.get(Ee);Le||l.set(Ee,Le=new Set),ee.forEach((Ae,St)=>Le.add(St))}}),H.postStyleProps.forEach((ee,Ee)=>{let Le=c.get(Ee);Le||c.set(Ee,Le=new Set),ee.forEach((Ae,St)=>Le.add(St))})});if(D.length){let F=[];D.forEach(k=>{F.push(wL(k.triggerName,k.errors))}),A.forEach(k=>k.destroy()),this.reportError(F)}let T=new Map,O=new Map;o.forEach(F=>{let k=F.element;i.has(k)&&(O.set(k,k),this._beforeAnimationBuild(F.player.namespaceId,F.instruction,T))}),r.forEach(F=>{let k=F.element;this._getPreviousPlayers(k,!1,F.namespaceId,F.triggerName,null).forEach(Y=>{bn(T,k,[]).push(Y),Y.destroy()})});let E=m.filter(F=>WE(F,l,c)),x=new Map;HE(x,this.driver,b,c,bi).forEach(F=>{WE(F,l,c)&&E.push(F)});let j=new Map;h.forEach((F,k)=>{HE(j,this.driver,new Set(F),l,Hd)}),E.forEach(F=>{let k=x.get(F),P=j.get(F);x.set(F,new Map([...k?.entries()??[],...P?.entries()??[]]))});let G=[],Z=[],K={};o.forEach(F=>{let{element:k,player:P,instruction:Y}=F;if(i.has(k)){if(u.has(k)){P.onDestroy(()=>Ti(k,Y.toStyles)),P.disabled=!0,P.overrideTotalTime(Y.totalTime),r.push(P);return}let ne=K;if(O.size>1){let De=k,Ze=[];for(;De=De.parentNode;){let H=O.get(De);if(H){ne=H;break}Ze.push(De)}Ze.forEach(H=>O.set(H,ne))}let he=this._buildAnimation(P.namespaceId,Y,T,s,j,x);if(P.setRealPlayer(he),ne===K)G.push(P);else{let De=this.playersByElement.get(ne);De&&De.length&&(P.parentPlayer=Ir(De)),r.push(P)}}else Ss(k,Y.fromStyles),P.onDestroy(()=>Ti(k,Y.toStyles)),Z.push(P),u.has(k)&&r.push(P)}),Z.forEach(F=>{let k=s.get(F.element);if(k&&k.length){let P=Ir(k);F.setRealPlayer(P)}}),r.forEach(F=>{F.parentPlayer?F.syncPlayerEvents(F.parentPlayer):F.destroy()});for(let F=0;F<m.length;F++){let k=m[F],P=k[ii];if(zo(k,Sg),P&&P.hasAnimation)continue;let Y=[];if(a.size){let he=a.get(k);he&&he.length&&Y.push(...he);let De=this.driver.query(k,Eg,!0);for(let Ze=0;Ze<De.length;Ze++){let H=a.get(De[Ze]);H&&H.length&&Y.push(...H)}}let ne=Y.filter(he=>!he.destroyed);ne.length?dF(this,k,ne):this.processLeaveNode(k)}return m.length=0,G.forEach(F=>{this.players.push(F),F.onDone(()=>{F.destroy();let k=this.players.indexOf(F);this.players.splice(k,1)}),F.play()}),G}afterFlush(e){this._flushFns.push(e)}afterFlushAnimationsDone(e){this._whenQuietFns.push(e)}_getPreviousPlayers(e,t,i,r,s){let o=[];if(t){let a=this.playersByQueriedElement.get(e);a&&(o=a)}else{let a=this.playersByElement.get(e);if(a){let l=!s||s==pl;a.forEach(c=>{c.queued||!l&&c.triggerName!=r||o.push(c)})}}return(i||r)&&(o=o.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),o}_beforeAnimationBuild(e,t,i){let r=t.triggerName,s=t.element,o=t.isRemovalTransition?void 0:e,a=t.isRemovalTransition?void 0:r;for(let l of t.timelines){let c=l.element,u=c!==s,d=bn(i,c,[]);this._getPreviousPlayers(c,u,o,a,t.toState).forEach(h=>{let g=h.getRealPlayer();g.beforeDestroy&&g.beforeDestroy(),h.destroy(),d.push(h)})}Ss(s,t.fromStyles)}_buildAnimation(e,t,i,r,s,o){let a=t.triggerName,l=t.element,c=[],u=new Set,d=new Set,f=t.timelines.map(g=>{let y=g.element;u.add(y);let m=y[ii];if(m&&m.removedBeforeQueried)return new Ar(g.duration,g.delay);let p=y!==l,b=fF((i.get(y)||oF).map(T=>T.getRealPlayer())).filter(T=>{let O=T;return O.element?O.element===y:!1}),w=s.get(y),S=o.get(y),A=jE(this._normalizer,g.keyframes,w,S),D=this._buildPlayer(g,A,b);if(g.subTimeline&&r&&d.add(y),p){let T=new vl(e,a,y);T.setRealPlayer(D),c.push(T)}return D});c.forEach(g=>{bn(this.playersByQueriedElement,g.element,[]).push(g),g.onDone(()=>lF(this.playersByQueriedElement,g.element,g))}),u.forEach(g=>Bn(g,OE));let h=Ir(f);return h.onDestroy(()=>{u.forEach(g=>zo(g,OE)),Ti(l,t.toStyles)}),d.forEach(g=>{bn(r,g,[]).push(h)}),h}_buildPlayer(e,t,i){return t.length>0?this.driver.animate(e.element,t,e.duration,e.delay,e.easing,i):new Ar(e.duration,e.delay)}},vl=class{namespaceId;triggerName;element;_player=new Ar;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(e,t,i){this.namespaceId=e,this.triggerName=t,this.element=i}setRealPlayer(e){this._containsRealPlayer||(this._player=e,this._queuedCallbacks.forEach((t,i)=>{t.forEach(r=>Fg(e,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(e.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(e){this.totalTime=e}syncPlayerEvents(e){let t=this._player;t.triggerCallback&&e.onStart(()=>t.triggerCallback("start")),e.onDone(()=>this.finish()),e.onDestroy(()=>this.destroy())}_queueEvent(e,t){bn(this._queuedCallbacks,e,[]).push(t)}onDone(e){this.queued&&this._queueEvent("done",e),this._player.onDone(e)}onStart(e){this.queued&&this._queueEvent("start",e),this._player.onStart(e)}onDestroy(e){this.queued&&this._queueEvent("destroy",e),this._player.onDestroy(e)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(e){this.queued||this._player.setPosition(e)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(e){let t=this._player;t.triggerCallback&&t.triggerCallback(e)}};function lF(n,e,t){let i=n.get(e);if(i){if(i.length){let r=i.indexOf(t);i.splice(r,1)}i.length==0&&n.delete(e)}return i}function cF(n){return n??null}function $d(n){return n&&n.nodeType===1}function uF(n){return n=="start"||n=="done"}function zE(n,e){let t=n.style.display;return n.style.display=e??"none",t}function HE(n,e,t,i,r){let s=[];t.forEach(l=>s.push(zE(l)));let o=[];i.forEach((l,c)=>{let u=new Map;l.forEach(d=>{let f=e.computeStyle(c,d,r);u.set(d,f),(!f||f.length==0)&&(c[ii]=aF,o.push(c))}),n.set(c,u)});let a=0;return t.forEach(l=>zE(l,s[a++])),o}function GE(n,e){let t=new Map;if(n.forEach(a=>t.set(a,[])),e.length==0)return t;let i=1,r=new Set(e),s=new Map;function o(a){if(!a)return i;let l=s.get(a);if(l)return l;let c=a.parentNode;return t.has(c)?l=c:r.has(c)?l=i:l=o(c),s.set(a,l),l}return e.forEach(a=>{let l=o(a);l!==i&&t.get(l).push(a)}),t}function Bn(n,e){n.classList?.add(e)}function zo(n,e){n.classList?.remove(e)}function dF(n,e,t){Ir(t).onDone(()=>n.processLeaveNode(e))}function fF(n){let e=[];return nM(n,e),e}function nM(n,e){for(let t=0;t<n.length;t++){let i=n[t];i instanceof fl?nM(i.players,e):e.push(i)}}function hF(n,e){let t=Object.keys(n),i=Object.keys(e);if(t.length!=i.length)return!1;for(let r=0;r<t.length;r++){let s=t[r];if(!e.hasOwnProperty(s)||n[s]!==e[s])return!1}return!0}function WE(n,e,t){let i=t.get(n);if(!i)return!1;let r=e.get(n);return r?i.forEach(s=>r.add(s)):e.set(n,i),t.delete(n),!0}var Ho=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(e,t)=>{};constructor(e,t,i){this._driver=t,this._normalizer=i,this._transitionEngine=new Og(e.body,t,i),this._timelineEngine=new Ng(e.body,t,i),this._transitionEngine.onRemovalComplete=(r,s)=>this.onRemovalComplete(r,s)}registerTrigger(e,t,i,r,s){let o=e+"-"+r,a=this._triggerCache[o];if(!a){let l=[],c=[],u=QE(this._driver,s,l,c);if(l.length)throw hL(r,l);a=JL(r,u,this._normalizer),this._triggerCache[o]=a}this._transitionEngine.registerTrigger(t,r,a)}register(e,t){this._transitionEngine.register(e,t)}destroy(e,t){this._transitionEngine.destroy(e,t)}onInsert(e,t,i,r){this._transitionEngine.insertNode(e,t,i,r)}onRemove(e,t,i){this._transitionEngine.removeNode(e,t,i)}disableAnimations(e,t){this._transitionEngine.markElementAsDisabled(e,t)}process(e,t,i,r){if(i.charAt(0)=="@"){let[s,o]=NE(i),a=r;this._timelineEngine.command(s,t,o,a)}else this._transitionEngine.trigger(e,t,i,r)}listen(e,t,i,r,s){if(i.charAt(0)=="@"){let[o,a]=NE(i);return this._timelineEngine.listen(o,t,a,s)}return this._transitionEngine.listen(e,t,i,r,s)}flush(e=-1){this._transitionEngine.flush(e)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(e){this._transitionEngine.afterFlushAnimationsDone(e)}};function pF(n,e){let t=null,i=null;return Array.isArray(e)&&e.length?(t=xg(e[0]),e.length>1&&(i=xg(e[e.length-1]))):e instanceof Map&&(t=xg(e)),t||i?new mF(n,t,i):null}var mF=(()=>{class n{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(t,i,r){this._element=t,this._startStyles=i,this._endStyles=r;let s=n.initialStylesByElement.get(t);s||n.initialStylesByElement.set(t,s=new Map),this._initialStyles=s}start(){this._state<1&&(this._startStyles&&Ti(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Ti(this._element,this._initialStyles),this._endStyles&&(Ti(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(n.initialStylesByElement.delete(this._element),this._startStyles&&(Ss(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Ss(this._element,this._endStyles),this._endStyles=null),Ti(this._element,this._initialStyles),this._state=3)}}return n})();function xg(n){let e=null;return n.forEach((t,i)=>{gF(i)&&(e=e||new Map,e.set(i,t))}),e}function gF(n){return n==="display"||n==="position"}var tf=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(e,t,i,r){this.element=e,this.keyframes=t,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this._buildPlayer(),this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return;this._initialized=!0;let e=this.keyframes;this.domPlayer=this._triggerWebAnimation(this.element,e,this.options),this._finalKeyframe=e.length?e[e.length-1]:new Map;let t=()=>this._onFinish();this.domPlayer.addEventListener("finish",t),this.onDestroy(()=>{this.domPlayer.removeEventListener("finish",t)})}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer.pause()}_convertKeyframesToObject(e){let t=[];return e.forEach(i=>{t.push(Object.fromEntries(i))}),t}_triggerWebAnimation(e,t,i){return e.animate(this._convertKeyframesToObject(t),i)}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}play(){this._buildPlayer(),this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),this.domPlayer.play()}pause(){this.init(),this.domPlayer.pause()}finish(){this.init(),this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish()}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer&&this.domPlayer.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}setPosition(e){this.domPlayer===void 0&&this.init(),this.domPlayer.currentTime=e*this.time}getPosition(){return+(this.domPlayer.currentTime??0)/this.time}get totalTime(){return this._delay+this._duration}beforeDestroy(){let e=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&e.set(r,this._finished?i:zg(this.element,r))}),this.currentSnapshot=e}triggerCallback(e){let t=e==="start"?this._onStartFns:this._onDoneFns;t.forEach(i=>i()),t.length=0}},nf=class{validateStyleProperty(e){return!0}validateAnimatableStyleProperty(e){return!0}containsElement(e,t){return $E(e,t)}getParentElement(e){return Ug(e)}query(e,t,i){return qE(e,t,i)}computeStyle(e,t,i){return zg(e,t)}animate(e,t,i,r,s,o=[]){let a=r==0?"both":"forwards",l={duration:i,delay:r,fill:a};s&&(l.easing=s);let c=new Map,u=o.filter(h=>h instanceof tf);LL(i,r)&&u.forEach(h=>{h.currentSnapshot.forEach((g,y)=>c.set(y,g))});let d=NL(t).map(h=>new Map(h));d=FL(e,d,c);let f=pF(e,d);return new tf(e,d,l,f)}};var qd="@",iM="@.disabled",rf=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(e,t,i,r){this.namespaceId=e,this.delegate=t,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(e){this.delegate.destroyNode?.(e)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}appendChild(e,t){this.delegate.appendChild(e,t),this.engine.onInsert(this.namespaceId,t,e,!1)}insertBefore(e,t,i,r=!0){this.delegate.insertBefore(e,t,i),this.engine.onInsert(this.namespaceId,t,e,r)}removeChild(e,t,i){this.parentNode(t)&&this.engine.onRemove(this.namespaceId,t,this.delegate)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,i,r){this.delegate.setAttribute(e,t,i,r)}removeAttribute(e,t,i){this.delegate.removeAttribute(e,t,i)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,i,r){this.delegate.setStyle(e,t,i,r)}removeStyle(e,t,i){this.delegate.removeStyle(e,t,i)}setProperty(e,t,i){t.charAt(0)==qd&&t==iM?this.disableAnimations(e,!!i):this.delegate.setProperty(e,t,i)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,i,r){return this.delegate.listen(e,t,i,r)}disableAnimations(e,t){this.engine.disableAnimations(e,t)}},Lg=class extends rf{factory;constructor(e,t,i,r,s){super(t,i,r,s),this.factory=e,this.namespaceId=t}setProperty(e,t,i){t.charAt(0)==qd?t.charAt(1)=="."&&t==iM?(i=i===void 0?!0:!!i,this.disableAnimations(e,i)):this.engine.process(this.namespaceId,e,t.slice(1),i):this.delegate.setProperty(e,t,i)}listen(e,t,i,r){if(t.charAt(0)==qd){let s=yF(e),o=t.slice(1),a="";return o.charAt(0)!=qd&&([o,a]=vF(o)),this.engine.listen(this.namespaceId,s,o,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(e,t,i,r)}};function yF(n){switch(n){case"body":return document.body;case"document":return document;case"window":return window;default:return n}}function vF(n){let e=n.indexOf("."),t=n.substring(0,e),i=n.slice(e+1);return[t,i]}var sf=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(e,t,i){this.delegate=e,this.engine=t,this._zone=i,t.onRemovalComplete=(r,s)=>{s?.removeChild(null,r)}}createRenderer(e,t){let i="",r=this.delegate.createRenderer(e,t);if(!e||!t?.data?.animation){let c=this._rendererCache,u=c.get(r);if(!u){let d=()=>c.delete(r);u=new rf(i,r,this.engine,d),c.set(r,u)}return u}let s=t.id,o=t.id+"-"+this._currentId;this._currentId++,this.engine.register(o,e);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(s,o,e,c.name,c)};return t.data.animation.forEach(a),new Lg(this,o,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(e,t,i){if(e>=0&&e<this._microtaskId){this._zone.run(()=>t(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(s=>{let[o,a]=s;o(a)}),this._animationCallbacksBuffer=[]})}),r.push([t,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(e){this.engine.flush(),this.delegate.componentReplaced?.(e)}};var xF=(()=>{class n extends Ho{constructor(t,i,r){super(t,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||n)(ke(un),ke(Es),ke(Ms))};static \u0275prov=Re({token:n,factory:n.\u0275fac})}return n})();function SF(){return new Zd}function EF(n,e,t){return new sf(n,e,t)}var sM=[{provide:Ms,useFactory:SF},{provide:Ho,useClass:xF},{provide:sr,useFactory:EF,deps:[zc,Ho,Tt]}],rM=[{provide:Es,useFactory:()=>new nf},{provide:Lh,useValue:"BrowserAnimations"},...sM],MF=[{provide:Es,useClass:Bg},{provide:Lh,useValue:"NoopAnimations"},...sM],oM=(()=>{class n{static withConfig(t){return{ngModule:n,providers:t.disableAnimations?MF:rM}}static \u0275fac=function(i){return new(i||n)};static \u0275mod=ur({type:n});static \u0275inj=lr({providers:rM,imports:[Gc]})}return n})();var aM={providers:[Ec(Gc),Ec(oM),Ux(Bx),co,uo,Bo]};var of=class n{animationCompleteSubject=new kt(!1);animationComplete$=this.animationCompleteSubject.asObservable();setAnimationComplete(){this.animationCompleteSubject.next(!0)}resetAnimation(){this.animationCompleteSubject.next(!1)}getCurrentState(){return this.animationCompleteSubject.value}static \u0275fac=function(t){return new(t||n)};static \u0275prov=Re({token:n,factory:n.\u0275fac,providedIn:"root"})};var af=class n{constructor(e){this.animationState=e}title="ige511-web";onAnimationComplete(){let e=document.getElementById("static-content");e&&e.classList.add("hidden"),this.animationState.setAnimationComplete()}static \u0275fac=function(t){return new(t||n)(Fi(of))};static \u0275cmp=fi({type:n,selectors:[["app-root"]],decls:14,vars:3,consts:[["id","static-content"],[3,"animationComplete"],[1,"content-wrapper"]],template:function(t,i){t&1&&(ge(0,"main")(1,"div",0)(2,"h1"),Se(3,"Bienvenue sur mon site"),be()(),ge(4,"app-three-box",1),Ks("animationComplete",function(){return i.onAnimationComplete()}),be(),ge(5,"div",2),A0(6,"async"),Yn(7,"app-header"),ge(8,"h1"),Se(9,"rdvptrwjeiptwpes"),be(),Yn(10,"app-changelog"),ge(11,"footer")(12,"p"),Se(13,"\xA9 Roussel roua4409"),be()()()()),t&2&&(Z_(5),Qh("@contentFade",I0(6,1,i.animationState.animationComplete$)?"visible":"hidden"))},dependencies:[Uc,G0,co,uo,Bo],styles:["body[_ngcontent-%COMP%]{margin:0;display:flex;height:100vh}.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{position:fixed;top:0;height:100%;width:200px;background-color:#ff00004d}.left[_ngcontent-%COMP%]{left:0}.right[_ngcontent-%COMP%]{right:0}.center[_ngcontent-%COMP%]{margin-left:20%;margin-right:20%;width:60%;background-color:#ffff0050;height:100%}@media (max-width: 800px){.left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%]{display:none}.center[_ngcontent-%COMP%]{margin:0;width:100%}}#static-content[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);z-index:10;text-align:center;font-size:2rem;color:#333;transition:opacity 1s ease-out}#static-content.hidden[_ngcontent-%COMP%]{opacity:0;pointer-events:none}"],data:{animation:[CE("contentFade",[pg("hidden",Vo({opacity:.001,transform:"translateY(20px)",background:"none"})),pg("visible",Vo({opacity:1,transform:"translateY(0)",background:"none"})),IE("hidden => visible",[DE("0.8s cubic-bezier(0.6, 0.0, 0.2, 1)")])])]}})};J0(af,aM).catch(n=>console.error(n));
