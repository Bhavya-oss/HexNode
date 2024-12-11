import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero/Hero";
import CompanyList from "./components/companylist/CompanyList";
import WhyHexNode from "./components/whyhexnode/WhyHexNode";
import EndPoints from "./components/endpoints/EndPoints";
import FeedBack from "./components/feedback/FeedBack";
import AutoCarousel from "./components/autocarousel/AutoCarousel";
import Getuem from "./components/getuem/Getuem";
import Footer from "./components/footer/Footer";
import Multiplatform from "./components/platform/Multiplatform";

function Main() {
  return (
    <div>
      <NavBar />
      <main className="scroll-behaviour">
        {" "}
        <Hero />
        <CompanyList />
        <WhyHexNode />
        <EndPoints />
        <Multiplatform />
        <FeedBack />
        <AutoCarousel />
        <Getuem />
        <Footer />
      </main>
    </div>
  );
}

export default Main;
