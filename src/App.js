import logo from './logo.svg';
import './App.css';
import { facebookProvider, googleProvider } from './firebase/authmethods';
import socialmedia from './container/login';


function App() {
  const handleOnClick = async(provider)=>{
      const res= await socialmedia(provider);
      console.log(res);
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    margin: "20px",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello there!</h1>
        <h3>Hostel allocation</h3>
        <p>Please sign in to continue</p>
        <button 
        onClick={()=>handleOnClick(googleProvider)}
        style={mystyle}>Login with Gmail</button>
        <button onClick={()=>handleOnClick(facebookProvider)}
        style={mystyle}>Login with facebook</button>
      </header>
    </div>
  );
}

export default App;
