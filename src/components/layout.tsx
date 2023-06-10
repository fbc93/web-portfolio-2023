import React from "react";
import Footer from "./footer";
import Header from "./header";

interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div>
      <Header />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
}