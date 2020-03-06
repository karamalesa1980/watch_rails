document.addEventListener("turbolinks:load", function() {
	$input = $("[data-behavior='autocomplete']")
	
	var options = {
		getValue: "title",
		url: function(phrase) {
			return "/search.json?q=" + phrase;
		},
		categories: [
			{
				listLocation: "products",
				header: "<strong>--Products--</strong>",
			}
		],
		list: {
			onChooseEvent: function() {
				var url = $input.getSelectedItemData().url
				$input.val(" ")
				window.location.href = url
				//Turbolinks.visit(url)
			}
		}
	}
	$input.easyAutocomplete(options)
});

// var options = {
// 	url: "resources/search.json",

// 	categories: [
// 			{   //Category fruits
// 					listLocation: "fruits",
// 					header: "-- Fruits --"
// 			},
// 			{   //Category vegetables
// 					listLocation: "vegetables",
// 					header: "-- Vegetables --"
// 			}
// 	]

// };

// $("#categories-basic").easyAutocomplete(options);

// // var options = {
// // 	url: function(phrase) {
// // 		return "/search?query/=%QUERY%" + phrase + "&format=json";
// // 	},

// // 	getValue: "name"
// // };

// // $("#provider-remote").easyAutocomplete(options);

// // // var products= new Bloodhound({
// // //   datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
// // //   queryTokenizer: Bloodhound.tokenizers.whitespace,
// // //   remote: {
// // //       url: '/search?query/=%QUERY%',
// // //       wildcard: '%QUERY%',
// // //       cache: false
// // //   },
// // // });




// // // products.initialize();

// // // $(document).ready(function(){
// // // $('.typeahead').typeahead({
// // //   // hint: false
// // //   highlight: true
// // // },{
// // //   name: 'products',
// // //   display: 'title',
// // //   limit: 10,
// // //   source: products
// // // });
// // // });



// // // $('.typeahead').bind('typeahead:select', function(ev, suggestion) {
// // //   // console.log(suggestion);
// // //   window.location = '/product/' + encodeURIComponent(suggestion.id);    
// // // });
