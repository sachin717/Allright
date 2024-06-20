import React from "react";

const FooterSection = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerMain">
          <h2>Subscribe to our emails</h2>
          <p>Join our email list for exclusive offers and the latest news. </p>
          <div>
          <input type="email" placeholder="Email"/>
          </div>
        </div>
        <div className="footerFoot">
          <p>
            @ 2024, <a href="#">AllRight </a> <a href="#">Powered by Shopify</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default FooterSection;
