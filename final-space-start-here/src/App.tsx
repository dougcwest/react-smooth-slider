import React from "react";
import "../src/App.css";
// Components
import Slider from "./components/Slider";
import { nftData } from "./components/Slider/nftData";

const SliderProps = {
  zoomFactor: 25, // How much the image should zoom on hover in percent
  slideMargin: 8, // Margin on each side of slides
  maxVisibleSlides: 3,
  pageTransition: 500, // Transition when flipping pages
};

const App: React.FC = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="menu-container">
          <button className="menu-title">Listings</button>
          <button className="menu-title">Collections</button>
          <button className="menu-title">Releases</button>
        </div>
        <div className="title-and-menu">
          <div className="section-title-container"></div>
        </div>

        <Slider {...SliderProps}>
          {nftData.map((nft) => (
            <div key={nft.id}>
              <video loop autoPlay muted>
                <source src={nft.video_url} type="video/mp4" />
              </video>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default App;
