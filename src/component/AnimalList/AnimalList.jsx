import "./AnimalList.css"
import axios from "axios";
import { useEffect, useState } from "react";
import AnimalDetails from "../AnimalDetails/AnimalDetails";
import Animal from "../Animal/Animal";
function AnimalList() {
    const [browserUrl, setBrowserUrl] = useState("https://api.slingacademy.com/v1/sample-data/photos");
    const [offset, setOffset] = useState(0);
    const [animalList, setAnimalList] = useState([]);
    

    async function getAnimalList() {
        const { data } = await axios.get(`${browserUrl}?offset=${offset}&limit=20`);
        console.log(data);

        setAnimalList(data.photos);
        console.log(animalList)

    }

    useEffect(()=> {
        getAnimalList()
    }, [offset, browserUrl])


    return (
        <>
        <div className="animal-list-wrapper">

            {animalList.map((animal)=> {
                return (
                    <Animal url={animal.url} title={animal.title} desc={animal.description} id={animal.id} key={animal.id} />
                    )
                })}

        </div>
        <div className="btns">
                <button className="btn" onClick={()=>{if(offset != 0) setOffset(offset - 20)}}>Prev</button>
                <button className="btn" onClick={()=>{setOffset(offset + 20)}}>Next</button>
        </div>
        </>
    )
}

export default AnimalList;