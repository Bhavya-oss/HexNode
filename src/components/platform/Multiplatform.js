import React, { useState } from "react";

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
    <section id="platform">
      <div
        className="container"
        style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}
      >
        <h2
          style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}
        >
          Multi-platform Endpoint Management
        </h2>
        <p style={{ marginBottom: "24px" }}>
          Devices of varying platforms? Hexnode thrives in a diverse
          environment.
        </p>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "50%",
              paddingRight: "24px",
              position: "relative",
              height: "400px",
            }}
          >
            {platformData.map((platform, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  transition: "all 0.5s",
                  transform:
                    selectedPlatform === index
                      ? "translateY(0)"
                      : "translateY(100%)",
                  opacity: selectedPlatform === index ? 1 : 0,
                  zIndex: selectedPlatform === index ? 1 : 0,
                }}
              >
                <img
                  src={platform.img}
                  alt={platform.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
          <div style={{ width: "50%" }}>
            {platformData.map((platform, index) => (
              <div
                key={index}
                style={{
                  borderBottom: "1px solid #ddd",
                  padding: "16px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedPlatform === index ? "#f9f9f9" : "transparent",
                }}
                onClick={() => handlePlatformClick(index)}
              >
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    marginBottom: "8px",
                  }}
                >
                  {platform.title}
                </h3>
                {selectedPlatform === index && (
                  <div>
                    <p style={{ marginBottom: "8px" }}>
                      {platform.description}
                    </p>
                    {platform.urlP && (
                      <a href="#" style={{ color: "#e74c3c" }}>
                        {platform.urlP}
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Multiplatform;
