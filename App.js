import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Navigation from "./navigation/Navigation";
import AddressForm from "./screens/AddressForm";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

export default function App() {
  return (
    <View style={tw`mt-8`}>
      {/*
      <HomeScreen />
      <ProductScreen />
      <CartScreen />
      */}
      <AddressForm />
      <StatusBar style="auto" />
    </View>
  );
}
