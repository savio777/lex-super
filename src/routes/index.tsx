import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../helpers/colors";

import Customer from "../pages/Customer";

import DrawerNavigation from "./Drawer";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) =>
            route.name === "Admin" ? (
              <MaterialCommunityIcons
                name="crown"
                color={focused ? colors.tealBlue : colors.black}
                size={size}
              />
            ) : (
              <MaterialCommunityIcons
                name="cart"
                color={focused ? colors.tealBlue : colors.black}
                size={size}
              />
            ),
        })}
      >
        <Tab.Screen name="Customer" component={Customer} />
        <Tab.Screen name="DrawerNavigation" component={DrawerNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
