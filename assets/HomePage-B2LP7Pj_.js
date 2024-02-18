import{u as t,j as e,N as o}from"./index-BzRSrW9a.js";const i="/CarRent/assets/white-D-sGmAAp.jpg",r=t.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;

  height: auto;

  background-image: url(${i});
  background-color: #000000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  h1 {
    font-size: 28px;
    text-align: center;
    font-weight: var(--bold-font-weight);
    color: var(--primary-blue);
    margin-top: 50px;
  }

  h2 {
    font-size: 18px;
    max-width: 700px;

    text-align: center;
    font-weight: var(--medium-font-weight);
    color: var(--primary-blue);
    margin-bottom: 24px;
  }

  .home-description {
    padding: 24px;
    margin-bottom: 12px;

    max-width: 700px;
    background-color: RGBA(52, 112, 255, 0.8);
    color: var(--primary-white);
    border-radius: 14px;

    p {
      font-size: 14px;
      font-weight: var(--medium-font-weight);
      margin-bottom: 8px;
    }

    li {
      margin-left: 28px;
      list-style: disc;
    }
    ul {
      margin-bottom: 16px;
    }
  }

  .button-rent {
    padding: 8px 12px;
    font-size: 14px;
    color: var(--primary-white);
    background-color: var(--bg-blue);
    border-radius: 14px;
    margin-bottom: 24px;
  }
  .button-rent:hover {
    background-color: var(--hover-blue);
    box-shadow: var(--btn-box-shadow);
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 36px;
    }

    h2 {
      font-size: 28px;
      max-width: 700px;
      margin-bottom: 30px;
    }

    .home-description {
      font-size: 16px;
      margin-bottom: 24px;

      p {
        font-size: 18px;
        font-weight: var(--medium-font-weight);
        margin-bottom: 8px;
      }

      li {
        margin-left: 28px;
        list-style: disc;
      }
      ul {
        margin-bottom: 16px;
      }
    }

    .button-rent {
      padding: 14px 32px;
      font-size: 18px;
    }
  }

  @media (min-width: 1440px) {
    h1 {
      font-size: 48px;
      margin-top: 50px;
    }

    h2 {
    }

    .home-description {
      font-size: 26px;

      p {
        font-size: 28px;
        font-weight: var(--medium-font-weight);
        margin-bottom: 8px;
      }

      li {
        margin-left: 28px;
        list-style: disc;
      }
      ul {
        margin-bottom: 16px;
      }
    }
  }
`,a=()=>e.jsxs(r,{className:"home-page",children:[e.jsx("h1",{className:"home-title",children:"Welcome to our car rental service!"}),e.jsx("h2",{children:"We offer a convenient and reliable way to access cars for your travels or business"}),e.jsxs("div",{className:"home-description",children:[e.jsx("p",{children:" Our service works quickly and efficiently:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Choose a car"}),e.jsx("li",{children:"Reserve it online"}),e.jsx("li",{children:"Get the keys"})]}),e.jsx("p",{children:"We strive to make your journey as comfortable as possible, providing you with access to a wide selection of cars at affordable prices."}),e.jsx("p",{children:"Trust us with your car rental needs, and we will do everything possible to ensure you have a safe and convenient trip."})]}),e.jsx(o,{to:"/catalog",className:"button-rent",children:"Rent car"})]});export{a as default};
