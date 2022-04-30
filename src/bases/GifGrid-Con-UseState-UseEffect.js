import React, { useState, useEffect } from 'react';

import { GifGridItem } from './GifGridItem';

import { getGifs } from '../helpers/getGifs';

/**
 * COMPONENTE GIFGRID
 * 
 * - Muestra los gifs según el término buscado en giphy, son mostrados en un div con sus títulos.
 * 
 * 1. El estado del componente será un array (vacío por defecto) donde se guardarán los gifs
 * 2. Los gifs se obtienen usando la Api de Giphy
 * 3. Se buscan los gifs poniendo mi ApiKey de la plataforma, el límite de gifs y el término a buscar, que será la categoría
 *    recibida por parámetro. Dichas categorías se guardan en un array del componente principal.
 * 4. Al recibir los gifs en la variable data, la mapeo para extraer el id, titulo e imagen de cada gif.
 * 5. Una vez hecho el mapeo, se pone dicho array como valor del estado.
 * 6. Usamos el Hook useEffect() para que solo haga la petición una vez al principio, y no si se recarga el componente.
 * 7. Pinto los gifs del array en html, con sus titulos e imagenes.
 */

export const GifGrid = ({ category }) => {

  const [ gifs, setGifs ] = useState([]);

  const limit = 10;
  const apiKey = 'fcDI2xFucYvAmjDsqiSssCWy65XEGKsM';

  useEffect(() => {
    // Como estoy devolviendo una función async, hay que tratar la promesa
    getGifs(category, limit, apiKey).then(gifs => setGifs(gifs));
  }, [ category ]);

  return (
    <>
      <h3>{ category }</h3>
      <div className='card-grid'>
          {
            // Usando el {...} sería como enviar el id, title y url como propiedades por separado (otra forma de hacerlo)
            gifs.map(gif =>
              <GifGridItem key={ gif.id } {...gif} />
              // <GifGridItem key={ gif.id } img={ gif } />
            )
          }
      </div>
    </>
  )
}
