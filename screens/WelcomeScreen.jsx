import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { themeColors } from "@/theme";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex bg-red-400 items-center pt-[30%] h-screen w-full"
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <View className="text-2xl mb-10">
        <Text
          className="text-5xl text-center font-extrabold my-2"
          style={{ color: "white" }}
        >
          Weolcome To
        </Text>
        <Text
          className="text-4xl text-center font-extrabold  my-2"
          style={{ color: "white" }}
        >
          FoodBuddy
        </Text>
      </View>
      <Image
        source={require("../assets/images/welc.webp")}
        height={10}
        width={10}
        className="h-64 w-64 "
      />
      <View className="w-80 h-0.5 bg-white mb-4"></View>
      <Text className="text-white text-lg font-semibold">
        Find the best food around{" "}
      </Text>
      <Text className="text-white text-lg font-semibold ">
        you at lowest price
      </Text>
      <View className="w-80 h-0.5 bg-white mt-4"></View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="px-10 py-3 bg-lime-500 rounded-full mt-10"
      >
        <Text className="text-xl  text-center font-bold   text-white">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
