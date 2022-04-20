//routing vars
const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const NavLink = ReactRouterDOM.NavLink;
//initialize shared context
const UserContext = React.createContext(null);

//card for use by all
function Card(props) {
    function classes() {
    const bg = props.bgcolor ? ' bg-'+ props.bgcolor : ' ';
    const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
    return 'card mb-3 '+ bg + txt;
    }
return(
    <div id = "card" className= {classes()} >
        <div className="card-header">{props.header}</div>
        <div className="card-body">
            {props.title && (<h5 className="card-title">{props.title}</h5>)}
            {props.text && (<p className="card-text">{props.text}</p>)}
            {props.body}
            {props.status && (<div className="card-status">{props.status}</div>)}
        </div>
    </div>
)
}

const activeClass = (route) => {
    return location.pathname === route ? "active" : null;
}

function Form (props) {
    
}