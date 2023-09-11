import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const LoadingScreen = () => {
  return (
    <View styles={styles.container}>
        <Text style={styles.title}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F7F7F7",
  },

  title: {

		position: "absolute",
		color: "#252525",
		opacity: 0.7 ,
		fontSize: 20,
		lineHeight: 26,
		fontWeight: "bold",
		marginTop: 30,
		width: "100%",
    textAlign: "center",
    marginTop: "100%",
  }
});

export default LoadingScreen;
