import { View, Text, StyleSheet } from "react-native";
import Svg, { Defs, Rect, LinearGradient, Stop } from "react-native-svg";
import React from "react";
import Onboarding from "../components/Onboarding.js";

export default function OnboardingScreen() {
  return (
    <View styles={{ flex: 1 }}>
      <Onboarding />
    </View>
  );
}
