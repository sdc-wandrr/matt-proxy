const express = require('express');
const path = require('path');
const app = express();
const PORT = 3030;

const imagesServer = require('../client/imageCarousel/server/index.js');
const reviewsServer = require('../client/Reviews-Service/server/index.js');
const descMapRulesServer = require('../client/description-map-rules-service/server/index.js');

app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

// app.get('/api/hostels/:hostel_id/images', (req, res) => {

// });
// app.get();
// app.get();
// app.get();
// app.get();
// app.get();

app.listen(PORT, () => console.log('Proxy Server listening on port ', PORT));