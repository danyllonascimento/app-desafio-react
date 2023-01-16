import React from 'react';
import { View } from 'react-native';
import { Svg } from 'react-native-svg';

export default function SVG(props) {
    return (
        <View>
            <Svg
                style={{ width: props.width, height: props.height }}
                source={props.svg}
            />
        </View>
    );
}