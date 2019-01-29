#Plugins Commands

tsc -d nativescript-my-plugin/my-plugin.ios.ts
tns plugin remove nativescript-my-plugin
tns plugin add nativescript-my-plugin
tns run ios --emulator

npm i tns-platform-declarations --save-dev
add "references.d.ts" file in root

TNS_TYPESCRIPT_DECLARATIONS_PATH="$(pwd)/typings" tns build ios --release