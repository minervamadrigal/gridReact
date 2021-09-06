import React, {useState, useEffect} from "react";

//Components
import Header from "./components/Header";
import Gallery from "./components/Gallery";


const App = () =>  {
  const [text, setText] = useState("No Dark Mode");
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);


  const handleFetchAPI = async () =>{
    try{
      const response = await fetch("https://picsum.photos/v2/list")
      const array = await response.json();
      console.log(array);
      setImage(array);
    }catch(error){
      console.log(error);
    }
  }

  
  useEffect(() => {
    handleFetchAPI();
  }, [page]);

  const handlerNewPage = () => {
    setPage(page + 1)
  };


  return (
    <div className="App">
      <div className = "gallery">
        <Header titulo = "gato1" item = "item1" classCss = "normal-header" setText = {setText}/> 
        <h2>{text}</h2>
        {image.map(image => (
          <Gallery
            key = {image.id}
            url = {image.url}
            author = {image.author}
          />
          ))}
        <button className = "more-btn" onClick = {handlerNewPage}>Cargar Mas</button>
      </div>
    </div>
  );
}

export default App;
