import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import ReastaurantScreen from "../screens/ReastaurantScreen";
import CartScreen from "../screens/CartScreen";
import OrderPreaparingScreen from "../screens/OrderPreaparingScreen";
import DeliveryScreen from "../screens/DeliveryScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Reastaurant" component={ReastaurantScreen} />
      <Stack.Screen name="Cart" options={{presentation:"modal"}} component={CartScreen} />
      <Stack.Screen name="OrderPreaparing" options={{presentation:"fullScreenModal"}} component={OrderPreaparingScreen} />
      <Stack.Screen name="Delivery" options={{presentation:"fullScreenModal"}} component={DeliveryScreen} />
    </Stack.Navigator>
  );
}
