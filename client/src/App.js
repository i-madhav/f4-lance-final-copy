import React, { useEffect, useReducer, createContext, useState } from "react";
import Aos from "aos";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import Contact from "./components/Contact";
import { initialState , reducer } from "./reducer/UseReducer";
import Pricing from "./components/Pricing";
import About2 from "./components/About2";
import Feature1 from "./components/Feature1";
import Feature3 from "./components/Feature3";
import Feature2 from "./components/Feature2";
import Feature4 from "./components/Feature4";
import Gallery from "./components/Gallery";
import Footer2 from "./components/Footer2";
import Book from "./components/Book";
import Success from "./components/Success.jsx";
import PriceContenct from "./components/PriceContect.jsx";




export const UserContext = createContext();

function App() {

  useEffect(() => {
    Aos.init();
  }, []);

  // Initialize state using useReducer with reducer and initialState
  const [state, dispatch] = useReducer(reducer, initialState);
  const[islogin , setIslogin] = useState(false);

  useEffect(()=>{
    setIslogin(localStorage.getItem("islogin"));
  },[]);

  return (
    <div className="App">
      <UserContext.Provider value={{ state, dispatch , islogin , setIslogin }}>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/pricing" element={<Pricing/>} />
          <Route path="/about2" element={<About2/>} />
          <Route path="/feature1" element={<Feature1/>} />
          <Route path="/feature2" element={<Feature2/>} />
          <Route path="/feature3" element={<Feature3/>} />
          <Route path="/feature4" element={<Feature4/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/book" element={<Book/>} />
          <Route path="/success" element={<Success/>}/>
          <Route path="/PriceContenct" element={<PriceContenct/>} />
        </Routes>
       <Footer2/>
        
      </UserContext.Provider>
    </div>
  );
}

export default App;
