$(function() {

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

//Kolla e-postadressen
function validateEmail(email) 
// let loginEmail = document.getElementById('loginEmail');
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#loginEmail').val()))
  {
    $('#loginEmail').removeClass('is-invalid')
    $('#loginEmail').addClass('is-valid') 
    return (true)
  }
    $('#loginEmail').addClass('is-invalid')
    $('#loginEmail').removeClass('is-valid')
    return (false)
}
//Teckenlängd på lösenord
  function checkPassStrength() {
    let longPassw = document.getElementById('loginPassword').value;
    if(longPassw.length >= 8) {
        $('#loginPassword').addClass('is-valid')
        $('#loginPassword').removeClass('is-invalid')
        return(true)
      } else {
        $('#loginPassword').addClass('is-invalid')
        $('#loginPassword').removeClass('is-valid')
        return(false)
    }
    
    }
  $('#loginForm').submit((e) => {
        e.preventDefault();

        isEmpty('#loginEmail')
        isEmpty('#loginPassword')
        
        checkPassStrength()
        
        if(isEmpty('#loginEmail') && 
        isEmpty('#loginPassword') &&
        checkPassStrength())
       {
        
            window.location.replace('loginthanku.html')
        } else {
            return(false)   
        }
        
    });

}); //RÖR EJ