import React from "react";
import { View, Alert } from "react-native";

import {
  Container,
  LeftImage,
  RightContainer,
  Title,
  TextType,
  ButtonDetails,
  TextButtonDetails,
} from "./styles";

interface Props {
  title: string;
  thumb: string;
  type: string;
}

const ItemCompany: React.FC<Props> = ({ thumb, title, type }) => (
  <Container>
    <LeftImage source={{ uri: thumb }} />
    <RightContainer>
      <View>
        <Title>{title}</Title>
        <TextType>{type}</TextType>
      </View>
      <ButtonDetails onPress={() => Alert.alert("Função em breve", "")}>
        <TextButtonDetails>detalhes</TextButtonDetails>
      </ButtonDetails>
    </RightContainer>
  </Container>
);

export default ItemCompany;
