
/* Esto es un custom hook, si no vamos a devolver JSX no es necesario que importemos React (el general) */
/* Otra cosa es que necesitemos usar useState u otros */

/* Estos hooks también tienen un estado y podría indicarle a otros componentes que lo utilicen cuando deben renderizarse
ya que algo cambió */

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category, limit, apiKey ) => {
    
    /* El estado será un objeto, con un array para la data y un loading a 'true',
    que indicará que cuando se utilice por primera vez este hook "si que cargue", por defecto */

    const [ state, setState ] = useState({
        data: [],
        loading: true
    });

    // Uso useEffect para controlar que solo cargue una vez
    useEffect(() => {
        getGifs(category, limit, apiKey).then(gifs => {

            setTimeout(() => {
                setState({
                    data: gifs,
                    loading: false
                });
            }, 3000);
        });
    }, []);

    return state; // { data: [], loading: true }
}
