'use strict';

const authApi = require('./api/ajax.js');
const authUi = require('./api/ui.js');

const clickHandlers = function() {
  $('#cancel-comment, #new-comment, #edit-comment').on('click', function() {
    $('#comment-field, #new-comment, #edit-comment').addClass('hidden');
  });
  $('#show-comment-field').on('click', function() {
    $('#comment-field, #new-comment').removeClass('hidden');
    $('#edit-comment').addClass('hidden');
    $('#comment').val('');
  });
  // $('#submit-rating').on('click'), function() {
  //   let score = $('input[name="myrating"]:checked').val();
  // });
  $('.edit-comment').on('click', function() {
    $('#comment-field, #edit-comment').removeClass('hidden');
    let id = $(this).parent().parent().data("id");
    let content = $(this).parent().parent().find('.comment-content').text();
    $('#comment').val(content).focus();
    $('#new-comment').addClass('hidden');
    $('#edit-comment').data("id", id).removeClass('hidden');
  });
  $('.delete-comment').on('click', function() {
    $(this).addClass('hidden');
    $(this).parent().find('.delete-confirm').removeClass('hidden');
  });
  $('.delete-comment-yes').on('click', function(event) {
    let id = $(this).data("id");
    console.log(id);
    $(this).parent().parent().parent().fadeOut(500);
    event.preventDefault();
    authApi.deleteComment(authUi.success, authUi.failure, id);
  });
  $('.delete-comment-no').on('click', function() {
    $(this).parent().addClass('hidden');
    $(this).parent().parent().find('.delete-comment').removeClass('hidden');
  });
};

module.exports = {
  clickHandlers
};
