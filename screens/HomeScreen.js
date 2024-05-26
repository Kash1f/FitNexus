import { ScrollView, StyleSheet, Text, View, Image, SafeAreaView} from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {

  const {
   
    minutes,
  
    calories,

    workout,
  } = useContext(FitnessItems);
  return (
    <SafeAreaView style={{marginTop:40}}>
      <View style={styles.homeWorkout}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>
          HOME WORKOUT
        </Text>

        {/* rendering workouts, calories and minutes */}

        {/* this view will have 3 different views */}

        <View style={styles.parentView}>
          <View>
            <Text style={styles.textOne}>{workout}</Text>
            <Text style={styles.textTwo}>WORKOUTS</Text>
          </View>

          <View>
            <Text style={styles.textThree}>{calories}</Text>
            <Text style={styles.textFour}>KCAL</Text>
          </View>
          <View>
            <Text style={styles.textFive}>{minutes}</Text>
            <Text style={styles.textSix}>MINS</Text>
          </View>
        </View>

        <View style={{justifyContent:"center", alignItems:"center"}}>
        <Image
            style={{
              width: "90%",
              height: 120,
              borderRadius: 7,
            

            }}
            source={{
              uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png",
            }}
          />
          </View>
          <FitnessCards/>
      </View>
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeWorkout: {
    backgroundColor: "#CD853F",
    padding: 10,
    height: 200,
    width: 415,
  },

  parentView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20
  },

  textOne:{
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:18
  },

  textTwo:{
    color:"#D0D0D0",
    marginTop:6,
    fontSize:17

  },

  textThree:{
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:18
  },

  textFour:{
    color:"#D0D0D0",
    marginTop:6,
    fontSize:17

  },
  textFive:{
    textAlign:'center',
    fontWeight:'bold',
    color:'white',
    fontSize:18
  },
  textSix:{
    color:"#D0D0D0",
    marginTop:6,
    fontSize:17
  }

});
