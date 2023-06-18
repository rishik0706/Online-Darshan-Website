import React from "react";
import Footer from "./Footer";

export const FooterBase = () => {
  return (
    <>
      <footer className="text-center text-lg-start bg-light text-muted">
        <div
          className="text-center p-4"
          style={{backgroundcolor : 'rgba(0, 0, 0, 0.05)'}}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="#">
            Live Darshan
          </a>
        </div>
      </footer>
    </>
  );
};

export default FooterBase;
