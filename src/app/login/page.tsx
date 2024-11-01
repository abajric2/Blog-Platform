"use client";

import { signIn, useSession } from "next-auth/react";
import React from "react";

const LoginPage = () => {
  const { data, status } = useSession();
  console.log(data, status);
  return (
    <>
      <div>LoginPage</div>
      <button onClick={() => signIn("google")}>Login</button>
    </>
  );
};

export default LoginPage;
