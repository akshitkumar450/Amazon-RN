import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import { Text, TextInput, useWindowDimensions, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

const HeaderComponent = ({ searchValue, setSearchValue }) => {
  return (
    <View style={tw`bg-blue-200 py-2`}>
      <View
        style={tw`flex-row items-center border-2 border-gray-300 mx-2 rounded-md px-2 bg-white justify-between`}>
        <TextInput
          placeholder="search..."
          placeholderTextColor="gray"
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
          style={[tw` h-10 `, { width: useWindowDimensions().width - 50 }]}
        />
        <Ionicons name="search" size={18} />
      </View>
    </View>
  );
};

const HomeStack = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        // component={HomeScreen}
        options={{
          title: "Home",
          header: () => (
            <HeaderComponent
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          ),
          // headerShown: false,
        }}>
        {/**for passing the props to homescreen component */}
        {() => <HomeScreen searchValue={searchValue} />}
      </Stack.Screen>
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{
          title: "product",
          //   headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
