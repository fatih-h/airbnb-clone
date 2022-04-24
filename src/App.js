import React from "react";
import "./App.css";

import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SearchPage from "./SearchPage";


function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        
        <Routes>

          <Route path='/' element={<Home />}/>
        
          <Route path='/search' element={<SearchPage />}/>
        
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
