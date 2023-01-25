
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import MovieList from './components/movieList/MovieList';
import Home from './pages/home/Home';
import MovieDetails from './pages/movieDetail/MovieDetails';

function App() {
  return (
    <div className="App">
   <Header/>
     <Routes>
                <Route index element={<Home />}></Route>
      <Route path="movie/:id" element={<MovieDetails/>}></Route> 
                <Route path="movies/:type" element={<MovieList />}></Route> 
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>

   
    </div>
  );
}

export default App;
