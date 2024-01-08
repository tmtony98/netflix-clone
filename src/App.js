import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './requests';

function App() {
  //  fetchUrl={requests.fetchNetflixOriginals} == /discover/tv?api_key=${APIKEY}&with_networks=213

  return (
   <>
   <Banner fetchUrl={requests.fetchNetflixOriginals}/>
    <Row isposter={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title="Trending in India" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
   </>
  );
}

export default App;
