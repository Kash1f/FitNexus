import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import fitness from "../data/fitness";

const FitnessCards = () => {
  const FitnessData = fitness;

  return (
    <View>
      {FitnessData.map((item, key) => (
        <Pressable style={styles.pressable} key={key}>
          <Image style={styles.image} source={{ uri: item.image }} />

          <Text style={styles.fitnessCardName}>{item.name}</Text>
        </Pressable>
      ))}
      <Text>FitnessCards</Text>
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  image: {
    width: "95%",
    height: 140,
    borderRadius: 7,
  },

  fitnessCardName: {
    position: "absolute",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    left: 20,
    top: 20,
  },
});
