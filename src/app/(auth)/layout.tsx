import AuthArtwork from "@/components/AuthArtwork";
import React, { ReactNode } from "react";
import brainImage from "@/assets/brain-img.png";

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
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
