import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 50px;

  .button-search {
    width: 136px;
    padding: 14px 44px;
    border-radius: 12px;

    font-size: 14px;
    color: var(--primary-white);
    background-color: var(--bg-blue);
  }

  .button-search:hover {
    background-color: var(--hover-blue);
    box-shadow: var(--btn-box-shadow);
  }
`;
