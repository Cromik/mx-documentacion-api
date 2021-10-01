const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerGeneral = require('./apis/mx-general.json');
const swaggerSeguridad = require('./apis/mx-seguridad.json');

app.use('/mx-general', swaggerUi.serve, swaggerUi.setup(swaggerGeneral, null));
app.use('/mx-seguridad', swaggerUi.serve, swaggerUi.setup(swaggerSeguridad, null));
const port = process.env.PORT || 3005;
app.listen(port, () => console.log("http://localhost:"+port+"/mx-general"));
