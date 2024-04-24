// Humberger Menu

let menu = document.querySelector(".menu_links")
let menuBtn = document.querySelector(".header-icon")
let menuBtnIcon = document.querySelector(".header-icon i")

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.right = "0"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.right = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})

// Suggested

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
