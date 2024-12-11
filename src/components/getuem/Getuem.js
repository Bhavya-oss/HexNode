import React from "react";
import "./Getuem.css";
function Getuem() {
  return (
    <>
      <section className="getuem-bg flex justify-center align-item-center h-md-330 py-40 py-md-0">
        <div className="w-88 mx-auto max-w-md-1300">
          <div className="w-100 text-center mx-auto max-w-1000">
            <h3 className="text-center mb-20 getuem-text">
              Get Hexnode UEM and start securing your endpoints
            </h3>
          </div>
          <div className="flex align-item-center justify-center">
            <button>
              <a href="https://www.hexnode.com/mobile-device-management/cloud/signup/">
                try hexnode for free
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Getuem;
