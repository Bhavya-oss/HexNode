import React from "react";
import "./FeedBackStyle.css";

function FeedBack() {
  const FEEDBACK_DATA = [
    {
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80",
      quote:
        "Most complete MDM solution I found, and I tested many of them, including major names",
      name: "Dalibor Kruljac",
      title: "KAMELEYA LTD",
      company: "",
    },
    {
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fchris-robinson.png&w=1920&q=80",
      quote: "It seemed to be in-line with everything we were looking at.",
      name: "Chris Robinson",
      title: "Executive Account Manager, NCS",
      company: "",
    },
    {
      image:
        "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80",
      quote: "Hexnode is of great value. Works great with Android and iOS!",
      name: "Justin Modrak",
      title: "Technology Coordinator",
      company: "East Troy Community School District",
    },
  ];
  return (
    <>
      <section
        id="customers"
        aria-label="Customers FeedBack"
        className="pt-60 pb-20 pt-lg-80 pb-lg-30 relative"
      >
        <div className="w-88 mx-auto max-w-1300">
          <h2 className="text-center pb-0 pb-md-20">What our customers say</h2>
          <div className="max-w-280 max-w-md-960 max-w-lg-780 max-w-xl-960 pt-40 pb-80 pb-lg-0 relative mx-auto">
            {/* <div className="slick-carousel">
              <ul className="slider-wrapper">
                <div className="slick-slider slick-initialized" dir="ltr">
                  <button className="absolute button-carousel button-left group ">
                    <img
                      alt="previous arrow"
                      loading="lazy"
                      width={9}
                      height={17}
                      decoding="async"
                      className="mx-auto  opacity-75  "
                      src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"
                    />
                  </button>
                  <div className="slick-list">
                    <div
                      className="slick-track mx-auto"
                      style={{
                        width: "2880px",
                        opacity: 1,
                        // transform: "translate3d(-1920, 0, 0)",
                      }}
                    >
                      <div
                        data-index="0"
                        className="slick-slide slick-active slick-current"
                        tabIndex={-1}
                        aria-hidden="false"
                        style={{ outline: "none", width: "960px" }}
                      >
                        <div className="flex flex-column flex-row-md overflow-hidden radius-18 relative group ">
                          <div className="overflow-hidden relative max-h-400 h-280 w-280 w-sm-400 h-sm-400 w-lg-320 h-lg-320 basis-md max-w-md-320 ">
                            <img
                              src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fjustin-modrak.png&w=1920&q=80"
                              alt="Justin Modrak"
                              loading="lazy"
                              decoding="async"
                              className="object-cover align-middle "
                              style={{
                                position: "absolute",
                                height: "100% ",
                                width: "100%",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                              }}
                            />
                          </div>

                          <div
                            style={{ backgroundColor: "#f7f7f7" }}
                            className="flex flex-column justify-between grow w-280 w-sm-400  w-lg-640  basis-md max-w-md-320 
                          "
                          >
                            <div className="min-h-md-135 max-h-md-135 overflow-md pt-20 pb-30 px-20  px-md-40 py-md-0 mt-md-40 cusreviewslider_hide-scrollbar__lQqUC">
                              <h4 className="text-left-md text-center">
                                "Hexnode is of great value. Works great with
                                Android and iOS!"
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        data-index="0"
                        className="slick-slide "
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "960px" }}
                      ></div>
                      <div
                        data-index="0"
                        className="slick-slide "
                        tabIndex={-1}
                        aria-hidden="true"
                        style={{ outline: "none", width: "960px" }}
                      ></div>
                    </div>
                  </div>
                  <button className="button-carousel button-right absolute">
                    <img
                      alt="next arrow"
                      loading="lazy"
                      width={9}
                      height={17}
                      decoding="async"
                      class="mx-auto opacity-75  "
                      src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"
                    />
                  </button>
                </div>
              </ul>
            </div> */}
            <button className="absolute button-carousel button-left group move-button">
              <img
                alt="previous arrow"
                loading="lazy"
                width={9}
                height={17}
                decoding="async"
                className="mx-auto  opacity-75  "
                src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"
              />
            </button>
            <div className="flex flex-wrap">
              {FEEDBACK_DATA.map((item, indx) => (
                <div className="flex flex-column flex-row-md">
                  <div className="max-h-400 w-280 h-280 w-sm-400 h-sm-400 w-lg-320 h-lg-320 relative basis-md max-w-320 overflow-hidden radius-18">
                    <img
                      loading="lazy"
                      decoding="async"
                      className="object-cover align-middle radius-18"
                      src="https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fcustomer-images%2Fdalibor-kruljac.png&w=1920&q=80"
                      alt=""
                    />
                  </div>
                  <div
                    className="max-w-640 flex justify-between flex-column grow "
                    style={{ backgroundColor: "#f7f7f7" }}
                  >
                    <div
                      className="min-h-md-135 max-h-md-135 overflow-md px-20 pt-20 pb-30 px-md-40 py-md-0 mt-md-40"
                      style={{ scrollbarWidth: "none" }}
                    >
                      <h4 className="text-left-md text-center">
                        "Hexnode is of great value. Works great with Android and
                        iOS!"
                      </h4>
                    </div>
                    <div
                      className="px-20 py-12  px-md-40 py-md-0 feedback-bordertop flex flex-column justify-center align-item-center min-h-73 min-h-md-120 "
                      style={{ backgroundColor: "#020a190d" }}
                    >
                      <p className="text-center text-left-md w-100 mx-auto feedback-author pb-5 pb-sm-0">
                        Chris Robinson
                      </p>
                      <p className="feedback-sub-title text-center text-left-md  ">
                        Executive Account Manager, NCS
                      </p>
                      <p className="feedback-sub-title text-center text-left-md w-full">
                        ejadi
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="button-carousel button-right absolute">
              <img
                alt="next arrow"
                loading="lazy"
                width={9}
                height={17}
                decoding="async"
                class="mx-auto opacity-75  "
                src="https://static.hexnode.com/v2/assets/img/ads-pages/next-arrow-icon-black.svg"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeedBack;
