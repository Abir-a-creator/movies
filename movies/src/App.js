import React,{ useState}  from "react"
import './App.css';
import AddMovie from "./Components/AddMovie";
import Moviecard from "./Components/MovieCard";
import {moviesData} from "./Components/MovieData"
import MovieList from "./Components/MovieList";


import Navbar from "./navBar/Navbar"
import Info from "./Components/Info"

function App() {

  const [movie , setMovie] =  useState(moviesData) ;
  const [name , setName] =  useState("") ;
  const [ratingSearch , setRatingsearch] = useState("");

  const addMv = (e , newmovie)=> {
    e.preventDefault() ;
    return setMovie([...movie, newmovie]) 
  }
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      <MovieList/>
      <AddMovie/>
      <Info/>
      <Moviecard/>
      
     
    
      </header>
    </div>
  );
}

export default App;
