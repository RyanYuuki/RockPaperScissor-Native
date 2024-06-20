import { Text, View, StyleSheet, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.heading}>Rock Paper Scissors</Text>
      </View>

      <View style={styles.bodyBox}>
        <Text style={styles.instructions}>Press the button of your choice before the hand stops. First to 3 wins.</Text>
        <Link href="./play" asChild>
        <Pressable 
        style={styles.button} > 
          <Text style={styles.button}>Play</Text>
        </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eee',
  },
  container: {
    height: 250,
    width: '95%',
    alignSelf: 'center',
    backgroundColor: "dodgerblue",
    alignItems: "center",
    borderRadius: 12,
  },
  heading: {
    marginTop: 30,
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 2,
    width: '60%',
    color: 'white',
  },
  bodyBox: {
    position: 'absolute',
    justifyContent: 'space-evenly',
    top: 200,
    height: 500,
    width: '80%',
    padding: 30,
    alignSelf: 'center',
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 20,
  },
  instructions: {
    fontSize: 16,
  },
  button : {
    padding: 10,
    backgroundColor: 'dodgerblue',
    borderRadius: 12,
    textAlign: 'center',
    color : 'white'
  }
});
