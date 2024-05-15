import {Link} from "react-router-dom";

function Main() {
  return (
    <div className="App">
      <section className="flex flex-row gap-9 justify-center items-center flex-nowrap mt-[10%] md:flex-col sm:flex-col">
      <img src={require('./fb-purchase-property.jpg')} alt="property_image" width={500} height={500}  className="md:w-[50%] sm:w-[80%]"/>
        <section>
        <p>Welcome to our app, to help you find the Dream house</p>
        <p>Check out <Link to='/list-properties'>our properties</Link></p>
        </section>
      </section>
    </div>
  );
}

export default Main;
