import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ActionSheet, { SheetProps } from 'react-native-actions-sheet';

const CardSheet = ({ payload }: SheetProps<{ item: { name: string } }>) => {
  const navigation = useNavigation();

  return (
    <ActionSheet id="CardSheet" containerStyle={styles.actionSheetContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>{payload?.item.name}</Text>
        <Button
          title="Navigate to Screen 1"
          onPress={() => {
            navigation.navigate('Screen1', { item: payload?.item });
            ActionSheet.hide('CardSheet');
          }}
        />
        <Button
          title="Navigate to Screen 2"
          onPress={() => {
            navigation.navigate('Screen2', { item: payload?.item });
            ActionSheet.hide('CardSheet');
          }}
        />
      </View>
    </ActionSheet>
  );
};

const styles = StyleSheet.create({
  actionSheetContainer: {
    height: '30%',
  },
  content: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default CardSheet;
