import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { TranslationContext } from "../context/Translation";

const Switch = () => {
  const { fromLang, toLang, swapLanguages } = useContext(TranslationContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.type}>From</Text>
        <Text style={styles.language}>
          {fromLang == "en" ? "English" : "Arabic"}
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Pressable onPress={() => swapLanguages()}>
          <Image
            style={styles.swapIcon}
            source={require("../assets/icons/swap.png")}
          />
        </Pressable>
      </View>
      <View>
        <Text style={[styles.type, { textAlign: "right" }]}>To</Text>
        <Text style={styles.language}>
          {toLang == "en" ? "English" : "Arabic"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    backgroundColor: "#0000FE",
    paddingVertical: 10,
  },
  type: {
    color: "#3638FF",
    fontWeight: "700",
  },
  language: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
  iconContainer: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 200,
    borderWidth: 8,
    borderColor: "#fff",
    marginBottom: -50,
  },
  swapIcon: {
    width: 20,
    height: 20,
  },
});

export default Switch;
