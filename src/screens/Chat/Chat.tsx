import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GiftedChat, IMessage } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
  QuerySnapshot,
  DocumentData
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { IconLibrary } from '../../components/Icons/IconsLibarary';
import colors from '../../../colors';

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

  const onSignOut = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity style={styles.headerButton} onPress={onSignOut}>
          <IconLibrary.Octicons name="sign-out" size={24} color={colors.gray} style={styles.headerIcon} />
        </TouchableOpacity>
      )
    });
  }, [navigation]);

  useLayoutEffect(() => {
    const collectionRef = collection(database, 'chats');
    const q = query(collectionRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (querySnapshot: QuerySnapshot<DocumentData>) => {
      console.log('querySnapshot unsubscribe');
      setMessages(
        querySnapshot.docs.map(doc => {
          const data = doc.data() as Omit<Message, 'createdAt'> & { createdAt: any };
          return {
            ...data,
            createdAt: data.createdAt.toDate(),
          } as Message;
        })
      );
    });

    return unsubscribe;
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages as Message[]));
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(database, 'chats'), {
      _id,
      createdAt,
      text,
      user
    });
  }, []);

  return (
    <>
      {/* {messages.map(message => (
        <Text key={message._id}>{message.text}</Text>
      ))} */}
      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={false}
        showUserAvatar={false}
        onSend={messages => onSend(messages)}
        messagesContainerStyle={styles.messagesContainer}
        user={{
          _id: auth?.currentUser?.email || '',
          avatar: 'https://i.pravatar.cc/300'
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    marginRight: 10
  },
  headerIcon: {
    marginRight: 10
  },
  messagesContainer: {
    backgroundColor: '#fff'
  }
});

export default ChatScreen;
