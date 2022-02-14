import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  MaterialIcons,
  Ionicons,
  Feather,
} from "@expo/vector-icons";
import { Pressable, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 50,
        },
      }}>
      <Tab.Screen
        name={"Home"}
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Coming Soon"}
        component={HomeScreen}
        options={{
          title: "Coming soon",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="video-library" size={24} color={color} />
          ),
          headerRight: () => (
            <View>
              <View>
                <Feather name="cast" color="black" size={25} />
              </View>
            </View>
          ),
          headerLeft: () => (
            <Pressable>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen
        name={"Search"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={"Downloads"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="download" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
