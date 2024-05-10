
// Humberger Menu

let form = document.querySelector(".form-resp")
let formBtn = document.querySelector(".icon-form")
let formBtnIcon = document.querySelector(".icon-form i")

formBtn.addEventListener("click", function () {
    if (formBtnIcon.classList.contains("fa-search")) {
        form.style.display = "block"
        formBtnIcon.classList = "fa fa-times"
    } else {
        form.style.display = "none"
        formBtnIcon.classList = "fa fa-search"
    }
})


let menu11 = document.querySelector(".submenu_link1")
let menuBtnLink11 = document.querySelector(".menu_links-link1")
let menuBtnIcon11 = document.querySelector(".menu_links-link1 i")
let menuBtnIcon21 = document.querySelector(".menu_links-icon1 i")

let menu12 = document.querySelector(".submenu_link2")
let menuBtnLink12 = document.querySelector(".menu_links-link2")
let menuBtnIcon12 = document.querySelector(".menu_links-link2 i")
let menuBtnIcon22 = document.querySelector(".menu_links-icon2 i")

let menu13 = document.querySelector(".submenu_link3")
let menuBtnLink13 = document.querySelector(".menu_links-link3")
let menuBtnIcon13 = document.querySelector(".menu_links-link3 i")
let menuBtnIcon23 = document.querySelector(".menu_links-icon3 i")

let menu14 = document.querySelector(".submenu_link4")
let menuBtnLink14 = document.querySelector(".menu_links-link4")
let menuBtnIcon14 = document.querySelector(".menu_links-link4 i")
let menuBtnIcon24 = document.querySelector(".menu_links-icon4 i")

menuBtnLink11.addEventListener("click", function () {
    if (menuBtnIcon11.classList.contains("fa-caret-down")) {
        menu11.style.display = "block"
        menu12.style.display = "none"
        menu13.style.display = "none"
        menu14.style.display = "none"
        menuBtnIcon11.classList = "fa fa-caret-up"
        menuBtnIcon12.classList = "fa fa-caret-down"
        menuBtnIcon13.classList = "fa fa-caret-down"
        menuBtnIcon14.classList = "fa fa-caret-down"
        menuBtnLink11.style.background = "#282A35"
        menuBtnLink12.style.background = "#1d2a35"
        menuBtnLink13.style.background = "#1d2a35"
        menuBtnLink14.style.background = "#1d2a35"
        menuBtnIcon21.style.display = "inline"
    } else {
        menu11.style.display = "none"
        menuBtnIcon11.classList = "fa fa-caret-down"
        menuBtnIcon21.style.display = "none"
        menuBtnLink11.style.background = "#1d2a35"
    }
})

menuBtnIcon21.addEventListener("click", function () {
    if (menu11.style.display = "block") {
        menu11.style.display = "none"
        menu12.style.display = "none"
        menu13.style.display = "none"
        menu14.style.display = "none"
        menuBtnIcon21.style.display = "none"
        menuBtnIcon11.classList = "fa fa-caret-down"
        menuBtnIcon12.classList = "fa fa-caret-down"
        menuBtnIcon13.classList = "fa fa-caret-down"
        menuBtnIcon14.classList = "fa fa-caret-down"
        menuBtnLink11.style.background = "#1d2a35"
    } else {
        menu12.style.display = "block"
        menuBtnIcon21.classList = "fa fa-times"
        menuBtnIcon11.classList = "fa fa-caret-up"
        menuBtnLink11.style.background = "#282A35"
    }
})


menuBtnLink12.addEventListener("click", function () {
    if (menuBtnIcon12.classList.contains("fa-caret-down")) {
        menu11.style.display = "none"
        menu12.style.display = "block"
        menu13.style.display = "none"
        menu14.style.display = "none"
        menuBtnIcon11.classList = "fa fa-caret-down"
        menuBtnIcon12.classList = "fa fa-caret-up"
        menuBtnIcon13.classList = "fa fa-caret-down"
        menuBtnIcon14.classList = "fa fa-caret-down"
        menuBtnLink11.style.background = "#1d2a35"
        menuBtnLink12.style.background = "#282A35"
        menuBtnLink13.style.background = "#1d2a35"
        menuBtnLink14.style.background = "#1d2a35"
        menuBtnIcon22.style.display = "inline"
    } else {
        menu12.style.display = "none"
        menuBtnIcon12.classList = "fa fa-caret-down"
        menuBtnIcon22.style.display = "none"
        menuBtnLink12.style.background = "#1d2a35"
    }
})
menuBtnIcon22.addEventListener("click", function () {
    if (menu12.style.display = "block") {
        menu12.style.display = "none"
        menuBtnIcon22.style.display = "none"
        menuBtnIcon12.classList = "fa fa-caret-down"
        menuBtnLink12.style.background = "#1d2a35"
    } else {
        menu12.style.display = "block"
        menuBtnIcon22.classList = "fa fa-times"
        menuBtnIcon12.classList = "fa fa-caret-up"
        menuBtnLink12.style.background = "#282A35"
    }
})

menuBtnLink13.addEventListener("click", function () {
    if (menuBtnIcon13.classList.contains("fa-caret-down")) {
        menu11.style.display = "none"
        menu12.style.display = "none"
        menu13.style.display = "block"
        menu14.style.display = "none"
        menuBtnIcon11.classList = "fa fa-caret-down"
        menuBtnIcon12.classList = "fa fa-caret-down"
        menuBtnIcon13.classList = "fa fa-caret-up"
        menuBtnIcon14.classList = "fa fa-caret-down"
        menuBtnLink11.style.background = "#1d2a35"
        menuBtnLink12.style.background = "#1d2a35"
        menuBtnLink13.style.background = "#282A35"
        menuBtnLink14.style.background = "#1d2a35"
        menuBtnIcon23.style.display = "inline"
    } else {
        menu13.style.display = "none"
        menuBtnIcon13.classList = "fa fa-caret-down"
        menuBtnIcon23.style.display = "none"
        menuBtnLink13.style.background = "#1d2a35"
    }
})
menuBtnIcon23.addEventListener("click", function () {
    if (menu13.style.display = "block") {
        menu13.style.display = "none"
        menuBtnIcon23.style.display = "none"
        menuBtnIcon13.classList = "fa fa-caret-down"
        menuBtnLink13.style.background = "#1d2a35"
    } else {
        menu13.style.display = "block"
        menuBtnIcon23.classList = "fa fa-times"
        menuBtnIcon13.classList = "fa fa-caret-up"
        menuBtnLink13.style.background = "#282A35"
    }
})

menuBtnLink14.addEventListener("click", function () {
    if (menuBtnIcon14.classList.contains("fa-caret-down")) {
        menu11.style.display = "none"
        menu12.style.display = "none"
        menu13.style.display = "none"
        menu14.style.display = "block"
        menuBtnIcon11.classList = "fa fa-caret-down"
        menuBtnIcon12.classList = "fa fa-caret-down"
        menuBtnIcon13.classList = "fa fa-caret-down"
        menuBtnIcon14.classList = "fa fa-caret-up"
        menuBtnLink11.style.background = "#1d2a35"
        menuBtnLink12.style.background = "#1d2a35"
        menuBtnLink13.style.background = "#1d2a35"
        menuBtnLink14.style.background = "#282A35"
        menuBtnIcon24.style.display = "inline"
    } else {
        menu14.style.display = "none"
        menuBtnIcon14.classList = "fa fa-caret-down"
        menuBtnIcon24.style.display = "none"
        menuBtnLink14.style.background = "#1d2a35"
    }
})
menuBtnIcon24.addEventListener("click", function () {
    if (menu14.style.display = "block") {
        menu14.style.display = "none"
        menuBtnIcon24.style.display = "none"
        menuBtnIcon14.classList = "fa fa-caret-down"
        menuBtnLink14.style.background = "#1d2a35"
    } else {
        menu14.style.display = "block"
        menuBtnIcon24.classList = "fa fa-times"
        menuBtnIcon14.classList = "fa fa-caret-up"
        menuBtnLink14.style.background = "#282A35"
    }
})


