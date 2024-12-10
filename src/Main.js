import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero/Hero";
import CompanyList from "./components/companylist/CompanyList";
import WhyHexNode from "./components/whyhexnode/WhyHexNode";
import EndPoints from "./components/endpoints/EndPoints";
import FeedBack from "./components/feedback/FeedBack";
import AutoCarousel from "./components/autocarousel/AutoCarousel";

function Main() {
  return (
    <div>
      <NavBar />
      <main>
        {" "}
        <Hero />
        <CompanyList />
        <WhyHexNode />
        <EndPoints />
        <FeedBack />
        <AutoCarousel />
      </main>
    </div>
  );
}

export default Main;
