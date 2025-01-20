import React from "react";
import PageHeaders from "../ui/PageHeaders";
import Location from "../components/Location";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <div id='contact-me' className='scroll-smooth  mt-10 p-5'>
      <PageHeaders title='Contact Me' />
      <div>
        <p className='mt-5 text-lg font-semibold text-gray-800'>
          I am available for freelance projects and open to new opportunities.
          <br />
          Please feel free to reach out to me via the following channels:
        </p>

        <div className='mt-12 grid grid-cols-1 items-center md:grid-cols-3 md:gap-10'>
          <div className="col-span-1">
            <Location />
          </div>

          <div className=" mt-6 md:mt-0 col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
