import express from 'express'
import { getStates } from '../controllers/state';

export const stateRoutes = express.Router();

stateRoutes.get("/state", getStates)