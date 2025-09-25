import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const messages = [
  {
    id: "1",
    text: "Hey! How's your day going? 😊",
    time: "09:15",
    sender: "other",
  },
  {
    id: "2",
    text: "Hey! Pretty good, just finishing some work. You?",
    time: "09:17",
    sender: "me",
  },
  {
    id: "3",
    text: "Same here. Thinking about grabbing dinner soon. 🍔",
    time: "09:18",
    sender: "other",
  },
  {
    id: "4",
    text: "Sounds good! Want me to join?",
    time: "09:19",
    sender: "me",
  },
  {
    id: "5",
    text: "Yes, let's meet around 1 pm at our usual spot.",
    time: "09:20",
    sender: "other",
  },
  {
    id: "6",
    text: "Perfect! See you there. 😎",
    time: "09:21",
    sender: "me",
  },
  {
    id: "7",
    text: "By the way, did you finish that report for the project?",
    time: "09:25",
    sender: "other",
  },
  {
    id: "8",
    text: "Almost done. Just need to review the last section.",
    time: "09:27",
    sender: "me",
  },
  {
    id: "9",
    text: "Cool, let me know if you need help. 👍",
    time: "09:28",
    sender: "other",
  },
  {
    id: "10",
    text: "Thanks! I’ll ping you if anything comes up.",
    time: "09:30",
    sender: "me",
  },
  {
    id: "11",
    text: "See you at lunch then! 🍕",
    time: "09:31",
    sender: "other",
  },
];

const MessageList = () => {
  const renderItem = ({ item }: { item: (typeof messages)[0] }) => {
    const isMe = item.sender === "me";

    return (
      <View className="mb-3 mt-3">
        <View
          className={`max-w-[80%] px-4 py-2 rounded-xl ${
            isMe
              ? "self-end bg-lime-500 border-l-8 border-l-white"
              : "self-start bg-zinc-700 border-r-8 border-r-lime-400"
          }`}
        >
          <Text className={`text-xl ${isMe ? "text-zinc-800" : "text-white"}`}>
            {item.text}
          </Text>
        </View>
        <Text
          className={`text-lg ${
            isMe ? "text-lime-500 self-end" : "text-gray-400 self-start"
          }`}
        >
          {item.time}
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1">
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          paddingBottom: 10,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default MessageList;

const styles = StyleSheet.create({});
