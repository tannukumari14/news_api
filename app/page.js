"use client"
import React from "react";
import "./globals.css";
import Header from "./header.js";
import Search from "./search_bar.js"
import Grid from "./grid.js";
import Footer from "./footer.js"
const page = () => {
  return (
    <div>
      <Header/>
      <div className="border-line-1"></div>
      <div className="border-line-2"></div>
      <Search/>
      <Grid/>
      <div className="line"></div>
      <Footer/>
    </div>
  );
}

export default page;