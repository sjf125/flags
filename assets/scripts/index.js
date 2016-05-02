'use strict';

const events = require('./api/events.js');
// var $ = require('jquery');
require('jquery.lazyload.cjs')($);

// On document ready
$(() => {
  events.addHandlers();
});

const displayFlags = function(flags){
  const flagsTemplate = require('./templates/flag-listing.handlebars');
  // const flagTemplate = require('./templates/flag.handlebars');
  $('.content').append(flagsTemplate({flags}));
  $("img.flags").lazyload({
    effect : "fadeIn"
  });
  $('.flags').on("click", function(){
    $('#flagModal').modal();
    getFlag($(this).data("id"));
  });
};

const getFlags = function(){
  $.ajax({
    url: "http://localhost:3000/flags",
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayFlags(data.flags);
  });
};

const displayFlag = function(flag){
  const display = require('./templates/flag.handlebars');
  $('.flagDisplay').empty();
  $('.flagName').text(function() {return flag.name;});
  $('.flagDisplay').append(display({flag}));
};

const getFlag = function(id){
  console.log(id);
  $.ajax({
    url: "http://localhost:3000/flags/" + id,
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    displayFlag(data.flag);
  });
};

$(document).ready(function(){
  getFlags();
});
