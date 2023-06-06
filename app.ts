import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import UserRoute from './router/UserRoute';
import StudentRoute from './router/StudentRoute';
import sequelize from './sequelize-config';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.get('/', (req: Request, res: Response) => {
  res.send('Success test');
});
app.use('/user', UserRoute);
app.use('/student', StudentRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});