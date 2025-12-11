# Portfolio Mobile

Cross-platform mobile portfolio application built with React Native and Expo. Features dark mode, multi-language support, and native mobile navigation.

## 🚀 Tech Stack

- **React Native** - Mobile framework
- **Expo** - Development platform
- **AsyncStorage** - Local storage for theme and language preferences
- **Context API** - State management (Theme & Language)
- **SafeAreaView** - Safe area handling for mobile devices

## ✨ Features

- 🌓 Dark Mode / Light Mode toggle (defaults to dark mode)
- 🌍 Multi-language support (English/Spanish)
- 📱 Infinite scroll navigation carousel
- 💾 Local storage for theme and language preferences
- 🎨 Modern, mobile-optimized UI
- 📲 Cross-platform (iOS, Android, Web)
- 🔄 State-based navigation (no React Navigation dependency)

## 📁 Project Structure

```
portfolio-mobile/
├── assets/              # Images and icons
├── context/            # Context providers
│   ├── ThemeContext.js
│   └── LanguageContext.js
├── constants/          # Constants and data
│   └── translations.js
├── App.js              # Main application component
├── app.json            # Expo configuration
├── index.js            # Entry point
└── package.json
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-mobile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start Expo development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on different platforms**:
   - **iOS**: `npm run ios` (requires macOS)
   - **Android**: `npm run android` (requires Android Studio)
   - **Web**: `npm run web`

## 📱 Running the App

### Using Expo Go App (Recommended for Development)

1. **Install Expo Go** on your device:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Scan the QR code** with:
   - iOS: Camera app
   - Android: Expo Go app

### Building for Production

1. **Install EAS CLI**:
   ```bash
   npm install -g eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Configure the project**:
   ```bash
   eas build:configure
   ```

4. **Build for platforms**:
   ```bash
   # iOS
   eas build --platform ios
   
   # Android
   eas build --platform android
   
   # Both
   eas build --platform all
   ```

## 📦 Deployment

### Expo Application Services (EAS)

1. **Create an account** at [expo.dev](https://expo.dev)

2. **Build and submit**:
   ```bash
   eas build --platform all
   eas submit --platform all
   ```

### Standalone Builds

1. **Generate APK/IPA**:
   ```bash
   eas build --platform android --profile preview
   eas build --platform ios --profile preview
   ```

2. **Download and distribute** the build files.

## 🎨 Customization

### Update Profile Information

Profile data is embedded directly in `App.js`. Edit the `profileData` object to update your information.

### Modify Translations

Edit `constants/translations.js` to update text content.

### Change Theme Colors

Modify colors in `context/ThemeContext.js`:
```javascript
const colors = {
  light: {
    accent: '#3b82f6',
    // ...
  },
  dark: {
    accent: '#60a5fa',
    // ...
  }
};
```

## 📸 Screenshots

<!-- Add screenshots here -->
- Home screen
- About screen
- Experience screen
- Skills screen
- Projects screen
- Contact screen

## 👤 Author

**Tomas Tutor Onetto**
- Email: tomas2000tutor@gmail.com
- Phone: +54 2224 445207
- Location: San Vicente, Buenos Aires, Argentina

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with React Native and Expo
- React Navigation for routing
- Modern mobile UI patterns

## 📝 Notes

- This app is optimized for mobile devices
- Web version is available but optimized for mobile viewports
- Dark mode and language preferences are saved locally using AsyncStorage
- Default theme is dark mode
- Uses state-based navigation instead of React Navigation for better compatibility
- Infinite scroll carousel for navigation items
- Requires Expo Go app for development, or standalone build for production

