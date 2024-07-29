import React from 'react';

const Customizer: React.FC = () => {
  return (
    <div className="customizer--container">
      <ul className="strap--colors">
        <li className="button--colors yellow"></li>
        <li className="button--colors red"></li>
        <li className="button--colors black"></li>
      </ul>
    </div>
  );
};

export default Customizer;
