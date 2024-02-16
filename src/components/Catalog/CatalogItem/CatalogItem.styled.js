import styled from "styled-components";

export const CarCardStyled = styled.li`
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
`;
