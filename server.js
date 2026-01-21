const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Mock endpoint
app.get('/api/mock', (req, res) => {
    res.json({ message: 'This is a mock endpoint.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
