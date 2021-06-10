import React from "react";
import Paste from "./Paste";

export default function Pastes({ pastes }) {
  return (
    <div>
      {pastes.map((paste) => (
        <Paste paste={paste} />
      ))}
    </div>
  );
}
