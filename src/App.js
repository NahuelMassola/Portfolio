import './App.css';
import NavBar from './Components/NavBar/NavBar';
import RouterApp from './RouterApp';
import { BrowserRouter } from 'react-router-dom';
import video from "../src/assets/videos/Ink.mp4";


function App() {
  return (
    <> 
      <div className="container-fluid">
			  <video autoPlay loop muted>
		      <source src={video} type='video/mp4' />
		    </video>
	  	</div>
      <BrowserRouter>	
        <NavBar />
        <RouterApp />
      </BrowserRouter>    
    </>
  );
}

export default App;

