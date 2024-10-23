const express = require('express');
const bodyParser = require('body-parser');
const tareaRoutes = require('./routes/tareaRoutes'); // Importamos las rutas de tareas

const app = express();

app.use(bodyParser.json()); // Permite manejar solicitudes con JSON

// Ruta principal
app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Gestión de Tareas');
});

// Usar las rutas de tareas
app.use('/api/tareas', tareaRoutes);

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
