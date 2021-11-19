import React, { useState } from "react";

import { FlatList, View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

import Modal from "../../components/Modal";
import ItemCompany from "../../components/ItemCompany";
import { ICompany, listCategoriesCompanies } from "../../helpers/types";
import { Container, ButtonMain, TextButton, Input } from "./styles";

const Companies: React.FC = () => {
  const [openModalCreateCompany, setOpenModalCreateCompany] = useState(false);
  const [nameCompany, setNameCompany] = useState("");
  const [typeCompany, setTypeCompany] = useState<
    "alimentício" | "etc" | "informática"
  >("alimentício");
  const [companies, setCompanies] = useState<ICompany[]>([]);

  const createCompany = () => {
    setCompanies([
      ...companies,
      {
        type: typeCompany,
        name: nameCompany,
        logoImage:
          "https://images.unsplash.com/photo-1607124010809-e2d512ef5ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
      },
    ]);
    setOpenModalCreateCompany(false);
    setNameCompany("");
  };

  return (
    <>
      <Modal
        open={openModalCreateCompany}
        title="Empresa"
        cancel={() => {
          setOpenModalCreateCompany(false);
          setNameCompany("");
        }}
        send={createCompany}
      >
        <Text>Digite o nome da empresa</Text>
        <Input
          value={nameCompany}
          onChangeText={setNameCompany}
          placeholder="Nome da empresa"
        />
        <Text>Selecione o seguimento da empresa</Text>
        <Picker
          selectedValue={typeCompany}
          onValueChange={(value) => setTypeCompany(value)}
          style={{
            color: "#000",
            marginTop: 10,
          }}
        >
          {listCategoriesCompanies.map((categorie) => (
            <Picker.Item
              key={categorie}
              label={categorie.toLocaleUpperCase()}
              value={categorie}
            />
          ))}
        </Picker>
      </Modal>

      <Container>
        <ButtonMain onPress={() => setOpenModalCreateCompany(true)}>
          <TextButton>Cadastrar Empresa</TextButton>
        </ButtonMain>
        <FlatList
          keyExtractor={() => String(Math.random())}
          data={companies}
          renderItem={({ item }) => (
            <ItemCompany
              title={item.name}
              thumb={item.logoImage}
              type={item.type}
            />
          )}
        />
      </Container>
    </>
  );
};

export default Companies;
