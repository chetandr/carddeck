/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var React = require('react');
var ReactDOM = require('react-dom')
var Card = require('../Generic/Card/Card');
 var optionsObj = [{title:"Blackberry!! healthy",
                   iconClass:"glyphicon glyphicon-glass",
                   backgroundImg:"https://images.ixigo.com/image/upload/t_large,f_auto/villa-lenije-vinkovci-image-524f00c0cd83ae84c2646635.jpg",
                   content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
                {title:"My First Card",
                   iconClass:"glyphicon glyphicon-music",
                   backgroundImg:"http://1s5wkp21x87o2liipe3i6efo.wpengine.netdna-cdn.com/wp-content/uploads/2015/02/10357526_10152294433289340_1331019845173516223_n-330x200.jpg",
                   content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
                {title:"My First Card",
                   iconClass:"glyphicon glyphicon-queen",
                   backgroundImg:"http://fugu-fuku.com/img/menu02.jpg",
                   content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."},
                {title:"My First Card",
                   iconClass:"glyphicon glyphicon-grain",
                   backgroundImg:"http://ymorfavenue.co.uk/wp-content/uploads/2013/01/Food-Finger-Buffet.jpg",
                   content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}];

 module.exports = React.createClass({
     render : function(){
         var _cards = [];
         var _cardCount = optionsObj.length;
         for(var i=0;i<_cardCount;i++){
             _cards.push(<div className="col-xs-12 col-md-6 col-lg-3"><Card options={optionsObj[i]}><p>{optionsObj[i].content}</p></Card></div>);
         }
        return <div className="row">{_cards}</div>;
     }
 });