import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 20 }}>Giriş Ekranı</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
