import "react-native-gesture-handler";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { name as appName } from "./app.json";
import { GestureHandlerRootView } from "react-native-gesture-handler";

AppRegistry.registerComponent(appName, () => App);
