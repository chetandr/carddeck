/*
 * COmpoenent to render the Title for
 * 
*/

var React = require('react');


// create the class for the for the component

var ContentTitle = React.createClass({
    propTypes: {
        title : React.PropTypes.string.isRequired
    },
    render : function(){
        //@TODO make the Classname configurable
        return <div >{this.props.title}</div>;
    }
})

module.exports = ContentTitle;

