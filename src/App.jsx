import React from "react";


// import '../src/main.css';
import { Properties } from "./components/properties";
import properties from "./components/propertiesData";
import { AddProperty } from "./components/AddProperty";

const App = () => {
    return (
    // <Properties properties={properties} />
    <AddProperty />
    )
} 

export default App;