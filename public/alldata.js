function Alldata() {
    //const ctx = React.useContext(UserContext) //removed when hooking up to server
    const [data,setData] = React.useState('');

    React.useEffect(() => {

        //get data from all accounts
        fetch('/account/all') //fetch data
        .then(response => response.json()) //then convert rersponse to json
        .then(data => {
            console.log(data); //write back what we got
            setData(JSON.stringify(data));
        });
    },[]); //how useffect works, only re-render it once when page is loaded

    return(
    <div>
        <Card 
            bgcolor = 'primary'
            header = 'All Data'
            status = {""}
            body = {
                <>
                <h5>All Data</h5>
                {data} 
                </>
                /* all old when using ctx
                ctx.session.id !== null ? (
                    <>
                <table className="table table-striped table-dark table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Transaction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ctx.users[ctx.session.id].transactions.map((transaction, index) => (
                                <tr key = {index}>
                                    <td>{index+1}</td>
                                    <td>{ctx.users[ctx.session.id].name}</td>
                                    <td>{ctx.users[ctx.session.id].email}</td>
                                    <td>{transaction}</td>
                                </tr>
                            ))}

                    </tbody>
                </table>
                </>
                ) : (
                    <>
                    <h3 className = "center-message">You are not logged in</h3>
                    <h5 className = "center-message">Please Log In Before Viewing Data</h5>
                    </>
                )
            */
            }
            />
    </div>
    )
}