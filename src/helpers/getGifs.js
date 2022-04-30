

export const getGifs = async( category, limit, apiKey ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
    const request = await fetch(url);
    const { data } = await request.json();
    
    const gifs = data.map(gif => {
      return {
        'id': gif.id,
        'title': gif.title,
        'url': gif.images.downsized.url
      }
    });

    return gifs;
}