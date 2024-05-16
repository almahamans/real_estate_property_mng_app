import { useEffect , useState} from "react";
import ShowProperty from "./showAproperty";

function DisplayProperty(p){
    const [properties, setProperties] = useState([]);
    
    useEffect(() => {
        const debounce = setTimeout(()=>{
          fetch(`https://66438e8e6c6a656587078f5e.mockapi.io/property`, {
            method: 'GET',
            headers: {'content-type':'application/json'}}
          )
          .then(res => {return res.json()})
          .then(data => {setProperties(data); console.log(data)})
          .catch(err => console.log(err))
        },100)
        return () => clearTimeout(debounce)
      },[])

    return(
        <div>
             {
            properties.map((x)=> 
            // {return (props === x.id)? 
           <ShowProperty
            key={x.id}
            title={x.title}
            price={x.price}
            city={x.city}
            country={x.country}
            location={x.location}
            info={x.info}
            img={x.img}
            />   
            // :'error'}  
            ) 
          }
        </div>
    )
}
export default DisplayProperty;