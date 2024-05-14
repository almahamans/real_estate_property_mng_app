import Header from "../ui/header";
function App() {
  return (
    <div className="App">
      <Header/>
      <section className="flex flex-row gap-9 justify-center items-center flex-nowrap mt-[10%]">
        <section >
        <p>Welcome to our app</p>
        <p>Check out our properties</p>
        </section>
        <img src="/fb-purchase-property.jpg" alt="property_image" width={'30%'} height={'20%'} />
      </section>
    </div>
  );
}

export default App;
