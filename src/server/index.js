import express from 'express';
import { resolve } from 'path';
import morgan from 'morgan';
import helmet from 'helmet';
// import compression from 'compression';

const app = express();

//* Middleware *//
app.use(express.static(resolve('./dist')));
app.use(morgan('tiny'));
app.use(helmet());
// app.use(compression());


//* End of File *//
app.get('/*', (req, res) => {
  res.sendFile(resolve('./dist/index.html')), 
  (err) => err ? res.status(500).send(err) : null;
}).listen(3000, () => console.log('Server is running on http://localhost:3000'));
