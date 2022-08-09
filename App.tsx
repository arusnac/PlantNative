/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren, useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import PlantCard from './components/PlantCard';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import { BASE_URL } from './utils/constants';
import NavBar from './components/NavBar';


const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const getPlants = async () => {
  await axios.get( BASE_URL + '/user', {
    params:
      { username: 'testaccount3' }
  })
    .then((response) => {
      return response.data.plants;

    })
    .catch((err)=> console.log(err))

}

const App = () => {
  // const [plantList, setPlantList] = useEffect([]);
  const [plantList, setPlantList] = useState<{_id: string; image: string; location: string; name: string; notes:[]; watered: string}[]>(
    [],
  );
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'isDarkMode ? Colors.darker : Colors.lighter',
  };

  useEffect(()=>{
    axios.get( BASE_URL + '/user', {
      params:
        { username: 'testaccount3' }
    })
      .then((response) => {
         //console.log(response.data.plants);
         setPlantList(response.data.plants)
  
      })
      .catch((err)=> console.log(err))


  }, [])


  return (
    <SafeAreaView style={backgroundStyle}>    
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <Header /> */}
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            {plantList.map((plant)=>{
             return <PlantCard key={plant._id} name={plant.name} image={plant.image} location={plant.location} watered = {plant.watered}/> })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
