const router = require("express").Router();

const {
   getComentarios,
   createComentario,
   updateComentario,
   deleteComentario,
} = require("./Controllers/Comentario");


const {
   getPublicacion,
   createPublicacion,
   getPublicacionId,
   updatePublicacion,
   deletePublicacion,
   getPublicacionUsuario,
   deletePublicacionFecha
} = require("./Controllers/Publicacion");

const {
   createUsuario,
   findUsuarioEmail,
   deleteUsuarioEmail
} = require("./Controllers/Usuario")

//ruta get principal
router.get("/", async (req, res) => {
   res.send("Let's build a CRUD API!");
});

// Rutas para usuarios
router.post('/usuarios', createUsuario);
router.get('/usuarios/:email', findUsuarioEmail);
router.delete('/usuarios/:email', deleteUsuarioEmail);

// Rutas para publicaciones
router.get("/publicaciones", getPublicacion);
router.post("/publicaciones", createPublicacion);
router.get("/publicaciones/:id", getPublicacionId);
router.put("/publicaciones/:id", updatePublicacion);
router.delete("/publicaciones/:id", deletePublicacion);
router.get("/publicaciones/usuario/:usuarioId", getPublicacionUsuario);
router.delete("/publicaciones/fecha", deletePublicacionFecha);

// Rutas para comentarios
router.post("/comentarios", createComentario);
router.put("/comentarios/:id", updateComentario);
router.get("/comentarios/publicacion/:idPublicacion", getComentarios);
router.delete("/comentarios/fechapublicacion", deleteComentario);

module.exports = router;