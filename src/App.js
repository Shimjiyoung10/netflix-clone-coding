import Navigation from "./components/navigation";
import Billboard from "./components/billboard";
import Rows from "./components/rows";
import Footer from "./components/footer";
import requests from "./api/request";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Billboard/>
      <Rows fetchUrl={requests.fetchTrending} title="넷플릭스 인기 콘텐츠"/>
      <Rows fetchUrl={requests.fetchNetflixOriginals} title="넷플릭스 오리지널"/>
      <Rows fetchUrl={requests.fetchTopRated} title="지금 뜨는 콘텐츠"/>
      <Rows fetchUrl={requests.fetchActionMovies} title="액션 영화"/>
      <Rows fetchUrl={requests.fetchComedyMovies} title="코메디 영화"/>
      <Rows fetchUrl={requests.fetchHorrorMovies} title="호러 영화"/>
      <Rows fetchUrl={requests.fetchRomanceMovies} title="로맨스 영화"/>
      <Rows fetchUrl={requests.fetchDocumentaries} title="다큐멘터리"/>
      <Footer/>
    </div>
  );
}

export default App;