import styled from "styled-components";

export const OverlayStyled = styled.div`
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

    max-height: 600px;
    max-width: 300px;
    padding: 20px;
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

    width: 240px;
    height: 240px;
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

  @media (min-width: 768px) {
    .modal-container {
      max-width: 541px;
      max-height: 100%;
      padding: 40px;
    }

    .modal-image {
      width: 300px;
      height: 230px;
    }
  }

  @media (min-width: 1440px) {
    .modal-container {
      max-width: 541px;
      max-height: 100%;
      padding: 40px;
    }

    .modal-image {
      width: 461px;
      height: 268px;
    }
  }
  /* body.active-modal {
    overflow-y: hidden;
  } */
`;
