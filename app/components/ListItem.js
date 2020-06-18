import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../config/colors';
import AppText from '../components/AppText';


function ListItem({image, IconComponent, title, subTitle, onPress, renderRightActions}) {
    return(
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                <View style={styles.container}>
                    { IconComponent }
                    { image && <Image style={styles.image} source={image} resizeMode="cover"/> }
                    <View style={styles.textzone}>
                        <AppText style={styles.title}>{title}</AppText>
                        { subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View> 
            </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: colors.white
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    textzone: {
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "normal"
    },
    subTitle: {
        fontSize: 12,
        fontWeight: "normal",
        color: colors.medium
    }
})

export default ListItem;