"use client";

import Navbar from "@/components/Navbar";
import RootSidebar from "@/components/RootSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import Wrapper from "@/components/Wrapper";
import { RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

const RootLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useSelector(
    (state: RootState) => state.authSlice
  );
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/signin");
    }
  }, [router, isAuthenticated]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }
  return (
    <SidebarProvider>
      <RootSidebar />
      <main className="w-full h-screen">
        <Navbar />
        <Wrapper className="mt-2">{children}</Wrapper>
      </main>
    </SidebarProvider>
  );
};

export default RootLayout;
