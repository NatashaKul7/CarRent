import { NavLink } from "react-router-dom";
import { HomeWrapperStyled } from "./pageStyle/Home.styled";

const HomePage = () => {
  return (
    <HomeWrapperStyled className="home-page">
      <h1>Welcome to the car rent service</h1>
      <h2>Here you can find a car for any occasions</h2>
      <NavLink to="/catalog" className="button-rent">
        Rent car
      </NavLink>
    </HomeWrapperStyled>
  );
};

export default HomePage;
