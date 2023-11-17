import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./AnimalDetails.css"
function AnimalDetails() {
    const {id} = useParams();
    const [animaldata , setAnimaldata] = useState({});
    const browserUrl = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;
    async function getAnimalDetail() {
        const {data} = await axios.get(browserUrl);
        console.log(data);
        setAnimaldata({
            url: data.photo.url,
            title: data.photo.title,
            desc: data.photo.description
        });
        console.log(animaldata)
    }

    useEffect(()=>{
        getAnimalDetail()
    }, [])
    return (
        <div className="animal-details-wrapper">
            <img src={animaldata.url} className="animal-image"/>
            <div className="animal-details">
                <h2 className="details heading">{animaldata.title}</h2>
                <p className="details desc">{animaldata.desc}</p>
            </div>
            
        </div>
    )
}
export default AnimalDetails;