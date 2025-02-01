import Lottie from "lottie-react";
import loadingAnimation from "../../../assets/Animation.json";

const LoaderAnimation = () => {
  return (
    <div
      style={{
        backgroundColor: "#1b1b1f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
        height: "100vh",
      }}
    >
      <Lottie
        animationData={loadingAnimation}
        loop
        style={{
          width: "200px",
          height: "200px",
        }}
      />
    </div>
  );
};

export default LoaderAnimation;
