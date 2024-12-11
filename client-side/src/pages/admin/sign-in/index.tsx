import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the SignIn component with SSR disabled
const SignIn = dynamic(() => import("@/components/signIn/SignIn"), {
  ssr: false, // Disable server-side rendering
});

const SignInPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
