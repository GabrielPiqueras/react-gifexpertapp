import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

import PropTypes from 'prop-types';

// import { getGifs } from '../helpers/getGifs';

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

  // Uso mi hook personalizado que trae los gifs
  const { data: gifs, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>

      {/* Más práctico de mostrar */}
      { loading && <p>Cargando...</p> } 
      {/* { loading ? <p>Cargando...</p>: <p>Otro mensaje.</p> } */}

      <div className='card-grid'>
          {
            // Usando el {...} sería como enviar el id, title y url como propiedades por separado (otra forma de hacerlo) en vez de pasarlo dentro de img
            gifs.map(gif =>
              <GifGridItem key={ gif.id } {...gif} />
              // <GifGridItem key={ gif.id } img={ gif } />
            )
          }
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired, 
} 
