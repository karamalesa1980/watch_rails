
//import 'packs/js/jquery.bxslider.js';
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
//require("jquery")
//require("flexslider")
//require('admin-lte')

//var $ = require('jquery');
// window.jQuery = $;
// window.$ = $;
//import 'packs/js/jquery-1.11.0.min.js';
import 'bootstrap';
import '../styles/application.scss';
import './js/jquery.easydropdown.js';
import './js/imagezoom.js';
import './js/responsiveslides.min.js';
import './js/memenu.js';

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

require.context('../styles/images', true)
//export const image_pack_tag = (name) => images(name, true)
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
//const images = require.context('../styles/images', true)
//export const imagePath = (name) => images(name, true)
//import 'bootstrap-sass';

//import 'packs/js/jquery.flexslider.js';
//import 'packs/js/slideshow.js';
//import 'packs/js/flexs.js';
//import 'packs/js/bootstrap.min.js';
