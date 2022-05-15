import React from 'react';
import { shallow } from 'enzyme';

import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn();
    
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );
    });

    test('<AddCategory /> debe de mostrarse correctamente', () => {
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
        expect( setCategories ).not.toHaveBeenCalled(); // No debe haber sido llamado
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        // Simulo change
        const value = 'Bobobo';
        wrapper.find('input').simulate('change', {target: { value }})

        // Simulo el submit del formulario
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        
        // SetCategories debe haber sido llamado
        expect( setCategories ).toHaveBeenCalled(); // que haya sido llamada
        expect( setCategories ).toHaveBeenCalledTimes(1); // que solo se llamó una vez
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function)  ); // que haya sido llamada con una función (any = cualquier función)
        
        // El valor del input debe estar vacío
        const inputValue  = wrapper.find('input').prop('value');

        expect(inputValue).toBe('');
    })
})