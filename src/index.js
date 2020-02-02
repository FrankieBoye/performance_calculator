import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import $ from 'jquery';

ReactDOM.render(<App />, document.getElementById('root'));

$('input[type=button]').click(function() {
   $('input[type=button]').removeClass('active');
   $(this).addClass('active');
});
