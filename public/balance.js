function Balance() {
    const ctx = React.useContext(UserContext)
    return(
        <div>
            <h3>Balance Component</h3>
            <br/>
            {JSON.stringify(ctx.users)}
        </div>
    )
}