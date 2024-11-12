"use client";

import AuthArtwork from "@/components/AuthArtwork";
import React, { ReactNode, useEffect } from "react";
import brainImage from "@/assets/brain-img.png";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const {isAuthenticated} = useSelector((state:RootState)=> state.authSlice);
  const router = useRouter();

  useEffect(()=>{
    if(isAuthenticated){
      router.replace("/");
    }
  },[router, isAuthenticated])

  if(isAuthenticated){
    return <div>Loading...</div>
  }
  return (
    <main className="w-full h-screen flex items-center">
      <div className="flex-1 h-full flex items-center justify-center">{children}</div>
      <AuthArtwork
        mainImage={brainImage}
        mainImageAlt="Brain Image"
        title="Welcome To The Platform"
        subtitle="Register to cure me."
      />
    </main>
  );
};

export default AuthLayout;
