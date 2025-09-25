import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const MessageContactHeader = () => {
  return (
    <View className="w-full h-[75px] border-b-[1px] border-b-gray-500">
      <View className="p-5 flex flex-row justify-between items-center h-full">
        <View className="relative flex flex-row gap-4">
          <Image
            source={{
              uri: "https://cdn5.vectorstock.com/i/1000x1000/57/19/elegant-businesswoman-black-avatar-character-vector-15435719.jpg",
            }}
            className="w-[50px] h-[50px] rounded-full"
          />
          <View className="absolute bottom-[0.05px] left-10 h-[10px] w-[10px] rounded-full bg-lime-500" />
          <View className="flex flex-col justify-center">
            <Text className="text-gray-100 text-xl font-semibold">
              Penda Jallow
            </Text>
            <Text className="text-lime-500 text-sm">online</Text>
          </View>
        </View>
        <View className="flex flex-row gap-6 items-center">
          <Pressable>
            <Ionicons name="call" size={22} color="gray" />
          </Pressable>
          <Pressable>
            <FontAwesome name="video-camera" size={22} color="gray" />
          </Pressable>
          <Pressable>
            <FontAwesome name="info" size={22} color="gray" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default MessageContactHeader;

const styles = StyleSheet.create({});
