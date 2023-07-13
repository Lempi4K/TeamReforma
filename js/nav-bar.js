

function NavBar(){
    window.addEventListener("scroll", e => {
        let nav = document.querySelector(".nav-bar");
        nav.classList.toggle("nav-bar-follow", window.scrollY >= 600);

        if(window.innerWidth <= 800 && window.scrollY < 600){
            console.log("a")
            document.querySelector(".nav-bar ul").style.width = "0%";
            document.querySelector(".nav-bar ul").style.position = "absolute"
        } else{
            document.querySelector(".nav-bar ul").style.removeProperty("width");
            document.querySelector(".nav-bar ul").style.removeProperty("position");
        }
    })
}

NavBar();