import { View, Text, FlatList } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import ProductItem from "../components/ProductItem";
import products from "../assets/products";

const HomeScreen = ({ searchValue }) => {
  // console.log(searchValue);
  return (
    <View style={tw` mx-1`}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductItem
            image={item.image}
            title={item.title}
            price={item.price}
            oldPrice={item.oldPrice}
            ratings={item.ratings}
            avgRating={item.avgRating}
            id={item.id}
          />
        )}
      />
      <ProductItem />
    </View>
  );
};

export default HomeScreen;
