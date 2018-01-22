const app = require('./src/app');

const port = process.env.PORT || 3001;

app.listen(port, (err) => {
  if (err) console.log(`Error: ${err}`);
  console.log(`Running at port ${port}`);
});