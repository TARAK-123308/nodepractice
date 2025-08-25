import React from "react";
import ComponentB from "./ComponentB";

function ComponentA({ Username }) {
  return (
    <div>
      <h1>ComponentA</h1>
      <p>Username: {Username}</p>
      <ComponentB Username={Username} />
    </div>
  );
}

export default ComponentA;
