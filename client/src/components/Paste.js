import React from "react";

export default function Paste({ paste }) {
  const { author, title, content, date } = paste;
  return (
    <div>
      <h4>{title}</h4>
      <p>{content}</p>
      <h6>
        {author} at {date}
      </h6>
    </div>
  );
}
