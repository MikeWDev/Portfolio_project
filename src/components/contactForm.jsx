import ButtonFull from "./buttonFull";
import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_API_PUBLIC_KEY;

    emailjs
      .sendForm(`${serviceId}`, `${templateID}`, form.current, `${publicKey}`)
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
          <form ref={form} onSubmit={sendEmail} id="form1">
            <div className="name box">
              <input
                id="user_name"
                name="user_name"
                type="text"
                placeholder="Your name"
                className="name"
              />
            </div>
            <div className="email box">
              <input
                id="user_email"
                name="user_email"
                placeholder="Your email"
                type="email"
                className="email"
              />
            </div>
            <div className="phone box">
              <input
                id="user_phoneno"
                name="user_phoneno"
                placeholder=" Your phone number"
                type="text"
                className="phone-no"
              />
            </div>
            <div className="dm box  ">
              <textarea
                id="message"
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
                form="form1"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
