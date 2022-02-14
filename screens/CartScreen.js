import React from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import cartItems from "../assets/cart";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
function CartScreen() {
  const totalPrice = cartItems.reduce(
    (acc, item, idx) => acc + item.item.price * item.quantity,
    0
  );
  return (
    <View style={tw`px-2 h-full`}>
      <View>
        <Text style={tw` text-gray-600`}>
          subtotal ({cartItems.length} items) :{totalPrice.toFixed(2)}
        </Text>
        <Button title={"proceed to checkout"} />
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={cartItems}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CartItem
            image={item.item.image}
            title={item.item.title}
            price={item.item.price}
            oldPrice={item.item.oldPrice}
            ratings={item.item.ratings}
            avgRating={item.item.avgRating}
          />
        )}
      />
    </View>
  );
}

export default CartScreen;
