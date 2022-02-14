import { View, Text, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { FontAwesome } from "@expo/vector-icons";
const ProductItem = ({ image, title, price, oldPrice, ratings, avgRating }) => {
  return (
    <View
      style={tw`border-2  flex-row items-center overflow-hidden border-gray-300 rounded-md my-2`}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 150,
          height: 150,
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
  );
};

export default ProductItem;

const StarIcon = ({ type }) => (
  <FontAwesome
    style={tw`text-yellow-400`}
    name={`star${type}`}
    size={18}
    color="black"
  />
);
