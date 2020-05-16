# react-native-floating-social-button

[![Fully customizable material designed floating action button component for React Native.](https://img.shields.io/badge/-%20Fully%20customizable%20material%20designed%20floating%20action%20button%20component%20for%20React%20Native.-lightgrey)]

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)]

![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)


## Installation

Add the dependency:

```
npm i xxx
```

or

```
yarn add xxx
```

## Example

To execute the example using **Snack** open [Expo Snack link](https://snack.expo.io/@kpose/react-native-floating-social-button)

## Peer Dependencies

##### IMPORTANT! You need install them.

```json
"react": ">= 16.x",
"react-native": ">= 0.55.x",
```

## Basic Usage

**First step:** import the component:

```javascript
import FloatingButton  from "xxx";
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

- I just shared the example project on Expo, simply run on Apptizer to check what it is:
  [via Expo](https://snack.expo.io/@kpose/react-native-floating-social-button)

### Configuration - Props

**FloatingButton**

| Property                    |   Type    |         Default          | Description                                                                                                                              |
| --------------------------- | :-------: | :----------------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| onPressFacebook            | function |      required     | function to be called when facebook icon is pressed |
| onPressTwitter             | function |       required        | function to be called when twitter icon is pressed |
| onPressInstagram           | function |          required           | function to be called when instagram icon is pressed |

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
