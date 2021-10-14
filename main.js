const Base_URL = "https://ghibliapi.herokuapp.com/films"

fetch(Base_URL)
.then((rev) => {
    return rev.json()
})
.then((movies) => {
    console.log(movies)
    const body = document.querySelector("body");
    const select = document.createElement("select");
    select.setAttribute("value", "default")
    body.append(select)
    
    for (let movie of movies) {
        const option = document.createElement("option");
        option.setAttribute("value", movie.title)
        option.textContent = movie.title
        select.append(option)
        console.log(movie.title)
    }
    section = document.createElement('section');
    section.setAttribute("id", "display-info")
    select.append(section)


    const form = document.createElement("form");
    const label = document.createElement("label");
    const input = document.createElement("input");
    const input2 = document.createElement("input")
    section.append(form)
    form.append(label)
    input.setAttribute("type", "text")
    label.append(input)
    input2.setAttribute("type", "submit")
    input2.setAttribute("value", "Submit Review")
    form.append(input2)

    const ul = document.createElement("ul")
    form.append(ul)
// console.log(movies.release_date)
// console.log(movies.description)


//     option.addEventListener("onchange", () => {
//         const h3 = document.createElement("h3")
//         h3.textContent = movies.title
//         const pDate = document.createElement("p")
//         pDate.textContent = movies.release_date
//         const pSummary = document.createElement("p")
//         pSummary.textContent = movies.description
//         section.append(h3)
//     })
})