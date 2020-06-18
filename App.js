import React from 'react';
import { View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Apptext from './app/components/AppText';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import Card from './app/components/Card';
import MessagesScreen from './app/screens/MessagesScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';

export default function App() {
  const user = {
    name: "Mosh Hamedani",
    image: require('./app/assets/mosh.jpg'),
    listings: "5 Listings"
  }

  return (
    // <ListingDetailsScreen 
    //   source={require('./app/assets/jacket.jpg')}
    //   title="Red Jacket for sale"
    //   subTitle="$100"
    //   user={user} />
    // <MessagesScreen />
    // <AccountScreen />
    // <WelcomeScreen/>
    // <ViewImageScreen />
    <ListingsScreen />
  );
}
