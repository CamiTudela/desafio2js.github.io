let img = document.querySelector ("img")

img.addEventListener ('click', ()=> {
    if (img.style.border == "") {img.style.border = "2px solid red"} else { img.style.border = ""}
})