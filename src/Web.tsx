import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { WebView } from "react-native-webview";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
  url: string;
  close: () => void;
}

const Web = ({ url, close }: Props) => {
  function LoadingIndicatorView() {
    return <ActivityIndicator color="#009b88" size="large" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={close}>
          {/* <Icon name="remove" size={widthPercentageToDP(5)} /> */}
          <Text style={{ fontWeight: "bold" }}>Close</Text>
        </Pressable>
      </View>

      <WebView
        originWhitelist={["*"]}
        source={{ uri: url }}
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
  },
  header: {
    //marginBottom: 10,
    //backgroundColor: "red",
    height: hp(5),
    justifyContent: "center",
    paddingLeft: 10,
  },
});
