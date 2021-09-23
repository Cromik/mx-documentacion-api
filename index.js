const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./apis/mx-general.json');

app.use('/mx-general', swaggerUi.serve, swaggerUi.setup(swaggerDocument, null));

app.listen(3005, () => console.log("http://localhost:3005/mx-general"));
