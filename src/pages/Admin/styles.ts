import styled from "styled-components/native";

import colors from "../../helpers/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.whiteBackground};
  padding: 20px 5px 5px 5px;
  align-items: center;
`;

export const ButtonMain = styled.TouchableOpacity`
  width: 40%;
  background-color: ${colors.black};
  border-radius: 12px;
  padding: 7px;
  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  width: 100%;
  background-color: rgba(204, 204, 204, 0.5);
  border-radius: 12px;
  padding: 7px;
`;
