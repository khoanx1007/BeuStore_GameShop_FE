$(document).ready(function() {
    $('.incre').click(function (e) {
        var incre_value = $(this).parents('.quantity').find('.qty-in').val();
        var value = parseInt(incre_value);
        if(value<999){
            value++;
            $(this).parents('.quantity').find('.qty-in').val(value);
        }

    });
    $('.decre').click(function (e) {
        var decre_value = $(this).parents('.quantity').find('.qty-in').val();
        var value = parseInt(decre_value);
        if(value>1){
            value--;
            $(this).parents('.quantity').find('.qty-in').val(value);
        }
    });
    $(".formcart").validate({
        rules: {
            country: "required",                    
            rgst: "required",
           zipo: "required"
        },
        messages: {
            country: "Please choose your country",                    
            rgst: "Please choose your region/state",
           zipo: "Please write your zipcode"
        },
         errorPlacement: function(error, element) 
{
    if ( element.is(":radio") ) 
    {
        error.appendTo( element.parents('.form-group') );
    }
    else 
    { // This is the default behavior 
        error.insertAfter( element );
    }
 },
        submitHandler: function(form) {
            form.submit();
        }
        
    });
})    