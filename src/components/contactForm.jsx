import React, { useRef } from "react";
import ButtonFull from "./buttonFull";
import emailjs from "@emailjs/browser";
function ContactForm() {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm({ serviceId }, { templateID }, form.current, { publicKey })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact">
          <div className="labels">
            <div className="single-label">
              <label>Name: </label>
            </div>
            <div className="single-label">
              <label htmlFor="input">E-mail: </label>
            </div>
            <div className="single-label">
              <label htmlFor="">Phone no:</label>
            </div>
            <div className="single-label">
              <label htmlFor="">Message:</label>
            </div>
          </div>
          <div className="inputs">
            <form action="post">
              <div className="name box">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Your name"
                  className="name"
                />
              </div>
              <div className="email box">
                <input
                  name="from_email"
                  placeholder="Your email"
                  type="email"
                  className="email"
                />
              </div>
              <div className="phone box">
                <input
                  name="from_phoneno"
                  placeholder=" Your phone number"
                  type="text"
                  className="phone-no"
                />
              </div>
              <div className="dm box  ">
                <textarea
                  name="message"
                  cols="50"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="submit-btn-box">
                <ButtonFull
                  class="btn--hover btn--hero"
                  text="Submit"
                  type="submit"
                  value="Send"
                />
              </div>
            </form>
          </div>
        </div>
      </form>
    </>
  );
}

export default ContactForm;
