
import React from 'react';
import { shallow } from 'enzyme';
import GifSearcher from '../GifSearcher';

describe('Pruebas en el componente <GifSearcher />', () => {
    
    test('<GifSearcher /> se renderiza correctamente.', () => {
        const wrapper = shallow(<GifSearcher />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['One Piece', 'Juego de Tronos', 'Arcane'];
        const wrapper = shallow(<GifSearcher defaultCategories={categories} />);

        const grids = wrapper.find('GifGrid');

        expect(wrapper).toMatchSnapshot();
        expect(grids.length).toBe(categories.length);
    }); 
});