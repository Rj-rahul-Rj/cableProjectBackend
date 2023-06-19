const { app } = require('../common/common')

module.exports = {
    user: require('./auth')(app),
}