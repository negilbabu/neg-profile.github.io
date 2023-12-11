import { useState } from "react";
import React from "react";


const Contact = () => {


const [isFormValid, setIsFormValid] = useState(false);

const handleFormChange = () => {
  // Perform any validation logic here
  // For simplicity, let's assume the form is valid if all fields are filled
  const form = document.forms[0];
  const isValid = form.checkValidity();
  setIsFormValid(isValid);
};




  return (
    <div id="contact" className="max-w-[1140px] m-auto md:pl-20 p-4 py-16 ">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>

      <form
        action="https://getform.io/f/4b830dd3-11de-4691-a98e-2b4ce29511de"
        method="POST"
        encType="multipart/form-data"
        onChange={handleFormChange}
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              title="Please enter your name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2">Phone</label>
            <input
              type="text"
              name="phone"
              title="Please enter your phone"
              className="border-2 rounded-lg p-3 flex border-gray-300"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            title="Please enter your email"
            name="email"
            required
          />
        </div>

        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Subject</label>
          <input
            type="text"
            title="Please enter your message subject"
            name="subject"
            className="border-2 rounded-lg p-3 flex border-gray-300"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2">Message</label>
          <textarea
            rows="10"
            title="Please enter your message"
            name="message"
            className="border-2 rounded-lg p-3 flex border-gray-300"
            required
          />
        </div>
        <button
          className={`bg-[#001b5e] text-gray-100 mt-4 w-full rounded-lg p-4 ${
            isFormValid ? "" : "hidden"
          }`}
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
