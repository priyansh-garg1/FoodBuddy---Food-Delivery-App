import { useNavigation } from 'expo-router';
import Navigation from './navigation'
import { useEffect } from 'react';
export default function Index() {
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerShown:false
    })
  }, [])
  
  return (
    <Navigation />
  );
}
