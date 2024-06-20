import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome6 } from "@expo/vector-icons";
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins";

let isRunning = false;
const Play = () => {
  useFonts(Poppins_500Medium);
  const [playerTurn, setPlayerTurn] = useState("");
  const [opponentTurn, setOpponentTurn] = useState("");
  const [points, setPoints] = useState(0);
  const [opponentPoints, setOpponentPoints] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (points === 3) {
      setWinnerMessage("You Win!");
    } else if (opponentPoints === 3) {
      setWinnerMessage("Opponent Wins!");
    }
  }, [points, opponentPoints]);

  function startGame(move) {
    setStatus("");
    isRunning = true;

    const moves = ["Rock", "Paper", "Scissors"];
    const compMove = moves[Math.floor(Math.random() * moves.length)];
    setPlayerTurn(move);
    setOpponentTurn(compMove);

    const comboMoves = {
      Rock: { winsAgainst: "Scissors", losesAgainst: "Paper" },
      Paper: { winsAgainst: "Rock", losesAgainst: "Scissors" },
      Scissors: { winsAgainst: "Paper", losesAgainst: "Rock" },
    };

    if (comboMoves[move].winsAgainst === compMove) {
      setPoints(points + 1);
      setStatus("You Won!");
    } else if (comboMoves[move].losesAgainst === compMove) {
      setOpponentPoints(opponentPoints + 1);
      setStatus("You Lost!");
    } else {
      setStatus("Draw!");
    }
  }

  function resetGame() {
    setPlayerTurn(null);
    setOpponentTurn(null);
    setPoints(0);
    setOpponentPoints(0);
    setWinnerMessage("");
    setStatus("");
    isRunning = false;
  }

  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
  });

  return (
    <View style={{ ...styles.safeView }}>
      <Image source={ require('../../assets/background.png') } style={{ position: 'absolute', width: '100%', height: '100%' }} />
      <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}>
      <Text
        style={{
          fontFamily: "Poppins_500Medium",
          alignSelf: "center",
          textAlign: "center",
          padding: 10,
          width: "50%",
          borderRadius: 20,
          backgroundColor: "rgba(0, 0, 0, 0.1 )",
          opacity: status != "" ? 1 : 0,
          fontSize: 30,
          marginTop: 20,
        }}
      >
        {status}
      </Text>
      <View style={styles.pointsTracker}>
        <Text style={{ color: "red", fontSize: 20 }}>{opponentPoints}</Text>
        <Text style={{ color: "dodgerblue", fontSize: 20 }}>{points}</Text>
      </View>
      {isRunning ? (
        <View style={styles.arena}>
          <View style={styles.opponentMoves}>
            {opponentTurn == "Paper" ? (
              <FontAwesome6 name="hand" style={{ fontSize: 50 }}></FontAwesome6>
            ) : opponentTurn == "Rock" ? (
              <FontAwesome6
                name="hand-back-fist"
                style={{ fontSize: 50 }}
              ></FontAwesome6>
            ) : (
              <FontAwesome6
                name="hand-scissors"
                style={{ fontSize: 50 }}
              ></FontAwesome6>
            )}
          </View>
          <View style={styles.userMoves}>
            {playerTurn == "Paper" ? (
              <FontAwesome6 name="hand" style={{ fontSize: 50 }}></FontAwesome6>
            ) : playerTurn == "Rock" ? (
              <FontAwesome6
                name="hand-back-fist"
                style={{ fontSize: 50 }}
              ></FontAwesome6>
            ) : (
              <FontAwesome6
                name="hand-scissors"
                style={{ fontSize: 50 }}
              ></FontAwesome6>
            )}
          </View>
        </View>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 30,
              color: "black",
              alignSelf: "center",
              marginTop: "40%",
              fontFamily: "Poppins_500Medium",
            }}
          >
            Pick your Move
          </Text>
        </View>
      )}
      {winnerMessage ? (
        <View style={styles.endGame}>
          <Text style={styles.winnerText}>{winnerMessage}</Text>
          <Pressable style={styles.retryButton} onPress={resetGame}>
            <Text style={styles.buttonText}>Retry</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.buttons}>
          <Pressable style={styles.button} onPress={() => startGame("Rock")}>
            <FontAwesome6
              name="hand-back-fist"
              style={{ fontSize: 50 }}
            ></FontAwesome6>
          </Pressable>
          <Pressable style={styles.button} onPress={() => startGame("Paper")}>
            <FontAwesome6 name="hand" style={{ fontSize: 50 }}></FontAwesome6>
          </Pressable>
          <Pressable
            style={styles.button}
            onPress={() => startGame("Scissors")}
          >
            <FontAwesome6
              name="hand-scissors"
              style={{ fontSize: 50, transform: [{ rotate: `90deg` }] }}
            ></FontAwesome6>
          </Pressable>
        </View>
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
  },
  pointsTracker: {
    position: "absolute",
    height: 70,
    width: 50,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    top: "40%",
    justifyContent: "center",
    paddingLeft: 15,
  },
  buttons: {
    display: "flex",
    position: "absolute",
    alignSelf: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "95%",
    bottom: 50,
    backgroundColor: "rgba(255, 255, 255,0.2)",
    borderRadius: 20,
    paddingVertical: 20,
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: "rgba(0,0,0,0.3)",
    borderBlockColor: "black",
    borderWidth: 5,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 30,
  },
  arena: {
    marginTop: 50,
    width: "60%",
    height: 450,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  opponentMoves: {
    width: 100,
    height: 100,
    backgroundColor: "tomato",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
  },
  userMoves: {
    width: 100,
    height: 100,
    backgroundColor: "dodgerblue",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 20,
  },
  endGame: {
    marginTop: 20,
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "90%",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    paddingVertical: 20,
  },
  winnerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
    fontFamily: "Poppins_500Medium",
  },
  retryButton: {
    height: 80,
    width: 200,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    fontFamily: "Poppins_500Medium",
  },
});

export default Play;
