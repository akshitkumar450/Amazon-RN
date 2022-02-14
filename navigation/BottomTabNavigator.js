import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Ionicons, Feather } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import HomeStack from "./HomeStack";
import CartStack from "./CartStack";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 50,
        },
        tabBarActiveTintColor: "#e47911",
        tabBarShowLabel: false, //to hide label
      }}>
      <Tab.Screen
        name={"HomeStack"}
        // nested navigation
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"profile"}
        component={HomeScreen}
        options={{
          title: "Coming soon",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"CartStack"}
        // nested navigation
        component={CartStack}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={"more"}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="menu" size={24} color="black" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
