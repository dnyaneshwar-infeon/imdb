import  express from 'express';
import ormconfgi from './ormconfig.json';

const app=express();

import {createConnection } from 'typeorm';
const connection = await createConnection({

});


app.listen(8000 , ()=>{console.log(`Listening on Port ${8000}`)});