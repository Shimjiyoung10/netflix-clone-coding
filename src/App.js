import Navigation from "./components/navigation";
import Billboard from "./components/billboard";
import Rows from "./components/rows";
import Footer from "./components/footer";
import requests from "./api/request";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Billboard/>
      <Rows fetchUrl={requests.fetchRomanceMovies} title="Romance Movies"/>
      <Footer/>
    </div>
  );
}

export default App;