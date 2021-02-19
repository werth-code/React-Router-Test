
import {useEffect} from 'react'
import {
  useParams
} from "react-router-dom";


const PlantDetail = () => {

    const getUrl = "http://localhost:8091/search/"

    const {commonName} = useParams();
    console.log({commonName})

    useEffect(() => {
       fetch(`${getUrl}${commonName}`).then(res => res.json()).then(console.log)
    })
    return (<div><p>{commonName}</p></div>)
}
export default PlantDetail;