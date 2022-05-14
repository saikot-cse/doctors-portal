import { Home } from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Pages/Shared/Navbar";
import { About } from "./Pages/About/About";
import { Appoinment } from "./Pages/Appoinment/Appoinment";
import { Reviews } from "./Pages/Reviews/Reviews";
import { Contact } from "./Pages/Contact/Contact";
import { Login } from "./Pages/Login/Login";
import { SignUp } from "./Pages/Login/SignUp";
import { Notfound } from "./Pages/NotFound/Notfound";
function App() {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Appoinment" element={<Appoinment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
