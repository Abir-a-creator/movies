import React from 'react';
import './Movie.css';
import Rating from "./Rating"

export default function Moviecard( { index , film: {name , url , rate , id}}) {
    // console.log("rate" , rate)
    return (
        <div className="movie">
            <div className="movie-area">
               <div  key={index} >
               <img src={url}  style={{width: "150px", height: "250px" }} />

               <Rating rate={rate} />
               

               </div>
            </div>
             
        </div>
    )
}