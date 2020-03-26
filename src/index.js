const express = require('express');
const cors = require('cors');

const routes = require('./routes')

const app = express();

const port = process.env.PORT || 3333;

app.set('port', port);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => `App running at http://localhost:${port}`)
