import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import colors from '../config/colors';
import AppText from '../components/AppText';
import MainButton from '../components/MainButton';

function WelcomeScreen(props) {
    return(
        <View style={styles.container}>
            <ImageBackground source={require('../assets/background.jpg')} style={styles.image} blurRadius={(Platform.OS === "android") ? 2 : 5}>
                <View style={styles.icon}>
                    <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                    <AppText style={styles.text}>Sell What You Don't Need</AppText>
                </View>
                <MainButton color="primary" onPress={() => console.log('tapped')}>Login</MainButton>
                <MainButton color="secondary" onPress={() => console.log('tapped')}>Register</MainButton>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      justifyContent: 'flex-end'
    },
    icon: {
      paddingTop: getStatusBarHeight() * 2,
      flex: 7,
      alignItems: 'center',
    },
    logo: {
      width: 100,
      height: 100,
      marginBottom: 20,  
    },
  });

export default WelcomeScreen;