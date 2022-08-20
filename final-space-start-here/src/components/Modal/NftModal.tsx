import React from "react";
import * as st from "./NftModal.Styled";
import { NFT } from "../../App";
// import BinanceLogo from "../../Images/Binance-Icon-Logo.wine.svg";
// import CollectionLogo from "../../Images/Icon feather-award.svg";

interface NftProps {
  nft: NFT;
}

const NftModal: React.FC<NftProps> = ({ nft }) => {
  return (
    <st.Container>
      <st.ContainerImg />
      <st.ContainerContent>
        <st.ContainerHeader></st.ContainerHeader>
        <st.ContainerSubheader></st.ContainerSubheader>
        <st.ContainerCollection></st.ContainerCollection>
        <st.ContainerTraits>
          <st.ContainerTraitPill></st.ContainerTraitPill>
        </st.ContainerTraits>
        <st.BuyNow></st.BuyNow>
      </st.ContainerContent>
    </st.Container>
  );
};

export default NftModal;
