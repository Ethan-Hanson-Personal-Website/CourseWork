import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'


//deleted all the old counter code and imports
//imported puppy list from the new data file i made
//
function App() {

  const [puppies, setPuppies] = useState(puppyList);// what i am pretty sure happened was i have made it so the puppy list array is now a constant state that I can now use through react across my whole project.
  console.log(puppies);

  return (
    <>
      <div className="App">
      { 
   puppies.map((puppy) => {
     return <p key={puppy.id}>{puppy.name}</p>//basically generated the list onto my html page via js. Also generated each instances ids.
   })
}
      </div>
    </>
  )
}

export default App
