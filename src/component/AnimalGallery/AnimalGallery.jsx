import AnimalList from "../AnimalList/AnimalList.jsx";
import "./AnimalGallery.css"

function AnimalGallery() {
    return (
        <div className="animal-gallery-wrapper">
            <h1 className="animal-gallery-heading">Raman's Gallery</h1>
            <AnimalList />
        </div>
    )
}

export default AnimalGallery;