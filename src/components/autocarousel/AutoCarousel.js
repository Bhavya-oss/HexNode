import React from "react";
import "./AutoCarouselStyle.css";
function AutoCarousel() {
  const logos = [
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
    "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Flogos%2Fdark-logo%2Fgroup1-automotive.png&w=828&q=75",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
  ];
  return (
    <section className="pt-20 pb-60 pb-lg-80 pt-lg-30 ">
      <div className="w-88 mx-auto relative max-w-md-1300">
        <div className="flex align align-item-center overflow-hidden">
          <div className="carousel">
            <div className="carousel-track">
              {logos.map((src, index) => (
                <div
                  key={index}
                  className="carousel-item max-width-130 max-w-sm-200"
                >
                  <img src={src} alt={`logo-${index}`} />
                </div>
              ))}
              {/* Duplicate for seamless looping */}
              {logos.map((src, index) => (
                <div
                  key={index + logos.length}
                  className="carousel-item max-width-130 max-w-sm-200"
                >
                  <img src={src} alt={`logo-duplicate-${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutoCarousel;
