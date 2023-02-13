import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar as SB } from "react-native";
import Home from "./components/Home";
import TranslationContextProvider from "./context/Translation";

export default function App() {
  return (
    <TranslationContextProvider>
      <View style={[styles.container, { paddingTop: SB.currentHeight }]}>
        <Home />
        <StatusBar style="light" backgroundColor="#0000FE" />
      </View>
    </TranslationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
