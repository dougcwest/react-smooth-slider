import React, { Dispatch, SetStateAction } from "react";
import * as st from "./SliderNav.Styled";

interface SliderNavProps {
  listings: boolean;
  setListingsActive?: Dispatch<SetStateAction<boolean>>;
  activateListings: (values: any) => void;
  collections: boolean;
  setCollectionsActive?: Dispatch<SetStateAction<boolean>>;
  activateCollections: (values: any) => void;
  releases: boolean;
  setReleasesActive?: Dispatch<SetStateAction<boolean>>;
  activateReleases: (values: any) => void;
}

const SliderNav: React.FC<SliderNavProps> = ({
  listings,
  activateListings,
  collections,
  activateCollections,
  releases,
  activateReleases,
}) => {
  return (
    <st.MenuContainer>
      <button
        className={listings ? "menu-title-active" : "menu-title"}
        onClick={activateListings}
      >
        Listings
      </button>
      <button
        className={collections ? "menu-title-active" : "menu-title"}
        onClick={activateCollections}
      >
        Collections
      </button>
      <button
        className={releases ? "menu-title-active" : "menu-title"}
        onClick={activateReleases}
      >
        Releases
      </button>
    </st.MenuContainer>
  );
};

export default SliderNav;
