'use strict';

const app = require('./apiurl.js');

const signUp = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-up',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signIn = (success, failure, data) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/sign-in',
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const signOut = (success, failure) => {
  // if (!api.user) bad;
  $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const changePass = (success, failure, data) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    dataProcessing: false,
    data,
  }).done(success)
  .fail(failure);
};

const submitComment = (success, failure, content, flag_id) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/comments/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      comment:  {
        content: content,
        user_id: app.user.id,
        flag_id: flag_id,
      },
    },
  }).done(success)
  .fail(failure);
};

const editComment = (success, failure, content, id) => {
  $.ajax({
    method: 'PATCH',
    url: app.api + '/comments/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      comment:  {
        content: content,
      },
    },
  }).done(success)
  .fail(failure);
};

const deleteComment = (success, failure, id) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/comments/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

const submitRating = (success, failure, score, flag_id) => {
  $.ajax({
    method: 'POST',
    url: app.api + '/ratings/',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      rating:  {
        score: score,
        user_id: app.user.id,
        flag_id: flag_id,
      },
    },
  }).done(success)
  .fail(failure);
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  submitComment,
  editComment,
  deleteComment,
  submitRating
};
