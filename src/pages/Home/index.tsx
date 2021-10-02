import React, { useState } from "react";

import { FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ItemProduct from "../../components/ItemProduct";
import { IProduct, DATA, listCategories } from "../../helpers/mockupData";

import { Container } from "./styles";

export default function Home() {
  const [categorieSelected, setCategorieSelected] = useState<
    "informática" | "televisão" | "celular" | "notebook" | "PC"
  >("celular");

  return (
    <Container>
      <Picker
        selectedValue={categorieSelected}
        onValueChange={(value) => setCategorieSelected(value)}
      >
        {listCategories.map((categorie) => (
          <Picker.Item
            key={categorie}
            label={categorie.toLocaleUpperCase()}
            value={categorie}
          />
        ))}
      </Picker>

      <FlatList
        style={{ marginTop: 20 }}
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
