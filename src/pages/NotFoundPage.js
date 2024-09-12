import React from "react";

function NotFoundPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h1 style={{ fontSize: "4.5rem" }}>404 - Page Not Found</h1>
      <p style={{ fontSize: "1.5rem" }}>
        The page you are looking for doesn't exist.
      </p>
    </div>
  );
}

export default NotFoundPage;
