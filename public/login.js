function Login() {
    const ctx = React.useContext(UserContext);
    const [status, setStatus] = React.useState("Please Log In");
    const [loginAttempted, setLoginAttempted] = React.useState(false);
    const [userfound, setUserFound] = React.useState(false);
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = React.useState("");


    function handleLogin() {
        console.log("login Handled")
        console.log(userName);
        console.log(password)
        //gets account if username and password work
        const users = ctx.users;
        //const account = users.filter(account => (account.name.toLowerCase() === userName.toLowerCase()) && (account.password === password));
        const userIndex = users.findIndex((obj => (obj.name.toLowerCase() === userName.toLowerCase()) && obj.password === password))
        //users[userIndex].balance = 555; // this hits the global context YAY
        console.log(userIndex);
        //if we found an account matching name and
        if (userIndex >= 0) {
            console.log("found user at index: ", userIndex)
            //set vars for person who is logged in
            ctx.session.id = users[userIndex].id; // make user available for later in context
            ctx.session.name = users[userIndex].name;
            ctx.session.email = users[userIndex].email;
            ctx.session.password = users[userIndex].password;
            ctx.session.balance = users[userIndex].balance;

            setUserFound(true) // update we found someone for this screen
            setStatus("")
            
        } else {
            console.log("did not find user")
            setStatus("")
        }
        setLoginAttempted(true);;
    };

    function handleReturn() {
        setLoginAttempted(false);
        setStatus("Please Log In")
        setUserName("")
        setPassword("")
    }

    return(
    <div>
        <Card
            bgcolor = {(loginAttempted && !userfound) ? 'danger' :
            (loginAttempted && userfound) ? 'success' :
            'primary'} //sets red, green, or blue based on status
            header = 'Login'
            status = {status}
            body = {
                //log in screen, must log in to proceed
                !loginAttempted ? ( // checks to see if login was attempted, if not present login screen
                <>
                Name <br/>
                <input type = "input" className = "form-control" id = "name"
                placeholder = "Enter Name" value = {userName} onChange = {e =>setUserName(e.currentTarget.value)}/>
                Password <br/>
                <input type = "input" className = "form-control" id = "password"
                placeholder = "Enter Password" value = {password} onChange = {e =>setPassword(e.currentTarget.value)}/>
                <br/>
                <button type = "submit" className = "btn btn-light"
                onClick = {handleLogin} disabled = {(userName == '' && password == '')}>Log In</button>
                </>
                //if we found them, show success screen
                ) : userfound ? ( 
                    <>
                    <h3 className = "center-message"> Welcome {ctx.users[ctx.session.id].name} </h3>
                    <h3 className = "center-message"> Enjoy the Bank </h3>
                    </>
                // if no account found, go back
                ) : ( 
                    <>
                    <h3 className = "center-message">No Account Matching That Description was Found</h3>
                    <button type = "submit" className = "btn btn-light"
                    onClick = {handleReturn}>Try Again</button>
                    </>
                )
                
            }
        />
    </div>
    )
}