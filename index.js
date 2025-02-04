const express = require('express');
const cors = require('cors');

const app = express();
const port = 3010;

app.use(cors());

app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseFloat(req.query.quantity);

  const result = (marketPrice - boughtAt) * quantity;
  res.json(result.toString());
});

app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  const result = stock1 + stock2 + stock3 + stock4;
  res.json(result.toString());
});

app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  const result = (returns * 100) / boughtAt;
  res.json(result.toString());
});

app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  const result = stock1 + stock2 + stock3 + stock4;
  res.json(result.toString());
});

app.get('/status', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);
  let result;
  if (returnPercentage > 0) {
    result = 'profit';
  } else {
    result = 'loss';
  }
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
