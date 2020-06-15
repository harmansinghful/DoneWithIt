import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return(
        <View style={styles.container}>
            <View style={styles.buttonsView}>
                <View style={[styles.buttons, styles.close]}></View>
                <View style={[styles.buttons, styles.save]}></View>
            </View>
            <Image source={require('../assets/chair.jpg')} resizeMode="contain" style={styles.image}></Image>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        backgroundColor: colors.black,
    },
    buttonsView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: getStatusBarHeight()
    },
    buttons: {
        width: 50,
        height: 50
    },
    close: {
        backgroundColor: colors.primary,
    },
    save: {
        backgroundColor: colors.secondary,
    },
    image: {
        flex: 9,
        height: '100%',
        width: '100%',
        marginBottom: '40%',
        flexWrap: "wrap"
    }
});

export default ViewImageScreen;