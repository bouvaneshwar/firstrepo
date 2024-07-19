import React from "react";
import { View} from "react-native";
import Header from './compo/Header';
import Home from './screen/Home';

export default function app() {
  return (
    <View>
      <Home/>
      <View ><Header/></View>
      </View>
  );
}

