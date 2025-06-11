const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: String,
  precio: Number,
  categoria: String
});




module.exports = mongoose.model('Producto', productoSchema, 'productos');