import "./Header.css";
import React from "react";
import { Hamburguer } from "./Hamburguer/Hamburguer";

export function Header() {
  return (
    <header className="w-full header-background text-white shadow-2xl h-16 flex relative">
      <Hamburguer />
      <div className="mx-1 w-10 flex lg:hidden items-center justify-end">
        <img className="h-6 w-6" src="./loupe.png " alt="search" />
      </div>
      <div className="flex items-center justify-center w-full h-full absolute">
        <img
          src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"
          alt=""
          className="h-7"
        />
      </div>
    </header>
  );
}
