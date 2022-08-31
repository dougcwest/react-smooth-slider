import React from "react";
// Styles
import {
  StyledSliderItem,
  SliderItemReflection,
  Overlay,
} from "./SliderItemStyles";

type SliderItemProps = {
  slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  visibleSlides: number;
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
}) => (
  <>
    <StyledSliderItem
      zoomFactor={zoomFactor}
      slideMargin={slideMargin}
      visibleSlides={visibleSlides}
      className={slideClass}
      onMouseOver={() => callback(id)}
      onMouseOut={callbackOut}
    >
      {children}
      <SliderItemReflection>
        <Overlay></Overlay>
        {children}
      </SliderItemReflection>
    </StyledSliderItem>
  </>
);

export default SliderItem;
