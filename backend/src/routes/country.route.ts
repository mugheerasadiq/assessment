import express from 'express'
import { signup } from '../controllers/auth';

export const authRoutes = express.Router();

authRoutes.post("/signup", signup)