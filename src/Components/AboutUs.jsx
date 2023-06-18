import React from 'react'
import img8 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/temple.jpg";
import FooterBase from './FooterBase';

export const AboutUs = () => {
  return (
    <>
        <div>
      <h1 className="text-center m-4 p-4">About the Temple</h1>
      <div className="row justify-content-center">
        <div id="content " className="col-md-4">
          <p className="lh-base" style={{textAlign: 'justify'}}>
            <b>Shree Ganesh</b> is the first to be worshipped before beginning
            any new project or venture as he is the destroyer of obstacles
            (Vighnaharta). This is Shree Siddhivinayak Ganapati Temple at
            Prabhadevi in Mumbai, a two-century-old Temple that fulfills the
            desires of the worshipers.<br />
            The city of Mumbai is a mute witness to places of worship &
            historical interest, which are not only popular but also of
            archaeological importance.<br /><br />
            Arguably the most popular & significant places of worship are the
            Shree Siddhivinayak Ganapati Mandir situated at Prabhadevi. This
            temple was first consecrated on Thursday 19th November 1801, a fact
            that is noted in government records. The temple then was a small
            structure housing the black stone idol of Shree Siddhivinayak, which
            was two and half feet wide. The outstanding feature of this deity is
            the tilt of the trunk to the right side. The idol has four hands
            (Chaturbhuj), which contains a lotus in upper right, a small axe in
            upper leftclass, holy beads in the lower right and a bowl full of Modaks
            (a delicacy which is a perennial favorite with Shree Siddhivinayak).
            Flanking the deity on both sides are Riddhi & Siddhi, goddesses
            signifying sanctity, fulfillment, prosperity and riches. Etched on
            the forehead of the deity is an eye, which resembles the third eye
            of Lord Shiva.
          </p>
        </div>
        <div id="temp-img" className="col-md-4">
          <img
            src={img8}
            alt="temple"
            style={{height: '80%', width: '100%'}}
          />
        </div>
      </div>
    </div>
    <FooterBase/>
    </>
  )
}
