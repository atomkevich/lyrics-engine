/** @jsx React.DOM */

var React = require('react');

var SongMenu =  React.createClass({
    render: function() {
        return (
            <div id="menu_panel" class="SongMenu">
                <div id="menu_section">
                    <ul>
                        <li><a href="#" class="current">Home</a></li>
                        <li><a href="/home">Gallery</a></li>
                        <li><a href="/recomend">Recomendation</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#" class="last">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});
module.exports = SongMenu;