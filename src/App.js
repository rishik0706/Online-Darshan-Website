import { BrowserRouter, Navigate, Route , Routes} from "react-router-dom";
import AppHome from "./Components/AppHome";
import MyNavigationLinks from "./Components/MyNavigationLinks";
import { Darshan } from "./Components/Darshan";
import { Arti } from "./Components/Arti";
import { Pooja } from "./Components/Pooja";
import { ContactUs } from "./Components/ContactUs";
import { AboutUs } from "./Components/AboutUs";
import Donation from "./Components/Donation";
import { Login } from "./Components/Login";
import { Registration } from "./Components/Registration";

function App() {
  return (
    <>
      <BrowserRouter>
      <MyNavigationLinks/>
        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/home" element={
          <ProtectedRoute>
            <AppHome />
          </ProtectedRoute>} />
          <Route path="/darshan" element={
          <ProtectedRoute>
            <Darshan />
          </ProtectedRoute>} />
          <Route path="/arti" element={
          <ProtectedRoute>
            <Arti />
          </ProtectedRoute>} />
          <Route path="/pooja" element={
            <ProtectedRoute>
              <Pooja/>
            </ProtectedRoute>
          } />
          <Route path="/contactus" element={
            <ProtectedRoute>
              <ContactUs />
            </ProtectedRoute>
          } />
          <Route path="/aboutus" element={
            <ProtectedRoute>
              <AboutUs />
            </ProtectedRoute>
          } />
          <Route path="/donation" element={
            <ProtectedRoute>
              <Donation/>
            </ProtectedRoute>
          } />
          <Route path="/registration" element={<Registration />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
  
        </Routes>
        
      </BrowserRouter>
    </>
  );
}
//to protect the pages
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;
