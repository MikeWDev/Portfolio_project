import React from "react";
import {
  whatsApp,
  eMail,
  linkedIn,
  twitter,
  message,
} from "../components/icons";
import ContactForm from "../components/contactForm";
function Cta(props) {
  return (
    <>
      <section className={"cta-section container "} id={props.id}>
        <div className="cta-title">
          <h2>Ready to enter digital word?</h2>
          <h3>Contact me</h3>
        </div>
        <div className="container grid grid--cta">
          <div className="contact-info grid">
            <div className="phone-box contact-box">
              {whatsApp}
              <p>07496481135</p>
            </div>
            <div className="email-box contact-box">
              {eMail}
              <p>mkocik.dev@gmail.com</p>
            </div>
            <div className="linkedin-box contact-box">
              {linkedIn}
              <p>fjdfsdjfsjdf</p>
            </div>
            <div className="twitter-box contact-box">
              {twitter}
              <p>dskfsdkfdsf</p>
            </div>
          </div>
          <div className="text-gap">
            <p>OR</p>
          </div>
          <div className="contact-form grid">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
export default Cta;
