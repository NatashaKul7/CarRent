import { createGlobalStyle } from "styled-components";
import Regular from "./assets/font/Manrope-Regular.ttf";
import Medium from "./assets/font/Manrope-Medium.ttf";
import SemiBold from "./assets/font/Manrope-SemiBold.ttf";
import "modern-normalize/modern-normalize.css";
import "./index.css";

export const GlobalStyle = createGlobalStyle`
:root {

       /* FONTS */
  --standard-font-size: 12px;
  --standard-line-height: 1.5;
  --regular-font-weight: 400;
  --medium-font-weight: 500;
  --bold-font-weight: 600;

  /* COLORS */
  /* * Primary colors: */

  --primary-grey: #8a8a89;
  --primary-black: #121417;
  --primary-blue: #3470ff;
  --primary-white: #ffffff;
  --primary-light-grey: #8a8a89

  /* * Secondary colors: */

  --bg-white: #f7f7fb;
  --bg-light-grey: #f9f9f9;;
  --bg-blue: #3470ff;
  --hover-blue: #0b44cd;



  /* SHADOW */
  --btn-box-shadow: 0 4px 8px #3470ff;
  --btn-box-shadow-hover: 0 4px 14px #3470ff;
}


     @font-face {
         font-family: 'Manrope-SemiBold', sans-serif;
         src: url(${Regular}) format('truetype');
     }
     @font-face {
         font-family: 'Manrope-Medium', sans-serif;
         src: url(${Medium}) format('truetype');
     }
     @font-face {
         font-family: 'Manrope-Regular', sans-serif;
         src: url(${SemiBold}) format('truetype');
     }


  body {
    overflow-x: hidden;
    
    font-family: "Manrope", sans-serif;
    font-weight: var(--regular-font-weight);
    font-style: normal;
    font-size: var(--standard-font-size);
    line-height: var(--standard-line-height);
    
    color: var(--primary-black);
    background-color: var(--primary-white);
    cursor: none;
}


body.active-modal {
  overflow: hidden;
}

button {
  color: var(--primary-white);
  background-color: var(--bg-blue);
      cursor: pointer;
}
 
button:hover {
  transition: all 0.5s ease-out;
  cursor: pointer;
}

a {
  cursor: pointer;
  }

a:hover {
      transition: all 0.5s ease-out;
  }
   
   .container {
  margin: 0 auto; 
  max-width: 274px;
  margin-bottom: 100px;
  
  @media (min-width: 768px) {
    max-width: 577px;
    }

    @media (min-width: 1440px){        
        max-width: 1183px;      
      } 
    }

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}

input:hover,
input:focus{
  outline: none;
}`;
