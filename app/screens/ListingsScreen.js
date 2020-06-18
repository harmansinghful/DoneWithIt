import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';

function ListingsScreen(props) {

    const listings = [
        {
            id: 1,
            title: "Red Jacket for sale!",
            price: "100",
            image: require('../assets/jacket.jpg')
        },
        {
            id: 2,
            title: "Couch in great condition",
            price: "1000",
            image: require('../assets/couch.jpg')
        }
    ]

    return(
        <Screen backgroundColor="light">
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => 
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image} />
                }
            />
        </Screen>
    );   
}

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         flex: 1,
//         backgroundColor: colors.light
//     }
// });

export default ListingsScreen;
