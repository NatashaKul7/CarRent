import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: end;
  gap: 18px;
  margin-bottom: 50px;
  margin-top: 24px;

  .select-label {
    font-size: 14px;
    color: #8a8a89;
  }
  .button-search {
    width: 136px;
    padding: 14px 44px;
    border-radius: 12px;

    font-size: 14px;
    color: var(--primary-white);
    background-color: var(--bg-blue);
  }

  .button-search:hover {
    color: var(--primary-white);
    background-color: var(--hover-blue);
    box-shadow: var(--btn-box-shadow);
  }
`;
