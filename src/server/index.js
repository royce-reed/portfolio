import express from 'express';
import url, { fileURLToPath } from 'url';
import { resolve } from 'path';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

// const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(resolve('./dist')));
app.use(morgan('tiny'));
app.use(helmet());



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
