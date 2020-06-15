import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../config/colors';

function Card(props) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={props.image} resizeMode="cover"/>
            <View style={styles.textzone}>
                <AppText style={styles.title}>{props.title}</AppText>
                <AppText style={styles.subTitle}>{props.subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-end",
        marginTop: 200,
        marginBottom: 50,
        marginHorizontal: 20,
    },
    image: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        height: '100%',
    },
    textzone: {
        backgroundColor: colors.white,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        marginBottom: 10,
    },
    subTitle: {
        color: colors.secondary
    }
});

export default Card;