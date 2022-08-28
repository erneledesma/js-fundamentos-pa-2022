
const API_KEY = '438bb6e763a1efc0d729770ca5186754'

const api  = (`http://api.agromonitoring.com/agro/1.0/weather?appid=${API_KEY}&lat=35&lon=139&units=metric`)

const getData= async () => {

  try {
    const resp = await  fetch(api);
    console.log(resp)
    const { main, weather} = await resp.json()

    console.log(main)
    console.log(weather)


    const temperature = document.createElement('h3')
    const humedity = document.createElement('h3')
  

    temperature.innerHTML = ` La temperatura es: ${main.temp} ºC`
    humedity.innerHTML = ` La Humedad: ${main.humidity} %`
    document.body.append(temperature)
    document.body.append(humedity)
  

  } catch (error) {
    console.error('Hubo un error en la peticion', error)
  }

}

getData();


