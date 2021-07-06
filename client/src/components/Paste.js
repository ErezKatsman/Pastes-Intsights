import React from "react";

export default function Paste({ paste }) {
  const { _id, author, title, content, date } = paste;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="paste-section" id={_id}>
      <h2 className="paste-title">{title}</h2>
      {content.split("\n").map((line, i) => {
        return (
          <div className="content" key={`span${i}`}>
            <span key={`innerSpan${i}`}>{line}</span>
            <br key={`br${i}`} />
          </div>
        );
      })}
      <span className="info">
        <span className="bold">{author}</span> at{" "}
        <span className="bold">{formatDate(date)}</span>
      </span>
    </div>
  );
}
