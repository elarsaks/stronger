import React from "react";
import { StyleSheet, Text } from "react-native";

const Logo = () => {
  return <Text style={styles.logo}>STRONGER</Text>;
};

const styles = StyleSheet.create({
  logo: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#FF4500",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Logo;
