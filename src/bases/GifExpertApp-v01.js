import { useState } from "react";

const GifSearcher = () => {
    
    const [categories, setPrompt] = useState(['One Punch Man', 'One Piece', 'Naruto']);
    
    const addCategory = () => {
        // setPrompt([...categories, 'Nueva categoría']);

        // De esta forma, uso el callback que tiene setPrompt
        // Sería útil, porque recibo el estado anterior para retornar uno nuevo
        setPrompt( cats => [...categories, 'Nueva categoría']);
    }

    return(
        <>
            <h2>GifSearcher</h2>

            <hr />

            <button onClick={ addCategory }>Agregar</button>

            <ol>
                {   
                    categories.map( category  => { 
                        return <li key= { category }> { category }</li>;
                    })
                }
            </ol>
        </>
    );
}

export default GifSearcher;