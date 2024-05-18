import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Add from '../utilities/add';
import DisplayFunction from  '../list_items/displayFunction';
import Main from '../home_page/main';
import DisplayProperty from "../list_items/displayProp";

function Header(){
return(
    <div>
      <BrowserRouter>
       <header className='p-5 font-bold text-md text-teal-950 flex flex-row flex-nowrap gap-5 justify-center items-center bg-teal-400 '>
       <span><Link to='/'>Home</Link></span>
       <span><Link to='/list-properties'>List properties</Link></span>
       <span><Link to='/add-properties'>Add properties</Link></span>    
      </header>

      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/list-properties" element={<DisplayFunction />} />
        <Route path="/add-properties" element={<Add />} />
        <Route path="/show-property" element={<DisplayProperty />} />
        <Route render={()=><h1>404: page not found</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
)
}
export default Header;