import styled from "styled-components";
import BgImg from "../../../public/white.jpg";

export const HomeWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px;

  height: auto;

  background-image: url(${BgImg});
  background-color: var(--primary-blue);
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
      cursor: pointer;
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
`;
