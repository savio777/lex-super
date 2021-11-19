import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import Products from "../pages/Products";
import Companies from "../pages/Companies";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Companies" component={Companies} />
    <Drawer.Screen name="Products" component={Products} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
