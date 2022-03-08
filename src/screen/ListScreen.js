import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend Friend 1" },
    { name: "Friend Friend 2" },
    { name: "Friend Friend 3" },
    { name: "Friend Friend 4" },
    { name: "Friend Friend 5" },
    { name: "Friend Friend 6" },
    { name: "Friend Friend 7" },
  ];
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        //element === {item: {name: 'Friend 1 '}, index: 0}
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});
export default ListScreen;
