import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView>
      {/* Only need one set of braces since the styles aren't inline */}
      <View style={styles.container}>
        <Text>Current Weather:</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink'
  }
});

export default App;