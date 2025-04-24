const express = require('express');
const app = express();

// Use the port provided by Render OR fallback to 4000 for local development
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
});
