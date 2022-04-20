function Widthdraw() {
    const ctx = React.useContext(UserContext)
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [show, setShow] = React.useState(true);
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [amount, setAmount] = React.useState(0)
    const [status, setStatus] = React.useState("")
    const [balanceamt,setBalanceamt] = React.useState(ctx.session.balance)

    function handleWidthdrawal() {
        console.log("handling Widthdraw")
        //check if Widthdraw is valid
        if (!validateWidthdrawal()) {
            return
        };
        //console.log(ctx.users[ctx.session.id])
        ctx.users[ctx.session.id].balance -= parseFloat(amount.toFixed(2)); // update users' amount, round to 2 decimal places
        ctx.users[ctx.session.id].transactions.push(`Widthdrew $${amount}`) // update user's transaction list
        //console.log(ctx.users[ctx.session.id])
        setStatus("")
        setShow(false)

        return true
    };

    function validateWidthdrawal() {
        //check if entered value is a number
        console.log("value of amount",amount)
        console.log("type of amount",typeof amount )
        if (typeof amount !== 'number') {
            setStatus("Withdrawal amount must be a number");
            console.log("bad Widthdrawal, not float")
            return false;
        }
        //check value is greater than 0
        if (amount <= 0.01) {
            setStatus("Please Widthdraw at least $0.01");
            console.log("bad Widthdrawal, less than 0")
            return false;
        }
        //check user has enough money
        if (amount > ctx.users[ctx.session.id].balance) {
            setStatus("You do not have enough money");
            console.log("bad Widthdrawal, overdraft")
            return false;
        }
        console.log("good Widthdrawal")
        return true;
    }

    function handleAnotherWidthdrawal(){
        setStatus("");
        setAmount(0);
        setShow(true);
        return true
    }


    return(
    <div>
        <Card
            bgcolor = 'primary'
            header = 'Withdraw'
            status = {status}
            body = {
                //Money Screen, checks for id property
                ctx.session.id !== null ? (
                    //show controls if they get deposit screen or "Thanks" Screen
                    show ? (
                        <>
                        <h3>You Withdraw Money Here</h3>
                        <h5>Balance Amount: {ctx.users[ctx.session.id].balance.toFixed(2)} </h5>
                        Withdrawal Amount <br/>
                        <input type = "number" className = "form-control" id = "withdraw"
                        placeholder = "Enter Withdrawal Here"  onChange = {e =>setAmount(parseFloat(e.currentTarget.value))}/>
                        <br/>
                        <button type = "submit" className = "btn btn-light" 
                        onClick={handleWidthdrawal} disabled = {(amount === 0)}>Withdraw</button>
                        </> 
                    // when show is false, see below
                    ) : (
                        <>
                        <h3 className = "center-message">Thank You, Your Widthdrawal Was Processed</h3>
                        <h5 className = "center-message">Balance Amount: {ctx.users[ctx.session.id].balance.toFixed(2)} </h5>
                        <button type = "submit" className = "btn btn-light" 
                        onClick={handleAnotherWidthdrawal}>Make Another</button>
                        </>
                    )
                ):
                //not logged in message
                (
                    <>
                    <h3 className = "center-message">You are not logged in</h3>
                    <h5 className = "center-message">Please Log In Before Making a Withdrawal</h5>
                    </>

                ) }
        />
    </div>
    )
}