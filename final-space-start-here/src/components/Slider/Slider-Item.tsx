import React from "react";
import { NFT } from "../../App";

import * as st from "./Slider-Item.Styled";

type SliderItemProps = {
  slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  visibleSlides: number;
  nft?: NFT;
};

const SliderItem: React.FC<SliderItemProps> = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children,
  nft,
}) => (
  <st.StyledSliderItem
    zoomFactor={zoomFactor}
    slideMargin={slideMargin}
    visibleSlides={visibleSlides}
    className={slideClass}
    onMouseOver={() => callback(id)}
    onMouseOut={callbackOut}
  >
    {children}
  </st.StyledSliderItem>
);

export default SliderItem;
