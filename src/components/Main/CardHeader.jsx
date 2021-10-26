import React from "react";

export function CardHeader(props) {
  return (
    <div className="mosaic-card-title flex justify-between mx-4">
      <h1 className="font-extrabold py-4">{props.titleText}</h1>
      <h1 className="py-4 text-blue-400 underline">{props.linkText}</h1>
    </div>
  );
}
