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

// loaderio verification
app.get('/loaderio-12556c443590d1d7ab0e96b850dcc72a/', (req, res) => {
  res.sendFile(path.join(__dirname, './spec/loaderio-12556c443590d1d7ab0e96b850dcc72a.txt'));
});

// API reroutes
app.use('/api/hostels/:hostel_id/images', createProxyMiddleware({ target: 'http://172.31.30.142', changeOrigin: true }));
app.use('/api/house/:id/hostel', createProxyMiddleware({ target: 'http://54.215.89.194', changeOrigin: true }));
app.use('/api/house/:id/description', createProxyMiddleware({ target: 'http://54.215.89.194', changeOrigin: true }));
app.use('/api/house/:id/rules', createProxyMiddleware({ target: 'http://54.215.89.194', changeOrigin: true }));
app.use('/api/house/:id/address', createProxyMiddleware({ target: 'http://54.215.89.194', changeOrigin: true }));
app.use('/hostels/:id/api/reviews', createProxyMiddleware({ target: 'http://100.26.204.252:3001/', changeOrigin: true }));

app.listen(PORT, () => console.log('Proxy Server listening on port ', PORT));
