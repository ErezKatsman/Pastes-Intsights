import React from "react";
import Paste from "./Paste";

export default function Pastes({ pastes }) {
  return (
    <div className="pastes">
      {pastes.map((paste) => (
        <Paste paste={paste} />
      ))}
    </div>
  );
}
