import "./App.css";
import Row from "./components/Row";
import Banner from "./components/Banner";
import request from "./request";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrendingNow} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
