import React from "react";
import dynamic from "next/dynamic";

const SignIn = dynamic(() => import("@/components/admin/signIn/SignIn"), {
  ssr: false,
});

const SignInPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;
