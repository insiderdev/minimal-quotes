# Minimal Quotes

Minimal quotes is React Native application for both Android and iOS that throws you random quotes in a super clean minimal version. You can save this quotes to favorites or share them with your friends.

![Big Beautiful Picture](https://i.imgur.com/aQRCj7c.png)

The app is designed as a part of [Project365](https://project365.design/2018/05/07/day-127-minimal-quotes-app-concept/)

<a href='https://project365.design/2018/05/07/day-127-minimal-quotes-app-concept/'><img width="200" alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'/></a>
<a href='https://project365.design/2018/05/07/day-127-minimal-quotes-app-concept/'><img width="200" alt='Download on App Store' src='https://i.imgur.com/7IxtMV0.png'/></a>

## Some technical stuff used inside
- React Native to build an app for both Android and iOS
- [Realm database](https://realm.io/docs/javascript/latest) to manage quotes data
- [Redux](https://redux.js.org/) and [Redux thunk](https://github.com/reduxjs/redux-thunk) for state management
- Modular architecture inspired by [this kit](https://github.com/futurice/pepperoni-app-kit)
- [Recompose](https://github.com/acdlite/recompose) to keep component-container structure
- ESlint with [airbnb config](https://github.com/airbnb/javascript) to keep the code clean

## Try it yourself

### 1. Clone and Install
```bash
# Clone the repo
git clone https://github.com/gaykov/minimal-quotes.git

# Install dependencies
yarn install
```

### 2. Run it on iOS or Android
```bash
# Run on iOS
yarn run:ios

# Run on Android
yarn run:android
```

## How can you help
If you find any problems, feature requests, please open an issue or submit a fix as a pull request.

## Want to talk?
If you have any questions or you want us to help you design and develop your application, send us an email at [hi@insider.io](mailto:hi@insider.io)

## License

[MIT License](LICENSE)
