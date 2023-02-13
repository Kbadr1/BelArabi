import React from "react";
import { View } from "react-native";
import Header from "./Header";
import Switch from "./Switch";
import Translation from "./Translation";

const Home = () => {
  return (
    <View>
      <Header />
      <Switch />
      <Translation />
    </View>
  );
};

export default Home;
