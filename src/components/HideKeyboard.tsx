import {
  Dimensions,
  Keyboard,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("screen").height;

type HideKeyboardProps = {
  isFocused: boolean;
};

const HideKeyboard: React.FC<HideKeyboardProps> = ({ isFocused }) => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: SCREEN_HEIGHT / 1.95,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
      }}
    >
      {isFocused ? (
        <Pressable onPress={() => Keyboard.dismiss()}>
          <MaterialIcons name="keyboard-hide" size={35} color="#fff" />
        </Pressable>
      ) : null}
    </View>
  );
};

export default HideKeyboard;

const styles = StyleSheet.create({});
