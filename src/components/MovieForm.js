import React, { useState } from 'react';
import { Button, Form, Input, Rating } from 'semantic-ui-react';

export const MovieForm = ({onNewMovie})=>{
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(1);

    return (
        <Form>
            <Form.Field>
                <Input placeholder="Movie Title" 
                value={title} 
                onChange={e=>setTitle(e.target.value)}/>
            </Form.Field>

            <Form.Field>
                <Rating icon="star" 
                rating={rating}
                maxRating={10}
                onRate={(_, data)=>{
                    // console.log(data.rating);
                    setRating(data.rating)
                }} ></Rating>
            </Form.Field>

            <Form.Field>
                <Button
                onClick={async()=>{
                    const movie = {title, rating};
                    const res = await fetch('add_movies',{
                        method:'POST',
                        headers: {
                            'Content-Type': "application/json"
                        },
                        body: JSON.stringify(movie)
                    })

                    if(res.ok){
                        onNewMovie=movie;
                        console.log("response working");
                        setTitle('');
                        setRating(1);
                    } 

                }} >
                    Submit
                </Button>
            </Form.Field>
        </Form>
    );
};