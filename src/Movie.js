
function Movie(props)
{ 
  // var x =props.fn(props.src)  
  // console.log(x)
    return( <div > {console.log("from moviejs",props.src)}
      <img src={props.src}  ></img>
    <p> {props.name}</p>
    
    </div>)
 
}



export default Movie 