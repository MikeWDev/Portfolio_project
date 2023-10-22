import React from "react";
import ButtonFull from "./buttonFull";
function ContactForm() {
  return (
    <>
      <div className="contact">
        <form action="post">
          <div className="name box">
            <label>Name: </label>
            <input type="text" placeholder="Your name" className="name" />
          </div>
          <div className="email box">
            <label htmlFor="input">E-mail: </label>
            <input placeholder="Your email" type="text" className="email" />
          </div>
          <div className="phone box">
            <label htmlFor="">Phone no:</label>
            <input
              placeholder=" Your phone number"
              type="text"
              className="phone-no"
            />
          </div>
          <div className="dm box  ">
            <label htmlFor="">Message:</label>
            <input placeholder="Your messege" type="text" className="message" />
          </div>
          <div className="submit-btn-box">
            <ButtonFull class=" btn--hover btn--hero" text="Submit" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
