console.log("hit")


const cardsContainer = document.querySelector('.card-container')

fetch('http://localhost:3000/shelters')
    .then(res => res.json())
    .then(shelters => {
        shelters.forEach(shelter => {
        const ul =document.createElement('ul')
        const li = document.createElement('li')
        const img = document.createElement('img')

        li.innertext = shelter.name
        img.src = shelter.image

        ul.append(li,img)
        document.body.appendChild(ul)
    })
})
    