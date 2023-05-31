import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { Searcher } from '../../components/Searcher';

describe('Pruebas en <Searcher />', () => {

    const setPrompt = jest.fn();
    
    let wrapper = shallow( <Searcher setPrompt={ setPrompt } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <Searcher setPrompt={ setPrompt } /> );
    });

    test('<Searcher /> debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';

        input.simulate('change', {target: { value } });
        const inputValue = wrapper.find('input').prop('value');

        expect(inputValue).toBe(value);
    });

    test('NO debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} }); // Detenemos el evento con preventDefalt()
        expect( setPrompt ).not.toHaveBeenCalled(); // No debe haber sido llamado
    });

    test('debe de llamar el setPrompt y limpiar la caja de texto', () => {

        // Simulo change
        const value = 'Bobobo';
        wrapper.find('input').simulate('change', {target: { value }})

        // Simulo el submit del formulario
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // SetCategories debe haber sido llamado
        expect( setPrompt ).toHaveBeenCalled(); // que haya sido llamada
        expect( setPrompt ).toHaveBeenCalledTimes(1); // que solo se llamó una vez
        expect( setPrompt ).toHaveBeenCalledWith( expect.any(Function)  ); // que haya sido llamada con una función (any = cualquier función)
        
        // El valor del input debe estar vacío
        const inputValue  = wrapper.find('input').prop('value');

        expect(inputValue).toBe('');
    })
})