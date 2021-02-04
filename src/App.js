import './App.css';
import React, {Component} from "react";
import AppContainer from "./container/AppContainer";
import "bootstrap/dist/css/bootstrap.min.css"
import BackgroundSlider from "react-background-slider";
import img1 from './images/bg01.jpg'
import img2 from './images/bg02.jpg'
import img3 from './images/bg03.jpg'
import img4 from './images/bg04.jpg'
import img5 from './images/bg05.jpg'
import img6 from './images/bg06.jpg'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <BackgroundSlider
                    images={[img1, img2, img3, img4, img5, img6]}
                    duration={5}
                    transition={1}
                />
                <div className='container-fluid'>
                    <AppContainer/>
                </div>
            </div>
        )
    }
}

export default App;
