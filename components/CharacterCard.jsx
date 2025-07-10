import { StyleSheet, Text, View, Image } from 'react-native';

export function CharacterCard({ character }) {



    return (
        <View key={character.id} style={styles.card}>
            <Image source={{ uri: character.image }} style={styles.image} />
            <Text style={styles.name}>{character.name}</Text>
            <Text>Status: {character.status}</Text>
            <Text>Species: {character.species}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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