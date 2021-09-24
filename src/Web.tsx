import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

const Web = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: "https://www.google.com/?gws_rd=cr,ssl&ei=SICcV9_EFqqk6ASA3ZaABA#q=tutorialspoint",
        }}
      />
    </View>
  );
};

export default Web;

const styles = StyleSheet.create({
  container: {
    height: 350,
  },
});
