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
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;

  flex: 0 0
    calc(
      100% / ${(props) => props.visibleSlides} -
        ${(props) => props.slideMargin * 3}px
    );

  img {
    height: 100%;
    width: 100%;
    border-radius: 1.5vw;
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

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  position: absolute;
  margin-top: 80%;
  z-index: 5;
  background: var(--color-bg-offset);
  border-radius: 0 0 20px 20px;
  width: 100%;
  max-width: 300px;
  padding: 4px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: var(--color-white);
  font-family: "Poppins";
  font-weight: 200;
  font-size: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
`;

export const BinanceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  p {
    color: var(--color-white);
    font-family: "Poppins", sans-serif;
  }

  img {
    height: 50px;
    width: 52px;
  }
`;

export const BinanceImg = styled.img`
  height: 5px;
  width: 100%;
`;
