document.addEventListener('DOMContentLoaded',()=>{
    "use strict";
    let icono_menu_hamburguesa = document.querySelector('#icono_menu_hamburguesa');
    let menu = document.querySelector('#menu');
    let dibujo_teclas = [...document.querySelectorAll('.teclado>div>div')];
    icono_menu_hamburguesa.addEventListener('click',()=>{
        menu.classList.toggle('hiden');
    })

    const presionar=()=>{
        let index= Math.floor(Math.random()*26+1) 
        dibujo_teclas[index].classList.toggle('back_white');
        setTimeout(()=>{dibujo_teclas[index].classList.toggle('back_white')},200)
    }
    setInterval(presionar,150);
    
    
})