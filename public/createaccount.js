function Createaccount() {
    //create varisables needed to create an account
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    //get handle on global context
    //old code, removed when updating to server-side
    //const ctx = React.useContext(UserContext)

    //create a new account with $100 when new account button is pushed
    function handleCreate() {
        //if any fields do not validate return from this function
        if (!validate(name, 'name'))            return;
        if (!validate(email, 'email'))          return;
        if (!validate(password, 'password'))    return;
        //old code, updateing to server side
        //ctx.users.push({id: ctx.users.length, name:name, email:email, password:password, balance:100,transactions:["Account Created"]});
        //ctx.session.id = null;
        //console.log(ctx.users)
        //new server code
        console.log(name,email,password);// print fields
        const url = `/account/create/${name}/${email}/${password}`; //go to url with params
        (async () =>{
            var res = await fetch(url); //wait for it to actually get response form url with params
            var data = await res.json(); //get data bask from response
            console.log(data) //print data we got back
        })();
        setShow(false)
    }

    //reset all states and go back to original form
    function clearForm() {
        setName('');
        setEmail('');
        setPassword('')
        setShow(true);
    }

    //validate field inputs COME BACK TO THIS
    function validate(field,label) {
        if (!field) {
            setStatus("Error: " + label + " cannot be blank");
            return false;
        }
        //if the above doesn't happen return true
        if(label == 'password' && field.length <8){
            setStatus("Error: " + label + " must be at least 8 charecters long")
            return false;
        }
            setStatus("")
            return true
    }

    return(
        <Card
            bgcolor = 'primary'
            header = 'Create Account'
            status = {status}
            body = {show ? (
                <>
                Name <br/>
                <input type = "input" className = "form-control" id = "name"
                placeholder = "Enter Name" value = {name} onChange = {e =>setName(e.currentTarget.value)}/>
                Email <br/>
                <input type = "input" className = "form-control" id = "email"
                placeholder = "Enter Email" value = {email} onChange = {e =>setEmail(e.currentTarget.value)}/>
                Password <br/>
                <input type = "input" className = "form-control" id = "password"
                placeholder = "Enter Password" value = {password} onChange = {e =>setPassword(e.currentTarget.value)}/><br/>
                <button type = "submit" className = "btn btn-light" disabled = {(name == '' && password == '' && email == '')}
                onClick={handleCreate}>Create Account</button>
                </>
            ):(
                <>
                <h3 className = "center-message">Thank you for creating an account</h3>
                <button type = "submit" className = "btn btn-light"
                onClick = {clearForm}>Add Another Account</button>
                </>
            )}
        />
    )
}