import styled from "styled-components/native";

import colors from "../../helpers/colors";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.whiteBackground};
  padding: 5px;
`;

export const ContainerPicker = styled.View`
  border-bottom-width: 1px;
  border-color: #000;
  border-radius: 5px;
  padding-bottom: 5px;
`;
