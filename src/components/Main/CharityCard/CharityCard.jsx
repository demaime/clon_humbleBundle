import React from "react";

export default function CharityCard() {
  return (
    <div className="charity-card mt-12 font-bold    ">
      <div className="p-6 flex flex-col bg-gray-800 m-4">
        <h2 className="w-full p-2 leading-10 text-center mb-4 text-3xl">
          Dedicados a apoyar las obras benéficas
        </h2>
        <div className="relative flex items-center justify-center">
          <img
            className="m-4"
            src="https://humblebundle-a.akamaihd.net/static/hashed/c79ff5127d880c5ed3f501b0900e92f7c7be7b7f.png"
            alt=""
          />
        </div>
        <p className="text-center text-sm">
          No somos una página web de videojuegos convencional. Desde nuestra
          fundación en 2010, hemos recaudado dinero para fines benéficos a
          través de todo lo que hacemos.
        </p>
        <a
          className="text-center text-sm  mt-1 text-blue-400 underline"
          href=""
        >
          Más información
        </a>
      </div>
    </div>
  );
}
