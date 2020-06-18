import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FlatList } from 'react-native';

import Icon from '../components/Icon';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import ListItemSeparator from '../components/ListItemSeparator';

function AccountScreen(props) {
    const item = {
        title: "Mosh Hamedani",
        description: "programmingwithmosh@gmail.com",
        image:require('../assets/mosh.jpg')
    }

    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: "primary"
            }
        },
        {
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: "secondary"
            }
        },
        // {
        //     title: "My Listings",
        //     icon: {
        //         name: "format-list-bulleted",
        //         backgroundColor: "primary"
        //     }
        // }
    ];
    return(
        <Screen backgroundColor="light">
            <View style={styles.accountTitle}>
                <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log('Profile Clicked')}
                ></ListItem>
            </View>
            <View style={styles.listing}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({item}) =>
                        <ListItem
                            title={item.title}
                            IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
                        />
                    }
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>

            <View style={[ styles.listing, styles.logout ]}>
                <ListItem
                    title="Log Out"
                    IconComponent={<Icon name="logout" backgroundColor="yellow" />}
                />
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    accountTitle: {
        marginVertical: 20
    },
    listing: {
        backgroundColor: colors.white,
    },
    textPadding: {
        paddingHorizontal: 15
    },
    logout:{
        marginVertical: 30
    }
})

export default AccountScreen;