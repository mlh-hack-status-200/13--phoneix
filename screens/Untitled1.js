import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonPrimary2 from "../components/MaterialButtonPrimary2";

function Untitled1(props) {
  return (
    <View style={styles.container}>
      <MaterialButtonPrimary
        style={styles.materialButtonPrimary}
      ></MaterialButtonPrimary>
      <ImageBackground
        source={require("../assets/images/agriculture-website-templates3.jpg")}
        resizeMode="stretch"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <MaterialButtonPrimary2
          style={styles.materialButtonPrimary2}
        ></MaterialButtonPrimary2>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    marginTop: -296,
    marginLeft: 925
  },
  image: {
    width: 1366,
    height: 936,
    marginTop: 280
  },
  image_imageStyle: {},
  materialButtonPrimary2: {
    width: 100,
    height: 36,
    marginLeft: 1119
  }
});

export default Untitled1;
