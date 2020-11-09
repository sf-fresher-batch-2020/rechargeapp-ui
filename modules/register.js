class RegisterForm
{
    register(userObj)
    {
        var usersTemp = JSON.parse(localStorage.getItem("REGISTERED_USERS"));
        var users= usersTemp ? usersTemp:[];
        users.push(userObj);
        localStorage.setItem("REGISTERED_USERS",JSON.stringify(users));
        let result="success"
        return result;
    }
   
}