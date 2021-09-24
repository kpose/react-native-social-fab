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
        source={{ uri: "https://facebook.com" }}
        renderLoading={LoadingIndicatorView}
        startInLoadingState={true}
        onError={(syntheticEvent) => {
          const { nativeEvent } = syntheticEvent;
          console.warn("WebView error: ", nativeEvent);
        }}
      />
    </View>
  );
};

export default Web;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //height: 100,
    backgroundColor: "red",
  },
});
