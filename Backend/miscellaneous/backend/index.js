const express = require('express');
const app = express();
const port = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
  let { username, password } = req.query;
  res.send(`standard get response. welcome ${username}`);
});

app.post('/register', (req, res) => {
  let { user, password } = req.body;
  res.send(`standard post response. welcome ${user}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
