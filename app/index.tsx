import { View, Text } from "react-native";
import React from "react";
import { Slot } from "expo-router";

const CalculatorApp = () => {
  return (
    <View>
      <Text>CalculatorApp</Text>

      <Slot />
    </View>
  );
};

export default CalculatorApp;
