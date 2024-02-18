import{u as v,j as o,a as m,r as a,b as E,c as p,L as A}from"./index-CrKA7l4k.js";import{b,g as w,a as F}from"./selectors-w-DAqvTx.js";import{C as I,a as M,S as C}from"./Search-CBRkmc3d.js";const D=v.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;

  &:hover,
  :focus {
    color: var(--hover-blue);
  }
`,N=({onLoadMore:s})=>o.jsx(D,{onClick:s,children:"Load more"}),k=({selectedCar:s})=>{const n=m(b),[d,i]=a.useState([]),[c,l]=a.useState(1),[x,u]=a.useState(!0),[f,g]=a.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),h=E(),S=t=>f.some(e=>e.id===t);a.useEffect(()=>{n.length===0||s?u(!1):u(!0),s==="All"&&u(!0)},[n,s]),a.useEffect(()=>{(async()=>{await h(p({page:c,selectedCar:s==="All"?"":s})).unwrap().then(e=>{s&&i([]),i(r=>[...r,...e])})})()},[h,c,s]),a.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(f))},[f]);const j=t=>{const e=n.find(r=>r.id===t);e&&g(r=>[...r,e])},y=t=>{g(e=>e.filter(r=>r.id!==t))},L=async()=>{await h(p(c+1)).unwrap().then(t=>{i(e=>[...e,...t]),l(e=>e+1)})};return o.jsxs(o.Fragment,{children:[o.jsx(I,{children:d.map(t=>o.jsx(M,{advert:t,addFavorite:j,setFavorite:g,isFavorite:S(t.id),removeFavorite:y},t.id))}),x&&o.jsx(N,{onLoadMore:L})]})},B=v.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`,q=()=>{const s=m(w),n=m(F),[d,i]=a.useState(""),c=l=>{i(l)};return o.jsxs(B,{className:"container",children:[n&&o.jsx("div",{children:"Error"}),s&&o.jsx(A,{}),o.jsx(C,{onSearch:c}),o.jsx(k,{selectedCar:d})]})};export{q as default};
