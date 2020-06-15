import React from 'react';
import { View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Apptext from './app/components/AppText';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';

export default function App() {
  return (
    // <WelcomeScreen/>
    // <ViewImageScreen />
    <View
      style = {{
        width: '100%',
        height: 400,
        backgroundColor: '#f8f4f4'
      }}
    >
      <Card
        title="Red Jacket for sale!"
        subTitle="$100"
        image={require('./app/assets/jacket.jpg')}
      ></Card>
    </View>
  );
}
