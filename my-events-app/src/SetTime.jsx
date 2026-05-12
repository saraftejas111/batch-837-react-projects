import React from 'react'

const SetTime = () => {

     //  setTimeout(function , time in ms)  // function name without brackets

 let [name , setName] = useState("raj")

 let count = 0 ; 
 function greet () {
  count ++ ; 
  console.log("Greet function... ")
  console.log(count)
 }
 // setTimeout(greet , 2000)  // after 2 seconds

 console.log("Hello JS = ", count)
 
//let id = setInterval(greet , 1000)

   let id = setInterval(() => {
    
    greet() ; 

    if(count > 5 ){
    clearInterval(id) ; 
    }

   }, 1000);


  return (
    <div>
      
    </div>
  )
}

export default SetTime
