import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Web = () => {
  function LoadingIndicatorView() {
    return <ActivityIndicator color="#009b88" size="large" />;
  }

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ uri: "https://reactnative.dev/" }}
        renderLoading={LoadingIndicatorView}
        style={{ flex: 1, height: hp(90) }}
      />
    </View>
  );
};

export default Web;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "red",
  },
});
