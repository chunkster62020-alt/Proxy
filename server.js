import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;

// Serve static web pages from a "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic fallback endpoint simulation
app.get('/chromium-session', (req, res) => {
    res.send(`<h1>Simulated Virtual Browser</h1><p>Loading URL: ${req.query.url}</p>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
