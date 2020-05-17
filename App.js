import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import FloatingButton from "react-native-social-fab";


export default function App() {
  return (
    <View style={styles.container}>
     <Image 
        source = {require('./assets/background.jpg')} 
        resizeMode="cover" 
        style={{width: 500, height:900, opacity:0.5}}
        />

        <FloatingButton 
          onPressFacebook= { () => alert('facebook icon pressed')}
          onPressTwitter= { () => alert('Twitter icon pressed')}
          onPressInstagram= { () => alert('instagram icon pressed')}
          position= {{bottom: 100, right: 60}}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
});
