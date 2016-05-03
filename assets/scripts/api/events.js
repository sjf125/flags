'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const authApi = require('./ajax.js');
const authUi = require('./ui.js');
// const app = require('./apiurl.js');

const addHandlers = () => {
  $( document ).ready(function() {
    $('.loggedout-hide').hide();
  });
  // Login handers
  $('#sign-up').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signUp(authUi.signUpSuccess, authUi.signUpFailure, data);
  });
  $('#sign-in').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.signIn(authUi.signInSuccess, authUi.failure, data);
  });
  $('#sign-out').on('click', function (event) {
    event.preventDefault();
    authApi.signOut(authUi.signOutSuccess, authUi.failure);
  });
  $('#change-pass').on('submit', function (event) {
    let data = getFormFields(this);
    event.preventDefault();
    authApi.changePass(authUi.success, authUi.failure, data);
  });
  $('#new-comment').on('click', function (event) {
    let content = $("#comment").val();
    let flag_id = $(".flag").data("id");
    event.preventDefault();
    authApi.submitComment(authUi.commentSuccess, authUi.failure, content, flag_id);
  });
  $('#edit-comment').on('click', function (event) {
    let id = $(this).data("id");
    let content = $("#comment").val();
    $('#edit-comment').addClass('hidden');
    event.preventDefault();
    authApi.editComment(authUi.commentSuccess, authUi.failure, content, id);
  });
};

module.exports = {
  addHandlers
};
