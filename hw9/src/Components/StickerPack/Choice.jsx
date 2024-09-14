import styled from "styled-components";

const ChoiceTitle = styled.h3`
  color: grey;
  margin-left: auto;
  margin-right: auto;
`;

const Choice = ({ selectedSticker }) => {
  return (
    <div>
      <ChoiceTitle>
        {selectedSticker ? selectedSticker.label : "nothing"}
      </ChoiceTitle>
    </div>
  );
};

export default Choice;
