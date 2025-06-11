const mongoose = require('mongoose');
require('dotenv').config();

async function conectarDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
   
    });
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err.message);
    process.exit(1);
  }
}

async function desconectarDB() {
  try {
    await mongoose.connection.close();
    console.log('Desconectado de MongoDB');
  } catch (err) {
    console.error('Error al desconectar:', err.message);
  }
}

module.exports = { conectarDB, desconectarDB };
