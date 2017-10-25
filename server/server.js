const Express = require('express');
const cors = require('cors');

const app = new Express();

const apiV1 = require('./routes/v1');

app.use(cors());
app.use('/api/v1', apiV1);

app.listen(3000);
