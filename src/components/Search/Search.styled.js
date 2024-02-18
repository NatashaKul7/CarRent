import styled from "styled-components";

export const SearchStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 50px;
  margin-top: 24px;
  padding: 12px;
  height: auto;
  background-color: var(--bg-blue);
  border-radius: 14px;
  .button-search {
    width: 136px;
    padding: 14px 44px;
    border-radius: 12px;

    font-size: 14px;
    color: var(--bg-blue);
    background-color: var(--primary-white);
  }

  .button-search:hover {
    color: var(--primary-white);
    background-color: var(--hover-blue);
    box-shadow: var(--btn-box-shadow);
  }
`;
