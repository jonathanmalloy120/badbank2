function Deposit() {
    const ctx = React.useContext(UserContext)
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [show, setShow] = React.useState(true);
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [amount, setAmount] = React.useState(0)
    const [status, setStatus] = React.useState("")
    const [balanceamt,setBalanceamt] = React.useState(ctx.session.balance)


    function handleDeposit() {
        console.log("handling deposit")
        //check if deposit is valid
        if (!validateDeposit()) {
            return
        };
        //console.log(ctx.users[ctx.session.id])
        ctx.users[ctx.session.id].balance += parseFloat(amount.toFixed(2)); // update users' amount, round to 2 decimal places
        ctx.users[ctx.session.id].transactions.push(`Deposited $${amount}`) // update user's transaction list
        //console.log(ctx.users[ctx.session.id])
        setStatus("")
        setShow(false)

        return true
    };

    function validateDeposit() {
        //check if entered value is a number
        console.log("value of amount",amount)
        console.log("type of amount",typeof amount )
        if (typeof amount !== 'number') {
            setStatus("deposit amount must be a number");
            console.log("bad deposit, not float")
            return false;
        }
        if (amount <= 0) {
            setStatus("Please Deposit a Positive Amount of Money");
            console.log("bad deposit, less than 0")
            return false;
        }

        console.log("good deposit")
        return true;
    }

    function handleAnotherDeposit(){
        setStatus("");
        setAmount(0);
        setShow(true);
        return true
    }

    return(
    <div>
        <Card
            bgcolor = 'primary'
            header = 'Deposit'
            status = {status}
            body = {
                //Money Screen, checks for id property
                ctx.session.id !== null ? (
                    //show controls if they get deposit screen or "Thanks" Screen
                    show ? (
                        <>
                        <h3>You Deposit Money Here</h3>
                        <h5>Balance Amount: {ctx.users[ctx.session.id].balance.toFixed(2)} </h5>
                        Despsit Amount <br/>
                        <input type = "number" className = "form-control" id = "deposit"
                        placeholder = "Enter Deposit Here"  onChange = {e =>setAmount(parseFloat(e.currentTarget.value))}/>
                        <br/>
                        <button type = "submit" className = "btn btn-light" 
                        onClick={handleDeposit} disabled = {(amount === 0)}>Deposit</button>
                        </> 
                    // when show is false, see below
                    ) : (
                        <>
                        <h3 className = "center-message">Thank You, Your Deposit Was Recieved</h3>
                        <h5 className = "center-message">Balance Amount: {ctx.users[ctx.session.id].balance.toFixed(2)} </h5>
                        <button type = "submit" className = "btn btn-light" 
                        onClick={handleAnotherDeposit}>Make Another</button>
                        </>
                    )
                ):
                //not logged in message
                (
                    <>
                    <h3 className = "center-message">You are not logged in</h3>
                    <h5 className = "center-message">Please Log In Before Making a Deposit</h5>
                    </>

                ) }
        />
    </div>
    )
}