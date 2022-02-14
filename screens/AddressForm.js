import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Picker } from "@react-native-picker/picker";
import { getNames } from "country-list";
import Button from "../components/Button";
const AddressForm = () => {
  const countries = getNames();
  const [selected, setSelected] = useState(countries[0]);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const validateName = () => {
    if (name.length < 3) {
      setNameError("name should be minimum 6 characters");
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={Platform.OS === "android" ? 50 : 10}
      behavior={Platform.OS === "android" ? "height" : "padding"}>
      <ScrollView style={tw`px-2 h-full bg-gray-100`}>
        <View style={tw`border-2  border-gray-300 rounded-md my-2`}>
          <Picker
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => setSelected(itemValue)}>
            {countries.map((item) => (
              <Picker.Item key={item} label={item} value={item} />
            ))}
          </Picker>
        </View>

        <View style={tw`my-5`}>
          <Text>Full Name (first and Last)</Text>
          <TextInput
            style={tw`border-2 h-10 bg-white border-gray-200 mt-2`}
            placeholder="Full Name"
            placeholderTextColor="gray"
            value={name}
            onEndEditing={validateName}
            onChangeText={(text) => {
              setName(text);
              setNameError("");
            }}
          />
          {/**!! to convert to boolean */}
          {!!nameError && <Text style={tw`text-red-500`}>{nameError}</Text>}
        </View>

        <View>
          <Text>Phone Number</Text>
          <TextInput
            style={tw`border-2 h-10 bg-white border-gray-200 mt-2`}
            keyboardType="numeric"
            placeholder="Phone number"
            placeholderTextColor="gray"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />
        </View>

        <View style={tw`my-5`}>
          <Text>Address</Text>
          <TextInput
            style={tw`border-2 h-10 bg-white border-gray-200 mt-2`}
            placeholder="address"
            placeholderTextColor="gray"
            value={address}
            onChangeText={(text) => setAddress(text)}
          />
        </View>

        <View>
          <Text>City</Text>
          <TextInput
            style={tw`border-2 h-10 bg-white border-gray-200 mt-2`}
            placeholder="city"
            placeholderTextColor="gray"
            value={city}
            onChangeText={(text) => setCity(text)}
          />
        </View>
        <View style={tw`mt-5`}>
          <Button title="check out" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AddressForm;
