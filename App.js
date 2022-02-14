import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import Navigation from "./navigation/Navigation";
import AddressFormScreen from "./screens/AddressFormScreen";
import CartScreen from "./screens/CartScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

export default function App() {
  return (
    <View style={tw` flex-1 mt-8`}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  );
}
