import DisplayProperty from "./displayProp";
import {Link} from "react-router-dom";
import Confirm from "./confirmMsg";

function Property({id, title, city, country, location, price, img}){
    const handleClick = (props) => {
        return(
           <DisplayProperty props={props} />
        )
    }
    const handleDelete = () => {
        fetch(`https://66438e8e6c6a656587078f5e.mockapi.io/property/${id}`, {
            method: 'DELETE', headers: { 
                'Content-type': 'application/json'
            } }
        )
        window.location.reload(true)
    }
    const handleAbort = () => {
        return
    }
    const confirmDelete = Confirm(
        'Sure?',
        handleDelete,
        handleAbort,
      );
    return(
    <section className=" mt-9 p-3 w-60 bg-inheret text-black rounded-lg flex flex-col justify-around flex-wrap font-sans shadow-lg shadow-current-300/40">
    <section className="flex flex-row justify-between">
    <h1 className='font-semibold'><span className='text-teal-950 underline'>Title:</span> {title}</h1>
    <span className="text-red-500 text-sm font-thin cursor-pointer" onClick={confirmDelete} >delete</span>
    </section>
    <p className='mb-2'><span className='text-teal-950'>City:</span> {city}</p>
    <p className='mb-2'><span className='text-teal-950'>Country:</span> {country}</p>
    <p className='mb-2'><span className='text-teal-950'>Location:</span> {location}</p>
    <p className='mb-2'><span className='text-teal-950'>Price:</span> {price}</p>
    <img src={img} alt="property" className='contrast-100 rounded lg:size-44 md:size-36 sm:size-36 xs:size-36 mx-5'/>
    <button id={id} onClick={(e) =>  handleClick(e)}>
        <Link to='/show-property' className={'text-red-400'}> more info</Link>
    </button>
    </section>  
    )

}
export default Property;