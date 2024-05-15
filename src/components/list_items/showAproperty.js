function ShowProperty({id, title, price, city, country, location, info, img}){
    return(
        <div>
    <h1 className='font-semibold'><span className='text-red-800 underline'>Title:</span> {title}</h1>
    <p className='mb-2'><span className='text-red-800'>City:</span> {city}</p>
    <p className='mb-2'><span className='text-red-800'>Country:</span> {country}</p>
    <p className='mb-2'><span className='text-red-800'>Location:</span> {location}</p>
    <p className='mb-2'><span className='text-red-800'>Price:</span> {price}</p>
    <p className='mb-2'><span className='text-red-800'>Information:</span> {info}</p>
    <img src={img} alt="property" className='contrast-100 rounded lg:size-44 md:size-36 sm:size-36 xs:size-36 mx-auto'/>
        </div>
    )
}
export default ShowProperty;