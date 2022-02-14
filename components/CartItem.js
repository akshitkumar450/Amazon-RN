import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { FontAwesome } from "@expo/vector-icons";
import QtyButton from "./QtyButton";
const CartItem = ({ image, title, price, oldPrice, ratings, avgRating }) => {
  const [qty, setQty] = useState(0);

  return (
    <View style={tw`border-2 border-gray-100 my-2`}>
      <View style={tw`flex-row items-center overflow-hidden rounded-md`}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
        />

        <View style={[tw`ml-1 p-1 flex-1 bg-gray-100  h-full`]}>
          <Text
            numberOfLines={3}
            style={{
              fontSize: 15,
            }}>
            {title}
          </Text>
          <View style={tw`flex-row items-center my-1`}>
            {[0, 0, 0, 0, 0].map((item, idx) => (
              <FontAwesome
                key={idx}
                style={tw`text-yellow-400`}
                name={idx < Math.floor(avgRating) ? "star" : "star-o"}
                size={18}
                color="black"
              />
            ))}

            <Text style={tw`ml-2`}>{ratings}</Text>
          </View>
          <View style={tw`flex-row items-end`}>
            <Text
              style={{
                fontSize: 18,
              }}>
              from ${price}
            </Text>
            {oldPrice && (
              <Text style={tw`text-sm line-through ml-1`}> ${oldPrice}</Text>
            )}
          </View>
        </View>
      </View>
      <View style={tw`mt-2`}>
        <QtyButton qty={qty} setQty={setQty} />
      </View>
    </View>
  );
};

export default CartItem;
