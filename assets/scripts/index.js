'use strict';

const events = require('./api/events.js');
const app = require('./api/apiurl.js');
// const authApi = require('./api/ajax.js');
// const authUi = require('./api/ui.js');
// const handlers = require('./comment-click-handlers.js');
const comments = require('./comments.js');

require('jquery.lazyload.cjs')($);

const displayRatings = function(ratings, flagID) {
  $('#submit-rating, #update-rating').addClass('hidden');
  let userRating = null;
  let ratingID = null;
  let flagRatings = [];
  for (let i = 0; i < ratings.length; i++) {
    if (!!app.user && ratings[i].flag.id === flagID && ratings[i].user.email === app.user.email) {
      userRating = '.star-' + ratings[i].score;
      ratingID = ratings[i].id;
    }
    if (ratings[i].flag.id === flagID) {
      flagRatings.push(ratings[i].score);
    }
  }
  if(userRating !== null) {
    $(userRating).prop('checked', true);
    $('#update-rating').removeClass('hidden');
    $('.rating').data('id', ratingID);
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

const getRatings = function(flagID){
  $.ajax({
    url: app.api + "/ratings/",
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayRatings(data.ratings, flagID);
  });
};

const displayFlag = function(flag){
  const display = require('./templates/flag.handlebars');
  $('.flagDisplay, .flag-comments').empty();
  $('.flagName').text(function() {return flag.name;});
  $('.flagDisplay').append(display({flag}));
  getRatings(flag.id);
  comments.getComments(flag.id);
};

const getFlag = function(id){
  $.ajax({
    url: app.api + "/flags/" + id,
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayFlag(data.flag);
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

// On document ready
$(() => {
  getFlags();
  events.addHandlers();
});

// module.exports = {
// };
