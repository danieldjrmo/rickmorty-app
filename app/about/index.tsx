import { Link } from 'expo-router'
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function AboutPage() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_title_card.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>¿Qué es Rick and Morty?</Text>
      <Text style={styles.text}>
        Rick and Morty es una serie animada de ciencia ficción para adultos creada por Justin Roiland y Dan Harmon.
        Sigue las aventuras del científico alcohólico Rick Sánchez y su nieto Morty Smith a través del multiverso.
      </Text>

      <Text style={styles.subtitle}>🎙️ Personajes principales</Text>
      <Text style={styles.text}>• Rick Sánchez: un científico genio, excéntrico y autodestructivo.</Text>
      <Text style={styles.text}>• Morty Smith: su nieto, nervioso pero con buen corazón.</Text>
      <Text style={styles.text}>• Summer Smith: hermana de Morty, quiere formar parte de las aventuras.</Text>
      <Text style={styles.text}>• Beth y Jerry: padres de Morty.</Text>

      <Text style={styles.subtitle}>🌌 Temas frecuentes</Text>
      <Text style={styles.text}>
        La serie mezcla humor negro, filosofía, paradojas científicas y críticas sociales. Es conocida por su creatividad, caos
        y profundidad inesperada.
      </Text>

      <Text style={styles.footer}>📺 Disponible en Adult Swim y plataformas de streaming.</Text>

      <Link href="/" asChild>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>← Volver al inicio</Text>
      </TouchableOpacity>
    </Link>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#0b0c10',
  },
  image: {
    width: '100%',
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    color: '#66fcf1',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: '#45a29e',
    marginTop: 20,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#c5c6c7',
    marginBottom: 8,
  },
  footer: {
    marginTop: 30,
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
  },
  button: {
    marginTop: 30,
    padding: 12,
    backgroundColor: '#45a29e',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
})
