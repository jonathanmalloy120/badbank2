function Home() {
    const ctx = React.useContext(UserContext)
    return(
        <Card
            txtcolor = "white"
            bgcolor = "primary"
            header = {(<div id = "homeheader" >Welcome to Bad Bank</div>)}
            title = {(<div id = "homeTitle" >The Struggle is Real Here at Bad Bank</div>)}
            text = ""
            body = {(<img src = "img/bank2.png" className = "img-fluid" alt = "Image Here"/>)}
            status = {(<div id = "homeStatus" >We Promise Not to Steal From You</div>)}
            alt = "this is alternative displays if an image fails to load (doesn't show up unless error)"
        />

    )
}