const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for all routes


app.use(bodyParser.json());

app.post('/api/addWizard', (req, res) => {
  const newWizard = req.body;
  
  // Read current data from db.json
  const existingData = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  
  // Add new wizard to existing data
  existingData.push(newWizard);
  
  // Write updated data back to db.json
  fs.writeFileSync('db.json', JSON.stringify(existingData, null, 2));
  
  res.send('Wizard added successfully!');
});

app.listen(PORT, () => {
  console.log('Server is running on port ${PORT}');
});