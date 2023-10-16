import express from 'express'
import {getCountries} from '../controllers/country';

export const countryRoutes = express.Router();

countryRoutes.get("/country", getCountries)