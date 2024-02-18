import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--bg-blue);
  color: var(--primary-white);
  border-radius: 0px 0px 14px 14px;
  box-shadow: var(--btn-box-shadow);

  .navigation {
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;

    font-size: 16px;
    font-weight: var(--medium-font-weight);
  }

  .header-info {
    display: flex;
    gap: 24px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  &.active {
    font-weight: var(--bold-font-weight);
    color: #000080;
    text-decoration: underline;
  }
`;
