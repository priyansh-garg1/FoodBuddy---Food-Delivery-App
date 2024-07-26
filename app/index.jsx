import { useNavigation } from "expo-router";
import Navigation from "./navigation";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../store.js";
export default function Index() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
