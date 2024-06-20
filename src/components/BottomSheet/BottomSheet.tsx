// import React, {useCallback, useEffect, useImperativeHandle} from 'react';
// import { View, StyleSheet, Dimensions,Text } from 'react-native';
// import { GestureDetector, Gesture } from "react-native-gesture-handler";
// import Animated, {
//     Extrapolation,
//     interpolate,
//     useAnimatedStyle,
//     useSharedValue,
//     withSpring,

// } from "react-native-reanimated";

// const { height: SCREEN_HEIGHT } = Dimensions.get('window')



// const BottomSheet =( () => {
//     const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;
//     const MIN_TRANSLATE_Y = -100;
//     const translateY = useSharedValue(0);



//     const scrollTo = useCallback((destination: number) => {
//         'worklet';
//         translateY.value = withSpring(destination, { damping: 50 });
//     }, []);

//     const context = useSharedValue({ y: 0 });

//     const gesture = Gesture.Pan()
//         .onStart(() => {
//             context.value = { y: translateY.value };
//         })
//         .onUpdate((event) => {
//             translateY.value = event.translationY + context.value.y;
//             translateY.value = Math.max(Math.min(translateY.value, MIN_TRANSLATE_Y), MAX_TRANSLATE_Y);
//         })
//         .onEnd(() => {
//             if (translateY.value > -SCREEN_HEIGHT / 3) {
//                 scrollTo(MIN_TRANSLATE_Y);
//             } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
//                 scrollTo(MAX_TRANSLATE_Y);
//             }
//         });

//     useEffect(() => {
//         translateY.value = withSpring(-SCREEN_HEIGHT / 3, { damping: 50 });
//     }, []);

//     const rBottomSheet = useAnimatedStyle(() => {
//         const borderRadius = interpolate(translateY.value,
//             [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y], [25, 0],
//             Extrapolation.CLAMP);

//         return {
//             borderRadius,
//             transform: [{ translateY: translateY.value }]
//         };
//     });

//     return (
//         <GestureDetector gesture={gesture}>
//             <Animated.View style={[styles.BottomSheetContainer, rBottomSheet]}>
//                 <View style={styles.line} />
//                 <Text style={{textAlign: 'center'}}>Track Your Employees</Text>
//                 <Text style={{textAlign: 'center',top:10}}>14155 Sullyfield Circle, Suite H, Chantilly, VA 20151</Text>
//                 <Text style={{textAlign: 'center',top:20}}>14155 Sullyfield Circle, Suite H, Chantilly, VA 20151</Text>
//                 <Text style={{textAlign: 'center',top:30}}>14155 Sullyfield Circle, Suite H, Chantilly, VA 20151</Text>
//             </Animated.View>
//         </GestureDetector>
//     );
// });

// const styles = StyleSheet.create({
//     BottomSheetContainer: {
//         width: '100%',
//         height: SCREEN_HEIGHT,
//         backgroundColor: 'white',
//         position: 'absolute',
//         top: SCREEN_HEIGHT,
//         borderRadius: 25,
//     },
//     line: {
//         width: 75,
//         height: 4,
//         backgroundColor: 'grey',
//         alignSelf: 'center',
//         marginVertical: 15,
//         borderRadius: 2
//     }
// });

// export default BottomSheet;
