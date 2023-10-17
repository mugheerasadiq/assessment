import express from 'express'
import { getAllUsers } from '../controllers/User';

export const userRoutes = express.Router();

userRoutes.get("/user", getAllUsers)