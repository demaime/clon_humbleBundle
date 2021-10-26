import React from "react";

export function MosaicCard(props) {
  return (
    <div className="mosaic-card mb-2 p-4">
      <div className="mosaic-card-content relative">
        <div className="w-full flex p-4 absolute z-10">
          <div
            className="h-16 w-16 mr-4"
            style={{
              backgroundImage: `url(${props.logo})`,
            }}
          ></div>
          <div
            className="h-16 w-60 bg-no-repeat bg-center bg-left bg-contain"
            style={{
              backgroundImage: `url(${props.gameTitle})`,
            }}
          ></div>
        </div>
        <div className="absolute flex h-full w-full bg-black opacity-60"></div>
        <div>
          <img className="" src={props.backgroundImg} alt="" />
        </div>
      </div>

      <div className="mosaic-card-footer flex items-center bg-gray-800 p-2">
        <h1 className="p-2 text-gray-300 font-extrabold text-sm tracking-tighter uppercase">
          {props.footerText}
        </h1>
        <div className="bg-gray-900 rounded-full flex items-center max-h-8 text-sm border-2 font-bold border-gray-400 p-2 ml-2 min-w-max">
          <span>{props.countdown}</span>
        </div>
      </div>
    </div>
  );
}
