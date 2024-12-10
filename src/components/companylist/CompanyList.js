import React from "react";
import "./CompanyListStyle.css";
// import { COMPANY_LIST_DATA } from "../../data";
function CompanyList() {
  const COMPANY_LIST_DATA = [
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fidc.png&w=96&q=75",
      text: "Hexnode is listed as a leader and a major player in IDC MarketScape UEM Vendors Assessment Reports 2024.",
      width: "83",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fgartner.png&w=128&q=75",
      text: "Hexnode mentioned as a Notable Vendor in Midmarket Context: Magic Quadrant for Unified Endpoint Management tools 2022.",
      width: "110",
    },
    {
      img: "https://www.hexnode.com/_next/image/?url=https%3A%2F%2Fstatic.hexnode.com%2Fv2%2Fassets%2Fimg%2Faccolades%2Fforrester.png&w=256&q=75",
      text: "Forrester includes Hexnode as a Notable vendor in The Unified Endpoint Management Landscape, Q3 2023.",
      width: "156",
    },
  ];
  //   console.log("COMPANY_LIST_DATACOMPANY_LIST_DATA0", COMPANY_LIST_DATA);

  return (
    <React.Fragment>
      <div className="py-30 companylist-bg">
        <div className="w-88 mx-auto max-w-1300">
          <div className="flex flex-column flex-row-md  max-md-align-center justify-center mx-0 justify-between-md mx-md-10 mx-lg-25 mx-xl-45">
            {COMPANY_LIST_DATA.map((data) => {
              return (
                <>
                  {" "}
                  <a
                    className="max-w-340 max-w-md-27 flex-w flex-w-md px-0 py-40 py-md-0 px-md-10 px-xl-45 px-lg-25  "
                    target="_blank"
                    href="https://www.hexnode.com/blogs/mitsogo-hexnode-named-a-leader-in-idc-marketscape-worldwide-uem-software-for-apple-devices-2024-vendor-assessment/"
                  >
                    <div
                      className="flex
             flex-column align-item-center  transform-company align-item-baseline-md"
                    >
                      <div className="flex mb-15">
                        {" "}
                        <div className="flex align-item-center min-w-82 w-100 h-100 max-h-25 max-w-156">
                          <img
                            src={data.img}
                            alt="IDC"
                            decoding="async"
                            loading="lazy"
                            width={data.width}
                            height={25}
                            className="w-100 max-w-100 h-25 object-cover"
                          />
                        </div>
                      </div>
                      <p className="companylist-p text-center text-left-md">
                        {data.text}
                      </p>
                    </div>
                  </a>
                  <div className="vertical-divider"></div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CompanyList;
