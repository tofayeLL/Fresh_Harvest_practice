"use client";

import Nav from "@/components/shared/nav";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <Nav></Nav>
      <main >{children}</main>
    </>
  );
};

export default CommonLayout;
