import { Route, Routes } from "react-router-dom";
import { About } from "./Pages/About/About";
import { Appoinment } from "./Pages/Appoinment/Appoinment";
import { Contact } from "./Pages/Contact/Contact";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { RequireAuth } from "./Pages/Login/RequireAuth";
import { SignUp } from "./Pages/Login/SignUp";
import { Notfound } from "./Pages/NotFound/Notfound";
import { Reviews } from "./Pages/Reviews/Reviews";
import { Navbar } from "./Pages/Shared/Navbar";
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { MyAppoinment } from "./Pages/Dashboard/MyAppoinment";
import { MyReview } from "./Pages/Dashboard/MyReview";
function App() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="Appoinment"
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppoinment/>}/>
          <Route path="review" element={<MyReview/>}/>
        </Route>
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <ToastContainer/>
      
    </div>
  );
}

export default App;
