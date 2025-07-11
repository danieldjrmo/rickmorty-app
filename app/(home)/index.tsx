import { View, Text, Pressable } from 'react-native'
import { Main } from '../../components/Main'
import { useRouter } from 'expo-router'


export default function Home() {

  const router = useRouter()

  const irContact = () => {
    router.push('contact');
  }

  return (

    <>
      <View>
        <Pressable onPress={()=>irContact()}>
          <Text>Ir Contacto </Text>
        </Pressable>
      </View>
      <Main />
    </>
  )
}