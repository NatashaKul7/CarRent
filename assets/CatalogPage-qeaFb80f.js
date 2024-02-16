import{u,r as i,j as s,a as m,b as v,c as x}from"./index-CqoX8Zlz.js";import{C as p,a as S,S as j}from"./Search-MGi20FMc.js";const h=t=>t.adverts.adverts,L=t=>t.adverts.isLoading,C=()=>{const t=u(h),[o,d]=i.useState([]),[a,n]=i.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),l=e=>a.some(r=>r.id===e);i.useEffect(()=>{t&&d(e=>[...e,...t])},[t]),i.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(a))},[a]);const f=e=>{const r=t.find(c=>c.id===e);r&&n(c=>[...c,r])},g=e=>{n(r=>r.filter(c=>c.id!==e))};return s.jsx(p,{children:o==null?void 0:o.map(e=>s.jsx(S,{advert:e,addFavorite:f,setFavorite:n,isFavorite:l(e.id),removeFavorite:g},e.id))})},F=m.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
`,E=({onLoadMore:t})=>s.jsx(F,{onClick:t,children:"Load more"}),I=()=>{const t=u(L),[o,d]=i.useState(1),a=v();i.useEffect(()=>{a(x(o))},[a,o]);const n=()=>{d(l=>l+1)};return s.jsx("div",{className:"container",children:t?s.jsx("div",{children:"loading..."}):s.jsxs(s.Fragment,{children:[s.jsx(j,{}),s.jsx(C,{}),s.jsx(E,{onLoadMore:n})]})})};export{I as default};
