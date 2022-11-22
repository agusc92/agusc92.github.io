document.addEventListener('DOMContentLoaded',()=>{
    "use strict";
    let icono_menu_hamburguesa = document.querySelector('#icono_menu_hamburguesa');
    let menu = document.querySelector('#menu');

    icono_menu_hamburguesa.addEventListener('click',()=>{
        menu.classList.toggle('hiden');
    })
})