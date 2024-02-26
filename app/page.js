"use client"
import React from "react";

import "./globals.css";
import Header from "./header.js";
import SearchBar from "./search_bar.js"
import Grid from "./grid.js";
import Footer from "./footer.js"

const page = () => {
  return (
    <>
      <Header/>
      <div className="container">
        <SearchBar/>
        <Grid/> 
      </div>
      <Footer/>
    </>
  );
}
export default page;