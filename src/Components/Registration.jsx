import React from "react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Registration.css";

export const Registration = () => {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let handlerMobileAction = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let registerAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND
      let url = `http://127.0.0.1:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`;

      let res = await fetch(url);

      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        username: "",
        password: "",
        email: "",
        mobile: "",
      };
      setUser(newuser);

      formRef.current.classList.remove("was-validated");

      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 5000);
    }
  };

  return (
    <>
      <div id="body">
        <section className="register" id="register">
          <div className="head">
            <div>
              <h1 className="text-center mb-5">Sign up</h1>
              <p className="msg">Welcome To Peace</p>

              <div className="form ">
                <form ref={formRef} className="needs-validation">
                  <div className="mb-3">
                    <input
                      value={user.username}
                      type="text"
                      placeholder="Enter Username"
                      className="text form-control form-control-lg"
                      onChange={handlerUsernameAction}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      
                      type="password"
                      placeholder="Enter Password"
                      value={user.password}
                      onChange={handlerPasswordAction}
                      className="text form-control form-control-lg"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="email"
                      type="email"
                      placeholder="Enter Email"
                      value={user.email}
                      onChange={handlerEmailAction}
                      className="text form-control form-control-lg"
                      required
                    />
                  </div>

                  <div>
                    <input
                      
                      type="number"
                      placeholder="Enter mobile Number"
                      value={user.mobile}
                      onChange={handlerMobileAction}
                      className="text form-control form-control-lg"
                      required
                    />
                  </div>

                  

                  <div>
                    <input
                      type="button"
                      value="Register"
                      className="btn-register w-100"
                      onClick={registerAction}
                    />

                    <div className="mt-3 text-center">
                      <Link to={"/login"} style={{textDecoration:'none' , color:'white'}}>Existing User, Login here</Link>
                    </div>
                  </div>
                </form>
                {isSuccess && (
                  <div className="alert alert-success">Success</div>
                )}
                {isError && <div className="alert alert-danger">Error</div>}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
