import React, { useState, useEffect } from "react";

function WritingEffect({ text }) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(
    <div>
      <span>{text.slice(index)}</span>
    </div>
  );

  useEffect(() => {
    let timeout;
    if (index < text.length) {
      if (text[index] === " ") {
        timeout = setTimeout(() => {
          setDisplayedText(
            <div>
              {text.slice(0, index + 1)}
              <span>{text.slice(index)}</span>
            </div>
          );
          setIndex(index + 1);
        }, 2000);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(
            <div>
              {text.slice(0, index + 1)}
              <span>{text.slice(index + 1)}</span>
            </div>
          );
          setIndex(index + 1);
        }, 1000);
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [displayedText, index, text]);

  return <h1 className="hero-text">{displayedText}</h1>;
}

export default WritingEffect;
