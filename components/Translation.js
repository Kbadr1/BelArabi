import React, { useContext, useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Pressable,
} from "react-native";
import { TranslationContext } from "../context/Translation";
import Ionicons from "@expo/vector-icons/Ionicons";

const Translation = () => {
  const {
    inputText,
    setInputText,
    outputText,
    translate,
    fromLang,
    toLang,
    reset,
  } = useContext(TranslationContext);

  return (
    <View style={styles.container}>
      <View>
        {inputText && (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={styles.fromLang}>
              {fromLang == "en" ? "English" : "Arabic"}
            </Text>
            <Pressable onPress={() => reset()}>
              <Ionicons name="close" size={22} color="black" />
            </Pressable>
          </View>
        )}

        <TextInput
          style={styles.fromInput}
          placeholder={fromLang == "en" ? "Enter text" : "ادخل النص"}
          placeholderTextColor={"#4d4d4d"}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
          multiline={true}
          textAlignVertical="top"
          blurOnSubmit={true}
          onSubmitEditing={() => translate()}
        />
      </View>
      <View
        style={[
          styles.lineContainer,
          { display: outputText !== "" ? "flex" : "none" },
        ]}
      >
        <View style={styles.line}></View>
      </View>
      <View>
        {outputText && (
          <Text style={styles.toLang}>
            {toLang == "en" ? "English" : "Arabic"}
          </Text>
        )}
        <Text style={styles.outputText}>{outputText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    paddingHorizontal: 10,
  },
  fromLang: {
    marginBottom: 20,
    fontSize: 16,
  },
  fromInput: {
    fontSize: 22,
  },
  toLang: {
    fontSize: 16,
    color: "#0000ffba",
    marginBottom: 20,
  },
  outputText: {
    fontSize: 22,
    color: "#0000ffba",
  },
  lineContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 22,
  },
  line: {
    height: 2,
    width: "50%",
    backgroundColor: "#0000fe67",
    borderRadius: 10,
  },
});

export default Translation;
