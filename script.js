let starWars

const dataSection = document.querySelector('#starWars')

fetch('https://swapi.co/api/species/9/')
  .then(function (response) {
    return response.json()
  })
  .then(function (data) {
    starWars = data
    renderH2('f4')
    classification('lh-copy', 'measure', 'center', 'f6', 'black-70')
    averageHeight('lh-copy', 'measure', 'center', 'f6', 'black-70')
    averageLifespan('lh-copy', 'measure', 'center', 'f6', 'black-70')
    language('lh-copy', 'measure', 'center', 'f6', 'black-70')
    return data.url
  })
function renderH2 () {
  const h2El = document.createElement('h2')
  h2El.innerText = starWars.name
  dataSection.appendChild(h2El)
}

const img = document.createElement('img')
img.src = 'https://vignette.wikia.nocookie.net/starwars/images/4/4f/Wicket_RotJ.png/revision/latest?cb=20130622101905'
img.classList.add('br-100', 'h3', 'w3', 'dib')
dataSection.appendChild(img)

function classification () {
  const renderAnimal = document.createElement('p')
  renderAnimal.innerText = `Classification : ${starWars.classification}`
  renderAnimal.classList.add()
  dataSection.appendChild(renderAnimal)
}

function averageHeight () {
  const renderHeight = document.createElement('p')
  renderHeight.innerText = `Average Height : ${starWars.average_height}`
  renderHeight.classList.add()
  dataSection.appendChild(renderHeight)
}

function averageLifespan () {
  const renderLifespan = document.createElement('p')
  renderLifespan.innerText = `Lifespan : ${starWars.average_lifespan}`
  renderLifespan.classList.add()
  dataSection.appendChild(renderLifespan)
}

function language () {
  const renderLang = document.createElement('p')
  renderLang.innerText = `Language : ${starWars.language}`
  renderLang.classList.add()
  dataSection.appendChild(renderLang)
}

//  classification
// average_height
// average_lifespan
// language

//  so I don't have to keep going back and forth this is what I need to call
// {
//     "name": "Ewok",
//     "classification": "mammal",
//     "designation": "sentient",
//     "average_height": "100",
//     "skin_colors": "brown",
//     "hair_colors": "white, brown, black",
//     "eye_colors": "orange, brown",
//     "average_lifespan": "unknown",
//     "homeworld": "https://swapi.co/api/planets/7/",
//     "language": "Ewokese",
//     "people": [
//       "https://swapi.co/api/people/30/"
//     ],
//     "films": [
//       "https://swapi.co/api/films/3/"
//     ],
//     "created": "2014-12-18T11:22:00.285000Z",
//     "edited": "2014-12-20T21:36:42.155000Z",
//     "url": "https://swapi.co/api/species/9/"
//   }
