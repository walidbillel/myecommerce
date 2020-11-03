import express from 'express';
import data from './data';

const PORT = 3030 || process.env.PORT;
const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`server starting at ${PORT}`);
});
