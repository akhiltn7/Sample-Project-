function validation(){
    var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;

    var usercheck = /^[A-Za-z.]{3,12}$/ ;
	var passwordcheck = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/ ;
    if(usercheck.test(username)){
        document.getElementById('usererror').innerHTML =" ";
    }else{
        document.getElementById('usererror').innerHTML ="* Username is invalid ";
        return false;
    }
    if( passwordcheck.test(password)){
        document.getElementById('passworderror').innerHTML =" ";
    }else{
        document.getElementById('passworderror').innerHTML ="* Password is invalid ";
        return false;
    }
}
