import React, { useState, useRef, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null); // Reference to the Hero component
  const navbarRef = useRef(null); // Reference to the Navbar component

  useEffect(() => {
    const handleScroll = () => {
      const heroTop = heroRef.current.getBoundingClientRect().top;
      const navbarHeight = navbarRef.current.offsetHeight;

      if (heroTop <= navbarHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log("isVisibleisVisibleisVisible", isVisible);
  return (
    <div>
      <NavBar navbarRef={navbarRef} isVisible={isVisible} />
      <main className="scroll-behaviour">
        {" "}
        <Hero heroRef={heroRef} />
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
