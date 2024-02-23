import{s as H,M as te,V as B,W as Le,k as R,X as Re,a as z,d as m,Y as ae,i as E,f as j,N as le,O as ie,P as ne,T as $,Z as We,_ as x,e as W,c as I,p as b,n as Y,t as fe,j as G,b as ue,l as X,$ as K,g as et,h as Q,o as Fe,v as tt,D as Ue,q as T,S as we,B as ve,y as lt,a0 as it,a1 as nt,a2 as st,r as ce,R as rt,a3 as ot,a4 as ft,a5 as ut,a6 as at,a7 as ct}from"../chunks/scheduler.F4TqDybE.js";import{S as M,i as L,a as v,t as p,b as P,d as V,m as q,e as O,g as he,c as de,f as ht}from"../chunks/index.H1a0ZK8g.js";import{e as C}from"../chunks/each.6w4Ej4nR.js";import{r as dt,w as ee}from"../chunks/index.vVrfnIgK.js";import{d as _t}from"../chunks/index.qjNzC9Te.js";function _e(n,e){const l={},t={},i={$$scope:1};let r=n.length;for(;r--;){const s=n[r],f=e[r];if(f){for(const o in s)o in f||(t[o]=1);for(const o in f)i[o]||(l[o]=f[o],i[o]=1);n[r]=f}else for(const o in s)i[o]=1}for(const s in t)s in l||(l[s]=void 0);return l}function Ge(n){return typeof n=="object"&&n!==null?n:{}}/**
 * @license lucide-svelte v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};function Ae(n,e,l){const t=n.slice();return t[10]=e[l][0],t[11]=e[l][1],t}function be(n){let e,l=[n[11]],t={};for(let i=0;i<l.length;i+=1)t=B(t,l[i]);return{c(){e=Le(n[10]),this.h()},l(i){e=Re(i,n[10],{}),z(e).forEach(m),this.h()},h(){ae(e,t)},m(i,r){E(i,e,r)},p(i,r){ae(e,t=_e(l,[r&32&&i[11]]))},d(i){i&&m(e)}}}function Te(n){let e=n[10],l,t=n[10]&&be(n);return{c(){t&&t.c(),l=R()},l(i){t&&t.l(i),l=R()},m(i,r){t&&t.m(i,r),E(i,l,r)},p(i,r){i[10]?e?H(e,i[10])?(t.d(1),t=be(i),e=i[10],t.c(),t.m(l.parentNode,l)):t.p(i,r):(t=be(i),e=i[10],t.c(),t.m(l.parentNode,l)):e&&(t.d(1),t=null,e=i[10])},d(i){i&&m(l),t&&t.d(i)}}}function mt(n){let e,l,t,i,r,s=C(n[5]),f=[];for(let h=0;h<s.length;h+=1)f[h]=Te(Ae(n,s,h));const o=n[9].default,a=te(o,n,n[8],null);let u=[Ie,n[6],{width:n[2]},{height:n[2]},{stroke:n[1]},{"stroke-width":t=n[4]?Number(n[3])*24/Number(n[2]):n[3]},{class:i=`lucide-icon lucide lucide-${n[0]} ${n[7].class??""}`}],_={};for(let h=0;h<u.length;h+=1)_=B(_,u[h]);return{c(){e=Le("svg");for(let h=0;h<f.length;h+=1)f[h].c();l=R(),a&&a.c(),this.h()},l(h){e=Re(h,"svg",{width:!0,height:!0,stroke:!0,"stroke-width":!0,class:!0});var c=z(e);for(let d=0;d<f.length;d+=1)f[d].l(c);l=R(),a&&a.l(c),c.forEach(m),this.h()},h(){ae(e,_)},m(h,c){E(h,e,c);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(e,null);j(e,l),a&&a.m(e,null),r=!0},p(h,[c]){if(c&32){s=C(h[5]);let d;for(d=0;d<s.length;d+=1){const w=Ae(h,s,d);f[d]?f[d].p(w,c):(f[d]=Te(w),f[d].c(),f[d].m(e,l))}for(;d<f.length;d+=1)f[d].d(1);f.length=s.length}a&&a.p&&(!r||c&256)&&le(a,o,h,h[8],r?ne(o,h[8],c,null):ie(h[8]),null),ae(e,_=_e(u,[Ie,c&64&&h[6],(!r||c&4)&&{width:h[2]},(!r||c&4)&&{height:h[2]},(!r||c&2)&&{stroke:h[1]},(!r||c&28&&t!==(t=h[4]?Number(h[3])*24/Number(h[2]):h[3]))&&{"stroke-width":t},(!r||c&129&&i!==(i=`lucide-icon lucide lucide-${h[0]} ${h[7].class??""}`))&&{class:i}]))},i(h){r||(v(a,h),r=!0)},o(h){p(a,h),r=!1},d(h){h&&m(e),$(f,h),a&&a.d(h)}}}function gt(n,e,l){const t=["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"];let i=We(e,t),{$$slots:r={},$$scope:s}=e,{name:f}=e,{color:o="currentColor"}=e,{size:a=24}=e,{strokeWidth:u=2}=e,{absoluteStrokeWidth:_=!1}=e,{iconNode:h}=e;return n.$$set=c=>{l(7,e=B(B({},e),x(c))),l(6,i=We(e,t)),"name"in c&&l(0,f=c.name),"color"in c&&l(1,o=c.color),"size"in c&&l(2,a=c.size),"strokeWidth"in c&&l(3,u=c.strokeWidth),"absoluteStrokeWidth"in c&&l(4,_=c.absoluteStrokeWidth),"iconNode"in c&&l(5,h=c.iconNode),"$$scope"in c&&l(8,s=c.$$scope)},e=x(e),[f,o,a,u,_,h,i,e,s,r]}class Xe extends M{constructor(e){super(),L(this,e,gt,mt,H,{name:0,color:1,size:2,strokeWidth:3,absoluteStrokeWidth:4,iconNode:5})}}function Ce(n,e,l){const t=n.slice();t[3]=e[l].title,t[4]=e[l].slides,t[7]=l;const i=t[2][t[0]].section===t[7];return t[5]=i,t}function De(n,e,l){const t=n.slice();t[8]=e[l];const i=t[8].i===t[0];return t[9]=i,t}function bt(n){let e;return{c(){e=W("div"),this.h()},l(l){e=I(l,"DIV",{class:!0}),z(e).forEach(m),this.h()},h(){b(e,"class","block svelte-1oih81f")},m(l,t){E(l,e,t)},p:Y,d(l){l&&m(e)}}}function wt(n){let e,l=C(n[4]),t=[];for(let i=0;i<l.length;i+=1)t[i]=je(De(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=R()},l(i){for(let r=0;r<t.length;r+=1)t[r].l(i);e=R()},m(i,r){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(i,r);E(i,e,r)},p(i,r){if(r&3){l=C(i[4]);let s;for(s=0;s<l.length;s+=1){const f=De(i,l,s);t[s]?t[s].p(f,r):(t[s]=je(f),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(i){i&&m(e),$(t,i)}}}function je(n){let e;return{c(){e=W("div"),this.h()},l(l){e=I(l,"DIV",{class:!0}),z(e).forEach(m),this.h()},h(){b(e,"class","block svelte-1oih81f"),K(e,"active",n[9])},m(l,t){E(l,e,t)},p(l,t){t&3&&K(e,"active",l[9])},d(l){l&&m(e)}}}function He(n){let e,l,t=n[7]+1+"",i,r,s,f=n[3]+"",o,a,u;function _(d,w){return d[5]?wt:bt}let h=_(n),c=h(n);return{c(){e=W("div"),l=W("span"),i=fe(t),r=W("span"),s=fe("— "),o=fe(f),a=G(),c.c(),u=G(),this.h()},l(d){e=I(d,"DIV",{class:!0});var w=z(e);l=I(w,"SPAN",{class:!0});var S=z(l);i=ue(S,t),r=I(S,"SPAN",{class:!0});var N=z(r);s=ue(N,"— "),o=ue(N,f),N.forEach(m),S.forEach(m),a=X(w),c.l(w),u=X(w),w.forEach(m),this.h()},h(){b(r,"class","title svelte-1oih81f"),b(l,"class","text svelte-1oih81f"),b(e,"class","chapter svelte-1oih81f"),K(e,"active",n[5])},m(d,w){E(d,e,w),j(e,l),j(l,i),j(l,r),j(r,s),j(r,o),j(e,a),c.m(e,null),j(e,u)},p(d,w){w&2&&f!==(f=d[3]+"")&&et(o,f),h===(h=_(d))&&c?c.p(d,w):(c.d(1),c=h(d),c&&(c.c(),c.m(e,u))),w&5&&K(e,"active",d[5])},d(d){d&&m(e),c.d()}}}function vt(n){let e,l=C(n[1]),t=[];for(let i=0;i<l.length;i+=1)t[i]=He(Ce(n,l,i));return{c(){e=W("div");for(let i=0;i<t.length;i+=1)t[i].c();this.h()},l(i){e=I(i,"DIV",{class:!0});var r=z(e);for(let s=0;s<t.length;s+=1)t[s].l(r);r.forEach(m),this.h()},h(){b(e,"class","chapters svelte-1oih81f")},m(i,r){E(i,e,r);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(i,[r]){if(r&7){l=C(i[1]);let s;for(s=0;s<l.length;s+=1){const f=Ce(i,l,s);t[s]?t[s].p(f,r):(t[s]=He(f),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},i:Y,o:Y,d(i){i&&m(e),$(t,i)}}}function kt(n,e,l){let{activeSlide:t}=e,{sections:i}=e,{allSlides:r}=e;return n.$$set=s=>{"activeSlide"in s&&l(0,t=s.activeSlide),"sections"in s&&l(1,i=s.sections),"allSlides"in s&&l(2,r=s.allSlides)},[t,i,r]}class pt extends M{constructor(e){super(),L(this,e,kt,vt,H,{activeSlide:0,sections:1,allSlides:2})}}const St=dt({width:0,height:0},n=>{const e=()=>n({width:window.innerWidth,height:window.innerHeight});return e(),window.addEventListener("resize",_t(e,250)),()=>{window.removeEventListener("resize",e)}});function yt(n){let e,l,t;return{c(){e=W("figure"),l=fe("visual goes here"),this.h()},l(i){e=I(i,"FIGURE",{style:!0,class:!0});var r=z(e);l=ue(r,"visual goes here"),r.forEach(m),this.h()},h(){b(e,"style",t=`--offset: ${n[0]}px; --buffer: 2rem`),b(e,"class","svelte-3x2i7i")},m(i,r){E(i,e,r),j(e,l)},p(i,[r]){r&1&&t!==(t=`--offset: ${i[0]}px; --buffer: 2rem`)&&b(e,"style",t)},i:Y,o:Y,d(i){i&&m(e)}}}function Et(n,e,l){let t,i,r;Q(n,St,u=>l(3,r=u));let{activeSlide:s}=e,f,o=!1;const a=async()=>{if(o){await tt();const u=document.getElementById(`slide-${s}`);l(0,f=u.clientHeight+i)}};return Fe(()=>{o=!0,a()}),n.$$set=u=>{"activeSlide"in u&&l(1,s=u.activeSlide)},n.$$.update=()=>{n.$$.dirty&8&&l(2,t=r.width<600),n.$$.dirty&4&&(i=t?10:100),n.$$.dirty&10&&(r.width,a())},[f,s,t,r]}class zt extends M{constructor(e){super(),L(this,e,Et,yt,H,{activeSlide:1})}}function Nt(n){let e;const l=n[2].default,t=te(l,n,n[3],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,r){t&&t.m(i,r),e=!0},p(i,r){t&&t.p&&(!e||r&8)&&le(t,l,i,i[3],e?ne(l,i[3],r,null):ie(i[3]),null)},i(i){e||(v(t,i),e=!0)},o(i){p(t,i),e=!1},d(i){t&&t.d(i)}}}function Wt(n){let e,l;const t=[{name:"chevron-left"},n[1],{iconNode:n[0]}];let i={$$slots:{default:[Nt]},$$scope:{ctx:n}};for(let r=0;r<t.length;r+=1)i=B(i,t[r]);return e=new Xe({props:i}),{c(){P(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,s){q(e,r,s),l=!0},p(r,[s]){const f=s&3?_e(t,[t[0],s&2&&Ge(r[1]),s&1&&{iconNode:r[0]}]):{};s&8&&(f.$$scope={dirty:s,ctx:r}),e.$set(f)},i(r){l||(v(e.$$.fragment,r),l=!0)},o(r){p(e.$$.fragment,r),l=!1},d(r){O(e,r)}}}function It(n,e,l){let{$$slots:t={},$$scope:i}=e;const r=[["path",{d:"m15 18-6-6 6-6"}]];return n.$$set=s=>{l(1,e=B(B({},e),x(s))),"$$scope"in s&&l(3,i=s.$$scope)},e=x(e),[r,e,t,i]}class At extends M{constructor(e){super(),L(this,e,It,Wt,H,{})}}const Tt=At;function Ct(n){let e;const l=n[2].default,t=te(l,n,n[3],null);return{c(){t&&t.c()},l(i){t&&t.l(i)},m(i,r){t&&t.m(i,r),e=!0},p(i,r){t&&t.p&&(!e||r&8)&&le(t,l,i,i[3],e?ne(l,i[3],r,null):ie(i[3]),null)},i(i){e||(v(t,i),e=!0)},o(i){p(t,i),e=!1},d(i){t&&t.d(i)}}}function Dt(n){let e,l;const t=[{name:"chevron-right"},n[1],{iconNode:n[0]}];let i={$$slots:{default:[Ct]},$$scope:{ctx:n}};for(let r=0;r<t.length;r+=1)i=B(i,t[r]);return e=new Xe({props:i}),{c(){P(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,s){q(e,r,s),l=!0},p(r,[s]){const f=s&3?_e(t,[t[0],s&2&&Ge(r[1]),s&1&&{iconNode:r[0]}]):{};s&8&&(f.$$scope={dirty:s,ctx:r}),e.$set(f)},i(r){l||(v(e.$$.fragment,r),l=!0)},o(r){p(e.$$.fragment,r),l=!1},d(r){O(e,r)}}}function jt(n,e,l){let{$$slots:t={},$$scope:i}=e;const r=[["path",{d:"m9 18 6-6-6-6"}]];return n.$$set=s=>{l(1,e=B(B({},e),x(s))),"$$scope"in s&&l(3,i=s.$$scope)},e=x(e),[r,e,t,i]}class Ht extends M{constructor(e){super(),L(this,e,jt,Dt,H,{})}}const Pt=Ht;function Pe(n,e,l){const t=n.slice();return t[18]=e[l],t}function Ve(n){let e,l,t,i;const r=[qt,Vt],s=[];function f(o,a){return o[18]==="left"?0:o[18]==="right"?1:-1}return~(l=f(n))&&(t=s[l]=r[l](n)),{c(){e=W("span"),t&&t.c(),this.h()},l(o){e=I(o,"SPAN",{style:!0,class:!0});var a=z(e);t&&t.l(a),a.forEach(m),this.h()},h(){T(e,"font-size",n[4]),b(e,"class","svelte-1w8ph2u")},m(o,a){E(o,e,a),~l&&s[l].m(e,null),i=!0},p(o,a){let u=l;l=f(o),l===u?~l&&s[l].p(o,a):(t&&(he(),p(s[u],1,1,()=>{s[u]=null}),de()),~l?(t=s[l],t?t.p(o,a):(t=s[l]=r[l](o),t.c()),v(t,1),t.m(e,null)):t=null),(!i||a&16)&&T(e,"font-size",o[4])},i(o){i||(v(t),i=!0)},o(o){p(t),i=!1},d(o){o&&m(e),~l&&s[l].d()}}}function Vt(n){let e,l;return e=new Pt({props:{color:n[5],strokeWidth:n[6]}}),{c(){P(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i&32&&(r.color=t[5]),i&64&&(r.strokeWidth=t[6]),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}function qt(n){let e,l;return e=new Tt({props:{color:n[5],strokeWidth:n[6]}}),{c(){P(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i&32&&(r.color=t[5]),i&64&&(r.strokeWidth=t[6]),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}function qe(n){let e,l=n[9].includes(n[18]),t,i,r,s,f,o,a,u=l&&Ve(n);return{c(){e=W("button"),u&&u.c(),t=G(),this.h()},l(_){e=I(_,"BUTTON",{style:!0,"aria-label":!0,class:!0});var h=z(e);u&&u.l(h),t=X(h),h.forEach(m),this.h()},h(){T(e,"width",n[12](n[18])),T(e,"height",n[11](n[18])),b(e,"aria-label",i=n[18]),b(e,"class",r=n[18]+" "+n[7]+" svelte-1w8ph2u"),e.disabled=s=n[2].includes(n[18]),K(e,"full",n[1])},m(_,h){E(_,e,h),u&&u.m(e,null),j(e,t),f=!0,o||(a=we(e,"click",function(){ve(n[13]("tap",n[18]))&&n[13]("tap",n[18]).apply(this,arguments)}),o=!0)},p(_,h){n=_,h&520&&(l=n[9].includes(n[18])),l?u?(u.p(n,h),h&520&&v(u,1)):(u=Ve(n),u.c(),v(u,1),u.m(e,t)):u&&(he(),p(u,1,1,()=>{u=null}),de()),(!f||h&4104)&&T(e,"width",n[12](n[18])),(!f||h&2056)&&T(e,"height",n[11](n[18])),(!f||h&8&&i!==(i=n[18]))&&b(e,"aria-label",i),(!f||h&136&&r!==(r=n[18]+" "+n[7]+" svelte-1w8ph2u"))&&b(e,"class",r),(!f||h&12&&s!==(s=n[2].includes(n[18])))&&(e.disabled=s),(!f||h&138)&&K(e,"full",n[1])},i(_){f||(v(u),f=!0)},o(_){p(u),f=!1},d(_){_&&m(e),u&&u.d(),o=!1,a()}}}function Ot(n){let e,l,t,i;Ue(n[17]);let r=C(n[3]),s=[];for(let o=0;o<r.length;o+=1)s[o]=qe(Pe(n,r,o));const f=o=>p(s[o],1,1,()=>{s[o]=null});return{c(){e=W("section");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){e=I(o,"SECTION",{style:!0,class:!0});var a=z(e);for(let u=0;u<s.length;u+=1)s[u].l(a);a.forEach(m),this.h()},h(){T(e,"height",n[8]+"px"),b(e,"class","svelte-1w8ph2u"),K(e,"debug",n[0])},m(o,a){E(o,e,a);for(let u=0;u<s.length;u+=1)s[u]&&s[u].m(e,null);l=!0,t||(i=[we(window,"keydown",function(){ve(n[10])&&n[10].apply(this,arguments)}),we(window,"resize",n[17])],t=!0)},p(o,[a]){if(n=o,a&15102){r=C(n[3]);let u;for(u=0;u<r.length;u+=1){const _=Pe(n,r,u);s[u]?(s[u].p(_,a),v(s[u],1)):(s[u]=qe(_),s[u].c(),v(s[u],1),s[u].m(e,null))}for(he(),u=r.length;u<s.length;u+=1)f(u);de()}(!l||a&256)&&T(e,"height",n[8]+"px"),(!l||a&1)&&K(e,"debug",n[0])},i(o){if(!l){for(let a=0;a<r.length;a+=1)v(s[a]);l=!0}},o(o){s=s.filter(Boolean);for(let a=0;a<s.length;a+=1)p(s[a]);l=!1},d(o){o&&m(e),$(s,o),t=!1,lt(i)}}}function Bt(n,e,l){let t,i,r,s,{debug:f=!1}=e,{enableKeyboard:o=!1}=e,{full:a=!1}=e,{showArrows:u=!1}=e,{disable:_=[]}=e,{directions:h=["left","right"]}=e,{size:c="64px"}=e,{arrowSize:d="48px"}=e,{arrowStroke:w="#000"}=e,{arrowStrokeWidth:S="2"}=e,{arrowPosition:N="center"}=e;const A=it();let D;function y(){l(8,D=window.innerHeight)}return n.$$set=g=>{"debug"in g&&l(0,f=g.debug),"enableKeyboard"in g&&l(14,o=g.enableKeyboard),"full"in g&&l(1,a=g.full),"showArrows"in g&&l(15,u=g.showArrows),"disable"in g&&l(2,_=g.disable),"directions"in g&&l(3,h=g.directions),"size"in g&&l(16,c=g.size),"arrowSize"in g&&l(4,d=g.arrowSize),"arrowStroke"in g&&l(5,w=g.arrowStroke),"arrowStrokeWidth"in g&&l(6,S=g.arrowStrokeWidth),"arrowPosition"in g&&l(7,N=g.arrowPosition)},n.$$.update=()=>{n.$$.dirty&65546&&l(12,t=g=>Array.isArray(c)?c[h.indexOf(g)]:a?"100%":c),n.$$.dirty&65538&&l(11,i=g=>["up","down"].includes(g)?c:a?"100%":c),n.$$.dirty&16392&&l(10,r=g=>{const se=g.key.replace("Arrow","").toLowerCase(),me=h.includes(se);o&&me&&(g.preventDefault(),A("tap",se))}),n.$$.dirty&32776&&l(9,s=h.filter(g=>typeof u=="boolean"?u:u.includes(g)))},[f,a,_,h,d,w,S,N,D,s,r,i,t,A,o,u,c,y]}class Kt extends M{constructor(e){super(),L(this,e,Bt,Ot,H,{debug:0,enableKeyboard:14,full:1,showArrows:15,disable:2,directions:3,size:16,arrowSize:4,arrowStroke:5,arrowStrokeWidth:6,arrowPosition:7})}}function Mt(n){let e,l,t,i,r;const s=n[26].default,f=te(s,n,n[25],null);return{c(){e=W("section"),l=W("div"),f&&f.c(),this.h()},l(o){e=I(o,"SECTION",{"aria-label":!0,class:!0});var a=z(e);l=I(a,"DIV",{class:!0,style:!0});var u=z(l);f&&f.l(u),u.forEach(m),a.forEach(m),this.h()},h(){b(l,"class","slides svelte-bu0sdb"),b(l,"style",n[5]),b(e,"aria-label","carousel"),b(e,"class",t="slider "+n[0]+" svelte-bu0sdb"),Ue(()=>n[29].call(e))},m(o,a){E(o,e,a),j(e,l),f&&f.m(l,null),n[27](l),n[28](e),i=nt(e,n[29].bind(e)),r=!0},p(o,a){f&&f.p&&(!r||a[0]&33554432)&&le(f,s,o,o[25],r?ne(s,o[25],a,null):ie(o[25]),null),(!r||a[0]&32)&&b(l,"style",o[5]),(!r||a[0]&1&&t!==(t="slider "+o[0]+" svelte-bu0sdb"))&&b(e,"class",t)},i(o){r||(v(f,o),r=!0)},o(o){p(f,o),r=!1},d(o){o&&m(e),f&&f.d(o),n[27](null),n[28](null),i()}}}function Lt(n,e,l){let t,i,r,s,f,o,a,u,_,h,c,{$$slots:d={},$$scope:w}=e,{direction:S="horizontal"}=e,{duration:N="500ms"}=e,{timing:A="ease"}=e,{count:D=0}=e,{current:y=0}=e;const g=()=>ge(1),se=()=>ge(-1),me=k=>ge(k,!0);let Z=0,J=0,F,U,ke=!1,re,oe,pe,Se=ee(),ye=ee(),Ee=ee(),ze=ee(),Ne=ee();const ge=(k,xe)=>{if(!ke)return!1;const $e=xe?k:J+k;l(14,J=Math.max(0,Math.min(Z-1,$e))),l(6,y=J)},Ye=k=>{ke=k[0].isIntersecting};Fe(()=>{l(13,Z=oe.children.length),l(7,D=Z),Ne.set(D),pe=new IntersectionObserver(Ye,{root:null,rootMargin:"-1px"}),pe.observe(re),l(2,U),l(1,F)});function Ze(k){ce[k?"unshift":"push"](()=>{oe=k,l(4,oe)})}function Je(k){ce[k?"unshift":"push"](()=>{re=k,l(3,re)})}function Qe(){F=this.clientWidth,U=this.clientHeight,l(1,F),l(2,U)}return n.$$set=k=>{"direction"in k&&l(0,S=k.direction),"duration"in k&&l(8,N=k.duration),"timing"in k&&l(9,A=k.timing),"count"in k&&l(7,D=k.count),"current"in k&&l(6,y=k.current),"$$scope"in k&&l(25,w=k.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&8195&&l(24,t=S==="horizontal"?`${Z*F}px`:"100%"),n.$$.dirty[0]&8197&&l(23,i=S==="vertical"?`${Z*U}px`:"100%"),n.$$.dirty[0]&16387&&l(22,r=S==="horizontal"?`${J*F*-1}px`:0),n.$$.dirty[0]&16389&&l(21,s=S==="vertical"?`${J*U*-1}px`:0),n.$$.dirty[0]&16777216&&l(20,f=`width: ${t};`),n.$$.dirty[0]&8388608&&l(19,o=`height: ${i};`),n.$$.dirty[0]&6291456&&l(18,a=`transform: translate3d(${r}, ${s}, 0);`),n.$$.dirty[0]&256&&l(17,u=`transition-duration: ${N};`),n.$$.dirty[0]&512&&l(16,_=`transition-timing-function: ${A};`),n.$$.dirty[0]&2031616&&l(5,h=`${f} ${o} ${a} ${u} ${_}`),n.$$.dirty[0]&1&&Se.set(S),n.$$.dirty[0]&2&&ye.set(F),n.$$.dirty[0]&4&&Ee.set(U),n.$$.dirty[0]&64&&ze.set(y),n.$$.dirty[0]&32768&&st("Slider",c)},l(15,c={dir:Se,cur:ze,w:ye,h:Ee,count:Ne}),[S,F,U,re,oe,h,y,D,N,A,g,se,me,Z,J,c,_,u,a,o,f,s,r,i,t,w,d,Ze,Je,Qe]}class Rt extends M{constructor(e){super(),L(this,e,Lt,Mt,H,{direction:0,duration:8,timing:9,count:7,current:6,next:10,prev:11,jump:12},null,[-1,-1])}get next(){return this.$$.ctx[10]}get prev(){return this.$$.ctx[11]}get jump(){return this.$$.ctx[12]}}function Ft(n,e){const l=["a","button","input","textarea","select","details","[tabindex]:not([tabindex='-1'])"],t=s=>{r.forEach(f=>{s&&s.disable?f.setAttribute("tabindex",-1):f.removeAttribute("tabindex")})},i=l.join(", "),r=[...n.querySelectorAll(i)];return t(e),{update(s){t(s)},destroy(){r.forEach(s=>s.removeAttribute("tabindex"))}}}function Ut(n){let e,l,t,i,r,s,f;const o=n[16].default,a=te(o,n,n[15],null);return{c(){e=W("div"),a&&a.c(),this.h()},l(u){e=I(u,"DIV",{id:!0,class:!0,role:!0,"aria-label":!0,"aria-current":!0});var _=z(e);a&&a.l(_),_.forEach(m),this.h()},h(){b(e,"id",l="slide-"+n[0]),b(e,"class","slide svelte-s7fucb"),b(e,"role","group"),b(e,"aria-label",t="slide "+(n[0]+1)+" of "+n[5]),b(e,"aria-current",n[1]),K(e,"visible",n[1]),T(e,"width",n[4]),T(e,"height",n[3])},m(u,_){E(u,e,_),a&&a.m(e,null),r=!0,s||(f=rt(i=Ft.call(null,e,{disable:n[2]})),s=!0)},p(u,[_]){a&&a.p&&(!r||_&32768)&&le(a,o,u,u[15],r?ne(o,u[15],_,null):ie(u[15]),null),(!r||_&1&&l!==(l="slide-"+u[0]))&&b(e,"id",l),(!r||_&33&&t!==(t="slide "+(u[0]+1)+" of "+u[5]))&&b(e,"aria-label",t),(!r||_&2)&&b(e,"aria-current",u[1]),i&&ve(i.update)&&_&4&&i.update.call(null,{disable:u[2]}),(!r||_&2)&&K(e,"visible",u[1]),_&16&&T(e,"width",u[4]),_&8&&T(e,"height",u[3])},i(u){r||(v(a,u),r=!0)},o(u){p(a,u),r=!1},d(u){u&&m(e),a&&a.d(u),s=!1,f()}}}function Gt(n,e,l){let t,i,r,s,f,o,a,u,_,{$$slots:h={},$$scope:c}=e;const{dir:d,cur:w,w:S,h:N,count:A}=ot("Slider");Q(n,d,y=>l(13,a=y)),Q(n,w,y=>l(11,f=y)),Q(n,S,y=>l(14,u=y)),Q(n,N,y=>l(12,o=y)),Q(n,A,y=>l(5,_=y));let{index:D}=e;return n.$$set=y=>{"index"in y&&l(0,D=y.index),"$$scope"in y&&l(15,c=y.$$scope)},n.$$.update=()=>{n.$$.dirty&24576&&l(4,t=a==="horizontal"?`${u}px`:"100%"),n.$$.dirty&12288&&l(3,i=a==="vertical"?`${o}px`:"100%"),n.$$.dirty&2049&&l(1,r=D===f),n.$$.dirty&2&&l(2,s=!r)},[D,r,s,i,t,_,d,w,S,N,A,f,o,a,u,c,h]}class Xt extends M{constructor(e){super(),L(this,e,Gt,Ut,H,{index:0})}}function Oe(n,e,l){const t=n.slice();return t[8]=e[l],t[10]=l,t}function Be(n,e,l){const t=n.slice();return t[11]=e[l].type,t[12]=e[l].text,t}function Yt(n){let e,l,t=n[12]+"";return{c(){e=W(n[11]),l=new ut(!1),this.h()},l(i){e=I(i,(n[11]||"null").toUpperCase(),{class:!0});var r=z(e);l=at(r,!1),r.forEach(m),this.h()},h(){l.a=null,ct(n[11])(e,{class:"slide-content svelte-x8e1uv"})},m(i,r){E(i,e,r),l.m(t,e)},p:Y,d(i){i&&m(e)}}}function Ke(n){let e=n[11]&&Yt(n);return{c(){e&&e.c()},l(l){e&&e.l(l)},m(l,t){e&&e.m(l,t)},p(l,t){l[11]&&e.p(l,t)},d(l){e&&e.d(l)}}}function Zt(n){let e,l=C(n[8].text),t=[];for(let i=0;i<l.length;i+=1)t[i]=Ke(Be(n,l,i));return{c(){for(let i=0;i<t.length;i+=1)t[i].c();e=G()},l(i){for(let r=0;r<t.length;r+=1)t[r].l(i);e=X(i)},m(i,r){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(i,r);E(i,e,r)},p(i,r){if(r&8){l=C(i[8].text);let s;for(s=0;s<l.length;s+=1){const f=Be(i,l,s);t[s]?t[s].p(f,r):(t[s]=Ke(f),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=l.length}},d(i){i&&m(e),$(t,i)}}}function Me(n){let e,l;return e=new Xt({props:{index:n[10],$$slots:{default:[Zt]},$$scope:{ctx:n}}}),{c(){P(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p(t,i){const r={};i&32768&&(r.$$scope={dirty:i,ctx:t}),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}function Jt(n){let e,l,t=C(n[3]),i=[];for(let s=0;s<t.length;s+=1)i[s]=Me(Oe(n,t,s));const r=s=>p(i[s],1,1,()=>{i[s]=null});return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=R()},l(s){for(let f=0;f<i.length;f+=1)i[f].l(s);e=R()},m(s,f){for(let o=0;o<i.length;o+=1)i[o]&&i[o].m(s,f);E(s,e,f),l=!0},p(s,f){if(f&8){t=C(s[3]);let o;for(o=0;o<t.length;o+=1){const a=Oe(s,t,o);i[o]?(i[o].p(a,f),v(i[o],1)):(i[o]=Me(a),i[o].c(),v(i[o],1),i[o].m(e.parentNode,e))}for(he(),o=t.length;o<i.length;o+=1)r(o);de()}},i(s){if(!l){for(let f=0;f<t.length;f+=1)v(i[f]);l=!0}},o(s){i=i.filter(Boolean);for(let f=0;f<i.length;f+=1)p(i[f]);l=!1},d(s){s&&m(e),$(i,s)}}}function Qt(n){let e,l,t,i,r,s,f,o,a,u;e=new pt({props:{activeSlide:n[1],sections:n[2],allSlides:n[3]}});function _(c){n[6](c)}let h={duration:"0",$$slots:{default:[Jt]},$$scope:{ctx:n}};return n[1]!==void 0&&(h.current=n[1]),i=new Rt({props:h}),n[5](i),ce.push(()=>ht(i,"current",_)),f=new zt({props:{activeSlide:n[1]}}),a=new Kt({props:{debug:!1,full:!0,directions:n[1]===0?["right"]:["left","right"],size:n[1]===0?"100%":["33%","67%"],enableKeyboard:!0,marginTop:0}}),a.$on("tap",n[4]),{c(){P(e.$$.fragment),l=G(),t=W("article"),P(i.$$.fragment),s=G(),P(f.$$.fragment),o=G(),P(a.$$.fragment),this.h()},l(c){V(e.$$.fragment,c),l=X(c),t=I(c,"ARTICLE",{class:!0});var d=z(t);V(i.$$.fragment,d),d.forEach(m),s=X(c),V(f.$$.fragment,c),o=X(c),V(a.$$.fragment,c),this.h()},h(){b(t,"class","svelte-x8e1uv")},m(c,d){q(e,c,d),E(c,l,d),E(c,t,d),q(i,t,null),E(c,s,d),q(f,c,d),E(c,o,d),q(a,c,d),u=!0},p(c,[d]){const w={};d&2&&(w.activeSlide=c[1]),e.$set(w);const S={};d&32768&&(S.$$scope={dirty:d,ctx:c}),!r&&d&2&&(r=!0,S.current=c[1],ft(()=>r=!1)),i.$set(S);const N={};d&2&&(N.activeSlide=c[1]),f.$set(N);const A={};d&2&&(A.directions=c[1]===0?["right"]:["left","right"]),d&2&&(A.size=c[1]===0?"100%":["33%","67%"]),a.$set(A)},i(c){u||(v(e.$$.fragment,c),v(i.$$.fragment,c),v(f.$$.fragment,c),v(a.$$.fragment,c),u=!0)},o(c){p(e.$$.fragment,c),p(i.$$.fragment,c),p(f.$$.fragment,c),p(a.$$.fragment,c),u=!1},d(c){c&&(m(l),m(t),m(s),m(o)),O(e,c),n[5](null),O(i),O(f,c),O(a,c)}}}function xt(n,e,l){let t,i=0;const r=[{title:"Intro",slides:[{i:0,text:[{type:"h1",text:"title"},{type:"p",text:"welcome"}]}]},{title:"Middle",slides:[{i:1,text:[{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"},{type:"p",text:"the quick brown"}]},{i:2,text:[{type:"p",text:"fox jumps over"},{type:"p",text:"fox jumps over"}]},{i:3,text:[{type:"p",text:"the lazy dog"}]}]},{title:"Outro",slides:[{i:4,text:[{type:"h2",text:"the end."}]}]}],s=r.map((u,_)=>u.slides.map(h=>({...h,section:_}))).flat(),f=({detail:u})=>{u==="right"?t.next():t.prev(),window.scrollTo(0,0)};function o(u){ce[u?"unshift":"push"](()=>{t=u,l(0,t)})}function a(u){i=u,l(1,i)}return[t,i,r,s,f,o,a]}class $t extends M{constructor(e){super(),L(this,e,xt,Qt,H,{})}}function el(n){let e,l;return e=new $t({}),{c(){P(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,i){q(e,t,i),l=!0},p:Y,i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){O(e,t)}}}class rl extends M{constructor(e){super(),L(this,e,null,el,H,{})}}export{rl as component};