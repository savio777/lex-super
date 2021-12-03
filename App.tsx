import "react-native-gesture-handler";

import React from "react";

import { StatusBar } from "react-native";
import colors from "./src/helpers/colors";

import Customer from "./src/pages/Customer";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.whiteBackground}
        barStyle="dark-content"
      />
      <Customer />
    </>
  );
}
