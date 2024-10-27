import { useState, useMemo, useCallback } from "react";
import styled from "styled-components";
import stickersData from "../../stickers.json";
import Sticker from "./Sticker";
import Choice from "./Choice";

const StickerContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 500px;
  gap: 40px;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

const StickerList = () => {
  const [selectedSticker, setSelectedSticker] = useState(null);

  const stickers = useMemo(() => stickersData, [stickersData]);

  const selectStickers = useCallback((sticker) => {
    setSelectedSticker(sticker);
  }, []);

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
                selectStickers(sticker);
              }}
            />
          );
        })}
      </StickerContainer>
      <Choice selectedSticker={selectedSticker} />
    </>
  );
};

export default StickerList;
