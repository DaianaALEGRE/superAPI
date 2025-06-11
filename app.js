const express = require('express');
require('dotenv').config();
const { conectarDB, desconectarDB } = require('./db'); 
const productosRoutes = require('./routes/productos');
const app = express();
const port = process.env.PORT || 3008;
const path = require('path');


app.use(express.json());
app.use('/productos', productosRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
conectarDB(); 

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
