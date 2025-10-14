import React from 'react';
import './SplashScreen.css';
import { IonCard, IonCardContent } from '@ionic/react';

const SplashScreen: React.FC = () => {
  return (
    <div className="splash-screen">
      <div className="splash-content">
          <img alt="Silhouette of mountains" className="splash-image" src="https://content.derbayerischeclub.de/wp-content/uploads/2025/08/cropped-logo-opening-1-e1756242601246-2048x1978-1.webp" />
        <div>
          <span className="splash-title">Der Bayerische Club</span>
        </div>

        <div className="loading-indicator">
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
