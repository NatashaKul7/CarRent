import{u as c,r as n,j as e,a as u,b as f,c as m}from"./index-DRYSheQF.js";import{C as x,a as v,S as p}from"./Search-fyElmyNA.js";const j=t=>t.adverts.adverts,h=t=>t.adverts.isLoading,S=()=>{const t=c(j),[s,i]=n.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),d=o=>s.some(a=>a.id===o);n.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(s))},[s]);const l=o=>{const a=t.find(r=>r.id===o);a&&i(r=>[...r,a])},g=o=>{i(a=>a.filter(r=>r.id!==o))};return e.jsx(x,{children:t==null?void 0:t.map(o=>e.jsx(v,{advert:o,addFavorite:l,setFavorite:i,isFavorite:d(o.id),removeFavorite:g},o.id))})},L=u.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
`,C=({onLoadMore:t})=>e.jsx(L,{onClick:t,children:"Load more"}),y=()=>{const t=c(h),s=f();return n.useEffect(()=>{s(m())},[s]),e.jsx("div",{className:"container",children:t?e.jsx("div",{children:"loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx(S,{}),e.jsx(C,{})]})})};export{y as default};
