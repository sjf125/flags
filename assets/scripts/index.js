'use strict';

const displayFlags = function(flags){
  const template = require('./templates/flag-listing.handlebars');
  $('.content').append(template({flags}));
  // console.log(flags);
};

const getFlags = function(){
  $.ajax({
    url: "http://localhost:3000/flags",
    // method: 'GET',
    // dataType: 'json'
  }).done(function(flags){
    displayFlags(flags);
  });
};

// $(document).ready(function(){
//   getFlags();
// });
