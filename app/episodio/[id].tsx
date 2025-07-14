import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { getEpisodioDetail } from '../../rickyMorty';
import EpisodeDetails from '../../components/EpisodeDetails';

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
    <EpisodeDetails espisodio={espisodio} />
  )
}

export default EpisodioScreen;


