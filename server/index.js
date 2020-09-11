require('newrelic');
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 3030;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/hostels/:hostel_id', express.static(path.join(__dirname, '../public')));

app.get('/loaderio-12556c443590d1d7ab0e96b850dcc72a/', (req, res) => {
  res.sendFile(path.join(__dirname, './Test/loaderio-12556c443590d1d7ab0e96b850dcc72a.txt'));
});

// API reroutes

// Image carousel service
app.use('/api/hostels/:hostel_id/images', createProxyMiddleware({ target: 'http://172.31.30.142', changeOrigin: true }));
// availability service
app.use('/api/hostel/:hostelId/rooms', createProxyMiddleware({ target: 'http://54.215.89.194', changeOrigin: true }));
// description map rules service
app.use('/house/:id/hostel', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/house/:id/description', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/house/:id/rules', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
app.use('/house/:id/address', createProxyMiddleware({ target: 'http://localhost:3000', changeOrigin: true }));
// reviews service
app.use('/api/reviews', createProxyMiddleware({ target: 'http://localhost:3001', changeOrigin: true }));


app.listen(PORT, () => console.log('Proxy Server listening on port ', PORT));
