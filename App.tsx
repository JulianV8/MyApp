// import React, { Component } from 'react'
// import { HomeScreen } from './src/screens/HomeScreen';
// import { ContadorScreen } from './src/screens/ContadorScreen';

import { SafeAreaView } from "react-native";
// import { ObjectBoxModelScreen } from "./src/components/ObjectBoxModelScreen";
// import { Tarea2 } from "./src/components/Tarea2";
import { Tarea3 } from "./src/components/Tarea3";

export const App = () => {
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#647EAB',
    }}>
      {/* // <HomeScreen />
      // <ContadorScreen /> */}
      {/* <ObjectBoxModelScreen /> */}
      {/* <Tarea2/> */}
      <Tarea3/>
    </SafeAreaView>
  );
};