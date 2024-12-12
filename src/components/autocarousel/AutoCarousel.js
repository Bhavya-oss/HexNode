import React, { useState, useEffect } from "react";
import "./AutoCarouselStyle.css";

function AutoCarousel() {
  const logos = [
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/polaris.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/lowes.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/merck.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/marriott-intl.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/gorillas.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/wolt.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/saic.svg",
    "https://static.hexnode.com/v2/assets/img/logos/dark-logo/hilton.svg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 2000); // Move every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pt-20 pb-60 pb-lg-80 pt-lg-30">
      <div className="w-88 mx-auto relative max-w-md-1300">
        <div className="flex align align-item-center overflow-hidden">
          <div className="carousel">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (130 + 20)}px)`, // width + gap
                transition: "transform 1s ease",
                animation: "none", // Disable CSS animation
              }}
            >
              {logos.map((src, index) => (
                <div key={index} className="carousel-item">
                  <img src={src} alt={`logo-${index}`} />
                </div>
              ))}
              {/* Add a few duplicates at the end for smooth looping */}
              {logos.slice(0, 3).map((src, index) => (
                <div key={`duplicate-${index}`} className="carousel-item">
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
