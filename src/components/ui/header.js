import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Add from '../utilities/add';
import Delete from '../utilities/delete';
import Edit from '../utilities/edit';
import Property from  '../list_items/property';

function Header(){
return(
    <div>
        <BrowserRouter>
        <header className='p-5 font-bold text-md text-teal-950 flex flex-row flex-nowrap gap-5 justify-center items-center bg-teal-400 '>
       <span><Link to='/list-properties'>List properties</Link></span>
       <span><Link to='/edit-properties'>Edit properties</Link></span>
       <span><Link to='/add-properties'>Add properties</Link></span> 
       <span><Link to='/delete-properties'>Delete properties</Link></span>     
      </header>

      <Routes>
        <Route path="/list-properties" element={<Property />} />
        <Route path="/edit-properties" element={<Edit />} />
        <Route path="/add-properties" element={<Add />} />
        <Route path="/delete-properties" element={<Delete />} />
        <Route render={()=><h1>404: page not found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
)
}
export default Header;