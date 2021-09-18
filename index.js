const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./apis/mx-facturacion.json');

app.use('/mx-facturacion', swaggerUi.serve, swaggerUi.setup(swaggerDocument, null));

app.listen(3005, () => console.log("localhost:3005/mx-facturacion"));