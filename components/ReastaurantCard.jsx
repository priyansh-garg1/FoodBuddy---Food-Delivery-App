import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import * as Icons from "react-native-feather"

export default function ReastaurantCard({ item }) {
  return (
    <TouchableWithoutFeedback>
      <View className="mr-6 bg-white rounded-3xl shadow-black shadow-lg ">
        <Image className="h-36 w-64 rounded-t-3xl" source={item.image} />
        <View className="px-3 pb-4 space-y-2">
          <Text className="text-lg font-bold pt-2">{item.name}</Text>
          <View className="flex-row items-center space-x-1">
            <Text className="text-lg">⭐</Text>
            <Text className="text-green-700">{item.rating}</Text>
            <Text className="text-gray-700">
              ({item.reviews} reviews){" "}
              <Text className="font-semibold">{item.category}</Text>
            </Text>
          </View>
          <View className='flex-row items-center space-x-1 '>
            <Icons.MapPin color={"gray"} height={'15'} width={'15'} />
            <Text className='text-gray-700 text-xs'>{item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
