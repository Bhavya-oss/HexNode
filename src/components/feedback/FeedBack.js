import React, { useState, useEffect } from "react";
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

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FEEDBACK_DATA.length);
    }, 9000);

    return () => clearInterval(intervalId);
  }, [FEEDBACK_DATA.length]);

  // Manual navigation handlers
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? FEEDBACK_DATA.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % FEEDBACK_DATA.length);
  };

  const currentItem = FEEDBACK_DATA[currentIndex];

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
            <button
              className="absolute button-carousel button-left group move-button"
              onClick={handlePrevClick}
              disabled={currentIndex === 0} // Disable when at the first slide
            >
              <img
                alt="previous arrow"
                loading="lazy"
                width={9}
                height={17}
                decoding="async"
                className="mx-auto opacity-75"
                src="https://static.hexnode.com/v2/assets/img/ads-pages/prev-arrow-icon-black.svg"
              />
            </button>

            <div className="flex flex-wrap">
              <div className="flex flex-column flex-row-md">
                <div className="max-h-400 w-280 h-280 w-sm-400 h-sm-400 w-lg-320 h-lg-320 relative basis-md max-w-320 overflow-hidden border-radius-feedback ">
                  <img
                    loading="lazy"
                    decoding="async"
                    className="object-cover align-middle border-radius-feedback"
                    src={currentItem.image}
                    alt={currentItem.name}
                  />
                </div>
                <div
                  className="max-w-640 flex justify-between flex-column grow border-radius-feedback-left"
                  style={{ backgroundColor: "#f7f7f7" }}
                >
                  <div
                    className="min-h-md-135 max-h-md-135 overflow-md px-20 pt-20 pb-30 px-md-40 py-md-0 mt-md-40 "
                    style={{
                      scrollbarWidth: "none",
                    }}
                  >
                    <h4 className="text-left-md text-center">
                      "{currentItem.quote}"
                    </h4>
                  </div>
                  <div
                    className="px-20 py-12 px-md-40 py-md-0 feedback-bordertop flex flex-column justify-center align-item-center min-h-73 min-h-md-120"
                    style={{ backgroundColor: "#020a190d" }}
                  >
                    <p className="text-center text-left-md w-100 mx-auto feedback-author pb-5 pb-sm-0">
                      {currentItem.name}
                    </p>
                    <p
                      className="  text-center text-left-md w-100 mx-auto  feedback-sub-title "
                      style={{ display: "block" }}
                    >
                      {currentItem.title}
                    </p>
                    {currentItem.company && (
                      <p
                        className="feedback-sub-title text-center text-left-md w-100"
                        style={{ display: "block" }}
                      >
                        {currentItem.company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <button
              className="button-carousel button-right absolute"
              onClick={handleNextClick}
              disabled={currentIndex === FEEDBACK_DATA.length - 1} // Disable when at the last slide
            >
              <img
                alt="next arrow"
                loading="lazy"
                width={9}
                height={17}
                decoding="async"
                className="mx-auto opacity-75"
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
