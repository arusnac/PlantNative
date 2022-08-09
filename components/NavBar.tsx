import React from "react";
import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'green',
    },
    tinyLogo: {
      width: 325,
      height: 325,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

const NavBar = () => {
return (
    <View style={styles.container}>
        <Text>Menu</Text>
    </View>
)
}

export default NavBar;