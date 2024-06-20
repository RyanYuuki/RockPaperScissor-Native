import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { useFonts, Poppins_500Medium, Poppins_700Bold } from "@expo-google-fonts/poppins";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.safeArea}>
      <Image source={ require("../../assets/background.png") } style={styles.backgroundImage} />
      <View style={styles.container}>
        <Image source={ require("../../assets/MainPage-Icon.png") } style={styles.icon} />
        <Text style={styles.heading}>Rock Paper Scissors</Text>
        <View style={styles.bodyBox}>
        <Text style={styles.instructions}>Press the button of your choice before the hand stops. First to 3 wins.</Text>
        <Link href="./play" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Play</Text>
          </Pressable>
        </Link>
      </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',

  },
  container: {
    height: '100%',
    width: '100%',
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'space-evenly'
  },
  icon: {
    width: 300,
    height: 300,
  },
  heading: {
    fontSize: 30,
    textAlign: "center",
    color: 'black',
    fontFamily: 'Poppins_700Bold',
  },
  bodyBox: { 
    height: 200,
    width: '80%',
    padding: 20,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins_500Medium',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#86469C',
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Poppins_500Medium',
  }
});
