import React from "react";

export default function Paste({ paste }) {
  const { author, title, content, date } = paste;
  return (
    <div className="paste-section">
      <h4 className="title">{title}</h4>
      <p className="content">{content}</p>
      <h6 className="info">
        {author} at {date}
      </h6>
    </div>
  );
}
