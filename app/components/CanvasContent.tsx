import React from 'react';

const CanvasComponent: React.FC = () => {
  return (
    <div id="webgi-canvas-container">
      <canvas id="webgi-canvas"></canvas>
      <button className="button--customize button--exit">EXIT</button>
    </div>
  );
};

export default CanvasComponent;
