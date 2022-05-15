
 import { useFetchGifs } from '../../hooks/useFetchGifs';
 import { renderHook } from '@testing-library/react-hooks';
 
 describe('Pruebas en el custom hook useFetchGifs', () => {
     
     test('useFetchGifs debe retornar el estado inicial', () => {

        // Crear como si fuera un componente virtual y ahí ejecuta nuestro Hook
        // const { result } = renderHook(() => useFetchGifs('Juego de Tronos'));
        // const { data, loading } = result.current;

        // expect(data).toEqual([]);
        // expect(loading).toBe(true);
     });

     test('debe retornar un array de imgs y el loading en false', async() => {
         
         // waitForNextUpdate es una función que devuelve una promesa,
         // dicha promesa nos indicará cuando haya habido un cambio en el estado de nuestro hook

         // Convertimos el test en async para poder usar dentro el await
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Juego de Tronos'));
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data).not.toEqual([]);
        expect(loading).toBe(false);
     });
 });