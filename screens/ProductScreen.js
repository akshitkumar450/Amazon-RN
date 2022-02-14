import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Picker } from "@react-native-picker/picker";
import product from "../assets/product";
import QtyButton from "../components/QtyButton";
import Button from "../components/Button";
import ImageCarousel from "../components/ImageCarousel";
const ProductScreen = () => {
  const [selected, setSelected] = useState(product?.options?.[0]);
  const [qty, setQty] = useState(0);
  return (
    <ScrollView style={tw`mx-1`} showsVerticalScrollIndicator={false}>
      <Text>{product.title}</Text>

      <ImageCarousel images={product.images} />

      <View style={tw`bg-gray-200 rounded-md my-2 mx-2`}>
        <Picker
          selectedValue={selected}
          onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
          {product.options.map((item) => (
            <Picker.Item key={item} label={item} value={item} />
          ))}
        </Picker>
      </View>

      <Text style={tw`text-xl font-semibold`}>$ {product.price}</Text>
      <Text style={[tw`text-gray-500 my-3`, { lineHeight: 17 }]}>
        {product.description}
      </Text>
      <QtyButton qty={qty} setQty={setQty} />

      <Button title="Add to Cart"></Button>
      <Button title="Buy now"></Button>
    </ScrollView>
  );
};
export default ProductScreen;
