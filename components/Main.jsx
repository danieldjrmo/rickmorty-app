import { useEffect, useState } from 'react';
import { CharacterCard } from './CharacterCard';
import { getPersonajes } from '../rickyMorty'



export function Main() {

    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getPersonajes();
            setPersonajes(data);
        };

        fetchData();
    }, []);


    return (
        <>
            {personajes.map((personaje) => (
                <CharacterCard key={personaje.id} character={personaje} />
            ))}
        </>
    );
}