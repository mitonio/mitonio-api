const app = require('./src/app');

const port = 80;

app.listen(port, (err) => {
  if (err) console.log(`Error: ${err}`);
  console.log(`Running at port ${port}`);
});