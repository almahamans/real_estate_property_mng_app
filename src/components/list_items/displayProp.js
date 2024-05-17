import { useEffect , useState, useCallback} from "react";
import ShowProperty from "./showAproperty";
import { useLocation } from "react-router-dom";
//display one property
function DisplayProperty(){
    const [properties, setProperties] = useState([]);
    //to track selected property by its id
    const loc = useLocation();
    const id = loc.state;
    // console.log(id)
    //call api by id 
    const handlePropDisplay = useCallback(async () => {
      try {
        const res = await fetch(`https://66438e8e6c6a656587078f5e.mockapi.io/property/${id}`);
        const data = await res.json();
        setProperties({data});
      } catch (err) {
        return console.log(`there is error ${err}`);
      }
    }, [id])

    useEffect(() => {
      handlePropDisplay()
      },[handlePropDisplay])
    // console.log(properties)
    return(
        <div>
             {
           Object.values(properties).map((x, index)=>  
           <ShowProperty
            key={index++}
            title={x.title}
            price={x.price}
            city={x.city}
            country={x.country}
            location={x.location}
            info={x.info}
            img={x.img}
            />    
            ) 
          }
        </div>
    )
}
export default DisplayProperty;