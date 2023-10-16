import express from 'express'
import { getCities } from '../controllers/city';

export const cityRoutes = express.Router();

cityRoutes.post("/city", getCities)