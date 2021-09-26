import React from "react";

import { Image, Text } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  Container,
  Title,
  ButtonBuy,
  TextButtonBuy,
  ContainerStars,
  TextPreviousValue,
  TextValue,
  ContainerValues,
  TextNumberStores,
} from "./styles";

interface IProps {
  imageSource: any;
  title: string;
  onPressBuy(): void;
  stars: boolean[];
  value: number;
  numberStores: number;
  previousValue: number;
}

const ItemProduct: React.FC<IProps> = ({
  imageSource,
  onPressBuy,
  title,
  stars,
  previousValue,
  value,
  numberStores,
}) => (
  <Container>
    <Image
      style={{
        width: 150,
        height: 120,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}
      source={imageSource}
    />
    <ContainerValues>
      <ContainerStars>
        {stars.map((s, index) => (
          <MaterialCommunityIcons
            key={String(index)}
            name={s ? "star" : "star-outline"}
            color="#ffc800"
            size={22}
          />
        ))}
      </ContainerStars>
      <Title>{title}</Title>
      <TextPreviousValue>R$ {String(previousValue)}</TextPreviousValue>
      <TextValue>R$ {String(value)}</TextValue>
      <TextNumberStores>em {numberStores} lojas</TextNumberStores>
    </ContainerValues>
    <ButtonBuy onPress={onPressBuy}>
      <TextButtonBuy>Ver Lojas</TextButtonBuy>
    </ButtonBuy>
  </Container>
);

export default ItemProduct;
