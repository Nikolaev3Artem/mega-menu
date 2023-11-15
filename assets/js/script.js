"use strict"


let buttons = document.querySelectorAll(".mega-menu_open");
let close = document.querySelectorAll(".close");

close.forEach(element => {
    element.addEventListener("click",(event) => {
            close_menu(event.target);
        },
        false,
    );
});

buttons.forEach(element => {
    element.addEventListener("click",(event) => {
            change_color(event.target);
        },
        false,
    );
});

function change_color(target){
    buttons.forEach(element => {
        element.style.backgroundColor = "#A6594F";
        element.style.color = "white";
    });
    target.style.backgroundColor = "white";
    target.style.color = "#A6594F";

}

function open_menu(element_id){
    let all_menus = document.querySelectorAll(".mega-menu")
    all_menus.forEach(element => {
        element.style.display = "none";
    });
    all_menus[element_id].style.display = "flex";
    if(window.innerWidth <= 770){
        all_menus[element_id].style.position = "absolute";
        all_menus[element_id].style.width = "100%";
        console.log("Resized")
    }
}

function close_menu(target){
    let all_menus = document.querySelectorAll(".mega-menu")
    all_menus.forEach(element => {
        element.style.display = "none";
    });
}