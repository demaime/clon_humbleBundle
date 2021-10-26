import "./Main.css";
import React from "react";
import { MosaicIntro } from "./MosaicSection/MosaicIntro";
import { MosaicCard } from "./MosaicCard/MosaicCard";
import { CardHeader } from "./CardHeader";
import CharityCard from "./CharityCard/CharityCard";
import { Footer } from "../Footer/Footer";

export function Main() {
  const logos = {
    games:
      "https://humblebundle-a.akamaihd.net/static/hashed/c9eb8360a57dec0e5d95d79a68be779ca564d9a2.svg",
    books:
      "https://humblebundle-a.akamaihd.net/static/hashed/221cc36fb46b3d530aa78db73f46b9eddb705647.svg",
    softwares:
      "https://humblebundle-a.akamaihd.net/static/hashed/5ec081962ffab0fe6479f7e2a915b1dec9d4a66e.svg",
    store:
      "https://humblebundle-a.akamaihd.net/static/hashed/04b6c78aa628a5286eb8fcdd789eee990f08d7c5.svg",
    comics:
      "https://humblebundle-a.akamaihd.net/static/hashed/0c180226dfc9fd17575ecb33938beb9c181080bc.svg",
  };

  return (
    <div className="main-background w-full text-white">
      <div>
        <h3 className="w-full p-4">
          <span className="icon"></span> The best place to buy games &amp;
          bundles while supporting charity
        </h3>
      </div>
      <MosaicIntro />
      <CardHeader titleText="Featured" linkText="View Games" />
      <MosaicCard
        backgroundImg="./fall_vr.jpg"
        gameTitle="./fall_vr_name.png"
        footerText="Fall VR Emporium Bundle"
        logo={logos.games}
        countdown="FALTAN 3 DÍAS"
      />
      <CardHeader titleText="Bundles" linkText="View Bundles" />
      <MosaicCard
        backgroundImg="https://hb.imgix.net/8405a3f2419848116fe44065d10fc6198ae6c937.jpg?auto=compress,format&fit=crop&h=353&w=616&s=26f08f08d3bce705609e69204a00edda"
        gameTitle="https://hb.imgix.net/24cd5292d684e77081689b68f90b1dcc1b86d562.png?auto=compress,format&h=170&w=1200&s=968aaa545e653531274b2da89da1eb12"
        footerText="theHunter: Call of the Wild Complete Bundle"
        logo={logos.games}
        countdown="FALTAN 11 DÍAS"
      />
      <CharityCard />
      <CardHeader titleText="Humble Deals" />
      <MosaicCard
        backgroundImg="https://hb.imgix.net/698c49fff065806d838c57ff6259eaf6b85b4c93.jpg?auto=compress,format&fit=crop&h=353&w=616&s=a25c89e2390cdbcaab7caa4a98dc43f1"
        gameTitle="https://hb.imgix.net/7a46b56dc3db25971430a7c40adaf77fa58b01e5.png?auto=compress,format&h=170&w=1200&s=99877a3ad0caba19e6c2bb3ef766b878"
        footerText="Infrastructure and Ops by O'Reilly"
        logo={logos.books}
        countdown="FALTAN 6 DÍAS"
      />
      <MosaicCard
        backgroundImg="https://hb.imgix.net/adcacbb6634e5737e33d82421133b4a64a5be09a.jpg?auto=compress,format&fit=crop&h=353&w=616&s=2bfa0b4afd8d180d56b723d192f14961"
        gameTitle="https://hb.imgix.net/fdeb8646bf8216e45ea42b256b82f52a24295614.png?auto=compress,format&h=170&w=1200&s=41c4b1727e9be9d6e77ff99d6e2f4251"
        footerText="The Ultimate DevOps Bundle by Packt"
        logo={logos.books}
        countdown="FALTAN 13 DÍAS"
      />
      <Footer />
    </div>
  );
}
