import{a as me}from"./chunk-2BGW67JF.js";import{$ as oe,A as te,Aa as pe,B as R,Ba as ge,C as v,E as ie,F as ne,H as U,I as F,L as u,M as l,N as L,P as D,Q as y,R as re,S as p,T as w,U as x,V as I,W as s,X as a,Y as S,Z as O,_ as g,a as h,aa as d,b as m,ba as C,ca as N,e as J,ea as se,fa as ae,ga as le,h as Q,ha as $,ia as ue,ja as de,k as ee,na as ce,oa as he,pa as W,u as B,w as H,x as _,ya as fe,z as E}from"./chunk-H2GG7B3F.js";var Ae=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(l(L),l(U))},e.\u0275dir=v({type:e});let t=e;return t})(),Be=(()=>{let e=class e extends Ae{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=ne(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[D]});let t=e;return t})(),Me=new _("");var He={provide:Me,useExisting:B(()=>G),multi:!0};function Re(){let t=W()?W().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ue=new _(""),G=(()=>{let e=class e extends Ae{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Re())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(l(L),l(U),l(Ue,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&O("input",function(c){return o._handleInput(c.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(c){return o._compositionEnd(c.target.value)})},features:[$([He]),D]});let t=e;return t})();var Le=new _(""),$e=new _("");function Ee(t){return t!=null}function Fe(t){return de(t)?J(t):t}function we(t){let e={};return t.forEach(i=>{e=i!=null?h(h({},e),i):e}),Object.keys(e).length===0?null:e}function xe(t,e){return e.map(i=>i(t))}function We(t){return!t.validate}function Ie(t){return t.map(e=>We(e)?e:i=>e.validate(i))}function qe(t){if(!t)return null;let e=t.filter(Ee);return e.length==0?null:function(i){return we(xe(i,e))}}function Se(t){return t!=null?qe(Ie(t)):null}function ze(t){if(!t)return null;let e=t.filter(Ee);return e.length==0?null:function(i){let n=xe(i,e).map(Fe);return ee(n).pipe(Q(we))}}function Oe(t){return t!=null?ze(Ie(t)):null}function _e(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Ze(t){return t._rawValidators}function Xe(t){return t._rawAsyncValidators}function q(t){return t?Array.isArray(t)?t:[t]:[]}function P(t,e){return Array.isArray(t)?t.includes(e):t===e}function ve(t,e){let i=q(e);return q(t).forEach(r=>{P(i,r)||i.push(r)}),i}function ye(t,e){return q(e).filter(i=>!P(t,i))}var T=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Se(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Oe(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},z=class extends T{get formDirective(){return null}get path(){return null}},M=class extends T{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},Z=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Ye={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},zt=m(h({},Ye),{"[class.ng-submitted]":"isSubmitted"}),Ne=(()=>{let e=class e extends Z{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(l(M,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&re("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[D]});let t=e;return t})();var b="VALID",k="INVALID",V="PENDING",A="DISABLED";function Ke(t){return(j(t)?t.validators:t)||null}function Je(t){return Array.isArray(t)?Se(t):t||null}function Qe(t,e){return(j(e)?e.asyncValidators:t)||null}function et(t){return Array.isArray(t)?Oe(t):t||null}function j(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var X=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===b}get invalid(){return this.status===k}get pending(){return this.status==V}get disabled(){return this.status===A}get enabled(){return this.status!==A}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(ve(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(ve(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ye(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ye(e,this._rawAsyncValidators))}hasValidator(e){return P(this._rawValidators,e)}hasAsyncValidator(e){return P(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=V,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=A,this.errors=null,this._forEachChild(n=>{n.disable(m(h({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(m(h({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=b,this._forEachChild(n=>{n.enable(m(h({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(m(h({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===b||this.status===V)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?A:b}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=V,this._hasOwnPendingAsyncValidator=!0;let i=Fe(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new F,this.statusChanges=new F}_calculateStatus(){return this._allControlsDisabled()?A:this.errors?k:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(V)?V:this._anyControlsHaveStatus(k)?k:b}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){j(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Je(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=et(this._rawAsyncValidators)}};var ke=new _("CallSetDisabledState",{providedIn:"root",factory:()=>Y}),Y="always";function tt(t,e){return[...e.path,t]}function it(t,e,i=Y){rt(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ot(t,e),at(t,e),st(t,e),nt(t,e)}function Ce(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function nt(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function rt(t,e){let i=Ze(t);e.validator!==null?t.setValidators(_e(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Xe(t);e.asyncValidator!==null?t.setAsyncValidators(_e(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ce(e._rawValidators,r),Ce(e._rawAsyncValidators,r)}function ot(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Pe(t,e)})}function st(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Pe(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function Pe(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function at(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function lt(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function ut(t){return Object.getPrototypeOf(t.constructor)===Be}function dt(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===G?i=o:ut(o)?n=o:r=o}),r||n||i||null}function Ve(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function De(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var ct=class extends X{constructor(e=null,i,n){super(Ke(i),Qe(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),j(i)&&(i.nonNullable||i.initialValueIsDefault)&&(De(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ve(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ve(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){De(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ht={provide:M,useExisting:B(()=>K)},be=Promise.resolve(),K=(()=>{let e=class e extends M{constructor(n,r,o,f,c,Ge){super(),this._changeDetectorRef=c,this.callSetDisabledState=Ge,this.control=new ct,this._registered=!1,this.name="",this.update=new F,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=dt(this,f)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),lt(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){it(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){be.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&he(r);be.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?tt(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(l(z,9),l(Le,10),l($e,10),l(Me,10),l(ce,8),l(ke,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[E.None,"disabled","isDisabled"],model:[E.None,"ngModel","model"],options:[E.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[$([ht]),D,ie]});let t=e;return t})();var ft=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=H({});let t=e;return t})();var Te=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:ke,useValue:n.callSetDisabledState??Y}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=R({type:e}),e.\u0275inj=H({imports:[ft]});let t=e;return t})();function gt(t,e){t&1&&S(0,"span",7)}function mt(t,e){t&1&&(s(0,"span",13),d(1," search "),a())}function _t(t,e){}function vt(t,e){if(t&1&&(s(0,"span",21),d(1),a()),t&2){let i=e.$implicit;u(),N(" ",i," ")}}function yt(t,e){if(t&1&&x(0,vt,2,1,"span",21,w),t&2){let i=g().$implicit;I(i.package.keywords)}}function Ct(t,e){if(t&1&&(s(0,"strong"),d(1),a()),t&2){let i=g().$implicit;u(),C(i.package.publisher.username)}}function Vt(t,e){if(t&1&&(s(0,"strong"),d(1),a()),t&2){let i,n=e.$implicit;u(),C((i=n.name)!==null&&i!==void 0?i:n.username)}}function Dt(t,e){if(t&1&&x(0,Vt,2,1,"strong",null,w),t&2){let i=g().$implicit;I(i.package.maintainers.slice(0,3))}}function bt(t,e){if(t&1&&(s(0,"a",14)(1,"h3",16),d(2),a(),s(3,"p",17),d(4),a(),s(5,"div",18),y(6,yt,2,0),a(),S(7,"br",19),s(8,"div",20),y(9,Ct,2,1,"strong")(10,Dt,2,0),s(11,"span",17),d(12,"published"),a(),s(13,"span",17),d(14),a(),s(15,"span"),d(16),a()()()),t&2){let i,n,r=e.$implicit,o=g(3);oe("routerLink","/package/",r.package.name,"/",r.package.version,""),u(2),C(r.package.name),u(2),N(" ",r.package.description," "),u(2),p(6,r.package.keywords?6:-1),u(3),p(9,r.package.publisher&&(r.package.maintainers==null||r.package.maintainers.length==0)?9:-1),u(),p(10,r.package.maintainers?10:-1),u(4),C(o.formatVersion((i=r.package.version)!==null&&i!==void 0?i:r.package.versions)),u(2),C(o.formatAgo((n=r.package.date)!==null&&n!==void 0?n:r.package.time.modified))}}function At(t,e){if(t&1&&(x(0,bt,17,10,"a",14,w),s(2,"span",15),d(3),a()),t&2){let i=g(2);I(i.items),u(3),N("Found ",i.total," packages")}}function Mt(t,e){if(t&1&&(s(0,"div",9),y(1,_t,0,0)(2,At,4,1),a()),t&2){let i=g();u(),p(1,i.total==0?1:2)}}var ei=(()=>{let e=class e{constructor(n,r,o){this.router=n,this.activatedRoute=r,this.sdkService=o,this.search="",this.fetching=!1,this.total=-1,this.items=[]}ngOnInit(){this.subscription=this.activatedRoute.queryParams.subscribe(n=>{n.q&&(this.search=n.q,this.fetching=!1,this.fetch())})}ngOnDestroy(){this.subscription.unsubscribe()}submit(){this.total=-1,this.items=[],this.searchSubscription.unsubscribe(),this.router.navigate(["/"],{queryParams:{q:this.search}})}formatVersion(n){return this.sdkService.functions.formatVersion(n)}formatAgo(n){return this.sdkService.functions.formatAgo(n)}fetch(){this.search.length<2||(this.fetching=!0,this.subscription=this.sdkService.api.search("npm",this.search).subscribe({next:n=>{this.items=n.objects,this.total=n.total,this.fetching=!1},error:()=>{this.fetching=!1}}))}};e.\u0275fac=function(r){return new(r||e)(l(pe),l(fe),l(me))},e.\u0275cmp=te({type:e,selectors:[["app-home"]],hostAttrs:[1,"flex","flex-col","items-center","gap-20","w-full","min-h-full"],standalone:!0,features:[ue],decls:19,vars:3,consts:[[1,"w-full","min-h-[10vh]"],[1,"relative","text-4xl","xl:text-6xl","2xl:text-8xl","font-bold","roboto-bold","z-0"],["aria-hidden","true",1,"h-full","text-transparent","bg-clip-text","bg-gradient-to-r","from-purple-400","to-pink-600","absolute","blur-3xl","select-none","z-0"],[1,"h-full","text-transparent","bg-clip-text","bg-gradient-to-r","from-purple-400","to-pink-600","z-0"],[1,"flex","flex-col","rounded-btn","bg-base-100","w-full","max-w-[600px]","sticky","top-4","transition-all","shadow-xl","z-10","hover:shadow-2xl","focus:shadow-2xl"],[1,"flex","flex-nowrap","items-center","gap-4","h-[52px]","px-4"],[1,"w-[24px]","h-[24px]","flex","items-center","justify-center"],[1,"loading","loading-spinner","loading-sm"],["type","text","placeholder","Search packages",1,"w-full","h-full","outline-none","bg-transparent","placeholder:text-gray-400",3,"ngModelChange","keyup.enter","ngModel"],[1,"flex","flex-col","w-full","max-w-[600px]"],[1,"mt-auto","pt-10","pb-4"],[1,"container","mx-auto"],["href","https://heymirza.ir"],[1,"material-icons-round","text-gray-400"],[1,"flex","flex-col","gap-2","p-4","border-b","transition-all","hover:shadow-2xl","hover:border-transparent","hover:rounded-btn",3,"routerLink"],[1,"text-xs","text-center","p-4"],[1,"font-bold","roboto-bold"],[1,"text-gray-400"],[1,"flex","flex-wrap","gap-1"],[1,"block","h-[32px]"],[1,"flex","flex-nowrap","items-center","gap-1","text-sm"],[1,"bg-base-200","rounded-btn","py-1","px-2","text-xs"]],template:function(r,o){r&1&&(S(0,"div",0),s(1,"div",1)(2,"h1",2),d(3," Doting Registry "),a(),s(4,"h1",3),d(5," Doting Registry "),a()(),s(6,"div",4)(7,"div",5)(8,"div",6),y(9,gt,1,0,"span",7)(10,mt,2,0),a(),s(11,"input",8),le("ngModelChange",function(c){return ae(o.search,c)||(o.search=c),c}),O("keyup.enter",function(){return o.submit()}),a()()(),y(12,Mt,3,1,"div",9),s(13,"footer",10)(14,"div",11)(15,"span"),d(16,"Created by "),s(17,"a",12),d(18,"Mirza"),a()()()()),r&2&&(u(9),p(9,o.fetching?9:10),u(2),se("ngModel",o.search),u(),p(12,o.total!=-1?12:-1))},dependencies:[Te,G,Ne,K,ge],encapsulation:2});let t=e;return t})();export{ei as HomeComponent};
