const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'company'
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    process.exit(1); // ← More graceful failure
  }
  console.log('Connected to MySQL');
});

app.get('/employees', (req, res) => {
  db.query('SELECT * FROM employee', (err, result) => {
    if (err) {
      console.error('Query error:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
