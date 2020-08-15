const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

// app.get('/api/hostels/:hostel_id/images', (req, res) => {

// });
// app.get('/house/:id', (req, res) => {
//   res.redirect('http://localhost:3000/house/:id')
// });

// app.get('/public/bundle.js');
// app.get();
// app.get();
// app.get();

app.listen(PORT, () => console.log('Proxy Server listening on port ', PORT));