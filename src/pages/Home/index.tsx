import React, { useState } from "react";

import { FlatList, View } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ItemProduct from "../../components/ItemProduct";
import { IProduct, DATA, listCategories } from "../../helpers/mockupData";
import colors from "../../helpers/colors";

import { Container, ContainerPicker } from "./styles";

export default function Home() {
  const [categorieSelected, setCategorieSelected] = useState<
    "informática" | "televisão" | "celular" | "notebook" | "PC"
  >("celular");

  return (
    <Container>
      <ContainerPicker>
        <Picker
          selectedValue={categorieSelected}
          onValueChange={(value) => setCategorieSelected(value)}
          style={{
            color: "#fff",
            marginTop: 10,
          }}
        >
          {listCategories.map((categorie) => (
            <Picker.Item
              key={categorie}
              label={categorie.toLocaleUpperCase()}
              value={categorie}
            />
          ))}
        </Picker>
      </ContainerPicker>

      <FlatList
        style={{ marginTop: 20 }}
        horizontal
        data={DATA}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) =>
          item.categorie === categorieSelected ? (
            <ItemProduct
              imageSource={require("../../assets/products/celular3.jpg")}
              title={item.title}
              onPressBuy={() => console.log(`abrir link do ${item.title}`)}
              stars={[true, true, true, true, false]}
              value={item.value}
              previousValue={item.previousValue}
              numberStores={item.numberStores}
            />
          ) : null
        }
      />
    </Container>
  );
}
