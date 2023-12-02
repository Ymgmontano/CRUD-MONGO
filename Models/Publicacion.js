const mongoose = require('mongoose');
const PublicacionSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "Titulo necesario"],
    },
    contenido: {
      type: String,
      required: [true, "Contenido necesario"],
    },
    fecha: {
      type: Date,
      default: Date.now,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
  },
);

module.exports = mongoose.model('Publicacion', PublicacionSchema);