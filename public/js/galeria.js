const miniaturas = document.querySelectorAll(".miniatura");
const modal = document.getElementById("modalImagen");
const imagenGrande = document.getElementById("imagenGrande");
const cerrar = document.querySelector(".cerrar");

miniaturas.forEach(img => {
    img.addEventListener("click",()=>{
        modal.style.display="block";
        imagenGrande.src = img.src;
    });
});

cerrar.addEventListener("click", ()=>{
    modal.style.display="none";
});

modal.addEventListener("click", (e)=>{
    if(e.target === modal){
        modal.style.display = "none";
    }
});