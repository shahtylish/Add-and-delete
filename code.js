$(document).ready(function(){
    $("#add").click(function(){
        var select = "<tr><td><input type='checkbox' name='check'></td><td><input class='name' id='name' type='text' placeholder='Enter your name'></td><td><input class='email' id='email' type='email' placeholder='Enter your email'></td><td><input class='mobile' id='mobile' type='tel' placeholder='Enter your Mobile number'></td></tr>";
        $("#body").append(select);
    });
    
    $("#remove").click(function(){
        $("#body").find('input[name = "check"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    });
    
    $("#save").click(function(){
        var name = $("#name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();
                
        $("#name").replaceWith(name);
        $("#email").replaceWith(email);
        $("#mobile").replaceWith(mobile);
    });
});
