import styled, { css } from "styled-components/native";

import colors from "../../helpers/colors";

export const CenteredView = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: "rgba(255, 255, 255, 0.7)";
`;

export const ModalView = styled.View<{ smallHeight?: boolean }>`
  flex: 1;
  width: 85%;
  max-height: ${(props) => (props.smallHeight ? "20%" : "45%")};

  padding: 15px;
  background-color: #fff;
  border-radius: 13px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 5px 10px;
  shadow-opacity: 0.75;
  elevation: 5;
`;

export const ButtonClose = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;

export const Title = styled.Text`
  min-width: 100%;
  font-size: 15px;
  text-align: center;
  color: #000;
  font-weight: bold;
  padding-bottom: 5px;
  margin-bottom: 5px;
  border-bottom-width: 0.5px;
  border-bottom-color: #ccc;
`;

export const ContainerButtons = styled.View`
  flex: 1;
  flex-direction: row;
  min-height: 40px;
  width: 100%;
  align-items: flex-end;
  justify-content: space-around;
  margin-top: 15px;
`;

interface Props {
  main: boolean;
}

export const Button = styled.TouchableOpacity<Props>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: ${(props) => (props.main ? "space-evenly" : "center")};
  min-height: 30px;
  max-width: 130px;
  width: 100%;
  background-color: ${(props) => (props.main ? colors.black : "#fff")};
  border-radius: 5px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 5px 10px;
  shadow-opacity: 0.75;
`;

export const TitleButton = styled.Text<Props>`
  font-size: 17px;
  color: ${(props) => (props.main ? "#fff" : "#000")};
  font-weight: 700;
`;

export const TitleInput = styled.Text`
  font-size: 16px;
  color: #5e5e5e;
  text-align: left;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 4px;
`;

export const InputText = styled.TextInput`
  flex: 1;
  max-height: 50px;
  min-height: 45px;
  width: 100%;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.black};
`;

export const ButtonInputDate = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  max-height: 50px;
  min-height: 45px;
  width: 100%;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.black};
`;

export const TitleButtonInputDate = styled.Text<{ selected: boolean }>`
  ${(props) =>
    props.selected
      ? css`
          color: #000;
        `
      : css`
          color: #787878;
        `}
`;

export const ContainerImage = styled.View`
  flex: 1;
  min-height: 35%;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin-top: 10px;
`;
