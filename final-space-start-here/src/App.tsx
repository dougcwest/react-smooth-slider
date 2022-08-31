import React from "react";
import "../src/App.css";
import { ReactComponent as Title } from "./Images/deity_title_mbg.svg";
// Components
import Slider from "./components/Slider";
import { nftData } from "./components/Slider/nftData";

const SliderProps = {
  zoomFactor: 25, // How much the image should zoom on hover in percent
  slideMargin: 12, // Margin on each side of slides
  maxVisibleSlides: 3,
  pageTransition: 500, // Transition when flipping pages
};

const App: React.FC = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="menu-container">
          <a
            href="https://www.hdlcorp.io/"
            className="menu-title"
            target="blank"
          >
            HDL
          </a>
          <a
            href="https://www.hdlcorp.io/about"
            className="menu-title"
            target="blank"
          >
            ABOUT
          </a>
          <a
            href="https://www.hdlcorp.io/how-it-works"
            className="menu-title"
            target="blank"
          >
            HOW IT WORKS{" "}
          </a>
        </div>
        <div className="section-title-container">
          <h1>PRE-GENESIS COLLECTION</h1>
          <h3>[ THE DEITY ]</h3>
        </div>
        <div className="buttons-container">
          <button className="button">CONNECT WALLET</button>
          <button className="button">MINT</button>
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
