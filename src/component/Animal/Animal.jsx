import "./Animal.css"
import { Link } from "react-router-dom";

function Animal({url, title, desc, id}) {

    return (
        <Link to={`/photo/${id}`} >
        <div className="animal-wrapper">
            <img src={url} className="animal-list-image"/>
        </div>
        </Link>
    )
}

export default Animal;