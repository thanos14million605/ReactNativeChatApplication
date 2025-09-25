import {
  Keyboard,
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;

type MessageInputAndSendProps = {
  isFocused: boolean;
  setIsFocused: (focused: boolean) => void;
};

const MessageInputAndSend: React.FC<MessageInputAndSendProps> = ({
  isFocused,
  setIsFocused,
}) => {
  const [inputHeight, setInputHeight] = useState(50);
  const [message, setMessage] = useState("");
  const inputRef = useRef<TextInput>(null);

  const handleSend = () => {
    if (message.trim().length === 0) return;
    console.log("Message sent: ", message);
    setMessage("");
    Keyboard.dismiss();
  };

  useEffect(() => {
    if (isFocused) return;
    if (!isFocused) {
      setMessage("");
    }
  }, [isFocused]);

  const handleMessageSendRequest = () => {
    inputRef?.current?.focus();
    setIsFocused(true);
  };

  useEffect(() => {
    if (isFocused) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isFocused]);

  return (
    <>
      <View className="w-full">
        {isFocused && (
          <View className="z-20 absolute mx-1 w-full left-3 right-3 bottom-8 flex flex-row items-center justify-between">
            <TextInput
              ref={inputRef}
              value={message}
              onChangeText={setMessage}
              keyboardAppearance="dark"
              placeholderTextColor="#fff"
              placeholder="Write message..."
              className="px-3 bg-zinc-900 rounded-2xl text-xl text-white"
              multiline={true}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onContentSizeChange={(e) => {
                const newHeight = e.nativeEvent.contentSize.height;
                setInputHeight(Math.min(newHeight, 120));
              }}
              style={{
                position: isFocused ? "absolute" : "relative",
                // right: 3,
                left: 3,
                bottom: isFocused ? SCREEN_HEIGHT / 2.6 : 10,
                borderWidth: 2,
                borderColor: isFocused ? "#84CC16" : "#6b7280",
                paddingTop: 12,
                paddingBottom: 12,
                minHeight: 40,
                height: inputHeight,
                maxHeight: 120,
                width: (SCREEN_WIDTH * 3.0) / 4,
              }}
            />
            <Pressable
              className="h-[40px] mt-3"
              style={{
                position: isFocused ? "absolute" : "relative",
                right: -3,
                bottom: isFocused ? SCREEN_HEIGHT / 2.6 : 10,
                width: (SCREEN_WIDTH * 0.8) / 4,
              }}
              onPress={handleSend}
              disabled={message.trim().length === 0}
            >
              <FontAwesome
                name="send"
                size={30}
                color="#fff"
                className="w-full"
              />
            </Pressable>
          </View>
        )}
        {!isFocused && (
          <View className="h-[70px] flex items-center justify-center bg-gray-800">
            <Pressable className="mb-5" onPress={handleMessageSendRequest}>
              <AntDesign name="message" size={30} color="white" />
            </Pressable>
          </View>
        )}
      </View>
    </>
  );
};

export default MessageInputAndSend;

const styles = StyleSheet.create({});
