'use strict';

'use strict';

// user require with a reference to bundle the file and use it in this file
// let example = require('./example');

let getFlags = function(){
  $.ajax({
    url: "http://localhost:3000/flags",
    // method: 'GET',
    // dataType: 'json'
  }).done(function(flags){
    displayBooks(flags);
  });
};

const displayFlags = function(flags){
  let template = require('./templates/book-listing.handlebars');
  $('.content').append(template({flags}));
  });
};
