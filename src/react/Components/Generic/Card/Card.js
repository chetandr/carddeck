/**
 * Main Card Component.Composes the Card
 * Parameters Required
 *  options
 *      {
 *          background :// Background image for the card
 *          iconClass : // ClassName for the Icon
 *          title : // Title to be displayed 
 *          content :
 *      }
*/

//Required Module 
//node modules
var React = require('react');
var ContentHeader = require('./ContentHeader');
var ContentBody = require('./ContentBody');
var NavPill = require('../NavPill');

var Card = React.createClass({
    _SELF : this,
    propTypes:{
        options : React.PropTypes.object.isRequired // list of properties that are required for this component 
    },
    render : function(){
        var styleOptions = {backgroundImage: 'url(' + this.props.options.backgroundImg + ')',backgroundRepeat:'no-repeat'};
        
        return <div className="panel panel-default" style={styleOptions} onMouseOver={this.showMenu} onMouseOut={this.hideMenu} ><ContentHeader title={this.props.options.title} iconClass={this.props.options.iconClass}/><ContentBody>{this.props.children}</ContentBody><NavPill ref={(c) => this._buttonset = c} /></div>;
    },
    showMenu: function(Element,reactId,Event){
        this._buttonset.getDOMNode().style.display = 'block';
        console.log('SHOW',this._buttonset.getDOMNode());
    },
    hideMenu: function(Element,reactId,Event){
        this._buttonset.getDOMNode().style.display = 'none'
        console.log('HIDE');
    }
});

module.exports = Card;