import styled from "styled-components";

export const CarCardStyled = styled.li`
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
`;
