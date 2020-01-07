$(function(){

    //Kolla om det är tomt i nått fält
    function isEmpty(id) {
        if($(id).val() === '') {
            $(id).addClass('is-invalid')
            $(id).removeClass('is-valid')
            return(false)
            
        } else {
            $(id).removeClass('is-invalid')
            $(id).addClass('is-valid')
            return(true)
        }
    }

    $('input').keyup(function(e) {
        let id = "#" + e.currentTarget.id
        isEmpty(id);
    });

    //Kolla email
    function ValidateEmail(email) 
    {
     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#inputEmail').val()))
      {
        $('#inputEmail').removeClass('is-invalid')
        $('#inputEmail').addClass('is-valid') 
        return (true)
      }
        $('#inputEmail').addClass('is-invalid')
        $('#inputEmail').removeClass('is-valid');
        return (false)
    }

  
 //Teckenlängd på lösenord
    function checkPassStrength() {
    let longPassw = document.getElementById('inputPassword').value;
    if(longPassw.length >= 8) {
        $('#inputPassword').addClass('is-valid')
        $('#inputPassword').removeClass('is-invalid')
        return(true)
      } else {
        $('#inputPassword').addClass('is-invalid')
        $('#inputPassword').removeClass('is-valid')
        return(false)
    }
    
    }
    //Matcha lösenorden
    function validatePass() { 
        let password = document.getElementById('inputPassword').value;
        let confirmPassword = document.getElementById('confirmPassword').value;
        if (password === confirmPassword) {
            $('#confirmPassword').addClass('is-valid')
            $('#confirmPassword').removeClass('is-invalid')
            return (true);
        } else {
            $('#confirmPassword').addClass('is-invalid')
            $('#confirmPassword').removeClass('is-valid')
            return (false);
        }

}

    //Kolla om checkboxen är checkad
    function inCheck() {
    let checkComp = document.getElementById('consentCheck');
       if(checkComp.checked == true){
           $('#consentCheck').removeClass('is-invalid')
           $('#consentCheck').addClass('is-valid')
           return(true)
           
       } else {
        $('#consentCheck').addClass('is-invalid')
        $('#consentCheck').removeClass('is-valid')
        return(false)
       }
   }

   //Kolla om någon radio-button är i klickad
   function radioCheck() {
    let radioComp1 = document.getElementById('customRadio1');
    let radioComp2 = document.getElementById('customRadio2');
    let radioComp3 = document.getElementById('customRadio3');
       if(radioComp1.checked || radioComp2.checked || radioComp3.checked){
           $('#customRadio1').removeClass('is-invalid')
           $('#customRadio1').addClass('is-valid')
           return(true)
           
       } else {
        $('#customRadio1').addClass('is-invalid')
        $('#customRadio1').removeClass('is-valid')
        return(false)
       }
   }


    $('#regForm').submit((e) => {
        e.preventDefault();

        isEmpty('#firstName');
        isEmpty('#lastName');
        isEmpty('#inputEmail');
        isEmpty('#inputPhoneNumber');
        isEmpty('#inputAddress');
        isEmpty('#inputPassword');
        isEmpty('#confirmPassword');
        isEmpty('#inputCity');
        isEmpty('#inputZip');
        isEmpty('#inputCountry');
        isEmpty('#regFormTextarea1');

        checkPassStrength();
        validatePass();
        inCheck();
        radioCheck();

        if(isEmpty('#firstName')&& 
        isEmpty('#lastName') && 
        isEmpty('#inputEmail') && 
        isEmpty('#inputPhoneNumber') && 
        isEmpty('#inputAddress') && 
        isEmpty('#inputPassword') && 
        isEmpty('#confirmPassword') && 
        isEmpty('#inputCity') &&
        isEmpty('#inputZip') && 
        isEmpty('#inputCountry') && 
        isEmpty('#regFormTextarea1') &&  
        checkPassStrength() && 
        validatePass() && 
        inCheck() && 
        radioCheck()) {
            window.location.replace('index2.html')
        } else {
            return(false)
        }
    });

}); // DO NOT DELETE 
