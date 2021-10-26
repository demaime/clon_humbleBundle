import React from "react";
import "./Hamburguer.css";

export function Hamburguer() {
  return (
    <div className="hamburguer h-full mx-1 w-10 flex flex-col lg:hidden items-end justify-center">
      <div className="hamburguerBtn1"></div>
      <div className="hamburguerBtn2"></div>
      <div className="hamburguerBtn3"></div>
    </div>
  );
}
