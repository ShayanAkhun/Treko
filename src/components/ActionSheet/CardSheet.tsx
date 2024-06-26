import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {
  SheetProps,
  SheetManager,
} from 'react-native-actions-sheet';

const CardSheet = ({
  sheetId,
  payload,
}: SheetProps<{Item: {name: string}; Navigation: any}>) => {
  const navigation = useNavigation();

  const {Item, Navigation} = payload;
  return (
    <ActionSheet id={'CardSheet'} containerStyle={styles.actionSheetContainer}>
      <View style={styles.content}>
        <Text style={styles.title}>{Item.name}</Text>
        <Button
          title="Navigate to Screen 1"
          onPress={() => {
            navigation.navigate('History', {Item});
            SheetManager.show('CardSheet');
          }}
        />
        <Button
          title="Navigate to Screen 2"
          onPress={() => {
            navigation.navigate('Location', {Item});
            SheetManager.hide('CardSheet');
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
