import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import AddressFormScreen from "../screens/AddressFormScreen";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: "Cart",
          //   headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressFormScreen}
        options={{
          title: "Address",
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default CartStack;
