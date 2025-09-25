import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { chats } from "../data/chat";

const ChatList = () => {
  const renderItem = ({ item }) => (
    <View className="flex flex-row justify-between items-center border-b-[1px] border-gray-700 h-[75px] px-3">
      <View className="flex flex-row items-center gap-4 h-full">
        <View className="h-[50px] w-[50px] rounded-full bg-lime-500 overflow-hidden">
          <Image
            source={{ uri: item.imageUrl }}
            className="h-full w-full rounded-full"
          />
        </View>
        <View className="flex flex-col justify-center">
          <View className="flex flex-row items-center justify-between w-[200px]">
            <Text className="text-gray-100 text-base font-semibold">
              {item.name}
            </Text>
            <Text className="text-gray-500 text-xs">{item.time}</Text>
          </View>
          <Text className="text-gray-600 truncate max-w-[200px]">
            {item.lastMessage.length < 25
              ? item.lastMessage
              : item.lastMessage?.slice(0, 25) + "..."}
          </Text>
        </View>
      </View>

      {item.unreadCount > 0 ? (
        <View className="flex items-center justify-center h-[20px] w-[20px] rounded-full bg-lime-600">
          <Text className="text-zinc-800 text-xs">{item.unreadCount}</Text>
        </View>
      ) : (
        <Ionicons
          name="checkmark-done"
          size={20}
          color={item.isRead ? "#84cc16" : "#6b7280"}
        />
      )}
    </View>
  );

  return (
    <View className="flex-1">
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ChatList;

const styles = StyleSheet.create({});
