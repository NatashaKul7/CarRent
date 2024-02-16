import{a as c,j as e,r as C}from"./index-CqoX8Zlz.js";const I=c.li`
  width: 274px;
  height: 426px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .card-image {
    margin-bottom: 14px;

    width: 274px;
    height: 268px;
    border-radius: 14px;
    background-color: #f3f3f2;

    object-fit: cover;
  }

  .img-box {
    position: relative;
  }

  .button-heart {
    position: absolute;
    background-color: transparent;
    top: 14px;
    right: 14px;
  }

  .icon-heart {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: var(--primary-white);
  }
  .favorite {
    width: 18px;
    height: 18px;

    fill: var(--bg-blue);
    stroke: var(--bg-blue);
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
    width: 2px;
    height: 16px;
    color: rgba(18, 20, 23, 0.1);
  }

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
`,L=c.div`
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

  .icon-close {
    position: fixed;
    width: 24px;
    height: 24px;
    top: 16px;
    right: 16px;

    stroke: var(--primary-black);
  }
  .icon-close:hover {
    stroke: var(--primary-blue);
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
`,P="/CarRent/sprite.svg",w=({className:s,id:a})=>e.jsx("svg",{className:s,children:e.jsx("use",{href:`${P}#icon-${a}`})}),R=({open:s,closeModal:a,advert:d})=>{if(!s)return null;C.useEffect(()=>{const o=E=>{E.code==="Escape"&&a()};return window.addEventListener("keydown",o),()=>{window.removeEventListener("keydown",o)}},[a]);const p=o=>{o.currentTarget===o.target&&a(!1)},{id:x,make:n,model:h,year:i,img:t,rentalPrice:m,address:u,rentalCompany:g,type:b,fuelConsumption:j,engineSize:f,description:v,accessories:l,functionalities:r,rentalConditions:S,mileage:z}=d,N=u.split(" "),y=S.split(`
`),k=y[0].split(":");return e.jsx(L,{onClick:p,children:e.jsxs("div",{className:"modal-container",children:[e.jsx("button",{onClick:a,children:e.jsx(w,{className:"icon-close",id:"cross"})}),e.jsx("img",{src:t,alt:n,className:"modal-image"}),e.jsxs("h2",{className:"car-modal-title",children:[n,e.jsxs("span",{children:[e.jsx("span",{className:"custom-nbsp",children:" "})," ",h,","]}),e.jsx("span",{className:"custom-nbsp",children:" "})," ",i]}),e.jsxs("div",{className:"modal-car-details ",children:[e.jsxs("p",{children:[N[0],e.jsx("span",{className:"span-line",children:" | "}),N[1],e.jsx("span",{className:"span-line",children:" | "}),"Id: ",x,e.jsx("span",{className:"span-line",children:" | "}),"Year: ",i,e.jsx("span",{className:"span-line",children:" | "}),"Type: ",b,e.jsx("span",{className:"span-line",children:" | "}),g]}),e.jsxs("p",{children:["FuelConsumption: ",j,e.jsx("span",{className:"span-line",children:" | "}),"EngineSize: ",f]})]}),e.jsx("p",{className:"car-description",children:v}),e.jsx("h3",{className:"accessories-title",children:"Accessories and functionalities:"}),e.jsxs("div",{className:"accessories-box",children:[e.jsx("p",{children:l&&l.join(" | ")}),e.jsxs("p",{children:[" ",r&&r.join(" | ")]})]}),e.jsx("h3",{className:"rental-cond-title",children:"Rental Conditions:"}),e.jsxs("div",{className:"rental-cond-box",children:[e.jsxs("p",{className:"condition",children:[k[0],": ",e.jsx("span",{className:"special",children:k[1]})]}),e.jsxs("p",{className:"condition",children:[" ",y[1]]}),e.jsxs("p",{className:"condition",children:[" ",y[2]]}),e.jsxs("p",{className:"condition",children:["Mileage:"," ",e.jsx("span",{className:"span-numbers",children:new Intl.NumberFormat("en").format(z)})]}),e.jsxs("p",{className:"condition",children:["Price: ",e.jsxs("span",{className:"span-numbers",children:[m.slice(1),"$"]})]})]}),e.jsx("a",{href:"tel:+380730000000",className:"rental-button",children:"Rental car"})]})})},B=({advert:s,addFavorite:a,removeFavorite:d,isFavorite:p})=>{const[x,n]=C.useState(!1),h=()=>{n(!1)},{make:i,model:t,year:m,img:u,rentalPrice:g,address:b,rentalCompany:j,type:f,mileage:v,functionalities:l}=s,r=b.split(" ");return e.jsx(e.Fragment,{children:e.jsxs(I,{children:[e.jsxs("div",{className:"img-box",children:[e.jsx("img",{src:u,alt:i,className:"card-image"}),p?e.jsx("button",{className:"button-heart",onClick:()=>d(s.id),children:e.jsx(w,{className:"favorite",id:"heart"})}):e.jsx("button",{className:"button-heart",onClick:()=>a(s.id),children:e.jsx(w,{className:"icon-heart",id:"heart"})}),e.jsxs("div",{className:"car-info",children:[e.jsxs("h2",{children:[i,e.jsxs("span",{children:[e.jsx("span",{className:"custom-nbsp",children:" "})," ",t,","]}),e.jsx("span",{className:"custom-nbsp",children:" "})," ",m]}),e.jsx("h2",{children:g})]}),e.jsxs("div",{className:"car-details",children:[e.jsxs("p",{children:[r[3],e.jsx("span",{className:"span-line",children:" | "}),r[4],e.jsx("span",{className:"span-line",children:" | "}),j]}),e.jsxs("p",{children:[f,e.jsx("span",{className:"span-line",children:" | "}),t,e.jsx("span",{className:"span-line",children:" | "}),v,e.jsx("span",{className:"span-line",children:" | "}),l[0]]})]})]}),e.jsx("button",{className:"button-card",onClick:()=>n(!0),children:"Learn more"}),e.jsx(R,{open:x,closeModal:h,advert:s})]})})},F=c.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 274px);
  grid-auto-rows: 426px;
  grid-gap: 50px 29px;

  margin-bottom: 100px;
  /* } */
`,$=c.div`
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
`,M=()=>e.jsxs($,{children:[e.jsxs("label",{children:["Car brand",e.jsxs("select",{name:"car-model",id:"",children:[e.jsx("option",{value:"",children:"Enter the text"}),e.jsx("option",{value:"dog",children:"Buick"}),e.jsx("option",{value:"cat",children:"Volvo"}),e.jsx("option",{value:"hamster",children:"Subaru"}),e.jsx("option",{value:"parrot",children:"Mitsubishi"}),e.jsx("option",{value:"spider",children:"Nissan"}),e.jsx("option",{value:"goldfish",children:"Lincoln"})]})]}),e.jsxs("label",{children:["Price 1/hour",e.jsx("select",{name:"hour-price",id:"",children:e.jsx("option",{value:"",children:"To $"})})]}),e.jsx("button",{className:"button-search",children:"Search"})]});export{F as C,M as S,B as a};
