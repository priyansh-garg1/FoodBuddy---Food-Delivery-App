import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Icons from "react-native-feather";
import { themeColors } from "@/theme";
import DishRow from "./../components/DishRow";
import CartIcon from "./../components/CartIcon";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import { setRestuarant } from "@/slices/restuarantSlice";

export default function ReastaurantScreen() {
  const { params } = useRoute();
  let item = params;
  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(()=>{
    if(item && item.id){
      dispatch(setRestuarant({...item}))
      console.log(item);
    }
  },[])
  return (
    <View>
      <CartIcon />
      <StatusBar style="light" />
      <ScrollView>
        <View className="relative">
          <Image className="w-full h-72" source={item.image} />
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            className="absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow"
          >
            <Icons.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>
        <View
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
          className="bg-gray-100 -mt-12 pt-6"
        >
          <View className="px-5 ">
            <Text className="text-3xl font-bold">{item.name}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <Text className="text-lg">⭐</Text>
                <Text className="text-green-700">{item.rating}</Text>
                <Text className="text-gray-700">
                  ({item.reviews} reviews){" "}
                  <Text className="font-semibold">{item.category}</Text>
                </Text>
              </View>
              <View className="flex-row items-center space-x-1 ">
                <Icons.MapPin color={"gray"} height={"15"} width={"15"} />
                <Text className="text-gray-700 text-xs">{item.address}</Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-3">{item.category}</Text>
          </View>
        </View>
        <View className="pb-36 bg-gray-100">
          <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
          {item.dishes?.map((dish, index) => (
            <DishRow item={{ ...dish }} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
