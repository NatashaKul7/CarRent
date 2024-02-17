import{a as u,r,j as s,u as m,b as x,c as p,L as S}from"./index-DcmEWSRS.js";import{C as j,a as h,S as E}from"./Search-CxCkJrBf.js";const v=t=>t.adverts.adverts,L=t=>t.adverts.isLoading,y=t=>t.adverts.isError,C=()=>{const t=u(v),[n,d]=r.useState([]),[a,i]=r.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),g=e=>a.some(o=>o.id===e);r.useEffect(()=>{t&&d(e=>[...e,...t])},[t]),r.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(a))},[a]);const l=e=>{const o=t.find(c=>c.id===e);o&&i(c=>[...c,o])},f=e=>{i(o=>o.filter(c=>c.id!==e))};return s.jsx(s.Fragment,{children:s.jsx(j,{children:n==null?void 0:n.map(e=>s.jsx(h,{advert:e,addFavorite:l,setFavorite:i,isFavorite:g(e.id),removeFavorite:f},e.id))})})},F=m.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`,I=m.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
`,M=({onLoadMore:t})=>s.jsx(I,{onClick:t,children:"Load more"}),w=()=>{const t=u(L),n=u(y),d=u(v),[a,i]=r.useState(1),[g,l]=r.useState(!0),f=x();r.useEffect(()=>{d.length===0?l(!1):l(!0)},[d]),r.useEffect(()=>{f(p(a))},[f,a]);const e=()=>{i(o=>o+1)};return s.jsxs(F,{className:"container",children:[t&&s.jsx(S,{}),n&&s.jsx("div",{children:"Error"}),s.jsx(E,{}),s.jsx(C,{}),g&&s.jsx(M,{onLoadMore:e})]})};export{w as default};
