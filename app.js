// app.js
const express = require('express');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const userRoutes = require('./routes/users');

const app = express();
const swaggerDocument = YAML.load('./docs/openapi.yaml');

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});