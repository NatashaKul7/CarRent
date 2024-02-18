import styled from "styled-components";
import BgImage from "/car.png";

export const HomeWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  margin-top: 50px;
  gap: 12px;

  height: 100vh;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

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

  .background {
    background-image: url(${BgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`;
