import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Header = () => {
  const [fontsLoaded] = useFonts({
    BungeeInline: require("../assets/fonts/BungeeInline-Regular.ttf"),
    PermanentMarker: require("../assets/fonts/PermanentMarker-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: "PermanentMarker" }]}>
        <Text style={{ color: "#04EF64" }}>B</Text>
        <Text style={{ color: "#FF6600" }}>E</Text>
        <Text style={{ color: "#FECD4D" }}>L </Text>
        <Text style={{ color: "#FF0087" }}>A</Text>
        <Text style={{ color: "#06ECFC" }}>R</Text>
        <Text style={{ color: "#FF0087" }}>A</Text>
        <Text style={{ color: "#FF91F4" }}>B</Text>
        <Text style={{ color: "#FECD4D" }}>I</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0000FE",
    // paddingVertical: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
  },
});

export default Header;
