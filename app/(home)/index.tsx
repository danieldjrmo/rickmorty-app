import { View, Text, Pressable, StyleSheet } from 'react-native'
import { Main } from '../../components/Main'
import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Logo } from '../../components/Logo'

export default function Home() {
  const router = useRouter()

  const irContact = () => {
    router.push('about')
  }

  return (
    <>
      <View style={styles.rowGroup}>
        <Pressable
          onPress={irContact}
          style={({ pressed }) => [
            styles.floatingButton,
            pressed && styles.pressedButton,
          ]}
        >
          <Text style={styles.buttonText}>About</Text>
        </Pressable>

        <View style={styles.logoWrapper}>
          <Logo />
        </View>
      </View>
      <Text style={styles.title}>Personajes de Rick and Morty</Text>
      <Main />

      <StatusBar style="auto" />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  floatingButton: {
    backgroundColor: '#1abc9c',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 10,
    shadowColor: '#16a085',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    transform: [{ translateY: -10 }],
  },
  pressedButton: {
    opacity: 0.8,
    transform: [{ translateY: -8 }],
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  rowGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  logoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  }

})
