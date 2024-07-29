import React from 'react';
import Service from './Service';

const MainContent: React.FC = () => {
  return (
    <div className="container">
      <section className="section first">
        <div className="section--one--container">
          <h1 className="custom-h1">Beyond Reflection</h1>
          <p className="wide-paragraph">Step into the future of fashion with our smart mirror technology. Receive personalized outfit recommendations and shop effortlessly online. Discover your perfect look and make every shopping experience seamless and enjoyable.</p>
          <button className="button--hero">KNOW MORE</button>
        </div>
      </section>

      <section className="section second">
        <div className="section--two--container">
          <h2 className='section2'>About MirWear</h2>
          <p className="wide-paragraph">MirWear uses AI and AR to help you manage your wardrobe, get personalized style recommendations, and see how clothes look on you virtually. Always look your best with MirWear.</p>
        </div>
        <div className="custom--bg"></div>
      </section>

      <section className="section third">
        <div className="section--third--container">
          <Service/>
        </div>
      </section>

      
    </div>
  );
};

export default MainContent;
