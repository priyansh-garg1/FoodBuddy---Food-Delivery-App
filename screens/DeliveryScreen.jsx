import { View, Text } from "react-native";
import React from "react";
import { featured } from "@/constants";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "@/theme";

export default function DeliveryScreen() {
  const reasturant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className='mt-96'>
      <View className="rounded-t-3xl -mt-32 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className='text-lg text-gray-700 font-semibold'>Estimated Time</Text>
            <Text className='text-3xl  font-extrabold text-gray-700'>20-30 minutes</Text>
            <Text className='text-3xl  font-extrabold text-gray-700'></Text>
          </View>
        </View>
      </View>
    </View>
  );
}
