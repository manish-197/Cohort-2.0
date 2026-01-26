
const app = require('./src/app');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
});