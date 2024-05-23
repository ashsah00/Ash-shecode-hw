import React from "react";

export default function City({ name, temp }) {
  return (
    <div>
      It is {temp}°C in {name}.
    </div>
  );
}
