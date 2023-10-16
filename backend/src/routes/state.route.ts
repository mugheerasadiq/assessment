import express from 'express'
import { getStates } from '../controllers/state.route';

export const stateRoutes = express.Router();

stateRoutes.get("/state", getStates)