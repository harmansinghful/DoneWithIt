import React from 'react';
import { View, StyleSheet, Text} from 'react-native';

import colors from '../config/colors';

function MainButton(props) {
    return(
        <View style={ [ styles.loginButtons, {backgroundColor: colors[props.color]}] }>
            <Text style={styles.font}>{ props.children }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    loginButtons: {
        width: "90%",
        marginHorizontal: '5%',
        marginBottom: 20,
        borderRadius: 30,
        flex: 0.6,
        justifyContent: "center",
        alignItems: 'center'
      },
      font: {
          fontSize: 16,
          textTransform: "uppercase",
          color: colors.white,
          fontWeight: "bold"
      }
})

export default MainButton;