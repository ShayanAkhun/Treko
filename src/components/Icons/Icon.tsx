import React from 'react';
import VectorIcon from 'react-native-vector-icons/Ionicons';
import type { default as IoniconIcon } from 'react-native-vector-icons/Ionicons';

export interface IIconProps {
    icon: string;
    color?: string;
    size?: number;
    onPress?(): void;
    children?: undefined;
    style?: React.ComponentProps<typeof IoniconIcon>['style'];
}

export const Icon: React.FC<IIconProps> = ({ icon, color, onPress, size = 20, style }) => {
    return <VectorIcon name={icon} size={size} color={color} onPress={onPress} style={style} />;
};
