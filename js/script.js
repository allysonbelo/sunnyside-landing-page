let menu = document.querySelector(".header__menu")

menu.addEventListener("click", function(event){
    let menuMobile = document.querySelector(".menu-mobile")

    menuMobile.classList.toggle("active")
})