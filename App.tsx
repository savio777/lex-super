import React from "react";

import { StatusBar } from "react-native";
import colors from "./src/helpers/colors";

import Home from "./src/pages/Home";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.whiteBackground}
        barStyle="dark-content"
      />
      <Home />
    </>
  );
}
