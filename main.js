document.addEventListener('DOMContentLoaded',()=>{
    
    
    let icono_menu_hamburguesa = document.querySelector('#icono_menu_hamburguesa');
    let menu = document.querySelector('#menu');
    const menu_togle=()=>{menu.classList.toggle('hiden')}
    icono_menu_hamburguesa.addEventListener('click',menu_togle)
    menu.addEventListener('click',menu_togle)
    let mostrando;
    let cerrar = document.querySelector('.cerrar');
    let dibujo_teclas = [...document.querySelectorAll('.teclado>div>div')];
    let elementos=[...document.querySelectorAll('.pieza')];
    const links = [...document.querySelectorAll('nav a')]
    
    const avanzar=(e)=>{
        e.preventDefault();
        let href = e.target.getAttribute("href");
        let ofTop = document.querySelector(href).offsetTop -45;
        
        scroll({
            top: ofTop,
            behavior: "smooth"
          });
    }
    links.forEach(link=>link.addEventListener('click',avanzar))

    const presionar=()=>{
        let index= Math.floor(Math.random()*26+1) 
        dibujo_teclas[index].classList.toggle('back_white');
        setTimeout(()=>{dibujo_teclas[index].classList.toggle('back_white')},200)
    }
    setInterval(presionar,150);
    const mostrar=()=>mostrando.classList.toggle('hiden')
    
    cerrar.addEventListener('click',mostrar)
    const aparecer=(elemento)=>{
        mostrando=document.querySelector(`#${elemento.dataset.rende}`)
        mostrar()
    }
    
    elementos.forEach(ele=>{
        ele.addEventListener('click',()=>{
            aparecer(ele)
        })
        ele.addEventListener('mouseover',()=>{
            ele.classList.add('animate__animated')
            ele.classList.add('animate__swing')
        })
        ele.addEventListener('mouseleave',()=>{
            ele.classList.remove('animate__animated')
            ele.classList.remove('animate__swing')
        })
        
    })
    
    
    

})