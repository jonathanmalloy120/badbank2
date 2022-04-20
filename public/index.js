// URL: https://jonmitclass-badbankbucket.s3.amazonaws.com/index.html#/

function Spa() {
    return (
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value = {{
                users: [{id: 0, name:'Jon',email:'Jon@jonmail.com', password:'awesome', balance:101, transactions:['Account Created']}],
                session : {id:null}
            }}>
                <div className="container" style={{padding: "20px"}}>
                    <Route path = "/" exact component={Home} />
                    <Route path = "/alldata/" exact component={Alldata} />
                    <Route path = "/balance/" exact component={Balance} />
                    <Route path = "/createaccount/" exact component={Createaccount} />
                    <Route path = "/deposit/" exact component={Deposit} />
                    <Route path = "/login/" exact component={Login} />
                    <Route path = "/widthdraw" exact component={Widthdraw} />
                </div>
            </UserContext.Provider>
        </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );