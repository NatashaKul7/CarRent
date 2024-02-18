import{u as x,j as a,a as v,r as o,b as E,c as m,L as C}from"./index-11Z12L4E.js";import{C as w,a as A,S as F}from"./Search-CgK6Iskd.js";const I=t=>t.adverts.adverts,M=t=>t.adverts.isLoading,b=t=>t.adverts.isError,D=x.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;
`,N=({onLoadMore:t})=>a.jsx(D,{onClick:t,children:"Load more"}),k=({selectedCar:t})=>{const n=v(I),[d,i]=o.useState([]),[c,l]=o.useState(1),[p,h]=o.useState(!0),[u,f]=o.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),g=E(),S=e=>u.some(s=>s.id===e);o.useEffect(()=>{n.length===0?h(!1):h(!0)},[n]),o.useEffect(()=>{(async()=>{await g(m({page:c,selectedCar:t==="All"?"":t})).unwrap().then(s=>{t&&i([]),i(r=>[...r,...s])})})()},[g,c,t]),o.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(u))},[u]);const j=e=>{const s=n.find(r=>r.id===e);s&&f(r=>[...r,s])},y=e=>{f(s=>s.filter(r=>r.id!==e))},L=async()=>{await g(m(c+1)).unwrap().then(e=>{i(s=>[...s,...e]),l(s=>s+1)})};return a.jsx(a.Fragment,{children:a.jsxs(w,{children:[d.map(e=>a.jsx(A,{advert:e,addFavorite:j,setFavorite:f,isFavorite:S(e.id),removeFavorite:y},e.id)),p&&a.jsx(N,{onLoadMore:L})]})})},B=x.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`,P=()=>{const t=v(M),n=v(b),[d,i]=o.useState(""),c=l=>{i(l)};return a.jsxs(B,{className:"container",children:[n&&a.jsx("div",{children:"Error"}),a.jsx(F,{onSearch:c}),a.jsx(k,{selectedCar:d}),t&&a.jsx(C,{})]})};export{P as default};
