import FooterBase from "./FooterBase";

function Donation() {
    return (
      <>
        <h1 className="text-center text-success p-3">Donation</h1>
        <hr />
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-6 p-4">
            <h5>Fund Category</h5>
            <input className="form-control mt-3" text="" placeholder="" />
            <h5 className="mt-3">Fund Type</h5>
            <input className="form-control"></input>
            <h5 className="mt-3">
              Total Amount<span> (&#8377;)</span>
            </h5>
            <input className="form-control"></input>
            <h5 className="mt-3">PAN</h5>
            <input
              className="form-control mt-3"
              text=""
              placeholder="Registered Devotee.."
            />
            <input
              className="mt-4 form-control"
              style={{ background: "orange", borderRadius: "5px" }}
              type="button"
              value="Login"
            />
          </div>
        </div>
        <h4 className="p-3">Note:</h4>
        <div className="p-3">
          <p>- Donation is accepted in Indian Rupees only. </p>
          <p>- Donations once made are non-cancellable and non-refundable. </p>
          <p>
            -Donation receipt will be generated on the registered user name and
            Prasad will be sent to registered address.
          </p>
          <h6>
            - Devotees can also donate directly to Shri Saibaba Sansthan Trust,
            Shirdi on following Bank Account. Email the transaction details along
            with Name & Address to obt@sai.org.in for receiving the Udi prasad &
            Donation receipt. :
          </h6>
        </div>
  
        
        <div className="row">
        <div className=" col-sm-12 col-md-6 p-4">
        <h5 className="p-3">
          <u>Indian A/c</u>
        </h5>
          <p>Bank Name: State Bank Of India</p>
          <p>Branch: Shirdi A/C Name: Shri Saibaba Sansthan Trust, Shirdi</p>
          <p> A/C No.: 30026657678</p>
          <p>IFSC Code: SBIN0005160</p>
        </div>
        
          <div className="col-sm-12 col-md-6 p-4">
          <h5 className="p-3">
          <u>Foreign A/c</u>
        </h5>
          <p>Bank Name: State Bank Of India </p>
          <p> Branch: Main Branch, New Delhi</p>
          <p>A/C Name: Shri Saibaba Sansthan Trust, Shirdi</p>
          <p>A/C No.: 00000040257978885</p>
          <p>IFSC Code: SBIN0000691</p>
          <p> Swift Code: SBININBB104</p>
        </div>
        </div>
        <FooterBase/>
      </>
    );
  }
  export default Donation;