import { View, Text, Pressable } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Button = ({ title }) => {
  return (
    <Pressable
      style={[
        {
          backgroundColor: "#efc00a",
        },
        tw`p-2 items-center rounded-md mx-2 my-2 h-10 border-2 border-red-200`,
      ]}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;
