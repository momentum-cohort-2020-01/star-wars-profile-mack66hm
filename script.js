let starWars

const dataSection = document.querySelector('#starWars')

fetch('https://swapi.co/api/species/9/')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    starWars = data
    const img = document.createElement('img')
    img.src = 'https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png/revision/latest?cb=20130622101905'
    img.classList.add()
    dataSection.appendChild(img)
    renderH2()
    return data.url
  })

  .then(url => fetch(url))
  .then(response => response.json())



function renderH2 () {
  const h2El = document.createElement('h2')
  h2El.innerText = starWars.data
  dataSection.appendChild(h2El)
}
