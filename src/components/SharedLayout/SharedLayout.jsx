import { Outlet } from "react-router-dom";
import { HeaderStyled, NavigationStyled } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
  return (
    <div>
      <HeaderStyled>
        <nav>
          <NavigationStyled to="/" end>
            Home
          </NavigationStyled>

          <NavigationStyled to="/catalog">Catalog</NavigationStyled>
          <NavigationStyled to="/favorites">Favorite</NavigationStyled>
        </nav>
      </HeaderStyled>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {/* <main>{<Outlet />}</main> */}
    </div>
  );
};

export default SharedLayout;
