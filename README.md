# react-native-floating-social-button

![Fully customizable material designed floating action button component for React Native.](https://img.shields.io/badge/-%20Fully%20customizable%20material%20designed%20floating%20action%20button%20component%20for%20React%20Native.-lightgrey)

![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)
[![Platform - iOS, Android, Web](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)] [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
<img alt="React Native Floating Social Button" src="https://github.com/kpose/react-native-floating-social-button/blob/master/assets/floatingbuttonexample.gif" width="49.7%"/>
</p>

## Installation

Add the dependency:

```
npm i react-native-social-fab
```

or

```
yarn add react-native-social-fab
```

## Example Usage

To execute the example using **Snack** open [Expo Snack link](https://snack.expo.io/@kpose/react-native-social-fab)

## Peer Dependencies

##### IMPORTANT! You need install them.

```json
 "react": "^16.0.0-beta.5",
 "react-native": "^0.49.1"
```

## Basic Usage

**First step:** import the component:

```javascript
import FloatingButton  from "react-native-social-fab";
```

**Second step:** Use the button

```jsx
<FloatingButton 
          onPressFacebook= { () => alert('facebook icon pressed')}
          onPressTwitter= { () => alert('Twitter icon pressed')}
          onPressInstagram= { () => alert('instagram icon pressed')}
          position= {{bottom: 100, right: 60}}
        />
```

### Example Application

- I just shared the example project on Expo, simply run on Snack to check what it is:
  [via Expo](https://snack.expo.io/@kpose/react-native-social-fab)

### Configuration - Props

**FloatingButton**

| Property                    |   Type    |         Default          | Description                                                                                                                              |
| --------------------------- | :-------: | :----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| onPressFacebook            | function |      -     | function to be called when facebook icon is pressed |
| onPressTwitter             | function |       -       | function to be called when twitter icon is pressed |
| onPressInstagram           | function |          -           | function to be called when instagram icon is pressed |
| position                   | function |          `{bottom: 100, right: 60}`           | Style to update button position |

### ToDos

- [x] ~~LICENSE~~
- [x] example
- [x] add colors configurations
- [x] add more positions like left, center and right
- [x] use components as icon
- [x] hide background
- [x] open on mounting
- [ ] support hide or show the component with an animation
- [ ] change plus icon to be customizable
- [ ] Write an article about the lib on Dev
- [ ] migrate to TypeScript
- [ ] allow user defined animations
- [ ] use crazy animations
                                                      |

## Author

Jude Ganihu, ganihujude@gmail.com

## License

React Native Floating Action Button Library is available under the MIT license. See the LICENSE file for more info.
