/*
 * COmpoenent to render the Title for
 * 
*/

var React = require('react');


// create the class for the for the component

var ContentIcon = React.createClass({
    propTypes: {
        iconClass : React.PropTypes.string.isRequired
    },
    render : function(){
        //@TODO make the Classname configurable
        return <div className={this.props.iconClass + " pull-left"}></div>;
    }
})

module.exports = ContentIcon;

