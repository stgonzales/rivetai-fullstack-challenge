import { Router } from 'express';
import exampleRouter from './example.routes';
const routes = Router();


routes.use('/example', exampleRouter)

export default routes;
