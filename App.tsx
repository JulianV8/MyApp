// import React, { Component } from 'react'
// import { HomeScreen } from './src/screens/HomeScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';

import { SafeAreaView } from "react-native";
import { ObjectBoxModelScreen } from "./src/components/ObjectBoxModelScreen";

export const App = () => {
  return (
    <SafeAreaView>
      {/* // <HomeScreen />
      // <ContadorScreen /> */}
      <ObjectBoxModelScreen />
    </SafeAreaView>
  );
};