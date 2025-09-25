import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import MessageContactHeader from "../components/MessageContactHeader";
import MessageInputAndSend from "../components/MessageInputAndSend";
import HideKeyboard from "../components/HideKeyboard";
import MessageList from "../components/MessageList";

const MessageScreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View className="h-screen relative">
      <MessageContactHeader />
      <MessageList />
      <MessageInputAndSend isFocused={isFocused} setIsFocused={setIsFocused} />
      <HideKeyboard isFocused={isFocused} />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
