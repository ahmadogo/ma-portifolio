import React from "react";

const ContactForm = () => {
  return (
    <div className='shadow-lg p-5'>
      <form action=''>
        <div className='md:flex items-center justify-between md:space-x-5'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='name' className='font-semibold text-gray-800'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='p-2 border border-gray-200 focus:outline-none w-full'
            />
          </div>

          <div className='flex flex-col  md:space-y-2'>
            <label htmlFor='email' className='font-semibold text-gray-800'>
              Email
            </label>
            <input
              type='email'
              id='email'
              className='p-2 border border-gray-200 focus:outline-none w-full '
            />
          </div>
        </div>

        <div className='mt-4'>
          <label htmlFor='message' className='font-semibold  text-gray-800'>
            Message
          </label>
          <div className='mt-2'>
            <textarea
              name='message'
              id='message'
              // cols='50'
              rows='10'
              className='p-2 border border-gray-200 focus:outline-none w-full '
            ></textarea>
          </div>
        </div>
        <div className='mt-4 flex justify-end'>
          <button className='bg-blue-400 text-white font-semibold py-2 px-6  rounded-md'>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
