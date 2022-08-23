
const API_KEY = 'H34PGip1gUHR5Uzn7j9B5hUP30a4qELj'

const api = (`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`)

const getImages = async () => {

  try {
    const resp = await  fetch(api);
    const { data} = await resp.json()

    const { url } = data.images.original;

    const img = document.createElement('img')
    img.src = url
    document.body.append(img)
  } catch (error) {
    console.error('Hubo un error en la peticion', error)
  }

}

getImages();


