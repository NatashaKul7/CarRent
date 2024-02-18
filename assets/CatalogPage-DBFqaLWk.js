import{u as x,j as a,a as h,r as o,b as E,c as p,L as A}from"./index-BYipWedC.js";import{b as w,g as F,a as b}from"./selectors-w-DAqvTx.js";import{C as I,a as M,S as C}from"./Search-B2u6Gj67.js";const D=x.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
`,N=({onLoadMore:s})=>a.jsx(D,{onClick:s,children:"Load more"}),k=({selectedCar:s})=>{const n=h(w),[d,i]=o.useState([]),[c,l]=o.useState(1),[S,u]=o.useState(!0),[f,g]=o.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),m=E(),v=t=>f.some(e=>e.id===t);o.useEffect(()=>{n.length===0||s?u(!1):u(!0),s==="All"&&u(!0)},[n,s]),o.useEffect(()=>{(async()=>{await m(p({page:c,selectedCar:s==="All"?"":s})).unwrap().then(e=>{s&&i([]),i(r=>[...r,...e])})})()},[m,c,s]),o.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(f))},[f]);const j=t=>{const e=n.find(r=>r.id===t);e&&g(r=>[...r,e])},y=t=>{g(e=>e.filter(r=>r.id!==t))},L=async()=>{await m(p(c+1)).unwrap().then(t=>{i(e=>[...e,...t]),l(e=>e+1)})};return a.jsxs(a.Fragment,{children:[a.jsx(I,{children:d.map(t=>a.jsx(M,{advert:t,addFavorite:j,setFavorite:g,isFavorite:v(t.id),removeFavorite:y},t.id))}),S&&a.jsx(N,{onLoadMore:L})]})},B=x.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`,q=()=>{const s=h(F),n=h(b),[d,i]=o.useState(""),c=l=>{i(l)};return a.jsxs(B,{className:"container",children:[n&&a.jsx("div",{children:"Error"}),s&&a.jsx(A,{}),a.jsx(C,{onSearch:c}),a.jsx(k,{selectedCar:d})]})};export{q as default};
