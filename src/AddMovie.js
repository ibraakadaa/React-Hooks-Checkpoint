import {useRef , useState , useEffect } from'react'



function AddMovie(props) {
    const fileInput=useRef()
    const nameofmovie=useRef();
    const [Data,setData]=useState();
    
    function handlChange(e)
  {
  var file=e.target.files[0]   
      
  
  if(file)
  {
  
  console.log("type :",typeof(file))
  var reader=new FileReader(); 
    reader.onloadend=()=>{ 
     props.add({image: reader.result,  name:nameofmovie.current.value})
      }  
    reader.readAsDataURL(file)
  
  
/*   props.add({
   image:file ,
   name:nameofmovie.current.value
  }) */

  }
  
  }
  
  function addhandlechange(e) {
    e.preventDefault();
   fileInput.current.click(); 
}
    
    
    
    
    
    
    
    return (<div>
    <button onClick ={addhandlechange}  > add
    </button> 
    <img id="img"  />
    <input type="file"    ref={fileInput} style={{display:'none'}} onChange={handlChange} ></input> 
    <h2> the name fo the movie </h2>
    <input tupe="text" placeholder="writethe name here" ref={nameofmovie}  />
    </div>)
  
  }
  export default AddMovie