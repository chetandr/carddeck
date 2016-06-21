/**
 * Contains Helper Functions that are used in the application
 */

var WRMConfig = require('../constants/config/WRMApp');


/**
 * Function to log data to the console.
 * @param mixed message content that is to be logged
 */

function log(message){
    if(WRMConfig.devState !== 'production') {
        console.log(message);
    }
}

module.exports = {
    log :log
}