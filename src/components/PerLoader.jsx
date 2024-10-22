import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PreLoader = () => {
  useEffect(() => {
    const handlePreloader = () => {
      const loaderWrap = document.querySelector('.loader-wrap');
      
      if (loaderWrap) {
        // Fade out loader after 1 second
        setTimeout(() => {
          gsap.to(loaderWrap, {
            duration: 1,
         
            onComplete: () => {
              loaderWrap.style.display = 'none';
            }
          });
        }, 1000);

        // Animate overlay
        gsap.to('.loader-wrap .overlay', {
          duration: 1.5,
          left: '100%',
         
          force3D: true
        });
      }
    };

    // Run the animation when component mounts
    handlePreloader();
  }, []);

  return (
    <div  className="loader-wrap">
      <div  className="preloader">
        <div  id="handle-preloader" className="handle-preloader">
          <div className="layer layer-one">
            <span className="overlay"></span>
          </div>
          <div className="layer layer-two">
            <span className="overlay"></span>
          </div>
          <div style={{backgroundColor:'transparent !important'}}   className="layer layer-three">
            <span className="overlay"></span>
          </div>
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              {['B', 'U', 'L', 'A', 'V', 'O'].map((letter, index) => (
                <span
                  key={index}
                  data-text-preloader={letter}
                  className="letters-loading"
                >
                  {letter}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
 
      `}</style>
    </div>
  );
};

export default PreLoader;