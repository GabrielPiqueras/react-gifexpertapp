import { useState } from "react";

import AddCategory from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

/**
 * COMPONENTE PRINCIPAL
 * 
 * 1. Guarda una lista de categorías en un array, como estado del componente.
 * 2. Muestra el componente 'AddCategory', es un formulario para añadir una nueva categoría.
 * 3. Muestra las categorías en una lista ordenada, mapeando el array y añadiendo una clave a cada una.
 * 4. Cada categoría de la lista se muestra a través del componente GifGrid, 
 * 4. Para añadir una nueva, se envía al componente hijo la función setCategories (Obligatoria), que allí permite añadir una nueva.
*/
const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['One Piece']);

    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {   
                categories.map( category  =>
                    <GifGrid key={ category } category={ category }/>
                )
            }
        </>
    );
}

export default GifExpertApp;