import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem'

function ListingDetailsScreen(props) {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={props.source} resizeMode="cover"></Image>
            <View style={styles.titleArea}>
                <AppText style={styles.title}>{props.title}</AppText>
                <AppText style={styles.subTitle}>{props.subTitle}</AppText>
            </View>
            <View style={styles.userProfile}>
                <ListItem image={props.user.image} title={props.user.name} subTitle={props.user.listings}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    image: {
        width: '100%',
        height: 300
    },
    titleArea: {
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    title: {
        marginBottom: 5,
    },
    subTitle: {
        color: colors.secondary
    },
    userProfile: {
        marginVertical: 50
    }
})

export default ListingDetailsScreen;