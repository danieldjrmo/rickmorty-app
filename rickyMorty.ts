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


export const getEpisodioDetail = async (episodioId) => {

        const CHARACTERS=`https://rickandmortyapi.com/api/episode/${episodioId}`
        const response = await fetch(`${CHARACTERS}`);
        const json = await response.json();
        const { results } = json;


            const {id, name, air_date,episode}= json;

            return {
                id, name, air_date,episode
            }
    

};


