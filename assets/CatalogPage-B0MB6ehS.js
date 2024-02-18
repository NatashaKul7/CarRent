import{u as h,j as s,a as v,r as o,b as E,c as x,L as C}from"./index-Cc1PYEAP.js";import{C as A,a as F,S as I}from"./Search-CWw3iwsG.js";const M=t=>t.adverts.adverts,b=t=>t.adverts.isLoading,w=t=>t.adverts.isError,D=h.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
`,N=({onLoadMore:t})=>s.jsx(D,{onClick:t,children:"Load more"}),k=({selectedCar:t})=>{const n=v(M),[d,c]=o.useState([]),[i,l]=o.useState(1),[S,m]=o.useState(!0),[u,f]=o.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),g=E(),p=e=>u.some(a=>a.id===e);o.useEffect(()=>{n.length===0?m(!1):m(!0)},[n]),o.useEffect(()=>{(async()=>{await g(x({page:i,selectedCar:t==="All"?"":t})).unwrap().then(a=>{t&&c([]),c(r=>[...r,...a])})})()},[g,i,t]),o.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(u))},[u]);const j=e=>{const a=n.find(r=>r.id===e);a&&f(r=>[...r,a])},y=e=>{f(a=>a.filter(r=>r.id!==e))},L=()=>{g(x(i+1)),l(e=>e+1)};return s.jsxs(s.Fragment,{children:[s.jsx(A,{children:d.map(e=>s.jsx(F,{advert:e,addFavorite:j,setFavorite:f,isFavorite:p(e.id),removeFavorite:y},e.id))}),S&&s.jsx(N,{onLoadMore:L})]})},B=h.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`,P=()=>{const t=v(b),n=v(w),[d,c]=o.useState(""),i=l=>{c(l)};return s.jsxs(B,{className:"container",children:[n&&s.jsx("div",{children:"Error"}),s.jsx(I,{onSearch:i}),s.jsx(k,{selectedCar:d}),t&&s.jsx(C,{})]})};export{P as default};
