import React from "react";
import "./Home.css";

// Components
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Corousel from "../../Components/Corousel/Corousel";
import DirectorMessage from "../../Components/DirectorMessage/DirectorMessage";
import Partners from "../../Components/Partners/Partners";


export default function Home() {
  return (
    <div className="Home">
      <Header />
      <Navbar />
      <Corousel />
      <DirectorMessage/>
      <Partners />
    </div>
  );
}
