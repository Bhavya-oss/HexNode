import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer-bg" style={{ paddingBottom: "500px" }}>
      <nav>
        <div className="w-88 mx-auto max-w-md-1300  ">
          <div className="flex flex-column flex-wrap w-100 flex-row-sm align-item-center justify-center justify-between-sm">
            <div className="m-0-0-20 order-1 m-sm-0 order-sm-2">
              <ul className="flex flex-row flex-wrap ">
                <li className="footer-li">
                  <a
                    href="https://www.hexnode.com/legal/terms-of-use/"
                    className="footer-text"
                  >
                    Terms of Use
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    href="https://www.hexnode.com/legal/terms-of-use/"
                    className="footer-text"
                  >
                    Privacy
                  </a>
                </li>
                <li className="footer-li">
                  <a
                    href="https://www.hexnode.com/legal/terms-of-use/"
                    className="footer-text"
                  >
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex order-3">
              <p className="footer-text">
                Copyright &copy; {new Date().getFullYear()} Mitsogo Inc. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
