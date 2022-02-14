import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const QtyButton = ({ qty, setQty }) => {
  return (
    <View style={tw` h-10  overflow-hidden flex-row items-center `}>
      <Pressable
        onPress={() => setQty(Math.max(0, qty - 1))}
        style={tw`bg-gray-300 w-10 h-full items-center justify-center`}>
        <Text>-</Text>
      </Pressable>
      <View style={tw`w-10 h-full items-center justify-center`}>
        <Text>{qty}</Text>
      </View>
      <Pressable
        style={tw`bg-gray-300 w-10 h-full items-center justify-center`}
        onPress={() => setQty(qty + 1)}>
        <Text>+</Text>
      </Pressable>
    </View>
  );
};

export default QtyButton;
