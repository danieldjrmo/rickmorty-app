import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getPersonajes } from './rickyMorty'
import { Logo } from './components/Logo'
import { CharacterCard } from './components/CharacterCard';


export default function App() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPersonajes();
      setPersonajes(data);
    };

    fetchData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 20, alignItems: 'center' }}>
        <Logo ></Logo>
      </View>
      <Text style={styles.title}>Personajes de Rick and Morty</Text>
      {personajes.map((personaje) => (
        <CharacterCard key={personaje.id} character={personaje}/>
      ))}

      <StatusBar style="auto" />
    </ScrollView>

    // <SafeAreaView>
    //   <FlatList data={personajes}
    //     renderItem={({ item }) => (<Text>{item.name}</Text>)}
    //     keyExtractor={(item) => item.id.toString()} />
    // </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
});
