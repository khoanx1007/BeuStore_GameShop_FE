$(document).ready(function(){
    jQuery.validator.addMethod("customEmail", function(value, element) { 
        return this.optional( element ) || /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test( value ); 
      }, "Please enter valid email address!");
    $('#form-1').validate({
        ruler: {
            name : "required",
            email: {
                required:"required",
                email:true,
                customEmail: true
            },
            text:"required"
            
        },
        messages: {
            name: {
                required: "Please enter your name"
            },
            email: {
                required: "Please enter your email",
                email: true,
                customEmail: true
            },
            text : {
                required: "Please write something ",
            }
        }
    })
})