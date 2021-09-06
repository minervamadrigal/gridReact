import React from "react";
import "../styles/Gallery.css"

const Gallery = props =>{
    const {author, url} = props;
    console.log(url);
    return(
        <div className = "single-card">
            <img src={url} alt={author}/>
            <h1>{author}</h1>
        </div>
    );
};

export default Gallery;