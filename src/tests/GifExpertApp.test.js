
import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
    
    test('<GifExpertApp /> se renderiza correctamente.', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const categories = ['One Piece', 'Juego de Tronos', 'Arcane'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

        const grids = wrapper.find('GifGrid');

        expect(wrapper).toMatchSnapshot();
        expect(grids.length).toBe(categories.length);
    }); 
});