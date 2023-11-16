import React from "react";
import {
  whatsApp,
  eMail,
  linkedIn,
  github,
  gitHubLink,
  linkedInLink,
} from "../components/icons";
import ContactForm from "../components/ContactForm";
function Cta(props) {
  return (
    <>
      <section className={"cta-section container "} id={props.id}>
        <div className="cta-title">
          <h2>Get in touch</h2>
        </div>
        <div className="container grid grid--cta">
          <div className="contact-info grid">
            <div className="contact-details grid">
              <div className="phone-box contact-box">
                {whatsApp}
                <p>+44 7496481135</p>
              </div>
              <div className="email-box contact-box">
                {eMail}
                <p>mkocik.dev@gmail.com</p>
              </div>
              a
              <div className="linkedin-box contact-box">
                {linkedIn}
                <p>Michal Kocik</p>
              </div>
              <div className="contact-box">
                {github}
                <p>MikeWDev</p>
              </div>
            </div>
            <div className="gap-con-sm text-gap">
              <p>
                OR
                <br></br>
                <div className="arrow">
                  <ion-icon
                    size="large"
                    className="arrow-icon"
                    name="arrow-down-outline"
                  ></ion-icon>
                </div>
              </p>
            </div>
          </div>
          <div className="text-gap gap-con-lg">
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
