import DisplayProperty from "./displayProp";
import Confirm from "./confirmMsg";
import {Link} from 'react-router-dom';
//a component for properties
function Properties({id, title, city, country, location, price, img}){
    //delete a property when click on it
    const handleDelete = () => {
        fetch(`https://66438e8e6c6a656587078f5e.mockapi.io/property/${id}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json'}
        }
        )
        // window.location.reload(true);
    }
    const handleAbort = () => {
        return
    }
    //display confirm message before delete
    const confirmDelete = Confirm(
        'Sure you want to delete this property?',
        handleDelete,
        handleAbort,
      );
    return(
    <section className=" mt-9 p-3 w-[30%] bg-inheret text-black rounded-lg flex flex-col justify-around flex-wrap font-sans shadow-lg shadow-current-300/40">
    <section className="flex flex-row justify-between">
    <h1 className='font-semibold'><span className='text-teal-950 underline'>Title:</span> {title}</h1>
    <span className="text-red-500 text-sm font-thin cursor-pointer" onClick={confirmDelete} >DELETE</span>
    </section>
    <p className='mb-2'><span className='text-teal-950'>City:</span> {city}</p>
    <p className='mb-2'><span className='text-teal-950'>Country:</span> {country}</p>
    <p className='mb-2'><span className='text-teal-950'>Location:</span> {location}</p>
    <p className='mb-2'><span className='text-teal-950'>Price:</span> {price}</p>
    <img src={img} alt="property" className='contrast-100 rounded lg:size-44 md:size-36 sm:size-36 xs:size-36 mx-auto mt-3'/>
    {/* redirect to page that displays selected property */}
    <Link to={'/show-property'} component={<DisplayProperty />} state={id} className={'text-red-400 font-bold text-center'}>more info</Link>
    </section>  
    )

}
export default Properties;