const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname +'./../'))); //serves the index.html

app.listen(3000, () => {
  console.log('Listening on 3000...');
})