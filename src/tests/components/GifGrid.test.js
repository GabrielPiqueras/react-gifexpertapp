import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import '@testing-library/jest-dom';
import { useFetchGifs } from '../../hooks/useFetchGifs';

// jest.mock() finge la llamada al archivo para suponer o controlar la información que va a devolver */
jest.mock('../../hooks/useFetchGifs');

// Nos dará un error en consola, diciendo que no podemos 
// hacer la desestructuración de data 
// El fallo dará al renderizar mi componente <GifGrid />, es buena señal,
// porque quiere decir que useFetchGifs() ahora se está utilizando 



describe('Pruebas en <GifGrid />', () => {

    const category = 'One Piece';

    test('El componente <GifGrid /> debe renderizarse correctamente', () => {

        // Para poder "falsear" los datos recibidos del useFetchGifs
        // usaremos mockReturnValue(), hace que cuando se llame el useFetchGifs dentro
        // de <GifGrid /> lo que va a hacer es regresar este valor.
        
        // Como devolverá un objeto en este caso, ponemos las {}
        // Como el estado inicial es que devuelva la data vacía y el loading true,
        // ponemos lo que esperamos que devuelva:
            
       useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
    });

    test('El componente <GifGrid /> debe mostrar items cuando se cargan las imágenes', () => {
        
        // En este caso espero recibir los datos con esta estructura
        // Nos inventamos unos datos falsos para comprobar que la estructura coincide
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/cosa/.jpg',
                title: 'Cualquier cosa'
            }, {
                id: 'XYZ',
                url: 'https://localhost/cualquier/cosa2/.jpg',
                title: 'Cualquier cosa 2'
            }
        ];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        // Renderizamos 
        const wrapper = shallow( <GifGrid category={ category } /> );
        
        expect(wrapper).toMatchSnapshot(); // El componente se renderiza bien
        expect(wrapper.find('p').exists()).toBe(false); // No existe el párrafo de "cargando" porque ya cargaron los gifs
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length); // Habrá tantos GifGridItem como objetos tenga
    });

});