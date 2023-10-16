import express from 'express'
import { signin, signup } from '../controllers/auth';

export const authRoutes = express.Router();

authRoutes.post("/signup", signup)
authRoutes.post("/signin", signin);