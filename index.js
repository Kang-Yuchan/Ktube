const express = require('express');
const app = express();

const PORT = 5000;

const handleListening = () => {
	console.log(`http://localhost:${PORT}에서 실행중`);
};

app.listen(PORT, handleListening);
