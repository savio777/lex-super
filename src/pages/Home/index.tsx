import React from "react";

import { FlatList } from "react-native";

import ItemProduct from "../../components/ItemProduct";
import { IProduct } from "../../helpers/mockupData";

import { Container } from "./styles";

const DATA: IProduct[] = [
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
];

export default function Home() {
  return (
    <Container>
      <FlatList
        style={{ marginTop: 100 }}
        horizontal
        data={DATA}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) => (
          <ItemProduct
            imageSource={require("../../assets/products/celular3.jpg")}
            title={item.title}
            onPressBuy={() => console.log(`abrir link do ${item.title}`)}
            stars={[true, true, true, true, false]}
            value={item.value}
            previousValue={item.previousValue}
            numberStores={item.numberStores}
          />
        )}
      />
    </Container>
  );
}
