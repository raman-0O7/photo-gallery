import {Routes, Route} from "react-router-dom";
import AnimalGallery from "../component/AnimalGallery/AnimalGallery.jsx"
import AnimalDetails from "../component/AnimalDetails/AnimalDetails.jsx";
function CustomRoutes() {
    return (
        <Routes>
            <Route path="/" element={<AnimalGallery />}/>
            <Route path="photo/:id" element={<AnimalDetails />}/>
        </Routes>
    )
}

export default CustomRoutes;