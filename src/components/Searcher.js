import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

/**
 * COMPONENTE ADDCATEGORY
 * 
 * 1. Muestra el estado del componente (inputValue) en la caja de texto.
 * 2. Si cambia el valor de la caja de texto, dicho valor será el nuevo estado.
 * 3. Si se envía el formulario y el texto tiene al menos 2 letras, se añade la categoría al array.
 * 4. Al recibir la función como propiedad que cambia el valor del estado del componente GifSearcher (setPrompt), 
 *    podemos añadir el nuevo valor al array.
 * 5. Se reinicia el input para dejarlo vacío.
 * 
 */
export const Searcher = ({ setPrompt }) => {
        
    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setPrompt(inputValue);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={ handleSubmit }>

            <div className="mt-12 mb-4 flex justify-center">
                <input
                    autoFocus 
                    id='category'
                    type='text'
                    value={ inputValue }
                    onChange={ handleInputChange }
                    style={{width: '35%'}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-64 h-12 mr-4"
                    placeholder="Gifs de..."
                />
                <button
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded flex items-center"
                    onClick={ handleSubmit }
                >
                    <MagnifyingGlassIcon className="w-5 h-5 mr-1"/> Buscar
                </button>
            </div>
        </form>
    )
}

Searcher.propTypes = {
    setPrompt: PropTypes.func.isRequired,
}