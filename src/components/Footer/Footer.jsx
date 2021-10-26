import React from "react";
import "./Footer.css";

export function Footer() {
  return (
    <div className="bg-gray-700 text-xs text-gray-400 p-4 footer-spacing">
      <img
        src="https://humblebundle-a.akamaihd.net/static/hashed/4814f84495cd679571cb94896978da3825562075.svg"
        alt=""
        className="h-6"
      />
      <p>
        Consigue hasta 15 $ de crédito de Wallet Credit para gastar en tu
        próxima compra en la tienda.
      </p>
      <a href="">INVITAR A UN AMIGO</a>
      <h2 className="text-gray-100">Acerca de</h2>
      <p>Blog</p>
      <p>Apoyo</p>
      <p>Reenvío de pedido</p>
      <p>Desarrollador</p>
      <h2 className="text-gray-100">Tendencias en juegos</h2>
      <ul className="footer-spacing">
        <li>Juego 1</li>
        <li>Juego 2</li>
        <li>Juego 3</li>
        <li>Juego 4</li>
        <li>Juego 5</li>
        <li>Juego 6</li>
        <li>Juego 7</li>
        <li>Juego 8</li>
      </ul>
      <div className="w-full p-4 border-2 border-white rounded h-4"></div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <p>
        La comunidad Humble ha contribuido con más de 200.000.000 $ a
        organizaciones benéficas desde 2010, marcando una gran diferencia en
        diferentes causas de todo el mundo.
      </p>
      <ul className="footer-spacing">
        <li>Términos de servicio</li>
        <li>Política de privacidad</li>
        <li>Política de cookies</li>
        <li>Aviso legal</li>
      </ul>
    </div>
  );
}
