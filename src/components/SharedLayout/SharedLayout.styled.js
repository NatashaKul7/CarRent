import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* position: fixed;
  top: 0;
  left: 0; */
  width: 100%;

  background-color: var(--bg-blue);
  color: var(--primary-white);
  /* margin-top: 24px; */

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
