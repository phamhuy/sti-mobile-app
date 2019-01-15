# Installation
1. Install Android and iOS requirements:
`ruby -e "$(curl -fsSL https://www.nativescript.org/setup/mac)"`
Note: Make sure environment variable ANDROID_HOME is pointing to Android sdk folder (e.g. "/Users/bob/Library/Android/sdk").
2. Install Nativescript CLI:
`npm install -g nativescript`
3. Create a virtual Android device using the Android Virtual Device Manager in Android Studio.

# Compile
### Run on Android emulators
`tns run android --bundle --env.environment="prod"`

### Run on iOS simulators
`tns run ios --bundle --env.environment="prod"`

# Contact Info
Email: hqpham1@uci.edu
Phone: (949)394-6149