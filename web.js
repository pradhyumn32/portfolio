let tablinks = document.querySelectorAll(".tab-links");
let tabcontents = document.querySelectorAll(".tab-contents");
let opentab = (tabname) => {
    tablinks.forEach((tablink) => {
        tablink.classList.remove("active-link");
    })
    tabcontents.forEach((tabcontent) => {
        tabcontent.classList.remove("active-tab");
    })
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
let sidemenu = document.querySelector("#sidemenu");
let openmenu = () => {
    sidemenu.style.right = "0";
}
let closemenu = () => {
    sidemenu.style.right = "-200px";
}
let mode = document.querySelector("#mode");
let body = document.querySelector(".body");
let y = "dark";
mode.addEventListener("click",() => {
    if(y == "dark"){
        y = "light";
        body.classList.add("light");
    }
    else{
        y = "dark";
        body.classList.remove("light");
    }
})
