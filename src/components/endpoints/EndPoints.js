import React from "react";
import "./EndPointsStyle.css";

function EndPoints() {
  const END_POINT = [
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fzero-touch.jpg&w=384&q=100",
      alt: "Zero-touch Enrollment",
      title: "Zero-touch Enrollment",
      paragraph:
        "Onboard endpoints and users with minimal user intervention. Provision devices and set up configurations well before the user gets their hands on.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fautomation.jpg&w=384&q=100",
      alt: "Automation",
      title: "Automation",
      paragraph:
        "Automate endpoint compliance with dynamic grouping and breeze through day-to-day IT tasks with scripting capabilities. Hexnode also allows the creation of automated reports.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fremote-access.jpg&w=384&q=100",
      alt: "Remote Access Management",
      title: "Remote Access Management",
      paragraph:
        "Hexnode UEM enables the enterprise to manage every single device in the corporate ecosystem for optimal and secure operation.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fendpoint-security.jpg&w=384&q=100",
      alt: "Endpoint Security and Compliance",
      title: "Endpoint Security and Compliance",
      paragraph:
        "Hexnode helps you maintain compliance with international regulatory bodies and set up custom rules for compliance within your business for security purposes.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fintegrations.jpg&w=384&q=100",
      alt: "Integrations",
      title: "Integrations",
      paragraph:
        "Hexnode's various integrations make it easy to fit into your current endpoint ecosystem. These integrations include Azure AD, Okta, Android Enterprise, Apple School and Business manager, and many more enterprise and technology integrations.",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Fads-pages%2Fdevice-blog%2Fapp-management.jpg&w=384&q=100",
      alt: "App Management",
      title: "App Management",
      paragraph:
        "Set up a bespoke app store, enable mandatory apps, and ensure endpoints come equipped with all the required applications, custom enterprise apps included.",
    },
  ];
  return (
    <>
      <section
        id="features"
        aria-label="Powerful endpoint management"
        className="relative py-60 py-lg-80"
      >
        <div className="w-88 mx-auto max-w-1300">
          <h2 className="text-center mx-auto pb-40 max-w-800">
            Powerful endpoint management, built for the devices you choose
          </h2>
          <div className="endpoint-grid-container">
            {END_POINT.map((data) => {
              return (
                <>
                  <div className="mx-auto max-w-340 max-w-md-380">
                    <div className=" max-w-340 max-h-240 overflow-hidden radius-10 w-100">
                      <img
                        src={data.img}
                        alt={data.alt}
                        loading="lazy"
                        width="380px"
                        height="240px"
                        decoding="async"
                        className="relative"
                      />
                    </div>
                    <h3 className="text-center text-left-md pb-15 pt-20 pb-md-20 pt-md-40">
                      {data.title}{" "}
                    </h3>
                    <p className="text-center text-left-md">{data.paragraph}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default EndPoints;
