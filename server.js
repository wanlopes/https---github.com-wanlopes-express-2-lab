const express = require('express');
const port = 8080;
const app = express();
app.use(express.static("public"));
app.use((req, res, next) => {
  console.log(
    `Time: ${new Date().toLocaleString()} - Request Path: ${req.path}`
  );
  next();
});
const foodRoutes = require("./routes/foodRoutes");

app.use('/foods', foodRoutes);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

