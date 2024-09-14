import styled from "styled-components";

const StickerItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StickerImg = styled.img`
  width: 100px;
  height: 100px;
`;

const StickerBtn = styled.button`
background-color: #fff;
color: #fff;
border:none;
border-radius: 5px;
`

const Sticker = ({ img, label, onClick }) => {
  return (
    <StickerItem>
      <StickerBtn onClick={onClick}><StickerImg src={img} alt="" /></StickerBtn>
    </StickerItem>
  );
};

export default Sticker;
