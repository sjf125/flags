'use strict';

const app = require('./apiurl.js');
// const index = require('../index.js');
const comments = require('../comments.js');


const signInSuccess = (data) => {
  app.user = data.user;
  // localStorage.setItem('currentUser',$(this).data("id"));
  console.log(app);
  $( document ).ready(function() {
    $('.loggedin-hide').fadeOut(500);
    $('.loggedout-hide').delay(500).fadeIn(500);
  });
};

const signUpSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  $( document ).ready(function() {
    $('.alert').hide();
    $('#sign-up-success').fadeIn(300);
  });
};

const signUpFailure = (error) => {
  console.error(error);
  $( document ).ready(function() {
    $('.alert').hide();
    $('#sign-up-failure').fadeIn(300);
  });
};

const signOutSuccess = () => {
  app.user = null;
  console.log(app);
  $( document ).ready(function() {
    $('.loggedout-hide').fadeOut(500);
    $('.loggedin-hide').delay(500).fadeIn(500);
  });
};

const commentSuccess = (data) => {
  $('#comment-success').removeClass('hidden').fadeOut(2000, function(){
    $('#comment-success').addClass('hidden').show();
  });
  comments.getComments($('.flag').data('id'));
  console.log(data);
};

const ratingSuccess = (data) => {
  $('#rating-success').removeClass('hidden').fadeOut(2000, function(){
    $('#rating-success').addClass('hidden').show();
  });
  $('#submit-rating, #update-rating').addClass('hidden');
  console.log(data);
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
  console.log(app.user.id);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  commentSuccess,
  signUpSuccess,
  signUpFailure,
  ratingSuccess
};
