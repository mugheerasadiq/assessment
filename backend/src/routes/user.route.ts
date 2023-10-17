import express from 'express'
import { deleteUser, getAllUsers } from '../controllers/User';

export const userRoutes = express.Router();

userRoutes.get("/user", getAllUsers)
userRoutes.delete("/user/:id", deleteUser)