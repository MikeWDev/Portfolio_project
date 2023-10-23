import React from "react";
import ButtonFull from "./buttonFull";
function ContactForm() {
  return (
    <>
      <div className="contact">
        <div className="labels">
          <div className="single-label">
            <label>Name: </label>
          </div>
          <div className="single-label">
            {" "}
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
              <input type="text" placeholder="Your name" className="name" />
            </div>
            <div className="email box">
              <input placeholder="Your email" type="text" className="email" />
            </div>
            <div className="phone box">
              <input
                placeholder=" Your phone number"
                type="text"
                className="phone-no"
              />
            </div>
            <div className="dm box  ">
              <input
                placeholder="Your messege"
                type="text"
                className="message"
              />
            </div>
            <div className="submit-btn-box">
              <ButtonFull class=" btn--hover btn--hero" text="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;
