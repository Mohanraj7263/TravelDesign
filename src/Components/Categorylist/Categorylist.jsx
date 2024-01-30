import React from "react";

export default function Categorylist(image, Heading, discription) {
  return (
    <div>
      <img src={image} alt="image" />
      <h1>{Heading}</h1>
      <p>{discription}</p>
    </div>
  );
}
