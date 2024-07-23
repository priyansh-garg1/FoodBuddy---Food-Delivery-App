import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

export default function OrderPreaparingScreen() {
  const navigation = useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Delivery')
    },3000)
  },[])
  return (
    <View className='flex-1 bg-gray-50 justify-center items-center'>
      <Image source={require("../assets/images/delivery.gif")} className='h-96 w-96'/>
    </View>
  )
}