import { 
  ReactInstance, 
  Surface, 
  Location } from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });
  // new Location([0, 0, -2], [0, Math.PI / 2, 0]);

  r360.renderToLocation(
    r360.createRoot('TCGMTour'),
    new Location([0, 0, 0]),
  );

  // Load the initial environment
  // r360.compositor.setBackground(r360.getAssetURL('001_Outside1.jpg'));
}

window.React360 = { init };
