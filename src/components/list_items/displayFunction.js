import { useEffect , useState} from "react";
import Property from './property';
import ShowProperty from "./showAproperty";

function DisplayFunction(){
    const [properties, setProperties] = useState([])

  useEffect(() => {
    const debounce = setTimeout(()=>{
      fetch(`https://66438e8e6c6a656587078f5e.mockapi.io/property`, {
        method: 'GET',
        headers: {'content-type':'application/json'}}
      )
      .then(res => {return res.json()})
      .then(data => {setProperties(data); console.log(data)})
      .catch(err => console.log(err))
    },800)
    return () => clearTimeout(debounce)
  },[])
  
    return(
      <section className='flex flex-row flex-wrap  justify-around'>
         { 
         properties.map((x)=>    
          <Property 
          key={x.id}
          id={x.id}
          title={x.title}
          price={x.price}
          city={x.city}
          country={x.country}
          location={x.location}
          img={x.img}
          />
          )
          }
          {
            properties.map((x)=>
            <ShowProperty
            key={x.id}
            id={x.id}
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
        </section>
    )
    
}

export default DisplayFunction;