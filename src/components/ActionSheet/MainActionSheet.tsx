import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import ActionSheet, {SheetProps,ActionSheetRef} from 'react-native-actions-sheet';

function MaiActionSheet(props: SheetProps<"MainActionSheet">) {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const windowHeight = Dimensions.get('window').height;



  useFocusEffect(
    useCallback(() => {
      if (actionSheetRef.current) {
        actionSheetRef.current.show();
      
      }
    }, [])
  );
    return (
      <ActionSheet
      ref={actionSheetRef}
       id="MaiActionSheet"
      defaultOverlayOpacity={0}
      overlayColor='transparent'
      containerStyle={{ ...styles.actionSheetContainer, height: windowHeight * 0.33 }}
      backgroundInteractionEnabled={true}
      isModal={false}
    >
      <View style={styles.actionSheetContent}>
        <Text style={styles.actionSheetText}></Text>
      </View>

    </ActionSheet>
    );
  }
   
  export default MaiActionSheet;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      position: 'relative',
    },
    actionSheetContainer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
    },
    actionSheetContent: {
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    actionSheetText: {
      fontSize: 28,
      textAlign: 'center',
      color: 'black',
    },
  });
  