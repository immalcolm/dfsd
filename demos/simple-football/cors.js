const express = require('express');
const app = express();
const cors = require('cors');

const PORT = 3000;
// Enable CORS for all routes
app.use(cors());

app.get('/standings', async (req, res) => {
  const fetch = (await import('node-fetch')).default;

  const response = await fetch('https://api.football-data.org/v4/competitions/PL/standings', {
    headers: {
      'X-Auth-Token': 'aab577d054ac4fb593dff77ebb70c726'
    }
  });

  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
