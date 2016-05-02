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
  $('.flags').on("click", function(){
    localStorage.setItem('flagID',$(this).data("id"));
    let id = localStorage.getItem('flagID');
    $('#flagModal').modal();
    getFlag(id);
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
  // $('.flags').on("click", function(){
  //   console.log(localStorage.getItem('flagID'));
  //   let id = localStorage.getItem('flagID');
  //   console.log(id);
  // });
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
  $("img").lazyload({
    effect : "fadeIn"
  });
});
