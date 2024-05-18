import { useState} from "react";

function Add(){
    const [data, setData] = useState({
        title: '',
        city: '',
        country: '',
        location: '',
        price: '',
        info: '',
        image: ''
    });    
    const handlePost = () => {
        fetch(`https://66438e8e6c6a656587078f5e.mockapi.io/property`, {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body:JSON.stringify(data)}
        )
        alert('Property Added');
    }
    const handleChangeAdd = (e) => {
        e.preventDefault()
        setData(prev => ({ ...prev, [e.target.name]: e.target.value }))    
    } 
//    console.log(data)
    return(
        <div className="flex flex-col justify-center items-center gap-5 my-5">
            <h1 className="text-teal-950 text-center my-9 text-lg font-bold">Adding a new property:</h1>
            <form>
        <section className="grid justify-center items-center gap-5 ">
        <section className="flex flex-row gap-2">    
        <label htmlFor="title" className="block text-md font-medium leading-6 text-teal-950">Title:</label>
        <input type="text" name="title" id="title" onChange={handleChangeAdd} className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required/>
        </section>
        <section className="flex flex-row gap-2">
        <label htmlFor="city" className="block text-md font-medium leading-6 text-teal-950">City:</label>
        <input type="text" name="city" id="city" pattern="^[a-zA-Z ]*$" onChange={handleChangeAdd}  className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required/>
        </section>
        <section className="flex flex-row gap-2">
        <label htmlFor="country" className="block text-md font-medium leading-6 text-teal-950">Country:</label>
        <input type="text" name="country" id="country" pattern="^[a-zA-Z ]*$" onChange={handleChangeAdd} className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required/>
        </section>
        <section className="flex flex-row gap-2">
        <label htmlFor="location" className="block text-md font-medium leading-6 text-teal-950">Location:</label>
        <input type="text" name="location" id="location" onChange={handleChangeAdd}  className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required/>
        </section>
        <section className="flex flex-row gap-2">
        <label htmlFor="price" className="block text-md font-medium leading-6 text-teal-950">Price:</label>
        <input type='number' name="price" id="price" onChange={handleChangeAdd}  className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required/>
        </section>
        <section className="flex flex-row gap-2">
        <label htmlFor="info" className="block text-md font-medium leading-6 text-teal-950">Information:</label>
        <textarea type="text" name="info" id="info" onChange={handleChangeAdd} className="block flex-1 border-2 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" required/>
        </section>
        <section className="flex flex-row gap-2">
        <label htmlFor="img" className="block text-md font-medium leading-6 text-teal-950">Image:</label>
        <input id="image-upload" name="image-upload" onChange={handleChangeAdd} formTarget='image' type='file' alt="property image" className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" required/>
        </section>
        </section>
        </form>
        <button type="submit" onClick={()=>{handlePost();}} className="rounded-md bg-teal-400 px-3 py-2 my-5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"> Add </button>
            
        </div>
    )
}
export default Add;