const express = require("express");

const router = express.Router();

router.get("/", (req , res )=> {
    res.render("index");
});

router.get("/formulario",(req,res)=>{
    res.render("formulario");
});

let usuarios=[];

router.post("/api/registro",(req,res)=>{
    const{nombre,email,password}=req.body;
    const nuevoUsuario = {nombre,email};
    usuarios.push(nuevoUsuario);
    res.json(nuevoUsuario);
})


router.get("/galeria",(req,res)=>{
    res.render("galeria");
});

router.get("/noticias",(req,res)=>{
    res.render("noticias");
});

router.get("/api/articulos", (req,res)=>{
    const articulos= [
        {titulo: "Flash Electorales", contenido: "VARIADO 1"},
        {titulo: "Noticias Nuevas", contenido: "VARIADO 2"},
        {titulo: "Tv Go", contenido: "VARIADO 3"},
    ];
    res.json(articulos);
})
module.exports = router;

