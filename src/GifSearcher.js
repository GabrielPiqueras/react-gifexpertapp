import { useState } from "react";

import { Searcher } from "./components/Searcher";
import { GifGrid } from "./components/GifGrid";
import { PhotoIcon } from '@heroicons/react/20/solid'

/**
 * COMPONENTE PRINCIPAL
 * 
 * 1. Guarda una lista de categorías en un array, como estado del componente.
 * 2. Muestra el componente 'Searcher', es un formulario para añadir una nueva categoría.
 * 3. Muestra las categorías en una lista ordenada, mapeando el array y añadiendo una clave a cada una.
 * 4. Cada categoría de la lista se muestra a través del componente GifGrid, 
 * 4. Para añadir una nueva, se envía al componente hijo la función setPrompt (Obligatoria), que allí permite añadir una nueva.
*/
const GifSearcher = () => {
    
    const [prompt, setPrompt] = useState(null);

    console.log(prompt);
    return(
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mt-4 italic flex flex-wrap">
                <PhotoIcon style={{ color: '#0b4243'}} className="w-10 h-10 mr-1"/>
                Gif Searcher
            </h2>
            <Searcher setPrompt={ setPrompt } />

            
            {   
                (prompt)
                &&
                <GifGrid key={ prompt } prompt={ prompt }/>
            }
        </div>
    );
}

export default GifSearcher;