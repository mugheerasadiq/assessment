import express, { Application, Request, Response } from 'express';
import { authRoutes } from './routes/auth.route';

const PORT = process.env.PORT || 8000;
const app: Application = express();

app.use(express.json());

app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log("Server is listening to port", PORT)
});