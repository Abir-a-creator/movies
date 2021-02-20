import React from 'react'


export default function Info(props) {
    let id = useParams();
    console.log(id)
    let data = props.movie.find((el) => 
  
      el.id == id.id
    );
    return (
        <div>
            <h1>{data.name}</h1>
        </div>
    )
}