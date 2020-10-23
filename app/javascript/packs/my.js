
    
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });
document.addEventListener("turbolinks:load", function() {
    $('body').on('click', '.add-to-cart-link', function(e) {
        e.preventDefault();
        var product_id = $(this).data('id'),
            quantity   = $('.quantity input').val() ? $('.quantity input').val() : 1,
            mod        = $('.vailable select').val(),
            access     = $('#cart_access').val();
        
            if(access == 99){
                showCartEmpty()
                return false
            };
            
            $.ajax({
                beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token',
                    $('meta[name="csrf-token"]').attr('content'))},
                url: "/cart/cart_items",
                data: {product_id: product_id, quantity: quantity, mod: mod},
                type: 'POST',
                success: function (res) {
                    showCart(res)
                },
                error: function () {
                    alert('Error! Try later!');
                },

            });
    });

    $('#cart .modal-body').on('click', '.del-item', function(){
        var id = $(this).data('id');
        $.ajax({
            beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token',
                $('meta[name="csrf-token"]').attr('content'))},
            url: "/cart/cart_items/" + id,
            data: {id: id},
            method: 'delete',
            type: 'POST',
            success: function (res) {
                showCart(res)
            },
            error: function () {
                alert('Error!');
            },

        });
    });

    function showCart(cart) {
        if($.trim(cart) === '<td>Cart is Empty</td>'){
            $('#cart .modal-footer a , #cart .modal-footer .btn-danger').css('display', 'none');    
        }else{
            $('#cart .modal-footer a , #cart .modal-footer .btn-danger').css('display', 'inline-block');
        }
        $('#cart .modal-body').html(cart); 
        $('#cart').modal();
        if($('.cart-sum').text()){
            $('.simpleCart_total').html($('#cart .cart-sum').text());
        }else{
            $('.simpleCart_total').text('Empty Cart');
        }
    }

    window.getCart = function () {
        $.ajax({
            url: '/cart',
            type: 'GET',
            success: function(res) {
                showCart(res)
            },
            error: function () {
                alert('Error! Try later!');
            }, 
        });
    }

    function showCartEmpty() {
        var result = {error: 'Please sign in! To view the cart.'}
        var modal  = $('#cart').modal();
        $('#cart .modal-footer a, #cart .modal-footer .btn-danger').css('display', 'none');
        modal.find('.modal-body').html(result.error)
    }

     window.clearCart = function () {
        $.ajax({
            url: '/cart',
            method: 'delete',
            type: 'POST',
            
            success: function (res) {
                localStorage.clear()
                showCart(res)
            },
            error: function () {
                alert('Error!');
            }, 
        });
    }

   

    // // import $ from 'jquery';
    // // var Bloodhound = require('typeahead.js/dist/bloodhound');
    // // // import 'typeahead.js/dist/typeahead.bundle';
    // // // import 'bootstrap-3-typeahead';
    // // // //     // var products = new Bloodhound({
    // // // //     //     datumTokenizer: Bloodhound.tokenizers.whitespace,
    // // // //     //     queryTokenizer: Bloodhound.tokenizers.whitespace,
    // // // //     //     remote: {
    // // // //     //         wildcard: '%QUERY%',
    // // // //     //         url: '/search?query=%QUERY%'        
    // // // //     //     }
    // // // //     // });
    // var products= new Bloodhound({
    // datumTokenizer: Bloodhound.tokenizers.obj.whitespace('value'),
    // queryTokenizer: Bloodhound.tokenizers.whitespace,
    // remote: {
    //     url: '/search?query/=%QUERY%',
    //     wildcard: '%QUERY%',
    //     cache: false
    // },
    // });


        

    //     products.initialize();


    //     $('#typeahead').on('typeahead',function() {
    //         // hint: false
    //         highlight: true
    //     },{
    //         name: 'products',
    //         display: 'title',
    //         limit: 10,
    //         source: products
    //     });




    //     $('#typeahead').bind('typeahead:select', function(ev, suggestion) {
    //         // console.log(suggestion);
    //         window.location = '/product/' + encodeURIComponent(suggestion.id);    
    //     });
    // // // var Bloodhound = require('typeahead.js/dist/bloodhound');
    // // // $(document).ready(function(){
    // // //     // Sonstructs the suggestion engine
    // // //     var products = new Bloodhound({
    // // //         datumTokenizer: Bloodhound.tokenizers.obj.whitespace('query'),
    // // //         queryTokenizer: Bloodhound.tokenizers.whitespace,
    // // //         // The url points to a json file that contains an array of country names
    // // //         prefetch: '/search'
    // // //     });
        
    // // //     products.initialize();
    // // //     // Initializing the typeahead with remote dataset without highlighting
    // // //     $('#typeahead').on('typeahead', {
    // // //         name: 'products',
    // // //         source: products,
    // // //         limit: 10 /* Specify max number of suggestions to be displayed */
    // // //     });
    // // // });

    // // $("#big-search-box").bind("keyup", function() {

    // //     $("#big-search-box").addClass("loading"); // show the spinner
    // //     var form = $("#live-search-form"); // grab the form wrapping the search bar.
    
    // //     var url = "/search/"; // live_search action.   
    // //     var formData = form.serialize(); // grab the data in the form   
    // //     $.get(url, formData, function(html) { // perform an AJAX get
    
    // //       $("#big-search-box").removeClass("loading"); // hide the spinner
    
    // //       $("#live-search-results").html(html); // replace the "results" div with the results
    
    // //     });
    
       }); 