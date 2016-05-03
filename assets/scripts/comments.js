'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
const handlers = require('./comment-click-handlers.js');
const index = require('./index.js');

const displayComments = function(comments, flagID) {
  $('.flag-comments').empty();
  const display = require('./templates/comments.handlebars');
  const displaySelf = require('./templates/self-comments.handlebars');
  // let commentIDs = [];
  // for (let i = 0; i < comments.length; i++) {
  //   if (comments[i].flag.id === flagID) {
  //     comments[i].
  //   }
  // };
  // debugger;
  for (let i = 0; i < comments.length; i++) {
    if (!!app.user && comments[i].flag.id === flagID && comments[i].user.email === app.user.email) {
      let comment = comments[i];
      $('.flag-comments').append(displaySelf({comment}));
    }
    else if (comments[i].flag.id === flagID) {
      let comment = comments[i];
      $('.flag-comments').append(display({comment}));
    }
  }
  handlers.clickHandlers();
};

const getComments = function(flagID){
  $.ajax({
    url: app.api + "/comments/",
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayComments(data.comments, flagID);
  });
};

module.exports = {
  getComments,
  displayComments
};
