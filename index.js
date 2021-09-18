const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./apis/mx-facturacion.json");

app.use(
  "/mx-facturacion",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, null)
);

const puerto = process.env.PORT || 3000;
app.listen(puerto, () =>
  console.log("localhost:" + puerto + "/mx-facturacion")
);
