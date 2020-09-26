$(document).ready(function(){

     
    $('#contact-submit').click(function() {            

        //get users list (receiving info)
        console.log("init");
        $.ajax({      
            //127.0.0.1      
            url: "http://localhost:3000/php/contact.php",
            type: "POST",
            data: {
                name: $('#contact-form_name').val(),				   
                email: $('#contact-form_email').val(),
                title: $('#contact-form_subject').val(),
                msg: $('#contact-form_message').val() },			   
            success: function(result) {
                console.log("result");
                
                $('#result-contact-msg').html(result);
               

            
            },
            error: function(error){
                console.log(error);

                $('#result-error-contact-msg').html(result);
            }

        });

        console.log("end");

    });

}); 