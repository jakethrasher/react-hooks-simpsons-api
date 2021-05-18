const fetchCharacter = async () => {
    const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');

    const json = await res.json()
    
    return {
        image: json[0].image,
        character: `- ${json[0].character}`,
        quote:json[0].quote,
    }
}

export default fetchCharacter;
