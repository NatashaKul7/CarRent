import{u as x,j as a,a as p,r as o,b,c as v,L as w}from"./index-8Vk_yq8i.js";import{b as F,g as I,a as M}from"./selectors-w-DAqvTx.js";import{C,a as D,S as N}from"./Search-DnFJPqXP.js";const k=x.button`
  font-size: 16px;
  font-weight: var(--medium-font-weight);
  color: var(--primary-blue);
  text-decoration: underline;
  background-color: transparent;

  &:hover,
  :focus {
    color: var(--hover-blue);
  }
`,B=({onLoadMore:s})=>a.jsx(k,{onClick:s,children:"Load more"}),J=({selectedCar:s})=>{const n=p(F),[d,i]=o.useState([]),[c,u]=o.useState(1),[S,f]=o.useState(!0),[g,h]=o.useState(()=>JSON.parse(localStorage.getItem("favorite"))??[]),[j,l]=o.useState(!1),m=b(),y=t=>g.some(e=>e.id===t);o.useEffect(()=>{n.length===0||s?f(!1):f(!0),s==="All"&&f(!0)},[n,s]),o.useEffect(()=>{(async()=>{l(!0),await m(v({page:c,selectedCar:s==="All"?"":s})).unwrap().then(e=>{s&&i([]),i(r=>[...r,...e]),l(!1)})})()},[m,c,s]),o.useEffect(()=>{localStorage.setItem("favorite",JSON.stringify(g))},[g]);const L=t=>{const e=n.find(r=>r.id===t);e&&h(r=>[...r,e])},E=t=>{h(e=>e.filter(r=>r.id!==t))},A=async()=>{j||(l(!0),await m(v(c+1)).unwrap().then(t=>{i(e=>[...e,...t]),u(e=>e+1),l(!1)}))};return a.jsxs(a.Fragment,{children:[a.jsx(C,{children:d.map(t=>a.jsx(D,{advert:t,addFavorite:L,setFavorite:h,isFavorite:y(t.id),removeFavorite:E},t.id))}),S&&a.jsx(B,{onLoadMore:A})]})},O=x.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
`,H=()=>{const s=p(I),n=p(M),[d,i]=o.useState(""),c=u=>{i(u)};return a.jsxs(O,{className:"container",children:[n&&a.jsx("div",{children:"Error"}),s&&a.jsx(w,{}),a.jsx(N,{onSearch:c}),a.jsx(J,{selectedCar:d})]})};export{H as default};
