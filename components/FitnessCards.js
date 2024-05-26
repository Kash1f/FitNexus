import { StyleSheet, Text, View, Pressable, Image, ScrollView } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const FitnessCards = () => {


  const FitnessData = fitness;
  
  //initalizing navigation to navigate to the workoutscreen
  const navigation = useNavigation();

  return (
    <View>

     {/* For every item in our FitnessData we are going to render a pressable so that we can press on that card and move to the next screen */}

      {FitnessData.map((item, key) => (
       
        <Pressable 
        //here we will provide the name of the screen to which we want to navigate 
        onPress={()=> navigation.navigate("Workout",{
          image:item.image, 
          excersises:item.excersises,
          id:item.id,
        })}
        style={styles.pressable} key={key}>

          <Image style={styles.image} source={{ uri: item.image }} />

          <Text style={styles.fitnessCardName}>{item.name}</Text>
        </Pressable>
        
      ))}
      
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
    width: 320,
    height: 130,
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
