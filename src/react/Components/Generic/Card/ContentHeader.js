/*
 * Compoenent to render the Header
 * 
*/

var React = require('react');
var ContentIcon = require('./ContentIcon');
var ContentTitle = require('./ContentTitle');

// create the class for the for the component

var ContentHeader = React.createClass({
    propTypes: {
        title : React.PropTypes.string.isRequired,
        iconClass : React.PropTypes.string.isRequired
    },
    render : function(){
        //@TODO make the Class configurable
        return <div className="panel-heading"><ContentIcon iconClass={this.props.iconClass}/><ContentTitle title={this.props.title}/></div>; 
    }
})

module.exports = ContentHeader;

