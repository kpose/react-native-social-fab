import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FloatingButton from "./FloatingButton";
import Web from "./Web";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => {
  return (
    <View style={styles.container}>
      <FloatingButton iconBackgroundColor="transparent" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
