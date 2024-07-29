import React from 'react';

const Service = () => {
  return (
    <section className="m-4 md:m-8 text-center">
      <div className="overflow-x-hidden container mx-auto p-4 my-6 space-y-2 text-center">
        <h2 className="text-5xl font-bold text-white">Services</h2>
      </div>
      <div className="container mx-auto grid justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-600">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-4xl font-semibold text-white">Outfit Recommendations</h3>
          <div className="space-y-1 leading-tight text-white">
            <p>Get personalized outfit suggestions</p>
            <p>based on your style preferences</p>
            <p>weather conditions, and upcoming events</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-600">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-4xl font-semibold text-white">Virtual Try-On</h3>
          <div className="space-y-1 leading-tight text-white">
            <p>See how clothes look on you</p>
            <p>with augmented reality.</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-600">
            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
          </svg>
          <h3 className="my-3 text-4xl font-semibold text-white">Wardrobe Management</h3>
          <div className="space-y-1 leading-tight text-white">
            <p>Easily add new items.</p>
            <p>Our AI categorizes them for you.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
