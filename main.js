const Base_URL = "https://ghibliapi.herokuapp.com/films"

fetch(Base_URL)
.then((rev) => {
    return rev.json()
})
.then((movies) => {
    // const body = document.querySelector("body");
    // const select = document.createElement("select");
    // select.setAttribute("value", "default")
    // body.append(select)
    
    // section = document.createElement('section');
    // section.setAttribute("id", "display-info")
    // select.append(section)
    // const form = document.createElement("form");
    // const label = document.createElement("label");
    // const input = document.createElement("input");
    // const input2 = document.createElement("input")
    // section.append(form)
    // form.append(label)
    // input.setAttribute("type", "text")
    // label.append(input)
    // input2.setAttribute("type", "submit")
    // input2.setAttribute("value", "Submit Review")
    // form.append(input2)
    // const ul = document.createElement("ul")
    // form.append(ul)
    let select = document.querySelector("select");

    for (let movie of movies) {
        const option = document.createElement("option");
        option.setAttribute("value", movie.title)
        option.textContent = movie.title
        select.append(option)

    }

        select.addEventListener("change", () => {
            for (let movie of movies) {
                if(select.value === movie.title) {
                    const h3 = document.createElement("h3")
                    h3.textContent = movie.title
                    const pDate = document.createElement("p")
                    pDate.textContent = movie.release_date
                    const pSummary = document.createElement("p")
                    pSummary.textContent = movie.description
                    const section = document.querySelector("section");
                    section.prepend(h3)
                    h3.append(pDate)
                    h3.append(pSummary)
                }
                // console.log(movie.title)
                // console.log(movie.release_date)
                
            }
        })
    // console.log(movie.title)
    // console.log(movie.release_date)
    // console.log(movie.description)
})