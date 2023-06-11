import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Only need one set of braces since the styles aren't inline */}
      <View style={styles.container}>
        <Text>Current Weather:</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like: 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>It&apos;s sunny outside</Text>
        <Text style={styles.message}>Perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1
  },
  wrapper: {
    backgroundColor: "pink",
    flex: 1
  },
  temp: {
    color: "black",
    fontSize: 48
  },
  feels: {
    color: "black",
    fontSize: 30
  },
  highLow: {
    color: "black",
    fontSize: 20
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end"
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default App;