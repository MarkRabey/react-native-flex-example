import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
    }}>
      <View style={[{ flex: 1, backgroundColor: 'blue' }, styles.center ]}>
        <Text style={ styles.text }>Blue</Text>
      </View>
      <View style={{ flex: 2, backgroundColor: 'green' }}>
        <View style={{ flex: 1, backgroundColor: 'orange', ...styles.center }}>
          <Text style={ styles.text }>Orange</Text>
        </View>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          backgroundColor: 'purple',
        }}>
          <Text style={ styles.text }>Purple</Text>
          <Text style={ [styles.text, {
            alignSelf: 'center',
            position: 'absolute',
            top: 0,
          }] }>More Purple</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
