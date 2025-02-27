
import {ArtGallery} from "../src/ArtGallery/ArtGallery"
import './App.css'

function App() {
var today = new Date();
  var hours = today.getUTCHours();
  var minutes = today.getUTCMinutes();
  
  return (
    <>
      <ArtGallery />
      <p>Галерея!!!{hours}:{minutes } </p>
      
</>

  )
}

export default App
