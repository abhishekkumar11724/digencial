import "./App.css";
import {
    Header,
    Services,
    WhatWeDeliver,
    Products,
    LetsDiscuss,
    Footer,
} from "./containers";
import { Navbar, Carousel, HappyClients } from "./components";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />

            <Carousel />
            <Services />
            <WhatWeDeliver />
            <Products />
            <HappyClients />
            <Carousel />
            <div className="digencial__app-letsDiscuss">
                <LetsDiscuss />
            </div>
            <Footer />
        </div>
    );
}

export default App;
