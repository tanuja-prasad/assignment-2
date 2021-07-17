import React,{useState} from 'react'

const App = () =>{
    
  let [score , setScore] = useState(0)
return(
     <div>
         <h1 style={{textAlign:"center"}}> COUNTER  APPLICATION </h1>
         <h3> The Value Of Score Is {score} </h3>
         <button onClick={()=>(score<25) ? setScore(score+1) : "cant exceed more  than 25" }> Incremeant</button>
         <button onClick={()=>{setScore(score-1)}}> Decremenet</button>
         <button onClick={()=>{setScore(0)}}> Reset </button>

     </div>

  )

}
export default App

