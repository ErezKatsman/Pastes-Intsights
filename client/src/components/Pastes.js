import React from "react";
import Paste from "./Paste";

export default function Pastes({ pastes }) {
  return (
    <div className="pastes">
      {pastes.map((paste, i) => (
        <Paste paste={paste} key={paste._id} />
      ))}
    </div>
  );
}
