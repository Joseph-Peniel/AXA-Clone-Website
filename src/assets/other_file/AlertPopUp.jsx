import React, { useEffect, useState } from 'react';

const AlertPopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const poppy = localStorage.getItem('scam_alert_popup');

    if (!poppy) {
      setTimeout(() => {
        setIsVisible(true); // Show the alert after 1 second
      }, 1000);

      localStorage.setItem('scam_alert_popup', 'true');
    } else {
      // Show Cookie Alert
      const cookieConsent = document.getElementById("cookieConsent");
      if (cookieConsent) {
        cookieConsent.classList.add("show");
      }
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Hide the alert
    const cookieConsent = document.getElementById("cookieConsent");
    if (cookieConsent) {
      cookieConsent.classList.add("show");
    }
  };

  return (
    <>
      {isVisible && (
        <div className="cookie-consent clearfix scam-alert" style={{ background: '#f75157' }}>
          <div className="cookie-content">
            <h3>Disclaimer Notice!</h3>
            <p>
              It has come to our attention that a fraudulent message is being circulated via a WhatsApp group using the company's previous
              corporate name 'Guaranty Trust Assurance'.
            </p>
            <p>
              Notice is hereby given to the general public that AXA Mansard has no affiliation with this Ponzi Scheme, and the general public is strongly advised to refrain from having any dealings with it. Any person who engages with the group does so at its/his/her own risk and AXA Mansard shall not be responsible for any liability arising from such business, interaction or engagement.
            </p>
          </div>
          <div className="cookie-action">
            <button type="button" className="button medium ghost-white" onClick={handleClose}>
              <span>OKAY, I UNDERSTAND</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertPopUp;
