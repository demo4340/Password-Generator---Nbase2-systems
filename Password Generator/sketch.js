var char = "975abC45fghijklMNopqrstuvwxyz@#$%&*ABcDEFGHIJKL!OPQRSTUVWXYZ123de680";
var len = char.length;
var password = "";
var min_length = prompt("Enter the min length of the password which is not less than 4 : ")
var maxLength = prompt("Enter the max length");
var rand;


   
        if(min_length >= 4){
            for(var i = maxLength; i > 0; i--){
                rand = Math.floor(Math.random()*char.length);
                password+=char.substring(rand, rand+1);
            }
            console.log(password)
            alert("Your password is : " + password);
        }
        else {
            console.log("Password should be atleast 4 characters long");
            //document.write("Password should be atleast 4 characters long");
            alert("Password should be atleast 4 characters long")
        }
        
   

    


