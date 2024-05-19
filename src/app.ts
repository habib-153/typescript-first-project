import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';

const app: Application = express();
//const port = 3000

app.use(express.json());
app.use(cors());

//  application routes
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  //const a = 10;
  res.send("Hello");
});

export default app;
