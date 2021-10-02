import styled from "styled-components/native";

import colors from "../../helpers/colors";

export const Container = styled.View`
  background-color: #fff;
  border-radius: 10px;
  max-width: 150px;
  margin-right: 10px;
  max-height: 285px;
`;

export const ContainerValues = styled.View`
  padding: 5px;
`;

export const ContainerStars = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 17px;
  font-weight: bold;
  color: ${colors.black};
  margin-top: 5px;
  margin-bottom: 7px;
`;

export const TextValue = styled.Text`
  font-size: 20px;
  letter-spacing: 2px;
`;

export const TextPreviousValue = styled.Text`
  font-weight: bold;
  text-decoration-line: line-through;
  font-size: 13px;
`;

export const TextNumberStores = styled.Text`
  margin-bottom: 5px;
`;

export const ButtonBuy = styled.TouchableOpacity`
  background-color: ${colors.spaceCrayola};
  min-width: 100%;
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const TextButtonBuy = styled.Text`
  color: #fff;
  text-align: center;
`;
