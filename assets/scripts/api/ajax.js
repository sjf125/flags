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

const deleteComment = (success, failure, content, id) => {
  $.ajax({
    method: 'DELETE',
    url: app.api + '/comments/' + id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  }).done(success)
  .fail(failure);
};

// const createGame = (success, failure) => {
//   $.ajax({
//     method: 'POST',
//     url: app.api + '/games/',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: '',
//   }).done(success)
//   .fail(failure);
// };
//
// const findGame = (success, failure, id) => {
//   $.ajax({
//     method: 'GET',
//     url: app.api + '/games/' + id,
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   }).done(success)
//   .fail(failure);
// };
//
// const findGames = (success, failure, val) => {
//   $.ajax({
//     method: 'GET',
//     url: app.api + '/games' + val,
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   }).done(success)
//   .fail(failure);
// };
//
//
//
// const updateGame = (success, failure, data) => {
//   $.ajax({
//     method: 'PATCH',
//     url: app.api + '/games/' + state.gameID,
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     dataProcessing: false,
//     data,
//   }).done(success)
//   .fail(failure);
// };

module.exports = {
  signUp,
  signIn,
  signOut,
  changePass,
  submitComment,
  editComment,
  deleteComment
};
