import img4 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/temple.jpg";
import img5 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/siddhivinay-temple-1.avif";
import img6 from "G:/CDAC/MODULE 6 WPT/React-Final_Project/Online-Darshan/onlinedarshan/src/images/app.jpg";
import { Link } from "react-router-dom";

function Cards(){
    return(
        <>
            <div id="exp" className="m-4 mb-1 p-4 " style={{textAlign:'center' , justifyContent:'center' , height:'100px' ,backgroundColor:'#7db0f1'}}>
        <h1 className="text-center" style={{
              
            }}>
          Experience the Grace of Shri Siddhivinayak
        </h1>
      </div>
      
      
      <div className="row justify-content-center">
        <div className="card col-sm-12 col-md-4 m-4 mt-4 p-2" style={{ width: 288 }}>
          <img
            src={img4}
            style={{ height: 250 }}
            className="card-/img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-text text-center">Visit the Temple</h4>
            <p className="card-text text-center">
            <Link to={"/aboutus"} style={{
                textDecoration:'none',
                color:'black'
              }}>
              Choose the most convenient time for you and book your appointment.</Link>
            </p>
          </div>
        </div>
        <div className="card col-sm-12 col-md-4 m-4 mt-4 p-2" style={{ width: 288 }}>
          <img
            src={img5}
            style={{ height: 250 }}
            className="card-/img-top"
            alt="..."
          />
        
          <div className="card-body">
            <h4 className="card-text text-center">Live Darshan</h4>
            <p className="card-text text-center" >
              <Link to={"/darshan"} style={{
                textDecoration:'none',
                color:'black'
              }}> Experience the live Darshan of Shree Siddhivinayak.</Link>
            </p>
          </div>
        </div>
        
        <div className="card col-sm-12 col-md-4 m-4 mt-4 p-1" style={{ width: 288 }}>
          <img
            src={img6}
            style={{ height: 250 }}
            className="card-/img-top"
            alt="..."
          />
          <div className="card-body">
            <h4 className="card-text text-center">Personalize Darshan</h4>
            <p className="card-text text-center">
            <Link to={"/darshan"} style={{
                textDecoration:'none',
                color:'black'
              }}>
              Book a one-on-one, online, interactive pooja with a Guruji of the
              Temple.
              </Link>
            </p>
          </div>
        </div>
      </div>
        </>
    )
}

export default Cards;