import React from "react";
import "./HeroStyle.css";
export default function Hero() {
  return (
    <>
      <section className="w-100 hero-background">
        <div className="hero flex justify-between align-item-center">
          <div className="w-100 max-w-554">
            <h1>Unified Endpoint Management</h1>
            <h2 className="color-h2 h2-hero">
              Gain control and visibility over your endpoints
            </h2>
            <p className="p-hero">
              Hexnode's UEM solution allows you to simplify endpoint management
              and free up IT. Focus on the big picture while Hexnode works on
              the details.
            </p>
            <form>
              <div className="flex ">
                <div className="w-100">
                  {" "}
                  <input type="text" placeholder="Email" id="signup-email" />
                </div>
                <div className="w-100">
                  {" "}
                  <button className="h-53">let's try it out</button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-100 max-w-610 relative mx-auto">
            <div className="w-100 h-100">
              {" "}
              <img
                className="w-100 h-100"
                width="610"
                height="465"
                style={{ color: "transparent" }}
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fbanner.jpg&w=640&q=90"
                alt="hero"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="w-100 h-100 absolute z-1 top-0">
              {" "}
              <img
                className="w-100 h-100"
                width="610"
                height="465"
                style={{ color: "transparent" }}
                src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fbaner.png&w=640&q=90"
                alt="hero"
                decoding="async"
                loading="lazy"
              />
            </div>
            <div className="hero-group group1-bg banner_tick-animate-wrap__7tPRE ">
              <div className="check banner_tick-animate__Cw5VR translate-y-minus-50 translate-x-minus-2 scale-y"></div>
              <div className="hero-points">
                {" "}
                <i className="fa-solid fa-check check1-color"></i>
              </div>
              <span className="check-text z-1">Password policy applied</span>
            </div>
            <div className="hero-group group2-bg banner_tick-animate-wrap__7tPRE ">
              <div className="check banner_tick-animate__Cw5VR translate-y-minus-50 translate-x-minus-2 scale-y"></div>
              <div className="hero-points">
                {" "}
                <i className="fa-solid fa-check check2-color"></i>
              </div>
              <span className="check-text z-1">TvOS Kiosk Active</span>
            </div>
            <div className="hero-group z-2 group3-bg banner_tick-animate-wrap__7tPRE ">
              <div className="check banner_tick-animate__Cw5VR translate-y-minus-50 translate-x-minus-2 scale-y"></div>
              <div className="hero-points">
                {" "}
                <i className="fa-solid fa-check check3-color"></i>
              </div>
              <span className="check-text z-1">Device Enrolled</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
