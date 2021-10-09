import React, { useState } from "react";

import { FlatList, Text, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ItemProduct from "../../components/ItemProduct";
import { mockupDATA, listCategories } from "../../helpers/types";

import { Container, ContainerPicker } from "./styles";

export default function Home() {
  const [categorieSelected, setCategorieSelected] = useState<
    "informática" | "televisão" | "celular" | "notebook" | "PC"
  >("celular");

  // ex: [true, true, true, true, false]
  const returnStars = (note: number): boolean[] => {
    const stars = [];
    const noteNegative = 5 - note;
    let countPositive = 0;
    let countNegative = 0;

    while (countPositive !== note) {
      stars.push(true);
      countPositive++;
    }
    while (countNegative !== noteNegative) {
      stars.push(false);
      countNegative++;
    }

    return stars;
  };

  return (
    <Container>
      <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 5 }}>
        Escolhe uma categoria
      </Text>
      <ContainerPicker>
        <Picker
          selectedValue={categorieSelected}
          onValueChange={(value) => setCategorieSelected(value)}
          style={{
            color: "#000",
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
        style={{
          marginVertical: 20,
          minHeight: 300,
          maxHeight: 310,
        }}
        horizontal
        data={mockupDATA}
        keyExtractor={(_, index) => String(index)}
        renderItem={({ item }) =>
          item.categorie === categorieSelected ? (
            <ItemProduct
              imageSource={{ uri: item.avatar }}
              title={item.title}
              onPressBuy={() => console.log(`abrir link do ${item.title}`)}
              stars={returnStars(item.note)}
              value={item.value}
              previousValue={item.previousValue}
              numberStores={item.numberStores}
            />
          ) : null
        }
      />

      <ScrollView>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Os melhores computadores pelo melhor preço
        </Text>
        <FlatList
          style={{
            marginTop: 20,
            marginBottom: 30,
            maxHeight: 300,
          }}
          horizontal
          data={mockupDATA}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) =>
            item.categorie === "PC" ? (
              <ItemProduct
                imageSource={{ uri: item.avatar }}
                title={item.title}
                onPressBuy={() => console.log(`abrir link do ${item.title}`)}
                stars={returnStars(item.note)}
                value={item.value}
                previousValue={item.previousValue}
                numberStores={item.numberStores}
              />
            ) : null
          }
        />

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          As melhores televisões pelo melhor preço
        </Text>
        <FlatList
          style={{
            marginTop: 20,
            marginBottom: 30,
            maxHeight: 300,
          }}
          horizontal
          data={mockupDATA}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) =>
            item.categorie === "televisão" ? (
              <ItemProduct
                imageSource={{ uri: item.avatar }}
                title={item.title}
                onPressBuy={() => console.log(`abrir link do ${item.title}`)}
                stars={returnStars(item.note)}
                value={item.value}
                previousValue={item.previousValue}
                numberStores={item.numberStores}
              />
            ) : null
          }
        />

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          Os melhores celulares pelo melhor preço
        </Text>
        <FlatList
          style={{
            marginTop: 20,
            marginBottom: 30,
            maxHeight: 300,
          }}
          horizontal
          data={mockupDATA}
          keyExtractor={(_, index) => String(index)}
          renderItem={({ item }) =>
            item.categorie === "celular" ? (
              <ItemProduct
                imageSource={{ uri: item.avatar }}
                title={item.title}
                onPressBuy={() => console.log(`abrir link do ${item.title}`)}
                stars={returnStars(item.note)}
                value={item.value}
                previousValue={item.previousValue}
                numberStores={item.numberStores}
              />
            ) : null
          }
        />
      </ScrollView>
    </Container>
  );
}
