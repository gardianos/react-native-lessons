import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ComponentScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>ComponentScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentScreen;
