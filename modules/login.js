class login
{
loginFunction= function(email,password){
        var usersTemp = JSON.parse(localStorage.getItem("REGISTERED_USERS"));
        var users= usersTemp ? usersTemp:[];
        //var userid;
        let exists=false;
        for( let obj of users)
        {
            //userid=JSON.stringify(obj.user);
            if(obj.email == email && obj.password == password)
            {
                exists=true;
                localStorage.setItem("LOGGED_IN_USER",JSON.stringify(obj));
                break;
            }

        }
        return exists;

}
}
