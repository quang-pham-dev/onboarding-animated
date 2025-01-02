# Onboarding Animated

A React Native mobile application built with Expo and TypeScript, featuring beautiful animated onboarding screens.

## Tech Stack

### Core

- React Native 0.76.5
- Expo SDK 52.0.23
- TypeScript 5.3.3
- React 18.3.1

### Navigation & UI Components

- expo-router 4.0.15
- @react-navigation/native 7.0.14
- @react-navigation/bottom-tabs 7.2.0
- react-native-reanimated 3.16.1
- react-native-gesture-handler 2.20.2
- expo-blur
- expo-haptics

### Development Tools

- ESLint 8.57.0
- Prettier 3.4.2
- Husky 9.1.7
- Jest 29.2.1

## Prerequisites

- Node.js
- Bun
- iOS Simulator / Android Emulator
- Expo CLI

## Getting Started

1. Install dependencies:

```bash
bun install
```

2. Start the development server:

```bash
bun start
```

3. Run on specific platform:

```bash
# iOS
bun run ios

# Android
bun run android

# Web
bun run web
```

## Available Scripts

### Development

- `bun start` - Start Expo development server
- `bun run ios` - Run on iOS
- `bun run ios:prod` - Run production build on iOS
- `bun run android` - Run on Android
- `bun run android:prod` - Run production build on Android
- `bun run web` - Run on web browser
- `bun run start:dev-client` - Start with dev client
- `bun run start:prod` - Start production build

### Building & Deployment

- `bun run prebuild` - Clean and prepare build
- `bun run export` - Export project

### Testing & Code Quality

- `bun test` - Run tests
- `bun run lint` - Run ESLint
- `bun run lint:fix` - Fix ESLint issues
- `bun run format` - Format code with Prettier

### Utilities

- `bun run fix-deps` - Check and fix dependencies
- `bun run reset-project` - Reset project to initial state

## Project Structure

The project uses Expo Router with file-based routing. Main directories include:

- `app/` - Main application screens and routing
- `assets/` - Application assets
- `components/` - Reusable UI components
- `constants/` - Application constants and configurations
- `hooks/` - Defined Custom hooks
- `interfaces/` - Defined interfaces used in the application
- `screens/` - Application screens
- `themes/` - Theme configurations and styling metrics

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Author

Quang Pham

## Demo

### Preview

https://github.com/user-attachments/assets/8c829f67-10bd-49c3-bdd5-7d55c0c82ac6


### Features demonstrated:

- Beautiful onboarding flow with smooth animations
- Interactive UI elements
- Gesture-based navigation
- Custom animated transitions

Built with Expo, React Native, and React Navigation.
