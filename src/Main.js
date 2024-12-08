import React from "react";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/Hero/Hero";
import CompanyList from "./components/companylist/CompanyList";

function Main() {
  return (
    <div>
      <NavBar />
      <main>
        {" "}
        <Hero />
        <CompanyList />
      </main>
    </div>
  );
}

export default Main;
