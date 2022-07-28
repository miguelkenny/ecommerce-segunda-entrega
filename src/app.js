import express from "express";
import router from './routes/index.js';
import {routeNotFound} from './middelware/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);
app.use(routeNotFound);

app.listen('8080',() => {
    console.log('Escuchando');
})