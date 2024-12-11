import React, { useState } from "react";
import "./MultiplatformStyle.css";
function Multiplatform() {
  const [selectedPlatform, setSelectedPlatform] = useState(0);

  const platformData = [
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fandroid.jpg&w=640&q=90",
      title: "Android",
      description:
        "Remotely deploy, manage, monitor and secure Android devices in your organization. Set compliance benchmarks and leverage Android Enterprise to its full capabilities.",
      urlP: "Try Hexnode on your endpoints",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FiOS.jpg&w=640&q=90",
      title: "iOS",
      description:
        "Manage, secure, and monitor iOS devices in your organization. With Hexnode's ABM and ASM integration, deploy devices and apps with ease.",
      urlP: "Try Hexnode on your endpoints",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FmacOS.jpg&w=640&q=90",
      title: "macOS",
      description:
        "Leverage Hexnode's desktop management capabilities to their fullest. Securely deploy and manage macOS devices in bulk with Hexnode UEM.",
      urlP: "Try Hexnode on your endpoints",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2Fwindows.jpg&w=640&q=90",
      title: "Windows",
      description:
        "Spearhead modern PC management in your organization with Hexnode. Set limits and monitor PC health and compliance remotely with Hexnode UEM.",
      urlP: "Try Hexnode on your endpoints",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FtvOS.jpg&w=640&q=90",
      title: "tvOS",
      description:
        "Remotely manage and secure tvOS devices with Hexnode. Display your brand aesthetics and custom messages on tvOS devices with Hexnode UEM.",
      urlP: "Try Hexnode on your endpoints",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fmulti-platforms%2FfireOS.jpg&w=640&q=90",
      title: "FireOS",
      description:
        "Enroll Amazon Fire tablets, phones and e-readers in Hexnode UEM to manage them all from a single console.",
      urlP: "Try Hexnode on your endpoints",
    },
  ];
  const handlePlatformClick = (index) => {
    setSelectedPlatform(index);
  };

  return (
    <section id="platform" className="platform-bg py-60 relative py-lg-80 ">
      <div className="w-sm-88 max-w-sm-1300 mx-sm-auto">
        <h2 className="text-center mx-auto pb-20 ">
          Multi-platform Endpoint Management
        </h2>
        <p className="hidden block-md text-center">
          Devices of varying platforms? Hexnode thrives in a diverse
          environment.
        </p>
        <div className="flex flex-column flex-row-sm align-item-flex-start justify-between  pt-md-50">
          <div
            className="flex-shrink w-md-46 max-w-md-600 h-100 max-h-565 relative overflow-hidden"
            style={{ position: "sticky", top: "66px" }}
          >
            <div
              style={{
                width: "100%",
                paddingRight: "24px",
                position: "relative",
                backgroundColor: "#f7f7f7",
                overflow: "hidden", // Ensures hidden overflow for smooth animation
                height: "565px", // Set a fixed height for the container
                position: "sticky",
                top: "66px",
              }}
            >
              {platformData.map((platform, index) => (
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "auto",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    transition: "transform 0.5s ease, opacity 0.5s ease",
                    transform:
                      selectedPlatform === index
                        ? "translateY(0)" // Current image in view
                        : selectedPlatform > index
                        ? "translateY(-100%)" // Outgoing image slides up
                        : "translateY(100%)", // Incoming image slides in from below
                    opacity: selectedPlatform === index ? 1 : 0,
                    zIndex: selectedPlatform === index ? 1 : 0, // Ensure active image is on top
                  }}
                >
                  <img
                    src={platform.img}
                    alt={platform.title}
                    style={{
                      width: "100%", // Makes the image responsive
                      height: "auto", // Ensures it fills the container
                      objectFit: "cover", // Maintains aspect ratio while filling the area
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-375 w-54 max-w-700 flex-shrink w-100 relative pl-40">
            {/* <div className=""> */} {/* <div style={{ width: "50%" }}> */}
            {platformData.map((platform, index) => (
              <div
                className={`relative ${
                  selectedPlatform === index
                    ? "platform-border px-30"
                    : "platform-border-bottom mx-30"
                }`}
                key={index}
                style={{
                  backgroundColor:
                    selectedPlatform === index ? "#f9f9f9" : "transparent",
                  borderRadius: selectedPlatform === index ? "15px" : "0",
                }}
                onClick={() => handlePlatformClick(index)}
              >
                <h3
                  className={`platform-heading text-left ${
                    selectedPlatform === index ? "pt-30" : "py-20"
                  }`}
                >
                  {platform.title}
                </h3>
                {selectedPlatform === index && (
                  <div
                    className={`relative platform-content ${
                      selectedPlatform === index ? "h-172" : "h-0"
                    }`}
                  >
                    <div className="pb-30">
                      <p className="platform-text">{platform.description}</p>
                      {platform.urlP && (
                        <a href="#" className="platform-check">
                          {platform.urlP}
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Multiplatform;
