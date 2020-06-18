import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from "../config/colors"

function Icon({name, size = 20, backgroundColor, iconColor = colors.white}) {
    return (
        <View style={[styles.icon, {
            backgroundColor:colors[backgroundColor],
            borderRadius: size,
            height: size * 2,
            width: size * 2
            }]}>
            <MaterialCommunityIcons
                    name={name}
                    size={size}
                    color={iconColor}
                ></MaterialCommunityIcons>   
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Icon;