(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_25_1__articulate_design-system-to-988281"],{98998(bs){var No="Expected a function",Ve=NaN,ha="[object Symbol]",Fo=/^\s+|\s+$/g,lc=/^[-+]0x[0-9a-f]+$/i,Lt=/^0b[01]+$/i,jr=/^0o[0-7]+$/i,Ho=parseInt,Ue=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,Vo=typeof self=="object"&&self&&self.Object===Object&&self,Uo=Ue||Vo||Function("return this")(),ie=Object.prototype,Da=ie.toString,Ko=Math.max,dc=Math.min,Na=function(){return Uo.Date.now()};function ct(gr,Yr,Ke){var ga,tr,re,je,ye,xe,Ha=0,Go=!1,Re=!1,Pe=!0;if(typeof gr!="function")throw new TypeError(No);Yr=Bt(Yr)||0,Fa(Ke)&&(Go=!!Ke.leading,Re="maxWait"in Ke,re=Re?Ko(Bt(Ke.maxWait)||0,Yr):re,Pe="trailing"in Ke?!!Ke.trailing:Pe);function i(Br){var We=ga,Va=tr;return ga=tr=void 0,Ha=Br,je=gr.apply(Va,We),je}function u(Br){return Ha=Br,ye=setTimeout(Ia,Yr),Go?i(Br):je}function it(Br){var We=Br-xe,Va=Br-Ha,Yo=Yr-We;return Re?dc(Yo,re-Va):Yo}function st(Br){var We=Br-xe,Va=Br-Ha;return xe===void 0||We>=Yr||We<0||Re&&Va>=re}function Ia(){var Br=Na();if(st(Br))return Ot(Br);ye=setTimeout(Ia,it(Br))}function Ot(Br){return ye=void 0,Pe&&ga?i(Br):(ga=tr=void 0,je)}function qo(){ye!==void 0&&clearTimeout(ye),Ha=0,ga=xe=tr=ye=void 0}function hc(){return ye===void 0?je:Ot(Na())}function s(){var Br=Na(),We=st(Br);if(ga=arguments,tr=this,xe=Br,We){if(ye===void 0)return u(xe);if(Re)return ye=setTimeout(Ia,Yr),i(xe)}return ye===void 0&&(ye=setTimeout(Ia,Yr)),je}return s.cancel=qo,s.flush=hc,s}function Fa(gr){var Yr=typeof gr;return!!gr&&(Yr=="object"||Yr=="function")}function Wo(gr){return!!gr&&typeof gr=="object"}function uc(gr){return typeof gr=="symbol"||Wo(gr)&&Da.call(gr)==ha}function Bt(gr){if(typeof gr=="number")return gr;if(uc(gr))return Ve;if(Fa(gr)){var Yr=typeof gr.valueOf=="function"?gr.valueOf():gr;gr=Fa(Yr)?Yr+"":Yr}if(typeof gr!="string")return gr===0?gr:+gr;gr=gr.replace(Fo,"");var Ke=Lt.test(gr);return Ke||jr.test(gr)?Ho(gr.slice(2),Ke?2:8):lc.test(gr)?Ve:+gr}bs.exports=ct},12477(bs,No,Ve){"use strict";Ve.r(No),Ve.d(No,{ARC_DROPDOWN_SUBMENU_OMIT_KEYS:()=>Xd,ARC_MENU_DELAY_MS:()=>Gi,Arc:()=>Sb,ArcAbstractFlexLayouts:()=>Yr,ArcAbstractGapSizes:()=>Wo,ArcAbstractIconSizes:()=>Fa,ArcAbstractOrientations:()=>Ke,ArcAbstractPopoverActions:()=>ct,ArcAbstractPopoverModes:()=>Na,ArcAbstractTextLayouts:()=>gr,ArcAbstractTextOverflows:()=>Bt,ArcAbstractTextSizes:()=>uc,ArcAvatar:()=>jc,ArcAvatarColors:()=>Bs,ArcAvatarColorsReserved:()=>uh,ArcAvatarOverflow:()=>Mg,ArcAvatarOverflowSizes:()=>mh,ArcAvatarPile:()=>Wh,ArcAvatarPileSizes:()=>fh,ArcAvatarSizes:()=>hh,ArcAvatarText:()=>Rc,ArcAvatarTextGapSizes:()=>gh,ArcAvatarTextOverflows:()=>ph,ArcAvatarTextSizes:()=>vh,ArcBadge:()=>Zg,ArcBadgeColors:()=>Vg,ArcBadgeContrasts:()=>Gg,ArcBadgeCount:()=>ip,ArcBadgeCountColors:()=>Ug,ArcBadgeCountContrasts:()=>op,ArcBadgeCountShapes:()=>np,ArcBadgeCountSizes:()=>ap,ArcBadgeCountVariants:()=>tp,ArcBadgeLayouts:()=>Wg,ArcBadgeSizes:()=>Kg,ArcBadgeVariants:()=>qg,ArcBanner:()=>Cp,ArcBannerActionPlacements:()=>bp,ArcBannerAlignments:()=>$p,ArcBannerDefaults:()=>ja,ArcBannerDensities:()=>fp,ArcBannerLayouts:()=>mp,ArcBannerSchemes:()=>yp,ArcBannerVariants:()=>kp,ArcButton:()=>Er,ArcButtonHierarchies:()=>kl,ArcButtonLayouts:()=>U0,ArcButtonPopoverActions:()=>W0,ArcButtonSchemes:()=>Qc,ArcButtonShadows:()=>K0,ArcButtonShapes:()=>H0,ArcButtonSizes:()=>V0,ArcButtonVariants:()=>xl,ArcCheckbox:()=>Ol,ArcCheckboxBar:()=>Op,ArcCheckboxBarLayouts:()=>Mp,ArcCheckboxBarOption:()=>Bp,ArcCheckboxBarSizes:()=>Lp,ArcCheckboxLayouts:()=>Tp,ArcCheckboxSizes:()=>jp,ArcCheckboxVariants:()=>Rp,ArcColorAllTools:()=>Dl,ArcColorPalette:()=>Bn,ArcColorPaletteAddFlows:()=>Fp,ArcColorPicker:()=>at,ArcColorPickerDefaults:()=>Pa,ArcColorPickerModes:()=>Dp,ArcColorSimpleTools:()=>Nl,ArcColorSwatch:()=>Ti,ArcColorSwatchKinds:()=>Np,ArcColorValueFormats:()=>Lb,ArcDropdownMenu:()=>Qn,ArcIcon:()=>ir,ArcIconText:()=>ae,ArcIconTextVariants:()=>$0,ArcInputAction:()=>ru,ArcLabel:()=>Xa,ArcLabelContent:()=>Ja,ArcLabelLayouts:()=>Sp,ArcLink:()=>rm,ArcLinkVariants:()=>Qf,ArcModal:()=>xm,ArcModalAlert:()=>wm,ArcModalAlertDefaults:()=>wa,ArcModalAlertVariants:()=>om,ArcModalBackdropColors:()=>nm,ArcModalBodyPaddings:()=>cm,ArcModalCloseReasons:()=>sm,ArcModalCommonDefaults:()=>ge,ArcModalCommonVariants:()=>am,ArcModalConfirm:()=>iu,ArcModalConfirmDefaults:()=>Ba,ArcModalConfirmVariants:()=>tm,ArcModalSchemes:()=>em,ArcModalSizes:()=>im,ArcPopover:()=>ma,ArcPopoverActions:()=>Gh,ArcPopoverAnchors:()=>Lc,ArcPopoverBoundaries:()=>Bc,ArcPopoverButton:()=>to,ArcPopoverDefaults:()=>ve,ArcPopoverDensities:()=>Zs,ArcPopoverModes:()=>Pc,ArcPopoverSchemes:()=>Mc,ArcPopoverVariants:()=>Ys,ArcPopoverVariantsWithOutline:()=>qh,ArcRadio:()=>su,ArcRadioBar:()=>Tm,ArcRadioBarLayouts:()=>Em,ArcRadioBarOption:()=>_m,ArcRadioBarSizes:()=>Im,ArcRadioLayouts:()=>Am,ArcRadioSizes:()=>Sm,ArcSVGGradientDef:()=>Hs,ArcSearch:()=>mu,ArcSearchLayouts:()=>Gm,ArcSearchSizes:()=>qm,ArcSearchVariants:()=>Ym,ArcSelect:()=>ib,ArcSelectLayouts:()=>Qm,ArcSelectSizes:()=>rb,ArcSelectVariants:()=>eb,ArcSlider:()=>Hd,ArcSliderLabelPlacements:()=>lf,ArcSliderLayouts:()=>nf,ArcSliderSizes:()=>cf,ArcSliderVariants:()=>sf,ArcSwitch:()=>ub,ArcSwitchLabelPositions:()=>jt,ArcSwitchSizes:()=>sb,ArcSwitchStates:()=>qr,ArcSystemAIGradients:()=>Ko,ArcSystemAlignments:()=>Vo,ArcSystemColors:()=>Da,ArcSystemGradients:()=>dc,ArcSystemHierarchies:()=>Ho,ArcSystemLayouts:()=>Ue,ArcSystemLineHeights:()=>Uo,ArcSystemSchemes:()=>ha,ArcSystemShadows:()=>Fo,ArcSystemShapes:()=>Lt,ArcSystemSizes:()=>ie,ArcSystemSurfaces:()=>lc,ArcSystemVariants:()=>jr,ArcTextAlignments:()=>yb,ArcTextBodyElements:()=>Su,ArcTextBodySizes:()=>bb,ArcTextBodyVariants:()=>$b,ArcTextElements:()=>zu,ArcTextHeadingElements:()=>Au,ArcTextHeadingSizes:()=>vb,ArcTextHeadingVariants:()=>mb,ArcTextInput:()=>wo,ArcTextInputLayouts:()=>ef,ArcTextInputSizes:()=>af,ArcTextInputTypes:()=>of,ArcTextInputVariants:()=>tf,ArcTextKinds:()=>hb,ArcTextLineHeights:()=>xb,ArcTextSchemes:()=>gb,ArcTextSubheadingSizes:()=>fb,ArcTextTitleSizes:()=>pb,ArcToast:()=>Uu,ArcToastDefaults:()=>Ou,ArcToastPlacements:()=>Bu,ArcToastPopoverActions:()=>Eb,ArcToastPopoverModes:()=>Lu,ArcToastProgressBarVariants:()=>Ib,ArcToastSchemes:()=>ju,ArcToastSeverities:()=>Ru,ArcToastSizes:()=>Pu,ArcToastVariants:()=>Mu,ArcTooltip:()=>fn,ArcTooltipDefaults:()=>qe,DeprecatedButtonVariants:()=>ri,EPS_LOOSE:()=>go,EPS_MID:()=>_n,EPS_STRICT:()=>bi,IS_FLOATING:()=>Xs,SLIDER_TOKENS:()=>Od,SLIDER_TOKENS_REGEX:()=>Dd,SVGLogoArticulate:()=>wc,SVGLogoProductAI:()=>Cc,SVGLogoProductPeek:()=>Ac,SVGLogoProductReach:()=>Sc,SVGLogoProductReview:()=>zc,SVGLogoProductRise:()=>Ec,SVGLogoProductStoryline:()=>Ic,SVGLogoProductStudio:()=>_c,StorageType:()=>Do,adoptStyles:()=>lr,adoptThemeTokens:()=>ih,anchorNameRegistry:()=>Gt,assignRef:()=>je,bindDelegatedEvents:()=>bl,canonicalizeToHsv:()=>Pn,clamp:()=>ye,clampIt:()=>Q,colorValueEquals:()=>Mn,compositeRgbaOver:()=>Xl,createEmptyRect:()=>Bb,css:()=>s,cssFeatures:()=>rn,decodeDeprecatedButtonVariant:()=>Z0,didElementRectChange:()=>Go,encodeDeprecatedButtonVariant:()=>X0,extractTextFromReactNode:()=>Kt,formatAlphaCss:()=>jn,formatAlphaPercent:()=>At,formatAnchorName:()=>Dc,getArcColorAs:()=>nd,getArcColorData:()=>et,getArcColorParts:()=>od,getArcColorValue:()=>cd,getArcContrastColor:()=>Ii,getColorName:()=>Rn,getCssColor:()=>Se,getElementByIdScoped:()=>Pe,getPlainLabel:()=>ku,getPreferredAnchorForTooltipId:()=>Xc,getResolvedHierarchy:()=>Sl,getResolvedScheme:()=>zl,getResolvedShape:()=>wl,getResolvedVariant:()=>Al,getSelectedColorMeta:()=>_i,getShadowRootOrDocument:()=>Re,getSvgGradientCoords:()=>Fs,handlePopover:()=>rl,handleToast:()=>Du,hasBaseSelectSupport:()=>bu,hasEmptyValueOption:()=>xu,hasMatchingColorValue:()=>Ei,hasNativeAnchorPositioning:()=>Oc,hslToRgbaData:()=>Wl,hsvDeltaOK:()=>ki,hsvToRgbaData:()=>Xe,isDeprecatedButtonVariant:()=>ei,isDifferent:()=>xe,isGroupLegendItem:()=>$u,isHexLike:()=>Ql,isHsvLike:()=>ed,isObject:()=>Ns,isRgbaLike:()=>rd,isSame:()=>Ha,isSelectGroup:()=>ic,isSelectedColorMatch:()=>sd,isString:()=>ht,joinArray:()=>Wt,logError:()=>p0,logMessage:()=>g0,logSkippedTopLevelItem:()=>yu,logWarning:()=>sl,makeHtmlId:()=>kh,makeRandomColor:()=>id,mapDeprecated:()=>ga,noTailAnchors:()=>Js,normalizeAnchorName:()=>qt,normalizeByte:()=>Jr,normalizeColorValue:()=>St,normalizeHue:()=>Ul,normalizeUnit:()=>Kl,oklchToRgbaData:()=>Yl,parseAlphaInput:()=>ad,parseByte:()=>po,parseCssColorToRgba:()=>Pr,parseHexStringToRgba:()=>Jl,percentsFromValue:()=>Vl,pickFromList:()=>tr,pickFromListByKeys:()=>re,relativeLuminance:()=>Zl,renderableOption:()=>Tt,resolveTailMetrics:()=>Qs,rgbaBytesEqual:()=>yi,rgbaDeltaOK:()=>Tn,rgbaEchoDeltaOK:()=>xi,rgbaToHslData:()=>Gl,rgbaToHsvData:()=>vo,rgbaToOklchData:()=>ql,roundIt:()=>ya,shareAdoptedStyles:()=>ch,snapIt:()=>Hl,splitString:()=>il,syncAnchorName:()=>el,toHEX:()=>De,toHSL:()=>Si,toLinearChannel:()=>Qa,toOKLCH:()=>zi,toPx:()=>Yt,toRGB:()=>rt,unbindDelegatedEvents:()=>P0,useIsoLayoutEffect:()=>en,useStableId:()=>Rr,useStorage:()=>Mb});const ha=["auto","light","dark","inverse"],Fo=["none","sm","md","lg","xl"],lc=["primary","secondary","inset","raised","floating"],Lt=["circle","round","pill","square","narrow"],jr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Ho=["primary","secondary","tertiary","plain","link-style"],Ue=["hug","fill","icon","gutter","inline"],Vo=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],Uo=["inherit","tight","standard","loose"],ie=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Da=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Ko=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],dc=[...Ko],Na=["","auto","manual"],ct=["toggle","show","hide"],Fa=["inherit","xl","lg","md","sm","xs"],Wo=["inherit","lg","md","sm"],uc=["inherit","md","sm"],Bt=["inherit","wrap","truncate"],gr=["gutter","inline"],Yr=["hug","fill"],Ke=["horizontal","vertical"],ga=(r,e)=>e[r]||r,tr=(r,e)=>r.filter(a=>e.includes(a)),re=(r,e)=>e.filter(a=>r.includes(a)),je=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},ye=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),xe=(r,e)=>r!==e,Ha=(r,e)=>r===e,Go=({a:r,b:e})=>xe(r?.top,e?.top)||xe(r?.left,e?.left)||xe(r?.width,e?.width)||xe(r?.height,e?.height);function Re(r){if(!(r instanceof Node))return null;const e=r.getRootNode();return e instanceof ShadowRoot||e instanceof Document?e:null}function Pe(r,e){if(typeof document>"u")return null;const a=e==null?document:Re(e)??document,t=a.getElementById(r);return t||(a!==document?document.getElementById(r):null)}var i=Ve(93572),u=Ve(80588);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,st=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ia=Symbol(),Ot=new WeakMap;class qo{constructor(e,a,t){if(this._$cssResult$=!0,t!==Ia)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(st&&e===void 0){const t=a!==void 0&&a.length===1;t&&(e=Ot.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&Ot.set(a,e))}return e}toString(){return this.cssText}}const hc=r=>new qo(typeof r=="string"?r:r+"",void 0,Ia),s=(r,...e)=>{const a=r.length===1?r[0]:e.reduce(((t,o,n)=>t+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1]),r[0]);return new qo(a,r,Ia)},Br=(r,e)=>{if(st)r.adoptedStyleSheets=e.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of e){const t=document.createElement("style"),o=it.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=a.cssText,r.appendChild(t)}},We=st?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return hc(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Va,defineProperty:Yo,getOwnPropertyDescriptor:Yu,getOwnPropertyNames:Zu,getOwnPropertySymbols:Xu,getPrototypeOf:Ju}=Object,Zo=globalThis,$s=Zo.trustedTypes,Qu=$s?$s.emptyScript:"",rh=Zo.reactiveElementPolyfillSupport,Dt=(r,e)=>r,gc={toAttribute(r,e){switch(e){case Boolean:r=r?Qu:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},ys=(r,e)=>!Va(r,e),xs={attribute:!0,type:String,converter:gc,reflect:!1,useDefault:!1,hasChanged:ys};Symbol.metadata??=Symbol("metadata"),Zo.litPropertyMetadata??=new WeakMap;class lt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=xs){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,a);o!==void 0&&Yo(this.prototype,e,o)}}static getPropertyDescriptor(e,a,t){const{get:o,set:n}=Yu(this.prototype,e)??{get(){return this[a]},set(c){this[a]=c}};return{get:o,set(c){const l=o?.call(this);n?.call(this,c),this.requestUpdate(e,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xs}static _$Ei(){if(this.hasOwnProperty(Dt("elementProperties")))return;const e=Ju(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Dt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Dt("properties"))){const a=this.properties,t=[...Zu(a),...Xu(a)];for(const o of t)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[t,o]of a)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[a,t]of this.elementProperties){const o=this._$Eu(a,t);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)a.unshift(We(o))}else e!==void 0&&a.push(We(e));return a}static _$Eu(e,a){const t=a.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const t of a.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Br(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,t){this._$AK(e,t)}_$ET(e,a){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:gc).toAttribute(a,t.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=t.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:gc;this._$Em=o;const l=c.fromAttribute(a,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,a,t){if(e!==void 0){const o=this.constructor,n=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??ys)(n,a)||t.useDefault&&t.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,a,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:t,reflect:o,wrapped:n},c){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??a??this[e]),n!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(a=void 0),this._$AL.set(e,a)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t){const{wrapped:c}=n,l=this[o];c!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(a)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}}lt.elementStyles=[],lt.shadowRootOptions={mode:"open"},lt[Dt("elementProperties")]=new Map,lt[Dt("finalized")]=new Map,rh?.({ReactiveElement:lt}),(Zo.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pc=globalThis,Xo=pc.trustedTypes,ks=Xo?Xo.createPolicy("lit-html",{createHTML:r=>r}):void 0,vc="$lit$",pa=`lit$${Math.random().toFixed(9).slice(2)}$`,fc="?"+pa,eh=`<${fc}>`,Ua=document,Nt=()=>Ua.createComment(""),Ft=r=>r===null||typeof r!="object"&&typeof r!="function",mc=Array.isArray,ws=r=>mc(r)||typeof r?.[Symbol.iterator]=="function",bc=`[ 	
\f\r]`,Ht=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Cs=/-->/g,As=/>/g,Ka=RegExp(`>|${bc}(?:([^\\s"'>=/]+)(${bc}*=${bc}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ss=/'/g,zs=/"/g,Es=/^(?:script|style|textarea|title)$/i,$c=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),Vb=$c(1),Ub=$c(2),Kb=$c(3),dt=Symbol.for("lit-noChange"),Vr=Symbol.for("lit-nothing"),Is=new WeakMap,Wa=Ua.createTreeWalker(Ua,129);function _s(r,e){if(!mc(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ks!==void 0?ks.createHTML(e):e}const Ts=(r,e)=>{const a=r.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",c=Ht;for(let l=0;l<a;l++){const d=r[l];let h,g,v=-1,p=0;for(;p<d.length&&(c.lastIndex=p,g=c.exec(d),g!==null);)p=c.lastIndex,c===Ht?g[1]==="!--"?c=Cs:g[1]!==void 0?c=As:g[2]!==void 0?(Es.test(g[2])&&(o=RegExp("</"+g[2],"g")),c=Ka):g[3]!==void 0&&(c=Ka):c===Ka?g[0]===">"?(c=o??Ht,v=-1):g[1]===void 0?v=-2:(v=c.lastIndex-g[2].length,h=g[1],c=g[3]===void 0?Ka:g[3]==='"'?zs:Ss):c===zs||c===Ss?c=Ka:c===Cs||c===As?c=Ht:(c=Ka,o=void 0);const m=c===Ka&&r[l+1].startsWith("/>")?" ":"";n+=c===Ht?d+eh:v>=0?(t.push(h),d.slice(0,v)+vc+d.slice(v)+pa+m):d+pa+(v===-2?l:m)}return[_s(r,n+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class Vt{constructor({strings:e,_$litType$:a},t){let o;this.parts=[];let n=0,c=0;const l=e.length-1,d=this.parts,[h,g]=Ts(e,a);if(this.el=Vt.createElement(h,t),Wa.currentNode=this.el.content,a===2||a===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=Wa.nextNode())!==null&&d.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith(vc)){const p=g[c++],m=o.getAttribute(v).split(pa),b=/([.?@])?(.*)/.exec(p);d.push({type:1,index:n,name:b[2],strings:m,ctor:b[1]==="."?Rs:b[1]==="?"?Ps:b[1]==="@"?Ms:Ut}),o.removeAttribute(v)}else v.startsWith(pa)&&(d.push({type:6,index:n}),o.removeAttribute(v));if(Es.test(o.tagName)){const v=o.textContent.split(pa),p=v.length-1;if(p>0){o.textContent=Xo?Xo.emptyScript:"";for(let m=0;m<p;m++)o.append(v[m],Nt()),Wa.nextNode(),d.push({type:2,index:++n});o.append(v[p],Nt())}}}else if(o.nodeType===8)if(o.data===fc)d.push({type:2,index:n});else{let v=-1;for(;(v=o.data.indexOf(pa,v+1))!==-1;)d.push({type:7,index:n}),v+=pa.length-1}n++}}static createElement(e,a){const t=Ua.createElement("template");return t.innerHTML=e,t}}function Ga(r,e,a=r,t){if(e===dt)return e;let o=t!==void 0?a._$Co?.[t]:a._$Cl;const n=Ft(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,a,t)),t!==void 0?(a._$Co??=[])[t]=o:a._$Cl=o),o!==void 0&&(e=Ga(r,o._$AS(r,e.values),o,t)),e}class js{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:t}=this._$AD,o=(e?.creationScope??Ua).importNode(a,!0);Wa.currentNode=o;let n=Wa.nextNode(),c=0,l=0,d=t[0];for(;d!==void 0;){if(c===d.index){let h;d.type===2?h=new ut(n,n.nextSibling,this,e):d.type===1?h=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(h=new Ls(n,this,e)),this._$AV.push(h),d=t[++l]}c!==d?.index&&(n=Wa.nextNode(),c++)}return Wa.currentNode=Ua,o}p(e){let a=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,a),a+=t.strings.length-2):t._$AI(e[a])),a++}}class ut{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,t,o){this.type=2,this._$AH=Vr,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=Ga(this,e,a),Ft(e)?e===Vr||e==null||e===""?(this._$AH!==Vr&&this._$AR(),this._$AH=Vr):e!==this._$AH&&e!==dt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ws(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Vr&&Ft(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ua.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Vt.createElement(_s(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new js(o,this),c=n.u(this.options);n.p(a),this.T(c),this._$AH=n}}_$AC(e){let a=Is.get(e.strings);return a===void 0&&Is.set(e.strings,a=new Vt(e)),a}k(e){mc(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let t,o=0;for(const n of e)o===a.length?a.push(t=new ut(this.O(Nt()),this.O(Nt()),this,this.options)):t=a[o],t._$AI(n),o++;o<a.length&&(this._$AR(t&&t._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Ut{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,t,o,n){this.type=1,this._$AH=Vr,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=Vr}_$AI(e,a=this,t,o){const n=this.strings;let c=!1;if(n===void 0)e=Ga(this,e,a,0),c=!Ft(e)||e!==this._$AH&&e!==dt,c&&(this._$AH=e);else{const l=e;let d,h;for(e=n[0],d=0;d<n.length-1;d++)h=Ga(this,l[t+d],a,d),h===dt&&(h=this._$AH[d]),c||=!Ft(h)||h!==this._$AH[d],h===Vr?e=Vr:e!==Vr&&(e+=(h??"")+n[d+1]),this._$AH[d]=h}c&&!o&&this.j(e)}j(e){e===Vr?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Rs extends Ut{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Vr?void 0:e}}class Ps extends Ut{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Vr)}}class Ms extends Ut{constructor(e,a,t,o,n){super(e,a,t,o,n),this.type=5}_$AI(e,a=this){if((e=Ga(this,e,a,0)??Vr)===dt)return;const t=this._$AH,o=e===Vr&&t!==Vr||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==Vr&&(t===Vr||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ls{constructor(e,a,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Ga(this,e)}}const Wb={M:vc,P:pa,A:fc,C:1,L:Ts,R:js,D:ws,V:Ga,I:ut,H:Ut,N:Ps,U:Ms,B:Rs,F:Ls},ah=pc.litHtmlPolyfillSupport;ah?.(Vt,ut),(pc.litHtmlVersions??=[]).push("3.3.1");const th=(r,e,a)=>{const t=a?.renderBefore??e;let o=t._$litPart$;if(o===void 0){const n=a?.renderBefore??null;t._$litPart$=o=new ut(e.insertBefore(Nt(),n),n,void 0,a??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yc=globalThis;class Jo extends lt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=th(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return dt}}Jo._$litElement$=!0,Jo.finalized=!0,yc.litElementHydrateSupport?.({LitElement:Jo});const oh=yc.litElementPolyfillSupport;oh?.({LitElement:Jo});const Gb={_$AK:(r,e,a)=>{r._$AK(e,a)},_$AL:r=>r._$AL};(yc.litElementVersions??=[]).push("4.2.1");const nh=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(60deg, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(60deg, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(60deg, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(60deg, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-brand-heavy: light-dark(var(--arc-color-light-blue-700), var(--arc-color-dark-blue-900));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-border-hover: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202215: max(15px, 0.9375rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202225: max(25px, 1.5625rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static light shadow tokens (primitive alpha colors) */
    --arc-shadow-light-none: none;
    --arc-shadow-light-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-25);
    --arc-shadow-light-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-15);
    /* static dark shadow tokens (primitive alpha colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
    /** @note: line-height mitigation strategy for gradient icons
     * stops icon geometry clipping issues
     */
  }
  [arc-gradient][arc-icon] {
    --arc-icon-height: 1.5lh;
    --arc-icon-max-height: none;
    --arc-icon-margin-block: -0.5lh;
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Light Shadows -------------------------------------------------\u2022 */
  [arc-shadow=light-sm] {
    box-shadow: var(--arc-shadow-light-sm);
  }
  [arc-shadow=light-md] {
    box-shadow: var(--arc-shadow-light-md);
  }
  [arc-shadow=light-lg] {
    box-shadow: var(--arc-shadow-light-lg);
  }
  [arc-shadow=light-xl] {
    box-shadow: var(--arc-shadow-light-xl);
  }
  /* Dark Shadows --------------------------------------------------\u2022 */
  [arc-shadow=dark-sm] {
    box-shadow: var(--arc-shadow-dark-sm);
  }
  [arc-shadow=dark-md] {
    box-shadow: var(--arc-shadow-dark-md);
  }
  [arc-shadow=dark-lg] {
    box-shadow: var(--arc-shadow-dark-lg);
  }
  [arc-shadow=dark-xl] {
    box-shadow: var(--arc-shadow-dark-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: light;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: dark;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  [arc-scheme=inverse] [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse\u2022nested);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,xc={};function lr(r,e){if(typeof document<"u"&&e?.styleSheet){const a=xc[r];xc[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==a),e.styleSheet]}}function ch(r){const e=Object.values(xc),a=document.adoptedStyleSheets.filter(t=>e.includes(t));if(r.adoptedStyleSheets){const t=a.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function ih(r){if(typeof CSSStyleSheet<"u"){const e=new CSSStyleSheet;e.replaceSync(nh),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(e)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,e]))}}const sh=r=>r?.trim().charAt(0)??void 0,lh=(r,e)=>{let a=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)a=(a+r.charCodeAt(o))%(e??33);return a},dh=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[lh(r,e.length)]||a||e[0]:a,Bs=tr(Da,["blue","orange","mint","red","yellow","green","maroon","purple"]),uh=tr(Da,["neutral","white","black"]),Qo=tr(ie,["lg","md","sm","xs"]),hh=[...Qo,"profile-sm","profile-md","profile-lg"],gh=Wo,ph=Bt,vh=Qo,fh=Qo,mh=Qo,B=s`--arc•input•mask`,f=s`--arc•size`,_=s`--arc•space`,$r=s`--arc•avatar`,Ur=s`${$r}•chars`,kc=s`

  &[data-size=lg] {
    ${$r}•font•size: var(${f}•16);
    ${$r}•size: 2.5em; /* target: 40px @ 100% */
    ${Ur}•1: var(${f}•16);
    ${Ur}•2: var(${f}•14);
    ${Ur}•3: var(${f}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${$r}•font•size: var(${f}•14);
    ${$r}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${Ur}•1: var(${f}•14);
    ${Ur}•2: var(${f}•12);
    ${Ur}•3: var(${f}•10);
  }

  &[data-size=sm] {
    ${$r}•font•size: var(${f}•12);
    ${$r}•size: 2em; /* target: 24px @ 100% */
    ${Ur}•1: var(${f}•12);
    ${Ur}•2: var(${f}•10);
    ${Ur}•3: var(${f}•8);
  }

  &[data-size=xs] {
    ${$r}•font•size: var(${f}•10);
    ${$r}•size: 2em; /* target: 20px @ 100% */
    ${Ur}•1: var(${f}•10);
    ${Ur}•2: var(${f}•8);
    ${Ur}•3: var(${f}•6);
  }

`,bh=s`

  &[data-size=profile-lg] {
    ${$r}•font•size: var(${f}•40);
    ${$r}•size: 4em;
  }

  &[data-size=profile-md] {
    ${$r}•font•size: var(${f}•32);
    ${$r}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${$r}•font•size: var(${f}•28);
    ${$r}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,Os=s`

  [arc-avatar] {
    ${$r}•font•size: inherit;
    ${$r}•size: inherit;
    ${Ur}•1: inherit;
    ${Ur}•2: inherit;
    ${Ur}•3: inherit;
  }

`,qa=s`${$r}•fg`,pe=s`${$r}•bg`,$h=s`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${qa}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${pe}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${pe}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${pe}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${pe}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${pe}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${pe}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${pe}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${pe}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${qa}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${pe}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${qa}: var(--arc-color-fg-secondary);
      ${pe}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${qa}: var(--arc-color-mono-black);
      ${pe}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${kc}
    ${bh}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${$r}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${$r}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${Ur}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${Ur}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${Ur}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${$r}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${pe}));
      --arc-button-color: var(--arc-avatar-color, var(${qa}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${$r}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${qa}: transparent;
        ${pe}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${pe});
      color: var(${qa});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${$r}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${$r}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,yh=({children:r,initial:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"initial","data-color":a,children:r||e}),xh=({isLoaded:r,hasError:e,onLoad:a,onError:t,...o})=>{const n=!r&&""||void 0,c=e&&""||void 0,l=!r||e||void 0;return(0,i.jsx)("img",{...o,hidden:l,"data-element":"image","data-not-loaded":n,"data-has-error":c,onLoad:a,onError:t})},Kt=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Kt).join(""):(0,u.isValidElement)(r)?Kt(r.props.children):"",Ds={},kh=(r="id")=>{const e=(Ds[r]??0)+1;return Ds[r]=e,`${r}-${e}`},Rr=(r,e="id")=>{const a=(0,u.useId)();return r??`${e}-${a}`},ht=r=>typeof r=="string",Ns=r=>r!==null&&typeof r=="object",wh=["#9c15ff","#1eb4fb"],Fs=({angle:r=60,width:e,height:a})=>{const t=(r-90)*Math.PI/180,o=e/2,n=a/2,c=Math.sqrt(e*e+a*a)/2,l=Math.cos(t)*c,d=Math.sin(t)*c;return{x1:o-l,y1:n-d,x2:o+l,y2:n+d}},Ch=(r,e)=>{const a=ht(r)?r:r.color,t=ht(r)?e.toString():r.offset?.toString()??e.toString();return(0,i.jsx)("stop",{offset:t,stopColor:a},`${a}-${e}`)},Hs=({id:r,angle:e=60,width:a,height:t,stops:o=wh})=>{const{x1:n,y1:c,x2:l,y2:d}=Fs({angle:e,width:a,height:t});return(0,i.jsx)("defs",{children:(0,i.jsx)("linearGradient",{gradientUnits:"userSpaceOnUse",id:r,x1:n,x2:l,y1:c,y2:d,children:o.map(Ch)})})},wc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Cc=r=>{const e=Rr(void 0,"arc-ai-gradient");return(0,i.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:`url(#${e})`}),Hs({id:e,width:640,height:640,stops:["var(--arc-color-logo-ai-purple, #9c15ff)","var(--arc-color-logo-ai-blue, #1eb4fb)"]})]})},Ac=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),Sc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),zc=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Ec=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Ic=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),_c=r=>(0,i.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Ah;const Sh="fa-width-auto",Vs="fa-fw",zh="arc-fw",Us="arc-aw",Eh=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,Ih={"arc-svg logo-articulate":(0,i.jsx)(wc,{}),"arc-svg product-ai":(0,i.jsx)(Cc,{}),"arc-svg product-peek":(0,i.jsx)(Ac,{}),"arc-svg product-reach":(0,i.jsx)(Sc,{}),"arc-svg product-review":(0,i.jsx)(zc,{}),"arc-svg product-rise":(0,i.jsx)(Ec,{}),"arc-svg product-storyline":(0,i.jsx)(Ic,{}),"arc-svg product-studio":(0,i.jsx)(_c,{})},Zb=r=>r&&r.length>0&&r?.includes("arc-svg")?Ih[r]:Ah("span",{className:r}),Ks=r=>{const e=r.includes(Sh),a=r.includes(Vs),t=r.includes(zh),o=r.includes(Us);return{hasFaAutoWidth:e,hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}},Ws=r=>((0,u.isValidElement)(r)&&r.type===ir?r.props.icon:r)??void 0,Tc=r=>{const e=Ws(r);if(typeof e!="string")return e;const{hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}=Ks(e);return!a&&!t&&!o?`${e} ${Us}`:e},_h=r=>{const e=Ws(r);if(typeof e!="string")return e;let a=e;const{hasArcFixedWidth:t,hasFaFixedWidth:o}=Ks(a);return t&&!o&&(a=`${a} ${Vs}`),a},Th=s`--arc•icon`,va=s`${Th}•fg`,jh=s`
@layer arc-components {

[arc-icon] {
  ${va}: currentcolor;

  color: var(--arc-icon-color, var(${va}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
    margin-block: var(--arc-icon-margin-block, unset);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${va}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${va}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${va}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${va}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${va}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${va}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${va}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,Rh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),Ph=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),Mh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),Lh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),Bh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),Oh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),Dh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),Nh=r=>(0,i.jsx)(ir,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),ir=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:t,style:o,gradient:n,...c})=>{const l={...o,"--arc-icon-size":Eh(t),"--arc-icon-color":a},d=!!(c["aria-label"]||c["aria-labelledby"]),h=_h(e),g=typeof h=="string"&&h.length>0?(0,i.jsx)("span",{className:h}):h;return(0,i.jsx)("span",{"aria-hidden":!d||void 0,...c,"arc-icon":"",style:l,"arc-gradient":n,children:r||g})};lr("ArcIcon",jh),ir.Articulate=Rh,ir.AI=Ph,ir.Peek=Mh,ir.Reach=Lh,ir.Review=Bh,ir.Rise=Oh,ir.Storyline=Dh,ir.Studio=Nh,ir.SVGArticulate=wc,ir.SVGAI=Cc,ir.SVGPeek=Ac,ir.SVGReach=Sc,ir.SVGReview=zc,ir.SVGRise=Ec,ir.SVGStoryline=Ic,ir.SVGStudio=_c;const Fh=({children:r,icon:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,i.jsx)(ir,{icon:e})}),Gs="blue",qs="neutral",Hh="fa-solid fa-user arc-aw",jc=(0,u.forwardRef)(({children:r,size:e,color:a,isActive:t=!0,isAnonymous:o,alt:n,src:c,name:l,email:d,...h},g)=>{const[v,p]=(0,u.useState)(!1),[m,b]=(0,u.useState)(!1),$=M=>{p(!0),b(!1),h.onLoad?.(M)},w=M=>{p(!1),b(!0),h.onError?.(M)},S=sh(l||d),x=!!S,C=o||(!v||m)&&!x,I=!C&&!!c&&!m||void 0,A=(C&&qs||void 0)??(a||void 0)??dh(String(d||l||void 0),Bs,Gs)??Gs,j={src:c,alt:n,isLoaded:v,hasError:m,onLoad:$,onError:w};return(0,u.useEffect)(()=>{C&&p(!1)},[C]),(0,i.jsx)("span",{...h,ref:g,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":e,"aria-label":(h.title??l??d)||void 0,children:r||(C?(0,i.jsx)(Fh,{icon:Hh,color:qs}):(0,i.jsxs)(i.Fragment,{children:[I&&(0,i.jsx)(xh,{...j}),x&&(0,i.jsx)(yh,{initial:S,color:A})]}))})});lr("ArcAvatar",$h);const ee=s`${$r}•text`,Ya=s`${$r}•subtext`,gt=s`${$r}•gap`,Vh=s`
@layer arc-components {

  [arc-avatar-text] {
    ${ee}•font•size: var(${f}•14);
    ${Ya}•font•size: var(${f}•12);
    ${gt}: var(${f}•8);

    ${ee}•overflow: unset;
    ${ee}•text•overflow: unset;
    ${ee}•white•space: unset;

    &[data-overflow=truncate] {
      ${ee}•overflow: hidden;
      ${ee}•text•overflow: ellipsis;
      ${ee}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${ee}•font•size: 1em;
      ${Ya}•font•size: 0.875em;
      ${gt}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${ee}•font•size: var(--arc-font-size-14);
      ${Ya}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${ee}•font•size: var(--arc-font-size-14);
      ${Ya}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${ee}•font•size: var(--arc-font-size-14);
      ${Ya}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${ee}•font•size: var(--arc-font-size-12);
      ${Ya}•font•size: var(--arc-font-size-12);
      ${gt}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${gt}: var(${f}•12); }
    &[data-gap=sm] { ${gt}: var(${f}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${ee}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(${gt});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${Ya}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${ee}•overflow);
      text-overflow: var(${ee}•text•overflow);
      white-space: var(${ee}•white•space);
    }
  }

}
`,Uh="Anonymous",Rc=({children:r,avatar:e={},subtext:a,size:t,gapSize:o,overflow:n,isStrong:c,...l})=>{const d=e.anonymousName||Uh,h=e.name||e.email||e.src,g=e.name||e.email,v=e.isAnonymous||!h,p=r||v?d:g,m=o!=="inherit"?o:void 0,b=n!=="inherit"?n:void 0;return(0,i.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":m,"data-overflow":b,"is-strong":c?"":void 0,children:[(0,i.jsx)(jc,{...e,isAnonymous:v,size:t}),(0,i.jsxs)("span",{"data-element":"text",children:[p,a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};lr("ArcAvatarText",Vh);const Kh=s`
@layer arc-components {

  [arc-avatar-pile] {
    --arc-button-inline-spacing: 0;

    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${kc}
    ${Os}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,Wh=({size:r="md",...e})=>(0,i.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});lr("ArcAvatarPile",Kh);const Pc=[...Na],Mc=[...ha],Gh=[...ct],Ys=tr(jr,["common"]),qh=tr(jr,["ai","brand"]),Lc=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],Bc=["ignore","flip"],Zs=["compact","comfortable"],Wt=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),ve={popover:Pc[0],anchorAt:Lc[13],boundary:Bc[0],tryFallbacks:!1,variant:Ys[0],scheme:Mc[0],density:Zs[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},Oc=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored"),Yh=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),rn={canAnchor:Oc(),canAnchoredContainers:Yh()},Xs=!rn.canAnchor,Js=["center","nw-corner","ne-corner","se-corner","sw-corner"],Qs=({canHaveTail:r,tailSize:e})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const a=Math.abs(Number(e||ve.tailSize)),t=a>0?a:ve.tailSize;return{cssTailVar:t===ve.tailSize?"":`${t}px`,floatingTailPx:t}},en=typeof window>"u"?u.useEffect:u.useLayoutEffect,rl=(r,e="toggle",a=document)=>{const t=a.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[e]()},Gt=new WeakMap,Dc=r=>{const e=String(r??"").trim();if(e==="none")return"none";let a=e.replace(/[^\w-]/g,"-");for(;a.startsWith("-");)a=a.slice(1);for(;a.endsWith("-");)a=a.slice(0,-1);return a?`--${a}`:"--"},qt=r=>{const e=Dc(r);return e==="none"?null:e},el=(r,e)=>{const a=qt(e);if(!a)return()=>{};let t=Gt.get(r);return t||(t=new Set,Gt.set(r,t)),t.has(a)?()=>{}:(t.add(a),r.style.setProperty("anchor-name",Wt([...t],1/0,", ")),()=>{const o=Gt.get(r);if(o){if(o.delete(a),o.size===0){Gt.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Wt([...o],1/0,", "))}})},Yt=r=>`${Math.round(r*100)/100}px`,Zh=[{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("top"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("bottom"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("bottom")&&a.includes("top"),value:1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("left"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("right"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("right")&&a.includes("left"),value:1}],Nc=(r,e,a)=>Zh.find(t=>t.test(r,e,a))?.value||0;let Fc;const Xh=()=>typeof window<"u"&&typeof CSS<"u"&&typeof CSS.supports=="function"&&!(CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored")),Hc=()=>(Fc||(Fc=Ve.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(Ve.bind(Ve,40153))),Fc);Xh()&&Hc().catch(()=>{});const al=r=>r==="start"||r==="end"?r:"center",Jh=r=>{const e=r.split("-")[0];return e==="top"||e==="right"||e==="bottom"||e==="left"?e:null},tl=r=>{const e=Jh(r),a=al(r.split("-")[1]);switch(e){case"top":return{block:"start",inline:a};case"bottom":return{block:"end",inline:a};case"left":return{block:a,inline:"start"};case"right":return{block:a,inline:"end"};default:return{block:"center",inline:"center"}}},ol=(r,e)=>r!=="center"&&e!=="center"&&r!==e,nl=(r,e)=>{const a=tl(r),t=tl(e),o=ol(a.block,t.block),n=ol(a.inline,t.inline);return o&&n?"flip-block-inline":o?"flip-block":n?"flip-inline":""},Qh={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Vc=r=>r.split("-")[0],r0=r=>r.split("-")[1],e0=r=>r==="x"?"y":"x",a0=r=>r==="y"?"height":"width",Uc=r=>["top","bottom"].includes(Vc(r))?"y":"x",t0=r=>e0(Uc(r)),o0=(r,e,a,t)=>{const o=Uc(a),n=t0(a),c=a0(n),l=Vc(a),d=o==="y",h=r.x+r.width/2-e.width/2,g=r.y+r.height/2-e.height/2,v=r[c]/2-e[c]/2;let p;switch(l){case"top":p={x:h,y:r.y-e.height};break;case"bottom":p={x:h,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:g};break;case"left":p={x:r.x-e.width,y:g};break;default:p={x:r.x,y:r.y}}switch(r0(a)){case"start":p[n]-=v*(t&&d?-1:1);break;case"end":p[n]+=v*(t&&d?-1:1);break;default:break}return p},n0=(r,e,a,t)=>{const o=Vc(r),n=Uc(r)==="y",c=o==="left"||o==="top"?-1:1,l=a&&n?-1:1,d=e,h=0;return n?{x:t.x+h*l,y:t.y+d*c}:{x:t.x+d*c,y:t.y+h*l}},cl=r=>({x:r.x,y:r.y,width:r.width,height:r.height}),c0=({anchorEl:r,popoverEl:e,placement:a,offsetPx:t,tailOffset:o,getTailModifier:n})=>{const c=getComputedStyle(e).direction==="rtl",l=cl(r.getBoundingClientRect()),d=cl(e.getBoundingClientRect());let h=o0(l,d,a,c);h=n0(a,t,c,h);const g=h.x+o*n("x",a,a),v=h.y+o*n("y",a,a);e.style.setProperty("left",Yt(g)),e.style.setProperty("top",Yt(v))},i0=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,offsetPx:o,tailSizePx:n,hasTail:c,isOpen:l})=>{en(()=>{if(!(l&&!Oc()&&!!r&&!!e))return;const h=r,g=e,v=Qh[a];let p=!0,m;const b=c?Math.max(0,n)*Math.SQRT1_2:0;return c0({anchorEl:h,popoverEl:g,placement:v,offsetPx:o,tailOffset:b,getTailModifier:Nc}),(async()=>{try{const{autoUpdate:S,computePosition:x,flip:C,offset:I}=await Hc();if(!p)return;const A=[I(o)];t&&A.push(C({fallbackStrategy:"bestFit"}));const j=async()=>{try{const M=await x(h,g,{placement:v,strategy:"fixed",middleware:A});if(!p||!h.isConnected||!g.isConnected)return;const H=M.x+b*Nc("x",M.placement,v),z=M.y+b*Nc("y",M.placement,v);if(g.style.setProperty("left",Yt(H)),g.style.setProperty("top",Yt(z)),!c||!t){delete g.dataset.fallbacks;return}const k=nl(v,M.placement);k?g.dataset.fallbacks=k:delete g.dataset.fallbacks}catch{}};await j(),m=S(h,g,j)}catch{}})(),()=>{p=!1,m?.()}},[a,r,c,l,o,e,n,t])},an=1,pt=2,s0=[{test:(r,e)=>e.top>=r.bottom+an,value:"bottom"},{test:(r,e)=>e.bottom<=r.top-an,value:"top"},{test:(r,e)=>e.left>=r.right+an,value:"right"},{test:(r,e)=>e.right<=r.left-an,value:"left"}],Zt=r=>{delete r.dataset.fallbacks},tn=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),l0=(r,e,a,t)=>{const o=tn(e),n=tn(a);if(r==="top"||r==="bottom"){const h=Math.abs(t==="rtl"?a.right-e.right:a.left-e.left),g=Math.abs(t==="rtl"?a.left-e.left:a.right-e.right),v=Math.abs(n.x-o.x);return Math.abs(h-g)<=pt&&v<=pt||v+pt<Math.min(h,g)?"center":h<=g?"start":"end"}const c=Math.abs(a.top-e.top),l=Math.abs(a.bottom-e.bottom),d=Math.abs(n.y-o.y);return Math.abs(c-l)<=pt&&d<=pt||d+pt<Math.min(c,l)?"center":c<=l?"start":"end"},d0=(r,e,a,t)=>{const o=s0.find(d=>d.test(e,a));let n;if(o)n=o.value;else{const d=tn(e),h=tn(a),g=h.y-d.y,v=h.x-d.x,p=Math.min(e.height,a.height)*.1;Math.abs(g)>p?n=g>=0?"bottom":"top":n=v>=0?"right":"left"}if(al(r.split("-")[1])==="center")return n;const l=l0(n,e,a,t);return`${n}-${l}`},u0=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,isOpen:o,hasTail:n})=>{en(()=>{if(!e||!rn.canAnchor)return;if(!n||!t||!o||rn.canAnchoredContainers||!r){Zt(e);return}const c=a;if(c==="center"||c.includes("corner")){Zt(e);return}const l=r,d=e;let h=!0,g;const v=()=>{const m=l.getBoundingClientRect(),b=d.getBoundingClientRect(),$=getComputedStyle(l).direction==="rtl"?"rtl":"ltr",w=d0(c,m,b,$),S=nl(c,w);c===w?Zt(d):S?d.dataset.fallbacks=S:Zt(d)};return(async()=>{try{const{autoUpdate:b}=await Hc();if(!h)return;g=b(l,d,v),v()}catch{}})(),()=>{h=!1,g?.(),Zt(d)}},[a,r,n,o,e,t])},il=(r,e=" ")=>r.split(e).map(a=>a.trim()).filter(Boolean),h0=s`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,Kc=(0,u.forwardRef)(({progress:r,...e},a)=>(0,i.jsxs)("svg",{...e,ref:a,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,i.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,i.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));Kc.displayName="ArcSpinner",lr("ArcSpinner",h0);const g0=(...r)=>console.log(...r),sl=(...r)=>console.warn(...r),p0=(...r)=>console.error(...r),vt=s`--arc•icon•text`,Xt=s`${vt}•font•size`,ll=s`${vt}•icon`,Wc=s`${vt}•text`,dl=s`${vt}•subtext`,Ge=s`${vt}•fg`,fa=s`${vt}•gap`,_a=s`${ll}•size`,ul=s`${ll}•vertical•align`,Jt=s`${Wc}•overflow`,on=s`${Wc}•text•overflow`,nn=s`${Wc}•white•space`,cn=s`${dl}•font•size`,hl=s`${dl}•fg`,v0=s`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${Ge}: currentcolor;
  }

  &[data-variant=primary] {
    ${Ge}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${Ge}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${Ge}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${Ge}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${Ge}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${Ge}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${Ge}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${Ge}: var(--arc-color-fg-critical-mid);
  }

`,f0=s`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Xt}: 1em;
    ${cn}: 0.75em;
    ${_a}: 1em;
    ${fa}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Xt}: var(--arc-font-size-14);
    ${cn}: var(--arc-font-size-12);
    ${fa}: var(${_}•3);
  }

  &[data-size=sm] {
    ${Xt}: var(--arc-font-size-12);
    ${cn}: var(--arc-font-size-12);
    ${fa}: var(${_}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${fa}: var(${_}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${fa}: var(${_}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${fa}: var(${_}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${_a}: var(${f}•24); }
  &[icon-size=lg] { ${_a}: var(${f}•20); }
  &[icon-size=md] { ${_a}: var(${f}•16); }
  &[icon-size=sm] { ${_a}: var(${f}•14); }
  &[icon-size=xs] { ${_a}: var(${f}•12); }
`,m0=s`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${hl}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${Ge}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${_a}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: baseline;

  &[data-layout=inline] {
    ${Jt}: unset;
    ${on}: unset;
    ${nn}: unset;

    ${ul}: calc((var(${_a}) - var(${Xt})) / -2);

    &:has(svg) { ${ul}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Jt}: visible;
    ${on}: unset;
    ${nn}: normal;

    &[data-overflow=truncate] {
      ${Jt}: hidden;
      ${on}: ellipsis;
      ${nn}: nowrap;
    }
  }

`,b0=s`
@layer arc-components {

  [arc-icon-text] {
    ${v0}
    ${f0}
    ${m0}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Xt}));
    color: var(--arc-icon-text-text-color, var(${Ge}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=icon] {
      display: contents;
    }

    [data-element] {
      /* @note: SVG alignment mitigation strategy; presents in multiple components
       * Badges, CheckboxBars, RadioBars, supporting IconText cases like Links, etc. when using SVG icons.
       */
      :where(svg) {
        flex: none;
        align-self: var(--arc-icon-text-svg-align-self, normal);
        display: var(--arc-icon-text-svg-display, inline-block) !important;
        width: var(--arc-icon-text-svg-width, 1.25em) !important;
        height: var(--arc-icon-text-svg-height, auto) !important;
        max-height: var(--arc-icon-text-svg-max-height, 1lh);
        fill: var(--arc-icon-text-svg-fill, currentColor);
        vertical-align: var(--arc-icon-text-svg-vertical-align, text-bottom) !important;
        overflow: var(--arc-icon-text-svg-overflow, visible) !important;
      }
    }

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${fa}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Jt}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${cn}));
        color: var(--arc-icon-text-subtext-color, var(${hl}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Jt}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${on}));
        white-space: var(--arc-icon-text-white-space, var(${nn}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${fa})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${fa})); }
      [data-element=subtext] { display: contents; }
    }
  }
}

`,$0=tr(jr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),ae=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="span",icon:n,iconTooltip:c,text:l,subtext:d,gradient:h,overflow:g,iconSize:v,gapSize:p,isFlipped:m=!1,isStrong:b=!1,...$})=>{const w=r||l,S=!!n,x=!!w,C=e==="gutter",I=e==="inline",A=S&&(!m||C),j=S&&x&&m&&I,M=!!v&&v!=="inherit",H=M&&Fa.includes(v)?v:void 0,z=M&&!Fa.includes(v)?v:void 0,k=p!=="inherit"?p:void 0,N=g!=="inherit"?g:void 0,U=Tc(n),Z=typeof U=="string"?(0,i.jsx)(ir,{icon:U,size:z,gradient:h}):U,K=c?(0,i.jsx)(fn,{text:c,children:Z}):Z;return(0,i.jsxs)(o,{...$,"arc-icon-text":"","data-variant":t,"data-layout":e,"data-overflow":N,"data-size":a,"data-gap":k,"icon-size":H,"is-flipped":m?"":void 0,"is-strong":b?"":void 0,children:[A&&(0,i.jsx)("span",{"data-element":"icon",children:K}),x&&(0,i.jsxs)("span",{"data-element":"text",children:[w,!!d&&(C?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:d})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:d})]}))]}),j&&(0,i.jsx)("span",{"data-element":"icon",children:K})]})};lr("ArcIconText",b0);const qe={...ve,popover:Pc[2],anchorAt:Lc[2],boundary:Bc[1],tryFallbacks:!0,scheme:Mc[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},sn=new WeakSet,y0=100,x0=100;let Gc=!0,qc=null;const k0=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),w0=r=>r instanceof Element?k0?r.matches(":focus-visible")===!0:Gc:!1,Yc=new WeakMap,Zc=new WeakMap,Qt=new Set,ln=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},gl=(r,e,a,t)=>{const o=window.setTimeout(()=>{t(),r.delete(e)},a);r.set(e,o)},pl="[aria-describedby]",C0=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,vl=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&C0(r),A0=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),S0=r=>r?.match(/\S+/g)??[],Xc=(r,e)=>{const a=Re(e??document.documentElement);if(!a)return null;const t=a.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},z0=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(pl);if(e){const t=e.getAttribute("aria-describedby")??"";if(t)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:t}}let a=r;for(;a;){if(A0(a)){const t=a.querySelector?.(pl),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:a,tooltipId:o}}a=a.parentElement}return null},E0=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"][popover]')??null;return e instanceof HTMLElement?e:null},I0=r=>r?.id?Xc(r.id,r):null,_0=r=>{const e=E0(r),a=z0(r);if(!a&&e){const d=I0(e);return!d||!e.id?null:{anchor:d,tooltip:e}}if(!a)return null;const{anchor:t,tooltipId:o}=a;if(!o)return null;const n=Re(r);if(!n)return null;const c=S0(o),l=e??c.map(d=>n.getElementById(d)).find(d=>vl(d))??null;return vl(l)?{anchor:t,tooltip:l}:null},T0=(r,e,a)=>{const t=a instanceof Element?a:null;if(!t)return!1;const o=r===t||r.contains(t),n=e===t||e.contains(t);return o||n},fl=r=>{r.isConnected&&(r.showPopover?.(),Qt.add(r))},ml=r=>{r.isConnected&&(r.hidePopover?.(),Qt.delete(r))},j0=(r,e)=>{if(ln(Zc,r),ln(Yc,r),!e){fl(r);return}gl(Yc,r,y0,()=>fl(r))},Jc=(r,e)=>{if(ln(Yc,r),ln(Zc,r),!e){ml(r);return}gl(Zc,r,x0,()=>ml(r))},R0=()=>{Qt.forEach(r=>{Jc(r,!1)})},ro=(r,e,a,t)=>{const o=_0(e);if(!o)return;const{anchor:n,tooltip:c}=o;if(r){j0(c,t);return}T0(n,c,a)||Jc(c,t)};let dn=null,un=null,hn=null,gn=null,pn=null,vn=null,ft=null,eo=null;const bl=r=>{if(!r&&typeof document>"u")return;const e=r?Re(r):document;if(!e||sn.has(e))return;vn=t=>{Gc=!1,qc=t.target},ft=()=>{qc=null},dn=t=>ro(!0,t.target,void 0,!0),hn=t=>ro(!1,t.target,t.relatedTarget,!0),un=t=>{w0(t.target)&&ro(!0,t.target,void 0,!1)},gn=t=>{const o=t.relatedTarget??qc;ro(!1,t.target,o,!1)},pn=t=>{t.key==="Tab"&&(Gc=!0),t.key==="Escape"&&(Qt.size>0&&t.preventDefault(),ro(!1,t.target,void 0,!1),Qt.forEach(o=>Jc(o,!1)))},eo=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}R0()}},[["pointerdown",vn],["pointerup",ft],["pointercancel",ft],["pointerover",dn],["focusin",un],["pointerout",hn],["focusout",gn],["keydown",pn]].forEach(([t,o])=>{e.addEventListener(t,o)}),e.addEventListener("toggle",eo,!0),sn.add(e)},P0=()=>{if(!sn.has(document)||typeof document>"u")return;[["pointerdown",vn],["pointerup",ft],["pointercancel",ft],["pointerover",dn],["focusin",un],["pointerout",hn],["focusout",gn],["keydown",pn]].forEach(([e,a])=>{a&&document.removeEventListener(e,a)}),eo&&document.removeEventListener("toggle",eo,!0),dn=null,un=null,hn=null,gn=null,pn=null,vn=null,ft=null,eo=null,sn.delete(document)},Ye=s`--arc•tooltip`,$l=s`${Ye}•subtext`,yl=s`${Ye}•slot`,M0=s`
@layer arc-components {
  [arc-tooltip] {
    ${Ye}•width: max-content;
    ${Ye}•max•width: 20em;
    ${Ye}•font•size: var(${f}•12);
    ${Ye}•padding: var(${_}•10);
    ${$l}•spacing: var(${_}•6);
    ${yl}•margin•top: var(${_}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: var(--arc-tooltip-min-width, auto); /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${Ye}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${Ye}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${Ye}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${Ye}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);
    --arc-popover-line-height: var(--arc-line-height-tight);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${Ye}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${$l}•spacing));

    [arc-tooltip-content] {
      text-align: var(--arc-tooltip-text-align, unset);
    }

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${yl}•margin•top));
    }
  }
}
`,fn=(0,u.forwardRef)(({id:r,children:e,slot:a,isEnabled:t=qe.isEnabled,popover:o=qe.popover,variant:n=qe.variant,anchorAt:c=qe.anchorAt,alternateAnchor:l,boundary:d=qe.boundary,tryFallbacks:h=qe.tryFallbacks,hasTail:g=qe.hasTail,offset:v=qe.offset,scheme:p=qe.scheme,isStrong:m=qe.isStrong,text:b,subtext:$,icon:w,isFlipped:S,...x},C)=>{const I=Rr(r,"arc-tooltip"),A=(0,u.useRef)(null);(0,u.useImperativeHandle)(C,()=>A.current);const j=U=>typeof U=="object"&&U!==null&&"tabIndex"in U,M=e,H=!!l;let z=null;(0,u.isValidElement)(M)?z=t?(0,u.cloneElement)(M,{"aria-describedby":I,...j(M.props)&&M.props.tabIndex!=null?{}:{tabIndex:0}}):M:!H&&typeof console<"u"&&sl("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const k=(0,u.useMemo)(()=>()=>Xc(I,A.current),[I]),N=p==="auto"?void 0:p;return(0,u.useEffect)(()=>{if(t)try{bl(A.current)}catch{}},[t]),(0,i.jsxs)(i.Fragment,{children:[z,t&&(0,i.jsxs)(ma,{...x,"arc-tooltip":"",scheme:x?.isInverse?"inverse":N,role:"tooltip",id:I,ref:A,popover:o,anchorAt:c,tryFallbacks:h??d==="flip",variant:n,hasTail:g,offset:v,hidePopoverButton:!0,alternateAnchor:l??k,tag:x?.tag??"span",contentTag:x?.contentTag??"span",children:[b&&(0,i.jsx)(ae,{"arc-tooltip-content":"",text:b,subtext:$,icon:w,isFlipped:S,isStrong:m,size:"inherit",variant:"inherit"}),a&&(0,i.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});lr("ArcTooltip",M0);const L0=({isFloating:r,isOnMedia:e,shadow:a})=>[{condition:!r&&e,value:"light-md"},{condition:r&&!e,value:"lg"},{condition:r&&e,value:"light-lg"},{condition:r||a===!0,value:"lg"}],B0=({isFloating:r,isOnMedia:e,shadow:a})=>L0({isFloating:r,isOnMedia:e,shadow:a}).find(t=>t.condition)?.value??a,O0=({layout:r,isFloating:e})=>[{condition:r==="icon",value:"icon"},{condition:e||r==="hug",value:"hug"},{condition:!e&&r==="fill",value:"fill"}],D0=({layout:r,isFloating:e})=>O0({layout:r,isFloating:e}).find(a=>a.condition)?.value??r,N0=({scheme:r,isInverse:e})=>[{condition:e,value:"inverse"},{condition:r==="auto",value:void 0},{condition:!0,value:r}],F0=({scheme:r,isInverse:e})=>{const a=N0({scheme:r,isInverse:e}).find(t=>t.condition)?.value??r;return a==="auto"?void 0:a},H0=tr(Lt,["round","square","narrow"]),V0=tr(ie,["xxl","xl","lg","md","sm"]),U0=tr(Ue,["hug","fill","icon"]),xl=tr(jr,["common","neutral","ai","critical","alpha"]),Qc=[...ha],K0=[...Fo],kl=tr(Ho,["primary","secondary","tertiary","plain","link-style"]),W0=[...ct],G0={circle:"round"},wl=({shape:r})=>ga(r,G0),ri=tr(jr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Cl={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},q0=(()=>{const r=new Map;return ri.forEach(e=>{const a=Cl[e],t=a.scheme==="inverse"?"inverse":"";r.set(`${a.variant}|${a.hierarchy}|${t}`,e)}),r})(),ei=r=>!!(r&&ri.includes(r)),mn=r=>r!==void 0&&ei(r)?Cl[r]:void 0,Al=({variant:r})=>mn(r)?.variant??r,Sl=({variant:r,hierarchy:e})=>mn(r)?.hierarchy??e,zl=({variant:r,isInverse:e,scheme:a})=>mn(r)?.scheme??F0({scheme:a,isInverse:e}),Y0={variant:xl[0],hierarchy:kl[0],scheme:Qc[0]},Z0=({variant:r})=>{const e=mn(r);return e?{variant:e.variant,hierarchy:e.hierarchy,scheme:e.scheme??Qc[0]}:Y0},X0=({variant:r,hierarchy:e,scheme:a})=>q0.get(`${r}|${e}|${a==="inverse"?"inverse":""}`),ke=s`60deg`,wr={purple:{50:s`light-dark(#fbf2ff, #210125)`,100:s`light-dark(#efccff, #540160)`,200:s`light-dark(#9c15ff, #ad44cb)`,300:s`light-dark(#680278, #ad44cb)`,400:s`light-dark(#5d3668, #c778de)`,500:s`light-dark(#37003f, #e3a7ff)`,600:s`light-dark(#27002c, #f9ebff)`},blue:{50:s`light-dark(#f4fbff, #00223b)`,100:s`light-dark(#d2f1fe, #02497d)`,200:s`light-dark(#1eb4fb, #169cfe)`,300:s`light-dark(#0179d0, #71bdfe)`,400:s`light-dark(#36648c, #84daff)`,500:s`light-dark(#004273, #b7eaff)`,600:s`light-dark(#012a48, #c2edff)`}},ao=s`var(--arc-color-overlay-subtle)`,J0=s`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${ao};
  --arc-button-floating-bg-processing: ${ao};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${ao};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${ao} linear-gradient(${ke}, transparent, ${ao});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${ke}, transparent, transparent);
  --arc-button-gradient-ai-50: ${wr.purple[50]} linear-gradient(${ke}, transparent, ${wr.blue[50]});
  --arc-button-gradient-ai-100: ${wr.purple[100]} linear-gradient(${ke}, transparent, ${wr.blue[100]});
  --arc-button-gradient-ai-200: ${wr.purple[200]} linear-gradient(${ke}, transparent, ${wr.blue[200]});
  --arc-button-gradient-ai-300: ${wr.purple[300]} linear-gradient(${ke}, transparent, ${wr.blue[300]});
  --arc-button-gradient-ai-400: ${wr.purple[400]} linear-gradient(${ke}, transparent, ${wr.blue[400]});
  --arc-button-gradient-ai-500: ${wr.purple[500]} linear-gradient(${ke}, transparent, ${wr.blue[500]});
  --arc-button-gradient-ai-600: ${wr.purple[600]} linear-gradient(${ke}, transparent, ${wr.blue[600]});
}
`,Q0=s`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,rg=s`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${wr.purple[50]};
  --arc-popover-ai-purple-200: ${wr.purple[200]};
  --arc-popover-ai-blue-50: ${wr.blue[50]};
  --arc-popover-ai-blue-200: ${wr.blue[200]};
}
`,eg=s`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${ke}, ${wr.purple[200]} -0.5em, ${wr.blue[200]});
}
`,ag=s`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${ke}, ${wr.purple[50]}, ${wr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${ke}, ${wr.purple[100]}, ${wr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${ke}, ${wr.purple[300]}, ${wr.blue[300]});
}
`,E=s`--arc•button`,R=s`${E}•fg`,y=s`${E}•bg`,Y=s`${E}•edge`,pr=s`${E}•border`,mt=s`${E}•outline`,fe=s`${E}•label`,te=s`${E}•mask`,sr=s`${E}•spinner`,Or=s`${E}•icon`,Zr=s`${Or}•svg`,tg=s`
  &[data-size=xxl] {
    ${E}•font•size: var(${f}•16);
    ${E}•height: var(${f}•56);
    ${sr}•size: var(${f}•32);
    ${Or}•size: var(${f}•20);
    ${Or}•size•large: var(${f}•24);
    ${Zr}•size: var(${f}•25);
    ${Zr}•size•large: var(${f}•24);
    ${fe}•spacing: var(${f}•12);
    ${E}•spacing: var(${f}•16);
    ${E}•spacing•square: var(${f}•16);
    ${pr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${E}•font•size: var(${f}•14);
    ${E}•height: var(${f}•48);
    ${sr}•size: var(${f}•16);
    ${Or}•size: var(${f}•16);
    ${Or}•size•large: var(${f}•20);
    ${Zr}•size: var(${f}•20);
    ${Zr}•size•large: var(${f}•25);
    ${fe}•spacing: var(${f}•10);
    ${E}•spacing: var(${f}•14);
    ${E}•spacing•square: var(${f}•14);
    ${pr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${E}•font•size: var(${f}•14);
    ${E}•height: var(${f}•40);
    ${sr}•size: var(${f}•16);
    ${Or}•size: var(${f}•16);
    ${Or}•size•large: var(${f}•20);
    ${Zr}•size: var(${f}•20);
    ${Zr}•size•large: var(${f}•25);
    ${fe}•spacing: var(${f}•8);
    ${E}•spacing: var(${f}•12);
    ${E}•spacing•square: var(${f}•10);
    ${pr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] { /* scalable • mimics default size */
    ${E}•font•size: 1em;
    ${E}•height: 2.5em;
    ${fe}•font•size: 0.875em;
    ${sr}•size: 1.125em;
    ${Or}•size: 1.125em;
    ${Or}•size•large: 1.25em;
    ${Zr}•size: 1.25em;
    ${Zr}•size•large: 1.375em;
    ${fe}•spacing: max(8px, 0.5em);
    ${E}•spacing: 0.75em;
    ${E}•spacing•square: 0.625em;
    ${pr}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=md] {
    ${E}•font•size: var(${f}•14);
    ${E}•height: var(${f}•32);
    ${sr}•size: var(${f}•16);
    ${Or}•size: var(${f}•14);
    ${Or}•size•large: var(${f}•20);
    ${Zr}•size: var(${f}•18);
    ${Zr}•size•large: var(${f}•25);
    ${fe}•spacing: var(${f}•6);
    ${E}•spacing: var(${f}•10);
    ${E}•spacing•square: var(${f}•8);
    ${pr}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=sm] {
    ${E}•font•size: var(${f}•12);
    ${E}•height: var(${f}•24);
    ${sr}•size: var(${f}•14);
    ${Or}•size: var(${f}•12);
    ${Or}•size•large: var(${f}•14);
    ${Zr}•size: var(${f}•15);
    ${Zr}•size•large: var(${f}•18);
    ${fe}•spacing: var(${f}•4);
    ${E}•spacing: var(${f}•8);
    ${E}•spacing•square: var(${f}•6);
    ${pr}•radius•square: var(--arc-border-radius-md);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${E}•font•weight: normal;
    ${pr}•radius: 0.25em;
    ${E}•height: auto;
  }
`,og=s`
  &[data-layout=hug] {
    ${E}•width: auto;
    ${E}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${E}•display: flex;
    ${E}•width: 100%;
    ${E}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${Or}•width: auto;
  }

  &[data-layout=icon] {
    ${E}•aspect•ratio: 1 / 1;
    ${E}•min•width: min-content;
    ${E}•max•width: none;
    ${E}•spacing: var(${f}•0);

    ${Or}•width: 1.25em;

    &[data-shape=narrow] {
      ${E}•aspect•ratio: auto;
      ${E}•spacing: var(${f}•2);
      ${Or}•width: auto;
    }
  }

  &[data-shape=square] {
    ${E}•spacing: var(${E}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${pr}•radius: var(${pr}•radius•square);
  }

`,ng=s`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${R}: inherit;
    ${y}: transparent;
    ${Y}: transparent;
    ${R}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${pr}•width: var(${f}•1);
    ${sr}•progress•color: var(--arc-color-border-brand-mid);
    ${sr}•base•color: var(--arc-color-alpha-mid);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${R}: var(--arc-color-fg-on-theme-heavy);
      ${y}: var(--arc-color-bg-theme-heavy);
      ${Y}: transparent;

      ${R}•active: var(--arc-color-fg-on-theme-mid);
      ${R}•processing: var(--arc-color-fg-on-theme-stark);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: var(--arc-color-bg-theme-stark);
      ${y}•active: var(--arc-color-bg-theme-mid);
      ${y}•processing: var(--arc-color-bg-theme-stark);
      ${y}•disabled: var(--arc-color-bg-disabled);

      ${sr}•progress•color: var(--arc-color-mono-white);
      ${sr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${R}: var(--arc-color-fg-primary);
      ${y}: transparent;
      ${Y}: var(--arc-color-border-theme-heavy);

      ${R}•active: var(--arc-color-fg-secondary);
      ${R}•processing: var(--arc-color-fg-secondary);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${Y}•active: var(--arc-color-border-theme-mid);
      ${Y}•processing: var(--arc-color-border-theme-subtle);
      ${Y}•disabled: var(--arc-color-border-disabled);

      ${y}•hover: var(--arc-color-bg-neutral-muted);
      ${y}•active: var(--arc-color-bg-neutral-subtle);
      ${y}•processing: transparent;
      ${y}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${Y}: var(--arc-color-border-mid);
        ${Y}•hover: var(--arc-color-border-stark);
        ${Y}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${y}: var(--arc-button-floating-bg);
        ${y}•processing: var(--arc-button-floating-bg-processing);
        ${y}•disabled: var(--arc-button-floating-bg-disabled);
        ${y}•focus: var(--arc-button-floating-bg-focus);
        ${y}•hover: var(--arc-button-floating-bg-hover);
        ${y}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${R}: var(--arc-color-fg-primary);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•active: var(--arc-color-fg-secondary);
      ${R}•processing: var(--arc-color-fg-secondary);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: var(--arc-color-bg-neutral-muted);
      ${y}•active: var(--arc-color-bg-neutral-muted);
      ${y}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${R}: var(--arc-color-fg-primary);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•hover: var(--arc-color-alpha-heavy);
      ${R}•active: var(--arc-color-alpha-heavy);
      ${R}•processing: var(--arc-color-alpha-heavy);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: transparent;
      ${y}•active: transparent;
      ${y}•processing: transparent;
    }
  }

`,cg=s`
  &[data-variant=neutral] {
    ${pr}•width: var(${f}•1);
    ${sr}•progress•color: var(--arc-color-border-brand-mid);
    ${sr}•base•color: var(--arc-color-alpha-mid);

    &:where([data-hierarchy=primary]) {
      ${R}: var(--arc-color-fg-primary);
      ${y}: transparent;
      ${Y}: var(--arc-color-border-mid);

      ${R}•active: var(--arc-color-fg-secondary);
      ${R}•processing: var(--arc-color-fg-secondary);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: var(--arc-color-bg-neutral-muted);
      ${y}•active: var(--arc-color-bg-neutral-subtle);
      ${y}•processing: transparent;
      ${y}•disabled: transparent;

      &:where([is-floating]) {
        ${y}: var(--arc-button-floating-bg);
        ${y}•processing: var(--arc-button-floating-bg-processing);
        ${y}•disabled: var(--arc-button-floating-bg-disabled);
        ${y}•focus: var(--arc-button-floating-bg-focus);
        ${y}•hover: var(--arc-button-floating-bg-hover);
        ${y}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${R}: var(--arc-color-fg-neutral-stark);
      ${y}: transparent;
      ${Y}: var(--arc-color-border-mid);

      ${R}•hover: var(--arc-color-fg-primary);
      ${R}•active: var(--arc-color-fg-secondary);
      ${R}•processing: var(--arc-color-fg-secondary);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${Y}•disabled: var(--arc-color-border-disabled);

      ${y}•hover: var(--arc-color-bg-neutral-muted);
      ${y}•active: var(--arc-color-bg-neutral-subtle);
      ${y}•processing: transparent;
      ${y}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${Y}: var(--arc-color-border-mid);
        ${Y}•hover: var(--arc-color-border-stark);
        ${Y}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${y}: var(--arc-button-floating-bg);
        ${y}•processing: var(--arc-button-floating-bg-processing);
        ${y}•disabled: var(--arc-button-floating-bg-disabled);
        ${y}•focus: var(--arc-button-floating-bg-focus);
        ${y}•hover: var(--arc-button-floating-bg-hover);
        ${y}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${R}: var(--arc-color-fg-neutral-stark);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•active: var(--arc-color-fg-secondary);
      ${R}•processing: var(--arc-color-fg-secondary);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: var(--arc-color-bg-neutral-muted);
      ${y}•active: var(--arc-color-bg-neutral-subtle);
      ${y}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${R}: var(--arc-color-fg-neutral-stark);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•hover: var(--arc-color-fg-primary);
      ${R}•active: var(--arc-color-fg-neutral-mid);
      ${R}•processing: var(--arc-color-fg-secondary);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: transparent;
      ${y}•active: transparent;
      ${y}•processing: transparent;
    }
  }

`,ig=s`
  &[data-variant=ai] {
    ${R}•disabled: var(--arc-color-fg-disabled);
    ${Y}•disabled: var(--arc-color-border-disabled);
    ${pr}•width: var(${f}•2);

    ${te}•bg: var(--arc-gradient-ai-200);
    ${te}•disabled: var(--arc-color-border-disabled);
    ${te}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${R}: var(--arc-color-fg-on-theme-stark);
      ${y}: var(--arc-button-gradient-ai-500) padding-box;
      ${Y}: transparent;

      ${R}•active: var(--arc-color-fg-neutral-mid);
      ${R}•processing: var(--arc-color-fg-on-theme-heavy);
      ${R}•hover: var(--arc-color-fg-on-theme-heavy);

      ${y}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${y}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${y}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${y}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${sr}•progress•color: var(--arc-color-mono-white);
      ${sr}•base•color: var(--arc-color-alpha-white-30);

      ${te}•hover: var(--arc-gradient-ai-200);
      ${te}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${R}: var(--arc-color-fg-primary);
      ${y}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${Y}: transparent;

      ${R}•active: var(--arc-color-fg-neutral-stark);
      ${R}•processing: var(--arc-color-fg-primary);

      ${y}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${y}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${y}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${y}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${y}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${sr}•progress•color: var(--arc-color-border-brand-mid);

      ${te}•hover: var(--arc-gradient-ai-300);
      ${te}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${y}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,sg=s`
  &[data-variant=alpha] {
    ${pr}•width: var(${f}•1);
    ${sr}•base•color: var(--arc-color-alpha-white-30);

    &:where([data-hierarchy=primary]) {
      ${R}: var(--arc-color-mono-black);
      ${y}: var(--arc-color-mono-white);
      ${Y}: transparent;

      ${R}•focus: var(--arc-color-mono-black);
      ${R}•active: var(--arc-color-alpha-black-60);
      ${R}•processing: var(--arc-color-mono-black);
      ${R}•disabled: var(--arc-color-alpha-black-60);

      ${y}•hover: var(--arc-color-alpha-white-70);
      ${y}•active: var(--arc-color-alpha-white-40);
      ${y}•processing: var(--arc-color-alpha-white-40);
      ${y}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${R}: var(--arc-color-alpha-white-95);
      ${y}: transparent;
      ${Y}: var(--arc-color-alpha-white-80);

      ${R}•active: var(--arc-color-alpha-white-80);
      ${R}•processing: var(--arc-color-alpha-white-95);
      ${R}•disabled: var(--arc-color-alpha-white-50);

      ${y}•hover: var(--arc-color-alpha-white-20);
      ${y}•active: var(--arc-color-alpha-white-40);
      ${y}•processing: var(--arc-color-alpha-white-25);
      ${y}•disabled: transparent;

      ${Y}•hover: var(--arc-color-alpha-white-100);
      ${Y}•focus: var(--arc-color-alpha-white-80);
      ${Y}•active: var(--arc-color-alpha-white-50);
      ${Y}•processing: transparent;
      ${Y}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${R}: var(--arc-color-alpha-white-95);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•active: var(--arc-color-alpha-black-60);
      ${R}•processing: var(--arc-color-alpha-white-95);
      ${R}•disabled: var(--arc-color-alpha-white-50);

      ${y}•hover: var(--arc-color-alpha-white-20);
      ${y}•active: var(--arc-color-alpha-white-40);
      ${y}•processing: var(--arc-color-alpha-white-20);
      ${y}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${R}: var(--arc-color-alpha-white-95);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•hover: var(--arc-color-alpha-white-60);
      ${R}•active: var(--arc-color-alpha-white-40);
      ${R}•processing: var(--arc-color-alpha-white-95);
      ${R}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,lg=s`
  &[data-variant=critical] {
    ${pr}•width: var(${f}•1);
    ${sr}•progress•color: var(--arc-color-border-brand-mid);

    &:where([data-hierarchy=primary]) {
      ${R}: var(--arc-color-fg-on-stark);
      ${y}: var(--arc-color-bg-critical-stark);
      ${Y}: transparent;

      ${R}•active: var(--arc-color-fg-critical-subtle);
      ${R}•processing: var(--arc-color-fg-on-heavy);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: var(--arc-color-bg-critical-heavy);
      ${y}•active: var(--arc-color-bg-critical-heavy);
      ${y}•processing: var(--arc-color-bg-critical-heavy);
      ${y}•disabled: var(--arc-color-bg-disabled);

      ${sr}•progress•color: var(--arc-color-mono-white);
      ${sr}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${R}: var(--arc-color-fg-critical-stark);
      ${y}: transparent;
      ${Y}: var(--arc-color-border-critical-stark);

      ${R}•active: var(--arc-color-fg-critical-subtle);
      ${R}•processing: var(--arc-color-fg-critical-stark);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: var(--arc-button-critical-bg-hover);
      ${y}•active: var(--arc-color-bg-critical-muted);
      ${y}•disabled: transparent;

      ${Y}•active: var(--arc-color-border-critical-subtle);
      ${Y}•processing: var(--arc-color-border-critical-stark);
      ${Y}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${y}: var(--arc-button-floating-bg);
        ${y}•processing: var(--arc-button-floating-bg-processing);
        ${y}•disabled: var(--arc-button-floating-bg-disabled);
        ${y}•focus: var(--arc-button-floating-bg-focus);

        ${y}•hover: var(--arc-button-critical-floating-bg-hover);
        ${y}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${R}: var(--arc-color-fg-critical-stark);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•active: var(--arc-color-fg-critical-subtle);
      ${R}•processing: var(--arc-color-fg-critical-stark);
      ${R}•disabled: var(--arc-color-fg-disabled);

      ${y}•hover: var(--arc-button-critical-bg-hover);
      ${y}•active: var(--arc-color-bg-critical-subtle);
      ${y}•processing: var(--arc-color-bg-critical-muted);
      ${y}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${R}: var(--arc-color-fg-critical-stark);
      ${y}: transparent;
      ${Y}: transparent;

      ${R}•hover: var(--arc-color-fg-critical-mid);
      ${R}•active: var(--arc-color-fg-critical-subtle);
      ${R}•processing: var(--arc-color-fg-critical-stark);
      ${R}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,dg=s`
  /**
   * @deprecated • restores solid bg for legacy \`variant="secondary"\` / \`variant="secondary-inverse"\` usage,
   * which now map to \`data-variant=common data-hierarchy=secondary\` (transparent by default).
   */
  &[is-deprecated=secondary]:not([is-floating]) {
    ${y}: var(--arc-color-mono-white);
    ${y}•hover: var(--arc-color-bg-neutral-muted);
    ${y}•active: var(--arc-color-bg-neutral-subtle);
    ${y}•processing: var(--arc-color-mono-white);
    ${y}•disabled: var(--arc-color-mono-white);
    ${y}•focus: var(--arc-color-alpha-white-3);
  }

  &[is-deprecated=secondary-inverse]:not([is-floating]) {
    ${y}: transparent;
    ${y}•hover: var(--arc-color-bg-neutral-muted);
    ${y}•active: var(--arc-color-bg-neutral-subtle);
    ${y}•processing: transparent;
    ${y}•disabled: transparent;
    ${y}•focus: var(--arc-color-alpha-white-3);
  }
`,ug=s`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${sr}•progress•color: var(--arc-color-mono-white);
    ${sr}•base•color: var(--arc-color-alpha-white-30);

    ${R}: var(--arc-color-mono-black);
    ${y}: var(--arc-color-alpha-white-70);
    ${Y}: var(--arc-color-alpha-black-15);

    ${R}•active: var(--arc-color-alpha-black-50);
    ${R}•processing: var(--arc-color-alpha-black-50);
    ${R}•disabled: var(--arc-color-alpha-black-40);

    ${y}•hover: var(--arc-color-alpha-white-90);
    ${y}•focus: var(--arc-color-alpha-white-70);
    ${y}•active: var(--arc-color-alpha-white-70);
    ${y}•disabled: var(--arc-color-alpha-white-60);
    ${y}•processing: var(--arc-color-alpha-white-60);

    ${Y}•active: var(--arc-color-alpha-black-10);
    ${Y}•disabled: var(--arc-color-alpha-black-10);
  }
`,hg=s`
  ${E}•color: var(${R});
  ${E}•background: var(${y});
  ${E}•font•weight: var(--arc-font-weight-600);
  ${E}•cursor: var(--arc-button-cursor, pointer);
  ${E}•padding: 0 var(${E}•spacing);
  ${E}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap'
   */
  ${fe}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${fe}•spacing)));

  /**
   * @note: default is 'inherit' so it can inherit from button's size.
   * The 'size="inherit"' sets the button's font-size to 1em,
   * and sets the label font-size to 0.875em (or 14px at 100%) to
   * match the default button's text size. This allows the label
   * to still remain scalable by the parent container's font-size.
   */
  ${fe}•font•size: inherit;

  /**
   * @note: Transforms variant-dependent '${pr}•width' into '${pr}•size'
   * which is also used for inset/padding on the AI Button's [arc-button-mask] sizing.
   */
  ${pr}•size: var(--arc-button-border-width, var(${pr}•width));

  ${pr}•color: var(${Y});
  ${pr}: var(${pr}•size) solid var(${pr}•color, transparent);
  ${pr}•radius: var(--arc-border-radius-pill);

  ${mt}: var(--arc-border-width-md) solid var(${mt}•color, transparent);
  ${mt}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${sr}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${sr}•circle•color: var(--arc-button-color, var(${sr}•base•color, var(--arc-color-alpha-mid)));
  ${sr}•circle•opacity: var(--arc-alpha-100);

  ${E}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    height 0.2s ease-out,
    border-color 0.2s ease-out,
    outline-color 0.2s ease-out,
    opacity 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &[data-hierarchy=link-style] {
    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication • ArcIcon -----------------------• */

  --arc-icon-size: var(${Or}•size);

  ${Zr}•width: var(${Zr}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${Or}•size•large);

    [arc-button-icon]:has(svg) {
      ${Zr}•width: var(${Zr}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${sr}•size);
  --arc-spinner-progress-color: var(${sr}•progress•color);
  --arc-spinner-circle-color: var(${sr}•circle•color);
  --arc-spinner-circle-opacity: var(${sr}•circle•opacity);
  --arc-spinner-position: var(${sr}•position, absolute);
  --arc-spinner-inset: var(${sr}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${sr}•translate, -50% -50%);

`,gg=s`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${E}•position: relative;
  }

  &[is-disabled] {
    ${E}•color: var(${R}•disabled, var(${R}));
    ${E}•background: var(${y}•disabled, var(${y}));
    ${pr}•color: var(${Y}•disabled, var(${Y}));
    ${E}•opacity: var(--arc-button-disabled-opacity, unset);
    ${E}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${te}•bg: var(${te}•disabled);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${E}•color: var(${R}•hover, var(${R}));
      ${E}•background: var(${y}•hover, var(${y}));
      ${pr}•color: var(${Y}•hover, var(${Y}));
      ${te}•bg: var(${te}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${E}•color: var(${R}•active, var(${R}));
      ${E}•background: var(${y}•active, var(${y}));
      ${pr}•color: var(${Y}•active, var(${Y}));
      ${te}•bg: var(${te}•active);
    }
  }

  &[is-processing] {
    ${E}•content•visibility: hidden;
    ${E}•content•opacity: 0;

    /* spinner svg position controls */
    ${sr}•position: absolute;
    ${sr}•inset: 50% auto auto 50%;
    ${sr}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${E}•content•visibility: visible;

    /* spinner svg position controls */
    ${sr}•position: relative;
    ${sr}•inset: 0;
    ${sr}•translate: 0;
    ${sr}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${E}•opacity: var(--arc-button-processing-opacity, unset);
    ${E}•cursor: var(--arc-button-processing-cursor, default);
    ${te}•bg: var(${te}•processing);

    ${E}•color: var(${R}•processing, var(${R}));
    ${E}•background: var(${y}•processing, var(${y}));
    ${pr}•color: var(${Y}•processing, var(${Y}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${E}•color: var(${R}•focus, var(${R}));
    ${E}•background: var(${y}•focus, var(${y}));
    ${pr}•color: var(${Y}•focus, var(${Y}));
    ${mt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,pg=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${J0}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${tg}
    ${og}
    ${ng}
    ${dg}
    ${cg}
    ${ig}
    ${sg}
    ${lg}
    ${ug}

    /* CORE VARIABLES ----------------------------------------------• */
    ${hg}
    ${gg}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${E}•position: fixed;
      ${E}•margin: 0;
      ${E}•z-index: 1000;
    }

    /* "floating" button mitigation */
    &:where([arc-shadow], [is-floating]) {
      backdrop-filter: var(--arc-button-backdrop-filter, blur(0.375em));
    }

    /* Plain & Link-style button structural overrides */
    &:is(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${fe}•padding: unset;
      ${E}•padding: unset;
      ${E}•height: unset;
      ${pr}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(--arc-button-inline-spacing, var(${fe}•spacing));
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${E}•font•weight: inherit;
      ${E}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${E}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${E}•cursor));
    position: var(--arc-button-position, var(${E}•position, unset));
    transition: var(--arc-button-transition, var(${E}•transition));
    z-index: var(--arc-button-z-index, var(${E}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${E}•font•weight));
    font-size: var(--arc-button-font-size, var(${E}•font•size, inherit));
    padding: var(--arc-button-padding, var(${E}•padding));
    margin: var(--arc-button-margin, var(${E}•margin, unset));

    width: var(--arc-button-width, var(${E}•width, auto));
    min-width: var(--arc-button-min-width, var(${E}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${E}•max•width, 100%));

    height: var(--arc-button-height, var(${E}•height, auto));
    min-height: var(--arc-button-min-height, var(${E}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${E}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${E}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${E}•color));
    background: var(--arc-button-background, var(${E}•background));
    border: var(--arc-button-border, var(${pr}));
    border-radius: var(--arc-button-border-radius, var(${pr}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${mt}));
    outline-offset: var(--arc-button-outline-offset, var(${mt}•offset));
    overflow: var(--arc-button-overflow, unset);

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;

      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);

      opacity: var(--arc-button-content-opacity, var(${E}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${E}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${E}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      font-size: var(--arc-button-label-font-size, var(${fe}•font•size));
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${E}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${fe}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${Or}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${Or}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${E}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${Or}•width: var(--arc-button-svg-width, var(${Zr}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: calc(var(${pr}•size) * -1);
      padding: var(${pr}•size);
      background: var(${te}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${pr}•radius));
      transition: var(--arc-button-transition, inherit);
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${E}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,El=(0,i.jsx)(Kc,{}),vg=(0,i.jsx)("span",{"arc-button-mask":""}),fg=!!u.version.startsWith("18"),mg=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},bg=({popoverTarget:r,popoverTargetAction:e})=>fg?{popovertarget:r??void 0,popovertargetaction:e??void 0}:{popoverTarget:r??void 0,popoverTargetAction:e??void 0},Er=(0,u.forwardRef)(({children:r,disabled:e,...a},t)=>{const o=(0,u.useRef)(null),{_isCustom:n,iconEnd:c,iconStart:l,icon:d,text:h,isActive:g,isDisabled:v,isProcessing:p,isProcessingWithText:m,hasLargeIcon:b,tag:$,href:w,type:S,title:x,layout:C,shape:I,size:A="lg",variant:j="common",hierarchy:M="primary",scheme:H="auto",shadow:z,onMedia:k,isOnMedia:N,floating:U,isInverse:Z=!1,...K}=a,{isFloating:q,inset:F}=mg(U),X=N??k,P=$??(w?"a":"button"),T=P==="button"?S||"button":void 0,O=C==="icon",V=m||p||v||e,ar=K?.["aria-disabled"]||V||void 0,rr=n?void 0:Al({variant:j}),or=n?void 0:Sl({variant:j,hierarchy:M}),mr=!n&&ei(j)?j:void 0,L=n?void 0:wl({shape:I}),G=n?"inherit":A,fr=D0({layout:C,isFloating:q}),br=B0({isFloating:q,isOnMedia:X,shadow:z}),Sr=zl({variant:j,isInverse:Z,scheme:H}),Dr=!O&&(r||h),Fr=m&&El||l||d,W=!O&&(m&&!(l||d)?void 0:c),zr=(p||m&&O)&&El,vr=rr==="ai"?vg:void 0,{tooltip:Tr,...$e}=K,Ie=ht(Tr)?Tr:void 0,ra=a.tooltip??Ie,da=!!ra,Mt=ht(ra)?{text:ra}:ra,ua=K["aria-describedby"],nr=Rr(void 0,"arc-tooltip"),Lr=a.id?`${a.id}-tooltip`:nr,ce=da?Lr:void 0,Te=da?Wt([ua,ce]):ua,{anchorName:Sa,style:Oa,popoverTarget:za,popoverTargetAction:vs,...fs}=$e,Ku=za?qt(String(Sa||a?.id)):void 0,ms=da?qt(String(ce)):void 0,Ea=Ns(Oa)?Oa:void 0,Wu=Ea&&"anchorName"in Ea&&Ea.anchorName,Ob=[...(ht(Wu)?il(Wu,", "):[]).map(qt),...Ku?[Ku]:[],...ms?[ms]:[]],Gu=Wt(Ob,1/0,", "),Db=Ea!=null&&"inset"in Ea&&Ea.inset!==void 0&&Ea.inset!==null&&Ea.inset!=="",Nb={...Ea??{},...Gu?{anchorName:Gu}:{},...F!==void 0&&!Db?{"--js\u2022inset":F}:{}},Fb=bg({popoverTarget:za||void 0,popoverTargetAction:vs||void 0}),Hb=(0,u.useCallback)(qu=>{o.current=qu,je(t,qu)},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(P,{...fs,...Fb,ref:Hb,"arc-button":n?"custom":"","arc-scheme":Sr,"arc-shadow":br||void 0,disabled:!w&&V||void 0,href:w||void 0,title:da?void 0:x||void 0,type:T,"data-layout":fr,"data-shape":L,"data-size":G,"data-variant":rr,"data-hierarchy":or,"has-large-icon":b?"":void 0,"is-deprecated":mr,"is-floating":q?"":void 0,"is-on-media":X?"":void 0,"is-active":g?"":void 0,"is-processing":p||m&&O?"":void 0,"is-processing-with-text":m&&!O?"":void 0,"is-disabled":V||ar?"":void 0,"aria-disabled":ar,"aria-describedby":Te||void 0,style:Nb,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!Fr&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof Fr=="string"?(0,i.jsx)(ir,{icon:Fr}):Fr}),!!Dr&&(0,i.jsx)("span",{"arc-button-label":"",children:Dr}),!!W&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof W=="string"?(0,i.jsx)(ir,{icon:W}):W})]}),zr,vr]}),da&&(0,i.jsx)(fn,{...Mt,id:ce,alternateAnchor:Mt?.alternateAnchor??(()=>o.current),anchorName:ms})]})});Er.displayName="ArcButton",lr("ArcButton",pg);const to=(0,u.forwardRef)((r,e)=>(0,i.jsx)(Er,{...r,ref:e,"arc-popover-button":""})),Il=({isInverse:r=!1,isOpen:e,...a})=>(0,i.jsx)(Er,{icon:"fa-regular fa-xmark",text:"Dismiss",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),$g=({isInverse:r=!1,...e})=>(0,i.jsx)(Er,{icon:"fa-regular fa-arrow-left",text:"Go Back",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),yg=({children:r,isSticky:e,showDivider:a,showDismiss:t,dismissProps:o,showGoBack:n,goBackProps:c,headerSlotEnd:l,tag:d="header",...h})=>(0,i.jsx)(d,{...h,"arc-popover-header":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsxs)("div",{"arc-popover-display":"",children:[(0,i.jsxs)("div",{"arc-popover-header-slot":"start",children:[n&&(0,i.jsx)($g,{...c}),r]}),(0,i.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,t&&(0,i.jsx)(Il,{...o})]})]})}),xg=({children:r,tag:e="article",...a})=>(0,i.jsx)(e,{...a,"arc-popover-body":"",children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})}),kg=({children:r,isSticky:e,showDivider:a,tag:t="footer",...o})=>(0,i.jsx)(t,{...o,"arc-popover-footer":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})});to.displayName="ArcPopoverButton";const D=s`--arc-popover`,Xr=s`--arc•popover`,cr=s`--arc•trail•mix`,ai=s`${Xr}•radius`,wg=s`${Xr}•content`,bn=s`${Xr}•outline`,se=s`${Xr}•offset`,ea=s`${Xr}•header`,Cg=s`${Xr}•body`,ti=s`${Xr}•divider`,$n=s`${Xr}•footer`,Ze=s`${Xr}•tail`,yr=s`${Ze}•top`,xr=s`${Ze}•left`,oo=s`${Ze}•size`,we=s`${Ze}•x`,Ce=s`${Ze}•y`,oi=s`${Xr}•font•size`,yn=s`${Xr}•padding`,le=s`${Xr}•margin`,bt=s`${ea}•padding`,Me=s`${Cg}•padding`,aa=s`${$n}•padding`,_l=s`${Xr}•fg`,xn=s`${Xr}•bg`,kn=s`${wg}•bg`,wn=s`${Ze}•fill•a`,Cn=s`${Ze}•fill•b`,An=s`${Ze}•edge•a`,Sn=s`${Ze}•edge•b`,Ag=s`

  ${Xr}•fallback: none;
  ${bn}: var(${D}-outline-size, var(--arc-border-width-md));
  ${ai}: var(${D}-border-radius, var(--arc-border-radius-lg));
  ${se}: var(${D}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${yn}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${cr}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${we}: var(${D}-tail-x, 1.75em);
  ${Ce}: var(${D}-tail-y, 1.125em);
  ${oo}: 0px;

  &:where([has-tail]) {
    ${oo}: var(${D}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${se}: calc(var(${D}-offset, var(--js•offset, 0px)) + var(${oo}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${yn}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${Me}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${Me}•block•end: 0; }
  }

`,Sg=s`

  /* default variant: common */
  &[variant] {
    ${_l}: var(--arc-color-fg-primary);
    ${xn}: var(${D}-background, var(--arc-color-bg-mono)) border-box;
    ${kn}: var(${D}-background, var(--arc-color-bg-mono)) padding-box;
    ${wn}: var(${D}-background, var(--arc-color-bg-mono));
    ${Cn}: var(${D}-background, var(--arc-color-bg-mono));
    ${An}: var(${D}-background, var(--arc-color-bg-mono));
    ${Sn}: var(${D}-background, var(--arc-color-bg-mono));
    ${Xr}•shadow: var(--arc-shadow-lg);
    ${ti}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${xn}: var(--arc-color-border-brand-mid) border-box;
    ${kn}: var(--arc-color-bg-brand-muted) padding-box;
    ${wn}: var(--arc-color-bg-brand-muted);
    ${Cn}: var(--arc-color-bg-brand-muted);
    ${An}: var(--arc-color-border-brand-mid);
    ${Sn}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${xn}: var(--arc-gradient-ai-200) border-box;
    ${kn}: var(--arc-gradient-ai-50) padding-box;
    ${wn}: var(${D}-ai-purple-50);
    ${Cn}: var(${D}-ai-blue-50);
    ${An}: var(${D}-ai-purple-200);
    ${Sn}: var(${D}-ai-blue-200);
  }

`,zg=s`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${oi}: 0.75em;
    ${ea}•gap: 0.75em;
    ${bt}•block: 0.75em;
    ${bt}•inline: 0.75em;

    ${Me}•block: 0.75em;
    ${Me}•inline: 0.75em;

    ${$n}•gap: 0.75em;
    ${aa}•inline: 0.75em;
    ${aa}•block•start: 0.75em;
    ${aa}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${oi}: 0.875em;
    ${ea}•gap: 1.125em;
    ${bt}•block: 1em;
    ${bt}•inline: 1.25em;

    ${Me}•block: 1.25em;
    ${Me}•inline: 1.25em;

    ${$n}•gap: 1.125em;
    ${aa}•inline: 1.25em;
    ${aa}•block•start: 1em;
    ${aa}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${yn}: 1.25em;
    }
  }

`,no={TOP:s`
    &[anchor-at*='top-'] {
      ${le}: 0 0 var(${se}) 0;
      ${yr}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${cr}: 95%;
      ${xr}: calc(0% + var(${we}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${cr}: 75%;
      ${xr}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${cr}: 53.5%;
      ${xr}: calc(100% - var(${we}));
    }
  `,RIGHT:s`
    &[anchor-at*='right-'] {
      ${le}: 0 0 0 var(${se});
      ${xr}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${cr}: 53.5%;
      ${yr}: calc(0% + var(${Ce}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${cr}: 75%;
      ${yr}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${cr}: 95%;
      ${yr}: calc(100% - var(${Ce}));
    }
  `,BOTTOM:s`
    &[anchor-at*='bottom-'] {
      ${le}: var(${se}) 0 0 0;
      ${yr}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${cr}: 5%;
      ${xr}: calc(100% - var(${we}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${cr}: 25%;
      ${xr}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${cr}: 47.5%;
      ${xr}: calc(0% + var(${we}));
    }
  `,LEFT:s`
    &[anchor-at*='left-'] {
      ${le}: 0 var(${se}) 0 0;
      ${xr}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${cr}: 47.5%;
      ${yr}: calc(100% - var(${Ce}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${cr}: 25%;
      ${yr}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${cr}: 5%;
      ${yr}: calc(0% + var(${Ce}));
    }
  `,CENTER_AND_CORNERS:s`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${Ze}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${le}: 0; }
    &[anchor-at*='corner'] { ${le}: var(${se}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},$t={FLIP_BLOCK:s`
    &[anchor-at*='top-'] { ${le}: 0 0 var(${se}) 0; }
    &[anchor-at='top-start']::before { ${cr}: 47.5%; ${yr}: 0%; }
    &[anchor-at='top-center']::before { ${cr}: 25%; ${yr}: 0%; }
    &[anchor-at='top-end']::before { ${cr}: 5%; ${yr}: 0%; }

    &[anchor-at='right-start']::before { ${cr}: 95%; ${yr}: calc(100% - var(${Ce})); }
    &[anchor-at='right-end']::before { ${cr}: 53.5%; ${yr}: calc(0% + var(${Ce})); }

    &[anchor-at*='bottom-'] { ${le}: var(${se}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${cr}: 53.5%; ${yr}: 100%; }
    &[anchor-at='bottom-center']::before { ${cr}: 75%; ${yr}: 100%; }
    &[anchor-at='bottom-start']::before { ${cr}: 95%; ${yr}: 100%; }

    &[anchor-at='left-end']::before { ${cr}: 5%; ${yr}: calc(0% + var(${Ce})); }
    &[anchor-at='left-start']::before { ${cr}: 47.5%; ${yr}: calc(100% - var(${Ce})); }
  `,FLIP_INLINE:s`
    &[anchor-at='top-start']::before { ${cr}: 53.5%; ${xr}: calc(100% - var(${we})); }
    &[anchor-at='top-end']::before { ${cr}: 95%; ${xr}: calc(0% + var(${we})); }

    &[anchor-at*='right-'] { ${le}: 0 var(${se}) 0 0; }
    &[anchor-at='right-start']::before { ${cr}: 5%; ${xr}: 100%; }
    &[anchor-at='right-center']::before { ${cr}: 25%; ${xr}: 100%; }
    &[anchor-at='right-end']::before { ${cr}: 47.5%; ${xr}: 100%; }

    &[anchor-at='bottom-end']::before { ${cr}: 47.5%; ${xr}: calc(0% + var(${we})); }
    &[anchor-at='bottom-start']::before { ${cr}: 5%; ${xr}: calc(100% - var(${we})); }

    &[anchor-at*='left-'] { ${le}: 0 0 0 var(${se}); }
    &[anchor-at='left-end']::before { ${cr}: 95%; ${xr}: 0%; }
    &[anchor-at='left-center']::before { ${cr}: 75%; ${xr}: 0%; }
    &[anchor-at='left-start']::before { ${cr}: 53.5%; ${xr}: 0%; }
  `,FLIP_BLOCK_INLINE:s`
    &[anchor-at*='top-'] { ${le}: 0 0 var(${se}) 0; }
    &[anchor-at='top-start']::before { ${cr}: 5%; ${yr}: 0%; ${xr}: calc(100% - var(${we})); }
    &[anchor-at='top-end']::before { ${cr}: 47.5%; ${yr}: 0%; ${xr}: calc(0% + var(${we})); }

    &[anchor-at*='right-'] { ${le}: 0 var(${se}) 0 0; }
    &[anchor-at='right-start']::before { ${cr}: 47.5%; ${yr}: calc(100% - var(${Ce})); ${xr}: 100%; }
    &[anchor-at='right-end']::before { ${cr}: 5%; ${yr}: calc(0% + var(${Ce})); ${xr}: 100%; }

    &[anchor-at*='bottom-'] { ${le}: var(${se}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${cr}: 95%; ${yr}: 100%; ${xr}: calc(0% + var(${we})); }
    &[anchor-at='bottom-start']::before { ${cr}: 53.5%; ${yr}: 100%; ${xr}: calc(100% - var(${we})); }

    &[anchor-at*='left-'] { ${le}: 0 0 0 var(${se}); }
    &[anchor-at='left-end']::before { ${cr}: 53.5%; ${yr}: calc(0% + var(${Ce})); ${xr}: 0%; }
    &[anchor-at='left-start']::before { ${cr}: 95%; ${yr}: calc(100% - var(${Ce})); ${xr}: 0%; }
  `},Eg=s`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${le});

    container-type: anchored;
    position-anchor: var(${D}-anchor-name, var(--js•anchor));

    ${no.TOP}
    ${no.RIGHT}
    ${no.BOTTOM}
    ${no.LEFT}
    ${no.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${$t.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${$t.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${$t.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${$t.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${$t.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${$t.FLIP_BLOCK_INLINE}
        }
      }
    }
`,yt={BACKDROP:s`
    [arc-popover]::backdrop {
      background: var(${D}-backdrop, transparent);
    }
  `,CONTENT:s`
    [arc-popover-content] {
      flex: var(${D}-flex, 1);
      position: relative;
      display: var(${D}-content-display, flex);
      flex-direction: var(${D}-content-flex-direction, column);
      gap: var(${D}-content-gap, 0);

      overflow: var(${D}-overflow, auto);
      overscroll-behavior: var(${D}-overscroll-behavior, contain);

      color: var(${D}-color, var(${_l}));
      padding: var(${D}-padding, var(${yn}));
      margin: var(${D}-margin, unset);
      background: var(${D}-content-background, var(${kn}));
      border-radius: calc(var(${ai}) - var(${bn}));
      border: var(${D}-border, none);

      height: var(${D}-height, auto);
      min-height: var(${D}-min-height, auto);
      max-height: var(${D}-max-height, 65vh);
      resize: var(${D}-resize, none);
    }
  `,HEADER:s`
    [arc-popover-header] {
      flex: var(${D}-header-flex, none);
      display: var(${D}-header-display, flex);
      justify-content: var(${D}-header-justify-content, space-between);
      align-items: var(${D}-header-align-items, baseline);
      gap: var(${D}-header-gap, var(${ea}•gap));

      padding: var(${D}-header-padding,
        var(${bt}•block)
        var(${bt}•inline)
      );

      color: var(${D}-header-color, inherit);
      background: var(${D}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${D}-header-z-index, 2);
        top: var(${D}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${D}-header-border-bottom, var(${ti}));
      }

      :where([arc-button]) {
        margin: var(${D}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${ea}•slot•flex: 1;
      ${ea}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${ea}•slot•flex: none;
      ${ea}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${ea}•slot•flex);
      display: var(${D}-header-display, flex);
      justify-content: var(${D}-header-justify-content, unset);
      align-items: var(${D}-header-align-items, baseline);
      gap: var(${D}-header-slot-gap, var(${ea}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      inset: var(${D}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${D}-dismiss-margin, 0);
    }
  `,BODY:s`
    [arc-popover-body] {
      flex: var(${D}-body-flex, 1);
      display: var(${D}-body-display, block);
      flex-direction: var(${D}-body-flex-direction, unset);

      padding: var(${D}-body-padding,
        var(${Me}•block•start, var(${Me}•block))
        var(${Me}•inline)
        var(${Me}•block•end, var(${Me}•block))
        var(${Me}•inline)
      );
    }
  `,FOOTER:s`
    [arc-popover-footer] {
      flex: var(${D}-footer-flex, none);
      display: var(${D}-footer-display, flex);
      flex-direction: var(${D}-footer-flex-direction, row-reverse);
      justify-content: var(${D}-footer-justify-content, space-between);
      align-items: var(${D}-footer-align-items, center);
      gap: var(${D}-footer-gap, var(${$n}•gap));

      padding: var(${D}-footer-padding,
        var(${aa}•block•start)
        var(${aa}•inline)
        var(${aa}•block•end)
        var(${aa}•inline)
      );

      background: var(${D}-footer-background, none);
      color: var(${D}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${D}-footer-z-index, 2);
        bottom: var(${D}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${D}-footer-border-top, var(${ti}));
      }
    }
  `,TAIL:s`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${Ze}•display, block);

      inset: auto;
      top: var(${yr}, auto);
      left: var(${xr}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${oo});
      height: var(${oo});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${wn}) var(${cr}),
        var(${Cn}) clamp(0%, 100% - var(${cr}), 100%)
      );

      border: var(${bn}) solid color-mix(in srgb,
        var(${An}) var(${cr}),
        var(${Sn}) clamp(0%, 100% - var(${cr}), 100%)
      );
    }
  `},Ig=s`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${D}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${D}-background, var(${xn}));
    border: var(${bn}) solid transparent;
    border-radius: var(${ai});
    box-shadow: var(${D}-shadow, var(${Xr}•shadow));
    width: var(${D}-width, auto);
    height: var(${D}-height, auto);
    min-width: var(${D}-min-width, auto);
    min-height: var(${D}-min-height, auto);
    max-width: var(${D}-max-width, 100vw);
    max-height: var(${D}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${D}-font-size, var(${oi}));
  }

  ${yt.CONTENT}
  ${yt.HEADER}
  ${yt.BODY}
  ${yt.FOOTER}
  ${yt.TAIL}
  ${yt.BACKDROP}
`,co={SETUP:Ag,ANCHORS:Eg,VARIANTS:Sg,DENSITIES:zg,ELEMENT:Ig},_g=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${rg}

  [arc-popover] {
    ${co.SETUP}
    ${co.VARIANTS}
    ${co.DENSITIES}
  }

  ${co.ANCHORS}
  ${co.ELEMENT}

  /* POPOVER anchoring mitigation ----------------------------------• */

  [arc-popover][is-floating] {
    position-area: none;
    position-try-fallbacks: none;
  }

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    z-index: var(--arc-popover-z-index, 10000); /* default for floating-ui fallback */
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-behavior: allow-discrete;
    transition-property: display, opacity;

    @supports (overlay: auto) {
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,Tl=(0,u.forwardRef)(({children:r,popover:e=ve.popover,anchorAt:a=ve.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:n,alternateAnchor:c,boundary:l=ve.boundary,tryFallbacks:d=ve.tryFallbacks,density:h=ve.density,variant:g=ve.variant,scheme:v=ve.scheme,isInverse:p,hasTail:m,tailSize:b=ve.tailSize,offset:$=ve.offset,hidePopoverButton:w,headerSlot:S,showHeaderDivider:x,isHeaderSticky:C,showDismiss:I,dismissProps:A,showGoBack:j,goBackProps:M,headerSlotEnd:H,footerSlot:z,isFooterSticky:k,showFooterDivider:N,tag:U="div",contentTag:Z="div",onToggle:K,...q},F)=>{const X=(0,u.useRef)(null),P=(0,u.useRef)(null),T=(0,u.useRef)(null),O=(0,u.useRef)(K);(0,u.useImperativeHandle)(F,()=>P.current);const[V,ar]=(0,u.useState)(!1),rr=(0,u.useMemo)(()=>v==="auto"?void 0:p?"inverse":v,[p,v]),or=(0,u.useCallback)(()=>{if(typeof document>"u")return X.current??null;const vr=Re(X.current??P.current)??document;return n?vr.getElementById(n):typeof c=="string"?vr.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:X.current??null},[c,n]),mr=d||l==="flip",L=!!m&&!Js.includes(a),G=Qs({canHaveTail:L,tailSize:b}),fr=(0,u.useMemo)(()=>{const vr=t||n||(typeof c=="string"?c:void 0)||o?.id||q.id||void 0;return Dc(String(vr))},[t,o?.id,q.id,c,n]),br=(0,u.useMemo)(()=>({popoverTarget:q.id,"aria-haspopup":!0,"aria-controls":q.id,"aria-expanded":V}),[q.id,V]),Sr=(0,u.useMemo)(()=>({isOpen:V,"aria-label":"Dismiss",...br,...A}),[A,V,br]),Dr=(0,u.useMemo)(()=>({ref:X,...br,...o,tooltip:V?void 0:o?.tooltip,anchorName:fr||""}),[o,br,fr,V]),Fr=(0,u.useMemo)(()=>({"--js\u2022anchor":Dr?.anchorName||"","--js\u2022offset":Number($)===0?"":`${$}px`,"--js\u2022tail":G.cssTailVar}),[Dr?.anchorName,$,G.cssTailVar]);en(()=>{const vr=or();if(T.current=vr,!!vr)return el(vr,Dr.anchorName)},[or,Dr.anchorName,V]),(0,u.useEffect)(()=>{O.current=K},[K]),(0,u.useEffect)(()=>{const vr=P.current;if(!vr)return;const Tr=$e=>{const{newState:Ie}=$e,_e=Ie==="open";ar(_e),_e&&(T.current=or()),O.current?.($e)};return vr.addEventListener("toggle",Tr),()=>vr.removeEventListener("toggle",Tr)},[or]),i0({anchorEl:T.current,popoverEl:P.current,anchorAt:a,tryFallbacks:mr,offsetPx:Number($)||0,tailSizePx:G.floatingTailPx,hasTail:L,isOpen:V}),u0({anchorEl:T.current,popoverEl:P.current,anchorAt:a,tryFallbacks:mr,hasTail:L,isOpen:V});const W=!!(S||j||H),zr=!!z;return(0,i.jsxs)(i.Fragment,{children:[!((n||c)&&w)&&(0,i.jsx)(to,{...Dr}),(0,i.jsxs)(U,{...q,ref:P,"arc-popover":"","arc-scheme":rr,"anchor-at":a,"is-floating":Xs?"":void 0,"try-fallbacks":mr?"":void 0,popover:e,variant:g,density:h,"has-tail":L?"":void 0,role:q.role??"dialog",style:{...q.style,...Fr},children:[(0,i.jsxs)(Z,{"arc-popover-content":"",children:[W&&(0,i.jsx)(yg,{showDivider:x,showGoBack:j,goBackProps:M,headerSlotEnd:H,showDismiss:I,dismissProps:Sr,isSticky:C,children:S}),W||zr?(0,i.jsx)(xg,{children:r}):(0,i.jsx)(Z,{"arc-popover-display":"",children:r}),zr&&(0,i.jsx)(kg,{showDivider:N,isSticky:k,children:z})]}),I&&!W&&(0,i.jsx)(Il,{...Sr})]})]})});Tl.displayName="ArcPopover";const ni=Tl;ni.handlePopover=rl,ni.Button=to;const ma=ni;lr("ArcPopover",_g);const Tg=s`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${f}•4) var(${f}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${f}•6);
      padding: var(${f}•4) var(${f}•8);
    }

    ${kc}
    ${Os}
  }

}
`,jg=r=>(0,i.jsx)("ul",{...r,"data-element":"list"}),Rg=r=>(0,i.jsx)("li",{...r,"data-element":"list-item"}),Pg=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:t,...o})=>(0,i.jsx)(jc,{title:`+${r}`,children:(0,i.jsx)(ma.Button,{...o,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),Mg=({children:r,id:e,size:a="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:n="bottom-end",tryFallbacks:c=!0,...l})=>{const d=Math.min(t,999),h=Rr(e,"arc-avatar-overflow"),g=(0,u.useMemo)(()=>`${h}-anchor`,[h]),v=(0,u.useMemo)(()=>u.Children.toArray(r),[r]);return(0,i.jsxs)(i.Fragment,{children:[d>0&&(0,i.jsx)(Pg,{count:d,anchorId:g,overflowId:h,shouldShowOverflow:o}),o&&d>0&&(0,i.jsx)(ma,{...l,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:n,tryFallbacks:c,alternateAnchorId:g,hidePopoverButton:!0,variant:"common","data-size":a,children:(0,i.jsx)(jg,{children:v.map((p,m)=>(0,i.jsx)(Rg,{children:p},m))})})]})};lr("ArcAvatarOverflow",Tg);const jl=({fg:r,bg:e})=>s`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${e}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${e}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${e}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${e}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${e}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${e}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${e}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${e}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${e}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${e}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${e}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${e}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${e}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${e}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${e}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${e}•low: var(--arc-color-alpha-black-40);
  }
`,Rl=({fg:r,bg:e})=>s`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${e}: var(${e}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${e}: var(${e}•low);
  }
`,J=s`--arc•badge`,ci=s`${J}•fg`,ii=s`${J}•bg`,Lg=jl({fg:ci,bg:ii}),Bg=Rl({fg:ci,bg:ii}),Og=s`
  &:has(>[data-size=lg]) {
    ${J}•font•size: var(${f}•14);
    ${J}•font•size•caps: var(${f}•12);
    ${J}•size: var(${f}•24);
    ${J}•min•size: var(${f}•30);
    ${J}•padding•inline: var(${f}•8);
    ${J}•border•radius: var(${f}•4);
    ${J}•gap: var(${f}•4);
  }

  &:has(>[data-size=md]) {
    ${J}•font•size: var(${f}•12);
    ${J}•font•size•caps: var(${f}•10);
    ${J}•size: var(${f}•20);
    ${J}•min•size: var(${f}•24);
    ${J}•padding•inline: var(${f}•6);
    ${J}•border•radius: var(${f}•4);
    ${J}•gap: var(${f}•4);
  }

  &:has(>[data-size=sm]) {
    ${J}•font•size: var(${f}•10);
    ${J}•font•size•caps: var(${f}•8);
    ${J}•size: var(${f}•16);
    ${J}•min•size: var(${f}•18);
    ${J}•padding•inline: var(${f}•4);
    ${J}•border•radius: var(${f}•4);
    ${J}•gap: var(${f}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${J}•font•size: 1em;
    ${J}•font•size•text: 0.75em;
    ${J}•font•size•caps: 0.625em;
    ${J}•size: 1.25em;
    ${J}•min•size: 1.5em;
    ${J}•padding•inline: 0.375em;
    ${J}•border•radius: 0.25em;
    ${J}•gap: 0.25em;
  }
`,Dg=s`
  &:has(>[data-layout=fill]) {
    ${J}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${J}•display: flex;
    ${J}•min•width: var(${J}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${J}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${J}•display: inline-flex;
    ${J}•min•width: min-content;
  }
`,Ng=s`
@layer arc-components {

  [arc-badge-wrapper] {
    ${Lg}
    ${Bg}
    ${Og}
    ${Dg}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-height: 1lh;
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${J}•gap);
    --arc-icon-text-svg-width: var(--arc-badge-svg-width, 1em);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${J}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${J}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${J}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${J}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${J}•flex);
    display: var(${J}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${J}•size);
    padding-inline: var(${J}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 1;

    color: var(--arc-badge-color, var(${ci}));
    background: var(--arc-badge-background, var(${ii}));
    border-radius: var(${J}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${J}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${J}•font•size•caps);
    }
  }

}
`,Pl=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],Fg=["brand",...Pl.filter(r=>r!=="brand")],Hg=["neutral",...Pl.filter(r=>r!=="neutral")],Vg=re(Da,Fg),Ug=re(Da,Hg),Kg=re(ie,["inherit","lg","md","sm"]),Wg=re(Ue,["hug","fill"]),Gg=["high","low"],qg=re(jr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),Yg={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},Zg=({children:r,icon:e,text:a,isFlipped:t,isFlexible:o,isUppercase:n,color:c,variant:l,size:d="inherit",layout:h="hug",contrast:g="high",...v})=>{const p=c??Yg[l??"brand-blue"],m=r||(0,i.jsx)(ae,{icon:e,text:a,isFlipped:t,layout:"gutter"}),b=h==="fill"&&o;return(0,i.jsx)("span",{...v,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":g,"data-color":p,"data-layout":h,"data-size":d,"data-is-flexible":b?"":void 0,"data-is-uppercase":n?"":void 0,children:m})})};lr("ArcBadge",Ng);const Ir=s`--arc•badge•count`,si=s`${Ir}•fg`,li=s`${Ir}•bg`,Xg=jl({fg:si,bg:li}),Jg=Rl({fg:si,bg:li}),Qg=s`
  &:has(>[data-size=lg]) {
    ${Ir}•font•size: var(${f}•14);
    ${Ir}•size: var(${f}•24);
    ${Ir}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=md]) {
    ${Ir}•font•size: var(${f}•12);
    ${Ir}•size: var(${f}•20);
    ${Ir}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=sm]) {
    ${Ir}•font•size: var(${f}•10);
    ${Ir}•size: var(${f}•16);
    ${Ir}•padding•inline: var(${f}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${Ir}•font•size: 1em;
    ${Ir}•font•size•text: 0.75em;
    ${Ir}•size: 1.25em;
    ${Ir}•padding•inline: 0.25em;
  }
`,rp=s`
  &:has(>[data-shape=square]) {
    ${Ir}•border•radius: var(${f}•4);
  }

  &:has(>[data-shape=circle]) {
    ${Ir}•border•radius: var(--arc-border-radius-pill);
  }
`,ep=s`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${Xg}
  ${Jg}
  ${Qg}
  ${rp}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${Ir}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${Ir}•size);
  min-width: var(${Ir}•size);
  padding-inline: var(${Ir}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${si}));
  background: var(--arc-badge-count-background, var(${li}));
  border-radius: var(${Ir}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${Ir}•font•size•text, 1em);
  }
}

`,ap=re(ie,["inherit","lg","md","sm"]),tp=re(jr,["neutral","brand","critical","warning","success","inverse"]),op=["low","high"],np=re(Lt,["square","circle"]),cp={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},ip=({children:r,text:e,color:a,variant:t,contrast:o,size:n="inherit",shape:c="square",...l})=>{const d=r||(0,i.jsx)("span",{"data-element":"text",children:e}),h=a??cp[t??"neutral"],g=t==="critical"?"high":o??"low";return(0,i.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":g,"data-shape":c,"data-size":n,children:d})})};lr("ArcBadgeCount",ep);const Le=s`--arc•banner`,de=s`${Le}•bg`,oe=s`${Le}•fg`,Ae=s`${Le}•columns`,ba=s`${Le}•border`,di=s`${Le}•border•radius`,io=s`${Le}•padding`,Za=s`${Le}•min•height`,zn=s`${Le}•body`,xt=s`${zn}•font•size`,En=s`${zn}•gap`,Ml=s`${zn}•flex•direction`,Ll=s`${zn}•min•width`,ui=s`${Le}•icon`,kt=s`${ui}•font•size`,hi=s`${ui}•padding`,Ta=s`${ui}•color`,Bl=s`${Le}•action`,gi=s`${Bl}•justify`,pi=s`${Bl}•gap`,so=s`${Le}•column•gap`,vi=s`${Le}•row•gap`,sp=s`
  &:where([variant=ai]) {
    ${oe}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${de}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${ba}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${oe}: var(--arc-color-fg-primary);
    ${Ta}: var(--arc-color-fg-brand-mid);
    ${de}: var(--arc-color-bg-blue-muted);
    ${ba}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${oe}: var(--arc-color-fg-primary);
    ${Ta}: var(--arc-color-fg-critical-mid);
    ${de}: var(--arc-color-bg-critical-muted);
    ${ba}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${oe}: var(--arc-color-fg-primary);
    ${Ta}: var(--arc-color-fg-info-mid);
    ${de}: var(--arc-color-bg-info-muted);
    ${ba}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${oe}: var(--arc-color-fg-secondary);
    ${Ta}: var(--arc-color-fg-secondary);
    ${de}: var(--arc-color-alpha-muted);
    ${ba}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${oe}: var(--arc-color-fg-primary);
    ${Ta}: var(--arc-color-fg-success-mid);
    ${de}: var(--arc-color-bg-success-muted);
    ${ba}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${oe}: var(--arc-color-fg-primary);
    ${Ta}: var(--arc-color-fg-warning-mid);
    ${de}: var(--arc-color-bg-warning-muted);
    ${ba}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,lp=s`
  &:where([variant=ai]) {
    ${oe}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${de}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${oe}: var(--arc-color-fg-on-stark);
    ${de}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${oe}: var(--arc-color-fg-on-stark);
    ${de}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${oe}: var(--arc-color-fg-on-stark);
    ${de}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${oe}: var(--arc-color-fg-on-stark);
    ${de}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${oe}: var(--arc-color-fg-on-stark);
    ${de}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${oe}: var(--arc-color-fg-on-mid);
    ${de}: var(--arc-color-bg-warning-mid);
  }
`,dp=s`
  ${En}: 0.375em;
  ${Ml}: column;
  ${Ll}: 7em;
  ${pi}: 0.75em;
  ${so}: 0.75em;
  ${vi}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${sp}

    ${io}: 0 0.75em 0 1em;
    ${di}: var(--arc-border-radius-lg);
    ${En}: 0.125em;
    ${hi}: 0.0625em;
    ${so}: 0.625em;

    ${Za}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${Za}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${Za}: 3.5em;
        ${vi}: 0.25em;

        &:has([arc-banner-actions]) {
          ${Za}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${gi}: flex-start;

      &[density=compact] {
        ${io}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${xt});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${lp}

    ${Za}: 4em;
    ${io}: 0 0.75em 0 1em;
    ${ba}: none;
    ${di}: 0;
    ${En}: 0.125em;
    ${so}: 1em;
    ${gi}: flex-end;
    ${hi}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${kt}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${xt});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${kt}: 1em;
    ${xt}: 0.875em;
  }

  &[density=compact] {
    ${Za}: 2em;
    ${io}: 0 0.25em 0 0.5em;
    ${xt}: 0.75em;
    ${pi}: 0.5em;
    ${so}: 0.5em;

    &[action-placement=inline] {
      ${kt}: 1em;
    }

    &[action-placement=bottom] {
      ${kt}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${Ta}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${Ta}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${kt});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,up=s`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,hp=s`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${xt});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,gp=s`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${Ae}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${Ae}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${Ae}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Ae}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${Ae}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${Ae}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Ae}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${Ae}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${Ae}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${Ae}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${Ae}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${Ae}: 1fr;
    }
  }
`,pp=s`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${ba}));
  background: var(--arc-banner-background, var(${de}));
  border-radius: var(--arc-banner-border-radius, var(${di}));
  padding: var(--arc-banner-padding, var(${io}));
  min-height: var(--arc-banner-min-height, var(${Za}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${gp}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${oe}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${Ae});
    column-gap: var(${so});
    row-gap: var(${vi});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${oe}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${Ll}));

    display: flex;
    flex-direction: var(${Ml});
    gap: var(${En});
  }

  [arc-banner-icon] {
    font-size: var(${kt});
    padding-inline: var(${hi});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${xt});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${gi}));
    gap: var(--arc-banner-action-gap, var(${pi}));
  }

`,vp=s`
@layer arc-components {
  ${ag}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${dp}

    /* CORE STYLES --------------------------------------------------• */
    ${pp}

    /* INSET LAYOUT -------------------------------------------------• */
    ${up}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${hp}
  }

}
`,fp=["comfortable","compact"],mp=["inset","bleed"],bp=["inline","bottom"],$p=["left","center"],yp=[...ha],xp=[...jr,"announcement"],kp=re(xp,["ai","announcement","critical","info","neutral","success","warning"]),ja={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},wp=r=>r==="critical"||r==="warning"?"alert":"status",Cp=({children:r,id:e,icon:a,dismissProps:t,heading:o,density:n=ja.density,layout:c=ja.layout,actionPlacement:l=ja.actionPlacement,alignment:d=ja.alignment,actionSlot:h,showDismiss:g=ja.showDismiss,message:v,variant:p=ja.variant,onClose:m,...b})=>{const $=Rr(e,"arc-banner"),w=Tc(a),S=d==="center",x=c==="bleed",C=c==="inset",I=n==="compact",A=l==="inline",j=!!w,H=C&&p==="ai"?"ai-200":void 0,z={variant:p,layout:c,density:n,alignment:d,"action-placement":l},k=()=>(0,i.jsx)(ir,{icon:w,gradient:H}),N=()=>(0,i.jsx)(i.Fragment,{children:!!h&&(0,i.jsx)("span",{"arc-banner-actions":"",children:h})}),U=()=>(0,i.jsx)("div",{"arc-banner-dismiss":"",children:(0,i.jsx)(Er,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:C||x&&p==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:I?"sm":"md",...t,onClick:q=>{t?.onClick?.(q),m?.()}})}),Z=({showActions:q=!0})=>(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(ae,{icon:(0,i.jsx)(k,{}),children:[!!o&&(0,i.jsx)("strong",{children:o})," ",v," ",q&&h]})}),K=()=>(0,i.jsxs)(i.Fragment,{children:[j&&(0,i.jsx)("span",{"arc-banner-icon":"",children:(0,i.jsx)(k,{})}),(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("strong",{"arc-banner-heading":"",children:o}),v&&(0,i.jsx)("span",{"arc-banner-message":"",children:v})]})})]});return(0,i.jsx)("div",{role:wp(p??ja.variant),...b,...z,"arc-banner":"",id:$,children:(0,i.jsxs)("div",{"arc-banner-grid":"",children:[S?(0,i.jsx)(Z,{}):(0,i.jsxs)(i.Fragment,{children:[I&&A?(0,i.jsx)(Z,{showActions:!1}):(0,i.jsx)(K,{}),(0,i.jsx)(N,{})]}),g&&(0,i.jsx)(U,{})]})})};lr("ArcBanner",vp);const $a=s`--arc•label`,lo=s`${$a}•cursor`,uo=s`${$a}•opacity`,Ap=s`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${uo}: var(--arc-label-opacity, unset);
    ${uo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${$a}•display: var(--arc-label-display, inline-flex);
    ${$a}•gap: var(--arc-label-gap, var(${f}•8));
    ${$a}•align•items: var(--arc-label-align-items, baseline);

    ${lo}: var(--arc-label-cursor, pointer);
    ${lo}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${lo}: var(${lo}•disabled);
      ${uo}: var(${uo}•disabled);
    }

    &[data-layout=fill] {
      ${$a}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${$a}•display);
    align-items: var(${$a}•align•items);
    gap: var(${$a}•gap);
    cursor: var(${lo});
  }

}
`,Sp=tr(Ue,["hug","fill"]),Xa=({layout:r,...e})=>(0,i.jsx)("label",{...e,"arc-label":"","data-layout":r});lr("ArcLabel",Ap);const zp=s`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${uo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,Ja=r=>(0,i.jsx)("span",{...r,"arc-label-content":""});lr("LabelContent",zp);const Ep={checkbox:"checkbox",radio:"radio",switch:"radio"},ho=({id:r,indeterminate:e,type:a,onChange:t,...o})=>{const n=a==="checkbox"&&!!e,c=(0,u.useRef)(null),l=Rr(r,`arc-${a}`),d=h=>g=>{if(!(g?.target instanceof HTMLInputElement))return;const v={checked:g?.target.checked,indeterminate:g?.target?.indeterminate,name:g?.target?.name,value:o?.value};h?.(v,g)};return(0,u.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!e)},[e]),(0,i.jsx)("input",{...o,id:l,ref:c,type:Ep[a],"arc-input-type":a,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":n||void 0,onChange:d(t)})},Ip=s`
@layer arc-components {

  [arc-input-mask] {
    ${B}•border•width: var(--arc-border-width-sm);
    ${B}•border: var(${B}•border•width) solid var(${B}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${B}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${B}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${B}•outline: var(${B}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${B}•width);
    height: var(${B}•height);
    opacity: var(${B}•opacity, var(--arc-alpha-100));

    color: var(${B}•color, transparent);
    background: var(${B}•background);
    border: var(${B}•border);
    border-radius: var(${B}•border•radius);
    translate: var(${B}•translate, unset);

    outline: var(${B}•outline, none);
    outline-offset: var(${B}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${B}•border•width) * -1);
      cursor: var(${B}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${B}•z•index, unset);
    }
  }

}
`,In=({type:r,...e})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...e,"arc-input-mask":r})});lr("ArcBooleanInputMask",Ip);const Kr=s`--arc•checkbox`,_p=s`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Kr}•font•size: 1em;
      ${Kr}•icon•size: 0.625em;
      ${Kr}•size: 1.125em;
      ${Kr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Kr}•font•size: var(${f}•14);
      ${Kr}•icon•size: var(${f}•10);
      ${Kr}•size: var(${f}•18);
      ${Kr}•gap: var(${f}•8);
    }

    &[data-size=sm] {
      ${Kr}•font•size: var(${f}•12);
      ${Kr}•icon•size: var(${f}•10);
      ${Kr}•size: var(${f}•16);
      ${Kr}•gap: var(${f}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${B}•border•radius: var(${f}•4);
    ${B}•size: var(${Kr}•size);
    ${B}•icon•size: var(${Kr}•icon•size);
    ${B}•width: var(${Kr}•size);
    ${B}•height: var(${Kr}•size);
    ${B}•translate: 0 var(${f}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${Kr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${Kr}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${B}•color: transparent;
      ${B}•border•color: var(--arc-color-border-stark);
      ${B}•background: transparent;

      &:hover {
        ${B}•border•color: var(--arc-color-border-theme-heavy);
        ${B}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${B}•border•color: var(--arc-color-border-disabled);
        ${B}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${B}•color: var(--arc-color-fg-on-theme-heavy);
        ${B}•border•color: transparent;
        ${B}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${B}•color: var(--arc-color-fg-on-theme-stark);
          ${B}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${B}•color: var(--arc-color-fg-on-theme-mid);
          ${B}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${B}•color: var(--arc-color-fg-theme-heavy);
        ${B}•border•color: var(--arc-color-border-theme-heavy);
        ${B}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${B}•color: var(--arc-color-fg-theme-stark);
          ${B}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${B}•color: var(--arc-color-fg-theme-subtle);
          ${B}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,Tp=tr(Ue,["hug","fill"]),jp=tr(ie,["inherit","md","sm"]),Rp=tr(jr,["primary","secondary"]),Ol=({children:r,label:e,layout:a,size:t="md",variant:o="primary",useMask:n=!0,...c})=>{const{className:l,title:d,...h}=c,g={className:l,title:d},v=r??e,p=(0,i.jsx)(ho,{...h,type:"checkbox"}),m=n&&(0,i.jsxs)(In,{type:"checkbox",children:[p,(0,i.jsx)(ir,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),b=!!v&&(0,i.jsxs)(Xa,{layout:a,children:[m||p,(0,i.jsx)(Ja,{children:v})]});return(0,i.jsx)("span",{...g,"arc-checkbox":"","data-size":t,"data-variant":o,children:b||m||p})};lr("ArcCheckbox",_p);const Be=s`--arc•cb`,_r=s`${Be}•o`,Oe=s`${_r}•border`,fi=s`${_r}•icon`,mi=s`${_r}•text`,Pp=s`
@layer arc-components {

  [arc-checkbox-bar] {
    ${Be}•font•size: var(${f}•14);
    ${Be}•border•radius: var(${f}•6);
    ${Be}•background: var(--arc-color-alpha-black-0);
    ${Be}•padding: 0px;
    ${Be}•gap: var(${f}•2);

    ${_r}•color: var(--arc-color-fg-secondary);
    ${_r}•background: var(--arc-color-alpha-white-0);

    ${Oe}•color: var(--arc-color-alpha-black-0);
    ${Oe}•width: var(${f}•1);
    ${Oe}•radius: var(${f}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${_r}•size: var(${f}•40);
      ${_r}•line•height: var(${f}•38); /* • -2px to account for border-width (top/bottom) */
      ${fi}•padding: var(${f}•8);
      ${mi}•padding: var(${f}•12);
    }

    &[data-size=md] {
      ${_r}•size: var(${f}•32);
      ${_r}•line•height: var(${f}•30); /* • -2px to account for border-width (top/bottom) */
      ${fi}•padding: var(${f}•6);
      ${mi}•padding: var(${f}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${Be}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Be}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${_r}•color: var(--arc-color-fg-on-hover-default);
        ${_r}•background: var(--arc-color-bg-hover-default);
        ${Oe}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${_r}•color: var(--arc-color-fg-primary);
      ${_r}•background: var(--arc-color-bg-secondary);
      ${Oe}•color: var(--arc-color-alpha-black-0);
      ${_r}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${_r}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${_r}•outline: var(${Oe}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Be}•font•size));
    display: var(${Be}•display);
    gap: var(${Be}•gap);
    background: var(${Be}•background);
    border-radius: var(${Oe}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Oe}•radius);
      outline: var(${_r}•outline, none);
      outline-offset: var(${Oe}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${_r}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${_r}•size);
      min-width: var(${_r}•size);

      border-radius: var(${Oe}•radius);
      border: var(${Oe}•width) solid var(${Oe}•color);
      background: var(${_r}•background);
      color: var(${_r}•color);
      font-weight: var(${_r}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${mi}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${fi}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Mp=tr(Ue,["hug","fill"]),Lp=tr(ie,["lg","md"]),Bp=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(ae,{icon:a,text:e});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(Ol,{...t,label:o,layout:"fill",useMask:!1})})},Op=({children:r,size:e="lg",layout:a="hug",...t})=>(0,i.jsx)("ul",{...t,"arc-checkbox-bar":"","data-size":e,"data-layout":a,role:"group",children:r});lr("ArcCheckboxBar",Pp);const Dp=["normal","simple","add"],Np=["swatch","color-stop","thumbnail"],Fp=["standalone","embedded"],Dl=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],Nl=["eye-dropper","alpha-slider","hex-input","palettes"],bi=1e-10,_n=1e-6,go=1e-4,Fl=2,Q=(r,e,a)=>Math.min(a,Math.max(e,r)),ya=(r,e)=>{const a=10**e;return Math.round(r*a)/a},Hl=(r,e=_n)=>Math.abs(r)<e?0:Math.abs(1-r)<e?1:r,Hp=r=>{if(!Number.isFinite(r)||r<=0)return Fl;let e=r,a=0;for(;a<12;){const t=Math.round(e);if(Math.abs(e-t)<bi)return a;e*=10,a+=1}return Fl},Vp=(r,e,a,t)=>[{test:e<0&&a>=0,value:(r<0?Math.abs(e):a)>0?ya(r/(r<0?Math.abs(e):a)*100,t):0},{test:a<0,value:e<0?ya(r/Math.abs(e)*100,t):0},{test:e>=0,value:a>0?ya(r/a*100,t):0}].find(({test:o})=>o)?.value??0,Vl=({value:r,min:e=0,max:a=100,step:t=1,precision:o})=>{const n=Number(e),c=Number(a),l=Math.min(n,c),d=Math.max(n,c),h=Number(t),g=Number(r),v=d-l,p=Number.isFinite(h)&&h>0&&v>0?h/v*100:0,m=o??Hp(p),b=Q(g,l,d),$=v===0?0:(b-l)/v,w=ya($*100,m),S=ya(100-w,m),x=Vp(b,l,d,m);return{toValue:w,fromValue:S,pctSigned:x}},po=r=>parseInt(r,16),Jr=r=>Q(ya(r,0),0,255),Ul=r=>ya((r%360+360)%360,2),Kl=(r,e)=>Hl(ya(Q(r,0,1),e)),Xe=r=>{const e=(r.h%360+360)%360,a=Q(r.s,0,1),t=Q(r.v,0,1),o=Q(r.a,0,1),n=t*a,c=n*(1-Math.abs(e/60%2-1)),l=t-n;let d=0,h=0,g=0;return e<60?[d,h,g]=[n,c,0]:e<120?[d,h,g]=[c,n,0]:e<180?[d,h,g]=[0,n,c]:e<240?[d,h,g]=[0,c,n]:e<300?[d,h,g]=[c,0,n]:[d,h,g]=[n,0,c],{r:(d+l)*255,g:(h+l)*255,b:(g+l)*255,a:o}},vo=(r,e)=>{const a=Q(r.r,0,255)/255,t=Q(r.g,0,255)/255,o=Q(r.b,0,255)/255,n=Math.max(a,t,o),c=Math.min(a,t,o),l=n-c,d=n===0?0:l/n,h=n;let g=e??0;return l>bi?(n===a?g=60*((t-o)/l%6):n===t?g=60*((o-a)/l+2):g=60*((a-t)/l+4),g<0&&(g+=360)):g=(g%360+360)%360,{h:g,s:d,v:h,a:Q(r.a,0,1)}},Wl=r=>{const e=(r.h%360+360)%360,{s:a}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*a,n=o*(1-Math.abs(e/60%2-1)),c=t-o/2;let l=0,d=0,h=0;return e<60?[l,d,h]=[o,n,0]:e<120?[l,d,h]=[n,o,0]:e<180?[l,d,h]=[0,o,n]:e<240?[l,d,h]=[0,n,o]:e<300?[l,d,h]=[n,0,o]:[l,d,h]=[o,0,n],{r:(l+c)*255,g:(d+c)*255,b:(h+c)*255,a:r.a}},Gl=r=>{const e=r.r/255,a=r.g/255,t=r.b/255,o=Math.max(e,a,t),n=Math.min(e,a,t),c=o-n;let l=0;c!==0&&(o===e?l=60*((a-t)/c%6):o===a?l=60*((t-e)/c+2):l=60*((e-a)/c+4)),l<0&&(l+=360);const d=(o+n)/2,h=c===0?0:c/(1-Math.abs(2*d-1));return{h:l,s:h,l:d,a:r.a}},ql=r=>{const e=Qa(r.r),a=Qa(r.g),t=Qa(r.b),o=.4122214708*e+.5363325363*a+.0514459929*t,n=.2119034982*e+.6806995451*a+.1073969566*t,c=.0883024619*e+.2817188376*a+.6299787005*t,l=Math.cbrt(o),d=Math.cbrt(n),h=Math.cbrt(c),g=.2104542553*l+.793617785*d-.0040720468*h,v=1.9779984951*l-2.428592205*d+.4505937099*h,p=.0259040371*l+.7827717662*d-.808675766*h,m=Math.sqrt(v*v+p*p);let b=Math.atan2(p,v)*180/Math.PI;return b<0&&(b+=360),{L:Q(g,0,1),C:m,h:b,a:Q(r.a,0,1)}},Yl=r=>{const e=Q(r.L,0,1),a=r.h*Math.PI/180,t=r.C*Math.cos(a),o=r.C*Math.sin(a),n=e+.3963377774*t+.2158037573*o,c=e-.1055613458*t-.0638541728*o,l=e-.0894841775*t-1.291485548*o,d=n*n*n,h=c*c*c,g=l*l*l,v=4.0767416621*d-3.3077115913*h+.2309699292*g,p=-1.2684380046*d+2.6097574011*h-.3413193965*g,m=-.0041960863*d-.7034186147*h+1.707614701*g,b=$=>{const w=$<=.0031308?$*12.92:1.055*$**.4166666666666667-.055;return Math.round(Q(w,0,1)*255)};return{r:b(v),g:b(p),b:b(m),a:Q(r.a,0,1)}},Qa=r=>{const e=Jr(r)/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},Zl=r=>{const e=Qa(r.r),a=Qa(r.g),t=Qa(r.b);return .2126*e+.7152*a+.0722*t},Xl=(r,e)=>{const a=r.a+e.a*(1-r.a);if(a<=0)return{r:0,g:0,b:0,a:0};const t=r.a/a,o=e.a*(1-r.a)/a;return{r:Jr(r.r*t+e.r*o),g:Jr(r.g*t+e.g*o),b:Jr(r.b*t+e.b*o),a:Kl(a,2)}},fo=(r,e,a,t)=>{const o=t?t(r):r,n=t?t(e):e;return Math.abs(o-n)<=a},wt=(r,e,a)=>fo(r,e,a,Math.round),$i=(r,e,a)=>fo(r,e,a),Tn=(r,e)=>!e||!r?!1:wt(r.r,e.r,1)&&wt(r.g,e.g,1)&&wt(r.b,e.b,1)&&$i(r.a,e.a,1/255+_n),yi=(r,e)=>!r||!e?!1:Jr(r.r)===Jr(e.r)&&Jr(r.g)===Jr(e.g)&&Jr(r.b)===Jr(e.b)&&Math.abs(r.a-e.a)<_n,xi=(r,e)=>!e||!r?!1:wt(r.r,e.r,3)&&wt(r.g,e.g,3)&&wt(r.b,e.b,3)&&$i(r.a,e.a,.02),ki=(r,e)=>fo(r.h,e.h,go)&&fo(r.s,e.s,go)&&fo(r.v,e.v,go)&&$i(r.a,e.a,go),Up=/^[0-9a-f]+$/i,Kp=500,Ct=new Map,wi=r=>({...r}),Wp=(r,e)=>{if(Ct.size>=Kp){const a=Ct.keys().next().value;a&&Ct.delete(a)}Ct.set(r,e?wi(e):null)},Gp=r=>r.split("").map(e=>e+e).join(""),Jl=r=>{const e=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(e.length))return null;const a=e.length<=4?Gp(e):e;if(!Up.test(a))return null;const t=po(a.slice(0,2)),o=po(a.slice(2,4)),n=po(a.slice(4,6)),c=a.length===8?po(a.slice(6,8))/255:1;return[t,o,n,c].some(l=>Number.isNaN(l))?null:{r:t,g:o,b:n,a:Q(c,0,1)}},ta=r=>{const e=Number(r.trim());return Number.isFinite(e)?e:null},Ci=r=>{const e=r.trim();if(e.endsWith("%")){const t=ta(e.slice(0,-1));return t==null?null:Q(t/100*255,0,255)}const a=ta(e);return a==null?null:Q(a,0,255)},mo=r=>{const e=r.trim();if(e.endsWith("%")){const t=ta(e.slice(0,-1));return t==null?null:Q(t/100,0,1)}const a=ta(e);return a==null?null:Q(a,0,1)},Ai=(r,e)=>{const t=r.trim().toLowerCase().match(e);if(!t)return null;const o=t[1].trim(),[n,c]=o.split("/").map(h=>h.trim()),l=n.includes(",")?n.split(",").map(h=>h.trim()):n.split(/\s+/).filter(Boolean),d=c&&c.length?c:null;return{body:o,channels:l,alphaPart:d}},qp=r=>{const e=Ai(r,/^rgba?\((.*)\)$/);if(!e)return null;const{body:a,channels:t,alphaPart:o}=e;if(t.length!==3)return null;const n=Ci(t[0]),c=Ci(t[1]),l=Ci(t[2]);if(n==null||c==null||l==null)return null;let d=1;if(o){const h=mo(o);if(h==null)return null;d=h}else{const h=a.includes(",")?a.split(",").map(g=>g.trim()):null;if(h&&h.length===4){const g=mo(h[3]);if(g==null)return null;d=g}}return{r:n,g:c,b:l,a:d}},Yp=r=>{const e=Ai(r,/^hsla?\((.*)\)$/);if(!e)return null;const{body:a,channels:t,alphaPart:o}=e;if(t.length!==3)return null;const n=v=>Number(v.replace("deg","").trim()),c=v=>{if(!v.endsWith("%"))return null;const p=ta(v.slice(0,-1));return p==null?null:p/100},l=n(t[0]),d=c(t[1]),h=c(t[2]);if(!Number.isFinite(l)||d==null||h==null)return null;let g=1;if(o){const v=mo(o);if(v==null)return null;g=v}else{const v=a.includes(",")?a.split(",").map(p=>p.trim()):null;if(v&&v.length===4){const p=mo(v[3]);if(p==null)return null;g=p}}return Wl({h:l,s:d,l:h,a:g})},Zp=r=>{const e=Ai(r,/^oklch\((.*)\)$/);if(!e)return null;const{channels:a,alphaPart:t}=e;if(a.length!==3)return null;const o=g=>{const v=g.trim();if(v.endsWith("%")){const m=ta(v.slice(0,-1));return m!=null?Q(m/100,0,1):null}const p=ta(v);return p!=null?Q(p,0,1):null},n=g=>{const v=g.trim();if(v.endsWith("%")){const m=ta(v.slice(0,-1));return m!=null&&m>=0?m/100*.4:null}const p=ta(v);return p!=null&&p>=0?p:null},c=o(a[0]),l=n(a[1]),d=ta(a[2].trim());if(c==null||l==null||d==null||!Number.isFinite(d))return null;let h=1;if(t){const g=mo(t);if(g==null)return null;h=g}return Yl({L:c,C:l,h:d,a:h})},Pr=r=>{if(!r||typeof r!="string")return null;const e=r.toLowerCase().trim();if(Ct.has(e)){const t=Ct.get(e);return t?wi(t):null}let a=null;return e.startsWith("#")?a=Jl(e):e.startsWith("rgb")?a=qp(e):e.startsWith("hsl")?a=Yp(e):e.startsWith("oklch")&&(a=Zp(e)),Wp(e,a),a?wi(a):null},Ql=r=>{if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(e)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(e)},rd=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.r=="number"&&typeof e.g=="number"&&typeof e.b=="number"&&typeof e.a=="number"},ed=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.v=="number"&&typeof e.a=="number"},At=r=>String(Math.round(Q(r,0,1)*100)),ad=r=>{const e=r.trim();if(!e)return null;if(e.endsWith("%")){const t=Number(e.slice(0,-1).trim());return Number.isFinite(t)?Q(t/100,0,1):null}if(e.startsWith(".")||e.includes(".")){const t=Number(e);return Number.isFinite(t)?Q(t,0,1):null}const a=Number(e);return Number.isFinite(a)?Q(a/100,0,1):null},jn=r=>Q(Number(r.toFixed(2)),0,1).toString(),De=(r,e=!1)=>{const a=l=>Q(Math.round(l),0,255).toString(16).padStart(2,"0"),t=a(r.r),o=a(r.g),n=a(r.b),c=a(Q(r.a,0,1)*255);return e?`#${t}${o}${n}${c}`:`#${t}${o}${n}`},Si=r=>{const e=Gl(r),a=Math.round(e.h),t=Math.round(e.s*100),o=Math.round(e.l*100);return`hsl(${a} ${t}% ${o}% / ${jn(Q(e.a,0,1))})`},rt=r=>{const e=Q(Math.round(r.r),0,255),a=Q(Math.round(r.g),0,255),t=Q(Math.round(r.b),0,255),o=Q(r.a,0,1);return o<1?`rgb(${e} ${a} ${t} / ${jn(o)})`:`rgb(${e} ${a} ${t})`},zi=r=>{const e=ql(r),a=Math.round(e.L*1e3)/10,t=Math.round(e.C/.4*1e3)/10,o=Math.round(e.h),n=Q(e.a,0,1);return n<1?`oklch(${a}% ${t}% ${o} / ${jn(n)})`:`oklch(${a}% ${t}% ${o})`},td={auto:r=>r.a<1?rt(r):De({...r,a:1},!1),hex:r=>De({...r,a:1},!1),hexa:r=>De(r,!0),rgb:r=>rt(r),hsl:r=>Si(r),oklch:r=>zi(r)},Xp=(r,e)=>(td[r]??td.hex)(e),Se=r=>typeof r=="string"?r:r.color,Rn=(r,e)=>typeof r!="string"&&r.name?r.name:e??void 0,od=r=>{const e=Se(r),a=Pr(e),t=!!a&&a.a<1&&a.a>.01,o=!!a&&a.a===0;return{cssColor:e,rgba:a,isTranslucent:t,isTransparent:o,opaqueHex:a?De({...a,a:1},!1):null}},Pn=(r,e)=>{if(ed(r))return r;const a=(rd(r)?r:null)??Pr(r)??Pr(e)??{r:0,g:0,b:0,a:1};return vo(a)},et=(r,e)=>{const a=e?.fallbackHex??"#000000",t=e?.format??"hex",o=Pn(r,a),n={h:(o.h%360+360)%360,s:Q(o.s,0,1),v:Q(o.v,0,1),a:Q(o.a,0,1)},c=Xe(n),l={r:Jr(c.r),g:Jr(c.g),b:Jr(c.b),a:n.a},d=Xp(t,l);let h,g,v,p,m;const b=l.a<1?"rgb":"hex",$=l.a<1?rt(l):De({...l,a:1},!1);return{format:t,value:d,alpha:l.a,autoFormat:b,autoValue:$,hsv:n,rgba:l,get hex(){return h??=De({...l,a:1},!1)},get hexa(){return g??=De(l,!0)},get rgb(){return v??=rt(l)},get hsl(){return p??=Si(l)},get oklch(){return m??=zi(l)}}},nd=(r,e)=>({...et(r.hsv,{format:e}),name:r.name}),cd=(r,e)=>({color:Se(r),name:Rn(r,e)}),id=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),St=r=>Se(r).trim().toLowerCase(),Mn=(r,e)=>{if(St(r)===St(e))return!0;const a=Pr(Se(r)),t=Pr(Se(e));return!!a&&!!t&&Tn(a,t)},Ei=(r,e,a)=>{const t=a?.skipIndex;return r.some((o,n)=>n!==t?Mn(o,e):!1)},Jp=r=>{let e=null;try{e=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(e==null)return null;const a=window.getComputedStyle(e);return Pr(a?.backgroundColor)},Ii=(r,e)=>{const a=Pr(Se(r));if(!a)return e?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:n,bgColor:c,bgElement:l}=e??{},d=e?.useScheme?"light":t??"#000000",h=e?.useScheme?"dark":o??"#ffffff",g=Q(n??-4,-7,7);let v=a;if(a.a<1){const $=Pr(c??""),w=$?null:Jp(l);v=Xl(a,$??w??{r:255,g:255,b:255,a:1})}const p=Zl(v),m=(p+.05)/.05,b=1.05/(p+.05);return m+g>=b?d:h},_i=r=>r==null?null:{comparisonKey:St(r),selectedRgba:Pr(Se(r))},sd=(r,e)=>{if(!e)return!1;if(St(r)===e.comparisonKey)return!0;if(!e.selectedRgba)return!1;const a=Pr(Se(r));return!!a&&Tn(a,e.selectedRgba)},Qp=s`--arc•button•bar`,bo=s`${Qp}•axis`,rv=s`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${bo}: row;

    &[is-flipped] {
      ${bo}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${bo}: column;

    &[is-flipped] {
      ${bo}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${bo}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(${_}•8));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,Ln=({children:r,...e})=>{const{Element:a="menu",orientation:t="horizontal",isFlipped:o=!1,...n}=e;return(0,i.jsx)(a,{...n,"arc-button-bar":t,"is-flipped":o?"":void 0,role:n.role??"group",children:r})};lr("ArcButtonBar",rv);const ev=({activeColor:r})=>{const[e,a]=(0,u.useState)(r),t=r!=null,o=t?r:e;(0,u.useEffect)(()=>{r!=null&&a(r)},[r]);const n=(0,u.useCallback)(c=>{t||a(c)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:a,selectColor:n}},ld=(r,e)=>Ei(r,e)?r:[...r,e],dd=(r,e)=>{const a=ld(r.colors??[],e);return a===r.colors?r:{...r,colors:a}},ud=(r,e)=>{const a=r.colors??[],t=a.filter(o=>!Mn(o,e));return t.length===a.length?r:{...r,colors:t}},hd=(r,e,a)=>r.map(t=>t.id===e.id?dd(t,a):t),gd=(r,e,a)=>r.map(t=>t.id===e.id?ud(t,a):t),av=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return hd(r,e,a)}return dd(r,e)},tv=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return gd(r,e,a)}return ud(r,e)},ov=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?hd(r,t,a):r},nv=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?gd(r,t,a):r},cv=({palette:r,isSelectionControlled:e,onAddColor:a,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:n,initialColorValue:c,shouldOpenPopover:l=!0,notifyAddColorToggle:d,showPopover:h,hidePopover:g})=>{const v=(0,u.useCallback)(()=>c??id(),[c]),[p,m]=(0,u.useState)(null),[b,$]=(0,u.useState)(v),w=(0,u.useCallback)(()=>{m(null),$(v())},[v]),S=(0,u.useCallback)(z=>{o(k=>ld(k,z))},[o]),x=(0,u.useCallback)((z,k)=>{a?.(r,z,k),t(z),e||n(z)},[t,e,a,r,n]),C=(0,u.useCallback)((z,k)=>{S(z),x(z,k??void 0)},[S,x]),I=(0,u.useCallback)(()=>{if(p!=null)return;const z=v();let k=-1;o(N=>(k=N.length,[...N,z])),m(k),$(z),d?.(!0),l&&h()},[p,v,d,o,l,h]),A=(0,u.useCallback)(z=>{p!=null&&$(z)},[p]),j=(0,u.useCallback)(z=>{z?.preventDefault(),z?.stopPropagation(),p!=null&&o(k=>k.filter((N,U)=>U!==p)),w(),d?.(!1),l&&g()},[p,g,d,w,o,l]),M=(0,u.useCallback)((z,k)=>{const U=(q=>typeof q?.preventDefault=="function")(z)?z:k;if(U?.preventDefault(),U?.stopPropagation(),p==null||b==null){d?.(!1),l&&g();return}const K=(r.colors??[]).map((q,F)=>F===p?b:q);o(K),x(b,U??void 0),w(),d?.(!1),l&&g()},[p,b,x,g,d,r.colors,w,o,l]),H=(0,u.useCallback)((z,k)=>{k?.preventDefault(),k?.stopPropagation(),C(z,k??void 0)},[C]);return{draftColorIndex:p,draftColorValue:b,startAddDraft:I,updateDraftColor:A,cancelDraftColor:j,saveDraftColor:M,saveCurrentColor:H}},ze=s`--arc-popover`,zt=s`--arc•color•picker`,Qr=s`${zt}•thumb`,$o=s`${zt}•tools`,oa=s`${zt}•dropper`,pd=s`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(--js•hex, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,iv=s`
  background-image:
    linear-gradient(
      to right,
      #f00 0%,
      #ff0 16.66%,
      #0f0 33.33%,
      #0ff 50%,
      #00f 66.66%,
      #f0f 83.33%,
      #f00 100%
    );
`,vd={POPOVER:s`
    /* Inter-Component Communication: ArcPopover */
    ${ze}-width: 14em; /* 224px */
    ${ze}-min-width: 10.5em; /* 140px */
    ${ze}-max-width: 15.75em; /* 252px */
    ${ze}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${ze}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${ze}-padding: 0;

    ${ze}-header-padding: 0.75em 1em;
    ${ze}-header-background: var(--arc-color-bg-mono);
    ${ze}-header-align-items: center;

    ${ze}-body-padding: 0;

    ${ze}-footer-padding: 1em;
    ${ze}-footer-background: var(--arc-color-bg-mono);


    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }

    &:has([arc-color-picker=simple]) {
      ${ze}-width: 12.25em; /* 196px */
    }
  `,PICKER:s`
    ${Qr}•shadow: 0 0 0 max(4px, 0.25em) var(--arc-color-alpha-white-95), 0 0 max(6px, 0.375em) max(3px, 0.1875em) var(--arc-color-alpha-black-30);
    ${Qr}•size: max(10px, 0.625em);
    ${Qr}•transition: 200ms ease-out;

    ${zt}•padding: 1em;
    &[is-inline] { ${zt}•padding: 0; }

    &[arc-color-picker=simple] {
      ${oa}•align•self: end;
      ${$o}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},sv=s`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${Qr}•transition), top var(${Qr}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${Qr}•size);
    height: var(${Qr}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Qr}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      background var(${Qr}•transition),
      left var(${Qr}•transition),
      top var(${Qr}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,lv=s`

  [arc-color-slider] {
    &:has([arc-slider-surface=hue]) { ${Qr}•bg: var(--js•hue); }
    &:has([arc-slider-surface=alpha]) { ${Qr}•bg: transparent; }

    /* Inter-Component Communication: ArcSlider --------------------• */
    --arc-slider-input-height: auto;
    --arc-slider-progress-display: none;
    --arc-slider-track-background: transparent;
    --arc-slider-progress-background: transparent;
    --arc-slider-track-height: 0.875em;
    --arc-slider-thumb-size: var(${Qr}•size);
    --arc-slider-thumb-size-hover: var(${Qr}•size);
    --arc-slider-thumb-shadow: var(${Qr}•shadow);
    --arc-slider-thumb-background: var(${Qr}•bg);

    display: grid;
    gap: 0.375em;

    [arc-slider-surface=hue] { ${iv} }
    [arc-slider-surface=alpha] { ${pd} }
  }

`,fd=s`3.75em`,dv=s`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${fd};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${fd} 1fr;
    }

    [arc-color-input=alpha] {
      --arc-input-text-align: end;
    }

    [arc-color-input=hex] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
      --arc-input-action-display: contents;
      --arc-button-min-width: none;
      --arc-button-max-width: 2.25em;
    }
  }

`,uv=s`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  [arc-color-tools] {
    display: grid;
    gap: var(${$o}•gap, 0.5em);
    grid-template-columns: var(${$o}•columns, auto 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${$o}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${oa}•align•self, center);
    justify-self: var(${oa}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${oa}•align•self: end;
    ${oa}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${oa}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${oa}•justify•self: start;
      ${$o}•columns: 1fr auto;
      ${oa}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${oa}•column, 2);
      grid-row: var(${oa}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${sv}
  ${lv}
  ${dv}

`,hv=s`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${vd.POPOVER}
  }

  [arc-color-picker] {
    ${vd.PICKER}

     [arc-color-picker-section] {
      padding: var(${zt}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${uv}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

}
`,ue=s`--arc•color•chip`,gv=s`
@layer arc-components {

  [arc-color-chip=add-color] {
    ${ue}•radius: var(--arc-border-radius-circle);
    ${ue}•width: var(${f}•24);
    ${ue}•height: var(${f}•24);
  }

  [arc-color-chip=swatch] {
    ${ue}•radius: var(--arc-border-radius-circle);
    ${ue}•width: var(${f}•24);
    ${ue}•height: var(${f}•24);
  }

  [arc-color-chip=color-stop] {
    ${ue}•radius: var(--arc-border-radius-md);
    ${ue}•width: var(${f}•24);
    ${ue}•height: var(${f}•24);
  }

  [arc-color-chip=thumbnail] {
    ${ue}•radius: var(--arc-border-radius-md);
    ${ue}•width: var(${f}•28);
    ${ue}•height: var(${f}•42);
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•color);
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(${ue}•width);
    --arc-button-height: var(${ue}•height);
    --arc-button-border-radius: var(${ue}•radius);
    --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${f}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${pd}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &[is-selected] {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,md=(0,u.memo)(({color:r,name:e,kind:a,isDraft:t,isSelected:o,contrastBias:n,contrastBgColor:c,canRemoveColor:l,icon:d,text:h,tooltip:g,onClick:v,style:p,...m})=>{const{cssColor:b,isTranslucent:$,isTransparent:w,opaqueHex:S}=(0,u.useMemo)(()=>od(r??""),[r]),x=Rn(r??"",e),C=h??x??b,I=(0,u.useMemo)(()=>Ii(b,{contrastBias:n,bgColor:c}),[b,n,c]),[A,j]=(0,u.useState)(!1),[M,H]=(0,u.useState)(!1),[z,k]=(0,u.useState)(!1),[N,U]=(0,u.useState)(!1),[Z,K]=(0,u.useState)(!1);(0,u.useEffect)(()=>{const L=br=>{(br.metaKey||br.key==="Meta")&&(j(!0),k(!0))},G=br=>{const Sr=br.metaKey;j(Sr),k(Sr)},fr=()=>{j(!1),k(!1)};return window.addEventListener("keydown",L),window.addEventListener("keyup",G),window.addEventListener("blur",fr),()=>{window.removeEventListener("keydown",L),window.removeEventListener("keyup",G),window.removeEventListener("blur",fr)}},[]);const F=a==="swatch"&&!!l&&(N&&A||(A||z)&&M),X=F||Z,P=X?"fa-regular fa-xmark":d??"fa-solid fa-check",T=X?"Remove color":g??x??(Ql(b)?b.toUpperCase():b);(0,u.useEffect)(()=>{F&&K(!0)},[F]),(0,u.useEffect)(()=>{!F&&o&&!t&&K(!1)},[t,F,o]);const O=(0,u.useCallback)(L=>{const G=F||L.metaKey?"remove":"select",fr={...et(b,{format:"auto",fallbackHex:b}),name:x};v?.({colorData:fr,action:G,source:a,shouldClosePicker:!1},L)},[F,v,b,x,a]),V=(0,u.useCallback)(L=>{L.preventDefault(),L.stopPropagation(),O(L)},[O]),ar=(0,u.useCallback)(L=>{L.metaKey&&(L.preventDefault(),L.stopPropagation(),O(L))},[O]),rr=(0,u.useCallback)(L=>{const G=L.propertyName??"";!(G==="color"||G.includes("color"))||F||K(!1)},[F]),or=(0,u.useCallback)(L=>{L.key!=="Enter"||!F||(L.preventDefault(),L.stopPropagation(),L.currentTarget.click())},[F]),mr=(0,u.useMemo)(()=>({...p??{},"--js\u2022hex":w?"transparent":$&&(S??b)||"","--js\u2022color":b,"--js\u2022fg":o&&!t||F?I:""}),[p,w,$,S,b,o,t,F,I]);return(0,i.jsx)(Er,{...m,_isCustom:!0,"arc-color-chip":a,layout:"icon",tooltip:T,text:C,icon:P,"is-draft":t?"":void 0,"is-selected":!t&&o?"":void 0,"is-translucent":$?"":void 0,"is-transparent":w?"":void 0,style:mr,onClick:V,onContextMenu:ar,onMouseEnter:L=>{H(!0),k(L.metaKey)},onMouseMove:L=>{k(L.metaKey)},onMouseLeave:()=>{H(!1),k(!1),K(!1)},onFocus:()=>U(!0),onBlur:()=>{U(!1),K(!1)},onKeyDown:or,onTransitionEnd:rr})});md.displayName="ArcColorSwatch";const Ti=md;Ti.getColorData=et,lr("ArcColorSwatch",gv);const pv=s`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${_}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${_}•4);
      font-size: var(${f}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${_}•4);
      max-width: calc((var(${f}•24) + var(${_}•4)) * 7 + var(${_}•24));
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${_}•8);
      padding-top: var(${_}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${_}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${_}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${f}•10);
    }
  }

}
`,Bn=({children:r,id:e,heading:a,showHeading:t=!0,colors:o=[],activeColor:n,format:c=Pa.format,canAddColor:l=!1,canRemoveColor:d=!1,contrastBgColor:h,addColorFlow:g="standalone",sharedSwatchProps:v,onSwatchClick:p,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:w,...S})=>{const x=g==="embedded",C=Rr(void 0,"add-color-anchor"),I=Rr(void 0,"add-color-popover"),[A,j]=(0,u.useState)(o),[M,H]=(0,u.useState)(!1),{isSelectionControlled:z,activeSelectedColor:k,setUncontrolledSelectedColor:N,selectColor:U}=ev({activeColor:n}),Z=(0,u.useMemo)(()=>_i(k),[k]),K=(0,u.useMemo)(()=>A.map(nr=>({normalized:St(nr),rgba:Pr(Se(nr))})),[A]),q=(0,u.useMemo)(()=>K.map(nr=>Z?nr.normalized===Z.comparisonKey?!0:!!Z.selectedRgba&&!!nr.rgba&&Tn(nr.rgba,Z.selectedRgba):!1),[K,Z]),F=(0,u.useMemo)(()=>q.some(Boolean),[q]),X=!x&&F?void 0:k;(0,u.useEffect)(()=>{j(o)},[o]);const P=(0,u.useCallback)(nr=>{if(typeof nr=="object"&&nr!==null&&"hsv"in nr){$?.(nr);return}const Lr=Se(nr),ce=Rn(nr),Te=et(Lr,{format:c});$?.({...Te,name:ce})},[$,c]),T=(0,u.useCallback)(nr=>{H(nr),w?.(e,nr)},[e,w]),O=(0,u.useCallback)(()=>ma?.handlePopover?.(I,"show"),[I]),V=(0,u.useCallback)(()=>ma?.handlePopover?.(I,"hide"),[I]),ar=(0,u.useMemo)(()=>({id:e,heading:a,showHeading:t,colors:A,activeColor:n,format:c,canAddColor:l,canRemoveColor:d,contrastBgColor:h,addColorFlow:g,sharedSwatchProps:v,onSwatchClick:p,onAddColor:m,onRemoveColor:b,onColorChange:$,onAddColorToggle:w}),[e,a,t,A,n,c,l,d,h,g,v,p,m,b,$,w]),{draftColorIndex:rr,draftColorValue:or,startAddDraft:mr,updateDraftColor:L,cancelDraftColor:G,saveDraftColor:fr,saveCurrentColor:br}=cv({palette:ar,isSelectionControlled:z,onAddColor:m,emitColorChange:P,setLocalColors:j,setUncontrolledSelectedColor:N,initialColorValue:X,shouldOpenPopover:!x,notifyAddColorToggle:T,showPopover:O,hidePopover:V}),Sr=(0,u.useMemo)(()=>A.map((nr,Lr)=>rr===Lr&&or!=null?or:nr),[rr,or,A]),Dr=(0,u.useMemo)(()=>{if(rr==null||or==null||Z==null||rr<0||rr>=q.length)return q;const nr=[...q];return nr[rr]=sd(or,Z),nr},[q,rr,or,Z]),Fr=(0,u.useMemo)(()=>_i(or),[or]),W=(0,u.useMemo)(()=>rr==null||Fr==null?!1:Ei(A,or,{skipIndex:rr}),[rr,Fr,or,A]),zr=(0,u.useCallback)((nr,Lr)=>{if(!nr?.colorData)return;const ce={color:nr.colorData.value,name:nr.colorData.name};if(nr.action==="remove"&&d){j(Te=>{const Sa=Te.filter(Oa=>!Mn(Oa,ce));return Sa.length===Te.length?Te:Sa}),b?.(ar,ce,Lr);return}U(ce),p?.({...nr,source:"swatch",shouldClosePicker:!1},Lr),P(nr.colorData)},[d,P,b,p,ar,U]),vr=(0,u.useCallback)(nr=>rr===nr&&or!=null,[rr,or]);(0,u.useEffect)(()=>{!x||rr==null||k==null||L(k)},[k,rr,x,L]);const Tr=(0,u.useCallback)(nr=>{const Lr=nr?.newState==="open";H(Lr),w?.(e,Lr)},[e,w]),$e=(0,u.useCallback)(nr=>{const Lr=k??Pa.color;br(Lr,nr)},[k,br]),Ie=(0,u.useCallback)(nr=>{nr.key!=="Escape"||!M||G(nr)},[G,M]),_e=!k||x&&!M&&F,da=x&&M?"Cancel":x?"Add Current Color":"Add Color",Mt=x||!M;let ua=$e;return x||(ua=M?G:mr),(0,i.jsxs)("div",{...S,"arc-color-palette":e,"is-adding-color":M?"":void 0,children:[t&&a&&(0,i.jsx)("header",{"arc-color-palette-header":"",children:typeof a=="string"?(0,i.jsx)("strong",{children:a}):(0,i.jsx)(ae,{...a,layout:"inline",isStrong:!0})}),(0,i.jsxs)("div",{"arc-color-palette-set":"",id:C,children:[Sr?.map((nr,Lr)=>(0,u.createElement)(Ti,{...v,key:`${Se(nr)}-${Lr}`,color:nr,kind:"swatch",isDraft:vr(Lr),isSelected:Dr[Lr],canRemoveColor:d&&!(x&&vr(Lr)),contrastBgColor:h,tooltip:x&&vr(Lr)?"Save Color":void 0,onClick:x&&vr(Lr)?fr:zr})),l&&Mt&&(0,i.jsx)(Er,{"arc-add-color":"",popoverTarget:I,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:da,onClick:ua,isDisabled:_e})]}),l&&!x&&(0,i.jsx)(at,{mode:"add",heading:"",color:or??Pa.color,format:c,onChange:nr=>L(nr.value),popoverProps:{id:I,popover:"manual",anchorAt:"right-center",alternateAnchorId:C,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:Tr,onKeyDown:Ie,footerSlot:(0,i.jsxs)(Ln,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)(Er,{"arc-color-picker-button":"cancel",text:"Cancel",hierarchy:"secondary",size:"sm",onClick:G}),(0,i.jsx)(Er,{"arc-color-picker-button":"save",text:"Save",size:"sm",onClick:fr,isDisabled:W})]})}}),r&&(0,i.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};Bn.addColor=av,Bn.removeColor=tv,lr("ArcColorPalette",pv);const vv=(0,u.memo)(function({palette:e,canAddColor:a,canRemoveColor:t,activePaletteColor:o,contrastBgColor:n,onSwatchClick:c,onAddColor:l,onRemoveColor:d}){const h=(0,u.useCallback)((g,v)=>{c(g,v,e.id)},[e.id,c]);return(0,i.jsx)(Bn,{...e,canAddColor:a??e.canAddColor,canRemoveColor:t,addColorFlow:"embedded",activeColor:o,contrastBgColor:n,onAddColor:l,onRemoveColor:d,onSwatchClick:h})}),bd=({palettes:r=[],canAddColor:e,canRemoveColor:a,activePaletteColor:t,contrastBgColor:o,selectedNameRef:n,hsvRef:c,popoverId:l,onAddColor:d,onRemoveColor:h,commitLocalHsv:g,...v})=>{const p=(0,u.useRef)(r);p.current=r;const m=(0,u.useCallback)(($,w,S)=>{const x=p.current.find(I=>I.id===S);if(!x)return;if(w?.preventDefault(),w?.stopPropagation(),$?.action==="remove"&&(a??x.canRemoveColor)){x.onSwatchClick?.($,w);return}$?.colorData&&(n.current=$.colorData.name,g($.colorData.hsv));try{x.onSwatchClick?.($,w)}catch{}if(($?.shouldClosePicker??!0)&&l)try{ma.handlePopover(l,"hide")}catch{}},[a,g,l,n]),b=(0,u.useCallback)(($,w,S)=>{d?.($,w,S)},[d]);return r.length?(0,i.jsx)("div",{...v,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map($=>(0,i.jsx)(vv,{palette:$,canAddColor:e,canRemoveColor:!!(a??$.canRemoveColor),activePaletteColor:t,contrastBgColor:o,onSwatchClick:m,onAddColor:b,onRemoveColor:h},$.id))}):null},$d=1,yd="Please enter six hex digits \u2192 A1B2C3",fv="Use six hex digits (RGB only). Opacity is not editable in this picker.",mv=/^[0-9A-Fa-f]{3}$/,bv=/^[0-9A-Fa-f]{4}$/,$v="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",yv="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",xv=0,kv=255,Ra=r=>r.replace(/#/g,"").trim(),xd=r=>r.length===3?`${r[0]}${r[0]}${r[1]}${r[1]}${r[2]}${r[2]}`:r,yo=r=>De({...r,a:1},!1).replace(/^#/,""),wv=r=>Math.min(kv,Math.max(xv,Math.round(r))),kd=r=>{if(mv.test(r))return{kind:"three",expanded:xd(r)};if(bv.test(r)){const e=Pr(`#${r}`);if(e)return{kind:"four",shorthand:r,expanded:yo(e),alphaPercent:Math.round(e.a*100)}}return null},Cv=r=>r?.kind==="three"?`Please enter six hex digits \u2192 ${r.expanded.toUpperCase()}.`:r?.kind==="four"?`Change to \u2192 #${r.expanded.toUpperCase()} at ${r.alphaPercent}% opacity?`:yd,Av=(r,e,a)=>{const t=Ra(r),o=kd(t),n=t.length>0&&(!a&&t.length===8||!e&&t.length!==6&&t.length!==8||Pr(`#${t}`)===null),l=!e&&t.length>0&&t.length!==6&&t.length!==8||!a&&t.length===8?Cv(o):yd,d=!a&&t.length===8?fv:l;let h="Apply expanded six-digit hex";return o?.kind==="four"?h=`Apply #${o.expanded.toUpperCase()} and ${o.alphaPercent}% opacity`:o?.kind==="three"&&(h=`Apply expanded hex ${o.expanded.toUpperCase()}`),{isInvalid:n,errorAid:{tooltip:d,ariaLabel:h,fix:o}}},ji=(r,e,a)=>{const t=Pr(`#${r}`);t&&(e(r,{applyHexAlpha:!0}),a(yo(t)))},Sv=(r,e,a,t)=>{if(e){ji(r,a,t);return}const o=Pr(`#${r}`);if(o){const n=yo(o);t(n),a(n)}},zv=(r,e,a,t)=>{if(e)ji(r,a,t);else{const o=r.slice(0,6);t(o),a(o)}},Ev=(r,e,a,t)=>{r.kind==="three"?(a(r.expanded),e(r.expanded)):t?(e(r.shorthand,{applyHexAlpha:!0}),a(r.expanded)):(a(r.expanded),e(r.expanded))},Iv=(r,e=!1)=>{const a=Ra(r);return!e&&a.length>6?a.slice(0,6):a},_v=(r,e,a,t,o)=>{const n=Pr(`#${r}`)??e,c={...n,[a]:wv(n[a]+t*o)};return yo(c)},Tv=(r,e,a,t)=>{if(!a&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!e&&r.length>0){const o=r.length===6||r.length===8,n=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!n)return!1}return!0},jv=(r,e,a)=>{const t=Pr(`#${r}`);return t?a?.applyHexAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:e.a}:null},Et=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),Rv=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),Ri=({children:r,...e})=>(0,i.jsx)(i.Fragment,{children:!!r&&(0,i.jsx)(Xa,{...e,children:(0,i.jsx)(Ja,{children:r})})}),Pv=({children:r,layout:e,size:a,variant:t,tag:o="span",...n})=>(0,i.jsx)(o,{...n,"data-layout":e,"data-size":a,"data-variant":t,children:r}),Mv=()=>(0,i.jsx)("span",{"input-element":"spacer"}),Lv=r=>(0,i.jsx)(Et,{...r,"input-element":"header"}),Bv=r=>(0,i.jsx)(Ri,{...r,"input-element":"header-label"}),Ov=r=>(0,i.jsx)(Et,{...r,"input-element":"header-slot"}),Dv=r=>(0,i.jsx)(Et,{...r,"input-element":"body"}),Nv=r=>(0,i.jsx)(Ri,{...r,"input-element":"input-prefix"}),Fv=r=>(0,i.jsx)(Ri,{...r,"input-element":"input-suffix"}),Hv=r=>(0,i.jsx)(Rv,{...r,"input-element":"input-action"}),Vv=r=>(0,i.jsx)(Et,{...r,"input-element":"footer"}),Uv=r=>(0,i.jsx)(Et,{...r,"input-element":"footer-caption"}),Kv=r=>(0,i.jsx)(Et,{...r,"input-element":"footer-slot"}),Wv=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},Cr=s`--arc•input`,xa=s`${Cr}•fg`,On=s`${xa}•disabled`,Dn=s`${xa}•readonly`,Nn=s`${xa}•invalid`,Ne=s`${Cr}•bg`,Fn=s`${Ne}•hover`,Hn=s`${Ne}•disabled`,Vn=s`${Ne}•readonly`,Un=s`${Ne}•invalid`,Gv=s`${Cr}•align`,wd=s`${Gv}•items`,Cd=s`${Cr}•header`,Kn=s`${Cd}•label•color`,Ad=s`${Cd}•slot•color`,Sd=s`${Cr}•footer`,Pi=s`${Sd}•caption•color`,zd=s`${Sd}•slot•color`,Mi=s`${Cr}•border`,Li=s`${Mi}•radius`,qv=s`${Mi}•width`,Fe=s`${Mi}•color`,Bi=s`${Cr}•outline`,Ed=s`${Bi}•size`,Id=s`${Bi}•offset`,_d=s`${Bi}•color`,xo=s`${Cr}•height`,Yv=s`${Cr}•padding`,Wn=s`${Yv}•inline`,Oi=s`${Wn}•end`,Td=s`${Cr}•slot`,Di=s`${Td}•gap`,Ni=s`${Td}•font•size`,Gn=s`${Fe}•hover`,qn=s`${Fe}•disabled`,Fi=s`${Fe}•readonly`,ko=s`${Fe}•invalid`,Hi=s`${Cr}•action•height`,jd=s`${Cr}•gap`,Vi=s`${Cr}•font•size`,Zv=s`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${xo}: var(${f}•48);
    ${Oi}: var(${_}•8);
    ${Hi}: var(${f}•48);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${xo}: var(${f}•40);
    ${Hi}: var(${f}•40);
  }

  &[data-size=md] {
    ${xo}: var(${f}•32);
    ${Li}: var(${f}•4);
    ${Hi}: var(${f}•32);
  }

  &:has(select) {
    ${Wn}: 0;
    ${wd}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${Vi}: var(${f}•14);
    ${Ni}: var(${f}•12);

    ${xo}: var(${f}•40); /* default size */
    ${jd}: var(${_}•6);
    ${Di}: var(${_}•4);
    ${Wn}: var(${_}•12);
    ${Oi}: var(${_}•3);
    ${Li}: var(${f}•8);
    ${qv}: var(${f}•1);
    ${Ed}: var(${f}•2);
    ${Id}: var(${f}•2);

    &[data-size=inherit] {
      ${Vi}: 0.875em; /* 14px at 100% */
      ${Ni}: 0.75em; /* 12px at 100% */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${xa}: var(--arc-color-fg-primary);
    ${Kn}: inherit;
    ${Ad}: var(--arc-color-fg-secondary);
    ${Pi}: var(--arc-color-fg-secondary);
    ${zd}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${Ne}: var(--arc-color-bg-primary);
      ${Fn}: var(--arc-color-bg-primary);
      ${Fe}: var(--arc-color-border-mid);
      ${Gn}: var(--arc-color-border-heavy);

      ${On}: var(--arc-color-fg-disabled);
      ${Hn}: var(--arc-color-bg-secondary);
      ${qn}: var(--arc-color-border-mid);

      ${Dn}: var(--arc-color-fg-primary);
      ${Vn}: var(--arc-color-bg-disabled);
      ${Fi}: var(--arc-color-border-mid);

      ${Nn}: var(--arc-color-fg-critical-mid);
      ${Un}: var(--arc-color-bg-primary);
      ${ko}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${Ne}: var(--arc-color-bg-secondary);
      ${Fn}: var(--arc-color-bg-hover-default);
      ${Fe}: transparent;
      ${Gn}: var(--arc-color-border-stark);

      ${Nn}: var(--arc-color-fg-critical-mid);
      ${Un}: var(--arc-color-bg-critical-muted);
      ${ko}: transparent;

      ${On}: var(--arc-color-fg-disabled);
      ${Hn}: var(--arc-color-bg-disabled);
      ${qn}: transparent;

      ${Dn}: var(--arc-color-fg-primary);
      ${Vn}: var(--arc-color-bg-disabled);
      ${ko}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${Ne}: transparent;
      ${Fn}: var(--arc-color-bg-hover-default);
      ${Fe}: transparent;
      ${Gn}: transparent;

      ${Nn}: var(--arc-color-fg-critical-mid);
      ${Un}: transparent;
      ${ko}: var(--arc-color-fg-critical-mid);

      ${On}: var(--arc-color-fg-disabled);
      ${Hn}: transparent;
      ${qn}: transparent;

      ${Dn}: var(--arc-color-fg-primary);
      ${Vn}: var(--arc-color-bg-disabled);
      ${Fi}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:where(:not(:has(
    input:where(:disabled, :read-only),
    select:where(:disabled, [data-readonly])
  ))) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${Fe}: var(--arc-input-border-color-hover, var(${Gn}));
      ${Ne}: var(--arc-input-background-hover, var(${Fn}));
    }

    &:has([input-element=body]) {
      &:where(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible)
      ) {
        ${_d}: var(--arc-color-border-focus);
      }
    }
  }

  &:where(:has(
    input[type=range]:not(:disabled),
    select:not(:disabled, [data-readonly])
  )) {
    ${Cr}•cursor: pointer;
  }

  &:where(:has(
    input:not([type=range]):read-only,
    select[data-readonly]
  )) {
    ${Cr}•cursor: default;
    ${xa}: var(${Dn});
    ${Ne}: var(${Vn});
    ${Fe}: var(${Fi});
  }

  &:has(input:disabled, select:disabled) {
    ${Cr}•cursor: not-allowed;
    ${xa}: var(${On});
    ${Ne}: var(${Hn});
    ${Fe}: var(${qn});
    ${Kn}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${Ne}: var(${Un});
    ${Kn}: var(${xa});
    ${Fe}: var(${ko});
    ${Pi}: var(${Nn});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${Cr}•display: flex;
  }

  &[data-layout=hug] {
    ${Cr}•display: inline-flex;
  }

  & {
    ${Cr}•border: var(--arc-border-width-sm) solid var(${Fe});
    ${Cr}•outline: var(${Ed}) solid var(${_d}, transparent);
  }
}

/* Inter-Component Communications ----------------------------------• */

[arc-input] {
  --arc-icon-text-line-height: normal;
  --arc-label-cursor: var(${Cr}•cursor, inherit); /* ArcLabel • cursor syncing */

  &[arc-text-input][data-size=md] {
    --arc-button-border-radius: var(--arc-border-radius-sm);
    --arc-button-outline-offset: 0;
    --arc-button-height: 80%; /* ArcButton • the input size 'md' needs
                                      a slightly smaller "input-action" button
                                      footprint; there's no direct access to
                                      ArcButton['size'] prop in this context */
  }
}

[arc-input]:not([hidden]) {
  display: var(${Cr}•display, flex);
  flex-direction: column;
  gap: var(${Di});
  color: var(--arc-input-color, var(${xa}));

  :is([input-element=header], [input-element=footer]) {
    flex: none;
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${Ni}));
    gap: var(${Di});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${Kn}));
    opacity: var(--arc-input-header-label-opacity, unset);
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${Ad}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${Pi}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${zd}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    position: relative;
    display: flex;
    align-items: var(${wd}, center);
    gap: var(--arc-input-gap, var(${jd}));
    height: var(--arc-input-height, var(${xo}));
    font-size: var(${Vi});

    color: var(--arc-input-color, var(${xa}));
    background-color: var(--arc-input-background, var(${Ne}));
    border: var(--arc-input-border, var(${Cr}•border));
    border-radius: var(--arc-input-border-radius, var(${Li}));
    outline: var(${Cr}•outline, none);
    outline-offset: var(--arc-input-outline-offset, var(${Id}));

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Cr}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${Wn}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${Oi});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &:not([type=range]) {
        border: var(--arc-border-width-sm) solid transparent;
        background: transparent;
      }

      /* @note - textfield appearance suppresses native spinners for number inputs */
      &[arc-input-type=number][is-appearance=textfield] {
        appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
        }
      }

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }

    /* @note - reset font-size for nested input elements */
    [input-element] { font-size: var(--arc-input-element-font-size, 1em); }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
    font-weight: var(--arc-input-prefix-font-weight, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: var(--arc-input-action-display, flex);
    align-items: center;
    justify-content: center;
  }
}

}
`,Xv={onChangeHandler:Wv,Wrapper:Pv,Spacer:Mv,Header:Lv,HeaderLabel:Bv,HeaderSlot:Ov,InputBody:Dv,InputPrefix:Nv,InputSuffix:Fv,InputAction:Hv,Footer:Vv,FooterCaption:Uv,FooterSlot:Kv};lr("ArcInput",Zv);const dr=Xv,Jv="[input-element=body]",Qv=24;function rf({inputRef:r,onChange:e,enabled:a,deltaPerStep:t=Qv}){const o=(0,u.useRef)(e);o.current=e,(0,u.useEffect)(()=>{if(!a||t<=0)return;let n=0;const c=()=>r.current,l=()=>{const m=c();if(!(m instanceof Element))return null;const b=m.closest(Jv);return b instanceof HTMLElement?b:null},d=(m,b)=>{const $=o.current;if(!$)return;const w={name:m.name,value:b};$(w,{target:m,currentTarget:m})},h=()=>{n=0},g=m=>{const b=c();if(!b||document.activeElement!==b||b.type!=="number"||b.disabled||b.readOnly)return;m.preventDefault(),m.stopPropagation();const $=Number(b.step)||1,w=Number(b.min),S=Number(b.max),x=Number.isFinite(w)?w:void 0,C=Number.isFinite(S)?S:void 0;let I=Number(b.value);if(!Number.isFinite(I))return;n+=m.deltaY;const A=t,j=()=>{const z=Math.max(x??-1/0,I-$);return z===I?!1:(I=z,d(b,String(z)),!0)},M=()=>{const z=Math.min(C??1/0,I+$);return z===I?!1:(I=z,d(b,String(z)),!0)};for(;n>=A;){if(!j()){n=0;break}n-=A}for(;n<=-A;){if(!M()){n=0;break}n+=A}},v=l(),p=c();if(!(!v||!p||p.type!=="number"))return p.addEventListener("blur",h),v.addEventListener("wheel",g,{passive:!1}),()=>{p.removeEventListener("blur",h),v.removeEventListener("wheel",g)}},[a,t,r])}const Yn=tr(Ue,["fill","hug"]),Zn=tr(ie,["inherit","xl","lg","md"]),Ui=tr(jr,["outline","solid","plain"]),ef=Yn,af=Zn,tf=tr(Ui,["outline","solid"]),of=["text","number","password","email","url"],wo=(0,u.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:t,headerLabel:o,headerSlot:n,inputPrefix:c,inputAction:l,inputSuffix:d,footerCaption:h,footerSlot:g,...v},p)=>{const{id:m,wheelControl:b,appearance:$,onChange:w,...S}=t,x="arc-search"in v,C=x?"search":S?.type||"text",I=S?.disabled||void 0,A=S?.readOnly||void 0,j=S?.required||void 0,M=!!(o||n),H=!!(h||g),z=(0,u.useRef)(null),k=(0,u.useCallback)(Z=>{z.current=Z,je(p,Z)},[p]),N=typeof b=="object"?b.deltaPerStep:void 0;rf({enabled:C==="number"&&b!==!1,deltaPerStep:N,inputRef:z,onChange:w});const U=l&&(0,u.isValidElement)(l)?(0,u.cloneElement)(l,{size:"md"}):l;return(0,i.jsxs)(dr.Wrapper,{...v,"arc-text-input":"","arc-input":C,layout:r,size:e,variant:a,children:[M&&(0,i.jsxs)(dr.Header,{children:[(0,i.jsx)(dr.HeaderLabel,{htmlFor:m,children:o}),!!n&&(0,i.jsx)(dr.Spacer,{}),(0,i.jsx)(dr.HeaderSlot,{children:n})]}),(0,i.jsxs)(dr.InputBody,{children:[(0,i.jsx)(dr.InputPrefix,{htmlFor:m,children:c}),(0,i.jsx)("input",{...S,...x?{type:C}:{},ref:k,id:m,"arc-input-type":C,onChange:dr.onChangeHandler(w),"aria-disabled":I,"aria-readonly":A,"aria-required":j,"is-appearance":$??void 0}),(0,i.jsx)(dr.InputSuffix,{htmlFor:m,children:d}),(0,i.jsx)(dr.InputAction,{children:U})]}),H&&(0,i.jsxs)(dr.Footer,{children:[(0,i.jsx)(dr.FooterCaption,{children:h}),!!g&&(0,i.jsx)(dr.Spacer,{}),(0,i.jsx)(dr.FooterSlot,{children:g})]})]})}),Rd=({commitDraft:r,setIsEditing:e,onRevert:a})=>{const t=(0,u.useCallback)(()=>{e(!0)},[e]),o=(0,u.useCallback)(()=>{e(!1),r()},[e,r]),n=(0,u.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),e(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),e(!1),a(),c.currentTarget.blur())},[e,r,a]);return{onFocus:t,onBlur:o,onKeyDown:n}},Pd=({hsv:r,draftValue:e,label:a="Hex",showLabel:t=!0,setIsEditing:o,commitDraft:n,setDraftValue:c,expandHexShorthand:l=!1,hasAlphaTools:d=!0})=>{const h=Rr(void 0,"hex-input"),g=(0,u.useRef)(null),v=yo(Xe(r)),[p,m]=(0,u.useState)(!1),{isInvalid:b,errorAid:$}=(0,u.useMemo)(()=>Av(e,l,d),[e,l,d]),{onFocus:w,onBlur:S,onKeyDown:x}=Rd({commitDraft:n,setIsEditing:o,onRevert:()=>c(v)}),C=(0,u.useCallback)(()=>{m(!0);const k=Ra(e);if(k.length===8){zv(k,d,n,c),S();return}if(l&&k.length===3){const N=xd(k);c(N),n(N),o(!1),S();return}l&&k.length===4&&Sv(k,d,n,c),S()},[e,l,d,c,n,o,S]),I=(0,u.useCallback)(k=>{if(k.key!=="ArrowUp"&&k.key!=="ArrowDown")return;const N=k.key==="ArrowUp"?$d:-$d,U=k.altKey?"r":k.metaKey?"g":"b",Z=k.shiftKey?16:1,K=_v(Ra(e),Xe(r),U,N,Z);c(K),n(K),k.preventDefault()},[e,r,c,n]),A=(0,u.useCallback)(k=>{if(I(k),!k.defaultPrevented){if(k.key==="Enter"){k.preventDefault(),o(!1),k.currentTarget.blur();return}k.key==="Escape"&&x(k)}},[I,o,x]),j=({value:k})=>{const N=Iv(k??"",d);N.length===8?ji(N,n,c):(c(N),n(N))},M=b&&p,H=M?$.tooltip:void 0,z=(0,u.useCallback)(()=>{const k=kd(Ra(e));k&&Ev(k,n,c,d),queueMicrotask(()=>{g.current?.focus()})},[e,n,c,d]);return(0,i.jsx)(wo,{ref:g,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?a:void 0,inputPrefix:"#",inputAction:M?(0,i.jsx)(Er,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:$.tooltip,"aria-label":$.ariaLabel,onClick:z}):void 0,inputProps:{id:h,placeholder:"...",value:e,pattern:d?$v:yv,maxLength:d?9:6,title:H,"aria-invalid":M?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:w,onBlur:C,onKeyDown:A,onChange:j}})},Ki=typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",Md=Ki?window.EyeDropper:void 0,Ld=Md?new Md:void 0,Bd=({onColorPicked:r,...e})=>{const[a,t]=(0,u.useState)(!1),o=async()=>{if(!(!Ki||!Ld||a)){t(!0);try{const{sRGBHex:n}=await Ld.open();if(typeof r=="function"){const c=Xe(Pn(n,"#000000"));r(De({...c,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(n){n instanceof DOMException&&n.name==="AbortError"||console.error("EyeDropper failed:",n)}finally{t(!1)}}};return Ki?(0,i.jsx)("div",{"arc-color-eye-dropper":"",children:(0,i.jsx)(Er,{...e,onClick:o,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:"Dropper",tooltip:"Pick a color"})}):null},Od=["value","pct","pctSigned","min","max"],Dd=new RegExp(`\\{#(${Od.join("|")})\\}`,"g"),nf=Yn,cf=Zn,sf=Ui,lf=["top","inline"],Nd=({text:r,value:e,toValue:a,pctSigned:t,min:o,max:n})=>{const c={value:String(e??""),pct:String(a??""),pctSigned:String(t??""),min:String(o??""),max:String(n??"")};return typeof r=="string"?r.replace(Dd,(l,d)=>c[d]):typeof r=="function"?r({...c,toValue:a,pctSigned:t}):r},he=s`--arc•slider`,Ee=s`${he}•track`,hr=s`${he}•thumb`,It={BASE:s`
    ${Ee}•bg: var(--arc-slider-track-background, var(--arc-color-border-mid));
    ${Ee}•progress•bg: var(--arc-slider-progress-background, var(--arc-color-bg-theme-heavy));
    ${Ee}•height: var(--arc-slider-track-height, max(4px, 0.25em));

    ${hr}•size: var(--arc-slider-thumb-size, max(16px, 1em));
    ${hr}•size•hover: var(--arc-slider-thumb-size-hover, max(16px, 1em));
    ${hr}•size•anchor: var(--arc-slider-thumb-size-hover, var(--arc-slider-thumb-size, max(16px, 1em)));
    ${hr}•size•rest: var(${hr}•size•anchor);

    ${hr}•bg: var(--arc-slider-thumb-background, var(--arc-color-bg-theme-heavy));
    ${hr}•shadow: var(--arc-slider-thumb-shadow, var(--arc-shadow-md));

    &:has([has-small-thumb]) {
      ${hr}•size: var(--arc-slider-thumb-size, max(8px, 0.5em));
      ${hr}•size•rest: var(--arc-slider-thumb-size, max(8px, 0.5em));
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      ${hr}•size: var(${hr}•size•hover);
    }

    &:has([arc-slider-input]:disabled) {
      ${hr}•bg: var(--arc-slider-thumb-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ee}•progress•bg: var(--arc-slider-progress-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ee}•bg: var(--arc-slider-track-background-disabled, var(--arc-color-bg-disabled));
      ${hr}•shadow: var(--arc-slider-thumb-shadow-disabled, none);
    }

    ${hr}•shift: calc((var(${Ee}•height) - var(${hr}•size)) / 2);
    ${hr}•shift•anchor: calc((var(${Ee}•height) - var(${hr}•size•anchor)) / 2);

    ${he}•radius: var(--arc-border-radius-pill);
    ${he}•vx: calc((100% - var(${hr}•size)) * (var(--js•v, 0) / 100));
    ${he}•vx•anchor: calc((100% - var(${hr}•size•anchor)) * (var(--js•v, 0) / 100));

    ${hr}•cx•nudge: calc(
      (var(--js•v, 0) / 100 - 0.5) * (var(${hr}•size•anchor) - var(${hr}•size•rest))
    );

    ${he}•tx: calc(var(${he}•vx•anchor) + var(${hr}•cx•nudge));
    ${he}•ty: var(${hr}•shift•anchor);
  `,THUMB:s`
    appearance: none;
    width: var(${hr}•size);
    height: var(${hr}•size);
    border: none;
    background: var(${hr}•bg);
    translate: 0 0;
    box-sizing: border-box;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${hr}•shadow);
    transition-property: translate, width, height, background;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  `,THUMB_FOCUS:s`
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.125em;
  `,TRACK:s`
    display: flex;
    align-items: center;
    height: var(${Ee}•height);
    border-radius: var(${he}•radius);
    background: var(${Ee}•bg);
  `},df=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-slider] {
    ${It.BASE}
    font-size: initial;

    --arc-input-header-label-font-weight: var(--arc-slider-label-font-weight, unset);
    --arc-input-prefix-font-weight: var(--arc-slider-label-font-weight, var(--arc-font-weight-600));

    --arc-input-header-label-opacity: var(--arc-slider-label-opacity, unset);
    --arc-input-prefix-opacity: var(--arc-slider-label-opacity, unset);

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    ::-webkit-list-button {
      appearance: none;
    }

    ::-moz-number-spin-box {
      display: none;
    }

    [arc-label-content] {
      display: contents;
    }

    > [input-element=body] {
      --arc-input-gap: var(${f}•16);
      --arc-input-padding-inline: 0;
      --arc-input-height: var(--arc-slider-input-height, unset);
      --arc-label-align-items: center;
    }

    [input-element=input-prefix] {
      --arc-input-element-font-size: max(12px, 0.75em);
    }

    [arc-slider-surface] {
      --arc-input-min-width: 3em;
      --arc-tooltip-text-align: center;
      --arc-tooltip-min-width: 2.5em;
    }

    [arc-slider-output] {
      --arc-input-text-align: center;
      --arc-input-width: var(--arc-slider-number-input-width, max(38px, 4ch));
      --arc-input-action-height: 100%;
      --arc-input-outline-offset: var(${f}•2); /* matches the Button component's outline-offset */
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-slider] {
    max-width: var(--js•max•width, var(--arc-slider-max-width, 100%));

    [arc-slider-surface] {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      min-width: 0;
      height: var(${Ee}•height);
      border-radius: var(${he}•radius);

      -webkit-user-select: none;
      user-select: none;

      /* track progress (fill to thumb center); logical inset follows dir so RTL mirrors like native range */
      &::before {
        content: '';
        position: absolute;
        display: var(--arc-slider-progress-display, block);
        inset-block: calc(50% - var(${Ee}•height) / 2);
        inset-inline-start: 0;
        inset-inline-end: auto;
        width: calc(var(${hr}•size) / 2 + var(${he}•vx));
        height: var(${Ee}•height);
        border-radius: var(${he}•radius);
        background: var(${Ee}•progress•bg);
        pointer-events: none;
        transition: background 200ms ease-out;
      }

      &:has(:focus:focus-visible) {
        [arc-slider-thumb] { ${It.THUMB_FOCUS} }
      }
    }

    [arc-slider-input] {
      ${It.TRACK}

      &::-moz-range-track { ${It.TRACK} }
      &::-moz-focus-outer { border: 0; }

      &::-moz-range-thumb { ${It.THUMB} }
      &::-webkit-slider-thumb { ${It.THUMB} }
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      [arc-slider-input]::-webkit-slider-thumb { translate: var(${hr}•cx•nudge) 0; }
      [arc-slider-input]::-moz-range-thumb { translate: var(${hr}•cx•nudge) 0; }

      &:dir(rtl) {
        [arc-slider-input]::-webkit-slider-thumb { translate: calc(-1 * var(${hr}•cx•nudge)) 0; }
        [arc-slider-input]::-moz-range-thumb { translate: calc(-1 * var(${hr}•cx•nudge)) 0; }
      }
    }

    [arc-slider-thumb] {
      position: absolute;
      width: var(${hr}•size•anchor);
      height: var(${hr}•size•anchor);
      inset-block-start: var(${he}•ty);
      inset-inline-start: var(${he}•tx);
      border-radius: var(${he}•radius);
      pointer-events: none;
    }
  }

  [arc-slider-captions] {
    position: absolute;
    inset: 0.5em 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25em;
    color: var(--arc-color-fg-secondary);
  }

  [arc-slider-caption] {
    font-size: max(10px, 0.625em);
  }

  [arc-slider-output] {
    --arc-input-action-display: contents;
    --arc-button-height:  var(--arc-slider-output-button-height, 100%);

    /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
    --arc-input-suffix-opacity: var(--arc-slider-output-opacity, 61.2%);

    flex: none;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(6px, 0.375em);
  }
}

`,Fd=(0,u.forwardRef)(({id:r,layout:e="hug",size:a="inherit",variant:t="solid",headerLabel:o,labelPlacement:n="top",displayPrecision:c=0,headerSlot:l,inputIdPrefix:d="arc-slider",inputProps:h,inputAction:g,inputSuffix:v,footerCaption:p,footerSlot:m,valueInputProps:b={},tooltipProps:$={},renderOutput:w,style:S,...x},C)=>{const I=(0,u.useRef)(null),A=Rr(r,d),{minLabel:j,maxLabel:M,surfaceName:H,smallThumbAtRest:z=!1,onChange:k,value:N,min:U=0,max:Z=100,step:K=1,disabled:q,...F}=h,X=Number(U),P=Number(Z),T=Math.min(X,P),O=Math.max(X,P),V=(0,u.useMemo)(()=>({...F,id:A,value:N,min:T,max:O,step:K,disabled:q}),[F,A,N,T,O,K,q]),{showTooltip:ar=!1,text:rr,...or}=$,{toValue:mr,pctSigned:L=0}=(0,u.useMemo)(()=>Vl({value:Number(N),min:Number(T),max:Number(O),step:Number(K),precision:Number(c)}),[N,T,O,K,c]),G=(0,u.useMemo)(()=>({value:N,toValue:mr,pctSigned:L,min:T,max:O}),[O,T,L,mr,N]),fr=(0,u.useMemo)(()=>ar?Nd({text:rr,...G}):void 0,[ar,rr,G]),br=(0,u.useMemo)(()=>dr.onChangeHandler(k),[k]),Sr=(0,u.useCallback)((Ie,_e)=>{const ra=String(Ie.value??N??T);k?.({...Ie,value:ra},_e)},[k,N,T]),Dr=(0,u.useMemo)(()=>{const{deltaPerStep:Ie,showValueInput:_e=!1,...ra}=b;return w&&typeof w=="function"?w(G):(v||_e||g)&&(0,i.jsxs)(i.Fragment,{children:[v&&(0,i.jsx)(dr.InputSuffix,{htmlFor:A,children:Nd({text:v,...G})}),_e&&(0,i.jsx)(wo,{"arc-slider-number-input":"",layout:"hug",size:a,variant:t,inputProps:{...ra,...V,id:`${A}-text`,type:"number",appearance:"textfield",wheelControl:Ie?{deltaPerStep:Ie}:void 0,onChange:Sr}}),g&&(0,i.jsx)(dr.InputAction,{children:g})]})},[b,v,g,w,G,A,a,t,V,Sr]),Fr=(0,u.useMemo)(()=>!!o,[o]),W=(0,u.useMemo)(()=>Fr&&n==="top",[Fr,n]),zr=(0,u.useMemo)(()=>Fr&&n==="inline",[Fr,n]),vr=(0,u.useMemo)(()=>!!(W||l),[W,l]),Tr=(0,u.useMemo)(()=>!!(p||m),[p,m]),$e=(0,u.useMemo)(()=>({...S,"--js\u2022v":String(mr)}),[S,mr]);return(0,i.jsxs)(dr.Wrapper,{...x,"arc-slider":"","arc-input":"range",layout:e,size:a,style:$e,children:[vr&&(0,i.jsxs)(dr.Header,{children:[W&&(0,i.jsx)(dr.HeaderLabel,{htmlFor:A,children:o}),!!l&&(0,i.jsx)(dr.Spacer,{}),(0,i.jsx)(dr.HeaderSlot,{children:l})]}),(0,i.jsxs)(dr.InputBody,{children:[zr&&(0,i.jsx)(dr.InputPrefix,{htmlFor:A,children:o}),(0,i.jsxs)("span",{"arc-slider-surface":H??"","has-small-thumb":z?"":void 0,children:[(0,i.jsx)("label",{"arc-slider-thumb":"",ref:I,htmlFor:A,"aria-hidden":!0}),(0,i.jsx)(fn,{...or,isEnabled:ar&&!q,text:fr||String(N),alternateAnchor:I,children:(0,i.jsx)("input",{...F,ref:C,id:A,"arc-slider-input":"","arc-input-type":"range",type:"range",value:N,min:T,max:O,step:K,disabled:q,"aria-disabled":q,onChange:br})}),(j||M)&&(0,i.jsxs)("span",{"arc-slider-captions":"",children:[j&&(0,i.jsx)("label",{"arc-slider-caption":"min",htmlFor:A,children:j}),!!M&&(0,i.jsx)(dr.Spacer,{}),M&&(0,i.jsx)("label",{"arc-slider-caption":"max",htmlFor:A,children:M})]})]}),Dr&&(0,i.jsx)("span",{"arc-slider-output":"",children:Dr})]}),Tr&&(0,i.jsxs)(dr.Footer,{children:[(0,i.jsx)(dr.FooterCaption,{children:p}),!!m&&(0,i.jsx)(dr.Spacer,{}),(0,i.jsx)(dr.FooterSlot,{children:m})]})]})});Fd.displayName="ArcSlider";const Hd=Fd;lr("ArcSlider",df);const Wi=({inputProps:r,...e})=>{const{id:a,...t}=r;return(0,i.jsx)(Hd,{"arc-color-slider":r.surfaceName,...e,inputIdPrefix:a,inputProps:{...t}})},uf=196.6,hf=(r,e)=>{const a=r.getContext("2d",{alpha:!1});if(!a)return;const{width:t,height:o}=r;if(!t||!o)return;const n=a.createImageData(t,o),c=n.data;let l=0;for(let d=0;d<o;d+=1){const h=1-(o<=1?0:d/(o-1));for(let g=0;g<t;g+=1){const v=t<=1?0:g/(t-1),p=Xe({h:e,s:v,v:h,a:1});c[l++]=Jr(p.r),c[l++]=Jr(p.g),c[l++]=Jr(p.b),c[l++]=255}}a.putImageData(n,0,0)},gf=({value:r,label:e="Color Saturation and Value",step:a=.01,stepLarge:t=.1,isDisabled:o=!1,showLabel:n=!1,onChange:c})=>{const l=Rr(void 0,"color-field"),d=(0,u.useRef)(null),h=(0,u.useRef)(null),g=(0,u.useRef)(null),v=(0,u.useRef)(null),p=(0,u.useRef)(null),m=(0,u.useRef)(null),b=(0,u.useRef)(null),[$,w]=(0,u.useState)(!1),[S,x]=(0,u.useState)(null),C=Q(r.saturation,0,1),I=Q(r.value,0,1),A=Math.round(C*100),j=Math.round(I*100),M=(0,u.useMemo)(()=>{const P=r.hue;return typeof P=="number"&&Number.isFinite(P)?P:uf},[r.hue]),H=(0,u.useMemo)(()=>Ul(M),[M]),z=(0,u.useCallback)((P,T)=>{c({hue:M,saturation:Q(P,0,1),value:Q(T,0,1)})},[M,c]),k=(0,u.useCallback)((P,T,O)=>{const V=Q((P-O.left)/O.width,0,1),ar=Q((T-O.top)/O.height,0,1);z(V,1-ar)},[z]),N=(0,u.useCallback)(P=>{if(o)return;const{clientX:T,clientY:O,pointerId:V,currentTarget:ar}=P,rr=ar.getBoundingClientRect();v.current=V,g.current=rr,p.current={clientX:T,clientY:O},m.current=null,b.current=null,ar.focus(),ar.setPointerCapture(V),w(!0),k(T,O,rr)},[o,k]),U=(0,u.useCallback)(P=>{if(o)return;const{clientX:T,clientY:O,currentTarget:V,pointerId:ar}=P;if(v.current!==ar)return;const rr=g.current??V.getBoundingClientRect();if(P.shiftKey){const or=p.current;if(or){if(m.current===null){const fr=Math.abs(T-or.clientX),br=Math.abs(O-or.clientY);m.current=fr>=br?"s":"v",b.current={clientX:T,clientY:O}}const mr=b.current??or,L=m.current==="s"?T:mr.clientX,G=m.current==="v"?O:mr.clientY;k(L,G,rr);return}}else m.current=null,b.current=null;k(T,O,rr)},[o,k]),Z=(0,u.useCallback)(()=>{v.current=null,g.current=null,p.current=null,m.current=null,b.current=null,w(!1)},[]),K=(0,u.useCallback)(P=>{if(o)return;const T=P.shiftKey?t:a;let O=C,V=I;switch(P.key){case"ArrowLeft":O=C-T;break;case"ArrowRight":O=C+T;break;case"ArrowUp":V=I+T;break;case"ArrowDown":V=I-T;break;case"Home":O=0,V=1;break;case"End":O=1,V=0;break;default:return}P.preventDefault(),z(O,V)},[o,a,t,z,C,I]),q=(0,u.useCallback)(P=>{if(o||!P.key.startsWith("Arrow"))return;const T=P.shiftKey?t:a,O=P.key==="ArrowLeft"||P.key==="ArrowDown"?-T:T;P.preventDefault(),z(C+O,I)},[o,a,t,z,C,I]),F=(0,u.useCallback)(P=>{if(o||!P.key.startsWith("Arrow"))return;const T=P.shiftKey?t:a,O=P.key==="ArrowLeft"||P.key==="ArrowDown"?-T:T;P.preventDefault(),z(C,I+O)},[o,a,t,z,C,I]),X=(0,u.useMemo)(()=>({"--js\u2022s":String(C),"--js\u2022v":String(1-I)}),[C,I]);return(0,u.useLayoutEffect)(()=>{const P=d.current,T=h.current;if(!P||!T)return;const O=()=>{const rr=P.getBoundingClientRect(),or=Math.max(1,Math.round(rr.width)),mr=Math.max(1,Math.round(rr.height)),L=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),G=Math.max(1,Math.round(or*L)),fr=Math.max(1,Math.round(mr*L));T.width!==G&&(T.width=G),T.height!==fr&&(T.height=fr),hf(T,H)};O();const V=new ResizeObserver(()=>{O()});V.observe(P);const ar=()=>{O()};return T.addEventListener("contextrestored",ar),()=>{V.disconnect(),T.removeEventListener("contextrestored",ar)}},[H]),(0,i.jsxs)("div",{"arc-color-field":"","is-disabled":o?"":void 0,"is-interacting":$?"":void 0,"sr-focus":S??void 0,children:[n&&!!e&&(0,i.jsx)("label",{htmlFor:l,children:e}),(0,i.jsxs)("div",{id:l,ref:d,"arc-color-surface":"field",style:X,tabIndex:o?-1:0,role:"application","aria-label":e,"aria-describedby":`${l}-readout`,onPointerDown:N,onPointerMove:U,onPointerUp:Z,onPointerCancel:Z,onKeyDown:K,children:[(0,i.jsx)("canvas",{ref:h,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":S==="saturation"?"":void 0,"aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"value","has-focus":S==="value"?"":void 0,"aria-hidden":"true"})]}),(0,i.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,i.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:o?-1:0,"aria-label":"Saturation","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":A,onKeyDown:q,onFocus:()=>x("saturation"),onBlur:()=>x(null)}),(0,i.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:o?-1:0,"aria-label":"Value","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":j,onKeyDown:F,onFocus:()=>x("value"),onBlur:()=>x(null)})]}),(0,i.jsxs)("div",{id:`${l}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:["Saturation ",A,"%. Value ",j,"%."]})]})},pf=({hsv:r,draftValue:e,label:a="Opacity",showLabel:t=!1,setIsEditing:o,commitDraft:n,setDraftValue:c})=>{const l=Rr(void 0,"alpha-input"),{onFocus:d,onBlur:h,onKeyDown:g}=Rd({commitDraft:n,setIsEditing:o,onRevert:()=>c(At(r.a))}),v=({value:p})=>{const m=String(p??1);c(m),n(m)};return(0,i.jsx)(wo,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?a:void 0,inputProps:{id:l,"aria-label":a,placeholder:"...",value:e,type:"number",appearance:"textfield",min:0,max:100,step:1,onFocus:d,onBlur:h,onKeyDown:g,onChange:v}})},Vd=r=>De({...r,a:1},!1).replace(/^#/,""),vf=()=>typeof window<"u"&&"EyeDropper"in window,Ud=({color:r,hsv:e,isSimpleMode:a,selectedNameRef:t,hsvRef:o,commitLocalHsv:n,tools:c,expandHexShorthand:l,...d})=>{const h=(0,u.useRef)(!1),[g,v]=(0,u.useState)(()=>{const T=Pr(Se(r));return T?Vd(T):"000000"}),[p,m]=(0,u.useState)(At(e.a)),[b,$]=(0,u.useState)(!1),w=(0,u.useCallback)(T=>{t.current=void 0;const V={...o.current,...T};n(V)},[n,o,t]),S=(0,u.useCallback)(T=>w({s:T.saturation,v:T.value}),[w]),x=T=>{const O=Pn(T,"#000000");n(O)},C=(0,u.useMemo)(()=>!c||c.includes("color-field"),[c]),I=(0,u.useMemo)(()=>!c||c.includes("hue-slider"),[c]),A=(0,u.useMemo)(()=>!c||c.includes("alpha-slider"),[c]),j=(0,u.useMemo)(()=>!c||c.includes("hex-input"),[c]),M=(0,u.useMemo)(()=>!c||c.includes("alpha-input"),[c]),H=(0,u.useMemo)(()=>!c||c.includes("eye-dropper")&&vf(),[c]),z=(0,u.useMemo)(()=>A||M,[A,M]),k=(T,O)=>{t.current=void 0;const V=Ra(T??g);if(!Tv(V,l??!1,z,O))return;const ar=Xe(o.current),rr=jv(V,ar,O);if(!rr||yi(rr,ar))return;const or=vo(rr,o.current.h);n(or)},N=T=>{t.current=void 0;const O=ad(T??p);O!=null&&(w({a:O}),m(At(O)))},U=(0,u.useCallback)(T=>{v(Ra(T))},[]),Z=(0,u.useCallback)(T=>{m(T)},[]),K=(0,u.useCallback)(T=>{h.current=T},[]),q=(0,u.useCallback)(T=>{$(T),T&&m(At(o.current.a))},[o]);(0,u.useEffect)(()=>{if(h.current)return;const T=Xe(e),O=Vd(T);v(V=>{if(V===O)return V;if(!l){const ar=Ra(V);if(ar.length===3||ar.length===4||ar.length===8){const rr=Pr(`#${ar}`);if(rr){const or={...rr,a:T.a};if(yi(or,T))return V}}}return O})},[e,l]);const F=(0,u.useMemo)(()=>b?p:At(e.a),[b,p,e.a]),X=(0,u.useMemo)(()=>({hue:e.h,saturation:e.s,value:e.v}),[e]),P=(0,u.useMemo)(()=>Q(Math.round(e.a*100),0,100),[e.a]);return(0,i.jsx)("div",{...d,"arc-color-tools":a?"simple":"","arc-color-picker-section":"tools",children:a?(0,i.jsxs)(i.Fragment,{children:[j&&(0,i.jsx)(Pd,{hsv:e,draftValue:g,setIsEditing:K,commitDraft:k,setDraftValue:U,expandHexShorthand:l,hasAlphaTools:z}),H&&(0,i.jsx)(Bd,{onColorPicked:x}),A&&(0,i.jsx)(Wi,{headerLabel:"Opacity",tooltipProps:{text:`${P.toString()}%`,showTooltip:!0},inputProps:{id:"alpha-slider",surfaceName:"alpha",min:0,value:P,max:100,step:1,"aria-label":"Opacity",onChange:({value:T})=>w({a:Q(Number(T)/100,0,1)})}})]}):(0,i.jsxs)(i.Fragment,{children:[C&&(0,i.jsx)(gf,{value:X,onChange:S}),H&&(0,i.jsx)(Bd,{onColorPicked:x}),(I||A)&&(0,i.jsxs)("div",{"arc-color-sliders":"",children:[I&&(0,i.jsx)(Wi,{tooltipProps:{text:`Hue ${Math.round(e.h).toString()}\xB0`,showTooltip:!0},inputProps:{id:"hue-slider",surfaceName:"hue",min:0,value:e.h,max:360,step:1,"aria-label":"Hue",onChange:({value:T})=>w({h:Q(Number(T),0,360)})}}),A&&(0,i.jsx)(Wi,{tooltipProps:{text:`Opacity ${P.toString()}%`,showTooltip:!0},inputProps:{id:"alpha-slider",surfaceName:"alpha",min:0,value:P,max:100,step:1,"aria-label":"Opacity",onChange:({value:T})=>w({a:Q(Number(T)/100,0,1)})}})]}),(j||M)&&(0,i.jsxs)("div",{"arc-color-inputs":"",children:[j&&(0,i.jsx)(Pd,{hsv:e,draftValue:g,setIsEditing:K,commitDraft:k,setDraftValue:U,expandHexShorthand:l,hasAlphaTools:z}),M&&(0,i.jsx)(pf,{hsv:e,showLabel:!j,draftValue:F,setIsEditing:q,commitDraft:N,setDraftValue:Z})]})]})})},Kd=({heading:r,showGoBack:e,goBackProps:a,...t})=>(0,i.jsx)(ma,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:e,goBackProps:a,headerSlot:!!r&&(0,i.jsx)(ae,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});Kd.displayName="ArcColorPickerWrapper";const Pa={mode:"normal",color:"#05aff0",format:"auto",heading:"Color",palettes:[]},ff={icon:"fa-regular fa-paint-brush",text:"Color Picker",layout:"icon",shape:"round",size:"md"},mf=(r,e)=>r===void 0?!0:e?r.includes("hex-input")||r.includes("eye-dropper")||r.includes("alpha-slider"):r.includes("color-field")||r.includes("eye-dropper")||r.includes("hue-slider")||r.includes("alpha-slider")||r.includes("hex-input")||r.includes("alpha-input"),at=({children:r,mode:e=Pa.mode,color:a=Pa.color,format:t=Pa.format,heading:o=Pa.heading,tools:n,omitTools:c,isInline:l=!1,showGoBack:d=!1,goBackProps:h,palettes:g,popoverProps:v,onChange:p,onAddColor:m,onRemoveColor:b,expandHexShorthand:$,...w})=>{const S=(0,u.useMemo)(()=>cd(a).color,[a]),x=Rr(v?.id??void 0,"color-picker"),C=(0,u.useMemo)(()=>e==="simple",[e]),[I,A]=(0,u.useState)(()=>{const L=Pr(S);return L?vo(L):{h:0,s:0,v:0,a:1}}),j=(0,u.useRef)(I),M=(0,u.useRef)(S),H=(0,u.useRef)(null),z=(0,u.useRef)(void 0);(0,u.useEffect)(()=>{j.current=I},[I]);const k=(0,u.useCallback)(L=>{if(p)try{const G=et(L,{format:t});M.current=G.value,H.current=G.rgba,p({...G,name:z.current})}catch{}},[p,t]),N=(0,u.useCallback)(L=>{ki(L,j.current)||(j.current=L,A(L),k(L))},[k]),U=(0,u.useMemo)(()=>{const L=C?"":"manual";return v?.popover??L},[v?.popover,C]),Z=(0,u.useMemo)(()=>{const L=Xe(I);return{"--js\u2022hue":`hsl(${I.h} 100% 50%)`,"--js\u2022hex":De({...L,a:1},!1),"--js\u2022rgb":rt(L)}},[I]),K=(0,u.useMemo)(()=>rt(Xe(I)),[I]),q=(0,u.useMemo)(()=>g?.map(L=>({...L,canAddColor:!1,canRemoveColor:!1}))??[],[g]),F=(0,u.useRef)(null),X=(0,u.useCallback)(()=>{const L=F.current;if(!L)return;const G=C?'button[arc-color-chip="swatch"]:not(:disabled)':'[arc-color-surface="field"]';L.querySelector(G)?.focus()},[C]),P=v?.onToggle,T=(0,u.useCallback)(L=>{L?.newState==="open"&&setTimeout(X,0),P?.(L)},[X,P]);(0,u.useEffect)(()=>{if(S!==M.current){M.current=S;try{const L=Pr(S)??{r:0,g:0,b:0,a:1},G=H.current;if(G&&xi(L,G))return;const fr=Xe(j.current);if(xi(L,fr))return;z.current=void 0;const br=vo(L,j.current.h);if(ki(br,j.current))return;j.current=br,A(br)}catch{}}},[S]);const O=(0,u.useMemo)(()=>{const L=n===void 0?[...C?Nl:Dl]:[...n];if(!c?.length)return L;const G=new Set(c);return L.filter(fr=>!G.has(fr))},[n,C,c]),V=(0,u.useMemo)(()=>mf(O,C),[O,C]),ar=(0,u.useMemo)(()=>O.includes("palettes"),[O]),rr=(0,i.jsxs)("div",{...w,ref:F,"arc-color-picker":C?"simple":"","is-inline":l?"":void 0,style:Z,children:[C?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(bd,{palettes:ar?q:void 0,activePaletteColor:K,commitLocalHsv:N,selectedNameRef:z,hsvRef:j,popoverId:x,onAddColor:m??(()=>{}),onRemoveColor:b}),V&&(0,i.jsx)(Ud,{color:S,hsv:I,hsvRef:j,selectedNameRef:z,commitLocalHsv:N,isSimpleMode:C,tools:O,expandHexShorthand:$})]}):(0,i.jsxs)(i.Fragment,{children:[V&&(0,i.jsx)(Ud,{color:S,hsv:I,selectedNameRef:z,hsvRef:j,commitLocalHsv:N,tools:O,expandHexShorthand:$}),(0,i.jsx)(bd,{palettes:ar?g:void 0,activePaletteColor:K,commitLocalHsv:N,selectedNameRef:z,hsvRef:j,popoverId:x,onAddColor:m??(()=>{}),onRemoveColor:b,"has-divider":V?"top":void 0})]}),r&&(0,i.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(l)return rr;const or=v?.anchorProps??ff,mr=C?{...v,anchorAt:v?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...v,heading:o??void 0,showGoBack:d??void 0,goBackProps:h??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,i.jsx)(Kd,{...mr,popover:U,anchorProps:or,id:x,onToggle:T,children:rr})};at.getColorAs=nd,at.getColorData=et,at.getContrastColor=Ii,at.addColor=ov,at.removeColor=nv,lr("ArcColorPicker",hv);var bf;const tt={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},$f=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],yf=({icon:r,onClick:e,items:a,renderSubmenu:t,submenuProps:o,...n})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:n}),Wd=(r,e)=>{const{icon:a,itemProps:t}=yf(e);switch(r){case"divider":return(0,i.jsx)("hr",{});case"section-label":return(0,i.jsx)(ae,{...t,...tt,icon:a,size:"sm",isStrong:!0});case"icon-text":return(0,i.jsx)(ae,{...t,...tt,icon:a});case"icon-text-detail":return(0,i.jsx)(ae,{...t,...tt,icon:a,isStrong:!0});case"text":return(0,i.jsx)(ae,{...t,...tt});case"text-detail":return(0,i.jsx)(ae,{...t,...tt,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,i.jsx)(Rc,{...t,...tt,size:"sm"});case"user-detail":return(0,i.jsx)(Rc,{...t,...tt,size:"md",isStrong:!0});default:return r}},r$=r=>Object.fromEntries(bf.map(e=>[e,Wd(e,r)])),Gi=200,xf=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps.id:void 0;return typeof e=="string"&&e.length>0?e:void 0},kf=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps:{},{menuProps:a,renderItem:t,...o}=e;return{menuProps:a,popoverPassthrough:o}},wf=r=>({ownMenuId:r.menu,parentTriggerId:r.trigger}),Cf=r=>{const e=r.submenuProps;if(!e||typeof e!="object")return;const a=e.renderItem;return typeof a=="function"?a:void 0},Xn=(r,e,a)=>{if(!(typeof r.renderSubmenu=="function"||Array.isArray(r.items)&&r.items.length>0))return{hasSubmenu:!1};const o=Yi(r,e),n=`${a}-subtrigger-${o}`;let l=xf(r)??`${a}-submenu-${o}`;return l===n&&(l=`${l}-menu`),{hasSubmenu:!0,menuId:l,triggerId:n}},Af=(r,e)=>{if(!e||!r)return-1;let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentNode;for(;t;){if(t===r)return-1;if(t instanceof HTMLLIElement&&t.parentElement===r)return Array.prototype.indexOf.call(r.children,t);t=t.parentNode}return-1},Sf=(r,e)=>{if(typeof document>"u")return!1;const a=Pe(r,e);try{return!!a?.matches?.(":popover-open")}catch{return!1}},qi=r=>r===!0||typeof r=="number"&&r>=0&&Number.isFinite(r),zf=r=>r===!0?0:r,Ef=r=>r===!0?Gi:r,If={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},Yi=(r,e)=>r.itemId!=null&&String(r.itemId)!==""?String(r.itemId):`auto-${e}`,_f=r=>{let e=null;for(let a=r;a;a=a.parentElement)a.hasAttribute("arc-popover")&&(e=a);return e},Gd=(r,e,a,t)=>{if(t||a==="divider"||!!!(e.href||e.onClick))return;_f(r.currentTarget)?.hidePopover?.()},Tf=r=>r?.role??If[Co(r)]??"menuitem",Co=r=>$f(r)?.find(({test:e})=>e())?.value??"text",qd=r=>e=>Wd(r,e),Zi=(r,e,a,t)=>{const o=t??Xn(r,e,a);if(o.hasSubmenu)return o.triggerId;const n=Yi(r,e);return`${a}-mi-${n}`},jf=(r,e,a)=>Co(r)==="divider"||r.isDisabled===!0||r["aria-disabled"]===!0?!1:Xn(r,e,a).hasSubmenu?!0:!!(r.href||r.onClick),Jn=(r,e)=>{const a=[];for(let t=0;t<r.length;t+=1)jf(r[t],t,e)&&a.push(t);return a},Yd=(r,e,a)=>{if(typeof document>"u")return;const t=r.children[e];if(!(t instanceof HTMLElement))return;const o=Pe(a,r);if(o instanceof HTMLElement&&t.contains(o)){o.focus();return}const n=t.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');Array.from(n).find(l=>l.getAttribute("aria-disabled")!=="true")?.focus()},Zd=(r,e,a,t)=>{const o=Jn(r,e);if(o.length===0)return-1;if(t==="actual")return a>=0&&o.includes(a)?a:o[0];let n=o.indexOf(a);return n<0?t==="next"?o[0]:t==="previous"?o[o.length-1]:o[0]:t==="next"?(n=(n+1)%o.length,o[n]):(n=(n-1+o.length)%o.length,o[n])};function Rf(r,e,a){return{ArrowUp:t=>{const o=Zd(r,e,t,"previous");o>=0&&a(o)},ArrowDown:t=>{const o=Zd(r,e,t,"next");o>=0&&a(o)},Home:()=>{const t=Jn(r,e);t.length>0&&a(t[0])},End:()=>{const t=Jn(r,e);t.length>0&&a(t[t.length-1])}}}function Pf(r,e){const{isVisible:a,menuListRef:t,activeItemIndex:o,filteredItems:n,menuDomId:c,isMenuRtlRef:l,submenuBackNavigation:d,listNavByKey:h,hideSubmenu:g,focusTriggerById:v,focusRowAtItemIndex:p,setActiveItemIndex:m,openSubmenuForKeyboard:b}=e;if(!a||!t.current||!(r.target instanceof Node)||!t.current.contains(r.target))return;const $=t.current,w=r.target.closest?.("ul[arc-menu]");if(w&&w!==$)return;let S=Af($,r.target);if(S<0&&o>=0&&(S=o),S<0)return;const x=n[S],C=Xn(x,S,c),I=l.current,A=I?"ArrowLeft":"ArrowRight",j=I?"ArrowRight":"ArrowLeft";if(d&&r.key==="Escape"){r.preventDefault(),r.stopPropagation(),g(d.ownMenuId),v(d.parentTriggerId);return}if(C.hasSubmenu&&Sf(C.menuId,$)&&r.key===j){r.preventDefault(),r.stopPropagation(),g(C.menuId),p(S);return}if(d&&r.key===j){r.preventDefault(),r.stopPropagation(),g(d.ownMenuId),v(d.parentTriggerId);return}if(C.hasSubmenu&&(r.key===A||r.key==="Enter")){r.preventDefault(),r.stopPropagation(),m(S),b(C.menuId);return}const M=h[r.key];M&&(r.preventDefault(),r.stopPropagation(),M(S))}function Mf(r,e){if(typeof document>"u")return;Pe(r,e)?.hidePopover?.()}function Lf(r,e){if(typeof document>"u")return;Pe(r,e)?.showPopover?.()}function Bf(r){r.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover?.()}catch{}})}function Of(r,e){typeof document>"u"||requestAnimationFrame(()=>{Pe(r,e)?.querySelector("[arc-menu]")?.focus()})}function Df(r,e){if(typeof document>"u")return;Pe(r,e)?.focus()}function Nf({menuListRef:r,passiveMode:e}){const a=(0,u.useRef)(null),t=(0,u.useRef)(null),o=(0,u.useRef)(null),n=(0,u.useCallback)(()=>{t.current!=null&&(clearTimeout(t.current),t.current=null)},[]),c=(0,u.useCallback)(()=>{o.current!=null&&(clearTimeout(o.current),o.current=null)},[]),l=(0,u.useCallback)(()=>{const b=r.current;b&&Bf(b)},[r]),d=(0,u.useCallback)(b=>{Mf(b,r.current),a.current===b&&(a.current=null)},[r]),h=(0,u.useCallback)(b=>{typeof document>"u"||(a.current&&a.current!==b&&d(a.current),Lf(b,r.current),a.current=b)},[d,r]),g=(0,u.useCallback)(b=>{if(!qi(e))return;c(),n();const $=zf(e);if($<=0){h(b);return}t.current=setTimeout(()=>{t.current=null,h(b)},$)},[e,n,c,h]),v=(0,u.useCallback)(b=>{if(!qi(e))return;n(),c();const $=Ef(e);if($<=0){d(b);return}o.current=setTimeout(()=>{o.current=null,d(b)},$)},[e,n,c,d]),p=(0,u.useCallback)(b=>{n(),c(),h(b),Of(b,r.current)},[n,c,h,r]),m=(0,u.useCallback)(b=>{Df(b,r.current)},[r]);return{activeSubmenuIdRef:a,cancelPendingSubmenuOpen:n,cancelPendingSubmenuClose:c,closeOpenDescendantPopovers:l,hideSubmenu:d,runShowSubmenu:h,showSubmenuFromPointer:g,requestSubmenuCloseFromPointer:v,openSubmenuForKeyboard:p,focusTriggerById:m}}const Ff=s`--arc•menu`,ka=s`${Ff}•item`,Hf=s`
@layer arc-components {

  [arc-menu] {
    ${ka}•gap: var(${_}•8);
    ${ka}•fg: inherit;
    ${ka}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${f}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${_}•2));
    padding: var(--arc-menu-padding, var(${_}•4));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  /* Submenus sit under the same <li> as the row button, so the parent row stays :hover while
     pointing at submenu items. Reset the item bg token on submenu lists so inherited hover from
     the parent <li> does not paint every submenu row; each submenu row only picks up hover from its own <li>. */
  [arc-menu-item] > [arc-popover] [arc-menu] {
    ${ka}•bg: transparent;
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${ka}•gap));

    background: var(--arc-menu-item-background, var(${ka}•bg));
    color: var(--arc-menu-item-color, var(${ka}•fg));
    padding: var(--arc-menu-item-padding, 0);
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])) {
      &:is(:hover, :has(> [arc-button=custom]:not([is-disabled]):focus-visible)) {
        ${ka}•bg: var(--arc-color-bg-hover-default);
      }
    }

    /* Inter-Component Communication • ArcButton -------------------• */

    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-transition: none;
      --arc-button-position: var(--arc-menu-item-position, relative);
      --arc-button-gap: var(--arc-menu-item-gap, var(${ka}•gap));
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);
      --arc-button-overflow: var(--arc-menu-item-overflow, clip);
      --arc-button-outline-offset: var(--arc-menu-item-outline-offset, var(${f}•2m));

      [arc-button-content] {
        display: contents;
      }
    }
  }

  [arc-menu-item=divider] {
    margin: 0 var(${_}•4m);

    hr {
      flex: 1;
      border: none;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      height: 0;
      margin: 0;
    }
  }

`,Vf=({items:r,filterText:e,renderItem:a,isVisible:t,keepMenuOpen:o,renderSubmenu:n,passiveMode:c,submenuBackNavigation:l,...d})=>{const h=c??Gi,g=(0,u.useId)(),v=(0,u.useRef)(null),{activeSubmenuIdRef:p,cancelPendingSubmenuOpen:m,cancelPendingSubmenuClose:b,closeOpenDescendantPopovers:$,hideSubmenu:w,showSubmenuFromPointer:S,requestSubmenuCloseFromPointer:x,openSubmenuForKeyboard:C,focusTriggerById:I}=Nf({menuListRef:v,passiveMode:h}),A=(0,u.useRef)(!1),[j,M]=(0,u.useState)(!1),[H,z]=(0,u.useState)(-1);(0,u.useLayoutEffect)(()=>{const F=v.current;if(F&&typeof getComputedStyle<"u"){const X=getComputedStyle(F).direction==="rtl";A.current=X,M(X)}},[t,r]);const k=(0,u.useMemo)(()=>e?r.filter(F=>Object.values(F).some(X=>X===e)):r,[r,e]),N=(0,u.useRef)(k);N.current=k;const U=(0,u.useCallback)(F=>{if(F<0){z(-1);return}z(F);const X=v.current;if(!X)return;const P=Zi(k[F],F,g);Yd(X,F,P)},[k,g]),Z=(0,u.useMemo)(()=>Rf(k,g,U),[k,g,U]),K=F=>Pf(F,{isVisible:!!t,menuListRef:v,activeItemIndex:H,filteredItems:k,menuDomId:g,isMenuRtlRef:A,submenuBackNavigation:l,listNavByKey:Z,hideSubmenu:w,focusTriggerById:I,focusRowAtItemIndex:U,setActiveItemIndex:z,openSubmenuForKeyboard:C}),q=(0,u.useMemo)(()=>k.map((F,X)=>{const P=Yi(F,X),{itemId:T,role:O,keepMenuOpen:V,items:ar,renderSubmenu:rr,submenuProps:or,...mr}=F,L=Xn(F,X,g),{hasSubmenu:G}=L,fr=G?L.menuId:"",br=G?{menu:L.menuId,trigger:L.triggerId}:void 0,Sr=Co(F)||"",Dr=O||Tf(F)||"menuitem",Fr=X===H,W=Zi(F,X,g,L),zr={filterText:e,isCurrent:Fr,menuControlId:W,itemId:P,role:O,keepMenuOpen:V??o,isRtl:j,...G?{hasSubmenu:!0,ids:br}:{hasSubmenu:!1}},vr=a?.(mr,X,zr);return G?(0,i.jsxs)("li",{"arc-menu-item":Sr,role:"presentation",onFocusCapture:()=>z(X),onMouseEnter:()=>{S(fr)},onMouseLeave:qi(h)?()=>x(fr):void 0,onClick:Tr=>Gd(Tr,F,Sr,V??o),children:[vr,n?.({ids:br,items:ar??[],item:F,filterText:e,passiveMode:h,isRtl:j})]},P):(0,i.jsx)("li",{"arc-menu-item":Sr,role:Dr,onFocusCapture:()=>z(X),onClick:Tr=>Gd(Tr,F,Sr,V??o),children:vr},P)}),[H,e,k,o,a,g,j,h,n,S,x]);return(0,u.useEffect)(()=>{if(!t){m(),b(),$(),p.current=null,z(-1);return}const F=N.current,X=Jn(F,g);if(X.length>0){const P=X[0],T=v.current;if(z(P),T){const O=Zi(F[P],P,g);Yd(T,P,O)}}},[t,g,m,b,$,p]),(0,u.useEffect)(()=>()=>{m(),b(),$(),p.current=null},[m,b,$,p]),(0,i.jsx)("ul",{...d,ref:v,"arc-menu":"",role:"menu",onKeyDown:K,onMouseLeave:()=>z(-1),tabIndex:t?0:-1,children:q})};lr("ArcMenu",Hf);const Xd=["items","renderItem","renderSubmenu","keepMenuOpen","onToggle","id","menuProps","passiveMode","submenuBackNavigation","offset","ref"],Jd=r=>{const{startSlot:e,endSlot:a,onClick:t,href:o,target:n,containerProps:c,isDisabled:l,"aria-disabled":d,tooltip:h,id:g,popoverTarget:v,popoverTargetAction:p,"aria-haspopup":m,"aria-controls":b,"aria-expanded":$,...w}=r,S=Co(w),x=(0,u.useMemo)(()=>qd(S),[S]),C=d??l,I=S==="divider",A=!!(o||t||v),j=!I,M=j&&e?"":void 0,H=j&&a?"":void 0,z=(0,u.useMemo)(()=>({...c,onClick:t,tooltip:h,href:o,target:n,id:g,popoverTarget:v,popoverTargetAction:p,"aria-haspopup":m,"aria-controls":b,"aria-expanded":$}),[c,t,h,o,n,g,v,p,m,b,$]),k=(0,u.useMemo)(()=>({...c}),[c]);return A?(0,i.jsxs)(Er,{...z,role:v?"menuitem":z.role,"aria-disabled":C?"true":void 0,isDisabled:!!C,_isCustom:!0,"arc-dropdown-item":S??"","has-start-slot":M,"has-end-slot":H,children:[j&&e,(0,i.jsx)(x,{...w,"is-item-content":"interactive"}),j&&a]}):(0,i.jsxs)("div",{...k,"arc-dropdown-item":S??"","has-start-slot":M,"has-end-slot":H,children:[j&&e,(0,i.jsx)(x,{...w,"is-item-content":"inert"}),j&&a]})},Uf=s`--arc•dropdown`,Kf=s`${Uf}•menu`,ne=s`${Kf}•item`,Wf=s`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${ne}•padding: var(${_}•8) var(${_}•12);
    ${ne}•min•height: var(${f}•36);
    ${ne}•gap: var(${_}•8);

    &[arc-dropdown-item=text-detail] {
      ${ne}•min•height: var(${f}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${ne}•min•height: var(${f}•32);
    }

    &[arc-dropdown-item=user] {
      ${ne}•min•height: var(${f}•40);

      &:not([has-start-slot]) {
        ${ne}•padding: var(${_}•8) var(${_}•12) var(${_}•8) var(${_}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${ne}•min•height: var(${f}•48);

      &:not([has-start-slot]) {
        ${ne}•padding: var(${_}•8) var(${_}•12) var(${_}•8) var(${_}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${ne}•min•height: var(${f}•8);
      ${ne}•padding: 0;
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-font-size: initial;
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0em);
    --arc-popover-outline-size: 0em;
    --arc-popover-overflow: var(--arc-dropdown-overflow, auto);

    --arc-menu-item-gap: var(${ne}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-submenu] {
    &:where([anchor-at="left-start"], [anchor-at="right-start"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${_}•4m));
    }

    &:where([anchor-at="left-end"], [anchor-at="right-end"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${_}•4));
    }
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${ne}•gap);
    text-align: start;
    min-height: var(${ne}•min•height);

    &:not([arc-button]) {
      padding: var(${ne}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${ne}•padding);
      --arc-button-min-height: var(${f}•40);
    }

    [is-item-content] {
      flex: 1;
    }

    [arc-dropdown-submenu-icon] {
      --arc-icon-color: var(--arc-dropdown-submenu-icon-color, var(--arc-color-fg-secondary));
    }
  }

}
`,Ao={OFFSET:void 0,ANCHOR_AT_LTR:"left-start",ANCHOR_AT_RTL:"right-start",ICON_LTR:"fa-regular fa-angle-right",ICON_RTL:"fa-regular fa-angle-left"},Gf=(r,e)=>({anchorAt:r?Ao.ANCHOR_AT_LTR:Ao.ANCHOR_AT_RTL,offset:e??Ao.OFFSET}),Qd=(0,u.forwardRef)((r,e)=>(0,i.jsx)(to,{...r,ref:e,"arc-dropdown-menu-button":""})),qf=r=>{const e={...r};return Xd.forEach(a=>{Reflect.deleteProperty(e,a)}),e},Yf=r=>r?Ao.ICON_RTL:Ao.ICON_LTR,Zf=(r,e)=>r===void 0?Yf(e):typeof r=="function"?r(e):r,Qn=r=>{const{items:e,renderItem:a,keepMenuOpen:t,menuProps:o,passiveMode:n,submenuBackNavigation:c,renderSubmenu:l,submenuIcon:d,submenuOffset:h,ref:g,...v}=r,[p,m]=(0,u.useState)(!1),b=(0,u.useRef)(r);b.current=r;const $=(0,u.useRef)(null),w=(0,u.useCallback)(A=>{if(typeof document>"u")return;Pe(A,$.current)?.hidePopover?.()},[]),S=(0,u.useCallback)(A=>{$.current=A,je(g,A)},[g]),x=(0,u.useCallback)(A=>{const j=b.current,M=qf(j),H=Cf(A.item)??j.renderItem,{ids:z}=A,k=j.keepMenuOpen;if(A.item.renderSubmenu)return A.item.renderSubmenu({items:A.items,renderItem:H,keepMenuOpen:k,filterText:A.filterText,passiveMode:A.passiveMode,ids:z,closeSubmenu:()=>{w(z.menu)},inheritedFromParent:M});const{menuProps:N,popoverPassthrough:U}=kf(A.item);return(0,i.jsx)(Qn,{...M,...Gf(A.isRtl,j.submenuOffset),...U,id:z.menu,"arc-dropdown-submenu":"",submenuBackNavigation:wf(z),alternateAnchorId:z.trigger,hidePopoverButton:!0,passiveMode:A.passiveMode,items:A.items,renderItem:H,keepMenuOpen:k,menuProps:N})},[w]),C=(0,u.useCallback)((...A)=>{const[j,,M]=A;if(a)return a(...A);const{ids:H,isRtl:z,menuControlId:k}=M,{endSlot:N,...U}=j,Z=!!H,K=Zf(b.current.submenuIcon,!!z),q=N||Z?(0,i.jsxs)(i.Fragment,{children:[N,Z?(0,i.jsx)(ir,{"arc-dropdown-submenu-icon":"",icon:K}):null]}):void 0;return(0,i.jsx)(Jd,{...U,id:k,endSlot:q,...H?{popoverTarget:H.menu,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":H.menu}:{}})},[a]),I=A=>{m(A.newState==="open"),r?.onToggle?.(A)};return(0,i.jsx)(ma,{...v,ref:S,"arc-dropdown":"",variant:"common",onToggle:I,children:(0,i.jsx)(Vf,{...o,"arc-dropdown-menu":"",passiveMode:n,submenuBackNavigation:c,items:e??[],renderItem:C,isVisible:p,keepMenuOpen:t,renderSubmenu:x})})};Qd.displayName="ArcDropdownButton",Qn.Button=Qd,Qn.Item=Jd,lr("ArcDropdownMenu",Wf);const ru=({size:r="md",layout:e="icon",variant:a="common",hierarchy:t="tertiary",...o})=>(0,i.jsx)(Er,{...o,"arc-input-action":"",size:r,layout:e,variant:a,hierarchy:t}),rc=s`--arc•link`,na=s`${rc}•fg`,So=s`${na}•hover`,zo=s`${na}•disabled`,Xi=s`${rc}•outline`,eu=s`${Xi}•size`,Ji=s`${Xi}•offset`,Xf=s`${rc}•cursor`,Eo=s`${rc}•focus•color`,Jf=s`
@layer arc-components {
${Q0}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${na}: currentcolor;
    ${So}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${zo}: color-mix(in srgb, currentcolor, transparent 70%);

    ${Eo}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${na}: var(--arc-color-fg-primary);
    ${So}: var(--arc-color-fg-secondary);
    ${zo}: var(--arc-color-fg-disabled);
    ${Eo}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${na}: var(--arc-color-fg-secondary);
    ${So}: var(--arc-color-fg-primary);
    ${zo}: var(--arc-color-fg-disabled);
    ${Eo}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${na}: var(--arc-color-fg-on-mono-inverse);
    ${So}: var(--arc-link-fg-hover-inverse);
    ${zo}: var(--arc-link-fg-disabled-inverse);
    ${Eo}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${eu}: 0.125em; /* 2px */
    ${Ji}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${na}: var(--arc-link-color-hover, var(${So}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${Xi}: var(${eu}) solid var(--arc-link-color-focus, var(${Eo}));
    ${Ji}: var(${Ji});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${na}: var(--arc-link-color-disabled, var(${zo}));
    ${Xf}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${na}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${na}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Qf=tr(jr,["inherit","primary","secondary","inverse"]),rm=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="a",href:n,icon:c,text:l,overflow:d,iconSize:h,gapSize:g,isFlipped:v,isDisabled:p,...m})=>(0,i.jsx)(o,{...m,href:p?void 0:n,"arc-link":"","data-variant":t,"aria-disabled":p,"data-is-disabled":p?"":void 0,children:r||(0,i.jsx)(ae,{icon:c,text:l,overflow:d,iconSize:h,gapSize:g,size:a,layout:e,isFlipped:v})});lr("ArcLink",Jf);const em=[...ha],am=tr(jr,["common"]),tm=tr(jr,["common","critical"]),om=tr(jr,["common","brand","info","success","warning","error","processing"]),nm=["auto","dark","light","none"],cm=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],im=tr(ie,["xl","lg","md","sm","custom","fullscreen"]),sm=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Qi=r=>r?.matches(":modal"),rs=(r,e)=>e.target===r,lm=(r,e)=>e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom,Io=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onCloseOverride:t=void 0})=>(o,n)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){n?.(c);return}if(t){t(o,c,r.current),n?.(c);return}if(e&&o!=="confirm:discard"){a?.(!0);return}r.current?.close(o),a?.(!1),n?.(c)},es=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onClose:t,onToggle:o})=>{(0,u.useEffect)(()=>{const n=r.current;if(!n)return;const c=d=>{Qi(n)&&rs(n,d)&&(e?(d.preventDefault(),d.stopPropagation(),a?.(!0)):t?.("outside",d))},l=d=>{rs(n,d)&&(a?.(!1),t?.(n.returnValue,d),o?.(!1,d))};return n.addEventListener("close",l),n.addEventListener("cancel",c),()=>{n.removeEventListener("close",l),n.removeEventListener("cancel",c)}},[r,e,a,t,o])},as=({modalRef:r,isOpen:e,isTopLayer:a})=>{(0,u.useEffect)(()=>{const t=r.current;t&&(e&&!t.open&&(a?t.showModal():t.show()),!e&&t.open&&t.close())},[e,a])},ts=({modalRef:r,isOpen:e,autoFocusId:a})=>{(0,u.useEffect)(()=>{const t=r.current;if(!t||!a||!e)return;const o=t.querySelector(`#${a}`);if(!o||!(o instanceof HTMLElement))return;const n=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(n)},[r,a,e])},au=(r,e)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(e)||r.target instanceof Node&&e.contains(r.target),tu=({modalRef:r,isOpen:e=!1,closeOnBackdrop:a=!1,attemptCloseModal:t})=>{(0,u.useEffect)(()=>{const o=r.current;if(!o||!e||!a||!Qi(o))return;let n=!1;const c=d=>{n=au(d,o)},l=d=>{if(n||au(d,o))return;const h=o.getBoundingClientRect();lm(h,d)&&t("outside")(d)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,t,e,a])},ou=({modalRef:r,isOpen:e=!1,closeOnEsc:a=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,u.useEffect)(()=>{const n=r.current;if(!n||!e||!a||!Qi(n))return;const c=l=>{if(l.key==="Escape"&&rs(n,l)){if(t==="none"){l.stopPropagation(),l.preventDefault();return}o("escape")(l)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,o,e,a,t])},os=r=>(0,i.jsx)(Er,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),dm=r=>(0,i.jsx)(Er,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),ec=(0,u.forwardRef)(({inert:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-modal-content":"",inert:r}));ec.displayName="ModalContent";const nu=({showDivider:r,...e})=>(0,i.jsx)("header",{...e,"arc-modal-header":"","has-divider":r?"":void 0}),um=({glyph:r,variant:e="common"})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(ir,{icon:r,"arc-modal-glyph":"","arc-icon-status":e})}),ns=r=>{const{titleContent:e,TitleElement:a="h2",...t}=r;return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(a,{...t,"arc-modal-title":"",children:typeof e=="string"?e:(0,i.jsx)(ae,{...e})})})},hm=({message:r,...e})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("p",{...e,"arc-modal-message":"",children:r})}),cs=({tag:r="section",padding:e,...a})=>(0,i.jsx)(r,{...a,"arc-modal-body":"","data-padding":e==="auto"?void 0:e}),is=({showDivider:r,...e})=>(0,i.jsx)("footer",{...e,"arc-modal-footer":"","has-divider":r?"":void 0}),gm=r=>e=>{if(e.key==="Escape"){if(r==="none"){e.stopPropagation(),e.preventDefault();return}return"escape"}},er=s`--arc•modal`,_o=s`${er}•layout`,pm=s`${er}•header`,ac=s`${er}•body`,To=s`${er}•footer`,cu=s`${er}•fg`,tc=s`${er}•bg`,ca=s`${er}•backdrop`,Ma=s`${er}•scale`,_t=s`${pm}•padding`,Ar=s`${ac}•padding`,La=s`${To}•padding`,vm=s`
  ${er}•font•size: var(${f}•14);
  ${er}•gap: var(${_}•16);

  ${_o}•rows: auto 1fr auto;
  ${_o}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${_o}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${_o}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${_o}•rows: auto;
  }

  ${cu}: var(--arc-color-fg-primary);
  ${tc}: var(--arc-color-bg-primary);
  ${er}•border: none;
  ${er}•border•radius: var(--arc-border-radius-lg);
  ${er}•divider: var(${f}•1) solid var(--arc-color-border-mid);

  ${er}•max•width: calc(100vw - var(${_}•32));
  ${er}•min•width: unset;
  ${er}•width: auto;

  ${er}•max•height: calc(100vh - var(${_}•32));
  ${er}•min•height: unset;
  ${er}•height: max-content;

  ${Ma}: 1;
  ${Ma}•start: 0.95;

  ${ac}•text•align: unset;
  ${To}•justify•content: flex-end;

  ${ca}•bg: var(--arc-color-overlay-stark);
  ${ca}•pointer•events: none;
  ${ca}•cursor: default;

  &:where([is-backdrop=light]) {
    ${ca}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${ca}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${ca}•bg: transparent;
  }
`,fm=s`
  &[data-size=sm] {
    ${er}•width: 28em;
  }

  &[data-size=md] {
    ${er}•width: 40em;
  }

  &[data-size=lg] {
    ${er}•width: 50em;
  }

  &[data-size=xl] {
    ${er}•width: 64em;
  }

  &[data-size=custom] {
    ${er}•width: auto;
    ${er}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${er}•width: 100vw;
    ${er}•height: 100vh;
    ${er}•min•width: 100vw;
    ${er}•min•height: 100vh;
    ${er}•max•width: 100vw;
    ${er}•max•height: 100vh;
    ${er}•border•radius: var(--arc-border-radius-none);

    ${Ma}: 1;
    ${Ma}•start: 1.125;
  }
`,mm=s`
  &[is-confirm] {
    ${To}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${ac}•text•align: center;
    ${To}•justify•content: center;

    ${Ar}•block•start: var(${_}•40);
    ${Ar}•block•end: var(${_}•20);

    ${La}•block•start: var(${_}•12);
    ${La}•block•end: var(${_}•40);

    ${er}•glyph•size: var(${f}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${er}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${er}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${_}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,bm=s`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${Ar}•block•start: var(${_}•10);
    }

    &:has([arc-modal-footer]) {
      ${Ar}•block•end: var(${_}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${_t}•block•end: var(${_}•20);
      ${Ar}•block•start: var(${_}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${Ar}•block•end: var(${_}•20);
      ${La}•block•start: var(${_}•12);
      ${La}•block•end: var(${_}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${Ar}•inline•start: 0;
      ${Ar}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${Ar}•block•start: 0;
      ${Ar}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${Ar}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${Ar}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${Ar}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${Ar}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${Ar}•block•start: var(${_}•20);
      ${Ar}•inline•end: var(${_}•24);
      ${Ar}•block•end: var(${_}•20);
      ${Ar}•inline•start: var(${_}•24);
    }

    &:has([arc-modal-go-back]) {
      ${_t}•inline•start: var(${_}•20);
    }

    ${_t}:
      var(${_}•20)
      var(${_}•24)
      var(${_t}•block•end, var(${_}•10))
      var(${_t}•inline•start, var(${_}•24));

    ${Ar}:
      var(${Ar}•block•start, var(${_}•20))
      var(${Ar}•inline•end, var(${_}•24))
      var(${Ar}•block•end, var(${_}•20))
      var(${Ar}•inline•start, var(${_}•24));

    ${La}:
      var(${La}•block•start, var(${_}•10))
      var(${_}•24)
      var(${La}•block•end, var(${_}•20))
      var(${_}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${Ar}: 0;
    }
  }
`,$m=s`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,ym=s`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${Ma}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${Ma}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,ss=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${vm}
    ${fm}
    ${mm}
    ${bm}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${Ma}: 1;
      ${Ma}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${cu}));
    background: var(--arc-modal-background, var(${tc}));
    border: var(--arc-modal-border, var(${er}•border));
    border-radius: var(--arc-modal-border-radius, var(${er}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${er}•width));
    height: var(--arc-modal-height, var(${er}•height));
    min-width: var(--arc-modal-min-width, var(${er}•min•width));
    min-height: var(--arc-modal-min-height, var(${er}•min•height));
    max-width: var(--arc-modal-max-width, var(${er}•max•width));
    max-height: var(--arc-modal-max-height, var(${er}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${ca}•bg));
      pointer-events: var(${ca}•pointer•events, none);
      cursor: var(${ca}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${er}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${er}•gap));

      padding: var(${_t});
      background: var(--arc-modal-header-background, var(${tc}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${er}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${_}•4m) var(${_}•8m) var(${_}•4m) var(${_}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${_}•4m) 0 var(${_}•4m) var(${_}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${_}•8);

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${_}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${Ar});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${ac}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${To}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${er}•gap));

      background: var(--arc-modal-footer-background, var(${tc}));
      padding: var(--arc-modal-footer-padding, var(${La}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${er}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${_}•16) var(${_}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${ca}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${_}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${$m}
  ${ym}
`,Ba={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},iu=({children:r,headerProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,u.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=Ba.isTopLayer,isInverse:h=Ba.isInverse,scheme:g=Ba.scheme,backdropColor:v=Ba.backdropColor,variant:p=Ba.variant,message:m=Ba.message,onCloseOverride:b=Ba.onCloseOverride,onConfirmDiscard:$,onConfirmCancel:w,contentRef:S,...x}=o,{slotStart:C,TitleElement:I,titleContent:A,slotEnd:j,...M}=e||{},{primaryButton:H,secondaryButton:z,...k}=t||{},N=!!(A||C||j),U=g==="auto"?void 0:g,Z=!!b,K=P=>Z?b?.("confirm:discard",P,n.current??void 0):$?.("confirm:discard",P),q=P=>Z?b?.("confirm:cancel",P,n.current??void 0):w?.("confirm:cancel",P);es({modalRef:n,onClose:b}),as({modalRef:n,isOpen:c,isTopLayer:d}),ts({modalRef:n,isOpen:c,autoFocusId:l});const F=P=>{q(P),z?.onClick?.(P)},X=P=>{K(P),H?.onClick?.(P)};return(0,i.jsx)("dialog",{...x,ref:n,"arc-modal":"","arc-scheme":h?"inverse":U,"is-confirm":p||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:"none",onKeyDown:gm("none"),children:(0,i.jsxs)(ec,{ref:S,children:[N&&(0,i.jsxs)(nu,{...M,children:[C&&(0,i.jsx)("div",{"header-slot":"start",children:C}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(ns,{TitleElement:I,titleContent:A})}),j&&(0,i.jsx)("div",{"header-slot":"end",children:j})]}),(0,i.jsx)(cs,{...a,children:r||m&&(0,i.jsx)("p",{style:{margin:0},children:m})}),(0,i.jsx)(is,{...k,children:(0,i.jsxs)(Ln,{children:[(0,i.jsx)(Er,{...z,text:z?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:F}),(0,i.jsx)(Er,{...H,text:H?.text||"Discard",variant:p??"common",hierarchy:"primary",isInverse:h,onClick:X})]})})]})})};lr("ArcModalConfirm",ss);const ge={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},xm=({children:r,confirmProps:e,headerProps:a,bodyProps:t,dismissProps:o,footerProps:n,...c})=>{const l=(0,u.useRef)(null),[d,h]=(0,u.useState)(!1),{isOpen:g,autoFocusId:v,isTopLayer:p=ge.isTopLayer,isInverse:m=ge.isInverse,scheme:b=ge.scheme,backdropColor:$=ge.backdropColor,hasConfirmFlow:w=ge.hasConfirmFlow,hasUnsavedChanges:S=ge.hasUnsavedChanges,onCloseOverride:x=ge.onCloseOverride,bypassConfirmWhen:C=ge.bypassConfirmWhen??{},size:I=ge.size,closeOnBackdrop:A=ge.closeOnBackdrop,closeOnEsc:j=ge.closeOnEsc,showDismiss:M=ge.showDismiss,onActionError:H,onClose:z,onToggle:k,width:N,height:U,style:Z,contentRef:K,...q}=c,{showGoBack:F,goBackProps:X,slotStart:P,TitleElement:T,titleContent:O,slotEnd:V,showDivider:ar=ge.headerProps?.showDivider,...rr}=a??{},{slotStart:or,primaryButton:mr,secondaryButton:L,tertiaryButton:G,showDivider:fr=ge.footerProps?.showDivider,...br}=n??{},Sr=!!(F||O||P||V),Dr=!!(mr||L||G),Fr=!!(Dr||or),W=!!(w&&S),zr=j?"closerequest":"none",vr=b==="auto"?void 0:b,{didPressEscapeKey:Tr,didClickBackdrop:$e,didClickGoBackButton:Ie,didClickDismissButton:_e,didClickPrimaryButton:ra,didClickSecondaryButton:da,didClickTertiaryButton:Mt}=C,ua=Io({modalRef:l,shouldConfirm:W,setIsConfirming:h,onCloseOverride:x});es({modalRef:l,shouldConfirm:W,setIsConfirming:h,onClose:z,onToggle:k}),as({modalRef:l,isOpen:g,isTopLayer:p}),ts({modalRef:l,isOpen:g,autoFocusId:v}),tu({modalRef:l,isOpen:g,closeOnBackdrop:A,attemptCloseModal:$e?Io({modalRef:l,shouldConfirm:W&&!$e,setIsConfirming:h}):ua}),ou({modalRef:l,isOpen:g,closeOnEsc:j,closedBy:zr,attemptCloseModal:Tr?Io({modalRef:l,shouldConfirm:W&&!Tr,setIsConfirming:h}):ua});const nr=()=>h(!1),Lr=(Te,Sa)=>ua(Te)(Sa),ce=(Te,Sa,Oa)=>async za=>{za?.preventDefault?.(),za?.stopPropagation?.();const vs=()=>Sa?Io({modalRef:l,shouldConfirm:W&&!Sa,setIsConfirming:h})(Te,Oa?.onCloseCallback)(za):ua(Te,Oa?.onCloseCallback)(za);try{await Oa?.onClick?.(za),vs()}catch(fs){H?.(fs,{reason:Te,event:za})}};return(0,i.jsxs)("dialog",{...q,ref:l,"arc-modal":"","arc-scheme":m?"inverse":vr,"is-inverse":m?"":void 0,"is-top-layer":p?"":void 0,"is-backdrop":$==="auto"?void 0:$,"data-size":I,closedby:zr,style:{"--arc-modal-width":N??"","--arc-modal-height":U??"",...Z},children:[!Sr&&M&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(os,{...o,isInverse:m,onClick:ce("button:dismiss",_e,o)})}),(0,i.jsxs)(ec,{ref:K,inert:d?"":void 0,children:[Sr&&(0,i.jsxs)(nu,{...rr,showDivider:ar,children:[F&&(0,i.jsx)("div",{"header-slot":"go-back",children:(0,i.jsx)(dm,{...X,isInverse:m,onClick:ce("button:back",Ie,X)})}),P&&(0,i.jsx)("div",{"header-slot":"start",children:P}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(ns,{TitleElement:T,titleContent:O})}),V&&(0,i.jsx)("div",{"header-slot":"end",children:V}),M&&(0,i.jsx)("div",{"header-slot":"dismiss",children:(0,i.jsx)(os,{...o,isInverse:m,onClick:ce("button:dismiss",_e,o)})})]}),(0,i.jsx)(cs,{...t,children:r}),Fr&&(0,i.jsxs)(is,{...br,showDivider:fr,children:[or&&(0,i.jsx)("div",{"footer-slot":"content",children:or}),Dr&&(0,i.jsxs)(Ln,{children:[G&&(0,i.jsx)(Er,{...G,text:G?.text||"Button",isInverse:m,variant:"common",hierarchy:"tertiary",onClick:ce("button:tertiary",Mt,G)}),L&&(0,i.jsx)(Er,{...L,text:L?.text||"Cancel",isInverse:m,variant:"common",hierarchy:"secondary",onClick:ce("button:secondary",da,L)}),mr&&(0,i.jsx)(Er,{...mr,text:mr?.text||"Action",isInverse:m,variant:"common",hierarchy:"primary",onClick:ce("button:primary",ra,mr)})]})]})]}),w&&(0,i.jsx)(iu,{isOpen:d,isInverse:m,isTopLayer:p,backdropColor:$,...e,onConfirmDiscard:Lr,onConfirmCancel:nr})]})};lr("ArcModal",ss);const wa={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},km={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,i.jsx)(Kc,{"arc-modal-spinner":""})},wm=({children:r,dismissProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,u.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=wa.isTopLayer,isInverse:h=wa.isInverse,scheme:g=wa.scheme,backdropColor:v=wa.backdropColor,closeOnBackdrop:p=wa.closeOnBackdrop,closeOnEsc:m=wa.closeOnEsc,variant:b=wa.variant,icon:$,TitleElement:w,titleContent:S,message:x,showDismiss:C,onCloseOverride:I=wa.onCloseOverride,onClose:A,onToggle:j,contentRef:M,...H}=o,{primaryButton:z,...k}=t??{},N=$||km[b],U=m?"closerequest":"none",Z=g==="auto"?void 0:g,K=Io({modalRef:n,onCloseOverride:I});return es({modalRef:n,onClose:A,onToggle:j}),as({modalRef:n,isOpen:c,isTopLayer:d}),ts({modalRef:n,isOpen:c,autoFocusId:l}),tu({modalRef:n,isOpen:c,closeOnBackdrop:p,attemptCloseModal:K}),ou({modalRef:n,isOpen:c,closeOnEsc:m,closedBy:U,attemptCloseModal:K}),(0,i.jsxs)("dialog",{...H,ref:n,"arc-modal":"","arc-scheme":h?"inverse":Z,"is-alert":b||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:U,children:[C&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(os,{...e,isInverse:h,onClick:K("button:dismiss",e?.onClick)})}),(0,i.jsxs)(ec,{ref:M,children:[(0,i.jsx)(cs,{...a,children:r||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(um,{glyph:N,variant:b}),(0,i.jsx)(ns,{TitleElement:w,titleContent:S}),(0,i.jsx)(hm,{message:x})]})}),(0,i.jsx)(is,{...k,children:(0,i.jsx)(Ln,{orientation:"vertical",children:(0,i.jsx)(Er,{...z,text:z?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:K("button:primary",z?.onClick)})})})]})]})};lr("ArcModalAlert",ss);const Wr=s`--arc•radio`,Cm=s`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${Wr}•font•size: 1em;
      ${Wr}•icon•size: 0.625em;
      ${Wr}•size: 1.125em;
      ${Wr}•gap: 0.5em;
    }

    &[data-size=md] {
      ${Wr}•font•size: var(${f}•14);
      ${Wr}•icon•size: var(${f}•10);
      ${Wr}•size: var(${f}•18);
      ${Wr}•gap: var(${f}•8);
    }

    &[data-size=sm] {
      ${Wr}•font•size: var(${f}•12);
      ${Wr}•icon•size: var(${f}•10);
      ${Wr}•size: var(${f}•16);
      ${Wr}•gap: var(${f}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${B}•border•radius: var(--arc-border-radius-circle);
    ${B}•size: var(${Wr}•size);
    ${B}•icon•size: var(${Wr}•icon•size);
    ${B}•width: var(${Wr}•size);
    ${B}•height: var(${Wr}•size);
    ${B}•translate: 0 var(${f}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${Wr}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${Wr}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${B}•color: transparent;
      ${B}•background: transparent;
      ${B}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${B}•background: var(--arc-color-bg-theme-subtle);
        ${B}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${B}•background: var(--arc-color-bg-disabled);
        ${B}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${B}•color: var(--arc-color-fg-on-theme-heavy);
      ${B}•background: var(--arc-color-bg-theme-heavy);
      ${B}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${B}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${B}•color: var(--arc-color-fg-on-theme-mid);
        ${B}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,Am=tr(Ue,["hug","fill"]),Sm=tr(ie,["inherit","md","sm"]),su=({children:r,label:e,layout:a,size:t="md",useMask:o=!0,...n})=>{const{className:c,title:l,...d}=n,h={className:c,title:l},g=r??e,v=(0,i.jsx)(ho,{...d,type:"radio"}),p=o&&(0,i.jsxs)(In,{type:"radio",children:[v,(0,i.jsx)(ir,{icon:"fa-solid fa-circle-small arc-fw"})]}),m=!!g&&(0,i.jsxs)(Xa,{layout:a,children:[p||v,(0,i.jsx)(Ja,{children:g})]});return(0,i.jsx)("span",{...h,"arc-radio":"","data-size":t,children:m||p||v})};lr("ArcRadio",Cm);const me=s`--arc•rb`,ur=s`${me}•o`,zm=s`
@layer arc-components {

  [arc-radio-bar] {
    ${me}•font•size: var(${f}•14);
    ${me}•border•radius: var(${f}•8);
    ${me}•background: var(--arc-color-bg-secondary);
    ${me}•padding: var(${f}•4);
    ${me}•gap: var(${f}•2);

    ${ur}•color: var(--arc-color-fg-secondary);
    ${ur}•background: var(--arc-color-alpha-black-0);
    ${ur}•border•color: var(--arc-color-alpha-black-0);
    ${ur}•border•width: var(${f}•1);
    ${ur}•border•radius: var(${f}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${ur}•size: var(${f}•32);
      ${ur}•line•height: var(${f}•30); /* • -2px to account for border-width (top/bottom) */
      ${ur}•icon•padding: var(${f}•8);
      ${ur}•text•padding: var(${f}•12);
    }

    &[data-size=md] {
      ${ur}•size: var(${f}•24);
      ${ur}•line•height: var(${f}•22); /* • -2px to account for border-width (top/bottom) */
      ${ur}•icon•padding: var(${f}•6);
      ${ur}•text•padding: var(${f}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${me}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${me}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${ur}•color: var(--arc-color-fg-on-hover-default);
        ${ur}•background: var(--arc-color-bg-hover-default);
        ${ur}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${ur}•color: var(--arc-color-mono-black);
      ${ur}•background: var(--arc-color-mono-white);
      ${ur}•border•color: var(--arc-color-border-stark);
      ${ur}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${ur}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${ur}•outline: var(${ur}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${me}•font•size));
    display: var(${me}•display);
    gap: var(${me}•gap);
    border-radius: var(${me}•border•radius);
    background: var(${me}•background);
    padding: var(${me}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${ur}•border•radius);
      outline: var(${ur}•outline, none);
      outline-offset: var(${ur}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${ur}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${ur}•size);
      min-width: var(${ur}•size);

      border-radius: var(${ur}•border•radius);
      border: var(${ur}•border•width) solid var(${ur}•border•color);
      background: var(${ur}•background);
      color: var(${ur}•color);
      font-weight: var(${ur}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${ur}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${ur}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Em=tr(Ue,["hug","fill"]),Im=tr(ie,["lg","md"]),_m=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(ae,{icon:a,text:e});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(su,{...t,label:o,layout:"fill",useMask:!1})})},Tm=({children:r,size:e="lg",layout:a="hug",...t})=>(0,i.jsx)("ul",{...t,"arc-radio-bar":"","data-size":e,"data-layout":a,role:"radiogroup",children:r});lr("ArcRadioBar",zm);var lu=Ve(98998),Gr,Mr,Je,Ca;function jm(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[e,a]=Gr(r),t=Mr(()=>{a(!0)},[]),o=Mr(()=>{a(!1)},[]),n=Mr(()=>{a(c=>!c)},[]);return{value:e,setValue:a,setTrue:t,setFalse:o,toggle:n}}var Qe=typeof window<"u"?u.useLayoutEffect:u.useEffect;function He(r,e,a,t){const o=(0,u.useRef)(e);Qe(()=>{o.current=e},[e]),(0,u.useEffect)(()=>{const n=a?.current??window;if(!(n&&n.addEventListener))return;const c=l=>{o.current(l)};return n.addEventListener(r,c,t),()=>{n.removeEventListener(r,c,t)}},[r,a,t])}function e$(r){He("click",e=>{r(e)})}function a$(){const[r,e]=Gr(null),a=Mr(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(o){return console.warn("Copy failed",o),e(null),!1}},[]);return[r,a]}function Rm(r){const[e,a]=Gr(r??0),t=Mr(()=>{a(c=>c+1)},[]),o=Mr(()=>{a(c=>c-1)},[]),n=Mr(()=>{a(r??0)},[r]);return{count:e,increment:t,decrement:o,reset:n,setCount:a}}function Pm(r,e){const a=Je(r);Qe(()=>{a.current=r},[r]),Ca(()=>{if(e===null)return;const t=setInterval(()=>{a.current()},e);return()=>{clearInterval(t)}},[e])}function t$({countStart:r,countStop:e=0,intervalMs:a=1e3,isIncrement:t=!1}){const{count:o,increment:n,decrement:c,reset:l}=Rm(r),{value:d,setTrue:h,setFalse:g}=jm(!1),v=Mr(()=>{g(),l()},[g,l]),p=Mr(()=>{if(o===e){g();return}t?n():c()},[o,e,c,n,t,g]);return Pm(p,d?a:null),[o,{startCountdown:h,stopCountdown:g,resetCountdown:v}]}function oc(r){const e=(0,u.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return Qe(()=>{e.current=r},[r]),(0,u.useCallback)((...a)=>{var t;return(t=e.current)==null?void 0:t.call(e,...a)},[e])}var ls=typeof window>"u";function ds(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,u.useCallback)(p=>a.serializer?a.serializer(p):JSON.stringify(p),[a]),n=(0,u.useCallback)(p=>{if(a.deserializer)return a.deserializer(p);if(p==="undefined")return;const m=e instanceof Function?e():e;let b;try{b=JSON.parse(p)}catch($){return console.error("Error parsing JSON:",$),m}return b},[a,e]),c=(0,u.useCallback)(()=>{const p=e instanceof Function?e():e;if(ls)return p;try{const m=window.localStorage.getItem(r);return m?n(m):p}catch(m){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,m),p}},[e,r,n]),[l,d]=(0,u.useState)(()=>t?c():e instanceof Function?e():e),h=oc(p=>{ls&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=p instanceof Function?p(c()):p;window.localStorage.setItem(r,o(m)),d(m),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(m){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,m)}}),g=oc(()=>{ls&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const p=e instanceof Function?e():e;window.localStorage.removeItem(r),d(p),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,u.useEffect)(()=>{d(c())},[r]);const v=(0,u.useCallback)(p=>{p.key&&p.key!==r||d(c())},[r,c]);return He("storage",v),He("local-storage",v),[l,h,g]}var Mm=typeof window>"u";function du(r,{defaultValue:e=!1,initializeWithValue:a=!0}={}){const t=l=>Mm?e:window.matchMedia(l).matches,[o,n]=Gr(()=>a?t(r):e);function c(){n(t(r))}return Qe(()=>{const l=window.matchMedia(r);return c(),l.addListener?l.addListener(c):l.addEventListener("change",c),()=>{l.removeListener?l.removeListener(c):l.removeEventListener("change",c)}},[r]),o}var Lm="(prefers-color-scheme: dark)",Bm="usehooks-ts-dark-mode";function o$(r={}){const{defaultValue:e,localStorageKey:a=Bm,initializeWithValue:t=!0}=r,o=du(Lm,{initializeWithValue:t,defaultValue:e}),[n,c]=ds(a,e??o??!1,{initializeWithValue:t});return Qe(()=>{o!==n&&c(o)},[o]),{isDarkMode:n,toggle:()=>{c(l=>!l)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:l=>{c(l)}}}function uu(r){const e=(0,u.useRef)(r);e.current=r,(0,u.useEffect)(()=>()=>{e.current()},[])}function nc(r,e=500,a){const t=(0,u.useRef)();uu(()=>{t.current&&t.current.cancel()});const o=(0,u.useMemo)(()=>{const n=lu(r,e,a),c=(...l)=>n(...l);return c.cancel=()=>{n.cancel()},c.isPending=()=>!!t.current,c.flush=()=>n.flush(),c},[r,e,a]);return(0,u.useEffect)(()=>{t.current=lu(r,e,a)},[r,e,a]),o}function n$(r,e,a){const t=a?.equalityFn??((h,g)=>h===g),o=r instanceof Function?r():r,[n,c]=Gr(o),l=Je(o),d=nc(c,e,a);return t(l.current,o)||(d(o),l.current=o),[n,d]}function c$(r,e={}){const{preserveTitleOnUnmount:a=!0}=e,t=Je(null);Qe(()=>{t.current=window.document.title},[]),Qe(()=>{window.document.title=r},[r]),uu(()=>{!a&&t.current&&(window.document.title=t.current)})}function i$(r){const[e,a]=Gr(!1),t=()=>{a(!0)},o=()=>{a(!1)};return He("mouseenter",t,r),He("mouseleave",o,r),e}function s$({threshold:r=0,root:e=null,rootMargin:a="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:n}={}){var c;const[l,d]=Gr(null),[h,g]=Gr(()=>({isIntersecting:o,entry:void 0})),v=Je();v.current=n;const p=((c=h.entry)==null?void 0:c.isIntersecting)&&t;Ca(()=>{if(!l||!("IntersectionObserver"in window)||p)return;let $;const w=new IntersectionObserver(S=>{const x=Array.isArray(w.thresholds)?w.thresholds:[w.thresholds];S.forEach(C=>{const I=C.isIntersecting&&x.some(A=>C.intersectionRatio>=A);g({isIntersecting:I,entry:C}),v.current&&v.current(I,C),I&&t&&$&&($(),$=void 0)})},{threshold:r,root:e,rootMargin:a});return w.observe(l),()=>{w.disconnect()}},[l,JSON.stringify(r),e,a,p,t]);const m=Je(null);Ca(()=>{var $;!l&&(($=h.entry)!=null&&$.target)&&!t&&!p&&m.current!==h.entry.target&&(m.current=h.entry.target,g({isIntersecting:o,entry:void 0}))},[l,h.entry,t,p,o]);const b=[d,!!h.isIntersecting,h.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}function l$(){const[r,e]=Gr(!1);return Ca(()=>{e(!0)},[]),r}function Om(){const r=Je(!1);return Ca(()=>(r.current=!0,()=>{r.current=!1}),[]),Mr(()=>r.current,[])}function d$(r=new Map){const[e,a]=Gr(new Map(r)),t={set:Mr((o,n)=>{a(c=>{const l=new Map(c);return l.set(o,n),l})},[]),setAll:Mr(o=>{a(()=>new Map(o))},[]),remove:Mr(o=>{a(n=>{const c=new Map(n);return c.delete(o),c})},[]),reset:Mr(()=>{a(()=>new Map)},[])};return[e,t]}function u$(r,e,a="mousedown",t={}){He(a,o=>{const n=o.target;if(!n||!n.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(n)):r.current&&!r.current.contains(n))&&e(o)},void 0,t)}var hu=typeof window>"u";function h$(r,e={}){let{initializeWithValue:a=!0}=e;hu&&(a=!1);const t=Mr(d=>{if(e.deserializer)return e.deserializer(d);if(d==="undefined")return;let h;try{h=JSON.parse(d)}catch(g){return console.error("Error parsing JSON:",g),null}return h},[e]),o=Mr(()=>{if(hu)return null;try{const d=window.localStorage.getItem(r);return d?t(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,d),null}},[r,t]),[n,c]=Gr(()=>{if(a)return o()});Ca(()=>{c(o())},[r]);const l=Mr(d=>{d.key&&d.key!==r||c(o())},[r,o]);return He("storage",l),He("local-storage",l),n}var gu={width:void 0,height:void 0};function g$(r){const{ref:e,box:a="content-box"}=r,[{width:t,height:o},n]=Gr(gu),c=Om(),l=Je({...gu}),d=Je(void 0);return d.current=r.onResize,Ca(()=>{if(!e.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([g])=>{const v=a==="border-box"?"borderBoxSize":a==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",p=pu(g,v,"inlineSize"),m=pu(g,v,"blockSize");if(l.current.width!==p||l.current.height!==m){const $={width:p,height:m};l.current.width=p,l.current.height=m,d.current?d.current($):c()&&n($)}});return h.observe(e.current,{box:a}),()=>{h.disconnect()}},[a,e,c]),{width:t,height:o}}function pu(r,e,a){return r[e]?Array.isArray(r[e])?r[e][0][a]:r[e][a]:e==="contentBoxSize"?r.contentRect[a==="inlineSize"?"width":"height"]:void 0}var vu=typeof window>"u";function p$(r={}){let{initializeWithValue:e=!0}=r;vu&&(e=!1);const a=()=>{if(!vu)return window.screen},[t,o]=Gr(()=>{if(e)return a()}),n=nc(o,r.debounceDelay);function c(){const l=a(),d=r.debounceDelay?n:o;if(l){const{width:h,height:g,availHeight:v,availWidth:p,colorDepth:m,orientation:b,pixelDepth:$}=l;d({width:h,height:g,availHeight:v,availWidth:p,colorDepth:m,orientation:b,pixelDepth:$})}}return He("resize",c),Qe(()=>{c()},[]),t}var cc=new Map;function Dm(r){const e=document.querySelector(`script[src="${r}"]`),a=e?.getAttribute("data-status");return{node:e,status:a}}function v$(r,e){const[a,t]=Gr(()=>!r||e?.shouldPreventLoad?"idle":typeof window>"u"?"loading":cc.get(r)??"loading");return Ca(()=>{if(!r||e?.shouldPreventLoad)return;const o=cc.get(r);if(o==="ready"||o==="error"){t(o);return}const n=Dm(r);let c=n.node;if(c)t(n.status??o??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,e?.id&&(c.id=e.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const d=h=>{const g=h.type==="load"?"ready":"error";c?.setAttribute("data-status",g)};c.addEventListener("load",d),c.addEventListener("error",d)}const l=d=>{const h=d.type==="load"?"ready":"error";t(h),cc.set(r,h)};return c.addEventListener("load",l),c.addEventListener("error",l),()=>{c&&(c.removeEventListener("load",l),c.removeEventListener("error",l)),c&&e?.removeOnUnmount&&(c.remove(),cc.delete(r))}},[r,e?.shouldPreventLoad,e?.removeOnUnmount,e?.id]),a}var Nm=typeof window>"u";function f$(r={}){const{autoLock:e=!0,lockTarget:a,widthReflow:t=!0}=r,[o,n]=Gr(!1),c=Je(null),l=Je(null),d=()=>{if(c.current){const{overflow:g,paddingRight:v}=c.current.style;if(l.current={overflow:g,paddingRight:v},t){const p=c.current===document.body?window.innerWidth:c.current.offsetWidth,m=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,b=p-c.current.scrollWidth;c.current.style.paddingRight=`${b+m}px`}c.current.style.overflow="hidden",n(!0)}},h=()=>{c.current&&l.current&&(c.current.style.overflow=l.current.overflow,t&&(c.current.style.paddingRight=l.current.paddingRight)),n(!1)};return Qe(()=>{if(!Nm)return a&&(c.current=typeof a=="string"?document.querySelector(a):a),c.current||(c.current=document.body),e&&d(),()=>{h()}},[e,a,t]),{isLocked:o,lock:d,unlock:h}}var us=typeof window>"u";function Fm(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,u.useCallback)(p=>a.serializer?a.serializer(p):JSON.stringify(p),[a]),n=(0,u.useCallback)(p=>{if(a.deserializer)return a.deserializer(p);if(p==="undefined")return;const m=e instanceof Function?e():e;let b;try{b=JSON.parse(p)}catch($){return console.error("Error parsing JSON:",$),m}return b},[a,e]),c=(0,u.useCallback)(()=>{const p=e instanceof Function?e():e;if(us)return p;try{const m=window.sessionStorage.getItem(r);return m?n(m):p}catch(m){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,m),p}},[e,r,n]),[l,d]=(0,u.useState)(()=>t?c():e instanceof Function?e():e),h=oc(p=>{us&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const m=p instanceof Function?p(c()):p;window.sessionStorage.setItem(r,o(m)),d(m),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(m){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,m)}}),g=oc(()=>{us&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const p=e instanceof Function?e():e;window.sessionStorage.removeItem(r),d(p),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,u.useEffect)(()=>{d(c())},[r]);const v=(0,u.useCallback)(p=>{p.key&&p.key!==r||d(c())},[r,c]);return He("storage",v),He("session-storage",v),[l,h,g]}function m$(r){const[e,a]=Gr(1),t=e+1<=r,o=e-1>0,n=Mr(h=>{const g=h instanceof Function?h(e):h;if(g>=1&&g<=r){a(g);return}throw new Error("Step not valid")},[r,e]),c=Mr(()=>{t&&a(h=>h+1)},[t]),l=Mr(()=>{o&&a(h=>h-1)},[o]),d=Mr(()=>{a(1)},[]);return[e,{goToNextStep:c,goToPrevStep:l,canGoToNextStep:t,canGoToPrevStep:o,setStep:n,reset:d}]}var Hm="(prefers-color-scheme: dark)",Vm="usehooks-ts-ternary-dark-mode";function b$({defaultValue:r="system",localStorageKey:e=Vm,initializeWithValue:a=!0}={}){const t=du(Hm,{initializeWithValue:a}),[o,n]=ds(e,r,{initializeWithValue:a});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:n,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];n(h=>{const g=(d.indexOf(h)+1)%d.length;return d[g]})}}}function $$(r,e){const a=Je(r);Qe(()=>{a.current=r},[r]),Ca(()=>{if(!e&&e!==0)return;const t=setTimeout(()=>{a.current()},e);return()=>{clearTimeout(t)}},[e])}function y$(r){const[e,a]=Gr(!!r),t=Mr(()=>{a(o=>!o)},[]);return[e,t,a]}var Um=typeof window>"u";function x$(r={}){let{initializeWithValue:e=!0}=r;Um&&(e=!1);const[a,t]=Gr(()=>e?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=nc(t,r.debounceDelay);function n(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return He("resize",n),Qe(()=>{n()},[]),a}const Km=(r,e)=>{const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;a?a.call(r,e):r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0}))},Wm=({defaultValue:r="",value:e,debounceMs:a,inputElementRef:t,onClear:o,onKeyDown:n,onSearch:c})=>{const l=e!==void 0,d=c!==void 0&&a!==void 0,[h,g]=(0,u.useState)(r),v=l?e??"":h,p=(0,u.useRef)(!1),m=nc(x=>{c?.(x)},a??0),b=(0,u.useCallback)(()=>{m.cancel()},[m]),$=(0,u.useCallback)(x=>{l||g(x)},[l]);(0,u.useEffect)(()=>b,[b]),(0,u.useEffect)(()=>{if(d){if(!p.current){p.current=!0;return}b(),m(v)}},[b,m,v,d]);const w=(0,u.useCallback)(()=>{b();const x=t.current;if(x){Km(x,""),o?.(),x.focus();return}l||g(""),o?.()},[b,t,l,o]),S=(0,u.useCallback)(x=>{n?.(x),!(x.defaultPrevented||x.key!=="Enter"||!c)&&(b(),c(v))},[b,n,c,v]);return{resolvedValue:v,handleValueChange:$,handleClear:w,handleKeyDown:S}},Gm=Yn,qm=Zn,Ym=tr(Ui,["outline","solid"]),fu="Search",Zm="Clear search",hs={layout:"hug",size:"inherit",variant:"outline"},Xm=({canClear:r,isDisabled:e,onClear:a})=>{if(r)return(0,i.jsx)(ru,{"aria-label":Zm,disabled:e,icon:"fa-regular fa-xmark",onClick:a})},Jm=({ariaLabel:r,ariaLabelledBy:e,headerLabel:a})=>r??(!a&&!e?fu:void 0),mu=(0,u.forwardRef)(({debounceMs:r,inputProps:e,layout:a=hs.layout,onClear:t,onSearch:o,size:n=hs.size,variant:c=hs.variant,headerLabel:l,headerSlot:d,footerCaption:h,footerSlot:g,onChange:v,...p},m)=>{const{id:b,value:$,defaultValue:w="",onChange:S,onKeyDown:x,placeholder:C=fu,disabled:I,readOnly:A,required:j,"aria-label":M,"aria-labelledby":H,...z}=e,k=Rr(b,"arc-search"),N=(0,u.useRef)(null),{resolvedValue:U,handleValueChange:Z,handleClear:K,handleKeyDown:q}=Wm({defaultValue:w,value:$,debounceMs:r,inputElementRef:N,onClear:t,onKeyDown:x,onSearch:o}),F=!I&&!A&&U.length>0,X=Jm({ariaLabel:M,ariaLabelledBy:H,headerLabel:l}),P=Xm({canClear:F,isDisabled:I,onClear:K}),T=V=>{N.current=V,je(m,V)},O=(V,ar)=>{Z(ar.target.value),S?.(V,ar)};return(0,i.jsx)(wo,{...p,"arc-search":"",layout:a,size:n,variant:c,ref:T,onChange:v,headerLabel:l,headerSlot:d,inputPrefix:(0,i.jsx)(ir,{icon:"fa-regular fa-search"}),inputAction:P,footerCaption:h,footerSlot:g,inputProps:{...z,id:k,value:U,disabled:I,placeholder:C,readOnly:A,required:j,onChange:O,onKeyDown:q,"aria-disabled":I||void 0,"aria-label":X,"aria-labelledby":H,"aria-readonly":A||void 0,"aria-required":j||void 0}})});mu.displayName="ArcSearch";const Qm=Yn,rb=Zn,eb=tr(jr,["outline","solid","plain"]),bu=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),ic=r=>Array.isArray(r.options),Tt=r=>{const e=r?.variant;return e!=="divider"&&e!=="section-label"},$u=r=>r?.variant==="section-label"&&!!(r.text||r.icon),yu=r=>{},xu=(r=[])=>r.flatMap(e=>ic(e)?e.options:[e]).some(e=>Tt(e)&&e.value===""),ku=r=>{const e=o=>typeof o=="string"&&o.trim().length>0,a=o=>{if(typeof o!="object"||o===null)return;const{name:n}=o;return e(n)?n:void 0};return[r?.text,a(r?.avatar),r?.["aria-label"]].find(e)??"Anonymous"},jo=s`--arc•select`,be=s`${jo}•picker`,wu=s`${be}•fg`,Cu=s`${be}•bg`,gs=s`${jo}•option`,Ro=s`${gs}•fg`,Po=s`${gs}•bg`,ot=s`${gs}•icon`,ab=s`
  ${wu}: currentcolor;
  ${Cu}: var(--arc-color-bg-mono);
  ${jo}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${be}•width: auto;
  ${be}•min•width: 3em;
  ${be}•border•radius: var(--arc-border-radius-lg);
  ${be}•shadow: var(--arc-shadow-lg);

  ${Ro}: currentcolor;
  ${Po}: transparent;

  ${ot}•display: none;
  ${ot}•color: var(${Ro});
`,tb=s`
  &[data-layout=fill] {
    ${be}•width: 100%; /* fallback */
    ${be}•width: anchor-size(inline);
  }
`,ob=s`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,nb=s`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,cb=s`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${ab}
    ${tb}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${be}•display, none);
      flex-direction: column;
      gap: var(${_}•4);
      border: none;
      color: var(${wu});
      width: var(--arc-select-picker-width, var(${be}•width));
      min-width: var(--arc-select-picker-min-width, var(${be}•min•width));
      margin: var(--arc-select-picker-margin, var(${_}•4) 0);
      padding: var(--arc-select-picker-padding, var(${_}•4));
      background: var(--arc-select-picker-background, var(${Cu}));
      border-radius: var(--arc-select-picker-border-radius, var(${be}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${be}•shadow));
    }

    ::picker(select):popover-open {
      ${be}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      cursor: inherit;
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      padding-inline: var(${f}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${_}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${jo}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${f}•24);
      --arc-avatar-initial-font-size: var(${f}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${f}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${_}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${f}•1) solid var(--arc-color-border-mid);
      margin-top: var(${_}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${_}•8);
      width: 100%;
      min-width: 0;
      color: var(${Ro});
      background: var(--arc-select-option-background, var(${Po}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${_}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${Ro}: var(--arc-color-fg-disabled);
        ${Po}: transparent;
        ${ot}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${Po}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${Po}: var(--arc-color-bg-selected-default);
        ${ot}•display: flex;
        ${ot}•color: var(--arc-select-option-selected-icon-color, var(${Ro}));
      }

      [arc-select-icon=selected] {
        display: var(${ot}•display, none);
        color: var(${ot}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }

      select[data-placeholder] {
        color: var(${jo}•placeholder•fg);
      }
    }
  }

  ${ob}
  ${nb}

}
`,ib=(0,u.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",tag:t="span",items:o,placeholder:n,renderItem:c,headerLabel:l,headerSlot:d,footerCaption:h,footerSlot:g,id:v,value:p,defaultValue:m,required:b,disabled:$,readOnly:w,maxWidth:S,inputProps:x,...C},I)=>{const{name:A,onBlur:j,onChange:M,onFocus:H,onInput:z,"aria-describedby":k,"aria-label":N,"aria-labelledby":U,...Z}=C,K=Rr(v,"arc-select"),q=a==="plain"&&r==="fill"?"hug":r,F=$||void 0,X=w||void 0,P=b||void 0,T=bu(),O=a!=="plain"&&!!(l||d),V=a!=="plain"&&!!(h||g),ar=typeof n=="string"&&n.length>0&&!xu(o),rr=m??(ar?"":void 0),or=p??rr,mr=ar&&or==="",L=T&&ar&&or==="",G=X&&or!=null?String(or):void 0,fr=o.flatMap(W=>ic(W)?W.options.filter(Tt):Tt(W)?[W]:(yu(W),[])),br=new Map(fr.map((W,zr)=>[W,zr])),Sr=W=>{const{itemId:zr,...vr}=W,Tr=qd(Co(W));return(0,i.jsx)(Tr,{...vr})},Dr=W=>{const zr=br.get(W)??0,vr=W["aria-disabled"]===!0||W.disabled===!0,Tr=typeof W.itemId=="string"&&W.itemId.length>0?W.itemId:zr,$e=String(W?.value??W?.itemId??zr);return(0,i.jsx)("option",{value:$e,disabled:vr||G!==void 0&&$e!==G||void 0,"arc-select-option":"",children:T?(0,i.jsxs)(i.Fragment,{children:[c?c(W,zr):Sr(W),(0,i.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,i.jsx)(ir,{icon:"fa-regular fa-check arc-fw"})})]}):ku(W)},Tr)},Fr=(W,zr)=>{const vr=W.options.filter(Tt);if(vr.length===0)return null;const Tr=W.options.find($u);return(0,i.jsxs)("optgroup",{label:W.label,disabled:W.disabled||void 0,children:[T&&Tr&&(0,i.jsx)("legend",{"arc-select-option-group-legend":"",children:Sr(Tr)}),vr.map(Dr)]},W.itemId??`${W.label}-${zr}`)};return(0,i.jsxs)(t,{...Z,"arc-select":"","arc-input":"select","data-layout":q,"data-size":e,"data-variant":a,children:[O&&(0,i.jsxs)(dr.Header,{children:[(0,i.jsx)(dr.HeaderLabel,{htmlFor:K,children:l}),!!d&&(0,i.jsx)(dr.Spacer,{}),(0,i.jsx)(dr.HeaderSlot,{children:d})]}),(0,i.jsx)(dr.InputBody,{children:(0,i.jsxs)("select",{...x,name:x?.name??A,onBlur:x?.onBlur??j,onChange:x?.onChange??M,onFocus:x?.onFocus??H,onInput:x?.onInput??z,"aria-describedby":x?.["aria-describedby"]??k,"aria-label":x?.["aria-label"]??N,"aria-labelledby":x?.["aria-labelledby"]??U,value:p,defaultValue:p==null?rr:void 0,required:b,disabled:$,ref:I,id:K,"aria-disabled":F,"aria-required":P,"data-readonly":X,"data-placeholder":mr||void 0,style:{...S?{"--js\u2022max\u2022width":S}:{},...x?.style},children:[(0,i.jsxs)("button",{"arc-select-button":"",children:[L&&(0,i.jsx)(ae,{"arc-select-placeholder":"",text:n,overflow:"truncate"}),(0,i.jsx)("selectedcontent",{}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(ir,{icon:"fa-regular fa-angle-down arc-fw"})})]}),ar&&(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:n}),o.map((W,zr)=>ic(W)?Fr(W,zr):Tt(W)?Dr(W):null)]})}),V&&(0,i.jsxs)(dr.Footer,{children:[(0,i.jsx)(dr.FooterCaption,{children:h}),!!g&&(0,i.jsx)(dr.Spacer,{}),(0,i.jsx)(dr.FooterSlot,{children:g})]})]})});lr("ArcSelect",cb);const sb=tr(ie,["inherit","md","sm"]),qr={On:"on",Off:"off"},jt={Before:"before",After:"after"},lb=({disabled:r,id:e,name:a,size:t="md",value:o,labelOff:n,labelOn:c,onChange:l,...d})=>{const h=Rr(a,"arc-switch-name"),g=Rr(e?`${e}-off`:void 0,"arc-switch-off"),v=Rr(e?`${e}-on`:void 0,"arc-switch-on"),p=x=>{if(x.code==="Space"){x.preventDefault(),x.stopPropagation();const C=o===qr.On?qr.Off:qr.On;l?.({value:C},x)}},m=x=>{const C={on:Kt(c),off:Kt(n)};return C?.on&&C?.off?C[x]:!C?.on&&C?.off?`${C?.off}: ${x}`:C?.on&&!C?.off?`${C?.on}: ${x}`:C[x]},b=(0,i.jsxs)(In,{type:"switch",onKeyDown:p,children:[(0,i.jsx)(ho,{type:"switch",name:h,id:g,value:qr.Off,checked:o===qr.Off,disabled:r,"aria-label":m(qr.Off)?.trim(),onChange:l}),(0,i.jsx)(ho,{type:"switch",name:h,id:v,value:qr.On,checked:o===qr.On,disabled:r,"aria-label":m(qr.On)?.trim(),onChange:l}),(0,i.jsx)("span",{"data-element":"mask"})]}),$=!c&&o===qr.Off?v:g,w=!n&&o===qr.On?g:v,S=!!(c||n)&&(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(Xa,{htmlFor:$,"arc-switch-label":c?qr.Off:"",children:(0,i.jsx)(Ja,{children:n})}),b,!!c&&(0,i.jsx)(Xa,{htmlFor:w,"arc-switch-label":n?qr.On:"",children:(0,i.jsx)(Ja,{children:c})})]});return(0,i.jsx)("span",{...d,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:S||b})},Hr=s`--arc•switch`,kr=s`${Hr}•knob`,db=s`
@layer arc-components {

  [arc-switch] {
    ${Hr}•background: var(--arc-color-alpha-white-100);
    ${kr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${Hr}•background: var(--arc-color-alpha-white-70);
      ${kr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${B}•background: var(--arc-color-bg-neutral-subtle);
      ${B}•border•color: var(--arc-color-border-stark);
      ${kr}•border•color: var(--arc-color-border-on-stark);
      ${kr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${B}•border•color: var(--arc-color-border-heavy);
        ${kr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${B}•background: var(--arc-color-bg-disabled);
        ${B}•border•color: var(--arc-color-border-disabled);
        ${kr}•border•color: var(--arc-color-border-on-stark);
        ${kr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${B}•background: var(--arc-color-bg-theme-heavy);
      ${B}•border•color: var(--arc-color-border-theme-heavy);
      ${kr}•border•color: var(--arc-color-border-theme-heavy);
      ${kr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${B}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${B}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${Hr}•font•size: 1em;
      ${Hr}•width: 2.5em;
      ${Hr}•height: 1.5em;
      ${Hr}•gap: 0.5em;
      ${kr}•size: 1.5em;
      ${kr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${Hr}•font•size: var(${f}•14);
      ${Hr}•width: var(${f}•40);
      ${Hr}•height: var(${f}•24);
      ${Hr}•gap: var(${f}•8);
      ${kr}•x•shift: var(${f}•4);
      ${kr}•size: var(${f}•24);
    }

    &[data-size=sm] {
      ${Hr}•font•size: var(${f}•12);
      ${Hr}•width: var(${f}•30);
      ${Hr}•height: var(${f}•14);
      ${Hr}•gap: var(${f}•8);
      ${kr}•x•shift: var(${f}•1);
      ${kr}•size: var(${f}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${B}•border•radius: var(--arc-border-radius-pill);
    ${B}•width: var(${Hr}•width);
    ${B}•height: var(${Hr}•height);
    ${B}•x•shift: var(${kr}•x•shift);
    ${B}•size: var(${kr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${kr}•translate: calc(-100% + var(${kr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${kr}•translate: calc(0% - var(${kr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${Hr}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${Hr}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${B}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${kr}•translate);

      display: inline-flex;
      width: var(${kr}•size);
      height: var(${kr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${kr}•color);
      box-shadow: var(${kr}•shadow);
      border: var(${B}•border•width) solid var(${kr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,ub=({disabled:r,id:e,name:a,size:t="md",value:o,label:n,labelPosition:c=jt.After,onChange:l,labelOff:d,labelOn:h,...g})=>{const v=Rr(a,"arc-switch-name"),p=Rr(e,"arc-switch"),m=(w,S)=>{const x=w.checked?qr.On:qr.Off;l?.({...w,value:x},S)};!n&&(h||d)&&(n=h||d,c=h?jt.After:jt.Before);const b=(0,i.jsxs)(In,{type:"checkbox",children:[(0,i.jsx)(ho,{type:"checkbox",name:v,id:p,checked:o===qr.On,disabled:r,role:"switch","aria-checked":o===qr.On,"aria-label":n?void 0:"Toggle switch",tabIndex:0,onChange:m}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),$=(0,i.jsx)(Xa,{htmlFor:p,"arc-switch-label":c,children:(0,i.jsx)(Ja,{children:n})});return d&&h?(0,i.jsx)(lb,{...g,disabled:r,id:e,name:a,labelOff:d,labelOn:h,size:t,value:o,onChange:l}):(0,i.jsxs)("span",{...g,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":c,role:"presentation","aria-live":"off",children:[n&&c===jt.Before&&$,b,n&&c===jt.After&&$]})};lr("ArcSwitch",db);const hb=["title","heading","subheading","body"],Au=["h1","h2","h3","h4","h5","h6"],Su=["code","div","li","p","pre","span"],zu=[...Au,...Su],gb=[...ha],pb=["title-inherit","title-lg","title-md","title-sm"],vb=["heading-inherit","heading-lg","heading-md","heading-sm"],fb=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],mb=tr(jr,["inherit","primary","primary-inverse"]),bb=["body-inherit","body-lg","body-md","body-sm","body-xs"],$b=re(jr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),yb=tr(Vo,["inherit","start","center","justify","end"]),xb=tr(Uo,["inherit","loose","standard","tight"]),kb={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},wb=r=>{const{align:e,lineHeight:a,size:t,variant:o,scheme:n="auto",isMonospace:c,tag:l,...d}=r,h=kb?.[l]??"body",g=t?.includes("inherit")?t?.split("-")?.[0]:t,v=o?.endsWith("-inverse");let p;return n!=="auto"?p=n:v&&(p=void 0),{...d,"arc-text":g||h,"arc-scheme":p,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":a?.includes("inherit")?void 0:a}},Aa=s`--arc•text`,ps=s`${Aa}•font`,Rt=s`${Aa}•align`,ia=s`${Aa}fg`,Eu=s`${Aa}•flex`,Iu=s`${Aa}•hyphens`,Mo=s`${Aa}•letterspacing`,sa=s`${Aa}•lineheight`,_u=s`${Aa}•opacity`,Tu=s`${Aa}•whitespace`,nt=s`${ps}•family`,Nr=s`${ps}•size`,Pt=s`${ps}•weight`,Cb=s`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Rt}: unset;
  ${ia}: unset;
  ${Eu}: unset;
  ${Iu}: auto;
  ${Mo}: unset;
  ${sa}: unset;
  ${_u}: unset;
  ${Tu}: unset;

  ${nt}: unset;
  ${Nr}: unset;
  ${Pt}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${sa}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${sa}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${sa}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Rt}: start;
  }

  &[data-align=center] {
    ${Rt}: center;
  }

  &[data-align=justify] {
    ${Rt}: justify;
  }

  &[data-align=end] {
    ${Rt}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${ia}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${ia}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${ia}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${ia}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${ia}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${ia}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${ia}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${ia}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${nt}: var(--arc-font-family-title);
  ${Pt}: var(--arc-font-weight-title);
  ${Mo}: var(--arc-letter-spacing-title);
  ${sa}: var(--arc-line-height-title);

  ${Nr}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Nr}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${Nr}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${Nr}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${nt}: var(--arc-font-family-heading);
  ${Pt}: var(--arc-font-weight-heading);
  ${Mo}: var(--arc-letter-spacing-heading);
  ${sa}: var(--arc-line-height-heading);

  ${Nr}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Nr}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Nr}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Nr}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${nt}: var(--arc-font-family-subheading);
  ${Pt}: var(--arc-font-weight-subheading);
  ${Mo}: unset;
  ${sa}: var(--arc-line-height-subheading);

  ${Nr}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Nr}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${Nr}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${Nr}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${nt}: var(--arc-font-family-body);
  ${Pt}: var(--arc-font-weight-body);
  ${sa}: var(--arc-line-height-body);
  ${Nr}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${Nr}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${Nr}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${Nr}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${Nr}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${Nr}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${nt}: var(--arc-font-family-mono);
  ${sa}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Eu}));
  hyphens: var(--arc-text-hyphens, var(${Iu})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${_u}));
  text-align: var(--arc-text-align, var(${Rt}));
  white-space: var(--arc-text-white-space, var(${Tu}));

  color: var(--arc-text-color, var(${ia}));

  font-size: var(--arc-text-font-size, var(${Nr}));
  font-family: var(--arc-text-font-family, var(${nt}));
  font-weight: var(--arc-text-font-weight, var(${Pt}));
  line-height: var(--arc-text-line-height, var(${sa}));
  letter-spacing: var(--arc-text-letter-spacing, var(${Mo}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,Ab=r=>(0,u.forwardRef)((e,a)=>(0,u.createElement)(r,{...wb({...e,tag:r}),ref:a})),Sb=[...zu].reduce((r,e)=>({...r,[e]:Ab(e)}),{});lr("Arc",Cb);const zb=tr(jr,["common","ai","critical"]),ju=[...ha],Ru=["default","success","warning","error"],Pu=tr(ie,["inherit","md"]),Mu=tr(jr,["common"]),Lu=[...Na],Eb=[...ct],Bu=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],Ib=zb.filter(r=>r!=="critical"),Ou={size:Pu[1],variant:Mu[0],scheme:ju[2],popover:Lu[2],placement:Bu[4],severity:Ru[0],showDismiss:!0},Du=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},Nu=s`--arc•progress`,_b=s`${Nu}•bar`,Tb=s`${Nu}•value`,Fu=s`${_b}•bg`,Lo=s`${Tb}•bg`,jb=s`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${eg}

  [arc-progress-bar] {
    ${Fu}: var(--arc-color-alpha-subtle);
    ${Lo}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${Lo}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${Lo}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${f}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${Fu}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Lo}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${Lo}));
    }
  }

}
`,Rb=({progress:r=0,variant:e="common",...a})=>(0,i.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});lr("ArcProgressBar",jb);const la=s`--arc•toast`,sc=s`${la}•content`,Hu=s`${la}•color`,Vu=s`${la}•background`,Bo=s`${la}•icon•color`,Oo=s`${la}•transition`,Pb=s`
@layer arc-components {

  [arc-toast] {
    ${sc}•gap: var(${_}•2);
    ${Oo}•duration: 300ms;
    ${Bo}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${la}•font•size: var(${f}•16);
      ${sc}•font•size: var(${f}•14);
    }

    &[data-size=inherit] {
      ${la}•font•size: 1em;
      ${sc}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${Bo}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${Bo}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${Bo}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${Vu}: var(--arc-color-bg-mono);
      ${Hu}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${_}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${la}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${Hu}));
    background-color: var(--arc-toast-background, var(${Vu}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${_}•12) var(${_}•12) var(${_}•12) var(${_}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${la}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${la}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${_}•8) var(${_}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${_}•8);
      padding: var(${_}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${Bo}));

      height: 1lh;
      padding: 0 var(${_}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${sc}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${_}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${Oo}•duration) allow-discrete,
      overlay var(${Oo}•duration) allow-discrete,
      content-visibility var(${Oo}•duration) allow-discrete,
      opacity var(${Oo}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,Uu=({id:r,children:e,icon:a,heading:t,subtext:o,dismissProps:n,showDismiss:c=!0,onClose:l,actionSlot:d,size:h="md",variant:g="common",scheme:v=Ou.scheme,placement:p="bottom-left",getToastId:m,progressBarProps:b,severity:$,...w})=>{const S=()=>{l?.()},x=v==="auto"?void 0:v,C=!!d||c,I=Rr(r,"arc-toast"),{variant:A,hierarchy:j,...M}=n||{};(0,u.useEffect)(()=>{m?.(I)},[m,I]);const H=Tc(a);return(0,i.jsx)("div",{...w,"arc-toast":"","arc-scheme":x,"data-size":h,"data-variant":g,"data-placement":p,"data-severity":$||void 0,id:I,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,i.jsx)(ir,{icon:H,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:e||(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:t})}),o&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),C&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[d,c&&(0,i.jsx)(Er,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...M,popoverTarget:I,onClick:S})]}),b&&(0,i.jsx)(Rb,{...b,variant:$==="error"?"critical":b.variant,"arc-toast-progress-bar":""})]})})};Uu.handleToast=Du,lr("ArcToast",Pb);var Do;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(Do||(Do={}));const Mb=(r,e,a)=>{const[t,o]=(0,u.useState)(e),[n,c]=Fm(r,e),[l,d]=ds(r,e);return a===Do.Temporary?[n,c]:a===Do.Persistent?[l,d]:[t,o]},Lb=["auto","hex","hexa","rgb","hsl","oklch"],Bb=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
