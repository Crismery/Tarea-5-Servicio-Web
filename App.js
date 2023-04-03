const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const API_URL = 'http://www.raydelto.org/agenda.php';

// Obtener todos los contactos
app.get('/contactos', async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener los contactos');
  }
});

// Agregar un nuevo contacto
app.post('/contactos', async (req, res) => {
  const contacto = req.body;
  try {
    const response = await axios.post(API_URL, contacto);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al agregar el contacto');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor iniciado en el puerto ${PORT}`));
