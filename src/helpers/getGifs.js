

   export const getGifs = async ( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=Yi2k4KiUng1O32p3e3GIuQ7oWmxrcyzN&q=${ encodeURI(category) }&limit=10`
    const respuesta = await fetch( url )
    const { data } = await respuesta.json()
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    } )

    // el ? sirve para preguntar si viene el objeto o lo q sea y si viene retorna V o si no F


    //console.log(gifs)
    //setImages(gifs)

        return gifs;

}