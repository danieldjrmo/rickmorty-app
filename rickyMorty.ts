export const getPersonajes = async () => {

        const CHARACTERS=`https://rickandmortyapi.com/api/character`
        const response = await fetch(`${CHARACTERS}`);
        const json = await response.json();
        const { results } = json;

        return results.map((item)=>{
            const {id, name, status, species, gender, episode, image}= item;

            return {
                id, name, status, species, gender, episode, image
            }
        })

};

getPersonajes(); // Llamada a la función
