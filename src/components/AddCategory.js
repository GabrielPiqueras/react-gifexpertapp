import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * COMPONENTE ADDCATEGORY
 * 
 * 1. Muestra el estado del componente (inputValue) en la caja de texto.
 * 2. Si cambia el valor de la caja de texto, dicho valor será el nuevo estado.
 * 3. Si se envía el formulario y el texto tiene al menos 2 letras, se añade la categoría al array.
 * 4. Al recibir la función como propiedad que cambia el valor del estado del componente GifExpertApp (setCategories), 
 *    podemos añadir el nuevo valor al array.
 * 5. Se reinicia el input para dejarlo vacío.
 * 
 */
const AddCategory = ({ setCategories }) => {
        
    const [ inputValue, setInputValue ] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats ]);
            setInputValue('');
        }
    }

    return(
        <form onSubmit={ handleSubmit }>
            <input
                onChange={ handleInputChange }
                id='category'
                type='text'
                value={ inputValue }
                placeholder='Search'
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;