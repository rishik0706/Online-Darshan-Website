import React from 'react'
import FooterBase from './FooterBase'

export const ContactUs = () => {
  return (
    <>
      <div className="row">
      <img src="./images/contact-us-banner.jpg" alt="" />
    </div>
    <hr />
    <div className="row ">
      <div className="col-md-9 col-sm-12 ms-5 text-warning ">
        <div className=" ">
            <h1 >Your Feedback are important, We would love to hear from you!</h1>
        
        </div>
        
      </div>
    </div>
    <hr />
    
    <div className="row justify-content-between mx-4">
      <div className="col-lg-4 col-sm-12 my-3">
        <div>
          <div className="d-flex" style={{color: '#FFac4a'}}>
            <div>
              <h3><i className="fa fa-phone"></i></h3>
            </div>
            <div><h4> Talk to Our Team Member</h4></div>
          </div>
          <div className="mx-2">+91-9958-438226</div>
          <div className="mx-2">+91-7841-901447</div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 my-3">
        <div>
          <div className="d-flex " style={{color: '#FFac4a'}}>
            <div>
              <h3><i className="fa fa-building"></i></h3>
            </div>
            <div><h4> Visit the Temple</h4></div>
          </div>
          <div className="mx-2">
            2R8J+P4J, SK Bole Marg, Prabhadevi, Mumbai, Maharashtra 400028
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 my-3">
        <div>
          <div className="d-flex " style={{color: '#FFac4a'}}>
            <div>
              <h3><i className="fa fa-envelope"></i></h3>
            </div>
            <div><h4> Share Your Thoughts</h4></div>
          </div>
          <div className="mx-2">Shri-Ganesh@gmail.com</div>
        </div>
      </div>
    </div>
    <hr />
    <div className="row justify-content-center fs-2 mt-5" style={{background: '#fefbea'}}>
      Questions not yet answered? Contact us
    </div>
    
    <div
      className="row justify-content-center text-warning"
      style={{background: '#faf9f4'}}
    >
      <div className="col-6 m-5 p-5" style={{background: '#ffe9c9'}}>
        <form>
          <div className="form-group">
            <label for="exampleFormControlInput1">Your name*</label>
            <input
              type="text"
              className="form-control m-2"
              id="exampleFormControlInput1"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlInput2">Email address*</label>
            <input
              type="email"
              className="form-control m-2"
              id="exampleFormControlInput2"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label for="exampleFormControlSelect1">select Subject</label>
            <select className="form-control m-2" id="exampleFormControlSelect1">
              <option>FeedBack</option>
              <option>Enquiry</option>
            </select>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1"><details></details></label>
            <textarea
              className="form-control m-2"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <div className="form-group">
            <label for="exampleFormControlFile1"></label>
            <input
              type="file"
              className="form-control-file m-2"
              id="exampleFormControlFile1"
            />
            <div className="fs-6">
              (Allowed formats: JPG, PNG, GIF. Maximum file size: 10MB)
            </div>

            <div className="row justify-content-center">
              <div className="col-md-3 col-sm-12 m-2">
                <input className="btn btn-warning" style={{color:'white'}} type="button" value="SUMBMIT" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <hr />

    <FooterBase/>
    </>
  )
}
