import React, { Component } from "react";
import styled from "styled-components";
import stickers from "../../stickers.json";
import Sticker from "./Sticker";
import Choice from "./Choice";

const StickerContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 40px;
  justify-content: center;
  margin-left: auto;
  margin-right:auto;
`;

class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  selectStickers = (sticker) => {
    this.setState({ selectedSticker: sticker });
  };

  render() {
    return (
      <>
        <StickerContainer>
          {stickers.map((sticker, index) => {
            return (
              <Sticker
                key={index}
                img={sticker.img}
                label={sticker.label}
                onClick={() => {
                  this.selectStickers(sticker);
                }}
              />
            );
          })}
        </StickerContainer>
        <Choice selectedSticker={this.state.selectedSticker} />
      </>
    );
  }
}

export default StickerList;
