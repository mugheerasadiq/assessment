import express from 'express'
import { Signup } from '../controllers/auth';

export const authRoutes = express.Router();

authRoutes.post("/signup", Signup)