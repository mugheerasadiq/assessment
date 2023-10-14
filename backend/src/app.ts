import express, { Application, Request, Response } from 'express';
const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log("Server is listening to port", PORT)
});