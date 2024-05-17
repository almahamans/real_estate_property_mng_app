//a component for one property
function ShowProperty({title, price, city, country, location, info, img}){
    return(
        <div className="flex flex-col justify-items-center mx-9 mt-[5%] text-md">
    <h1 className='font-semibold text-lg text-center mt-3 mb-9'><span className='text-teal-950 underline font-bold'>Title:</span> {title}</h1>
    <section className="grid grid-cols-2 grid-row-2 gap-2 pl-[25%]">
    <p className='mb-2  justify-items-start'><span className='text-teal-950'>City:</span> {city}</p>
    <p className='mb-2'><span className='text-teal-950'>Country:</span> {country}</p>  
    <p className='mb-2'><span className='text-teal-950'>Location:</span> {location}</p>
    <p className='mb-2'><span className='text-teal-950'>Price:</span> {price}</p> 
    </section>
    <p className='my-5 mx-[10%] grid justify-items-start'><span className='text-teal-950 underline'>About the property:</span> {info}</p>
    <img src={img} alt="property" className='contrast-100 lg:size-44 md:size-36 sm:size-36 xs:size-36 mx-auto'/>
        </div>
    )
}
export default ShowProperty;