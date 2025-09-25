import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

type SearchBarProps = {
  isFocused: boolean;
  setIsFocused: (s: boolean) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ isFocused, setIsFocused }) => {
  return (
    <View className="relative">
      <Ionicons
        name="search-outline"
        size={18}
        color="#9CA3AF"
        className="absolute z-10 top-6 left-4"
      />
      <TextInput
        placeholderTextColor="#9ca3af"
        placeholder="Search..."
        className="px-12 bg-zinc-900 text-gray-400 rounded-lg py-0 h-[50px] text-xl flex items-center justify-center"
        textAlignVertical="center"
        style={{
          borderWidth: 0.75,
          borderColor: isFocused ? "#84cc16" : "#6b7280",
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        enterKeyHint="go"
        keyboardAppearance="dark"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
