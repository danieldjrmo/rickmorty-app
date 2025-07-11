import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { getEpisodioDetail } from '../../rickyMorty';

const EpisodioScreen = () => {
  const { id } = useLocalSearchParams();
  const [espisodio, setEpisodio] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!id) return;
      const data = await getEpisodioDetail(id);
      setEpisodio(data);
    };

    fetchData();
  }, [id]);

  if (espisodio == null) {
    return (
      <View>
        <ActivityIndicator size="large" color="#1abc9c" />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{espisodio.name}</Text>
      <Text style={styles.label}>Date: <Text >{espisodio.air_date}</Text></Text>
      <Text style={styles.label}>Episode: <Text>{espisodio.episode}</Text></Text>
    </View>
  )
}

export default EpisodioScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1abc9c',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 12,
  },

});
