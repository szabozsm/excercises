import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from './routes';
import * as swaggerJson from './swagger.json';

const app = express();
const port = 3000;

app.use(express.json());

RegisterRoutes(app);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`OpenAPI docs at http://localhost:${port}/docs`);
});