
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










