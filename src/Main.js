import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero/Hero";
import CompanyList from "./components/companylist/CompanyList";
import WhyHexNode from "./components/whyhexnode/WhyHexNode";

function Main() {
  return (
    <div>
      <NavBar />
      <main>
        {" "}
        <Hero />
        <CompanyList />
        <WhyHexNode />
      </main>
    </div>
  );
}

export default Main;
