import express from 'express';

const app = express();

const PORT = 5000;

const handleListening = () => console.log(`http://localhost:${PORT}에서 실행중`);

const handleHome = (req, res) => res.send('Hello from Home');

const handleProfile = (req, res) => res.send('Hello from Profile');

app.get('/', handleHome);
app.get('/profile', handleProfile);
app.listen(PORT, handleListening);
