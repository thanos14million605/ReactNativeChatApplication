import "./global.css";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import MessageScreen from "./src/screens/MessageScreen";
import ChatsScreen from "./src/screens/ChatsScreen";

const Main = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-1 bg-stone-950"
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <ChatsScreen />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <Main />
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
