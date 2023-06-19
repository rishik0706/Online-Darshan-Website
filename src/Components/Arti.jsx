import React from 'react';
import FooterBase from "./FooterBase";

export const Arti = () => {
  return (
    <>
      
      <h3 className="text-center p-3 text-warning">Aarti</h3>
      <hr />

      <div className="row justify-content-center p-3">
        <div className="col-sm-12 col-md-6">
          <h5>Date</h5>
          <input
            className="form-control mt-2 border border-dark mb-3"
            type="date"
            name=""
            id=""
          />
          <h5>Type</h5>
          <select
            className="form-select border border-dark mt-3 mb-3 "
            aria-label="Default select example"
          >
            <option selected>select</option>
            <option value="1">Madhyan Aarti(Noon)12:00-12:30</option>
          </select>
          <h5>Number Of Persons</h5>
          <div className="mt-2 mb-3 text-center">
            <span className=" m-2 p-1">Male</span>
            <span>
              <input style={{ width: "100px" }} type="number" />
            </span>
            <span className=" m-2 p-1">Female</span>
            <span>
              <input style={{ width: "100px" }} type="number" />
            </span>
          </div>
          <h5 className="mt-2">
            Total Amount<span> (&#8377;)</span>
          </h5>
          <input className="form-control border border-dark"></input>
        </div>
      </div>

      <h3 className="text-center mt-5 text-warning p-3">Devotee Details</h3>
      <hr />
      <div className="row justify-content-center p-3">
        <div className="col-sm-12 col-md-6">
          <h5>Name</h5>

          <input
            className="form-control border border-dark mb-3 "
            type="text"
          />
          <h5>Age</h5>
          <input
            className="form-control border border-dark mb-3 "
            type="text"
          />
          <h5>Gender</h5>
          <select
            className="form-select border border-dark mt-2 mb-3 "
            aria-label="Default select example"
          >
            <option selected>select</option>
            <option value="1">Male</option>
            <option value="2">Female </option>
            <option value="2">Others </option>
          </select>
          <h5>Mobile Number</h5>
          <input
            className="form-control border border-dark mb-3 "
            type="text"
          />
          <h5>Email Address</h5>
          <input className="form-control border border-dark " type="text" />
          <input
            className="mt-3 btn form-control"
            style={{ backgroundColor: "orange" }}
            type="button"
            value="Submit"
          />
        </div>
      </div>
      <div className="p-3">
        <h5>Note:</h5>
        <h5>
          - At the time of verification, all the devotees should produce the
          same original Photo IDs furnished at the time of booking. Devotees
          will not be allowed to avail the service in case of any mismatch.
        </h5>
        <h5>
          - Quota for the 'Unavailable dates' may be available in future, in
          case of any cancellations from other devotees.
        </h5>
      </div>
    

    <FooterBase/>

    </>
  )
}
