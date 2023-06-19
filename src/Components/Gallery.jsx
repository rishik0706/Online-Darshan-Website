import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import gal1 from "../images/1.jpg"
import gal2 from "../images/2.jpg"
import gal3 from "../images/3.jpg"
import gal4 from "../images/4.jpg"
import gal5 from "../images/5.jpg"
import gal6 from "../images/6.jpg"

export const Gallery = () => {
  return (
    <><div className="m-4">
        <h1 className="text-center m-4 mb-5 p-4 " style={{textAlign:'center' , justifyContent:'center' , height:'100px' ,backgroundColor:'#7db0f1'}}>Our Gallery</h1>
      <MDBRow className="m-3" >
        <MDBCol lg={4} md={12} className="mb-4 mb-lg-0">
          <img
            src={gal1}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
            style={{height:'400px' }}
          />

          <img
            src={gal2}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
            style={{height:'700px' }}
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src={gal3}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
            style={{height:'700px' }}
          />

          <img
            src={gal4}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
            style={{height:'400px' }}
          />
        </MDBCol>

        <MDBCol lg={4} className="mb-4 mb-lg-0">
          <img
            src={gal5}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
            style={{height:'400px' }}
          />

          <img
            src={gal6}
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
            style={{height:'700px' }}
          />
        </MDBCol>
      </MDBRow>
      </div>
    </>
  );
};
