import React from "react";

export default function Paste({ paste }) {
  const { author, title, content, date } = paste;
  const clearLine = (line) => {
    return line.replace(/\&nbsp;/g, "h");
  };

  return (
    <div className="paste-section">
      <span className="paste-title">{title}</span> <br />
      <ul className="content">
        {content.split("\n").map((line, i) => {
          if (line) return <li key={i}>{clearLine(line)}</li>;
        })}
      </ul>
      <br />
      <span className="info">
        {author} at {date}
      </span>
    </div>
  );
}
