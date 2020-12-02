import React, {Component} from 'react';
import CarComponent from "./components/Car/CarComponent";
import {cars} from "./database/CarsBase";

class App extends Component {
    render() {
        return (
            <div>
                {
                    cars.map((cars,index)=> {
                        let stil = index % 2 ? 'even' : 'odd';
                        return(
                            <CarComponent item = {cars} stil = {stil} key = {index}/>
                        )
                    })
                }
            </div>
        )
       }
   }

export default App;