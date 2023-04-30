import{M as F,N as tt,S as X,i as Y,s as Z,k as v,C as L,a as I,q as U,l as g,m as _,D as j,h as f,c as $,r as A,n,p as Q,b as H,F as r,O as W,u as J,G as q,P as et,H as st,y as rt,Q as at,z as nt,E as ot,A as lt,g as it,d as ct,B as dt}from"../chunks/index.af796089.js";import{w as ut}from"../chunks/index.fea36444.js";function K(t){return Object.prototype.toString.call(t)==="[object Date]"}function V(t,s,e,a){if(typeof e=="number"||K(e)){const o=a-e,l=(e-s)/(t.dt||1/60),c=t.opts.stiffness*o,i=t.opts.damping*l,p=(c-i)*t.inv_mass,u=(l+p)*t.dt;return Math.abs(u)<t.opts.precision&&Math.abs(o)<t.opts.precision?a:(t.settled=!1,K(e)?new Date(e.getTime()+u):e+u)}else{if(Array.isArray(e))return e.map((o,l)=>V(t,s[l],e[l],a[l]));if(typeof e=="object"){const o={};for(const l in e)o[l]=V(t,s[l],e[l],a[l]);return o}else throw new Error(`Cannot spring ${typeof e} values`)}}function ft(t,s={}){const e=ut(t),{stiffness:a=.15,damping:o=.8,precision:l=.01}=s;let c,i,p,u=t,k=t,S=1,x=0,E=!1;function O(h,m={}){k=h;const T=p={};return t==null||m.hard||b.stiffness>=1&&b.damping>=1?(E=!0,c=F(),u=h,e.set(t=k),Promise.resolve()):(m.soft&&(x=1/((m.soft===!0?.5:+m.soft)*60),S=0),i||(c=F(),E=!1,i=tt(M=>{if(E)return E=!1,i=null,!1;S=Math.min(S+x,1);const w={inv_mass:S,opts:b,settled:!0,dt:(M-c)*60/1e3},y=V(w,u,t,k);return c=M,u=t,e.set(t=y),w.settled&&(i=null),!w.settled})),new Promise(M=>{i.promise.then(()=>{T===p&&M()})}))}const b={set:O,update:(h,m)=>O(h(k,t),m),subscribe:e.subscribe,stiffness:a,damping:o,precision:l};return b}function mt(t){let s,e,a,o,l,c,i,p,u=Math.floor(t[1]+1)+"",k,S,x,E=Math.floor(t[1])+"",O,b,h,m,T,M,w;return{c(){s=v("div"),e=v("button"),a=L("svg"),o=L("path"),l=I(),c=v("div"),i=v("div"),p=v("strong"),k=U(u),S=I(),x=v("strong"),O=U(E),b=I(),h=v("button"),m=L("svg"),T=L("path"),this.h()},l(y){s=g(y,"DIV",{class:!0});var d=_(s);e=g(d,"BUTTON",{"aria-label":!0,class:!0});var C=_(e);a=j(C,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var B=_(a);o=j(B,"path",{d:!0,class:!0}),_(o).forEach(f),B.forEach(f),C.forEach(f),l=$(d),c=g(d,"DIV",{class:!0});var N=_(c);i=g(N,"DIV",{class:!0,style:!0});var R=_(i);p=g(R,"STRONG",{class:!0,"aria-hidden":!0});var D=_(p);k=A(D,u),D.forEach(f),S=$(R),x=g(R,"STRONG",{class:!0});var P=_(x);O=A(P,E),P.forEach(f),R.forEach(f),N.forEach(f),b=$(d),h=g(d,"BUTTON",{"aria-label":!0,class:!0});var G=_(h);m=j(G,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var z=_(m);T=j(z,"path",{d:!0,class:!0}),_(T).forEach(f),z.forEach(f),G.forEach(f),d.forEach(f),this.h()},h(){n(o,"d","M0,0.5 L1,0.5"),n(o,"class","svelte-y96mxt"),n(a,"aria-hidden","true"),n(a,"viewBox","0 0 1 1"),n(a,"class","svelte-y96mxt"),n(e,"aria-label","Decrease the counter by one"),n(e,"class","svelte-y96mxt"),n(p,"class","hidden svelte-y96mxt"),n(p,"aria-hidden","true"),n(x,"class","svelte-y96mxt"),n(i,"class","counter-digits svelte-y96mxt"),Q(i,"transform","translate(0, "+100*t[2]+"%)"),n(c,"class","counter-viewport svelte-y96mxt"),n(T,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),n(T,"class","svelte-y96mxt"),n(m,"aria-hidden","true"),n(m,"viewBox","0 0 1 1"),n(m,"class","svelte-y96mxt"),n(h,"aria-label","Increase the counter by one"),n(h,"class","svelte-y96mxt"),n(s,"class","counter svelte-y96mxt")},m(y,d){H(y,s,d),r(s,e),r(e,a),r(a,o),r(s,l),r(s,c),r(c,i),r(i,p),r(p,k),r(i,S),r(i,x),r(x,O),r(s,b),r(s,h),r(h,m),r(m,T),M||(w=[W(e,"click",t[4]),W(h,"click",t[5])],M=!0)},p(y,[d]){d&2&&u!==(u=Math.floor(y[1]+1)+"")&&J(k,u),d&2&&E!==(E=Math.floor(y[1])+"")&&J(O,E),d&4&&Q(i,"transform","translate(0, "+100*y[2]+"%)")},i:q,o:q,d(y){y&&f(s),M=!1,et(w)}}}function pt(t,s){return(t%s+s)%s}function ht(t,s,e){let a,o,l=0;const c=ft();st(t,c,u=>e(1,o=u));const i=()=>e(0,l-=1),p=()=>e(0,l+=1);return t.$$.update=()=>{t.$$.dirty&1&&c.set(l),t.$$.dirty&2&&e(2,a=pt(o,1))},[l,o,a,c,i,p]}class _t extends X{constructor(s){super(),Y(this,s,ht,mt,Z,{})}}const vt=""+new URL("../assets/svelte-welcome.c18bcf5a.webp",import.meta.url).href,gt=""+new URL("../assets/svelte-welcome.6c300099.png",import.meta.url).href;function yt(t){let s,e,a,o,l,c,i,p,u,k,S,x,E,O,b,h,m,T,M,w,y;return w=new _t({}),{c(){s=v("meta"),e=I(),a=v("section"),o=v("h1"),l=v("span"),c=v("picture"),i=v("source"),p=I(),u=v("img"),S=U(`

		to exiting new`),x=v("br"),E=U("Site"),O=I(),b=v("h2"),h=U("try editing "),m=v("strong"),T=U("src/routes/+page.svelte"),M=I(),rt(w.$$.fragment),this.h()},l(d){const C=at("svelte-t32ptj",document.head);s=g(C,"META",{name:!0,content:!0}),C.forEach(f),e=$(d),a=g(d,"SECTION",{class:!0});var B=_(a);o=g(B,"H1",{class:!0});var N=_(o);l=g(N,"SPAN",{class:!0});var R=_(l);c=g(R,"PICTURE",{});var D=_(c);i=g(D,"SOURCE",{srcset:!0,type:!0}),p=$(D),u=g(D,"IMG",{src:!0,alt:!0,class:!0}),D.forEach(f),R.forEach(f),S=A(N,`

		to exiting new`),x=g(N,"BR",{}),E=A(N,"Site"),N.forEach(f),O=$(B),b=g(B,"H2",{});var P=_(b);h=A(P,"try editing "),m=g(P,"STRONG",{});var G=_(m);T=A(G,"src/routes/+page.svelte"),G.forEach(f),P.forEach(f),M=$(B),nt(w.$$.fragment,B),B.forEach(f),this.h()},h(){document.title="Home",n(s,"name","description"),n(s,"content","Svelte demo app"),n(i,"srcset",vt),n(i,"type","image/webp"),ot(u.src,k=gt)||n(u,"src",k),n(u,"alt","Welcome"),n(u,"class","svelte-19xx0bt"),n(l,"class","welcome svelte-19xx0bt"),n(o,"class","svelte-19xx0bt"),n(a,"class","svelte-19xx0bt")},m(d,C){r(document.head,s),H(d,e,C),H(d,a,C),r(a,o),r(o,l),r(l,c),r(c,i),r(c,p),r(c,u),r(o,S),r(o,x),r(o,E),r(a,O),r(a,b),r(b,h),r(b,m),r(m,T),r(a,M),lt(w,a,null),y=!0},p:q,i(d){y||(it(w.$$.fragment,d),y=!0)},o(d){ct(w.$$.fragment,d),y=!1},d(d){f(s),d&&f(e),d&&f(a),dt(w)}}}class wt extends X{constructor(s){super(),Y(this,s,null,yt,Z,{})}}export{wt as default};
