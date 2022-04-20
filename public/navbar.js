const NavLink = ReactRouterDOM.NavLink;
function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <a id="brand" className="navbar-brand" href="#" title="Go Home">Home</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" 
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <nav className="navbar-nav">
            <li id="login" className="nav-item">
              <a className="nav-link" href="#/login/" title="Log In To Your Account">Login</a>
            </li>
            <li id="CreateAccount" className="nav-item">
              <a className="nav-link" href="#/createaccount/" title="Make a New Account">Create Account</a>
            </li>
            <li id="deposit" className="nav-item">
            <a className="nav-link" href="#/deposit/" title="Put Money In Your Account">Deposit</a>
            </li>
            <li id="withdraw" className="nav-item">
            <a className="nav-link" href="#/widthdraw/" title="Take Money From Your Account">Withdraw</a>
            </li>
            <li id="alldata" className="nav-item">
            <a className="nav-link" href="#/alldata/" title="A Serious Data Breach">All Data</a>
            </li>         
          </nav>
        </div>
        </div>
      </nav>
      </>
    );
  }