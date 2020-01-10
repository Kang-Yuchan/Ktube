import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();

const PORT = 5000;

const handleListening = () => console.log(`http://localhost:${PORT}에서 실행중`);

const handleHome = (req, res) => res.send('Hello from Home');

const handleProfile = (req, res) => res.send('Hello from Profile');

//midlleware
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan('dev'));
//

app.get('/', handleHome);
app.get('/profile', handleProfile);
app.listen(PORT, handleListening);
