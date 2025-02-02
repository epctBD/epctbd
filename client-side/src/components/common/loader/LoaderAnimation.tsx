"user-client";

import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
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
