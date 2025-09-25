import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import ChatHeader from "../components/ChatHeader";
import SearchBar from "../components/SearchBar";
import ChatList from "../components/ChatList";

const ChatsScreen = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className="px-5 flex-1">
      <ChatHeader isFocused={isFocused} />
      <SearchBar isFocused={isFocused} setIsFocused={setIsFocused} />
      <ChatList />
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({});
