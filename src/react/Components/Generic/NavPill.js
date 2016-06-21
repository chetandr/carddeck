

/*
 * COmpoenent to render the Title for
 * 
*/

var React = require('react');


// create the class for the for the component

var NavPill = React.createClass({
    render : function(){
        //@TODO make the Classname configurable
        return <ul className="bt-pills" style={{display:"none"}}><li><button  type="submit">Edit</button></li><li><button  type="submit">Delete</button></li></ul>;
    }
})

module.exports = NavPill;

