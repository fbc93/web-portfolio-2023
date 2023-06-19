import React from "react";
import Header from "./layout/header";
interface ILayoutProps {
  children: any;
}

export default function Layout({ children }: ILayoutProps) {

  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
}