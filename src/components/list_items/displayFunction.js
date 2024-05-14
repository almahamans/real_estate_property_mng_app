import { useEffect , useState} from "react";

function displayFunction(){
    const [propertyImage, setPropertyImage] = useState('')

  useEffect(()=>{
    const debounce = setTimeout(()=>{
      fetch(`https://66438e8e6c6a656587078f5e.mockapi.io/property/image`)
      .then(res => res.json())
      .then(data => setPropertyImage(data))
    },800)
    return () => clearTimeout(debounce)
  },[])

    return(
        <div>

        </div>
    )
}

export default displayFunction;