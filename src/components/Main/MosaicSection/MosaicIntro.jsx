import React from "react";
import "./MosaicIntro.css";

export function MosaicIntro() {
  return (
    <div className="mosaic-intro">
      <h3 className="p-4">Humble Choice Membership</h3>
      <div className="p-6 flex flex-col mosaic-gradient m-4">
        <h2 className="w-full p-2 leading-10 text-center mb-4 text-3xl">
          ¡ÚNETE A HUMBLE CHOICE Y CONSIGUE 12 JUEGOS POR SOLO 12 DÓLARES!
        </h2>
        <div className="relative">
          <img
            className="border-2 rounded border-white"
            src="./3games-first.png"
            alt=""
          />
          <span className="p-2 rounded absolute top-0 text-black font-bold bg-white span-outside">
            EMPIEZA A JUGAR AHORA
          </span>
        </div>
        <button className="btn-gradient text-sm text-white bg-yellow-600 h-14 p-2 font-bold rounded flex justify-center items-center my-4">
          ÚNETE AHORA
        </button>
      </div>
    </div>
  );
}
