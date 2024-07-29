import React from 'react';

const Contact = () => {
  return (
    <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto my-10 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-custom-pink dark:bg-custom-pink dark:text-white">
      <div className="flex flex-col justify-between">
        <div className="space-y-2">
        <h2 className="text-4xl font-bold leading-tight lg:text-5xl text-black dark:text-black">Get in touch</h2>

          <div className="dark:text-gray-800 text-black">Vivamus in nisl metus? Phasellus.</div>
        </div>
        <img src="https://mambaui.com/assets/svg/doodle.svg" alt="Doodle" className="p-6 h-52 md:h-64" />
      </div>
      <form className="space-y-6   p-4 rounded-lg">
        <div>
          <label htmlFor="name" className="text-sm text-black ">Full name</label>
          <input id="name" type="text" placeholder="Your full name" className="w-full p-3 rounded  dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm text-black ">Email</label>
          <input id="email" type="email"  placeholder="Your Email" className="w-full p-3 rounded   dark:text-gray-100" />
        </div>
        <div>
          <label htmlFor="message" className="text-sm text-black ">Message</label>
          <textarea id="message" rows={3} className="w-full p-3 rounded  dark:text-gray-100"></textarea>
        </div>
        <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-white dark:bg-violet-700 dark:text-gray-50">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
