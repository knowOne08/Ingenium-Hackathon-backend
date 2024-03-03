import dotenv from 'dotenv';
import { router } from './routes';
import { app } from './server';
import bodyParser from 'body-parser';
import cors from "cors"
app.use(cors());

dotenv.config();


app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use('/api', router)