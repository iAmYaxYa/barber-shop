var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var li = document.querySelectorAll("#nav .menu a");

nav.style.left = "100%";

li.forEach((link)=>{
    link.onclick = (e)=> {
        nav.style.left = "100%";
        menu.src = "img/icons8-menu-30.png";
    }
})
menu.onclick = ()=> {
    if (nav.style.left == "100%") {
        nav.style.left = "0%";
        menu.src = "img/icons8-cancel-64.png";
    }
    else {
        nav.style.left = "100%";
        menu.src = "img/icons8-menu-30.png";
    }

}
