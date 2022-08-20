import React, { useState, useEffect } from "react";
import "../src/App.css";
import BinanceLogo from "./Images/Binance-Icon-Logo.wine.svg";
import { SliderNavProps } from "./components/Interfaces";

// Components
import Dropdown from "./components/Dropdown/Dropdown";
import Slider from "./components/Slider/Slider";
import SliderNav from "./components/SliderNav/SliderNav";

// Styles
import * as appSt from "./App.Styled";
import * as st from "./components/Slider/Slider-Item.Styled";

const SliderProps = {
  zoomFactor: 15, // How much the image should zoom on hover in percent
  slideMargin: 8, // Margin on each side of slides
  maxVisibleSlides: 8,
  pageTransition: 500, // Transition when flipping pages
};

// Types
export interface NFT {
  abilities: string[];
  alias: string[];
  gender: string;
  hair: string;
  id: number;
  img_url: string;
  name: string;
  origin: string;
  species: string;
  status: string;
}

const App: React.FC<SliderNavProps> = (_props: SliderNavProps) => {
  const [data, setData] = useState<NFT[] | undefined>([]);
  const [listings, setListingsActive] = useState(true);
  const [collections, setCollectionsActive] = useState(false);
  const [releases, setReleasesActive] = useState(false);
  const [arrowUp, setArrowUp] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);

  // const [activeNFT, setActiveNFT] = useState<NFT>({} as NFT);

  const activateListings = () => {
    setListingsActive(true);
    setCollectionsActive(false);
    setReleasesActive(false);
  };

  const activateCollections = () => {
    setListingsActive(false);
    setCollectionsActive(true);
    setReleasesActive(false);
  };

  const activateReleases = () => {
    setListingsActive(false);
    setCollectionsActive(false);
    setReleasesActive(true);
  };

  const renderTitle = () => {
    return listings ? (
      <h1>Listings</h1>
    ) : collections ? (
      <h1>Collections</h1>
    ) : (
      <h1>Releases</h1>
    );
  };

  const handleDropdown = () => {
    setArrowUp(!arrowUp);
    setDropdownVisible(!dropdownVisible);
  };

  const handleFilterClick = () => {
    setIsFilterActive(!isFilterActive);
  };

  const listingsData = "https://finalspaceapi.com/api/v0/character/";

  useEffect(() => {
    const getData = async () => {
      const data = await (await fetch(listingsData)).json();

      const collectionsData = data.filter(
        (c: { origin: string }) => c.origin === "Earth"
      );
      const releasesData = data.filter(
        (c: { status: string }) => c.status === "Alive"
      );
      collections
        ? setData(collectionsData)
        : releases
        ? setData(releasesData)
        : setData(data);
    };
    getData();
  }, [collections, releases]);

  const renderSlider = () => {
    if (data!.length < 1) {
      return (
        <div
          style={{
            zIndex: 10,
            alignItems: "center",
            color: "var(--color-white)",
            marginLeft: "38%",
            fontFamily: "Poppins",
          }}
        >
          <h3 style={{ fontWeight: 200 }}>No active items to show.</h3>
        </div>
      );
    } else {
      return (
        <Slider {...SliderProps}>
          {data!.map((nft) => (
            <div key={nft.id}>
              <st.InfoContainer>
                <st.Title>{nft.name}</st.Title>
                <st.BinanceContainer>
                  <img src={BinanceLogo} alt="logo" />
                  <p>0.15 BNB (${nft.id}.00)</p>
                </st.BinanceContainer>
              </st.InfoContainer>
              <img src={nft.img_url} alt="character" />
            </div>
          ))}
        </Slider>
      );
    }
  };

  return (
    <>
      <appSt.PageWrapper>
        <SliderNav
          listings={listings}
          setListingsActive={setListingsActive}
          activateListings={activateListings}
          collections={collections}
          setCollectionsActive={setCollectionsActive}
          activateCollections={activateCollections}
          releases={releases}
          setReleasesActive={setReleasesActive}
          activateReleases={activateReleases}
        />
        <Dropdown
          dropdownVisible={dropdownVisible}
          isFilterActive={false}
          setIsFilterActive={setIsFilterActive}
          arrowUp={arrowUp}
          setArrowUp={setArrowUp}
          handleFilterClick={handleFilterClick}
          handleDropdown={handleDropdown}
          renderTitle={renderTitle}
        />
      </appSt.PageWrapper>
      {renderSlider()}
    </>
  );
};

export default App;
