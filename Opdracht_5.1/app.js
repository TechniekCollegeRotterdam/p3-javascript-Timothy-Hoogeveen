let nav = document.querySelector("nav")

window.addEventListener("mousemove", function(e){

    if(e.clientX == 0){

        nav.classList.add("show-nav")
    }

    if(e.clientX >= 200){

        nav.classList.remove("show-nav")
    }
})



