import React from "react";
import "../css/Login.css";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      let url = `http://127.0.0.1:4000/login-by-post`;
      let data = { email: user.email, password: user.password };
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      // alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };
  return (
    <>
      <div id="body">
        <div className="login " id="login">
          <div className="head ">
            <h1 className="company">Sign in</h1>
          </div>
          <p className="msg">Welcome back</p>
          <div className="form">
            <form ref={formRef} className="needs-validation">
              <input
                type="email"
                placeholder="Enter Email"
                className="email form-control form-control-lg mt-4"
                value={user.email}
                onChange={handlerEmailAction}
                required
              />
              <br />
              <input
                type="password"
                placeholder="Enter Password"
                className="password form-control form-control-lg mb-4"
                value={user.password}
                onChange={handlerPasswordAction}
                required
              />

              <input type="button" value="Login" className="btn-login" onClick={loginAction}>  
              </input>
              
              <div className="d-flex justify-content-center mt-3">
              <Link to={"/registration"} style={{textDecoration:'none' , color:'white'}}>New User, Register here</Link>
            </div>

            </form>

            {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">User not Found</div>}
          </div>
        </div>
      </div>
    </>
  );
};
