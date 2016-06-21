/*
 * COmpoenent to render the Title for
 * 
*/

var React = require('react');


// create the class for the for the component

var ContentBody = React.createClass({
    render : function(){
        //@TODO make the Classname configurable
        return <div className='panel-body'>{this.props.children}</div>;
    }
})

module.exports = ContentBody;

