import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Fontisto, FontAwesome, Entypo } from "@expo/vector-icons";

type ChatHeaderProps = {
  isFocused: boolean;
};

const ChatHeader: React.FC<ChatHeaderProps> = ({ isFocused }) => {
  return (
    <View className="mb-3 flex flex-row justify-between items-center pt-3">
      <View>
        <Text
          className="text-3xl font-semibold tracking-wider"
          style={{
            color: isFocused ? "#84cc16" : "#fff",
          }}
        >
          Chats
        </Text>
      </View>

      <View className="flex gap-7 flex-row">
        <Pressable className="h-[40px] w-[40px] rounded-[20px] bg-slate-800 flex items-center justify-center">
          <Fontisto
            name="player-settings"
            size={18}
            color={isFocused ? "#84cc16" : "gray"}
          />
        </Pressable>

        <Pressable className="h-[40px] w-[40px] rounded-[20px] bg-slate-800 flex items-center justify-center">
          <FontAwesome
            name="bell"
            size={18}
            color={isFocused ? "#84cc16" : "gray"}
          />
        </Pressable>

        <Pressable className="h-[40px] w-[40px] rounded-[20px] bg-slate-800 flex items-center justify-center">
          <Entypo
            name="edit"
            size={18}
            color={isFocused ? "#84cc16" : "gray"}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({});
