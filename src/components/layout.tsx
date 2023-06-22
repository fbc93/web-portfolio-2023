import React from "react";
import Header from "./layout/header";
interface ILayoutProps {
  children: any;
  containerRef: any;
}

export default function Layout({ children, containerRef }: ILayoutProps) {
  return (
    <div ref={{ ...containerRef }}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}