import React from "react";
import "./HeroStyle.css";
export default function Hero() {
  return (
    <>
      <section aria-label="Hero" className="w-100 hero-background">
        <div className="w-88 mx-auto max-w-1300">
          {" "}
          <div className="hero flex flex-column flex-row-xl justify-center justify-between-xl align-item-center">
            <div className="flex flex-column w-100 max-w-100 max-w-md-554 order-2 order-1-xl">
              {/* <div className="w-100 max-w-554"> */}
              <div className="mb-20 mb-md-10 flex flex-column max-xl-item-center max-xl-mt-40  ">
                <h1 className="text-left-xl">Unified Endpoint Management</h1>
                <h2 className=" h2-hero text-center text-left-xl ">
                  Gain control and visibility over your endpoints
                </h2>
              </div>
              <div className="mb-20">
                {" "}
                <p className="p-hero text-center text-left-xl">
                  Hexnode's UEM solution allows you to simplify endpoint
                  management and free up IT. Focus on the big picture while
                  Hexnode works on the details.
                </p>
              </div>
              <form data-hs-cf-bound="true" style={{ padding: 0, margin: 0 }}>
                <div className="flex  justify-between flex-column align-item-center flex-row-md justify-start-xl">
                  <div className="w-100 max-w-325 mr-sm-8 ">
                    {" "}
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      id="signup-email"
                      className="w-100"
                    />
                  </div>
                  <div className="w-100 max-w-325 mt-15 mt-sm-0 max-w-sm-210">
                    {" "}
                    <button role="button" className="h-53 w-100">
                      let's try it out
                    </button>
                  </div>
                </div>
              </form>
              <div style={{ paddingTop: "15px" }}></div>
              {/* </div> */}
            </div>
            <div className="w-100 max-w-100 max-w-md-610 order-1 order-2-xl relative ">
              <div className="w-100 max-w-610 relative mx-auto">
                {" "}
                <div className="w-100 h-100 max-w-610">
                  {" "}
                  <img
                    className="w-100 h-100"
                    width="610px"
                    height="465px"
                    style={{ color: "transparent" }}
                    src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fbanner%2Fbanner.jpg&w=640&q=90"
                    alt="hero"
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-100 h-100 absolute z-1 top-0">
                {" "}
                <img
                  className="w-100 h-100"
                  width="393px"
                  height="753px"
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
        </div>
      </section>
    </>
  );
}
