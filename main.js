
document.addEventListener("keyup", e=>{
    if (e.target.matches(".search")){
        if (e.key ==="Escape")e.target.value = ""
          document.querySelectorAll(".prenda").forEach(prenda=>{
              prenda.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?prenda.classList.remove("filtro")
                :prenda.classList.add("filtro")
        })
    }
})

// menu
let ajustes=document.getElementById('ajustes');
let menu=document.getElementById('menu');

ajustes.addEventListener('click',()=>{
    if(menu.style.display === "none"){
        menu.style.display='block'
    }else{
        menu.style.display='none'
    }
})
// fin menu