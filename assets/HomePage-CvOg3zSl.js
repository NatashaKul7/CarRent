import{u as r,j as e,N as o}from"./index-DcmEWSRS.js";const a=r.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 12px;

  h1 {
    font-size: 36px;
    font-weight: var(--bold-font-weight);
    color: var(--primary-blue);
  }

  h2 {
    font-size: 24px;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
  }

  .button-rent {
    padding: 14px 44px;
    border-radius: 12px;

    font-size: 14px;
    color: var(--primary-white);
    background-color: var(--bg-blue);
  }
  .button-rent:hover {
    background-color: var(--hover-blue);
    box-shadow: var(--btn-box-shadow);
  }
  /* 
  .background {
    background-image: url("../../assets/img/car.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  } */
`,n=()=>e.jsxs(a,{className:"background",children:[e.jsx("h1",{children:"Welcome to the car rent service"}),e.jsx("h2",{children:"Here you can find a car for any occasions"}),e.jsx(o,{to:"/catalog",className:"button-rent",children:"Rent car"})]});export{n as default};
