import React from 'react'
import { Header, List, Rating } from 'semantic-ui-react'

export const Movies = ({movies})=>{

    console.log(movies);
    return (
        <List>
            {movies.map(movie =>{
                return(
                    <List.Item key={movie.Title}>
                        <Header>{movie.Title}</Header>
                        <Rating rating={movie["Overall Rating"]} maxRating={10} 
                        disabled />
                    </List.Item>
                );
            })}
        </List>
    );
}