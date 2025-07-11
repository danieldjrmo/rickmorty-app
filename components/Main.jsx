import { useEffect, useState } from 'react';
import { CharacterCard } from './CharacterCard';
import { getPersonajes } from '../rickyMorty'
import { ActivityIndicator } from 'react-native';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, SafeAreaView } from 'react-native';


export function Main() {

    const [personajes, setPersonajes] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            const data = await getPersonajes();
            setPersonajes(data);
        };

        fetchData();
    }, []);


    if (personajes.length === 0) {
        return (<ActivityIndicator size={32}></ActivityIndicator>)
    }

  
    

    return (
        <>
            {/* {personajes.map((personaje) => (
                <CharacterCard key={personaje.id} character={personaje} />
            ))} */}

            <SafeAreaView style={{flex:1}}>

                <FlatList data={personajes}
                    renderItem={({ item }) => (<CharacterCard key={item.id} character={item} />)}
                    keyExtractor={(item) => item.id.toString()} />
            </SafeAreaView>
        </>
    );
}