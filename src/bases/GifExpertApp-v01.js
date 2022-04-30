import { useState } from "react";

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Punch Man', 'One Piece', 'Naruto']);
    
    const addCategory = () => {
        // setCategories([...categories, 'Nueva categoría']);

        // De esta forma, uso el callback que tiene setCategories
        // Sería útil, porque recibo el estado anterior para retornar uno nuevo
        setCategories( cats => [...categories, 'Nueva categoría']);
    }

    return(
        <>
            <h2>GifExpertApp</h2>

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

export default GifExpertApp;