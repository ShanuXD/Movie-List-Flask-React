import React , {useEffect, useState} from 'react'
import {Movies} from "./components/Movies"
import "./App.css"
import { Container } from 'semantic-ui-react'
import { MovieForm } from './components/MovieForm'


function App() {

  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    
    // inside of use effect will get error return a promise
    fetch("/movies").then(res=>
      res.json().then(data=>{
        // console.log(data.movies)
        setMovies(data.movies);
      })
    );
  }, []);


  return (
    <Container style={{marginTop:40}}>
      <MovieForm onNewMovie={movie=> 
      setMovies(currentMovies=>[movie, ...currentMovies])
      }/>
      
      <Movies movies={movies} />
    </Container>
     
  );
}

export default App;
