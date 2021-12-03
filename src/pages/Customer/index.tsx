import React, { useState, useEffect } from "react";

import { FlatList, Text, ScrollView, ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ItemProduct from "../../components/ItemProduct";
import { mockupDATA, listCategories, IProduct } from "../../helpers/types";

import { Container, ContainerPicker } from "./styles";

export default function Customer() {
  const [categorieSelected, setCategorieSelected] = useState<
    "informática" | "feijão" | "arroz" | "cerveja" | "leite"
  >("cerveja");
  const [listData, setListData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialData = () => {
      setLoading(true);
      setListData(mockupDATA.sort(() => Math.random() - 0.1));
      setLoading(false);
    };

    initialData();
  }, []);

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
      {loading && <ActivityIndicator />}

      <Text style={{ fontWeight: "bold", fontSize: 18, marginLeft: 5 }}>
        Escolha uma categoria
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
        data={listData}
        keyExtractor={() => String(Math.random())}
        renderItem={({ item }) =>
          item.categorie === categorieSelected ? (
            <ItemProduct
              company={item.company}
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

      <ScrollView style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          As melhores marcas de arroz pelo melhor preço
        </Text>
        <FlatList
          style={{
            marginTop: 20,
            marginBottom: 30,
            maxHeight: 310,
          }}
          horizontal
          data={listData}
          keyExtractor={() => String(Math.random())}
          renderItem={({ item }) => {
            // console.log(`item.categorie = ${item.categorie}`);
            return item.categorie === "arroz" ? (
              <ItemProduct
                company={item.company}
                imageSource={{ uri: item.avatar }}
                title={item.title}
                onPressBuy={() => console.log(`abrir link do ${item.title}`)}
                stars={returnStars(item.note)}
                value={item.value}
                previousValue={item.previousValue}
                numberStores={item.numberStores}
              />
            ) : null;
          }}
        />

        <Text style={{ fontWeight: "bold", fontSize: 18 }}>
          As melhores marcas de leite pelo melhor preço
        </Text>
        <FlatList
          style={{
            marginTop: 20,
            marginBottom: 30,
            maxHeight: 310,
          }}
          horizontal
          data={listData}
          keyExtractor={() => String(Math.random())}
          renderItem={({ item }) =>
            item.categorie === "leite" ? (
              <ItemProduct
                company={item.company}
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
