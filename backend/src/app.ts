import express, { Application, Request, Response } from 'express';
import cors from "cors"
import { countryRoutes } from './routes/country.route';
import { cityRoutes } from './routes/city.route';
import { authRoutes } from './routes/auth.route';
import { stateRoutes } from './routes/state.route';
import { userRoutes } from './routes/user.route';

const PORT = process.env.PORT || 8000;
const app: Application = express();

app.use(express.json());

app.use(cors());

app.use("/api", userRoutes)
app.use("/api", countryRoutes);
app.use("/api", cityRoutes);
app.use("/api", stateRoutes)
app.use("/api", authRoutes)

app.listen(PORT, () => {
    console.log("Server is listening to port", PORT)
});