import Lottie from "lottie-react";
import React from "react";
// import groovyWalkAnimation from "../../assets/groovyWalk.json";
import errorMessage from "../../animations/error.json";
const LottieReact = () => {
  return (
    <div>
      <Lottie animationData={errorMessage}></Lottie>
    </div>
  );
};

export default LottieReact;
