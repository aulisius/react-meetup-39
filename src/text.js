import React from "react";
export function Text({ style, children }) {
  return (
    <div
      style={{
        ...style,
        padding: "10px",
        textAlign: "center"
      }}>
      {children}
    </div>
  );
}
