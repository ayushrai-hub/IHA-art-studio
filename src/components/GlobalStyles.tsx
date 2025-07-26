import React, { useEffect } from 'react';
import '../styles/global.css';

const GlobalStyles: React.FC = () => {
  useEffect(() => {
    // Add Google Fonts link to the document head
    const link1 = document.createElement('link');
    link1.rel = 'preconnect';
    link1.href = 'https://fonts.googleapis.com';
    
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'anonymous';
    
    const link3 = document.createElement('link');
    link3.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap';
    link3.rel = 'stylesheet';
    
    document.head.appendChild(link1);
    document.head.appendChild(link2);
    document.head.appendChild(link3);
    
    return () => {
      // Cleanup on unmount
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);
  
  return null;
};

export default GlobalStyles;
