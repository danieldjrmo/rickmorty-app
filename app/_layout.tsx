import { Stack } from 'expo-router'

export default function Layout() {
  return <Stack
    screenOptions={{

    }}
  >
    <Stack.Screen
      name='(home)/index'
      options={{
        // title: 'Home',
        headerShown: false,
        headerShadowVisible: false
      }}
    />

    <Stack.Screen
      name='about/index'
      options={{
        title: 'About'
      }}
    />

    <Stack.Screen
      name='episodio/[id]'
      options={{
        title: 'Episodio'
      }}
    />

  </Stack>
}