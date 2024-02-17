import { Outlet } from "react-router-dom";
import { HeaderStyled, NavLinkStyled } from "./SharedLayout.styled";
import { Suspense } from "react";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <div>
      <HeaderStyled>
        <nav className="navigation">
          <NavLinkStyled to="/" end>
            Home
          </NavLinkStyled>
          <div className="header-info">
            <NavLinkStyled to="/catalog">Catalog</NavLinkStyled>
            <NavLinkStyled to="/favorites">Favorite</NavLinkStyled>
          </div>
        </nav>
      </HeaderStyled>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <main>{<Outlet />}</main> */}
    </div>
  );
};

export default SharedLayout;
