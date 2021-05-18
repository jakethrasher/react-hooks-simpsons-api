import React, { useState } from 'react';
import Load from '../../components/quotes/Load';
import Quote from '../../components/quotes/Quote';
import fetchCharacter from '../../service/apiUtils';

const SimpsonsQuote = () => {
    const [character, setCharacter] = useState(null)

    const handleClick = async () =>{
        const character = await fetchCharacter();
        setCharacter(character)
    }
    return(
        <>
            <h3>Get a Simpsons quote</h3>
            <Load handleClick={handleClick}/>
            <Quote {...character}/>
        </>
    )
}

export default SimpsonsQuote;
