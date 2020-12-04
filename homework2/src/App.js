import React, {Component} from 'react';
import AllUserComponent from "./components/Users/AllUserComponent";
import AllPostComponent from "./components/Posts/AllPostComponent";

class App extends Component {
    render() {
        return (
            <div>
                <AllPostComponent/>
                <AllUserComponent/>
            </div>
        );
    }
}

export default App;