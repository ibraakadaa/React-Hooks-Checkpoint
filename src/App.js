import {useRef , useState , useEffect } from'react'

import logo from './logo.svg';
import './App.css';
import AddMovie from './AddMovie'
import  Movie from'./Movie'

function App() {
  const [movie,addMovie]=useState([]);
  const [show,setshow]=useState([]);
  const[copy,setcopy]=useState([]);


  function add(newmovie){
  
    addMovie([...movie,newmovie])
  }

// function seturl(data){
//   var reader=new FileReader(); 
//     reader.onloadend=()=>{ 
//      x= reader.result
//       }  
//     reader.readAsDataURL(data)
//     return x
// }


  function showallmovie(){
    setshow (movie.map((elm)=><Movie   src={elm.image} name={ elm.name} /> ))
   }


  return (
    <div >

<input type="text" placeholder="search the name here" onChange={(e)=>{setcopy(movie.filter(elm => elm.name.substr(0,e.target.value.length)===e.target.value))} }/>


     <AddMovie  add={add}    /> 

     <button onClick={showallmovie}>all movie is  </button>
     {show}
     <h1>the selected movie</h1>
     {copy.map((elm)=><Movie   src={elm.image} name={ elm.name} /> )}
    </div>
  );
}

export default App;
