import { Image, Text, View, StyleSheet } from "react-native"
import React from 'react';
import { BASE_URL } from "../utils/constants";
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderWidth: 1,
      padding: 1,
    },
    image: {
      width: 325,
      height: 325,
    },
    title: {
      fontSize: 24,
      fontWeight: '500',
      marginBottom: 15
    }
  });

export interface Props {
    name:string;
    image:string;
    location:string;
    watered:string;
}

const PlantCard = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.name}
            </Text>
            <Image style={styles.image} source={{ uri: BASE_URL + props.image}}/>
            <Text>
                Loaction: {props.location}
            </Text>
            <Text>
                Last Watered: {props.watered}
            </Text>
        </View>
    );
};

export default PlantCard;