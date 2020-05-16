import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import FloatingButton from './FloatingButton';


export default function App() {
  return (
    <View style={styles.container}>
     <Image 
        source = {require('./assets/background.jpg')} 
        resizeMode="cover" 
        style={{width: 500, height:900, opacity:0.5}}
        />

        <FloatingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
