import{u as c,r as f,j as e,a as C,b as L,c as P}from"./index-CEeb2Jqm.js";const F=a=>a.adverts.adverts,I=a=>a.adverts.isLoading,A=c.li`
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-image {
    position: relative;
    margin-bottom: 14px;

    width: 274px;
    height: 268px;
    border-radius: 14px;
    background-color: #f3f3f2;

    object-fit: cover;
  }

  .car-info {
    display: flex;
    justify-content: space-between;
    padding-right: 9px;
    margin-bottom: 8px;

    font-size: 16px;
    font-weight: (--medium-font-weight);

    span {
      color: var(--primary-blue);
    }
  }
  .custom-nbsp {
    font-size: 3px;
  }

  .car-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
    /* margin-bottom: 28px; */

    color: var(--primary-grey);
  }

  .span-line {
    width: 1px;
    height: 16px;
    color: rgba(18, 20, 23, 0.1);
  }

  /* .icon-heart {
    position: absolute;
    top: 0;
    right: 0;
  } */

  .button-card {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    /* height: auto; */
    padding-top: 12px;
    padding-bottom: 12px;

    font-size: 14px;
    line-height: 143%;
    font-weight: var(--bold-font-weight);
    color: var(--primary-white);
    background-color: var(--bg-blue);
    border-radius: 12px;
  }

  .button-card:hover {
    background-color: var(--hover-blue);
    box-shadow: var(--btn-box-shadow);
  }
`,B=c.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;

  .modal-container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    max-width: 541px;
    padding: 40px;
    background-color: var(--primary-white);
    border-radius: 24px;
  }

  .button-close {
    position: fixed;
    top: 16px;
    right: 16px;
  }

  .modal-image {
    margin-bottom: 14px;

    width: 461px;
    height: 268px;
    border-radius: 14px;
    background-color: #f3f3f2;

    object-fit: cover;
  }

  .car-modal-title {
    font-size: 18px;
    font-weight: var(--medium-font-weight);
    margin-bottom: 8px;

    span {
      color: var(--primary-blue);
    }
  }

  .modal-car-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 14px;

    color: var(--primary-grey);
  }

  .car-description {
    font-size: 14px;
    color: var(--primary-black);

    margin-bottom: 24px;
  }

  .accessories-title,
  .rental-cond-title {
    font-size: 14px;
    font-weight: var(--medium-font-weight);

    margin-bottom: 8px;
  }

  .accessories-box {
    display: flex;
    flex-direction: column;
    color: var(--primary-grey);

    margin-bottom: 24px;
  }

  .rental-cond-box {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;

    margin-bottom: 24px;
  }

  .condition {
    padding: 7px 14px;
    background-color: var(--bg-light-grey);
    border-radius: 35px;
  }

  .span-numbers,
  .special {
    color: var(--primary-blue);
    font-weight: var(--bold-font-weight);
  }

  .rental-button {
    font-size: 14px;
    border-radius: 12px;
    padding: 12px 50px;
    width: 168px;
    height: 44px;
    font-weight: var(--bold-font-weight);
    padding: 12px, 50px;
    color: var(--primary-white);
    background-color: var(--bg-blue);
  }

  /* body.active-modal {
    overflow-y: hidden;
  } */
`,M=({open:a,closeModal:s,advert:t})=>{if(!a)return null;f.useEffect(()=>{const n=r=>{r.code==="Escape"&&s()};return window.addEventListener("keydown",n),()=>{window.removeEventListener("keydown",n)}},[s]);const d=n=>{n.currentTarget===n.target&&s(!1)},{id:o,make:i,model:p,year:l,img:x,rentalPrice:m,address:h,rentalCompany:u,type:g,fuelConsumption:b,engineSize:z,description:S,accessories:v,functionalities:w,rentalConditions:y,mileage:E}=t;return e.jsx(B,{onClick:d,children:e.jsxs("div",{className:"modal-container",children:[e.jsx("button",{onClick:s,className:"button-close",children:"Close"}),e.jsx("img",{src:x,alt:i,className:"modal-image"}),e.jsxs("h2",{className:"car-modal-title",children:[i,e.jsxs("span",{children:[e.jsx("span",{className:"custom-nbsp",children:" "})," ",p,","]}),e.jsx("span",{className:"custom-nbsp",children:" "})," ",l]}),e.jsxs("div",{className:"modal-car-details ",children:[e.jsxs("p",{children:[h.split(" ").slice(-2).join(" ").replace(","," |"),e.jsx("span",{className:"span-line",children:" | "}),"Id: ",o,e.jsx("span",{className:"span-line",children:" | "}),"Year: ",l,e.jsx("span",{className:"span-line",children:" | "}),"Type: ",g,e.jsx("span",{className:"span-line",children:" | "}),u]}),e.jsxs("p",{children:["FuelConsumption: ",b,e.jsx("span",{className:"span-line",children:" | "}),"EngineSize: ",z]})]}),e.jsx("p",{className:"car-description",children:S}),e.jsx("h3",{className:"accessories-title",children:"Accessories and functionalities:"}),e.jsxs("div",{className:"accessories-box",children:[e.jsx("p",{children:v&&v.join(" | ")}),e.jsxs("p",{children:[" ",w&&w.join(" | ")]})]}),e.jsx("h3",{className:"rental-cond-title",children:"Rental Conditions:"}),e.jsxs("div",{className:"rental-cond-box",children:[y&&y.split(`
`).map((n,r)=>{const j=n.split(":"),N=j[0].trim(),k=j.length>1?j[1].trim():"";return e.jsxs("p",{className:"condition",children:[r===0?`${N}: `:N,r===0?e.jsx("span",{className:"special",children:k}):k]},r)}),e.jsxs("p",{className:"condition",children:["Mileage:"," ",e.jsx("span",{className:"span-numbers",children:new Intl.NumberFormat("en").format(E)})]}),e.jsxs("p",{className:"condition",children:["Price: ",e.jsxs("span",{className:"span-numbers",children:[m.slice(1),"$"]})]})]}),e.jsx("a",{href:"tel:+380730000000",className:"rental-button",children:"Rental car"})]})})},R=({advert:a})=>{const[s,t]=f.useState(!1),d=()=>{t(!1)},{make:o,model:i,year:p,img:l,rentalPrice:x,address:m,rentalCompany:h,type:u,mileage:g,functionalities:b}=a;return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsxs("div",{children:[e.jsx("img",{src:l,alt:o,className:"card-image"}),e.jsxs("div",{className:"car-info",children:[e.jsxs("h2",{children:[o,e.jsxs("span",{children:[e.jsx("span",{className:"custom-nbsp",children:" "})," ",i,","]}),e.jsx("span",{className:"custom-nbsp",children:" "})," ",p]}),e.jsx("h2",{children:x})]}),e.jsxs("div",{className:"car-details",children:[e.jsxs("p",{children:[m.split(" ").slice(-2).join(" ").replace(","," |"),e.jsx("span",{className:"span-line",children:" | "}),h]}),e.jsxs("p",{children:[u,e.jsx("span",{className:"span-line",children:" | "}),i,e.jsx("span",{className:"span-line",children:" | "}),g,e.jsx("span",{className:"span-line",children:" | "}),b[0]]})]})]}),e.jsx("button",{className:"button-card",onClick:()=>t(!0),children:"Learn more"}),e.jsx(M,{open:s,closeModal:d,advert:a})]})})},T=c.div`
  display: flex;
  flex-direction: column;
  gap: 100px;

  margin-bottom: 150px;
  /* justify-content: center; */

  /* width: 274px;
  height: 426px; */

  /* .card-list {
    display: flex;
    flex-wrap: wrap;
    row-gap: 50px;
    column-gap: 29px;
  } */

  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 274px);
    grid-auto-rows: 426px;
    grid-gap: 50px 29px;
  }

  .button-load-more {
    font-size: 16px;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
    text-decoration: underline;
    background-color: transparent;
  }
`,$=()=>{const a=C(F);return e.jsxs(T,{children:[e.jsx("ul",{className:"card-list",children:a==null?void 0:a.map(s=>e.jsx(R,{id:s.id,advert:s},s.id))}),e.jsx("button",{className:"button-load-more",children:"Load more"})]})},D=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 50px;

  .button-search {
    width: 136px;
    padding: 14px 44px;
    border-radius: 12px;

    font-size: 14px;
    color: var(--primary-white);
    background-color: var(--bg-blue);
  }

  .button-search:hover {
    background-color: var(--hover-blue);
    box-shadow: var(--btn-box-shadow);
  }
`,O=()=>e.jsxs(D,{children:[e.jsxs("label",{children:["Car brand",e.jsxs("select",{name:"car-model",id:"",children:[e.jsx("option",{value:"",children:"Enter the text"}),e.jsx("option",{value:"dog",children:"Buick"}),e.jsx("option",{value:"cat",children:"Volvo"}),e.jsx("option",{value:"hamster",children:"Subaru"}),e.jsx("option",{value:"parrot",children:"Mitsubishi"}),e.jsx("option",{value:"spider",children:"Nissan"}),e.jsx("option",{value:"goldfish",children:"Lincoln"})]})]}),e.jsxs("label",{children:["Price 1/hour",e.jsx("select",{name:"hour-price",id:"",children:e.jsx("option",{value:"",children:"To $"})})]}),e.jsx("button",{className:"button-search",children:"Search"})]}),K=()=>{const a=C(I),s=L();return f.useEffect(()=>{s(P())},[s]),e.jsx("div",{className:"container",children:a?e.jsx("div",{children:"loading..."}):e.jsxs(e.Fragment,{children:[e.jsx(O,{}),e.jsx($,{})]})})};export{K as default};
