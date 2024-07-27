import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { featured } from "@/constants";
import { themeColors } from "@/theme";
import * as Icons from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectReasturant } from "@/slices/restuarantSlice";
import { removeFromCart, selectCartItems, selectCartTotal } from "@/slices/cartSlice";

export default function CartScreen() {
  const reastaurant = useSelector(state => state.resturant.restuarant);
  const cartItmes = useSelector(selectCartItems)
  const cartTotal = useSelector(selectCartTotal);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const [groupItems,setGroupItems] = useState({});
  const deliveryFee = Math.ceil(cartTotal/98);

  useEffect(() => {
    const items = cartItmes.reduce((group, item)=>{
      if(group[item.id]){
        group[item.id].push(item);
      }else{
        group[item.id] = [item];
      }
      return group;
    },{})
    setGroupItems(items);
  },[cartItmes])
  return (
    <View className="bg-white flex-1 pt-7 ">
      <View className="relative py-4 shadow-sm">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ backgroundColor: themeColors.bgColor(1) }}
          className="absolute z-10 rounded-full p-1 shadow top-3 left-4"
        >
          <Icons.ArrowLeft strokeWidth={3} stroke={"white"} />
        </TouchableOpacity>
        <View>
          <Text className="text-center font-bold text-2xl">Your Cart</Text>
          <Text className="text-center text-gray-500">{reastaurant?.name}</Text>
        </View>
      </View>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require("../assets/images/bikeGuy.webp")}
          className="h-20 w-20 "
        />
        <Text className="flex-1 pl-4 ">Deliver in 20-30 minutes</Text>
        <TouchableOpacity className="">
          <Text className="font-bold" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupItems)?.map(([key,items]) => {
          let dish = items[0]
          return (
            <View
              key={key}
              className="flex-row items-center py-2 px-4 bg-gray-100 rounded-3xl mx-2 space-x-3 mb-3 shadow-lg"
            >
              <Text className="font-bold" style={{ color: themeColors.text }}>
                {items.length} x
              </Text>
              <Image className="h-14 w-14 rounded-full" source={dish?.image} />
              <Text className="flex-1 font-bold text-gray-700">
                {dish?.name}
              </Text>
              <Text className="font-semibold text-base">${dish?.price}</Text>
              <TouchableOpacity
              onPress={()=>dispatch(removeFromCart({id:dish?.id}))}
                className="p-1 rounded-full"
                style={{ backgroundColor: themeColors.bgColor(1) }}
              >
                <Icons.Minus
                  height={20}
                  width={20}
                  color={"white"}
                  strokeWidth={2}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="p-6 px-8 rounde-t-3xl space-y-4 rounded-3xl"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">${cartTotal}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee</Text>
          <Text className="text-gray-700">${deliveryFee}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Order Total</Text>
          <Text className="text-gray-700 font-bold">${cartTotal+deliveryFee}</Text>
        </View>
        <View>
          <TouchableOpacity
          onPress={()=>navigation.navigate('OrderPreaparing')}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
