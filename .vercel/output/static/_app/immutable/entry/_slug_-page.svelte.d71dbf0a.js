import{S as R,i as q,s as w,k as S,q as d,a as y,l as x,m as E,r as m,h as p,c as B,b as v,D as c,E as h,F as P}from"../chunks/index.ad984dec.js";import{R as D}from"../chunks/Store.424d7f5a.js";import{p as g}from"../chunks/stores.17d2e826.js";function k(i){let a,o,n=i[0].position+"",r,l,t,_,b=i[0].brand_id+"",f;return{c(){a=S("h1"),o=d("Position: "),r=d(n),l=y(),t=S("div"),_=d("Brand id: "),f=d(b)},l(e){a=x(e,"H1",{});var s=E(a);o=m(s,"Position: "),r=m(s,n),s.forEach(p),l=B(e),t=x(e,"DIV",{});var u=E(t);_=m(u,"Brand id: "),f=m(u,b),u.forEach(p)},m(e,s){v(e,a,s),c(a,o),c(a,r),v(e,l,s),v(e,t,s),c(t,_),c(t,f)},p:h,i:h,o:h,d(e){e&&p(a),e&&p(l),e&&p(t)}}}function C(i,a,o){let n,r;return P(i,g,t=>o(1,n=t)),P(i,D,t=>o(2,r=t)),[r.toplists[575].find(t=>t.brand_id===n.params.slug)]}class V extends R{constructor(a){super(),q(this,a,C,k,w,{})}}export{V as default};
