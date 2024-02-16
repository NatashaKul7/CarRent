import styled from "styled-components";

export const CarBoxStyled = styled.div`
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
`;
