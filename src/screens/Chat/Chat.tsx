import React, { useState, useLayoutEffect, useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import { useNavigation } from '@react-navigation/native';

interface User {
  _id: string;
  name?: string;
  avatar?: string;
}

interface Message extends IMessage {
  user: User;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const navigation = useNavigation();


  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages as Message[]));
    // No action taken when a message is sent
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={false}
      showUserAvatar={false}
      onSend={messages => onSend(messages)}
      messagesContainerStyle={styles.messagesContainer}
      user={{
        _id: '1', // Static user ID
        avatar: 'https://i.pravatar.cc/300' // Static user avatar
      }}
    />
  );
};

const styles = StyleSheet.create({
  messagesContainer: {
    backgroundColor: '#fff',
  },
});

export default ChatScreen;
