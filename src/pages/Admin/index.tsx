import React, { useState } from "react";

import { FlatList, View } from "react-native";

import Modal from "../../components/Modal";
import { ICompany, listCategoriesCompanies } from "../../helpers/types";
import { Container, ButtonMain, TextButton, Input } from "./styles";

const Admin: React.FC = () => {
  const [openModalCreateCompany, setOpenModalCreateCompany] = useState(false);
  const [nameCompany, setNameCompany] = useState("");
  const [typeCompany, setTypeCompany] = useState<
    "alimentício" | "etc" | "informática"
  >("alimentício");
  const [companies, setCompanies] = useState<ICompany[]>([]);

  return (
    <>
      <Modal
        open={openModalCreateCompany}
        title="Empresa"
        cancel={() => setOpenModalCreateCompany(false)}
        send={() => {
          setCompanies([
            ...companies,
            {
              type: typeCompany,
              name: nameCompany,
              logoImage:
                "https://images.unsplash.com/photo-1607124010809-e2d512ef5ea8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
            },
          ]);
        }}
      />

      <Container>
        <ButtonMain onPress={() => setOpenModalCreateCompany(true)}>
          <TextButton>Cadastrar Empresa</TextButton>
        </ButtonMain>
        <FlatList
          keyExtractor={() => String(Math.random())}
          data={companies}
          renderItem={({ item }) => <View />}
        />
      </Container>
    </>
  );
};

export default Admin;
