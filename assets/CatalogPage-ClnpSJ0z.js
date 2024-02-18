import{u as x,j as a,a as h,r as o,b as E,c as m,L as A}from"./index-BzRSrW9a.js";import{C as w,a as F,S as I}from"./Search-CjT9H-BX.js";const M=t=>t.adverts.adverts,b=t=>t.adverts.isLoading,C=t=>t.adverts.isError,D=x.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
`,N=({onLoadMore:t})=>a.jsx(D,{onClick:t,children:"Load more"}),k=({selectedCar:t})=>{const n=h(M),[d,i]=o.useState([]),[c,l]=o.useState(1),[p,u]=o.useState(!0),[f,g]=o.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),v=E(),S=e=>f.some(s=>s.id===e);o.useEffect(()=>{n.length===0||t?u(!1):u(!0),t==="All"&&u(!0)},[n,t]),o.useEffect(()=>{(async()=>{await v(m({page:c,selectedCar:t==="All"?"":t})).unwrap().then(s=>{t&&i([]),i(r=>[...r,...s])})})()},[v,c,t]),o.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(f))},[f]);const j=e=>{const s=n.find(r=>r.id===e);s&&g(r=>[...r,s])},y=e=>{g(s=>s.filter(r=>r.id!==e))},L=async()=>{await v(m(c+1)).unwrap().then(e=>{i(s=>[...s,...e]),l(s=>s+1)})};return a.jsxs(a.Fragment,{children:[a.jsx(w,{children:d.map(e=>a.jsx(F,{advert:e,addFavorite:j,setFavorite:g,isFavorite:S(e.id),removeFavorite:y},e.id))}),p&&a.jsx(N,{onLoadMore:L})]})},B=x.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`,P=()=>{const t=h(b),n=h(C),[d,i]=o.useState(""),c=l=>{i(l)};return a.jsxs(B,{className:"container",children:[n&&a.jsx("div",{children:"Error"}),a.jsx(I,{onSearch:c}),a.jsx(k,{selectedCar:d}),t&&a.jsx(A,{})]})};export{P as default};
