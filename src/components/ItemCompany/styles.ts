import styled from "styled-components/native";

import colors from "../../helpers/colors";

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  min-height: 110px;
  max-height: 150px;
  margin-bottom: 20px;

  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const LeftImage = styled.Image`
  height: 100%;
  width: 40%;

  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
`;

export const RightContainer = styled.View`
  width: 60%;
  padding: 10px;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 2px;
`;

export const TextType = styled.Text``;

export const ButtonDetails = styled.TouchableOpacity`
  background-color: ${colors.tealBlue};
  border-radius: 20px;
  padding: 5px;
  max-width: 35%;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const TextButtonDetails = styled.Text`
  color: white;
`;
