import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en el helper getGifs', () => {

    test('Debe devolver 25 gifs', async() => {
        const category = 'One Piece';
        const gifs = await getGifs(category);
        
        expect(gifs.length).toBe(25);
    });
})