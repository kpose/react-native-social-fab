import React, { Component } from 'react'
import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import {AntDesign, Entypo, FontAwesome5 } from '@expo/vector-icons';


export default class FloatingButton extends Component {

  animation = new Animated.Value(0);

  toggleMenu = () => {
    const toValue = this.open ? 0 : 1;

    Animated.spring(this.animation, {
      toValue,
      friction: 5
    }).start();

    this.open = !this.open;
  };

  render() {
    const facebookStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200]
          })
        }
      ]
    };

    const twitterStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -140]
          })
        }
      ]
    };

    const whatsappStyle = {
      transform: [
        { scale: this.animation },
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -80]
          })
        }
      ]
    };

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ["0deg", "45deg"]
          })
        }
      ]
    };

    const opacity = this.animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1]
    })

    return (
      <View style = {[styles.container, this.props.position]}>
      <TouchableWithoutFeedback onPress={this.props.onPressFacebook}>
            <Animated.View style ={[styles.button, styles.secondary, facebookStyle, opacity]}>
                <FontAwesome5 name="facebook-f" size={24} color="#FFF" />
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressTwitter}>
            <Animated.View style ={[styles.button, styles.secondary, twitterStyle, opacity]}>
                <Entypo name="twitter" size={24} color="#FFF" />
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={this.props.onPressWhatsapp}>
            <Animated.View style ={[styles.button, styles.secondary, whatsappStyle, opacity]}>
                <FontAwesome5 name="whatsapp" size={24} color="#FFF" />
            </Animated.View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress = {this.toggleMenu}>
            <Animated.View style ={[styles.button, styles.menu, rotation]}>
                <AntDesign name="plus" size={24} color="#FFF" />
            </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      position: "absolute",
    },

    button: {
        position: "absolute",
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: "center",
        justifyContent: "center",
        shadowRadius: 10,
        shadowColor: "#9262a3",
        shadowOpacity: 0.5,
        shadowOffset: {height: 10 }
    },

    menu: {
        backgroundColor: "#4169E1",
    },
    
    secondary: {
      width: 48,
      height: 48,
      borderRadius: 48/2,
      backgroundColor: "#7E9ADF"
    },
    fab: {
      bottom: 100
    }
  });
  
