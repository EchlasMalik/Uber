# Uber Clone with React Native

## Video Demo
https://github.com/user-attachments/assets/bc6a0287-5983-49b0-8117-8023311da957

- Location search with Google Places API
- Ride request and ETA display
- Responsive design for both Android and iOS
- Accepting Crypto payments via BTC & LTC

## Project Overview

This is a clone of the Uber ride-sharing application built using **React Native**. The application integrates with **Google Places API**, **Google Matrix API** for calculating distance and duration of rides, **Redux** for state management, **Tailwind CSS** for styling, and **Google Autocomplete** for location search functionality. This project demonstrates how to build a fully functional ride-hailing app with core features such as real-time location tracking, ride request, and cryptocurrency payments (Any crypto sent to the displayed address will be treated as a donation).

## Features

- **Distance & Duration Calculation:** Implements **Google Matrix API** to calculate the distance and time between the rider and driver.
- **Google Places API Integration:** Provides search functionality for locations using **Google Places API**.
- **Google Autocomplete:** Suggests location names to users when typing in the search field.
- **State Management:** Uses **Redux** to manage application state and data flow.
- **Responsive Design:** **Tailwind CSS** is used for fast and efficient styling, creating a responsive UI that works on both iOS and Android.

## Tech Stack

- **Frontend:** 
  - React Native
  - Redux
  - Tailwind CSS
- **APIs:**
  - Google Places API (for location search)
  - Google Matrix API (for calculating ride distance and duration)
  - Google Autocomplete (for location auto-suggestions)
  
### Prerequisites

Before you can run this app, make sure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** or **Yarn**
- **React Native CLI** (for building the app)
- **Android Studio** or **Xcode** for iOS development

### Steps to Set Up the Project

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/uber-clone.git
   cd uber-clone
   ```

2. **Install Dependencies**

   If you are using **npm**:

   ```bash
   npm install
   ```

   Or if you are using **Yarn**:

   ```bash
   yarn install
   ```

3. **Set up API Keys**

   You need to obtain **Google Places API** and **Google Matrix API** keys for your project. You can get them from the [Google Cloud Console](https://console.cloud.google.com/).

   - Create a project and enable the **Google Places API** and **Google Distance Matrix API**.
   - Get your **API keys** and add them to your project:

   - In your `src/config/GoogleConfig.js` file, add your API keys:

     ```javascript
     export const GOOGLE_API_KEY = "your_google_api_key";
     ```

4. **Run the App**

   After installing dependencies and setting up the API keys, run the app using:

   ```bash
   npx react-native run-android  // For Android
   npx react-native run-ios      // For iOS (macOS only)
   ```

5. **Start the App**

   After running the app, the Uber clone should start on your emulator or physical device.

## Features Walkthrough

### 1. **Location Search with Google Places API**

The app uses the **Google Places API** to allow users to search for places by typing their address. The **Google Autocomplete** feature suggests possible locations as the user types, making location input faster and more accurate.

### 2. **Distance & Duration Calculation**

When the user requests a ride, the app calculates the distance and duration between the user's location and the driver’s location using the **Google Matrix API**. This information is displayed in the app to give users an estimated time of arrival (ETA) for their ride.


### 3. **State Management with Redux**

State management is handled through **Redux**, making it easier to share data across multiple components. The app uses Redux to manage states such as user data, ride request status, driver availability, and more.

### 4. **Tailwind CSS for Styling**

**Tailwind CSS** is used to style the app. It offers utility-first classes that make it easy to create custom designs without writing a lot of CSS. The responsive design ensures the app looks great on both iOS and Android devices.


## Screenshots

Here are some screenshots of the app:

- **Home Screen** (showing real-time location and ride request button)
- **Location Search** (with Google Autocomplete)
- **Ride Request** (with estimated time and duration)

## Known Issues

- **Offline Mode:** The app may not function correctly without an internet connection, as it relies on external APIs.
- **Real-time Location Tracking:** Location tracking may not be fully accurate in certain environments or on some devices.
- **Styling:** While Tailwind CSS is used for responsive design, there may be minor inconsistencies on some screen sizes.

## Future Enhancements

- **Payment Integration:** Integrate with a payment gateway like Stripe or PayPal.
- **Push Notifications:** Implement push notifications to notify users when their ride arrives or when there’s a status change.
- **User Authentication:** Add a login/signup flow using Firebase or any other authentication service.
- **Ride History:** Implement a ride history feature to view past trips and payment details.

## Contributing

We welcome contributions! If you want to contribute to this project, please fork the repository, create a branch, and submit a pull request. Here are some areas where you can contribute:

- Improve documentation
- Fix bugs or issues
- Enhance UI/UX
- Add new features
