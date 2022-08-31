import styled from "styled-components";

type Props = {
  zoomFactor: number;
  slideMargin: number;
  visibleSlides: number;
  className: string;
};

export const StyledSliderItem = styled.div<Props>`
  margin: 0 ${(props) => props.slideMargin}px;
  transition: transform 500ms ease;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;
  position: relative;
  box-shadow: 0px 50px 70px rgba(0, 0, 0, 0.5);

  flex: 0 0
    calc(
      100% / ${(props) => props.visibleSlides} -
        ${(props) => props.slideMargin * 2}px
    );

  video {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  :hover {
    transform: scale(${(props) => props.zoomFactor / 100 + 1}) !important;
  }

  :hover ~ * {
    transform: translateX(${(props) => props.zoomFactor / 2 + "%"}) !important;
  }

  &.left {
    transform-origin: left;

    :hover ~ * {
      transform: translateX(${(props) => props.zoomFactor + "%"}) !important;
    }
  }

  &.right {
    transform-origin: right;

    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;

export const SliderItemReflection = styled.div`
  position: absolute;
  bottom: -61.5%;
  transform: scaleY(-1);
  opacity: 0.6;
  height: 200px;
  overflow: hidden;
  filter: blur(1px);

  video {
    margin-top: -125px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: 201px;
  width: 101%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.2), black);
  z-index: 2;
`;
