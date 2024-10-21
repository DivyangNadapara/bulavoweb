

const PerLoader = () => {
  

    return (
      <div className="loader-wrap">
        <div className="preloader">
          <div id="handle-preloader" className="handle-preloader">
            <div className="layer layer-one">
              <span className="overlay"></span>
            </div>
            <div className="layer layer-two">
              <span className="overlay"></span>
            </div>
            <div className="layer layer-three">
              <span className="overlay"></span>
            </div>
            <div className="animation-preloader">
              <div className="spinner"></div>
              <div className="txt-loading">
                <span data-text-preloader="B" className="letters-loading">B</span>
                <span data-text-preloader="U" className="letters-loading">U</span>
                <span data-text-preloader="L" className="letters-loading">L</span>
                <span data-text-preloader="A" className="letters-loading">A</span>
                <span data-text-preloader="V" className="letters-loading">V</span>
                <span data-text-preloader="O" className="letters-loading">O</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PerLoader;
  