// import $ from 'jquery';
// var Bloodhound = require('typeahead.js/dist/bloodhound');
// // import 'typeahead.js/dist/typeahead.bundle';
// // import 'bootstrap-3-typeahead';
// // //     // var products = new Bloodhound({
// // //     //     datumTokenizer: Bloodhound.tokenizers.whitespace,
// // //     //     queryTokenizer: Bloodhound.tokenizers.whitespace,
// // //     //     remote: {
// // //     //         wildcard: '%QUERY%',
// // //     //         url: '/search?query=%QUERY%'        
// // //     //     }
// // //     // });
var products= new Bloodhound({
datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
queryTokenizer: Bloodhound.tokenizers.whitespace,
remote: {
    url: '/search?query/=%QUERY%',
    wildcard: '%QUERY%',
    cache: false
},
});


    

    products.initialize();


    $('#typeahead').on('typeahead',function() {
        // hint: false
        highlight: true
    },{
        name: 'products',
        display: 'title',
        limit: 10,
        source: products
    });




    $('#typeahead').bind('typeahead:select', function(ev, suggestion) {
        // console.log(suggestion);
        window.location = '/product/' + encodeURIComponent(suggestion.id);    
    });
// // var Bloodhound = require('typeahead.js/dist/bloodhound');
// // $(document).ready(function(){
// //     // Sonstructs the suggestion engine
// //     var products = new Bloodhound({
// //         datumTokenizer: Bloodhound.tokenizers.obj.whitespace('query'),
// //         queryTokenizer: Bloodhound.tokenizers.whitespace,
// //         // The url points to a json file that contains an array of country names
// //         prefetch: '/search'
// //     });
    
// //     products.initialize();
// //     // Initializing the typeahead with remote dataset without highlighting
// //     $('#typeahead').on('typeahead', {
// //         name: 'products',
// //         source: products,
// //         limit: 10 /* Specify max number of suggestions to be displayed */
// //     });
// // });

// $("#big-search-box").bind("keyup", function() {

//     $("#big-search-box").addClass("loading"); // show the spinner
//     var form = $("#live-search-form"); // grab the form wrapping the search bar.
  
//     var url = "/search/"; // live_search action.   
//     var formData = form.serialize(); // grab the data in the form   
//     $.get(url, formData, function(html) { // perform an AJAX get
  
//       $("#big-search-box").removeClass("loading"); // hide the spinner
  
//       $("#live-search-results").html(html); // replace the "results" div with the results
  
//     });
  
//   }); 