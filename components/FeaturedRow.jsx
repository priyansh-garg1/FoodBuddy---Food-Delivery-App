import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { themeColors } from "@/theme";
import restaurantCard from './../components/ReastaurantCard'
import ReastaurantCard from "./../components/ReastaurantCard";

export default function FeaturedRow({ title, restaurants, description }) {
  return (
    <View>
      <View className="flex-row justify-between items-center px-4 mt-3">
        <View>
          <Text className="font-bold text-lg">{title}</Text>
          <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: themeColors.text }} className="font-semibold">
            See All
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}} className="overflow-visible mt-5">
        {
          restaurants.map((restaurant,index)=>{
            return (
              <ReastaurantCard key={index} item={restaurant} />
            )
          })
        }
      </ScrollView>
    </View>
  );
}
