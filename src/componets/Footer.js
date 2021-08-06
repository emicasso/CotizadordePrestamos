import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from '../utils/colors';

export default function Footer(props) {
  const {calculate} = props;

  return (
    <View style={styles.viewFooter}>
      <TouchableOpacity style={styles.button} onPress={calculate}>
        <Text style={styles.text}>CALCULAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  viewFooter: {
      bottom: 0,
      height: 100,
      width: '100%',
      alignItems: 'center',
      position: 'absolute',
      borderTopLeftRadius: 30,
      justifyContent: 'center',
      borderTopRightRadius: 30,
      backgroundColor: colors.PRIMARY_COLOR,
  },
  button: {
      padding: 16,
      width: '75%',
      borderRadius: 20,
      backgroundColor: colors.PRIMARY_COLOR_DARK,
  },
  text: {
      fontSize: 18,
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
  },
});
