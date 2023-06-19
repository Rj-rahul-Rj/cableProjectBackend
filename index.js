const { app, express } = require('./common/common');
const port = require('./util/config')
const Port = port.port;
const service = require('./util/service');

// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))

// // parse application/json
// app.use(bodyParser.json())


//include route
require('./router')
app.listen(Port, () => {
    console.log(`listen port is ${Port}`);
});