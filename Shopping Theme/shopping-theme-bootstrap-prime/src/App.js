import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OfferTab from './components/OfferTab';
import { ScrollPanel } from 'primereact/scrollpanel';
import SideBar from "./components/SideBar";
import NavBar from './components/NavBar';
import AdTab from './components/AdTab';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <ScrollPanel style={{width: '100%', height: '648px'}} className="custom">
          <OfferTab/>
          <SideBar></SideBar>
          
          <NavBar></NavBar>
          <AdTab></AdTab>
          <br></br>
          <br></br>
          <Home></Home>
      </ScrollPanel>
    </div>
  );
}

export default App;
