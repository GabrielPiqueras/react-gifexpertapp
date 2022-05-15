
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';
import '@testing-library/jest-dom';

describe('Pruebas en el componente <GifGridItem />', () => {
    
    const titulo = 'Título prueba';
    const urlImg = 'https://web.com/imagen.jpg';
    const wrapper = shallow(<GifGridItem title={titulo} url={urlImg} />);

    test('<GifGridItem /> se renderiza correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener un párrafo con el title', () => {
        const p = wrapper.find('p');

        expect(p.text().trim()).toBe(titulo);
    });

    test('La imagen debe tener el title y url en sus atributos', () => {
        const img = wrapper.find('img');
        const url = img.prop('src');
        const alt = img.prop('alt');
        
        expect(url).toBe(urlImg);
        expect(alt).toBe(titulo);
    });

    test('Debe tener la clase animate__fadeIn que indica que tiene la animación', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');

        expect(className.includes('animate__fadeIn')).toBe(true);
    });
});