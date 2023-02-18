import logo from './logo.svg';
import './App.css';
import {Header, Services, WhatWeDeliver, Products, LetsDiscuss, Footer} from './containers';
import { Navbar, Carousel, HappyClients } from './components';
function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Header />
      </div>
        <Carousel/>
        <Services />
        <WhatWeDeliver/>
        <Products />
        <HappyClients />
        <Carousel />
        <LetsDiscuss />
        <Footer /> 
    </div>
  );
}

export default App;
