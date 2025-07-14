import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const EpisodeDetails = ({espisodio}) => {
  return (
   <View style={styles.container}>
      <Text style={styles.title}>{espisodio.name}</Text>
      <Text style={styles.label}>Date: <Text >{espisodio.air_date}</Text></Text>
      <Text style={styles.label}>Episode: <Text>{espisodio.episode}</Text></Text>
    </View>
  )
}

export default EpisodeDetails

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