const { app ,express} = require('./common/common');
const port = require('./util/config')
const Port = port.port;
const service = require('./util/service');


//include route
require('./router')
app.listen(Port,()=>{
    console.log(`listen port is ${Port}`);
});