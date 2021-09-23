const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./apis/mx-general.json');

app.use('/mx-general', swaggerUi.serve, swaggerUi.setup(swaggerDocument, null));
const port = process.env.PORT || 3005;
app.listen(port, () => console.log("http://localhost:"+port+"/mx-general"));
