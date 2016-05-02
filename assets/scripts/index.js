'use strict';

const events = require('./api/events.js');
var $ = require('jquery');
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
    console.log(id);
    $('#flagModal').modal();
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
  const template = require('./templates/flag.handlebars');
  $('.content').append(template({flag}));
  $('.flags').on("click", function(){
    console.log(localStorage.getItem('flagID'));
    let id = localStorage.getItem('flagID');
    console.log(id);
  });
};

const getFlag = function(id){
  console.log(id);
  $.ajax({
    url: "http://localhost:3000/flags/" + id,
    // method: 'GET',
    // dataType: 'json'
  }).done(function(data){
    console.log(data);
    displayFlags(data.flag);
  });
};

$(document).ready(function(){
  getFlags();
  $("img").lazyload({
    effect : "fadeIn"
  });
});
