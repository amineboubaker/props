import "./App.css";
import Profile from "./components/Profile";
import pic from './components/20201123_091151.jpg'



function App() {
  
  const fullName = "Moahmed Amine Boubaker";
  
  
  const bio = `24 years old,from Tunisia Sfax`;
  
  
  
  const profession = " I wanna be a Web Developper";


const show = (name) => {
  alert(name)
}
  return (
    <div className="App">
      <Profile name={fullName} bio={bio} profession={profession} show={show}>
      <img className="pub2" src={pic} alt='amin'/> 
      </Profile>
      
    </div>
  );
}

export default App;
