'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
// const authApi = require('./api/ajax.js');
// const authUi = require('./api/ui.js');
const comment = require('./comment-click-handlers.js');

require('jquery.lazyload.cjs')($);

const getFlag = function(id){
  $.ajax({
    url: app.api + "/flags/" + id,
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayFlag(data.flag);
  });
};

const getRatings = function(flagID){
  $.ajax({
    url: app.api + "/ratings/",
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayRatings(data.ratings, flagID);
  });
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

const displayFlags = function(flags){
  const flagsTemplate = require('./templates/flag-listing.handlebars');
  $('.content').append(flagsTemplate({flags}));
  $(".gallery-flag").lazyload({
    effect : "fadeIn"
  });
  $('.flag-tile').on("click", function(){
    $('#flagModal').modal();
    getFlag($(this).data("id"));
  });
};

const getFlags = function(){
  $.ajax({
    url: app.api + "/flags",
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayFlags(data.flags);
  });
};

const displayFlag = function(flag){
  const display = require('./templates/flag.handlebars');
  $('.flagDisplay, .flag-comments').empty();
  $('.flagName').text(function() {return flag.name;});
  $('.flagDisplay').append(display({flag}));
  getRatings(flag.id);
  getComments(flag.id);
};

const displayRatings = function(ratings, flagID) {
  $('#submit-rating, #update-rating').addClass('hidden');
  let userRating = null;
  let flagRatings = [];
  for (let i = 0; i < ratings.length; i++) {
    if (!!app.user && ratings[i].flag.id === flagID && ratings[i].user.email === app.user.email) {
      userRating = '.star-' + ratings[i].score;
    }
    if (ratings[i].flag.id === flagID) {
      flagRatings.push(ratings[i].score);
    }
  }
  if(userRating !== null) {
    $(userRating).prop('checked', true);
    $('#update-rating').removeClass('hidden');
  }
  else {
    $('.rating').children().prop('checked', false);
    $('#submit-rating').removeClass('hidden');
  }
  let avgRating = (flagRatings.reduce((a, b) => a + b, 0))/flagRatings.length;
  if(!avgRating) {avgRating = '(none yet)';}
  $('.avg-score').text(avgRating);
  // let element = '.star-' + Math.ceil(avgRating);
  // console.log(element);
  // $(element).css('color', 'gold');
  // $(element).prevAll().addClass('highlight');
};

const displayComments = function(comments, flagID) {
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
  comment.clickHandlers();
};

// On document ready
$(() => {
  getFlags();
  events.addHandlers();
});

module.exports = {
  getComments
};
