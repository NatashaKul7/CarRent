import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { HomeWrapperStyled } from "./pageStyle/Home.styled";
import { getIsError, getIsLoading } from "../redux/adverts/selectors";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getIsError);

  return (
    <>
      {isError && <div>Error</div>}
      {isLoading && <Loader />}
      <HomeWrapperStyled className="home-page">
        <h1 className="home-title">Welcome to our car rental service!</h1>
        <h2>
          We offer a convenient and reliable way to access cars for your travels
          or business
        </h2>
        <div className="home-description">
          <p> Our service works quickly and efficiently:</p>
          <ul>
            <li>Choose a car</li>
            <li>Reserve it online</li>
            <li>Get the keys</li>
          </ul>
          <p>
            We strive to make your journey as comfortable as possible, providing
            you with access to a wide selection of cars at affordable prices.
          </p>
          <p>
            Trust us with your car rental needs, and we will do everything
            possible to ensure you have a safe and convenient trip.
          </p>
        </div>
        <NavLink to="/catalog" className="button-rent">
          Rent car
        </NavLink>
      </HomeWrapperStyled>
    </>
  );
};

export default HomePage;
