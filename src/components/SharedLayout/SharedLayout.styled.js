import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  /* position: fixed;
  top: 0;
  left: 0; */
  /* width: 100%; */

  display: flex;
  justify-content: space-between;

  background-color: #3470ff;
  color: #ffffff;
  margin: 0;
`;

export const NavigationStyled = styled(NavLink)`
  color: #ffffff;
`;
