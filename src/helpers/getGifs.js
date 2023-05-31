

export const getGifs = async(prompt) => {

    const limit = 25;
    const apiKey = 'fcDI2xFucYvAmjDsqiSssCWy65XEGKsM';

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(prompt)}&limit=${limit}&api_key=${apiKey}`;
    const request = await fetch(url);
    const { data } = await request.json();
    
    console.log('data', data);
    const gifs = data.map(gif => {
      return {
        'id': gif.id,
        'title': gif.title,
        'url': gif.images.downsized.url
      }
    });

    return gifs;
}