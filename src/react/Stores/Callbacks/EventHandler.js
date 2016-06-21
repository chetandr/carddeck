
/**
 * The Generic Event Handling Methods used for all Stores
 */
var EventEmitter = require('events').EventEmitter;
var CommonEvents = require('../../Constants/Maps/Common.js')
var assign = require('object-assign');

module.exports = assign({},EventEmitter.prototype,{
    /**
     * Function to Triger the Change EVENT
     * 
     */
    emitChange : function(){
        this.emit(CommonEvents.CHANGE_EVENT);
    },
    
    /**
     * Function to register a Callback that is triggered on change event.
     */
    addChangeListener : function(callback){
        this.on(CommonEvents.CHANGE_EVENT,callback);
    },
    
     /**
      * Function to de register a Callback that is triggered on change event.
      */
    removeChangeListener : function(callback){
        this.removeListener(CommonEvents.CHANGE_EVENT,callback);
    }
});