import { Dispatch, SetStateAction } from "react";

export interface SliderNavProps {
  listings: boolean;
  setListingsActive?: Dispatch<SetStateAction<boolean>>;
  activateListings: () => void;
  collections: boolean;
  setCollectionsActive?: Dispatch<SetStateAction<boolean>>;
  activateCollections: () => void;
  releases: boolean;
  setReleasesActive?: Dispatch<SetStateAction<boolean>>;
  activateReleases: () => void;
}

export interface DropdownProps {
  dropdownVisible: boolean;
  setDropdownVisible?: Dispatch<SetStateAction<boolean>>;
  isFilterActive: boolean;
  setIsFilterActive?: Dispatch<SetStateAction<boolean>>;
  arrowUp: boolean;
  setArrowUp?: Dispatch<SetStateAction<boolean>>;
  handleFilterClick: (values: any) => void;
  handleDropdown: (values: any) => void;
  renderTitle: () => void;
}
