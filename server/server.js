const Express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const url = require('url');

const apiV1 = require('./routes/v1');

// ###########################################################################
// Setup app settings
// ###########################################################################
const app = new Express();
app.set('x-powered-by', false);

// ###########################################################################
// Setup middlewares
// ###########################################################################
app.use(cors());
app.use(helmet());
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(cookieParser());

// ###########################################################################
// Proxy asset requests to webpack-dev-server
// http://stackoverflow.com/questions/33575961/webpack-dev-server-express-web-server
// http://stackoverflow.com/questions/26203725/how-to-allow-for-webpack-dev-server-to-allow-entry-points-from-react-router
// ###########################################################################

// ###########################################################################
// Routes
// ###########################################################################
app.use('/api/v1', apiV1);

if (app.get('env') === 'development') {
  const proxy = require('proxy-middleware');
  app.use(proxy(url.parse('http://localhost:8080')));
}

app.listen(3000);
