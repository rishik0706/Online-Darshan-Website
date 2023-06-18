import React from "react";
import FooterBase from "./FooterBase";

export const Darshan = () => {
  return (
    <>
      <div className="container" style={{height:790 }}>
        <div className="row">
          <div className="col-md-12">
            <h1 className=" text-center m-3">Live Darshan</h1>
            <div className="" style={{ height: 600, width: 100 }}>
              <iframe
                style={{ height: 700, width: 1300 }}
                src="https://www.youtube.com/embed/gQmzZQTbZmg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <FooterBase />
    </>
  );
};
