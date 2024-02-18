import { Hearts } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <Hearts
        height="80"
        width="80"
        color="#0b44cd"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p>Loading...</p>
    </>
  );
};

export default Loader;
