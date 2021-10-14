const select = document.querySelector("select");
const Base_URL = "https://ghibliapi.herokuapp.com/films"

fetch(Base_URL)
.then((rev) => {
    return rev.json()
})
    
.then((movies) => {
    let select = document.querySelector("select");
    const form = document.querySelector("form")
    let input = document.querySelector("#input");

    movies.forEach((movie) => {
        const option = document.createElement("option");
        option.setAttribute("value", movie.title)
        option.textContent = movie.title
        select.append(option)
            
    });
        
        
    select.addEventListener("change", (event) => {
        event.preventDefault();
        for (let movie of movies) {
            if(select.value === movie.title) {
                const display = document.querySelector("#display-info");
                display.innerHTML = `<h3>${movie.title}</h3><p>${movie.release_date}</p><p>${movie.description}</p>` 
            }
        }
    })

        
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const li = document.createElement('li');
        li.innerHTML = `<b>${select.value}:</b> ${input.value}`
        const ul = document.querySelector("ul");
        ul.append(li)
        event.target.reset();
    })
    
})



    