import app from './app';

const PORT = 5000;

const handleListening = () => console.log(`✅ http://localhost:${PORT}`);

app.listen(PORT, handleListening);
